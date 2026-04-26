---
type: reagent
slug: multibusbar-Cu-ribbon
aliases: [MBB Cu ribbon, multi-busbar interconnect, round Cu wire, SmartWire]
cas: ""
suppliers:
  - name: Ulbrich
    catalog: "Solar PV Ribbon (round + rectangular Cu)"
    grade: SnAg-coated Cu, 0.2–0.3 mm round
    url: https://www.ulbrich.com/solar-pv-ribbon
  - name: Hitachi Metals / Proterial
    catalog: "PV Cu ribbon"
    grade: solar-grade
    url: https://www.proterial.com
  - name: Schlenk
    catalog: "Solar PV interconnect ribbon"
    grade: round and rectangular
    url: https://www.schlenk.com
storage: ambient; dry; protect from oxidation
hazards: low — Cu ribbon with SnAg coating; standard handling
known_failure_modes: [finger-adhesion-loss-after-DH, Cu-finger-corrosion-encapsulant]
sources: [2014-fraunhofer-peel-testing-ribbons-solar-cells, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-taiyangnews-heterojunction-technology-report, 2024-lachowicz-cu-plated-shj-aging-mini-modules]
tags: [interconnect, Cu-ribbon, multibusbar, MBB, stringing, SmartWire]
created: 2026-04-26
updated: 2026-04-26
---

# Multibusbar Cu ribbon (MBB)

**Slug:** `reagents/multibusbar-Cu-ribbon` · **Type:** reagent

## What it is

Multibusbar (MBB) Cu ribbon is the round or rectangular Sn(Ag)-coated Cu wire used to interconnect cells in a string. MBB designs use 9–18 narrow ribbons per cell (vs 3–5 for legacy busbar designs), shortening the in-finger current path and allowing finer / shorter fingers — directly compatible with the fine-line plated-Cu grid the hypothesis targets.

## Common uses (in this corpus)

MBB Cu ribbon is the **canonical interconnect reagent** for SHJ modules in this corpus. Lachowicz 2023/2024 documents CSEM SHJ mini-modules built with MBB + ECA stringing; TaiyangNews 2023 reports the bifacial SHJ industry has converged on MBB as the default. The Fraunhofer 2014 peel-test paper sets the canonical mechanical-test methodology for ribbon-to-cell adhesion. For plated-Cu cells, MBB ribbon bonded with [[reagents/electrically-conductive-adhesive-ECA]] is the SHJ-compatible alternative to soldered ribbons.

## Properties / specifications

- Diameter / cross-section: 0.2–0.3 mm round (MBB / SmartWire) or 0.25 × 1.0 mm rectangular (legacy busbar variants).
- Core: drawn Cu wire, ~99.9 % purity, ~1.7 µΩ·cm bulk resistivity.
- Coating: SnAg (typical: Sn3.5Ag eutectic) or PbSn (legacy); coating thickness ~5–20 µm.
- Tensile yield: 70–110 MPa annealed Cu; chosen for compliance with cell during thermal cycling.
- Bonding: solder reflow (~230 °C — incompatible with SHJ a-Si:H thermal budget at long dwell) or ECA cure (~150–180 °C, SHJ-compatible).
- Number of ribbons per cell: 9–18 for MBB (current generation 12–15 typical).
- Peel-strength target: ≥1 N/mm per IEC 62788-1-2 / Fraunhofer protocol.

## Suppliers

- Ulbrich — Solar PV Ribbon (round + rectangular Cu); URL https://www.ulbrich.com/solar-pv-ribbon
- Hitachi Metals / Proterial — PV Cu ribbon; URL https://www.proterial.com
- Schlenk — solar PV interconnect ribbon; URL https://www.schlenk.com
- Luvata, Wieland — additional Cu-ribbon vendors.

## Alternatives

- Smart-wire / multi-wire integrated foils (e.g. SmartWire Connection Technology, originally by Meyer Burger) — uses many fine wires embedded in a polymer film.
- Conductive backsheet (shingle / tile architectures) — different stringing paradigm.

## Gotchas / failure modes

- [[failure-modes/finger-adhesion-loss-after-DH]] — ribbon-to-finger bond is the critical mechanical link; degrades under DH if ECA hydrolysis / solder fatigue / Cu-finger corrosion progresses.
- [[failure-modes/Cu-finger-corrosion-encapsulant]] — ribbon coating + finger metal create a galvanic couple under encapsulant moisture; corrosion at the bond zone is a known DH failure mode.

## Citing sources

- [[sources/2014-fraunhofer-peel-testing-ribbons-solar-cells]] — canonical peel-test methodology for ribbon-cell adhesion.
- [[sources/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — CSEM SHJ mini-module with MBB Cu ribbon + ECA.
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — extended aging with MBB interconnect.
- [[sources/2023-taiyangnews-heterojunction-technology-report]] — industry HJT report; MBB convergence.
