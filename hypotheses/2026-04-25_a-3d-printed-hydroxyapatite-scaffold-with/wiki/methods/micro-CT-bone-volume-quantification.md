---
type: method
slug: micro-CT-bone-volume-quantification
aliases: [BV-TV, bone-volume-fraction, microCT-histomorphometry]
related_methods: [micro-CT-imaging, in-vivo-femoral-defect-model, in-vivo-calvarial-defect-model, histomorphometry]
key_reagents: []
known_failure_modes: [in-vivo-vs-in-vitro-discordance, short-term-proliferation-vs-long-term-bone-formation]
sources: [2015-ishack-bone-regeneration-in-critical-bone-defec, 2024-wang-polydopamine-functionalized-calcium-defi, 2022-yang-gaussian-curvature-driven-direction-of-c, 2026-zhao-longitudinal-and-radial-microgradients-i, protocol-2025-landau-a-micro-computed-tomography-based-simpli]
tags: [bone-imaging, quantification, in-vivo-readout]
created: 2026-04-25
updated: 2026-04-25
---

# Micro-CT bone-volume quantification

## What it measures / produces

Quantitative analysis of μCT data to extract bone-volume fraction (BV/TV), trabecular thickness, trabecular separation, connectivity density, and bone mineral density (BMD). Performed on segmented μCT volumes; standard tools: CTAn (Bruker Skyscan), Dragonfly, ImageJ-BoneJ.

## When to use it

Use as the primary in-vivo endpoint for bone-defect models (calvarial, femoral). For HA-scaffold + bone composite, requires careful threshold separation of HA strut vs new bone.

## Key parameters

- **Phantom calibration**: BMD-calibrated phantoms (HA equivalent at known density) at every imaging session.
- **Region of interest (ROI)**: defined by the original defect geometry, excluding native bone edges.
- **Segmentation thresholds**: dual-threshold for HA scaffold (high attenuation) vs new bone (intermediate); native tissue thresholds from atlas.
- **Standard outputs**: BV/TV (%), Tb.Th (mm), Tb.Sp (mm), Tb.N (1/mm), BMD (mg HA/cm³), connectivity density.
- **Scan parameters typical**: 90 kV, 88 μA, 36 μm pixel for in-vivo CDHA scaffold scans [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]].

## Step-level notes

- Reconstruction with Skyscan NRecon, analysis with CTVox / CTAn typical [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]].
- Manual segmentation for HA-vs-bone disambiguation (similar attenuations); semi-automated via dual-energy μCT possible.
- Report ROI definition explicitly; defect-only vs defect+margin BV/TV differ substantially.

## Things to watch for

- [[../failure-modes/in-vivo-vs-in-vitro-discordance]] — BV/TV is the in-vivo endpoint; in-vitro proliferation predicts it imperfectly.
- [[../failure-modes/short-term-proliferation-vs-long-term-bone-formation]] — early time-points show only fibrovascular infill; mature mineralised BV requires 8+ weeks.

## Sources

- [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]] — BV quantification on robocasted HA/β-TCP at 2/4/8 weeks; baseline empty-scaffold μCT for normalisation.
- [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] — concrete μCT scan + reconstruction parameters.
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — BV quantification in rabbit femoral defect with TPMS β-TCP scaffolds.
- [[../sources/2026-zhao-longitudinal-and-radial-microgradients-i]] — μCT BV quantification of native rabbit femur radial/longitudinal porosity gradient (the design-target benchmark).
- [[../sources/protocol-2025-landau-a-micro-computed-tomography-based-simpli]] — Bio-protocol for BV / BMD / body-composition quantification in mouse μCT (Hounsfield-unit calibration, segmentation thresholds).
