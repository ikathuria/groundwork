---
type: method
slug: TPMS-scaffold-design
aliases: [triply-periodic-minimal-surface, gyroid, diamond-TPMS, primitive-TPMS, schwarz-D]
related_methods: [gradient-pore-design, finite-element-analysis, computational-fluid-dynamics-permeability, DLP-vat-photopolymerization, 3D-printing-stereolithography, selective-laser-sintering]
key_reagents: [hydroxyapatite, beta-tricalcium-phosphate, polycaprolactone]
known_failure_modes: [cad-vs-actual-pore-size-mismatch, pore-anisotropy-from-print-direction, brittle-ceramic-mechanical-failure]
sources: [2017-zhang-additively-manufactured-scaffolds-for-bo, 2020-chen-porous-scaffold-design-for-additive-manu, 2023-koushik-bone-tissue-engineering-scaffolds-functi, 2025-hossen-biomimetic-strategies-for-bone-regenerat, 2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por, 2025-tang-advances-in-3d-printed-scaffolds-for-bon, 2026-daghrery-advances-in-3d-printed-scaffolds-for-per, 2022-yang-gaussian-curvature-driven-direction-of-c]
tags: [scaffold-architecture, parametric-design, implicit-surface]
created: 2026-04-25
updated: 2026-04-25
---

# TPMS (triply-periodic minimal-surface) scaffold design

## What it measures / produces

TPMS unit cells (gyroid, Schwarz primitive, diamond, IWP) are mathematical surfaces with zero mean curvature that tile space periodically. Implemented as scaffold lattices, they offer (a) smooth, continuous strut geometry without sharp stress-concentrators, (b) inherent biomimicry of trabecular bone curvature, (c) parametric control of porosity, pore size, and Gaussian curvature via implicit-surface equations, (d) easy continuous-gradient construction by spatially modulating the unit-cell parameter. Output: a CAD geometry (STL or implicit-surface) for AM that approximates a TPMS lattice.

## When to use it

Use TPMS when (a) you want smooth-surface lattices without the stress-concentrating sharp corners of voxel/grid lattices, (b) you need parametric continuous gradients (modulate unit-cell parameter as a function of position), (c) you want curvature-driven mechanotransduction effects [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] showed Gaussian curvature alone (independent of pore size) directs MSC fate to osteogenesis. Strong fit for the gradient-pore HA hypothesis.

## Key parameters

- **Unit cell types**: gyroid, Schwarz primitive (P), Schwarz diamond (D), IWP.
- **Porosity range**: 30–95% achievable; 80–95% typical for SLM-Ti TPMS scaffolds with 480–1600 μm pores [[../sources/2017-zhang-additively-manufactured-scaffolds-for-bo]].
- **Gaussian curvature** (Yang et al.): G0–G6 levels tested with otherwise matched porosity and chemistry; high-curvature G6 increased focal-adhesion size, F-actin stress fibres, lamin A/C, RUNX2, OCN, and accelerated rabbit-femoral-defect bone formation [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]].
- **Continuous-gradient extension**: TPMS unit-cell parameter (e.g., wall thickness, period) can be a continuous function of position to produce gradient-porosity scaffolds [[../sources/2017-zhang-additively-manufactured-scaffolds-for-bo]].

## Common variants

- **Gyroid** — most studied, smooth, isotropic-ish.
- **Schwarz P (primitive)** — open-cell, higher porosity at given wall thickness.
- **Schwarz D (diamond)** — anisotropic.
- **IWP** — interwoven, sometimes called "I-WP".
- **Hyperboloidal TPMS** — used in [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] to vary Gaussian curvature.

## Step-level notes

- Generate TPMS geometry from implicit-surface equation; export STL with appropriate mesh resolution.
- Combine with FEA for modulus prediction [[../sources/2017-zhang-additively-manufactured-scaffolds-for-bo]] and CFD for permeability prediction [[../sources/2020-chen-porous-scaffold-design-for-additive-manu]].
- For HA: print via DLP/SLA-of-slurry [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] or SLM (metallic equivalent).

## Things to watch for

- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — TPMS implicit-surface geometry can deviate from CAD if mesh resolution / printer voxel is too coarse.
- [[../failure-modes/pore-anisotropy-from-print-direction]] — even isotropic TPMS lattices can have direction-dependent mechanical response from layer-by-layer printing.
- [[../failure-modes/brittle-ceramic-mechanical-failure]] — TPMS smooth surfaces concentrate less stress than grid lattices, but ceramic failure mechanism still applies.

## Sources

- [[../sources/2017-zhang-additively-manufactured-scaffolds-for-bo]] — TPMS unit-cell parametric framework + SLM-Ti TPMS scaffolds 480–1600 μm pores.
- [[../sources/2020-chen-porous-scaffold-design-for-additive-manu]] — TPMS in parametric porous-scaffold design.
- [[../sources/2023-koushik-bone-tissue-engineering-scaffolds-functi]] — TPMS in functional BTE.
- [[../sources/2025-hossen-biomimetic-strategies-for-bone-regenerat]] — TPMS in biomimetic strategies.
- [[../sources/2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por]] — TPMS in porous bioprinting.
- [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]] — TPMS scaffolds.
- [[../sources/2026-daghrery-advances-in-3d-printed-scaffolds-for-per]] — TPMS in periodontal scaffolds.
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — concrete hyperboloidal-TPMS β-TCP scaffolds with G0–G6 curvature; rabbit-femoral-defect; mechanotransduction inhibitor studies.
