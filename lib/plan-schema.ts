// Research Brief schema — produced by the Pass 3 skill; consumed by /brief/<slug>.

export type LandscapeVerdict = 'active' | 'emerging' | 'saturated'
export type EvidenceStrength = 'low' | 'medium' | 'high'

export interface RefinedTopic {
  research_question: string
  scope: string
  domain: string
  approach: string
  context: string
}

export interface LandscapeReference {
  title: string
  authors?: string
  year?: number
  doi?: string
  wiki_page?: string
}

export interface KeyTheme {
  theme: string
  description: string
  evidence_summary: string
  source_citations: string[]
}

export interface ResearchGap {
  gap: string
  explanation: string
  open_questions: string[]
  potential_directions: string[]
}

export interface ReadingListEntry {
  id: string
  title: string
  authors?: string
  year?: number
  doi?: string
  why_relevant: string
  priority: 1 | 2 | 3 | 4 | 5
  wiki_page?: string
}

export interface MethodologyEntry {
  method: string
  description: string
  used_in_papers: string[]
  strengths: string[]
  limitations: string[]
  wiki_page?: string
}

export interface PublicationTimelinePhase {
  name: string
  duration_weeks: number
  depends_on?: string[]
}

export interface WikiDrilldown {
  title: string
  subtitle: string
  body_md: string
}

export interface ResearchBrief {
  topic: {
    slug: string
    original_question: string
    refined: RefinedTopic
  }
  landscape: {
    verdict: LandscapeVerdict
    summary: string
    key_prior_work: LandscapeReference[]
  }
  summary: {
    total_sources: number
    total_themes: number
    total_gaps: number
    pull_quote: string
    sources_breakdown: {
      papers: number
      preprints: number
      surveys: number
      other: number
    }
  }
  key_themes: KeyTheme[]
  research_gaps: ResearchGap[]
  reading_list: ReadingListEntry[]
  methodology_overview: MethodologyEntry[]
  publication_timeline?: PublicationTimelinePhase[]
  sources?: Array<{
    id: string
    title: string
    authors?: string
    year?: number
    doi?: string
    tag: 'paper' | 'preprint' | 'survey' | 'workshop' | 'other'
    wiki_page?: string
  }>
  wiki_drilldowns?: Record<string, WikiDrilldown>
}

// Lightweight summary for the picker UI
export interface PlanSummary {
  slug: string
  title: string
  domain: string
  landscape: LandscapeVerdict
  themes_count: number
}
