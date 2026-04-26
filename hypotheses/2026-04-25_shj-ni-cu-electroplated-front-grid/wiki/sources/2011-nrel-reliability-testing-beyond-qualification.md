---
type: source
id: 2011-nrel-reliability-testing-beyond-qualification
source_type: protocol
title: "Reliability Testing Beyond Qualification as a Key Component in Photovoltaic's Progress Toward Grid Parity"
authors: ["Wohlgemuth, J. H.", "Kurtz, S."]
year: 2011
doi: null
url: "https://www.osti.gov/bridge"
raw_path: raw/protocols/2011-nrel-reliability-testing-beyond-qualification.pdf
tags: [reliability, IEC-61215, qualification-testing, damp-heat, thermal-cycling, baseline-testing, NREL]
---

# Reliability Testing Beyond Qualification as a Key Component in Photovoltaic's Progress Toward Grid Parity

## Summary
Wohlgemuth & Kurtz IEEE-IRPS 2011 conference paper (NREL/CP-5200-50599). The seminal "Qualification Plus" precursor argument: IEC 61215 qualification testing screens infant mortality but does NOT prove 25-year lifetime, because most modern modules pass with negligible degradation. The paper proposes a baseline methodology — test new lower-cost designs side-by-side with proven-long-life designs through extended versions of the IEC accelerated tests (longer thermal cycling, higher-stress damp heat to power-loss endpoints, dynamic mechanical load) and certify only when the new design degrades no worse than the baseline. Provides Table 4 of retest requirements per change category (cell tech, encapsulation, superstrate, backsheet, frame, interconnection between cells, etc.). Highly relevant for any plated-Cu SHJ design: a metallization change is exactly a "Cell Technology" change requiring 200 TC + 1000 h DH + Hot Spot retest under IEC retest guidelines, but these are NOT lifetime tests.

## Key claims
- IEC 61215 includes 200 thermal cycles (-40 to +85 °C with peak power current), 1000 h damp heat at 85 °C / 85% RH, UV/TC50/HF10 sequence, wet leakage current, mechanical load (3× 2400 Pa), hail (25 mm @ 23 m/s), bypass diode thermal test, hot spot test (Sec. II.B).
- Most commercial modules pass IEC 61215 with negligible degradation — "the Qualification test itself is not a good tool for determining whether a change in materials, processing or design is likely to reduce the module's lifetime or increase the annual degradation rate" (Sec. II.B end).
- Table 1 lists field failure modes for c-Si: broken interconnects, broken cells, corrosion, encapsulant delamination/elasticity loss/discoloration, solder bond failures, glass breakage, hot spots, ground faults, junction-box failures, bypass-diode failures.
- Table 3 maps failure modes to accelerated tests: damp heat → corrosion, encapsulant adhesion loss, junction-box adhesion, electrochemical TCO corrosion, inadequate edge deletion. Thermal cycling → broken interconnect, broken cell, solder-bond failure, junction-box adhesion.
- 200 thermal cycles ≈ 10–11 years of outdoor exposure (Wohlgemuth 2005; Bosco-Kurtz weather modeling). Therefore 500 cycles is proposed as a 25-year-lifetime equivalent.
- Damp heat: 85/85 conditions probably never occur in the field — modules dry out at high T, absorb moisture at low T. Recommendation: run 85/85 until *both* control and new technology lose appreciable power (e.g., to 90% of original) so they can be ranked.
- Table 4 — required retest categories upon design change. **Cell Technology change** triggers: 200 TC + 1000 h DH + Hot Spot + Mechanical Load (if cell thinner). **Encapsulation change** triggers UV/TC50/HF10 + 1000 h DH + Hail + Hot Spot. **Interconnection between Cells change** triggers 200 TC + 1000 h DH + Hot Spot.
- Recommends Dynamic Mechanical Load test (DIN EN12211, then later IEC 62782) inserted into UV/DML/50TC/10HF sequence, plus transportation testing (ISTA 3E), and long-term UV testing on coupons (26-week protocol from STR).

## Methods used
- [[../methods/damp-heat-aging-1000h]] — proposed extension to power-loss endpoint
- [[../methods/extended-damp-heat-IEC63209]] — conceptual ancestor
- [[../methods/temperature-cycling-IEC61215-TC200]] — proposed extension to 500 cycles
- [[../methods/humidity-freeze-IEC61215-HF10]] — UV/TC50/HF10 sequence
- [[../methods/UV-preconditioning]] — UV preconditioning + long-term UV on coupons

## Reagents
- [[../reagents/EVA-encapsulant]] — most-discussed encapsulant; UV-degradation test target

## Organisms / substrates
- [[../organisms/full-size-module-60-cell]] — generic c-Si module test specimen
- [[../organisms/full-size-module-72-cell]] — also referenced

## Failure modes flagged
- [[../failure-modes/EVA-acetic-acid-corrosion]] — corrosion mode addressed by DH
- [[../failure-modes/Cu-finger-corrosion-encapsulant]] — generic finger corrosion in DH
- [[../failure-modes/finger-adhesion-loss-after-DH]] — generic adhesion-loss failure mode

## Supports / contradicts
- Supports: [[2012-nrel-iec61215-what-it-is]], [[2014-nrel-pv-module-qualification-plus]] (later evolution of the same argument)
- Supports: [[2013-koehl-fraunhofer-accelerated-service-life-testing]] (climate-specific accelerated testing)
- Supports: [[2024-nrel-getting-ahead-of-curve-pv-assessment]] (tech-trend-aware reliability assessment for SHJ + Cu)

## Notable quotes
- "Today most PV modules are warranted for 25 years, but the Qualification Test Sequence does not test for 25-year life. There is no accepted test protocol to validate a 25-year lifetime." — abstract
- "85°C/85% relative humidity exposure is as accelerated as necessary. These conditions probably never happen in the real world…" — Sec. III.E
- "If 200 cycles equals 10 years of field exposure then 500 cycles would represent 25 years." — Sec. III.E
