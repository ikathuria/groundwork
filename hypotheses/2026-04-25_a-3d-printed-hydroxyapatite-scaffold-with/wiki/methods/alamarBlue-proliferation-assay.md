---
type: method
slug: alamarBlue-proliferation-assay
aliases: [alamar-blue, resazurin-reduction-assay, AlamarBlue, alamarBlue-HS]
related_methods: [PicoGreen-DNA-quantification, MTS-assay, MTT-assay, CCK-8-assay, ALP-activity-assay, live-dead-staining]
key_reagents: [alamarBlue]
known_failure_modes: [HA-autofluorescence-confounds-livedead, proliferation-vs-differentiation-tradeoff]
sources: [2025-qi-3d-printed-bioceramic-scaffolds-for-bone, 2012-amini-bone-tissue-engineering-recent-advances, 2015-do-3d-printing-of-scaffolds-for-tissue-rege, 2017-gao-bone-biomaterials-and-interactions-with, 2016-murphy-scaffolds-and-cells-for-tissue-regeneration]
tags: [proliferation-assay, metabolic-assay, fluorescence-readout, non-destructive]
created: 2026-04-25
updated: 2026-04-25
---

# alamarBlue proliferation assay

## What it measures / produces

alamarBlue (resazurin) is a redox-active dye that is reduced by metabolically active cells from non-fluorescent blue resazurin to highly fluorescent pink resorufin. Output: fluorescence (or absorbance) intensity proportional to the number of viable, metabolically active cells, integrated across the scaffold. **Non-destructive** — cells survive the assay, allowing serial measurements on the same scaffold. For HA scaffolds, alamarBlue is the standard orthogonal metabolic-proliferation readout paired with DNA quantification (PicoGreen).

## When to use it

Use alamarBlue (a) as the **secondary / orthogonal proliferation readout** at day 1, 4, 7, 14, 21 in the gradient-vs-uniform comparison (the present hypothesis specifies an orthogonal pair: PicoGreen + alamarBlue/WST-1/MTS), (b) when you need serial / longitudinal readings on the same scaffold (alamarBlue is non-destructive; PicoGreen requires lysis), (c) when distinguishing live-metabolically-active cells from dead cells. Disagreement between alamarBlue (metabolic) and PicoGreen (DNA mass) flags a metabolic shift — which can reflect differentiation onset (proliferation-differentiation switch).

## Key parameters

- **Excitation/Emission**: ~560 / ~590 nm fluorescent readout; absorbance dual-wavelength 570 / 600 nm.
- **Working concentration**: 10% v/v final in cell culture medium (manufacturer standard).
- **Incubation**: 1–4 h at 37 °C, 5% CO₂; longer for low cell numbers.
- **Linear range**: typically 10² – 10⁶ cells per well; saturation at high density.
- **Wash steps before assay**: rinse scaffold with PBS to remove serum proteins that can confound the read.
- **Use in [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]] reviews** as a recurring proliferation readout for 3D-printed bioceramic scaffolds.
- **Use in [[../sources/2012-amini-bone-tissue-engineering-recent-advances]], [[../sources/2015-do-3d-printing-of-scaffolds-for-tissue-rege]], [[../sources/2017-gao-bone-biomaterials-and-interactions-with]], [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]]** as a generic primary-cell or cell-line viability/proliferation assay.

## Common variants

- **Standard alamarBlue** (Bio-Rad / Thermo): the classic resazurin formulation.
- **alamarBlue HS** (high sensitivity): better signal-to-noise at low cell counts.
- **PrestoBlue** (Thermo) — same chemistry, faster response (~10 min).
- **Resazurin sodium salt** — bulk reagent for in-house preparation.

## Step-level notes

- Always run a **scaffold-only (no-cell) blank** per scaffold geometry — porous HA can adsorb the dye and shift baseline.
- Saturated cells reduce more dye than the linear range allows; dilute or shorten incubation if approaching saturation.
- alamarBlue read is metabolism-state-dependent: cells that are differentiating may have lower metabolic rate per cell than proliferating cells, so alamarBlue/PicoGreen ratio drifts with culture stage [[../sources/2017-gao-bone-biomaterials-and-interactions-with]] [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]].
- Non-destructive — wash and return to fresh medium after assay.
- For longitudinal on-scaffold readings, ensure consistent scaffold geometry and orientation in the well to control for diffusion of dye into the porous core.

## Things to watch for

- [[../failure-modes/HA-autofluorescence-confounds-livedead]] — porous HA can scatter/fluoresce in the alamarBlue ex/em window; blank-subtract per scaffold.
- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — at later time-points (day 14+) cells differentiating to osteoblasts have reduced metabolism per cell; alamarBlue can underread relative to actual cell mass. Pair with PicoGreen to disambiguate.

## Sources

- [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]] — alamarBlue as standard metabolic readout in bioceramic-scaffold reviews.
- [[../sources/2012-amini-bone-tissue-engineering-recent-advances]] — alamarBlue / metabolic assays in BTE reviews.
- [[../sources/2015-do-3d-printing-of-scaffolds-for-tissue-rege]] — alamarBlue for 3D-printed scaffold viability.
- [[../sources/2017-gao-bone-biomaterials-and-interactions-with]] — alamarBlue in bone-biomaterial review; standard cell-stem cell viability readout.
- [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]] — alamarBlue in scaffold-cell interaction studies.
