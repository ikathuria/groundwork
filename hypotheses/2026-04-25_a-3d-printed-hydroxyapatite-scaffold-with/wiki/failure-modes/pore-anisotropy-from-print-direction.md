---
type: failure-mode
slug: pore-anisotropy-from-print-direction
severity: medium
frequency_estimate: dominant in extrusion-based and FDM AM — pore aspect ratio commonly 1.3–2× between print-axis and in-plane
applies_to_methods: [extrusion-based-3D-printing, robocasting-direct-ink-writing, fused-deposition-modeling, DLP-vat-photopolymerization, gradient-pore-design, TPMS-scaffold-design]
applies_to_reagents: [hydroxyapatite, beta-tricalcium-phosphate, polycaprolactone, polylactic-acid]
applies_to_step_kinds: [scaffold-prep, design, mechanical-testing, seeding]
sources: [2014-thavornyutikarn, 2015-chia, 2020-wang, 2017-zhang, 2020-chen, 2022-yang, 2026-liu]
tags: [anisotropy, print-direction, mechanical, pore-geometry]
created: 2026-04-25
updated: 2026-04-25
---

# Pore anisotropy from print direction

## What it is

Layer-by-layer additive manufacturing produces scaffolds with anisotropic pore geometry: pores in the print plane (x-y) differ in size, shape, and connectivity from pores along the build axis (z), because each layer is laid down on top of (and partially compresses) the previous one. This propagates to anisotropic mechanical response (compressive strength differs by 20–50% between in-plane and through-plane loading) and anisotropic permeability (cells settle by gravity, so the build axis is also the seeding-bias axis).

## How it manifests

- μCT segmentation reveals z-pores ~70–85% of x-y pore diameter for FDM/extrusion HA scaffolds [[../sources/2017-zhang-additively-manufactured-scaffolds-for-bo]].
- Compressive modulus tested along z is higher than along x or y by 20–50%; reported across most strut-lattice scaffolds [[../sources/2020-chen-porous-scaffold-design-for-additive-manu]].
- DLP HA scaffolds: light-projection pixel asymmetry causes corresponding x-y pore anisotropy unless rotated builds are used; visible at SEM [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]].
- For a *radial* gradient designed in CAD as concentric, print-axis anisotropy can warp the gradient into an oval rather than circle in cross-section.
- Cells settle preferentially on z-up surface during static seeding, compounding edge-effect bias along the build axis [[../sources/2020-wang-3d-printing-of-bone-tissue-engineering-s]].

## How to detect it

- μCT in three orthogonal mid-planes; compute pore-size and aspect ratio per direction. Reject if max/min pore-size ratio > 1.3 across directions for a designed-isotropic scaffold.
- Compression-test n=3 scaffolds along x, y, and z; report modulus per axis; CV across axes > 20% indicates significant anisotropy.
- Permeability measurement (CFD prediction or experimental Darcy-flow rig) along three axes; permeability ratio > 2× confirms anisotropy [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] (cross-link).
- Seed scaffold with cell suspension in ≥ 2 different orientations (e.g. z-up and z-down); compare day-1 cell distribution to gravity bias.

## Mitigation

- Use **TPMS / gyroid topologies** rather than orthogonal strut grids — TPMS provides near-isotropic pore network and mechanical response by construction [[../sources/2017-zhang-additively-manufactured-scaffolds-for-bo]], [[../sources/2020-chen-porous-scaffold-design-for-additive-manu]], [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]].
- Print rotated layers (offset layer-to-layer rotation 30°, 60°, 90°) to break z-axis preference in FDM/robocasting.
- Tilt build orientation by 45° in DLP/SLA to distribute layer-stacking artifact across multiple structural axes.
- Print and test scaffolds in 2 independent build orientations to confirm reproducibility of pore architecture.
- For the gradient hypothesis: design the radial gradient in cylindrical coordinates and print along the cylinder axis so the radial direction is in-plane (uniform) rather than along the build axis (anisotropic).
- Seed scaffolds in dynamic perfusion to overcome gravity bias [[../sources/2020-wang-3d-printing-of-bone-tissue-engineering-s]], [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]].
- Multi-nozzle / multi-axis extrusion can compensate via overlapping deposition paths [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]].

## Original sources / evidence

- [[../sources/2017-zhang-additively-manufactured-scaffolds-for-bo]] — TPMS for isotropy; lattice anisotropy quantified.
- [[../sources/2020-chen-porous-scaffold-design-for-additive-manu]] — design rules / mechanical anisotropy.
- [[../sources/2020-wang-3d-printing-of-bone-tissue-engineering-s]] — review of build-axis effects.
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — DLP curvature/topology effects.
- [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]] — multi-nozzle / coaxial mitigations.
- [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]], [[../sources/2015-chia-recent-advances-in-3d-printing-of-biomat]] — review-level acknowledgment of layer-direction effects.

## Affects

- Methods: [[../methods/extrusion-based-3D-printing]], [[../methods/robocasting-direct-ink-writing]], [[../methods/fused-deposition-modeling]], [[../methods/DLP-vat-photopolymerization]], [[../methods/gradient-pore-design]], [[../methods/TPMS-scaffold-design]]
- Reagents: [[../reagents/hydroxyapatite]], [[../reagents/beta-tricalcium-phosphate]], [[../reagents/polycaprolactone]], [[../reagents/polylactic-acid]]
