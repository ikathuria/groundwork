---
type: method
slug: finite-element-analysis
aliases: [FEA, FE-modeling, computational-mechanics]
related_methods: [computational-fluid-dynamics-permeability, mechanical-compression-testing, micro-CT-imaging, TPMS-scaffold-design, gradient-pore-design]
key_reagents: []
known_failure_modes: [stress-shielding-from-uniform-stiffness-implants, abrupt-interface-stress-concentration, brittle-ceramic-mechanical-failure]
sources: [2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp, 2017-zhang-additively-manufactured-scaffolds-for-bo, 2020-chen-porous-scaffold-design-for-additive-manu, 2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por, 2022-yang-gaussian-curvature-driven-direction-of-c]
tags: [computational, mechanical-modelling, design-validation]
created: 2026-04-25
updated: 2026-04-25
---

# Finite element analysis (FEA)

## What it measures / produces

FEA discretises a scaffold geometry into finite elements, applies boundary conditions, and solves the resulting system to predict stress, strain, displacement, and effective modulus under applied loads. Output: predicted modulus, peak stresses, failure locations, and (for fluid problems) permeability — see [[computational-fluid-dynamics-permeability]].

## When to use it

Use FEA (a) to predict gradient-vs-uniform scaffold modulus before printing, (b) to identify stress concentrators (e.g., abrupt zone interfaces in discrete-zone gradient designs), (c) to validate that the cortical-mimicking outer shell carries load and the cancellous core does not under-support, (d) to inform stress shielding analysis of scaffold-bone interface.

## Key parameters

- **Mesh resolution**: ~10 μm element size for scaffold pore-scale features.
- **Boundary conditions**: physiological loading (compression for bone), fixed boundary at one end.
- **Material model**: linear elastic (small deformation); elastic-plastic for failure prediction.
- **Validation**: compare to compression-test modulus.

## Step-level notes

- Use μCT-derived geometry rather than CAD when validating against built scaffolds (CAD differs from as-built due to sintering shrinkage, etc.).
- For TPMS / parametric designs, coupling with parameter-sweep (gradient parameter as function of position) is straightforward.

## Things to watch for

- [[../failure-modes/stress-shielding-from-uniform-stiffness-implants]] — FEA predicts this; uniform-stiffness scaffolds show modulus mismatch with native bone.
- [[../failure-modes/abrupt-interface-stress-concentration]] — discrete-zone gradient scaffolds show stress concentrations at zone boundaries.
- [[../failure-modes/brittle-ceramic-mechanical-failure]] — FEA + ceramic failure criterion (max principal stress) predicts failure locations.

## Sources

- [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]] — FEA in BTE scaffolding comparison.
- [[../sources/2017-zhang-additively-manufactured-scaffolds-for-bo]] — FEA-paired AM-scaffold mechanical prediction (TPMS, functionally graded).
- [[../sources/2020-chen-porous-scaffold-design-for-additive-manu]] — FEA in parametric porous-scaffold design (TPMS, Voronoi).
- [[../sources/2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por]] — FEA in porous bioprinting design.
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — FEA of TPMS β-TCP scaffolds.
