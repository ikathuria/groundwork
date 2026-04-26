---
type: method
slug: selective-laser-sintering
aliases: [SLS, SLM, selective-laser-melting, electron-beam-melting, EBM, powder-bed-fusion]
related_methods: [binder-jet-3D-printing, ceramic-sintering, micro-CT-imaging, finite-element-analysis]
key_reagents: [hydroxyapatite, beta-tricalcium-phosphate, polycaprolactone]
known_failure_modes: [cad-vs-actual-pore-size-mismatch, sintering-shrinkage-pore-deviation, brittle-ceramic-mechanical-failure, pore-anisotropy-from-print-direction]
sources: [2008-chan-scaffolding-in-tissue-engineering-general-approaches, 2020-wang-3d-printing-of-bone-tissue-engineering-s, 2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity, 2017-bose-additive-manufacturing-of-biomaterials, 2017-zhang-additively-manufactured-scaffolds-for-bo, 2020-chen-porous-scaffold-design-for-additive-manu, 2020-garot-additive-manufacturing-of-material-scaff, 2023-koushik-bone-tissue-engineering-scaffolds-functi, 2025-hossen-biomimetic-strategies-for-bone-regenerat, 2025-tang-advances-in-3d-printed-scaffolds-for-bon, 2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp, 2015-baino-bioceramics-and-scaffolds-a-winning-comb, 2015-chia-recent-advances-in-3d-printing-of-biomat, 2015-do-3d-printing-of-scaffolds-for-tissue-rege, 2017-gao-bone-biomaterials-and-interactions-with]
tags: [additive-manufacturing, powder-bed-fusion, laser-processing, metal-and-ceramic]
created: 2026-04-25
updated: 2026-04-25
---

# Selective laser sintering / melting (SLS / SLM)

## What it measures / produces

SLS uses a focused laser to selectively sinter / melt powder in a powder bed layer-by-layer; SLM is the higher-energy variant that fully melts metallic powders. SLM-fabricated Ti-6Al-4V TPMS scaffolds achieved pore sizes 480–1600 μm with porosities 80–95% [[../sources/2017-zhang-additively-manufactured-scaffolds-for-bo]]. For HA scaffolds, SLS is rarely used directly (HA does not laser-sinter cleanly); SLS-of-HA usually requires polymer binder + post-processing. SLS dominates the metallic-implant space (Ti-6Al-4V cages with TPMS architectures) and is mostly relevant to the present hypothesis as a benchmark for what AM resolution and porosity is achievable with powder-bed fusion.

## When to use it

Use SLS/SLM (a) for metallic gradient-porosity scaffolds (Ti-6Al-4V) where the goal is bone-like modulus from a metal substrate, (b) for HA-loaded polymer composites (HA/PCL/PLA) where the polymer provides the laser-absorbing matrix, (c) when the design has features SLS can resolve (200–500 μm pores at 70–95% porosity).

## Key parameters

- **Pore-size window**: 200–500 μm at 70%+ porosity for SLM-Ti scaffolds [[../sources/2017-bose-additive-manufacturing-of-biomaterials]]; up to 1600 μm with TPMS designs [[../sources/2017-zhang-additively-manufactured-scaffolds-for-bo]].
- **Powder size**: 20–50 μm typical; finer powders give better resolution.
- **Laser power / speed / hatch spacing**: parameter window optimised per material.
- **Atmosphere**: inert (Ar/N₂) for metals to prevent oxidation.

## Common variants

- **SLS** — partial sintering of polymer-coated or low-melting powders.
- **SLM** — full melting of metallic powders (the dominant Ti-6Al-4V route).
- **EBM** — electron beam instead of laser; vacuum atmosphere; coarser powder.
- **DMLS** (direct metal laser sintering) — vendor-specific term.

## Step-level notes

- Support structures may be needed for overhangs, then removed post-build.
- Post-build heat treatment (HIP, stress relief) is typical for SLM-Ti.
- For composite (HA-loaded polymer) SLS, post-processing to remove residual unsintered powder from internal channels is essential.

## Things to watch for

- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — SLM/SLS pore size as built can deviate from CAD by tens of μm; verify by μCT [[../sources/2017-zhang-additively-manufactured-scaffolds-for-bo]].
- [[../failure-modes/sintering-shrinkage-pore-deviation]] — applies to ceramic SLS; less to SLM (full melting + cooling).
- [[../failure-modes/brittle-ceramic-mechanical-failure]] — for ceramic SLS; not applicable to metallic SLM.
- [[../failure-modes/pore-anisotropy-from-print-direction]] — layer-direction anisotropy is intrinsic.

## Sources

- [[../sources/2008-chan-scaffolding-in-tissue-engineering-general-approaches]] — SLS in solid free-form fabrication classification.
- [[../sources/2020-wang-3d-printing-of-bone-tissue-engineering-s]] — SLS in AM for BTE.
- [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]] — SLS in porosity review.
- [[../sources/2017-bose-additive-manufacturing-of-biomaterials]] — SLS pore-size data for Ti scaffolds.
- [[../sources/2017-zhang-additively-manufactured-scaffolds-for-bo]] — SLM-Ti TPMS scaffold pore sizes 480–1600 μm.
- [[../sources/2020-chen-porous-scaffold-design-for-additive-manu]] — SLS in parametric porous design.
- [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] — SLS in clinical-translation review.
- [[../sources/2023-koushik-bone-tissue-engineering-scaffolds-functi]] — SLS in functional BTE.
- [[../sources/2025-hossen-biomimetic-strategies-for-bone-regenerat]] — SLS in biomimetic AM.
- [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]] — SLS updates.
- [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]] — SLS in BTE comparison.
- [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]] — SLS in ceramic AM.
- [[../sources/2015-chia-recent-advances-in-3d-printing-of-biomat]] — SLS in 3D-printing review.
- [[../sources/2015-do-3d-printing-of-scaffolds-for-tissue-rege]] — SLS for tissue scaffolds.
- [[../sources/2017-gao-bone-biomaterials-and-interactions-with]] — SLS / SLM among AM techniques.
