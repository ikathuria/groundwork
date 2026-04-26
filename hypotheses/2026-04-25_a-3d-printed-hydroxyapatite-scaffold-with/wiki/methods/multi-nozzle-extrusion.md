---
type: method
slug: multi-nozzle-extrusion
aliases: [multi-material-extrusion, multi-head-deposition, MHDS]
related_methods: [extrusion-based-3D-printing, robocasting-direct-ink-writing, gradient-pore-design, coaxial-printing-spinning]
key_reagents: [hydroxyapatite, beta-tricalcium-phosphate, polycaprolactone]
known_failure_modes: [cad-vs-actual-pore-size-mismatch, abrupt-interface-stress-concentration]
sources: [2026-liu-design-and-fabrication-of-biomimetic-gra, 2025-xie-recent-advances-in-gradient-biomimetic-s]
tags: [extrusion, multi-material, gradient-method, NEW]
created: 2026-04-25
updated: 2026-04-25
---

# Multi-nozzle extrusion

## What it measures / produces

Two or more independently-controlled extrusion nozzles dispense different inks side-by-side or in alternating layers, creating spatial composition gradients within a single print. Output: scaffolds with discrete or graded multi-material composition.

## When to use it

Use multi-nozzle extrusion when you want compositional gradients (e.g., HA fraction varying along the scaffold axis) on top of geometric gradients. Reviewed extensively in [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]] and [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]] as a major route for multi-gradient scaffolds.

## Common variants

- **Multi-nozzle parallel** — fixed-position nozzles printing different layers/regions.
- **Real-time mixer** — continuous in-line mixing along the print path for smooth gradient.
- **Coaxial** — concentric shell + core inks; see [[coaxial-printing-spinning]].

## Things to watch for

- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — switching between nozzles can introduce print-direction artefacts.
- [[../failure-modes/abrupt-interface-stress-concentration]] — discrete-zone composition transitions can concentrate stress.

## Sources

- [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]] — multi-nozzle extrusion among gradient AM routes for synergistic multi-gradient scaffolds.
- [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]] — multi-material extrusion for tendon-bone interface gradient scaffolds.
