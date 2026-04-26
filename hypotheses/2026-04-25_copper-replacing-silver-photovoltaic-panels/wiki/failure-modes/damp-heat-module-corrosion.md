---
type: failure-mode
slug: damp-heat-module-corrosion
severity: high
frequency_estimate: observed in PV module stress tests; material-dependent
applies_to_methods: [damp-heat-and-thermal-cycling-pv-reliability-test, silicon-heterojunction-copper-plated-mini-module-aging]
applies_to_reagents: [eva-encapsulant, tpo-encapsulant, copper, silver]
applies_to_step_kinds: [encapsulation, damp-heat, module-aging]
sources: [2021-park-combined-damp-heat-temperature-cycle-test, 2022-karas-copper-outdiffusion-damp-heat, 2024-lachowicz-aging-tests-copper-plated-heterojunction]
tags: [photovoltaics, damp-heat, corrosion, module]
---

# Damp Heat Module Corrosion

## What It Is

Damp heat module corrosion is moisture- and heat-driven degradation of contacts, interconnects, encapsulants, or electrodes. For copper metallization it can couple with copper outdiffusion and capping-layer reactions.

## How It Manifests

- Maximum power loss.
- Fill-factor degradation and series-resistance increase.
- EL dark regions and interconnect/contact degradation.
- Copper detected outside intended contact regions.

## How To Detect It

- 85 deg C / 85% RH damp-heat exposure.
- I-V, EL, and visual inspection at intervals.
- Cross-section EDS/SIMS for copper-specific designs.

## Mitigation

- Select encapsulants and capping layers with copper stability in mind.
- Test encapsulated mini-modules, not only bare cells.
- Compare EVA versus polyolefin-type encapsulation where feasible.

## Sources

- [[../sources/2021-park-combined-damp-heat-temperature-cycle-test]]
- [[../sources/2022-karas-copper-outdiffusion-damp-heat]]
- [[../sources/2024-lachowicz-aging-tests-copper-plated-heterojunction]]
