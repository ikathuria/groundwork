---
name: groundwork-pass-3-plan
description: Use when the user asks to run GROUNDWORK Pass 3 or generate a Lab Brief plan. Reads a compiled hypothesis wiki and commons, then writes plan/plan.json, plan/plan.md, and a versioned wiki/plans/plan-vN.md.
---

# GROUNDWORK Pass 3 - Plan / Lab Brief

Read `context.md` first, especially sections 7.3, 8, and 9. The context file is canonical.

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
   - read relevant methods, reagents, organisms, failure modes, sources, and linked `commons/` pages

2. Generate the literature QC verdict:
   - `not-found`
   - `similar-work-exists`
   - `exact-match-found`

   Include 1-3 reference sources with wikilinks.

3. Synthesize the experiment plan with these sections:
   - refined hypothesis
   - literature QC
   - protocol, with numbered steps
   - materials
   - budget
   - timeline
   - validation
   - failure map

4. Protocol steps must include:
   - step number and title
   - duration
   - reagents with wiki page, quantity, supplier, and catalog where available
   - failure warnings with wiki page, severity, and mitigation
   - rationale
   - source citations

5. Write `hypotheses/<slug>/plan/plan.json` using the structured shape in `context.md` section 8.

6. Write `hypotheses/<slug>/plan/plan.md` as a human-readable mirror with Obsidian wikilinks.

7. File the plan back into the wiki at `hypotheses/<slug>/wiki/plans/plan-v<n>.md`. Increment `<n>` based on existing plan files.

8. Update `hypotheses/<slug>/hypothesis.md`:
   - set `status: complete`
   - link to the latest plan version

9. Append `hypotheses/<slug>/session.log.md`:

```markdown
## [YYYY-MM-DD HH:MM] plan | plan-v<n>
Total budget: $X. Timeline: N weeks. Sources used: M. Top failure modes: <list>.
Novelty: <verdict>.
```

10. Report:
   - total budget and timeline
   - top 3 failure modes
   - novelty verdict
   - anything under-supported by the wiki

## Constraints

- Read from `wiki/` and `commons/` only.
- Write to `plan/`, `wiki/plans/`, `hypothesis.md`, and `session.log.md`.
- Every claim in the plan must trace to a wiki entity and source.
- If a needed entity is missing, stop and report instead of inventing.
- Re-running Pass 3 should create a new plan version.
