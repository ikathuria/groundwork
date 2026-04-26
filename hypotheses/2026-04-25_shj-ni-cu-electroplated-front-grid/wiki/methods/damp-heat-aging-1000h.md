---
type: method
slug: damp-heat-aging-1000h
aliases: [DH 85/85, IEC 61215 damp heat, 85°C 85% RH dwell, damp heat test]
related_methods: [extended-damp-heat-IEC63209, temperature-cycling-IEC61215-TC200, humidity-freeze-IEC61215-HF10, UV-preconditioning, EL-electroluminescence-imaging, dark-IV-suns-Voc, IV-curve-measurement, SIMS-depth-profile, peel-test-90deg]
key_reagents: [EVA-encapsulant, POE-polyolefin-encapsulant, ITO-transparent-conductive-oxide, silver-Ag-cap, tin-Sn-cap, acid-Cu-sulfate-bath, electrically-conductive-adhesive-ECA]
known_failure_modes: [Cu-finger-corrosion-encapsulant, Cu-finger-oxidation-damp-heat, EVA-acetic-acid-corrosion, finger-adhesion-loss-after-DH, Cu-out-diffusion-through-cap-stack, Cu-diffusion-into-c-Si, Voc-degradation-Cu-contamination, Ni-Cu-line-resistance-rise-DH, FF-degradation-contact-resistance]
sources: [2011-nrel-reliability-testing-beyond-qualification, 2012-nrel-iec61215-what-it-is, 2013-koehl-fraunhofer-accelerated-service-life-testing, 2014-fraunhofer-peel-testing-ribbons-solar-cells, 2014-nrel-pv-module-qualification-plus, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2019-karas-damp-heat-degradation-shj-cu, 2022-arena-sundrive-copper-metallisation-demonstration, 2022-karas-cu-outdiffusion-damp-heat, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-nrel-getting-ahead-of-curve-pv-assessment]
tags: [reliability, damp-heat, IEC-61215, accelerated-aging, encapsulant]
created: 2026-04-26
updated: 2026-04-26
---

# Damp-heat aging — 1000 h at 85 °C / 85 % RH (IEC 61215)

**Slug:** `methods/damp-heat-aging-1000h` · **Type:** method

## What it measures / does

Holds an encapsulated module (or mini-module / single-cell laminate) inside an environmental chamber at 85 °C dry-bulb and 85 % relative humidity for 1000 h, with periodic IV / EL / dark-IV checkpoints. Per Wohlgemuth/NREL the test was added to IEC 61215 specifically "to simulate the corrosion failures observed in fielded PV modules" — its job is to surface encapsulant hydrolysis, metallization corrosion, TCO electrochemical attack, edge-seal ingress, and adhesion loss before they appear in real fielded modules.

## When to use it

Mandatory for any new SHJ Cu-plating cell-technology change, since IEC TS 62915 lists "Cell Technology" changes as triggering 200 TC + 1000 h DH + Hot-Spot retest. For the SHJ Ni/Cu hypothesis the success criterion (Δη ≤ 0.5 %abs after 1000 h DH) lives directly on top of this protocol. Run it on every arm (Ni/Cu plated, Ag screen-printed control, Cu-only no-barrier) on the same chamber load to make the comparison clean.

## Key parameters / setpoints

- **Set-point:** 85 °C ± 2 °C, 85 % RH ± 5 %, 1000 h continuous (extended runs to 2000–3500 h documented in SunDrive, Lachowicz, Karas).
- **Checkpoints:** 0, 250, 500, 750, 1000 h is the canonical industry cadence; Lachowicz extends to 1008/2076/2700 h for Cu-plated SHJ.
- **Test vehicle:** glass-glass bifacial mini-modules are the SHJ standard (POE-encapsulated, often unsealed at the edges as the worst-case ingress geometry — Lachowicz 2023). Single-cell or 3-cell mini-modules amplify edge-induced degradation.
- **Pass criterion (IEC 61215):** ≤5 % power loss vs. pre-DH STC — but Wohlgemuth argues for "extend until both arms lose 10% power" as the more meaningful comparator.
- **In-chamber instrumentation (per Qualification Plus):** STC peak power, dry/wet leakage, IR thermography, EL imaging, dark IV at every checkpoint. Köhl 2013 also recommends Raman of the encapsulant vinyl band after 4000 h.

## Common variants

- **Extended damp heat** — see [[methods/extended-damp-heat-IEC63209]] — 2000–3000 h or "lose-10%-power" termination per IEC TS 63209, intended to push novel materials past infant-mortality screening.
- **Mini-module geometry** ([[organisms/mini-module-glass-glass]]) — high perimeter-to-area ratio amplifies edge ingress, surfacing failure modes faster.
- **Cycled DH-PID** (Lachowicz 2024): 2 × 96 h at 85 °C / 85 % RH with ±1000 V to combine PID and DH stress in one chamber.

## Things to watch for

- For SHJ Cu-plated cells, encapsulant chemistry dominates degradation: EVA hydrolyses to acetic acid that drives Cu corrosion and outdiffusion ([[failure-modes/EVA-acetic-acid-corrosion]], [[failure-modes/Cu-finger-corrosion-encapsulant]]); POE has no acetic-acid pathway and is the SHJ-Cu-compatible default.
- Karas 2022 found Cu in c-Si at 1000–3500 h DH on Ni-Cu-Sn / EVA samples — i.e. the Sn cap and Ni barrier together did *not* stop Cu under DH; SIMS at every checkpoint is needed to confirm the Ni barrier holds — see [[failure-modes/Cu-out-diffusion-through-cap-stack]].
- Mini-modules without edge sealing show DH degradation initiating at the rim (Lachowicz: 5 % at 2700 h with no seal); document the seal status.
- Suns-VOC pFF and J02 shift before STC power, so include [[methods/dark-IV-suns-Voc]] at every checkpoint.
- 1000 h IEC-61215 DH is *not* a 25-year life test (Wohlgemuth 2011, 2012; Köhl 2013) — frame the result as "passes IEC 61215" plus an explicit Arrhenius / extended-DH extrapolation if a lifetime claim is made.

## Related methods

- [[methods/extended-damp-heat-IEC63209]] — the natural follow-on for emerging tech reliability.
- [[methods/temperature-cycling-IEC61215-TC200]] — companion qualification stress.
- [[methods/EL-electroluminescence-imaging]] — primary in-chamber diagnostic.
- [[methods/dark-IV-suns-Voc]] — early-warning Rs/Rsh shift detector.
- [[methods/SIMS-depth-profile]] — definitive Cu-in-c-Si check at each checkpoint.
- [[methods/peel-test-90deg]] — adhesion before/after DH.

## Citing sources

- [[sources/2011-nrel-reliability-testing-beyond-qualification]] — defines the 1000 h DH baseline and recommends "lose 10 % power" extension.
- [[sources/2012-nrel-iec61215-what-it-is]] — historical justification: DH was added to capture corrosion seen in fielded modules.
- [[sources/2013-koehl-fraunhofer-accelerated-service-life-testing]] — FEM water-uptake confirms 85/85 saturates EVA, validating the corrosion-screen mechanism.
- [[sources/2014-fraunhofer-peel-testing-ribbons-solar-cells]] — DH halves peel force; pre/post DH adhesion check.
- [[sources/2014-nrel-pv-module-qualification-plus]] — Qualification-Plus instrumentation menu for each DH checkpoint.
- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — peel + DH/TC reliability data on SHJ plated cells.
- [[sources/2018-pvtech-metallization-shj-cells-modules]] — SHJ cells with SWCT < 5% degradation after >3× IEC DH.
- [[sources/2019-karas-damp-heat-degradation-shj-cu]] — first SHJ Cu-plated cell DH study; EVA vs POE comparison.
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — 2000+ h DH passing on SunDrive POE glass-glass mini-modules.
- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — 1000–3500 h DH with SIMS evidence of Cu in c-Si.
- [[sources/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — 2700 h DH, ~5 % power loss without edge sealing.
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — journal paper covering the same dataset with EL imaging at 0/1008/2076 h.
- [[sources/2024-nrel-getting-ahead-of-curve-pv-assessment]] — argues 1000 h DH alone is insufficient for emerging tech; pair with extended DH.
