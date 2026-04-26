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

6. Generate `hypotheses/<slug>/plan/index.html` — a **fully bespoke, single-file, interactive Lab Brief** tailored to this hypothesis. See "Design specification" below. Embed the data inline as `<script type="application/json" id="plan-data">…</script>` so the file works via `file://`.

7. File the plan back into the wiki at `hypotheses/<slug>/wiki/plans/plan-v<n>.md`. Increment `<n>` based on existing plan files.

8. Update `hypotheses/<slug>/hypothesis.md`:
   - set `status: complete`
   - link to the latest plan version

9. Append `hypotheses/<slug>/session.log.md`:

```markdown
## [YYYY-MM-DD HH:MM] plan | plan-v<n>
Total budget: $X. Timeline: N weeks. Sources used: M. Top failure modes: <list>.
Novelty: <verdict>. Lab Brief: hypotheses/<slug>/plan/index.html
```

10. Report:
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
11. Drilldown panel (slides in on click of any entity, renders `wiki_drilldowns` markdown)

### Required interactivity

- Click any entity → drilldown panel
- Sticky header with section nav
- Back-to-top affordance
- Expandable protocol steps
- Animations on scroll-into-view (explain, don't decorate)
- ESC closes overlays
- Keyboard accessible

### Quality bar

- Distinctive typography pairing (avoid generic Inter / Roboto / Arial)
- Committed color palette; failure modes always read with warning intent
- Real spacing discipline
- Mobile responsive
- Accessible (contrast, focus rings, ARIA, `prefers-reduced-motion`)
- Print-friendly (`@media print`)
- Self-contained single HTML file (data inlined)

### Recommended tech (flexible)

CDN-loaded, zero-build: Tailwind Play CDN, Alpine.js v3, GSAP + ScrollTrigger, Chart.js v4, D3 v7, marked.js, Google Fonts. Substitute freely (Three.js, p5.js, anime.js, Observable Plot, etc.) when a visualization genuinely fits.

### Anti-patterns

- Generic SaaS dashboard
- Wikipedia-clone layout
- Decorative-only animation
- Trying to do too much; one or two bold ideas beats eight timid ones

## Constraints

- Read from `wiki/` and `commons/` only.
- Write to `plan/` (json + md + html), `wiki/plans/`, `hypothesis.md`, and `session.log.md`.
- Every claim in the plan must trace to a wiki entity. No free-floating facts. If a needed entity is missing, stop and report.
- HTML must be self-contained (data inline). Open via `file://` must render fully.
- Re-running creates a new plan version and overwrites `plan/index.html` + `plan/plan.json`.
- **Generate fresh.** Do not copy from a prior hypothesis's `plan/index.html`.
