---
type: method
slug: computational-fluid-dynamics-permeability
aliases: [CFD-permeability, scaffold-permeability-modeling]
related_methods: [finite-element-analysis, micro-CT-imaging, TPMS-scaffold-design, gradient-pore-design]
key_reagents: []
known_failure_modes: [nutrient-diffusion-limitation-in-scaffold-core]
sources: [2020-chen-porous-scaffold-design-for-additive-manu, 2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por, 2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity, 2025-conoscenti-continuous-pore-size-gradient-enhances-z]
tags: [computational, fluid-flow, permeability]
created: 2026-04-25
updated: 2026-04-25
---

# Computational fluid dynamics (CFD) for scaffold permeability

## What it measures / produces

CFD solves the Navier-Stokes equations on a scaffold geometry to predict fluid flow, pressure drop, shear stress, and permeability (Darcy coefficient) under physiological flow. Output: scaffold-effective permeability, local shear-stress fields, prediction of nutrient transport into the scaffold core.

## When to use it

Use CFD (a) to predict whether the gradient-pore design has sufficient permeability to deliver nutrients to the small-pore outer shell, (b) to design dynamic-perfusion bioreactor flow rates, (c) to compare gradient vs uniform permeability profiles. The hypothesis's gradient design is partly motivated by avoiding the diffusion-limited core; CFD tests this prediction.

## Key parameters

- **Permeability k**: Darcy m² or 10⁻¹¹ m² typical for bone-scaffold range.
- **Reynolds number**: Re < 1 (Darcy regime) for static culture; higher in perfusion bioreactors.
- **Mesh**: μCT-derived geometry preferred over CAD.

## Step-level notes

- Validate CFD prediction against experimental permeability measurement (Darcy permeability via flow-through).
- Couple with FEA for fluid-structure interaction in compliant scaffolds.

## Things to watch for

- [[../failure-modes/nutrient-diffusion-limitation-in-scaffold-core]] — CFD predicts the threshold below which the scaffold core becomes diffusion-limited.

## Sources

- [[../sources/2020-chen-porous-scaffold-design-for-additive-manu]] — CFD in parametric porous design.
- [[../sources/2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por]] — CFD in porous bioprinting design.
- [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]] — CFD in scaffold porosity review.
- [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] — CFD permeability of TIPS PLLA gradient scaffolds.
