import { promises as fs } from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// GET /h/[slug] → serve the static plan/wiki.html for one hypothesis.
// Produced by Pass 4. Returns 404 if Pass 4 hasn't run yet.
export async function GET(
  _req: Request,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug
  if (slug.includes('..') || slug.includes('/') || slug.includes('\\')) {
    return new NextResponse('Invalid slug', { status: 400 })
  }

  const htmlPath = path.join(process.cwd(), 'hypotheses', slug, 'plan', 'wiki.html')
  try {
    const html = await fs.readFile(htmlPath, 'utf-8')
    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
      },
    })
  } catch {
    return new NextResponse(
      `<!doctype html><meta charset="utf-8"><title>Not found</title>` +
        `<body style="font-family:system-ui;background:#0a0f1a;color:#e2e8f0;padding:2rem">` +
        `<h1 style="color:#f87171">Wiki page not generated yet</h1>` +
        `<p>No <code>plan/wiki.html</code> exists for <code>${escapeHtml(slug)}</code>.</p>` +
        `<p>Run <code>/pass-4 ${escapeHtml(slug)}</code> in Claude Code (or the equivalent Codex skill) to generate it.</p>` +
        `</body>`,
      { status: 404, headers: { 'Content-Type': 'text/html; charset=utf-8' } },
    )
  }
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (c) =>
    c === '&' ? '&amp;' : c === '<' ? '&lt;' : c === '>' ? '&gt;' : c === '"' ? '&quot;' : '&#39;',
  )
}
