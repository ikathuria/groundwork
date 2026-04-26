import { promises as fs } from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'
import type { LabSceneSpec } from '@/lib/plan-schema'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// GET /api/ar/[slug] → return the parsed plan/ar.json for one hypothesis.
// Produced by Pass 4. Returns 404 when Pass 4 hasn't run for the slug yet.
export async function GET(
  _req: Request,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug
  if (slug.includes('..') || slug.includes('/') || slug.includes('\\')) {
    return new NextResponse('Invalid slug', { status: 400 })
  }

  const arPath = path.join(process.cwd(), 'hypotheses', slug, 'plan', 'ar.json')
  try {
    const raw = await fs.readFile(arPath, 'utf-8')
    const spec = JSON.parse(raw) as LabSceneSpec
    return NextResponse.json(spec)
  } catch {
    return new NextResponse(`AR spec not found: ${slug}`, { status: 404 })
  }
}
