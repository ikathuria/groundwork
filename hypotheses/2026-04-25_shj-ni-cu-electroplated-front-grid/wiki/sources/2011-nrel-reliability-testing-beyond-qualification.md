---
type: source
id: 2011-nrel-reliability-testing-beyond-qualification
source_type: protocol
title: "Reliability Testing Beyond Qualification as a Key Component in Photovoltaic's Progress Toward Grid Parity"
authors: ["Wohlgemuth, J. H.", "Kurtz, S."]
year: 2011
doi: ""
url: https://docs.nrel.gov/docs/fy11osti/50599.pdf
raw_path: raw/protocols/2011-nrel-reliability-testing-beyond-qualification.pdf
tags: [reliability, IEC-61215, damp-heat, qualification-plus, NREL]
created: 2026-04-26
updated: 2026-04-26
---

# Reliability Testing Beyond Qualification as a Key Component in Photovoltaic's Progress Toward Grid Parity

**Wohlgemuth, J. H. and Kurtz, S. (NREL)** — *IEEE International Reliability Physics Symposium, 2011 (NREL/CP-5200-50599)*. DOI: —

## Summary

Argues that the IEC 61215 / 61646 qualification sequence is a screen for infant mortality, not a 25-year life test, and proposes a methodology for testing new lower-cost module designs against incumbent designs with proven field history using extended accelerated stress tests. Establishes the canonical "use the qualification tests as a starting point but extend them and benchmark against a known-good control" pattern that the SHJ Cu-plating community now follows.

## Key claims

- **Damp heat baseline:** IEC 61215 specifies 1000 h at 85°C / 85% RH; this duration is "as accelerated as necessary" because real outdoor modules dry out at high temperatures, but 1000 h is *not* sufficient to validate 25-year lifetime — extension and a baseline comparator are required.
- **Damp-heat extension recommendation:** rather than a fixed time, run the new design and a baseline (qualified, field-proven) design until both lose ~10% power, and confirm the new design is no worse and exhibits no new failure modes.
- **Thermal cycling:** 200 cycles ≈ 10–11 years of field exposure (per Bosco/Kurtz weather modelling); 500 cycles needed for 25-year equivalence.
- **Retest matrix (Table 4):** changes to "Cell Technology" trigger 200 TC + 1000 h DH + Hot Spot retest. Changes to the metallization (a "Cell Technology" change in IEC TS 62915 terms) therefore mandate at minimum 1000 h damp-heat retest.
- **Measurement tools to instrument the chamber run:** STC peak power, dry/wet leakage, IR thermography, electroluminescence, dark I-V, and visual / adhesion checks should be used at each checkpoint to surface degradation before it shows up in light I-V power.
- **Damp heat targets — what it surfaces:** corrosion, delamination of encapsulant, encapsulant loss of adhesion/elasticity, junction-box adhesion, electrochemical corrosion of TCO, inadequate edge deletion (Table 3).

## Methods used

- [[methods/damp-heat-aging-1000h]] — defines the canonical 1000 h DH protocol the hypothesis must beat.
- [[methods/temperature-cycling-IEC61215-TC200]] — 200 thermal cycles between -40°C and +85°C; recommends extension to 500 cycles for 25-year coverage.
- [[methods/humidity-freeze-IEC61215-HF10]] — 10 humidity-freeze cycles (85°C/85%RH → -40°C).
- [[methods/UV-preconditioning]] — 15 kWh/m² UV before TC50/HF10 sequence.
- [[methods/extended-damp-heat-IEC63209]] — the extension philosophy this paper articulates feeds directly into the later IEC 63209 extended-DH spec.
- [[methods/EL-electroluminescence-imaging]] — recommended in-chamber measurement tool.
- [[methods/dark-IV-suns-Voc]] — recommended for picking up small Rs/Rsh shifts before they reach light I-V.
- [[methods/IV-curve-measurement]] — STC pass/fail measurement.

## Failure modes flagged

- [[failure-modes/Cu-finger-corrosion-encapsulant]] — paper's Table 3 lists DH-driven corrosion as a primary failure target; the dominant failure mode for Cu-replacing-Ag is corrosion in the EVA acetic-acid environment.
- [[failure-modes/EVA-acetic-acid-corrosion]] — encapsulant adhesion and elasticity loss surfaced by DH, the upstream of EVA→acetic-acid→Cu attack.
- [[failure-modes/finger-adhesion-loss-after-DH]] — explicit "encapsulant loss of adhesion" failure in the DH table.
- [[failure-modes/Ni-Cu-line-resistance-rise-DH]] — series-resistance rise during DH is exactly what dark I-V (this paper's recommended instrument) is meant to surface early.

## Notable quotes

> "The 85°C/85% relative humidity exposure is as accelerated as necessary. … rather than specify a particular length of time, it seems appropriate to test the control technology and the new technology through enough hours of damp heat that both begin to lose some power (say to 90% of the original) in order to verify that the new technology is no worse and has no additional failure modes than the old module technology it will replace." — *p. 4*

> "If 200 cycles equals 10 years of field exposure then 500 cycles would represent 25 years … If after 500 thermal cycles the control construction and the new, lower cost modules have similar power loss and do not exhibit detrimental changes (i.e. broken interconnects) then the two constructions should have similar field performance for failure modes caused by thermal cycling." — *p. 4*
