---
type: method
slug: confocal-microscopy
aliases: [LSCM, confocal-laser-scanning-microscopy, confocal]
related_methods: [fluorescence-microscopy, DAPI-staining, phalloidin-actin-staining, live-dead-staining]
key_reagents: []
known_failure_modes: [HA-autofluorescence-confounds-livedead]
sources: [2024-wang-polydopamine-functionalized-calcium-defi, 2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone, 2022-yang-gaussian-curvature-driven-direction-of-c, 2025-lee-pcl-scaffold-with-well-defined-hierarchi]
tags: [imaging, fluorescence, 3D-imaging]
created: 2026-04-25
updated: 2026-04-25
---

# Confocal laser scanning microscopy (LSCM)

## What it measures / produces

Confocal microscopy uses a focused laser and pinhole at the detector to reject out-of-focus light, enabling thin optical sections through thick samples. Output: stack of optical sections that can be reconstructed into 3D volumes. Essential for 3D scaffolds where widefield fluorescence is overwhelmed by out-of-plane fluorescence.

## When to use it

Use confocal (a) for z-stack imaging through 3D scaffolds (gradient distribution of cells, depth-resolved viability), (b) for high-contrast immunofluorescence with multiple channels (DAPI + phalloidin + osteogenic markers), (c) when widefield fluorescence is too blurry due to scaffold thickness.

## Key parameters

- **Pinhole size**: 1 Airy unit standard.
- **Z-step**: ~half the axial resolution; 0.5–2 μm typical.
- **Lasers**: 405 nm (DAPI), 488 nm (FITC / calcein / phalloidin-AF488), 561 nm (TexasRed / phalloidin-AF568), 633/640 nm (Cy5 / phalloidin-AF647).

## Things to watch for

- [[../failure-modes/HA-autofluorescence-confounds-livedead]] — HA scaffold autofluorescence can reach high z-depths; image-blank empty scaffolds.

## Sources

- [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] — confocal of cells on gradient CDHA scaffolds.
- [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]] — confocal on PCL/HA gradient scaffolds.
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — confocal of phalloidin / DAPI on TPMS scaffolds.
- [[../sources/2025-lee-pcl-scaffold-with-well-defined-hierarchi]] — confocal on hierarchical PCL scaffolds.
