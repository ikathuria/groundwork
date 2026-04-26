// Captures a composite of the camera feed + Three.js canvas as a JPEG
// data URL, ready to send to Gemini Live as video input.
//
// Why composite both: Gemini sees both the user's real environment AND the
// virtual lab state (which beaker is glowing, what's loaded in the pipette),
// which lets it reason about the AR experience as a whole.

const FRAME_WIDTH = 640
const FRAME_HEIGHT = 480

let workCanvas: HTMLCanvasElement | null = null

function getWorkCanvas() {
  if (!workCanvas) {
    workCanvas = document.createElement('canvas')
    workCanvas.width = FRAME_WIDTH
    workCanvas.height = FRAME_HEIGHT
  }
  return workCanvas
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

  // Encode as JPEG (smaller than PNG, faster upload)
  const dataUrl = work.toDataURL('image/jpeg', 0.6)
  return dataUrl.split(',')[1] // strip "data:image/jpeg;base64,"
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
