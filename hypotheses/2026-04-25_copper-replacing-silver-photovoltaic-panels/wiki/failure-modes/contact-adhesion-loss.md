---
type: failure-mode
slug: contact-adhesion-loss
severity: high
frequency_estimate: stack- and stress-dependent
applies_to_methods: [nickel-copper-plated-silicon-metallization, light-induced-plating]
applies_to_reagents: [copper, nickel, tin-capping-layer, silver]
applies_to_step_kinds: [plating, capping, thermal-stress, damp-heat]
sources: [2014-rehman-ni-cu-plating-review, 2022-karas-copper-outdiffusion-damp-heat]
tags: [photovoltaics, adhesion, metallization]
---

# Contact Adhesion Loss

## What It Is

Contact adhesion loss is mechanical or interfacial failure of the plated or printed metal contact. For copper metallization it can expose copper, change current collection, or create localized series-resistance failures.

## How It Manifests

- Finger dislodgement or delamination after stress.
- Localized electroluminescence darkening.
- Increased series resistance or reduced fill factor.
- Visible cross-section voids or separated interfaces.

## How To Detect It

- Peel/pull testing if suitable.
- EL imaging before and after stress.
- Cross-section microscopy.
- I-V and line-resistance tracking.

## Mitigation

- Optimize nickel/silicide seed layers and surface cleaning.
- Include adhesion tests after damp heat and thermal cycling.
- Avoid assuming good initial I-V means good mechanical reliability.

## Sources

- [[../sources/2014-rehman-ni-cu-plating-review]]
- [[../sources/2022-karas-copper-outdiffusion-damp-heat]]
