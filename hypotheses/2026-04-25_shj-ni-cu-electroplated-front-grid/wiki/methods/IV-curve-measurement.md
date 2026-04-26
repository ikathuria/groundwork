---
type: method
slug: IV-curve-measurement
aliases: [STC IV, light I-V, AM1.5G I-V, sun-simulator I-V, 1-sun I-V, cell tester]
related_methods: [dark-IV-suns-Voc, EQE-measurement, EL-electroluminescence-imaging, transfer-length-method, four-point-probe-sheet-resistance, damp-heat-aging-1000h]
key_reagents: [a-Si-H-passivation, ITO-transparent-conductive-oxide, low-T-Ag-paste-generic-SHJ-grade, acid-Cu-sulfate-bath]
known_failure_modes: [non-reproducibility-in-solar-cell-claims, Voc-degradation-Cu-contamination, FF-degradation-contact-resistance, a-Si-H-passivation-degradation, Jsc-loss-from-cap-stack-shading, Cu-LID-light-induced-degradation]
sources: [2010-bartsch-lip-pvsc, 2011-nrel-reliability-testing-beyond-qualification, 2012-nrel-aluminum-metallization-tlm-printed, 2012-nrel-iec61215-what-it-is, 2013-koehl-fraunhofer-accelerated-service-life-testing, 2014-nrel-pv-module-qualification-plus, 2017-jeon-electroless-ni-front-metallization, 2018-nmat-graded-bandgap-perovskite-retraction-note, 2018-pvtech-metallization-shj-cells-modules, 2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, 2019-karas-damp-heat-degradation-shj-cu, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration, 2022-karas-cu-outdiffusion-damp-heat, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2024-fraunhoferise-photovoltaics-report, 2024-iea-pvps-trends-pv-applications, 2024-itrpv-15th-edition-roadmap, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-lorenz-cutting-edge-metallization-shj-fraunhofer, 2024-nrel-best-research-cell-efficiency-chart, 2024-siliconpv-novel-shj-metallization-architectures, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV]
tags: [characterization, IV, STC, AM1.5G, sun-simulator, primary-readout]
created: 2026-04-26
updated: 2026-04-26
---

# Light IV-curve measurement under STC

**Slug:** `methods/IV-curve-measurement` · **Type:** method

## What it measures / does

Sweeps the cell or module under a calibrated AM1.5G spectral illumination at 1000 W/m² and 25 °C ± 1 °C cell temperature, recording the current-voltage curve. From the IV curve come the headline figures of merit: Voc, Jsc (= Isc / area), FF, and η = Voc·Jsc·FF / Pin. This is the single most-cited method in the SHJ Ni/Cu corpus (25 of 45 sources reference it) — it is the primary success-or-fail readout for any cell-level claim.

## When to use it

Use it whenever a cell-level performance claim is made: post-metallization baseline; per-checkpoint during damp-heat / TC; before/after each accelerated stress; on every arm of the experiment (Ni/Cu plated, Ag screen-printed control, Cu-only no-barrier). Pair it with [[methods/dark-IV-suns-Voc]] (which is Rs-free) and [[methods/EQE-measurement]] (which is wavelength-resolved) to disambiguate Rs / recombination / shading contributions.

## Key parameters / setpoints

- **Illumination:** AM1.5G, 1000 W/m² ± 2 %, calibrated against a traceable reference cell (Class AAA solar simulator).
- **Cell temperature:** 25 °C ± 1 °C; for SHJ this is critical because the high Voc makes the cell extra-temperature-sensitive.
- **Sweep:** ±0.0 to ±0.7 V, 1–10 mV step; both forward and reverse to detect hysteresis.
- **Contacting:** GridTouch or HALM-type 4-probe Kelvin contacting on busbars; conductive chuck for full-area Jsc capture.
- **Reference cells used in sources:** ISFH-certified (SunDrive 25.54%), Wavelabs LED multi-spectral (Yacouba 2025), AMAT Botticelli (Frasson 2024), HALM (Pingel 2025), LOANA (Yacouba 2025).
- **Performance benchmarks (from sources):** SHJ research-cell record 26.81 % (LONGi 2022); SHJ Cu-plated record 26.41 % (SunDrive 2022); SHJ NOBLE 22.6 % (Hatt 2021); SHJ Cu-paste 23.08 % (Yacouba 2025); industry-typical 23–24 %.

## Common variants

- **Single-flash (xenon)** vs **steady-state (LED)** — LED preferred for SHJ to avoid spectral mismatch with the 800–1200 nm IR shoulder.
- **GridTouch / busbar-less** vs **busbar-contact** — for fine-grid plated cells, GridTouch avoids damaging soft Cu fingers.
- **Module-level IV** — same physics, different scale; needs higher current capability.
- **In-chamber IV** — for DH/TC, modules pulled at each checkpoint and remeasured at STC.

## Things to watch for

- Variability across nominally identical devices is the canonical failure mode flagged by the 2018 *Nature Materials* retraction; report N=5–10 per arm + the IV envelope, never a single hero curve.
- Time-evolution of the IV under bias light or storage is the second retraction trigger; check that pre-DH IV is *stable* (e.g., light-soak to a steady-state Voc) before treating it as the baseline.
- Spectral mismatch is the dominant systematic error on SHJ — characterise with the calibrated reference cell and apply the SR mismatch correction.
- For Cu-plated cells, the TCO + plated Cu finger geometry can confound the conductive chuck Jsc reading; use a black chuck for Jsc calibration (per Pingel 2025).
- Voc / FF drift between checkpoints is the early signature of [[failure-modes/Voc-degradation-Cu-contamination]] and [[failure-modes/FF-degradation-contact-resistance]].

## Related methods

- [[methods/dark-IV-suns-Voc]] — Rs-free pseudo-IV partner.
- [[methods/EQE-measurement]] — wavelength-resolved Jsc partner.
- [[methods/EL-electroluminescence-imaging]] — spatial defect localisation partner.
- [[methods/transfer-length-method]] — ρc cousin (drives FF via Rs).
- [[methods/four-point-probe-sheet-resistance]] — finger / sheet R cousin (also drives Rs).

## Citing sources

- [[sources/2010-bartsch-lip-pvsc]] — 1-sun cell IV characterising Ni/Cu/Sn vs Ag-LIP reference (20.3 % champion).
- [[sources/2011-nrel-reliability-testing-beyond-qualification]] — STC IV as the qualification pass/fail.
- [[sources/2012-nrel-aluminum-metallization-tlm-printed]] — IV used to validate contacts in finished cells.
- [[sources/2012-nrel-iec61215-what-it-is]] — STC peak power as the IEC 61215 pass/fail.
- [[sources/2013-koehl-fraunhofer-accelerated-service-life-testing]] — STC power per checkpoint.
- [[sources/2014-nrel-pv-module-qualification-plus]] — STC pass/fail in Qualification Plus.
- [[sources/2017-jeon-electroless-ni-front-metallization]] — Voc tracked under AM1.5 to gauge HF activation effect.
- [[sources/2018-nmat-graded-bandgap-perovskite-retraction-note]] — IV variability across nominally identical devices was a primary retraction trigger.
- [[sources/2018-pvtech-metallization-shj-cells-modules]] — implicit baseline for SHJ cell performance.
- [[sources/2019-hatt-noble-bifacial-shj-aip]] — STC IV on full-area NOBLE bifacial SHJ (20.0 %).
- [[sources/2019-hatt-noble-shj-solrrl]] — 1-sun STC characterisation on lab-scale NOBLE.
- [[sources/2019-karas-damp-heat-degradation-shj-cu]] — IV parameter tracking through DH.
- [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — sun-simulator IV on M2 NOBLE cells.
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — ISFH-certified champion cell IV.
- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — 1-sun IV tracking through DH.
- [[sources/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — IV tracking through aging.
- [[sources/2024-fraunhoferise-photovoltaics-report]] — STC efficiency baseline anchor.
- [[sources/2024-iea-pvps-trends-pv-applications]] — implicit baseline; 20–25 % commercial cell efficiency.
- [[sources/2024-itrpv-15th-edition-roadmap]] — implicit; cell-efficiency projections.
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — Pmax tracking, IV under 1-sun.
- [[sources/2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] — GridTouch industrial cell tester.
- [[sources/2024-nrel-best-research-cell-efficiency-chart]] — every record on the chart anchored to a certified IV measurement.
- [[sources/2024-siliconpv-novel-shj-metallization-architectures]] — AMAT Botticelli LED multi-spectral solar simulator.
- [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — HALM cell tester, 5BB and 9BB; black-chuck Jsc calibration.
- [[sources/2025-yacouba-shj-silver-free-metallization-progPV]] — STC IV with LOANA system; Wavelabs LED source.
