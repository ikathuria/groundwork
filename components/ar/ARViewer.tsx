'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import StepHUD from './StepHUD'
import * as LabScene from './lab-scene'
import type { ExperimentPlan, ExperimentStep } from '@/lib/experiment-steps'
import type { ToolCall } from './gemini-live'
import { readPlan } from '@/lib/load-plan'
import { mapLabBriefToExperiment } from '@/lib/plan-to-ar'

interface ARViewerProps {
  plan: ExperimentPlan // fallback (SAMPLE_EXPERIMENT) used if no LabBrief in sessionStorage
}

type ARStatus = 'checking' | 'ready' | 'active'

export default function ARViewer({ plan: fallbackPlan }: ARViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  // Resolve which plan to use: a generated LabBrief in sessionStorage, or the
  // fallback sample. Resolved synchronously on first render via lazy initial
  // state so the rest of the component sees a stable plan from mount.
  const [planSource, setPlanSource] = useState<'generated' | 'sample'>('sample')
  const [plan, setPlan] = useState<ExperimentPlan>(() => fallbackPlan)

  useEffect(() => {
    const stored = readPlan()
    if (stored) {
      try {
        const mapped = mapLabBriefToExperiment(stored)
        setPlan(mapped)
        setPlanSource('generated')
      } catch (err) {
        console.warn('[ARViewer] Failed to map stored plan, using sample:', err)
      }
    }
  }, [])

  const [xrSupported, setXrSupported] = useState(false)
  const [status, setStatus] = useState<ARStatus>('checking')
  const [xrMode, setXrMode] = useState(false)
  const [labPlaced, setLabPlaced] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [mode, setMode] = useState<LabScene.Mode>('guided')
  const [lastInteraction, setLastInteraction] = useState<LabScene.InteractionEvent | null>(null)
  const [stepCompleted, setStepCompleted] = useState<boolean[]>([])
  const [stepGateEnabled, setStepGateEnabled] = useState(true)
  const [gateHint, setGateHint] = useState('')
  const [cameraError, setCameraError] = useState('')

  useEffect(() => {
    setStepCompleted(Array(plan.steps.length).fill(false))
    // Clamp currentStep if plan got shorter
    setCurrentStep((s) => Math.min(s, Math.max(0, plan.steps.length - 1)))
  }, [plan.steps.length])

  // ── Setup ────────────────────────────────────────────────────────────────
  useEffect(() => {
    let mounted = true

    async function setup() {
      const hasXR = !!(
        navigator.xr && (await navigator.xr.isSessionSupported('immersive-ar').catch(() => false))
      )
      if (!mounted) return
      setXrSupported(hasXR)

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: hasXR ? 'environment' : 'user', width: 1280, height: 720 },
          audio: false,
        })
        if (!mounted) {
          stream.getTracks().forEach((t) => t.stop())
          return
        }
        streamRef.current = stream
        if (videoRef.current) {
          videoRef.current.srcObject = stream
          await videoRef.current.play()
        }
      } catch {
        if (!mounted) return
        setCameraError('Camera access denied. Continuing without camera feed.')
      }

      if (canvasRef.current) {
        LabScene.initScene(canvasRef.current, () => {
          if (mounted) setLabPlaced(true)
        })
        LabScene.setInteractionListener((e) => {
          if (mounted) {
            setLastInteraction(e)
          }
        })
      }

      if (!mounted) return
      setStatus('ready')
    }

    setup()

    return () => {
      mounted = false
      LabScene.setInteractionListener(null)
      LabScene.cleanup()
      streamRef.current?.getTracks().forEach((t) => t.stop())
    }
  }, [])

  // ── Step → object highlight (guided) ─────────────────────────────────────
  useEffect(() => {
    if (!labPlaced) return
    if (mode === 'guided') {
      const step = plan.steps[currentStep]
      LabScene.highlightObject(step.focusObject)
      if (step.animation) LabScene.playAnimation(step.animation)
      // Guided mode demonstrates the step — credit it as complete so a later
      // switch to interactive mode doesn't re-gate the user on this step.
      setStepCompleted((prev) => {
        if (prev[currentStep]) return prev
        const next = [...prev]
        next[currentStep] = true
        return next
      })
    } else {
      LabScene.clearHighlight()
    }
  }, [currentStep, labPlaced, plan.steps, mode])

  // ── Mode sync ────────────────────────────────────────────────────────────
  useEffect(() => {
    LabScene.setMode(mode)
    if (mode === 'guided') {
      // Re-apply current step highlight
      if (labPlaced) {
        const step = plan.steps[currentStep]
        LabScene.highlightObject(step.focusObject)
      }
    } else {
      LabScene.clearHighlight()
    }
  }, [mode, currentStep, labPlaced, plan.steps])

  useEffect(() => {
    setGateHint('')
  }, [currentStep, mode])

  useEffect(() => {
    if (!lastInteraction) return
    const step = plan.steps[currentStep]
    if (!step) return
    if (!isInteractionRelevantToStep(step, lastInteraction)) return
    setStepCompleted((prev) => {
      if (prev[currentStep]) return prev
      const next = [...prev]
      next[currentStep] = true
      return next
    })
  }, [lastInteraction, currentStep, plan.steps])

  // ── WebXR enter ──────────────────────────────────────────────────────────
  const enterAR = useCallback(async () => {
    if (!navigator.xr) return
    try {
      const overlayEl = document.getElementById('ar-overlay')
      const session = await navigator.xr.requestSession('immersive-ar', {
        requiredFeatures: ['hit-test'],
        optionalFeatures: overlayEl ? ['dom-overlay'] : [],
        ...(overlayEl ? { domOverlay: { root: overlayEl } } : {}),
      } as XRSessionInit)

      await LabScene.enterXR(session)
      setXrMode(true)
      setStatus('active')
    } catch (err) {
      console.error('XR session failed:', err)
      enterDesktopMode()
    }
  }, [])

  const enterDesktopMode = useCallback(() => {
    setXrMode(false)
    setStatus('active')
  }, [])

  const handlePlaceLab = useCallback(() => {
    if (xrMode) LabScene.placeLab()
    else LabScene.placeLabFixed()
  }, [xrMode])

  const handleNext = useCallback(() => {
    // Gate only applies in interactive mode — guided mode auto-plays animations,
    // so the user has no way to "complete" the step manually.
    if (mode === 'interactive' && stepGateEnabled && !stepCompleted[currentStep]) {
      setGateHint('Tap the highlighted object to complete this step, or turn the gate off.')
      return
    }
    setCurrentStep((s) => Math.min(s + 1, plan.steps.length - 1))
  }, [plan.steps.length, stepGateEnabled, stepCompleted, currentStep, mode])

  const handlePrev = useCallback(() => {
    setCurrentStep((s) => Math.max(s - 1, 0))
  }, [])

  const handleReset = useCallback(() => {
    LabScene.resetLab()
    setStepCompleted(Array(plan.steps.length).fill(false))
    setGateHint('')
    setCurrentStep(0)
  }, [plan.steps.length])

  // ── Gemini tool calls → lab/step actions ─────────────────────────────────
  const handleGeminiTool = useCallback(
    (call: ToolCall) => {
      switch (call.name) {
        case 'highlight_object': {
          const obj = call.args.object as LabScene.HighlightTarget
          if (obj) LabScene.highlightObject(obj)
          return { highlighted: obj }
        }
        case 'advance_step': {
          let advanced = false
          setCurrentStep((s) => {
            const next = Math.min(s + 1, plan.steps.length - 1)
            advanced = next !== s
            return next
          })
          return { advanced }
        }
        case 'previous_step': {
          let moved = false
          setCurrentStep((s) => {
            const next = Math.max(s - 1, 0)
            moved = next !== s
            return next
          })
          return { moved }
        }
        case 'play_animation': {
          const anim = call.args.animation as string
          if (anim) LabScene.playAnimation(anim)
          return { played: anim }
        }
        case 'reset_lab': {
          handleReset()
          return { reset: true }
        }
        case 'set_mode': {
          const m = call.args.mode as LabScene.Mode
          if (m === 'guided' || m === 'interactive') setMode(m)
          return { mode: m }
        }
        case 'toggle_step_gate': {
          const enabled = !!call.args.enabled
          setStepGateEnabled(enabled)
          return { gate: enabled ? 'on' : 'off' }
        }
        default:
          return { error: 'unknown tool' }
      }
    },
    [plan.steps.length, handleReset],
  )

  // ── Pointer events on canvas (interactive mode) ──────────────────────────
  const handleCanvasMove = useCallback(
    (e: React.PointerEvent) => {
      if (mode !== 'interactive') return
      LabScene.handlePointerMove(e.clientX, e.clientY)
    },
    [mode],
  )

  const handleCanvasTap = useCallback(
    (e: React.PointerEvent) => {
      if (xrMode && !labPlaced) {
        LabScene.placeLab()
        return
      }
      if (mode === 'interactive') {
        LabScene.handlePointerTap(e.clientX, e.clientY)
      }
    },
    [mode, xrMode, labPlaced],
  )

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <div className="relative w-full h-full">
      {!xrMode && (
        <video
          ref={videoRef}
          id="ar-video"
          autoPlay
          playsInline
          muted
          className="object-cover"
          style={{ transform: xrSupported ? 'none' : 'scaleX(-1)' }}
        />
      )}

      <canvas
        ref={canvasRef}
        id="ar-canvas"
        onPointerMove={handleCanvasMove}
        onPointerDown={handleCanvasTap}
        style={{
          pointerEvents: status === 'active' ? 'auto' : 'none',
          cursor: mode === 'interactive' && labPlaced ? 'pointer' : 'default',
        }}
      />

      {/* Plan-source badge — always visible so it's clear which plan is loaded */}
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div
          className={[
            'glass rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-widest',
            planSource === 'generated' ? 'text-lab-accent' : 'text-lab-muted',
          ].join(' ')}
        >
          {planSource === 'generated' ? '⚙ Generated plan' : 'Sample plan'} ·{' '}
          <span className="opacity-80 normal-case tracking-normal">{plan.title}</span>
        </div>
      </div>

      {cameraError && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-20 glass rounded-xl px-4 py-2 text-xs text-lab-warn text-center max-w-xs">
          {cameraError}
        </div>
      )}

      {status === 'ready' && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-lab-bg/60 backdrop-blur-sm">
          <div className="glass rounded-2xl p-8 max-w-sm w-full mx-4 text-center flex flex-col gap-5 animate-slide-up">
            <div>
              <h1 className="text-lab-accent font-mono text-xs uppercase tracking-widest mb-1">
                Virtual Lab Mode
              </h1>
              <h2 className="text-lab-text font-bold text-xl leading-tight">
                {plan.title}
              </h2>
              <p className="text-lab-muted text-sm mt-2 leading-relaxed">
                {plan.steps.length} steps · {plan.totalDuration}
              </p>
            </div>

            <div className="flex flex-col gap-2">
              {xrSupported && (
                <button
                  onClick={enterAR}
                  className="w-full py-3.5 rounded-xl bg-lab-accent text-lab-bg font-bold text-sm flex items-center justify-center gap-2 hover:brightness-110 transition-all"
                >
                  <span className="text-lg">📱</span> Launch in AR
                </button>
              )}
              <button
                onClick={enterDesktopMode}
                className="w-full py-3.5 rounded-xl glass text-lab-text font-semibold text-sm flex items-center justify-center gap-2 hover:border-lab-accent/40 transition-all"
              >
                <span className="text-lg">🖥</span>
                {xrSupported ? 'Camera Overlay Mode' : 'Launch Simulation'}
              </button>
            </div>

            <p className="text-lab-muted text-xs">
              Tap any object once placed — pour, mix, heat. Switch to Interactive
              mode to play freely.
            </p>
          </div>
        </div>
      )}

      {status === 'checking' && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-lab-bg">
          <div className="text-center">
            <div className="w-8 h-8 border-2 border-lab-accent border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-lab-muted text-sm">Initialising lab environment…</p>
          </div>
        </div>
      )}

      {status === 'active' && (
        <StepHUD
          plan={plan}
          currentStep={currentStep}
          totalSteps={plan.steps.length}
          labPlaced={labPlaced}
          xrMode={xrMode}
          mode={mode}
          lastInteraction={lastInteraction}
          onNext={handleNext}
          onPrev={handlePrev}
          onPlaceLab={handlePlaceLab}
          onSetMode={setMode}
          stepCompleted={stepCompleted[currentStep] ?? false}
          stepGateEnabled={stepGateEnabled}
          gateHint={gateHint}
          onToggleStepGate={setStepGateEnabled}
          onReset={handleReset}
          onGeminiTool={handleGeminiTool}
        />
      )}
    </div>
  )
}

function isInteractionRelevantToStep(
  step: ExperimentStep,
  event: LabScene.InteractionEvent,
): boolean {
  if (step.focusObject === 'none') return true
  if (event.object === step.focusObject) return true
  // Some steps focus on liquid handling where pipette/beaker interactions are both valid.
  if (step.focusObject === 'tubes' && event.action === 'dispense') return true
  if (step.focusObject === 'pipette' && (event.action === 'fill-pipette' || event.action === 'dispense'))
    return true
  return false
}
