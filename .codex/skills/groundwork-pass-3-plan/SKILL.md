---
name: groundwork-pass-3-plan
description: Use when the user asks to run GROUNDWORK Pass 3 or generate a Lab Brief. Reads a compiled hypothesis wiki and commons, then writes plan/plan.json (canonical data), plan/plan.md (Obsidian mirror), and a fully bespoke single-file Lab Brief web page at plan/index.html — generated from scratch and tailored to the specific hypothesis. There is no template; each Lab Brief is its own design.
---

# GROUNDWORK Pass 3 — Plan / Lab Brief

Read `context.md` first, especially sections 7.3, 8, and 9. The context file is canonical.

The deliverable of Pass 3 is a **complete, polished, interactive web page** at `hypotheses/<slug>/plan/index.html`. **There is no template — generate every Lab Brief bespoke from scratch.** A bespoke Lab Brief lets you tailor the visual identity, layout, and visualizations to the specific experiment. That tailoring is the differentiator. Do not hand back a generic dashboard.

## Trigger Forms

- `Run Pass 3 for <slug>`
- `Run GROUNDWORK Pass 3 for <slug>`
- `Generate the Lab Brief for <slug>`

## Input

- `slug`: the full date-prefixed hypothesis folder name, e.g. `2026-04-25_trehalose-hela-cryopreservation`.

## Steps

1. Orient:
   - read `hypotheses/<slug>/hypothesis.md`
   - read `hypotheses/<slug>/wiki/index.md`
   - read every relevant methods, reagents, organisms, failure modes, sources page, plus linked `commons/` entries

2. Generate the literature QC verdict (`not-found`, `similar-work-exists`, or `exact-match-found`) with 1–3 references (each with a `wiki_page` pointer).

3. Synthesise the plan content. Required fields (canonical, see `context.md` §8):
   - `meta`: slug, version (integer, increment per regen), generated_at (ISO), domain, status, corrections_applied
   - `hypothesis`: original_question, refined.{intervention, outcome, threshold, mechanism, control}
   - `novelty`: verdict, verdict_text, references[]
   - `summary`: total_budget_usd, total_timeline_weeks, phases_count, sources_count, sources_breakdown.{papers, protocols, retractions, catalogs}, failure_modes_count, failure_severity.{high, medium, low}, pull_quote
   - `protocol[]`: step, title, duration_minutes, rationale, reagents[], failure_warnings[], source_citations[]
   - `materials[]`: wiki_page, name, supplier, catalog, qty, unit, price_usd
   - `budget[]`: category, description, cost_usd
   - `timeline[]`: name, start_week, duration_weeks, depends_on[], criticality
   - `validation`: success_criteria[], failure_criteria[], measurements[]
   - `failure_map[]`: id, label, severity, frequency_estimate, applies_to[], applies_to_step, mitigation, wiki_page
   - `sources[]`: id, title, authors, year, doi, tag, wiki_page
   - `wiki_drilldowns`: map keyed by `wiki_page` → { title, subtitle, body }. Required for every failure mode.

4. Write `hypotheses/<slug>/plan/plan.json` (canonical data).

5. Write `hypotheses/<slug>/plan/plan.md` (human-readable mirror with Obsidian wikilinks).

6. Build the wiki-corpus bundle (powers the side-panel wiki browser — see "Wiki browser" below):

   ```bash
   python3 tools/build-wiki-bundle.py hypotheses/<slug>/wiki \
     --out hypotheses/<slug>/plan/.wiki-bundle.json \
     --commons commons
   ```

   The script walks every `*.md` in the vault (plus `hypothesis.md`, `session.log.md`, and any commons content), parses YAML frontmatter, and emits one JSON object: `{ version, vault_root, pages: { <slug>: { slug, type, title, path, scope, frontmatter, body_md } }, stats }`. Bodies are kept as raw markdown and rendered on the client. If `tools/build-wiki-bundle.py` is missing, recreate it from the spec at the top of that file — the contract is the JSON shape, not the implementation.

7. Generate `hypotheses/<slug>/plan/index.html` — a **fully bespoke, single-file, interactive Lab Brief** tailored to this hypothesis. See "Design specification" below. Embed both data sources inline so the file works via `file://`:
   - `<script type="application/json" id="plan-data">…contents of plan.json…</script>`
   - `<script type="application/json" id="wiki-corpus">…contents of .wiki-bundle.json…</script>`

8. File the plan back into the wiki at `hypotheses/<slug>/wiki/plans/plan-v<n>.md`. Increment `<n>` based on existing plan files.

9. Update `hypotheses/<slug>/hypothesis.md`:
   - set `status: complete`
   - link to the latest plan version

10. Append `hypotheses/<slug>/session.log.md`:

```markdown
## [YYYY-MM-DD HH:MM] plan | plan-v<n>
Total budget: $X. Timeline: N weeks. Sources used: M. Top failure modes: <list>.
Novelty: <verdict>. Lab Brief: hypotheses/<slug>/plan/index.html
```

11. Report:
    - total budget and timeline
    - top 3 failure modes
    - novelty verdict
    - path to the rendered `plan/index.html`
    - aesthetic direction chosen and why it fits
    - anything under-supported by the wiki

## Design specification

### Aesthetic direction (mandatory creative choice)

Commit to a direction rooted in this hypothesis's subject. Examples:

- Cryobiology → cold, crystalline (cool blues, hairline rules, glassy panels, ice animations, optical-clarity serif)
- Microbiome → organic, networked (warm earthy palette, network visualizations, humanist sans + soft serif)
- Diagnostics / biosensor → signal-clean (lab whites, one signal accent, calibration-curve visualization, monospace data)
- Carbon capture / bioelectrochemistry → industrial, electron-flow (steel blue, copper accents, circuit-style line work)
- Editorial / scientific journal → warm parchment, ferric-red failure accents, distinctive serif for display

Pick a direction and execute it. State the direction as a comment at the top of `plan/index.html`.

### Required surfaces

1. Hero / skim (refined hypothesis title, badges, four stat tiles, pull quote)
2. Hypothesis breakdown (5 refined fields)
3. Literature QC (verdict + references)
4. Protocol (numbered steps with reagents, failure warnings, sources)
5. Materials (table)
6. Budget (line items + visualization)
7. Timeline (phases + visualization)
8. Validation (success / failure / measurements)
9. Failure Map (the differentiator — visualization)
10. Sources (every citation, tagged)
11. Wiki browser side panel — slides in when the user clicks any reagent / failure mode / source / method / inline `[[wikilink]]`. Renders the **full wiki page** for that slug from the embedded corpus, with frontmatter, body, and backlinks. Maintains a navigation stack so wikilinks inside the panel deep-dive without leaving the brief. See "Wiki browser" below for the contract.

### Required interactivity

- Click any wiki entity → wiki browser panel
- Sticky header with section nav
- Back-to-top affordance
- Expandable protocol steps
- Animations on scroll-into-view (explain, don't decorate)
- ESC closes overlays
- Keyboard accessible

### Wiki browser (the depth surface)

The wiki is GROUNDWORK's deliverable; the Lab Brief is the lens onto it. The side panel must browse the **entire wiki**, not a hand-curated subset of stubs. The corpus (built in step 6) is embedded as `<script type="application/json" id="wiki-corpus">…</script>` containing every page in the vault — frontmatter + raw markdown.

The renderer is bespoke per hypothesis (it inherits the chosen aesthetic), but the *behavior* below is required. Implement in plain JS inside the page's `<script>` block.

**Boot.** On `DOMContentLoaded`: parse `#wiki-corpus`, build `pages = bundle.pages` (slug → page), build `titleIndex = [{slug, title, type}, …]` for the quick switcher, and walk every page once to compute `backlinks[slug] = [...sourceSlug]` from the wikilink regex. Cache.

**Wikilink resolver (pure JS).** Pattern: `/\[\[((?:\.\.\/)*[^\]|]+?)(?:\|([^\]]+?))?\]\]/g`. For each match: strip leading `../`, strip trailing `.md`, strip `#anchor` tail. Try exact match; if not found, try `<type>/<target>` for each type prefix (`methods`, `reagents`, `organisms`, `failure-modes`, `sources`, `plans`, `commons/methods`, …). Resolved → `<a class="wikilink wikilink-{type}" href="#wiki-{slug}" data-slug="{slug}">{label || page.title}</a>`. Unresolved → `<span class="wikilink wikilink-broken">{label || raw}</span>`. Failure-mode wikilinks should additionally render a leading severity dot (color from `frontmatter.severity`).

**Markdown render.** Pre-resolve wikilinks in the raw markdown body, then render with `marked.parse(...)` (`marked.use({ gfm: true, breaks: false })`). Strip the leading H1 — it is shown as the panel title.

**Panel rendering.** Show: page title, `type` badge (and `severity` for failure modes), a definition list of interesting frontmatter (`severity`, `frequency_estimate`, `cas`, `suppliers`, `aliases`, `applies_to_*`, `sources`, `tags`, `created`, `updated`), the rendered body, then a **Backlinks** section listing every page that wikilinks to this one, grouped by type. Each backlink chip → opens that page in the panel.

**Navigation stack.** `panelStack` array. `openPanel(slug)` pushes; back arrow pops. Click on `.wikilink` inside the panel calls `openPanel(slug)` — never navigates the page.

**Deep linking.** On `openPanel(slug)`: `history.pushState(null, '', '#wiki-' + slug)`. On boot: if `location.hash` matches `#wiki-(.+)`, open that page. Listen for `hashchange` (back/forward).

**Quick switcher.** `Cmd+K` / `Ctrl+K` → centered modal with a search input. Live filter `titleIndex` by case-insensitive substring on `title`, ranked by match position. Up/Down + Enter, ESC closes.

**Inline severity for failure-mode links.** Every wikilink in protocol callouts and rendered bodies that resolves to a `failure-mode` page carries that page's severity inline (small leading dot or colored underline). Critical = red, high = orange, medium = amber, low = neutral. Match the dots to the aesthetic palette but keep warning intent.

**Performance.** Corpus is ~500–1000 KB. Parse once; render markdown lazily on first `openPanel(slug)` and cache the rendered HTML on the page object.

**Optional `wiki_drilldowns` overrides.** If `plan.json` includes a `wiki_drilldowns` map, prefer its content for matching slugs. Fall back to the wiki corpus for everything else.

### Quality bar

- Distinctive typography pairing (avoid generic Inter / Roboto / Arial)
- Committed color palette; failure modes always read with warning intent
- Real spacing discipline
- Mobile responsive
- Accessible (contrast, focus rings, ARIA, `prefers-reduced-motion`)
- Print-friendly (`@media print`)
- Self-contained single HTML file (both `plan-data` and `wiki-corpus` inlined; opens via `file://`)

### Recommended tech (flexible)

CDN-loaded, zero-build: Tailwind Play CDN, Alpine.js v3, GSAP + ScrollTrigger, Chart.js v4, D3 v7, **marked.js (required for the wiki browser)**, Google Fonts. Substitute freely (Three.js, p5.js, anime.js, Observable Plot, etc.) when a visualization genuinely fits.

### Anti-patterns

- Generic SaaS dashboard
- Wikipedia-clone layout
- Decorative-only animation
- Trying to do too much; one or two bold ideas beats eight timid ones

## Constraints

- Read from `wiki/` and `commons/` only (plus `hypothesis.md` and `session.log.md` at the hypothesis root, which the bundle script picks up automatically).
- Write to `plan/` (json + md + html + `.wiki-bundle.json`), `wiki/plans/`, `hypothesis.md`, and `session.log.md`.
- Every claim in the plan must trace to a wiki entity. No free-floating facts. If a needed entity is missing, stop and report.
- HTML must be self-contained (both `plan-data` and `wiki-corpus` inlined). Open via `file://` must render fully, including the wiki browser.
- Re-running creates a new plan version and overwrites `plan/index.html`, `plan/plan.json`, and `plan/.wiki-bundle.json`.
- **Generate fresh.** Do not copy from a prior hypothesis's `plan/index.html`.
- `tools/build-wiki-bundle.py` is shared infrastructure — do not modify it casually. Fix the wiki, or extend the script with a flag and update both skills + `context.md`.
