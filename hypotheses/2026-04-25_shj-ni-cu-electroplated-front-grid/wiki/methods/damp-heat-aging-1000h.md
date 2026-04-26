---
type: method
slug: damp-heat-aging-1000h
aliases: [DH 85/85, IEC 61215 damp heat, 1000 h damp heat]
related_methods: [extended-damp-heat-IEC63209, temperature-cycling-IEC61215-TC200, humidity-freeze-IEC61215-HF10, EL-electroluminescence-imaging, IV-curve-measurement, dark-IV-suns-Voc, peel-test-90deg]
key_reagents: [EVA-encapsulant, POE-polyolefin-encapsulant, silver-Ag-cap, tin-Sn-cap]
known_failure_modes: [Cu-out-diffusion-through-cap-stack, Cu-finger-corrosion-encapsulant, finger-adhesion-loss-after-DH, EVA-acetic-acid-corrosion, Voc-degradation-Cu-contamination, Ni-Cu-line-resistance-rise-DH]
sources: [2010-bartsch-lip-pvsc, 2011-nrel-reliability-testing-beyond-qualification, 2012-nrel-iec61215-what-it-is, 2013-koehl-fraunhofer-accelerated-service-life-testing, 2014-nrel-pv-module-qualification-plus, 2014-rehman-nicu-plating-csi-review, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2019-karas-damp-heat-degradation-shj-cu, 2022-arena-sundrive-copper-metallisation-demonstration, 2022-karas-cu-outdiffusion-damp-heat, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-nrel-getting-ahead-of-curve-pv-assessment, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj]
tags: [reliability, IEC-61215, 85-85, accelerated-aging, hypothesis-primary-test, encapsulant-driven]
---

# Damp Heat Aging (1000 h)

## What it measures / does
Encapsulated cells / mini-modules are held at 85 C / 85% RH for >=1000 h under no electrical bias, then re-measured at STC. Detects corrosion, encapsulant delamination, junction-box adhesion failure, and (for plated-Cu) Cu out-diffusion / Cu ingress. The 1000 h endpoint is the IEC 61215 qualification minimum; for plated-Cu reliability research, runs are extended to 2000-3500 h to reach degradation endpoints.

## When to use it
Central to this hypothesis: the claim is "no measurable efficiency loss after 1000 h damp heat (85 C / 85% RH)" on encapsulated SHJ Ni-Cu mini-modules. Run before and after on glass-glass POE bifacial mini-modules; track Pmax, FF, pFF, J02; image with EL.

## Key parameters
- Standard: 85 C +/- 2 C, 85 +/- 5% RH, 1000 h (IEC 61215 §10.13).
- No electrical bias during dwell.
- Pre-conditioning often combines UV (60 kWh/m²) -> 50 TC -> 10 HF before DH.
- Pass criterion (IEC 61215): Pmax loss <=5% after the full sequence.
- Extended runs: Karas 2022 to 3500 h; SunDrive 2000-3000 h (3x IEC); Lachowicz 2024 2700 h.
- Climate equivalence (Köhl 2013): 1000 h DH covers 25-yr service only if Ea > 80 kJ/mol; alpine 25-yr requires 3300 h, tropical 2400 h at lower Ea.

## Common variants / alternatives
- [[extended-damp-heat-IEC63209]] — IEC TS 63209-2 polymer-durability menu, with bias.
- [[temperature-cycling-IEC61215-TC200]] — complementary qualification stress.
- [[humidity-freeze-IEC61215-HF10]] — UV/TC50/HF10 sequence.

## Things to watch for (failure modes)
- [[../failure-modes/Cu-out-diffusion-through-cap-stack]] — Karas 2022: Cu through Sn (Cu-Sn IMC + Kirkendall voids) and Ag (grain-boundary diffusion) caps after 1000-3500 h DH.
- [[../failure-modes/Cu-finger-corrosion-encapsulant]] — generic Cu corrosion under high humidity; edge-initiated in Lachowicz 1-cell mini-modules.
- [[../failure-modes/finger-adhesion-loss-after-DH]] — peel force collapse after 1000-2000 h DH.
- [[../failure-modes/EVA-acetic-acid-corrosion]] — EVA hydrolysis -> acetic acid; ~3x more surface Cu in EVA than POE (Karas 2022).
- [[../failure-modes/Voc-degradation-Cu-contamination]] — pFF / J02 tracked as principal Cu-ingress indicators.
- [[../failure-modes/Ni-Cu-line-resistance-rise-DH]] — finger conductivity loss observed in shingle-module DH.

## Sources
- [[2010-bartsch-lip-pvsc]] — partly relevant; uses thermally-accelerated 200 C aging instead of 85/85.
- [[2011-nrel-reliability-testing-beyond-qualification]] — proposes extending DH to power-loss endpoint to differentiate technologies.
- [[2012-nrel-iec61215-what-it-is]] — JPL Block-Buy origins; DH is an infant-mortality screen, not a wear-out test.
- [[2013-koehl-fraunhofer-accelerated-service-life-testing]] — Arrhenius time-transformation: 1000 h covers 25 yr only if Ea > 80 kJ/mol.
- [[2014-nrel-pv-module-qualification-plus]] — Qualification Plus retains 1000 h DH baseline + DML / 500 TC / extended UV.
- [[2014-rehman-nicu-plating-csi-review]] — IEC 61215 framework; Papet 3000 h HJT precedent for Cu plated.
- [[2018-pv-tech-metallization-interconnection-bifacial-shj]] — SmartWire SHJ passes 5x IEC = 5000 h DH.
- [[2019-karas-damp-heat-degradation-shj-cu]] — foundational paper showing Cu-plated PERC fails DH in EVA but not POE.
- [[2022-arena-sundrive-copper-metallisation-demonstration]] — SunDrive glass-glass bifacial passes 2000-3000 h DH (3x IEC).
- [[2022-karas-cu-outdiffusion-damp-heat]] — definitive mechanism paper: Cu out-diffusion + EVA-acetic-acid sink.
- [[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — CSEM SmartWire 5% Pmax after 2700 h; edge-initiated.
- [[2024-lachowicz-cu-plated-shj-aging-mini-modules]] — same as above peer-reviewed; 2% FF loss in shingle modules after 2000 h DH.
- [[2024-nrel-getting-ahead-of-curve-pv-assessment]] — argues SHJ + Cu plating requires updated reliability tests.
- [[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — flags DH as next-step for Cu/AgCu paste reliability.
