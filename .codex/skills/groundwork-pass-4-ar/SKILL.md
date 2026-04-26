---
name: groundwork-pass-4-ar
description: |
  Pass 4 of the GROUNDWORK pipeline — render the static wiki webpage and the
  custom AR lab spec from a finished Pass 3 plan. Triggers when the user asks
  to "run pass 4 on <slug>", "build the AR scene for <slug>", "render the wiki
  HTML for <slug>", or "generate the lab simulation for <slug>". Produces
  `plan/wiki.html` (self-contained, shareable) and `plan/ar.json` (custom
  scene spec consumed by the AR viewer).
---

# Pass 4 — Wiki HTML + Custom AR Lab (Codex mirror)

This is the Codex mirror of the Claude Code skill at `.claude/commands/pass-4.md` and `.claude/skills/pass-4-ar.md`. Behavior is identical; the only difference is invocation.

**Read `context.md` first.** Especially §7 (agent operations) and §8 (Lab Brief artifact shape). Follow `.claude/commands/pass-4.md` verbatim — that is the canonical spec.

## Trigger

Natural-language prompts like:
- "Run GROUNDWORK Pass 4 on `2026-04-25_trehalose-hela-cryopreservation`."
- "Build the AR lab spec and wiki HTML for `<slug>`."
- "Pass 4 `<slug>`."

## Input

- `<slug>` — the date-prefixed hypothesis folder name. Files live under `hypotheses/<slug>/`.

## Preconditions

- `hypotheses/<slug>/plan/plan.json` must exist (Pass 3 has run).
- `hypotheses/<slug>/wiki/index.md` must exist (Pass 2 has run).

If either is missing, stop and report.

## Output

- `hypotheses/<slug>/plan/ar.json` — custom AR scene spec (`version`, `scene.stations[]`, `step_bindings[]`).
- `hypotheses/<slug>/plan/wiki.html` — self-contained static HTML rendering of the plan + wiki digest.
- `hypotheses/<slug>/wiki/plans/ar-v<n>.md` — wiki-filed copy of `ar.json`.
- Frontmatter updates on `hypotheses/<slug>/hypothesis.md` (`latest_ar`, `latest_wiki_html`).
- A new entry in `hypotheses/<slug>/session.log.md` using the prefix `## [YYYY-MM-DD HH:MM] ar | ar-v<n>`.

## Constraints

- Read from `wiki/`, `plan/`, and `hypothesis.md` only.
- Write to `plan/ar.json`, `plan/wiki.html`, `wiki/plans/ar-v<n>.md`, and the two log / frontmatter updates. Nothing else.
- Every protocol step must have exactly one entry in `ar.json.step_bindings`.
- Every station must reference a real wiki entity via `wiki_page`, OR be a generic vessel (`beaker`, `tube-rack`, `dish`, `pipette`) that doesn't need one.
- Be idempotent — re-running Pass 4 bumps the version and overwrites the artifacts.
- Keep `wiki.html` under ~500 KB.
