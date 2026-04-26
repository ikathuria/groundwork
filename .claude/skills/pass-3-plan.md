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

6. **Build the wiki-corpus bundle** (the side panel's data source — see "Wiki browser" below). Run:
   ```bash
   python3 tools/build-wiki-bundle.py hypotheses/<slug>/wiki \
     --out hypotheses/<slug>/plan/.wiki-bundle.json \
     --commons commons
   ```
   This walks every `*.md` in the vault (plus `hypothesis.md`, `session.log.md`, and any commons content), parses YAML frontmatter, and emits one JSON object: `{ version, vault_root, pages: { <slug>: { slug, type, title, path, scope, frontmatter, body_md } }, stats }`. Bodies are kept as raw markdown and rendered on the client. If the script is missing, recreate it from the spec at the top of `tools/build-wiki-bundle.py` — the contract is the JSON shape, not the implementation.

7. **Generate `hypotheses/<slug>/plan/index.html`** — **a fully bespoke, single-file, interactive Lab Brief page tailored to this hypothesis.** See "Lab Brief design specification" below for the quality bar, required surfaces, and the wiki-browser contract. The data must be embedded inline (do not rely on `fetch('./plan.json')` — the file works via `file://`):
   - `<script type="application/json" id="plan-data">…contents of plan.json…</script>`
   - `<script type="application/json" id="wiki-corpus">…contents of .wiki-bundle.json…</script>`

8. **File the plan back into the wiki** at `hypotheses/<slug>/wiki/plans/plan-v<n>.md`. `<n>` increments per regeneration.

9. **Update `hypotheses/<slug>/hypothesis.md`** — set `status: complete`, link to the latest plan version.

10. **Append `hypotheses/<slug>/session.log.md`**:
    ```
    ## [YYYY-MM-DD HH:MM] plan | plan-v<n>
    Total budget: $X. Timeline: N weeks. Sources used: M. Top failure modes: <list>.
    Novelty: <verdict>. Lab Brief: hypotheses/<slug>/plan/index.html
    ```

11. **Stop and report.** Provide:
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
11. **Wiki browser (side panel)** — slides in from the side when the user clicks any wiki entity anywhere on the page (reagent chip, failure-mode callout, source citation, method link, or any inline `[[wikilink]]`). Renders the **full wiki page** for that slug from the embedded wiki corpus. Maintains a navigation stack so wikilinks inside the panel deep-dive without leaving the brief. See "Wiki browser" below for the full contract.

### Required interactivity

- Click any wiki entity → opens the wiki browser panel on that page.
- Sticky header with jump links to every section.
- Back-to-top affordance.
- Expandable protocol steps for details (rationale + sources).
- Visualizations animate on scroll into view (timeline phases build, failure graph nodes settle, doughnut sweeps in, etc.) — animations should *explain*, not decorate.
- Hover / focus micro-interactions on every interactive element.
- Smooth scrolling for in-page links.
- Keyboard accessibility: tab order, Enter/Space for buttons, ESC closes overlays.

### Wiki browser (the depth surface)

The wiki is GROUNDWORK's deliverable; the Lab Brief is the lens onto it. The side panel must browse the **entire wiki**, not a hand-curated subset of stubs. The corpus (built in step 6) is embedded as a `<script type="application/json" id="wiki-corpus">` tag containing every page in the vault — frontmatter + raw markdown.

The renderer is bespoke per hypothesis (it inherits the chosen aesthetic), but the *behavior* below is required. Implement it in plain JS inside the page's `<script>` block.

**Boot.** On `DOMContentLoaded`: parse `#wiki-corpus`, build `pages = bundle.pages` (slug → page), build `titleIndex = [{slug, title, type}, ...]` for the quick switcher, and walk every page once to compute `backlinks[slug] = [...sourceSlug]` from the wikilink regex. Cache.

**Wikilink resolver (pure JS).** Pattern: `/\[\[((?:\.\.\/)*[^\]|]+?)(?:\|([^\]]+?))?\]\]/g`. For each match: strip leading `../`, strip trailing `.md`, strip `#anchor` tail. Try exact match against `pages`; if not found, try `<type>/<target>` for each type prefix (`methods`, `reagents`, `organisms`, `failure-modes`, `sources`, `plans`, `commons/methods`, …). Resolved → `<a class="wikilink wikilink-{type}" href="#wiki-{slug}" data-slug="{slug}">{label || page.title}</a>`. Unresolved → `<span class="wikilink wikilink-broken" title="Unresolved: {target}">{label || raw}</span>`. (Failure-mode wikilinks should additionally render with a leading severity dot whose color comes from the target page's `frontmatter.severity`.)

**Markdown render.** Pre-resolve wikilinks in the raw markdown body (string-level regex), then render with `marked.parse(...)` (`marked.use({ gfm: true, breaks: false })`). Strip the leading H1 from the body before rendering — it is shown as the panel title instead.

**Panel rendering.** Show, in order: page title (H1), a small badge for `type` (and `severity` if it's a failure mode), a definition list of frontmatter (filter to interesting keys: `severity`, `frequency_estimate`, `cas`, `suppliers`, `aliases`, `applies_to_*`, `sources`, `tags`, `created`, `updated`), the rendered markdown body, then a **Backlinks** section listing every page that wikilinks to this one, grouped by type. Each backlink is itself a wikilink chip → opens that page in the panel.

**Navigation stack.** Maintain a JS array `panelStack`. `openPanel(slug)` pushes; `back()` pops and re-renders the previous page. Header shows a back arrow when stack depth > 1. Click on any `.wikilink` inside the panel calls `openPanel(slug)` — never navigates the page.

**Deep linking via hash.** On `openPanel(slug)`: `history.pushState(null, '', '#wiki-' + slug)`. On boot: if `location.hash` matches `#wiki-(.+)`, open that page. Listen for `hashchange` (handles back/forward). On panel close: clear the hash.

**Quick switcher.** `Cmd+K` / `Ctrl+K` opens a centered modal with a search input. Live filter `titleIndex` by case-insensitive substring on `title`, ranked by match position (prefix match > contains). Up/Down arrows move selection, Enter opens the page in the panel, ESC closes the switcher. Show the page `type` as a badge next to each result.

**Inline severity for failure-mode links.** Every wikilink in protocol callouts and rendered bodies that resolves to a `failure-mode` page should visually carry that page's severity (e.g. a small leading dot or a colored underline) so the reader can scan severity inline without opening the panel. Critical = red, high = orange, medium = amber, low = neutral. Match the dots to your aesthetic palette but keep warning intent.

**Performance.** The corpus is ~500–1000 KB. Parse once at boot; never re-parse. Render markdown lazily on first `openPanel(slug)` and cache the rendered HTML on the page object. Quick-switcher filtering should run synchronously (≤ 500 pages → trivial).

**Optional `wiki_drilldowns` overrides.** If `plan.json` includes a `wiki_drilldowns` map, prefer its content for the matching slugs (the agent can hand-write a richer panel for the most-cited entities). Fall back to the wiki corpus for everything else.

### Required quality bar

- **Polished typography.** Pick a distinctive display + body + mono pairing. Avoid generic Inter/Roboto/Arial. Real type hierarchy.
- **Polished color.** Committed palette with intentional accent use. Failure modes always read with warning intent (some red / orange) regardless of overall palette.
- **Polished spacing.** Generous whitespace, asymmetric layouts where they help, real grid discipline. No cramped blocks.
- **Mobile responsive.** Layout collapses sensibly on narrow viewports.
- **Accessible.** Sufficient contrast, focus rings visible, ARIA where appropriate, `prefers-reduced-motion` respected.
- **Print-friendly.** A `@media print` block that hides drawer/header/decoration and lets a PI print a clean copy.
- **Self-contained.** Single HTML file. Both `<script type="application/json" id="plan-data">…</script>` and `<script type="application/json" id="wiki-corpus">…</script>` are embedded inline. Works when opened with `file://` (no fetch). Total page weight typically 600 KB – 1.5 MB depending on wiki size — that's fine; opens instantly off disk.

### Recommended tech stack (flexible — choose what fits the direction)

These are CDN-loaded, zero-build, well-tested options. Pick the ones that suit your aesthetic; substitute freely.

- **Tailwind CSS** (Play CDN at `https://cdn.tailwindcss.com`) — utility classes for layout. Or hand-rolled CSS if you want more control.
- **Alpine.js** (`alpinejs@3`) — declarative state for expand / collapse / drilldown.
- **GSAP** + **ScrollTrigger** (`gsap@3`) — entry / scroll / stagger animations.
- **Chart.js** (`chart.js@4`) — budget chart.
- **D3** (`d3@7`) — failure-map graph, custom timeline, anything bespoke.
- **marked** (`marked@12`) — render wiki-corpus markdown bodies in the side panel. **Required** for the wiki browser; load from CDN.
- **Google Fonts** — pick a distinctive pairing (Fraunces, Newsreader, Source Serif, Cormorant, GT Sectra-style; for sans Plus Jakarta, Hanken Grotesk, Manrope, General Sans; for mono JetBrains Mono, IBM Plex Mono, Geist Mono).

You may add other CDN-loaded libraries (Three.js, p5.js, anime.js, lottie-web, Observable Plot, etc.) when a particular visualization or motion idiom genuinely fits the experiment. Avoid anything that requires a build step or a server.

### Anti-patterns

- Generic SaaS dashboard look (purple gradients on white, vague rounded cards everywhere, default Inter, predictable layout).
- Wikipedia-clone (paragraphs, sidebar TOC, footnotes — too encyclopedic). The Lab Brief is a working document, not an article.
- Decorative-only animation. Every motion should communicate something (sequence, hierarchy, relationships).
- Trying to do too much. A page that is bold in 1–2 ideas beats a page that is timid in 8.

## Constraints

- Read from `wiki/` and `commons/` only (plus `hypothesis.md` and `session.log.md` at the hypothesis root, which the bundle script picks up automatically).
- Write to `plan/` (json + md + html + `.wiki-bundle.json`) and `wiki/plans/` (one md file).
- **Every claim in the plan must trace to a wiki entity.** No free-floating facts. If a needed entity is missing, **stop and report** — do not invent.
- The HTML must be **self-contained** (both `plan-data` and `wiki-corpus` inlined). Opening `plan/index.html` via `file://` must render the full page including the wiki browser.
- Be idempotent — re-running Pass 3 bumps the wiki plan version (`plan-v2.md`, etc.) and overwrites `plan/index.html`, `plan/plan.json`, and `plan/.wiki-bundle.json`.
- **Generate fresh.** Do not copy from a prior hypothesis's `plan/index.html` as a starting point. Each Lab Brief is its own design.
- The `tools/build-wiki-bundle.py` script is shared infrastructure — do not modify it casually. If a hypothesis has wiki-shape concerns the script can't handle, prefer fixing the wiki or extending the script with a flag (and update both skills + `context.md`).
