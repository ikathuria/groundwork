import { promises as fs } from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// GET /h/[slug] → serve the static Lab Brief HTML for one hypothesis.
// Tries `plan/index.html` first (Pass 3), then `plan/wiki.html` (legacy). 404 if neither exists.
export async function GET(
  _req: Request,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug
  if (slug.includes('..') || slug.includes('/') || slug.includes('\\')) {
    return new NextResponse('Invalid slug', { status: 400 })
  }

  const planDir = path.join(process.cwd(), 'hypotheses', slug, 'plan')
  for (const name of ['index.html', 'wiki.html'] as const) {
    const htmlPath = path.join(planDir, name)
    try {
      const html = await fs.readFile(htmlPath, 'utf-8')
      return new NextResponse(html, {
        headers: {
          'Content-Type': 'text/html; charset=utf-8',
          'Cache-Control': 'no-cache, no-transform',
        },
      })
    } catch {
      // try next candidate
    }
  }

  return new NextResponse(
    `<!doctype html><meta charset="utf-8"><title>Not found</title>` +
      `<body style="font-family:system-ui;background:#0a0f1a;color:#e2e8f0;padding:2rem">` +
      `<h1 style="color:#f87171">Lab Brief not found</h1>` +
      `<p>No <code>plan/index.html</code> (Pass 3) or <code>plan/wiki.html</code> (legacy) for <code>${escapeHtml(slug)}</code>.</p>` +
      `<p>Run <code>/pass-3 &lt;slug&gt;</code> to generate the Lab Brief.</p>` +
      `</body>`,
    { status: 404, headers: { 'Content-Type': 'text/html; charset=utf-8' } },
  )
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    c === '&' ? '&amp;' : c === '<' ? '&lt;' : c === '>' ? '&gt;' : c === '"' ? '&quot;' : '&#39;',
  )
}
