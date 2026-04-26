---
type: method
slug: fused-deposition-modeling
aliases: [FDM, FFF, fused-filament-fabrication, thermoplastic-extrusion-3D-printing]
related_methods: [extrusion-based-3D-printing, robocasting-direct-ink-writing, gradient-pore-design]
key_reagents: [polycaprolactone, polylactic-acid, PLGA, hydroxyapatite, beta-tricalcium-phosphate]
known_failure_modes: [pore-anisotropy-from-print-direction, cad-vs-actual-pore-size-mismatch, cytotoxic-residue-from-binders-or-photoinitiators]
sources: [2020-wang-3d-printing-of-bone-tissue-engineering-s, 2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity, 2017-bose-additive-manufacturing-of-biomaterials, 2020-garot-additive-manufacturing-of-material-scaff, 2023-koushik-bone-tissue-engineering-scaffolds-functi, 2025-hossen-biomimetic-strategies-for-bone-regenerat, 2025-tang-advances-in-3d-printed-scaffolds-for-bon, 2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp, 2015-chia-recent-advances-in-3d-printing-of-biomat, 2015-do-3d-printing-of-scaffolds-for-tissue-rege, 2017-gao-bone-biomaterials-and-interactions-with, 2026-liu-design-and-fabrication-of-biomimetic-gra, 2025-xie-recent-advances-in-gradient-biomimetic-s]
tags: [additive-manufacturing, extrusion, thermoplastic, polymer-printing]
created: 2026-04-25
updated: 2026-04-25
---

# Fused deposition modeling (FDM)

## What it measures / produces

FDM extrudes a heated thermoplastic filament through a heated nozzle that traces the part cross-section layer-by-layer. Output: solid thermoplastic parts (PCL, PLA, PLGA) with FDM-characteristic anisotropic strut/pore geometry. **Pure HA cannot be FDM-printed** — HA must be loaded into a thermoplastic carrier (e.g., HA/PCL composite filament) at moderate volume fractions; high HA loading rapidly clogs nozzles. FDM is therefore an HA-composite route, not a pure-HA route. Most relevant for the present hypothesis as a comparator AM route or for HA/PCL composite gradient scaffolds.

## When to use it

Use FDM (a) for HA/PCL or HA/PLA composite scaffolds where the polymer provides toughness and the HA provides bioactivity, (b) when low cost and easy operation outweigh feature resolution, (c) for prototyping pore-architecture geometries before committing to ceramic AM. Less relevant than DLP/DIW/BJT for pure-HA scaffolds.

## Key parameters

- **Filament diameter / nozzle**: 1.75 mm filament; nozzle ID 0.2–0.6 mm (typical).
- **Nozzle temperature**: 60–90 °C for PCL composites; 200–230 °C for PLA; higher for PLGA blends.
- **HA loading**: typically 10–40 wt% in PCL/PLA composite filaments before clogging issues dominate.
- **Achievable strut/pore**: 200–800 μm typical; pore size set by raster spacing and overlap pattern.

## Common variants

- **Single-material FDM** — one filament, one composition.
- **Multi-material FDM** — multiple extruders for material gradients (similar to multi-nozzle DIW).
- **HA-loaded composite filaments** (HA/PCL, HA/PLA) — the only HA-bearing FDM variant.

## Step-level notes

- Raster orientation determines pore geometry — alternating 0/90° for square pores; 0/60/120° for triangular.
- Pore size is set by filament-to-filament gap, not nozzle ID directly.
- Composite filaments with HA can have batch-to-batch viscosity variation that affects extrusion uniformity.

## Things to watch for

- [[../failure-modes/pore-anisotropy-from-print-direction]] — FDM pores are highly anisotropic; through-plane vs in-plane mechanics differ substantially.
- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — die swell expands the as-printed strut beyond the nozzle ID; verify by SEM or μCT.
- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — applies to PLGA hydrolysis acid products in long-term cell culture (PLGA degrades to lactic / glycolic acid).

## Sources

- [[../sources/2020-wang-3d-printing-of-bone-tissue-engineering-s]] — FDM in BTE AM classification.
- [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]] — FDM in porosity review.
- [[../sources/2017-bose-additive-manufacturing-of-biomaterials]] — FDM among extrusion AM routes.
- [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] — FDM in clinical-translation review.
- [[../sources/2023-koushik-bone-tissue-engineering-scaffolds-functi]] — FDM in functional BTE.
- [[../sources/2025-hossen-biomimetic-strategies-for-bone-regenerat]] — FDM in biomimetic AM.
- [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]] — FDM updates.
- [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]] — FDM in BTE comparison.
- [[../sources/2015-chia-recent-advances-in-3d-printing-of-biomat]] — FDM in biomaterial 3D-printing.
- [[../sources/2015-do-3d-printing-of-scaffolds-for-tissue-rege]] — FDM for printed scaffolds.
- [[../sources/2017-gao-bone-biomaterials-and-interactions-with]] — FDM among AM techniques.
- [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]] — FDM among gradient-scaffold routes.
- [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]] — FDM for tendon-bone gradient scaffolds.
