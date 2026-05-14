import { promises as fs } from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// DELETE /api/plans/[slug]/delete
// Removes plan.json for a topic so it no longer appears in PlanPicker.
// Does NOT remove raw/ or wiki/ — the research artifacts are preserved.
export async function DELETE(
  _req: Request,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug
  if (slug.includes('..') || slug.includes('/') || slug.includes('\\')) {
    return new NextResponse('Invalid slug', { status: 400 })
  }

  const planPath = path.join(process.cwd(), 'hypotheses', slug, 'plan', 'plan.json')
  try {
    await fs.unlink(planPath)
    return new NextResponse(null, { status: 204 })
  } catch (err: unknown) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') {
      return new NextResponse('Plan not found', { status: 404 })
    }
    return new NextResponse('Failed to delete plan', { status: 500 })
  }
}
