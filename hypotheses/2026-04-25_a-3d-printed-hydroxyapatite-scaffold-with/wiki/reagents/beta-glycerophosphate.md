---
type: reagent
slug: beta-glycerophosphate
aliases: [β-GP, β-glycerolphosphate, sodium β-glycerophosphate, β-glycerophosphate disodium pentahydrate]
cas: "13408-09-8 (anhydrous); 819-83-0 (hydrate variants)"
formula: C3H7Na2O6P
molecular_weight: "216.04 (anhydrous); 306.12 (pentahydrate)"
suppliers:
  - name: Sigma-Aldrich (Merck)
    catalog: "G9422 (β-glycerophosphate disodium pentahydrate, ≥99%)"
    grade: "research"
  - name: Sigma-Aldrich (Merck)
    catalog: "G9891"
    grade: "cell-culture tested"
  - name: Calbiochem
    catalog: "35675"
    grade: "research"
storage: room-temperature, dry; solutions made fresh and 0.22 µm filter-sterilised
hazards: low
known_failure_modes: [spontaneous-dystrophic-mineralization-bglycerophosphate, proliferation-vs-differentiation-tradeoff]
sources: [2025-conoscenti, 2022-yang, protocol-2025-amin, protocol-2025-sheikh, pubchem-sodium-glycerophosphate-cid14754]
tags: [osteogenic-supplement, phosphate-source, mineralization]
created: 2026-04-25
updated: 2026-04-25
---

# β-glycerophosphate (β-GP)

Phosphate donor in osteogenic differentiation media. Substrate for alkaline phosphatase (ALP), which hydrolyses β-GP to release free phosphate that combines with medium Ca²⁺ to drive cell-mediated mineralisation. Standard component of the "osteogenic cocktail" with [[../reagents/dexamethasone]] and [[../reagents/L-ascorbic-acid-2-phosphate]].

## Properties

- **CAS:** 13408-09-8 (anhydrous disodium); 819-83-0 (hydrates)
- **Formula:** C₃H₇Na₂O₆P (anhydrous); pentahydrate form most commonly supplied (~306 g/mol)
- **Working concentration:** 10 mM in osteogenic medium
- **PubChem CID 14754:** describes the mixed α/β isomer (2,3-dihydroxypropyl phosphate); **the cell-culture-grade reagent is specifically β-glycerophosphate** (sn-glycerol-2-phosphate); supplier products are often mixtures.

## Common uses in this hypothesis space

- 10 mM supplement in osteogenic differentiation medium (with dex + AA-2P).
- **NOT used in pure-proliferation comparisons** — see failure modes.

## Suppliers / catalog

| Supplier | Catalog | Notes |
|---|---|---|
| Sigma-Aldrich | G9422 | pentahydrate, ≥99% (most common) |
| Sigma-Aldrich | G9891 | cell-culture tested |
| Calbiochem | 35675 | research |

## Alternatives

- Inorganic phosphate (Na₂HPO₄ + NaH₂PO₄) — direct phosphate; bypasses ALP, induces mineralisation in cell-independent manner (often considered the negative control / artefact).
- 2-phospho-ascorbic acid serves a different role (collagen-synthesis, not phosphate donor).

## Gotchas / things to watch for

- [[../failure-modes/spontaneous-dystrophic-mineralization-bglycerophosphate]] — at 10 mM, β-GP can spontaneously precipitate with medium Ca²⁺ even without active ALP, especially if stocks have aged or been autoclaved (heat hydrolyses β-GP and releases free phosphate). Always include a "no cells" or "no osteogenic supplement" control to distinguish biological mineralisation from physicochemical precipitation.
- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — β-GP is part of the differentiation cocktail; should not be in the medium for the day-14 *proliferation* primary endpoint of this hypothesis. Run separate proliferation and osteogenic arms.
- **Do not autoclave** β-GP solutions — heat releases free phosphate and ruins the assay. 0.22 µm filter-sterilise.
- Confused with sodium glycerol phosphate (different isomer). Verify supplier specs.
- Working-concentration calculation: pentahydrate vs anhydrous → different mass per 10 mM.

## Sources

- [[../sources/pubchem-sodium-glycerophosphate-cid14754]] — authoritative compound record; flags α/β isomer ambiguity.
- [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] — β-GP in osteogenic medium for hBMSC on gradient scaffolds.
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — osteogenic medium component.
- [[../sources/protocol-2025-amin-murine-osteoblast-and-osteoclast-co-cult]] — co-culture osteogenic medium.
- [[../sources/protocol-2025-sheikh-isolation-of-in-vitro-osteoblastic-deriv]] — MC3T3-E1 osteogenic differentiation.
