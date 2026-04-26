---
type: source
id: thermo-picogreen-p11496
source_type: catalog
title: "Thermo Fisher Quant-iT PicoGreen dsDNA Assay Kit (catalog P11496)"
authors: ["Thermo Fisher Scientific (Invitrogen)"]
year: 2026
doi: ""
url: https://www.thermofisher.com/order/catalog/product/P11496
raw_path: raw/catalogs/thermo-picogreen-p11496.html
tags: [catalog, thermo-fisher, PicoGreen, Quant-iT, dsDNA-quantification, fluorescence-assay, cell-number-readout]
---

# Summary

Thermo Fisher / Invitrogen catalog page for **Quant-iT PicoGreen dsDNA Assay Kit and dsDNA Reagents**, catalog number **P11496** (10 × 100 µL kit format). PicoGreen is a fluorescent cyanine dye that selectively binds double-stranded DNA in the presence of ssDNA, RNA, and free nucleotides; the kit is the de-facto standard for quantifying total dsDNA content in cell-lysed scaffold samples and is the **specified readout** for cell number / proliferation in this hypothesis (alongside [[../methods/alamarBlue-proliferation-assay]] / [[../methods/CCK-8-assay]]). Corresponds to reagent [[../reagents/PicoGreen]] and method [[../methods/PicoGreen-DNA-quantification]].

# Properties

- Catalog: **P11496**
- Format: 10 × 100 µL kit (sufficient for ~20,000 standard 200 µL assay reactions per kit per Thermo specifications)
- Application: dsDNA quantification (linear range ~25 pg/mL to 1 µg/mL)
- Selectivity: dsDNA only — does not detect ssDNA, RNA, or free nucleotides at the working dilution
- Excitation/Emission: ~480 nm / ~520 nm (FITC channel)

# Suppliers

- Thermo Fisher Scientific (Invitrogen) — primary; this URL.
- The active reagent is also sold as standalone PicoGreen dsDNA Reagent (Thermo P7589, larger format).

# Hazards / Storage

- Storage: ≤ –20 °C, light-protected (cyanine dyes are photolabile).
- Hazard: dye intercalates DNA — handle with standard PPE; not classified as mutagenic in the kit formulation but treat as such.
- Working solution: dilute 1:200 in TE buffer; use within hours.

# Failure modes / pitfalls

- **HA scaffold autofluorescence overlaps PicoGreen emission** — calcium-phosphate scaffolds (especially porous HA) can scatter and weakly fluoresce in the 480/520 nm window. Always run scaffold-only (no-cell) blanks per scaffold geometry; subtract.
- **Incomplete cell lysis** in 3D scaffolds is the #1 source of false-low PicoGreen reads — cells in deep pores may not be lysed by standard freeze-thaw; use proteinase-K + sonication or direct chaotropic lysis. This is a known issue for 3D bone scaffolds.
- [[../failure-modes/edge-effect-in-scaffold-cell-seeding]] — PicoGreen reports total scaffold dsDNA, not spatial distribution; combine with DAPI imaging or section-by-section sampling.
- [[../failure-modes/HA-autofluorescence-confounds-livedead]] — applies analogously to PicoGreen background, not just live/dead.
- Calf-thymus DNA (kit-supplied standard) MW conversion to "cell number" requires an empirical pg-DNA-per-cell coefficient (~6–7 pg/cell for diploid mammalian cells, but cell-cycle-position-dependent — S/G2 cells contain up to 12 pg). Don't report "cell number" without specifying the conversion factor.
