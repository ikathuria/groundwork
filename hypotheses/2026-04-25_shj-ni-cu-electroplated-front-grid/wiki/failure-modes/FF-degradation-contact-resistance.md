---
type: failure-mode
slug: FF-degradation-contact-resistance
severity: high
frequency_estimate: "Hypothesis target: ρc ≤ 2 mΩ·cm² (TLM); SHJ Ag screen-print baseline 1–3 mΩ·cm². NOBLE plated-Cu ρc 0.1–1 mΩ·cm² (Hatt 2021); paste-Cu ρc 5–12 mΩ·cm² (Pingel 2025); pure-Cu paste ρc 10.28 mΩ·cm² at 56 µm fingers (Yacouba 2025). Cu-paste alone gives line R 95 Ω/cm vs Cu-paste+plated 0.3 Ω/cm (Lachowicz 2024)."
applies_to_methods: [transfer-length-method, four-point-probe-sheet-resistance, IV-curve-measurement, dark-IV-suns-Voc, Cu-electroplating-acid-bath, electroplated-Ni-Cu-stack, screen-printed-Ag-paste]
applies_to_reagents: [acid-Cu-sulfate-bath, low-T-Ag-paste-generic-SHJ-grade, Cu-paste-low-temperature, ITO-transparent-conductive-oxide, silver-Ag-cap]
applies_to_step_kinds: [plating, screen-print, cap-deposition, characterization]
sources: [2010-bartsch-lip-pvsc, 2012-nrel-aluminum-metallization-tlm-printed, 2014-fraunhofer-peel-testing-ribbons-solar-cells, 2014-rehman-nicu-plating-csi-review, 2017-jeon-electroless-ni-front-metallization, 2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2019-hatt-noble-bifacial-shj-aip, 2021-hatt-stable-cu-plated-shj-eupvsec, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-tepner-printing-tech-csi-review, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-lorenz-cutting-edge-metallization-shj-fraunhofer, 2024-siliconpv-novel-shj-metallization-architectures, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV, pvtech-metallization-challenges-cell-manufacturing]
tags: [FF, contact-resistance, rho-c, TLM, line-resistance, Rs, hypothesis-threshold]
created: 2026-04-26
updated: 2026-04-26
---

# Fill-factor degradation from contact resistance

**Slug:** `failure-modes/FF-degradation-contact-resistance` · **Severity:** high

## What it is

The fill factor (FF) of an SHJ cell is bounded by the series-resistance contributions of (a) the TCO sheet resistance, (b) the metal-finger line resistance, and (c) the metal/TCO contact resistivity ρc. The hypothesis sets ρc ≤ 2 mΩ·cm² as a hard threshold — above this, finite-element simulation shows >0.3 %abs FF loss for a typical SHJ cell. Cu-plated routes (NOBLE: 0.1–1 mΩ·cm²; SunDrive: matches Ag) clear the threshold easily; *paste*-based Cu routes (5–12 mΩ·cm² for AgCu, 10+ mΩ·cm² for pure Cu) cannot. This is one of the wiki's headline hypothesis-resolving contradictions: the ≤2 mΩ·cm² target rules out paste-Cu and forces the plated-Cu route.

## How it manifests

- **FF below 81 %abs** on cells with ρc > 2 mΩ·cm²; Cu-paste at 10 mΩ·cm² gives FF reduction attributed by Yacouba 2025 to higher Rs from poor Cu/ITO contact at 300 °C / 5 s curing.
- **TLM intercept >2 mΩ·cm²** in laser-scribed test patterns.
- **Higher Rs in dark IV** at the cell level.
- **Line R penalty** when finger width is reduced for Jsc gain — Hatt 2021: ρc < 1 mΩ·cm² required to avoid series-R penalty when narrowing fingers.
- **Difference vs Ag baseline** — the Ag SHJ baseline is the moving target; Lorenz 2024 pushed it to η = 23.2 % at 16.3 mg/cell with 15 µm nominal finger width.
- **Bartsch 2010**: fully plated cells showed FF below pFF due to inhomogeneous Ni / laser-ablation patterning — adhesion / continuity failures translate to FF losses.

## How to detect it

- **TLM (transfer length method)** — [[methods/transfer-length-method]]: laser-separated stripes (PV-Tools TLM-Scan setup per Pingel 2025), 2 mm × 10 mm pads (Yacouba 2025); separate Rsh and ρc fit. Sensitivity to ρc < 1 mΩ·cm².
- **Four-point-probe / Kelvin-probe line resistance** — [[methods/four-point-probe-sheet-resistance]]: 3 cm dog-bone test patterns (Frasson 2024); pad-to-pad line R in Ω.
- **Dark IV / Suns-VOC pFF vs FF gap** — [[methods/dark-IV-suns-Voc]]: pFF − FF > 1 %abs flags series-R / contact-R problems specifically.
- **1-sun IV with conductive chuck** — [[methods/IV-curve-measurement]]: HALM cell tester (Pingel 2025) or Botticelli LED (Frasson 2024); 5BB / 9BB / 16BB layouts to deconvolve grid contribution.
- **Separate dual-print 5BB test** — Lorenz 2024's method: print extra busbars to measure Rgrid directly.

## Mitigation

- **Plated Cu over plated Cu seed** — NOBLE: ρc 0.1–1 mΩ·cm² well below the 2 mΩ·cm² target (Hatt 2021).
- **Pulsed Cu plating** — Hatt 2019: 6 A/dm² medium CD, 15 ms forward / 1 ms reverse, anodic:cathodic = 4.5; delivers low-stress, low-resistivity deposits.
- **HF activation before electroless Ni** — Jeon 2017 reports significant Voc improvement (= lower Rs) by removing native SiO₂ at the Ni/Si interface.
- **Bath additive control** — additive levels in [[reagents/acid-Cu-sulfate-bath]] govern bulk resistivity and grain structure.
- **For paste arms (out of scope for the hypothesis but relevant comparator)**: AgCu paste (Frasson 2024 AgCu1 matches Ag at 21.94 % vs 21.95 %), or paste seed + plated Cu (Lachowicz 2024: line R drops from 95 Ω/cm to 0.3 Ω/cm with plated Cu reinforcing the seed).
- **Sub-100 nm Ni in plated stack** — too-thick Ni adds line R (Ni conductivity is lower than Cu); the hypothesis's sub-100 nm Ni is *necessary* for line resistance, even if it conflicts with [[failure-modes/Ni-barrier-pinholes]] requirements.
- **Fine-line printing for paste comparator** — Lorenz 2024 reduced 20 µm → 15 µm finger width with Δη = +0.14 %abs gain at 16 mg/cell; Tepner & Lorenz 2023 review the trajectory.

## Where it applies

- Methods: [[methods/transfer-length-method]], [[methods/four-point-probe-sheet-resistance]], [[methods/IV-curve-measurement]], [[methods/dark-IV-suns-Voc]], [[methods/Cu-electroplating-acid-bath]], [[methods/electroplated-Ni-Cu-stack]], [[methods/screen-printed-Ag-paste]]
- Reagents: [[reagents/acid-Cu-sulfate-bath]], [[reagents/low-T-Ag-paste-generic-SHJ-grade]], [[reagents/Cu-paste-low-temperature]], [[reagents/ITO-transparent-conductive-oxide]], [[reagents/silver-Ag-cap]]
- Step kinds: plating, screen-print, cap-deposition, characterization

## Severity rationale

High. FF / contact-resistance is one of the two hypothesis success-criteria gates (the other being Δη ≤ 0.5 %abs at 1000 h DH). Plated Cu routes clear the threshold (NOBLE: 0.1–1 mΩ·cm²; SunDrive: matches Ag at 26.4 % cell efficiency). Paste-Cu routes fundamentally cannot — Pingel 2025 documents 5–12 mΩ·cm² for AgCu; Yacouba 2025 documents 10.28 mΩ·cm² for pure Cu. Severity is high because the failure can be diagnosed and mitigated process-side (TLM is fast, plating chemistry is tunable), but it directly determines hypothesis pass/fail.

## Citing sources

- [[sources/2010-bartsch-lip-pvsc]] — Bartsch: fully plated cells showed FF below pFF due to inhomogeneous Ni/laser-ablation patterning.
- [[sources/2012-nrel-aluminum-metallization-tlm-printed]] — TLM methodology for screen-printed contacts on Si.
- [[sources/2014-fraunhofer-peel-testing-ribbons-solar-cells]] — adhesion loss → contact failure → series-R rise; peel test as upstream early warning.
- [[sources/2014-rehman-nicu-plating-csi-review]] — Ni/Cu plated cells reach FF 81–82 % vs 75–78 % for screen-printed Ag.
- [[sources/2017-jeon-electroless-ni-front-metallization]] — HF activation removes native SiO₂; Voc improvement = Rs reduction.
- [[sources/2018-pv-international-metallization-shj]] — line resistance the central performance lever; LCT-Ag the rate-limiter.
- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — finger-line-resistance optimisation framework.
- [[sources/2018-pvtech-metallization-shj-cells-modules]] — 20 µm-wide Cu plated fingers with line R ~1 Ω/cm vs 5 Ω/cm for fine-line LCT Ag.
- [[sources/2019-hatt-noble-bifacial-shj-aip]] — finger interruptions during inkjet-printing limit FF.
- [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — NOBLE: ρc < 1 mΩ·cm² required to avoid series-R penalty for narrow fingers; achieves it.
- [[sources/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — Cu paste alone has line R 95 Ω/cm; plated Cu reinforces to 0.3 Ω/cm.
- [[sources/2023-tepner-printing-tech-csi-review]] — LCT-Ag bulk resistivity trajectory; SHJ thermal budget constraint.
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — line R hierarchy and ρc 1.5 mΩ·cm² for Cu paste on ITO.
- [[sources/2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] — Ag SHJ baseline pushed to 16.3 mg/cell at 23.2 %.
- [[sources/2024-siliconpv-novel-shj-metallization-architectures]] — pure-Cu paste +2.3–2.4 mΩ Rs gain at 200–270 °C; AgCu matches Ag.
- [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — AgCu paste ρc 5–12 mΩ·cm²; the headline contradiction with the ≤2 mΩ·cm² hypothesis target.
- [[sources/2025-yacouba-shj-silver-free-metallization-progPV]] — Cu paste 10.28 mΩ·cm² at 56 µm fingers; AgCu 8.10 mΩ·cm² at 45 µm.
- [[sources/pvtech-metallization-challenges-cell-manufacturing]] — supplier-landscape framing.
