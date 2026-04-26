---
type: method
slug: DAPI-staining
aliases: [DAPI, nuclear-counterstain]
related_methods: [phalloidin-actin-staining, confocal-microscopy, fluorescence-microscopy, live-dead-staining]
key_reagents: [DAPI]
known_failure_modes: [HA-autofluorescence-confounds-livedead, edge-effect-in-scaffold-cell-seeding]
sources: [2024-wang-polydopamine-functionalized-calcium-defi, 2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone, 2022-yang-gaussian-curvature-driven-direction-of-c, 2016-murphy-scaffolds-and-cells-for-tissue-regeneration, protocol-2025-amin-murine-osteoblast-and-osteoclast-co-cult]
tags: [imaging, nuclear-stain, cell-counting]
created: 2026-04-25
updated: 2026-04-25
---

# DAPI nuclear staining

## What it measures / produces

DAPI (4',6-diamidino-2-phenylindole) binds AT-rich regions of dsDNA, fluorescing brightly blue (λ ex/em ≈ 358/461 nm). Output: nuclear counterstain for cell counting, spatial distribution, and apoptotic-nuclear-morphology detection. Standard companion to phalloidin (cytoskeleton, see [[phalloidin-actin-staining]]) and Ki67 (proliferation marker) in scaffold imaging.

## When to use it

Use DAPI (a) for total cell number per scaffold via z-stack confocal imaging and counting, (b) for spatial distribution to disambiguate edge-vs-core seeding bias (the limitation of bulk PicoGreen), (c) as a counterstain in immunofluorescence panels.

## Key parameters

- **Working concentration**: 0.1–1 µg/mL in PBS or mounting medium.
- **Incubation**: 5–15 min at RT.
- **Imaging**: blue (DAPI) channel ~358 nm ex / 461 nm em.

## Things to watch for

- [[../failure-modes/HA-autofluorescence-confounds-livedead]] — porous HA can fluoresce in UV; image-mask or background-subtract.
- [[../failure-modes/edge-effect-in-scaffold-cell-seeding]] — z-stack DAPI reveals whether cells are concentrated at the scaffold surface.

## Sources

- [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] — DAPI on gradient CDHA scaffolds with mBMSCs/HUVECs.
- [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]] — DAPI / phalloidin on PCL/HA gradient scaffolds.
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — DAPI in TPMS scaffold imaging.
- [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]] — DAPI in scaffold-cell imaging.
- [[../sources/protocol-2025-amin-murine-osteoblast-and-osteoclast-co-cult]] — DAPI in decellularization confirmation.
