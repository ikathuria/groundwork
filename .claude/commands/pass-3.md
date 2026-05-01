---
description: Pass 3 of the GROUNDWORK pipeline — synthesise the Research Brief from a compiled wiki. Produces `plan/plan.json` (ResearchBrief), `plan/plan.md`, and `plan/index.html` (bespoke interactive brief). The Research Brief is the user-facing deliverable.
argument-hint: <date_prefixed_slug>
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - Bash
---

# Pass 3 — Research Brief

You are running **Pass 3** of the GROUNDWORK pipeline. **Read `context.md` first** if you haven't this session — especially §5 (ResearchBrief schema) and §7 (Research Brief UX).

The deliverable is a **complete, polished, interactive Research Brief** at `hypotheses/$1/plan/index.html`. No template — generate bespoke from scratch. The brief synthesises what the field knows, what it doesn't, and what the most important papers are.

## Input (filled in at invocation)

- **Topic folder name**: `$1` — the date-prefixed slug, e.g. `2026-04-25_transformer-attention-time-series`.

## Steps

1. **Orient.** Read `hypotheses/$1/hypothesis.md` and `hypotheses/$1/wiki/index.md`. Then read entity pages relevant to the topic: methods, concepts, datasets, and especially open-problems. Check `commons/` for any linked entities.

2. **Generate the landscape verdict.** Choose one:
   - `active` — well-developed field, many recent papers, clear progress
   - `emerging` — growing interest, not yet saturated, significant open questions
   - `saturated` — heavily studied, incremental work dominates, narrow novel angles
   Include 1–3 landmark references.

3. **Synthesise the brief content** (canonical ResearchBrief schema per context.md §5):
   - `topic`: slug, original_question, refined.{research_question, scope, domain, approach, context}
   - `landscape`: verdict, summary, key_prior_work[]
   - `summary`: total_sources, total_themes, total_gaps, pull_quote, sources_breakdown
   - `key_themes[]`: theme, description, evidence_summary, source_citations[] — 3–7 major intellectual threads
   - `research_gaps[]`: gap, explanation, open_questions[], potential_directions[]
   - `reading_list[]`: id, title, authors, year, doi, why_relevant, priority (1=must-read), wiki_page
   - `methodology_overview[]`: method, description, used_in_papers[], strengths[], limitations[], wiki_page
   - `publication_timeline[]`: phases of the field's development (optional)
   - `sources[]`: id, title, authors, year, doi, tag, wiki_page
   - `wiki_drilldowns`: slug → {title, subtitle, body_md} — required for every source_citation in key themes and every reading_list entry with priority ≤ 2

4. **Write `hypotheses/$1/plan/plan.json`** — canonical ResearchBrief. Every wiki_page must reference a real path in the wiki.

5. **Write `hypotheses/$1/plan/plan.md`** — human-readable mirror with Obsidian wikilinks for every entity reference.

6. **Build the wiki-corpus bundle:**
   ```bash
   python3 tools/build-wiki-bundle.py hypotheses/$1/wiki \
     --out hypotheses/$1/plan/.wiki-bundle.json \
     --commons commons
   ```
   If the script is missing, recreate it — contract: `{ version, vault_root, pages: { <slug>: { slug, type, title, path, scope, frontmatter, body_md } }, stats }`.

7. **Generate `hypotheses/$1/plan/index.html`** — fully bespoke single-file interactive Research Brief. Embed inline:
   - `<script type="application/json" id="plan-data">…plan.json…</script>`
   - `<script type="application/json" id="wiki-corpus">…wiki-bundle.json…</script>`

   **Aesthetic direction (commit before writing HTML):** Pick a direction rooted in the topic's character:
   - Foundational ML / theory → clean mathematical, cream background, ink-black, warm accent, journal typography
   - Systems / infrastructure → dark, monospace-heavy, terminal-style, cyan/green
   - NLP / language models → textual, book-like, serif display, warm tones
   - CV / multimodal → visual, spatial, grid layouts, bold titles
   - Emerging / interdisciplinary → exploratory, graph motifs, discovery-oriented
   - Safe default → warm parchment (#faf8f2), forest green accent (#2a5f45), ferric red for gaps (#8b1a2a), Fraunces display serif
   State the choice as an HTML comment at the top of the file.

   **Required structural surfaces:**
   1. Hero — title, landscape badge, stat tiles (sources / themes / gaps), pull quote
   2. Topic breakdown — 5 refined fields as a grid
   3. Landscape — verdict prominent, 1–3 landmark references
   4. Key Themes — numbered, expandable, evidence summary, citation chips → wiki drilldown
   5. Research Gaps — explanation, open questions, potential directions; visually distinct (dashed border or similar)
   6. Methodology Landscape — comparison table or card grid, click → wiki drilldown
   7. Reading List — priority 1–2 featured, priority 3–5 compact; DOI links; click → wiki drilldown
   8. Publication Timeline — if present, visualise field development phases
   9. Sources — all citations tagged by type with DOI links
   10. Wiki browser side panel — slides in on entity click; full wiki browser (see below)

   **Wiki browser requirements:**
   - Parse `#wiki-corpus`, build pages index and backlinks map
   - Wikilink pattern: `/\[\[((?:\.\.\/)*[^\]|]+?)(?:\|([^\]]+?))?\]\]/g`
   - Render markdown with `marked.parse()`
   - Panel shows: title, type badge, frontmatter fields, rendered body, backlinks grouped by type
   - Navigation stack with back button
   - Deep linking: `#wiki-{slug}` pushes to URL, boot reads hash
   - Quick switcher: `Cmd+K` / `Ctrl+K`, live filter, Up/Down/Enter/ESC

   **Tech stack:** Tailwind Play CDN, Alpine.js 3, GSAP + ScrollTrigger, Chart.js 4, D3 7, marked (required), Google Fonts distinctive pairing.

8. **File the plan back** at `hypotheses/$1/wiki/plans/plan-v<n>.md`.

9. **Update `hypotheses/$1/hypothesis.md`** — set `status: complete`, link to latest plan.

10. **Append `hypotheses/$1/session.log.md`**:
    ```
    ## [YYYY-MM-DD HH:MM] plan | plan-v<n>
    Total sources: N. Themes: T. Gaps: G. Landscape: <verdict>.
    Research Brief: hypotheses/$1/plan/index.html
    ```

11. **Stop and report:** landscape verdict, top 3 themes, top 3 gaps, reading list priority-1 count, path to index.html, aesthetic direction chosen and why.

## Constraints

- Read from `wiki/`, `commons/`, `hypothesis.md`, `session.log.md` only.
- Write to `plan/` and `wiki/plans/` only.
- Every claim traces to a wiki entity. No free-floating facts. Missing entity → stop and report, don't invent.
- HTML must be self-contained (both JSON blobs inlined).
- Idempotent — re-run bumps plan version, overwrites plan.json and index.html.
- Generate fresh — do not copy from another hypothesis's index.html.
