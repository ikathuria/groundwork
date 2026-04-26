---
type: reagent
slug: MTS
aliases: [MTS tetrazolium, "(3-(4,5-dimethylthiazol-2-yl)-5-(3-carboxymethoxyphenyl)-2-(4-sulfophenyl)-2H-tetrazolium)", CellTiter 96 AQueous]
cas: 138169-43-4
formula: C22H16N5NaO5S
molecular_weight: 477.45
suppliers:
  - name: Promega
    catalog: "G3580 (CellTiter 96 AQueous One Solution)"
storage: ≤ –20 °C, light-protected
hazards: low
known_failure_modes: [HA-autofluorescence-confounds-livedead]
sources: [2026-thammarakcharoen, 2025-conoscenti]
tags: [proliferation-assay, metabolic-assay, tetrazolium]
created: 2026-04-25
updated: 2026-04-25
---

# MTS

Tetrazolium-salt metabolic-activity assay. Mitochondrial dehydrogenases reduce MTS to formazan; the formazan is water-soluble (unlike MTT formazan), so no solubilisation step is required.

## Properties

- **CAS:** 138169-43-4
- **Read:** absorbance at 490 nm.
- **Working solution:** typically 1:5 in medium.

## Common uses in this hypothesis space

- Proliferation / viability readout on scaffold-cultured cells.
- Used in [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] cytotoxicity panel.

## Suppliers / catalog

| Supplier | Catalog | Notes |
|---|---|---|
| Promega | G3580 | CellTiter 96 AQueous One Solution; most common |

## Alternatives

- [[../reagents/MTT]] — older, requires formazan solubilisation in DMSO.
- [[../reagents/alamarBlue]] — non-destructive.
- WST-8 / CCK-8 — analogous, often more linear at high cell density.

## Gotchas / things to watch for

- [[../failure-modes/HA-autofluorescence-confounds-livedead]] — HA absorbs/scatters at 490 nm; run no-cell scaffold blanks.
- Direct on-scaffold reads can be confounded by particulate HA in the supernatant; centrifuge before read.

## Sources

- [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] — MTS in toxicology panel for 3DPHA.
- [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] — MTS for hBMSC viability on gradient scaffolds.
