---
type: reagent
slug: PicoGreen
aliases: [Quant-iT PicoGreen, PicoGreen dsDNA reagent]
cas: "n/a (proprietary cyanine dye)"
formula: "proprietary; cyanine class"
suppliers:
  - name: Thermo Fisher (Invitrogen)
    catalog: "P11496"
    grade: "Quant-iT PicoGreen dsDNA Assay Kit, 10 × 100 µL"
  - name: Thermo Fisher (Invitrogen)
    catalog: "P7589"
    grade: "PicoGreen reagent, larger format"
storage: ≤ –20 °C, light-protected (cyanine dyes are photolabile)
hazards: medium (DNA-binding dye; treat as potentially mutagenic; standard PPE)
known_failure_modes: [HA-autofluorescence-confounds-livedead, incomplete-cell-lysis-3d-scaffold-picogreen, edge-effect-in-scaffold-cell-seeding]
sources: [thermo-picogreen-p11496, 2025-de-carvalho]
tags: [fluorescent-dye, dsDNA-quantification, proliferation-assay, central-to-hypothesis]
created: 2026-04-25
updated: 2026-04-25
---

# PicoGreen

Proprietary cyanine fluorescent dye that selectively binds double-stranded DNA in the presence of ssDNA, RNA, and free nucleotides. The de-facto standard for total dsDNA quantification in cell-lysed scaffold samples — and the **specified primary readout** for the day-14 proliferation endpoint of this hypothesis.

## Properties

- **Format:** Quant-iT kit P11496 (10 × 100 µL) sufficient for ~20,000 standard 200 µL reactions.
- **Linear range:** ~25 pg/mL to 1 µg/mL dsDNA.
- **Excitation / emission:** ~480 nm / ~520 nm (FITC channel).
- **Selectivity:** dsDNA only; does not detect ssDNA, RNA, or free nucleotides at the 1:200 working dilution.

## Common uses in this hypothesis space

- Primary proliferation readout — dsDNA per scaffold at days 1, 4, 7, 14, 21.
- Pair with metabolic assay ([[../reagents/alamarBlue]] or [[../reagents/MTS]] / [[../reagents/MTT]]) for orthogonal proliferation confirmation.

## Suppliers / catalog

| Supplier | Catalog | Notes |
|---|---|---|
| Thermo Fisher | P11496 | Quant-iT kit, most common |
| Thermo Fisher | P7589 | reagent only, larger format |

## Alternatives

- Hoechst 33258 — older dsDNA dye; less selective.
- CyQuant (Thermo) — alternative dsDNA assay.
- DAPI — staining for imaging; not typically a quantitative DNA reagent.

## Gotchas / things to watch for

- [[../failure-modes/HA-autofluorescence-confounds-livedead]] — sintered HA scaffolds scatter and weakly autofluoresce at 480/520 nm; **always run scaffold-only (no-cell) blanks** per scaffold geometry and pore size, and subtract.
- [[../failure-modes/incomplete-cell-lysis-3d-scaffold-picogreen]] — the #1 source of false-low PicoGreen reads in 3D scaffolds. Cells in deep pores resist freeze-thaw lysis. Use proteinase-K + sonication, or direct chaotropic lysis (e.g. Qiagen ATL/AL buffer), and validate by section-by-section recovery.
- [[../failure-modes/edge-effect-in-scaffold-cell-seeding]] — PicoGreen reports total scaffold dsDNA, not spatial distribution; combine with [[../reagents/DAPI]] imaging or section-by-section sampling for any "uniform seeding" claim.
- Calf-thymus DNA (kit-supplied standard) → "cell number" requires an empirical pg-DNA-per-cell coefficient (~6–7 pg/cell for diploid mammalian cells, but cell-cycle-dependent — S/G2 cells contain up to 12 pg). Don't report "cell number" without specifying the conversion.
- Photolabile: protect from light during all steps.

## Sources

- [[../sources/thermo-picogreen-p11496]] — primary catalog source with full property data.
- [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] — PicoGreen used for hBMSC dsDNA on CaP scaffolds.
