---
name: pass-4-ar
description: Pass 4 of the GROUNDWORK pipeline — render the static wiki webpage and the custom AR lab spec from a finished Pass 3 plan. Produces `plan/wiki.html` (self-contained, shareable) and `plan/ar.json` (custom scene spec consumed by the AR viewer).
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

# Pass 4 — Wiki HTML + Custom AR Lab

You are running **Pass 4** of the GROUNDWORK pipeline. **Read `context.md` first** if you haven't this session — especially §7 (agent operations) and §8 (Lab Brief artifact shape). The canonical command spec for this pass lives at `.claude/commands/pass-4.md`; follow it exactly. This file mirrors that spec for skill-driven invocation.

## Input

- `slug` (positional 1): hypothesis folder name. Files live under `hypotheses/<slug>/`.

## Preconditions

- `hypotheses/<slug>/plan/plan.json` must exist (Pass 3 has run).
- `hypotheses/<slug>/wiki/index.md` must exist (Pass 2 has run).

If either is missing, stop and report.

## Behavior

Run the steps documented in `.claude/commands/pass-4.md` verbatim. Produce:

- `hypotheses/<slug>/plan/ar.json` — custom AR scene spec (see schema in commands/pass-4.md §2).
- `hypotheses/<slug>/plan/wiki.html` — self-contained static HTML rendering of the plan + wiki digest (see structure in commands/pass-4.md §3).
- `hypotheses/<slug>/wiki/plans/ar-v<n>.md` — wiki-filed copy of `ar.json`.
- Frontmatter updates on `hypotheses/<slug>/hypothesis.md` (`latest_ar`, `latest_wiki_html`).
- A new entry in `hypotheses/<slug>/session.log.md` using the prefix `## [YYYY-MM-DD HH:MM] ar | ar-v<n>`.

## Constraints

- Read from `wiki/`, `plan/`, and `hypothesis.md` only.
- Write to `plan/ar.json`, `plan/wiki.html`, `wiki/plans/ar-v<n>.md`, and the two log/frontmatter updates. Nothing else.
- Every protocol step must have exactly one entry in `ar.json.step_bindings`.
- Every station must reference a real wiki entity via `wiki_page`, OR be a generic vessel (`beaker`, `tube-rack`, `dish`, `pipette`) that doesn't need one.
- Be idempotent — re-running Pass 4 bumps the version and overwrites the artifacts.
- Keep `wiki.html` under ~500 KB.
