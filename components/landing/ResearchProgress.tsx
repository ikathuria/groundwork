'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { storePlan } from '@/lib/load-plan'
import type { ResearchBrief } from '@/lib/plan-schema'

interface ResearchProgressProps {
  question: string
  onCancel: () => void
}

type Stage = 'pass-1' | 'pass-2' | 'pass-3' | 'done' | 'error'

interface StageState {
  status: 'idle' | 'running' | 'done' | 'error'
  message: string
}

const STAGE_LABELS: Record<Exclude<Stage, 'done' | 'error'>, string> = {
  'pass-1': 'Pass 1 — Searching papers',
  'pass-2': 'Pass 2 — Building wiki',
  'pass-3': 'Pass 3 — Synthesising brief',
}

export default function ResearchProgress({ question, onCancel }: ResearchProgressProps) {
  const router = useRouter()
  const [stages, setStages] = useState<Record<string, StageState>>({
    'pass-1': { status: 'idle', message: 'Queued' },
    'pass-2': { status: 'idle', message: 'Queued' },
    'pass-3': { status: 'idle', message: 'Queued' },
  })
  const [error, setError] = useState('')
  const [navigating, setNavigating] = useState(false)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    abortRef.current = controller

    fetch('/api/research-pipeline', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ hypothesis: question }),
      signal: controller.signal,
    })
      .then(async (res) => {
        if (!res.ok || !res.body) throw new Error(`Pipeline failed (${res.status})`)
        const reader = res.body.getReader()
        const decoder = new TextDecoder()
        let buf = ''
        while (true) {
          const { value, done } = await reader.read()
          if (done) break
          buf += decoder.decode(value, { stream: true })
          let idx
          while ((idx = buf.indexOf('\n\n')) !== -1) {
            handleEvent(buf.slice(0, idx))
            buf = buf.slice(idx + 2)
          }
        }
      })
      .catch((err) => {
        if (err.name === 'AbortError') return
        setError(err.message ?? 'Pipeline failed')
      })

    function handleEvent(block: string) {
      let event = 'message'
      let data = ''
      for (const line of block.split('\n')) {
        if (line.startsWith('event:')) event = line.slice(6).trim()
        else if (line.startsWith('data:')) data += line.slice(5).trim()
      }
      let payload: any = null
      try { payload = JSON.parse(data) } catch {}

      if (event === 'stage' && payload?.stage) {
        setStages((s) => {
          const next = { ...s }
          if (payload.stage === 'pass-2' && next['pass-1'].status === 'running')
            next['pass-1'] = { status: 'done', message: 'Papers fetched' }
          if (payload.stage === 'pass-3') {
            if (next['pass-1'].status === 'running')
              next['pass-1'] = { status: 'done', message: 'Papers fetched' }
            if (next['pass-2'].status === 'running')
              next['pass-2'] = { status: 'done', message: 'Wiki compiled' }
          }
          next[payload.stage] = { status: 'running', message: payload.message ?? '' }
          return next
        })
      } else if (event === 'error' && payload?.message) {
        setStages((s) => {
          const next = { ...s }
          if (payload.stage && next[payload.stage])
            next[payload.stage] = { status: 'error', message: payload.message }
          return next
        })
        setError(payload.message)
      } else if (event === 'done' && payload?.slug) {
        setStages((s) => ({ ...s, 'pass-3': { status: 'done', message: 'Brief ready' } }))
        loadAndNavigate(payload.slug)
      }
    }

    async function loadAndNavigate(slug: string) {
      setNavigating(true)
      try {
        const res = await fetch(`/api/plans/${encodeURIComponent(slug)}`)
        if (!res.ok) throw new Error(`Survey not on disk (${res.status})`)
        const plan = (await res.json()) as ResearchBrief
        storePlan(plan)
        router.push(`/brief/${encodeURIComponent(slug)}`)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load survey')
        setNavigating(false)
      }
    }

    return () => { controller.abort() }
  }, [question, router])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-surveyor-bg/90 backdrop-blur-sm p-4">
      <div className="paper-card rounded-2xl p-6 max-w-2xl w-full flex flex-col gap-5 max-h-[85vh]">
        <div>
          <h2 className="font-mono text-xs uppercase tracking-widest mb-2 text-surveyor-muted">
            Surveying topic
          </h2>
          <p className="text-surveyor-text font-body text-sm leading-relaxed">{question}</p>
        </div>

        <div className="flex flex-col gap-2">
          {(Object.keys(STAGE_LABELS) as Array<keyof typeof STAGE_LABELS>).map((key) => {
            const s = stages[key]
            return (
              <div
                key={key}
                className={[
                  'rounded-xl px-3 py-2.5 border flex items-center gap-3 transition-colors',
                  s.status === 'running'
                    ? 'border-surveyor-accent/40 bg-surveyor-accent-lt'
                    : s.status === 'done'
                    ? 'border-emerald-300 bg-emerald-50'
                    : s.status === 'error'
                    ? 'border-surveyor-warn/40 bg-surveyor-warn-lt'
                    : 'border-surveyor-border bg-surveyor-surface',
                ].join(' ')}
              >
                <StageIcon status={s.status} />
                <div className="flex-1 min-w-0">
                  <p className="text-surveyor-text text-sm font-semibold font-body">{STAGE_LABELS[key]}</p>
                  <p className="text-xs text-surveyor-muted font-mono truncate">{s.message}</p>
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-[10px] font-mono text-surveyor-muted -mt-1">
          Live logs streaming to the dev-server terminal.
        </p>

        {error && (
          <div className="rounded-xl border border-surveyor-warn/40 bg-surveyor-warn-lt px-3 py-2 text-xs text-surveyor-warn font-mono">
            {error}
          </div>
        )}

        <div className="flex gap-2 justify-end">
          <button
            onClick={onCancel}
            disabled={navigating}
            className="px-4 py-2 rounded-lg text-sm text-surveyor-muted hover:text-surveyor-text border border-surveyor-border transition-colors disabled:opacity-50 font-mono"
          >
            {navigating ? 'Loading survey…' : 'Cancel'}
          </button>
        </div>
      </div>
    </div>
  )
}

function StageIcon({ status }: { status: StageState['status'] }) {
  if (status === 'running')
    return <span className="w-4 h-4 border-2 border-surveyor-accent border-t-transparent rounded-full animate-spin shrink-0" />
  if (status === 'done')
    return <span className="text-emerald-600 shrink-0">✓</span>
  if (status === 'error')
    return <span className="text-surveyor-warn shrink-0">✗</span>
  return <span className="w-4 h-4 rounded-full border border-surveyor-border shrink-0" />
}
