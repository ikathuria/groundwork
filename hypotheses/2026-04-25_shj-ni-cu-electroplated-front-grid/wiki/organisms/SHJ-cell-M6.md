---
type: organism
slug: SHJ-cell-M6
organism_type: cell
external_id: M6 (166×166 mm pseudo-square)
characteristics:
  - 166×166 mm pseudo-square; 274.15 cm² active / 274.4 cm² aperture (industry standard for M6 SHJ certification)
  - n-type Cz-Si base wafer, 130–155 µm thickness in production (trending to 100 µm)
  - Symmetric a-Si:H(i)/a-Si:H(n) front and a-Si:H(i)/a-Si:H(p) rear stack with ~80 nm ITO (or low-In TCO) on both faces
  - Bifacial by construction; bifaciality factor ~95–100%
  - Voc up to 742–750 mV (CSEM Lachowicz champion 742.4 mV); Jsc ≈ 39.9 mA/cm²; certified champion η 24.2% (CSEM Cu-plated) up to 26.41% (SunDrive 2022, ISFH)
  - Process-temperature ceiling 200–280 °C set by a-Si:H hydrogen out-diffusion
known_failure_modes: [a-Si-H-passivation-degradation, Cu-finger-oxidation-damp-heat, finger-adhesion-loss-after-DH, FF-degradation-contact-resistance, Jsc-loss-from-cap-stack-shading]
sources: [2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-taiyangnews-heterojunction-technology-report, 2023-tepner-printing-tech-csi-review, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-lorenz-cutting-edge-metallization-shj-fraunhofer, 2024-nrel-best-research-cell-efficiency-chart, 2024-siliconpv-novel-shj-metallization-architectures, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV]
tags: [SHJ, M6, cell, 166mm, n-type, ITO, a-Si-H]
---

# SHJ cell — M6 format (166×166 mm)

## What it is
Silicon-heterojunction solar cell built on a 166×166 mm pseudo-square n-type Cz-Si wafer with symmetric intrinsic + doped a-Si:H passivation/emitter and TCO (typically ITO) on both sides. M6 was the dominant SHJ format from ~2020 through 2023 and is the substrate on which most SHJ Cu-plating records and damp-heat reliability studies relevant to this hypothesis were generated.

## Standard dimensions / spec
- Wafer: 166×166 mm pseudo-square, ~274.15 cm² active area, 165 mm pseudo-square diagonal.
- Wafer thickness: 130–155 µm typical; SHJ leads industry thickness reduction toward 100 µm (ITRPV 2024).
- Front/rear stack: a-Si:H(i, ~5 nm) + a-Si:H(n or p, ~7 nm) + ITO (~80 nm). Low-In ITO and AZO/ITO stacks demonstrated.
- Voc up to 742–750 mV; record cell efficiencies 24.2% (CSEM 9-BB plated-Cu, [[2024-lachowicz-cu-plated-shj-aging-mini-modules]]) → 26.41% (SunDrive plated-Cu, [[2022-arena-sundrive-copper-metallisation-demonstration]]).
- Bifaciality factor ≥0.95 by construction.
- Process budget: ≤200 °C for cell-level metallization; 280 °C / 5 s tolerated; ≥320 °C costs ≥0.5%abs efficiency irreversibly ([[2025-yacouba-shj-silver-free-metallization-progPV]]).

## Common pitfalls / handling notes
- Hydrogen out-diffusion above 280 °C irreversibly degrades a-Si:H passivation — sets the metallization-cure ceiling.
- ITO is fragile to acidic etch-back; H₃PO₄/HNO₃ etch-back checked by SEM in NOBLE preserves ~80 nm ITO ([[2019-hatt-noble-shj-solrrl]]).
- Direct Cu in contact with c-Si is catastrophic (Cu-LID, Cu₃Si); the TCO is the front-side diffusion barrier in SHJ — confirmed by SIMS ([[2025-yacouba-shj-silver-free-metallization-progPV]]).
- Edge handling: half-cut M6 cells lose ~0.30%abs efficiency vs full cells ([[2022-arena-sundrive-copper-metallisation-demonstration]]).
- Sputter damage to a-Si:H: 200 °C / 15 min anneal recovers most damage ([[2019-hatt-noble-shj-solrrl]]).
- 9-BB and 18-BB layouts mainstream; 5/6 BB no longer in production (ITRPV 2024).

## Failure modes commonly associated
- `[[../failure-modes/a-Si-H-passivation-degradation]]` — UV and >280 °C cure attacks the front a-Si:H stack.
- `[[../failure-modes/Cu-finger-oxidation-damp-heat]]` — pure Cu fingers oxidise without a cap.
- `[[../failure-modes/finger-adhesion-loss-after-DH]]` — micro-voids at Cu/Ni-on-TCO and at solder pads observed in damp heat.
- `[[../failure-modes/FF-degradation-contact-resistance]]` — driven by ITO/seed-stack ρc; target ≤2 mΩ·cm² for the hypothesis.
- `[[../failure-modes/Jsc-loss-from-cap-stack-shading]]` — finger width / busbar shadow trade-off; SHJ at 27→15 µm trajectory.

## Sources
- `[[2018-pv-international-metallization-shj]]` — 6" SHJ Ag-paste laydown numbers and Cu-plating routes.
- `[[2018-pv-tech-metallization-interconnection-bifacial-shj]]` — CSEM 24.1% bifacial SHJ benchmark on M6.
- `[[2019-hatt-noble-shj-solrrl]]` — first NOBLE plated-Cu cell on 6" SHJ precursor (6.25 cm² diced).
- `[[2021-hatt-stable-cu-plated-shj-eupvsec]]` — stable Cu-plated SHJ at M6 scale.
- `[[2022-arena-sundrive-copper-metallisation-demonstration]]` — 25.54 / 26.07 / 26.41 % ISFH-certified plated-Cu SHJ M6 records.
- `[[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]]`, `[[2024-lachowicz-cu-plated-shj-aging-mini-modules]]` — 24.2% champion 9-BB M6 SHJ for damp-heat aging study.
- `[[2025-yacouba-shj-silver-free-metallization-progPV]]` — Cu/AgCu paste benchmarks on M2 (close analogue of M6) confirming TCO as Cu diffusion barrier.
- `[[2024-itrpv-15th-edition-roadmap]]`, `[[2023-taiyangnews-heterojunction-technology-report]]` — industry roadmap; M6 superseded by M10 from 2023 onwards but remains the reliability-data anchor.
