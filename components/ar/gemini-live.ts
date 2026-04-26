import {
  GoogleGenAI,
  Modality,
  type LiveServerMessage,
  type Session,
  type FunctionDeclaration,
  Type,
} from '@google/genai'
import { AudioPlayback, startMicCapture, type MicCapture } from '@/lib/gemini-audio'
import { captureCompositeFrame } from '@/lib/gemini-vision'

export type ToolName =
  | 'highlight_object'
  | 'point_at'
  | 'clear_pointer'
  | 'advance_step'
  | 'previous_step'
  | 'play_animation'
  | 'reset_lab'
  | 'set_mode'
  | 'toggle_step_gate'
  | 'open_panel'
  | 'close_panel'

export type ToolCall = {
  name: ToolName
  args: Record<string, unknown>
  id?: string
}

export type SessionState = 'idle' | 'connecting' | 'connected' | 'speaking' | 'listening' | 'error'

export interface GeminiLiveCallbacks {
  onState: (state: SessionState) => void
  onTranscript: (text: string, isUser: boolean) => void
  onToolCall: (call: ToolCall) => unknown | Promise<unknown>
  onError: (message: string) => void
}

export interface GeminiLiveOptions {
  systemInstruction: string
  callbacks: GeminiLiveCallbacks
}

// Stable Live model on v1alpha (2.0 family). The 2.5 native-audio previews
// require allow-listed accounts; this one works with any Gemini Developer key.
const MODEL = 'gemini-3.1-flash-live-preview'
const FRAME_INTERVAL_MS = 1000 // 1 fps video

const TOOL_DECLARATIONS: FunctionDeclaration[] = [
  {
    name: 'highlight_object',
    description:
      'Pulse a green glow on a specific lab station (by station id, e.g. "perfusion-bioreactor", "plate-reader", "dlp-printer") to direct the user\'s attention to it. The valid station ids for this experiment are listed in the system prompt. Use this for a soft "look here" cue. For an explicit deictic gesture (a literal arrow that points), use point_at instead.',
    parameters: {
      type: Type.OBJECT,
      properties: {
        object: {
          type: Type.STRING,
          description: 'Station id from the active LabSceneSpec (kebab-case).',
        },
      },
      required: ['object'],
    },
  },
  {
    name: 'point_at',
    description:
      'Draw an animated arrow on the user\'s screen pointing at a specific element, then hold it for ~6 seconds. Use this whenever you mention "this one", "that button", "the highlighted station", etc. — point first, narrate second. The target is either a kebab-case station id (any value listed under STATIONS in the system prompt) OR one of the named UI affordances: "next-button", "prev-button", "mode-toggle", "gate-toggle", "reset-button", "lab-assistant", "step-sheet". You may include a short label (≤24 chars) that renders next to the arrow as a quick caption.',
    parameters: {
      type: Type.OBJECT,
      properties: {
        target: {
          type: Type.STRING,
          description: 'Station id OR named UI affordance (see description).',
        },
        label: {
          type: Type.STRING,
          description: 'Optional short caption to render next to the arrow (≤24 chars).',
        },
      },
      required: ['target'],
    },
  },
  {
    name: 'clear_pointer',
    description: 'Hide the pointer arrow before its auto-dismiss timer fires. Use this when you\'re finished drawing the user\'s attention to that target and want a clean screen.',
    parameters: { type: Type.OBJECT, properties: {} },
  },
  {
    name: 'open_panel',
    description:
      'Pull the bottom step panel into its expanded state so the user can read the full instruction, reagents, duration, and detailed protocol. Use when the user asks "what does this say?" or "show me the details".',
    parameters: { type: Type.OBJECT, properties: {} },
  },
  {
    name: 'close_panel',
    description:
      'Collapse the bottom step panel back to its peek state so the user can see more of the lab. Useful right after you\'ve answered a question or before pointing at something behind the panel.',
    parameters: { type: Type.OBJECT, properties: {} },
  },
  {
    name: 'advance_step',
    description: 'Move the user to the next protocol step. Use when they say they are done or ready to continue.',
    parameters: { type: Type.OBJECT, properties: {} },
  },
  {
    name: 'previous_step',
    description: 'Go back to the previous step. Use if the user got confused or wants to redo.',
    parameters: { type: Type.OBJECT, properties: {} },
  },
  {
    name: 'play_animation',
    description:
      'Play a demonstration animation on the currently highlighted station. Choose one that matches the action (heat = warm/incubate, mix = vortex/wobble, transfer = pipette/seed, measure = read/quantify, observe = visualise, operate = run instrument).',
    parameters: {
      type: Type.OBJECT,
      properties: {
        animation: {
          type: Type.STRING,
          enum: ['operate', 'mix', 'heat', 'observe', 'measure', 'transfer', 'none'],
        },
      },
      required: ['animation'],
    },
  },
  {
    name: 'reset_lab',
    description: 'Reset the entire lab to its initial state. Use if the user wants to start over.',
    parameters: { type: Type.OBJECT, properties: {} },
  },
  {
    name: 'set_mode',
    description: 'Switch between guided mode (auto-demo) and interactive mode (user taps objects).',
    parameters: {
      type: Type.OBJECT,
      properties: {
        mode: { type: Type.STRING, enum: ['guided', 'interactive'] },
      },
      required: ['mode'],
    },
  },
  {
    name: 'toggle_step_gate',
    description:
      'Turn the step-completion gate on or off. When on, the user must perform the right action before advancing.',
    parameters: {
      type: Type.OBJECT,
      properties: {
        enabled: { type: Type.BOOLEAN },
      },
      required: ['enabled'],
    },
  },
]

export class GeminiLiveSession {
  private session: Session | null = null
  private mic: MicCapture | null = null
  private playback: AudioPlayback | null = null
  private frameTimer: number | null = null
  private callbacks: GeminiLiveCallbacks
  private systemInstruction: string
  private state: SessionState = 'idle'
  private currentUserTranscript = ''
  private currentModelTranscript = ''

  constructor(opts: GeminiLiveOptions) {
    this.callbacks = opts.callbacks
    this.systemInstruction = opts.systemInstruction
  }

  async connect() {
    if (this.state !== 'idle' && this.state !== 'error') return
    this.setState('connecting')

    try {
      // Try ephemeral-token mint first (preferred — keeps server key off the wire).
      // The /api/gemini-token route always responds 200; if `token` is null it
      // also returns a `reason` we can surface for diagnostics. We then fall
      // back to NEXT_PUBLIC_GEMINI_API_KEY without spamming the console for
      // known-unsupported configurations (e.g. the new AQ.* key format).
      let apiKey: string | null = null
      let mintReason: string | null = null
      try {
        const tokenRes = await fetch('/api/gemini-token', { method: 'POST' })
        if (tokenRes.ok) {
          const data = (await tokenRes.json()) as {
            token: string | null
            reason?: string
          }
          apiKey = data.token
          mintReason = data.reason ?? null
        } else {
          mintReason = `http-${tokenRes.status}`
        }
      } catch {
        mintReason = 'network-error'
      }

      if (!apiKey) {
        const fallback = process.env.NEXT_PUBLIC_GEMINI_API_KEY
        if (!fallback) {
          throw new Error(
            'No Gemini auth available — token mint failed and NEXT_PUBLIC_GEMINI_API_KEY is unset.',
          )
        }
        // Quiet log: ephemeral mint isn't available today for AQ.* keys, so
        // this is the expected path, not a misconfiguration.
        if (mintReason && mintReason !== 'aq-key-unsupported') {
          console.info(
            `[gemini-live] Using NEXT_PUBLIC_GEMINI_API_KEY (mint reason: ${mintReason})`,
          )
        }
        apiKey = fallback
      }

      // Live BidiGenerateContent for production models (incl. gemini-3.1-flash-live-preview)
      // lives on v1alpha. v1alpha is only needed for auth_tokens minting on the server.
      const ai = new GoogleGenAI({
        apiKey,
        httpOptions: { apiVersion: 'v1alpha' },
      })

      this.playback = new AudioPlayback()

      this.session = await ai.live.connect({
        model: MODEL,
        config: {
          responseModalities: [Modality.AUDIO],
          systemInstruction: this.systemInstruction,
          tools: [{ functionDeclarations: TOOL_DECLARATIONS }],
          inputAudioTranscription: {},
          outputAudioTranscription: {},
          realtimeInputConfig: {
            automaticActivityDetection: {
              disabled: false,
            },
          },
        },
        callbacks: {
          onopen: () => {
            this.setState('connected')
            void this.startMic()
            this.startVideoLoop()
          },
          onmessage: (msg) => this.handleMessage(msg),
          onerror: (e) => {
            console.error('[gemini-live] error event:', e)
            this.callbacks.onError(e.message ?? 'Connection error')
            this.setState('error')
          },
          onclose: (e) => {
            // Surface why Gemini closed the socket — code 1000 is normal,
            // anything else is usually auth/model/config rejection.
            const evt = e as CloseEvent | undefined
            const code = evt?.code
            const reason = evt?.reason || '(no reason given)'
            console.warn(`[gemini-live] WebSocket closed code=${code} reason=${reason}`)
            if (code && code !== 1000) {
              this.callbacks.onError(`Gemini closed connection (${code}): ${reason}`)
              this.setState('error')
            } else if (this.state !== 'error') {
              this.setState('idle')
            }
            this.cleanupStreams()
          },
        },
      })
    } catch (err) {
      console.error('Failed to connect Gemini Live:', err)
      this.callbacks.onError(err instanceof Error ? err.message : 'Unknown error')
      this.setState('error')
      this.cleanupStreams()
    }
  }

  disconnect() {
    this.cleanupStreams()
    if (this.session) {
      try {
        this.session.close()
      } catch {}
      this.session = null
    }
    this.setState('idle')
  }

  setMuted(muted: boolean) {
    this.mic?.setMuted(muted)
  }

  // Send a text message (lets the user type instead of speak)
  sendText(text: string) {
    if (!this.session) return
    this.session.sendClientContent({ turns: [{ role: 'user', parts: [{ text }] }] })
  }

  // Update Gemini with a fresh "current step" snapshot — called when step changes
  pushContextUpdate(text: string) {
    if (!this.session) return
    this.session.sendClientContent({
      turns: [{ role: 'user', parts: [{ text: `[CONTEXT UPDATE] ${text}` }] }],
      turnComplete: false,
    })
  }

  // ─── Internal ──────────────────────────────────────────────────────────────

  private setState(s: SessionState) {
    this.state = s
    this.callbacks.onState(s)
  }

  private async startMic() {
    try {
      this.mic = await startMicCapture((base64Pcm) => {
        // Only send while the live session is actually open
        if (!this.session) return
        if (this.state !== 'connected' && this.state !== 'listening' && this.state !== 'speaking') return
        try {
          this.session.sendRealtimeInput({
            audio: { data: base64Pcm, mimeType: 'audio/pcm;rate=16000' },
          })
        } catch {
          // socket closed mid-flight — ignore, cleanup will stop mic shortly
        }
      })
    } catch (err) {
      console.error('Mic start failed:', err)
      this.callbacks.onError('Microphone access denied')
    }
  }

  private startVideoLoop() {
    const tick = async () => {
      if (!this.session) return
      try {
        const frame = await captureCompositeFrame()
        if (frame) {
          this.session.sendRealtimeInput({
            video: { data: frame, mimeType: 'image/jpeg' },
          })
        }
      } catch (err) {
        // Ignore single-frame failures
      }
    }
    this.frameTimer = window.setInterval(tick, FRAME_INTERVAL_MS)
    void tick()
  }

  private handleMessage(msg: LiveServerMessage) {
    // Setup complete
    if (msg.setupComplete) {
      this.setState('listening')
      return
    }

    const sc = msg.serverContent
    if (sc) {
      // User said something (transcribed)
      if (sc.inputTranscription?.text) {
        this.currentUserTranscript += sc.inputTranscription.text
        this.callbacks.onTranscript(this.currentUserTranscript, true)
      }

      // Model is speaking (transcribed)
      if (sc.outputTranscription?.text) {
        this.currentModelTranscript += sc.outputTranscription.text
        this.callbacks.onTranscript(this.currentModelTranscript, false)
      }

      // Audio chunks from the model
      const parts = sc.modelTurn?.parts
      if (parts) {
        for (const part of parts) {
          const inline = part.inlineData
          if (inline?.data && inline.mimeType?.startsWith('audio/')) {
            this.playback?.enqueue(inline.data)
            if (this.state !== 'speaking') this.setState('speaking')
          }
        }
      }

      // Barge-in: user started speaking while model was talking
      if (sc.interrupted) {
        this.playback?.interrupt()
        this.currentModelTranscript = ''
      }

      if (sc.turnComplete) {
        this.currentUserTranscript = ''
        this.currentModelTranscript = ''
        this.setState('listening')
      }
    }

    // Tool calls from the model
    if (msg.toolCall?.functionCalls) {
      for (const fc of msg.toolCall.functionCalls) {
        const call: ToolCall = {
          name: fc.name as ToolName,
          args: (fc.args ?? {}) as Record<string, unknown>,
          id: fc.id,
        }
        Promise.resolve(this.callbacks.onToolCall(call))
          .then((result) => {
            if (!this.session || !fc.id) return
            this.session.sendToolResponse({
              functionResponses: [
                {
                  id: fc.id,
                  name: fc.name,
                  response: { result: result ?? 'ok' },
                },
              ],
            })
          })
          .catch((err) => {
            console.error('Tool call failed:', err)
            if (!this.session || !fc.id) return
            this.session.sendToolResponse({
              functionResponses: [
                { id: fc.id, name: fc.name, response: { error: String(err) } },
              ],
            })
          })
      }
    }
  }

  private cleanupStreams() {
    if (this.frameTimer !== null) {
      clearInterval(this.frameTimer)
      this.frameTimer = null
    }
    this.mic?.stop()
    this.mic = null
    this.playback?.close()
    this.playback = null
  }
}

// ─── System instruction builder ─────────────────────────────────────────────

export interface SystemInstructionOptions {
  experimentTitle: string
  hypothesis: string
  // Sent at session start so Gemini knows which station ids it can pass to
  // highlight_object / point_at and what each one is for. Updated via
  // pushContextUpdate as stations get rearranged or activated.
  stations?: { id: string; label: string; kind: string }[]
}

export function buildSystemInstruction(
  opts: SystemInstructionOptions | string,
  hypothesisLegacy?: string,
): string {
  // Backwards-compat: older callers pass (title, hypothesis) as positional args.
  const o: SystemInstructionOptions =
    typeof opts === 'string'
      ? { experimentTitle: opts, hypothesis: hypothesisLegacy ?? '' }
      : opts

  const stationLines =
    (o.stations ?? [])
      .map((s) => `  - ${s.id}  (${s.kind})  →  "${s.label}"`)
      .join('\n') || '  (none yet — you will be told when stations come online)'

  return `You are an AR lab assistant guiding a scientist through an experiment in real time.

You can SEE everything on the user's screen — their camera feed, the 3D virtual lab, AND the HTML overlay (step panel, dock buttons, hover labels). The frame is composited every second so visual feedback lags by ~1s.

You can HEAR them and respond with natural voice in real time.

────────────────────────────────────────────────────────────
TOOLS — show, then tell
────────────────────────────────────────────────────────────
- point_at(target, label?): Draw an animated arrow at a station OR a named
  UI affordance. **Use this whenever you say "this", "that", "here",
  "the highlighted one", or describe a button by purpose.** Point FIRST,
  narrate SECOND — the user's eyes follow the arrow while you talk.
- clear_pointer: Hide the arrow when you've moved on.
- highlight_object(object): Pulse a soft green glow on a 3D station. Good
  for ambient "look this way" cues. point_at is more explicit.
- play_animation(animation): Demonstrate a step on the currently highlighted
  station (heat / mix / transfer / measure / observe / operate / none).
- advance_step / previous_step: Move through the protocol.
- open_panel / close_panel: Pull up / collapse the bottom step sheet.
- set_mode("guided" | "interactive"): Guided auto-plays animations;
  interactive lets the user trigger them.
- toggle_step_gate(enabled): Lock/unlock the "do the gesture before
  advancing" rule.
- reset_lab: Start the experiment over.

UI AFFORDANCE TARGETS for point_at (always available):
  - "next-button"     — advances to the next step
  - "prev-button"     — goes to the previous step
  - "mode-toggle"     — guided ↔ interactive switch (right-edge dock)
  - "gate-toggle"     — locks/unlocks the do-the-gesture-to-advance rule
  - "reset-button"    — resets the whole lab
  - "lab-assistant"   — the Gemini Live card (you, basically)
  - "step-sheet"      — the bottom panel where step details live

STATIONS in this lab (use these exact ids):
${stationLines}

────────────────────────────────────────────────────────────
CURRENT EXPERIMENT
────────────────────────────────────────────────────────────
Title: ${o.experimentTitle}
Hypothesis: ${o.hypothesis}

────────────────────────────────────────────────────────────
STYLE
────────────────────────────────────────────────────────────
- Be conversational and warm, like a senior scientist mentoring a junior.
- Keep responses brief — two sentences is usually enough.
- POINT BEFORE YOU TALK. When the user asks "what's next?", call point_at on
  the relevant station or the next-button, THEN say "tap right here to ___."
- React to what's happening on screen, don't lecture.
- When they ask "what's next?" or sound ready, point at the relevant target
  and narrate the action; advance the step once they confirm or tap.
- When you see them perform an action correctly, acknowledge briefly and
  call clear_pointer.
- If a failure point is approaching, warn them BEFORE they do it, point at
  the offending station, and say what to watch for.
- Never read long protocol detail — open_panel and tell them where to look.

You start in the listening state. The user will speak first.`
}
