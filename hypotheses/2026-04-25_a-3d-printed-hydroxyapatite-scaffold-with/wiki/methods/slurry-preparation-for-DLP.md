---
type: method
slug: slurry-preparation-for-DLP
aliases: [ceramic-slurry-prep, DLP-slurry, photocurable-ceramic-slurry]
related_methods: [DLP-vat-photopolymerization, 3D-printing-stereolithography, robocasting-direct-ink-writing, debinding-thermal-treatment, ceramic-sintering]
key_reagents: [hydroxyapatite, beta-tricalcium-phosphate, photoinitiator-TPO, photoinitiator-LAP, PEG-DA]
known_failure_modes: [sintering-shrinkage-pore-deviation, cytotoxic-residue-from-binders-or-photoinitiators, brittle-ceramic-mechanical-failure]
sources: [2017-bose-additive-manufacturing-of-biomaterials, 2020-garot-additive-manufacturing-of-material-scaff, 2024-wang-polydopamine-functionalized-calcium-defi, 2022-yang-gaussian-curvature-driven-direction-of-c]
tags: [slurry-rheology, ceramic-loading, photocurable-resin]
created: 2026-04-25
updated: 2026-04-25
---

# Slurry preparation for DLP / SLA

## What it measures / produces

The pre-print formulation step for ceramic vat-photopolymerization: combining HA / β-TCP powder with photocurable monomer (often PEGDA, HEMA, or vendor-proprietary), photoinitiator (TPO/LAP), dispersant, and rheology modifier into a homogeneous slurry with controlled viscosity (~1–10 Pa·s), high ceramic loading (40–70 vol%), and minimum sedimentation. Output: a print-ready slurry that can flow under the recoater blade and cure cleanly.

## When to use it

Use this prep step before any DLP / SLA-of-ceramic build. Slurry preparation is the limiting factor for high-quality ceramic vat photopolymerization [[../sources/2017-bose-additive-manufacturing-of-biomaterials]].

## Key parameters

- **HA loading**: as high as possible to reduce cracking and warping during sintering [[../sources/2017-bose-additive-manufacturing-of-biomaterials]]. Up to ~70 vol% bioglass demonstrated.
- **Photoinitiator**: TPO or LAP, 1–3 wt% relative to monomer [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]].
- **Viscosity target**: ~1–10 Pa·s for DLP recoater compatibility.
- **Ball-milling / sonication**: standard homogenisation step.
- **Powder calcination**: pre-treat HA powder at 800 °C × several hours to remove organics [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]].

## Common variants

- **Aqueous slurry** vs **organic-monomer slurry** — aqueous needs hydrophilic monomer; organic gives better dispersion for HA.
- **Pneumatic-deair** (vacuum) vs **planetary mixer** — both used to remove bubbles.

## Step-level notes

- Verify uniform suspension by visual inspection (no settling) and by viscosity measurement.
- Pre-mill HA powder to <5 μm for fine-feature DLP.
- Dispersant chemistry tuned to monomer system; trial-and-error per material.

## Things to watch for

- [[../failure-modes/sintering-shrinkage-pore-deviation]] — green-body solids loading directly determines sintering shrinkage; lower loading = more shrinkage.
- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — residual photoinitiator and unreacted monomer must be removed in debinding.
- [[../failure-modes/brittle-ceramic-mechanical-failure]] — incomplete dispersion → density gradients → mechanical weakness.

## Sources

- [[../sources/2017-bose-additive-manufacturing-of-biomaterials]] — slurry-loading rules and viscosity targets for ceramic AM.
- [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] — photoinitiator selection.
- [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] — α-TCP + sodium alginate + F-127 slurry recipe (DIW analogue).
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — β-TCP slurry with TPO photoinitiator for SLA-printed TPMS.
