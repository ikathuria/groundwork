---
type: failure-mode
slug: contact-resistivity-drift
severity: high
frequency_estimate: common measurement endpoint; mechanism varies
applies_to_methods: [nickel-copper-plated-silicon-metallization, copper-paste-screen-printing, fire-through-copper-paste-metallization, damp-heat-and-thermal-cycling-pv-reliability-test]
applies_to_reagents: [copper, silver-conductive-paste, copper-metallization-paste, nickel]
applies_to_step_kinds: [metallization, firing, damp-heat, thermal-cycling]
sources: [2014-rehman-ni-cu-plating-review, 2022-chen-thermal-stable-copper-screen-printed-back-contact, 2021-park-combined-damp-heat-temperature-cycle-test, 2026-intal-critical-look-cu-fire-through]
tags: [photovoltaics, contact-resistance, fill-factor]
---

# Contact Resistivity Drift

## What It Is

Contact resistivity drift is a change in line resistance, contact resistance, or series resistance after processing or stress. It is often the practical electrical signal that a copper replacement is failing.

## How It Manifests

- Lower fill factor or pseudo-fill-factor.
- Increased series resistance.
- Lower maximum power after damp heat.
- Wider or lower-aspect metal fingers causing resistive loss.

## How To Detect It

- I-V and Suns-Voc before and after stress.
- TLM/contact-resistivity measurements.
- Finger line-resistance measurements.
- EL imaging to localize series-resistance regions.

## Mitigation

- Compare copper and silver controls on the same layout where possible.
- Track resistance before and after firing, damp heat, and thermal cycling.
- Include microscopic inspection if drift occurs.

## Sources

- [[../sources/2014-rehman-ni-cu-plating-review]]
- [[../sources/2022-chen-thermal-stable-copper-screen-printed-back-contact]]
- [[../sources/2021-park-combined-damp-heat-temperature-cycle-test]]
- [[../sources/2026-intal-critical-look-cu-fire-through]]
