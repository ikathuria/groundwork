---
type: failure-mode
slug: non-reproducibility-in-solar-cell-claims
severity: low
frequency_estimate: "Industry-pattern, not a device defect. Headline cases: Ergen et al. 2017 graded-bandgap perovskite retracted from Nature Materials in 2018 due to large I-V variability and rapid time evolution of key PV parameters. AAA-polyamide backsheet (NREL 2024) — passed IEC 61215 DH+UV but cracked in 5–10 years in field. Cu-plated SHJ champion-cell claims must be paired with statistical spreads and stability protocols to avoid the same trap."
applies_to_methods: [IV-curve-measurement, dark-IV-suns-Voc, EQE-measurement, damp-heat-aging-1000h, extended-damp-heat-IEC63209, UV-preconditioning, EL-electroluminescence-imaging, minority-carrier-lifetime-photoluminescence]
applies_to_reagents: []
applies_to_step_kinds: [measure, age]
sources: [2018-nmat-graded-bandgap-perovskite-retraction-note]
tags: [reproducibility, retraction, methodological-caution, qualification, novel-tech, statistics]
---

# Non-reproducibility in solar-cell claims

## What it is
This is a *methodological* failure mode rather than a device-physics one. Novel solar-cell architectures (perovskite, plated-Cu SHJ, etc.) routinely report a single champion-cell efficiency in a high-impact journal, but the underlying technology fails when independent labs attempt to reproduce it — either due to large device-to-device variability (poor process control) or rapid time-evolution of key PV parameters (degradation under conditions not captured by IEC 61215). The Nature Materials 2018 retraction of Ergen et al. 2017's "graded bandgap perovskite" paper is the archetype: large variability of I-V and spectral response among nominally identical devices, and rapid time-evolution of key parameters undermined the authors' confidence in their own claims ([[2018-nmat-graded-bandgap-perovskite-retraction-note]]). NREL 2024 cites the AAA-polyamide backsheet as the same archetype in a different domain — passed standard tests but failed at 5–10 years in field. For this hypothesis (sub-100 nm Ni + electroplated Cu on SHJ), the corresponding risk is: reporting a single 24+% champion cell without a proper reproducibility study (n ≥ 5 cells, full I-V spread, time-stability under 1000+ h DH and UV) cannot constitute a credible technology claim.

## How it manifests
- Single champion-cell number reported without spread statistics or n.
- 1000 h DH passing reported without intermediate-timepoint tracking (which would reveal trajectory).
- Lab-to-lab efficiency variation >1 %abs on nominally identical processes.
- Rapid drift of Voc, Jsc, FF over the first hours of light exposure that is glossed over rather than characterized.
- Claims made on small-area lab cells without large-area / module-level confirmation.
- Failure to report data when independent labs attempt the same recipe.

## How to detect it
- Demand n ≥ 5 (preferably ≥10) cells per claimed condition with reported standard deviation.
- Track full I-V over time during DH and UV stress (every 250 h, not just before/after).
- Independent ISFH / Fraunhofer / NREL / NIM efficiency certification (champion ARENA SunDrive cells were ISFH-certified; Yacouba 2025 cites Jülich internal but reports n).
- Cross-lab reproduction by at least one independent group before publishing performance claims.
- Open-protocol publication (full bath chemistries, anneal profiles, measurement parameters).
- Statistical analysis: bootstrap confidence intervals on claimed champion vs full distribution.

## Mitigation (specific actions, not vague advice)
- Specify n ≥ 10 cells per condition with mean ± SD reported in every claim ([[2018-nmat-graded-bandgap-perovskite-retraction-note]] post-mortem lesson).
- Run extended DH (≥2000 h, 2× IEC) on at least 3 modules with intermediate-timepoint IV every 250 h ([[2024-lachowicz-cu-plated-shj-aging-mini-modules]] precedent).
- Combine DH + UV + TC + PID stress sequence per IEC TS 63209-2 ([[2024-nrel-getting-ahead-of-curve-pv-assessment]]).
- Get an independent lab to run TLM / Suns-Voc / EQE on a sample subset before publication.
- Open-publish the bath formulation, plating profile (current density, time, agitation), thermal profile (anneal T, time, atmosphere), and measurement chain.
- Build a cross-batch reproducibility table before claiming "demonstrated" — a single 24 %+ cell from one batch is not "demonstrated."
- Use [[../methods/IV-curve-measurement]], [[../methods/dark-IV-suns-Voc]], [[../methods/EQE-measurement]], [[../methods/damp-heat-aging-1000h]], [[../methods/UV-preconditioning]], [[../methods/EL-electroluminescence-imaging]], [[../methods/minority-carrier-lifetime-photoluminescence]] in a defined sequence — the qualification suite, not just the champion test.

## Severity ranking justification
Low: not a device-level failure mode but a methodological one. Mitigatable entirely by good experimental practice. Included because most plated-Cu SHJ claims to date are champion-cell-only and do not yet meet the "reproducibility + extended-stability" bar that NREL 2024 calls for in its PV reliability learning cycle. The lesson-learning case (Ergen et al. retracted) is a perovskite paper, not Cu-plated SHJ, but the methodology lesson is universal.

## Sources
- `[[2018-nmat-graded-bandgap-perovskite-retraction-note]]` — direct retraction record; reasons cited.
