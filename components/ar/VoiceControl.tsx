'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

interface VoiceControlProps {
  stepContext: string
  onTranscript?: (text: string) => void
}

type VoiceState = 'idle' | 'listening' | 'thinking' | 'speaking'

// Web Speech API types (not in TS lib by default)
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList
}
interface SpeechRecognitionResultList {
  [index: number]: SpeechRecognitionResult
  length: number
}
interface SpeechRecognitionResult {
  [index: number]: SpeechRecognitionAlternative
  isFinal: boolean
}
interface SpeechRecognitionAlternative {
  transcript: string
  confidence: number
}
interface ISpeechRecognition extends EventTarget {
  continuous: boolean
  interimResults: boolean
  lang: string
  start(): void
  stop(): void
  onresult: ((e: SpeechRecognitionEvent) => void) | null
  onend: (() => void) | null
}
declare global {
  interface Window {
    SpeechRecognition?: new () => ISpeechRecognition
    webkitSpeechRecognition?: new () => ISpeechRecognition
  }
}

export default function VoiceControl({ stepContext, onTranscript }: VoiceControlProps) {
  const [voiceState, setVoiceState] = useState<VoiceState>('idle')
  const [transcript, setTranscript] = useState('')
  const [response, setResponse] = useState('')
  const [inputText, setInputText] = useState('')
  const [showTextInput, setShowTextInput] = useState(false)
  const [supported, setSupported] = useState(true)

  const recognitionRef = useRef<ISpeechRecognition | null>(null)
  const synthRef = useRef<SpeechSynthesis | null>(null)

  useEffect(() => {
    const SpeechRecognitionCtor =
      window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognitionCtor) {
      setSupported(false)
      return
    }
    synthRef.current = window.speechSynthesis

    const recognition = new SpeechRecognitionCtor()
    recognition.continuous = false
    recognition.interimResults = true
    recognition.lang = 'en-US'

    recognition.onresult = (e) => {
      const latest = Array.from(e.results)
        .map((r) => r[0].transcript)
        .join('')
      setTranscript(latest)
    }

    recognition.onend = () => {
      if (voiceState === 'listening') {
        // transcript is set; send it
      }
    }

    recognitionRef.current = recognition
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const sendQuery = useCallback(
    async (query: string) => {
      if (!query.trim()) return
      setVoiceState('thinking')
      setResponse('')
      onTranscript?.(query)

      try {
        const res = await fetch('/api/ar-chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query, stepContext }),
        })

        if (!res.ok) throw new Error('API error')
        if (!res.body) throw new Error('No response body')

        const reader = res.body.getReader()
        const decoder = new TextDecoder()
        let full = ''

        setVoiceState('speaking')

        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          const chunk = decoder.decode(value)
          // Parse SSE data lines
          chunk.split('\n').forEach((line) => {
            if (line.startsWith('data: ')) {
              const data = line.slice(6)
              if (data === '[DONE]') return
              try {
                const parsed = JSON.parse(data)
                const text = parsed.delta ?? parsed.text ?? ''
                full += text
                setResponse(full)
              } catch {}
            }
          })
        }

        // Speak the response
        if (synthRef.current && full) {
          synthRef.current.cancel()
          const utterance = new SpeechSynthesisUtterance(full)
          utterance.rate = 0.95
          utterance.pitch = 1
          utterance.onend = () => setVoiceState('idle')
          synthRef.current.speak(utterance)
        } else {
          setVoiceState('idle')
        }
      } catch (err) {
        console.error(err)
        setResponse('Unable to connect. Check your network.')
        setVoiceState('idle')
      }
    },
    [stepContext, onTranscript],
  )

  const startListening = useCallback(() => {
    if (!recognitionRef.current) return
    setTranscript('')
    setResponse('')
    setVoiceState('listening')
    recognitionRef.current.start()

    // Auto-stop after 8 seconds
    const timeout = setTimeout(() => {
      recognitionRef.current?.stop()
      setVoiceState('thinking')
      setTimeout(() => {
        const t = transcript || ''
        if (t) sendQuery(t)
        else setVoiceState('idle')
      }, 300)
    }, 8000)

    recognitionRef.current.onend = () => {
      clearTimeout(timeout)
      const t = transcript
      if (voiceState === 'listening' && t) {
        sendQuery(t)
      } else {
        setVoiceState('idle')
      }
    }
  }, [transcript, voiceState, sendQuery])

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop()
  }, [])

  const handleTextSubmit = useCallback(() => {
    if (!inputText.trim()) return
    setTranscript(inputText)
    sendQuery(inputText)
    setInputText('')
    setShowTextInput(false)
  }, [inputText, sendQuery])

  const stopSpeaking = useCallback(() => {
    synthRef.current?.cancel()
    setVoiceState('idle')
  }, [])

  return (
    <div className="flex flex-col gap-2">
      {/* Response panel */}
      {(response || voiceState === 'thinking') && (
        <div className="glass rounded-xl p-3 max-h-32 overflow-y-auto animate-slide-up">
          {voiceState === 'thinking' && !response ? (
            <div className="flex items-center gap-2 text-lab-muted text-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-lab-accent animate-pulse" />
              Analysing step…
            </div>
          ) : (
            <p className="text-sm text-lab-text leading-relaxed">{response}</p>
          )}
        </div>
      )}

      {/* Transcript */}
      {transcript && voiceState !== 'idle' && (
        <div className="text-xs text-lab-muted italic px-1">
          &ldquo;{transcript}&rdquo;
        </div>
      )}

      {/* Text input */}
      {showTextInput && (
        <div className="flex gap-2 animate-slide-up">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleTextSubmit()}
            placeholder="Ask about this step…"
            className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-lab-accent"
            autoFocus
          />
          <button
            onClick={handleTextSubmit}
            className="px-3 py-2 bg-lab-accent text-lab-bg rounded-lg text-sm font-semibold"
          >
            Ask
          </button>
        </div>
      )}

      {/* Controls row */}
      <div className="flex gap-2 justify-center">
        {/* Text toggle */}
        <button
          onClick={() => setShowTextInput((v) => !v)}
          className="glass px-3 py-2 rounded-lg text-xs text-lab-muted hover:text-lab-text transition-colors"
          title="Type a question"
        >
          ⌨
        </button>

        {/* Mic button */}
        {supported && (
          <button
            onClick={
              voiceState === 'listening'
                ? stopListening
                : voiceState === 'speaking'
                ? stopSpeaking
                : startListening
            }
            disabled={voiceState === 'thinking'}
            className={[
              'relative flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all',
              voiceState === 'listening'
                ? 'bg-red-500 text-white'
                : voiceState === 'speaking'
                ? 'bg-lab-accent text-lab-bg'
                : voiceState === 'thinking'
                ? 'glass text-lab-muted cursor-wait'
                : 'glass text-lab-text hover:border-lab-accent/50',
            ].join(' ')}
          >
            {voiceState === 'listening' && (
              <span className="absolute inset-0 rounded-xl border-2 border-red-400 animate-ping opacity-60" />
            )}
            <span className="text-base">
              {voiceState === 'listening' ? '⏹' : voiceState === 'speaking' ? '⏸' : '🎤'}
            </span>
            <span>
              {voiceState === 'listening'
                ? 'Stop'
                : voiceState === 'speaking'
                ? 'Pause'
                : voiceState === 'thinking'
                ? 'Thinking…'
                : 'Ask about this step'}
            </span>
          </button>
        )}

        {!supported && (
          <p className="text-xs text-lab-muted px-2">
            Voice not supported — use text input
          </p>
        )}
      </div>
    </div>
  )
}
