---
type: source
id: 2012-nrel-iec61215-what-it-is
source_type: protocol
title: "IEC 61215: What it is and isn't"
authors: ["Wohlgemuth, J. H."]
year: 2012
doi: null
url: null
raw_path: raw/protocols/2012-nrel-iec61215-what-it-is.pdf
tags: [IEC-61215, qualification-testing, JPL-Block-history, infant-mortality, NREL-PVMRW, presentation]
---

# IEC 61215: What it is and isn't

## Summary
Wohlgemuth's 2012 PV Module Reliability Workshop presentation (NREL/PR-5200-54714) tracing IEC 61215 from its JPL Block-Buy origins (1970s-80s) through Block VI to the current standard. Maps each major qualification stress test (thermal cycling, humidity freeze, hot spot, hail, mechanical load) to the field failures that motivated it. The central message: IEC 61215 is an **infant-mortality screen**, not a wear-out lifetime test. Limitations explicitly listed: not designed to identify wear-out mechanisms, not for all climates, not for differentiating long vs short lifetimes, not for novel module designs (e.g., PCB encapsulation, plated-Cu metallization). Statistical evidence: pre-Block-V modules had 45% field failure rate, post-Block-V <0.1%. Modern post-IEC-61215 commercial modules also show <0.1–0.13% warranty return rates over multi-year deployments.

## Key claims
- Field failure modes for c-Si (slide 4): broken interconnects, broken cells, corrosion, delamination/elastomer loss of encapsulant, encapsulant discoloration, solder bond failures, broken glass, hot spots, ground faults, junction-box & module-connection failures, bypass-diode failures, open-circuit-induced arcing.
- Test-to-failure mapping (slides 7-9): thermal cycling → broken interconnect/cells/solder bonds; damp heat → corrosion, delamination, junction-box adhesion, electrochemical TCO corrosion, inadequate edge deletion; humidity freeze → delamination, edge deletion; UV → encapsulant discoloration, ground fault from backsheet; mechanical load → cell/glass/ribbon breakage; hot spot → shunts, scribe-line shorts, bypass-diode failure; hail → glass/cell breakage; bypass-diode thermal test → diode failure modes; salt spray → coastal corrosion.
- JPL Block IV → Block V: thermal cycles increased 50 → 200, humidity freeze made more aggressive (10 cycles 85 °C/85% RH to -40 °C), hot-spot test added — these three changes brought field failure rate from 45% (pre-Block V) to <0.1% (Whipple 1993).
- IEC 61215 was based on the (cancelled) Block VI specification. EU 502 contributed the UV test, outdoor exposure, lower max thermal-cycle temperature (90 → 85 °C). Bypass-diode thermal test was excluded from initial IEC 61215 because "international community didn't think the test was adequately developed" but added in Edition 2 from IEEE 1262.
- IEC 61215 Edition 2 changes: twist test eliminated, wet leakage current added (from IEC 61646), bypass-diode thermal test added, area-dependent dielectric pass criteria, UV labelled as preconditioning, peak power current required during the 200 thermal cycles.
- Limitations (slide 24): "(1) Not to identify and quantify wear-out mechanisms; (2) Not to address failure mechanisms for all climates and system configurations (PID is an example); (3) Not to differentiate between products that may have long and short lifetimes; (4) Not to address all failure mechanisms in all module designs (New designs may fail for different reasons - e.g. PCB required different testing than EVA); (5) Not to quantify lifetime for the intended application/climate."

## Methods used
- [[../methods/damp-heat-aging-1000h]] — IEC 61215 standard 85/85 1000 h
- [[../methods/temperature-cycling-IEC61215-TC200]] — 200 cycles, -40 to +85 °C with peak-power current
- [[../methods/humidity-freeze-IEC61215-HF10]] — 10 cycles 85 °C/85% RH to -40 °C
- [[../methods/UV-preconditioning]] — pre-screening UV exposure
- [[../methods/EL-electroluminescence-imaging]] — referenced as a reliability characterisation tool

## Reagents
- [[../reagents/EVA-encapsulant]] — implied baseline encapsulant

## Organisms / substrates
- [[../organisms/full-size-module-60-cell]] — generic c-Si module
- [[../organisms/full-size-module-72-cell]] — generic c-Si module

## Failure modes flagged
- [[../failure-modes/EVA-acetic-acid-corrosion]] — addressed by damp heat
- [[../failure-modes/Cu-finger-corrosion-encapsulant]] — generic corrosion mode
- [[../failure-modes/finger-adhesion-loss-after-DH]] — encapsulant adhesion loss

## Supports / contradicts
- Supports: [[2011-nrel-reliability-testing-beyond-qualification]] (same author, same argument)
- Supports: [[2014-nrel-pv-module-qualification-plus]] (the response to these limitations)
- Supports: [[2024-nrel-getting-ahead-of-curve-pv-assessment]]
- Supports: [[2013-koehl-fraunhofer-accelerated-service-life-testing]]

## Notable quotes
- "Whipple reported on 10 years of field results in 1993 that Pre-Block V modules suffered from 45% field failure rate; Post-Block V modules suffered from <0.1% field failure rate." — slide 17
- "By design the qualification tests have limitations. They were designed to identify early infant mortality problems, but: Not to identify and quantify wear-out mechanisms…" — slide 24
- "(PID is an example of something that wasn't addressed because it wasn't important in the JPL deployments and wasn't seen early on in the typical low voltage applications)" — slide 24
