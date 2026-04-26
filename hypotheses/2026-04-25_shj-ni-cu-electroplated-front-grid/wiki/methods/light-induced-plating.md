---
type: method
slug: light-induced-plating
aliases: [LIP, light-induced electroplating]
related_methods: [electroplated-Ni-Cu-stack, electroless-Ni-deposition, Cu-electroplating-acid-bath, laser-ablation-of-dielectric]
key_reagents: [acid-Cu-sulfate-bath, nickel-sulfamate-bath, silver-Ag-cap, tin-Sn-cap]
known_failure_modes: [Cu-out-diffusion-through-cap-stack, Cu-diffusion-into-c-Si, Ni-barrier-pinholes]
sources: [2010-bartsch-lip-pvsc, 2014-rehman-nicu-plating-csi-review, 2022-karas-cu-outdiffusion-damp-heat, pvtech-metallization-challenges-cell-manufacturing]
tags: [plating, photovoltage-driven, Cu-deposition, homojunction, Ni-Cu-stack]
---

# Light-Induced Plating (LIP)

## What it measures / does
LIP uses the cell's own photovoltage under illumination to drive cathodic metal deposition onto a pre-patterned front grid (Ag seed, Ni seed, or directly onto laser-opened Si). It produces a self-aligned thick metal finger without external contact to the front grid — the cell acts as its own current source.

## When to use it
Used at the metal-thickening step in a Ni/Cu (or Ag/Cu) plated front grid: after the seed and (where used) Ni barrier are deposited and the dielectric/ARC is patterned, the cell is dipped in an acid Cu electrolyte under simulator/halogen illumination to grow the conductive Cu finger. Common in PERC/homojunction Ni-Cu work; in SHJ-Ni/Cu-plating it is one of two thickening routes (the other being external-contact electroplating).

## Key parameters
- Illumination: 1-sun-equivalent halogen / LED arrays providing the photovoltage that biases the front grid cathodic.
- Bath: acid CuSO4 + H2SO4 + Cl- electrolyte (cyanide-free, optically transparent for illumination).
- Capping: Sn or Ag cap added in a subsequent LIP step (Karas et al. observe upward Cu out-diffusion through both caps under DH).
- Throughput / target finger thickness: 1-10 um Cu, deposition rate set by photo-generated current density.
- Plating temperature near room temperature; pH and chloride control critical for pitting and grain structure.

## Common variants / alternatives
- [[Cu-electroplating-acid-bath]] — externally biased Cu plating, used by NOBLE / SunDrive; does not require illumination but does require front-grid contact.
- [[electroless-Ni-deposition]] — the seed-deposition step that often precedes LIP in homojunction Ni-Cu stacks.
- [[NOBLE-selective-Cu-plating]] — SHJ-specific selective-plating route where LIP is replaced by externally-biased pulsed plating through an Al/AlOx native oxide mask.

## Things to watch for (failure modes)
- [[../failure-modes/Cu-out-diffusion-through-cap-stack]] — Karas 2022 documents Cu outdiffusion through both Sn and Ag LIP caps after 1000-3500 h damp heat, with EVA-acetic-acid as the chemical sink.
- [[../failure-modes/Ni-barrier-pinholes]] — LIP is non-selective on regions of poor Ni coverage, producing parasitic Cu spots and pinhole-mediated Cu ingress.
- [[../failure-modes/Cu-diffusion-into-c-Si]] — when the Ni barrier or TCO is incomplete, LIP-deposited Cu reaches c-Si and forms recombination centres.

## Sources
- [[2010-bartsch-lip-pvsc]] — foundational Fraunhofer ISE paper introducing the LIP-Ni-Cu-Sn stack on c-Si, reaching 20.3% on FZ and 16.8% on Cz; describes LIP setup (Bartsch J. Appl. Electrochem. 40 (2010) 757).
- [[2014-rehman-nicu-plating-csi-review]] — review of LIP physics (photo-generated electrons reducing Cu2+ at the front grid), efficiency benchmarks, and reliability constraints.
- [[2022-karas-cu-outdiffusion-damp-heat]] — uses LIP to deposit Ni, Cu, Sn, Ag stacks; SIMS/EDS evidence of upward Cu out-diffusion through cap layers in damp heat.
- [[pvtech-metallization-challenges-cell-manufacturing]] — IMEC industry overview situating LIP as a cyanide-free, illumination-driven plating route compatible with two-step seed-and-plate architectures.
