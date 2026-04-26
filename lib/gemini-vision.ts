// Captures a composite of the camera feed + Three.js canvas + HTML HUD as a
// JPEG data URL, ready to send to Gemini Live as video input.
//
// Why composite all three: Gemini sees both the user's real environment AND
// the virtual lab state (which beaker is glowing, what's loaded in the
// pipette) AND the HTML overlay (current step, dock buttons, hover labels,
// pointer arrows). That lets the assistant reason about everything the user
// can see — including UI affordances it might want to point at.
//
// The HUD snapshot uses html-to-image, which serialises the DOM subtree
// rooted at #ar-overlay into an SVG/data-URL the canvas can drawImage(). It
// is best-effort: if the snapshot fails (CORS, unsupported style, etc.) we
// gracefully fall back to camera + canvas only — the assistant still has
// the most important visuals.

import { toCanvas } from 'html-to-image'

const FRAME_WIDTH = 640
const FRAME_HEIGHT = 480
// Frames are sent at ~1 fps, so cache the HUD snapshot a little harder than
// 1s to avoid back-pressure when html-to-image takes longer than the
// frame interval on slow devices. We re-snapshot every 1.5s OR whenever the
// overlay subtree mutates (handled by the MutationObserver below).
const HUD_TTL_MS = 1500

let workCanvas: HTMLCanvasElement | null = null
let cachedHud: { canvas: HTMLCanvasElement; expires: number } | null = null
let observer: MutationObserver | null = null
let observerTarget: HTMLElement | null = null

function getWorkCanvas() {
  if (!workCanvas) {
    workCanvas = document.createElement('canvas')
    workCanvas.width = FRAME_WIDTH
    workCanvas.height = FRAME_HEIGHT
  }
  return workCanvas
}

// Invalidate the HUD cache on any DOM mutation in the overlay so Gemini sees
// real-time UI changes (sheet open/close, mode toggle press, pointer arrow
// appearing). Without this, fast UI updates wouldn't reach Gemini until the
// 1.5s TTL expired.
function ensureObserver(target: HTMLElement) {
  if (observer && observerTarget === target) return
  observer?.disconnect()
  observer = new MutationObserver(() => {
    cachedHud = null
  })
  observer.observe(target, {
    subtree: true,
    childList: true,
    attributes: true,
    characterData: true,
  })
  observerTarget = target
}

async function snapshotHud(): Promise<HTMLCanvasElement | null> {
  const overlay = document.getElementById('ar-overlay')
  if (!overlay) return null

  ensureObserver(overlay)

  const now = performance.now()
  if (cachedHud && cachedHud.expires > now) return cachedHud.canvas

  try {
    const canvas = await toCanvas(overlay, {
      // Keep the snapshot proportional to the work-canvas to avoid an extra
      // resize step. html-to-image uses devicePixelRatio internally; setting
      // pixelRatio = 1 keeps it light on mobile.
      pixelRatio: 1,
      backgroundColor: 'transparent',
      cacheBust: false,
      // Most embedded fonts/images can be skipped — Gemini only needs to
      // read the layout + text, not pixel-perfect typography.
      filter: (node) => {
        // Drop <video> tags inside the overlay (none today, but defensive).
        if (node instanceof HTMLVideoElement) return false
        return true
      },
    })
    cachedHud = { canvas, expires: now + HUD_TTL_MS }
    return canvas
  } catch {
    // Common in restrictive environments (CORS-tainted background image,
    // Safari getComputedStyle quirks). Don't spam the console — Gemini will
    // still get camera + 3D canvas which is the bulk of the signal.
    cachedHud = null
    return null
  }
}

export async function captureCompositeFrame(): Promise<string | null> {
  const video = document.getElementById('ar-video') as HTMLVideoElement | null
  const canvas = document.getElementById('ar-canvas') as HTMLCanvasElement | null
  if (!video && !canvas) return null

  const work = getWorkCanvas()
  const ctx = work.getContext('2d')
  if (!ctx) return null

  ctx.fillStyle = '#0a0f1a'
  ctx.fillRect(0, 0, FRAME_WIDTH, FRAME_HEIGHT)

  if (video && video.readyState >= 2 && video.videoWidth > 0) {
    drawCover(ctx, video, video.videoWidth, video.videoHeight)
  }

  if (canvas && canvas.width > 0) {
    drawCover(ctx, canvas, canvas.width, canvas.height)
  }

  // HUD snapshot — best-effort. Drawn last so HUD chrome (step panel, dock
  // buttons, pointer arrows) sits on top of the camera + 3D scene exactly
  // as the user sees it.
  const hud = await snapshotHud()
  if (hud && hud.width > 0 && hud.height > 0) {
    // The HUD covers the full viewport, so use drawCover to letterbox/crop
    // it to match the work-canvas aspect ratio. We do not cover-fit here
    // because the HUD already matches the user's screen aspect; instead
    // we use drawContain to preserve overlay positioning relative to the
    // bench beneath it.
    drawContain(ctx, hud, hud.width, hud.height)
  }

  // Encode as JPEG (smaller than PNG, faster upload)
  const dataUrl = work.toDataURL('image/jpeg', 0.6)
  return dataUrl.split(',')[1] // strip "data:image/jpeg;base64,"
}

// Tear-down: stop watching the overlay so a removed AR session doesn't
// trigger pointless invalidations.
export function stopVisionObserver() {
  observer?.disconnect()
  observer = null
  observerTarget = null
  cachedHud = null
}

function drawCover(
  ctx: CanvasRenderingContext2D,
  source: CanvasImageSource,
  srcW: number,
  srcH: number,
) {
  const targetAspect = FRAME_WIDTH / FRAME_HEIGHT
  const srcAspect = srcW / srcH
  let sx = 0,
    sy = 0,
    sw = srcW,
    sh = srcH
  if (srcAspect > targetAspect) {
    // Source wider than target → crop horizontally
    sw = srcH * targetAspect
    sx = (srcW - sw) / 2
  } else {
    // Source taller than target → crop vertically
    sh = srcW / targetAspect
    sy = (srcH - sh) / 2
  }
  ctx.drawImage(source, sx, sy, sw, sh, 0, 0, FRAME_WIDTH, FRAME_HEIGHT)
}

// Letterboxes the source onto the work canvas, preserving its aspect ratio.
// Used for the HUD snapshot so dock buttons and the bottom sheet stay where
// the user sees them, instead of being cropped out by drawCover.
function drawContain(
  ctx: CanvasRenderingContext2D,
  source: CanvasImageSource,
  srcW: number,
  srcH: number,
) {
  const targetAspect = FRAME_WIDTH / FRAME_HEIGHT
  const srcAspect = srcW / srcH
  let dx = 0,
    dy = 0,
    dw = FRAME_WIDTH,
    dh = FRAME_HEIGHT
  if (srcAspect > targetAspect) {
    dh = FRAME_WIDTH / srcAspect
    dy = (FRAME_HEIGHT - dh) / 2
  } else {
    dw = FRAME_HEIGHT * srcAspect
    dx = (FRAME_WIDTH - dw) / 2
  }
  ctx.drawImage(source, 0, 0, srcW, srcH, dx, dy, dw, dh)
}
