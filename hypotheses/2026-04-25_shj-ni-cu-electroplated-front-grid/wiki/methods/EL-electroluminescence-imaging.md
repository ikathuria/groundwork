---
type: method
slug: EL-electroluminescence-imaging
aliases: [EL imaging, electroluminescence, EL inspection, dark-spot mapping]
related_methods: [IV-curve-measurement, dark-IV-suns-Voc, damp-heat-aging-1000h, temperature-cycling-IEC61215-TC200, minority-carrier-lifetime-photoluminescence, SIMS-depth-profile]
key_reagents: [a-Si-H-passivation, ITO-transparent-conductive-oxide, EVA-encapsulant, POE-polyolefin-encapsulant]
known_failure_modes: [Cu-finger-corrosion-encapsulant, Cu-finger-oxidation-damp-heat, finger-adhesion-loss-after-DH, FF-degradation-contact-resistance, a-Si-H-passivation-degradation, Voc-degradation-Cu-contamination]
sources: [2011-nrel-reliability-testing-beyond-qualification, 2013-koehl-fraunhofer-accelerated-service-life-testing, 2014-nrel-pv-module-qualification-plus, 2019-karas-damp-heat-degradation-shj-cu, 2022-arena-sundrive-copper-metallisation-demonstration, 2022-karas-cu-outdiffusion-damp-heat, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-nrel-getting-ahead-of-curve-pv-assessment, 2024-siliconpv-novel-shj-metallization-architectures, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV]
tags: [imaging, electroluminescence, defect-mapping, reliability, characterization]
created: 2026-04-26
updated: 2026-04-26
---

# Electroluminescence (EL) imaging

**Slug:** `methods/EL-electroluminescence-imaging` · **Type:** method

## What it measures / does

Forward-biases the cell or module (typically Isc-equivalent or higher in single-cell modules) and captures the band-edge photon emission in a Si-sensitive (Si-CCD or InGaAs) camera. Dark regions correspond to non-radiative recombination zones — finger interruptions, broken interconnects, encapsulant-mediated edge corrosion, cracked busbars, or shunting hot spots. EL is the canonical spatial diagnostic that pairs with each STC IV / DH checkpoint to tell you *where* a cell is degrading.

## When to use it

Run EL at every damp-heat / TC checkpoint (Wohlgemuth 2011, Qualification Plus 2013/2014). For SHJ Cu-plated cells specifically, EL is the primary instrument for spotting edge-onset DH degradation in unsealed glass-glass mini-modules (Lachowicz 2023/2024 imaged at 0/1008/2076/2700 h). Use after laser-patterning steps to catch passivation damage zones before they are propagated downstream. For Cu-paste cells, dark zones in EL correlate with poorly-sintered Cu nanoparticle regions and poor Cu/ITO contact (Yacouba 2025).

## Key parameters / setpoints

- **Bias:** typically 1× Isc (cell at open-circuit voltage) for a module; high-injection EL at ~8 A bias gives best signal-to-noise for SHJ (Yacouba 2025).
- **Camera:** cooled Si-CCD or InGaAs; 1000 ms exposure typical; lock-in mode for low-noise quantitative EL.
- **Dark-room geometry:** module / cell mounted vertically; current applied via probe needles or ribbon clips.
- **Output:** spatial map of EL intensity, normalised against an as-fabricated reference image so checkpoint-to-checkpoint changes are directly comparable.
- **Karas 2022 use:** EL maps used to localise degraded regions for cross-section harvest before SIMS / EDS.

## Common variants

- **Photoluminescence (PL) imaging** — laser excitation instead of forward bias; works on bare cell precursors (no metallization required) — see [[methods/minority-carrier-lifetime-photoluminescence]].
- **Lock-in / modulated EL** — improves SNR and enables quantitative voltage mapping.
- **Hyperspectral / spectrally-resolved EL** — separates band-to-band from defect-related emission.
- **Module-level vs cell-level** — module EL needs higher bias to overcome ribbon resistance; mini-modules sit between.

## Things to watch for

- Edge-onset dark zones in glass-glass mini-modules indicate moisture/acetic-acid ingress; pair with edge-seal integrity check (Lachowicz: "1-cell mini-modules: worst case for testing DH degradation").
- Do not confuse Cu-paste sintering defects (dark zones, no time evolution) with Cu-diffusion-driven dark zones (slow expansion under DH stress).
- EL alone cannot distinguish passivation damage from Cu contamination; pair with [[methods/dark-IV-suns-Voc]] (J02 shift = Cu-contamination signature) and [[methods/SIMS-depth-profile]].
- For Cu-paste oxidation in TC, Frasson 2024 reports +2.3–2.4 mΩ Rs gain per 10-min oven step at 200–270 °C with visible blue-green discoloration — EL captures this as widening dark stripes around the fingers.

## Related methods

- [[methods/IV-curve-measurement]] — paired global STC measurement.
- [[methods/dark-IV-suns-Voc]] — paired electrical recombination-loss measurement.
- [[methods/damp-heat-aging-1000h]] — the canonical stress run EL instruments.
- [[methods/minority-carrier-lifetime-photoluminescence]] — pre-metallization counterpart.

## Citing sources

- [[sources/2011-nrel-reliability-testing-beyond-qualification]] — recommends EL as a per-checkpoint diagnostic.
- [[sources/2013-koehl-fraunhofer-accelerated-service-life-testing]] — EL imaging of cells after 4000 h DH.
- [[sources/2014-nrel-pv-module-qualification-plus]] — EL listed in Qualification-Plus instrumentation menu.
- [[sources/2019-karas-damp-heat-degradation-shj-cu]] — EL used to localise dark spots / degraded regions in DH-aged Cu-plated SHJ cells.
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — EL/PL imaging on completed cells for module CTM analysis.
- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — EL maps used to localise degraded regions for cross-section harvest before SIMS.
- [[sources/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — EL maps localise edge-onset DH degradation.
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — EL imaging at 0/1008/2076 h DH.
- [[sources/2024-nrel-getting-ahead-of-curve-pv-assessment]] — recommended diagnostic for emerging-tech reliability.
- [[sources/2024-siliconpv-novel-shj-metallization-architectures]] — EL inspection of best AgCu / Cu paste cells per batch.
- [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — module characterisation with EL imaging on glass-glass POE-encapsulated SHJ modules.
- [[sources/2025-yacouba-shj-silver-free-metallization-progPV]] — high-injection (8 A) EL imaging of all-Cu-SP SHJ cells.
