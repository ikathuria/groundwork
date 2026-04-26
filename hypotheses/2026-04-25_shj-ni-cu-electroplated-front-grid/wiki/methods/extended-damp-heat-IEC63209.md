---
type: method
slug: extended-damp-heat-IEC63209
aliases: [IEC 63209, IEC TS 63209-2, Qualification Plus DH, extended DH with bias]
related_methods: [damp-heat-aging-1000h, temperature-cycling-IEC61215-TC200, UV-preconditioning, IV-curve-measurement]
key_reagents: [EVA-encapsulant, POE-polyolefin-encapsulant]
known_failure_modes: [Cu-finger-corrosion-encapsulant, EVA-acetic-acid-corrosion, finger-adhesion-loss-after-DH, Voc-degradation-Cu-contamination]
sources: [2011-nrel-reliability-testing-beyond-qualification, 2013-koehl-fraunhofer-accelerated-service-life-testing, 2014-nrel-pv-module-qualification-plus, 2024-nrel-getting-ahead-of-curve-pv-assessment]
tags: [reliability, IEC-63209, polymer-durability, beyond-qualification, lifetime-testing]
---

# Extended Damp Heat (IEC 63209)

## What it measures / does
Extended damp-heat tests beyond the IEC 61215 1000 h qualification dwell, including biased operation, multi-stress sequences, and polymer-specific durability protocols. Targets wear-out mechanisms (vs infant-mortality screening) and aims to differentiate long- from short-lifetime designs on the same chassis. Key for novel materials like plated Cu where 1000 h is insufficient evidence of 25-yr reliability.

## When to use it
Use when 1000 h IEC 61215 DH passes but the design has unproven wear-out behaviour — exactly the case for plated-Cu SHJ. Run side-by-side with proven-long-life baseline; extend to power-loss endpoints (e.g. 90% of original Pmax) to rank technologies. Köhl 2013 climate equivalence: 3300 h for 25-yr alpine, 2400 h for 25-yr tropical at intermediate Ea.

## Key parameters
- Dwell: 2000-5000+ h at 85 C / 85% RH.
- Bias: system voltage applied (PID-related) or open-circuit (corrosion-only).
- Sequence: UV preconditioning -> DML -> 50 TC -> 10 HF -> DH (Qualification Plus, NREL 2014).
- Endpoint: <=5% Pmax loss after each individual test, <=8% after entire sequence (NREL Qual Plus).
- Climate-class targets: Class A (severe moisture), B (moderate), C (low).
- 7 c-Si modules show Ea range 26-73 kJ/mol — module-dependent, must be measured per design.

## Common variants / alternatives
- [[damp-heat-aging-1000h]] — qualification minimum, infant-mortality screen.
- [[temperature-cycling-IEC61215-TC200]] — complementary stress; 500 TC = 25-yr equivalent (Wohlgemuth).
- [[UV-preconditioning]] — explicit pre-stress before DH.

## Things to watch for (failure modes)
- [[../failure-modes/Cu-finger-corrosion-encapsulant]] — only manifests after extended DH; key novel-material risk.
- [[../failure-modes/EVA-acetic-acid-corrosion]] — accelerated at long DH; POE preferred for SHJ.
- [[../failure-modes/finger-adhesion-loss-after-DH]] — only visible at long dwells with peel test.
- [[../failure-modes/Voc-degradation-Cu-contamination]] — wear-out signature when Ni barrier slowly fails.

## Sources
- [[2011-nrel-reliability-testing-beyond-qualification]] — seminal "qualification ≠ lifetime" argument; proposes extending DH to power-loss endpoint.
- [[2013-koehl-fraunhofer-accelerated-service-life-testing]] — Arrhenius time-transformation; climate-class equivalents (3300 h alpine, 2400 h tropical).
- [[2014-nrel-pv-module-qualification-plus]] — formalises Qualification Plus protocol with extended DH, 500 TC, DML, UV.
- [[2024-nrel-getting-ahead-of-curve-pv-assessment]] — explicitly cites IEC TS 63209-2 polymer-durability menu for SHJ-Cu novel-material reliability.
