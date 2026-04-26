---
type: reagent
slug: beta-tricalcium-phosphate
aliases: [β-TCP, beta-TCP, tricalcium phosphate, tricalcium diphosphate, Ca3(PO4)2, β-Ca3(PO4)2]
cas: 7758-87-4
formula: Ca3(PO4)2
molecular_weight: 310.18
suppliers:
  - name: Sigma-Aldrich (Merck)
    catalog: "21218"
    grade: "β-TCP, reagent"
  - name: Sigma-Aldrich (Merck)
    catalog: "49963"
    grade: "powder, ≥98%"
  - name: Plasma Biotal
    catalog: "P201 / Captal β-TCP"
    grade: "biomedical"
  - name: Fluidinova
    catalog: "nanoXIM·CarboCa-β"
    grade: "nano"
storage: room-temperature, dry
hazards: low
known_failure_modes: [HA-stoichiometry-affects-resorption, HA-phase-decomposition-during-sintering, batch-to-batch-HA-stoichiometry-variation, brittle-ceramic-mechanical-failure, sintering-shrinkage-pore-deviation]
sources: [2008-chan, 2015-ishack, 2017-eliaz, 2020-wang, 2025-qi, 2018-zhang, 2013-loh, 2024-diez-escudero, 2022-yang, 2026-liu, 2025-liu, 2025-xie, 2008-palmer, 2012-amini, 2012-bose, 2013-henkel, 2014-polo-corrales, 2014-thavornyutikarn, 2015-baino, 2015-do, 2017-gao, 2016-murphy, 2017-bose, 2017-zhang, 2019-chocholata, 2020-garot, 2021-montoya, 2023-koushik, 2025-hossen, 2025-picado-tejero, 2025-tang, 2026-daghrery, pubchem-tricalcium-phosphate-cid24456, crossref-retraction-10-1111-clr-12656]
tags: [calcium-phosphate, bioceramic, resorbable, scaffold-material]
created: 2026-04-25
updated: 2026-04-25
---

# β-Tricalcium phosphate (β-TCP)

The fast-resorbing endmember of the calcium-phosphate scaffold family. Ca/P = 1.5; significantly more soluble at physiological pH than stoichiometric [[../reagents/hydroxyapatite]]; widely used as an HA alternative or as the resorbable phase in [[../reagents/biphasic-calcium-phosphate]] (BCP) scaffolds.

## Properties

- **CAS:** 7758-87-4
- **Formula:** Ca₃(PO₄)₂ (PubChem ID 24456 lists the formula as Ca₃O₈P₂; same compound)
- **Molecular weight:** 310.18 g/mol
- **Crystal system:** rhombohedral (R3c) for β phase
- **Ca/P:** 1.5
- **Stability:** β phase is stable up to ~1125 °C, transforms to α-TCP above; α-TCP is metastable on cooling.
- **Solubility:** ~10× higher than HA at physiological pH; in-vivo resorption order of months vs. years for HA.

## Common uses in this hypothesis space

- **Bulk scaffold material** for 3D-printed bone substitutes when faster resorption / bone replacement is desired — see [[../sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]], [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]], [[../sources/2017-bose-additive-manufacturing-of-biomaterials]].
- **Resorbable phase in BCP** — engineered HA / β-TCP mixtures balance resorption rate against scaffold integrity. [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]].
- **Composite filler** in HA-PCL, HA-PLA, β-TCP-PCL scaffolds — [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]].
- **Adjacent comparator** in our hypothesis: gradient-pore β-TCP or BCP scaffolds appear in the gradient-architecture literature ([[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]], [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]]); these provide supporting evidence but are not direct tests of HA-only gradient designs.

## Suppliers / catalog

| Supplier | Catalog | Notes |
|---|---|---|
| Sigma-Aldrich | 21218 | β-TCP nominal; lot-to-lot Ca/P variability |
| Sigma-Aldrich | 49963 | β-TCP ≥98% |
| Plasma Biotal | P201 / Captal β-TCP | biomedical grade |
| Fluidinova | nanoXIM·CarboCa-β | aqueous suspension |

## Alternatives

- [[../reagents/hydroxyapatite]] — slower-resorbing endmember.
- [[../reagents/alpha-tricalcium-phosphate]] — same formula, different polymorph; rapidly hydrolyses to CDHA.
- [[../reagents/biphasic-calcium-phosphate]] — HA + β-TCP mixture; tunable resorption.
- [[../reagents/calcium-deficient-hydroxyapatite]] — CDHA → HA + β-TCP on sintering.

## Gotchas / things to watch for

- [[../failure-modes/HA-stoichiometry-affects-resorption]] — β-TCP resorbs ~10–50× faster than HA in vivo; mixing into a "biphasic" scaffold without reporting the HA:β-TCP ratio is a recurring reporting failure.
- [[../failure-modes/HA-phase-decomposition-during-sintering]] — β-TCP appearing in an XRD trace of an "HA scaffold" is a red flag for over-sintering or starting CDHA, not a deliberate biphasic design.
- [[../failure-modes/batch-to-batch-HA-stoichiometry-variation]] — by analogy: commercial β-TCP may contain α-TCP, HA, or CaO impurities; verify by XRD before use.
- [[../failure-modes/brittle-ceramic-mechanical-failure]] — β-TCP scaffolds have lower compressive strength than HA at matched porosity due to higher solubility-driven surface defects.

## Sources

- [[../sources/pubchem-tricalcium-phosphate-cid24456]] — authoritative CID record (formula, MW, SMILES).
- [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]] — β-TCP in the CaP family.
- [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]] — phase relationships HA ↔ β-TCP ↔ CaO during sintering.
- [[../sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]] — β-TCP in microporous scaffolds.
- [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]] — β-TCP-PCL gradient scaffolds.
- [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]], [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]], [[../sources/2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por]], [[../sources/2025-hossen-biomimetic-strategies-for-bone-regenerat]] — modern AM reviews.
- [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]], [[../sources/2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]], [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]] — gradient architectures including β-TCP.
- [[../sources/2008-chan-scaffolding-in-tissue-engineering-general-approaches]], [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]], [[../sources/2020-wang-3d-printing-of-bone-tissue-engineering-s]], [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]], [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — broad scaffold/AM reviews.
- [[../sources/2012-amini-bone-tissue-engineering-recent-advances]], [[../sources/2012-bose-recent-advances-in-bone-tissue-engineeri]], [[../sources/2013-henkel-bone-regeneration-based-on-tissue-engine]], [[../sources/2014-polo-corrales-scaffold-design-for-bone-regeneration]], [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]], [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]], [[../sources/2015-do-3d-printing-of-scaffolds-for-tissue-rege]], [[../sources/2017-gao-bone-biomaterials-and-interactions-with]], [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]] — broad bone TE reviews.
- [[../sources/2017-bose-additive-manufacturing-of-biomaterials]], [[../sources/2017-zhang-additively-manufactured-scaffolds-for-bo]], [[../sources/2019-chocholata-fabrication-of-scaffolds-for-bone-tissue]], [[../sources/2020-garot-additive-manufacturing-of-material-scaff]], [[../sources/2021-montoya-on-the-road-to-smart-biomaterials-for-bo]], [[../sources/2023-koushik-bone-tissue-engineering-scaffolds-functi]], [[../sources/2026-daghrery-advances-in-3d-printed-scaffolds-for-per]] — AM-specific reviews.
- [[../sources/crossref-retraction-10-1111-clr-12656]] — retraction in the β-TCP scaffold literature.
