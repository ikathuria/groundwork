import { promises as fs } from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'
import type { ResearchBrief, PlanSummary } from '@/lib/plan-schema'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// GET /api/plans → list all research topics with a plan.json on disk.
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
        const plan = JSON.parse(raw) as ResearchBrief
        summaries.push({
          slug,
          title:
            plan.topic?.refined?.research_question ??
            plan.topic?.original_question ??
            slug,
          domain: domainFromPlan(plan, slug),
          landscape: plan.landscape?.verdict ?? 'emerging',
          themes_count: plan.key_themes?.length ?? 0,
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

function domainFromPlan(plan: ResearchBrief, slug: string): string {
  const domain = plan.topic?.refined?.domain
  if (domain) return domain
  const stripped = slug.replace(/^\d{4}-\d{2}-\d{2}_/, '')
  if (/nlp|language|transformer|llm|gpt|bert/i.test(stripped)) return 'NLP'
  if (/vision|image|cnn|detection|segmentation/i.test(stripped)) return 'Computer Vision'
  if (/reinforcement|rl|agent|policy/i.test(stripped)) return 'Reinforcement Learning'
  if (/graph|gnn|network/i.test(stripped)) return 'Graph Learning'
  if (/system|distributed|inference|efficient/i.test(stripped)) return 'Systems'
  if (/security|privacy|adversarial/i.test(stripped)) return 'Security'
  return 'AI / ML'
}
