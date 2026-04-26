---
type: method
slug: extrusion-based-3D-printing
aliases: [extrusion-3D-printing, paste-extrusion, screw-extrusion, dispense-plotting, multi-head-deposition]
related_methods: [robocasting-direct-ink-writing, fused-deposition-modeling, multi-nozzle-extrusion, coaxial-printing-spinning, gradient-pore-design, precision-extruding-deposition]
key_reagents: [hydroxyapatite, beta-tricalcium-phosphate, calcium-deficient-hydroxyapatite, polycaprolactone, polylactic-acid, alginate]
known_failure_modes: [pore-anisotropy-from-print-direction, cad-vs-actual-pore-size-mismatch, sintering-shrinkage-pore-deviation, brittle-ceramic-mechanical-failure, cytotoxic-residue-from-binders-or-photoinitiators]
sources: [2008-chan-scaffolding-in-tissue-engineering-general-approaches, 2015-ishack-bone-regeneration-in-critical-bone-defec, 2020-wang-3d-printing-of-bone-tissue-engineering-s, 2024-wang-polydopamine-functionalized-calcium-defi, 2025-de-carvalho-three-dimensional-printing-of-calcium-ph, 2025-qi-3d-printed-bioceramic-scaffolds-for-bone, 2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity, 2017-bose-additive-manufacturing-of-biomaterials, 2019-chocholata-fabrication-of-scaffolds-for-bone-tissue, 2020-garot-additive-manufacturing-of-material-scaff, 2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por, 2025-tang-advances-in-3d-printed-scaffolds-for-bon, 2026-daghrery-advances-in-3d-printed-scaffolds-for-per, 2012-bose-recent-advances-in-bone-tissue-engineeri, 2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp, 2015-chia-recent-advances-in-3d-printing-of-biomat, 2015-do-3d-printing-of-scaffolds-for-tissue-rege, 2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone, 2026-liu-design-and-fabrication-of-biomimetic-gra, 2025-liu-gradient-scaffolds-in-bone-soft-tissue-i, 2025-xie-recent-advances-in-gradient-biomimetic-s, 2025-lee-pcl-scaffold-with-well-defined-hierarchi]
tags: [additive-manufacturing, extrusion, paste-and-filament-printing]
created: 2026-04-25
updated: 2026-04-25
---

# Extrusion-based 3D printing

## What it measures / produces

Extrusion-based 3D printing is the umbrella term for AM routes that dispense material through a nozzle layer-by-layer: includes [[fused-deposition-modeling]] (heated thermoplastic filament), [[robocasting-direct-ink-writing]] (high-solid-loading paste), [[multi-nozzle-extrusion]], dispense-plotting, multi-head deposition system (MHDS), and [[precision-extruding-deposition]]. For HA scaffolds, the most relevant variant is robocasting (paste extrusion of HA / β-TCP slurry); for HA-polymer composites, FDM is dominant.

## When to use it

Use extrusion-based AM when (a) the material has a viscoelastic / shear-thinning rheology suitable for nozzle dispensing, (b) the desired feature is in the 150–800 μm strut range (set by nozzle ID), (c) you need composition gradients via multi-head or coaxial nozzles. The dominant route for HA gradient scaffolds via direct prior art [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]] [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]].

## Key parameters

- **Nozzle ID**: 150–500 μm typical for HA paste; 0.33 mm needle for screw-extruded PCL composites [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]]; 250 μm for HA/β-TCP robocasting [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]]; 50 μm nozzle ID for PED of PCL [[../sources/2025-lee-pcl-scaffold-with-well-defined-hierarchi]].
- **Print speed**: 5–30 mm/s; 20 mm/s with 12 rpm screw for PCL composites [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]].
- **Nozzle temperature**: 60–90 °C for PCL composites (90 °C in Daskalakis screw-extrusion [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]]); 200+ °C for PLA; ambient for ceramic pastes.

## Common variants

- **Pneumatic-driven extrusion** — air pressure on syringe ink reservoir; standard for ceramic pastes.
- **Screw-driven extrusion** — screw drives high-viscosity inks more uniformly than pneumatic; e.g., RegenHU 3D Discovery [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]].
- **Plunger-driven (positive displacement)** — for low-viscosity inks.
- **Multi-head / multi-material** — see [[multi-nozzle-extrusion]].
- **Coaxial** — see [[coaxial-printing-spinning]].
- **Precision extruding deposition (PED)** — see [[precision-extruding-deposition]] [[../sources/2025-lee-pcl-scaffold-with-well-defined-hierarchi]].

## Step-level notes

- See the related sub-method pages for specific protocols.
- Filament-to-filament gap, raster pattern, and nozzle ID together set pore-size geometry.
- Die swell expands the as-printed strut beyond nozzle ID; CAD must compensate.

## Things to watch for

- [[../failure-modes/pore-anisotropy-from-print-direction]] — extrusion lattices have intrinsic anisotropy.
- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — die swell + drying / sintering shrinkage compound.
- [[../failure-modes/sintering-shrinkage-pore-deviation]] — applies to ceramic pastes that are sintered.
- [[../failure-modes/brittle-ceramic-mechanical-failure]] — sintered ceramic struts are brittle.
- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — applies to organic rheology modifiers (CMC, F-127, alginate) if not fully removed.

## Sources

- [[../sources/2008-chan-scaffolding-in-tissue-engineering-general-approaches]] — extrusion-based AM in scaffold fabrication classification.
- [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]] — concrete robocasting recipe for HA/β-TCP.
- [[../sources/2020-wang-3d-printing-of-bone-tissue-engineering-s]] — extrusion AM in BTE.
- [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] — extrusion-printed CDHA gradient scaffold.
- [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] — extrusion-DIW of CPC + MBG.
- [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]] — extrusion AM in bioceramic-scaffold review.
- [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]] — extrusion AM in porosity review.
- [[../sources/2017-bose-additive-manufacturing-of-biomaterials]] — extrusion AM fundamentals.
- [[../sources/2019-chocholata-fabrication-of-scaffolds-for-bone-tissue]] — extrusion AM for BTE scaffolds.
- [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] — extrusion AM in clinical-translation review.
- [[../sources/2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por]] — extrusion AM for porous bioprinting.
- [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]] — extrusion AM updates.
- [[../sources/2026-daghrery-advances-in-3d-printed-scaffolds-for-per]] — extrusion AM in periodontal/peri-implant.
- [[../sources/2012-bose-recent-advances-in-bone-tissue-engineeri]] — early extrusion AM review.
- [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]] — extrusion AM in BTE comparison.
- [[../sources/2015-chia-recent-advances-in-3d-printing-of-biomat]] — extrusion AM in 3D-printing review.
- [[../sources/2015-do-3d-printing-of-scaffolds-for-tissue-rege]] — extrusion AM for printed scaffolds.
- [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]] — screw-extrusion of PCL/HA gradient scaffolds (RegenHU 3D Discovery, 0.33 mm needle, 90 °C, 20 mm/s, 12 rpm).
- [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]] — extrusion AM among gradient routes.
- [[../sources/2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]] — extrusion AM in interface gradient scaffolds.
- [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]] — extrusion AM for tendon-bone gradient.
- [[../sources/2025-lee-pcl-scaffold-with-well-defined-hierarchi]] — PED extrusion through 50 μm nozzle for hierarchical PCL pores.
