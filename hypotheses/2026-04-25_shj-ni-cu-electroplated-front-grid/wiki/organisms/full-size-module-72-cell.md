---
type: organism
slug: full-size-module-72-cell
organism_type: module
source: industry-standard PV module format (utility-scale)
external_id: 72-cell c-Si module (IEC 61215 / IEC 61730 reference format)
characteristics:
  - 72 cells in a 6 × 12 arrangement, the utility-scale c-Si standard format from roughly 2015 onward
  - laminate ~2.0 m × 1.0 m, ~22–28 kg; power class ~330–450 W (M2 / M6 era), increasing with M10/G12 cells
  - reference format for IEC 61215 / IEC 61730 module qualification at utility-class power
  - dominant utility format for SHJ modules in current ITRPV / IEA-PVPS / Fraunhofer ISE roadmap data
  - relevant here as the field-deployed format for plated-Cu SHJ modules at utility scale
known_failure_modes: [Cu-finger-corrosion-encapsulant, Cu-finger-oxidation-damp-heat, EVA-acetic-acid-corrosion, finger-adhesion-loss-after-DH, silver-supply-bottleneck]
sources: [2014-nrel-pv-module-qualification-plus, 2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2024-iea-pvps-trends-pv-applications, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj]
tags: [module, full-size, 72-cell, IEC-61215, utility-scale]
created: 2026-04-26
updated: 2026-04-26
---

# Full-size module, 72-cell

**Slug:** `organisms/full-size-module-72-cell` · **Type:** organism (substrate / device under test)

## What it is

The 72-cell c-Si PV module — 72 cells in a 6 × 12 arrangement — is the utility-scale standard format that took over from 60-cell modules from roughly 2015 onward. It is the dominant utility-scale format in IEA-PVPS market data and Fraunhofer ISE PV-roadmap reporting. In this hypothesis it represents the production-scale target laminate for plated-Cu SHJ modules: any cell-level intervention has to survive the longer current paths, the larger thermal-mechanical stress envelope, and the larger encapsulant-Cu interface area of a 72-cell module.

## Geometry / format

- 72 cells in a 6 × 12 grid; cells M2 / M6 (older) and M10 / G12 (current SHJ utility production)
- Laminate dimensions: ~2.0 m × 1.0 m (legacy M2/M6), larger for M10/G12; ~22–28 kg
- Power class: ~330–450 W at M2/M6 SHJ; larger with M10/G12 (utility modules can reach 600+ W with G12)
- IEC 61215 / IEC 61730 type-test reference format at utility class
- Industry adoption: dominant utility format from ~2015 onward; the field-relevant module geometry against which 1000 h DH and TC200 results are extrapolated

## Construction (where relevant)

- **Encapsulant:** EVA historically; POE / EPE for n-type SHJ Cu-metallized cells (Fraunhofer ISE 2025 pathway)
- **Front glass:** 3.2 mm tempered low-iron solar glass; anti-reflection coated
- **Back layer:** polymer backsheet (TPT/TPE) for monofacial; glass-glass for bifacial SHJ
- **Interconnection:** multibusbar Cu ribbon (typically 9–18 BB at M10/G12); ECA-bonded at SHJ to respect the ≤200 °C process budget
- **Edge frame and junction box:** as for 60-cell modules, scaled

## Common pitfalls

- [[failure-modes/Cu-finger-corrosion-encapsulant]] — larger interface area than 60-cell, higher cumulative corrosion exposure
- [[failure-modes/Cu-finger-oxidation-damp-heat]] — more total Cu surface in the laminate
- [[failure-modes/EVA-acetic-acid-corrosion]] — historically the dominant utility-module corrosion pathway; pushes the SHJ Cu transition to POE
- [[failure-modes/finger-adhesion-loss-after-DH]] — long fingers + thermal-mechanical cycling at utility-class temperature swings
- [[failure-modes/silver-supply-bottleneck]] — the per-W Ag burden at 72-cell utility scale is what drives the cost case for Cu metallization

## Citing sources

- [[sources/2014-nrel-pv-module-qualification-plus]] — IEC 61215 utility-class module qualification reference
- [[sources/2018-pv-international-metallization-shj]] — SHJ 72-cell utility-scale metallization context
- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — bifacial 72-cell SHJ interconnection
- [[sources/2024-iea-pvps-trends-pv-applications]] — IEA-PVPS market data, 72-cell utility dominance
- [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — Ag→Cu transition pathway for utility-scale 72-cell SHJ modules
