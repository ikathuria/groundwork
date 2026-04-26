---
type: organism
slug: SHJ-cell-M10
organism_type: cell
external_id: M10 (182×182 mm pseudo-square)
characteristics:
  - 182×182 mm pseudo-square; ~330 cm² active area; 247 mm pseudo-square diagonal
  - n-type Cz-Si base wafer, 125–150 µm production thickness (target 100 µm by 2034)
  - Symmetric a-Si:H + ITO/AZO TCO; same SHJ stack as M6 with larger area and higher per-cell Isc
  - Industry-dominant SHJ format from 2023 onwards (ITRPV 15th edition baseline)
  - Champion plated-Cu SHJ records 26+% certified at M10 / half-cut M12 scale
  - Module standard width 1134 mm; 700 W+ module class enabled by M10 and rectangular M10R
known_failure_modes: [a-Si-H-passivation-degradation, Cu-finger-oxidation-damp-heat, FF-degradation-contact-resistance, finger-adhesion-loss-after-DH, Jsc-loss-from-cap-stack-shading]
sources: [2022-arena-sundrive-copper-metallisation-demonstration, 2023-taiyangnews-heterojunction-technology-report, 2024-itrpv-15th-edition-roadmap, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-nrel-best-research-cell-efficiency-chart, 2024-nrel-getting-ahead-of-curve-pv-assessment, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj]
tags: [SHJ, M10, cell, 182mm, n-type, ITO, a-Si-H, mainstream]
---

# SHJ cell — M10 format (182×182 mm)

## What it is
Silicon-heterojunction solar cell on a 182×182 mm pseudo-square n-type Cz-Si wafer with symmetric a-Si:H passivation and ITO/low-In-TCO on both faces. M10 became the industry-dominant SHJ wafer format in 2023 and is the format for which ITRPV publishes its silver-laydown roadmap (19 mg/W → 9 mg/W) — directly relevant to the cost target of this hypothesis.

## Standard dimensions / spec
- Wafer: 182×182 mm pseudo-square, ~330 cm² active area.
- Thickness: 125–150 µm in 2023; SHJ trajectory to 100 µm by 2034 ([[2024-itrpv-15th-edition-roadmap]]).
- Stack: a-Si:H(i)/a-Si:H(n or p) + ~80 nm ITO; PVD seed (Cu, Ag, TiW or NOBLE Al/Cu) on top of TCO.
- Silver-paste laydown 2023: ~120 mg/cell on M10 SHJ, target 70 mg/cell with AgCu, fully Ag-free with Cu plating.
- Module standard width 1134 mm; rectangular M10R format enables 700 W+ modules.
- Throughput: PECVD ~7,200 wafers/h (Maxwell), PVD ~7,500 wafers/h (Von Ardenne).

## Common pitfalls / handling notes
- Larger area → higher Isc → finger line-resistance budget tightens; pushes finger count and Cu-fill cross-section.
- Half-cut SHJ M10 used in glass-glass POE bifacial mini-modules and full-size 60/72-cell modules to reduce I²R losses.
- Same a-Si:H 280 °C ceiling as M6; same ITO etch-back caveats.
- GridMaster simulations on M10 show cost-optimal layouts give ~0.4%abs lower η than η-optimal at €1000/kg Ag — defining the economic window for plated Cu ([[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]]).
- Maxwell pilot Cu-plating line (2023) and first production line (2024) target M10 ([[2023-taiyangnews-heterojunction-technology-report]]).

## Failure modes commonly associated
- `[[../failure-modes/a-Si-H-passivation-degradation]]` — same constraint as M6.
- `[[../failure-modes/Cu-finger-oxidation-damp-heat]]` — Cu paste line resistance bench-stable but module-level DH unverified.
- `[[../failure-modes/FF-degradation-contact-resistance]]` — driven harder by larger Isc; ≤2 mΩ·cm² target.
- `[[../failure-modes/finger-adhesion-loss-after-DH]]` — module-perimeter / busbar adhesion under damp heat.
- `[[../failure-modes/Jsc-loss-from-cap-stack-shading]]` — finger-width 27→15 µm trajectory dominates the M10 roadmap.

## Sources
- `[[2024-itrpv-15th-edition-roadmap]]` — 19 mg/W (2023) → 9 mg/W (2034) Ag roadmap defined on M10.
- `[[2023-taiyangnews-heterojunction-technology-report]]` — Maxwell M10 Cu-plating pilot/production roadmap.
- `[[2022-arena-sundrive-copper-metallisation-demonstration]]` — half-cut M12 (M10-class) plated-Cu prototype line >60 cells/h.
- `[[2024-lachowicz-cu-plated-shj-aging-mini-modules]]` — referenced for upcoming PTP Cu-plating experiments at M10.
- `[[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]]` — GridMaster cost simulations on M10 20-wire layout.
- `[[2024-nrel-best-research-cell-efficiency-chart]]` — 27.6–27.8% SHJ records on M10-class wafers.
- `[[2024-nrel-getting-ahead-of-curve-pv-assessment]]` — M10 projected dominant cell size for SHJ; reliability gaps flagged.
