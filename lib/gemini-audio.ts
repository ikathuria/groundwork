// ─── PCM <-> base64 helpers ─────────────────────────────────────────────────

export function floatTo16BitPCM(input: Float32Array): Int16Array {
  const out = new Int16Array(input.length)
  for (let i = 0; i < input.length; i++) {
    const s = Math.max(-1, Math.min(1, input[i]))
    out[i] = s < 0 ? s * 0x8000 : s * 0x7fff
  }
  return out
}

export function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer)
  let binary = ''
  for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i])
  return btoa(binary)
}

export function base64ToArrayBuffer(base64: string): ArrayBuffer {
  const binary = atob(base64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  return bytes.buffer
}

// ─── Mic capture (16kHz mono PCM16) ─────────────────────────────────────────

export interface MicCapture {
  stop(): void
  setMuted(muted: boolean): void
}

export async function startMicCapture(
  onChunk: (base64Pcm: string) => void,
): Promise<MicCapture> {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: {
      channelCount: 1,
      echoCancellation: true,
      noiseSuppression: true,
      autoGainControl: true,
    },
  })

  const audioContext = new AudioContext({ sampleRate: 16000 })
  const source = audioContext.createMediaStreamSource(stream)

  // ScriptProcessorNode is deprecated but works in all browsers and is
  // fine for a 16kHz mono stream. AudioWorklet would need a separate file.
  const bufferSize = 4096
  const processor = audioContext.createScriptProcessor(bufferSize, 1, 1)

  let muted = false

  processor.onaudioprocess = (e) => {
    if (muted) return
    const float32 = e.inputBuffer.getChannelData(0)
    const pcm16 = floatTo16BitPCM(float32)
    const base64 = arrayBufferToBase64(pcm16.buffer as ArrayBuffer)
    onChunk(base64)
  }

  source.connect(processor)
  // Connect to a muted gain node to satisfy the audio graph
  const muteSink = audioContext.createGain()
  muteSink.gain.value = 0
  processor.connect(muteSink)
  muteSink.connect(audioContext.destination)

  return {
    setMuted(v: boolean) {
      muted = v
    },
    stop() {
      processor.disconnect()
      source.disconnect()
      muteSink.disconnect()
      stream.getTracks().forEach((t) => t.stop())
      audioContext.close()
    },
  }
}

// ─── Audio playback queue (24kHz PCM16 in) ──────────────────────────────────

export class AudioPlayback {
  private ctx: AudioContext
  private nextStartTime = 0
  private activeSources: AudioBufferSourceNode[] = []

  constructor() {
    this.ctx = new AudioContext({ sampleRate: 24000 })
  }

  enqueue(base64Pcm: string) {
    const buffer = base64ToArrayBuffer(base64Pcm)
    const int16 = new Int16Array(buffer)
    const float32 = new Float32Array(int16.length)
    for (let i = 0; i < int16.length; i++) float32[i] = int16[i] / 32768

    const audioBuffer = this.ctx.createBuffer(1, float32.length, 24000)
    audioBuffer.getChannelData(0).set(float32)

    const src = this.ctx.createBufferSource()
    src.buffer = audioBuffer
    src.connect(this.ctx.destination)

    const now = this.ctx.currentTime
    const startTime = Math.max(now, this.nextStartTime)
    src.start(startTime)
    this.nextStartTime = startTime + audioBuffer.duration

    this.activeSources.push(src)
    src.onended = () => {
      this.activeSources = this.activeSources.filter((s) => s !== src)
    }
  }

  // Stop all queued playback (used on barge-in / interruption)
  interrupt() {
    this.activeSources.forEach((s) => {
      try {
        s.stop()
      } catch {}
    })
    this.activeSources = []
    this.nextStartTime = this.ctx.currentTime
  }

  isPlaying(): boolean {
    return this.activeSources.length > 0
  }

  close() {
    this.interrupt()
    this.ctx.close()
  }
}
