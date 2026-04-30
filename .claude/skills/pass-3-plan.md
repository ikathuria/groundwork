---
name: pass-3-plan
description: Pass 3 of the GROUNDWORK pipeline — synthesise the Research Brief from a compiled hypothesis wiki and produce a fully bespoke, polished, interactive Research Brief web page (`plan/index.html`) tailored to this specific research question, plus the canonical structured data (`plan.json`) and an Obsidian-readable mirror (`plan.md`). The Research Brief is the user-facing deliverable.
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - Bash
arguments:
  - name: slug
    description: The hypothesis folder name (date-prefixed slug), e.g. "2026-04-25_transformer-attention-time-series".
    required: true
---

# Pass 3 — Research Brief

You are running **Pass 3** of the GROUNDWORK pipeline. **Read `context.md` first** if you haven't this session.

The deliverable of Pass 3 is a **complete, polished, interactive Research Brief** at `hypotheses/<slug>/plan/index.html`. **There is no template — generate every Research Brief bespoke from scratch.** The brief synthesises what the field knows, what it doesn't know, and what the most important papers are — presented as a thoughtful literature review a good advisor would hand you on day one.

## Input

- `slug` (positional 1): hypothesis folder name, e.g. `2026-04-25_transformer-attention-time-series`.

## Steps

1. **Orient.** Read `hypotheses/<slug>/hypothesis.md` and `hypotheses/<slug>/wiki/index.md`. Then read every entity page relevant to the topic: methods, key concepts, and especially open questions / failure modes that apply. Also check `commons/` for any linked entities.

2. **Generate the landscape verdict.** Choose one of:
   - `active` — field is well-developed with many recent papers and clear progress
   - `emerging` — growing interest but not yet saturated; significant open questions remain
   - `saturated` — heavily studied; incremental work dominates; genuinely novel angles are narrow
   Include 1–3 landmark references that characterise the landscape.

3. **Synthesise the brief content.** Required fields (canonical data shape):

   - `topic`: slug, original_question, refined.{research_question, scope, domain, approach, context}
   - `landscape`: verdict, summary, key_prior_work[]
   - `summary`: total_sources, total_themes, total_gaps, pull_quote, sources_breakdown.{papers, preprints, surveys, other}
   - `key_themes[]`: theme, description, evidence_summary, source_citations[] — the 3–7 major intellectual threads in the literature
   - `research_gaps[]`: gap, explanation, open_questions[], potential_directions[] — what is genuinely unanswered
   - `reading_list[]`: id, title, authors, year, doi, why_relevant, priority (1=must-read, 5=optional), wiki_page — prioritized for someone starting in this area
   - `methodology_overview[]`: method, description, used_in_papers[], strengths[], limitations[], wiki_page
   - `publication_timeline[]`: optional, phases of the field's development (e.g. "Early foundations 2015–2018", "Transformer era 2019–2022", "Current frontier 2023–present")
   - `sources[]`: id, title, authors, year, doi, tag (paper|preprint|survey|workshop|other), wiki_page
   - `wiki_drilldowns`: map keyed by wiki_page → {title, subtitle, body_md}. Required for every key theme's source and every reading list entry priority ≤ 2.

4. **Write `hypotheses/<slug>/plan/plan.json`** — the canonical data. Every source_citation and wiki_page must reference a real path that exists in the wiki.

5. **Write `hypotheses/<slug>/plan/plan.md`** — a human-readable mirror with Obsidian wikilinks for every entity reference.

6. **Build the wiki-corpus bundle** (the side panel's data source). Run:
   ```bash
   python3 tools/build-wiki-bundle.py hypotheses/<slug>/wiki \
     --out hypotheses/<slug>/plan/.wiki-bundle.json \
     --commons commons
   ```
   This walks every `*.md` in the vault, parses YAML frontmatter, and emits one JSON object: `{ version, vault_root, pages: { <slug>: { slug, type, title, path, scope, frontmatter, body_md } }, stats }`. If the script is missing, recreate it — the contract is the JSON shape.

7. **Generate `hypotheses/<slug>/plan/index.html`** — **a fully bespoke, single-file, interactive Research Brief tailored to this topic.** See "Research Brief design specification" below. The data must be embedded inline:
   - `<script type="application/json" id="plan-data">…contents of plan.json…</script>`
   - `<script type="application/json" id="wiki-corpus">…contents of .wiki-bundle.json…</script>`

8. **File the plan back into the wiki** at `hypotheses/<slug>/wiki/plans/plan-v<n>.md`.

9. **Update `hypotheses/<slug>/hypothesis.md`** — set `status: complete`, link to the latest plan version.

10. **Append `hypotheses/<slug>/session.log.md`**:
    ```
    ## [YYYY-MM-DD HH:MM] plan | plan-v<n>
    Total sources: N. Themes: T. Gaps: G. Landscape: <verdict>.
    Research Brief: hypotheses/<slug>/plan/index.html
    ```

11. **Stop and report.** Provide:
    - Landscape verdict and summary
    - Top 3 key themes
    - Top 3 research gaps
    - Reading list count (priority 1–2 entries)
    - Path to `plan/index.html`
    - The aesthetic direction you chose and *why* it fits this research topic
    - Anything in the brief that feels under-supported by the wiki

## Research Brief design specification

### Aesthetic direction (mandatory creative choice)

Before writing any HTML, **commit to an aesthetic direction rooted in this topic's character**. Don't reach for generic SaaS / dashboard look. Examples:

- **Foundational ML / theory** → clean mathematical. Cream background, ink-black text, one warm accent color, generous whitespace, math-journal typography. Like a well-typeset paper.
- **Systems / infrastructure** → technical precision. Dark background, monospace-heavy, terminal-style, cyan/green accents. Like a great README meets a conference talk.
- **NLP / language models** → textual, layered. Book-like layout, serif display type, soft warm tones, emphasis on text and citation flow.
- **Computer vision / multimodal** → visual, spatial. Generous image placeholders, grid layouts, bold titles, one strong color accent.
- **Interdisciplinary / emerging area** → exploratory. Network/graph motifs, gradient backgrounds, overlapping circles of influence, discovery-oriented.
- **Editorial / scientific journal** (safe elegant default) → warm parchment, ferric-red accents for gaps, Fraunces or another distinctive serif for display, marginalia citations.

**You must pick a direction and execute it with intention.** State it at the top of `plan/index.html` as an HTML comment.

### Required structural surfaces

1. **Hero / Skim** — research question (title), domain + landscape verdict badge, three stat tiles (total sources, themes, gaps), one-sentence pull quote framing the core finding. Readable in 30 seconds.
2. **Topic breakdown** — the 5 refined fields (research_question, scope, domain, approach, context) as a structured grid.
3. **Landscape verdict** — verdict prominent, 1–3 landmark references cited with author / year / DOI.
4. **Key Themes** — every theme from `key_themes[]`, numbered, expandable. Each shows: description, evidence summary, source citations as clickable chips → wiki drilldown.
5. **Research Gaps** — every gap from `research_gaps[]`. Each shows: explanation, open questions as a list, potential directions. Use a visually distinct treatment (e.g. dashed border, warning-adjacent but intellectual not alarming).
6. **Methodology Landscape** — comparison table or card grid of approaches used in the literature. Each methodology: description, papers using it, strengths / limitations. Click → wiki drilldown.
7. **Reading List** — prioritized annotated bibliography. Priority 1–2 entries are featured (larger, with why_relevant callout). Priority 3–5 are compact list. DOI links. Click → wiki drilldown.
8. **Publication Timeline** — if present, a timeline visualization showing the field's development phases. Shows when activity surged, landmark papers, current frontier.
9. **Sources** — every citation as a card or row, tagged by source_type, with author / year / DOI / link.
10. **Wiki browser (side panel)** — slides in from the side when the user clicks any wiki entity (theme citation, methodology card, reading list entry, or inline `[[wikilink]]`). Full wiki browser per the spec below.

### Required interactivity

- Click any wiki entity → opens wiki browser panel.
- Sticky header with jump links to every section.
- Back-to-top affordance.
- Expandable theme and gap entries.
- Visualizations animate on scroll into view.
- Hover/focus micro-interactions on every interactive element.
- Smooth scrolling. Keyboard accessibility. ESC closes overlays.

### Wiki browser (the depth surface)

Same contract as before — the panel browses the **entire wiki** using the embedded corpus.

**Boot.** Parse `#wiki-corpus`, build `pages = bundle.pages`, build `titleIndex`, compute `backlinks[slug]` from wikilink regex. Cache.

**Wikilink resolver.** Pattern: `/\[\[((?:\.\.\/)*[^\]|]+?)(?:\|([^\]]+?))?\]\]/g`. Strip leading `../`, trailing `.md`, `#anchor`. Try exact match; if not found, try `<type>/<target>` for each type prefix. Resolved → `<a class="wikilink wikilink-{type}" href="#wiki-{slug}" data-slug="{slug}">`. Unresolved → `<span class="wikilink wikilink-broken">`.

**Markdown render.** Pre-resolve wikilinks, then `marked.parse(...)` with `{ gfm: true, breaks: false }`. Strip leading H1 before rendering.

**Panel rendering.** Show: page title, type badge, frontmatter definition list (filter to relevant keys: `severity`, `frequency_estimate`, `cas`, `suppliers`, `aliases`, `applies_to_*`, `sources`, `tags`, `created`, `updated`), rendered markdown body, then **Backlinks** section grouped by type.

**Navigation stack.** Maintain `panelStack`. `openPanel(slug)` pushes; `back()` pops. Header shows back arrow when depth > 1.

**Deep linking.** On `openPanel(slug)`: `history.pushState(null, '', '#wiki-' + slug)`. On boot: if hash matches `#wiki-(.+)`, open that page. Listen for `hashchange`. On close: clear hash.

**Quick switcher.** `Cmd+K` / `Ctrl+K` opens modal with search input. Live filter by title substring, ranked by prefix match. Up/Down to navigate, Enter to open, ESC to close.

**Optional `wiki_drilldowns` overrides.** Prefer these for matching slugs; fall back to wiki corpus for everything else.

### Required quality bar

- **Polished typography.** Pick a distinctive display + body + mono pairing. Avoid generic Inter/Roboto/Arial.
- **Polished color.** Committed palette. Research gaps should read with intellectual tension, not alarm.
- **Polished spacing.** Generous whitespace, real grid discipline.
- **Mobile responsive.** Collapses sensibly on narrow viewports.
- **Accessible.** Sufficient contrast, focus rings, ARIA, `prefers-reduced-motion`.
- **Self-contained.** Single HTML file. Works opened via `file://`.

### Recommended tech stack

- **Tailwind CSS** (Play CDN) — layout utilities.
- **Alpine.js** (`alpinejs@3`) — expand/collapse/drilldown state.
- **GSAP** + **ScrollTrigger** (`gsap@3`) — entry/scroll animations.
- **Chart.js** (`chart.js@4`) — source breakdown chart, timeline.
- **D3** (`d3@7`) — methodology comparison, custom layouts.
- **marked** (`marked@12`) — **required** for wiki browser markdown rendering.
- **Google Fonts** — pick a distinctive pairing (display: Fraunces/Newsreader/Cormorant; sans: Plus Jakarta/Hanken Grotesk/Manrope; mono: JetBrains Mono/IBM Plex Mono).

### Anti-patterns

- Generic SaaS dashboard (purple gradients, default Inter, predictable card grid).
- Wikipedia-clone (pure encyclopedic prose with footnotes).
- Decorative-only animations.
- Trying to do too much — bold in 1–2 ideas beats timid in 8.

## Constraints

- Read from `wiki/` and `commons/` only (plus `hypothesis.md` and `session.log.md`).
- Write to `plan/` (json + md + html + `.wiki-bundle.json`) and `wiki/plans/` (one md file).
- **Every claim must trace to a wiki entity.** No free-floating facts.
- The HTML must be **self-contained** — both `plan-data` and `wiki-corpus` inlined.
- Be idempotent — re-running bumps the wiki plan version and overwrites `plan/index.html`, `plan/plan.json`, `plan/.wiki-bundle.json`.
- **Generate fresh.** Do not copy from a prior hypothesis's `plan/index.html`.
