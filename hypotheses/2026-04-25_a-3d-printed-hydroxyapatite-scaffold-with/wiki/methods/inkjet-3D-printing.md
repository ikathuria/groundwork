---
type: method
slug: inkjet-3D-printing
aliases: [inkjet-bioprinting, drop-on-demand-printing]
related_methods: [binder-jet-3D-printing, extrusion-based-3D-printing, robocasting-direct-ink-writing]
key_reagents: [hydroxyapatite, alginate, gelatin, collagen]
known_failure_modes: [cad-vs-actual-pore-size-mismatch, sintering-shrinkage-pore-deviation]
sources: [2020-wang-3d-printing-of-bone-tissue-engineering-s, 2020-garot-additive-manufacturing-of-material-scaff, 2025-hossen-biomimetic-strategies-for-bone-regenerat, 2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por, 2026-daghrery-advances-in-3d-printed-scaffolds-for-per, 2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp, 2015-chia-recent-advances-in-3d-printing-of-biomat, 2015-do-3d-printing-of-scaffolds-for-tissue-rege, 2026-liu-design-and-fabrication-of-biomimetic-gra, 2025-liu-gradient-scaffolds-in-bone-soft-tissue-i, 2025-xie-recent-advances-in-gradient-biomimetic-s]
tags: [additive-manufacturing, drop-on-demand, low-viscosity, bioprinting]
created: 2026-04-25
updated: 2026-04-25
---

# Inkjet 3D printing

## What it measures / produces

Inkjet 3D printing dispenses pico-/nano-liter droplets of low-viscosity bio-ink onto a build platform via piezoelectric or thermal print heads, layer-by-layer. Output: 3D constructs from low-viscosity inks (cell-laden hydrogel precursors, sol-gel ceramic precursors, droplet-on-droplet gelation). Distinct from binder-jet 3D printing (which dispenses binder onto a powder bed; see [[binder-jet-3D-printing]]). Less common for HA scaffolds because high HA loading cannot be inkjet-dispensed (clogging); typically used for hydrogel-bioactive-protein gradient bioprinting.

## When to use it

Use inkjet for (a) low-viscosity hydrogel inks (cell-laden), (b) gradient bioprinting of growth factors / cells / bioactive proteins, (c) droplet-level patterning at sub-100 μm resolution. Less applicable to pure-HA scaffolds.

## Key parameters

- **Droplet volume**: 1–100 pL typical; resolution set by droplet diameter (~30–80 μm).
- **Ink viscosity**: <30 cP for stable jetting.
- **Printhead types**: piezoelectric (gentler, broader ink range) or thermal (cheaper).

## Common variants

- **Drop-on-demand inkjet** — discrete droplets per command.
- **Continuous inkjet** — droplet stream with charge-deflection patterning (rarely used in BTE).
- **Multi-head inkjet** — gradients of multiple bio-inks.

## Things to watch for

- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — droplet spreading / coalescence broadens features beyond CAD.
- [[../failure-modes/sintering-shrinkage-pore-deviation]] — applies if inkjet-deposited sol-gel HA precursors are subsequently sintered.

## Sources

- [[../sources/2020-wang-3d-printing-of-bone-tissue-engineering-s]] — inkjet in AM-for-BTE classification.
- [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] — inkjet in clinical-translation review.
- [[../sources/2025-hossen-biomimetic-strategies-for-bone-regenerat]] — inkjet in biomimetic AM.
- [[../sources/2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por]] — inkjet in porous bioprinting.
- [[../sources/2026-daghrery-advances-in-3d-printed-scaffolds-for-per]] — inkjet in periodontal scaffolds.
- [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]] — inkjet in BTE comparison.
- [[../sources/2015-chia-recent-advances-in-3d-printing-of-biomat]] — inkjet in biomaterial 3D-printing.
- [[../sources/2015-do-3d-printing-of-scaffolds-for-tissue-rege]] — inkjet for printed tissue scaffolds.
- [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]] — inkjet among gradient routes.
- [[../sources/2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]] — inkjet for interface gradient scaffolds.
- [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]] — inkjet for tendon-bone gradient scaffolds.
