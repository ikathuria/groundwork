import * as THREE from 'three'
import type { LabObjectName } from '@/lib/experiment-steps'

// ─── Types ───────────────────────────────────────────────────────────────────

export type Mode = 'guided' | 'interactive'
export type HighlightTarget = LabObjectName

interface BeakerState {
  group: THREE.Group
  liquidMesh: THREE.Mesh
  volume: number // 0..1
  color: THREE.Color
  defaultColor: THREE.Color
  defaultVolume: number
}

interface TubeState {
  liquidMesh: THREE.Mesh
  volume: number
  color: THREE.Color
  defaultVolume: number
  defaultColor: THREE.Color
}

interface PipetteState {
  group: THREE.Group
  liquidMesh: THREE.Mesh
  loadedColor: THREE.Color | null
  loadedVolume: number
  homePosition: THREE.Vector3
  homeRotation: THREE.Euler
}

interface HotPlateState {
  group: THREE.Group
  surfaceMesh: THREE.Mesh
  ledMesh: THREE.Mesh
  active: boolean
}

type Tween = {
  target: THREE.Object3D | THREE.Mesh
  prop: 'position' | 'rotation' | 'scale.y' | 'material.color' | 'material.emissive'
  from: THREE.Vector3 | THREE.Euler | THREE.Color | number
  to: THREE.Vector3 | THREE.Euler | THREE.Color | number
  duration: number
  elapsed: number
  ease?: (t: number) => number
  onComplete?: () => void
}

interface SceneState {
  renderer: THREE.WebGLRenderer | null
  scene: THREE.Scene | null
  camera: THREE.PerspectiveCamera | null
  labGroup: THREE.Group | null
  reticle: THREE.Mesh | null
  objects: Partial<Record<LabObjectName, THREE.Object3D>>
  highlightedObject: THREE.Object3D | null
  highlightPulse: number
  hoveredObject: THREE.Object3D | null
  hoverScale: Map<THREE.Object3D, THREE.Vector3>
  hoverEmissive: Map<THREE.Mesh, THREE.Color>
  labPlaced: boolean
  animationFrameId: number | null
  xrSession: XRSession | null
  hitTestSource: XRHitTestSource | null
  referenceSpace: XRReferenceSpace | null
  onLabPlaced: (() => void) | null
  onInteraction: ((event: InteractionEvent) => void) | null
  mode: Mode
  raycaster: THREE.Raycaster
  pipette: PipetteState | null
  beakers: Map<LabObjectName, BeakerState>
  tubes: TubeState[]
  hotPlate: HotPlateState | null
  tweens: Tween[]
  interactiveObjects: THREE.Object3D[]
  pipetteBusy: boolean
}

export interface InteractionEvent {
  object: LabObjectName
  action: 'pickup-pipette' | 'fill-pipette' | 'dispense' | 'toggle-heat' | 'observe' | 'tap'
  detail?: string
}

const state: SceneState = {
  renderer: null,
  scene: null,
  camera: null,
  labGroup: null,
  reticle: null,
  objects: {},
  highlightedObject: null,
  highlightPulse: 0,
  hoveredObject: null,
  hoverScale: new Map(),
  hoverEmissive: new Map(),
  labPlaced: false,
  animationFrameId: null,
  xrSession: null,
  hitTestSource: null,
  referenceSpace: null,
  onLabPlaced: null,
  onInteraction: null,
  mode: 'guided',
  raycaster: new THREE.Raycaster(),
  pipette: null,
  beakers: new Map(),
  tubes: [],
  hotPlate: null,
  tweens: [],
  interactiveObjects: [],
  pipetteBusy: false,
}

// ─── Init ─────────────────────────────────────────────────────────────────────

export function initScene(canvas: HTMLCanvasElement, onLabPlaced: () => void) {
  state.onLabPlaced = onLabPlaced
  state.labPlaced = false

  state.scene = new THREE.Scene()

  state.camera = new THREE.PerspectiveCamera(
    70,
    canvas.clientWidth / canvas.clientHeight,
    0.01,
    20,
  )
  state.camera.position.set(0, 0.35, 0.9)
  state.camera.lookAt(0, 0, 0)

  state.renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  })
  state.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  state.renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)
  state.renderer.xr.enabled = true
  state.renderer.outputColorSpace = THREE.SRGBColorSpace

  // Lighting
  state.scene.add(new THREE.AmbientLight(0xffffff, 0.55))

  const dirLight = new THREE.DirectionalLight(0xffffff, 1.2)
  dirLight.position.set(1, 2, 1)
  state.scene.add(dirLight)

  const fillLight = new THREE.PointLight(0x4488ff, 0.4, 3)
  fillLight.position.set(-1, 0.5, 0.5)
  state.scene.add(fillLight)

  // Lab
  state.labGroup = buildLabObjects()
  state.labGroup.visible = false
  state.scene.add(state.labGroup)

  // XR reticle
  const ringGeo = new THREE.RingGeometry(0.06, 0.09, 32).rotateX(-Math.PI / 2)
  state.reticle = new THREE.Mesh(
    ringGeo,
    new THREE.MeshBasicMaterial({ color: 0x00d4aa, side: THREE.DoubleSide }),
  )
  state.reticle.matrixAutoUpdate = false
  state.reticle.visible = false
  state.scene.add(state.reticle)

  window.addEventListener('resize', onResize)
  startDesktopLoop()
}

function onResize() {
  if (!state.renderer || !state.camera) return
  const canvas = state.renderer.domElement
  const w = canvas.clientWidth
  const h = canvas.clientHeight
  state.renderer.setSize(w, h, false)
  state.camera.aspect = w / h
  state.camera.updateProjectionMatrix()
}

// ─── Lab Object Builder ───────────────────────────────────────────────────────

function buildLabObjects(): THREE.Group {
  const group = new THREE.Group()
  const objects = state.objects
  const interactive: THREE.Object3D[] = []

  // ── Bench ───────────────────────────────────────────────────────────────
  const bench = new THREE.Mesh(
    new THREE.BoxGeometry(0.9, 0.015, 0.45),
    new THREE.MeshStandardMaterial({ color: 0x1a2a1a, roughness: 0.9, metalness: 0.1 }),
  )
  bench.position.y = -0.008
  group.add(bench)
  objects['bench'] = bench

  const legMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, metalness: 0.6, roughness: 0.4 })
  const legGeo = new THREE.BoxGeometry(0.02, 0.12, 0.02)
  ;[[-0.42, -0.21], [-0.42, 0.21], [0.42, -0.21], [0.42, 0.21]].forEach(([x, z]) => {
    const leg = new THREE.Mesh(legGeo, legMat)
    leg.position.set(x, -0.07, z)
    group.add(leg)
  })

  // ── Beakers ─────────────────────────────────────────────────────────────
  const beakerDefs: { name: LabObjectName; x: number; z: number; color: number }[] = [
    { name: 'beaker1', x: -0.22, z: -0.05, color: 0x2266ff },
    { name: 'beaker2', x: -0.05, z: -0.05, color: 0xffaa00 },
    { name: 'beaker3', x: 0.12, z: -0.05, color: 0x22cc66 },
  ]

  beakerDefs.forEach(({ name, x, z, color }) => {
    const bg = new THREE.Group()
    bg.position.set(x, 0, z)
    bg.userData.objectName = name

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xbbddff,
      transparent: true,
      opacity: 0.22,
      roughness: 0,
      metalness: 0,
      transmission: 0.9,
      thickness: 0.01,
      side: THREE.DoubleSide,
    })

    const wall = new THREE.Mesh(
      new THREE.CylinderGeometry(0.033, 0.028, 0.09, 24, 1, true),
      glassMat,
    )
    wall.position.y = 0.055
    wall.userData.objectName = name
    bg.add(wall)

    const bot = new THREE.Mesh(new THREE.CircleGeometry(0.028, 24), glassMat)
    bot.rotation.x = -Math.PI / 2
    bot.position.y = 0.005
    bg.add(bot)

    // Liquid (scaleable on Y to simulate fill level)
    const liquidGeo = new THREE.CylinderGeometry(0.026, 0.022, 0.055, 24)
    const liquidMat = new THREE.MeshStandardMaterial({
      color,
      transparent: true,
      opacity: 0.78,
      roughness: 0.1,
      emissive: color,
      emissiveIntensity: 0.06,
    })
    const liquid = new THREE.Mesh(liquidGeo, liquidMat)
    // Liquid base sits at y = 0.005 (top of bottom). Scale anchored at base by adjusting position.
    liquid.position.y = 0.0325
    liquid.userData.volumeBaseY = 0.005
    liquid.userData.volumeHalfHeight = 0.0275
    liquid.userData.objectName = name
    bg.add(liquid)

    group.add(bg)
    objects[name] = bg
    interactive.push(bg)

    state.beakers.set(name, {
      group: bg,
      liquidMesh: liquid,
      volume: 1,
      color: new THREE.Color(color),
      defaultColor: new THREE.Color(color),
      defaultVolume: 1,
    })
  })

  // ── Pipette ─────────────────────────────────────────────────────────────
  const pipetteGroup = new THREE.Group()
  const pipetteMat = new THREE.MeshStandardMaterial({
    color: 0xf0f0f0,
    roughness: 0.3,
    metalness: 0.1,
  })

  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.007, 0.007, 0.14, 12), pipetteMat)
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.004, 0.04, 12), pipetteMat)
  tip.position.y = -0.09
  const btn = new THREE.Mesh(
    new THREE.CylinderGeometry(0.009, 0.009, 0.018, 12),
    new THREE.MeshStandardMaterial({ color: 0x2288ff, roughness: 0.4 }),
  )
  btn.position.y = 0.079

  // Pipette inner liquid (transparent until loaded)
  const pipetteLiquidGeo = new THREE.CylinderGeometry(0.005, 0.005, 0.05, 12)
  const pipetteLiquidMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0,
    emissive: 0x000000,
  })
  const pipetteLiquid = new THREE.Mesh(pipetteLiquidGeo, pipetteLiquidMat)
  pipetteLiquid.position.y = -0.04

  pipetteGroup.add(body, tip, btn, pipetteLiquid)
  pipetteGroup.rotation.z = Math.PI / 8
  pipetteGroup.position.set(0.3, 0.1, -0.1)
  pipetteGroup.userData.objectName = 'pipette'
  body.userData.objectName = 'pipette'
  tip.userData.objectName = 'pipette'
  btn.userData.objectName = 'pipette'

  group.add(pipetteGroup)
  objects['pipette'] = pipetteGroup
  interactive.push(pipetteGroup)

  state.pipette = {
    group: pipetteGroup,
    liquidMesh: pipetteLiquid,
    loadedColor: null,
    loadedVolume: 0,
    homePosition: pipetteGroup.position.clone(),
    homeRotation: pipetteGroup.rotation.clone(),
  }

  // ── Hot Plate ──────────────────────────────────────────────────────────
  const hpGroup = new THREE.Group()
  hpGroup.position.set(0.28, 0, 0.1)
  hpGroup.userData.objectName = 'hotplate'

  const hpBody = new THREE.Mesh(
    new THREE.BoxGeometry(0.13, 0.025, 0.11),
    new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.6, metalness: 0.3 }),
  )
  hpBody.position.y = 0.012
  hpBody.userData.objectName = 'hotplate'
  hpGroup.add(hpBody)

  const hpSurface = new THREE.Mesh(
    new THREE.CylinderGeometry(0.045, 0.045, 0.004, 32),
    new THREE.MeshStandardMaterial({ color: 0x444444, roughness: 0.3, metalness: 0.5, emissive: 0x000000 }),
  )
  hpSurface.position.y = 0.027
  hpSurface.userData.objectName = 'hotplate'
  hpGroup.add(hpSurface)

  const knob = new THREE.Mesh(
    new THREE.CylinderGeometry(0.007, 0.007, 0.014, 12),
    new THREE.MeshStandardMaterial({ color: 0xaaaaaa, metalness: 0.7, roughness: 0.2 }),
  )
  knob.position.set(0.04, 0.032, 0.038)
  hpGroup.add(knob)

  // LED indicator (off by default)
  const ledMesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.004, 8, 8),
    new THREE.MeshStandardMaterial({ color: 0x222222, emissive: 0x000000 }),
  )
  ledMesh.position.set(-0.04, 0.027, 0.038)
  hpGroup.add(ledMesh)

  group.add(hpGroup)
  objects['hotplate'] = hpGroup
  interactive.push(hpGroup)

  state.hotPlate = {
    group: hpGroup,
    surfaceMesh: hpSurface,
    ledMesh,
    active: false,
  }

  // ── Test Tube Rack ──────────────────────────────────────────────────────
  const rackGroup = new THREE.Group()
  rackGroup.position.set(-0.31, 0, 0.1)
  rackGroup.userData.objectName = 'tubes'

  const rackBase = new THREE.Mesh(
    new THREE.BoxGeometry(0.1, 0.01, 0.04),
    new THREE.MeshStandardMaterial({ color: 0x0a3355, roughness: 0.7 }),
  )
  rackBase.position.y = 0.005
  rackBase.userData.objectName = 'tubes'
  rackGroup.add(rackBase)

  const tubeMat = new THREE.MeshPhysicalMaterial({
    color: 0xccddff,
    transparent: true,
    opacity: 0.45,
    roughness: 0,
    transmission: 0.6,
    side: THREE.DoubleSide,
  })

  const tubeColors = [0x4488ff, 0xffaa00, 0x22cc66, 0xff4466]
  for (let i = 0; i < 4; i++) {
    const tube = new THREE.Mesh(
      new THREE.CylinderGeometry(0.008, 0.007, 0.065, 12, 1, true),
      tubeMat,
    )
    tube.position.set(-0.035 + i * 0.023, 0.038, 0)
    tube.userData.objectName = 'tubes'
    rackGroup.add(tube)

    const liquid = new THREE.Mesh(
      new THREE.CylinderGeometry(0.006, 0.006, 0.025, 12),
      new THREE.MeshStandardMaterial({ color: tubeColors[i], transparent: true, opacity: 0.8 }),
    )
    liquid.position.set(-0.035 + i * 0.023, 0.017, 0)
    liquid.userData.volumeBaseY = 0.0045
    liquid.userData.volumeHalfHeight = 0.0125
    liquid.userData.objectName = 'tubes'
    rackGroup.add(liquid)

    state.tubes.push({
      liquidMesh: liquid,
      volume: 1,
      color: new THREE.Color(tubeColors[i]),
      defaultVolume: 1,
      defaultColor: new THREE.Color(tubeColors[i]),
    })
  }

  group.add(rackGroup)
  objects['tubes'] = rackGroup
  interactive.push(rackGroup)

  state.interactiveObjects = interactive
  return group
}

// ─── Render Loops ─────────────────────────────────────────────────────────────

function startDesktopLoop() {
  const loop = () => {
    if (!state.renderer || !state.scene || !state.camera) return
    state.animationFrameId = requestAnimationFrame(loop)
    tickFrame(1 / 60)
    state.renderer.render(state.scene, state.camera)
  }
  loop()
}

export function startXRLoop() {
  if (!state.renderer) return
  state.renderer.setAnimationLoop((_, frame) => {
    tickFrame(1 / 60)

    if (frame && state.hitTestSource && state.referenceSpace && !state.labPlaced) {
      const hits = frame.getHitTestResults(state.hitTestSource)
      if (hits.length > 0) {
        const pose = hits[0].getPose(state.referenceSpace)
        if (pose && state.reticle) {
          state.reticle.visible = true
          state.reticle.matrix.fromArray(pose.transform.matrix as unknown as number[])
        }
      } else if (state.reticle) {
        state.reticle.visible = false
      }
    }

    if (state.renderer && state.scene && state.camera) {
      state.renderer.render(state.scene, state.camera)
    }
  })
}

function tickFrame(dt: number) {
  tickHighlight()
  tickHover()
  tickTweens(dt)
}

// ─── Highlight (active step) ──────────────────────────────────────────────────

function tickHighlight() {
  state.highlightPulse += 0.04
  if (!state.highlightedObject) return

  state.highlightedObject.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      const mat = child.material as THREE.MeshStandardMaterial
      if (mat.emissive) {
        const intensity = 0.18 + Math.sin(state.highlightPulse) * 0.12
        mat.emissive.setHSL(0.45, 1, intensity)
      }
    }
  })
}

export function highlightObject(name: LabObjectName) {
  clearHighlight()
  if (name === 'none') return
  const obj = state.objects[name]
  if (!obj) return
  state.highlightedObject = obj
}

export function clearHighlight() {
  if (!state.highlightedObject) return
  state.highlightedObject.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      const mat = child.material as THREE.MeshStandardMaterial
      // Don't clear if this object has persistent state (hot plate active, beaker liquid)
      if (mat.emissive && !child.userData.persistentEmissive) {
        // Reset to a sensible default
        if (mat.userData?.defaultEmissive !== undefined) {
          mat.emissive.set(mat.userData.defaultEmissive)
        } else {
          mat.emissive.set(0x000000)
        }
      }
    }
  })
  // Restore beaker liquid emissive (was their colored glow)
  state.beakers.forEach((b) => {
    const mat = b.liquidMesh.material as THREE.MeshStandardMaterial
    mat.emissive.copy(b.color)
    mat.emissiveIntensity = 0.06
  })
  // Hot plate stays red if active
  if (state.hotPlate?.active) {
    const mat = state.hotPlate.surfaceMesh.material as THREE.MeshStandardMaterial
    mat.emissive.set(0xff2200)
  }
  state.highlightedObject = null
}

// ─── Hover (interactive mode) ─────────────────────────────────────────────────

function tickHover() {
  // Soft scale pulse + emissive hint for hovered object
  if (!state.hoveredObject) return
  const t = (Math.sin(state.highlightPulse * 1.5) + 1) * 0.5
  const scale = 1 + t * 0.04
  state.hoveredObject.scale.setScalar(scale)

  state.hoveredObject.traverse((child) => {
    if (!(child instanceof THREE.Mesh)) return
    const mat = child.material as THREE.MeshStandardMaterial
    if (!mat.emissive) return
    if (!state.hoverEmissive.has(child)) {
      state.hoverEmissive.set(child, mat.emissive.clone())
    }
    const glow = 0.05 + t * 0.12
    mat.emissive.setRGB(glow * 0.2, glow, glow * 0.7)
  })
}

function setHover(obj: THREE.Object3D | null) {
  if (state.hoveredObject === obj) return

  // Restore previous
  if (state.hoveredObject) {
    const orig = state.hoverScale.get(state.hoveredObject)
    if (orig) state.hoveredObject.scale.copy(orig)
    state.hoveredObject.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return
      const mat = child.material as THREE.MeshStandardMaterial
      if (!mat.emissive) return
      const prev = state.hoverEmissive.get(child)
      if (prev) {
        mat.emissive.copy(prev)
        state.hoverEmissive.delete(child)
      }
    })
  }

  state.hoveredObject = obj

  if (obj) {
    if (!state.hoverScale.has(obj)) state.hoverScale.set(obj, obj.scale.clone())
  }
}

// ─── Tween System ─────────────────────────────────────────────────────────────

const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)

function tickTweens(dt: number) {
  const completed: Tween[] = []
  state.tweens.forEach((tw) => {
    tw.elapsed += dt
    const raw = Math.min(tw.elapsed / tw.duration, 1)
    const t = (tw.ease ?? easeInOut)(raw)

    if (tw.prop === 'position' && tw.target instanceof THREE.Object3D) {
      const from = tw.from as THREE.Vector3
      const to = tw.to as THREE.Vector3
      tw.target.position.lerpVectors(from, to, t)
    } else if (tw.prop === 'rotation' && tw.target instanceof THREE.Object3D) {
      const from = tw.from as THREE.Euler
      const to = tw.to as THREE.Euler
      tw.target.rotation.x = from.x + (to.x - from.x) * t
      tw.target.rotation.y = from.y + (to.y - from.y) * t
      tw.target.rotation.z = from.z + (to.z - from.z) * t
    } else if (tw.prop === 'scale.y' && tw.target instanceof THREE.Object3D) {
      const from = tw.from as number
      const to = tw.to as number
      const v = from + (to - from) * t
      tw.target.scale.y = v
      if (
        tw.target instanceof THREE.Mesh &&
        typeof tw.target.userData.volumeBaseY === 'number' &&
        typeof tw.target.userData.volumeHalfHeight === 'number'
      ) {
        tw.target.position.y = tw.target.userData.volumeBaseY + tw.target.userData.volumeHalfHeight * v
      }
    } else if (tw.prop === 'material.color' && tw.target instanceof THREE.Mesh) {
      const from = tw.from as THREE.Color
      const to = tw.to as THREE.Color
      const mat = tw.target.material as THREE.MeshStandardMaterial
      mat.color.lerpColors(from, to, t)
      mat.emissive.lerpColors(from, to, t)
      mat.emissiveIntensity = 0.06
    } else if (tw.prop === 'material.emissive' && tw.target instanceof THREE.Mesh) {
      const from = tw.from as THREE.Color
      const to = tw.to as THREE.Color
      const mat = tw.target.material as THREE.MeshStandardMaterial
      mat.emissive.lerpColors(from, to, t)
    }

    if (raw >= 1) completed.push(tw)
  })

  completed.forEach((tw) => {
    state.tweens.splice(state.tweens.indexOf(tw), 1)
    tw.onComplete?.()
  })
}

function addTween(tw: Omit<Tween, 'elapsed'>) {
  state.tweens.push({ ...tw, elapsed: 0 })
}

// ─── Pointer / Raycast ────────────────────────────────────────────────────────

export function handlePointerMove(clientX: number, clientY: number) {
  if (state.mode !== 'interactive' || !state.labPlaced) return setHover(null)
  const obj = pickObject(clientX, clientY)
  setHover(obj)
}

export function handlePointerTap(clientX: number, clientY: number) {
  if (!state.labPlaced) return
  const obj = pickObject(clientX, clientY)
  if (!obj) return
  const name = obj.userData.objectName as LabObjectName | undefined
  if (!name) return
  triggerInteraction(name)
}

function pickObject(clientX: number, clientY: number): THREE.Object3D | null {
  if (!state.renderer || !state.camera) return null
  const canvas = state.renderer.domElement
  const rect = canvas.getBoundingClientRect()
  const ndc = new THREE.Vector2(
    ((clientX - rect.left) / rect.width) * 2 - 1,
    -((clientY - rect.top) / rect.height) * 2 + 1,
  )
  state.raycaster.setFromCamera(ndc, state.camera)

  // Intersect against interactive objects (recursively)
  const hits = state.raycaster.intersectObjects(state.interactiveObjects, true)
  for (const hit of hits) {
    const named = findNamedAncestor(hit.object)
    if (named) return named
  }
  return null
}

function findNamedAncestor(obj: THREE.Object3D): THREE.Object3D | null {
  let cur: THREE.Object3D | null = obj
  while (cur) {
    const name = cur.userData?.objectName as LabObjectName | undefined
    if (name && state.objects[name]) return state.objects[name]!
    cur = cur.parent
  }
  return null
}

// ─── Interaction Logic ────────────────────────────────────────────────────────

export function setMode(mode: Mode) {
  state.mode = mode
  if (mode === 'guided') setHover(null)
}

export function getMode(): Mode {
  return state.mode
}

export function setInteractionListener(cb: ((e: InteractionEvent) => void) | null) {
  state.onInteraction = cb
}

function triggerInteraction(name: LabObjectName) {
  if (state.pipetteBusy) return // queue would be better; for demo, ignore taps mid-animation

  const event: InteractionEvent = { object: name, action: 'tap' }

  if (name === 'hotplate') {
    toggleHotPlate()
    event.action = 'toggle-heat'
    event.detail = state.hotPlate?.active ? 'on' : 'off'
  } else if (name === 'pipette') {
    if (!state.pipette) return
    if (state.pipette.loadedColor) {
      // Already loaded — just bob up/down
      bobPipette()
    } else {
      // Empty — lift up to "ready" position
      liftPipette()
      event.action = 'pickup-pipette'
    }
  } else if (name === 'beaker1' || name === 'beaker2' || name === 'beaker3') {
    const beaker = state.beakers.get(name)
    if (!beaker) return

    if (state.pipette && state.pipette.loadedColor) {
      // Dispense into beaker
      pipetteToTarget(beaker.group.position, () => {
        dispenseIntoBeaker(name)
      })
      event.action = 'dispense'
      event.detail = `into ${name}`
    } else if (state.pipette && !state.pipette.loadedColor) {
      // Fill from beaker
      pipetteToTarget(beaker.group.position, () => {
        fillFromBeaker(name)
      })
      event.action = 'fill-pipette'
      event.detail = `from ${name}`
    } else {
      // No pipette state — just gentle wobble
      wobbleBeaker(name)
      event.action = 'observe'
    }
  } else if (name === 'tubes') {
    if (state.pipette?.loadedColor) {
      pipetteToTarget(new THREE.Vector3(-0.31, 0.05, 0.1), () => {
        dispenseIntoTube()
      })
      event.action = 'dispense'
      event.detail = 'into tube'
    }
  }

  state.onInteraction?.(event)
}

// ── Pipette movements ──

function liftPipette() {
  if (!state.pipette) return
  const home = state.pipette.homePosition
  const target = home.clone().add(new THREE.Vector3(0, 0.04, 0))
  state.pipetteBusy = true
  addTween({
    target: state.pipette.group,
    prop: 'position',
    from: state.pipette.group.position.clone(),
    to: target,
    duration: 0.3,
    onComplete: () => {
      state.pipetteBusy = false
    },
  })
  addTween({
    target: state.pipette.group,
    prop: 'rotation',
    from: state.pipette.group.rotation.clone(),
    to: new THREE.Euler(-0.2, 0, Math.PI / 5),
    duration: 0.3,
  })
}

function bobPipette() {
  if (!state.pipette) return
  const start = state.pipette.group.position.clone()
  const up = start.clone().add(new THREE.Vector3(0, 0.03, 0))
  state.pipetteBusy = true
  addTween({
    target: state.pipette.group,
    prop: 'position',
    from: start,
    to: up,
    duration: 0.2,
    onComplete: () => {
      addTween({
        target: state.pipette!.group,
        prop: 'position',
        from: up,
        to: start,
        duration: 0.2,
        onComplete: () => {
          state.pipetteBusy = false
        },
      })
    },
  })
  addTween({
    target: state.pipette.group,
    prop: 'rotation',
    from: state.pipette.group.rotation.clone(),
    to: new THREE.Euler(-0.25, 0, Math.PI / 4),
    duration: 0.2,
    onComplete: () => {
      addTween({
        target: state.pipette!.group,
        prop: 'rotation',
        from: new THREE.Euler(-0.25, 0, Math.PI / 4),
        to: state.pipette!.homeRotation.clone(),
        duration: 0.2,
      })
    },
  })
}

function pipetteToTarget(targetPos: THREE.Vector3, onArrived: () => void) {
  if (!state.pipette) return
  state.pipetteBusy = true
  const startPos = state.pipette.group.position.clone()
  const startRot = state.pipette.group.rotation.clone()

  // Hover position above target
  const hoverPos = new THREE.Vector3(targetPos.x, 0.16, targetPos.z)
  // Dipped position into target
  const dipPos = new THREE.Vector3(targetPos.x, 0.08, targetPos.z)
  const verticalRot = new THREE.Euler(0, 0, 0)
  const home = state.pipette.homePosition
  const homeRot = state.pipette.homeRotation

  // 1. Move + straighten to hover
  addTween({
    target: state.pipette.group,
    prop: 'position',
    from: startPos,
    to: hoverPos,
    duration: 0.5,
  })
  addTween({
    target: state.pipette.group,
    prop: 'rotation',
    from: startRot,
    to: verticalRot,
    duration: 0.5,
    onComplete: () => {
      // 2. Dip down
      addTween({
        target: state.pipette!.group,
        prop: 'position',
        from: hoverPos,
        to: dipPos,
        duration: 0.25,
        onComplete: () => {
          // 3. Trigger transfer effect
          onArrived()
          // 4. Lift back to hover
          setTimeout(() => {
            addTween({
              target: state.pipette!.group,
              prop: 'position',
              from: dipPos,
              to: hoverPos,
              duration: 0.25,
              onComplete: () => {
                // 5. Return home
                addTween({
                  target: state.pipette!.group,
                  prop: 'position',
                  from: hoverPos,
                  to: home,
                  duration: 0.5,
                })
                addTween({
                  target: state.pipette!.group,
                  prop: 'rotation',
                  from: verticalRot,
                  to: homeRot,
                  duration: 0.5,
                  onComplete: () => {
                    state.pipetteBusy = false
                  },
                })
              },
            })
          }, 300)
        },
      })
    },
  })
}

// ── Liquid transfers ──

function fillFromBeaker(name: LabObjectName) {
  const beaker = state.beakers.get(name)
  if (!beaker || !state.pipette) return

  const transferAmount = Math.min(0.15, beaker.volume)
  if (transferAmount <= 0) return

  const startVol = beaker.volume
  const endVol = beaker.volume - transferAmount
  beaker.volume = endVol

  // Animate beaker liquid level down
  addTween({
    target: beaker.liquidMesh,
    prop: 'scale.y',
    from: startVol,
    to: endVol,
    duration: 0.5,
  })
  addTween({
    target: beaker.group,
    prop: 'rotation',
    from: beaker.group.rotation.clone(),
    to: new THREE.Euler(0, 0, 0.08),
    duration: 0.2,
    onComplete: () => {
      addTween({
        target: beaker.group,
        prop: 'rotation',
        from: new THREE.Euler(0, 0, 0.08),
        to: new THREE.Euler(0, 0, -0.05),
        duration: 0.2,
        onComplete: () => {
          addTween({
            target: beaker.group,
            prop: 'rotation',
            from: new THREE.Euler(0, 0, -0.05),
            to: new THREE.Euler(0, 0, 0),
            duration: 0.2,
          })
        },
      })
    },
  })

  // Load pipette with this color
  state.pipette.loadedColor = beaker.color.clone()
  state.pipette.loadedVolume = transferAmount
  const pipMat = state.pipette.liquidMesh.material as THREE.MeshStandardMaterial
  pipMat.color.copy(beaker.color)
  pipMat.emissive.copy(beaker.color)
  pipMat.emissiveIntensity = 0.3

  // Fade in pipette liquid
  let fade = 0
  const interval = setInterval(() => {
    fade += 0.08
    pipMat.opacity = Math.min(fade, 0.85)
    if (fade >= 0.85) clearInterval(interval)
  }, 30)
}

function dispenseIntoBeaker(name: LabObjectName) {
  const beaker = state.beakers.get(name)
  if (!beaker || !state.pipette || !state.pipette.loadedColor) return

  const addedColor = state.pipette.loadedColor.clone()
  const addedVol = state.pipette.loadedVolume
  const newVol = Math.min(beaker.volume + addedVol, 1)

  // Mix colors weighted by volume
  const newColor = beaker.color.clone()
  const total = beaker.volume + addedVol
  if (total > 0) {
    newColor.r = (beaker.color.r * beaker.volume + addedColor.r * addedVol) / total
    newColor.g = (beaker.color.g * beaker.volume + addedColor.g * addedVol) / total
    newColor.b = (beaker.color.b * beaker.volume + addedColor.b * addedVol) / total
  }

  const startVol = beaker.volume
  const startColor = beaker.color.clone()
  beaker.volume = newVol
  beaker.color = newColor

  // Animate level up
  addTween({
    target: beaker.liquidMesh,
    prop: 'scale.y',
    from: startVol,
    to: newVol,
    duration: 0.5,
  })

  // Animate color blend
  addTween({
    target: beaker.liquidMesh,
    prop: 'material.color',
    from: startColor,
    to: newColor,
    duration: 0.5,
  })

  // Empty pipette
  emptyPipette()
}

function dispenseIntoTube() {
  if (!state.pipette || !state.pipette.loadedColor) return
  const tube = state.tubes[Math.floor(Math.random() * state.tubes.length)]
  if (!tube) return

  const startColor = tube.color.clone()
  const newColor = startColor.clone().lerp(state.pipette.loadedColor, 0.5)
  const addedVol = Math.max(state.pipette.loadedVolume, 0.08)
  const startVol = tube.volume
  const endVol = Math.min(1, tube.volume + addedVol)
  tube.color = newColor
  tube.volume = endVol

  addTween({
    target: tube.liquidMesh,
    prop: 'material.color',
    from: startColor,
    to: newColor,
    duration: 0.5,
  })
  addTween({
    target: tube.liquidMesh,
    prop: 'scale.y',
    from: startVol,
    to: endVol,
    duration: 0.5,
  })

  emptyPipette()
}

function emptyPipette() {
  if (!state.pipette) return
  state.pipette.loadedColor = null
  state.pipette.loadedVolume = 0
  const mat = state.pipette.liquidMesh.material as THREE.MeshStandardMaterial
  let fade = 0.85
  const interval = setInterval(() => {
    fade -= 0.08
    mat.opacity = Math.max(fade, 0)
    if (fade <= 0) {
      mat.emissive.set(0x000000)
      clearInterval(interval)
    }
  }, 30)
}

// ── Hot plate ──

function toggleHotPlate() {
  if (!state.hotPlate) return
  state.hotPlate.active = !state.hotPlate.active
  const surfMat = state.hotPlate.surfaceMesh.material as THREE.MeshStandardMaterial
  const ledMat = state.hotPlate.ledMesh.material as THREE.MeshStandardMaterial

  if (state.hotPlate.active) {
    addTween({
      target: state.hotPlate.surfaceMesh,
      prop: 'material.emissive',
      from: surfMat.emissive.clone(),
      to: new THREE.Color(0xff2200),
      duration: 0.6,
    })
    ledMat.emissive.set(0x00ff44)
    ledMat.color.set(0x00ff44)
    state.hotPlate.surfaceMesh.userData.persistentEmissive = true
  } else {
    addTween({
      target: state.hotPlate.surfaceMesh,
      prop: 'material.emissive',
      from: surfMat.emissive.clone(),
      to: new THREE.Color(0x000000),
      duration: 0.6,
    })
    ledMat.emissive.set(0x000000)
    ledMat.color.set(0x222222)
    state.hotPlate.surfaceMesh.userData.persistentEmissive = false
  }
}

// ── Beaker wobble (passive observation) ──

function wobbleBeaker(name: LabObjectName) {
  const beaker = state.beakers.get(name)
  if (!beaker) return
  const start = beaker.group.rotation.clone()
  const tilt = new THREE.Euler(0, 0, 0.05)
  addTween({
    target: beaker.group,
    prop: 'rotation',
    from: start,
    to: tilt,
    duration: 0.15,
    onComplete: () => {
      addTween({
        target: beaker.group,
        prop: 'rotation',
        from: tilt,
        to: new THREE.Euler(0, 0, -0.05),
        duration: 0.2,
        onComplete: () => {
          addTween({
            target: beaker.group,
            prop: 'rotation',
            from: new THREE.Euler(0, 0, -0.05),
            to: start,
            duration: 0.15,
          })
        },
      })
    },
  })
}

// ─── Guided-mode play (legacy API for step animations) ────────────────────────

export function playAnimation(type: string) {
  if (state.mode !== 'guided') return
  if (type === 'pipette-transfer') {
    // Auto demo: pipette goes to beaker1, fills, then dispenses into tubes
    if (!state.pipette) return
    const b1 = state.beakers.get('beaker1')
    if (!b1) return
    pipetteToTarget(b1.group.position, () => fillFromBeaker('beaker1'))
  } else if (type === 'heat') {
    if (state.hotPlate && !state.hotPlate.active) toggleHotPlate()
  } else if (type === 'observe') {
    wobbleBeaker('beaker2')
  } else if (type === 'measure') {
    bobPipette()
  } else if (type === 'mix') {
    wobbleBeaker('beaker1')
    setTimeout(() => wobbleBeaker('beaker2'), 200)
    setTimeout(() => wobbleBeaker('beaker3'), 400)
  }
}

// ─── Reset ───────────────────────────────────────────────────────────────────

export function resetLab() {
  // Restore beakers to default
  state.beakers.forEach((b) => {
    b.volume = b.defaultVolume
    b.color.copy(b.defaultColor)
    b.liquidMesh.scale.y = b.defaultVolume
    const mat = b.liquidMesh.material as THREE.MeshStandardMaterial
    mat.color.copy(b.defaultColor)
    mat.emissive.copy(b.defaultColor)
    if (
      typeof b.liquidMesh.userData.volumeBaseY === 'number' &&
      typeof b.liquidMesh.userData.volumeHalfHeight === 'number'
    ) {
      b.liquidMesh.position.y =
        b.liquidMesh.userData.volumeBaseY + b.liquidMesh.userData.volumeHalfHeight * b.defaultVolume
    }
  })
  // Restore test tubes
  state.tubes.forEach((tube) => {
    tube.volume = tube.defaultVolume
    tube.color.copy(tube.defaultColor)
    tube.liquidMesh.scale.y = tube.defaultVolume
    const mat = tube.liquidMesh.material as THREE.MeshStandardMaterial
    mat.color.copy(tube.defaultColor)
    mat.emissive.copy(tube.defaultColor)
  })
  // Empty pipette
  if (state.pipette) {
    state.pipette.group.position.copy(state.pipette.homePosition)
    state.pipette.group.rotation.copy(state.pipette.homeRotation)
    emptyPipette()
  }
  // Hot plate off
  if (state.hotPlate?.active) toggleHotPlate()
  state.tweens = []
  state.pipetteBusy = false
}

// ─── Placement ────────────────────────────────────────────────────────────────

export function placeLab() {
  if (state.labPlaced || !state.reticle || !state.labGroup) return
  if (state.reticle.visible) {
    const pos = new THREE.Vector3().setFromMatrixPosition(state.reticle.matrix)
    state.labGroup.position.copy(pos)
    state.labGroup.scale.set(1, 1, 1)
  } else {
    return
  }
  state.labGroup.visible = true
  state.reticle.visible = false
  state.labPlaced = true
  state.onLabPlaced?.()
}

export function placeLabFixed() {
  if (state.labPlaced || !state.labGroup) return
  state.labGroup.position.set(0, -0.13, -0.35)
  state.labGroup.scale.set(1.6, 1.6, 1.6)
  state.labGroup.visible = true
  state.labPlaced = true
  state.onLabPlaced?.()
}

// ─── WebXR Session ────────────────────────────────────────────────────────────

export async function enterXR(session: XRSession) {
  if (!state.renderer) return

  state.xrSession = session
  state.renderer.xr.setReferenceSpaceType('local')
  await state.renderer.xr.setSession(session)

  state.referenceSpace = await session.requestReferenceSpace('local')
  const viewerSpace = await session.requestReferenceSpace('viewer')

  const xrSessionAny = session as XRSession & {
    requestHitTestSource?: (opts: { space: XRReferenceSpace }) => Promise<XRHitTestSource>
  }
  if (xrSessionAny.requestHitTestSource) {
    state.hitTestSource =
      (await xrSessionAny.requestHitTestSource({ space: viewerSpace })) ?? null
  }

  // WebXR controller select → center-screen tap
  session.addEventListener('select', () => {
    if (!state.renderer || !state.labPlaced) {
      placeLab()
      return
    }
    // Use centre of viewport
    const canvas = state.renderer.domElement
    handlePointerTap(canvas.clientWidth / 2, canvas.clientHeight / 2)
  })

  session.addEventListener('end', () => {
    state.hitTestSource = null
    state.referenceSpace = null
    state.xrSession = null
    state.labPlaced = false
    if (state.labGroup) state.labGroup.visible = false
    if (state.reticle) state.reticle.visible = false
  })

  startXRLoop()
}

// ─── Cleanup ──────────────────────────────────────────────────────────────────

export function cleanup() {
  window.removeEventListener('resize', onResize)
  if (state.animationFrameId) {
    cancelAnimationFrame(state.animationFrameId)
    state.animationFrameId = null
  }
  if (state.renderer) {
    state.renderer.setAnimationLoop(null)
    state.renderer.dispose()
    state.renderer = null
  }
  state.scene = null
  state.camera = null
  state.labGroup = null
  state.objects = {}
  state.beakers.clear()
  state.tubes = []
  state.pipette = null
  state.hotPlate = null
  state.tweens = []
  state.highlightedObject = null
  state.hoveredObject = null
  state.hoverScale.clear()
  state.hoverEmissive.clear()
  state.labPlaced = false
  state.hitTestSource = null
  state.referenceSpace = null
  state.xrSession = null
  state.interactiveObjects = []
}
