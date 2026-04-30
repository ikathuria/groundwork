'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { storePlan } from '@/lib/load-plan'
import type { ResearchBrief, PlanSummary } from '@/lib/plan-schema'

const LANDSCAPE_LABEL: Record<string, string> = {
  'active': 'Active field',
  'emerging': 'Emerging',
  'saturated': 'Well-trodden',
}

const LANDSCAPE_COLOR: Record<string, string> = {
  'active': 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30',
  'emerging': 'text-amber-300 bg-amber-500/10 border-amber-500/30',
  'saturated': 'text-sky-300 bg-sky-500/10 border-sky-500/30',
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
      if (!res.ok) throw new Error(`Failed to load research brief (${res.status})`)
      const plan = (await res.json()) as ResearchBrief
      storePlan(plan)
      router.push(`/brief/${encodeURIComponent(slug)}`)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load research brief')
      setLoadingSlug(null)
    }
  }

  if (plans === null) {
    return (
      <div className="text-[#64748b] text-sm font-mono">Loading research briefs…</div>
    )
  }

  if (plans.length === 0) {
    return (
      <div className="text-[#64748b] text-sm">
        No research briefs yet. Generate one below ↓
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      <h3 className="text-[#00d4aa] font-mono text-xs uppercase tracking-widest">
        Research briefs
      </h3>
      <div className="flex flex-col gap-2">
        {plans.map((p) => (
          <button
            key={p.slug}
            onClick={() => handleSelect(p.slug)}
            disabled={loadingSlug !== null}
            className="text-left glass rounded-xl p-4 hover:border-[#00d4aa]/40 transition-all disabled:opacity-50 group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-white font-semibold text-sm truncate">{p.title}</p>
                <div className="flex items-center gap-2 mt-1.5 text-xs text-[#64748b]">
                  <span>{p.domain}</span>
                  <span>·</span>
                  <span>{p.themes_count} theme{p.themes_count === 1 ? '' : 's'}</span>
                </div>
              </div>
              <span
                className={[
                  'shrink-0 px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border',
                  LANDSCAPE_COLOR[p.landscape] ?? 'text-[#64748b] border-white/10',
                ].join(' ')}
              >
                {LANDSCAPE_LABEL[p.landscape] ?? p.landscape}
              </span>
            </div>
            {loadingSlug === p.slug && (
              <p className="text-[#00d4aa] text-xs mt-2 font-mono">Loading…</p>
            )}
          </button>
        ))}
      </div>
      {error && <p className="text-rose-400 text-xs">{error}</p>}
    </div>
  )
}
