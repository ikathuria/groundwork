---
type: organism
slug: monocrystalline-Si-wafer-n-type
organism_type: wafer
source: commercial wafer suppliers (LONGi, Zhonghuan, GCL, NorSun) for CZ n-type c-Si
external_id: n/a (commodity; specified by ITRPV resistivity 0.5–10 Ω·cm and thickness 130–170 µm for SHJ)
characteristics:
  - phosphorus-doped (n-type) Czochralski-grown monocrystalline silicon wafer
  - the canonical bare substrate for SHJ cell fabrication — chosen for low minority-carrier recombination at the a-Si:H heterointerface and for absence of boron-oxygen LID
  - typical bulk resistivity 0.5–10 Ω·cm; bulk minority-carrier lifetime > 1 ms (often > 5 ms) on as-supplied wafers
  - 130–170 µm thickness for SHJ (thinner than for PERC); pyramidal alkaline texture standard
  - format-agnostic at the wafer-level (M2 / M6 / M10 / G12 are downstream cuts)
  - the bare wafer before any cell-side fabrication; all the SHJ-cell-* organisms in this hypothesis derive from this substrate
known_failure_modes: [Cu-diffusion-into-c-Si, Voc-degradation-Cu-contamination]
sources: [2015-lindroos-cu-lid-aalto-thesis, 2018-electrochemsci-barrier-properties-electroplated-ni, 2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2019-hatt-noble-shj-solrrl, 2023-taiyangnews-heterojunction-technology-report, 2023-tepner-printing-tech-csi-review, 2024-fraunhoferise-photovoltaics-report, 2024-nrel-best-research-cell-efficiency-chart, dupont-solamet-pv21a-tech-sheet, dupont-solamet-pv56s-data-sheet, pvtech-metallization-challenges-cell-manufacturing]
tags: [wafer, n-type, monocrystalline, CZ, substrate, SHJ-precursor]
created: 2026-04-26
updated: 2026-04-26
---

# Monocrystalline n-type Si wafer (CZ)

**Slug:** `organisms/monocrystalline-Si-wafer-n-type` · **Type:** organism (substrate / device under test)

## What it is

A phosphorus-doped, Czochralski-grown monocrystalline silicon wafer — the canonical bare substrate for SHJ cell fabrication. n-type is preferred for SHJ for two complementary reasons: low minority-carrier recombination at the intrinsic-amorphous-silicon heterointerface (n-c-Si has lower defect density at the a-Si:H/c-Si junction than p-c-Si does for typical heterojunction stacks), and absence of the boron-oxygen light-induced degradation (LID) that plagues p-type CZ silicon. n-type CZ is also the substrate for TOPCon and most i-TOPCon variants. It is the upstream organism from which `SHJ-cell-M6`, `SHJ-cell-M10`, and `SHJ-cell-G12` are fabricated.

## Geometry / format

- Bulk resistivity: 0.5–10 Ω·cm typical (per ITRPV); SHJ tends toward the lower end (~1–3 Ω·cm) for Voc / Jsc balance
- Wafer thickness: 130–170 µm for SHJ (thinner than the 170–180 µm of PERC era)
- Surface: alkaline-textured pyramids (random pyramids ~3–7 µm) on the polished CZ wafer
- Bulk minority-carrier lifetime: > 1 ms typical, > 5 ms on best-grade material — the SHJ architecture relies on this and on a-Si:H surface passivation to deliver Voc > 740 mV
- Format-agnostic: M2 / M6 / M10 / G12 cells are cut from the same n-type CZ ingot pulls

## Construction (where relevant)

(Bare wafer; no construction steps until cell fabrication begins.)

## Common pitfalls

- [[failure-modes/Cu-diffusion-into-c-Si]] — Cu has the highest interstitial diffusivity among 3d metals in Si; once in the bulk it forms a mid-gap recombination centre at Ec−0.16 eV that wipes out lifetime
- [[failure-modes/Voc-degradation-Cu-contamination]] — Lindroos 2015 traces Voc loss after plating to ppb-level Cu in the c-Si bulk; n-type CZ Voc sensitivity is exactly why the Ni barrier exists

## Citing sources

- [[sources/2015-lindroos-cu-lid-aalto-thesis]] — Cu LID on n-type CZ wafers
- [[sources/2018-electrochemsci-barrier-properties-electroplated-ni]] — barrier studies on n-type CZ test wafers
- [[sources/2018-pv-international-metallization-shj]] — SHJ metallization framework on n-type CZ
- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — bifacial SHJ on n-type CZ
- [[sources/2018-pvtech-metallization-shj-cells-modules]] — SHJ cells/modules build on n-type CZ
- [[sources/2019-hatt-noble-shj-solrrl]] — NOBLE process on n-type CZ SHJ
- [[sources/2023-taiyangnews-heterojunction-technology-report]] — industry n-type CZ adoption for SHJ
- [[sources/2023-tepner-printing-tech-csi-review]] — printing-tech baseline cells on n-type CZ
- [[sources/2024-fraunhoferise-photovoltaics-report]] — Fraunhofer ISE on n-type CZ trajectory
- [[sources/2024-nrel-best-research-cell-efficiency-chart]] — record-cell substrate context
- [[sources/dupont-solamet-pv21a-tech-sheet]] — paste qualified for n-type CZ SHJ
- [[sources/dupont-solamet-pv56s-data-sheet]] — paste qualified for n-type CZ SHJ
- [[sources/pvtech-metallization-challenges-cell-manufacturing]] — manufacturing-side view on n-type CZ
