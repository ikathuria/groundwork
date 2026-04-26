---
type: method
slug: EQE-measurement
aliases: [external quantum efficiency, spectral response, EQE, IQE measurement]
related_methods: [IV-curve-measurement, dark-IV-suns-Voc, EL-electroluminescence-imaging]
key_reagents: [a-Si-H-passivation, ITO-transparent-conductive-oxide]
known_failure_modes: [non-reproducibility-in-solar-cell-claims, Jsc-loss-from-cap-stack-shading, a-Si-H-passivation-degradation]
sources: [2018-nmat-graded-bandgap-perovskite-retraction-note]
tags: [EQE, spectral-response, characterization, Jsc, optical]
created: 2026-04-26
updated: 2026-04-26
---

# External quantum efficiency (EQE) measurement

**Slug:** `methods/EQE-measurement` · **Type:** method

## What it measures / does

Measures the cell's collection efficiency as a function of incident-photon wavelength: EQE(λ) = collected electrons per incident photon at wavelength λ. A monochromator (or filter wheel) plus a chopper + lock-in amplifier delivers a spectral-response curve that, when integrated with the AM1.5G reference spectrum, yields Jsc. EQE separates *optical* losses (front-grid shading, anti-reflection coating, parasitic absorption in the TCO) from *collection* losses (recombination, back-surface diffusion length).

## When to use it

Use it as a complement to STC IV when finger geometry, TCO thickness, or passivation are being changed — it tells you *why* Jsc moved. For SHJ Cu-plating work specifically: use EQE to (a) verify that narrower plated Cu fingers cut shading vs the screen-printed Ag baseline (driving Jsc up), and (b) detect a-Si:H passivation damage in the blue (400–500 nm) where front-surface recombination is most visible. In-corpus coverage is limited — only the 2018 *Nature Materials* perovskite retraction page touches this method, where spectral-response variability across nominally identical devices was one of the two retraction triggers.

## Key parameters / setpoints

- **Wavelength range:** 300–1200 nm typical for c-Si; 5 nm step.
- **Light source:** Xe arc + monochromator, or supercontinuum laser + acousto-optic tunable filter; chopped at ~75–250 Hz for lock-in detection.
- **Bias light:** 1-sun-equivalent white bias (especially for SHJ with low effective irradiance dependence) is critical so the small-signal EQE represents the cell's working point.
- **Probe spot:** small-area probe scanned across the cell, or full-cell uniform illumination if the system can supply it.
- **Reference:** calibrated reference photodiode (Si or Ge depending on band).
- **Repeatability target:** <1 % point-to-point reproducibility on a fixed test cell across multiple sessions.

## Common variants

- **Internal quantum efficiency (IQE)** — EQE divided by (1 − reflectance); separates collection from optical-front losses.
- **Single-spot EQE** vs **mapped EQE** — mapped scans show finger shading and edge defects spatially.
- **Suns-EQE / bias-light-dependent EQE** — measures collection at varying injection levels; useful for SHJ.
- **Lock-in vs flash EQE** — lock-in is the precision standard; flash is faster on production lines.

## Things to watch for

- Spectral-response variability across nominally identical devices is one of the two retraction triggers in *Nature Materials* 2018 — for any new SHJ Cu-plating champion claim, report N=5–10 cells per arm and the EQE envelope, not a single hero curve. See [[failure-modes/non-reproducibility-in-solar-cell-claims]].
- Front-grid shading shows up directly in EQE — narrower plated fingers (NOBLE 25–30 µm vs screen-print 30–40 µm) should give a measurable Jsc gain.
- TCO parasitic absorption in the IR (free-carrier absorption in heavy-doping ITO) is the SHJ-specific drag on EQE > 1000 nm; trade off with sheet-resistance.
- a-Si:H passivation damage from laser ablation or anneal shows up as blue (400–500 nm) EQE collapse — pair with [[methods/dark-IV-suns-Voc]] to confirm.

## Related methods

- [[methods/IV-curve-measurement]] — Jsc cross-check via integrated EQE × AM1.5G.
- [[methods/dark-IV-suns-Voc]] — pFF/Voc complement; together they trace the full IV curve.
- [[methods/EL-electroluminescence-imaging]] — reciprocity links EL emission to EQE collection.

## Citing sources

- [[sources/2018-nmat-graded-bandgap-perovskite-retraction-note]] — spectral-response variability across nominally identical devices was a primary retraction trigger; the cautionary precedent for any PV efficiency claim that asserts champion performance + reliability on a small set of devices.

> **In-corpus coverage note:** EQE is cited in only one Pass-1 source for this hypothesis (the 2018 *Nature Materials* retraction). It is included on the canonical methods list because it is part of the standard Pass-3 cell-characterisation menu, and because the retraction explicitly establishes EQE variability as the failure-mode signature for non-reproducibility — relevant to *any* champion-cell claim in the SHJ Cu-plating space (Yacouba 2025, SunDrive 2022, Hatt 2021). Lint pass: this page is intentionally lean.
