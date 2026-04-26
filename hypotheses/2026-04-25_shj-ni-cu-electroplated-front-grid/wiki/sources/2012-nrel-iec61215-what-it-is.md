---
type: source
id: 2012-nrel-iec61215-what-it-is
source_type: protocol
title: "IEC 61215: What It Is and Isn't"
authors: ["Wohlgemuth, J. H."]
year: 2012
doi: ""
url: https://docs.nrel.gov/docs/fy12osti/54714.pdf
raw_path: raw/protocols/2012-nrel-iec61215-what-it-is.pdf
tags: [IEC-61215, qualification, damp-heat, NREL, history, methodology]
created: 2026-04-26
updated: 2026-04-26
---

# IEC 61215: What It Is and Isn't

**Wohlgemuth, J. H. (NREL)** — *2012 PV Module Reliability Workshop, NREL/PR-5200-54714*. DOI: —

## Summary

Plain-language NREL summary of what IEC 61215 actually tests, how it evolved from the JPL Block I–V buys (1970s–1985), and — critically for the SHJ Ni/Cu hypothesis — what it *does not* validate. Provides the canonical mapping between each accelerated stress and the field failure mode it screens for, and explicitly lists the IEC 61215 test sequence (200 TC, 1000 h DH, UV/TC50/HF10, mechanical, hail, hot spot, bypass diode).

## Key claims

- **IEC 61215 sequence (modern form, post-Edition 2):**
  - 200 thermal cycles -40°C ↔ +85°C with peak-power current flow above room temperature
  - **1000 h damp heat at 85°C / 85% RH**
  - UV preconditioning (15 kWh/m²) → 50 thermal cycles → 10 humidity-freeze cycles (combined leg)
  - Wet leakage current at rated system voltage
  - Mechanical load 3 cycles at ±2400 Pa
  - Hail: 25 mm ice ball at 23 m/s, 11 impact locations
  - Bypass diode thermal test
  - Hot spot test (3 lowest-shunt cells, 1 h at 1000 W/m²; highest-shunt cell 5 h)
- **Damp heat targets (Table, slide 7):** corrosion, encapsulant delamination, encapsulant loss of adhesion/elasticity, junction-box adhesion, electrochemical corrosion of TCO, inadequate edge deletion. *This is the failure-mode shopping list the Ni/Cu DH chamber run must screen.*
- **Limitations of qualification testing — explicit:** (1) it is *not* a wear-out / lifetime test; (2) it does not differentiate long- from short-lifetime products; (3) it does not address every failure mechanism in every climate (PID is given as the canonical example missed); (4) most commercial modules pass with minimum measurable degradation, so passing IEC 61215 says nothing about which design will last longer in the field.
- **History — why 1000 h DH exists:** introduced in IEC 61215 (and JPL Block VI draft, 1985) specifically *to simulate the corrosion failures observed in fielded PV modules*. Damp heat = corrosion screen, by design.
- **Block IV→V impact:** addition of 200 TC, harsher humidity-freeze, and hot-spot test reduced field failure rate from 45% (pre-Block V) to <0.1% (post-Block V) — the empirical anchor for why these tests are mandatory.

## Methods used

- [[methods/damp-heat-aging-1000h]] — the canonical IEC 61215 1000 h / 85°C / 85% RH protocol; corrosion screen by design.
- [[methods/temperature-cycling-IEC61215-TC200]] — 200 cycles -40 ↔ +85 °C with peak-power current flow.
- [[methods/humidity-freeze-IEC61215-HF10]] — 10 humidity-freeze cycles (85°C/85%RH → -40°C).
- [[methods/UV-preconditioning]] — 15 kWh/m² before the TC50/HF10 leg.
- [[methods/IV-curve-measurement]] — STC peak-power pass/fail.

## Failure modes flagged

- [[failure-modes/EVA-acetic-acid-corrosion]] — DH was added in the first place to capture EVA-driven corrosion seen in fielded modules.
- [[failure-modes/Cu-finger-corrosion-encapsulant]] — same DH-corrosion target, now applied to Cu fingers instead of soldered Ag.
- [[failure-modes/finger-adhesion-loss-after-DH]] — encapsulant adhesion / elasticity loss; explicit in DH failure-mode table.

## Supports / contradicts

- **Supports:** [[sources/2011-nrel-reliability-testing-beyond-qualification]] — same author, restates the same test sequence and the same "1000 h DH does not validate 25 years" caveat.
- **Supports:** [[sources/2014-nrel-pv-module-qualification-plus]] — Qualification Plus is the natural extension of the limitations enumerated in this slide deck.

## Notable quotes

> "Damp heat … 85°C and 85% relative humidity for 1000 hours." — *slide 21 / IEC 61215 outline*

> "Damp heat (85C/85% RH) – To simulate the corrosion failures observed in fielded PV modules." — *slide 18, on the JPL Block VI 1985 rationale that became IEC 61215*

> "Most of today's commercial modules pass the qualification sequence with minimum change, meaning that they suffer almost no degradation in power output from the test sequence. … Passing the qualification test means the product has met a specific set of requirements [but does not] quantify lifetime for the intended application/climate." — *slides 22, 24*
