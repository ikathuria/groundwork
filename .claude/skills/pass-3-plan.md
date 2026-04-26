---
name: pass-3-plan
description: Pass 3 of the GROUNDWORK pipeline — synthesise the experiment plan from a compiled hypothesis wiki and produce a fully bespoke, polished, interactive Lab Brief web page (`plan/index.html`) tailored to *this specific* hypothesis, plus the canonical structured data (`plan.json`) and an Obsidian-readable mirror (`plan.md`). The Lab Brief is the user-facing deliverable.
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - Bash
arguments:
  - name: slug
    description: The hypothesis folder name (date-prefixed slug), e.g. "2026-04-25_trehalose-hela-cryopreservation".
    required: true
---

# Pass 3 — Plan / Lab Brief

You are running **Pass 3** of the GROUNDWORK pipeline. **Read `context.md` first** if you haven't this session — especially §7.3 (Pass 3 spec), §8 (canonical data shape), §9 (Lab Brief UX requirements). The schema there is canonical.

The deliverable of Pass 3 is a **complete, polished, interactive web page** at `hypotheses/<slug>/plan/index.html`. **There is no template — generate every Lab Brief bespoke from scratch.** A bespoke Lab Brief lets you tailor the visual identity, layout, and visualizations to the *specific* experiment: cryopreservation can feel cold and crystalline, microbiome work can feel organic and networked, biosensor diagnostics can feel signal-clean. That tailoring is the differentiator — do not hand back a generic dashboard.

## Input

- `slug` (positional 1): hypothesis folder name, e.g. `2026-04-25_trehalose-hela-cryopreservation`.

## Steps

1. **Orient.** Read `hypotheses/<slug>/hypothesis.md` and `hypotheses/<slug>/wiki/index.md`. Then read every entity page relevant to the hypothesis: methods it implies, reagents, organisms, and especially failure modes that apply to the methods. Also check `commons/` for any linked entities — corrections or richer content may live there.

2. **Generate the literature QC verdict.** Choose one of `not-found`, `similar-work-exists`, or `exact-match-found`, with 1–3 reference sources (each with a `wiki_page` pointer into `wiki/sources/`).

3. **Synthesise the plan content.** Required fields (this is the canonical data, see `context.md` §8):

   - `meta`: slug, version (integer, increment per regen), generated_at (ISO), domain, status, corrections_applied
   - `hypothesis`: original_question, refined.{intervention, outcome, threshold, mechanism, control}
   - `novelty`: verdict, verdict_text, references[]
   - `summary`: total_budget_usd, total_timeline_weeks, phases_count, sources_count, sources_breakdown.{papers, protocols, retractions, catalogs}, failure_modes_count, failure_severity.{high, medium, low}, pull_quote
   - `protocol[]`: step, title, duration_minutes, rationale, reagents[] (each with wiki_page, name, supplier, catalog, qty), failure_warnings[] (each with wiki_page, severity, label, mitigation), source_citations[]
   - `materials[]`: wiki_page, name, supplier, catalog, qty, unit, price_usd
   - `budget[]`: category, description, cost_usd
   - `timeline[]`: name, start_week, duration_weeks, depends_on[], criticality (0=normal, 1=critical, 2=long-running)
   - `validation`: success_criteria[], failure_criteria[], measurements[] (endpoint, method, threshold, n)
   - `failure_map[]`: id, label, severity, frequency_estimate, applies_to[], applies_to_step, mitigation, wiki_page
   - `sources[]`: id, title, authors, year, doi, tag (paper|protocol|retraction|pubpeer|catalog), wiki_page
   - `wiki_drilldowns`: map keyed by `wiki_page` → `{ title, subtitle, body (markdown) }`. Required for every failure mode in `failure_map`. For reagents and sources, populate the most-cited / most-relevant entries; the renderer can show stubs for the rest.

4. **Write `hypotheses/<slug>/plan/plan.json`** — the canonical data. Every reagent / failure_warning / source_citation / `applies_to` / drilldown key must include or reference a real `wiki_page` path that exists.

5. **Write `hypotheses/<slug>/plan/plan.md`** — a human-readable mirror with Obsidian wikilinks for every entity reference. This is the in-Obsidian view of the plan.

6. **Generate `hypotheses/<slug>/plan/index.html`** — **a fully bespoke, single-file, interactive Lab Brief page tailored to this hypothesis.** See "Lab Brief design specification" below for the quality bar and required surfaces. The data must be embedded inline in the HTML (do not rely on `fetch('./plan.json')` — the file should work when opened directly via `file://`).

7. **File the plan back into the wiki** at `hypotheses/<slug>/wiki/plans/plan-v<n>.md`. `<n>` increments per regeneration.

8. **Update `hypotheses/<slug>/hypothesis.md`** — set `status: complete`, link to the latest plan version.

9. **Append `hypotheses/<slug>/session.log.md`**:
   ```
   ## [YYYY-MM-DD HH:MM] plan | plan-v<n>
   Total budget: $X. Timeline: N weeks. Sources used: M. Top failure modes: <list>.
   Novelty: <verdict>. Lab Brief: hypotheses/<slug>/plan/index.html
   ```

10. **Stop and report.** Provide:
    - Total budget (USD) and timeline (weeks)
    - Top 3 failure modes
    - Novelty verdict
    - Path to the rendered `plan/index.html` so the user can open it
    - The aesthetic direction you chose for this hypothesis and *why* it fits
    - Anything in the plan that feels under-supported by the wiki

## Lab Brief design specification

This is the meat of Pass 3 — a polished bespoke web page. Treat it as a serious frontend deliverable, not a data dump.

### Aesthetic direction (mandatory creative choice)

Before writing any HTML, **commit to an aesthetic direction rooted in this hypothesis's subject**. Don't reach for generic SaaS / dashboard look. A few honest examples:

- **Cryobiology / cell freezing** → cold, crystalline. Cool blues, hairline rules, glassy panels, slow ice-forming animations. A serif with optical clarity.
- **Microbiome / gut health** → organic, networked. Warm earthy palette, network/community visualizations, organic curves, a humanist sans paired with a softer serif.
- **Diagnostics / biosensor** → signal-clean. Lab whites and one signal accent, calibration-curve visualization, monospace-heavy data presentation, tight grid.
- **Carbon capture / bioelectrochemistry** → industrial, electron-flow. Steel blues, copper accents, circuit-style line work, isometric or schematic diagrams.
- **Editorial / scientific journal** (a safe but elegant default if no specific direction fits) → warm parchment background, ferric-red accents for failure modes, Fraunces or another distinctive serif for display, marginalia citations.

**You must pick a direction and execute it with intention.** The aesthetic should feel chosen-for-this-experiment, not retrofitted. State the direction at the top of `plan/index.html` as a comment so future readers can see the design intent.

### Required structural surfaces

Whatever aesthetic you choose, the page must contain all of:

1. **Hero / Skim** — refined hypothesis (the title), domain + novelty verdict + status badges, four big stat tiles (budget, timeline, sources, failure modes count), a one-sentence pull quote framing the dominant failure modes. Readable in 30 seconds.
2. **Hypothesis breakdown** — the 5 refined fields (intervention / outcome / threshold / mechanism / control) presented as a structured grid or table.
3. **Literature QC** — verdict prominent, 1–3 references cited with author / year / DOI.
4. **Protocol** — every step from `protocol[]`, numbered. Each step shows: title, duration, rationale, reagents (clickable chips → drilldown), inline failure warnings (callouts with severity-coded color), source citations as marginalia or footnotes.
5. **Materials** — table of every reagent with supplier, catalog number, quantity, unit, price.
6. **Budget** — line items + total. Include a visualization (pie / doughnut / bar / treemap — pick what fits the design direction).
7. **Timeline** — phases with start week, duration, dependencies. Include a visualization (gantt, swim lane, timeline strip — your choice).
8. **Validation** — success criteria, failure criteria, measurements table.
9. **Failure Map** — the differentiator surface. Top failure modes for this experiment type, presented as a visualization (network graph, severity-ranked list, heatmap on the protocol — your choice). Each failure node clickable → drilldown.
10. **Sources** — every citation as a card or row, tagged by source_type, with author / year / DOI / link.
11. **Drilldown panel** — slides in from the side when the user clicks any reagent / failure mode / source / method anywhere on the page. Loads content from `wiki_drilldowns`. Markdown rendered. Closes on Escape or backdrop click.

### Required interactivity

- Click any reagent / failure-mode / source / method → opens drilldown panel with that entity's `wiki_drilldowns` content. ESC closes.
- Sticky header with jump links to every section.
- Back-to-top affordance.
- Expandable protocol steps for details (rationale + sources).
- Visualizations animate on scroll into view (timeline phases build, failure graph nodes settle, doughnut sweeps in, etc.) — animations should *explain*, not decorate.
- Hover / focus micro-interactions on every interactive element.
- Smooth scrolling for in-page links.
- Keyboard accessibility: tab order, Enter/Space for buttons, ESC closes overlays.

### Required quality bar

- **Polished typography.** Pick a distinctive display + body + mono pairing. Avoid generic Inter/Roboto/Arial. Real type hierarchy.
- **Polished color.** Committed palette with intentional accent use. Failure modes always read with warning intent (some red / orange) regardless of overall palette.
- **Polished spacing.** Generous whitespace, asymmetric layouts where they help, real grid discipline. No cramped blocks.
- **Mobile responsive.** Layout collapses sensibly on narrow viewports.
- **Accessible.** Sufficient contrast, focus rings visible, ARIA where appropriate, `prefers-reduced-motion` respected.
- **Print-friendly.** A `@media print` block that hides drawer/header/decoration and lets a PI print a clean copy.
- **Self-contained.** Single HTML file. Data inlined as `<script type="application/json" id="plan-data">…</script>` (the page's renderer reads from there). Works when opened with `file://` (no fetch).

### Recommended tech stack (flexible — choose what fits the direction)

These are CDN-loaded, zero-build, well-tested options. Pick the ones that suit your aesthetic; substitute freely.

- **Tailwind CSS** (Play CDN at `https://cdn.tailwindcss.com`) — utility classes for layout. Or hand-rolled CSS if you want more control.
- **Alpine.js** (`alpinejs@3`) — declarative state for expand / collapse / drilldown.
- **GSAP** + **ScrollTrigger** (`gsap@3`) — entry / scroll / stagger animations.
- **Chart.js** (`chart.js@4`) — budget chart.
- **D3** (`d3@7`) — failure-map graph, custom timeline, anything bespoke.
- **marked** (`marked@12`) — render `wiki_drilldowns` markdown bodies in the panel.
- **Google Fonts** — pick a distinctive pairing (Fraunces, Newsreader, Source Serif, Cormorant, GT Sectra-style; for sans Plus Jakarta, Hanken Grotesk, Manrope, General Sans; for mono JetBrains Mono, IBM Plex Mono, Geist Mono).

You may add other CDN-loaded libraries (Three.js, p5.js, anime.js, lottie-web, Observable Plot, etc.) when a particular visualization or motion idiom genuinely fits the experiment. Avoid anything that requires a build step or a server.

### Anti-patterns

- Generic SaaS dashboard look (purple gradients on white, vague rounded cards everywhere, default Inter, predictable layout).
- Wikipedia-clone (paragraphs, sidebar TOC, footnotes — too encyclopedic). The Lab Brief is a working document, not an article.
- Decorative-only animation. Every motion should communicate something (sequence, hierarchy, relationships).
- Trying to do too much. A page that is bold in 1–2 ideas beats a page that is timid in 8.

## Constraints

- Read from `wiki/` and `commons/` only.
- Write to `plan/` (json + md + html) and `wiki/plans/` (one md file).
- **Every claim in the plan must trace to a wiki entity.** No free-floating facts. If a needed entity is missing, **stop and report** — do not invent.
- The HTML must be **self-contained** (data inline). Opening `plan/index.html` via `file://` must render the full page.
- Be idempotent — re-running Pass 3 bumps the wiki plan version (`plan-v2.md`, etc.) and overwrites `plan/index.html` and `plan/plan.json`.
- **Generate fresh.** Do not copy from a prior hypothesis's `plan/index.html` as a starting point. Each Lab Brief is its own design.
