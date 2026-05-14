'use client'

import { useEffect, useRef } from 'react'
import { marked } from 'marked'
import type { WikiDrilldown } from '@/lib/plan-schema'

// Use GFM (default in v18) with line-break handling off
marked.use({ gfm: true, breaks: false })

interface WikiDrilldownPanelProps {
  entry: WikiDrilldown | null
  onClose: () => void
}

export default function WikiDrilldownPanel({ entry, onClose }: WikiDrilldownPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Focus trap: focus panel when it opens
  useEffect(() => {
    if (entry) panelRef.current?.focus()
  }, [entry])

  if (!entry) return null

  const bodyHtml = marked.parse(entry.body_md ?? '') as string

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-gw-bg/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={entry.title}
        className="fixed inset-y-0 right-0 z-50 w-full max-w-lg bg-white border-l border-gw-border shadow-2xl flex flex-col outline-none"
      >
        {/* Header */}
        <div className="flex items-start gap-3 px-6 py-5 border-b border-gw-border">
          <div className="flex-1 min-w-0">
            <p className="font-mono text-[10px] uppercase tracking-widest text-gw-muted mb-1">
              Wiki entry
            </p>
            <h2 className="font-display font-bold text-lg text-gw-text leading-snug">
              {entry.title}
            </h2>
            {entry.subtitle && (
              <p className="font-mono text-xs text-gw-muted mt-1">{entry.subtitle}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="shrink-0 p-1.5 rounded-lg text-gw-muted hover:text-gw-text hover:bg-gw-surface transition-colors"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          <div
            className="prose prose-sm max-w-none
              prose-headings:font-display prose-headings:text-gw-text
              prose-h1:text-base prose-h2:text-sm prose-h3:text-xs
              prose-p:text-gw-subtle prose-p:leading-relaxed
              prose-a:text-gw-accent prose-a:no-underline hover:prose-a:underline
              prose-code:text-gw-accent prose-code:bg-gw-surface prose-code:px-1 prose-code:rounded prose-code:text-xs prose-code:font-mono
              prose-strong:text-gw-text
              prose-ul:text-gw-subtle prose-ol:text-gw-subtle
              prose-li:leading-relaxed
              prose-hr:border-gw-border"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
        </div>

        {/* Footer hint */}
        <div className="px-6 py-3 border-t border-gw-border">
          <p className="font-mono text-[10px] text-gw-muted">
            Press <kbd className="px-1 py-0.5 rounded bg-gw-surface border border-gw-border">Esc</kbd> to close
          </p>
        </div>
      </div>
    </>
  )
}
