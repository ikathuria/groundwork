// Maps a Pass 3 LabBriefPlan + Pass 4 LabSceneSpec into an ExperimentPlan that
// the live AR viewer consumes. The spec is the source of truth for which
// station each step focuses on (via step_bindings) — no keyword guessing.

import type {
  LabBriefPlan,
  ProtocolStep,
  FailureWarning,
  LabSceneSpec,
  StepBinding,
  StationAnimation,
  StationKind,
} from './plan-schema'
import type {
  ExperimentPlan,
  ExperimentStep,
  StepGesture,
} from './experiment-steps'

// ─── Public API ─────────────────────────────────────────────────────────────

export function mapLabBriefToExperiment(
  plan: LabBriefPlan,
  spec: LabSceneSpec | null,
): ExperimentPlan {
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

  const bindingByStep = new Map<number, StepBinding>()
  const stationLabel = new Map<string, string>()
  const stationKind = new Map<string, StationKind>()
  if (spec) {
    spec.step_bindings.forEach((b) => bindingByStep.set(b.step, b))
    spec.scene.stations.forEach((s) => {
      stationLabel.set(s.id, s.label)
      stationKind.set(s.id, s.kind)
    })
  }

  return {
    title: shorten(
      plan.hypothesis.refined?.intervention ?? plan.hypothesis.original_question,
      70,
    ),
    hypothesis: plan.hypothesis.original_question,
    domain: inferDomain(plan),
    totalDuration: formatTotalDuration(protocol),
    steps: protocol.map((s) => mapStep(s, bindingByStep.get(s.step), stationLabel, stationKind)),
  }
}

// ─── Step mapper ────────────────────────────────────────────────────────────

function mapStep(
  step: ProtocolStep,
  binding: StepBinding | undefined,
  stationLabel: Map<string, string>,
  stationKind: Map<string, StationKind>,
): ExperimentStep {
  const focusObject = binding?.focus_station ?? 'none'
  const focusLabel = focusObject !== 'none' ? stationLabel.get(focusObject) : undefined
  const focusKind = focusObject !== 'none' ? stationKind.get(focusObject) : undefined
  const animation: StationAnimation | undefined = binding?.animation ?? undefined
  const topWarning = topSeverity(step.failure_warnings ?? [])
  const interaction = deriveInteraction(focusKind, animation, focusLabel)

  return {
    id: step.step,
    title: step.title,
    instruction: binding?.label_override || firstSentence(step.rationale) || step.title,
    detail: step.rationale || '',
    focusObject,
    focusLabel,
    animation,
    isFailurePoint: !!topWarning && topWarning.severity !== 'low',
    failureWarning: topWarning?.mitigation,
    failureFrequency: topWarning?.frequency_estimate,
    duration: formatDuration(step.duration_minutes),
    reagents: (step.reagents ?? []).map(formatReagent),
    gesture: interaction.gesture,
    interactionHint: interaction.hint,
  }
}

// ─── Per-step interaction hint ─────────────────────────────────────────────
// Single-line, gesture-first cue tailored to the station kind + animation.
// Solar-cell coupons get drag+tap copy because they're the headline interactive
// elements; everything else is a single tap on a glowing station.

function deriveInteraction(
  kind: StationKind | undefined,
  anim: StationAnimation | undefined,
  label: string | undefined,
): { gesture: StepGesture; hint: string } {
  const target = label ? `the ${label.toLowerCase()}` : 'the highlighted station'

  if (kind === 'solar-cell' || kind === 'pv-module') {
    return {
      gesture: 'flip',
      hint: `👆 Tap ${target} to flip it · drag with one finger to rotate and inspect both sides`,
    }
  }

  switch (anim) {
    case 'heat':
      return { gesture: 'heat', hint: `🔥 Tap ${target} to fire / heat the lots — watch the surface glow` }
    case 'measure':
      return { gesture: 'measure', hint: `📏 Tap ${target} to take the measurement — instrument lifts and flashes cyan` }
    case 'observe':
      return { gesture: 'observe', hint: `🔬 Tap ${target} to scan / observe — sample flashes white` }
    case 'mix':
      return { gesture: 'mix', hint: `🌀 Tap ${target} to mix the contents — watch it rock side to side` }
    case 'operate':
      return { gesture: 'tap', hint: `⚙ Tap ${target} to run it — head spins to indicate operation` }
    case 'transfer':
      return { gesture: 'transfer', hint: `💧 Tap ${target} to transfer / pipette — instrument lifts and returns` }
    case 'none':
    case undefined:
    default:
      return { gesture: 'wait', hint: `📋 No physical interaction this step — review the brief and tap Next ➜` }
  }
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
  ['Photovoltaics', /\b(photovoltaic|solar cell|metalli[sz]ation|silver paste|copper paste|TOPCon|PERC|silicon heterojunction|SHJ|c-Si|damp[- ]?heat|busbar|fingers?)\b/i],
  ['Biomaterials', /\b(scaffold|hydroxyapatite|HA|β-TCP|sintering|DLP|μCT|osteoblast|MC3T3|bone)\b/i],
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
