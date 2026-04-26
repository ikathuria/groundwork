---
description: Pass 4 of the GROUNDWORK pipeline — generate the custom AR lab simulation spec from a finished Pass 3 plan. Produces `plan/ar.json` (the canonical scene spec consumed by the AR/3D viewer) and files a copy back into the wiki. Pass 4 does NOT generate any HTML; the AR viewer in `components/ar/` is the only consumer.
argument-hint: <date_prefixed_slug>
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
---

# Pass 4 — Custom AR Lab Simulation

You are running **Pass 4** of the GROUNDWORK pipeline. **Read `context.md` first** if you haven't this session — especially §7 (agent operations) and §8 (Lab Brief artifact shape).

Pass 4 has a single job: take the protocol from Pass 3 and translate it into a **simulation spec** (`plan/ar.json`) that the live AR viewer in `components/ar/` can render as an interactive 3D bench. Wiki HTML, slide decks, and other static artifacts are explicitly out of scope — the simulation IS the deliverable.

## Input (filled in at invocation)

- **Hypothesis folder name**: `$1` — the date-prefixed slug. Files live under `hypotheses/$1/`.

## Preconditions

- `hypotheses/$1/plan/plan.json` must exist (Pass 3 has run).
- `hypotheses/$1/wiki/index.md` must exist (Pass 2 has run).
- If either is missing, **stop and report**.

## Steps

1. **Orient.** Read:
   - `hypotheses/$1/hypothesis.md`
   - `hypotheses/$1/plan/plan.json` (canonical) and `hypotheses/$1/plan/plan.md` (mirror)
   - `hypotheses/$1/wiki/index.md`
   - The wiki entity pages cited by the plan's protocol steps (methods, reagents, organisms, failure-modes — follow wikilinks). Read what the plan actually cites; you do not need to enumerate every wiki file.

2. **Generate `hypotheses/$1/plan/ar.json`** — the custom AR lab spec. Schema, runtime semantics, and quality bar are documented in §Schema and §Runtime context below. Validate the result against §Quality checklist before writing.

3. **File the AR spec back into the wiki** at `hypotheses/$1/wiki/plans/ar-v<n>.md`. `<n>` matches the latest `plan-v<n>.md` if one exists; otherwise `1`. The page is a thin wrapper: YAML frontmatter (`type: ar-spec`, `derived_from: plan-v<n>.md`), then a fenced ` ```json ` block with the full `ar.json` content. This puts the AR spec in the Obsidian graph so the wiki and the simulation stay linked.

4. **Update `hypotheses/$1/hypothesis.md`** — set `latest_ar: wiki/plans/ar-v<n>` in frontmatter. Do not change `status`. Do not add or update any `latest_wiki_html` field — Pass 4 no longer produces wiki HTML.

5. **Append `hypotheses/$1/session.log.md`**:
   ```
   ## [YYYY-MM-DD HH:MM] ar | ar-v<n>
   Stations: <count>. Steps bound: <count>.
   ```

6. **Stop and report.** 4-line summary:
   - Stations defined (count + names)
   - Steps bound to stations (count)
   - Path to the new `plan/ar.json`
   - Anything in the plan's protocol that didn't map cleanly to a station — call it out.

## Schema

`plan/ar.json` is a single JSON document with three top-level keys: `version`, `slug`, `title`, plus `scene.stations[]` and `step_bindings[]`.

```json
{
  "version": 1,
  "slug": "<slug>",
  "title": "<short title — 5–9 words>",
  "scene": {
    "stations": [
      {
        "id": "dlp-printer",
        "label": "DLP slurry printer",
        "kind": "printer",
        "color": "#4a90e2",
        "position": [-0.35, 0, -0.05],
        "wiki_page": "methods/DLP-vat-photopolymerization"
      }
    ]
  },
  "step_bindings": [
    {
      "step": 1,
      "focus_station": "dlp-printer",
      "animation": "operate",
      "label_override": "Print scaffold green body",
      "state_changes": [
        { "station": "dlp-printer", "property": "active", "to": true }
      ]
    }
  ]
}
```

### Stations (`scene.stations[]`)

| Field        | Required | Notes                                                                                                                                                                                                                                                                                                                |
| ------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`         | yes      | Kebab-case. Used as the **stable handle** by the AR runtime *and* by the Gemini Live voice assistant when calling `highlight_object` / `point_at`. Pick ids that read naturally when spoken: `dlp-printer`, `sintering-furnace`, `plate-reader`, not `s1` / `instr_3`.                                              |
| `label`      | yes      | Human title shown on hover tooltips, in the HUD, and read aloud by Gemini. 2–5 words. Match the wording used in the wiki entity page so the user gets a consistent vocabulary across the simulation, the protocol panel, and the wiki.                                                                              |
| `kind`       | yes      | Drives the 3D primitive the runtime renders. Choose from §Station kinds.                                                                                                                                                                                                                                             |
| `color`      | no       | Hex string (`#rrggbb`). Sets the initial surface tint and emissive base. Default: `#4a90e2`. Use color to disambiguate similar-kind stations (e.g. two `tall-instrument`s).                                                                                                                                          |
| `position`   | yes      | `[x, y, z]` in metres on a 0.9 × 0.45 m bench centred on the lab origin. Keep `|x| < 0.45`, `|z| < 0.22`, and `y = 0` (the runtime lifts station bodies above the bench plane on its own). Lay stations out left → right roughly in protocol order so the user's eye sweeps the bench in the same order they work. |
| `wiki_page`  | no       | Relative wiki path (`methods/foo`, `organisms/bar`). Reserved for downstream tooling that wants to deep-link a station to its entity page. Optional, but include it when the station maps to a real wiki entity — the link makes the simulation feel grounded.                                                      |

### Step bindings (`step_bindings[]`)

Exactly **one entry per protocol step** in `plan.protocol`. No skipped steps, no orphan bindings.

| Field            | Required | Notes                                                                                                                                                                                                                                                                                                              |
| ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `step`           | yes      | 1-based step index matching `plan.protocol[i].step`.                                                                                                                                                                                                                                                               |
| `focus_station`  | yes      | A station `id` defined above. Drives (a) the 3D highlight in guided mode, (b) the persistent **gate-hint pointer arrow** in interactive mode, and (c) Gemini Live's default referent when the user asks "what's next?". Pick the *primary* instrument the step touches — even if multiple stations are involved. |
| `animation`      | yes      | One of `operate`, `mix`, `heat`, `observe`, `measure`, `transfer`, `none`. Drives the guided-mode demo animation on `focus_station`. See §Animation cues for which to pick.                                                                                                                                       |
| `label_override` | no       | Shown in the HUD instead of the protocol step text. Keep it ≤ 80 chars — this is the *one-line* version of the step that's visible while the bench is the main attraction. Prefer the imperative ("Print 36 scaffolds") over passive ("Scaffolds get printed").                                                  |
| `state_changes`  | no       | Cosmetic mutations applied when entering the step. List of `{ "station": "<id>", "property": "color"|"label"|"active", "to": <value> }`. Use these to make the bench *feel alive* — turn instruments on/off, tint a furnace red while heating, swap a label when a sample is loaded. See §State changes.       |

### Station kinds

The runtime in `components/ar/lab-scene.ts` maps each kind to a dedicated 3D primitive. Pick the kind that visually matches the real instrument:

| Kind               | Renderable                                          | Use for                                                                          |
| ------------------ | --------------------------------------------------- | -------------------------------------------------------------------------------- |
| `printer`          | DLP/SLA-style printer with a vat + arm              | 3D printers, bioprinters, vat photopolymerisation                                |
| `furnace`          | Box furnace with a heated chamber                   | Sintering, calcination, kilns, tube furnaces                                     |
| `hotplate`         | Stir hotplate with a knob                           | Heated stirring, simple bench heating                                            |
| `microscope`       | Stand + objective turret                            | Optical / confocal / fluorescence / electron microscopes                         |
| `incubator`        | Cabinet with a glass door                           | Cell-culture incubators, hybridisation ovens                                     |
| `plate-reader`     | Wide flat reader with a slot                        | Plate readers (absorbance, fluorescence, luminescence)                           |
| `dish`             | Petri dish on a small platform                      | Open culture dishes, plating stations, cytotox assays                            |
| `beaker`           | Glass beaker with optional liquid                   | Generic glassware for buffers, mixing, washing                                   |
| `tube-rack`        | Rack of microcentrifuge tubes                       | Sample storage, aliquoting, cryo racks                                           |
| `pipette`          | Tilted pipette body                                 | Pipetting stations, transfer stations                                            |
| `scaffold`         | Cube with porous lattice                            | Tissue-engineering scaffolds, hydrogels, lab-printed parts                       |
| `tall-instrument`  | Generic tall rack-style box                         | Anything imaging / characterisation that isn't a microscope (μCT, XRD, ICP-MS)  |
| `flat-instrument`  | Generic shallow box                                 | Centrifuges, gel docs, low-profile readers                                       |
| `solar-cell`       | Tap-to-flip 2.5 cm coupon                           | Solar / PV samples (special interaction: tap flips, drag rotates)                |
| `pv-module`        | Tap-to-flip 10 cm coupon                            | Larger PV modules (same flip/rotate gestures as `solar-cell`)                    |

Unknown kinds fall back to `tall-instrument`. Prefer specific kinds — the user reads the geometry, not the label.

### Animation cues

Each step gets one animation that plays on `focus_station` when the user enters guided mode (or when Gemini calls `play_animation`). Pick the cue whose motion best mirrors the *physical activity* of the step:

| Animation  | Motion on the focus station                                | Use for                                                       |
| ---------- | ---------------------------------------------------------- | ------------------------------------------------------------- |
| `operate`  | Surface pulse + soft glow                                  | Generic "this device is now running" (printers, machines)     |
| `mix`      | Spinner / liquid swirl                                     | Stirring, vortexing, perfusion-loop circulation               |
| `heat`     | Reddening emissive                                         | Furnace, hotplate, oven, autoclave                            |
| `observe`  | Lens / objective wobble + emissive flicker                 | Microscopy, imaging, visual inspection                        |
| `measure`  | Slot indicator strobe                                      | Plate reader, μCT, spectroscopy, gauge readouts               |
| `transfer` | Pipette tilt + droplet                                     | Pipetting, seeding, loading samples between vessels           |
| `none`     | No motion (highlight only)                                 | Setup, planning, waiting steps where nothing physically moves |

When in doubt, prefer `operate` over `none` — the bench should look alive on every step.

### State changes

`state_changes` are **cumulative when replayed forward** — the runtime applies every binding's changes in step order, so step 5 inherits whatever step 4 set. Use this to model the lab's evolution:

- Turn on instruments as they enter use (`{"station":"furnace","property":"active","to":true}`).
- Turn them back off when the workflow moves on, so the bench tells a story.
- Tint when the state matters: `{"station":"furnace","property":"color","to":"#ef4444"}` to redden during heating; reset to base when cooled.
- Re-label when a vessel acquires a sample: `{"station":"dish","property":"label","to":"L929 cytotox dish, day 1"}`.

`property` ∈ `color | label | active`. `to` is a hex string for `color`, a string for `label`, a boolean for `active`. The runtime ignores unknown properties without erroring.

## Runtime context

The AR viewer (`components/ar/ARViewer.tsx`) consumes `ar.json` to drive a live, multimodal experience. Keep the consumer in mind when authoring the spec:

- **Drag-and-drop bench layout.** Stations are universally draggable; the user can reorganise the bench at runtime. `position` is the *initial* layout, not a constraint. Lay stations out so the protocol reads left → right when the user first sees it; they can rearrange afterwards.
- **Hover tooltips.** Pointing at a station surfaces its `label` as a floating tooltip. Long labels are truncated, so put the most distinguishing word first.
- **Gemini Live voice assistant.** Gemini sees the live scene + the camera feed + the HTML HUD. When it calls `highlight_object` or `point_at`, it passes a station `id`. The system prompt is told the full list of station ids + kinds + labels at session start, so use **descriptive, kebab-case ids** that the model can recall ("perfusion-bioreactor", not "pb-1").
- **Gate-hint pointer arrow.** When the user is in interactive mode and the step gate is unsatisfied, a sky-blue arrow with the caption "Tap or drag this" tracks the current step's `focus_station`. If `focus_station` is missing or `kind: 'none'`, the gate-hint is suppressed — every step should have a real station to point at.
- **Two interaction modes.** *Guided* auto-plays the step's `animation` and credits the step as complete. *Interactive* requires the user to tap or drag the focus station. Most users default to interactive; the spec must work for both.
- **Coupon stations.** `solar-cell` and `pv-module` use tap-to-flip + drag-to-rotate gestures instead of the standard tap-to-animate. If your experiment uses sample coupons, mark them with one of these kinds and the runtime will surface the right gesture coach.

## Quality checklist

Before writing, confirm:

- [ ] **3–8 stations.** Fewer than 3 is sparse; more than 8 crowds the bench and overwhelms the user.
- [ ] Every station has a wiki entity (`wiki_page` set) OR is a generic vessel (`beaker`, `tube-rack`, `dish`, `pipette`, `scaffold`). No invented equipment that isn't grounded somewhere.
- [ ] `kind` matches the real instrument's silhouette — a μCT scanner is `tall-instrument`, not `microscope`; a sintering oven is `furnace`, not `hotplate`.
- [ ] **Every protocol step has exactly one `step_bindings` entry** with a non-`none` `focus_station`. No orphan bindings, no skipped steps.
- [ ] `animation` matches the step's physical activity (printing → `operate`, sintering → `heat`, imaging → `measure`, seeding → `transfer`, microscopy → `observe`).
- [ ] `label_override` (when set) reads as a clear imperative under 80 chars.
- [ ] `state_changes` are cumulative across steps and tell a coherent story (instruments turn on, then off; samples get labelled; colors evolve).
- [ ] Stations laid out left → right roughly in protocol order. No two stations within 0.05 m of each other.
- [ ] `id`s are kebab-case, descriptive, and read naturally when spoken — Gemini will say "let's tap the {id}" and the user should immediately understand.

## Constraints

- Read from `wiki/`, `plan/`, and `hypothesis.md` only.
- Write to `plan/ar.json`, `wiki/plans/ar-v<n>.md`, and append to `session.log.md` and `hypothesis.md` frontmatter (`latest_ar` only). **Nothing else.**
- **Do not generate `plan/wiki.html`, `plan/index.html`, or any other static webpage.** Pass 4 produces only the simulation spec; the live AR viewer in `components/ar/` is the only renderer.
- **Every station must trace to a wiki entity** (`wiki_page` field) or be a generic vessel. No invented equipment.
- **Every protocol step must have exactly one `step_bindings` entry.** No skipped steps, no orphan bindings.
- `plan/ar.json` is the single source of truth for the simulation. Downstream tooling (`/api/ar/[slug]`, the AR viewer, Gemini Live system prompt) reads from this file directly.
- Be idempotent — re-running Pass 4 bumps the version (`ar-v2.md`) and overwrites `plan/ar.json`.
