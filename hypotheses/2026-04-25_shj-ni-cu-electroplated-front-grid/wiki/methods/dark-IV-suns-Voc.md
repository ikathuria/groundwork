---
type: method
slug: dark-IV-suns-Voc
aliases: [Suns-VOC, pseudo fill factor, pFF, dark IV, J02 measurement]
related_methods: [IV-curve-measurement, EL-electroluminescence-imaging, damp-heat-aging-1000h, minority-carrier-lifetime-photoluminescence, transfer-length-method]
key_reagents: [a-Si-H-passivation, ITO-transparent-conductive-oxide, EVA-encapsulant, POE-polyolefin-encapsulant]
known_failure_modes: [Voc-degradation-Cu-contamination, Cu-LID-light-induced-degradation, a-Si-H-passivation-degradation, Cu-diffusion-into-c-Si, FF-degradation-contact-resistance, Ni-Cu-line-resistance-rise-DH]
sources: [2010-bartsch-lip-pvsc, 2011-nrel-reliability-testing-beyond-qualification, 2014-nrel-pv-module-qualification-plus, 2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, 2019-karas-damp-heat-degradation-shj-cu, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-karas-cu-outdiffusion-damp-heat, 2025-yacouba-shj-silver-free-metallization-progPV]
tags: [characterization, suns-VOC, pFF, J02, recombination, dark-IV]
created: 2026-04-26
updated: 2026-04-26
---

# Dark IV / Suns-VOC pseudo fill factor

**Slug:** `methods/dark-IV-suns-Voc` · **Type:** method

## What it measures / does

Reconstructs a series-resistance-free pseudo IV curve by measuring open-circuit voltage as a function of illumination intensity (Sinton flash + Suns-VOC analyser) or by sweeping the diode in the dark, then fitting J01 (radiative/diffusion recombination) and J02 (non-ideal SRH-like recombination at mid-gap defects). Because the curve is implicitly Rs-free, the "pseudo fill factor" pFF tracks recombination losses independently of contact-resistance losses — making it the standard early-warning instrument for Cu contamination and a-Si:H passivation drift.

## When to use it

Use at every damp-heat / TC checkpoint to surface Cu-contamination-driven Voc/J02 shifts before they show up in 1-sun STC IV (Wohlgemuth 2011 explicit recommendation). Use it on the development bench to track Cu-LID kinetics during accelerated thermal stress (Bartsch 2010 hotplate + Suns-VOC). Use it after laser ablation to check for passivation damage (Hatt 2021 reports ~10 mV Voc loss between laser and inkjet patterning of the NOBLE mask).

## Key parameters / setpoints

- **Suns-VOC equipment:** Sinton WCT-120 / FCT-450 type flash tester with calibrated reference cell; 1-sun-equivalent peak intensity, exponentially decaying flash; cell temperature 25 °C ± 1 °C.
- **Dark IV:** four-terminal Kelvin probe through cell busbars; sweep ±0.0 to ±0.7 V at 1–10 mV steps; double-diode fit yields J01, J02, ideality factors.
- **Pseudo IV outputs:** pFF, pVoc, pJsc, J01, J02; flag any J02 > ~10⁻⁸ A/cm² as a Cu-contamination warning per Karas 2019/2022.
- **Karas 2022 reference values:** Cu-Sn cells dropped pFF 82.1 → 77.0 % over 2000 h DH; J02 more than doubled. Cu-Ag cells: 79.4 → 77.9 % at 1000 h DH.
- **Hatt 2021 NOBLE bench values:** pFF tracking shows Voc up to 738 mV on M2 SHJ.

## Common variants

- **Suns-VOC** (illumination-modulated) — light source decays through 0–1 sun in ~10 ms; preferred for SHJ because no current flow avoids series-resistance interference.
- **Dark IV** — diode swept with the cell in the dark; same J01/J02 extraction but more sensitive to Rs at high forward bias.
- **Light I-V minus dark IV** ("pseudo light IV") — combines the two to separate Rs from recombination losses.
- **In-situ pFF tracking** during accelerated thermal stress (Bartsch 2010 hotplate Arrhenius extrapolation).

## Things to watch for

- Even sub-ppb Cu in the c-Si bulk depresses pFF and increases J02 (Lindroos 2015 quantifies the lifetime impact); this is the failure-mode signature for [[failure-modes/Voc-degradation-Cu-contamination]] and [[failure-modes/Cu-LID-light-induced-degradation]].
- a-Si:H passivation degradation under thermal or UV stress also drops pFF independently of Cu — pair with [[methods/minority-carrier-lifetime-photoluminescence]] to disambiguate.
- For the SHJ Cu-hypothesis Pass-3 design, Karas's retrospective demands a J02 envelope on every arm at every DH checkpoint; "no J02 increase" is the operational definition of "no Cu contamination."
- The 2018 Nature Materials retraction was triggered by Suns-VOC / spectral-response variability across nominally identical devices; report N=5–10 cells per arm + checkpoint Suns-VOC, not single-device pFF.

## Related methods

- [[methods/IV-curve-measurement]] — companion 1-sun STC IV (Suns-VOC supplements but does not replace).
- [[methods/EL-electroluminescence-imaging]] — spatial localisation of pFF-collapse regions.
- [[methods/damp-heat-aging-1000h]] — the stress run pFF instruments.
- [[methods/minority-carrier-lifetime-photoluminescence]] — bulk-lifetime cousin to pFF; same recombination physics.

## Citing sources

- [[sources/2010-bartsch-lip-pvsc]] — Suns-VOC pFF as the rapid degradation readout in the accelerated thermal-stress test for Cu-LID.
- [[sources/2011-nrel-reliability-testing-beyond-qualification]] — recommends dark-IV at every chamber checkpoint to catch Rs/Rsh shifts before STC IV.
- [[sources/2014-nrel-pv-module-qualification-plus]] — Qualification-Plus instrumentation menu listing Suns-VOC.
- [[sources/2019-hatt-noble-bifacial-shj-aip]] — Suns-VOC pseudo-efficiency comparisons on full-area NOBLE cells.
- [[sources/2019-hatt-noble-shj-solrrl]] — pFF / Suns-VOC characterisation on lab-scale NOBLE cells.
- [[sources/2019-karas-damp-heat-degradation-shj-cu]] — Suns-VOC pFF and J02 tracking as the primary degradation readout in DH.
- [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — pFF / Suns-VOC as the quality gate for laser-patterned NOBLE.
- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — pFF / J02 collapse correlated with SIMS-detected Cu in c-Si.
- [[sources/2025-yacouba-shj-silver-free-metallization-progPV]] — pFF as the c-Si Cu-contamination indicator on Cu-paste SHJ.
