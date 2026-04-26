---
type: failure-mode
slug: Jsc-loss-from-cap-stack-shading
severity: medium
frequency_estimate: "Designed shading 3–5 % for typical SHJ grids; each 5 µm of finger width adds ~0.1 mA/cm² Jsc loss. Plated Cu at 18 µm fingers (Maxwell/SunDrive) saves ~0.5 mA/cm² Jsc vs 40 µm screen-print Ag. Lorenz 2024: reducing nominal width 20→15 µm yields shading width 26→23 µm and Δη = +0.14 %abs."
applies_to_methods: [Cu-electroplating-acid-bath, screen-printed-Ag-paste, NOBLE-selective-Cu-plating, IV-curve-measurement, EQE-measurement]
applies_to_reagents: [Cu-paste-low-temperature, low-T-Ag-paste-generic-SHJ-grade, silver-Ag-cap, ITO-transparent-conductive-oxide]
applies_to_step_kinds: [plating, screen-print, cap-deposition, characterization]
sources: [2021-goldschmidt-tech-learning-tw-pv, 2023-taiyangnews-heterojunction-technology-report, 2024-lorenz-cutting-edge-metallization-shj-fraunhofer, 2024-siliconpv-novel-shj-metallization-architectures, pvtech-metallization-challenges-cell-manufacturing]
tags: [Jsc, shading, finger-width, cap-stack, optical-loss, fine-line]
created: 2026-04-26
updated: 2026-04-26
---

# Jsc loss from finger / cap-stack shading

**Slug:** `failure-modes/Jsc-loss-from-cap-stack-shading` · **Severity:** medium

## What it is

The metal grid + cap stack on the front of an SHJ cell shadows ~3–5 % of the active area. Optical Jsc loss scales with effective shaded width, so finger width and busbar count drive the trade-off between optical and resistive losses. Plated Cu's headline advantage — 18 µm fingers achievable (Maxwell/SunDrive 2023) vs 30–40 µm for fine-line screen-print Ag and 56 µm for pure Cu paste (Yacouba 2025) — translates directly into ~0.5 mA/cm² Jsc gain. The "cap-stack" nomenclature includes the Sn or Ag cap on plated Cu which adds a few additional micrometres to the shaded width if not deposited selectively.

## How it manifests

- **Jsc reduction** proportional to finger geometry; ~0.1 mA/cm² per 5 µm of effective shading width.
- **EQE reduction in the visible band** under the finger (spatially mapped EQE shows finger fingerprints).
- **Δη penalty** — Lorenz 2024: Δη = +0.14 %abs gain from reducing 20 µm → 15 µm nominal finger width (shading width 26→23 µm).
- **Cap-stack contribution** — Sn or Ag cap that overhangs the Cu finger increases the effective shading; selective Ag-on-Cu (immersion or LIP-Ag) is preferred over blanket deposition.

## How to detect it

- **1-sun Jsc measurement** — [[methods/IV-curve-measurement]]: the cell-level integrated metric.
- **Spatially-resolved EQE / LBIC mapping** — [[methods/EQE-measurement]]: identifies finger shadow.
- **Optical microscopy + image analysis** — measure effective finger width including any cap-stack overhang.
- **Confocal profilometry** for finger geometry (width × height × area cross-section).
- **Optics simulation** (e.g. PVlighthouse) — compute expected Jsc for the designed grid, compare to measured.
- **Jsc gain from grid optimisation** — Lorenz 2024 reports Δjsc = +0.056 mA/cm² from knotless screen alone (Δwf ≈ 1.3 µm reduction).

## Mitigation

- **Plated Cu fingers ≤20 µm width** — NOBLE: 25–30 µm; SunDrive: 11 µm at the 25.54 % record device, <6 µm on improved patterning.
- **Aspect-ratio engineering** — SunDrive prototype line: AR 1.0–1.2 (vs 0.6 lab); higher aspect maintains line conductance at narrow base width.
- **Selective Ag/Sn cap on Cu** — immersion Ag (~200 nm, Hatt 2019 NOBLE) covers only the Cu finger top, no lateral overhang.
- **Low-indium TCO + dielectric mask scheme** (Lachowicz 2024) — thin (~30 nm) ITO + dielectric layer simultaneously serves as antireflective + plating mask, optimising both shading and adhesion.
- **Multibusbar (SMBB / 16BB / 18BB)** — increases interconnection contact area while reducing per-finger current, allowing line-resistance penalty to be relaxed for further finger thinning.
- **Knotless fine-mesh screens** for paste arms — Lorenz 2024: 520 × 11 × 0° screen with 15 µm nominal openings.
- **TCO + cap-stack indium reduction** — Goldschmidt 2021 flags ITO indium as the *next* bottleneck after Ag; AZO + thin ITO compromises improve both Jsc (less absorption) and resource sustainability (cascades to [[failure-modes/silver-supply-bottleneck]]).

## Where it applies

- Methods: [[methods/Cu-electroplating-acid-bath]], [[methods/screen-printed-Ag-paste]], [[methods/NOBLE-selective-Cu-plating]], [[methods/IV-curve-measurement]], [[methods/EQE-measurement]]
- Reagents: [[reagents/Cu-paste-low-temperature]], [[reagents/low-T-Ag-paste-generic-SHJ-grade]], [[reagents/silver-Ag-cap]], [[reagents/ITO-transparent-conductive-oxide]]
- Step kinds: plating, screen-print, cap-deposition, characterization

## Severity rationale

Medium. Shading is well-modeled, geometrically determined, and tractable — every percent of efficiency in the SHJ cell-design exercise comes from this calculation. The hypothesis's success threshold (Δη ≤ 0.5 %abs at 1000 h DH) does not directly hinge on Jsc, but plated Cu's narrow-finger advantage is one of the headline reasons the route is competitive at all. Severity is medium because the failure is *quantified* and *predictable* (no surprise mechanism), unlike the Cu-contamination failures.

## Citing sources

- [[sources/2021-goldschmidt-tech-learning-tw-pv]] — implicit via TCO indium-bottleneck discussion; the cap-stack indium share is part of the same resource-sustainability trade-off.
- [[sources/2023-taiyangnews-heterojunction-technology-report]] — finger width 18 µm (plated) vs 40 µm (screen-print) directly ties to Jsc / shading.
- [[sources/2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] — Δη = +0.14 %abs from 20→15 µm; Δjsc = +0.056 mA/cm² from knotless screen.
- [[sources/2024-siliconpv-novel-shj-metallization-architectures]] — finger geometry across paste types drives Jsc trade-off.
- [[sources/pvtech-metallization-challenges-cell-manufacturing]] — finger-width discussion: 100–150 µm screen-print → narrower for less shading.
