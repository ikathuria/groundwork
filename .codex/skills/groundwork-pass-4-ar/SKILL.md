---
name: groundwork-pass-4-ar
description: |
  Pass 4 of the GROUNDWORK pipeline — generate the custom AR lab simulation
  spec from a finished Pass 3 plan. Triggers when the user asks to "run pass 4
  on <slug>", "build the AR scene for <slug>", "generate the lab simulation
  for <slug>", or "build the simulation for <slug>". Produces `plan/ar.json`
  (loaded at the live scene `/ar/<slug>` and via `/api/ar/<slug>`) and files
  a copy back into the wiki. Pass 4 does not generate the Lab Brief HTML; the
  AR viewer in `components/ar/` is the 3D renderer.
---

# Pass 4 — Custom AR Lab Simulation (Codex mirror)

This is the Codex mirror of the Claude Code skill at `.claude/commands/pass-4.md` and `.claude/skills/pass-4-ar.md`. Behavior is identical; the only difference is invocation.

**Read `context.md` first.** Especially §7 (agent operations) and §8 (Lab Brief artifact shape). Follow `.claude/commands/pass-4.md` verbatim — that is the canonical spec.

Pass 4 has a single job: take the protocol from Pass 3 and translate it into a **simulation spec** (`plan/ar.json`) that the live AR viewer in `components/ar/` can render as an interactive 3D bench, exposed at **`/ar/<slug>`** (see `.claude/commands/pass-4.md` §Live scene route). Pass 3's Lab Brief HTML and other static pages are out of scope for this pass.

## Trigger

Natural-language prompts like:
- "Run GROUNDWORK Pass 4 on `2026-04-25_trehalose-hela-cryopreservation`."
- "Build the AR lab simulation for `<slug>`."
- "Generate the simulation for `<slug>`."
- "Pass 4 `<slug>`."

## Input

- `<slug>` — the date-prefixed hypothesis folder name. Files live under `hypotheses/<slug>/`.

## Preconditions

- `hypotheses/<slug>/plan/plan.json` must exist (Pass 3 has run).
- `hypotheses/<slug>/wiki/index.md` must exist (Pass 2 has run).

If either is missing, stop and report.

## Output

- `hypotheses/<slug>/plan/ar.json` — the custom AR scene spec. Schema, runtime semantics, and quality bar are documented in `.claude/commands/pass-4.md` §Schema, §Runtime context, and §Quality checklist.
- `hypotheses/<slug>/wiki/plans/ar-v<n>.md` — wiki-filed copy of `ar.json` (thin wrapper: `type: ar-spec`, `derived_from: plan-v<n>.md`, lead paragraph naming `/ar/<slug>`, fenced JSON block).
- Frontmatter update on `hypotheses/<slug>/hypothesis.md` (`latest_ar` only — Pass 4 no longer touches the Lab Brief HTML pointer; the `plan/index.html` artifact is Pass 3's domain).
- A new entry in `hypotheses/<slug>/session.log.md` using the prefix `## [YYYY-MM-DD HH:MM] ar | ar-v<n>`.

## Constraints

- Read from `wiki/`, `plan/`, and `hypothesis.md` only.
- Write to `plan/ar.json`, `wiki/plans/ar-v<n>.md`, and the two log/frontmatter updates. **Nothing else.**
- **Do not add or change files under `app/`** — `/ar/[slug]` is shared app code.
- **Do not generate `plan/index.html` (that's Pass 3's Lab Brief) or any other static Lab Brief page.** The on-disk spec is `plan/ar.json`; the live scene is `/ar/<slug>`.
- Every protocol step must have exactly one entry in `ar.json.step_bindings`, with a real `focus_station` (the runtime's gate-hint pointer arrow needs a target on every step).
- Every station must reference a real wiki entity via `wiki_page`, OR be a generic vessel (`beaker`, `tube-rack`, `dish`, `pipette`, `scaffold`) that doesn't need one.
- Station `id`s are kebab-case and read naturally when spoken — Gemini Live uses them as voice tool targets (`highlight_object`, `point_at`), and the system prompt is told the full station list at session start.
- `kind` must come from the runtime's supported set: `printer | furnace | hotplate | microscope | incubator | plate-reader | dish | beaker | tube-rack | pipette | scaffold | tall-instrument | flat-instrument | solar-cell | pv-module`. Unknown kinds fall back to `tall-instrument`.
- Be idempotent — re-running Pass 4 bumps the version and overwrites the artifact.
