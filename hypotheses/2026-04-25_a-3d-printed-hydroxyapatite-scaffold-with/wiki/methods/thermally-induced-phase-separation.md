---
type: method
slug: thermally-induced-phase-separation
aliases: [TIPS, polymer-solution-phase-separation]
related_methods: [freeze-drying-scaffold-fabrication, gradient-pore-design]
key_reagents: [polylactic-acid, polycaprolactone]
known_failure_modes: [cad-vs-actual-pore-size-mismatch, sintering-shrinkage-pore-deviation]
sources: [2025-conoscenti-continuous-pore-size-gradient-enhances-z, 2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]
tags: [phase-separation, polymer-scaffold, gradient-method, NEW]
created: 2026-04-25
updated: 2026-04-25
---

# Thermally induced phase separation (TIPS)

## What it measures / produces

A polymer is dissolved in a solvent at elevated temperature; cooling drives liquid-liquid or liquid-solid phase separation, then solvent is removed (sublimation or extraction) to leave a porous polymer scaffold. **Continuous pore-size gradients are achievable by asymmetric cooling**: slower cooling (top-down via Peltier) gives smaller pores; faster cooling (rapid quench) gives larger pores. Conoscenti et al. produced a 70 → 200 μm continuous gradient in PLLA at 93% porosity by Peltier-controlled asymmetric cooling [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]].

## When to use it

Use TIPS for polymer scaffolds with continuous pore-size gradients without 3D printing — particularly when AM resolution is insufficient or polymer chemistry doesn't suit AM.

## Key parameters

- **Pore-size range**: 5–500 μm depending on cooling rate.
- **Polymer**: PLLA, PCL, PLGA dissolved in dioxane / DMF at 50–80 °C.
- **Cooling rate**: 1 °C/min (slow, small pores) to rapid quench (large pores).
- **Conoscenti recipe**: 1 °C/min ramp to 30 °C, 20 min hold (small-pore side), then fast quench to 30 °C, 50 min hold (large-pore side) → 70 → 200 μm gradient at 93 ± 0.5% porosity [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]].

## Common variants

- **Symmetric (uniform) TIPS** — uniform cooling rate.
- **Asymmetric / gradient TIPS** — Peltier-controlled cooling per side for gradient (Conoscenti).
- **Solid-liquid vs liquid-liquid TIPS** — different morphologies (cellular vs fibrous).

## Things to watch for

- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — TIPS gradient profile depends on cooling kinetics; verify by SEM / μCT.
- [[../failure-modes/sintering-shrinkage-pore-deviation]] — applies if TIPS is followed by solvent extraction with shrinkage.

## Sources

- [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] — concrete asymmetric-Peltier TIPS recipe for 70 → 200 μm continuous PLLA gradient at 93% porosity.
- [[../sources/2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]] — TIPS as a temperature-control gradient-scaffold fabrication route.
