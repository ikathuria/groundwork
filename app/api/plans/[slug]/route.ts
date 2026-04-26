import { promises as fs } from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'
import type { LabBriefPlan } from '@/lib/plan-schema'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// GET /api/plans/[slug] → return the parsed plan.json for one hypothesis.
export async function GET(
  _req: Request,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug
  // Defence against path traversal
  if (slug.includes('..') || slug.includes('/') || slug.includes('\\')) {
    return new NextResponse('Invalid slug', { status: 400 })
  }

  const planPath = path.join(process.cwd(), 'hypotheses', slug, 'plan', 'plan.json')
  try {
    const raw = await fs.readFile(planPath, 'utf-8')
    const plan = JSON.parse(raw) as LabBriefPlan
    return NextResponse.json(plan)
  } catch (err) {
    return new NextResponse(`Plan not found: ${slug}`, { status: 404 })
  }
}
