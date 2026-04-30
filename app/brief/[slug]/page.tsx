'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { readPlan, storePlan } from '@/lib/load-plan'
import type { ResearchBrief } from '@/lib/plan-schema'

const LANDSCAPE_LABEL: Record<string, string> = {
  active: 'Active field',
  emerging: 'Emerging area',
  saturated: 'Well-trodden',
}
const LANDSCAPE_COLOR: Record<string, string> = {
  active: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30',
  emerging: 'text-amber-300 bg-amber-500/10 border-amber-500/30',
  saturated: 'text-sky-300 bg-sky-500/10 border-sky-500/30',
}
const PRIORITY_LABEL: Record<number, string> = {
  1: 'Must read',
  2: 'High priority',
  3: 'Recommended',
  4: 'Optional',
  5: 'Background',
}

export default function BriefPage() {
  const params = useParams()
  const router = useRouter()
  const slug = typeof params.slug === 'string' ? decodeURIComponent(params.slug) : ''

  const [plan, setPlan] = useState<ResearchBrief | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (!slug) return
    // Try sessionStorage first (warm path from picker/pipeline)
    const cached = readPlan()
    if (cached?.topic?.slug === slug) {
      setPlan(cached)
      setLoading(false)
      return
    }
    // Fetch from API
    fetch(`/api/plans/${encodeURIComponent(slug)}`)
      .then((r) => {
        if (!r.ok) throw new Error(`Research brief not found (${r.status})`)
        return r.json() as Promise<ResearchBrief>
      })
      .then((data) => {
        storePlan(data)
        setPlan(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0f1a] flex items-center justify-center">
        <div className="text-[#64748b] font-mono text-sm">Loading research brief…</div>
      </div>
    )
  }

  if (error || !plan) {
    return (
      <div className="min-h-screen bg-[#0a0f1a] flex items-center justify-center flex-col gap-4">
        <p className="text-rose-400 text-sm">{error || 'Research brief not found'}</p>
        <button
          onClick={() => router.push('/')}
          className="text-[#00d4aa] text-sm underline-offset-4 hover:underline"
        >
          ← Back to home
        </button>
      </div>
    )
  }

  const landscape = plan.landscape?.verdict ?? 'emerging'

  return (
    <main className="min-h-screen bg-[#0a0f1a] text-white">
      {/* Top nav */}
      <nav className="sticky top-0 z-10 border-b border-white/5 bg-[#0a0f1a]/90 backdrop-blur-sm px-6 py-3 flex items-center gap-4">
        <button
          onClick={() => router.push('/')}
          className="text-[#64748b] hover:text-white text-sm transition-colors"
        >
          ← GROUNDWORK
        </button>
        <div className="flex-1 min-w-0">
          <p className="text-xs text-[#64748b] font-mono truncate">{slug}</p>
        </div>
        <a
          href={`/hypotheses/${slug}/plan/index.html`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#00d4aa] hover:underline shrink-0"
        >
          Open full brief ↗
        </a>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-16">

        {/* Hero */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-[#00d4aa] font-mono text-xs uppercase tracking-widest">
              {plan.topic?.refined?.domain ?? 'Research Brief'}
            </span>
            <span
              className={[
                'px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border',
                LANDSCAPE_COLOR[landscape] ?? 'text-[#64748b] border-white/10',
              ].join(' ')}
            >
              {LANDSCAPE_LABEL[landscape]}
            </span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold leading-snug">
            {plan.topic?.refined?.research_question ?? plan.topic?.original_question ?? slug}
          </h1>
          {plan.summary?.pull_quote && (
            <p className="text-[#64748b] text-base leading-relaxed border-l-2 border-[#00d4aa]/40 pl-4">
              {plan.summary.pull_quote}
            </p>
          )}
          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mt-2">
            <StatTile label="Sources" value={plan.summary?.total_sources ?? 0} />
            <StatTile label="Key Themes" value={plan.summary?.total_themes ?? plan.key_themes?.length ?? 0} />
            <StatTile label="Open Gaps" value={plan.summary?.total_gaps ?? plan.research_gaps?.length ?? 0} />
          </div>
        </section>

        {/* Topic breakdown */}
        {plan.topic?.refined && (
          <section className="flex flex-col gap-4">
            <SectionHeader>Topic Breakdown</SectionHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <FieldCard label="Research Question" value={plan.topic.refined.research_question} />
              <FieldCard label="Scope" value={plan.topic.refined.scope} />
              <FieldCard label="Domain" value={plan.topic.refined.domain} />
              <FieldCard label="Approach" value={plan.topic.refined.approach} />
              <FieldCard label="Context" value={plan.topic.refined.context} className="md:col-span-2" />
            </div>
          </section>
        )}

        {/* Landscape */}
        {plan.landscape && (
          <section className="flex flex-col gap-4">
            <SectionHeader>Field Landscape</SectionHeader>
            <div className="glass rounded-xl p-5 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span
                  className={[
                    'px-2.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider border',
                    LANDSCAPE_COLOR[landscape] ?? 'text-[#64748b] border-white/10',
                  ].join(' ')}
                >
                  {LANDSCAPE_LABEL[landscape]}
                </span>
              </div>
              <p className="text-[#94a3b8] text-sm leading-relaxed">{plan.landscape.summary}</p>
              {plan.landscape.key_prior_work?.length > 0 && (
                <div className="flex flex-col gap-2">
                  <p className="text-xs font-mono text-[#64748b] uppercase tracking-widest">Key prior work</p>
                  {plan.landscape.key_prior_work.map((ref, i) => (
                    <div key={i} className="text-sm text-[#94a3b8]">
                      <span className="text-white font-medium">{ref.title}</span>
                      {ref.authors && <span> · {ref.authors}</span>}
                      {ref.year && <span> ({ref.year})</span>}
                      {ref.doi && (
                        <a
                          href={`https://doi.org/${ref.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-[#00d4aa] text-xs hover:underline"
                        >
                          DOI ↗
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Key Themes */}
        {plan.key_themes?.length > 0 && (
          <section className="flex flex-col gap-4">
            <SectionHeader>Key Themes</SectionHeader>
            <div className="flex flex-col gap-3">
              {plan.key_themes.map((t, i) => (
                <div key={i} className="glass rounded-xl p-5 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#00d4aa]/20 text-[#00d4aa] text-xs font-mono flex items-center justify-center shrink-0">
                      {i + 1}
                    </span>
                    <h3 className="text-white font-semibold text-sm">{t.theme}</h3>
                  </div>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{t.description}</p>
                  {t.evidence_summary && (
                    <p className="text-[#64748b] text-xs leading-relaxed border-t border-white/5 pt-3">
                      {t.evidence_summary}
                    </p>
                  )}
                  {t.source_citations?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {t.source_citations.map((c, j) => (
                        <span
                          key={j}
                          className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-[#64748b] font-mono"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Research Gaps */}
        {plan.research_gaps?.length > 0 && (
          <section className="flex flex-col gap-4">
            <SectionHeader>Research Gaps</SectionHeader>
            <div className="flex flex-col gap-3">
              {plan.research_gaps.map((g, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5 flex flex-col gap-3 border border-dashed border-amber-500/30 bg-amber-500/5"
                >
                  <h3 className="text-amber-200 font-semibold text-sm">{g.gap}</h3>
                  <p className="text-[#94a3b8] text-sm leading-relaxed">{g.explanation}</p>
                  {g.open_questions?.length > 0 && (
                    <div className="flex flex-col gap-1">
                      <p className="text-xs font-mono text-[#64748b] uppercase tracking-widest">Open questions</p>
                      <ul className="list-disc list-inside text-xs text-[#94a3b8] space-y-1">
                        {g.open_questions.map((q, j) => <li key={j}>{q}</li>)}
                      </ul>
                    </div>
                  )}
                  {g.potential_directions?.length > 0 && (
                    <div className="flex flex-col gap-1">
                      <p className="text-xs font-mono text-[#64748b] uppercase tracking-widest">Potential directions</p>
                      <ul className="list-disc list-inside text-xs text-[#94a3b8] space-y-1">
                        {g.potential_directions.map((d, j) => <li key={j}>{d}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Methodology Overview */}
        {plan.methodology_overview?.length > 0 && (
          <section className="flex flex-col gap-4">
            <SectionHeader>Methodology Landscape</SectionHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {plan.methodology_overview.map((m, i) => (
                <div key={i} className="glass rounded-xl p-4 flex flex-col gap-2">
                  <h3 className="text-white font-semibold text-sm">{m.method}</h3>
                  <p className="text-[#94a3b8] text-xs leading-relaxed">{m.description}</p>
                  {m.strengths?.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {m.strengths.map((s, j) => (
                        <span key={j} className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                  {m.limitations?.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {m.limitations.map((l, j) => (
                        <span key={j} className="text-[10px] px-1.5 py-0.5 rounded bg-rose-500/10 text-rose-400 border border-rose-500/20">
                          {l}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Reading List */}
        {plan.reading_list?.length > 0 && (
          <section className="flex flex-col gap-4">
            <SectionHeader>Reading List</SectionHeader>
            {/* Priority 1-2: featured */}
            {plan.reading_list.filter((r) => r.priority <= 2).length > 0 && (
              <div className="flex flex-col gap-3">
                <p className="text-xs font-mono text-[#64748b] uppercase tracking-widest">Must read</p>
                {plan.reading_list
                  .filter((r) => r.priority <= 2)
                  .sort((a, b) => a.priority - b.priority)
                  .map((r, i) => (
                    <div key={i} className="glass rounded-xl p-5 flex flex-col gap-2 border-[#00d4aa]/20">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-white font-semibold text-sm leading-snug">{r.title}</h3>
                        <span className="shrink-0 text-[10px] px-2 py-0.5 rounded-full border border-[#00d4aa]/30 text-[#00d4aa] font-mono">
                          {PRIORITY_LABEL[r.priority]}
                        </span>
                      </div>
                      {r.authors && <p className="text-xs text-[#64748b]">{r.authors}{r.year ? ` (${r.year})` : ''}</p>}
                      {r.why_relevant && (
                        <p className="text-[#94a3b8] text-sm leading-relaxed">{r.why_relevant}</p>
                      )}
                      {r.doi && (
                        <a
                          href={`https://doi.org/${r.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#00d4aa] text-xs hover:underline w-fit"
                        >
                          DOI ↗
                        </a>
                      )}
                    </div>
                  ))}
              </div>
            )}
            {/* Priority 3-5: compact list */}
            {plan.reading_list.filter((r) => r.priority > 2).length > 0 && (
              <div className="flex flex-col gap-2">
                <p className="text-xs font-mono text-[#64748b] uppercase tracking-widest">Additional reading</p>
                {plan.reading_list
                  .filter((r) => r.priority > 2)
                  .sort((a, b) => a.priority - b.priority)
                  .map((r, i) => (
                    <div key={i} className="flex items-start gap-3 py-2 border-b border-white/5">
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm">{r.title}</p>
                        {r.authors && <p className="text-xs text-[#64748b] mt-0.5">{r.authors}{r.year ? ` (${r.year})` : ''}</p>}
                      </div>
                      {r.doi && (
                        <a
                          href={`https://doi.org/${r.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#00d4aa] text-xs hover:underline shrink-0"
                        >
                          DOI ↗
                        </a>
                      )}
                    </div>
                  ))}
              </div>
            )}
          </section>
        )}

        {/* Sources */}
        {(plan.sources?.length ?? 0) > 0 && (
          <section className="flex flex-col gap-4">
            <SectionHeader>All Sources</SectionHeader>
            <div className="flex flex-col gap-1.5">
              {(plan.sources ?? []).map((s, i) => (
                <div key={i} className="flex items-start gap-3 py-2.5 border-b border-white/5">
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[#64748b] shrink-0 mt-0.5">
                    {s.tag}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm">{s.title}</p>
                    {s.authors && <p className="text-xs text-[#64748b] mt-0.5">{s.authors}{s.year ? ` (${s.year})` : ''}</p>}
                  </div>
                  {s.doi && (
                    <a
                      href={`https://doi.org/${s.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#00d4aa] text-xs hover:underline shrink-0"
                    >
                      ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="h-8" />
      </div>
    </main>
  )
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[#00d4aa] font-mono text-xs uppercase tracking-widest">
      {children}
    </h2>
  )
}

function StatTile({ label, value }: { label: string; value: number }) {
  return (
    <div className="glass rounded-xl p-4 flex flex-col gap-1 text-center">
      <span className="text-2xl font-bold text-white">{value}</span>
      <span className="text-xs text-[#64748b]">{label}</span>
    </div>
  )
}

function FieldCard({
  label,
  value,
  className = '',
}: {
  label: string
  value: string
  className?: string
}) {
  return (
    <div className={`glass rounded-xl p-4 flex flex-col gap-1 ${className}`}>
      <span className="text-[10px] font-mono text-[#64748b] uppercase tracking-widest">{label}</span>
      <span className="text-white text-sm leading-relaxed">{value}</span>
    </div>
  )
}
