'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { storePlan } from '@/lib/load-plan'
import type { LabBriefPlan } from '@/lib/plan-schema'

interface ResearchProgressProps {
  hypothesis: string
  onCancel: () => void
}

type Stage = 'pass-1' | 'pass-2' | 'pass-3' | 'done' | 'error'

interface StageState {
  status: 'idle' | 'running' | 'done' | 'error'
  message: string
}

const STAGE_LABELS: Record<Exclude<Stage, 'done' | 'error'>, string> = {
  'pass-1': 'Pass 1 — Deep Research',
  'pass-2': 'Pass 2 — Wiki Compile',
  'pass-3': 'Pass 3 — Lab Brief',
}

export default function ResearchProgress({
  hypothesis,
  onCancel,
}: ResearchProgressProps) {
  const router = useRouter()
  const [stages, setStages] = useState<Record<string, StageState>>({
    'pass-1': { status: 'idle', message: 'Queued' },
    'pass-2': { status: 'idle', message: 'Queued' },
    'pass-3': { status: 'idle', message: 'Queued' },
  })
  const [logLines, setLogLines] = useState<string[]>([])
  const [error, setError] = useState('')
  const [navigating, setNavigating] = useState(false)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    abortRef.current = controller

    fetch('/api/research-pipeline', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ hypothesis }),
      signal: controller.signal,
    })
      .then(async (res) => {
        if (!res.ok || !res.body) {
          throw new Error(`Pipeline failed (${res.status})`)
        }

        const reader = res.body.getReader()
        const decoder = new TextDecoder()
        let buf = ''

        while (true) {
          const { value, done } = await reader.read()
          if (done) break
          buf += decoder.decode(value, { stream: true })

          // Parse SSE events: chunks separated by blank line
          let idx
          while ((idx = buf.indexOf('\n\n')) !== -1) {
            const evtBlock = buf.slice(0, idx)
            buf = buf.slice(idx + 2)
            handleEvent(evtBlock)
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
      try {
        payload = JSON.parse(data)
      } catch {}

      if (event === 'stage' && payload?.stage) {
        setStages((s) => {
          const next = { ...s }
          // Mark previous stages done
          if (payload.stage === 'pass-2' && next['pass-1'].status === 'running') {
            next['pass-1'] = { status: 'done', message: 'Sources fetched' }
          }
          if (payload.stage === 'pass-3') {
            if (next['pass-1'].status === 'running')
              next['pass-1'] = { status: 'done', message: 'Sources fetched' }
            if (next['pass-2'].status === 'running')
              next['pass-2'] = { status: 'done', message: 'Wiki compiled' }
          }
          next[payload.stage] = { status: 'running', message: payload.message ?? '' }
          return next
        })
      } else if (event === 'log' && payload?.line) {
        setLogLines((lines) => {
          const updated = [...lines, payload.line]
          // Cap to last 200 lines for memory
          return updated.length > 200 ? updated.slice(-200) : updated
        })
      } else if (event === 'error' && payload?.message) {
        setStages((s) => {
          const next = { ...s }
          if (payload.stage && next[payload.stage]) {
            next[payload.stage] = { status: 'error', message: payload.message }
          }
          return next
        })
        setError(payload.message)
      } else if (event === 'done' && payload?.slug) {
        setStages((s) => ({
          ...s,
          'pass-3': { status: 'done', message: 'Plan ready' },
        }))
        loadAndNavigate(payload.slug)
      }
    }

    async function loadAndNavigate(slug: string) {
      setNavigating(true)
      try {
        const res = await fetch(`/api/plans/${encodeURIComponent(slug)}`)
        if (!res.ok) throw new Error(`Plan not on disk (${res.status})`)
        const plan = (await res.json()) as LabBriefPlan
        storePlan(plan)
        router.push('/ar')
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load plan')
        setNavigating(false)
      }
    }

    return () => {
      controller.abort()
    }
  }, [hypothesis, router])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0f1a]/85 backdrop-blur-sm p-4">
      <div className="glass rounded-2xl p-6 max-w-2xl w-full flex flex-col gap-5 max-h-[85vh]">
        <div>
          <h2 className="text-[#00d4aa] font-mono text-xs uppercase tracking-widest mb-1">
            Researching hypothesis
          </h2>
          <p className="text-white text-sm leading-relaxed">{hypothesis}</p>
        </div>

        {/* Stage timeline */}
        <div className="flex flex-col gap-2">
          {(Object.keys(STAGE_LABELS) as Array<keyof typeof STAGE_LABELS>).map((key) => {
            const s = stages[key]
            return (
              <div
                key={key}
                className={[
                  'rounded-xl px-3 py-2.5 border flex items-center gap-3 transition-colors',
                  s.status === 'running'
                    ? 'border-[#00d4aa]/40 bg-[#00d4aa]/5'
                    : s.status === 'done'
                    ? 'border-emerald-500/30 bg-emerald-500/5'
                    : s.status === 'error'
                    ? 'border-rose-500/40 bg-rose-500/5'
                    : 'border-white/5 bg-white/[0.02]',
                ].join(' ')}
              >
                <StageIcon status={s.status} />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-semibold">{STAGE_LABELS[key]}</p>
                  <p className="text-xs text-[#64748b] truncate">{s.message}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Log tail */}
        {logLines.length > 0 && (
          <div className="rounded-xl bg-black/40 border border-white/5 p-3 max-h-40 overflow-y-auto font-mono text-[10px] text-[#64748b] leading-relaxed">
            {logLines.slice(-40).map((line, i) => (
              <div key={i} className="truncate">{line}</div>
            ))}
          </div>
        )}

        {error && (
          <div className="rounded-xl border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-xs text-rose-300">
            {error}
          </div>
        )}

        <div className="flex gap-2 justify-end">
          <button
            onClick={onCancel}
            disabled={navigating}
            className="glass px-4 py-2 rounded-lg text-sm text-[#64748b] hover:text-white transition-colors disabled:opacity-50"
          >
            {navigating ? 'Loading plan…' : 'Cancel'}
          </button>
        </div>
      </div>
    </div>
  )
}

function StageIcon({ status }: { status: StageState['status'] }) {
  if (status === 'running') {
    return (
      <span className="w-4 h-4 border-2 border-[#00d4aa] border-t-transparent rounded-full animate-spin" />
    )
  }
  if (status === 'done') return <span className="text-emerald-400">✓</span>
  if (status === 'error') return <span className="text-rose-400">✗</span>
  return <span className="w-4 h-4 rounded-full border border-white/10" />
}
