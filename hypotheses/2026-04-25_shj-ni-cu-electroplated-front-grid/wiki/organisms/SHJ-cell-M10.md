---
type: organism
slug: SHJ-cell-M10
organism_type: cell
source: industry SHJ mass production (LONGi, Tongwei, Huasun, Risen, Aiko, Meyer Burger, Enel 3SUN)
external_id: ITRPV M10 (182 mm pseudo-square)
characteristics:
  - silicon heterojunction (SHJ) device on n-type CZ c-Si wafer in M10 wafer format
  - 182 mm × 182 mm pseudo-square, ~330 cm² wafer area, ~315–320 cm² active cell area
  - dominant industry SHJ wafer size from 2022 onward (per ITRPV 2024 and TaiyangNews HJT Report)
  - intrinsic + doped a-Si:H passivation stack and ITO TCO, identical chemistry to M6
  - typical Isc ~12.0–12.5 A; cell power ~7.6–8.5 W at 23.5–25 % efficiency
  - the bridging format between R&D-favoured M6 and the very-large G12; CSEM 2023/2024 mini-module aging studies use M10 cells
known_failure_modes: [a-Si-H-passivation-degradation, Cu-diffusion-into-c-Si, Cu-finger-corrosion-encapsulant, Cu-finger-oxidation-damp-heat, FF-degradation-contact-resistance, finger-adhesion-loss-after-DH, Jsc-loss-from-cap-stack-shading, Ni-barrier-pinholes, silver-supply-bottleneck]
sources: [2021-goldschmidt-tech-learning-tw-pv, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-taiyangnews-heterojunction-technology-report, 2024-fraunhoferise-photovoltaics-report, 2024-iea-pvps-trends-pv-applications, 2024-itrpv-15th-edition-roadmap, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-nrel-getting-ahead-of-curve-pv-assessment, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, atotech-solar-industry-overview, notion-systems-solar-inkjet-overview]
tags: [SHJ, cell, M10, n-type, heterojunction, industry-scale]
created: 2026-04-26
updated: 2026-04-26
---

# SHJ cell, M10 (182 mm) format

**Slug:** `organisms/SHJ-cell-M10` · **Type:** organism (substrate / device under test)

## What it is

A silicon heterojunction (SHJ) cell on a 182 mm pseudo-square n-type c-Si wafer. M10 is the dominant industry-mass-production SHJ format from 2022 onward, picked up by LONGi, Tongwei, Huasun, Risen, Aiko, Meyer Burger, and Enel 3SUN among others (per ITRPV 15th Edition 2024 and TaiyangNews HJT Report 2023). It is also the bridging format between research-favoured M6 and the still-larger G12, and is the cell size used in the most recent CSEM Cu-plated SHJ mini-module aging studies (Lachowicz 2023/2024).

## Geometry / format

- Wafer: 182 mm × 182 mm pseudo-square, ~247 mm diagonal
- Wafer area ≈ 330 cm²; active cell area ≈ 315–320 cm² (chamfered)
- Wafer thickness: 130–160 µm for SHJ
- Front grid: 9–18 busbars (multibusbar / SmartWire); finger pitch 0.8–1.2 mm
- Power class: ~7.6–8.5 W at 23.5–25 % efficiency
- Short-circuit current Isc: ~12.0–12.5 A — current scaling drives finger-design pressure (more / wider fingers) and thus harder Jsc–FF trade-offs
- Industry adoption: ~2021 first commercial SHJ M10 lines; dominant SHJ format from ~2022 (per ITRPV 2024)

## Construction (where relevant)

- a-Si:H passivation and TCO chemistry identical to M6; only format changes
- M10 is the size at which copper metallization economics become most compelling: per-cell Ag consumption scales with finger length and current handling, so M10/G12 cost-out leverage is larger than on M6
- M10 cells in mini-modules with POE encapsulant are the canonical CSEM accelerated-DH testbed

## Common pitfalls

- [[failure-modes/a-Si-H-passivation-degradation]] — process-budget constraints identical to M6
- [[failure-modes/Cu-diffusion-into-c-Si]] — barrier requirements identical
- [[failure-modes/Cu-finger-oxidation-damp-heat]] — longer finger length amplifies Cu surface area exposed to encapsulant
- [[failure-modes/Cu-finger-corrosion-encapsulant]] — same chemistry, more finger length to corrode
- [[failure-modes/FF-degradation-contact-resistance]] — higher current per cell makes ρc tolerance tighter
- [[failure-modes/finger-adhesion-loss-after-DH]] — longer fingers stress adhesion more during thermal cycling
- [[failure-modes/Jsc-loss-from-cap-stack-shading]] — Jsc loss scales with finger width × number of fingers; M10 designs already push 9–18 BB to spread current
- [[failure-modes/Ni-barrier-pinholes]] — barrier-thickness target is geometry-independent
- [[failure-modes/silver-supply-bottleneck]] — the per-W Ag burden of M10 SHJ is what makes the Ag→Cu transition urgent (ITRPV 2024)

## Citing sources

- [[sources/2021-goldschmidt-tech-learning-tw-pv]] — TW PV roadmap through M10
- [[sources/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — CSEM M10 mini-module aging
- [[sources/2023-taiyangnews-heterojunction-technology-report]] — industry M10 SHJ adoption snapshot
- [[sources/2024-fraunhoferise-photovoltaics-report]] — Fraunhofer ISE annual PV report, M10 baseline
- [[sources/2024-iea-pvps-trends-pv-applications]] — IEA PVPS market data, M10 dominance
- [[sources/2024-itrpv-15th-edition-roadmap]] — ITRPV M10/G12 wafer-format roadmap
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — CSEM extended aging, M10 plated Cu
- [[sources/2024-nrel-getting-ahead-of-curve-pv-assessment]] — NREL reliability analysis, M10 cells
- [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — Ag→Cu transition on M10
- [[sources/atotech-solar-industry-overview]] — supplier view, M10 SHJ economics
- [[sources/notion-systems-solar-inkjet-overview]] — inkjet patterning on M10 SHJ
