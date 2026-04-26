---
type: source
id: 2014-nrel-pv-module-qualification-plus
source_type: protocol
title: "Photovoltaic Module Qualification Plus Testing"
authors: ["Kurtz, S.", "Wohlgemuth, J.", "Kempe, M.", "Bosco, N.", "Hacke, P.", "Jordan, D.", "Miller, D. C.", "Silverman, T. J.", "Phillips, N.", "Earnest, T.", "Romero, R."]
year: 2013
doi: null
url: "https://www.nrel.gov/publications"
raw_path: raw/protocols/2014-nrel-pv-module-qualification-plus.pdf
tags: [Qualification-Plus, IEC-61215, IEC-61730, durability, NREL-TP-5200-60950, sampling, QMS, UV-encapsulant, UV-backsheet, PID, DML, thermal-cycling-500]
---

# Photovoltaic Module Qualification Plus Testing

## Summary
NREL Technical Report TP-5200-60950 (December 2013, published 2014) co-authored with 3M, DuPont, and Black & Veatch. The flagship "Qualification Plus" test specification: a set of new and revised accelerated tests intended for c-Si modules with glass / EVA-based encapsulant / polymeric backsheet construction. Three pillars: (1) new/revised accelerated tests (UV exposure separately for encapsulant, backsheet, cables, connectors, junction boxes; bypass-diode thermal test extended; thermal cycling 200 → 500; dynamic mechanical load 1000 cycles ± 1000 Pa; hot spot per ASTM E2481-06; potential-induced degradation per IEC 62804 draft); (2) random sampling from production lines (not engineering samples); (3) audit of the manufacturer's quality management system. Recommended as optional but a critical bridge between IEC 61215 and lifetime testing. Specifies pass/fail criteria, durations, dose levels, and the IEC retest guidelines (IEC TS 62915) that map specific module changes to required retests.

## Key claims
- Qualification Plus tests recommended specifically for c-Si modules with glass/EVA/polymeric-backsheet construction (Sec. 3).
- Statistical context (Table 3 selected field studies): ~2% of modules fail after 8 years (DeGraaff @ SunPower's >0.9 GW, 21 manufacturers); 16% of systems require module replacement after 5–12 years (Kato); 6.5% module failures after 10 years in Block IV/V deployments (Rosenthal); 200 thermal cycles ≈ 10 years field exposure (Wohlgemuth).
- New tests proposed (Table 5): UV exposure (encapsulants, backsheets, cables/connectors, J-boxes), bypass diode thermal test extension, thermal cycling 500 cycles, dynamic mechanical load (DML) 1000 cycles at ± 1000 Pa, enhanced hot spot (ASTM E2481-06, 50 h per cell), system-voltage PID (IEC 62804 draft).
- UV exposure for encapsulants: 56±5 W/m² UV (300-400 nm), 70°C ambient, 50% RH, 90°C black-panel temperature, ~4000 h to ≥224 kWh/m². Pass/fail: <2% decrease in solar-weighted photon transmittance.
- UV exposure for backsheets: 81±8 W/m² UV, 70°C black-panel, 50°C ambient, 50% RH, ~4000 h to ≥320 kWh/m². Pass/fail: visual inspection (no major defects) plus ≥50% elongation at break (ASTM D 882).
- Thermal cycling extension: 500 cycles in IEC 61215 §10.11 with a 0.5 kg weight hung from each junction box, with diodes still functioning post-test.
- DML: 1000 cycles at ± 1000 Pa (± 100 Pa tolerance) at 1-10 cycles/min, inserted into UV/DML/50TC/10HF sequence. Pass: <5% power loss after each test, <8% after entire sequence, no open circuit, no major visual defects, insulation/wet-leakage compliant.
- PID: 60°C / 85% RH, 96 h dwell, system voltage applied to shorted module leads with frame grounded. Pass: <5% Pmax degradation at STC, no major visual defects, wet leakage current OK.
- Hot spot test: ASTM E2481-06 (5 hours per cell with worst shunt + 3 cells with lowest shunt resistance — much harsher than IEC 61215's 1-hour single-cell test).
- Sampling: random selection from a production line (no engineering samples). Five modules per leg (not the IEC standard two).
- Quality Management System audit per "Guide for QMS for PV Manufacturing: Supplemental Requirements to ISO 9001-2008" (NREL/TP-5200-58940), conducted by an ANSI-ASQ-ANAB or IAF-accredited Certification Body.

## Methods used
- [[../methods/damp-heat-aging-1000h]] — IEC 61215 baseline retained
- [[../methods/extended-damp-heat-IEC63209]] — successor concept; QualPlus's DH-with-bias is a precursor
- [[../methods/temperature-cycling-IEC61215-TC200]] — extended to 500 cycles
- [[../methods/humidity-freeze-IEC61215-HF10]] — UV/DML/50TC/10HF sequence
- [[../methods/UV-preconditioning]] — both as preconditioning and as a long component test (~4000 h)
- [[../methods/IV-curve-measurement]] — STC peak-power before/after testing

## Reagents
- [[../reagents/EVA-encapsulant]] — primary encapsulant for which spec is written
- [[../reagents/POE-polyolefin-encapsulant]] — referenced but generalizations may not apply

## Organisms / substrates
- [[../organisms/full-size-module-60-cell]] — generic c-Si test module
- [[../organisms/full-size-module-72-cell]] — generic c-Si test module

## Failure modes flagged
- [[../failure-modes/EVA-acetic-acid-corrosion]] — UV/DH-driven encapsulant degradation
- [[../failure-modes/Cu-finger-corrosion-encapsulant]] — generic finger-corrosion mode addressed by DH
- [[../failure-modes/finger-adhesion-loss-after-DH]] — generic
- [[../failure-modes/Voc-degradation-Cu-contamination]] — implied if PID fails

## Supports / contradicts
- Supports: [[2011-nrel-reliability-testing-beyond-qualification]] (this report formalises the proposal)
- Supports: [[2012-nrel-iec61215-what-it-is]] (this report is the response to those limitations)
- Supports: [[2024-nrel-getting-ahead-of-curve-pv-assessment]] (extends concept to bifacial/SHJ-era)
- Supports: [[2013-koehl-fraunhofer-accelerated-service-life-testing]] (compatible methodology)

## Notable quotes
- "Solar electricity can be cost competitive in many electricity markets today if solar panels can perform to warranted specifications for the length of their warranty, which is typically 25 years. But, it can be difficult to identify which PV modules will meet their warrantied performance level." — Sec. 1.1
- "the AAA backsheets … passed standard damp-heat and ultraviolet (UV) light tests, but many began cracking after five to ten years owing to mechanical stresses from production and environmental exposure that had not been part of standard testing" — referenced as the cautionary example for novel materials
- "The Qualification Plus tests are being recommended specifically for crystalline silicon modules with glass/polymeric backsheet construction." — Executive Summary
