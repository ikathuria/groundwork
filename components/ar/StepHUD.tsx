'use client'

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
  onNext: () => void
  onPrev: () => void
  onPlaceLab: () => void
  onSetMode: (mode: Mode) => void
  onToggleStepGate: (enabled: boolean) => void
  onReset: () => void
  onGeminiTool: (call: ToolCall) => unknown | Promise<unknown>
}

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

  return (
    <div id="ar-overlay" className="flex flex-col justify-between p-4 select-none">
      {/* ── Top bar ───────────────────────────────────────────────────── */}
      <div className="flex items-center justify-between">
        <div className="glass rounded-xl px-3 py-1.5 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-lab-accent animate-pulse" />
          <span className="text-xs font-mono text-lab-accent uppercase tracking-widest">
            {xrMode ? 'AR Mode' : 'Sim Mode'}
          </span>
        </div>

        <div className="glass rounded-xl px-3 py-1.5 text-xs text-lab-muted font-mono">
          {plan.domain} · {plan.totalDuration}
        </div>
      </div>

      {/* ── Centre: placement prompt (before lab is placed) ───────────── */}
      {!labPlaced && (
        <div className="flex-1 flex items-center justify-center">
          {xrMode ? (
            <button
              onClick={onPlaceLab}
              className="glass-accent rounded-2xl px-8 py-5 text-center animate-slide-up"
            >
              <p className="text-lab-accent text-2xl mb-1">👆</p>
              <p className="text-lab-text font-semibold">Tap to place lab</p>
              <p className="text-lab-muted text-xs mt-1">Point camera at a flat surface</p>
            </button>
          ) : (
            <button
              onClick={onPlaceLab}
              className="glass-accent rounded-2xl px-8 py-5 text-center animate-slide-up"
            >
              <p className="text-lab-accent text-2xl mb-1">🔬</p>
              <p className="text-lab-text font-semibold">Launch Virtual Lab</p>
              <p className="text-lab-muted text-xs mt-1">3D simulation on camera feed</p>
            </button>
          )}
        </div>
      )}

      {/* ── Bottom panel (after lab placed) ──────────────────────────── */}
      {labPlaced && (
        <div className="flex flex-col gap-3 animate-slide-up">
          {/* Failure point warning */}
          {step.isFailurePoint && (
            <div className="rounded-xl border-2 border-lab-warn bg-lab-warn/10 px-4 py-3 animate-warn-flash">
              <div className="flex items-start gap-2">
                <span className="text-lab-warn text-lg leading-none mt-0.5">⚠</span>
                <div>
                  <p className="text-lab-warn font-semibold text-sm">Known Failure Point</p>
                  <p className="text-lab-warn/80 text-xs mt-0.5">{step.failureWarning}</p>
                  {step.failureFrequency && (
                    <p className="text-lab-warn/60 text-xs">
                      Occurs in {step.failureFrequency} of replications
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step card */}
          <div className="glass rounded-2xl p-4 flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex gap-1">
                <button
                  onClick={() => onSetMode('guided')}
                  className={[
                    'px-2.5 py-1 rounded-lg text-xs font-semibold transition-all',
                    mode === 'guided'
                      ? 'bg-lab-accent text-lab-bg'
                      : 'glass text-lab-muted hover:text-lab-text',
                  ].join(' ')}
                >
                  Guided
                </button>
                <button
                  onClick={() => onSetMode('interactive')}
                  className={[
                    'px-2.5 py-1 rounded-lg text-xs font-semibold transition-all',
                    mode === 'interactive'
                      ? 'bg-lab-accent text-lab-bg'
                      : 'glass text-lab-muted hover:text-lab-text',
                  ].join(' ')}
                >
                  Interactive
                </button>
              </div>
              <button
                onClick={onReset}
                className="glass px-2.5 py-1 rounded-lg text-xs text-lab-muted hover:text-lab-text transition-colors"
              >
                Reset Lab
              </button>
            </div>

            {/* Progress */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-lab-accent rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs text-lab-muted font-mono whitespace-nowrap">
                {currentStep + 1} / {totalSteps}
              </span>
            </div>

            {/* Step title */}
            <div>
              <p className="text-lab-accent text-xs font-mono uppercase tracking-widest mb-0.5">
                Step {step.id}
              </p>
              <h2 className="text-lab-text font-semibold text-base leading-snug">
                {step.title}
              </h2>
            </div>

            {/* Instruction */}
            <p className="text-lab-text/90 text-sm leading-relaxed">{step.instruction}</p>

            <div className="flex items-start justify-between gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              <div>
                <p className="text-xs text-lab-muted">
                  Interaction target: <span className="text-lab-text">{formatFocus(step.focusObject)}</span>
                </p>
                <p
                  className={[
                    'text-xs mt-0.5',
                    stepCompleted ? 'text-lab-accent' : 'text-lab-muted',
                  ].join(' ')}
                >
                  {stepCompleted ? 'Step interaction complete' : 'Tap object to perform this step'}
                </p>
              </div>
              <button
                onClick={() => onToggleStepGate(!stepGateEnabled)}
                className={[
                  'px-2 py-1 rounded-md text-[11px] font-semibold transition-colors',
                  stepGateEnabled
                    ? 'bg-lab-accent/20 text-lab-accent border border-lab-accent/30'
                    : 'glass text-lab-muted',
                ].join(' ')}
              >
                Gate: {stepGateEnabled ? 'On' : 'Off'}
              </button>
            </div>

            {gateHint && <p className="text-xs text-lab-warn">{gateHint}</p>}

            {lastInteraction && (
              <p className="text-xs text-lab-muted">
                Last action: {humanizeAction(lastInteraction.action)} on{' '}
                <span className="text-lab-text">{formatFocus(lastInteraction.object)}</span>
                {lastInteraction.detail ? ` (${lastInteraction.detail})` : ''}
              </p>
            )}

            {/* Detail (collapsed by default on small screens) */}
            <details className="group">
              <summary className="text-xs text-lab-muted cursor-pointer list-none flex items-center gap-1">
                <span className="group-open:rotate-90 transition-transform inline-block">▶</span>
                Detailed protocol
              </summary>
              <p className="text-lab-muted text-xs leading-relaxed mt-2">{step.detail}</p>
            </details>

            {/* Reagents */}
            {step.reagents && step.reagents.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {step.reagents.map((r) => (
                  <span
                    key={r}
                    className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs text-lab-muted"
                  >
                    {r}
                  </span>
                ))}
              </div>
            )}

            {/* Duration */}
            {step.duration && (
              <p className="text-xs text-lab-muted flex items-center gap-1">
                <span>⏱</span> {step.duration}
              </p>
            )}
          </div>

          {/* Navigation */}
          <div className="flex gap-2">
            <button
              onClick={onPrev}
              disabled={isFirst}
              className="glass flex-1 py-3 rounded-xl text-sm font-semibold text-lab-muted disabled:opacity-30 hover:text-lab-text transition-colors"
            >
              ← Prev
            </button>
            <button
              onClick={onNext}
              disabled={isLast}
              className={[
                'flex-1 py-3 rounded-xl text-sm font-semibold transition-all',
                isLast
                  ? 'glass text-lab-muted opacity-30 cursor-not-allowed'
                  : 'bg-lab-accent text-lab-bg hover:brightness-110',
              ].join(' ')}
            >
              {isLast ? 'Complete ✓' : 'Next →'}
            </button>
          </div>

          {/* Gemini Live: real-time voice + vision lab assistant */}
          <GeminiLiveControl
            experimentTitle={plan.title}
            hypothesis={plan.hypothesis}
            currentStepText={stepContext}
            enabled={labPlaced}
            onToolCall={onGeminiTool}
          />
        </div>
      )}
    </div>
  )
}

function formatFocus(name: string): string {
  return name.replace(/\d+/g, (m) => ` ${m}`).replace(/-/g, ' ')
}

function humanizeAction(action: InteractionEvent['action']): string {
  switch (action) {
    case 'pickup-pipette':
      return 'Picked up pipette'
    case 'fill-pipette':
      return 'Filled pipette'
    case 'dispense':
      return 'Dispensed sample'
    case 'toggle-heat':
      return 'Toggled heat'
    case 'observe':
      return 'Observed response'
    default:
      return 'Tapped'
  }
}
