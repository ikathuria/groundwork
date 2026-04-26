---
type: reagent
slug: Cu3Si-intermetallic
aliases: [Cu3Si, eta-prime Cu3Si, copper silicide]
cas: 12159-07-8
formula: Cu3Si (η′ phase)
suppliers: []
storage: not procured — forms in-situ as a failure-mode species at the Cu/Si interface
hazards: low (low quantity, embedded in cell)
known_failure_modes: [Cu3Si-formation-at-Si-interface, Cu-diffusion-into-c-Si, Voc-degradation-Cu-contamination, Ni-barrier-pinholes]
sources: [2022-karas-cu-outdiffusion-damp-heat]
tags: [intermetallic, failure-mode-artifact, Cu-Si-reaction]
---

# Cu3Si intermetallic (failure-mode species)

## What it is
A copper silicide intermetallic compound that forms when metallic Cu contacts crystalline silicon at temperatures as low as ~200 °C. It is NOT a procured reagent — it is a failure-mode artifact whose formation marks the breakdown of the Ni/TCO diffusion barrier. The η′-Cu3Si phase introduces deep recombination centres in the Si bulk (between Ec−0.15 and Ec−0.58 eV) and is the canonical mechanism by which Cu metallization fails on silicon. Listed under reagents because it is a well-defined chemical species with documented role in this hypothesis's failure mode.

## Common uses
- None as a reagent. It appears as an unwanted reaction product at Cu/Si interfaces:
  - PERC / homojunction Cu plated cells with insufficient Ni silicide barrier ([[2018-electrochemsci-barrier-properties-electroplated-ni]] — Cu3Si peaks visible by XRD at 300 °C with 60 nm Ni; at 400 °C with 120 nm Ni).
  - SHJ cells if the TCO barrier is breached (unlikely with intact ITO; not yet observed in the SHJ literature).
  - Long-term DH out-diffusion of Cu into the c-Si emitter — the underlying failure mode that Cu3Si formation tracks ([[2022-karas-cu-outdiffusion-damp-heat]]).

## Key spec / concentration ranges
- Phase: η′-Cu3Si (orthorhombic, low-temperature phase); η-Cu3Si (high-T) also reported.
- Formation onset: ~200 °C at thin-film Cu/Si interfaces ([[2015-lindroos-cu-lid-aalto-thesis]]); 300 °C in 60 nm-Ni-barrier samples ([[2018-electrochemsci-barrier-properties-electroplated-ni]]); 400 °C with 120 nm Ni.
- Detection: XRD (Cu3Si reflections), STEM-EDS facet-like grains in Si pyramid valleys, SIMS Cu signal in c-Si bulk.
- Defect levels: deep recombination band Ec−0.15 to Ec−0.58 eV.
- Diffusion driver: interstitial Cu in c-Si DCu,in = 3×10⁻⁴·exp(−0.18 eV/kT) cm²/s — diffuses through 400 µm wafer in <11 h at room temperature ([[2015-lindroos-cu-lid-aalto-thesis]]).

## Alternatives / variants
- Linked failure mode: [[../failure-modes/Cu3Si-formation-at-Si-interface]].
- Linked diffusion failure mode: [[../failure-modes/Cu-diffusion-into-c-Si]].
- The Ni-silicide barrier (Ni2Si / NiSi) — the protective intermetallic the cell designer WANTS instead of Cu3Si.

## Gotchas
- For SHJ specifically the TCO is the primary barrier; Cu3Si formation requires the TCO to be breached and the cell to be heated. Under SHJ thermal budget (≤200 °C) the formation is kinetically suppressed but not thermodynamically forbidden — long-term (10⁴+ h) field operation could still allow formation if Cu reaches a-Si:H/c-Si interface.
- Cu3Si is NOT a procurement item. It shows up as XRD peaks or STEM grains in failed samples.
- This reagent slot exists primarily so plan/protocol entries that note "Cu3Si formation observed at finger-Si interface after annealing" have a wikilinkable target.

## Sources
- [[2022-karas-cu-outdiffusion-damp-heat]] — references Cu3Si as the Si-side analogue concern to Cu-Sn IMC; integrates with SIMS observation of Cu in c-Si bulk after DH.
- [[2018-electrochemsci-barrier-properties-electroplated-ni]] — quantitative XRD + STEM observation of Cu3Si formation as a function of Ni barrier thickness and anneal temperature (300/400/500/600 °C).
- [[2015-lindroos-cu-lid-aalto-thesis]] — η′-Cu3Si forms at 200 °C, deep recombination levels, interstitial Cu diffusivity.
