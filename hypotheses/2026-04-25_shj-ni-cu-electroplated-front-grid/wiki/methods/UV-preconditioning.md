---
type: method
slug: UV-preconditioning
aliases: [UV exposure test, IEC 61215 UV preconditioning, UV dose conditioning, 15 kWh UV]
related_methods: [damp-heat-aging-1000h, temperature-cycling-IEC61215-TC200, humidity-freeze-IEC61215-HF10, IV-curve-measurement, EL-electroluminescence-imaging, extended-damp-heat-IEC63209]
key_reagents: [EVA-encapsulant, POE-polyolefin-encapsulant]
known_failure_modes: [a-Si-H-passivation-degradation, EVA-acetic-acid-corrosion, finger-adhesion-loss-after-DH, Cu-finger-corrosion-encapsulant]
sources: [2011-nrel-reliability-testing-beyond-qualification, 2012-nrel-iec61215-what-it-is, 2013-koehl-fraunhofer-accelerated-service-life-testing, 2014-nrel-pv-module-qualification-plus, 2022-arena-sundrive-copper-metallisation-demonstration]
tags: [reliability, UV, IEC-61215, preconditioning, encapsulant-aging, photo-stability]
created: 2026-04-26
updated: 2026-04-26
---

# UV preconditioning (IEC 61215)

**Slug:** `methods/UV-preconditioning` · **Type:** method

## What it measures / does

Exposes the front of the module to a controlled UV dose (15 kWh/m² total in 280–400 nm in IEC 61215; greater in Qualification Plus / IEC 63209 component-level extensions) at elevated module temperature, before subjecting the module to the TC50 + HF10 sequence. Targets photo-degradation of the encapsulant (EVA → acetic acid via Norrish photolysis), front-side delamination, and any UV-induced cell-level effects (e.g., a-Si:H Staebler-Wronski-like drift). Also surfaces module-level UV stability of the busbar / interconnect / backsheet.

## When to use it

Run as the first stage of the IEC 61215 UV/TC50/HF10 sequence. For SHJ Cu plating specifically, UV preconditioning is the test that exposes both (a) light-induced degradation in the cell itself (Cu-LID per Lindroos 2015 if any Cu has reached the bulk) and (b) UV-driven encapsulant chemistry that downstream attacks the Cu finger. SunDrive 2022 reports >1000 h light-induced-degradation testing on glass-glass bifacial mini-modules with passing reliability.

## Key parameters / setpoints

- **UV dose (IEC 61215):** 15 kWh/m² (280–400 nm) on the module front side.
- **UV dose (Qualification Plus, component-level backsheet):** 320 kWh/m² ≈ Phoenix backsheet service-life dose.
- **Module temperature:** 60 ± 5 °C during exposure (per IEC 61215).
- **UV source:** Xe arc with AM1.5G filter or fluorescent UV-A/UV-B lamps; calibrated dose rate.
- **Test sequence position:** UV → 50 thermal cycles → 10 humidity-freeze cycles, all on the same arm.
- **Köhl 2013 dose budget:** UV ≈ 5 % of global irradiation in plane-of-array; "5-suns + elevated temperature" UV chamber test of ~1000 h corresponds to 25 years of desert-climate UV when activation-energy-modulated.

## Common variants

- **IEC 61215 baseline** — 15 kWh/m² preconditioning before TC50/HF10.
- **Qualification Plus extension** — longer component-level UV (320 kWh/m² for backsheets).
- **In-situ UV + DH + electrical bias** — combined accelerated test for emerging tech.
- **Stand-alone "light-induced degradation" test** (SunDrive 2022) — >1000 h light exposure outside the IEC 61215 sequence to surface Cu-LID specifically.

## Things to watch for

- UV preconditioning surfaces *encapsulant* photo-aging (EVA browning, acetic-acid generation) which is the upstream of [[failure-modes/EVA-acetic-acid-corrosion]] and downstream [[failure-modes/Cu-finger-corrosion-encapsulant]].
- For Cu-plated SHJ specifically, UV exposure can drive Cu-LID ([[failure-modes/Cu-LID-light-induced-degradation]]) if any Cu has reached the c-Si bulk; pair UV with pFF / lifetime tracking.
- Spectral content matters — UV-B (280–315 nm) drives different chemistry than UV-A (315–400 nm); document the source spectrum.
- Module temperature during UV is non-trivial: hot fluorescent lamps deliver more degradation than ambient-temperature low-intensity UV at the same total dose.
- The 15 kWh/m² baseline is *preconditioning*, not a 25-year UV-life test — use Köhl's Arrhenius / activation-energy framework to extrapolate.

## Related methods

- [[methods/temperature-cycling-IEC61215-TC200]] — downstream stage in the IEC 61215 UV/TC50/HF10 sequence.
- [[methods/humidity-freeze-IEC61215-HF10]] — downstream stage.
- [[methods/damp-heat-aging-1000h]] — separate, parallel chamber arm in IEC 61215.
- [[methods/IV-curve-measurement]] — STC pre/post UV.
- [[methods/EL-electroluminescence-imaging]] — pre/post UV defect mapping.

## Citing sources

- [[sources/2011-nrel-reliability-testing-beyond-qualification]] — 15 kWh/m² UV before TC50/HF10 sequence.
- [[sources/2012-nrel-iec61215-what-it-is]] — UV preconditioning (15 kWh/m²) → 50 thermal cycles → 10 humidity-freeze cycles.
- [[sources/2013-koehl-fraunhofer-accelerated-service-life-testing]] — UV-dose model (5 % of global irradiation) used to size accelerated UV chamber runs.
- [[sources/2014-nrel-pv-module-qualification-plus]] — replaces with longer component-level UV exposures.
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — UV degradation testing on glass-glass POE mini-modules; >1000 h LID.
