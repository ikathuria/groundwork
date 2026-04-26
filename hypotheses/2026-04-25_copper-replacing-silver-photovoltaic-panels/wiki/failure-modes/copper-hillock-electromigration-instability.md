---
type: failure-mode
slug: copper-hillock-electromigration-instability
severity: medium
frequency_estimate: not quantified in corpus for PV; known concern in copper metallization
applies_to_methods: [fire-through-copper-paste-metallization, copper-paste-screen-printing]
applies_to_reagents: [copper, copper-metallization-paste]
applies_to_step_kinds: [thermal-processing, current-stress, reliability-test]
sources: [2026-intal-critical-look-cu-fire-through]
tags: [photovoltaics, copper, hillocks, electromigration]
---

# Copper Hillock / Electromigration Instability

## What It Is

Copper hillocks and electromigration are structural and current-driven instabilities that can compromise contact integrity. The arXiv fire-through source flags these as copper-specific concerns for solar-cell metallization.

## How It Manifests

- Protrusions or local shorts through dielectric layers.
- Contact degradation after thermal or electrical stress.
- Increased leakage, series resistance, or early failure.

## How To Detect It

- SEM/TEM of contacts after thermal stress.
- Electrical stress testing and I-V drift.
- Cross-section inspection near dielectric interfaces.

## Mitigation

- Optimize firing and LECO/contact-optimization steps.
- Include microscopic inspection after stress.
- Avoid direct adoption of copper process windows from silver paste.

## Sources

- [[../sources/2026-intal-critical-look-cu-fire-through]]
