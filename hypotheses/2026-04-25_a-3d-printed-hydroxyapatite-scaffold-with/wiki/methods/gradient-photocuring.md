---
type: method
slug: gradient-photocuring
aliases: [grayscale-DLP, dose-modulated-photocuring]
related_methods: [DLP-vat-photopolymerization, 3D-printing-stereolithography, gradient-pore-design]
key_reagents: [photoinitiator-TPO, photoinitiator-LAP, PEG-DA]
known_failure_modes: [cad-vs-actual-pore-size-mismatch, cytotoxic-residue-from-binders-or-photoinitiators]
sources: [2026-liu-design-and-fabrication-of-biomimetic-gra]
tags: [photopolymerization, gradient-method, NEW]
created: 2026-04-25
updated: 2026-04-25
---

# Gradient photocuring

## What it measures / produces

Spatially modulated UV dose (intensity or exposure time) in DLP/SLA produces a crosslinking-density gradient within a single layer. Output: scaffolds with continuous mechanical-property gradient that doesn't require multi-material printing.

## When to use it

Use gradient photocuring for crosslinking-density / stiffness gradients in DLP or SLA. Reviewed in [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]] as a route to multi-gradient scaffolds.

## Things to watch for

- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — light scattering inside ceramic-loaded resin blurs the intended dose gradient.
- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — under-cured regions retain more uncured monomer.

## Sources

- [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]] — gradient photocuring among DLP-based gradient AM routes.
