---
type: method
slug: fire-through-copper-paste-metallization
aliases: [Cu fire-through paste, atmospheric copper fire-through metallization, LECO-treated copper contacts]
related_methods: [copper-paste-screen-printing]
key_reagents: [copper-metallization-paste, copper]
known_failure_modes: [copper-diffusion-into-silicon, copper-hillock-electromigration-instability, contact-resistivity-drift]
sources: [2018-lee-conductive-copper-paste, 2025-stradins-front-side-copper-metallization-paste-crada, 2026-intal-critical-look-cu-fire-through]
tags: [photovoltaics, copper-paste, fire-through]
---

# Fire-Through Copper Paste Metallization

## What It Measures / Does

Fire-through copper paste metallization tries to form conductive contacts through dielectric/passivation layers, analogous in goal to fire-through silver pastes. The 2026 arXiv source adds laser-enhanced contact optimization as a post-treatment for the copper-silicon interface.

## When To Use It

Use only when the experiment is explicitly about silver-free or near-silver-free contacts and can support microscopic interface checks, electrical testing, and contamination controls. This method is riskier than using copper paste as a busbar or rear conductor over a silver contact.

## Key Parameters

- Dielectric stack and emitter/passivation structure.
- Firing profile and atmosphere.
- LECO or equivalent contact optimization.
- Series resistance, fill factor, and diode-quality metrics after processing.

## Things To Watch For

- [[../failure-modes/copper-diffusion-into-silicon]]
- [[../failure-modes/copper-hillock-electromigration-instability]]
- [[../failure-modes/contact-resistivity-drift]]
- [[../failure-modes/copper-contamination-of-shared-furnace]]

## Sources

- [[../sources/2018-lee-conductive-copper-paste]]
- [[../sources/2025-stradins-front-side-copper-metallization-paste-crada]]
- [[../sources/2026-intal-critical-look-cu-fire-through]]
