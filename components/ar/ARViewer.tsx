'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import StepHUD from './StepHUD'
import PointerArrow, { type PointerTarget } from './PointerArrow'
import * as LabScene from './lab-scene'
import {
  SAMPLE_SCENE,
  type ExperimentPlan,
  type ExperimentStep,
} from '@/lib/experiment-steps'
import type { LabSceneSpec, StepBinding } from '@/lib/plan-schema'
import type { ToolCall } from './gemini-live'
import { readPlan } from '@/lib/load-plan'
import { mapLabBriefToExperiment } from '@/lib/plan-to-ar'
import type { LabBriefPlan } from '@/lib/plan-schema'
import { stopVisionObserver } from '@/lib/gemini-vision'

interface ARViewerProps {
  plan: ExperimentPlan // fallback (SAMPLE_EXPERIMENT) used if no plan can be resolved
  // If provided, fetch hypotheses/<slug>/plan/{plan,ar}.json from the API and
  // use those as the plan source. Lets wiki.html deep-link into a 3D lab.
  slug?: string
}

type ARStatus = 'checking' | 'ready' | 'active'

export default function ARViewer({ plan: fallbackPlan, slug }: ARViewerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)

  // The scene spec must be loaded BEFORE LabScene.initScene runs, because the
  // scene builder consumes the LabSceneSpec to construct station meshes.
  // Until it resolves, we render the loading state.
  const [planSource, setPlanSource] = useState<'generated' | 'sample'>('sample')
  const [plan, setPlan] = useState<ExperimentPlan | null>(null)
  const [scene, setScene] = useState<LabSceneSpec | null>(null)
  const [bindingByStep, setBindingByStep] = useState<Map<number, StepBinding>>(
    () => new Map(),
  )
  const [planLoaded, setPlanLoaded] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function fetchSlug(s: string): Promise<{ plan: LabBriefPlan; spec: LabSceneSpec | null } | null> {
      try {
        const [planRes, specRes] = await Promise.all([
          fetch(`/api/plans/${encodeURIComponent(s)}`),
          fetch(`/api/ar/${encodeURIComponent(s)}`),
        ])
        if (!planRes.ok) {
          console.warn('[ARViewer] /api/plans returned', planRes.status, 'for', s)
          return null
        }
        const labPlan = (await planRes.json()) as LabBriefPlan
        const spec = specRes.ok ? ((await specRes.json()) as LabSceneSpec) : null
        return { plan: labPlan, spec }
      } catch (err) {
        console.warn('[ARViewer] Slug fetch failed:', err)
        return null
      }
    }

    async function fetchSpec(s: string): Promise<LabSceneSpec | null> {
      try {
        const res = await fetch(`/api/ar/${encodeURIComponent(s)}`)
        if (!res.ok) return null
        return (await res.json()) as LabSceneSpec
      } catch {
        return null
      }
    }

    async function resolvePlanAndScene() {
      // 1) Slug query param wins — wiki.html deep-links here directly.
      if (slug) {
        const fetched = await fetchSlug(slug)
        if (fetched) {
          try {
            const mapped = mapLabBriefToExperiment(fetched.plan, fetched.spec)
            if (cancelled) return
            setPlan(mapped)
            setScene(fetched.spec ?? SAMPLE_SCENE)
            setPlanSource('generated')
            setPlanLoaded(true)
            return
          } catch (err) {
            console.warn('[ARViewer] Slug mapping failed:', err)
          }
        }
      }

      // 2) sessionStorage (set by the in-app planning flow).
      const stored = readPlan()
      if (stored) {
        const storedSlug = stored.hypothesis?.slug
        const spec = storedSlug ? await fetchSpec(storedSlug) : null
        try {
          const mapped = mapLabBriefToExperiment(stored, spec)
          if (cancelled) return
          setPlan(mapped)
          setScene(spec ?? SAMPLE_SCENE)
          setPlanSource('generated')
        } catch (err) {
          console.warn('[ARViewer] Failed to map stored plan, using sample:', err)
          if (cancelled) return
          setPlan(fallbackPlan)
          setScene(SAMPLE_SCENE)
          setPlanSource('sample')
        }
      } else {
        if (cancelled) return
        setPlan(fallbackPlan)
        setScene(SAMPLE_SCENE)
        setPlanSource('sample')
      }
      if (!cancelled) setPlanLoaded(true)
    }
    resolvePlanAndScene()
    return () => {
      cancelled = true
    }
  }, [fallbackPlan, slug])

  useEffect(() => {
    if (!scene) return setBindingByStep(new Map())
    const m = new Map<number, StepBinding>()
    scene.step_bindings.forEach((b) => m.set(b.step, b))
    setBindingByStep(m)
  }, [scene])

  const [xrSupported, setXrSupported] = useState(false)
  const [status, setStatus] = useState<ARStatus>('checking')
  const [xrMode, setXrMode] = useState(false)
  const [labPlaced, setLabPlaced] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  // Default to interactive — the user explicitly drives each step by tapping
  // or dragging tools, which matches the "real lab" feel of the new HUD.
  const [mode, setMode] = useState<LabScene.Mode>('interactive')
  const [lastInteraction, setLastInteraction] = useState<LabScene.InteractionEvent | null>(null)
  const [stepCompleted, setStepCompleted] = useState<boolean[]>([])
  const [stepGateEnabled, setStepGateEnabled] = useState(true)
  const [gateHint, setGateHint] = useState('')
  const [cameraError, setCameraError] = useState('')
  // Hover tooltip — populated by the lab scene whenever the cursor is over a
  // station (or while a drag is in flight). Rendered as a small floating DOM
  // label so the user can see the name of any tool before tapping it.
  const [hoverInfo, setHoverInfo] = useState<LabScene.HoverInfo | null>(null)
  // Gemini Live deictic pointer — set by the point_at tool, cleared after
  // a few seconds (or by clear_pointer). The PointerArrow renders an
  // animated arrow at this client-space coordinate so the user can SEE
  // exactly which station / button the assistant is referring to.
  const [pointerTarget, setPointerTarget] = useState<PointerTarget | null>(null)
  const pointerTimerRef = useRef<number | null>(null)
  // Step-gate hint pointer — a *persistent* arrow that anchors to the
  // current step's focus station whenever the gate is unsatisfied, so the
  // "Do the gesture above ↑" copy on the Next button maps to a real
  // visible target on screen. Updated on every animation frame so it
  // tracks the station as the user drags it (or the camera moves in XR).
  const [gateHintTarget, setGateHintTarget] = useState<PointerTarget | null>(null)
  const gateHintRafRef = useRef<number | null>(null)
  // Snapshot of the current scene's stations — handed to Gemini at session
  // start (and refreshed on step changes) so it can pass valid ids to
  // highlight_object / point_at.
  const [stations, setStations] = useState<LabScene.StationSummary[]>([])
  const [placementStatus, setPlacementStatus] = useState<LabScene.PlacementStatus>({
    reticleVisible: false,
    surfacePlacementValid: false,
    canPlace: false,
    message: 'Move your phone to detect a surface',
  })
  const touchPointsRef = useRef<Map<number, { x: number; y: number }>>(new Map())
  const pinchStateRef = useRef<{ angle: number; distance: number } | null>(null)

  useEffect(() => {
    if (!plan) return
    setStepCompleted(Array(plan.steps.length).fill(false))
    setCurrentStep((s) => Math.min(s, Math.max(0, plan.steps.length - 1)))
  }, [plan])

  // Populate the station list once the lab is placed (the scene's station
  // map is filled during initScene → buildSceneFromSpec). Stations are
  // referenced by Gemini for highlight_object / point_at, so we want this
  // available the moment the lab snaps in.
  useEffect(() => {
    if (!labPlaced) return
    setStations(LabScene.listStations())
  }, [labPlaced, scene])

  // Auto-dismiss the deictic pointer after a few seconds. We keep the
  // visual long enough for the user's eyes to land on the target while
  // Gemini's voice catches up, then clear so the screen stays clean.
  useEffect(() => {
    if (!pointerTarget) return
    if (pointerTimerRef.current !== null) {
      window.clearTimeout(pointerTimerRef.current)
    }
    pointerTimerRef.current = window.setTimeout(() => {
      setPointerTarget(null)
      pointerTimerRef.current = null
    }, 6000)
    return () => {
      if (pointerTimerRef.current !== null) {
        window.clearTimeout(pointerTimerRef.current)
        pointerTimerRef.current = null
      }
    }
  }, [pointerTarget])

  // Track the focus station with a rAF loop while the step gate is
  // unsatisfied. We animate a persistent arrow so "Do the gesture above ↑"
  // actually points at the thing the user must touch — and keeps tracking
  // if they drag the station around the bench.
  useEffect(() => {
    const stepCompletedNow = stepCompleted[currentStep] ?? false
    const step = plan?.steps[currentStep]
    const shouldShow =
      !!plan &&
      labPlaced &&
      mode === 'interactive' &&
      stepGateEnabled &&
      !stepCompletedNow &&
      !!step &&
      step.focusObject !== 'none'

    if (!shouldShow) {
      if (gateHintRafRef.current !== null) {
        cancelAnimationFrame(gateHintRafRef.current)
        gateHintRafRef.current = null
      }
      // Clear lazily so we don't fight with React when the same effect
      // re-runs synchronously on dependency changes.
      setGateHintTarget((prev) => (prev === null ? prev : null))
      return
    }

    const stationId = step!.focusObject
    let lastX = 0
    let lastY = 0
    let lastVisible = false

    const tick = () => {
      const proj = LabScene.getStationScreenPosition(stationId)
      if (!proj || !proj.visible) {
        if (lastVisible) {
          lastVisible = false
          setGateHintTarget(null)
        }
      } else {
        // Only commit a state update when the cursor would actually move
        // ≥ 1px — keeps React reconciliation off the hot path while the
        // station is sitting still.
        const dx = Math.abs(proj.x - lastX)
        const dy = Math.abs(proj.y - lastY)
        if (!lastVisible || dx >= 1 || dy >= 1) {
          lastX = proj.x
          lastY = proj.y
          lastVisible = true
          setGateHintTarget({
            x: proj.x,
            y: proj.y,
            label: 'Tap or drag this',
            key: 0,
          })
        }
      }
      gateHintRafRef.current = requestAnimationFrame(tick)
    }
    gateHintRafRef.current = requestAnimationFrame(tick)

    return () => {
      if (gateHintRafRef.current !== null) {
        cancelAnimationFrame(gateHintRafRef.current)
        gateHintRafRef.current = null
      }
    }
  }, [plan, labPlaced, mode, stepGateEnabled, stepCompleted, currentStep])

  // ── Setup ────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!planLoaded || !scene) return
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

      if (canvasRef.current && scene) {
        LabScene.initScene(
          canvasRef.current,
          () => {
            if (mounted) setLabPlaced(true)
          },
          scene,
        )
        LabScene.setInteractionListener((e) => {
          if (mounted) {
            setLastInteraction(e)
          }
        })
        LabScene.setHoverListener((info) => {
          if (mounted) setHoverInfo(info)
        })
      }

      if (!mounted) return
      setStatus('ready')
    }

    setup()

    return () => {
      mounted = false
      LabScene.setInteractionListener(null)
      LabScene.setHoverListener(null)
      LabScene.cleanup()
      stopVisionObserver()
      streamRef.current?.getTracks().forEach((t) => t.stop())
    }
  }, [planLoaded, scene])

  // ── Step → station highlight + state changes (guided) ────────────────────
  useEffect(() => {
    if (!labPlaced || !plan) return
    const step = plan.steps[currentStep]
    if (!step) return

    if (mode === 'guided') {
      LabScene.highlightStation(step.focusObject)
      const binding = bindingByStep.get(step.id)
      if (binding?.state_changes) LabScene.applyStateChanges(binding.state_changes)
      if (step.animation) LabScene.playStationAnimation(step.focusObject, step.animation)
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
  }, [currentStep, labPlaced, plan, mode, bindingByStep])

  // ── Mode sync ────────────────────────────────────────────────────────────
  useEffect(() => {
    LabScene.setMode(mode)
    if (!plan) return
    if (mode === 'guided') {
      if (labPlaced) {
        const step = plan.steps[currentStep]
        if (step) LabScene.highlightStation(step.focusObject)
      }
    } else {
      LabScene.clearHighlight()
    }
  }, [mode, currentStep, labPlaced, plan])

  useEffect(() => {
    setGateHint('')
  }, [currentStep, mode])

  useEffect(() => {
    if (!lastInteraction || !plan) return
    const step = plan.steps[currentStep]
    if (!step) return
    if (!isInteractionRelevantToStep(step, lastInteraction)) return
    setStepCompleted((prev) => {
      if (prev[currentStep]) return prev
      const next = [...prev]
      next[currentStep] = true
      return next
    })
  }, [lastInteraction, currentStep, plan])

  useEffect(() => {
    if (!xrMode) return
    let raf = 0
    const tick = () => {
      setPlacementStatus(LabScene.getPlacementStatus())
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [xrMode])

  // ── WebXR enter ──────────────────────────────────────────────────────────
  const enterAR = useCallback(async () => {
    if (!navigator.xr) return
    try {
      const overlayEl = document.getElementById('ar-overlay')
      const optional: string[] = [
        'plane-detection',
        'depth-sensing',
        'light-estimation',
        'anchors',
      ]
      if (overlayEl) optional.push('dom-overlay')
      const session = await navigator.xr.requestSession('immersive-ar', {
        requiredFeatures: ['hit-test'],
        optionalFeatures: optional,
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

  const handleReposition = useCallback(() => {
    if (!xrMode) return
    LabScene.beginSurfacePlacement()
    setLabPlaced(false)
  }, [xrMode])

  const handleNext = useCallback(() => {
    if (!plan) return
    // Gate only applies in interactive mode — guided mode auto-plays animations,
    // so the user has no way to "complete" the step manually.
    if (mode === 'interactive' && stepGateEnabled && !stepCompleted[currentStep]) {
      setGateHint('Tap the highlighted station to complete this step, or turn the gate off.')
      return
    }
    setCurrentStep((s) => Math.min(s + 1, plan.steps.length - 1))
  }, [plan, stepGateEnabled, stepCompleted, currentStep, mode])

  const handlePrev = useCallback(() => {
    setCurrentStep((s) => Math.max(s - 1, 0))
  }, [])

  const handleReset = useCallback(() => {
    if (!plan) return
    LabScene.resetLab()
    setStepCompleted(Array(plan.steps.length).fill(false))
    setGateHint('')
    setCurrentStep(0)
  }, [plan])

  // ── Gemini tool calls → lab/step actions ─────────────────────────────────
  // Resolves a `point_at` target (either a station id or a named UI
  // affordance like "next-button") to a client-space coordinate the
  // <PointerArrow> can render at. Falls back through:
  //   1. visible DOM element with [data-pointer-target="<target>"]
  //   2. lab-scene station projection (3D → 2D)
  //   3. null (caller treats as failure)
  const resolvePointerTarget = useCallback(
    (target: string): { x: number; y: number; resolvedAs: 'ui' | 'station' } | null => {
      const sane = target.trim().toLowerCase()
      if (!sane) return null

      // 1) UI affordances first — they're cheap and unambiguous when the
      //    element is on-screen. We deliberately pick the *visible* one
      //    when multiple instances share the same data attribute (e.g.
      //    the right-edge dock fades when the sheet opens; the in-sheet
      //    segmented control becomes the active mode-toggle target).
      const candidates = Array.from(
        document.querySelectorAll<HTMLElement>(
          `[data-pointer-target="${CSS.escape(sane)}"]`,
        ),
      )
      const visible = candidates.find((el) => {
        const style = window.getComputedStyle(el)
        if (style.visibility === 'hidden' || style.display === 'none') return false
        if (parseFloat(style.opacity) < 0.1) return false
        const rect = el.getBoundingClientRect()
        return rect.width > 0 && rect.height > 0
      })
      if (visible) {
        const rect = visible.getBoundingClientRect()
        return {
          x: rect.left + rect.width / 2,
          y: rect.top + rect.height / 2,
          resolvedAs: 'ui',
        }
      }

      // 2) Lab-scene station projection.
      const proj = LabScene.getStationScreenPosition(sane)
      if (proj && proj.visible) {
        return { x: proj.x, y: proj.y, resolvedAs: 'station' }
      }

      return null
    },
    [],
  )

  const handleGeminiTool = useCallback(
    (call: ToolCall) => {
      if (!plan) return { error: 'plan-not-loaded' }
      switch (call.name) {
        case 'highlight_object': {
          const obj = call.args.object as LabScene.HighlightTarget
          if (obj) LabScene.highlightStation(obj)
          return { highlighted: obj }
        }
        case 'point_at': {
          const target = String(call.args.target ?? '')
          const label = call.args.label ? String(call.args.label) : undefined
          const resolved = resolvePointerTarget(target)
          if (!resolved) {
            return {
              pointed: false,
              reason: `Could not resolve "${target}" — pass a station id or a known UI affordance (next-button, prev-button, mode-toggle, gate-toggle, reset-button, lab-assistant, step-sheet).`,
            }
          }
          // If we're pointing at a station, also pulse its highlight so the
          // 3D mesh visibly responds — gives Gemini's gesture a "felt"
          // quality on the bench rather than just a 2D arrow floating
          // above an inert object.
          if (resolved.resolvedAs === 'station') {
            LabScene.highlightStation(target)
          }
          setPointerTarget({
            x: resolved.x,
            y: resolved.y,
            label,
            key: Date.now(),
          })
          return { pointed: true, target, kind: resolved.resolvedAs }
        }
        case 'clear_pointer': {
          setPointerTarget(null)
          return { cleared: true }
        }
        case 'open_panel': {
          window.dispatchEvent(new CustomEvent('groundwork:sheet', { detail: 'open' }))
          return { sheet: 'open' }
        }
        case 'close_panel': {
          window.dispatchEvent(new CustomEvent('groundwork:sheet', { detail: 'peek' }))
          return { sheet: 'peek' }
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
    [plan, handleReset, resolvePointerTarget],
  )

  // ── Pointer events on canvas ─────────────────────────────────────────────
  // Three-phase pipeline so coupon-kind stations can distinguish a tap (flip)
  // from a drag (orbit). Other stations fire on pointer-down for snappiness.
  const handleCanvasMove = useCallback(
    (e: React.PointerEvent) => {
      if (mode !== 'interactive') return
      if (e.pointerType === 'touch') {
        const touches = touchPointsRef.current
        touches.set(e.pointerId, { x: e.clientX, y: e.clientY })
        if (touches.size >= 2 && labPlaced) {
          const [a, b] = Array.from(touches.values())
          const dx = b.x - a.x
          const dy = b.y - a.y
          const angle = Math.atan2(dy, dx)
          const distance = Math.hypot(dx, dy)
          const prev = pinchStateRef.current
          if (prev) {
            const deltaYaw = angle - prev.angle
            const scaleMul = distance / Math.max(prev.distance, 1e-5)
            LabScene.transformPlacedLab(deltaYaw, scaleMul)
          }
          pinchStateRef.current = { angle, distance }
          return
        }
      }
      LabScene.handlePointerMove(e.clientX, e.clientY)
    },
    [mode, labPlaced],
  )

  const handleCanvasDown = useCallback(
    (e: React.PointerEvent) => {
      if (xrMode && !labPlaced) {
        LabScene.placeLab()
        return
      }
      // Capture the pointer so we keep getting move/up events even if the
      // finger leaves the canvas (essential for drag-to-rotate on phones).
      try {
        ;(e.target as Element).setPointerCapture?.(e.pointerId)
      } catch {}
      if (e.pointerType === 'touch') {
        const touches = touchPointsRef.current
        touches.set(e.pointerId, { x: e.clientX, y: e.clientY })
        if (touches.size >= 2 && labPlaced) {
          const [a, b] = Array.from(touches.values())
          pinchStateRef.current = {
            angle: Math.atan2(b.y - a.y, b.x - a.x),
            distance: Math.hypot(b.x - a.x, b.y - a.y),
          }
          return
        }
      }
      if (mode === 'interactive') {
        LabScene.handlePointerDown(e.clientX, e.clientY)
      }
    },
    [mode, xrMode, labPlaced],
  )

  const handleCanvasUp = useCallback(
    (e: React.PointerEvent) => {
      if (e.pointerType === 'touch') {
        touchPointsRef.current.delete(e.pointerId)
        if (touchPointsRef.current.size < 2) pinchStateRef.current = null
      }
      if (mode !== 'interactive') return
      LabScene.handlePointerUp(e.clientX, e.clientY)
    },
    [mode],
  )

  const handleCanvasCancel = useCallback(
    (e: React.PointerEvent) => {
      if (e.pointerType === 'touch') {
        touchPointsRef.current.delete(e.pointerId)
        if (touchPointsRef.current.size < 2) pinchStateRef.current = null
      }
      if (mode !== 'interactive') return
      LabScene.handlePointerUp(e.clientX, e.clientY)
    },
    [mode],
  )

  // Clear the hover tooltip when the cursor leaves the canvas — otherwise the
  // last station's label keeps floating over the HUD chrome.
  const handleCanvasLeave = useCallback(() => {
    setHoverInfo(null)
  }, [])

  // ── Render ───────────────────────────────────────────────────────────────
  if (!plan || !planLoaded) {
    return (
      <div className="fixed inset-0 z-20 flex items-center justify-center bg-lab-bg">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-lab-accent border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-lab-muted text-sm">Loading lab scene…</p>
        </div>
      </div>
    )
  }

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
        onPointerDown={handleCanvasDown}
        onPointerUp={handleCanvasUp}
        onPointerCancel={handleCanvasCancel}
        onPointerLeave={handleCanvasLeave}
        style={{
          pointerEvents: status === 'active' ? 'auto' : 'none',
          // Block native gestures (page scroll, pinch-zoom) while interacting
          // so single-finger drag actually rotates the coupon on a phone.
          touchAction: 'none',
          cursor: mode === 'interactive' && labPlaced ? 'grab' : 'default',
        }}
      />

      {/* Plan-source badge — small + tucked into the safe-area so it never
          competes with the bottom step sheet for thumb space. */}
      <div
        className="fixed left-1/2 -translate-x-1/2 z-10 pointer-events-none"
        style={{ top: 'calc(env(safe-area-inset-top, 0px) + 6px)' }}
      >
        <div
          className={[
            'glass rounded-full px-2.5 py-0.5 text-[9px] font-mono uppercase tracking-widest opacity-80',
            planSource === 'generated' ? 'text-lab-accent' : 'text-lab-muted',
          ].join(' ')}
        >
          {planSource === 'generated' ? '⚙ Generated' : 'Sample'} ·{' '}
          <span className="opacity-80 normal-case tracking-normal">
            {plan.title.length > 28 ? plan.title.slice(0, 27) + '…' : plan.title}
          </span>
        </div>
      </div>

      {/* Subtle vignette around the canvas — sells the "looking through a
          viewfinder" feel and lifts the lab off the dark void. */}
      <div className="ar-vignette pointer-events-none" aria-hidden />

      {cameraError && (
        <button
          type="button"
          onClick={() => setCameraError('')}
          className="fixed top-12 right-3 z-20 glass rounded-full px-3 py-1.5 text-[11px] text-lab-warn pointer-events-auto flex items-center gap-2 max-w-[80%] animate-slide-up"
          aria-label="Dismiss camera notice"
        >
          <span aria-hidden>⚠</span>
          <span className="truncate">{cameraError}</span>
          <span aria-hidden className="text-lab-muted">×</span>
        </button>
      )}

      {/* Floating tool-name tooltip — follows the cursor / dragging finger so
          the user always knows what they're about to grab. The pointer is
          shifted up-and-right so the label never sits under the cursor. */}
      {hoverInfo && status === 'active' && (
        <div
          className="fixed z-30 pointer-events-none animate-slide-up"
          style={{
            left: hoverInfo.x + 14,
            top: hoverInfo.y - 36,
            transform: 'translate(0, 0)',
          }}
        >
          <div className="glass rounded-lg px-2.5 py-1 text-[11px] text-lab-text font-medium shadow-lg border border-lab-accent/30 whitespace-nowrap max-w-[60vw] truncate">
            <span className="text-lab-accent text-[9px] font-mono uppercase tracking-widest mr-1.5">
              {mode === 'interactive' ? 'tap · drag' : 'tool'}
            </span>
            {hoverInfo.label}
          </div>
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
              Scan your real table until the ring turns green, then tap to place.
              After placement, tap or drag tools directly on your own surface.
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
          stations={stations}
          onNext={handleNext}
          onPrev={handlePrev}
          onPlaceLab={handlePlaceLab}
          onSetMode={setMode}
          stepCompleted={stepCompleted[currentStep] ?? false}
          stepGateEnabled={stepGateEnabled}
          gateHint={gateHint}
          onToggleStepGate={setStepGateEnabled}
          onReset={handleReset}
          placementStatus={placementStatus}
          onReposition={handleReposition}
          onGeminiTool={handleGeminiTool}
        />
      )}

      {/* Step-gate hint pointer — persistent, sky-blue arrow that anchors
          to the current step's focus station whenever the user has to
          "do the gesture above" before advancing. Sits below Gemini's
          deictic arrow so the gesture-being-narrated reads on top. */}
      <PointerArrow target={gateHintTarget} variant="hint" />

      {/* Gemini Live deictic pointer — animated arrow that says "here" so
          the user's eyes follow while the assistant narrates. Renders at
          z-40 so it floats over the bottom sheet (z-30) and the docks
          (z-20). */}
      <PointerArrow target={pointerTarget} />
    </div>
  )
}

function isInteractionRelevantToStep(
  step: ExperimentStep,
  event: LabScene.InteractionEvent,
): boolean {
  if (step.focusObject === 'none') return true
  return event.object === step.focusObject
}
