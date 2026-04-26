---
type: reagent
slug: MTT
aliases: [MTT tetrazolium, "3-(4,5-dimethylthiazol-2-yl)-2,5-diphenyltetrazolium bromide", thiazolyl blue]
cas: 298-93-1
formula: C18H16BrN5S
molecular_weight: 414.32
suppliers:
  - name: Sigma-Aldrich (Merck)
    catalog: "M5655, M2128"
  - name: Thermo Fisher
    catalog: "M6494 (Vybrant MTT)"
storage: ≤ 4 °C dry, light-protected
hazards: low
known_failure_modes: [HA-autofluorescence-confounds-livedead]
sources: [2026-thammarakcharoen, 2024-diez-escudero, 2016-murphy]
tags: [proliferation-assay, metabolic-assay, tetrazolium]
created: 2026-04-25
updated: 2026-04-25
---

# MTT

Original tetrazolium proliferation assay. Mitochondrial dehydrogenases reduce yellow MTT to insoluble purple formazan, which must be solubilised (DMSO or acidified isopropanol) before absorbance read at 570 nm.

## Properties

- **CAS:** 298-93-1
- **MW:** 414.32 g/mol
- **Read:** absorbance at 570 nm after solubilisation.

## Common uses in this hypothesis space

- Proliferation / viability on scaffold-cultured cells.
- ISO-10993 cytotoxicity assays use MTT or MTS.

## Suppliers / catalog

| Supplier | Catalog | Notes |
|---|---|---|
| Sigma | M5655, M2128 | research |
| Invitrogen | M6494 | Vybrant kit |

## Alternatives

- [[../reagents/MTS]] — water-soluble formazan, no solubilisation step.
- [[../reagents/alamarBlue]] — non-destructive.

## Gotchas / things to watch for

- [[../failure-modes/HA-autofluorescence-confounds-livedead]] — HA absorbs/scatters at 570 nm; run scaffold blanks.
- Insoluble formazan can stick to scaffold; solubilisation in isopropanol/DMSO must be quantitative.
- Reduces light scattering in 3D scaffolds; carefully separate from substrate before read.

## Sources

- [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] — MTT in 3DPHA toxicology.
- [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]] — MTT for hADSC viability on gradient scaffolds.
- [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]] — MTT in scaffold-cell review.
