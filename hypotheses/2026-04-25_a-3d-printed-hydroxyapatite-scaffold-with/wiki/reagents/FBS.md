---
type: reagent
slug: FBS
aliases: [fetal bovine serum, fetal calf serum, FCS]
cas: "n/a (biological)"
formula: "complex serum mixture"
suppliers:
  - name: Thermo Fisher (Gibco)
    catalog: "10270-106 (qualified), 16000-044 (heat-inactivated)"
  - name: Sigma-Aldrich (Merck)
    catalog: "F2442, F0926"
  - name: HyClone (Cytiva)
    catalog: "SH30070, SH30396"
  - name: Bio-Techne (R&D / R&D Systems)
    catalog: "S11150"
storage: ≤ –20 °C long-term; thaw and aliquot
hazards: low (BSE / TSE risk; use certified low-prion-region origin)
known_failure_modes: []
sources: [2024-wang, 2025-de-carvalho, 2025-conoscenti, 2025-lee]
tags: [cell-culture, serum, supplement]
created: 2026-04-25
updated: 2026-04-25
---

# Fetal bovine serum (FBS)

The standard 10% supplement to basal media for most mammalian cell culture. Provides growth factors, hormones, lipids, and adhesion proteins. Notorious for lot-to-lot variability — the dominant uncontrolled variable in many cell-based scaffold studies.

## Properties

- Typical use concentration: 10% (sometimes 5% for differentiation, 20% for low-density / single-cell expansion).
- **Heat-inactivated:** 56 °C, 30 min; inactivates complement.
- **Charcoal-stripped:** removes steroids; for hormone-dependent studies.

## Common uses in this hypothesis space

- 10% supplement in α-MEM or DMEM for proliferation and differentiation studies.
- Reduced (5%) during osteogenic-induction phases in some protocols.

## Suppliers / catalog

| Supplier | Catalog | Notes |
|---|---|---|
| Gibco | 10270-106 (qualified), 16000-044 (HI) | most common citation |
| Sigma | F2442, F0926 | research |
| HyClone | SH30070 | research / clinical |

## Alternatives

- Defined / serum-free media (e.g., StemPro MSC SFM) — eliminates lot variability but expensive and may not support all cell types.
- Human platelet lysate (hPL) — for clinical-translation MSC work.

## Gotchas / things to watch for

- **Lot-to-lot variation** in growth factors, hormones, and endotoxin can change effect sizes by ≥30%; lock the lot for the entire experiment, especially for the gradient-vs-uniform comparison.
- BSE / TSE certification: prefer FBS from low-incidence regions (NZ, Australia, USA) for translational work.
- Reproducibility: report supplier + lot number in methods.

## Sources

- [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] — FBS in CDHA scaffold cell culture.
- [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] — FBS in hBMSC culture.
- [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] — FBS in gradient scaffold culture.
- [[../sources/2025-lee-pcl-scaffold-with-well-defined-hierarchi]] — FBS in PCL scaffold culture.
