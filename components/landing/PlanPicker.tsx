'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { storePlan } from '@/lib/load-plan'
import type { ResearchBrief, PlanSummary } from '@/lib/plan-schema'

const LANDSCAPE_LABEL: Record<string, string> = {
  active:    'Active field',
  emerging:  'Emerging',
  saturated: 'Well-trodden',
}

const LANDSCAPE_COLOR: Record<string, string> = {
  active:    'text-gw-accent bg-gw-accent-lt border-gw-accent/30',
  emerging:  'text-amber-700 bg-amber-50 border-amber-300',
  saturated: 'text-sky-700 bg-sky-50 border-sky-300',
}

export default function PlanPicker() {
  const router = useRouter()
  const [plans, setPlans] = useState<PlanSummary[] | null>(null)
  const [loadingSlug, setLoadingSlug] = useState<string | null>(null)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/plans')
      .then((r) => r.json())
      .then((data: PlanSummary[]) => setPlans(data))
      .catch(() => setPlans([]))
  }, [])

  const handleSelect = async (slug: string) => {
    setLoadingSlug(slug)
    setError('')
    try {
      const res = await fetch(`/api/plans/${encodeURIComponent(slug)}`)
      if (!res.ok) throw new Error(`Failed to load survey (${res.status})`)
      const plan = (await res.json()) as ResearchBrief
      storePlan(plan)
      router.push(`/brief/${encodeURIComponent(slug)}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load survey')
      setLoadingSlug(null)
    }
  }

  if (plans === null) {
    return <p className="font-mono text-sm text-gw-muted">Loading surveys…</p>
  }

  if (plans.length === 0) {
    return (
      <p className="text-gw-muted text-sm">
        No surveys yet. Start one below ↓
      </p>
    )
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      <h3 className="font-mono text-xs uppercase tracking-widest text-gw-muted">
        Recent surveys
      </h3>
      <div className="flex flex-col gap-2">
        {plans.map((p) => (
          <button
            key={p.slug}
            onClick={() => handleSelect(p.slug)}
            disabled={loadingSlug !== null}
            className="text-left paper-card rounded-xl p-4 hover:border-gw-accent/50 transition-all disabled:opacity-50 group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-gw-text font-body font-semibold text-sm truncate leading-snug">
                  {p.title}
                </p>
                <div className="flex items-center gap-2 mt-1.5 text-xs text-gw-muted font-mono">
                  <span>{p.domain}</span>
                  <span>·</span>
                  <span>{p.themes_count} theme{p.themes_count === 1 ? '' : 's'}</span>
                </div>
              </div>
              <span
                className={[
                  'shrink-0 px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border',
                  LANDSCAPE_COLOR[p.landscape] ?? 'text-gw-muted border-gw-border',
                ].join(' ')}
              >
                {LANDSCAPE_LABEL[p.landscape] ?? p.landscape}
              </span>
            </div>
            {loadingSlug === p.slug && (
              <p className="text-gw-accent text-xs mt-2 font-mono">Loading…</p>
            )}
          </button>
        ))}
      </div>
      {error && <p className="text-gw-warn text-xs">{error}</p>}
    </div>
  )
}
