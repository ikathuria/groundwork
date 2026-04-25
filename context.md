# GROUNDWORK — Context Doc

> Read this before doing anything else in the repo. This file is the shared context for human collaborators **and** for any AI coding agent (Claude Code, Codex, OpenCode, Cursor) working on GROUNDWORK. If you're an AI agent, treat this file the same way you'd treat a `CLAUDE.md` or `AGENTS.md`: it is your operating manual.

---

## 1. What we're building

GROUNDWORK is our entry for **Hack Nation Global AI Hackathon — Challenge 04: The AI Scientist** (Fulcrum × Hack-Nation).

The brief: build a tool that takes a scientific hypothesis in plain English and returns a complete, operationally realistic experiment plan a real lab could pick up on Monday and start running by Friday.

A plan must include:

- **Protocol** — step-by-step methodology grounded in real published protocols
- **Materials and supply chain** — specific reagents, catalog numbers, suppliers
- **Budget** — realistic line-item cost estimate
- **Timeline** — phased breakdown with dependencies
- **Validation** — how success or failure will be measured

There is also a **literature QC step** (novelty signal: `not-found` / `similar-work-exists` / `exact-match-found`, with 1–3 references) and a **stretch goal**: scientist corrections should improve future plans without re-prompting.

The full brief is at `../hacknation/04_The_AI_Scientist.docx - Google Docs.pdf`.

---

## 2. What makes GROUNDWORK different

Two things.

### 2.1 Failure Archaeology

Every scientific database is optimised for positive results — protocols that worked, papers that confirmed. The information that would save the most time (failed replications, retracted methodologies, known pitfalls at specific protocol steps) is scattered across Retraction Watch, PubPeer, AllTrials, and buried in supplementary materials. No tool synthesises it.

GROUNDWORK does. **Failure modes are first-class entities in the wiki.** They surface inline in the protocol at the steps they affect — not as a disclaimer at the end, but as step-level annotations with mitigations.

### 2.2 The wiki-as-platform

The brief explicitly calls out the difference between a tool and a platform: *a platform gets better every time someone uses it.* Most LLM-based tools are RAG — retrieve relevant chunks at query time, generate from scratch, no compounding. GROUNDWORK is different.

Every hypothesis triggers an LLM agent to do **deep research**, write all the raw sources to disk, then **compile a structured Obsidian-compatible wiki** synthesising what it learned, then **render a Lab Brief** for the scientist. Entities that recur across hypotheses (common methods, reagents, recurring failure modes) get promoted to a shared `commons/` layer. Scientist corrections write directly into the wiki. The system compounds.

The wiki is **a first-class artifact**, not hidden plumbing. The judge / scientist can open it in Obsidian and walk the graph.

---

## 3. Architecture

Three agent passes per hypothesis, each producing an inspectable artifact.

```
hypothesis (plain English)
        │
        ▼
┌──────────────────────┐
│ Pass 1: Research     │  → raw/   (immutable PDFs, protocols, retractions)
└──────────────────────┘
        │
        ▼
┌──────────────────────┐
│ Pass 2: Wiki compile │  → wiki/  (Obsidian markdown, hundreds of pages)
└──────────────────────┘
        │
        ▼
┌──────────────────────┐
│ Pass 3: Plan / brief │  → plan/  (structured Lab Brief data → web UI)
└──────────────────────┘
```

Each pass reads the previous pass's output and writes only into its own designated folder. **Earlier artifacts are never modified by later passes.** This makes the system inspectable, debuggable, and resumable.

### Per-hypothesis isolation

Each hypothesis lives in `hypotheses/<slug>/`, with its own `raw/`, `wiki/`, `plan/`, and session log. Agents working on hypothesis A do not touch hypothesis B's artifacts. Every hypothesis is a self-contained, zippable, shareable session.

### Cross-hypothesis commons

Entities that recur across hypotheses (common methods, reagents, recurring failure modes) are promoted to a shared `commons/` layer at the top of the repo. Hypothesis wikis **link** to commons. The lint pass **promotes** repeated entities up. The Learning Loop **writes scientist corrections directly into commons**. This is what makes GROUNDWORK compound.

---

## 4. Folder structure (canonical)

```
groundwork/
├── README.md                         # public pitch
├── context.md                        # this file (canonical schema)
├── CLAUDE.md                         # auto-loaded by Claude Code → redirects to context.md
├── AGENTS.md                         # auto-loaded by Codex → redirects to context.md
├── .env.example                      # ANTHROPIC_API_KEY etc.
├── .claude/                          # Claude Code skills & settings
│   ├── settings.json
│   └── skills/                       # Claude Code pipeline entry points (slash commands)
│       ├── pass-1-research.md        # /pass-1 <slug> "<hypothesis>"
│       ├── pass-2-wiki.md            # /pass-2 <slug>
│       ├── pass-3-plan.md            # /pass-3 <slug>
│       ├── ingest-source.md          # /ingest-source <slug> <path|url>
│       └── apply-correction.md       # /apply-correction <correction.json>
├── .codex/                           # Codex skill mirrors (natural-language triggers)
│   └── skills/
│       ├── groundwork-pass-1-research/
│       ├── groundwork-pass-2-wiki/
│       ├── groundwork-pass-3-plan/
│       ├── groundwork-ingest-source/
│       └── groundwork-apply-correction/
│
├── hypotheses/                       # one folder per hypothesis session
│   └── 2026-04-25_trehalose-hela-cryopreservation/
│       ├── hypothesis.md             # original question + metadata, root node
│       ├── session.log.md            # chronological per-hypothesis log
│       ├── raw/                      # Pass 1 output — IMMUTABLE
│       │   ├── papers/               # complete originals (LaTeX / HTML / JATS / PDF) + deterministic .txt extracts
│       │   ├── protocols/            # JSON / markdown from protocols.io etc.
│       │   ├── retractions/          # Retraction Watch, PubPeer entries
│       │   ├── catalogs/             # supplier catalog snippets
│       │   └── fetch_log.jsonl       # what was fetched, when, from where, sha256
│       ├── wiki/                     # Pass 2 output — Obsidian markdown
│       │   ├── index.md
│       │   ├── log.md
│       │   ├── methods/
│       │   ├── reagents/
│       │   ├── organisms/
│       │   ├── failure-modes/
│       │   ├── sources/              # one .md per ingested paper / protocol / retraction
│       │   └── plans/                # generated plan(s) filed back as wiki pages
│       └── plan/                     # Pass 3 output — Lab Brief artifact
│           ├── plan.json             # structured, the UI's primary input
│           ├── plan.md               # human-readable mirror
│           └── assets/               # any local images/diagrams
│
├── commons/                          # cross-hypothesis shared layer
│   ├── index.md
│   ├── methods/
│   ├── reagents/
│   ├── organisms/
│   ├── failure-modes/
│   └── corrections.log.md            # scientist corrections, append-only
│
└── web/                              # Next.js + Tailwind, the Lab Brief UI (Layer B)
    ├── app/                          # Next.js app router
    │   ├── h/[slug]/page.tsx         # /h/<hypothesis-slug> renders the Lab Brief
    │   └── api/                      # routes that invoke the selected agent CLI for live moments
    ├── components/
    ├── lib/
    │   ├── wiki.ts                   # parses wiki markdown for the UI
    │   ├── plan.ts                   # parses plan.json
    │   └── agent.ts                  # subprocess helper for the selected headless agent
    ├── public/
    ├── package.json
    └── tailwind.config.ts
```

> **The "agents" are not separate scripts.** GROUNDWORK is driven by Claude Code or Codex reading `CLAUDE.md` / `AGENTS.md`, which redirect here. Claude Code entry points live under `.claude/skills/` as slash-command prompts; Codex mirrors live under `.codex/skills/` and are triggered with natural-language prompts like "Run GROUNDWORK Pass 1...". For future UI-triggered moments, the Next.js routes should invoke the selected headless agent adapter using the same skill prompt semantics.

> **Important:** the entire `groundwork/` directory should be opened as a **single Obsidian vault**. This gives you a graph view across all hypotheses + commons. Per-hypothesis isolation is enforced by *agent operational discipline*, not by separate vaults.

---

## 5. Wiki schema

### 5.1 Linking conventions

Use Obsidian wikilinks: `[[methods/qPCR]]` for in-vault links.

For links from a hypothesis wiki into commons:

```
[[../../../commons/methods/qPCR|qPCR]]
```

For internal links inside the same hypothesis wiki:

```
[[../methods/FITC-dextran-permeability-assay]]
```

Prefer wikilinks (they make the Obsidian graph view useful). Plain markdown links work if you need anchors or specific files outside the vault.

### 5.2 Naming conventions

- **Hypothesis slugs:** `YYYY-MM-DD_short-kebab-slug`. Sortable by date, scannable.
  - `2026-04-25_trehalose-hela-cryopreservation`
- **Method / reagent / organism / failure-mode slugs:** kebab-case, lowercase, ASCII. Preserve casing for proper nouns / chemicals where it aids reading.
  - `FITC-dextran-permeability-assay`
  - `lactobacillus-rhamnosus-GG`
  - `temperature-drift-during-thaw`
- **Source IDs:** `<year>-<first-author-lastname>-<short-slug>`.
  - `2018-zhao-trehalose-hela-cryopreservation`
  - For sources without a clean lead author, use source-type + ID: `retractionwatch-12345`, `protocolsio-pq8dmrw`.

### 5.3 Frontmatter

Every wiki page has YAML frontmatter. Common fields:

```yaml
---
type: <hypothesis|source|method|reagent|organism|failure-mode|plan>
created: 2026-04-25
updated: 2026-04-25
tags: [tag-1, tag-2]
---
```

Page-type-specific fields below.

### 5.4 Page types

#### `hypothesis.md` (root node)

Created by Pass 1, updated by Pass 2.

```yaml
---
type: hypothesis
slug: 2026-04-25_trehalose-hela-cryopreservation
domain: cell-biology
status: <researching|wiki|plan|complete>
original_question: |
  Replacing sucrose with trehalose as a cryoprotectant in the freezing medium will
  increase post-thaw viability of HeLa cells by at least 15 percentage points
  compared to the standard DMSO protocol, due to trehalose's superior membrane
  stabilization at low temperatures.
created: 2026-04-25
updated: 2026-04-25
sources_count: 47
---
```

Body sections: refined hypothesis (intervention / outcome / threshold / mechanism / control), scope, success criteria, key entities (links), open questions.

#### `sources/<id>.md`

One per ingested source.

```yaml
---
type: source
id: 2018-zhao-trehalose-hela-cryopreservation
source_type: <paper|protocol|retraction|pubpeer|catalog>
title: "Trehalose-mediated cryopreservation of HeLa cells"
authors: ["Zhao, Y.", "Liu, X."]
year: 2018
doi: 10.xxxx/xxxxx
url: https://...
raw_path: raw/papers/2018-zhao-trehalose.pdf
tags: [cryopreservation, trehalose, HeLa]
---
```

Body sections: 2–3 sentence summary, key claims (bulleted), methods used (links), reagents (links), failure modes flagged (links), supports / contradicts (links to other sources), notable quotes with page refs.

#### `methods/<slug>.md`

```yaml
---
type: method
slug: FITC-dextran-permeability-assay
aliases: [intestinal permeability assay, FITC dextran assay]
related_methods: [Ussing-chamber-assay, transepithelial-resistance]
key_reagents: [FITC-dextran-4kDa]
known_failure_modes: [reagent-fluorescence-quenching, gut-emptying-incomplete]
sources: [2014-johansson-permeability, 2019-gupta-FITC]
tags: [permeability, gut, in-vivo]
---
```

Body: what it measures, when to use it, key parameters (concentrations, timings), common variants, step-level notes, things to watch for.

#### `reagents/<slug>.md`

```yaml
---
type: reagent
slug: trehalose
aliases: [α,α-trehalose, mycose]
cas: 99-20-7
suppliers:
  - name: Sigma-Aldrich
    catalog: T9531
    grade: ">=99% (HPLC)"
    url: https://...
  - name: Thermo Fisher
    catalog: AC182550010
storage: room-temperature, dry
hazards: low
known_failure_modes: [trehalose-hydrolysis-low-pH]
sources: [2018-zhao-trehalose-hela-cryopreservation]
tags: [cryoprotectant, sugar]
---
```

Body: properties, common uses, alternatives, gotchas.

#### `organisms/<slug>.md`

Cell lines, model organisms, microbes.

```yaml
---
type: organism
slug: HeLa
organism_type: cell-line
source: ATCC
external_id: ATCC CCL-2
characteristics:
  - immortal human cervical cancer cell line
  - adherent
known_failure_modes: [HeLa-contamination-drift, mycoplasma-contamination]
sources: [...]
tags: [cell-line, human, cancer]
---
```

Body: growth conditions, common pitfalls, references.

#### `failure-modes/<slug>.md` — the differentiator

```yaml
---
type: failure-mode
slug: temperature-drift-during-thaw
severity: <low|medium|high|critical>
frequency_estimate: ~34% of replications
applies_to_methods: [HeLa-cryopreservation, slow-freeze-protocol]
applies_to_reagents: [DMSO, trehalose]
applies_to_step_kinds: [thaw, freeze]
sources: [retractionwatch-12345, 2020-pubpeer-flag-X]
tags: [cryopreservation, temperature]
---
```

Body: what it is, how it manifests, how to detect it (with measurements), mitigation (specific actions, not vague advice), original sources.

#### `plans/<id>.md`

Generated plan, filed back as a wiki page so it joins the graph.

```yaml
---
type: plan
id: plan-v1
created: 2026-04-25
derived_from: hypothesis.md
sources_used: 47
corrections_applied: 0
total_budget_usd: 12450
total_timeline_weeks: 10
---
```

Body: human-readable mirror of `plan/plan.json`. Same structure, with wikilinks to all referenced entities.

#### `index.md` (per-hypothesis vault)

Content-oriented catalog. Updated on every ingest.

```markdown
# Wiki Index

## Hypothesis
- [[hypothesis]] — root node

## Methods (5)
- [[methods/HeLa-cryopreservation]] — slow-freeze protocol for adherent cells
- ...

## Reagents (12)
- [[reagents/trehalose]] — disaccharide cryoprotectant
- ...

## Failure Modes (8)
- ...

## Sources (47)
- ...

## Plans (1)
- ...
```

#### `log.md` (per-hypothesis vault) and `session.log.md`

Chronological, append-only.

```markdown
## [2026-04-25 14:32] ingest | 2018-zhao-trehalose-hela-cryopreservation
Added paper. New pages: sources/2018-zhao..., updated reagents/trehalose, methods/HeLa-cryopreservation. 1 new failure mode flagged.

## [2026-04-25 15:01] plan | plan-v1
Generated initial plan. Used 47 sources. Total budget $12,450.
```

Format: each entry starts with `## [YYYY-MM-DD HH:MM] <op> | <subject>` so it can be parsed with simple grep:

```
grep "^## \[" log.md | tail -10
```

`session.log.md` is the per-hypothesis high-level log (one entry per agent invocation). `wiki/log.md` is the wiki-internal log (one entry per page-touching operation). Both append-only.

---

## 6. Commons (cross-hypothesis layer)

`commons/` mirrors the per-hypothesis page types but lives at the top of the repo. Its purpose is to hold knowledge that recurs across hypotheses.

### What goes in commons

- **Methods used in 2+ hypotheses** (e.g., qPCR, ELISA, Western blot, generic cryopreservation)
- **Reagents used in 2+ hypotheses** (common solvents, kits, antibodies)
- **Failure modes relevant across multiple methods** (e.g., `mycoplasma-contamination` affects every cell-culture experiment)
- **Reference organisms** (HeLa, C57BL/6, *E. coli*) that recur

### How entities get there

- **Promotion (lint pass).** When an entity appears in 2+ hypothesis wikis, the lint agent moves it to commons and replaces the per-hypothesis pages with redirects (or deletes them and rewrites links). Hypothesis wikis link to the commons version.
- **Direct write (Learning Loop).** Scientist corrections to a generic entity (a method, a reagent, a failure mode, a budget assumption) write directly into commons. Every future hypothesis that links to that entity inherits the correction.

### `commons/corrections.log.md`

Append-only log of every scientist correction, structured for parseability:

```markdown
## [2026-04-25 16:45] correction | failure-modes/temperature-drift-during-thaw
Reviewer: Dr. X
Section: frequency_estimate
Before: ~34% of replications
After: ~22% of replications (per [doi:...] 2024 meta-analysis)
Reason: Updated meta-analysis available, original figure was from 2018.
Affects: all hypotheses linking to this failure mode.
```

---

## 7. Agent operations

All passes run inside **Claude Code or Codex**, via the auto-loaded `CLAUDE.md` / `AGENTS.md`. Claude Code uses `.claude/skills/` slash-command prompts. Codex uses `.codex/skills/` with natural-language triggers; do not expect Codex to recognize project-defined `/pass-1` commands. Each skill appends to `session.log.md` for its hypothesis using the prefix `## [YYYY-MM-DD HH:MM] <op> | <subject>`.

For future UI-triggered moments (live single-paper ingest, scientist correction → re-render), the route should invoke the selected agent headlessly and stream output to the browser. Keep the Claude Code and Codex skill prompts behaviorally identical so either tool can drive the same operation.

### 7.1 Pass 1 — Research skill (`/pass-1`)

**Input:** plain-English hypothesis (CLI arg or stdin).

**What it does:**
1. Refines the hypothesis into structured form (intervention, outcome, threshold, mechanism, control).
2. Generates a search plan: queries, sources to scrape.
3. Runs literature search across Semantic Scholar, arXiv, protocols.io, Bio-protocol.
4. Runs negative-results search across Retraction Watch and PubPeer.
5. **Downloads the complete original artifact** for every ingested source into the appropriate `raw/` subfolder, using the Bash tool with `curl -L --fail -o <path> <url>` (or `wget`). The non-negotiable rule: the artifact in `raw/` must be the **complete original** — full body, methods, results, references — not an abstract, preview, paywall stub, or partial PDF. Per-source preference order:

   **(a) Native text / structured form — preferred when available:**
   - **arXiv** → LaTeX source tarball (`https://arxiv.org/e-print/<id>`) and/or HTML5 render (`https://arxiv.org/html/<id>`, fallback `https://ar5iv.labs.arxiv.org/html/<id>`). LaTeX is the most original form for arXiv submissions.
   - **PubMed Central (OA subset)** → JATS XML (`https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pmc&id=<pmcid>`) or full HTML (`https://www.ncbi.nlm.nih.gov/pmc/articles/PMC<id>/`). JATS is the gold standard.
   - **bioRxiv / medRxiv** → full HTML (`https://www.biorxiv.org/content/<doi>v<v>.full`).
   - **protocols.io** → JSON via API.
   - **Retraction Watch / Crossref** → notice JSON / HTML.

   **(b) PDF + deterministic text extraction — when no native text form exists:**
   - Download the PDF: `curl -L --fail -o <id>.pdf <url>`.
   - Extract text deterministically: `pdftotext -layout <id>.pdf <id>.txt` (poppler-utils). This is a pure function of the PDF, **not** an LLM summary, so the `.txt` companion is allowed in `raw/`.
   - Both `<id>.pdf` and `<id>.txt` live alongside each other in `raw/papers/`.

   **(c) Discovery routers — never the artifact itself:**
   - **Semantic Scholar** (`api.semanticscholar.org`), **OpenAlex**, **Unpaywall** → APIs that return metadata + an `openAccessPdf` URL. Resolve to (a) or (b).
   - **Google Scholar** → an index, not a host. No API, no plain-text endpoint. Use it as a search surface to navigate to the actual host (arXiv, PMC, publisher OA copy), then download from there.

   **WebFetch and WebSearch are discovery-only** — used to find URLs, DOIs, and bibliographic metadata. Their output is LLM-summarised and **must never** populate `raw/`.

   **Verify every download** before accepting it:
   - **Format**: `file <path>` must report the expected MIME (`application/pdf` for PDFs, etc.); PDFs must start with `%PDF-` (`head -c 5 <path>`); JSON must parse with `jq empty`; LaTeX tarballs must extract and contain at least one `.tex` file with a `\begin{document}` block; JATS XML must contain a `<body>` element (not just `<front>`).
   - **Completeness**: PDFs must have ≥ 4 pages (`pdfinfo <path>` → `Pages:`); HTML full-text pages must contain methods/results/references section headings (not just an abstract); reject paywall stubs (sentinels: "Sign in", "Access through your institution", "Buy article" near the top of the body); apply a minimum file-size sanity check (typical full papers: PDFs ≥ ~100KB, LaTeX/HTML ≥ ~30KB).

   If any check fails, record `status: "failed-<reason>"` in `fetch_log.jsonl` and try the next preference tier or an alternate source (preprint, mirror, OA copy). **Do not substitute a summary, abstract, or partial fetch** for the complete original.
6. Logs every fetch attempt (success and failure) into `raw/fetch_log.jsonl` with timestamp, source, URL, sha256, format (`pdf` / `latex` / `html` / `jats` / `json`), pages-or-bytes, and status.
7. Creates `hypothesis.md` with `status: researching`.

**Output:** populated `raw/` folder (complete originals + deterministic `.txt` companions where applicable) + `hypothesis.md` + a stub `wiki/` directory.

**Constraints:**
- `raw/` holds **only complete original artifacts** plus their deterministic plain-text extracts (e.g. `pdftotext` output). Never write LLM-generated summaries, abstracts, paraphrases, or notes into `raw/` — extraction-with-a-model and synthesis are Pass 2's job.
- Always prefer the most LLM-readable native form the host provides (LaTeX, HTML, JATS, JSON) over the PDF. Fall back to PDF + `pdftotext` only when no native text form exists.
- The artifact must be the **complete** original — abstracts, previews, single-page paywall stubs, and partial PDFs are rejected, not stored.
- Never modify files in `raw/` after fetch (the immutable contract).
- Never write into `wiki/` — that's Pass 2's job.
- Default target: 30–100 sources. Configurable.

### 7.2 Pass 2 — Wiki compiler skill (`/pass-2`)

**Input:** populated `raw/` for a single hypothesis.

**What it does:**
1. For each source in `raw/`, extract structured info (title, authors, claims, methods, reagents, organisms, failure modes mentioned).
2. Write a `sources/<id>.md` page per source.
3. Aggregate entities: every distinct method, reagent, organism, failure mode mentioned gets its own page. Cross-link.
4. For each entity page, synthesise content from all sources that mention it (with citations).
5. Update `hypothesis.md` (`status: wiki`, `sources_count`, links to top entities).
6. Generate `index.md`.
7. Append `log.md` entry per source ingested.

**Output:** populated `wiki/` directory.

**Constraints:**
- Reads from `raw/` only.
- Writes to `wiki/` only.
- When a referenced entity already exists in `commons/`, link to it instead of creating a duplicate page. Does **not** write into commons (lint pass does that).

### 7.3 Pass 3 — Plan skill (`/pass-3`)

**Input:** populated `wiki/` for a single hypothesis.

**What it does:**
1. Reads `hypothesis.md`, `index.md`, and key entity pages.
2. Generates the literature QC verdict: `not-found` / `similar-work-exists` / `exact-match-found`, plus 1–3 reference sources.
3. Synthesises an experiment plan with these structured sections:
   - Hypothesis (refined)
   - Literature QC (verdict + references)
   - Protocol (numbered steps; each step has reagents, timing, failure-mode flags, source citations)
   - Materials (table: reagent, supplier, catalog, qty, price)
   - Budget (line items + total)
   - Timeline (phases with dependencies)
   - Validation (success/failure criteria, measurements)
   - Failure Map (top failure modes with mitigations, all linked to wiki pages)
4. Writes `plan/plan.json` (structured) and `plan/plan.md` (mirror).
5. Files the plan back into `wiki/plans/plan-v<n>.md`.
6. Updates `hypothesis.md` (`status: complete`).

**Output:** `plan/plan.json`, `plan/plan.md`, `wiki/plans/plan-v<n>.md`.

**Constraints:**
- Reads from `wiki/` only.
- Writes to `plan/` and (one file) into `wiki/plans/`.
- **Every claim in the plan must be traceable to a wiki entity.** The UI surfaces those links.

### 7.4 Lint pass (run on demand)

Cross-cutting health check. Run periodically and before any demo.

What it checks:
- **Contradictions** between sources (one says reagent X is stable at -20°C, another says it degrades).
- **Stale claims** (newer source supersedes older).
- **Orphan pages** (no inbound links).
- **Missing entities** (mentioned in protocol but no entity page).
- **Promotion candidates** (entity exists in 2+ hypothesis wikis → move to commons).
- **Cross-reference gaps** (related methods that don't link to each other).

Output: a `lint-report.md` per hypothesis or repo-wide.

### 7.5 Feedback skill (`/apply-correction`) — the Learning Loop

**Input:** structured scientist correction from the Lab Brief UI's review interface.

**What it does:**
1. Identifies the wiki entity affected (a step, a reagent, a failure mode, a budget line).
2. If the entity is in `commons/`, writes the correction directly there.
3. If the entity is hypothesis-local but referenced by other hypotheses, promotes to commons before correcting.
4. Appends to `commons/corrections.log.md`.
5. Optionally re-runs Pass 3 for the affected hypothesis (or any hypothesis linking to that entity) to demonstrate the change.

---

## 8. The Lab Brief artifact (`plan/`)

`plan/plan.json` is the structured artifact the Next.js UI consumes. Tentative shape (refine as the UI is built):

```json
{
  "hypothesis": {
    "slug": "...",
    "original_question": "...",
    "refined": {
      "intervention": "...",
      "outcome": "...",
      "threshold": "...",
      "mechanism": "...",
      "control": "..."
    }
  },
  "novelty": {
    "verdict": "similar-work-exists",
    "references": [
      {
        "title": "...",
        "authors": "...",
        "year": 2018,
        "doi": "...",
        "wiki_page": "sources/2018-..."
      }
    ]
  },
  "summary": {
    "total_budget_usd": 12450,
    "total_timeline_weeks": 10,
    "top_failure_modes": [
      "temperature-drift-during-thaw",
      "mycoplasma-contamination"
    ]
  },
  "protocol": [
    {
      "step": 1,
      "title": "Prepare freezing medium",
      "duration_minutes": 30,
      "reagents": [
        {
          "wiki_page": "reagents/trehalose",
          "qty": "0.5 M",
          "supplier": "Sigma-Aldrich",
          "catalog": "T9531"
        }
      ],
      "failure_warnings": [
        {
          "wiki_page": "failure-modes/temperature-drift-during-thaw",
          "severity": "high",
          "mitigation": "..."
        }
      ],
      "rationale": "...",
      "source_citations": ["sources/2018-zhao-..."]
    }
  ],
  "materials": [],
  "budget": [],
  "timeline": [],
  "validation": {}
}
```

The UI renders this in three layers (Skim / Plan / Wiki drilldown — see §10).

---

## 9. The Lab Brief UX (`web/`)

Closer to a polished PI memo than a Wikipedia article. Three layers of depth on a single page.

### Layer 1 — Skim (top, fixed)
- Hypothesis (refined)
- Novelty verdict (badge)
- Total budget (USD)
- Total timeline (weeks)
- Top 3 failure modes (chips → click drilldown)

### Layer 2 — Plan (spine)
- Numbered protocol; each step is a rich block:
  - Reagents (qty, supplier, catalog)
  - Timing
  - Inline failure warnings (red callout if severity ≥ medium)
  - Expandable: "why this step / how it can fail / sources"
- Side rail (sticky):
  - Timeline gantt (phases + dependencies)
  - Budget breakdown (table)
  - Materials cart (qty × price)

### Layer 3 — Wiki drilldown
- Every reagent / method / failure mode / citation in the brief is a link.
- Click → side panel or new view of the wiki page.
- Wiki pages render in the same UI; the user can navigate the whole graph from the brief without leaving it.

### Review interface (stretch)
- Each section has an "edit / suggest" affordance.
- Corrections capture: section ID, before, after, reason, reviewer.
- POST to a feedback endpoint that invokes the selected agent's `/apply-correction` skill semantics.

---

## 10. Demo plan

We're **pre-baking the wiki for 1–2 sample hypotheses** (likely the Cell Biology trehalose one and the Gut Health Lactobacillus one). Doing 100-paper deep research live over conference Wi-Fi is risky and slow. Pre-baked is also the better story — "the platform compounds" is more visible when there's already mass in the wiki.

Live moments on stage:

1. **Cold demo (≤2 min).** Open the Lab Brief for a pre-baked hypothesis. Walk through Skim → Plan → Wiki drilldown. Show graph view in Obsidian on a second screen. Make the case for "evidence-backed plan."
2. **Live ingest moment (≤2 min).** Drop a fresh Retraction Watch entry into `raw/retractions/`. Run the wiki agent on just that file (incremental ingest). Watch Obsidian update — failure-mode page changes, methods page picks up the new warning.
3. **Learning Loop moment (≤2 min).** Scientist clicks "correct" on a step in the Lab Brief (e.g., reagent concentration). Correction writes into `commons/`. Re-render the plan: the corrected concentration is there. Open a *different* hypothesis that uses the same reagent: that plan's reagent page also reflects the correction.

The third moment is the stretch-goal demo the brief explicitly asks for — *next plan visibly reflects the correction without explicit re-prompting.*

---

## 11. Tech stack

| Layer | Choice |
|---|---|
| Pipeline driver | Claude Code or Codex; auto-loads `CLAUDE.md` / `AGENTS.md`; skill prompts under `.claude/skills/` and `.codex/skills/` |
| UI-triggered ops | Future selected-agent headless adapter spawned from Next.js routes (Layer B) |
| LLM | Claude Sonnet/Opus default. Configurable. |
| Literature search | Semantic Scholar API, arXiv API |
| Protocol search | protocols.io API, Bio-protocol scrape |
| Negative results | Retraction Watch (CSV / API), PubPeer scrape |
| Wiki format | Obsidian-compatible markdown + YAML frontmatter |
| Web UI | Next.js (app router) + Tailwind CSS + shadcn/ui |
| Graph view | Obsidian itself (open on the side); future: in-app graph |
| Future: voice | ElevenLabs API |
| Future: AR | AR.js + A-Frame (WebAR, no app install) |

---

## 12. Conventions for AI agents working in this repo

If you are an AI coding agent (Claude Code, Codex, OpenCode, Cursor):

1. **Read this file first.** Don't infer architecture from the code — the code may be incomplete. The schema in this file is canonical.
2. **Stay within scope.** When operating on a single hypothesis, read/write only inside that hypothesis's folder + `commons/` (and `web/` if you're working on tooling). Do not cross hypothesis boundaries.
3. **Never modify `raw/`** after a fetch. It's immutable by design. If you need to re-fetch, re-fetch into a new file.
4. **Update `log.md` and `session.log.md`** for every meaningful operation (ingest, generation, correction, lint pass). Use the prefix format `## [YYYY-MM-DD HH:MM] <op> | <subject>` so logs stay grep-parseable.
5. **Use the schema strictly.** All wiki pages must have valid frontmatter. All cross-references must be valid links (broken links should fail lint).
6. **Prefer small, reviewable changes.** A single ingest may touch 10–15 files — that's expected. But don't bulk-rewrite the wiki without an explicit instruction.
7. **When the schema is ambiguous, propose a refinement.** Edit this file rather than working around it.
8. **Don't add features outside the spec without asking.** This is a hackathon project — scope discipline matters.
9. **Every claim in a generated plan must trace to a wiki entity.** No free-floating facts.
10. **Skills under `.claude/skills/` and `.codex/skills/` are the canonical entry points.** To extend the pipeline, update both skill mirrors rather than writing a separate script. Their bodies are the operational prompts.

---

## 13. Open decisions / TODOs

- [x] LLM provider: Claude Code and Codex both supported through mirrored skills. The auto-load file differs (`CLAUDE.md` vs `AGENTS.md`).
- [ ] Build Layer B (Next.js app at `web/` with a selected-agent SSE route for live demo moments) — separate task.
- [ ] PDF parsing strategy: pdftotext / pdfplumber / Claude vision. Probably text-first, vision fallback for figures.
- [ ] Search API keys / rate limits: add `.env.example` and document acquisition.
- [ ] Demo: confirmed pre-baked. Pick **which two** hypotheses to pre-bake.
- [ ] Web UI: confirm shadcn/ui + Tailwind v4, or alternatives.
- [ ] Hosting for demo: local Next.js dev server or Vercel. Local is safer for offline conference Wi-Fi.
- [ ] Voice / AR: not in MVP. Don't build until core ships.
- [ ] Frontmatter fields are starting defaults — refine in v2 once we see how the wiki actually grows.

---

## 14. Built for / contacts

Hack Nation Global AI Hackathon — Challenge 04: The AI Scientist.
Powered by Fulcrum Science.
In collaboration with MIT Club of Northern California and MIT Club of Germany.

Challenge contacts: arun@fulcrum.science / jonas@fulcrum.science.
