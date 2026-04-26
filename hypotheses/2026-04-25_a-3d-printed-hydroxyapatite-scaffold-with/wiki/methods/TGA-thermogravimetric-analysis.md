---
type: method
slug: TGA-thermogravimetric-analysis
aliases: [TGA, thermogravimetry]
related_methods: [debinding-thermal-treatment, ceramic-sintering, XRD-phase-analysis]
key_reagents: [hydroxyapatite, beta-tricalcium-phosphate, calcium-deficient-hydroxyapatite]
known_failure_modes: [HA-phase-decomposition-during-sintering, batch-to-batch-HA-stoichiometry-variation]
sources: [2017-eliaz-calcium-phosphate-bioceramics-a-review-o]
tags: [characterization, thermal-analysis, mass-loss]
created: 2026-04-25
updated: 2026-04-25
---

# Thermogravimetric analysis (TGA)

## What it measures / produces

TGA measures sample mass as a function of temperature (or time at constant T) under a controlled atmosphere. Output: mass-loss curves identifying water loss, decomposition steps, and oxidation. For HA: validates Ca/P stoichiometry (CDHA loses CO₂ from carbonate substitutions), tracks binder-burnout in green-body scaffolds during debinding, and confirms HA thermal stability up to ~1300 °C [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]].

## When to use it

Use TGA (a) to design / validate the debinding ramp by identifying organic-binder pyrolysis temperatures, (b) to detect water/carbonate content in HA powder lots, (c) to verify thermal stability of HA up to the sintering temperature. Less commonly used than XRD/EDX in BTE workflows.

## Key parameters

- **Temperature range**: RT to 1500 °C typical.
- **Heating rate**: 5–20 °C/min standard.
- **Atmosphere**: air, N₂, or O₂ (oxidation studies).
- **Sample mass**: 5–20 mg.

## Common variants

- **TGA-DSC** — paired with differential scanning calorimetry for heat-flow + mass-loss.
- **TGA-MS / TGA-FTIR** — paired with mass spectrometry / FTIR to identify evolved gases.

## Things to watch for

- [[../failure-modes/HA-phase-decomposition-during-sintering]] — TGA mass loss above ~1200 °C indicates HA → β-TCP / CaO transition.
- [[../failure-modes/batch-to-batch-HA-stoichiometry-variation]] — water / carbonate content varies between HA lots; TGA quantifies.

## Sources

- [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]] — TGA in CaP characterisation toolkit.
