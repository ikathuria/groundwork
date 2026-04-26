---
type: failure-mode
slug: copper-outdiffusion-during-damp-heat
severity: high
frequency_estimate: observed in specific degraded Cu-plated damp-heat samples; stack/package-dependent
applies_to_methods: [nickel-copper-plated-silicon-metallization, light-induced-plating, damp-heat-and-thermal-cycling-pv-reliability-test]
applies_to_reagents: [copper, tin-capping-layer, silver, eva-encapsulant]
applies_to_step_kinds: [encapsulation, damp-heat, module-aging]
sources: [2022-karas-copper-outdiffusion-damp-heat, 2021-park-combined-damp-heat-temperature-cycle-test]
tags: [photovoltaics, copper, damp-heat, failure-mode]
---

# Copper Outdiffusion During Damp Heat

## What It Is

Copper can migrate outward through capping layers during damp-heat exposure, appearing at outer contact surfaces and potentially creating paths for copper to later enter silicon or react with module packaging.

## How It Manifests

- EDS maps showing copper at the outer tin or silver cap surface.
- Voids or intermetallic evolution near Cu/Sn interfaces.
- SIMS-detected copper in silicon after damp-heat degradation.
- Pseudo-fill-factor or diode degradation after long damp heat.

## How To Detect It

- Cross-section SEM/EDS after 1000+ h damp heat.
- SIMS depth profiles at degraded and non-degraded regions.
- EL images and I-V tracking through damp-heat exposure.

## Mitigation

- Engineer capping layers to block copper outdiffusion, not only downward diffusion.
- Select encapsulants that reduce chemical driving forces for copper migration.
- Avoid relying on short-term bare-cell tests as proof of module stability.
- Include damp-heat aged cross-sections in the validation plan.

## Sources

- [[../sources/2022-karas-copper-outdiffusion-damp-heat]]
- [[../sources/2021-park-combined-damp-heat-temperature-cycle-test]]
