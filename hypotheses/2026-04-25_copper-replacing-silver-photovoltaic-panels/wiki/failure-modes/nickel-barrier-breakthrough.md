---
type: failure-mode
slug: nickel-barrier-breakthrough
severity: high
frequency_estimate: unknown; depends on nickel thickness, anneal, and copper exposure
applies_to_methods: [nickel-diffusion-barrier-plating, nickel-copper-plated-silicon-metallization]
applies_to_reagents: [nickel, copper, nickel-sulfate-hexahydrate]
applies_to_step_kinds: [barrier-deposition, annealing, firing]
sources: [2018-cheng-nickel-barrier-copper-metallization, 2014-rehman-ni-cu-plating-review, 2022-karas-copper-outdiffusion-damp-heat]
tags: [photovoltaics, nickel, barrier, copper]
---

# Nickel Barrier Breakthrough

## What It Is

Nickel barrier breakthrough occurs when the nickel or nickel-silicide layer no longer prevents copper movement toward silicon. It may show up as Cu3Si formation, copper detected beneath the barrier, or degraded electrical performance.

## How It Manifests

- Cu3Si peaks in XRD.
- Copper signal below or through a nickel layer in EDS/SIMS.
- Increased recombination or contact-resistance changes after anneal.

## How To Detect It

- XRD after thermal exposure.
- STEM/EDS of the Cu/Ni/Si stack.
- SIMS copper depth profiling.
- Electrical stress comparisons across nickel thickness conditions.

## Mitigation

- Validate nickel thickness and continuity before copper deposition.
- Use conservative anneal/firing windows.
- Include both pre-stress and post-stress cross-section checks.
- Compare 60 nm, 120 nm, or locally relevant nickel-equivalent barrier conditions rather than assuming a single thickness works.

## Sources

- [[../sources/2018-cheng-nickel-barrier-copper-metallization]]
- [[../sources/2014-rehman-ni-cu-plating-review]]
- [[../sources/2022-karas-copper-outdiffusion-damp-heat]]
