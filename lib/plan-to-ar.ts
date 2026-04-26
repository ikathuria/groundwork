// Heuristic mapper: Lab Brief plan.json → ExperimentPlan that lab-scene consumes.
// No LLM call — pure keyword/structure transforms.

import type {
  LabBriefPlan,
  ProtocolStep,
  FailureWarning,
} from './plan-schema'
import type {
  ExperimentPlan,
  ExperimentStep,
  LabObjectName,
} from './experiment-steps'

// ─── Public API ─────────────────────────────────────────────────────────────

export function mapLabBriefToExperiment(plan: LabBriefPlan): ExperimentPlan {
  const protocol = plan.protocol ?? []
  if (protocol.length === 0) {
    return {
      title: shorten(plan.hypothesis.refined?.intervention ?? plan.hypothesis.original_question, 70),
      hypothesis: plan.hypothesis.original_question,
      domain: inferDomain(plan),
      totalDuration: '—',
      steps: [
        {
          id: 1,
          title: 'No protocol generated',
          instruction:
            'The Pass 3 plan has no protocol steps. Re-run the research pipeline or check the wiki for missing entities.',
          detail: 'protocol[] was empty.',
          focusObject: 'none',
        },
      ],
    }
  }

  const reagentMap = collectReagentBeakerAssignment(protocol)

  return {
    title: shorten(
      plan.hypothesis.refined?.intervention ?? plan.hypothesis.original_question,
      70,
    ),
    hypothesis: plan.hypothesis.original_question,
    domain: inferDomain(plan),
    totalDuration: formatTotalDuration(protocol),
    steps: protocol.map((s) => mapStep(s, reagentMap)),
  }
}

// ─── Step mapper ────────────────────────────────────────────────────────────

function mapStep(
  step: ProtocolStep,
  reagentMap: Map<string, LabObjectName>,
): ExperimentStep {
  const focus = pickFocusObject(step, reagentMap)
  const animation = animationFor(focus)
  const topWarning = topSeverity(step.failure_warnings ?? [])

  return {
    id: step.step,
    title: step.title,
    instruction: firstSentence(step.rationale) || step.title,
    detail: step.rationale || '',
    focusObject: focus,
    animation,
    isFailurePoint: !!topWarning && topWarning.severity !== 'low',
    failureWarning: topWarning?.mitigation,
    failureFrequency: topWarning?.frequency_estimate,
    duration: formatDuration(step.duration_minutes),
    reagents: (step.reagents ?? []).map(formatReagent),
  }
}

// ─── focusObject heuristic ──────────────────────────────────────────────────

const PIPETTE_RE = /\b(pipette|aliquot|transfer|dispense|pipetting)\b/i
const HOTPLATE_RE = /\b(incubate|heat|warm|°C|degrees|temperature|reflux|boil)\b/i
const TUBES_RE = /\b(tube|centrifuge|vortex|spin|microfuge|eppendorf|aliquot)\b/i
const OBSERVE_RE = /\b(measure|read|fluorescence|absorbance|observe|image|microscop|plate reader|spectro)\b/i

function pickFocusObject(
  step: ProtocolStep,
  reagentMap: Map<string, LabObjectName>,
): LabObjectName {
  const haystack = `${step.title} ${step.rationale}`

  if (PIPETTE_RE.test(haystack)) return 'pipette'
  if (HOTPLATE_RE.test(haystack)) return 'hotplate'
  if (OBSERVE_RE.test(haystack)) return 'beaker3'
  if (TUBES_RE.test(haystack)) return 'tubes'

  // Otherwise pick the beaker assigned to the step's first reagent
  const firstReagent = step.reagents?.[0]
  if (firstReagent?.wiki_page) {
    const assigned = reagentMap.get(firstReagent.wiki_page)
    if (assigned) return assigned
  }
  return 'beaker1'
}

function animationFor(obj: LabObjectName): ExperimentStep['animation'] {
  switch (obj) {
    case 'pipette':
      return 'pipette-transfer'
    case 'hotplate':
      return 'heat'
    case 'tubes':
      return 'measure'
    case 'beaker3':
      return 'observe'
    case 'beaker1':
    case 'beaker2':
      return 'mix'
    default:
      return undefined
  }
}

// Round-robin assign distinct reagents (in order of first appearance) to beaker1/2/3.
// Reagents that don't fit into the first three keep mapping to beaker3.
function collectReagentBeakerAssignment(
  protocol: ProtocolStep[],
): Map<string, LabObjectName> {
  const slots: LabObjectName[] = ['beaker1', 'beaker2', 'beaker3']
  const map = new Map<string, LabObjectName>()
  let i = 0
  for (const step of protocol) {
    for (const r of step.reagents ?? []) {
      if (!r.wiki_page || map.has(r.wiki_page)) continue
      map.set(r.wiki_page, slots[Math.min(i, slots.length - 1)])
      i++
    }
  }
  return map
}

// ─── Failure warning selection ──────────────────────────────────────────────

const SEVERITY_RANK: Record<FailureWarning['severity'], number> = {
  low: 0,
  medium: 1,
  high: 2,
}

function topSeverity(warnings: FailureWarning[]): FailureWarning | undefined {
  if (warnings.length === 0) return undefined
  return [...warnings].sort(
    (a, b) => SEVERITY_RANK[b.severity] - SEVERITY_RANK[a.severity],
  )[0]
}

// ─── Formatters ─────────────────────────────────────────────────────────────

function formatReagent(r: { wiki_page: string; qty?: string; supplier?: string; catalog?: string }): string {
  const name = lastPathSegment(r.wiki_page)
  const qty = r.qty ? ` (${r.qty})` : ''
  const supply = r.supplier ? ` — ${r.supplier}${r.catalog ? ` ${r.catalog}` : ''}` : ''
  return `${name}${qty}${supply}`
}

function lastPathSegment(p: string): string {
  const parts = p.split('/')
  return parts[parts.length - 1].replace(/[-_]/g, ' ')
}

function formatDuration(mins: number): string {
  if (!mins || mins <= 0) return ''
  if (mins < 60) return `${mins} minute${mins === 1 ? '' : 's'}`
  const h = Math.floor(mins / 60)
  const m = mins % 60
  return m === 0 ? `${h} hour${h === 1 ? '' : 's'}` : `${h}h ${m}m`
}

function formatTotalDuration(protocol: ProtocolStep[]): string {
  const total = protocol.reduce((acc, s) => acc + (s.duration_minutes || 0), 0)
  if (total === 0) return '—'
  if (total < 60) return `${total} minutes (assay day)`
  const h = Math.round(total / 60)
  return `~${h} hour${h === 1 ? '' : 's'} (assay day)`
}

function firstSentence(text: string): string {
  if (!text) return ''
  const m = text.match(/^[^.!?]+[.!?]/)
  return m ? m[0].trim() : text.trim()
}

function shorten(text: string, max: number): string {
  if (!text) return ''
  return text.length <= max ? text : text.slice(0, max - 1).trim() + '…'
}

// ─── Domain inference ──────────────────────────────────────────────────────

const DOMAIN_KEYWORDS: Array<[string, RegExp]> = [
  ['Cell Biology', /\b(HeLa|cell|cryopreservation|culture|line|trehalose|DMSO)\b/i],
  ['Gut Health', /\b(gut|intestin|microbiota|probiotic|FITC-dextran|permeability|Lactobacillus)\b/i],
  ['Diagnostics', /\b(biosensor|ELISA|CRP|antibod|detection|diagnosis|whole blood)\b/i],
  ['Climate', /\b(CO2|carbon|electrochemical|microb|cathode|Sporomusa|capture)\b/i],
  ['Neuroscience', /\b(neuron|brain|synap|neural|cortex)\b/i],
]

function inferDomain(plan: LabBriefPlan): string {
  const haystack = [
    plan.hypothesis.original_question,
    plan.hypothesis.refined?.intervention,
    plan.hypothesis.refined?.mechanism,
  ]
    .filter(Boolean)
    .join(' ')
  for (const [name, re] of DOMAIN_KEYWORDS) {
    if (re.test(haystack)) return name
  }
  return 'Generic'
}
