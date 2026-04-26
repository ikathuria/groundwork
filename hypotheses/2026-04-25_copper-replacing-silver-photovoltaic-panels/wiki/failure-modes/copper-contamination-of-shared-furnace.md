---
type: failure-mode
slug: copper-contamination-of-shared-furnace
severity: high
frequency_estimate: unknown; depends on paste, firing profile, and furnace controls
applies_to_methods: [copper-paste-screen-printing, fire-through-copper-paste-metallization]
applies_to_reagents: [copper-metallization-paste, copper, silver-conductive-paste]
applies_to_step_kinds: [firing, furnace-sharing, process-integration]
sources: [2025-stradins-front-side-copper-metallization-paste-crada]
tags: [photovoltaics, copper-paste, contamination, manufacturing]
---

# Copper Contamination of Shared Furnace

## What It Is

Copper paste may contaminate shared firing equipment or subsequent silver-metallized cells. This is a manufacturing and lab-operations failure mode that can invalidate comparisons if controls are fired in contaminated equipment.

## How It Manifests

- Degradation of silver control cells after copper-paste furnace use.
- Unexpected performance drift in samples not intentionally treated with copper.
- Copper detected in furnace components or follow-on cells.

## How To Detect It

- Fire silver controls before and after copper-paste runs.
- Include blank wafers or witness samples.
- Use SIMS/EDS if contamination is suspected.

## Mitigation

- Use a dedicated firing furnace or validated decontamination sequence.
- Randomize and separate control/experimental lots.
- Log furnace history and sample order.

## Sources

- [[../sources/2025-stradins-front-side-copper-metallization-paste-crada]]
