---
type: reagent
slug: biphasic-calcium-phosphate
aliases: [BCP, HA/β-TCP biphasic, biphasic CaP]
cas: "n/a (mixture)"
formula: "x·Ca10(PO4)6(OH)2 + y·Ca3(PO4)2 — composition reported as HA:β-TCP wt% ratio"
suppliers:
  - name: Sigma-Aldrich (Merck)
    catalog: "blended from 21223 (HA) + 21218 (β-TCP) at desired ratio, or via CDHA sintering"
  - name: Plasma Biotal
    catalog: "Captal BCP grades (60/40, 80/20, etc.)"
    grade: "biomedical"
  - name: Zimmer Biomet (clinical implants)
    catalog: "MBCP, Triosite (BCP-based commercial bone-graft substitutes)"
storage: room-temperature, dry, sealed
hazards: low
known_failure_modes: [HA-stoichiometry-affects-resorption, HA-phase-decomposition-during-sintering, batch-to-batch-HA-stoichiometry-variation, brittle-ceramic-mechanical-failure]
sources: [2015-ishack, 2017-eliaz, 2020-wang, 2025-qi, 2018-zhang, 2013-loh, 2026-liu, 2025-xie, 2008-palmer, 2012-amini, 2012-bose, 2014-thavornyutikarn, 2015-baino, 2015-do, 2017-gao, 2017-bose, 2019-chocholata, 2020-garot, 2023-koushik, 2025-picado-tejero, 2025-tang]
tags: [calcium-phosphate, bioceramic, biphasic, scaffold-material, clinical]
created: 2026-04-25
updated: 2026-04-25
---

# Biphasic calcium phosphate (BCP)

Engineered mixture of [[../reagents/hydroxyapatite]] and [[../reagents/beta-tricalcium-phosphate]] in a defined weight ratio (commonly 60/40, 70/30, or 80/20 HA/β-TCP). The dominant chemistry of clinical bone-graft substitutes; balances HA's slow resorption + osteoconductivity against β-TCP's rapid resorption + bone-replacement.

## Properties

- **Composition:** x wt% HA + y wt% β-TCP, where x + y = 100. The ratio is the canonical descriptor — always report it.
- **Formation routes:** (1) physical blend of HA and β-TCP powders + sinter; (2) sinter CDHA at >700 °C to yield a biphasic ceramic with composition determined by starting Ca/P; (3) co-precipitate at intermediate Ca/P.
- **Resorption rate:** intermediate between HA (years) and β-TCP (months); tunable by ratio.

## Common uses in this hypothesis space

- **Standard clinical bone-graft chemistry** — the most translation-ready ceramic for our scaffold; comparator group in many gradient-vs-uniform pore studies.
- **3D-printed via DLP, robocasting, binder-jet** — same processes as pure HA. [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]], [[../sources/2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por]].
- **Adjacent comparator** for the gradient-vs-uniform HA test: BCP results inform whether observed effects are HA-specific or general to CaP scaffolds.

## Suppliers / catalog

| Supplier | Catalog | Notes |
|---|---|---|
| Sigma-Aldrich | blend of 21223 + 21218 | most lab studies |
| Plasma Biotal | Captal BCP 60/40, 80/20, etc. | controlled ratio |
| Clinical (MBCP / Triosite) | various | for translational comparison only |

## Alternatives

- [[../reagents/hydroxyapatite]] — slow-resorbing endmember.
- [[../reagents/beta-tricalcium-phosphate]] — fast-resorbing endmember.
- [[../reagents/calcium-deficient-hydroxyapatite]] — single-phase precursor that yields BCP on sintering.

## Gotchas / things to watch for

- [[../failure-modes/HA-stoichiometry-affects-resorption]] — BCP papers that report only "biphasic" without the HA:β-TCP ratio are non-reproducible.
- [[../failure-modes/HA-phase-decomposition-during-sintering]] — sintering temperature and atmosphere shift the HA/β-TCP ratio; verify by quantitative XRD post-sintering.
- [[../failure-modes/batch-to-batch-HA-stoichiometry-variation]] — physical blends can segregate during slurry/ink prep; ensure homogeneous dispersion.
- [[../failure-modes/brittle-ceramic-mechanical-failure]] — BCP toughness is between HA and β-TCP and tracks the ratio.

## Sources

- [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]] — BCP processing and design.
- [[../sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]] — microporosity effects on BCP.
- [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]] — BCP in bone-defect repair.
- [[../sources/2020-wang-3d-printing-of-bone-tissue-engineering-s]], [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]], [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]] — 3D-printed BCP.
- [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]] — pore architecture in BCP.
- [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]], [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]] — gradient BCP scaffolds.
- [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]] — BCP chemistry foundations.
- [[../sources/2012-amini-bone-tissue-engineering-recent-advances]], [[../sources/2012-bose-recent-advances-in-bone-tissue-engineeri]], [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]], [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]], [[../sources/2015-do-3d-printing-of-scaffolds-for-tissue-rege]], [[../sources/2017-gao-bone-biomaterials-and-interactions-with]] — broad reviews.
- [[../sources/2017-bose-additive-manufacturing-of-biomaterials]], [[../sources/2019-chocholata-fabrication-of-scaffolds-for-bone-tissue]], [[../sources/2020-garot-additive-manufacturing-of-material-scaff]], [[../sources/2023-koushik-bone-tissue-engineering-scaffolds-functi]], [[../sources/2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por]] — AM-specific.
