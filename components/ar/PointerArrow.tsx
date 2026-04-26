'use client'

import { useEffect, useState } from 'react'

export interface PointerTarget {
  // Screen-space anchor (client coordinates) the arrow is meant to point at.
  x: number
  y: number
  // Optional caption rendered next to the arrow.
  label?: string
  // Stable id so we can ignore stale auto-dismiss timers when a new pointer
  // request arrives in quick succession.
  key: number
}

interface PointerArrowProps {
  target: PointerTarget | null
  // Visual variant. 'accent' (default) is the bright green deictic gesture
  // Gemini uses to direct attention; 'hint' is a softer, persistent guide
  // arrow used by the step-gate to anchor "Do the gesture above ↑" to the
  // station the user must interact with.
  variant?: 'accent' | 'hint'
}

// Animated screen-space pointer used by Gemini Live (and the rest of the AR
// HUD) to direct the user's gaze. The arrow points from above-left toward
// the target with a bouncing motion; an optional caption sits above the tip.
//
// The arrow is rendered into the document at z-index 40 so it floats above
// the bottom sheet (z-30) and the docks (z-20). It is visually only —
// `pointer-events: none` so it never steals taps from real UI underneath.
export default function PointerArrow({ target, variant = 'accent' }: PointerArrowProps) {
  const [visible, setVisible] = useState(false)

  // Fade in on new target, fade out when target clears or after the parent
  // tells us to dismiss. Using a separate state lets us run the exit
  // transition smoothly even when target becomes null synchronously.
  useEffect(() => {
    if (target) {
      setVisible(true)
    } else {
      setVisible(false)
    }
  }, [target])

  if (!target) return null

  // Anchor the arrow ~64px up-and-left of the tip so the arrowhead is the
  // pixel actually over the target. The tip is at the bottom-right of the
  // arrow svg.
  const ANCHOR_OFFSET_X = -64
  const ANCHOR_OFFSET_Y = -64
  const left = target.x + ANCHOR_OFFSET_X
  const top = target.y + ANCHOR_OFFSET_Y

  // Hint variant uses a slightly cooler hue and a slower, gentler pulse so
  // it doesn't compete with Gemini's deictic gesture for attention. Both
  // variants share the same arrow geometry so the user instantly reads
  // either as "look here".
  const isHint = variant === 'hint'
  const fill = isHint ? '#38bdf8' : '#00d4aa' // sky-400 vs lab-accent
  const shadowColor = isHint ? '#0284c7' : '#00b894'
  const haloBorder = isHint ? 'border-sky-400/80' : 'border-lab-accent/80'
  const labelRing = isHint ? 'ring-sky-400' : 'ring-lab-accent'
  const filterId = isHint ? 'pa-shadow-hint' : 'pa-shadow-accent'
  const bobDuration = isHint ? '1.6s' : '1.1s'
  const haloDuration = isHint ? '1.8s' : '1.4s'

  // Arrow geometry — a solid filled arrow pointing diagonally to the
  // bottom-right, with the tip at (64, 64) of the 80×80 SVG viewbox.
  // Two layers: a white outline (drawn first) for contrast against any
  // background, and the colored fill on top. This is the same trick used
  // by Snapchat / Instagram instructional callouts.
  const ARROW_POLYGON = [
    '8.5,15.5',   // shaft start, left edge
    '46.5,53.5',  // shaft end,   left edge
    '41.5,58.5',  // head wing,   left
    '64,64',      // tip
    '58.5,41.5',  // head wing,   right
    '53.5,46.5',  // shaft end,   right edge
    '15.5,8.5',   // shaft start, right edge
  ].join(' ')

  return (
    <div
      className="fixed z-40 pointer-events-none transition-opacity duration-200"
      style={{
        left,
        top,
        opacity: visible ? 1 : 0,
        transform: 'translate(0, 0)',
      }}
      aria-hidden
    >
      <div className="relative">
        {/* Pulsing halo at the arrow tip — draws the eye to the exact
            pixel the arrow is pointing at. Positioned over the SVG tip
            (64, 64) with a small offset so the ring centres on it. */}
        <span
          className={`absolute block rounded-full border-2 ${haloBorder}`}
          style={{
            left: 52,
            top: 52,
            width: 24,
            height: 24,
            animation: `pointerHalo ${haloDuration} ease-out infinite`,
          }}
        />

        {/* The arrow itself — a bold filled chevron pointing to the
            bottom-right. White outline keeps it legible on any
            background; colored fill carries the variant identity. */}
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          xmlns="http://www.w3.org/2000/svg"
          style={{ animation: `pointerBob ${bobDuration} ease-in-out infinite` }}
        >
          <defs>
            <filter id={filterId} x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor={shadowColor} floodOpacity="0.65" />
            </filter>
          </defs>
          {/* White outline: stroked copy of the polygon, drawn underneath
              so a halo of contrast surrounds the colored fill. */}
          <polygon
            points={ARROW_POLYGON}
            fill="#ffffff"
            stroke="#ffffff"
            strokeWidth="6"
            strokeLinejoin="round"
            filter={`url(#${filterId})`}
          />
          {/* Colored fill on top. */}
          <polygon
            points={ARROW_POLYGON}
            fill={fill}
            stroke={fill}
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>

        {/* Optional caption — solid white pill with bold black text so it
            reads instantly against camera footage, dark lab chrome, or
            bright shelving. Sits above the arrow's tail so it doesn't
            cover the target. */}
        {target.label && (
          <div
            className={`absolute rounded-full px-3 py-1 text-[12px] text-black font-bold whitespace-nowrap max-w-[60vw] truncate bg-white shadow-lg ring-2 ${labelRing}`}
            style={{
              left: -12,
              top: -28,
              animation: 'pointerLabel 1.4s ease-out infinite',
            }}
          >
            {target.label}
          </div>
        )}
      </div>
    </div>
  )
}
