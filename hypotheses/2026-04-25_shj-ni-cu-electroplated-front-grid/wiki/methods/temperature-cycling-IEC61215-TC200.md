---
type: method
slug: temperature-cycling-IEC61215-TC200
aliases: [TC200, thermal cycling 200, IEC 61215 TC, -40 to +85 C cycling]
related_methods: [damp-heat-aging-1000h, humidity-freeze-IEC61215-HF10, extended-damp-heat-IEC63209, EL-electroluminescence-imaging, IV-curve-measurement, peel-test-90deg]
key_reagents: [EVA-encapsulant, POE-polyolefin-encapsulant, electrically-conductive-adhesive-ECA, multibusbar-Cu-ribbon]
known_failure_modes: [finger-adhesion-loss-after-DH, Ni-Cu-line-resistance-rise-DH, Cu-finger-corrosion-encapsulant, FF-degradation-contact-resistance]
sources: [2011-nrel-reliability-testing-beyond-qualification, 2012-nrel-iec61215-what-it-is, 2014-nrel-pv-module-qualification-plus, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2022-arena-sundrive-copper-metallisation-demonstration, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-nrel-getting-ahead-of-curve-pv-assessment, 2024-siliconpv-novel-shj-metallization-architectures]
tags: [reliability, thermal-cycling, IEC-61215, mechanical-fatigue, interconnect, complementary-DH]
---

# Temperature Cycling (IEC 61215 TC200)

## What it measures / does
Modules are cycled between -40 C and +85 C with peak-power current applied during the high-temperature portion (200 cycles for IEC 61215 qualification, 500 for Qualification Plus, 690+ for plated-Cu reliability research). Stresses the cell-ribbon interconnect, solder bonds, and finger-cell adhesion through thermal-mismatch fatigue. Independent of damp-heat in the failure-mode coverage.

## When to use it
Run alongside damp heat for any plated-Cu SHJ design. Lachowicz 2024 reports 0.2% Pmax loss after 690 TC on Cu-plated SmartWire modules (vs 1.4% on SCC reference); Frasson 2024 cites 40% module power loss after only 200 TC for one early Cu-paste demo — solderless / fatigue stresses are real.

## Key parameters
- Standard: -40 C +/- 2 C to +85 C +/- 2 C; max temperature ramp rate 100 C/h; dwell 10-20 min at extremes; peak-power current applied when T > 25 C.
- Cycles: 200 (IEC 61215), 400 (shingle modules), 500 (Qualification Plus, ~25 yr equivalent per Wohlgemuth), 600-690 (plated-Cu research extension), 1000 (5x IEC, SmartWire SHJ).
- 200 TC ~ 10-11 yr field exposure (Wohlgemuth 2005, Bosco-Kurtz weather modelling).
- Pass criterion (IEC 61215): <=5% Pmax loss after the full sequence.
- Failure modes addressed (Table 3, NREL): broken interconnect, broken cell, solder-bond failure, junction-box adhesion.

## Common variants / alternatives
- [[damp-heat-aging-1000h]] — moisture-driven; complementary stress.
- [[humidity-freeze-IEC61215-HF10]] — combines temperature and humidity transitions.

## Things to watch for (failure modes)
- [[../failure-modes/finger-adhesion-loss-after-DH]] — thermal-mismatch fatigue at Cu/TCO or solder/finger interface; peel test before/after.
- [[../failure-modes/Ni-Cu-line-resistance-rise-DH]] — finger-resistance increase under TC; tracked via 4PP / IV.
- [[../failure-modes/Cu-finger-corrosion-encapsulant]] — TC stress can crack the cap and expose Cu.
- [[../failure-modes/FF-degradation-contact-resistance]] — solder-bond failure raises lumped Rs.

## Sources
- [[2011-nrel-reliability-testing-beyond-qualification]] — proposed extension to 500 cycles for 25-yr equivalence.
- [[2012-nrel-iec61215-what-it-is]] — JPL Block IV->V increased thermal cycles 50 -> 200 to address solder-bond / interconnect failures.
- [[2014-nrel-pv-module-qualification-plus]] — extended to 500 cycles in Qual Plus § with 0.5 kg J-box weight.
- [[2018-pv-tech-metallization-interconnection-bifacial-shj]] — TC200 + 5x IEC discussed; SmartWire passes 5x IEC (1000 cycles).
- [[2022-arena-sundrive-copper-metallisation-demonstration]] — 600 cycles (3x IEC TC200) on glass-glass bifacial.
- [[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — 690 cycles SmartWire (-0.2% Pmax) + 200 cycles shingle (<0.5%).
- [[2024-lachowicz-cu-plated-shj-aging-mini-modules]] — 690 cycles SmartWire, 400 cycles shingle.
- [[2024-nrel-getting-ahead-of-curve-pv-assessment]] — IEC 61215 baseline; needs extension for SHJ + Cu.
- [[2024-siliconpv-novel-shj-metallization-architectures]] — referenced for prior Cu-paste failure (40% power loss at 200 cycles).
