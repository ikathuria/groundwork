'use client'

import { useEffect, useRef, useState } from 'react'
import GeminiLiveControl from './GeminiLiveControl'
import type { ExperimentPlan, ExperimentStep } from '@/lib/experiment-steps'
import { getStepContext } from '@/lib/experiment-steps'
import type { InteractionEvent, Mode } from './lab-scene'
import type { ToolCall } from './gemini-live'

interface StepHUDProps {
  plan: ExperimentPlan
  currentStep: number
  totalSteps: number
  labPlaced: boolean
  xrMode: boolean
  mode: Mode
  stepCompleted: boolean
  stepGateEnabled: boolean
  gateHint: string
  lastInteraction: InteractionEvent | null
  // Stations currently in the scene — handed to Gemini Live so it knows
  // which ids are valid for highlight_object / point_at.
  stations?: { id: string; label: string; kind: string }[]
  onNext: () => void
  onPrev: () => void
  onPlaceLab: () => void
  onSetMode: (mode: Mode) => void
  onToggleStepGate: (enabled: boolean) => void
  onReset: () => void
  onGeminiTool: (call: ToolCall) => unknown | Promise<unknown>
}

// The bottom sheet collapses by default to "peek" so the user can actually see
// (and touch) the 3D lab. They can pull / tap it open for full step detail.
type SheetState = 'peek' | 'open'

export default function StepHUD({
  plan,
  currentStep,
  totalSteps,
  labPlaced,
  xrMode,
  mode,
  stepCompleted,
  stepGateEnabled,
  gateHint,
  lastInteraction,
  stations,
  onNext,
  onPrev,
  onPlaceLab,
  onSetMode,
  onToggleStepGate,
  onReset,
  onGeminiTool,
}: StepHUDProps) {
  const step: ExperimentStep = plan.steps[currentStep]
  const isFirst = currentStep === 0
  const isLast = currentStep === totalSteps - 1
  const progress = ((currentStep + 1) / totalSteps) * 100
  const stepContext = getStepContext(plan, currentStep)

  // ── Sheet state ──────────────────────────────────────────────────────────
  // Default to peek so the lab is visible. User can tap the handle or the
  // step row to expand. We also auto-collapse on step change so the new step's
  // station is immediately visible.
  const [sheet, setSheet] = useState<SheetState>('peek')
  useEffect(() => {
    setSheet('peek')
  }, [currentStep])

  // Allow Gemini (or any external caller) to drive the sheet imperatively
  // via a window-level custom event — keeps the public API minimal while
  // letting the AR overlay react to voice tool calls. Detail: 'open' | 'peek'.
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<SheetState>).detail
      if (detail === 'open' || detail === 'peek') setSheet(detail)
    }
    window.addEventListener('groundwork:sheet', handler as EventListener)
    return () => window.removeEventListener('groundwork:sheet', handler as EventListener)
  }, [])

  // Touch drag on the handle: dy > 60 collapses, dy < -60 expands.
  const dragStartY = useRef<number | null>(null)
  const handleDragStart = (clientY: number) => {
    dragStartY.current = clientY
  }
  const handleDragEnd = (clientY: number) => {
    const start = dragStartY.current
    dragStartY.current = null
    if (start == null) return
    const dy = clientY - start
    if (dy > 50) setSheet('peek')
    else if (dy < -50) setSheet('open')
  }

  // ── Onboarding: shown once per session, dismisses on any tap or after 6s ─
  const [showOnboarding, setShowOnboarding] = useState(false)
  useEffect(() => {
    if (!labPlaced) return
    const KEY = 'groundwork:ar:onboarded'
    try {
      if (sessionStorage.getItem(KEY)) return
      sessionStorage.setItem(KEY, '1')
    } catch {}
    setShowOnboarding(true)
    const t = setTimeout(() => setShowOnboarding(false), 6000)
    return () => clearTimeout(t)
  }, [labPlaced])

  // ── Inline gate-hint toast (visible briefly after a blocked Next press) ──
  const [showGateHint, setShowGateHint] = useState(false)
  useEffect(() => {
    if (!gateHint) return
    setShowGateHint(true)
    const t = setTimeout(() => setShowGateHint(false), 3500)
    return () => clearTimeout(t)
  }, [gateHint])

  // Inline gesture-coach copy used in the sheet's peek subline only — no
  // floating banner over the lab.
  const guidedHint = step.gesture === 'wait'
    ? 'Review the brief, then tap Next.'
    : 'Watch the demo run automatically.'
  const interactiveHint =
    step.interactionHint ?? 'Tap a tool to use it · drag to rearrange.'
  const interactionHint = mode === 'guided' ? guidedHint : interactiveHint

  return (
    <div id="ar-overlay" className="select-none">
      {/* ── Top status row (anchored, ultra-thin, never covers the lab) ─── */}
      <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 pointer-events-none">
        <div className="glass rounded-full px-3 py-1.5 flex items-center gap-2 pointer-events-auto">
          <span className="w-1.5 h-1.5 rounded-full bg-lab-accent animate-pulse" />
          <span className="text-[10px] font-mono text-lab-accent uppercase tracking-widest">
            {xrMode ? 'AR' : 'SIM'}
          </span>
          <span className="text-[10px] font-mono text-lab-muted">·</span>
          <span className="text-[10px] font-mono text-lab-muted tabular-nums">
            {currentStep + 1}/{totalSteps}
          </span>
        </div>

        <div className="glass rounded-full px-3 py-1.5 text-[10px] font-mono text-lab-muted pointer-events-auto truncate max-w-[55%] text-right">
          {plan.domain}
        </div>
      </div>

      {/* ── Centre placement prompt (only when lab not yet placed) ──────── */}
      {!labPlaced && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {xrMode ? (
            <button
              onClick={onPlaceLab}
              className="glass-accent rounded-2xl px-8 py-5 text-center animate-slide-up pointer-events-auto"
            >
              <p className="text-lab-accent text-2xl mb-1">⌖</p>
              <p className="text-lab-text font-semibold">Tap to place lab</p>
              <p className="text-lab-muted text-xs mt-1">Point camera at a flat surface</p>
            </button>
          ) : (
            <button
              onClick={onPlaceLab}
              className="glass-accent rounded-2xl px-8 py-5 text-center animate-slide-up pointer-events-auto"
            >
              <p className="text-lab-accent text-2xl mb-1">✻</p>
              <p className="text-lab-text font-semibold">Launch Virtual Lab</p>
              <p className="text-lab-muted text-xs mt-1">3D simulation on camera feed</p>
            </button>
          )}
        </div>
      )}

      {/* ── Onboarding card (one-time, dismisses on tap or after 6s) ───── */}
      {labPlaced && showOnboarding && (
        <div className="absolute left-1/2 -translate-x-1/2 top-12 max-w-[92%] sm:max-w-md z-10 pointer-events-auto animate-slide-up">
          <button
            type="button"
            onClick={() => setShowOnboarding(false)}
            className="w-full text-left glass-accent rounded-2xl px-4 py-3 flex items-start gap-3 shadow-2xl"
          >
            <span className="text-base leading-none mt-0.5">✦</span>
            <div className="flex-1 min-w-0">
              <p className="text-lab-accent text-[10px] font-mono uppercase tracking-widest">Welcome to the lab</p>
              <p className="mt-1 text-lab-text text-[12.5px] leading-snug">
                Tap a tool to use it · drag to rearrange · hover for names · pull the bottom card up for full detail.
              </p>
            </div>
            <span
              aria-hidden
              className="text-lab-muted text-base leading-none -mt-0.5"
            >
              ×
            </span>
          </button>
        </div>
      )}

      {/* ── Gate-hint toast (auto-dismiss, top-anchored, won't cover lab) ── */}
      {labPlaced && showGateHint && gateHint && (
        <div className="absolute left-1/2 -translate-x-1/2 top-12 max-w-[92%] sm:max-w-md z-10 pointer-events-none animate-slide-up">
          <div className="glass rounded-full px-4 py-2 text-[12px] text-lab-warn text-center border border-lab-warn/40">
            {gateHint}
          </div>
        </div>
      )}

      {/* ── Right-edge dock: Reset · Mode · Mic ─────────────────────────── */}
      {/* All major controls live here, off the bench, so the centre lab is
          always tappable. Vertical column hugs the right edge above the
          peek sheet. */}
      {labPlaced && (
        <div
          className={[
            'absolute right-3 z-20 flex flex-col gap-2 pointer-events-auto transition-all duration-300',
            sheet === 'open' ? 'opacity-0 translate-x-3 pointer-events-none' : 'opacity-100',
          ].join(' ')}
          style={{ bottom: 'calc(196px + env(safe-area-inset-bottom, 0px))' }}
        >
          <DockButton
            label="Reset lab"
            onClick={onReset}
            ariaLabel="Reset lab"
            pointerTarget="reset-button"
          >
            ↺
          </DockButton>
          <DockButton
            label={mode === 'guided' ? 'Switch to interactive' : 'Switch to guided'}
            onClick={() => onSetMode(mode === 'guided' ? 'interactive' : 'guided')}
            ariaLabel="Toggle mode"
            active={mode === 'interactive'}
            pointerTarget="mode-toggle"
          >
            {mode === 'interactive' ? '◉' : '▶'}
          </DockButton>
          <DockButton
            label={stepGateEnabled ? 'Gate on' : 'Gate off'}
            onClick={() => onToggleStepGate(!stepGateEnabled)}
            ariaLabel="Toggle step gate"
            active={stepGateEnabled}
            small
            pointerTarget="gate-toggle"
          >
            {stepGateEnabled ? '🔒' : '🔓'}
          </DockButton>
        </div>
      )}

      {/* ── Left-edge floating Gemini Live dock ─────────────────────────── */}
      {/* IMPORTANT: this lives OUTSIDE the bottom sheet so collapsing the
          sheet doesn't unmount <GeminiLiveControl> (which would tear down
          the live WebSocket and stop the assistant mid-sentence). The
          card stays mounted for the entire AR session; only its visibility
          fades when the user pulls the sheet open to read details. */}
      {labPlaced && (
        <div
          data-pointer-target="lab-assistant"
          className={[
            'absolute left-3 z-20 pointer-events-auto transition-all duration-300',
            'w-[min(72vw,260px)]',
            sheet === 'open' ? 'opacity-0 -translate-x-3 pointer-events-none' : 'opacity-100',
          ].join(' ')}
          style={{ bottom: 'calc(196px + env(safe-area-inset-bottom, 0px))' }}
        >
          <div className="glass rounded-2xl border border-lab-accent/30 bg-gradient-to-br from-purple-500/10 via-lab-accent/5 to-blue-500/10 p-2.5 shadow-lg shadow-lab-accent/10">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span className="text-sm leading-none">✨</span>
              <p className="text-[9px] uppercase tracking-widest font-mono text-lab-accent">
                Lab assistant
              </p>
            </div>
            <GeminiLiveControl
              experimentTitle={plan.title}
              hypothesis={plan.hypothesis}
              currentStepText={stepContext}
              enabled={labPlaced}
              stations={stations}
              onToolCall={onGeminiTool}
            />
          </div>
        </div>
      )}

      {/* ── Bottom sheet (peek by default, expands on demand) ──────────── */}
      {labPlaced && (
        <div
          data-pointer-target="step-sheet"
          className={[
            'absolute left-0 right-0 bottom-0 z-30 pointer-events-auto',
            'transition-[transform,height] duration-300 ease-out',
          ].join(' ')}
          style={{
            paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          }}
        >
          {/* Backdrop only in expanded mode — fades the lab behind so text reads */}
          <button
            type="button"
            aria-label="Collapse panel"
            onClick={() => setSheet('peek')}
            className={[
              'fixed inset-0 -z-10 bg-lab-bg/55 backdrop-blur-sm transition-opacity duration-300',
              sheet === 'open' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none',
            ].join(' ')}
          />

          <div
            className={[
              'glass rounded-t-3xl border-t border-x border-white/10 shadow-2xl mx-1.5 sm:mx-2',
              'flex flex-col overflow-hidden',
              'transition-[max-height] duration-300 ease-out',
              sheet === 'open' ? 'max-h-[78vh]' : 'max-h-[180px]',
            ].join(' ')}
          >
            {/* ── Drag handle + step header (always visible) ───────── */}
            <div
              role="button"
              tabIndex={0}
              aria-expanded={sheet === 'open'}
              aria-label={sheet === 'open' ? 'Collapse step details' : 'Expand step details'}
              className="flex-shrink-0 px-4 pt-2 pb-3 cursor-pointer"
              onClick={() => setSheet((s) => (s === 'peek' ? 'open' : 'peek'))}
              onTouchStart={(e) => handleDragStart(e.touches[0].clientY)}
              onTouchEnd={(e) => handleDragEnd(e.changedTouches[0].clientY)}
              onPointerDown={(e) => handleDragStart(e.clientY)}
              onPointerUp={(e) => handleDragEnd(e.clientY)}
            >
              {/* Drag pill */}
              <div className="flex justify-center mb-2">
                <span className="block w-10 h-1 rounded-full bg-white/25" />
              </div>

              {/* Progress hairline */}
              <div className="h-[2px] bg-white/10 rounded-full overflow-hidden mb-2">
                <div
                  className="h-full bg-lab-accent rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-mono uppercase tracking-widest text-lab-accent flex items-center gap-2">
                    <span>Step {step.id}</span>
                    {step.isFailurePoint && (
                      <span className="inline-flex items-center gap-1 text-lab-warn">
                        <span aria-hidden>⚠</span>
                        <span className="text-[9px]">failure-point</span>
                      </span>
                    )}
                    {stepCompleted && (
                      <span className="text-lab-accent text-[10px]">✓</span>
                    )}
                  </p>
                  <h2 className="text-lab-text font-semibold text-[15px] leading-snug truncate">
                    {step.title}
                  </h2>
                  <p className="text-lab-muted text-[11.5px] leading-tight mt-0.5 truncate">
                    {sheet === 'peek' ? interactionHint : 'Tap to collapse'}
                  </p>
                </div>

                <span
                  aria-hidden
                  className={[
                    'text-lab-muted text-lg leading-none transition-transform duration-300 shrink-0',
                    sheet === 'open' ? 'rotate-180' : '',
                  ].join(' ')}
                >
                  ⌃
                </span>
              </div>
            </div>

            {/* ── Expanded body (only mounted when open, so sheet stays light) ── */}
            {/* Note: Gemini Live is intentionally NOT here — see the left-edge
                floating dock above. Mounting it inside this conditionally-
                rendered branch tears down the live session every time the
                sheet collapses. */}
            {sheet === 'open' && (
              <div className="flex-1 min-h-0 overflow-y-auto ar-scroll px-4 pb-3 flex flex-col gap-3">
                {/* Failure callout */}
                {step.isFailurePoint && (
                  <div className="rounded-xl border border-lab-warn/50 bg-lab-warn/10 px-3 py-2.5">
                    <div className="flex items-start gap-2">
                      <span className="text-lab-warn text-base leading-none mt-0.5">⚠</span>
                      <div className="min-w-0">
                        <p className="text-lab-warn font-semibold text-xs">Known failure point</p>
                        <p className="text-lab-warn/80 text-[11.5px] mt-0.5 leading-snug">{step.failureWarning}</p>
                        {step.failureFrequency && (
                          <p className="text-lab-warn/60 text-[10.5px] mt-0.5">
                            Occurs in {step.failureFrequency} of replications
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Mode segmented control */}
                <div className="flex items-center gap-1 p-0.5 rounded-xl bg-white/5 border border-white/10 self-start">
                  <SegButton active={mode === 'guided'} onClick={() => onSetMode('guided')}>
                    Guided
                  </SegButton>
                  <SegButton active={mode === 'interactive'} onClick={() => onSetMode('interactive')}>
                    Interactive
                  </SegButton>
                </div>

                {/* Instruction */}
                <p className="text-lab-text/95 text-[13.5px] leading-relaxed">{step.instruction}</p>

                {/* Station + gate row */}
                <div className="flex items-start justify-between gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
                  <div className="min-w-0">
                    <p className="text-[10.5px] uppercase tracking-widest text-lab-muted font-mono">Station</p>
                    <p className="text-lab-text text-[13px] truncate">
                      {step.focusLabel ?? formatFocus(step.focusObject)}
                    </p>
                    <p
                      className={[
                        'text-[11px] mt-1',
                        stepCompleted ? 'text-lab-accent' : 'text-lab-muted',
                      ].join(' ')}
                    >
                      {stepCompleted
                        ? '✓ Step interaction complete'
                        : mode === 'guided'
                          ? 'Animation auto-plays in guided mode'
                          : step.gesture === 'wait'
                            ? 'No physical interaction needed'
                            : 'Tap to perform · drag to rearrange'}
                    </p>
                  </div>
                  <button
                    onClick={() => onToggleStepGate(!stepGateEnabled)}
                    className={[
                      'shrink-0 px-2 py-1 rounded-lg text-[11px] font-semibold transition-colors border',
                      stepGateEnabled
                        ? 'bg-lab-accent/20 text-lab-accent border-lab-accent/40'
                        : 'bg-white/5 text-lab-muted border-white/10',
                    ].join(' ')}
                  >
                    Gate · {stepGateEnabled ? 'On' : 'Off'}
                  </button>
                </div>

                {lastInteraction && (
                  <p className="text-[11px] text-lab-muted">
                    Last action: <span className="text-lab-text">{humanizeAction(lastInteraction.action)}</span> on{' '}
                    <span className="text-lab-text">{formatFocus(lastInteraction.object)}</span>
                    {lastInteraction.detail ? ` (${lastInteraction.detail})` : ''}
                  </p>
                )}

                {/* Detailed protocol */}
                <details className="group rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2">
                  <summary className="text-[12px] text-lab-muted cursor-pointer list-none flex items-center gap-1.5">
                    <span className="group-open:rotate-90 transition-transform inline-block">▸</span>
                    Detailed protocol
                  </summary>
                  <p className="text-lab-muted text-[12px] leading-relaxed mt-2">{step.detail}</p>
                </details>

                {/* Reagents + duration meta row */}
                {(step.reagents?.length || step.duration) && (
                  <div className="flex flex-wrap items-center gap-1.5">
                    {step.reagents?.map((r) => (
                      <span
                        key={r}
                        className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-lab-muted"
                      >
                        {r}
                      </span>
                    ))}
                    {step.duration && (
                      <span className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-lab-muted flex items-center gap-1">
                        <span aria-hidden>⏱</span> {step.duration}
                      </span>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* ── Sticky nav bar — always visible (peek + open) ────── */}
            <div className="flex-shrink-0 flex gap-2 px-3 pb-3 pt-2 border-t border-white/5">
              <button
                data-pointer-target="prev-button"
                onClick={onPrev}
                disabled={isFirst}
                className="glass flex-1 min-h-[48px] rounded-xl text-[13.5px] font-semibold text-lab-muted disabled:opacity-30 hover:text-lab-text active:scale-[.98] transition"
                aria-label="Previous step"
              >
                ← Prev
              </button>
              <button
                data-pointer-target="next-button"
                onClick={onNext}
                disabled={isLast}
                className={[
                  'flex-[1.6] min-h-[48px] rounded-xl text-[13.5px] font-semibold transition-all active:scale-[.98]',
                  isLast
                    ? 'glass text-lab-muted opacity-30 cursor-not-allowed'
                    : 'bg-lab-accent text-lab-bg hover:brightness-110 shadow-lg shadow-lab-accent/20',
                ].join(' ')}
                aria-label={isLast ? 'Experiment complete' : `Next step (${currentStep + 2} of ${totalSteps})`}
              >
                {isLast
                  ? 'Complete ✓'
                  : (mode === 'interactive' && stepGateEnabled && !stepCompleted
                      ? 'Do the gesture above ↑'
                      : `Next → Step ${currentStep + 2}`)}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

// ── Helpers ────────────────────────────────────────────────────────────────

interface DockButtonProps {
  children: React.ReactNode
  onClick: () => void
  ariaLabel: string
  label: string
  active?: boolean
  small?: boolean
  pointerTarget?: string
}

function DockButton({ children, onClick, ariaLabel, label, active, small, pointerTarget }: DockButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      title={label}
      data-pointer-target={pointerTarget}
      className={[
        'group relative rounded-full transition-all active:scale-95 backdrop-blur-md',
        small ? 'w-10 h-10 text-base' : 'w-12 h-12 text-lg',
        active
          ? 'bg-lab-accent/25 border border-lab-accent/50 text-lab-accent shadow-lg shadow-lab-accent/15'
          : 'bg-lab-bg/70 border border-white/15 text-lab-text hover:border-lab-accent/40',
      ].join(' ')}
    >
      <span className="absolute inset-0 flex items-center justify-center leading-none">{children}</span>
      <span className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-2 px-2 py-1 rounded-md bg-lab-bg/85 border border-white/10 text-[10px] text-lab-muted whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
        {label}
      </span>
    </button>
  )
}

interface SegButtonProps {
  children: React.ReactNode
  onClick: () => void
  active: boolean
}

function SegButton({ children, onClick, active }: SegButtonProps) {
  return (
    <button
      onClick={onClick}
      className={[
        'px-3 py-1 rounded-lg text-[12px] font-semibold transition-all',
        active ? 'bg-lab-accent text-lab-bg shadow-sm' : 'text-lab-muted hover:text-lab-text',
      ].join(' ')}
    >
      {children}
    </button>
  )
}

function formatFocus(name: string): string {
  if (!name || name === 'none') return 'none'
  return name
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

function humanizeAction(action: InteractionEvent['action']): string {
  switch (action) {
    case 'heat':
      return 'Heated'
    case 'measure':
      return 'Measured'
    case 'mix':
      return 'Mixed'
    case 'transfer':
      return 'Transferred'
    case 'observe':
      return 'Observed'
    case 'operate':
      return 'Operated'
    default:
      return 'Tapped'
  }
}
