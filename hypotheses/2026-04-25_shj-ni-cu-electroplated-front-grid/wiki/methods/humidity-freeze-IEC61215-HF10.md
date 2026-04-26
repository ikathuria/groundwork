---
type: method
slug: humidity-freeze-IEC61215-HF10
aliases: [HF10, humidity freeze, IEC 61215 HF, 10-cycle humidity-freeze]
related_methods: [damp-heat-aging-1000h, temperature-cycling-IEC61215-TC200, UV-preconditioning, extended-damp-heat-IEC63209]
key_reagents: [EVA-encapsulant, POE-polyolefin-encapsulant]
known_failure_modes: [finger-adhesion-loss-after-DH, Cu-finger-corrosion-encapsulant, EVA-acetic-acid-corrosion]
sources: [2011-nrel-reliability-testing-beyond-qualification, 2012-nrel-iec61215-what-it-is, 2014-nrel-pv-module-qualification-plus]
tags: [reliability, IEC-61215, humidity-freeze, edge-seal, delamination, encapsulant-test]
---

# Humidity Freeze (IEC 61215 HF10)

## What it measures / does
10 cycles between 85 C / 85% RH and -40 C, designed to detect delamination, edge-deletion failures, and moisture-induced cracking in the encapsulant / backsheet stack. Originally added in JPL Block-V to reproduce field-observed delamination at module edges that DH alone did not catch. Forms part of the UV/TC50/HF10 sequence in IEC 61215.

## When to use it
Use as part of the standard IEC 61215 sequence after UV preconditioning + 50 thermal cycles. Critical for plated-Cu modules where edge-initiated DH degradation is the dominant failure mode (Lachowicz 2024 1-cell mini-modules); HF stress accelerates the same edge-seal failure path.

## Key parameters
- Standard: 10 cycles between 85 C / 85% RH and -40 C; rate 100 C/h max.
- Dwell: 20 h at high T/RH, then transition to -40 C and dwell 30 min.
- Pass criterion (IEC 61215): <=5% Pmax loss + no major visual defects + insulation OK.
- Sequence position: typically after UV (60 kWh/m²) + 50 TC.

## Common variants / alternatives
- [[damp-heat-aging-1000h]] — 1000 h continuous DH; longer dwell, no thermal cycling.
- [[temperature-cycling-IEC61215-TC200]] — purely thermal, no humidity.

## Things to watch for (failure modes)
- [[../failure-modes/finger-adhesion-loss-after-DH]] — moisture + thermal cycling stresses metal/cell adhesion.
- [[../failure-modes/Cu-finger-corrosion-encapsulant]] — moisture ingress at edges then condenses on Cu during freeze.
- [[../failure-modes/EVA-acetic-acid-corrosion]] — acetic-acid generation in EVA accelerated by HF cycling.

## Common variants / alternatives
- IEC 62788 sequence — full encapsulant durability menu.

## Sources
- [[2011-nrel-reliability-testing-beyond-qualification]] — UV/TC50/HF10 sequence as part of Qualification Plus proposal.
- [[2012-nrel-iec61215-what-it-is]] — HF10 added in JPL Block V to address delamination / edge-deletion field failures.
- [[2014-nrel-pv-module-qualification-plus]] — UV/DML/50TC/10HF sequence + DML; pass criterion <=8% Pmax after entire sequence.
