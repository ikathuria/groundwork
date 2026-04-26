---
type: method
slug: EL-electroluminescence-imaging
aliases: [EL imaging, electroluminescence, current-injection EL]
related_methods: [minority-carrier-lifetime-photoluminescence, dark-IV-suns-Voc, IV-curve-measurement, damp-heat-aging-1000h]
key_reagents: [EVA-encapsulant, POE-polyolefin-encapsulant]
known_failure_modes: [Cu-finger-corrosion-encapsulant, FF-degradation-contact-resistance, finger-adhesion-loss-after-DH, Voc-degradation-Cu-contamination]
sources: [2012-nrel-iec61215-what-it-is, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration, 2022-karas-cu-outdiffusion-damp-heat, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-taiyangnews-heterojunction-technology-report, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-siliconpv-novel-shj-metallization-architectures, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV]
tags: [characterization, EL-imaging, current-injection, dark-spot-mapping, edge-degradation, complementary-PL]
---

# EL (Electroluminescence) Imaging

## What it measures / does
Current is injected into the cell in the dark and the resulting near-IR (~1150 nm for c-Si) radiative-recombination emission is imaged with a cooled InGaAs or Si CCD camera. Dark spots indicate broken fingers, cracked cells, high series-resistance regions, or damp-heat-induced edge degradation. Complementary to PL: EL is current-driven (sensitive to Rs), PL is photo-driven (sensitive to passivation and bulk lifetime).

## When to use it
Use after every reliability stress (DH / TC / HF) to localise degradation. Lachowicz 2024 EL identifies edge-initiated DH damage in 1-cell mini-modules; Karas 2022 uses EL to identify "good" vs "bad" cell regions for SIMS sampling.

## Key parameters
- Injection current: 1x to 8x Isc (Yacouba: high-injection 8 A EL).
- Camera: cooled InGaAs (1100-1700 nm), exposure 0.1-10 s.
- Spatial resolution: <100 um typical.
- Voltage: forward-biased to slightly above Voc.

## Common variants / alternatives
- [[minority-carrier-lifetime-photoluminescence]] — photo-driven; sensitive to passivation rather than Rs.
- IR thermography — detects hot-spot / shunt failures.
- Dark-lock-in thermography (DLIT) — high-sensitivity shunt detection.

## Things to watch for (failure modes)
- [[../failure-modes/Cu-finger-corrosion-encapsulant]] — edge-initiated DH damage shows as dark border in 1-cell modules (Lachowicz).
- [[../failure-modes/FF-degradation-contact-resistance]] — high-Rs regions appear darker in EL.
- [[../failure-modes/finger-adhesion-loss-after-DH]] — broken/delaminated fingers show as missing-finger dark stripes.
- [[../failure-modes/Voc-degradation-Cu-contamination]] — when Cu reaches c-Si bulk, lifetime drops and EL intensity drops broadly.

## Sources
- [[2012-nrel-iec61215-what-it-is]] — referenced as a reliability characterisation tool.
- [[2021-hatt-stable-cu-plated-shj-eupvsec]] — used PL not EL but cross-references the technique.
- [[2022-arena-sundrive-copper-metallisation-demonstration]] — implied for module characterisation.
- [[2022-karas-cu-outdiffusion-damp-heat]] — to identify "good" vs "bad" cell regions for SIMS sampling.
- [[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — module health imaging; identifies edge-initiated DH damage.
- [[2023-taiyangnews-heterojunction-technology-report]] — standard add-on for HJT IV station.
- [[2024-lachowicz-cu-plated-shj-aging-mini-modules]] — to localize edge-initiated degradation in 1-cell mini-modules.
- [[2024-siliconpv-novel-shj-metallization-architectures]] — uniformity of cell printing.
- [[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — module-level uniformity.
- [[2025-yacouba-shj-silver-free-metallization-progPV]] — high-injection (8 A) EL imaging on Cu-paste cells.
