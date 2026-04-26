// Lab Brief schema — matches context.md §8.
// Produced by the Pass 3 skill; consumed by the AR UI via plan-to-ar.ts.

export type NoveltyVerdict = 'not-found' | 'similar-work-exists' | 'exact-match-found'
export type FailureSeverity = 'low' | 'medium' | 'high'

export interface RefinedHypothesis {
  intervention: string
  outcome: string
  threshold: string
  mechanism: string
  control: string
}

export interface NoveltyReference {
  title: string
  authors?: string
  year?: number
  doi?: string
  wiki_page?: string
}

export interface PlanReagent {
  wiki_page: string
  qty?: string
  supplier?: string
  catalog?: string
  price_usd?: number
}

export interface FailureWarning {
  wiki_page: string
  severity: FailureSeverity
  mitigation: string
  frequency_estimate?: string
}

export interface ProtocolStep {
  step: number
  title: string
  duration_minutes: number
  reagents: PlanReagent[]
  failure_warnings: FailureWarning[]
  rationale: string
  source_citations: string[]
}

export interface BudgetLine {
  category: string
  description: string
  cost_usd: number
}

export interface MaterialRow {
  reagent: string // wiki_page
  supplier?: string
  catalog?: string
  qty?: string
  price_usd?: number
}

export interface TimelinePhase {
  name: string
  duration_weeks: number
  depends_on?: string[]
}

export interface ValidationBlock {
  success_criteria?: string[]
  failure_criteria?: string[]
  measurements?: string[]
}

export interface FailureMapEntry {
  wiki_page: string
  severity: FailureSeverity
  frequency_estimate?: string
  applies_to_step?: number
  mitigation: string
}

export interface LabBriefPlan {
  hypothesis: {
    slug: string
    original_question: string
    refined: RefinedHypothesis
  }
  novelty: {
    verdict: NoveltyVerdict
    references: NoveltyReference[]
  }
  summary: {
    total_budget_usd: number
    total_timeline_weeks: number
    top_failure_modes: string[]
  }
  protocol: ProtocolStep[]
  materials?: MaterialRow[]
  budget?: BudgetLine[]
  timeline?: TimelinePhase[]
  validation?: ValidationBlock
  failure_map?: FailureMapEntry[]
}

// ─── Pass 4 — custom AR scene spec (plan/ar.json) ─────────────────────────

export type StationKind =
  | 'beaker'
  | 'tube-rack'
  | 'pipette'
  | 'hotplate'
  | 'tall-instrument'
  | 'flat-instrument'
  | 'plate-reader'
  | 'scaffold'
  | 'dish'
  | 'microscope'
  | 'incubator'
  | 'furnace'
  | 'printer'
  | 'solar-cell'
  | 'pv-module'

export type StationAnimation =
  | 'operate'
  | 'mix'
  | 'heat'
  | 'observe'
  | 'measure'
  | 'transfer'
  | 'none'

export interface LabStation {
  id: string
  label: string
  kind: StationKind
  color?: string // hex string, e.g. "#4a90e2"
  position: [number, number, number]
  wiki_page?: string
}

export interface StationStateChange {
  station: string
  property: 'color' | 'label' | 'active'
  to: string | boolean
}

export interface StepBinding {
  step: number
  focus_station: string
  animation?: StationAnimation
  label_override?: string
  state_changes?: StationStateChange[]
}

export interface LabSceneSpec {
  version: 1
  slug: string
  title: string
  scene: {
    stations: LabStation[]
  }
  step_bindings: StepBinding[]
}

// Lightweight summary for the picker UI
export interface PlanSummary {
  slug: string
  title: string
  domain: string
  novelty: NoveltyVerdict
  steps_count: number
}
