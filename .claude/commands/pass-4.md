---
description: Pass 4 of the GROUNDWORK pipeline — render the static wiki webpage and the custom AR lab spec from a finished Pass 3 plan. Produces `plan/wiki.html` (self-contained, shareable) and `plan/ar.json` (custom scene spec consumed by the AR viewer).
argument-hint: <date_prefixed_slug>
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
---

# Pass 4 — Wiki HTML + Custom AR Lab

You are running **Pass 4** of the GROUNDWORK pipeline. **Read `context.md` first** if you haven't this session — especially §7 (agent operations) and §8 (Lab Brief artifact shape).

## Input (filled in at invocation)

- **Hypothesis folder name**: `$1` — the date-prefixed slug. Files live under `hypotheses/$1/`.

## Preconditions

- `hypotheses/$1/plan/plan.json` must exist (Pass 3 has run).
- `hypotheses/$1/wiki/index.md` must exist (Pass 2 has run).
- If either is missing, **stop and report**.

## Steps

1. **Orient.** Read:
   - `hypotheses/$1/hypothesis.md`
   - `hypotheses/$1/plan/plan.json` and `hypotheses/$1/plan/plan.md`
   - `hypotheses/$1/wiki/index.md`
   - The wiki entity pages referenced by the plan's protocol steps (methods, reagents, organisms, failure-modes — follow wikilinks). You don't need to read every file in `wiki/`; read what the plan actually cites.

2. **Generate `hypotheses/$1/plan/ar.json`** — the custom AR lab spec. Schema:

   ```json
   {
     "version": 1,
     "slug": "<slug>",
     "title": "<short title>",
     "scene": {
       "stations": [
         {
           "id": "dlp-printer",
           "label": "DLP Printer",
           "kind": "tall-instrument",
           "color": "#4a90e2",
           "position": [-0.3, 0, -0.05],
           "wiki_page": "methods/DLP-stereolithography"
         }
       ]
     },
     "step_bindings": [
       {
         "step": 1,
         "focus_station": "dlp-printer",
         "animation": "operate",
         "label_override": "Print scaffold green body",
         "state_changes": []
       }
     ]
   }
   ```

   - One `station` per distinct piece of equipment / vessel the protocol uses. Aim for **3–8 stations** — enough to cover the experiment, few enough to render cleanly.
   - `kind` ∈ `beaker | tube-rack | pipette | hotplate | tall-instrument | flat-instrument | plate-reader | scaffold | dish | microscope | incubator | furnace | printer`. The runtime maps these to renderable primitives; unknown kinds fall back to `tall-instrument`.
   - `position` is `[x, y, z]` in metres, with the lab origin centred on a 0.9 × 0.45 m bench. Keep `y >= 0`. Keep stations inside the bench footprint (`|x| < 0.45`, `|z| < 0.22`).
   - `wiki_page` (optional) is a relative path into `wiki/` so the UI can deep-link the station to its wiki entry.
   - `step_bindings` has one entry per step in `plan.protocol`. `focus_station` must reference a `station.id` you defined. `animation` ∈ `operate | mix | heat | observe | measure | transfer | none`.
   - `state_changes` is an optional list of `{ "station": "<id>", "property": "color"|"label"|"active", "to": <value> }` — purely cosmetic hints the scene can apply.

3. **Generate `hypotheses/$1/plan/wiki.html`** — a single self-contained static HTML page rendering the wiki + plan. Constraints:

   - **Self-contained.** Inline all CSS in a `<style>` tag. No external assets, no fonts, no JS frameworks. A single tasteful CSS file inline (system fonts, dark theme matching `app/globals.css` palette: bg `#0a0f1a`, text `#e2e8f0`, accent `#00d4aa`, muted `#64748b`, danger `#f87171`).
   - **Vanilla JS only**, and only for in-page navigation (table-of-contents toggle, anchor smooth-scroll). No build step, no imports.
   - **Structure** (in order):
     1. Header: hypothesis title + refined hypothesis table (intervention / outcome / threshold / mechanism / control).
     2. Novelty QC panel: verdict badge + reference list with DOIs.
     3. Summary chips: total budget, total weeks, top failure modes.
     4. Protocol: numbered steps; each step shows title, duration, reagents (qty + supplier + catalog), failure warnings (red callout, severity badge), rationale, source citations as `[id]` links to the Sources section.
     5. Materials table.
     6. Budget table + total.
     7. Timeline: phase list with durations + dependencies.
     8. Validation: success / failure criteria + measurements.
     9. Failure Map: one card per top failure mode with severity, frequency, mitigation, link to the wiki page.
     10. Wiki section: index of all entity pages grouped by type (methods / reagents / organisms / failure-modes / sources), each rendered as a collapsible block with a 2–3 sentence summary lifted from the entity page body (NOT the full markdown; we want a browseable digest, not a wall of text). Each block links out to the actual `wiki/<type>/<slug>.md` so a curious reader can open it in Obsidian.
   - **All cross-references resolve.** Every `<a href="#id">` must point at a real `id="..."` somewhere in the page. Section IDs use the same slug naming as the wiki (`reagents-trehalose`, `failure-modes-temperature-drift-during-thaw`, etc.).
   - **No invented facts.** Everything in the HTML must trace to the plan or the wiki. If a section is empty in the plan (e.g., no `failure_warnings` for a step), render the step without that section — don't pad.
   - **Print-friendly.** A `@media print` block hides the TOC and renders steps as full-width.

4. **File the AR spec back into the wiki** at `hypotheses/$1/wiki/plans/ar-v<n>.md`. `<n>` matches the latest `plan-v<n>.md` if one exists; otherwise `1`. The page is a thin wrapper: YAML frontmatter (`type: ar-spec`, `derived_from: plan-v<n>.md`), then a fenced ` ```json ` block with the full `ar.json` content. This puts the AR spec in the Obsidian graph.

5. **Update `hypotheses/$1/hypothesis.md`** — set `latest_ar: wiki/plans/ar-v<n>` and `latest_wiki_html: plan/wiki.html` in frontmatter. Do not change `status`.

6. **Append `hypotheses/$1/session.log.md`**:
   ```
   ## [YYYY-MM-DD HH:MM] ar | ar-v<n>
   Stations: <count>. Steps bound: <count>. Wiki HTML: <byte size>.
   ```

7. **Stop and report.** 4-line summary:
   - Stations defined (count + names)
   - Steps bound to stations (count)
   - Wiki HTML byte size + path
   - Anything in the plan's protocol that didn't map cleanly to a station — call it out.

## Constraints

- Read from `wiki/`, `plan/`, and `hypothesis.md` only.
- Write to `plan/ar.json`, `plan/wiki.html`, `wiki/plans/ar-v<n>.md`, and append to `session.log.md` and `hypothesis.md` frontmatter. **Nothing else.**
- **Every station must trace to a wiki entity** (`wiki_page` field), or be a generic vessel (`beaker`, `tube-rack`, `dish`, `pipette`) that doesn't need one. No invented equipment.
- **Every protocol step must have exactly one `step_bindings` entry.** No skipped steps, no orphan bindings.
- Be idempotent — re-running Pass 4 bumps the version (`ar-v2.md`) and overwrites `plan/ar.json` and `plan/wiki.html`.
- Keep `wiki.html` under ~500 KB. If the wiki is huge, use the digest summaries (step 3.10) instead of full bodies — the wiki itself remains the source of truth in `wiki/`.
