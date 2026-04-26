---
type: method
slug: 3D-printing-stereolithography
aliases: [SLA, stereolithography, laser-vat-photopolymerization]
related_methods: [DLP-vat-photopolymerization, two-photon-polymerization, slurry-preparation-for-DLP, debinding-thermal-treatment, ceramic-sintering, gradient-pore-design]
key_reagents: [hydroxyapatite, beta-tricalcium-phosphate, photoinitiator-TPO, photoinitiator-LAP, PEG-DA]
known_failure_modes: [cytotoxic-residue-from-binders-or-photoinitiators, sintering-shrinkage-pore-deviation, HA-phase-decomposition-during-sintering, cad-vs-actual-pore-size-mismatch, brittle-ceramic-mechanical-failure]
sources: [2008-chan-scaffolding-in-tissue-engineering-general-approaches, 2020-wang-3d-printing-of-bone-tissue-engineering-s, 2025-qi-3d-printed-bioceramic-scaffolds-for-bone, 2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity, 2017-bose-additive-manufacturing-of-biomaterials, 2017-zhang-additively-manufactured-scaffolds-for-bo, 2019-chocholata-fabrication-of-scaffolds-for-bone-tissue, 2020-chen-porous-scaffold-design-for-additive-manu, 2020-garot-additive-manufacturing-of-material-scaff, 2021-montoya-on-the-road-to-smart-biomaterials-for-bo, 2023-koushik-bone-tissue-engineering-scaffolds-functi, 2025-hossen-biomimetic-strategies-for-bone-regenerat, 2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por, 2025-tang-advances-in-3d-printed-scaffolds-for-bon, 2026-daghrery-advances-in-3d-printed-scaffolds-for-per, 2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp, 2015-baino-bioceramics-and-scaffolds-a-winning-comb, 2015-chia-recent-advances-in-3d-printing-of-biomat, 2015-do-3d-printing-of-scaffolds-for-tissue-rege, 2017-gao-bone-biomaterials-and-interactions-with, 2022-yang-gaussian-curvature-driven-direction-of-c, 2026-liu-design-and-fabrication-of-biomimetic-gra, 2025-liu-gradient-scaffolds-in-bone-soft-tissue-i, 2025-xie-recent-advances-in-gradient-biomimetic-s]
tags: [additive-manufacturing, vat-photopolymerization, ceramic-printing, laser-scanning]
created: 2026-04-25
updated: 2026-04-25
---

# Stereolithography (SLA) 3D printing

## What it measures / produces

Stereolithography is the original vat-photopolymerization route: a UV laser scans a photocurable resin (or ceramic-loaded slurry) point-by-point, curing each pixel of the layer before the build platform indexes one layer. Output: high-resolution 3D parts (~50–100 μm features in routine BTE practice) including ceramic green parts that are subsequently debinded and sintered. SLA is functionally similar to [[DLP-vat-photopolymerization]] but uses scanned-laser instead of whole-layer DMD projection — higher resolution at small scale, slower throughput at large scale.

## When to use it

Use SLA when (a) you need higher per-feature resolution than DLP at small build areas, (b) the part is small enough that point-scanning throughput is acceptable, (c) the resin is sensitive to projector heat / scattering. For HA scaffolds, SLA is one of the established routes — Yang et al. used SLA-of-β-TCP-slurry for TPMS scaffolds [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]].

## Key parameters

- **Feature resolution**: ~50–100 μm in practice, limited by laser spot size and ceramic-slurry scattering.
- **Wavelength**: 355 / 365 / 405 nm UV.
- **Sintering schedule** (for ceramic SLA): 1100–1250 °C × 2–4 h after debinding; same as DLP and robocasting [[../sources/2017-bose-additive-manufacturing-of-biomaterials]].
- **Photoinitiator**: TPO / LAP standard for BTE-grade resins [[../sources/2020-garot-additive-manufacturing-of-material-scaff]].
- **Loading**: high HA / β-TCP volume fraction required for sintered density [[../sources/2017-bose-additive-manufacturing-of-biomaterials]].

## Common variants

- **Top-down vs bottom-up vat** (bottom-up = modern norm, top-down for ceramic slurries that settle).
- **DLP** (whole-layer projection) — see [[DLP-vat-photopolymerization]].
- **Two-photon polymerization (2PP)** — sub-micron resolution, niche use.

## Step-level notes

- Slurry preparation, debinding, and sintering are functionally identical to DLP — see [[slurry-preparation-for-DLP]], [[debinding-thermal-treatment]], [[ceramic-sintering]].
- Print orientation matters for pore anisotropy; consider multiple orientations to control [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]].

## Things to watch for

- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — residual photoinitiator after incomplete debinding.
- [[../failure-modes/sintering-shrinkage-pore-deviation]] — same shrinkage envelope as DLP.
- [[../failure-modes/HA-phase-decomposition-during-sintering]] — same risk as DLP/robocasting.
- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — verify by μCT.
- [[../failure-modes/brittle-ceramic-mechanical-failure]] — sintered ceramic has low strain-to-failure.

## Sources

- [[../sources/2008-chan-scaffolding-in-tissue-engineering-general-approaches]] — SLA in solid free-form fabrication classification.
- [[../sources/2020-wang-3d-printing-of-bone-tissue-engineering-s]] — SLA for BTE scaffolds.
- [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]] — SLA in bioceramic scaffold review.
- [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]] — SLA in porosity-control review.
- [[../sources/2017-bose-additive-manufacturing-of-biomaterials]] — SLA fundamentals.
- [[../sources/2017-zhang-additively-manufactured-scaffolds-for-bo]] — SLA among AM routes.
- [[../sources/2019-chocholata-fabrication-of-scaffolds-for-bone-tissue]] — SLA for BTE.
- [[../sources/2020-chen-porous-scaffold-design-for-additive-manu]] — SLA for parametric porous scaffolds.
- [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] — SLA with photoinitiator caveats.
- [[../sources/2021-montoya-on-the-road-to-smart-biomaterials-for-bo]] — SLA in smart biomaterials.
- [[../sources/2023-koushik-bone-tissue-engineering-scaffolds-functi]] — SLA in functional BTE.
- [[../sources/2025-hossen-biomimetic-strategies-for-bone-regenerat]] — SLA in biomimetic AM.
- [[../sources/2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por]] — SLA in porous bioprinting.
- [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]] — SLA updates.
- [[../sources/2026-daghrery-advances-in-3d-printed-scaffolds-for-per]] — SLA in periodontal/peri-implant.
- [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]] — SLA in BTE comparison.
- [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]] — SLA among ceramic AM routes.
- [[../sources/2015-chia-recent-advances-in-3d-printing-of-biomat]] — SLA in biomaterial 3D-printing review.
- [[../sources/2015-do-3d-printing-of-scaffolds-for-tissue-rege]] — SLA for printed scaffolds.
- [[../sources/2017-gao-bone-biomaterials-and-interactions-with]] — SLA among AM techniques.
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — concrete SLA-of-β-TCP-slurry for TPMS scaffolds + sintering.
- [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]] — SLA among gradient-scaffold AM routes.
- [[../sources/2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]] — SLA in gradient scaffold review.
- [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]] — SLA in tendon-bone gradient scaffolds.
