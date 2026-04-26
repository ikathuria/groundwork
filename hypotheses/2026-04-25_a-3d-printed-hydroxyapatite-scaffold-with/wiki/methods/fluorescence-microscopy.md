---
type: method
slug: fluorescence-microscopy
aliases: [widefield-fluorescence, epifluorescence, fluorescence-imaging]
related_methods: [confocal-microscopy, DAPI-staining, live-dead-staining]
key_reagents: []
known_failure_modes: [HA-autofluorescence-confounds-livedead]
sources: [2025-lee-pcl-scaffold-with-well-defined-hierarchi, protocol-2025-amin-murine-osteoblast-and-osteoclast-co-cult]
tags: [imaging, fluorescence, widefield]
created: 2026-04-25
updated: 2026-04-25
---

# Widefield fluorescence microscopy

## What it measures / produces

Standard epifluorescence microscope: full-field illumination at fluorophore excitation wavelength, full-field detection with bandpass filter. Output: 2D fluorescence images. Cheaper and faster than confocal but cannot resolve depth; out-of-focus light reduces contrast in 3D samples.

## When to use it

Use widefield fluorescence for 2D scaffolds, thin sections, or live longitudinal imaging of reporter mice [[../sources/protocol-2025-amin-murine-osteoblast-and-osteoclast-co-cult]] where confocal phototoxicity is a concern.

## Things to watch for

- [[../failure-modes/HA-autofluorescence-confounds-livedead]] — HA scaffold autofluorescence is amplified in widefield (no optical sectioning rejects out-of-plane signal).

## Sources

- [[../sources/2025-lee-pcl-scaffold-with-well-defined-hierarchi]] — fluorescence imaging on PCL hierarchical pore scaffolds.
- [[../sources/protocol-2025-amin-murine-osteoblast-and-osteoclast-co-cult]] — longitudinal fluorescence imaging of DsRed osteoblasts / eGFP BMCs on demineralised bone paper.
