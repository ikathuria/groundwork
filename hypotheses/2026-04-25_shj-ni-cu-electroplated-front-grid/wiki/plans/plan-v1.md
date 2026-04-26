---
type: plan
id: plan-v1
created: 2026-04-26
derived_from: hypothesis.md
sources_used: 45
corrections_applied: 0
total_budget_usd: 168450
total_timeline_weeks: 14
---

# Plan v1 — SHJ Ni/Cu electroplated front-grid

> Filed back into the wiki graph. The full plan body lives at `../../plan/plan.md`. The structured form (consumed by the Lab Brief HTML) lives at `../../plan/plan.json`. The interactive Lab Brief is `../../plan/index.html`.

## Summary

A 4-arm, 14-week, $168,450 tabletop study comparing electroplated Cu front-grid metallization on commercial SHJ M6 cells across:
- **Arm A** — sub-100 nm electroplated Ni (80 nm) barrier + 5 µm Cu + 200 nm Ag cap (the literal hypothesis, NOBLE-style)
- **Arm B** — no Ni barrier, TCO-only (SunDrive-style; the published 26.41 % certified architecture)
- **Arm C** — 120 nm Ni barrier (Cheng 2018 safe-threshold reference)
- **Arm D** — low-T SHJ-grade Ag screen-print control

All laminated as POE glass-glass mini-modules with PIB edge seal; one paired Arm A laminate uses EVA as a controlled contrast (Karas 2022 protocol). Damp-heat to 1000 h IEC 61215 + extended 2000 h IEC 63209. SIMS Cu-in-c-Si at 0/1000/2000 h on every arm.

## Novelty QC

`similar-work-exists` — SunDrive 26.41 % certified Cu-plated SHJ exists ([[../sources/2022-arena-sundrive-copper-metallisation-demonstration]]); Hatt NOBLE 22.6 % on M2 ([[../sources/2021-hatt-stable-cu-plated-shj-eupvsec]]); CSEM mini-modules at 2000–2700 h DH ([[../sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]]).

**Differentiation beyond replication:** the 4-arm sweep maps the [[../sources/2018-electrochemsci-barrier-properties-electroplated-ni|Cheng 2018]] 60-nm Ni-failure threshold *under SHJ ≤200°C process budget* — a measurement no published study has done — plus an EVA-vs-POE encapsulant decision rule and a defensible $/cell model.

## Top failure modes (governing risks)

1. [[../failure-modes/Cu-diffusion-into-c-Si]] (critical) — sub-ppb Cu collapses lifetime; SHJ TCO + intact Ni continuity is the hypothesis's protection.
2. [[../failure-modes/Cu3Si-formation-at-Si-interface]] (critical) — Cheng 2018 60 nm Ni → Cu₃Si at 300°C; mitigated by hard ≤200°C anneal cap.
3. [[../failure-modes/Ni-barrier-pinholes]] (high) — sub-100 nm sits in failure regime under high-T anneal; pinhole density >10 cm⁻² rejects wafer.
4. [[../failure-modes/EVA-acetic-acid-corrosion]] (high) — Karas 2022 ~3× more Cu in Si on EVA vs POE at 3500 h DH; eliminated by POE.
5. [[../failure-modes/Cu-out-diffusion-through-cap-stack]] (high) — Cu through Sn/Ag caps under DH; Ag cap ≥150 nm + POE encapsulation.

## Plan artifacts

- [`../../plan/plan.json`](../../plan/plan.json) — canonical structured plan (62 KB).
- [`../../plan/plan.md`](../../plan/plan.md) — Obsidian-readable mirror (this directory's parent).
- [`../../plan/index.html`](../../plan/index.html) — bespoke interactive single-file Lab Brief (Three.js cell stack, D3 failure network, treemap budget, swim-lane timeline, side-panel wiki browser).
- [`../../plan/.wiki-bundle.json`](../../plan/.wiki-bundle.json) — 123-page wiki corpus inlined into the HTML.

## Cost summary

| Category | $ |
|---|---|
| Personnel (1.5 FTE × 14 wk) | 84,000 |
| Equipment access | 28,500 |
| Contingency (15%) | 15,855 |
| Indirect (10%) | 13,855 |
| Plating chemistry | 5,940 |
| Reporting | 6,800 |
| SIMS analysis | 4,800 |
| Probe access | 3,200 |
| Safety / consumables | 3,200 |
| Module materials | 2,150 |
| Ag paste control | 1,850 |
| Wafers | 1,500 |
| **Total** | **$168,450** |
