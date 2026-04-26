---
type: organism
slug: mini-module-glass-glass
organism_type: mini-module
source: lab-built laminates at CSEM, Fraunhofer ISE, SunDrive (ARENA), and university partners
external_id: n/a (no industry standard, but commonly 1–4 cells per laminate)
characteristics:
  - laboratory accelerated-test laminate; not a saleable module
  - 1 to 4 cells (most often 1 cell or a 2×2 string) sandwiched between two glass sheets
  - canonical encapsulant for plated-Cu SHJ aging studies is POE (polyolefin) — chosen specifically to avoid the EVA acetic-acid corrosion pathway; some studies still use EVA as the worst-case control
  - edge-sealing with butyl or similar polyisobutylene tape is common to enforce a worst-case (or best-case) moisture ingress boundary
  - the dominant testbed for damp-heat aging of plated-Cu SHJ in this corpus (Karas 2019, Karas 2022, SunDrive ARENA 2022, Lachowicz/CSEM 2023 & 2024, Fraunhofer ISE 2025)
  - small footprint enables packing dozens into a single 85 °C / 85 % RH chamber for parallel arms
known_failure_modes: [Cu-finger-corrosion-encapsulant, Cu-finger-oxidation-damp-heat, Cu-out-diffusion-through-cap-stack, ECA-discoloration-after-DH, EVA-acetic-acid-corrosion, finger-adhesion-loss-after-DH, lateral-Cu-edge-migration]
sources: [2019-karas-damp-heat-degradation-shj-cu, 2022-arena-sundrive-copper-metallisation-demonstration, 2022-karas-cu-outdiffusion-damp-heat, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj]
tags: [mini-module, laminate, accelerated-test, glass-glass, damp-heat, testbed]
created: 2026-04-26
updated: 2026-04-26
---

# Mini-module, glass-glass laminate

**Slug:** `organisms/mini-module-glass-glass` · **Type:** organism (substrate / device under test)

## What it is

A laboratory-built glass-glass laminate containing a small number (typically 1 to 4) of solar cells, used as the canonical accelerated-aging testbed in plated-Cu SHJ research. Mini-modules sit between bare cells (which can't be DH-tested representatively) and full-size 60/72-cell modules (which are too costly to build in bulk for parametric studies). They are the dominant device-under-test for IEC-61215-style damp-heat aging in this hypothesis's corpus (Karas 2019/2022, SunDrive ARENA 2022, CSEM Lachowicz 2023/2024, Fraunhofer ISE 2025).

## Geometry / format

- 1 to 4 cells per laminate; most commonly a single cell or a 2×2 string
- Cells almost always M6 or M10 SHJ in this corpus
- Two flat glass sheets (typically 2.0–3.2 mm low-iron solar glass, sometimes thinner)
- Laminate footprint: ~20 × 20 cm to ~40 × 40 cm depending on cell count and cell format
- Power class: small — 5–30 W per laminate; not characterised on standard module IV setups, instead measured on dedicated mini-module flashers

## Construction (where relevant)

- **Encapsulant:** POE (polyolefin) is the workhorse for plated-Cu SHJ aging because it hydrolyses orders of magnitude less than EVA and does not generate acetic acid; EVA is sometimes included as a worst-case control to surface the [[failure-modes/EVA-acetic-acid-corrosion]] pathway
- **Glass:** low-iron solar glass on the front; rear is glass too (glass-glass is bifacial and a tighter moisture boundary than glass-backsheet)
- **Edge seal:** butyl rubber or polyisobutylene tape around the laminate edge is a common best-case control, intended to slow moisture ingress and isolate cell-level vs encapsulant-level failure modes
- **Interconnection:** ribbon (5–9 BB Cu ribbon, often with ECA at SHJ) or multi-wire (SmartWire) — the same interconnect choices as full-size modules, scaled down

## Common pitfalls

- [[failure-modes/Cu-finger-corrosion-encapsulant]] — primary failure mode probed by this testbed
- [[failure-modes/Cu-finger-oxidation-damp-heat]] — surface-Cu redox tracked by EL imaging and electron-microscopy cross-sections
- [[failure-modes/Cu-out-diffusion-through-cap-stack]] — Karas 2022 documents this on EVA-encapsulated mini-modules, calling for SIMS at staged DH checkpoints
- [[failure-modes/ECA-discoloration-after-DH]] — interconnect adhesive yellowing in SHJ mini-modules
- [[failure-modes/EVA-acetic-acid-corrosion]] — EVA-arm worst-case driver
- [[failure-modes/finger-adhesion-loss-after-DH]] — visible as EL-dark fingers on aged mini-modules
- [[failure-modes/lateral-Cu-edge-migration]] — at the laminate edge where moisture concentrates first

## Citing sources

- [[sources/2019-karas-damp-heat-degradation-shj-cu]] — early DH degradation study, plated Cu SHJ mini-modules
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — SunDrive ARENA mini-module DH demonstrator
- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — Cu out-diffusion through cap stack, on mini-modules with EVA / POE arms
- [[sources/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — CSEM stability study
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — extended-aging follow-up
- [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — Ag→Cu transition validated in mini-module form
