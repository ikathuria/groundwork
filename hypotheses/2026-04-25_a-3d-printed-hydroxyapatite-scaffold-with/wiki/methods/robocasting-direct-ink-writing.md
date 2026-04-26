---
type: method
slug: robocasting-direct-ink-writing
aliases: [DIW, direct-ink-writing, robocasting, paste-extrusion-3D-printing, dispense-plotting]
related_methods: [extrusion-based-3D-printing, ceramic-sintering, slurry-preparation-for-DLP, debinding-thermal-treatment, gradient-pore-design, multi-nozzle-extrusion, micro-CT-imaging, mechanical-compression-testing]
key_reagents: [hydroxyapatite, beta-tricalcium-phosphate, calcium-deficient-hydroxyapatite, alpha-tricalcium-phosphate, mesoporous-bioactive-glass, alginate, polycaprolactone]
known_failure_modes: [sintering-shrinkage-pore-deviation, HA-phase-decomposition-during-sintering, cad-vs-actual-pore-size-mismatch, pore-anisotropy-from-print-direction, brittle-ceramic-mechanical-failure, pore-clogging-by-sintering-aids, cytotoxic-residue-from-binders-or-photoinitiators]
sources: [2015-ishack-bone-regeneration-in-critical-bone-defec, 2020-wang-3d-printing-of-bone-tissue-engineering-s, 2024-wang-polydopamine-functionalized-calcium-defi, 2025-de-carvalho-three-dimensional-printing-of-calcium-ph, 2025-qi-3d-printed-bioceramic-scaffolds-for-bone, 2017-bose-additive-manufacturing-of-biomaterials, 2020-garot-additive-manufacturing-of-material-scaff, 2021-montoya-on-the-road-to-smart-biomaterials-for-bo, 2025-tang-advances-in-3d-printed-scaffolds-for-bon, 2012-bose-recent-advances-in-bone-tissue-engineeri, 2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp, 2015-baino-bioceramics-and-scaffolds-a-winning-comb, 2026-liu-design-and-fabrication-of-biomimetic-gra, 2025-xie-recent-advances-in-gradient-biomimetic-s]
tags: [additive-manufacturing, extrusion, ceramic-printing, paste-printing]
created: 2026-04-25
updated: 2026-04-25
---

# Robocasting / direct ink writing (DIW)

## What it measures / produces

Robocasting (also called direct ink writing, DIW, or paste-extrusion 3D printing) is an extrusion-based AM route in which a viscoelastic, shear-thinning ceramic ink is extruded through a fine nozzle onto a build platform layer-by-layer. The ink — typically high-solid-loading (40–55 vol%) HA / β-TCP / BCP suspended in water with rheology modifiers (carboxymethylcellulose, F-127, sodium alginate) — flows under shear, then yields a self-supporting filament that holds the printed shape. After printing, the green scaffold is dried, debinded, and sintered into a dense ceramic. Output: a 3D ceramic lattice with strut diameters set by nozzle ID (~150–500 μm typical) and pore spacing set by filament-to-filament gap.

## When to use it

Use DIW when (a) you need a high-ceramic-content scaffold without the photoinitiator burden of DLP, (b) the desired pore size is in the 200–800 μm range (extruded filament spacing matches this naturally), (c) you want to do multi-material / gradient printing via multi-nozzle or coaxial heads (composition gradients along filaments), or (d) you have an HA paste / cement formulation rather than a photocurable slurry. For the present hypothesis, DIW is the lowest-cost candidate route for a 100–500 μm HA gradient scaffold and the route with the strongest direct prior art [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]].

## Key parameters

- **Nozzle inner diameter**: 150–500 μm typical; sets the achievable strut diameter and ultimately the resolution. Ishack used a **250 μm extrusion nozzle** for HA/β-TCP at 250 μm strut / 300 μm pore [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]]. Daskalakis (Diez-Escudero filename) used a 0.33 mm needle for screw-extruded PCL/HA [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]].
- **Print speed / temperature**: 20 mm/s deposition speed, 90 °C nozzle temperature (for screw-extrusion of PCL composites); 12 rpm screw speed [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]].
- **Ink composition (representative)**: 7 g α-TCP / 0.6 g sodium alginate / 15 g F-127 (20 wt%) aqueous solution for self-setting CDHA; hand-mixed before loading [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]]. 15% HA / 85% β-TCP colloidal ink with calcination (800 °C × 11 h) and attrition milling for sinterable HA/β-TCP [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]]. Commercial CPC ink (HA/α-TCP) ± 5 wt% mesoporous bioactive glass [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]].
- **Sintering schedule (HA/β-TCP)**: 1100 °C × 4 h (Ishack robocasted scaffolds) [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]]; 1250 °C documented for binder-jet/microwave-sintered β-TCP [[../sources/2017-bose-additive-manufacturing-of-biomaterials]].
- **Achievable pore-size window**: ~200–800 μm with single-nozzle DIW; pore anisotropy along/across filament direction is intrinsic to lattice extrusion.
- **Self-setting (cement) vs sinter-route**: α-TCP-based pastes can self-set at body-fluid pH without high-T sintering [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] — preserves HA stoichiometry and pore architecture better than sintered routes, at the cost of lower mechanical strength.

## Common variants

- **Single-nozzle robocasting**: one ink, one composition — the original Sandia robocasting paradigm.
- **Multi-nozzle extrusion**: parallel nozzles dispense different inks for spatial composition control [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]] [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]]. See [[multi-nozzle-extrusion]].
- **Real-time mixing (active mixer)**: in-line mixer along the print path produces continuous composition gradients within a single filament.
- **Coaxial printing**: shell + core inks dispensed concentrically — radial gradient within a filament. See [[coaxial-printing-spinning]].
- **Screw-assisted extrusion** (e.g. RegenHU 3D Discovery): screw drives paste rather than pneumatic pressure; more uniform output for high-viscosity inks [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]].
- **Self-setting CPC** (no sintering): α-TCP / HA paste sets via hydrolysis — preserves chemistry but yields lower modulus [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]].

## Step-level notes

- Ink rheology (yield stress, shear-thinning index) is the limiting factor: too thin → strands collapse; too thick → nozzle clogs, filament breaks. Carboxymethylcellulose, F-127, and alginate are the standard rheology modifiers [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] [[../sources/2017-bose-additive-manufacturing-of-biomaterials]].
- For HA powders: pre-calcine (800 °C × 11 h) and attrition-mill in zirconia media in DI water before ink prep [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]].
- Drying after printing is non-trivial — uniform drying prevents cracks; controlled-humidity chamber preferred.
- Debinding before sintering (where applicable): typically slow ramp 0.5–1 °C/min through 300–600 °C to remove organic rheology modifiers without delaminating struts [[../sources/2017-bose-additive-manufacturing-of-biomaterials]].
- Sintering shrinkage of HA pastes is typically 15–20% linear; designed pore sizes must compensate. Microwave sintering can densify with less shrinkage [[../sources/2017-bose-additive-manufacturing-of-biomaterials]].
- Pore-size verification: μCT empty (zero time-point) scaffolds for as-built strut/pore geometry [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]].

## Things to watch for

- [[../failure-modes/sintering-shrinkage-pore-deviation]] — the dominant systematic error in DIW HA scaffolds; verify by μCT.
- [[../failure-modes/HA-phase-decomposition-during-sintering]] — over-temperature sintering can shift HA → β-TCP/α-TCP; control atmosphere and Ca/P stoichiometry.
- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — extruded strut diameter often exceeds nozzle ID due to die swell; designed CAD must compensate.
- [[../failure-modes/pore-anisotropy-from-print-direction]] — DIW lattices have anisotropic pore geometry; cell response can be direction-dependent.
- [[../failure-modes/brittle-ceramic-mechanical-failure]] — sintered HA struts have low strain-to-failure; large-pore designs are mechanically vulnerable.
- [[../failure-modes/pore-clogging-by-sintering-aids]] — rheology modifiers (CMC, F-127, alginate) burn off during debinding but residues can clog smallest pores; coatings (e.g. PDA at higher concentration) can also occlude pores [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]].
- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — incomplete debinding leaves cytotoxic organic residues; verify via cytotoxicity assay before cell seeding.

## Sources

- [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]] — concrete robocasting recipe: 250 μm nozzle, 250 μm strut / 300 μm pore, 1100 °C × 4 h sintering, 15:85 HA:β-TCP composition.
- [[../sources/2020-wang-3d-printing-of-bone-tissue-engineering-s]] — DIW within AM-for-BTE taxonomy.
- [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] — extrusion-printed gradient-pore CDHA scaffold (closest direct prior art for the hypothesis); slurry recipe and self-setting route.
- [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] — DIW of CPC + mesoporous bioactive glass; hBMSC proliferation/gene-expression readouts.
- [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]] — DIW among 3D-printing routes for aging-bone repair.
- [[../sources/2017-bose-additive-manufacturing-of-biomaterials]] — robocasting fundamentals (CMC ink, ink rheology).
- [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] — DIW classification + clinical-translation framing.
- [[../sources/2021-montoya-on-the-road-to-smart-biomaterials-for-bo]] — robocasting in smart biomaterials context.
- [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]] — DIW updates and gradient-DIW variants.
- [[../sources/2012-bose-recent-advances-in-bone-tissue-engineeri]] — earlier robocasting / DIW review.
- [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]] — DIW in BTE scaffold comparison.
- [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]] — DIW among ceramic AM routes.
- [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]] — multi-nozzle DIW for gradient construction.
- [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]] — DIW + multi-material extrusion for porosity-gradient scaffolds.
