---
type: method
slug: live-dead-staining
aliases: [calcein-AM-EthD, live-dead-viability-assay]
related_methods: [DAPI-staining, fluorescence-microscopy, confocal-microscopy, alamarBlue-proliferation-assay]
key_reagents: [calcein-AM, ethidium-homodimer]
known_failure_modes: [HA-autofluorescence-confounds-livedead, edge-effect-in-scaffold-cell-seeding]
sources: [2025-conoscenti-continuous-pore-size-gradient-enhances-z, 2025-lee-pcl-scaffold-with-well-defined-hierarchi, 2015-do-3d-printing-of-scaffolds-for-tissue-rege, 2017-gao-bone-biomaterials-and-interactions-with, 2016-murphy-scaffolds-and-cells-for-tissue-regeneration]
tags: [viability, fluorescence-imaging, cell-imaging]
created: 2026-04-25
updated: 2026-04-25
---

# Live/dead viability staining

## What it measures / produces

Two-color fluorescent viability stain: calcein-AM (cell-permeable; cleaved by intracellular esterases to fluorescent green calcein, λ ≈ 495/515 nm) labels live cells; ethidium homodimer-1 (cell-impermeable; binds DNA in dead cells whose plasma membrane is compromised, λ ≈ 528/617 nm) labels dead cells. Output: confocal/fluorescence images showing live (green) and dead (red) cells across the scaffold.

## When to use it

Use live/dead (a) for spatial viability assessment on 3D scaffolds, (b) as confirmation of cell-density assays (PicoGreen / alamarBlue), (c) to detect zonal viability differences in gradient scaffolds.

## Key parameters

- **Working concentrations**: 2 µM calcein-AM + 4 µM ethidium homodimer-1 (ThermoFisher LIVE/DEAD Viability/Cytotoxicity Kit, L3224).
- **Incubation**: 15–30 min in PBS at RT.
- **Imaging**: confocal preferred for 3D scaffolds (z-stacks); widefield fluorescence acceptable for 2D.

## Things to watch for

- [[../failure-modes/HA-autofluorescence-confounds-livedead]] — HA scaffolds can autofluoresce in the FITC channel; blank-subtract or use transmitted-light overlay.
- [[../failure-modes/edge-effect-in-scaffold-cell-seeding]] — confocal z-stacks reveal whether cells are concentrated at the outer surface vs distributed through the scaffold.

## Sources

- [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] — live/dead on TIPS PLLA gradient scaffolds.
- [[../sources/2025-lee-pcl-scaffold-with-well-defined-hierarchi]] — live/dead at day 7 on hierarchical PCL scaffolds.
- [[../sources/2015-do-3d-printing-of-scaffolds-for-tissue-rege]] — live/dead in printed-scaffold viability assessment.
- [[../sources/2017-gao-bone-biomaterials-and-interactions-with]] — live/dead in bone-biomaterial review.
- [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]] — live/dead in scaffold-cell interaction studies.
