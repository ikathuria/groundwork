'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import {
  GeminiLiveSession,
  buildSystemInstruction,
  type SessionState,
  type ToolCall,
} from './gemini-live'

interface GeminiLiveControlProps {
  experimentTitle: string
  hypothesis: string
  currentStepText: string
  enabled: boolean
  // Optional spatial intel handed to Gemini at session start so it knows which
  // station ids it can target with highlight_object / point_at.
  stations?: { id: string; label: string; kind: string }[]
  onToolCall: (call: ToolCall) => unknown | Promise<unknown>
}

export default function GeminiLiveControl({
  experimentTitle,
  hypothesis,
  currentStepText,
  enabled,
  stations,
  onToolCall,
}: GeminiLiveControlProps) {
  const sessionRef = useRef<GeminiLiveSession | null>(null)
  const onToolCallRef = useRef(onToolCall)
  const [state, setState] = useState<SessionState>('idle')
  const [muted, setMuted] = useState(false)
  const [userText, setUserText] = useState('')
  const [modelText, setModelText] = useState('')
  const [error, setError] = useState('')
  const [textInput, setTextInput] = useState('')
  const [showTextInput, setShowTextInput] = useState(false)

  // Always call latest tool handler without re-creating session
  useEffect(() => {
    onToolCallRef.current = onToolCall
  }, [onToolCall])

  const connect = useCallback(async () => {
    if (sessionRef.current) return
    setError('')
    setUserText('')
    setModelText('')

    const session = new GeminiLiveSession({
      systemInstruction: buildSystemInstruction({
        experimentTitle,
        hypothesis,
        stations,
      }),
      callbacks: {
        onState: (s) => setState(s),
        onTranscript: (text, isUser) => {
          if (isUser) setUserText(text)
          else setModelText(text)
        },
        onToolCall: (call) => onToolCallRef.current(call),
        onError: (msg) => setError(msg),
      },
    })

    sessionRef.current = session
    await session.connect()
  }, [experimentTitle, hypothesis, stations])

  const disconnect = useCallback(() => {
    sessionRef.current?.disconnect()
    sessionRef.current = null
    setState('idle')
  }, [])

  // Push step changes as a context update so Gemini knows where the user is
  useEffect(() => {
    if (state === 'connected' || state === 'listening' || state === 'speaking') {
      sessionRef.current?.pushContextUpdate(currentStepText)
    }
  }, [currentStepText, state])

  // Disconnect on unmount
  useEffect(() => () => sessionRef.current?.disconnect(), [])

  const toggleMute = useCallback(() => {
    setMuted((m) => {
      const next = !m
      sessionRef.current?.setMuted(next)
      return next
    })
  }, [])

  const sendText = useCallback(() => {
    if (!textInput.trim() || !sessionRef.current) return
    sessionRef.current.sendText(textInput)
    setUserText(textInput)
    setTextInput('')
    setShowTextInput(false)
  }, [textInput])

  const isLive = state === 'connected' || state === 'listening' || state === 'speaking'

  return (
    <div className="flex flex-col gap-2">
      {/* Transcript panel */}
      {(modelText || userText || state === 'connecting') && (
        <div className="glass rounded-xl p-3 max-h-32 overflow-y-auto animate-slide-up">
          {state === 'connecting' && (
            <div className="flex items-center gap-2 text-lab-muted text-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-lab-accent animate-pulse" />
              Connecting to Gemini Live…
            </div>
          )}
          {userText && (
            <p className="text-xs text-lab-muted italic mb-1">
              you: &ldquo;{userText}&rdquo;
            </p>
          )}
          {modelText && (
            <p className="text-sm text-lab-text leading-relaxed">{modelText}</p>
          )}
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="glass rounded-xl px-3 py-2 text-xs text-lab-warn border border-lab-warn/40">
          {error}
        </div>
      )}

      {/* Text input */}
      {showTextInput && isLive && (
        <div className="flex gap-2 animate-slide-up">
          <input
            type="text"
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendText()}
            placeholder="Type to Gemini…"
            className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-lab-accent"
            autoFocus
          />
          <button
            onClick={sendText}
            className="px-3 py-2 bg-lab-accent text-lab-bg rounded-lg text-sm font-semibold"
          >
            Send
          </button>
        </div>
      )}

      {/* Controls */}
      <div className="flex gap-2 justify-center items-center">
        {!isLive ? (
          <button
            onClick={connect}
            disabled={!enabled || state === 'connecting'}
            className={[
              'flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all',
              enabled
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:brightness-110'
                : 'glass text-lab-muted cursor-not-allowed opacity-50',
            ].join(' ')}
          >
            <span className="text-base">✨</span>
            <span>
              {state === 'connecting' ? 'Connecting…' : 'Start Gemini Live'}
            </span>
          </button>
        ) : (
          <>
            <button
              onClick={() => setShowTextInput((v) => !v)}
              className="glass px-3 py-2.5 rounded-xl text-xs text-lab-muted hover:text-lab-text transition-colors"
              title="Type instead of speak"
            >
              ⌨
            </button>

            <button
              onClick={toggleMute}
              className={[
                'relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all',
                muted
                  ? 'bg-red-500/80 text-white'
                  : state === 'speaking'
                  ? 'bg-lab-accent text-lab-bg'
                  : state === 'listening'
                  ? 'glass text-lab-text border border-lab-accent/40'
                  : 'glass text-lab-text',
              ].join(' ')}
            >
              {state === 'listening' && !muted && (
                <span className="absolute inset-0 rounded-xl border-2 border-lab-accent animate-ping opacity-40" />
              )}
              <span className="text-base">
                {muted ? '🔇' : state === 'speaking' ? '🔊' : '🎙'}
              </span>
              <span>
                {muted
                  ? 'Muted'
                  : state === 'speaking'
                  ? 'Gemini speaking'
                  : 'Listening'}
              </span>
            </button>

            <button
              onClick={disconnect}
              className="glass px-3 py-2.5 rounded-xl text-xs text-lab-muted hover:text-lab-warn transition-colors"
              title="End live session"
            >
              ⏹
            </button>
          </>
        )}
      </div>

      {!enabled && !isLive && (
        <p className="text-xs text-lab-muted text-center">
          Place the lab to activate Gemini Live
        </p>
      )}
    </div>
  )
}
