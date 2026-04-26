---
type: method
slug: temperature-cycling-IEC61215-TC200
aliases: [thermal cycling, TC200, PTC, IEC 61215 TC, -40/+85 cycle]
related_methods: [damp-heat-aging-1000h, extended-damp-heat-IEC63209, humidity-freeze-IEC61215-HF10, UV-preconditioning, EL-electroluminescence-imaging, IV-curve-measurement, peel-test-90deg]
key_reagents: [EVA-encapsulant, POE-polyolefin-encapsulant, electrically-conductive-adhesive-ECA, multibusbar-Cu-ribbon]
known_failure_modes: [Cu-finger-oxidation-damp-heat, Cu-finger-corrosion-encapsulant, finger-adhesion-loss-after-DH, Ni-Cu-line-resistance-rise-DH]
sources: [2011-nrel-reliability-testing-beyond-qualification, 2012-nrel-iec61215-what-it-is, 2014-nrel-pv-module-qualification-plus, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2022-arena-sundrive-copper-metallisation-demonstration, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-nrel-getting-ahead-of-curve-pv-assessment]
tags: [reliability, thermal-cycling, IEC-61215, TC200, qualification, mechanical-fatigue]
created: 2026-04-26
updated: 2026-04-26
---

# Thermal cycling, 200 cycles (IEC 61215 TC200)

**Slug:** `methods/temperature-cycling-IEC61215-TC200` · **Type:** method

## What it measures / does

Cycles the module 200 times between −40 °C and +85 °C with peak-power current flow above room temperature. Tests the cell-and-module stack against the mechanical fatigue from differential thermal expansion: cell breaks, solder-joint cracking, finger-encapsulant interface failure, ribbon fatigue. Per Wohlgemuth/NREL, 200 cycles ≈ 10–11 years of field exposure (Bosco/Kurtz weather modelling); 500 cycles is needed for 25-year equivalence.

## When to use it

Mandatory for any cell-technology change (IEC TS 62915). For SHJ Cu-plated cells specifically, this is the test that surfaces Cu finger oxidation under thermal stress (Frasson 2024 reports up to 40 % module power loss in 200 cycles for early Cu-paste SHJ from Cu oxidation), Ni/Cu/cap stack delamination, and ribbon-soldering fatigue. SunDrive reports 600 cycles (3× IEC) on glass-glass POE mini-modules with passing reliability; Lachowicz reports −0.2 % power change on Cu-plated SmartWire modules after 690 cycles.

## Key parameters / setpoints

- **Cycle profile:** −40 °C → +85 °C → −40 °C; 1 hr dwell at each extreme typical; 4–6 cycles/day chamber rate.
- **Peak-power current:** Isc-equivalent or Pmax-current applied above room temperature during the heating leg (per IEC 61215).
- **200 cycles** = 10-year field equivalent baseline; **600 cycles** (3× IEC) common for emerging tech (SunDrive, Lachowicz).
- **Pass criterion:** ≤ 5 % power loss vs pre-TC STC IV; no cell cracks; no broken interconnects.
- **Lachowicz 2024 reference:** SmartWire Cu-plated mini-module −0.2 % after 690 PTC; SCC reference −1.4 %.
- **Cu-paste TC failure (Frasson):** +2.3–2.4 mΩ Rs gain per 10-min oven step at 200–270 °C; module power drops up to 40 % in 200 cycles for prior-generation Cu-paste SHJ.

## Common variants

- **TC200** — IEC 61215 baseline.
- **TC500 / TC600** — emerging-tech extended test (Wohlgemuth recommends 500 for 25-year coverage; 600 = 3× IEC).
- **TC50 in the UV/TC50/HF10 leg** — preconditioning for the humidity-freeze test, not a stand-alone TC.
- **In-chamber EL / IV** — measure at 0/200/600 cycles to track degradation kinetics.
- **Combined TC + DH** (DH-TC sequence) — runs both stresses on the same module sequentially.

## Things to watch for

- Cu finger oxidation during the heating leg in air-permeable encapsulants — drives [[failure-modes/Cu-finger-oxidation-damp-heat]] and [[failure-modes/Ni-Cu-line-resistance-rise-DH]].
- Solder-joint fatigue for SnPbAg / SnBiAg ribbons under cycling — exemplified by Frasson 2024's 40 % loss in 200 cycles on early Cu-paste modules.
- Cell crack initiation at busbar / finger geometric stress concentrators (look for in-chamber EL imaging at each checkpoint).
- ECA-bonded shingle modules behave differently than soldered — Lachowicz reports < 0.5 % power change after 400 cycles for SHJ shingle.
- 200 cycles is *not* a 25-year test; an emerging-tech plan should run 500–600.

## Related methods

- [[methods/damp-heat-aging-1000h]] — companion qualification stress.
- [[methods/extended-damp-heat-IEC63209]] — 3× IEC counterpart (often paired with 600 TC).
- [[methods/humidity-freeze-IEC61215-HF10]] — adhesion-targeted partner.
- [[methods/UV-preconditioning]] — upstream stage in the IEC 61215 sequence.
- [[methods/EL-electroluminescence-imaging]] — pre/post-TC defect mapping.
- [[methods/peel-test-90deg]] — pre/post-TC adhesion check.

## Citing sources

- [[sources/2011-nrel-reliability-testing-beyond-qualification]] — 200 cycles ≈ 10–11 years; 500 cycles for 25-year equivalence.
- [[sources/2012-nrel-iec61215-what-it-is]] — defines the IEC 61215 TC200 protocol.
- [[sources/2014-nrel-pv-module-qualification-plus]] — Qualification Plus calls for extension beyond 200 cycles.
- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — TC referenced as companion reliability test for SHJ plated cells.
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — 600 cycles (3× IEC) reported on SHJ POE mini-modules.
- [[sources/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — 690 PTC cycles on Cu-plated SmartWire SHJ modules.
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — TC stability data: 0.2 % loss after 690 cycles for Cu-plated SmartWire; 400 cycles for shingle.
- [[sources/2024-nrel-getting-ahead-of-curve-pv-assessment]] — included in the IEC retest matrix invoked by IEC TS 62915 for cell-technology changes.
