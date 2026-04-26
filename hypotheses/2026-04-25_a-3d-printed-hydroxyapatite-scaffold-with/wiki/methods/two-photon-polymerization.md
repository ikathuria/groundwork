---
type: method
slug: two-photon-polymerization
aliases: [2PP, two-photon-lithography, multiphoton-polymerization, direct-laser-writing]
related_methods: [3D-printing-stereolithography, DLP-vat-photopolymerization]
key_reagents: [photoinitiator-TPO, photoinitiator-LAP, PEG-DA]
known_failure_modes: [cytotoxic-residue-from-binders-or-photoinitiators, cad-vs-actual-pore-size-mismatch]
sources: [2020-garot-additive-manufacturing-of-material-scaff, 2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp, 2015-chia-recent-advances-in-3d-printing-of-biomat, 2026-liu-design-and-fabrication-of-biomimetic-gra, 2025-liu-gradient-scaffolds-in-bone-soft-tissue-i, 2025-xie-recent-advances-in-gradient-biomimetic-s]
tags: [additive-manufacturing, sub-micron-resolution, niche, photopolymerization]
created: 2026-04-25
updated: 2026-04-25
---

# Two-photon polymerization (2PP)

## What it measures / produces

2PP uses tightly focused femtosecond laser pulses to drive nonlinear two-photon absorption in a photocurable resin only at the focal voxel — sub-micron 3D voxel resolution (down to ~100 nm). Output: extremely high-resolution 3D parts, but at extreme cost in throughput (build times of hours per mm³).

## When to use it

Use 2PP only when sub-micron features are essential — unusual for HA bone scaffolds at the 100–500 μm pore-size scale.

## Key parameters

- **Voxel resolution**: ~100–300 nm.
- **Build volume**: typically <1 mm³ at high resolution.
- **Throughput**: hours per mm³.

## Common variants

- **Resin-based 2PP** with photoinitiators (TPO, LAP).
- **Ceramic-loaded 2PP** is rare and difficult (slurry scattering kills focal volume).

## Things to watch for

- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — small parts, high surface area, residual photoinitiator concentration concern.
- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — voxel size near material grain size leads to surface roughness.

## Sources

- [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] — 2PP in clinical-translation AM review.
- [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]] — 2PP in BTE comparison.
- [[../sources/2015-chia-recent-advances-in-3d-printing-of-biomat]] — 2PP in 3D-printing review.
- [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]] — 2PP among gradient AM routes.
- [[../sources/2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]] — 2PP in interface gradient review.
- [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]] — 2PP for tendon-bone gradient scaffolds.
