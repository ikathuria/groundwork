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
  | 'advance_step'
  | 'previous_step'
  | 'play_animation'
  | 'reset_lab'
  | 'set_mode'
  | 'toggle_step_gate'

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
      'Pulse a green glow on a specific lab object to direct the user\'s attention to it. Use this when explaining or pointing things out.',
    parameters: {
      type: Type.OBJECT,
      properties: {
        object: {
          type: Type.STRING,
          enum: ['beaker1', 'beaker2', 'beaker3', 'pipette', 'hotplate', 'tubes'],
          description: 'Which lab object to highlight.',
        },
      },
      required: ['object'],
    },
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
    description: 'Play a demonstration animation on the lab to show the user what to do.',
    parameters: {
      type: Type.OBJECT,
      properties: {
        animation: {
          type: Type.STRING,
          enum: ['pipette-transfer', 'heat', 'mix', 'observe', 'measure'],
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
      // Fall back to NEXT_PUBLIC_GEMINI_API_KEY if the mint endpoint fails or the
      // account doesn't have token-creation access yet.
      let apiKey: string | null = null
      try {
        const tokenRes = await fetch('/api/gemini-token', { method: 'POST' })
        if (tokenRes.ok) {
          const data = await tokenRes.json()
          apiKey = data.token
        }
      } catch {
        // network error — fall through
      }

      if (!apiKey) {
        const fallback = process.env.NEXT_PUBLIC_GEMINI_API_KEY
        if (!fallback) {
          throw new Error(
            'No Gemini auth available — token mint failed and NEXT_PUBLIC_GEMINI_API_KEY is unset.',
          )
        }
        console.warn('[gemini-live] Falling back to NEXT_PUBLIC_GEMINI_API_KEY (key visible in browser).')
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

export function buildSystemInstruction(experimentTitle: string, hypothesis: string): string {
  return `You are an AR lab assistant guiding a scientist through an experiment in real time.

You can SEE both their physical environment (their camera) and the rendered 3D virtual lab (which beaker is glowing, what's loaded in the pipette, whether the hot plate is active).

You can HEAR them and respond with natural voice in real time.

You have tools to:
- highlight_object: pulse a green glow on a lab object to draw attention
- advance_step / previous_step: move through the protocol
- play_animation: demonstrate a step
- set_mode: switch between guided (auto-demo) and interactive (user taps objects)
- toggle_step_gate: turn the "must perform action to advance" gate on or off
- reset_lab: start over

CURRENT EXPERIMENT
Title: ${experimentTitle}
Hypothesis: ${hypothesis}

STYLE
- Be conversational and warm, like a senior scientist mentoring a junior.
- Keep responses brief — they have their hands full. Two sentences is usually enough.
- React to what's happening on screen, don't lecture.
- When they ask "what's next?" or sound ready, advance the step and narrate it briefly.
- When they sound confused, highlight the relevant object before explaining.
- When you see them perform an action correctly (in the camera or the virtual lab), acknowledge it briefly.
- If you see a known failure point coming up, warn them BEFORE they do it, not after.
- Never read out long protocol details — they can read those themselves.

You start in the listening state. The user will speak first.`
}
