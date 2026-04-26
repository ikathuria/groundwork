---
type: method
slug: micro-CT-imaging
aliases: [microCT, μCT, x-ray-microtomography, micro-computed-tomography]
related_methods: [micro-CT-bone-volume-quantification, mechanical-compression-testing, finite-element-analysis, in-vivo-calvarial-defect-model, in-vivo-femoral-defect-model, gradient-pore-design]
key_reagents: []
known_failure_modes: [cad-vs-actual-pore-size-mismatch, sintering-shrinkage-pore-deviation, in-vivo-vs-in-vitro-discordance]
sources: [2015-ishack-bone-regeneration-in-critical-bone-defec, 2024-wang-polydopamine-functionalized-calcium-defi, 2025-qi-3d-printed-bioceramic-scaffolds-for-bone, 2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity, 2017-zhang-additively-manufactured-scaffolds-for-bo, 2020-garot-additive-manufacturing-of-material-scaff, 2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por, 2025-tang-advances-in-3d-printed-scaffolds-for-bon, 2026-daghrery-advances-in-3d-printed-scaffolds-for-per, 2012-amini-bone-tissue-engineering-recent-advances, 2013-henkel-bone-regeneration-based-on-tissue-engine, 2014-polo-corrales-scaffold-design-for-bone-regeneration, 2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp, 2015-baino-bioceramics-and-scaffolds-a-winning-comb, 2015-chia-recent-advances-in-3d-printing-of-biomat, 2015-do-3d-printing-of-scaffolds-for-tissue-rege, 2017-gao-bone-biomaterials-and-interactions-with, 2016-murphy-scaffolds-and-cells-for-tissue-regeneration, 2025-conoscenti-continuous-pore-size-gradient-enhances-z, 2022-yang-gaussian-curvature-driven-direction-of-c, 2026-zhao-longitudinal-and-radial-microgradients-i, protocol-2025-landau-a-micro-computed-tomography-based-simpli]
tags: [imaging, 3D-imaging, scaffold-characterization, bone-imaging]
created: 2026-04-25
updated: 2026-04-25
---

# Micro-CT imaging

## What it measures / produces

Micro-computed tomography (μCT) is a non-destructive 3D X-ray imaging technique that reconstructs a sample from a sequence of 2D projections taken at incremental rotations. Output: a 3D voxel grid of X-ray attenuation, segmentable into ceramic struts vs voids (for empty scaffolds), or scaffold + new bone + soft tissue (for explanted in-vivo scaffolds). For HA scaffolds, μCT is the gold-standard verification of as-built pore size, porosity, strut thickness, gradient profile, and (in vivo) bone-volume-fraction within the defect.

## When to use it

Use μCT (a) on **empty / zero-time-point scaffolds** to verify the as-built pore architecture before seeding cells [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]] [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]], (b) at **end-points of in-vivo studies** to quantify bone volume / mineral density / scaffold remodeling (see [[micro-CT-bone-volume-quantification]]), (c) **longitudinally in vivo** with low-dose live-animal μCT [[../sources/protocol-2025-landau-a-micro-computed-tomography-based-simpli]], (d) on native bone to extract design targets (e.g., the rabbit-femur radial/longitudinal porosity gradient [[../sources/2026-zhao-longitudinal-and-radial-microgradients-i]]). For the present hypothesis, μCT is the primary QC step verifying that the gradient-pore HA scaffold matches CAD within tolerance and that the uniform-pore control is matched on overall porosity.

## Key parameters

- **Resolution target**: ≤10 μm voxel size for scaffold pore characterisation; submicron achievable with synchrotron μCT [[../sources/2026-zhao-longitudinal-and-radial-microgradients-i]] (rabbit-femur native gradient measured at "micron-scale resolutions").
- **Representative scan parameters**: 90 kV, 88 μA, 10 min acquisition, 36 μm pixel size; reconstruction with Skyscan NRecon, analysis with CTVox [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]].
- **HU calibration**: phantom-based standardization with known radiodensities (water = 0 HU; air = −1000 HU); most animal tissues fall between −1000 and +2000 HU [[../sources/protocol-2025-landau-a-micro-computed-tomography-based-simpli]].
- **Segmentation thresholds**: ceramic strut + bone vs background / soft tissue; HA and mature bone are at similar attenuation, requiring careful threshold + dual-energy approaches for in-vivo HA scaffolds.
- **Bone volume fraction (BV/TV)**, trabecular thickness, trabecular separation, connectivity density — standard outputs for bone histomorphometry.

## Common variants

- **Ex-vivo μCT** of empty scaffolds (CAD verification) and explanted bone-scaffold composites (terminal-time-point bone formation).
- **In-vivo / live-animal μCT** with low-dose protocols for longitudinal imaging — reduces cohort size and captures inter-animal variability [[../sources/protocol-2025-landau-a-micro-computed-tomography-based-simpli]].
- **Synchrotron μCT** — sub-μm resolution but limited access; used for fine native-bone microstructure [[../sources/2026-zhao-longitudinal-and-radial-microgradients-i]].
- **Phase-contrast μCT** — sensitive to soft tissue; useful for non-mineralised collagen.
- **Cone-beam vs fan-beam geometry** — cone-beam dominates desktop μCT (Skyscan, etc.).

## Step-level notes

- For ceramic scaffolds: dry sample; no contrast agent needed (HA self-attenuates strongly).
- For soft-tissue + scaffold: stain with osmium / iodine / phosphotungstic acid to differentiate.
- Reconstruction artefacts (beam hardening, ring artefacts) must be corrected before quantification.
- Threshold selection: Otsu / global thresholding works for high-contrast (ceramic vs void); local / adaptive thresholding needed for in-vivo bone vs HA scaffold.
- Always run *empty* scaffold μCT before cell seeding — establishes baseline pore architecture and confirms gradient is as built [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]] [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]].
- For gradient designs, sample multiple radial slices and quantify pore-size profile vs design target.

## Things to watch for

- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — μCT is the test for this; sintering shrinkage / debinding warping show up here. Without μCT verification, "100–500 μm gradient" is a CAD claim, not an as-built one.
- [[../failure-modes/sintering-shrinkage-pore-deviation]] — measured directly by comparing CAD vs μCT-measured pore sizes.
- [[../failure-modes/in-vivo-vs-in-vitro-discordance]] — μCT bone-volume-fraction is the primary in-vivo bridge metric; differences from in-vitro proliferation are flagged here.

## Sources

- [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]] — empty-scaffold μCT for CAD verification + in-vivo critical-defect μCT at 2/4/8 weeks.
- [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] — concrete μCT scan parameters for in-vivo CDHA scaffold.
- [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]] — μCT in bioceramic-scaffold review.
- [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]] — μCT in porosity-characterisation context.
- [[../sources/2017-zhang-additively-manufactured-scaffolds-for-bo]] — μCT-based geometry feedback for FEA modulus prediction.
- [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] — μCT as as-built verification step.
- [[../sources/2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por]] — μCT in bioprinting review.
- [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]] — μCT for scaffold imaging.
- [[../sources/2026-daghrery-advances-in-3d-printed-scaffolds-for-per]] — μCT in periodontal scaffold characterisation.
- [[../sources/2012-amini-bone-tissue-engineering-recent-advances]] — μCT in BTE characterisation.
- [[../sources/2013-henkel-bone-regeneration-based-on-tissue-engine]] — μCT in bone-defect-model evaluation.
- [[../sources/2014-polo-corrales-scaffold-design-for-bone-regeneration]] — μCT in scaffold-design review.
- [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]] — μCT in BTE characterisation.
- [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]] — μCT in ceramic scaffold characterisation.
- [[../sources/2015-chia-recent-advances-in-3d-printing-of-biomat]] — μCT for 3D-printed biomaterials.
- [[../sources/2015-do-3d-printing-of-scaffolds-for-tissue-rege]] — μCT for printed scaffolds.
- [[../sources/2017-gao-bone-biomaterials-and-interactions-with]] — μCT in bone biomaterial evaluation.
- [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]] — μCT in scaffold-cell interactions.
- [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] — empty-scaffold μCT verifying TIPS pore-size gradient (70 → 200 μm).
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — μCT for TPMS scaffold geometry verification.
- [[../sources/2026-zhao-longitudinal-and-radial-microgradients-i]] — μCT measurement of native rabbit femur radial/longitudinal porosity gradient (the biomimetic target benchmark).
- [[../sources/protocol-2025-landau-a-micro-computed-tomography-based-simpli]] — Bio-protocol step-by-step μCT workflow for in-vivo mouse imaging (BMD, body composition).
