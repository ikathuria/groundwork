---
type: method
slug: transfer-length-method
aliases: [TLM, contact-resistivity TLM, transmission-line measurement]
related_methods: [four-point-probe-sheet-resistance, IV-curve-measurement, peel-test-90deg]
key_reagents: [ITO-transparent-conductive-oxide, low-T-Ag-paste-generic-SHJ-grade]
known_failure_modes: [FF-degradation-contact-resistance, Ni-barrier-pinholes]
sources: [2012-nrel-aluminum-metallization-tlm-printed, 2014-rehman-nicu-plating-csi-review, 2019-hatt-noble-shj-solrrl, 2021-hatt-stable-cu-plated-shj-eupvsec, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-tepner-printing-tech-csi-review, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV]
tags: [characterization, contact-resistivity, sheet-resistance, fine-line, hypothesis-target-metric]
---

# Transfer Length Method (TLM)

## What it measures / does
TLM extracts contact resistivity rho_c (mOhm.cm²) and underlying sheet resistance Rsh (Ohm/sq) from the linear regression of total resistance vs spacing across an array of parallel metal lines. It is the canonical electrical characterisation of the metal/TCO contact and is *the* primary metric the SHJ-Ni/Cu hypothesis targets: rho_c <= 2 mOhm.cm².

## When to use it
After plating + cap, before damp heat: measure rho_c on diced cells or coupons to verify the contact-formation step. Repeat after damp heat to track contact degradation. Lab automation (e.g. PV-Tools TLM-Scan) is widely deployed; manual probe-station measurements use a diced 1-cm strip with both polarities.

## Key parameters
- Pattern: 10 parallel lines, line-to-line spacings 700 um -> 4800 um (Platt 2012 NREL template); or pad-to-pad 2 mm x 10 mm (Yacouba 2025).
- Probe: four-point Kelvin probe to eliminate probe-resistance error.
- Extract Rsh from slope, total contact resistance from intercept; transfer length L_T from x-intercept; rho_c = R_c · w · L_T.
- Hypothesis target: rho_c <= 2 mOhm.cm² for SHJ Ni-Cu front grid.
- Reference values (SHJ): NOBLE 0.1-1 mOhm.cm² (Hatt 2021); CSEM Cu paste on ITO 1.5 mOhm.cm² (Lachowicz 2024); pure Cu paste on ITO 8-12 mOhm.cm² (Pingel 2025, Yacouba 2025); low-T Ag <0.4 mOhm.cm² (Pingel 2025).

## Common variants / alternatives
- [[four-point-probe-sheet-resistance]] — Rsh-only; complementary to TLM.
- [[IV-curve-measurement]] — extracts series resistance Rs at the cell level (lumped).

## Things to watch for (failure modes)
- [[../failure-modes/FF-degradation-contact-resistance]] — TLM-measured rho_c directly drives FF; the ladder data 80 -> 20 mOhm.cm² (NREL 2012) maps the relationship for printed Al, applies analogously to plated Cu.
- [[../failure-modes/Ni-barrier-pinholes]] — non-uniform Ni produces high-variance TLM data.

## Sources
- [[2012-nrel-aluminum-metallization-tlm-printed]] — protocol-defining reference: 10-line TLM with 700-4800 um spacing, sintering ladder 550-800 C; rho_c 80 -> 20 mOhm.cm² for printed Al.
- [[2014-rehman-nicu-plating-csi-review]] — implicit; cites Seran et al. (Konstanz) 0.6 mOhm.cm² with two-step Ni.
- [[2019-hatt-noble-shj-solrrl]] — TLM on ITO/CuPVD/Cu-Agplated stacks; 1.8-4.0 mOhm.cm² across (i/n) and (i/p) polarities.
- [[2021-hatt-stable-cu-plated-shj-eupvsec]] — NOBLE Cu rho_c 0.1-1 mOhm.cm²; laser-pattern variant 1.6 ± 0.3 mOhm.cm².
- [[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — Cu paste on ITO 1.5 mOhm.cm² (screen-printed TLM pattern).
- [[2023-tepner-printing-tech-csi-review]] — discussed for rho_c characterisation in screen-print review.
- [[2024-lachowicz-cu-plated-shj-aging-mini-modules]] — TLM for contact-resistivity of pure-Cu paste on ITO.
- [[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — TLM-Scan on PV-Tools setup; Cu paste rho_c 5 mOhm.cm² (80 um) and 12 mOhm.cm² (25 um).
- [[2025-yacouba-shj-silver-free-metallization-progPV]] — TLM with 2 mm x 10 mm pads of variable spacing; Cu SP rho_c 10.28 mOhm.cm² on ITO.
