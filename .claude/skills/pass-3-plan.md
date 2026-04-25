---
name: pass-3-plan
description: Pass 3 of the GROUNDWORK pipeline — generate the Lab Brief experiment plan from a compiled wiki. Produces `plan/plan.json` (structured, the UI's input) and `plan/plan.md` (human-readable mirror), and files the plan back into the wiki.
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
arguments:
  - name: slug
    description: The hypothesis folder name (date-prefixed slug), e.g. "2026-04-25_trehalose-hela-cryopreservation".
    required: true
---

# Pass 3 — Plan / Lab Brief

You are running **Pass 3** of the GROUNDWORK pipeline. **Read `context.md` first** if you haven't this session — especially §7.3 (Pass 3 spec) and §8 (Lab Brief artifact shape).

## Input

- `slug` (positional 1): hypothesis folder name, e.g. `2026-04-25_trehalose-hela-cryopreservation`.

## Steps

1. **Orient.** Read `hypotheses/<slug>/hypothesis.md` and `hypotheses/<slug>/wiki/index.md`. Then read the entity pages most relevant to the hypothesis: methods it implies, reagents, organisms, and especially failure modes that apply to the methods. Also check `commons/` for any linked entities — corrections or richer content may live there.

2. **Generate the literature QC verdict.** Choose one of:
   - `not-found` — no source describes this exact protocol or a close analog
   - `similar-work-exists` — 1–3 sources describe related but distinct work
   - `exact-match-found` — a source describes essentially the same experiment
   List 1–3 reference sources with wikilinks into `wiki/sources/`.

3. **Synthesise the experiment plan.** Sections (matching `context.md` §8 schema):
   - **Refined hypothesis** (intervention, outcome, threshold, mechanism, control)
   - **Literature QC** (verdict + references)
   - **Protocol** — numbered steps; each step: title, duration_minutes, reagents (wiki_page + qty + supplier + catalog), failure_warnings (wiki_page + severity + mitigation), rationale, source_citations
   - **Materials** — table: reagent (wiki_page), supplier, catalog, qty, price_usd
   - **Budget** — line items (category, description, cost_usd) + total_usd
   - **Timeline** — phases with dependencies; each phase: name, duration_weeks, depends_on
   - **Validation** — success_criteria, failure_criteria, measurements
   - **Failure Map** — top 5–10 failure modes for this experiment type, each: wiki_page, severity, frequency_estimate, applies_to_step, mitigation

4. **Write `hypotheses/<slug>/plan/plan.json`** — the structured form per `context.md` §8 schema. Every reagent / failure_warning / source_citation field must include a `wiki_page` pointer to a real file in `wiki/` (or `commons/`).

5. **Write `hypotheses/<slug>/plan/plan.md`** — a human-readable mirror of `plan.json`, with Obsidian wikilinks for every entity reference. This is what a human reads in Obsidian; the JSON is what the Next.js UI consumes.

6. **File the plan back into the wiki** at `hypotheses/<slug>/wiki/plans/plan-v<n>.md`. `<n>` increments per regeneration (look for existing files to determine the next version). This makes the plan part of the graph.

7. **Update `hypotheses/<slug>/hypothesis.md`** — set `status: complete`, link to the latest plan version.

8. **Append `hypotheses/<slug>/session.log.md`**:
   ```
   ## [YYYY-MM-DD HH:MM] plan | plan-v<n>
   Total budget: $X. Timeline: N weeks. Sources used: M. Top failure modes: <list>.
   Novelty: <verdict>.
   ```

9. **Stop and report.** Provide a 5-line summary:
   - Total budget (USD) and timeline (weeks)
   - Top 3 failure modes
   - Novelty verdict
   - Anything in the plan that feels under-supported by the wiki — call it out

## Constraints

- Read from `wiki/` and `commons/` only.
- Write to `plan/` and `wiki/plans/` only.
- **Every claim in the plan must trace to a wiki entity.** No free-floating facts. If a needed entity is missing from the wiki, **stop and report** — do not invent. The fix is to run `/ingest-source` with a relevant new source, or to expand Pass 2.
- Be idempotent — re-running Pass 3 should bump the plan version (`plan-v2.md`), not silently overwrite.
