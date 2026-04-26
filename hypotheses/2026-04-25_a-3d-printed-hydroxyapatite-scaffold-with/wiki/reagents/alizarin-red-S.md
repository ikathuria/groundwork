---
type: reagent
slug: alizarin-red-S
aliases: [ARS, alizarin red S, sodium alizarin sulfonate, mordant red 3]
cas: 130-22-3
formula: C14H7NaO7S
molecular_weight: 342.26
suppliers:
  - name: Sigma-Aldrich (Merck)
    catalog: "A5533, A3882"
  - name: Thermo Fisher
    catalog: "A11000"
storage: room-temperature, dry, light-protected
hazards: low (irritant)
known_failure_modes: [ARS-binds-residual-scaffold-HA]
sources: [2025-conoscenti, 2022-yang, 2014-polo-corrales, 2016-murphy, protocol-2025-amin, protocol-2025-battistelli, 2008-palmer]
tags: [stain, mineralization-assay, calcium-binding]
created: 2026-04-25
updated: 2026-04-25
---

# Alizarin Red S (ARS)

Anthraquinone dye that chelates calcium ions, used to stain mineralised matrix in osteoblast cultures. Quantitative version: dissolve bound dye in cetylpyridinium chloride and read at 540 nm.

## Properties

- **CAS:** 130-22-3
- **Working solution:** 40 mM in water, pH 4.1–4.3.
- **Read:** A540 after CPC extraction for quantitative.

## Common uses in this hypothesis space

- Endpoint mineralisation stain for osteogenically-differentiated cells.
- Quantitative readout for calcium nodule deposition.

## Suppliers / catalog

| Supplier | Catalog | Notes |
|---|---|---|
| Sigma | A5533, A3882 | research |
| Thermo | A11000 | research |

## Alternatives

- [[../methods/von-kossa-staining]] — silver-nitrate-based mineral stain (phosphate-detecting).
- Calcein — fluorescent calcium binder for live mineralisation imaging.

## Gotchas / things to watch for

- [[../failure-modes/ARS-binds-residual-scaffold-HA]] — ARS binds **any** Ca²⁺-containing surface, including the HA scaffold itself. Cell-deposited mineral cannot be distinguished from substrate background unless: (a) acid-extracted dye is normalised to no-cell scaffold blanks per geometry; (b) only the cell-attached mineral nodules are counted by image analysis; (c) the scaffold is dissolved away for solution-phase read. Cited explicitly in [[../sources/protocol-2025-battistelli-a-quantitative-spectrophotometric-assay]].
- pH sensitivity — staining solution must be pH 4.1–4.3 for selective Ca binding.

## Sources

- [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] — ARS on gradient scaffolds.
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — ARS on curved scaffolds.
- [[../sources/2014-polo-corrales-scaffold-design-for-bone-regeneration]], [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]] — broad reviews.
- [[../sources/protocol-2025-amin-murine-osteoblast-and-osteoclast-co-cult]] — ARS in co-culture.
- [[../sources/protocol-2025-battistelli-a-quantitative-spectrophotometric-assay]] — quantitative ARS on HA scaffolds; explicit on substrate-binding pitfall.
- [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]] — ARS for biomineralisation studies.
