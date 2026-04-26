---
type: failure-mode
slug: copper-diffusion-into-silicon
severity: critical
frequency_estimate: unknown; stack-dependent
applies_to_methods: [nickel-copper-plated-silicon-metallization, nickel-diffusion-barrier-plating, copper-paste-screen-printing, fire-through-copper-paste-metallization]
applies_to_reagents: [copper, copper-metallization-paste, nickel]
applies_to_step_kinds: [metallization, firing, annealing, reliability-test]
sources: [2014-rehman-ni-cu-plating-review, 2018-cheng-nickel-barrier-copper-metallization, 2022-karas-copper-outdiffusion-damp-heat, 2026-intal-critical-look-cu-fire-through]
tags: [photovoltaics, copper, diffusion, reliability]
---

# Copper Diffusion Into Silicon

## What It Is

Copper can enter silicon and create recombination-active defects or copper silicide phases, degrading photovoltaic device performance. This is the central technical objection to replacing silver with copper.

## How It Manifests

- Cu3Si formation after thermal exposure.
- Increased recombination or degraded diode behavior.
- Fill-factor and series-resistance losses after stress.
- SIMS-detected copper at the silicon surface or in bulk silicon.

## How To Detect It

- SIMS depth profiles for copper in silicon.
- STEM/EDS or XRD for copper silicide and barrier reaction products.
- I-V, pseudo-fill-factor, and diode-ideality changes after stress.
- Electroluminescence for spatially localized degradation.

## Mitigation

- Use [[../methods/nickel-diffusion-barrier-plating]] or validated dielectric/silver barrier regions.
- Avoid direct copper-to-silicon contact unless the method explicitly proves contact stability.
- Include post-stress SIMS/EDS or an equivalent copper-migration assay in the plan.
- Pair cell-level I-V data with damp-heat and thermal-stress data.

## Sources

- [[../sources/2014-rehman-ni-cu-plating-review]]
- [[../sources/2018-cheng-nickel-barrier-copper-metallization]]
- [[../sources/2022-karas-copper-outdiffusion-damp-heat]]
- [[../sources/2026-intal-critical-look-cu-fire-through]]
