# GROUNDWORK — Context Doc

> Read this before doing anything else in the repo. This file is the shared context for human collaborators **and** for any AI coding agent working on GROUNDWORK. Treat it as your operating manual — the schema here is canonical.

---

## 1. What we're building

GROUNDWORK is a **deep research compilation tool** for CS/AI academics. You give it a research question; it returns a structured **Research Brief** — a synthesis of the literature with key themes, open problems, a methodology landscape, and a prioritized reading list.

The system runs a 3-pass agent pipeline per research topic:

1. **Pass 1 — Research** — discovers and downloads 35–45 high-signal papers into `hypotheses/<slug>/raw/`
2. **Pass 2 — Wiki** — reads every paper and compiles a structured Obsidian wiki under `hypotheses/<slug>/wiki/`
3. **Pass 3 — Brief** — synthesises the wiki into a `ResearchBrief` (`plan/plan.json` + `plan/index.html`)

The brief is the user-facing deliverable. The wiki is the evidence base — inspectable, linkable, auditable.

---

## 2. Architecture

```
research question (plain English)
        │
        ▼
┌──────────────────────┐
│ Pass 1: Research     │  → raw/   (papers, HTML, PDFs — immutable)
└──────────────────────┘
        │
        ▼
┌──────────────────────┐
│ Pass 2: Wiki compile │  → wiki/  (Obsidian markdown, entity pages)
└──────────────────────┘
        │
        ▼
┌──────────────────────┐
│ Pass 3: Brief        │  → plan/  (plan.json + index.html)
└──────────────────────┘
```

Each pass reads the previous pass's output and writes only into its own folder. Earlier artifacts are never modified by later passes. Each hypothesis is a self-contained, inspectable folder.

---

## 3. Folder structure

```
groundwork/
├── context.md                        # this file — canonical schema
├── CLAUDE.md                         # auto-loaded by Claude Code → redirects here
├── .claude/
│   ├── settings.json
│   ├── commands/                     # slash-command entry points
│   │   ├── pass-1.md                 # /pass-1 <slug> "<question>"
│   │   ├── pass-2.md                 # /pass-2 <slug>
│   │   └── pass-3.md                 # /pass-3 <slug>
│   └── skills/                       # skill implementations
│       ├── pass-1-research.md
│       ├── pass-2-wiki.md
│       ├── pass-3-plan.md
│       ├── ingest-source.md
│       └── apply-correction.md
│
├── hypotheses/                       # one folder per research topic
│   └── 2026-04-25_transformer-attention-time-series/
│       ├── hypothesis.md             # topic metadata, root node
│       ├── session.log.md            # chronological log
│       ├── raw/                      # Pass 1 output — IMMUTABLE
│       │   ├── papers/               # HTML5, PDFs, .txt extracts
│       │   ├── preprints/
│       │   ├── surveys/
│       │   ├── other/
│       │   ├── candidates.jsonl      # pre-filter audit trail
│       │   └── fetch_log.jsonl       # what was fetched, sha256, status
│       ├── wiki/                     # Pass 2 output — Obsidian markdown
│       │   ├── index.md
│       │   ├── log.md
│       │   ├── methods/
│       │   ├── concepts/
│       │   ├── datasets/
│       │   ├── open-problems/
│       │   ├── sources/              # one .md per ingested paper
│       │   └── plans/                # brief filed back as wiki page
│       └── plan/                     # Pass 3 output
│           ├── plan.json             # ResearchBrief — the UI's input
│           ├── plan.md               # human-readable mirror
│           └── index.html            # bespoke single-file brief page
│
└── commons/                          # cross-topic shared layer
    ├── index.md
    ├── methods/
    ├── concepts/
    ├── datasets/
    ├── open-problems/
    └── corrections.log.md
```

---

## 4. Wiki schema

### 4.1 Linking conventions

Use Obsidian wikilinks: `[[methods/rlhf]]` for in-vault links.

For links from a hypothesis wiki into commons:
```
[[../../../commons/methods/rlhf|RLHF]]
```

For internal links inside the same hypothesis wiki:
```
[[../methods/scaled-dot-product-attention]]
```

### 4.2 Naming conventions

- **Topic slugs:** `YYYY-MM-DD_short-kebab-slug`
  - `2026-04-25_transformer-attention-time-series`
- **Entity slugs:** kebab-case, lowercase, ASCII
  - `scaled-dot-product-attention`
  - `in-context-learning`
  - `attention-quadratic-complexity`
- **Source IDs:** `<year>-<first-author-lastname>-<short-slug>`
  - `2017-vaswani-attention-is-all-you-need`

### 4.3 Common frontmatter fields

Every wiki page has YAML frontmatter:

```yaml
---
type: <research-topic|source|method|concept|dataset|open-problem|plan>
created: 2026-04-25
updated: 2026-04-25
tags: [tag-1, tag-2]
---
```

### 4.4 Page types

#### `hypothesis.md` (root node)

```yaml
---
type: research-topic
slug: 2026-04-25_transformer-attention-time-series
domain: machine-learning
status: <researching|wiki|plan|complete>
original_question: |
  How are transformer attention mechanisms applied to time-series forecasting?
created: 2026-04-25
updated: 2026-04-25
sources_count: 38
---
```

Body: refined research question, scope, key entities (wikilinks), open questions.

#### `sources/<id>.md`

```yaml
---
type: source
id: 2017-vaswani-attention-is-all-you-need
source_type: <paper|preprint|survey|workshop|other>
title: "Attention Is All You Need"
authors: ["Vaswani, A.", "Shazeer, N."]
year: 2017
venue: NeurIPS
doi: 10.48550/arXiv.1706.03762
url: https://arxiv.org/abs/1706.03762
raw_path: raw/papers/2017-vaswani-attention-is-all-you-need.html
tags: [transformers, attention]
---
```

#### `methods/<slug>.md`

```yaml
---
type: method
slug: scaled-dot-product-attention
aliases: [self-attention]
related_methods: [multi-head-attention, linear-attention]
used_in_papers: [2017-vaswani-attention-is-all-you-need]
open_problems: [attention-quadratic-complexity]
tags: [attention, transformers]
---
```

#### `concepts/<slug>.md`

```yaml
---
type: concept
slug: in-context-learning
aliases: [few-shot prompting, ICL]
related_concepts: [prompt-engineering, chain-of-thought]
introduced_by: [2020-brown-gpt3]
tags: [llm, prompting]
---
```

#### `datasets/<slug>.md`

```yaml
---
type: dataset
slug: glue
tasks: [classification, NLI, QA]
used_in_papers: [...]
known_limitations: [dataset-contamination, saturation]
tags: [nlp, benchmark]
---
```

#### `open-problems/<slug>.md`

```yaml
---
type: open-problem
slug: attention-quadratic-complexity
severity: <low|medium|high|critical>
affects_methods: [scaled-dot-product-attention]
sources: [2017-vaswani-attention-is-all-you-need]
tags: [efficiency, scalability]
---
```

#### `plans/<id>.md`

```yaml
---
type: plan
id: plan-v1
created: 2026-04-25
derived_from: hypothesis.md
sources_used: 38
---
```

Body: human-readable mirror of `plan/plan.json`, with wikilinks for all entity references.

---

## 5. ResearchBrief schema (`plan/plan.json`)

This is the canonical data structure consumed by the Next.js `/brief/<slug>` route.

```typescript
interface ResearchBrief {
  topic: {
    slug: string
    original_question: string
    refined: {
      research_question: string  // sharpened version of the question
      scope: string              // what's in/out
      domain: string             // primary CS subfield (NLP, CV, RL, Systems...)
      approach: string           // methodology angle
      context: string            // why this is an open problem
    }
  }
  landscape: {
    verdict: 'active' | 'emerging' | 'saturated'
    summary: string
    key_prior_work: Array<{ title, authors?, year?, doi?, wiki_page? }>
  }
  summary: {
    total_sources: number
    total_themes: number
    total_gaps: number
    pull_quote: string           // one sentence framing the state of the field
    sources_breakdown: { papers, preprints, surveys, other }
  }
  key_themes: Array<{
    theme: string
    description: string
    evidence_summary: string
    source_citations: string[]   // source IDs
  }>
  research_gaps: Array<{
    gap: string
    explanation: string
    open_questions: string[]
    potential_directions: string[]
  }>
  reading_list: Array<{
    id: string
    title: string
    authors?: string
    year?: number
    doi?: string
    why_relevant: string
    priority: 1 | 2 | 3 | 4 | 5  // 1 = must read
    wiki_page?: string
  }>
  methodology_overview: Array<{
    method: string
    description: string
    used_in_papers: string[]
    strengths: string[]
    limitations: string[]
    wiki_page?: string
  }>
  publication_timeline?: Array<{ name, duration_weeks, depends_on? }>
  sources?: Array<{ id, title, authors?, year?, doi?, tag, wiki_page? }>
  wiki_drilldowns?: Record<string, { title, subtitle, body_md }>
}
```

---

## 6. Agent operations

### 6.1 Pass 1 — Research (`/pass-1`)

Discovers and downloads 35–45 high-signal papers. Uses Semantic Scholar batch API to pre-filter 80–120 candidates by citation count, influential citations, and venue tier before downloading. Prefers arXiv HTML5 over PDF. Downloads in parallel batches of 12.

Output: `raw/` (papers + `fetch_log.jsonl` + `candidates.jsonl`) + `hypothesis.md`

### 6.2 Pass 2 — Wiki compile (`/pass-2`)

Reads every source in `raw/`. For each: writes a `sources/<id>.md` page. Aggregates entities into `methods/`, `concepts/`, `datasets/`, `open-problems/` subfolders. Cross-links everything. Generates `wiki/index.md`.

Output: populated `wiki/` directory

### 6.3 Pass 3 — Research Brief (`/pass-3`)

Reads `wiki/` and synthesises a `ResearchBrief`. Produces `plan/plan.json` (structured, consumed by `/brief/<slug>`), `plan/plan.md` (Obsidian mirror), and `plan/index.html` (bespoke single-file web page).

Output: `plan/plan.json`, `plan/plan.md`, `plan/index.html`, `wiki/plans/plan-v<n>.md`

### 6.4 Ingest source (`/ingest-source`)

Adds a single new source to an existing wiki (incremental update). Fetches the artifact, writes `sources/<id>.md`, updates affected entity pages and `wiki/index.md`.

### 6.5 Apply correction (`/apply-correction`)

Writes a researcher correction into the wiki or commons. Updates the relevant entity page, appends to `commons/corrections.log.md`.

---

## 7. The Research Brief UX (`plan/index.html`)

A complete, polished, interactive web page generated **bespoke per topic** — no template. Academic editorial aesthetic. Sections:

- **Hero** — research question (Fraunces display), landscape verdict badge, pull quote, stat tiles (sources / themes / gaps)
- **Key Themes** — numbered, each with evidence summary and source citations
- **Research Gaps** — what's unanswered, suggested directions
- **Methodology Landscape** — comparison of approaches used in the literature
- **Reading List** — prioritized and annotated
- **Sources** — full list with DOI links
- **Wiki drilldown panel** — click any entity → side panel shows full wiki page

The `/brief/<slug>` Next.js route also renders the brief interactively from `plan.json`.

---

## 8. Commons (cross-topic shared layer)

`commons/` mirrors the per-hypothesis wiki entity types. Entities that appear in 2+ hypothesis wikis are promoted here. Hypothesis wikis link to commons rather than duplicating.

`commons/corrections.log.md` — append-only log of researcher corrections:

```markdown
## [2026-04-25 16:45] correction | methods/rlhf
Reviewer: ...
Section: description
Before: ...
After: ...
Reason: ...
```

---

## 9. Hard rules for agents

1. **Read this file first.** Don't infer architecture from code alone.
2. **Stay within scope.** When working on one hypothesis, touch only that hypothesis folder + `commons/` + `.claude/`.
3. **`raw/` is immutable.** Never modify a file in `raw/` after it's written.
4. **Update logs.** Every meaningful operation appends to `session.log.md` and `wiki/log.md`. Format: `## [YYYY-MM-DD HH:MM] <op> | <subject>`.
5. **Schema is canonical.** Wiki frontmatter must match the types above. All wikilinks must resolve.
6. **No free-floating facts.** Every claim in a brief must trace to a wiki entity, which traces to a source.
7. **Don't write into `commons/` from Pass 2.** Promotion is a separate lint pass.
8. **When schema is ambiguous, update this file** rather than working around it.

---

## 10. Tech stack

| Layer | Choice |
|---|---|
| Pipeline driver | Claude Code; skills under `.claude/skills/`; slash commands under `.claude/commands/` |
| LLM | Claude Sonnet/Opus (configurable via `ANTHROPIC_API_KEY`) |
| Literature discovery | Semantic Scholar API, arXiv API, OpenReview, Papers With Code |
| Download format | arXiv HTML5 preferred; PDF + pdftotext fallback |
| Wiki format | Obsidian-compatible markdown + YAML frontmatter |
| Brief renderer (static) | Bespoke single-file HTML per topic — Tailwind, Alpine.js, Chart.js, marked.js via CDN |
| Brief renderer (dynamic) | Next.js `/brief/<slug>` route reading `plan.json` |
| Deployment | Railway (Docker, persistent volume for `hypotheses/`) |
