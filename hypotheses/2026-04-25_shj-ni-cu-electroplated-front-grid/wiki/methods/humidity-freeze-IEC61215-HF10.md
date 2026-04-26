---
type: method
slug: humidity-freeze-IEC61215-HF10
aliases: [HF10, humidity-freeze cycling, 10× humidity-freeze, IEC 61215 HF]
related_methods: [damp-heat-aging-1000h, temperature-cycling-IEC61215-TC200, UV-preconditioning, IV-curve-measurement, EL-electroluminescence-imaging]
key_reagents: [EVA-encapsulant, POE-polyolefin-encapsulant]
known_failure_modes: [Cu-finger-corrosion-encapsulant, EVA-acetic-acid-corrosion, finger-adhesion-loss-after-DH]
sources: [2011-nrel-reliability-testing-beyond-qualification, 2012-nrel-iec61215-what-it-is, 2014-nrel-pv-module-qualification-plus]
tags: [reliability, IEC-61215, humidity-freeze, qualification, encapsulant]
created: 2026-04-26
updated: 2026-04-26
---

# Humidity-freeze cycling, 10 cycles (IEC 61215 HF10)

**Slug:** `methods/humidity-freeze-IEC61215-HF10` · **Type:** method

## What it measures / does

Cycles the module 10 times between 85 °C / 85 % RH (≥20 h dwell) and −40 °C (≥0.5 h dwell). The combination of moisture saturation followed by freezing stresses adhesion interfaces (encapsulant-glass, encapsulant-cell, finger-encapsulant) by mechanically driving water that has diffused into the laminate to expand on freezing. Designed to surface delamination and adhesion-loss failures that pure thermal cycling or pure damp-heat would miss.

## When to use it

Run it as part of the IEC 61215 sequence after UV preconditioning and TC50 (the combined "UV + 50 TC + 10 HF" leg). For SHJ Cu-plated cells specifically, this is the protocol that surfaces Cu-finger / encapsulant adhesion failures driven by alternating water saturation and freezing — i.e. the mechanical-fatigue counterpart to the chemical-corrosion DH test.

## Key parameters / setpoints

- **Cycle profile:** 85 °C / 85 % RH ≥ 20 h hold, ramp to −40 °C, ≥ 0.5 h hold, ramp back. Total cycle ~24 h. 10 cycles total.
- **Sequence position (IEC 61215):** UV preconditioning (15 kWh/m²) → 50 thermal cycles → 10 HF cycles, all in the same sample arm.
- **Test vehicle:** module-level (single-cell or small mini-module also acceptable for development).
- **Pass criteria:** ≤ 5 % power loss per IEC 61215; no visual delamination; wet leakage current within spec.
- **Instrumentation:** STC IV before and after; visual + EL inspection.

## Common variants

- **Extended HF20 / HF30** — multiplied cycle counts for emerging-tech reliability.
- **Stand-alone HF (without UV/TC50 preconditioning)** — used in development to isolate the freeze-mechanical effect from photo/thermal aging.

## Things to watch for

- HF surfaces *adhesion* failures more aggressively than DH; for SHJ Cu-plated cells, pair HF with [[methods/peel-test-90deg]] before and after to quantify adhesion drop.
- The water that froze and expanded was *already inside* the laminate from DH; HF therefore amplifies any encapsulant-side moisture-ingress weakness.
- For glass-glass mini-modules with unsealed edges, HF is brutal on the rim; document edge-seal status.
- 10 cycles is a screen, not a 25-year test (Wohlgemuth 2011, 2012).

## Related methods

- [[methods/damp-heat-aging-1000h]] — chemical-corrosion counterpart.
- [[methods/temperature-cycling-IEC61215-TC200]] — pure thermal-cycling counterpart.
- [[methods/UV-preconditioning]] — upstream stage in the same sequence.
- [[methods/EL-electroluminescence-imaging]] — pre/post diagnostic.

## Citing sources

- [[sources/2011-nrel-reliability-testing-beyond-qualification]] — names HF10 in the IEC 61215 sequence and notes it as part of the 1985 JPL Block VI rationale.
- [[sources/2012-nrel-iec61215-what-it-is]] — explicit "10 humidity-freeze cycles (85 °C/85 % RH → −40 °C)" position in the IEC 61215 sequence.
- [[sources/2014-nrel-pv-module-qualification-plus]] — HF10 retained in Qualification Plus as part of the IEC 61215 spine.

> **In-corpus coverage note:** HF10 is a routine IEC 61215 step but only three protocol sources reference it explicitly for SHJ; SHJ Cu-plating papers (SunDrive, Lachowicz, Karas) emphasise DH and TC over HF. This page is included for completeness of the qualification matrix; lint pass should consider whether HF10 belongs in the Lab Brief failure-map prominently or stays as a checklist item.
