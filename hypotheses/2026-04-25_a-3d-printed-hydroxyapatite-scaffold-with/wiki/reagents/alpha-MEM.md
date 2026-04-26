---
type: reagent
slug: alpha-MEM
aliases: [α-MEM, MEM Alpha, alpha minimum essential medium, αMEM]
cas: "n/a (mixture)"
formula: "modified Eagle's medium with non-essential amino acids, ribo/deoxyribonucleosides, lipoic acid"
suppliers:
  - name: Thermo Fisher (Gibco)
    catalog: "12561-056 (with nucleosides), 12000022 (powder)"
  - name: Sigma-Aldrich (Merck)
    catalog: "M4526, M0894"
  - name: Lonza
    catalog: "BE12-169F"
storage: 2–8 °C, light-protected; aliquot for long-term
hazards: low (phenol-red dye is mild irritant)
known_failure_modes: []
sources: [2024-wang, 2025-de-carvalho]
tags: [cell-culture, basal-medium, osteoblast]
created: 2026-04-25
updated: 2026-04-25
---

# Alpha minimum essential medium (α-MEM)

Modified MEM containing non-essential amino acids, vitamins (including vitamin B12 and biotin), nucleosides (deoxyribo- and ribonucleosides), and lipoic acid. The standard basal medium for osteoblast and MC3T3-E1 culture; supports both proliferation and osteogenic differentiation when supplemented appropriately.

## Properties

- **Composition:** MEM base + non-essential amino acids + nucleosides + lipoic acid; phenol-red pH indicator.
- **Glucose:** 5.5 mM (low) by default; high-glucose variants exist.
- **pH buffer:** sodium bicarbonate; requires 5% CO₂ atmosphere.

## Common uses in this hypothesis space

- **Default medium for MC3T3-E1** (the canonical mouse pre-osteoblast cell line).
- **hBMSC osteogenic differentiation** with [[../reagents/dexamethasone]] + [[../reagents/L-ascorbic-acid-2-phosphate]] + [[../reagents/beta-glycerophosphate]] supplements.
- Used in [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] and [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]].

## Suppliers / catalog

| Supplier | Catalog | Notes |
|---|---|---|
| Gibco | 12561-056 | with nucleosides, ready-to-use |
| Gibco | 12000022 | powder, for in-house preparation |
| Sigma | M4526 | liquid |
| Lonza | BE12-169F | liquid |

## Alternatives

- [[../reagents/DMEM]] — Dulbecco's modified Eagle's medium; richer in amino acids; more common for many other cell types but not the default for MC3T3-E1.

## Gotchas / things to watch for

- Phenol red is a weak estrogen mimic — use phenol-red-free for steroid / hormone studies.
- Light-degrades vitamins (riboflavin); store dark.
- L-glutamine is unstable; supplement fresh or use GlutaMAX equivalent.

## Sources

- [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] — α-MEM for cell culture on CDHA scaffolds.
- [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] — α-MEM for hBMSC osteogenic culture on CaP scaffolds.
