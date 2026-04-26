---
type: method
slug: nickel-diffusion-barrier-plating
aliases: [Ni barrier plating, electroplated nickel barrier, electroless nickel seed layer]
related_methods: [nickel-copper-plated-silicon-metallization, light-induced-plating]
key_reagents: [nickel, nickel-sulfate-hexahydrate, copper]
known_failure_modes: [nickel-barrier-breakthrough, copper-diffusion-into-silicon, contact-resistivity-drift]
sources: [2014-rehman-ni-cu-plating-review, 2018-cheng-nickel-barrier-copper-metallization, 2022-karas-copper-outdiffusion-damp-heat]
tags: [photovoltaics, nickel, diffusion-barrier]
---

# Nickel Diffusion Barrier Plating

## What It Measures / Does

Nickel barrier plating places nickel or nickel silicide between copper and silicon so copper does not directly enter the cell junction or bulk. In copper-for-silver PV designs, this is a protective method rather than the cost-saving conductor itself.

## When To Use It

Use when copper is plated near silicon or when copper paste may reach contact regions. If the copper is isolated on a rear-side busbar or over an existing silver fire-through contact, nickel may be less central, but diffusion evidence still needs to be checked.

## Key Parameters

- Electroless nickel bath chemistry, including [[../reagents/nickel-sulfate-hexahydrate]] in Cheng et al.
- Annealing temperature and duration for nickel silicide formation.
- Nickel thickness and coverage continuity.
- Copper thermal exposure and post-stress Cu3Si detection.

## Step-Level Notes

- [[../sources/2018-cheng-nickel-barrier-copper-metallization]] reports nickel silicide formation after 500 deg C annealing and tests 60 nm and 120 nm nickel conditions.
- A thicker or longer-plated nickel layer improved barrier behavior in that source, but barrier success is temperature- and stack-dependent.

## Things To Watch For

- [[../failure-modes/nickel-barrier-breakthrough]]
- [[../failure-modes/copper-diffusion-into-silicon]]
- [[../failure-modes/contact-resistivity-drift]]

## Sources

- [[../sources/2014-rehman-ni-cu-plating-review]]
- [[../sources/2018-cheng-nickel-barrier-copper-metallization]]
- [[../sources/2022-karas-copper-outdiffusion-damp-heat]]
