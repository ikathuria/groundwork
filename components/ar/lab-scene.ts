import * as THREE from 'three'
// Procedural studio environment baked into a PMREM cubemap. Replaces the
// flat ambient term with real image-based lighting so chrome / glass / silicon
// have something convincing to reflect, without shipping any HDR assets.
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import type {
  LabSceneSpec,
  LabStation,
  StationAnimation,
  StationStateChange,
} from '@/lib/plan-schema'

// ─── Types ───────────────────────────────────────────────────────────────────

export type Mode = 'guided' | 'interactive'
export type HighlightTarget = string

interface StationRuntime {
  id: string
  spec: LabStation
  group: THREE.Group
  // Tinted meshes (anything we recolour on state-change)
  tintedMeshes: THREE.Mesh[]
  // Surface mesh whose emissive we drive (heat / observe / measure animations)
  surface: THREE.Mesh
  // Optional accessory meshes used by specific kinds
  glow?: THREE.Mesh
  spinner?: THREE.Object3D
  liquid?: THREE.Mesh
  // Bookkeeping
  baseColor: THREE.Color
  defaultColor: THREE.Color
  defaultLabel: string
  active: boolean
  defaultActive: boolean
}

type Tween = {
  target: THREE.Object3D | THREE.Mesh
  prop: 'position' | 'rotation' | 'scale.y' | 'scale' | 'material.color' | 'material.emissive'
  from: THREE.Vector3 | THREE.Euler | THREE.Color | number
  to: THREE.Vector3 | THREE.Euler | THREE.Color | number
  duration: number
  elapsed: number
  ease?: (t: number) => number
  onComplete?: () => void
}

// Pending pointer interaction (covers both touch and mouse). Recorded on
// pointer-down on any station, upgraded to "drag" once the user moves more
// than DRAG_THRESHOLD_PX from the start. On pointer-up: tap → triggerInteraction
// (the station's animation), drag → drop the station at its current position.
//
// While a drag is active, the station is translated on the bench plane so the
// user can rearrange tools in their lab. Coupons keep their tap-to-flip
// behaviour; rotation is no longer bound to drag because translate is the
// primary affordance the user expects from "drag and drop".
interface DragState {
  stationId: string
  startScreenX: number
  startScreenY: number
  isDrag: boolean
  // Local-space anchor on the bench plane where the user grabbed the station.
  // While dragging, the station's local position is updated to keep the same
  // grab-point under the cursor (offset = grabPoint - station.position).
  grabOffsetX: number
  grabOffsetZ: number
  // Original local position so we can snap-back-and-drop with a clean tween.
  originX: number
  originY: number
  originZ: number
}

const DRAG_THRESHOLD_PX = 6
// While a station is being dragged, it floats this many lab-local units above
// its rest position so the lift reads as a real "pick up" gesture. The drop
// tween eases it back down on release.
const DRAG_LIFT = 0.025

interface SceneState {
  renderer: THREE.WebGLRenderer | null
  scene: THREE.Scene | null
  camera: THREE.PerspectiveCamera | null
  labGroup: THREE.Group | null
  reticle: THREE.Mesh | null
  spec: LabSceneSpec | null
  stations: Map<string, StationRuntime>
  highlightedStationId: string | null
  highlightPulse: number
  hoveredStationId: string | null
  hoverScale: Map<string, THREE.Vector3>
  hoverEmissive: Map<THREE.Mesh, THREE.Color>
  labPlaced: boolean
  animationFrameId: number | null
  xrSession: XRSession | null
  hitTestSource: XRHitTestSource | null
  referenceSpace: XRReferenceSpace | null
  // Whether the latest hit pose looks like a horizontal tabletop/floor surface.
  surfacePlacementValid: boolean
  onLabPlaced: (() => void) | null
  onInteraction: ((event: InteractionEvent) => void) | null
  // Fired whenever the hovered station id or its on-screen label position
  // changes, so the React HUD can render a name tooltip following the cursor.
  // Called with `null` when nothing is hovered.
  onHover: ((info: HoverInfo | null) => void) | null
  mode: Mode
  raycaster: THREE.Raycaster
  tweens: Tween[]
  interactiveObjects: THREE.Object3D[]
  // Stations currently running a continuous spinner animation, by id
  spinningStations: Set<string>
  // Active drag-or-tap on a station — drag-to-translate behaviour
  drag: DragState | null
  // Reusable plane for projecting the cursor onto the bench during drags.
  benchPlaneLocal: THREE.Plane
}

export interface HoverInfo {
  id: string
  label: string
  // Screen-space (clientX/clientY) so the React layer can position a DOM
  // tooltip directly without a re-projection.
  x: number
  y: number
}

export interface InteractionEvent {
  object: string // station id
  action: 'tap' | 'operate' | 'mix' | 'heat' | 'observe' | 'measure' | 'transfer'
  detail?: string
}

export interface PlacementStatus {
  reticleVisible: boolean
  surfacePlacementValid: boolean
  canPlace: boolean
  message: string
}

const state: SceneState = {
  renderer: null,
  scene: null,
  camera: null,
  labGroup: null,
  reticle: null,
  spec: null,
  stations: new Map(),
  highlightedStationId: null,
  highlightPulse: 0,
  hoveredStationId: null,
  hoverScale: new Map(),
  hoverEmissive: new Map(),
  labPlaced: false,
  animationFrameId: null,
  xrSession: null,
  hitTestSource: null,
  referenceSpace: null,
  surfacePlacementValid: false,
  onLabPlaced: null,
  onInteraction: null,
  onHover: null,
  mode: 'interactive',
  raycaster: new THREE.Raycaster(),
  tweens: [],
  interactiveObjects: [],
  spinningStations: new Set(),
  drag: null,
  benchPlaneLocal: new THREE.Plane(new THREE.Vector3(0, 1, 0), 0),
}

// ─── Init ─────────────────────────────────────────────────────────────────────

export function initScene(
  canvas: HTMLCanvasElement,
  onLabPlaced: () => void,
  spec: LabSceneSpec,
) {
  state.onLabPlaced = onLabPlaced
  state.labPlaced = false
  state.spec = spec

  state.scene = new THREE.Scene()

  state.camera = new THREE.PerspectiveCamera(
    70,
    canvas.clientWidth / canvas.clientHeight,
    0.01,
    20,
  )
  state.camera.position.set(0, 0.45, 0.95)
  state.camera.lookAt(0, 0, 0.04)

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
  // ACES Filmic tone mapping + a touch of exposure boost gives chrome / glass /
  // silicon a cinematic, physically-plausible response curve instead of the
  // washed-out look of linear → sRGB.
  state.renderer.toneMapping = THREE.ACESFilmicToneMapping
  state.renderer.toneMappingExposure = 1.05
  // Soft real-time shadows. Each station only casts a small contact shadow,
  // and the bench is the sole receiver, so even a 1024² map looks crisp.
  state.renderer.shadowMap.enabled = true
  state.renderer.shadowMap.type = THREE.PCFSoftShadowMap

  // Procedural studio env map → real reflections on every PBR material.
  // Generated once, then released; the PMREM texture stays on `scene.environment`.
  const pmrem = new THREE.PMREMGenerator(state.renderer)
  pmrem.compileEquirectangularShader()
  const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
  state.scene.environment = envTex
  pmrem.dispose()

  // Hemisphere fill — sky-blue from above, warm gray-brown from below — so
  // the underside of stations doesn't read pitch-black even with the env map.
  const hemi = new THREE.HemisphereLight(0xbfd5ff, 0x1a1d24, 0.45)
  state.scene.add(hemi)

  // Key directional light: simulates a soft overhead lab fixture and casts the
  // contact shadows that ground every station to the bench.
  const dirLight = new THREE.DirectionalLight(0xffffff, 1.6)
  dirLight.position.set(0.6, 1.4, 0.7)
  dirLight.castShadow = true
  dirLight.shadow.mapSize.set(1024, 1024)
  dirLight.shadow.camera.near = 0.1
  dirLight.shadow.camera.far = 4
  dirLight.shadow.camera.left = -0.7
  dirLight.shadow.camera.right = 0.7
  dirLight.shadow.camera.top = 0.5
  dirLight.shadow.camera.bottom = -0.5
  dirLight.shadow.bias = -0.0005
  dirLight.shadow.radius = 4
  state.scene.add(dirLight)

  // Warm rim from the front-left mimics a furnace / IR lamp glow and pulls
  // copper / silver tones out of the metallization fingers.
  const rim = new THREE.PointLight(0xff9a55, 0.45, 3)
  rim.position.set(-0.8, 0.6, 0.7)
  state.scene.add(rim)

  state.labGroup = buildSceneFromSpec(spec)
  state.labGroup.visible = false
  state.scene.add(state.labGroup)

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

// ─── Scene Builder ───────────────────────────────────────────────────────────

function buildSceneFromSpec(spec: LabSceneSpec): THREE.Group {
  const group = new THREE.Group()
  const interactive: THREE.Object3D[] = []

  // ── Lab room: floor, walls, ceiling fixture, ambient props ──────────────
  // These give the user the feeling of being *inside a lab* instead of
  // looking at floating boxes in the dark. Built once, never interactive.
  buildLabEnvironment(group)

  // ── Bench: brushed stainless top with a rubber bench-mat inset ──────────
  // Receives the directional-light shadows from every station so coupons feel
  // grounded instead of floating.
  const benchTop = new THREE.Mesh(
    new THREE.BoxGeometry(0.95, 0.015, 0.5),
    new THREE.MeshStandardMaterial({
      color: 0x1c2128,
      roughness: 0.42,
      metalness: 0.85,
      envMapIntensity: 0.85,
    }),
  )
  benchTop.position.y = -0.008
  benchTop.receiveShadow = true
  group.add(benchTop)

  // Subtly raised dark rubber mat in the centre — kills the mirror reflection
  // right under the stations so the contact shadow reads cleanly.
  const mat = new THREE.Mesh(
    new THREE.BoxGeometry(0.78, 0.001, 0.36),
    new THREE.MeshStandardMaterial({
      color: 0x0c1015,
      roughness: 0.95,
      metalness: 0.05,
    }),
  )
  mat.position.y = 0.0
  mat.receiveShadow = true
  group.add(mat)

  // Front lip of the bench (a slim steel edge) — adds depth at the camera-side.
  const lip = new THREE.Mesh(
    new THREE.BoxGeometry(0.95, 0.018, 0.012),
    new THREE.MeshStandardMaterial({ color: 0x2a3038, roughness: 0.3, metalness: 0.95 }),
  )
  lip.position.set(0, -0.011, 0.256)
  lip.receiveShadow = true
  group.add(lip)

  const legMat = new THREE.MeshStandardMaterial({
    color: 0x1f242c,
    metalness: 0.95,
    roughness: 0.3,
  })
  const legGeo = new THREE.BoxGeometry(0.02, 0.12, 0.02)
  ;[
    [-0.45, -0.23],
    [-0.45, 0.23],
    [0.45, -0.23],
    [0.45, 0.23],
  ].forEach(([x, z]) => {
    const leg = new THREE.Mesh(legGeo, legMat)
    leg.position.set(x, -0.07, z)
    leg.castShadow = true
    leg.receiveShadow = true
    group.add(leg)
  })

  // ── Stations ─────────────────────────────────────────────────────────────
  spec.scene.stations.forEach((stationSpec) => {
    const runtime = buildStation(stationSpec)
    // Every solid mesh in a station casts a contact shadow on the bench.
    runtime.group.traverse((o) => {
      if (o instanceof THREE.Mesh) {
        const mat = o.material as THREE.Material | THREE.Material[]
        // Skip transparent / transmissive parts (glass cover, beaker walls etc.)
        // — they shouldn't draw a hard black shadow from the key light.
        const isLit = (m: THREE.Material) => {
          const physical = m as THREE.MeshPhysicalMaterial
          const transmission = physical.transmission ?? 0
          return transmission <= 0 && !m.transparent
        }
        const skipShadow = Array.isArray(mat) ? !mat.every(isLit) : !isLit(mat)
        o.castShadow = !skipShadow
        o.receiveShadow = true
      }
    })
    group.add(runtime.group)
    state.stations.set(stationSpec.id, runtime)
    interactive.push(runtime.group)
  })

  state.interactiveObjects = interactive
  return group
}

// Builds the static lab room around the bench: floor, back wall with
// shelving + reagent bottles, side-wall hint, ceiling light panel, and a few
// peripheral props (notebook, monitor, pegboard with tools). Designed to
// read at a glance from the default camera angle while staying inexpensive
// (≈40 meshes total, no textures, no shadow casters except the ceiling light
// fixture itself which only receives).
function buildLabEnvironment(group: THREE.Group): void {
  // Anchored so the bench's legs (bottom ≈ y = -0.13) sit on the floor.
  const FLOOR_Y = -0.13
  const WALL_BACK_Z = -0.62
  const WALL_LEFT_X = -1.05
  const WALL_RIGHT_X = 1.05
  const ROOM_HEIGHT = 1.45

  // ── Floor: matte off-white vinyl with a faint hex pattern, painted via a
  //   procedural canvas texture so we don't ship any image assets. ─────────
  const floorTex = makeFloorTexture()
  const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(3.6, 2.6),
    new THREE.MeshStandardMaterial({
      map: floorTex,
      color: 0xeef0f3,
      roughness: 0.85,
      metalness: 0.0,
      envMapIntensity: 0.4,
    }),
  )
  floor.rotation.x = -Math.PI / 2
  floor.position.set(0, FLOOR_Y, -0.05)
  floor.receiveShadow = true
  group.add(floor)

  // ── Back wall: warm off-white painted plaster with a chair-rail strip ──
  const wallMat = new THREE.MeshStandardMaterial({
    color: 0xe7eaee,
    roughness: 0.95,
    metalness: 0.0,
    envMapIntensity: 0.5,
  })
  const wallBack = new THREE.Mesh(
    new THREE.PlaneGeometry(3.6, ROOM_HEIGHT),
    wallMat,
  )
  wallBack.position.set(0, FLOOR_Y + ROOM_HEIGHT / 2, WALL_BACK_Z)
  wallBack.receiveShadow = true
  group.add(wallBack)

  // Painted dado strip along the wall (a thin darker band) — adds depth
  // and reads as a real-world mid-rail you'd see in a wet lab.
  const dado = new THREE.Mesh(
    new THREE.BoxGeometry(3.6, 0.018, 0.005),
    new THREE.MeshStandardMaterial({ color: 0x6b7280, roughness: 0.8 }),
  )
  dado.position.set(0, FLOOR_Y + 0.42, WALL_BACK_Z + 0.003)
  group.add(dado)

  // ── Side-wall hints (left + right): subtle cooler tone so the room
  //   reads as enclosed without committing to fully built-out side walls. ─
  const sideMat = wallMat.clone()
  sideMat.color = new THREE.Color(0xdfe3e8)
  const sideL = new THREE.Mesh(
    new THREE.PlaneGeometry(1.4, ROOM_HEIGHT),
    sideMat,
  )
  sideL.position.set(WALL_LEFT_X, FLOOR_Y + ROOM_HEIGHT / 2, 0)
  sideL.rotation.y = Math.PI / 2
  sideL.receiveShadow = true
  group.add(sideL)

  const sideR = sideL.clone()
  sideR.material = sideMat
  sideR.position.set(WALL_RIGHT_X, FLOOR_Y + ROOM_HEIGHT / 2, 0)
  sideR.rotation.y = -Math.PI / 2
  group.add(sideR)

  // ── Ceiling: dark indigo with a single recessed luminaire panel directly
  //   over the bench. The luminaire is emissive + drives a hidden point
  //   light so the bench gets a believable downwash. ─────────────────────
  const ceiling = new THREE.Mesh(
    new THREE.PlaneGeometry(3.6, 2.6),
    new THREE.MeshStandardMaterial({ color: 0x1a2030, roughness: 0.95 }),
  )
  ceiling.rotation.x = Math.PI / 2
  ceiling.position.set(0, FLOOR_Y + ROOM_HEIGHT, -0.05)
  group.add(ceiling)

  const luminaireFrame = new THREE.Mesh(
    new THREE.BoxGeometry(0.6, 0.03, 0.22),
    new THREE.MeshStandardMaterial({ color: 0x9aa3ad, metalness: 0.7, roughness: 0.4 }),
  )
  luminaireFrame.position.set(0, FLOOR_Y + ROOM_HEIGHT - 0.018, -0.05)
  group.add(luminaireFrame)

  const luminairePanel = new THREE.Mesh(
    new THREE.PlaneGeometry(0.56, 0.2),
    new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffe8c8,
      emissiveIntensity: 1.4,
      roughness: 0.6,
    }),
  )
  luminairePanel.rotation.x = Math.PI / 2
  luminairePanel.position.set(0, FLOOR_Y + ROOM_HEIGHT - 0.034, -0.05)
  group.add(luminairePanel)

  const luminaireLight = new THREE.PointLight(0xfff3dc, 0.7, 2.5, 1.8)
  luminaireLight.position.set(0, FLOOR_Y + ROOM_HEIGHT - 0.06, -0.05)
  group.add(luminaireLight)

  // ── Wall-mounted shelving unit (back wall, slightly off-centre). Three
  //   shelves of stylised reagent bottles in muted lab tones. ─────────────
  const shelfMat = new THREE.MeshStandardMaterial({
    color: 0xc9ced6,
    roughness: 0.5,
    metalness: 0.4,
  })
  const shelfBox = new THREE.Group()
  shelfBox.position.set(-0.6, FLOOR_Y + 0.55, WALL_BACK_Z + 0.07)

  // Cabinet back panel
  const shelfBack = new THREE.Mesh(
    new THREE.BoxGeometry(0.55, 0.42, 0.005),
    new THREE.MeshStandardMaterial({ color: 0xb8bec7, roughness: 0.7 }),
  )
  shelfBack.position.z = -0.06
  shelfBox.add(shelfBack)

  for (let i = 0; i < 3; i++) {
    const shelf = new THREE.Mesh(
      new THREE.BoxGeometry(0.55, 0.008, 0.12),
      shelfMat,
    )
    shelf.position.set(0, -0.18 + i * 0.18, 0)
    shelf.castShadow = false
    shelf.receiveShadow = true
    shelfBox.add(shelf)

    // Bottles per shelf — colored caps + tinted glass.
    const bottleColors = [0xe6c9a3, 0xa3c9e6, 0xc9e6a3, 0xe6a3c9, 0xc9a3e6]
    for (let b = 0; b < 5; b++) {
      const x = -0.21 + b * 0.105
      const h = 0.08 + ((b * 7 + i * 11) % 5) * 0.012
      const col = bottleColors[(b + i) % bottleColors.length]
      const bottle = new THREE.Mesh(
        new THREE.CylinderGeometry(0.02, 0.022, h, 18),
        new THREE.MeshPhysicalMaterial({
          color: col,
          roughness: 0.25,
          metalness: 0.0,
          transmission: 0.4,
          thickness: 0.005,
          ior: 1.45,
          transparent: true,
        }),
      )
      bottle.position.set(x, -0.18 + i * 0.18 + h / 2 + 0.004, 0)
      bottle.castShadow = false
      shelfBox.add(bottle)

      const cap = new THREE.Mesh(
        new THREE.CylinderGeometry(0.022, 0.022, 0.012, 18),
        new THREE.MeshStandardMaterial({ color: 0x2c3340, roughness: 0.6, metalness: 0.4 }),
      )
      cap.position.set(x, -0.18 + i * 0.18 + h + 0.01, 0)
      shelfBox.add(cap)

      // Subtle paper label on the front face.
      const label = new THREE.Mesh(
        new THREE.PlaneGeometry(0.025, 0.022),
        new THREE.MeshBasicMaterial({ color: 0xf6f6ee }),
      )
      label.position.set(x, -0.18 + i * 0.18 + h / 2 + 0.004, 0.0205)
      shelfBox.add(label)
    }
  }
  group.add(shelfBox)

  // ── Pegboard with hanging tools (right of the cabinet) ─────────────────
  const pegboard = new THREE.Mesh(
    new THREE.BoxGeometry(0.42, 0.34, 0.004),
    new THREE.MeshStandardMaterial({ color: 0xe9b87a, roughness: 0.85 }),
  )
  pegboard.position.set(0.55, FLOOR_Y + 0.55, WALL_BACK_Z + 0.005)
  group.add(pegboard)

  // Hex peg dots (cosmetic — flat disks)
  const pegMat = new THREE.MeshStandardMaterial({ color: 0xc9925a, roughness: 0.95 })
  const pegGeo = new THREE.CircleGeometry(0.005, 12)
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 8; c++) {
      const peg = new THREE.Mesh(pegGeo, pegMat)
      peg.rotation.y = Math.PI
      peg.position.set(
        0.55 - 0.18 + c * 0.052,
        FLOOR_Y + 0.55 - 0.13 + r * 0.078,
        WALL_BACK_Z + 0.0085,
      )
      group.add(peg)
    }
  }

  // A couple of stylised hanging tools (silhouettes, not real meshes — just
  // simple boxes / cylinders that read as "wrench / scissors / spatula").
  const toolMat = new THREE.MeshStandardMaterial({
    color: 0x4a5462,
    metalness: 0.8,
    roughness: 0.35,
  })
  const tool1 = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.13, 0.005), toolMat)
  tool1.position.set(0.42, FLOOR_Y + 0.5, WALL_BACK_Z + 0.012)
  group.add(tool1)
  const tool2 = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.1, 0.005), toolMat)
  tool2.position.set(0.5, FLOOR_Y + 0.52, WALL_BACK_Z + 0.012)
  group.add(tool2)
  const tool3 = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.13, 10), toolMat)
  tool3.position.set(0.65, FLOOR_Y + 0.51, WALL_BACK_Z + 0.012)
  group.add(tool3)

  // ── Safety / info posters above the bench ──────────────────────────────
  // Small framed rectangles in distinctive colours so the eye reads them
  // as posters at a glance, even without legible text.
  const posterFrameMat = new THREE.MeshStandardMaterial({
    color: 0x222831,
    roughness: 0.6,
  })
  const posterMats = [
    new THREE.MeshBasicMaterial({ color: 0xfde68a }), // periodic-table yellow
    new THREE.MeshBasicMaterial({ color: 0xbae6fd }), // safety blue
  ]
  const posterPos: [number, number][] = [
    [-0.12, 0.78],
    [0.12, 0.78],
  ]
  posterPos.forEach(([x, y], i) => {
    const frame = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.12, 0.006), posterFrameMat)
    frame.position.set(x, FLOOR_Y + y, WALL_BACK_Z + 0.005)
    group.add(frame)
    const sheet = new THREE.Mesh(new THREE.PlaneGeometry(0.16, 0.1), posterMats[i])
    sheet.position.set(x, FLOOR_Y + y, WALL_BACK_Z + 0.009)
    group.add(sheet)
  })

  // ── Bench-side props: clipboard / lab notebook + monitor + pen cup ─────
  // Notebook on the far-left of the bench
  const notebook = new THREE.Mesh(
    new THREE.BoxGeometry(0.16, 0.005, 0.11),
    new THREE.MeshStandardMaterial({ color: 0xf3eed8, roughness: 0.85 }),
  )
  notebook.position.set(-0.4, 0.005, 0.18)
  notebook.rotation.y = 0.12
  notebook.castShadow = true
  notebook.receiveShadow = true
  group.add(notebook)
  const notebookSpine = new THREE.Mesh(
    new THREE.BoxGeometry(0.005, 0.006, 0.115),
    new THREE.MeshStandardMaterial({ color: 0x9b1c1c, roughness: 0.7 }),
  )
  notebookSpine.position.set(-0.475, 0.006, 0.18)
  notebookSpine.rotation.y = 0.12
  group.add(notebookSpine)

  // Pen cup
  const penCup = new THREE.Mesh(
    new THREE.CylinderGeometry(0.018, 0.02, 0.045, 18),
    new THREE.MeshStandardMaterial({ color: 0x3b4250, roughness: 0.5, metalness: 0.4 }),
  )
  penCup.position.set(-0.43, 0.022, 0.06)
  penCup.castShadow = true
  penCup.receiveShadow = true
  group.add(penCup)
  // Pens / markers sticking up
  const penMats = [0xff6b35, 0x00d4aa, 0x4a5462].map(
    (c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.6 }),
  )
  for (let p = 0; p < 3; p++) {
    const pen = new THREE.Mesh(
      new THREE.CylinderGeometry(0.0028, 0.0028, 0.07, 8),
      penMats[p],
    )
    pen.position.set(-0.43 + (p - 1) * 0.005, 0.06, 0.06 + (p - 1) * 0.004)
    pen.rotation.set(0.05 * (p - 1), 0, 0.06 * (p - 1))
    group.add(pen)
  }

  // Computer monitor on the right edge of the bench
  const monitorBase = new THREE.Mesh(
    new THREE.BoxGeometry(0.06, 0.008, 0.05),
    new THREE.MeshStandardMaterial({ color: 0x2c3340, metalness: 0.7, roughness: 0.3 }),
  )
  monitorBase.position.set(0.42, 0.012, 0.18)
  group.add(monitorBase)
  const monitorStem = new THREE.Mesh(
    new THREE.BoxGeometry(0.01, 0.07, 0.012),
    new THREE.MeshStandardMaterial({ color: 0x2c3340, metalness: 0.7, roughness: 0.3 }),
  )
  monitorStem.position.set(0.42, 0.05, 0.18)
  group.add(monitorStem)
  const monitorScreen = new THREE.Mesh(
    new THREE.BoxGeometry(0.18, 0.11, 0.008),
    new THREE.MeshStandardMaterial({ color: 0x0a0f1a, metalness: 0.4, roughness: 0.4 }),
  )
  monitorScreen.position.set(0.42, 0.105, 0.175)
  monitorScreen.rotation.y = -0.3
  group.add(monitorScreen)
  const monitorPanel = new THREE.Mesh(
    new THREE.PlaneGeometry(0.16, 0.095),
    new THREE.MeshStandardMaterial({
      color: 0x0a3548,
      emissive: 0x113f6b,
      emissiveIntensity: 0.6,
      roughness: 0.5,
    }),
  )
  monitorPanel.position.set(0.42, 0.105, 0.179)
  monitorPanel.rotation.y = -0.3
  // Nudge in the direction the screen faces so the panel sits just in front.
  monitorPanel.translateZ(0.005)
  group.add(monitorPanel)

  // Floor decal strip in front of the bench — printed lab-safety yellow line.
  const safetyLine = new THREE.Mesh(
    new THREE.PlaneGeometry(1.4, 0.04),
    new THREE.MeshStandardMaterial({ color: 0xf2c14e, roughness: 0.9 }),
  )
  safetyLine.rotation.x = -Math.PI / 2
  safetyLine.position.set(0, FLOOR_Y + 0.001, 0.42)
  group.add(safetyLine)

  // Stool tucked under the right side of the bench (silhouette only).
  const stoolSeat = new THREE.Mesh(
    new THREE.CylinderGeometry(0.07, 0.07, 0.012, 24),
    new THREE.MeshStandardMaterial({ color: 0x1c2128, roughness: 0.6, metalness: 0.3 }),
  )
  stoolSeat.position.set(0.32, FLOOR_Y + 0.18, 0.46)
  group.add(stoolSeat)
  const stoolStem = new THREE.Mesh(
    new THREE.CylinderGeometry(0.008, 0.008, 0.18, 12),
    new THREE.MeshStandardMaterial({ color: 0x9aa3ad, metalness: 0.85, roughness: 0.3 }),
  )
  stoolStem.position.set(0.32, FLOOR_Y + 0.09, 0.46)
  group.add(stoolStem)
  const stoolBase = new THREE.Mesh(
    new THREE.CylinderGeometry(0.085, 0.09, 0.01, 18),
    new THREE.MeshStandardMaterial({ color: 0x2c3340, metalness: 0.7, roughness: 0.4 }),
  )
  stoolBase.position.set(0.32, FLOOR_Y + 0.005, 0.46)
  group.add(stoolBase)
}

// Builds a ~512×512 procedural floor texture: pale vinyl with a soft hex
// pattern. Drawn once into a canvas → CanvasTexture, no image asset shipped.
function makeFloorTexture(): THREE.Texture {
  const size = 256
  const canvas =
    typeof OffscreenCanvas !== 'undefined'
      ? (new OffscreenCanvas(size, size) as unknown as HTMLCanvasElement)
      : (document.createElement('canvas') as HTMLCanvasElement)
  canvas.width = size
  canvas.height = size
  const ctx = (canvas as HTMLCanvasElement).getContext('2d')!
  // Pale vinyl base
  ctx.fillStyle = '#e7eaef'
  ctx.fillRect(0, 0, size, size)
  // Subtle speckle for texture
  ctx.fillStyle = 'rgba(80, 90, 100, 0.06)'
  for (let i = 0; i < 600; i++) {
    const x = Math.random() * size
    const y = Math.random() * size
    ctx.fillRect(x, y, 1, 1)
  }
  // Hex grid lines
  ctx.strokeStyle = 'rgba(70, 80, 90, 0.10)'
  ctx.lineWidth = 1
  const r = 24
  const w = Math.sqrt(3) * r
  const h = 1.5 * r
  for (let row = -1; row * h < size + r; row++) {
    for (let col = -1; col * w < size + w; col++) {
      const cx = col * w + ((row % 2) * w) / 2
      const cy = row * h
      ctx.beginPath()
      for (let k = 0; k < 6; k++) {
        const a = (Math.PI / 3) * k + Math.PI / 6
        const px = cx + r * Math.cos(a)
        const py = cy + r * Math.sin(a)
        if (k === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.closePath()
      ctx.stroke()
    }
  }
  const tex = new THREE.CanvasTexture(canvas as unknown as HTMLCanvasElement)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.repeat.set(2, 1.5)
  tex.anisotropy = 4
  return tex
}

function buildStation(s: LabStation): StationRuntime {
  const g = new THREE.Group()
  g.position.set(s.position[0], s.position[1] ?? 0, s.position[2])
  g.userData.stationId = s.id

  const color = new THREE.Color(s.color ?? '#4a90e2')
  let pieces: ReturnType<typeof buildKindPieces>
  switch (s.kind) {
    case 'tall-instrument':
      pieces = buildTallInstrument(g, color)
      break
    case 'flat-instrument':
      pieces = buildFlatInstrument(g, color)
      break
    case 'furnace':
      pieces = buildFurnace(g, color)
      break
    case 'microscope':
      pieces = buildMicroscope(g, color)
      break
    case 'incubator':
      pieces = buildIncubator(g, color)
      break
    case 'plate-reader':
      pieces = buildPlateReader(g, color)
      break
    case 'dish':
      pieces = buildDish(g, color)
      break
    case 'beaker':
      pieces = buildBeaker(g, color)
      break
    case 'tube-rack':
      pieces = buildTubeRack(g, color)
      break
    case 'pipette':
      pieces = buildPipette(g, color)
      break
    case 'scaffold':
      pieces = buildScaffold(g, color)
      break
    case 'printer':
      pieces = buildPrinter(g, color)
      break
    case 'hotplate':
      pieces = buildHotplate(g, color)
      break
    case 'solar-cell':
      pieces = buildSolarCell(g, color)
      break
    case 'pv-module':
      pieces = buildPvModule(g, color)
      break
    default:
      pieces = buildFlatInstrument(g, color)
      break
  }

  // Tag every descendant with the station id for raycasting.
  g.traverse((o) => {
    o.userData.stationId = s.id
  })

  return {
    id: s.id,
    spec: s,
    group: g,
    tintedMeshes: pieces.tinted,
    surface: pieces.surface,
    glow: pieces.glow,
    spinner: pieces.spinner,
    liquid: pieces.liquid,
    baseColor: color.clone(),
    defaultColor: color.clone(),
    defaultLabel: s.label,
    active: false,
    defaultActive: false,
  }
}

interface KindPieces {
  tinted: THREE.Mesh[]
  surface: THREE.Mesh
  glow?: THREE.Mesh
  spinner?: THREE.Object3D
  liquid?: THREE.Mesh
}

function buildKindPieces(): KindPieces {
  // Placeholder for the discriminated-union-style return type used above.
  // Only the build* helpers below construct concrete pieces.
  throw new Error('not used')
}

function tintedStandard(color: THREE.Color, opts: Partial<THREE.MeshStandardMaterialParameters> = {}) {
  return new THREE.MeshStandardMaterial({
    color: color.clone(),
    roughness: 0.55,
    metalness: 0.25,
    emissive: 0x000000,
    ...opts,
  })
}

// ── tall-instrument: chunky tower with a screen panel up top ──────────────
function buildTallInstrument(g: THREE.Group, color: THREE.Color): KindPieces {
  const bodyMat = tintedStandard(color, { roughness: 0.7, metalness: 0.3 })
  const screenMat = new THREE.MeshStandardMaterial({
    color: color.clone().multiplyScalar(0.7),
    emissive: color.clone(),
    emissiveIntensity: 0.05,
    roughness: 0.3,
  })

  const body = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.16, 0.07), bodyMat)
  body.position.y = 0.08
  g.add(body)

  const screen = new THREE.Mesh(new THREE.PlaneGeometry(0.05, 0.035), screenMat)
  screen.position.set(0, 0.13, 0.0355)
  g.add(screen)

  const baseMat = new THREE.MeshStandardMaterial({ color: 0x1f2937, roughness: 0.8 })
  const base = new THREE.Mesh(new THREE.BoxGeometry(0.085, 0.012, 0.085), baseMat)
  base.position.y = 0.006
  g.add(base)

  return { tinted: [body], surface: screen }
}

// ── flat-instrument: low wide box ─────────────────────────────────────────
function buildFlatInstrument(g: THREE.Group, color: THREE.Color): KindPieces {
  const bodyMat = tintedStandard(color, { roughness: 0.6 })
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.05, 0.09), bodyMat)
  body.position.y = 0.025
  g.add(body)

  const ledMat = new THREE.MeshStandardMaterial({
    color: 0x1f2937,
    emissive: color.clone(),
    emissiveIntensity: 0.0,
  })
  const led = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.005, 0.015), ledMat)
  led.position.set(0, 0.052, 0.04)
  g.add(led)

  // Hidden spinner: rotor for 'operate' animations on flat instruments.
  const rotorMat = new THREE.MeshStandardMaterial({ color: 0xcbd5e1, metalness: 0.7 })
  const rotor = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.005, 24), rotorMat)
  rotor.position.set(0, 0.053, 0)
  g.add(rotor)

  return { tinted: [body], surface: led, spinner: rotor }
}

// ── furnace: chunky cube with a glowing front aperture ────────────────────
//
// Realistic-graphics pass:
//   • Body uses tinted brushed-steel + a chrome bezel around the door.
//   • Aperture has a real insulating-glass pane (low transmission, smoky
//     dark tint) so when the heater is on, the orange glow reads as light
//     leaking through smoked glass instead of a flat coloured rectangle.
//   • Internal heater coil mesh that we drive emissively from animateHeat().
function buildFurnace(g: THREE.Group, color: THREE.Color): KindPieces {
  const bodyMat = tintedStandard(color, {
    roughness: 0.45,
    metalness: 0.85,
    envMapIntensity: 1.0,
  })
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.11, 0.09), bodyMat)
  body.position.y = 0.055
  g.add(body)

  // Polished chrome bezel framing the aperture.
  const bezelMat = new THREE.MeshStandardMaterial({
    color: 0xb8bcc2,
    roughness: 0.18,
    metalness: 1.0,
    envMapIntensity: 1.3,
  })
  const bezel = new THREE.Mesh(new THREE.BoxGeometry(0.084, 0.074, 0.004), bezelMat)
  bezel.position.set(0, 0.055, 0.0455)
  g.add(bezel)

  // Heater coil — a thin emissive cylinder visible through the smoked glass.
  // Driven by animateHeat() to glow orange/red when active.
  const coilMat = new THREE.MeshStandardMaterial({
    color: 0x301008,
    emissive: 0x000000,
    emissiveIntensity: 0.0,
    roughness: 0.4,
    metalness: 0.6,
  })
  const coil = new THREE.Mesh(
    new THREE.CylinderGeometry(0.018, 0.018, 0.06, 24),
    coilMat,
  )
  coil.rotation.z = Math.PI / 2
  coil.position.set(0, 0.055, 0.024)
  g.add(coil)

  // Smoked insulating-glass aperture — slight transmission so the coil shows
  // through realistically and the env map sweeps a soft highlight across.
  const glowMat = new THREE.MeshPhysicalMaterial({
    color: 0x1a0a04,
    roughness: 0.18,
    metalness: 0.0,
    transmission: 0.35,
    thickness: 0.003,
    ior: 1.45,
    clearcoat: 1.0,
    clearcoatRoughness: 0.1,
    transparent: true,
    side: THREE.DoubleSide,
  })
  const glow = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.06, 0.005), glowMat)
  glow.position.set(0, 0.055, 0.0475)
  g.add(glow)

  // Two control knobs on the side panel (purely cosmetic, sells the look).
  const knobMat = new THREE.MeshStandardMaterial({
    color: 0xc0c4cc,
    metalness: 0.95,
    roughness: 0.25,
  })
  ;[-0.022, 0.022].forEach((dy) => {
    const knob = new THREE.Mesh(
      new THREE.CylinderGeometry(0.007, 0.007, 0.005, 16),
      knobMat,
    )
    knob.rotation.x = Math.PI / 2
    knob.position.set(0.045, 0.055 + dy, 0.045)
    g.add(knob)
  })

  // Surface = coil (so animateHeat drives the heater's emissive), glow = the
  // smoked aperture (raycast target + visible front face). The user sees the
  // coil's orange flash diffuse *through* the smoked glass.
  return { tinted: [body], surface: coil, glow }
}

// ── microscope: tube + base + objective ───────────────────────────────────
function buildMicroscope(g: THREE.Group, color: THREE.Color): KindPieces {
  const bodyMat = tintedStandard(color, { roughness: 0.5, metalness: 0.4 })

  const base = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.025, 0.09), bodyMat)
  base.position.y = 0.012
  g.add(base)

  const arm = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.13, 0.025), bodyMat)
  arm.position.set(-0.025, 0.09, 0)
  g.add(arm)

  const head = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.025, 0.04), bodyMat)
  head.position.set(0, 0.155, 0)
  g.add(head)

  const lensMat = new THREE.MeshStandardMaterial({
    color: 0x1f2937,
    emissive: color.clone(),
    emissiveIntensity: 0.0,
    metalness: 0.9,
    roughness: 0.2,
  })
  const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.025, 16), lensMat)
  lens.position.set(0, 0.13, 0)
  g.add(lens)

  const stage = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.005, 0.05), tintedStandard(color))
  stage.position.set(0, 0.05, 0)
  g.add(stage)

  return { tinted: [arm, head], surface: lens }
}

// ── incubator: cabinet with shelf bands ───────────────────────────────────
function buildIncubator(g: THREE.Group, color: THREE.Color): KindPieces {
  const bodyMat = tintedStandard(color, { roughness: 0.6 })
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.16, 0.085), bodyMat)
  body.position.y = 0.08
  g.add(body)

  const shelfMat = new THREE.MeshStandardMaterial({ color: 0x0f172a })
  for (let i = 0; i < 3; i++) {
    const shelf = new THREE.Mesh(new THREE.BoxGeometry(0.082, 0.003, 0.001), shelfMat)
    shelf.position.set(0, 0.04 + i * 0.04, 0.044)
    g.add(shelf)
  }

  const doorMat = new THREE.MeshStandardMaterial({
    color: color.clone().multiplyScalar(0.85),
    emissive: 0x000000,
    emissiveIntensity: 0,
    roughness: 0.4,
  })
  const door = new THREE.Mesh(new THREE.PlaneGeometry(0.085, 0.14), doorMat)
  door.position.set(0, 0.08, 0.0431)
  g.add(door)

  return { tinted: [body], surface: door }
}

// ── plate-reader: tray + 96-well grid hint ────────────────────────────────
function buildPlateReader(g: THREE.Group, color: THREE.Color): KindPieces {
  const bodyMat = tintedStandard(color, { roughness: 0.6 })
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.05, 0.09), bodyMat)
  body.position.y = 0.025
  g.add(body)

  const platMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.4 })
  const plate = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.006, 0.06), platMat)
  plate.position.set(0, 0.053, 0)
  g.add(plate)

  const wellMat = new THREE.MeshStandardMaterial({
    color: color.clone(),
    emissive: color.clone(),
    emissiveIntensity: 0.0,
  })
  // Render wells as a single textured surface for cheap fidelity.
  const wells = new THREE.Mesh(new THREE.PlaneGeometry(0.09, 0.05), wellMat)
  wells.rotation.x = -Math.PI / 2
  wells.position.set(0, 0.0565, 0)
  g.add(wells)

  return { tinted: [body], surface: wells }
}

// ── dish: petri dish ──────────────────────────────────────────────────────
function buildDish(g: THREE.Group, color: THREE.Color): KindPieces {
  const dishMat = new THREE.MeshPhysicalMaterial({
    color: 0xddeeff,
    transparent: true,
    opacity: 0.35,
    roughness: 0.05,
    transmission: 0.85,
    side: THREE.DoubleSide,
  })
  const wall = new THREE.Mesh(
    new THREE.CylinderGeometry(0.05, 0.048, 0.02, 32, 1, true),
    dishMat,
  )
  wall.position.y = 0.012
  g.add(wall)

  const baseDisc = new THREE.Mesh(new THREE.CircleGeometry(0.048, 32), dishMat)
  baseDisc.rotation.x = -Math.PI / 2
  baseDisc.position.y = 0.003
  g.add(baseDisc)

  const liquidMat = new THREE.MeshStandardMaterial({
    color: color.clone(),
    transparent: true,
    opacity: 0.7,
    emissive: color.clone(),
    emissiveIntensity: 0.05,
    roughness: 0.3,
  })
  const liquid = new THREE.Mesh(new THREE.CylinderGeometry(0.044, 0.044, 0.012, 32), liquidMat)
  liquid.position.y = 0.009
  g.add(liquid)

  return { tinted: [liquid], surface: liquid, liquid }
}

// ── beaker ────────────────────────────────────────────────────────────────
function buildBeaker(g: THREE.Group, color: THREE.Color): KindPieces {
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
    new THREE.CylinderGeometry(0.04, 0.034, 0.11, 24, 1, true),
    glassMat,
  )
  wall.position.y = 0.06
  g.add(wall)

  const bot = new THREE.Mesh(new THREE.CircleGeometry(0.034, 24), glassMat)
  bot.rotation.x = -Math.PI / 2
  bot.position.y = 0.005
  g.add(bot)

  const liquidMat = new THREE.MeshStandardMaterial({
    color: color.clone(),
    transparent: true,
    opacity: 0.8,
    roughness: 0.2,
    emissive: color.clone(),
    emissiveIntensity: 0.06,
  })
  const liquid = new THREE.Mesh(
    new THREE.CylinderGeometry(0.032, 0.028, 0.07, 24),
    liquidMat,
  )
  liquid.position.y = 0.04
  g.add(liquid)

  return { tinted: [liquid], surface: liquid, liquid }
}

// ── tube-rack ─────────────────────────────────────────────────────────────
function buildTubeRack(g: THREE.Group, color: THREE.Color): KindPieces {
  const baseMat = tintedStandard(color, { roughness: 0.7 })
  const base = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.012, 0.045), baseMat)
  base.position.y = 0.006
  g.add(base)

  const tubeMat = new THREE.MeshPhysicalMaterial({
    color: 0xccddff,
    transparent: true,
    opacity: 0.45,
    roughness: 0,
    transmission: 0.6,
    side: THREE.DoubleSide,
  })
  const liquidMat = new THREE.MeshStandardMaterial({
    color: color.clone(),
    transparent: true,
    opacity: 0.85,
    emissive: color.clone(),
    emissiveIntensity: 0.05,
  })

  for (let i = 0; i < 5; i++) {
    const x = -0.04 + i * 0.02
    const tube = new THREE.Mesh(
      new THREE.CylinderGeometry(0.008, 0.007, 0.07, 12, 1, true),
      tubeMat,
    )
    tube.position.set(x, 0.045, 0)
    g.add(tube)
    const liquid = new THREE.Mesh(
      new THREE.CylinderGeometry(0.006, 0.006, 0.03, 12),
      liquidMat.clone(),
    )
    liquid.position.set(x, 0.025, 0)
    g.add(liquid)
  }

  // Use the base as the surface for emissive pulse animations.
  return { tinted: [base], surface: base }
}

// ── pipette: tilted at home position ──────────────────────────────────────
function buildPipette(g: THREE.Group, color: THREE.Color): KindPieces {
  const pipMat = tintedStandard(color, { roughness: 0.3, metalness: 0.1 })

  const body = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.16, 14), pipMat)
  body.position.y = 0.08
  g.add(body)

  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.005, 0.045, 12), pipMat)
  tip.position.y = -0.0025
  tip.rotation.x = Math.PI
  g.add(tip)

  const btn = new THREE.Mesh(
    new THREE.CylinderGeometry(0.01, 0.01, 0.02, 12),
    new THREE.MeshStandardMaterial({ color: color.clone(), emissive: color.clone(), emissiveIntensity: 0 }),
  )
  btn.position.y = 0.17
  g.add(btn)

  // Tilt the whole pipette slightly toward the viewer.
  g.rotation.set(0, 0, Math.PI / 9)

  return { tinted: [body, tip], surface: btn }
}

// ── scaffold: 3×3 lattice cube ────────────────────────────────────────────
function buildScaffold(g: THREE.Group, color: THREE.Color): KindPieces {
  const tinted: THREE.Mesh[] = []
  const meshMat = tintedStandard(color, { roughness: 0.4, metalness: 0.4 })

  const grid = 3
  const spacing = 0.018
  const offset = -((grid - 1) * spacing) / 2

  for (let x = 0; x < grid; x++) {
    for (let y = 0; y < grid; y++) {
      for (let z = 0; z < grid; z++) {
        const cell = new THREE.Mesh(
          new THREE.BoxGeometry(0.008, 0.008, 0.008),
          meshMat,
        )
        cell.position.set(offset + x * spacing, 0.04 + y * spacing, offset + z * spacing)
        g.add(cell)
        tinted.push(cell)
      }
    }
  }

  // The centre cell becomes the surface used for emissive pulse.
  const surface = tinted[Math.floor(tinted.length / 2)]
  return { tinted, surface }
}

// ── printer: stylised DLP printer ─────────────────────────────────────────
function buildPrinter(g: THREE.Group, color: THREE.Color): KindPieces {
  const bodyMat = tintedStandard(color, { roughness: 0.6 })

  const base = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.04, 0.09), bodyMat)
  base.position.y = 0.02
  g.add(base)

  const railMat = new THREE.MeshStandardMaterial({ color: 0x9ca3af, metalness: 0.7, roughness: 0.3 })
  const railL = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.13, 8), railMat)
  railL.position.set(-0.045, 0.105, 0.04)
  g.add(railL)
  const railR = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.13, 8), railMat)
  railR.position.set(0.045, 0.105, 0.04)
  g.add(railR)

  const head = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.018, 0.02), bodyMat)
  head.position.set(0, 0.13, 0.04)
  g.add(head)

  const buildPlateMat = new THREE.MeshStandardMaterial({
    color: color.clone(),
    emissive: color.clone(),
    emissiveIntensity: 0.0,
    roughness: 0.4,
  })
  const buildPlate = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.005, 0.05), buildPlateMat)
  buildPlate.position.set(0, 0.043, 0)
  g.add(buildPlate)

  return { tinted: [base, head], surface: buildPlate, spinner: head }
}

// ── solar-cell: a c-Si PV cell coupon with metallization fingers ──────────
// `color` tints the fingers + busbars (silver vs copper paste). The cell is
// tilted slightly toward the viewer so the front side is always readable, and
// the front 'wafer' surface is what we drive emissively for highlight pulses.
//
// Realistic-graphics pass:
//   • Wafer = MeshPhysicalMaterial with deep-blue base + clearcoat → reads as
//     a real anti-reflective-coated cell (the dark, slightly iridescent look).
//   • Fingers / busbars = polished metal (low roughness, high metalness) — the
//     env map gives them genuine specular reflections off the studio.
//   • Outer aluminium frame around the coupon edge so it looks like a packaged
//     test coupon, not a bare wafer.
function buildSolarCell(g: THREE.Group, color: THREE.Color): KindPieces {
  const tinted: THREE.Mesh[] = []
  // Sized so the cell reads as a real coupon at the bench scale (≈14 cm wide).
  const W = 0.14
  const D = 0.14
  const T = 0.006

  // Silicon wafer body — deep-blue silicon nitride AR coating with a thin
  // clearcoat layer mimicking the encapsulant's gloss. Slight metalness so
  // the underlying silicon reflects the env map subtly through the dye.
  const waferMat = new THREE.MeshPhysicalMaterial({
    color: 0x0a1f4a,
    roughness: 0.45,
    metalness: 0.55,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    envMapIntensity: 1.2,
  })
  const wafer = new THREE.Mesh(new THREE.BoxGeometry(W, T, D), waferMat)
  wafer.position.y = T / 2
  g.add(wafer)

  // Diagonal pyramid-texture etch lines (very subtle) — drawn as a faint
  // emissive pinstripe so the wafer doesn't read as a flat block.
  const etchMat = new THREE.MeshBasicMaterial({
    color: 0x14306b,
    transparent: true,
    opacity: 0.18,
  })
  for (let i = 0; i < 6; i++) {
    const stripe = new THREE.Mesh(new THREE.PlaneGeometry(W * 0.95, 0.0006), etchMat)
    stripe.rotation.x = -Math.PI / 2
    stripe.rotation.z = Math.PI / 4
    stripe.position.set(0, T + 0.00012, -D * 0.4 + i * (D * 0.16))
    g.add(stripe)
  }

  // Outer aluminium-anodised frame so the coupon reads as a packaged test
  // coupon (mirrors how Pass-3 specs treat them as discrete sample objects).
  const frameMat = new THREE.MeshStandardMaterial({
    color: 0x2c3340,
    roughness: 0.32,
    metalness: 0.92,
    envMapIntensity: 1.1,
  })
  const frameThickness = 0.005
  const frameH = 0.008
  const frameZ = D / 2 + frameThickness / 2
  const frameXFront = new THREE.Mesh(
    new THREE.BoxGeometry(W + frameThickness * 2, frameH, frameThickness),
    frameMat,
  )
  frameXFront.position.set(0, frameH / 2, frameZ)
  g.add(frameXFront)
  const frameXBack = frameXFront.clone()
  frameXBack.position.z = -frameZ
  g.add(frameXBack)
  const frameZL = new THREE.Mesh(
    new THREE.BoxGeometry(frameThickness, frameH, D),
    frameMat,
  )
  frameZL.position.set(-W / 2 - frameThickness / 2, frameH / 2, 0)
  g.add(frameZL)
  const frameZR = frameZL.clone()
  frameZR.position.x = W / 2 + frameThickness / 2
  g.add(frameZR)

  // Metallization fingers (running along z-axis). Polished metal: env map
  // gives them their characteristic specular highlight off the studio dome.
  const fingerMat = tintedStandard(color, {
    roughness: 0.18,
    metalness: 0.95,
    envMapIntensity: 1.2,
  })
  const N_FINGERS = 11
  const fingerSpacing = (W * 0.92) / (N_FINGERS - 1)
  for (let i = 0; i < N_FINGERS; i++) {
    const x = -W * 0.46 + i * fingerSpacing
    const finger = new THREE.Mesh(
      new THREE.BoxGeometry(0.0014, 0.0009, D * 0.94),
      fingerMat,
    )
    finger.position.set(x, T + 0.0006, 0)
    g.add(finger)
    tinted.push(finger)
  }

  // Two busbars (perpendicular to fingers) — wider, polished, slightly raised.
  const busbarMat = tintedStandard(color, {
    roughness: 0.16,
    metalness: 0.95,
    envMapIntensity: 1.3,
  })
  ;[-D * 0.28, D * 0.28].forEach((z) => {
    const bus = new THREE.Mesh(new THREE.BoxGeometry(W * 0.94, 0.0014, 0.005), busbarMat)
    bus.position.set(0, T + 0.001, z)
    g.add(bus)
    tinted.push(bus)
  })

  // Back contact: aluminium BSF (back-surface field). Slightly brushed.
  const backMat = new THREE.MeshStandardMaterial({
    color: 0x9aa3ad,
    roughness: 0.4,
    metalness: 0.85,
    envMapIntensity: 0.9,
  })
  const back = new THREE.Mesh(new THREE.BoxGeometry(W, 0.0008, D), backMat)
  back.position.y = -0.0004
  g.add(back)

  // Back-side soldering tab — uses the cell tint so flipping the coupon shows
  // whether the rear tab is a Cu or Ag candidate.
  const tab = new THREE.Mesh(
    new THREE.BoxGeometry(W * 0.7, 0.0006, 0.006),
    fingerMat,
  )
  tab.position.set(0, -0.0009, 0)
  g.add(tab)
  tinted.push(tab)

  // Slight tilt so the front face is always visible.
  g.rotation.set(-0.18, 0.04, 0)

  // The wafer mesh is the "surface" we drive for highlight/measure flashes:
  // it's the largest area and reads well from any angle.
  return { tinted, surface: wafer }
}

// ── pv-module: encapsulated mini-module (glass front + silicon + backsheet) ─
//
// Realistic-graphics pass:
//   • Real `transmission` glass cover (with a hint of clearcoat) so the env
//     map shows up as a moving highlight as the user rotates the module.
//   • Anodized-aluminium frame — high metalness, low roughness — that catches
//     the warm front rim light and grounds the module visually.
//   • Cell array now has individual silicon-blue cells with proper finger
//     metallization that picks up the tint colour (silver vs copper).
function buildPvModule(g: THREE.Group, color: THREE.Color): KindPieces {
  const tinted: THREE.Mesh[] = []
  const W = 0.18
  const D = 0.12

  // White polymer backsheet (real modules — slightly off-white, matte).
  const back = new THREE.Mesh(
    new THREE.BoxGeometry(W, 0.004, D),
    new THREE.MeshStandardMaterial({ color: 0xf3f4f6, roughness: 0.85, metalness: 0.0 }),
  )
  back.position.y = 0.002
  g.add(back)

  // EVA encapsulant (slight translucency)
  const eva = new THREE.Mesh(
    new THREE.BoxGeometry(W * 0.97, 0.002, D * 0.97),
    new THREE.MeshStandardMaterial({
      color: 0xfef3c7,
      roughness: 0.5,
      transparent: true,
      opacity: 0.55,
    }),
  )
  eva.position.y = 0.005
  g.add(eva)

  // 2x3 array of cells. Each cell is a real coupon-style stack: deep-blue
  // silicon w/ clearcoat + tinted fingers + small busbar. Reads well at any
  // viewing angle because the env map gives the silicon a real specular.
  const cellMat = new THREE.MeshPhysicalMaterial({
    color: 0x0a1f4a,
    roughness: 0.45,
    metalness: 0.55,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    envMapIntensity: 1.2,
  })
  const fingerMat = tintedStandard(color, {
    roughness: 0.18,
    metalness: 0.95,
    envMapIntensity: 1.2,
  })
  const cellW = W * 0.27
  const cellD = D * 0.42
  for (let cx = 0; cx < 3; cx++) {
    for (let cz = 0; cz < 2; cz++) {
      const px = -W * 0.32 + cx * (W * 0.32)
      const pz = -D * 0.22 + cz * (D * 0.44)
      const cell = new THREE.Mesh(new THREE.BoxGeometry(cellW, 0.0012, cellD), cellMat)
      cell.position.set(px, 0.0066, pz)
      g.add(cell)
      // Five thin metallization fingers per cell
      for (let f = 0; f < 5; f++) {
        const fingers = new THREE.Mesh(
          new THREE.BoxGeometry(cellW * 0.9, 0.0004, 0.0008),
          fingerMat,
        )
        fingers.position.set(px, 0.0074, pz - cellD * 0.4 + f * (cellD * 0.2))
        g.add(fingers)
        tinted.push(fingers)
      }
      // Single central busbar
      const bus = new THREE.Mesh(
        new THREE.BoxGeometry(cellW * 0.9, 0.0006, 0.0014),
        fingerMat,
      )
      bus.position.set(px, 0.0076, pz)
      g.add(bus)
      tinted.push(bus)
    }
  }

  // Glass top — real transmission so the cells are visible through the cover
  // and rotating the module sweeps a specular highlight across the surface.
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    roughness: 0.05,
    metalness: 0.0,
    transmission: 0.95,
    thickness: 0.003,
    ior: 1.5,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    envMapIntensity: 1.2,
    transparent: true,
    side: THREE.DoubleSide,
  })
  const glass = new THREE.Mesh(new THREE.BoxGeometry(W, 0.0035, D), glassMat)
  glass.position.y = 0.0095
  g.add(glass)

  // Anodized-aluminium frame — characteristic dark-grey of a real module rail.
  const frameMat = new THREE.MeshStandardMaterial({
    color: 0x2c3340,
    metalness: 0.92,
    roughness: 0.32,
    envMapIntensity: 1.1,
  })
  const frameTop = new THREE.Mesh(new THREE.BoxGeometry(W + 0.012, 0.014, 0.006), frameMat)
  frameTop.position.set(0, 0.006, D / 2 + 0.003)
  g.add(frameTop)
  const frameBot = frameTop.clone()
  frameBot.position.z = -D / 2 - 0.003
  g.add(frameBot)
  const frameL = new THREE.Mesh(new THREE.BoxGeometry(0.006, 0.014, D + 0.012), frameMat)
  frameL.position.set(-W / 2 - 0.003, 0.006, 0)
  g.add(frameL)
  const frameR = frameL.clone()
  frameR.position.x = W / 2 + 0.003
  g.add(frameR)

  g.rotation.set(-0.12, 0.04, 0)
  return { tinted, surface: glass }
}

// ── hotplate: legacy fixed scene component — kept for sample plans ────────
function buildHotplate(g: THREE.Group, color: THREE.Color): KindPieces {
  const bodyMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.6, metalness: 0.3 })
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.13, 0.025, 0.11), bodyMat)
  body.position.y = 0.012
  g.add(body)

  const surfMat = new THREE.MeshStandardMaterial({
    color: 0x444444,
    roughness: 0.3,
    metalness: 0.5,
    emissive: 0x000000,
  })
  const surface = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.004, 32), surfMat)
  surface.position.y = 0.027
  g.add(surface)

  const knob = new THREE.Mesh(
    new THREE.CylinderGeometry(0.007, 0.007, 0.014, 12),
    new THREE.MeshStandardMaterial({ color: color.clone(), metalness: 0.7, roughness: 0.2 }),
  )
  knob.position.set(0.04, 0.032, 0.038)
  g.add(knob)

  return { tinted: [knob], surface }
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
          const poseMatrix = new THREE.Matrix4().fromArray(
            pose.transform.matrix as unknown as number[],
          )
          const poseQuat = new THREE.Quaternion()
          poseMatrix.decompose(new THREE.Vector3(), poseQuat, new THREE.Vector3())
          const up = new THREE.Vector3(0, 1, 0).applyQuaternion(poseQuat)
          // Keep placement focused on table/floor-like surfaces.
          state.surfacePlacementValid = up.y > 0.75
          state.reticle.visible = true
          state.reticle.matrix.copy(poseMatrix)
          const reticleMat = state.reticle.material as THREE.MeshBasicMaterial
          reticleMat.color.set(state.surfacePlacementValid ? 0x00d4aa : 0xffa24d)
        }
      } else if (state.reticle) {
        state.reticle.visible = false
        state.surfacePlacementValid = false
      }
    }

    if (state.renderer && state.scene && state.camera) {
      state.renderer.render(state.scene, state.camera)
    }
  })
}

function tickFrame(dt: number) {
  state.highlightPulse += 0.04
  tickHighlight()
  tickHover()
  tickSpinners(dt)
  tickTweens(dt)
}

// ─── Highlight ────────────────────────────────────────────────────────────────

function tickHighlight() {
  if (!state.highlightedStationId) return
  const runtime = state.stations.get(state.highlightedStationId)
  if (!runtime) return
  const mat = runtime.surface.material as THREE.MeshStandardMaterial
  if (!mat.emissive) return
  const intensity = 0.18 + Math.sin(state.highlightPulse) * 0.12
  mat.emissive.setHSL(0.45, 1, Math.max(0.05, intensity))
}

export function highlightStation(id: string | null) {
  clearHighlight()
  if (!id || id === 'none') return
  if (!state.stations.has(id)) return
  state.highlightedStationId = id
}

// Backwards-compat alias kept for the (legacy) ARViewer/ Gemini tool surface.
export function highlightObject(name: HighlightTarget) {
  highlightStation(name)
}

export function clearHighlight() {
  if (!state.highlightedStationId) return
  const runtime = state.stations.get(state.highlightedStationId)
  state.highlightedStationId = null
  if (!runtime) return
  // Restore surface emissive to whatever the active state dictates.
  const mat = runtime.surface.material as THREE.MeshStandardMaterial
  if (mat.emissive) {
    if (runtime.active) {
      mat.emissive.copy(runtime.baseColor)
      mat.emissiveIntensity = 0.4
    } else {
      mat.emissive.set(0x000000)
      mat.emissiveIntensity = 0
    }
  }
}

// ─── Hover ────────────────────────────────────────────────────────────────────

function tickHover() {
  if (!state.hoveredStationId) return
  const runtime = state.stations.get(state.hoveredStationId)
  if (!runtime) return
  const t = (Math.sin(state.highlightPulse * 1.5) + 1) * 0.5
  const scale = 1 + t * 0.04
  runtime.group.scale.setScalar(scale)

  runtime.tintedMeshes.forEach((mesh) => {
    const mat = mesh.material as THREE.MeshStandardMaterial
    if (!mat.emissive) return
    if (!state.hoverEmissive.has(mesh)) {
      state.hoverEmissive.set(mesh, mat.emissive.clone())
    }
    const glow = 0.05 + t * 0.12
    mat.emissive.setRGB(glow * 0.2, glow, glow * 0.7)
  })
}

function setHover(stationId: string | null) {
  if (state.hoveredStationId === stationId) return

  if (state.hoveredStationId) {
    const prev = state.stations.get(state.hoveredStationId)
    if (prev) {
      const orig = state.hoverScale.get(prev.id)
      if (orig) prev.group.scale.copy(orig)
      prev.tintedMeshes.forEach((mesh) => {
        const mat = mesh.material as THREE.MeshStandardMaterial
        if (!mat.emissive) return
        const stored = state.hoverEmissive.get(mesh)
        if (stored) {
          mat.emissive.copy(stored)
          state.hoverEmissive.delete(mesh)
        }
      })
    }
  }

  state.hoveredStationId = stationId
  if (stationId) {
    const next = state.stations.get(stationId)
    if (next && !state.hoverScale.has(next.id)) {
      state.hoverScale.set(next.id, next.group.scale.clone())
    }
  }
}

// ─── Tweens + spinners ───────────────────────────────────────────────────────

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
    } else if (tw.prop === 'scale' && tw.target instanceof THREE.Object3D) {
      const from = tw.from as number
      const to = tw.to as number
      const v = from + (to - from) * t
      tw.target.scale.setScalar(v)
    } else if (tw.prop === 'scale.y' && tw.target instanceof THREE.Object3D) {
      const from = tw.from as number
      const to = tw.to as number
      tw.target.scale.y = from + (to - from) * t
    } else if (tw.prop === 'material.color' && tw.target instanceof THREE.Mesh) {
      const from = tw.from as THREE.Color
      const to = tw.to as THREE.Color
      const mat = tw.target.material as THREE.MeshStandardMaterial
      mat.color.lerpColors(from, to, t)
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

function tickSpinners(dt: number) {
  state.spinningStations.forEach((id) => {
    const runtime = state.stations.get(id)
    if (!runtime?.spinner) return
    runtime.spinner.rotation.y += dt * 4
  })
}

// ─── Pointer / Raycast ────────────────────────────────────────────────────────

// Bench bounds (lab-local). Stations cannot be dragged outside this rectangle
// — keeps the user from "losing" a tool off the side of the table. Matches the
// bench mat geometry from buildSceneFromSpec().
const BENCH_HALF_X = 0.46
const BENCH_HALF_Z = 0.22

export function handlePointerDown(clientX: number, clientY: number) {
  if (state.mode !== 'interactive' || !state.labPlaced) return
  const id = pickStationId(clientX, clientY)
  if (!id) return
  const runtime = state.stations.get(id)
  if (!runtime) return

  // Defer the actual action until we know whether this is a drag or a tap.
  // Project the press point onto the bench plane so we can lock the grab
  // offset and translate the station with sub-pixel accuracy as the cursor
  // moves (no jump on first move event).
  const grab = projectToBench(clientX, clientY)
  if (!grab) return
  state.drag = {
    stationId: id,
    startScreenX: clientX,
    startScreenY: clientY,
    isDrag: false,
    grabOffsetX: grab.x - runtime.group.position.x,
    grabOffsetZ: grab.z - runtime.group.position.z,
    originX: runtime.group.position.x,
    originY: runtime.group.position.y,
    originZ: runtime.group.position.z,
  }
}

export function handlePointerMove(clientX: number, clientY: number) {
  // Drag in progress — translate the station on the bench plane.
  if (state.drag) {
    const drag = state.drag
    const dx = clientX - drag.startScreenX
    const dy = clientY - drag.startScreenY
    if (!drag.isDrag && Math.hypot(dx, dy) > DRAG_THRESHOLD_PX) {
      drag.isDrag = true
      const runtime = state.stations.get(drag.stationId)
      if (runtime) {
        // Lift the station as it leaves the bench — telegraphs "picked up".
        runtime.group.position.y = drag.originY + DRAG_LIFT
      }
    }
    if (drag.isDrag) {
      const runtime = state.stations.get(drag.stationId)
      const projected = projectToBench(clientX, clientY)
      if (runtime && projected) {
        const tx = clamp(projected.x - drag.grabOffsetX, -BENCH_HALF_X, BENCH_HALF_X)
        const tz = clamp(projected.z - drag.grabOffsetZ, -BENCH_HALF_Z, BENCH_HALF_Z)
        runtime.group.position.x = tx
        runtime.group.position.z = tz
      }
    }
    // While dragging, keep the tooltip following the cursor with the picked
    // station's label. Helps the user see the name of the tool they grabbed
    // even on a touchscreen where there's no real "hover".
    emitHover(drag.stationId, clientX, clientY)
    return
  }
  if (state.mode !== 'interactive' || !state.labPlaced) {
    setHover(null)
    emitHover(null, clientX, clientY)
    return
  }
  const id = pickStationId(clientX, clientY)
  setHover(id)
  emitHover(id, clientX, clientY)
}

export function handlePointerUp(clientX: number, clientY: number) {
  if (!state.drag) return
  const drag = state.drag
  state.drag = null

  const runtime = state.stations.get(drag.stationId)
  if (!drag.isDrag) {
    // Treat as a tap → station's natural action animation.
    triggerInteraction(drag.stationId)
  } else if (runtime) {
    // Drop animation — ease the lift back down to bench level. The new x/z
    // positions are already committed so the tool stays where the user left it.
    const settled = runtime.group.position.clone()
    settled.y = drag.originY
    addTween({
      target: runtime.group,
      prop: 'position',
      from: runtime.group.position.clone(),
      to: settled,
      duration: 0.18,
    })
  }
  void clientX
  void clientY
}

// Backwards-compat shim — older callers still using `handlePointerTap` get
// routed through the new down/up pipeline so behaviour is unchanged for them.
export function handlePointerTap(clientX: number, clientY: number) {
  if (!state.labPlaced) return
  const id = pickStationId(clientX, clientY)
  if (!id) return
  triggerInteraction(id)
}

// Project a screen coordinate onto the bench plane (lab-local y = 0). Returns
// null if the ray doesn't intersect (the bench is behind the camera, or the
// scene isn't placed yet).
function projectToBench(clientX: number, clientY: number): THREE.Vector3 | null {
  if (!state.renderer || !state.camera || !state.labGroup) return null
  const canvas = state.renderer.domElement
  const rect = canvas.getBoundingClientRect()
  const ndc = new THREE.Vector2(
    ((clientX - rect.left) / rect.width) * 2 - 1,
    -((clientY - rect.top) / rect.height) * 2 + 1,
  )
  state.raycaster.setFromCamera(ndc, state.camera)
  // Build the bench plane in world space by transforming the local plane
  // through labGroup's current world matrix. updateMatrixWorld() guards
  // against stale matrices when pointer events fire before the next render.
  state.labGroup.updateMatrixWorld(true)
  const worldPlane = state.benchPlaneLocal.clone().applyMatrix4(state.labGroup.matrixWorld)
  const worldHit = new THREE.Vector3()
  if (!state.raycaster.ray.intersectPlane(worldPlane, worldHit)) return null
  // Convert back to lab-local so we can update station.position directly.
  return state.labGroup.worldToLocal(worldHit)
}

function emitHover(id: string | null, clientX: number, clientY: number) {
  if (!state.onHover) return
  if (!id) {
    state.onHover(null)
    return
  }
  const runtime = state.stations.get(id)
  if (!runtime) {
    state.onHover(null)
    return
  }
  state.onHover({ id, label: runtime.spec.label, x: clientX, y: clientY })
}

function clamp(v: number, lo: number, hi: number): number {
  return Math.max(lo, Math.min(hi, v))
}

function pickStationId(clientX: number, clientY: number): string | null {
  if (!state.renderer || !state.camera) return null
  const canvas = state.renderer.domElement
  const rect = canvas.getBoundingClientRect()
  const ndc = new THREE.Vector2(
    ((clientX - rect.left) / rect.width) * 2 - 1,
    -((clientY - rect.top) / rect.height) * 2 + 1,
  )
  state.raycaster.setFromCamera(ndc, state.camera)
  const hits = state.raycaster.intersectObjects(state.interactiveObjects, true)
  for (const hit of hits) {
    let cur: THREE.Object3D | null = hit.object
    while (cur) {
      const id = cur.userData?.stationId as string | undefined
      if (id && state.stations.has(id)) return id
      cur = cur.parent
    }
  }
  return null
}

// ─── Interaction ──────────────────────────────────────────────────────────────

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

// React HUD subscribes here to render a name-tooltip that follows the cursor.
// Fires on hover changes AND on every move while a station is hovered (so the
// tooltip can track the cursor smoothly), as well as during an active drag.
export function setHoverListener(cb: ((info: HoverInfo | null) => void) | null) {
  state.onHover = cb
}

// ─── Spatial introspection (used by Gemini point_at + structured context) ──

export interface StationSummary {
  id: string
  label: string
  kind: string
  active: boolean
}

// Returns a flat list of every interactive station currently in the scene so
// the React side can hand Gemini a "menu" of pointable targets.
export function listStations(): StationSummary[] {
  const out: StationSummary[] = []
  state.stations.forEach((runtime, id) => {
    out.push({
      id,
      label: runtime.spec.label,
      kind: runtime.spec.kind,
      active: runtime.active,
    })
  })
  return out
}

// Projects a station's group origin into client-space pixels (the same
// coordinate system pointer events use). Returns null if the station is off-
// screen, behind the camera, or the scene isn't initialised yet — callers
// should treat that as "can't point right now".
export function getStationScreenPosition(
  stationId: string,
): { x: number; y: number; visible: boolean } | null {
  if (!state.renderer || !state.camera || !state.labGroup) return null
  const runtime = state.stations.get(stationId)
  if (!runtime) return null

  state.labGroup.updateMatrixWorld(true)
  const world = new THREE.Vector3()
  runtime.group.getWorldPosition(world)
  // Lift the anchor a little so the arrow points just above the bench surface
  // of the station, not at the foot of its mesh.
  world.y += 0.06

  const projected = world.clone().project(state.camera)
  const canvas = state.renderer.domElement
  const rect = canvas.getBoundingClientRect()
  const x = ((projected.x + 1) / 2) * rect.width + rect.left
  const y = ((1 - projected.y) / 2) * rect.height + rect.top

  // projected.z is in [-1, 1] when in front of the camera, > 1 when behind.
  const visible = projected.z >= -1 && projected.z <= 1
  return { x, y, visible }
}

function triggerInteraction(stationId: string) {
  const runtime = state.stations.get(stationId)
  if (!runtime) return

  // Pick a feedback animation appropriate to the station kind.
  const kind = runtime.spec.kind
  let action: InteractionEvent['action'] = 'tap'
  switch (kind) {
    case 'furnace':
    case 'hotplate':
    case 'incubator':
      animateHeat(runtime)
      action = 'heat'
      break
    case 'plate-reader':
    case 'microscope':
      animateMeasure(runtime)
      action = 'measure'
      break
    case 'beaker':
    case 'tube-rack':
    case 'dish':
      animateMix(runtime)
      action = 'mix'
      break
    case 'pipette':
      animateTransfer(runtime)
      action = 'transfer'
      break
    case 'flat-instrument':
    case 'printer':
    case 'tall-instrument':
      animateOperate(runtime)
      action = 'operate'
      break
    case 'scaffold':
      animateObserve(runtime)
      action = 'observe'
      break
    case 'solar-cell':
    case 'pv-module':
      animateInspect(runtime)
      action = 'observe'
      break
    default:
      animateObserve(runtime)
      action = 'tap'
  }

  state.onInteraction?.({ object: stationId, action, detail: runtime.spec.label })
}

// ─── Station animations ───────────────────────────────────────────────────────

export function playStationAnimation(stationId: string, anim: StationAnimation) {
  const runtime = state.stations.get(stationId)
  if (!runtime) return
  // Solar cells / PV modules have a bespoke "pickup-and-flip" behavior that
  // makes the coupon feel like a physical object. Route observe/measure/none
  // through the inspect animation when bound by the protocol.
  const isSampleCoupon = runtime.spec.kind === 'solar-cell' || runtime.spec.kind === 'pv-module'
  switch (anim) {
    case 'operate':
      isSampleCoupon ? animateInspect(runtime) : animateOperate(runtime)
      break
    case 'mix':
      animateMix(runtime)
      break
    case 'heat':
      animateHeat(runtime)
      break
    case 'observe':
      isSampleCoupon ? animateInspect(runtime) : animateObserve(runtime)
      break
    case 'measure':
      isSampleCoupon ? animateInspect(runtime) : animateMeasure(runtime)
      break
    case 'transfer':
      animateTransfer(runtime)
      break
    case 'none':
    default:
      break
  }
}

// Legacy API used by Gemini tool calls — accepts a string or known animation
// name and applies it to the currently highlighted station (or no-ops).
export function playAnimation(type: string) {
  if (state.mode !== 'guided') return
  const id = state.highlightedStationId
  if (!id) return
  const known: StationAnimation[] = [
    'operate',
    'mix',
    'heat',
    'observe',
    'measure',
    'transfer',
    'none',
  ]
  const anim = (known as string[]).includes(type)
    ? (type as StationAnimation)
    : mapLegacyAnimation(type)
  playStationAnimation(id, anim)
}

function mapLegacyAnimation(type: string): StationAnimation {
  switch (type) {
    case 'pipette-transfer':
      return 'transfer'
    case 'mix':
      return 'mix'
    case 'heat':
      return 'heat'
    case 'observe':
      return 'observe'
    case 'measure':
      return 'measure'
    default:
      return 'none'
  }
}

function animateOperate(r: StationRuntime) {
  if (r.spinner) {
    state.spinningStations.add(r.id)
    setTimeout(() => state.spinningStations.delete(r.id), 2400)
  } else {
    const start = r.group.rotation.clone()
    addTween({
      target: r.group,
      prop: 'rotation',
      from: start,
      to: new THREE.Euler(start.x, start.y + Math.PI * 2, start.z),
      duration: 1.6,
    })
  }
}

function animateMix(r: StationRuntime) {
  const start = r.group.rotation.clone()
  const a = new THREE.Euler(start.x, start.y, start.z + 0.06)
  const b = new THREE.Euler(start.x, start.y, start.z - 0.06)
  addTween({
    target: r.group,
    prop: 'rotation',
    from: start,
    to: a,
    duration: 0.18,
    onComplete: () => {
      addTween({
        target: r.group,
        prop: 'rotation',
        from: a,
        to: b,
        duration: 0.22,
        onComplete: () => {
          addTween({
            target: r.group,
            prop: 'rotation',
            from: b,
            to: start,
            duration: 0.18,
          })
        },
      })
    },
  })
}

function animateHeat(r: StationRuntime) {
  const mat = r.surface.material as THREE.MeshStandardMaterial
  if (!mat.emissive) return
  const cold = mat.emissive.clone()
  const hot = new THREE.Color(0xff4422)
  addTween({
    target: r.surface,
    prop: 'material.emissive',
    from: cold,
    to: hot,
    duration: 0.6,
    onComplete: () => {
      mat.emissiveIntensity = 0.6
      r.active = true
    },
  })
}

function animateObserve(r: StationRuntime) {
  const mat = r.surface.material as THREE.MeshStandardMaterial
  if (!mat.emissive) return
  const start = mat.emissive.clone()
  const flash = new THREE.Color(0xffffff)
  addTween({
    target: r.surface,
    prop: 'material.emissive',
    from: start,
    to: flash,
    duration: 0.18,
    onComplete: () => {
      addTween({
        target: r.surface,
        prop: 'material.emissive',
        from: flash,
        to: start,
        duration: 0.4,
      })
    },
  })
}

function animateMeasure(r: StationRuntime) {
  const start = r.group.position.clone()
  const up = start.clone().add(new THREE.Vector3(0, 0.02, 0))
  addTween({
    target: r.group,
    prop: 'position',
    from: start,
    to: up,
    duration: 0.18,
    onComplete: () => {
      addTween({
        target: r.group,
        prop: 'position',
        from: up,
        to: start,
        duration: 0.22,
      })
    },
  })
  // Cyan flash on the surface for visual punctuation.
  const mat = r.surface.material as THREE.MeshStandardMaterial
  if (mat.emissive) {
    const cold = mat.emissive.clone()
    const cyan = new THREE.Color(0x22d3ee)
    addTween({
      target: r.surface,
      prop: 'material.emissive',
      from: cold,
      to: cyan,
      duration: 0.2,
      onComplete: () => {
        addTween({
          target: r.surface,
          prop: 'material.emissive',
          from: cyan,
          to: cold,
          duration: 0.4,
        })
      },
    })
  }
}

function animateTransfer(r: StationRuntime) {
  const start = r.group.position.clone()
  const up = start.clone().add(new THREE.Vector3(0, 0.05, 0))
  addTween({
    target: r.group,
    prop: 'position',
    from: start,
    to: up,
    duration: 0.25,
    onComplete: () => {
      addTween({
        target: r.group,
        prop: 'position',
        from: up,
        to: start,
        duration: 0.3,
      })
    },
  })
}

// Pick-up-and-flip: lift a solar-cell coupon, rotate it to expose the back
// contact, hold to let the user read it, then return. Drives the "interact
// with an actual copper plate" UX — tap a coupon and it acts like an object
// you've just picked up. Also fires a quick emissive flash to highlight the
// metallization.
function animateInspect(r: StationRuntime) {
  const startPos = r.group.position.clone()
  const upPos = startPos.clone().add(new THREE.Vector3(0, 0.06, 0))
  const startRot = r.group.rotation.clone()
  const flippedRot = new THREE.Euler(startRot.x + Math.PI, startRot.y, startRot.z + 0.2)

  // Lift first, then flip and tilt back to camera, then hold, then return.
  addTween({
    target: r.group,
    prop: 'position',
    from: startPos,
    to: upPos,
    duration: 0.35,
    onComplete: () => {
      addTween({
        target: r.group,
        prop: 'rotation',
        from: r.group.rotation.clone(),
        to: flippedRot,
        duration: 0.55,
        onComplete: () => {
          // Hold pose for ~0.6s by chaining a tiny tween to the same rotation.
          addTween({
            target: r.group,
            prop: 'rotation',
            from: flippedRot,
            to: flippedRot,
            duration: 0.6,
            onComplete: () => {
              addTween({
                target: r.group,
                prop: 'rotation',
                from: r.group.rotation.clone(),
                to: startRot,
                duration: 0.55,
                onComplete: () => {
                  addTween({
                    target: r.group,
                    prop: 'position',
                    from: r.group.position.clone(),
                    to: startPos,
                    duration: 0.35,
                  })
                },
              })
            },
          })
        },
      })
    },
  })

  // Quick highlight flash on the wafer surface to draw the eye.
  const mat = r.surface.material as THREE.MeshStandardMaterial
  if (mat.emissive) {
    const cold = mat.emissive.clone()
    const flash = r.baseColor.clone().multiplyScalar(0.7)
    addTween({
      target: r.surface,
      prop: 'material.emissive',
      from: cold,
      to: flash,
      duration: 0.3,
      onComplete: () => {
        addTween({
          target: r.surface,
          prop: 'material.emissive',
          from: flash,
          to: cold,
          duration: 1.5,
        })
      },
    })
  }
}

// ─── State changes (driven by step_bindings.state_changes) ───────────────────

export function applyStateChanges(changes: StationStateChange[]) {
  changes.forEach((change) => {
    const runtime = state.stations.get(change.station)
    if (!runtime) return
    if (change.property === 'color' && typeof change.to === 'string') {
      const next = new THREE.Color(change.to)
      runtime.baseColor.copy(next)
      runtime.tintedMeshes.forEach((m) => {
        const mat = m.material as THREE.MeshStandardMaterial
        if (mat.color) mat.color.copy(next)
      })
      const surfMat = runtime.surface.material as THREE.MeshStandardMaterial
      if (surfMat.emissive && runtime.active) {
        surfMat.emissive.copy(next)
      }
    } else if (change.property === 'active' && typeof change.to === 'boolean') {
      runtime.active = change.to
      const surfMat = runtime.surface.material as THREE.MeshStandardMaterial
      if (surfMat.emissive) {
        if (change.to) {
          surfMat.emissive.copy(runtime.baseColor)
          surfMat.emissiveIntensity = 0.4
        } else {
          surfMat.emissive.set(0x000000)
          surfMat.emissiveIntensity = 0
        }
      }
    } else if (change.property === 'label' && typeof change.to === 'string') {
      runtime.spec = { ...runtime.spec, label: change.to }
    }
  })
}

// ─── Reset ───────────────────────────────────────────────────────────────────

export function resetLab() {
  state.stations.forEach((runtime) => {
    runtime.group.position.set(
      runtime.spec.position[0],
      runtime.spec.position[1] ?? 0,
      runtime.spec.position[2],
    )
    runtime.group.scale.setScalar(1)
    runtime.baseColor.copy(runtime.defaultColor)
    runtime.tintedMeshes.forEach((m) => {
      const mat = m.material as THREE.MeshStandardMaterial
      if (mat.color) mat.color.copy(runtime.defaultColor)
    })
    const mat = runtime.surface.material as THREE.MeshStandardMaterial
    if (mat.emissive) {
      mat.emissive.set(0x000000)
      mat.emissiveIntensity = 0
    }
    runtime.active = runtime.defaultActive
    runtime.spec = { ...runtime.spec, label: runtime.defaultLabel }
  })
  state.tweens = []
  state.spinningStations.clear()
  state.highlightedStationId = null
  state.hoveredStationId = null
}

// ─── Placement ───────────────────────────────────────────────────────────────

export function placeLab() {
  if (state.labPlaced || !state.reticle || !state.labGroup) return
  if (state.reticle.visible && state.surfacePlacementValid) {
    const pos = new THREE.Vector3()
    const rot = new THREE.Quaternion()
    const scale = new THREE.Vector3()
    state.reticle.matrix.decompose(pos, rot, scale)
    state.labGroup.position.copy(pos)
    // Match the detected real-surface orientation so drag interactions happen
    // in the user's actual tabletop frame.
    state.labGroup.quaternion.copy(rot)
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
  state.labGroup.position.set(0, -0.16, -0.42)
  state.labGroup.scale.set(1.5, 1.5, 1.5)
  state.labGroup.visible = true
  state.labPlaced = true
  state.onLabPlaced?.()
}

export function beginSurfacePlacement() {
  if (!state.labGroup) return
  state.labPlaced = false
  state.labGroup.visible = false
  state.surfacePlacementValid = false
  if (state.reticle) state.reticle.visible = false
}

export function getPlacementStatus(): PlacementStatus {
  const reticleVisible = !!state.reticle?.visible
  const canPlace = reticleVisible && state.surfacePlacementValid
  let message = 'Move your phone to detect a surface'
  if (!reticleVisible) {
    message = 'Move your phone to detect a surface'
  } else if (!state.surfacePlacementValid) {
    message = 'Aim at a flatter table-like surface'
  } else {
    message = 'Surface detected - tap to place'
  }
  return {
    reticleVisible,
    surfacePlacementValid: state.surfacePlacementValid,
    canPlace,
    message,
  }
}

export function transformPlacedLab(deltaYaw: number, scaleMul: number) {
  if (!state.labPlaced || !state.labGroup) return
  state.labGroup.rotateY(deltaYaw)
  const nextScale = clamp(state.labGroup.scale.x * scaleMul, 0.7, 2.4)
  state.labGroup.scale.setScalar(nextScale)
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

  session.addEventListener('select', () => {
    if (!state.renderer || !state.labPlaced) {
      placeLab()
      return
    }
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
    state.surfacePlacementValid = false
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
  state.spec = null
  state.stations.clear()
  state.tweens = []
  state.spinningStations.clear()
  state.highlightedStationId = null
  state.hoveredStationId = null
  state.hoverScale.clear()
  state.hoverEmissive.clear()
  state.labPlaced = false
  state.hitTestSource = null
  state.referenceSpace = null
  state.xrSession = null
  state.onHover = null
  state.interactiveObjects = []
  state.drag = null
  state.surfacePlacementValid = false
}
