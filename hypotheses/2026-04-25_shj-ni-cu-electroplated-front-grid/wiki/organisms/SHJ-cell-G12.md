---
type: organism
slug: SHJ-cell-G12
organism_type: cell
external_id: G12 (210×210 mm pseudo-square)
characteristics:
  - 210×210 mm pseudo-square; ~441 cm² active area
  - n-type Cz-Si, 130 µm typical (Risen mainstream; 100 µm in R&D at Huasun)
  - Same SHJ a-Si:H + ITO stack as M6/M10 — area scaled, electrical headroom challenged
  - Half-cut into ~M10-class halves for current handling in modules
  - Largest current-production format; high per-cell current creates I²R and busbar-thermal load
  - Used in 132-half-cell Risen Hyper-ion module; Huasun Phase-2 (2 GW) fab format
known_failure_modes: [a-Si-H-passivation-degradation, FF-degradation-contact-resistance, Cu-finger-oxidation-damp-heat, finger-adhesion-loss-after-DH, Jsc-loss-from-cap-stack-shading]
sources: [2022-arena-sundrive-copper-metallisation-demonstration, 2023-taiyangnews-heterojunction-technology-report, 2024-itrpv-15th-edition-roadmap, 2024-nrel-getting-ahead-of-curve-pv-assessment, 2024-siliconpv-novel-shj-metallization-architectures]
tags: [SHJ, G12, cell, 210mm, n-type, ITO, a-Si-H, large-area]
---

# SHJ cell — G12 format (210×210 mm)

## What it is
Silicon-heterojunction solar cell on a 210×210 mm pseudo-square n-type Cz-Si wafer — the largest standard SHJ format. G12 SHJ is the basis of the highest-power "G12" module classes (≥600 W) and is the substrate on which the AgCu / pure-Cu paste production-scale economics are explicitly tracked.

## Standard dimensions / spec
- Wafer: 210×210 mm pseudo-square, ~441 cm² active area.
- Thickness: 130 µm mainstream (Risen); 100 µm in Huasun R&D; ITRPV ≥G12 IBC trajectory toward 130 µm by 2034.
- Stack: standard SHJ a-Si:H + ITO (or low-In TCO) both faces.
- Per-cell short-circuit current ≈ 17–18 A — large; almost always half-cut to manage I²R.
- Production Ag consumption baseline: ~25.7 mg/W on G12 SHJ (AMAT 2024) → target ~10 mg/W with AgCu.
- 18 BB and busbarless layouts dominant; finger pitch closer than M6/M10 to manage current.

## Common pitfalls / handling notes
- Largest format → tightest finger / busbar resistance budget; line resistance ≤0.5 Ω/cm essentially mandatory, achievable only by Cu plating or thick Cu paste ([[2018-pv-international-metallization-shj]] simulation).
- Cell cutting / half-cut steps multiply edge area — increases damp-heat moisture-ingress vulnerability at module level.
- Module-level testing typically uses half-cut G12 (132 half-cell module) rather than full G12 cells.
- Same a-Si:H 280 °C metallization ceiling and ITO etch-back constraints as M6/M10.
- Large wafer + thin (≤130 µm) wafer combination raises wafer breakage risk in handling — relevant to plating-line throughput.

## Failure modes commonly associated
- `[[../failure-modes/a-Si-H-passivation-degradation]]` — identical SHJ constraint.
- `[[../failure-modes/FF-degradation-contact-resistance]]` — large-area exposes any ρc deviation more harshly.
- `[[../failure-modes/Cu-finger-oxidation-damp-heat]]` — pure-Cu paste reliability concern.
- `[[../failure-modes/finger-adhesion-loss-after-DH]]` — long fingers / many busbars increase total adhesion-failure surface.
- `[[../failure-modes/Jsc-loss-from-cap-stack-shading]]` — fine-finger / busbarless layouts essential to manage shadowing.

## Sources
- `[[2022-arena-sundrive-copper-metallisation-demonstration]]` — half-cut M12/G12 cells used in SunDrive plated-Cu prototype line.
- `[[2023-taiyangnews-heterojunction-technology-report]]` — Huasun Phase-2 G12 SHJ fab; Risen Hyper-ion 132-cell G12 module.
- `[[2024-itrpv-15th-edition-roadmap]]` — G12 tracked alongside M10 as primary SHJ format; thickness and busbar trends.
- `[[2024-nrel-getting-ahead-of-curve-pv-assessment]]` — projected utility-scale SHJ cell size; reliability assessment context.
- `[[2024-siliconpv-novel-shj-metallization-architectures]]` — 25.7 mg/W G12 SHJ Ag-consumption baseline; AgCu paste scaling argument.
