---
type: method
slug: coaxial-printing-spinning
aliases: [coaxial-extrusion, coaxial-electrospinning, core-shell-printing]
related_methods: [multi-nozzle-extrusion, electrospinning, robocasting-direct-ink-writing, gradient-pore-design]
key_reagents: [hydroxyapatite, polycaprolactone, polylactic-acid]
known_failure_modes: [cad-vs-actual-pore-size-mismatch]
sources: [2026-liu-design-and-fabrication-of-biomimetic-gra, 2025-liu-gradient-scaffolds-in-bone-soft-tissue-i, 2025-xie-recent-advances-in-gradient-biomimetic-s]
tags: [coaxial, core-shell, gradient-method, NEW]
created: 2026-04-25
updated: 2026-04-25
---

# Coaxial printing / spinning

## What it measures / produces

Concentric-needle dispensing produces filaments / fibres with a core + shell (or multi-layer concentric) composition; in coaxial electrospinning, two pumps drive different polymer solutions through inner and outer needles. Output: filaments with **radial composition gradient within a single fibre** — a powerful primitive for radial-gradient scaffolds without multiple print passes.

## When to use it

Use coaxial when you want radial composition gradient at the per-filament scale (e.g., cell-laden core + bioactive shell, or hydrogel core + ceramic shell). Reviewed in [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]], [[../sources/2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]], [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]] as a key gradient-construction primitive.

## Things to watch for

- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — interfacial diffusion between core and shell can blur the intended gradient.

## Sources

- [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]] — coaxial printing/spinning for per-filament composition gradient.
- [[../sources/2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]] — coaxial in interface-tissue gradient scaffolds.
- [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]] — coaxial for tendon-bone gradient scaffolds.
