---
name: pass-4-ar
description: Pass 4 of the GROUNDWORK pipeline — generate the custom AR lab simulation spec from a finished Pass 3 plan. Produces `plan/ar.json` (loaded at the live scene `/ar/<slug>` and via `/api/ar/<slug>`) and files a copy back into the wiki. Pass 4 does not generate the Lab Brief HTML; the AR viewer in `components/ar/` is the 3D renderer.
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

# Pass 4 — Custom AR Lab Simulation

You are running **Pass 4** of the GROUNDWORK pipeline. **Read `context.md` first** if you haven't this session — especially §7 (agent operations) and §8 (Lab Brief artifact shape). The canonical command spec for this pass lives at `.claude/commands/pass-4.md`; follow it exactly. This file mirrors that spec for skill-driven invocation.

Pass 4 has a single job: take the protocol from Pass 3 and translate it into a **simulation spec** (`plan/ar.json`) that the live AR viewer in `components/ar/` can render as an interactive 3D bench, exposed at **`/ar/<slug>`** (see `.claude/commands/pass-4.md` §Live scene route). Pass 3's Lab Brief HTML and other static pages are out of scope here.

## Input

- `slug` (positional 1): hypothesis folder name. Files live under `hypotheses/<slug>/`.

## Preconditions

- `hypotheses/<slug>/plan/plan.json` must exist (Pass 3 has run).
- `hypotheses/<slug>/wiki/index.md` must exist (Pass 2 has run).

If either is missing, stop and report.

## Behavior

Run the steps documented in `.claude/commands/pass-4.md` verbatim. Produce:

- `hypotheses/<slug>/plan/ar.json` — the custom AR scene spec. Schema, runtime semantics, and quality bar are documented in `.claude/commands/pass-4.md` §Schema, §Runtime context, and §Quality checklist. Stations are kebab-case, animations match the step's physical activity, `state_changes` are cumulative across steps, and every step has a `focus_station` so the gate-hint pointer arrow has a real target.
- `hypotheses/<slug>/wiki/plans/ar-v<n>.md` — wiki-filed copy of `ar.json` (thin wrapper: `type: ar-spec`, `derived_from: plan-v<n>.md`, lead paragraph naming `/ar/<slug>`, fenced JSON block).
- Frontmatter update on `hypotheses/<slug>/hypothesis.md` (`latest_ar` only — Pass 4 no longer touches the Lab Brief HTML pointer; the `plan/index.html` artifact is Pass 3's domain).
- A new entry in `hypotheses/<slug>/session.log.md` using the prefix `## [YYYY-MM-DD HH:MM] ar | ar-v<n>`.

## Constraints

- Read from `wiki/`, `plan/`, and `hypothesis.md` only.
- Write to `plan/ar.json`, `wiki/plans/ar-v<n>.md`, and the two log/frontmatter updates. **Nothing else.**
- **Do not add or change files under `app/`** — `/ar/[slug]` is shared app code.
- **Do not generate `plan/index.html` (that's Pass 3's Lab Brief) or any other static Lab Brief page.** The on-disk spec is `plan/ar.json`; the live scene is `/ar/<slug>`.
- Every protocol step must have exactly one entry in `ar.json.step_bindings`, with a real `focus_station` (so the runtime's gate-hint pointer arrow has a target).
- Every station must reference a real wiki entity via `wiki_page`, OR be a generic vessel (`beaker`, `tube-rack`, `dish`, `pipette`, `scaffold`) that doesn't need one.
- Station `id`s are kebab-case and read naturally when spoken — Gemini Live uses them as voice tool targets (`highlight_object`, `point_at`), and the system prompt is told the full station list at session start.
- `kind` must come from the runtime's supported set: `printer | furnace | hotplate | microscope | incubator | plate-reader | dish | beaker | tube-rack | pipette | scaffold | tall-instrument | flat-instrument | solar-cell | pv-module`. Unknown kinds fall back to `tall-instrument`.
- Be idempotent — re-running Pass 4 bumps the version and overwrites the artifact.
