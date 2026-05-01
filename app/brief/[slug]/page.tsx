'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { readPlan, storePlan } from '@/lib/load-plan'
import type { ResearchBrief } from '@/lib/plan-schema'

const LANDSCAPE_LABEL: Record<string, string> = {
  active:    'Active field',
  emerging:  'Emerging area',
  saturated: 'Well-trodden',
}
const LANDSCAPE_COLOR: Record<string, string> = {
  active:    'text-surveyor-accent bg-surveyor-accent-lt border-surveyor-accent/30',
  emerging:  'text-amber-700 bg-amber-50 border-amber-300',
  saturated: 'text-sky-700 bg-sky-50 border-sky-300',
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
    const cached = readPlan()
    if (cached?.topic?.slug === slug) {
      setPlan(cached)
      setLoading(false)
      return
    }
    fetch(`/api/plans/${encodeURIComponent(slug)}`)
      .then((r) => {
        if (!r.ok) throw new Error(`Survey not found (${r.status})`)
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
      <div className="min-h-screen bg-surveyor-bg flex items-center justify-center">
        <p className="font-mono text-sm text-surveyor-muted">Loading survey…</p>
      </div>
    )
  }

  if (error || !plan) {
    return (
      <div className="min-h-screen bg-surveyor-bg flex items-center justify-center flex-col gap-4">
        <p className="text-surveyor-warn text-sm font-body">{error || 'Survey not found'}</p>
        <button
          onClick={() => router.push('/')}
          className="text-surveyor-accent text-sm hover:underline underline-offset-4"
        >
          ← Back to Groundwork
        </button>
      </div>
    )
  }

  const landscape = plan.landscape?.verdict ?? 'emerging'

  return (
    <main className="min-h-screen bg-surveyor-bg text-surveyor-text">

      {/* Sticky nav */}
      <nav className="sticky top-0 z-10 border-b border-surveyor-border bg-surveyor-bg/95 backdrop-blur-sm px-6 py-3 flex items-center gap-4">
        <button
          onClick={() => router.push('/')}
          className="font-mono text-xs text-surveyor-muted hover:text-surveyor-accent transition-colors"
        >
          ← Groundwork
        </button>
        <div className="flex-1 min-w-0">
          <p className="font-mono text-[10px] text-surveyor-muted/60 truncate">{slug}</p>
        </div>
        <a
          href={`/hypotheses/${slug}/plan/index.html`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-surveyor-accent hover:underline underline-offset-4 shrink-0"
        >
          Full brief ↗
        </a>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-14 flex flex-col gap-16">

        {/* ── Hero ── */}
        <section className="flex flex-col gap-5">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-mono text-xs uppercase tracking-widest text-surveyor-muted">
              {plan.topic?.refined?.domain ?? 'Research Survey'}
            </span>
            <span className={[
              'px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border',
              LANDSCAPE_COLOR[landscape] ?? 'text-surveyor-muted border-surveyor-border',
            ].join(' ')}>
              {LANDSCAPE_LABEL[landscape]}
            </span>
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold leading-snug text-surveyor-text">
            {plan.topic?.refined?.research_question ?? plan.topic?.original_question ?? slug}
          </h1>

          {plan.summary?.pull_quote && (
            <p className="font-body text-base text-surveyor-subtle leading-relaxed border-l-2 border-surveyor-accent pl-4">
              {plan.summary.pull_quote}
            </p>
          )}

          <div className="grid grid-cols-3 gap-3 mt-1">
            <StatTile label="Sources" value={plan.summary?.total_sources ?? 0} />
            <StatTile label="Key themes" value={plan.summary?.total_themes ?? plan.key_themes?.length ?? 0} />
            <StatTile label="Open gaps" value={plan.summary?.total_gaps ?? plan.research_gaps?.length ?? 0} />
          </div>
        </section>

        {/* ── Topic breakdown ── */}
        {plan.topic?.refined && (
          <section className="flex flex-col gap-5">
            <SectionHeader>Topic breakdown</SectionHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <FieldCard label="Research question" value={plan.topic.refined.research_question} />
              <FieldCard label="Scope" value={plan.topic.refined.scope} />
              <FieldCard label="Domain" value={plan.topic.refined.domain} />
              <FieldCard label="Approach" value={plan.topic.refined.approach} />
              <FieldCard label="Context" value={plan.topic.refined.context} className="md:col-span-2" />
            </div>
          </section>
        )}

        {/* ── Field landscape ── */}
        {plan.landscape && (
          <section className="flex flex-col gap-5">
            <SectionHeader>Field landscape</SectionHeader>
            <div className="paper-card rounded-xl p-6 flex flex-col gap-4">
              <span className={[
                'w-fit px-2.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider border',
                LANDSCAPE_COLOR[landscape] ?? 'text-surveyor-muted border-surveyor-border',
              ].join(' ')}>
                {LANDSCAPE_LABEL[landscape]}
              </span>
              <p className="font-body text-sm text-surveyor-subtle leading-relaxed">
                {plan.landscape.summary}
              </p>
              {plan.landscape.key_prior_work?.length > 0 && (
                <div className="flex flex-col gap-2 pt-2 border-t border-surveyor-border">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-surveyor-muted">
                    Key prior work
                  </p>
                  {plan.landscape.key_prior_work.map((ref, i) => (
                    <div key={i} className="font-body text-sm text-surveyor-subtle">
                      <span className="text-surveyor-text font-semibold">{ref.title}</span>
                      {ref.authors && <span> · {ref.authors}</span>}
                      {ref.year && <span> ({ref.year})</span>}
                      {ref.doi && (
                        <a
                          href={`https://doi.org/${ref.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-2 text-surveyor-accent text-xs hover:underline underline-offset-4"
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

        {/* ── Key themes ── */}
        {plan.key_themes?.length > 0 && (
          <section className="flex flex-col gap-5">
            <SectionHeader>Key themes</SectionHeader>
            <div className="flex flex-col gap-4">
              {plan.key_themes.map((t, i) => (
                <div key={i} className="paper-card rounded-xl p-6 flex flex-col gap-3">
                  <div className="flex items-start gap-4">
                    <span className="font-display text-2xl font-bold text-surveyor-accent/40 leading-none tabular-nums shrink-0 mt-0.5">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display font-semibold text-lg text-surveyor-text leading-snug">
                      {t.theme}
                    </h3>
                  </div>
                  <p className="font-body text-sm text-surveyor-subtle leading-relaxed pl-10">
                    {t.description}
                  </p>
                  {t.evidence_summary && (
                    <p className="font-body text-xs text-surveyor-muted leading-relaxed pl-10 pt-2 border-t border-surveyor-border">
                      {t.evidence_summary}
                    </p>
                  )}
                  {t.source_citations?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pl-10">
                      {t.source_citations.map((c, j) => (
                        <span
                          key={j}
                          className="px-2 py-0.5 rounded-full bg-surveyor-surface border border-surveyor-border text-[10px] text-surveyor-muted font-mono"
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

        {/* ── Research gaps ── */}
        {plan.research_gaps?.length > 0 && (
          <section className="flex flex-col gap-5">
            <SectionHeader>Research gaps</SectionHeader>
            <div className="flex flex-col gap-4">
              {plan.research_gaps.map((g, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6 flex flex-col gap-3 border border-surveyor-warn/25 bg-surveyor-warn-lt border-l-4 border-l-surveyor-warn"
                >
                  <h3 className="font-display font-semibold text-base text-surveyor-text">
                    {g.gap}
                  </h3>
                  <p className="font-body text-sm text-surveyor-subtle leading-relaxed">
                    {g.explanation}
                  </p>
                  {g.open_questions?.length > 0 && (
                    <div className="flex flex-col gap-1.5">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-surveyor-muted">
                        Open questions
                      </p>
                      <ul className="space-y-1">
                        {g.open_questions.map((q, j) => (
                          <li key={j} className="font-body text-xs text-surveyor-subtle flex gap-2">
                            <span className="text-surveyor-warn shrink-0">—</span>
                            {q}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {g.potential_directions?.length > 0 && (
                    <div className="flex flex-col gap-1.5">
                      <p className="font-mono text-[10px] uppercase tracking-widest text-surveyor-muted">
                        Potential directions
                      </p>
                      <ul className="space-y-1">
                        {g.potential_directions.map((d, j) => (
                          <li key={j} className="font-body text-xs text-surveyor-subtle flex gap-2">
                            <span className="text-surveyor-accent shrink-0">→</span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Methodology ── */}
        {plan.methodology_overview?.length > 0 && (
          <section className="flex flex-col gap-5">
            <SectionHeader>Methodology landscape</SectionHeader>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {plan.methodology_overview.map((m, i) => (
                <div key={i} className="paper-card rounded-xl p-5 flex flex-col gap-3">
                  <h3 className="font-display font-semibold text-base text-surveyor-text">
                    {m.method}
                  </h3>
                  <p className="font-body text-xs text-surveyor-subtle leading-relaxed">
                    {m.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {m.strengths?.map((s, j) => (
                      <span key={j} className="text-[10px] px-2 py-0.5 rounded-full bg-surveyor-accent-lt text-surveyor-accent border border-surveyor-accent/20 font-mono">
                        {s}
                      </span>
                    ))}
                    {m.limitations?.map((l, j) => (
                      <span key={j} className="text-[10px] px-2 py-0.5 rounded-full bg-surveyor-warn-lt text-surveyor-warn border border-surveyor-warn/20 font-mono">
                        {l}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Reading list ── */}
        {plan.reading_list?.length > 0 && (
          <section className="flex flex-col gap-5">
            <SectionHeader>Reading list</SectionHeader>

            {/* Priority 1–2: featured */}
            {plan.reading_list.filter((r) => r.priority <= 2).length > 0 && (
              <div className="flex flex-col gap-4">
                <p className="font-mono text-[10px] uppercase tracking-widest text-surveyor-muted">
                  Start here
                </p>
                {plan.reading_list
                  .filter((r) => r.priority <= 2)
                  .sort((a, b) => a.priority - b.priority)
                  .map((r, i) => (
                    <div key={i} className="paper-card rounded-xl p-6 flex flex-col gap-2">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display font-semibold text-base text-surveyor-text leading-snug">
                          {r.title}
                        </h3>
                        <span className="shrink-0 text-[10px] px-2 py-0.5 rounded-full border border-surveyor-accent/30 text-surveyor-accent font-mono">
                          {PRIORITY_LABEL[r.priority]}
                        </span>
                      </div>
                      {r.authors && (
                        <p className="font-mono text-xs text-surveyor-muted">
                          {r.authors}{r.year ? ` · ${r.year}` : ''}
                        </p>
                      )}
                      {r.why_relevant && (
                        <p className="font-body text-sm text-surveyor-subtle leading-relaxed">
                          {r.why_relevant}
                        </p>
                      )}
                      {r.doi && (
                        <a
                          href={`https://doi.org/${r.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-surveyor-accent hover:underline underline-offset-4 w-fit"
                        >
                          DOI ↗
                        </a>
                      )}
                    </div>
                  ))}
              </div>
            )}

            {/* Priority 3–5: compact */}
            {plan.reading_list.filter((r) => r.priority > 2).length > 0 && (
              <div className="flex flex-col gap-1">
                <p className="font-mono text-[10px] uppercase tracking-widest text-surveyor-muted mb-2">
                  Additional reading
                </p>
                {plan.reading_list
                  .filter((r) => r.priority > 2)
                  .sort((a, b) => a.priority - b.priority)
                  .map((r, i) => (
                    <div key={i} className="flex items-start gap-3 py-3 border-b border-surveyor-border">
                      <div className="flex-1 min-w-0">
                        <p className="font-body text-sm text-surveyor-text">{r.title}</p>
                        {r.authors && (
                          <p className="font-mono text-[10px] text-surveyor-muted mt-0.5">
                            {r.authors}{r.year ? ` · ${r.year}` : ''}
                          </p>
                        )}
                      </div>
                      {r.doi && (
                        <a
                          href={`https://doi.org/${r.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-surveyor-accent hover:underline underline-offset-4 shrink-0"
                        >
                          ↗
                        </a>
                      )}
                    </div>
                  ))}
              </div>
            )}
          </section>
        )}

        {/* ── All sources ── */}
        {(plan.sources?.length ?? 0) > 0 && (
          <section className="flex flex-col gap-5">
            <SectionHeader>All sources</SectionHeader>
            <div className="flex flex-col">
              {(plan.sources ?? []).map((s, i) => (
                <div key={i} className="flex items-start gap-3 py-3 border-b border-surveyor-border">
                  <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-surveyor-surface border border-surveyor-border text-surveyor-muted shrink-0 mt-0.5">
                    {s.tag}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-sm text-surveyor-text">{s.title}</p>
                    {s.authors && (
                      <p className="font-mono text-[10px] text-surveyor-muted mt-0.5">
                        {s.authors}{s.year ? ` · ${s.year}` : ''}
                      </p>
                    )}
                  </div>
                  {s.doi && (
                    <a
                      href={`https://doi.org/${s.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-surveyor-accent hover:underline underline-offset-4 shrink-0"
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
    <div className="flex items-center gap-3">
      <h2 className="font-mono text-[10px] uppercase tracking-widest text-surveyor-muted shrink-0">
        {children}
      </h2>
      <div className="flex-1 h-px bg-surveyor-border" />
    </div>
  )
}

function StatTile({ label, value }: { label: string; value: number }) {
  return (
    <div className="paper-card rounded-xl p-4 flex flex-col gap-1 text-center">
      <span className="font-display text-3xl font-bold text-surveyor-text tabular-nums">
        {value}
      </span>
      <span className="font-mono text-[10px] uppercase tracking-wider text-surveyor-muted">
        {label}
      </span>
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
    <div className={`paper-card rounded-xl p-4 flex flex-col gap-1.5 ${className}`}>
      <span className="font-mono text-[10px] uppercase tracking-widest text-surveyor-muted">
        {label}
      </span>
      <span className="font-body text-sm text-surveyor-text leading-relaxed">{value}</span>
    </div>
  )
}
