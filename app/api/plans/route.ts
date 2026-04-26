import { promises as fs } from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'
import type { LabBriefPlan, PlanSummary } from '@/lib/plan-schema'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// GET /api/plans → list all hypotheses with a plan.json on disk.
export async function GET() {
  const root = path.join(process.cwd(), 'hypotheses')
  let dirs: string[] = []
  try {
    dirs = await fs.readdir(root)
  } catch {
    return NextResponse.json([])
  }

  const summaries: PlanSummary[] = []

  await Promise.all(
    dirs.map(async (slug) => {
      const planPath = path.join(root, slug, 'plan', 'plan.json')
      try {
        const raw = await fs.readFile(planPath, 'utf-8')
        const plan = JSON.parse(raw) as LabBriefPlan
        summaries.push({
          slug,
          title:
            plan.hypothesis?.refined?.intervention ??
            plan.hypothesis?.original_question ??
            slug,
          domain: domainFromSlug(slug),
          novelty: plan.novelty?.verdict ?? 'not-found',
          steps_count: plan.protocol?.length ?? 0,
        })
      } catch {
        // No plan yet, skip
      }
    }),
  )

  // Sort newest first by date prefix
  summaries.sort((a, b) => b.slug.localeCompare(a.slug))
  return NextResponse.json(summaries)
}

function domainFromSlug(slug: string): string {
  // Strip date prefix YYYY-MM-DD_
  const stripped = slug.replace(/^\d{4}-\d{2}-\d{2}_/, '')
  if (/cell|hela|trehalose|cryo/i.test(stripped)) return 'Cell Biology'
  if (/gut|microb|probiotic|lacto|FITC/i.test(stripped)) return 'Gut Health'
  if (/biosensor|ELISA|CRP|diagnos/i.test(stripped)) return 'Diagnostics'
  if (/CO2|carbon|climate|sporo/i.test(stripped)) return 'Climate'
  return 'Generic'
}
