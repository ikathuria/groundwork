---
type: reagent
slug: alamarBlue
aliases: [resazurin, AlamarBlue, alamarBlue HS]
cas: 550-82-3
formula: C12H7NO4
molecular_weight: 229.19
suppliers:
  - name: Thermo Fisher (Invitrogen)
    catalog: "DAL1025 (10 × 25 mL ready-to-use), A50100 (alamarBlue HS)"
  - name: Sigma-Aldrich (Merck)
    catalog: "R7017 (resazurin sodium)"
storage: 4 °C, light-protected; ≤ –20 °C long-term
hazards: low
known_failure_modes: [HA-autofluorescence-confounds-livedead]
sources: [2012-amini, 2015-do, 2017-gao, 2016-murphy, 2025-qi]
tags: [proliferation-assay, metabolic-assay, fluorescent-readout, central-to-hypothesis]
created: 2026-04-25
updated: 2026-04-25
---

# alamarBlue (resazurin)

Resazurin-based metabolic activity assay. Live cells reduce blue, non-fluorescent resazurin to pink, fluorescent resorufin in proportion to their metabolic activity. Non-destructive — supernatant can be assayed and the same scaffolds returned to culture for time-course measurements.

## Properties

- **CAS:** 550-82-3 (resazurin sodium salt)
- **Excitation / emission of resorufin:** ~560 / ~590 nm
- **Working concentration:** 10% (v/v) of medium for 1–4 h at 37 °C.

## Common uses in this hypothesis space

- Non-destructive proliferation / viability time course on the same scaffolds.
- Pair with destructive [[../reagents/PicoGreen]] endpoint for orthogonal confirmation.

## Suppliers / catalog

| Supplier | Catalog | Notes |
|---|---|---|
| Invitrogen | DAL1025 | ready-to-use |
| Invitrogen | A50100 | alamarBlue HS (high-sensitivity) |
| Sigma | R7017 | resazurin sodium for in-house |

## Alternatives

- [[../reagents/MTT]], [[../reagents/MTS]] — tetrazolium-salt analogues; destructive.
- WST-1, WST-8 (CCK-8) — water-soluble tetrazolium variants.

## Gotchas / things to watch for

- [[../failure-modes/HA-autofluorescence-confounds-livedead]] — HA scaffold autofluorescence at 560/590 nm overlaps resorufin; run no-cell scaffold blanks.
- Saturating reactions (high cell density, long incubation) lose linearity — fully reduced resorufin can be further reduced to non-fluorescent dihydroresorufin.
- Phenol-red interferes with absorbance reads; use fluorescence reads on phenol-red media.
- Different cell types have different resazurin-reduction rates; metabolic activity ≠ exact cell number — calibrate vs PicoGreen.

## Sources

- [[../sources/2012-amini-bone-tissue-engineering-recent-advances]], [[../sources/2015-do-3d-printing-of-scaffolds-for-tissue-rege]], [[../sources/2017-gao-bone-biomaterials-and-interactions-with]], [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]] — broad TE reviews using alamarBlue.
- [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]] — alamarBlue on bioceramic scaffolds.
