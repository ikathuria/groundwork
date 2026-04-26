---
type: method
slug: UV-preconditioning
aliases: [UV exposure, UV preconditioning, light soaking, UV stress test]
related_methods: [damp-heat-aging-1000h, humidity-freeze-IEC61215-HF10, extended-damp-heat-IEC63209, temperature-cycling-IEC61215-TC200, IV-curve-measurement]
key_reagents: [EVA-encapsulant, POE-polyolefin-encapsulant]
known_failure_modes: [a-Si-H-passivation-degradation, EVA-acetic-acid-corrosion, Cu-LID-light-induced-degradation]
sources: [2011-nrel-reliability-testing-beyond-qualification, 2012-nrel-iec61215-what-it-is, 2013-koehl-fraunhofer-accelerated-service-life-testing, 2014-nrel-pv-module-qualification-plus, 2022-arena-sundrive-copper-metallisation-demonstration, 2024-nrel-getting-ahead-of-curve-pv-assessment, 2025-yacouba-shj-silver-free-metallization-progPV]
tags: [reliability, UV-exposure, encapsulant-degradation, light-soaking, SHJ-relevant, a-Si-passivation]
---

# UV Preconditioning / Light Soaking

## What it measures / does
Pre-stress UV exposure (typically 15-60 kWh/m² at 280-385 nm) preceding the IEC 61215 thermal-cycling / humidity-freeze sequence to detect UV-induced encapsulant discoloration, backsheet cracking, and (for SHJ) a-Si:H passivation degradation. Also used as a *recovery* step ("light soaking") in SHJ cell processing — Yacouba 2025 shows that 90 s at 175 C under 55 kW/m² LED light fully recovers the 0.2%abs efficiency loss from Cu-paste anneal at 300 C.

## When to use it
Two distinct modes: (1) IEC qualification preconditioning before TC/HF, dose ~15 kWh/m² in 280-385 nm; (2) Qual Plus extended UV on coupons, ~4000 h at 56 W/m² UV / 70 C ambient / 50% RH for encapsulant durability; (3) cell-level light soaking to recover a-Si:H from process-induced damage or to characterize Cu-LID.

## Key parameters
- Standard pre-conditioning (IEC 61215): 15 kWh/m² in 280-385 nm at 60 +/- 5 C.
- Qual Plus encapsulant UV: 56 +/- 5 W/m² (300-400 nm), 70 C ambient, 50% RH, 90 C black panel, ~4000 h to >=224 kWh/m².
- Backsheet UV: 81 +/- 8 W/m² UV, 70 C black panel, 50 C ambient, 50% RH, ~4000 h to >=320 kWh/m².
- Cell-level light soaking (Yacouba): 175 C, 55 kW/m² LED, ~90 s — recovers Voc, pFF, FF.
- Pass criteria (encapsulant): <2% decrease in solar-weighted photon transmittance.

## Common variants / alternatives
- IEC 62788-7 polymer-only UV — for coupon-level encapsulant testing.
- Light Induced Degradation (LID) test — extended bias-light exposure to track Cu-LID stable defects (Lindroos 2015).

## Things to watch for (failure modes)
- [[../failure-modes/a-Si-H-passivation-degradation]] — UV-driven a-Si:H stability flagged as critical for SHJ (Zuboy 2024).
- [[../failure-modes/EVA-acetic-acid-corrosion]] — UV-induced encapsulant browning + acetic-acid generation.
- [[../failure-modes/Cu-LID-light-induced-degradation]] — Cu-related defects activated under bias illumination, stable at 200 C (Lindroos).

## Sources
- [[2011-nrel-reliability-testing-beyond-qualification]] — UV preconditioning + long-term UV on coupons (26-week STR protocol).
- [[2012-nrel-iec61215-what-it-is]] — UV labelled as preconditioning in IEC 61215 Edition 2.
- [[2013-koehl-fraunhofer-accelerated-service-life-testing]] — UV-induced fluorescence imaging used to detect encapsulant degradation.
- [[2014-nrel-pv-module-qualification-plus]] — both as preconditioning and as long component test (~4000 h).
- [[2022-arena-sundrive-copper-metallisation-demonstration]] — included in module reliability test matrix.
- [[2024-nrel-getting-ahead-of-curve-pv-assessment]] — UV testing flagged as critical for SHJ a-Si:H layers.
- [[2025-yacouba-shj-silver-free-metallization-progPV]] — light-soaking (175 C, 55 kW/m² LED, ~90 s) for recovery from Cu-paste anneal damage.
