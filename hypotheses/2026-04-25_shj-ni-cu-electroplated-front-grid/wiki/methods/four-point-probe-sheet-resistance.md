---
type: method
slug: four-point-probe-sheet-resistance
aliases: [4PP, sheet-resistance probe, Kelvin probe, line-resistance measurement]
related_methods: [transfer-length-method, IV-curve-measurement]
key_reagents: [ITO-transparent-conductive-oxide]
known_failure_modes: [Ni-Cu-line-resistance-rise-DH, FF-degradation-contact-resistance]
sources: [2012-nrel-aluminum-metallization-tlm-printed, 2014-rehman-nicu-plating-csi-review, 2017-jeon-electroless-ni-front-metallization, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-tepner-printing-tech-csi-review, 2024-itrpv-15th-edition-roadmap, 2024-lorenz-cutting-edge-metallization-shj-fraunhofer, 2024-siliconpv-novel-shj-metallization-architectures, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV]
tags: [characterization, sheet-resistance, line-resistance, Kelvin-probe, ITRPV-tracked]
---

# Four-Point Probe / Sheet Resistance

## What it measures / does
Four-point Kelvin probe measurement eliminates probe-resistance error to give sheet resistance Rsh (Ohm/sq) of a thin film, or finger line resistance RL (Ohm/cm) of a printed/plated finger. Standard for tracking emitter sheet resistance, plating-bath film thickness/quality, and finger conductivity before and after damp heat / thermal cycling.

## When to use it
Tracks bulk and finger conductivity at every process step: emitter (130-210 Ohm/sq, ITRPV roadmap parameter); silicide (drops 350-600 C, rises >700 C — Hsieh 2017); Cu finger line resistance (NOBLE ~2 uOhm.cm vs SP Ag >=5 uOhm.cm — Hatt 2021); Cu paste line-resistance stability after 24-day air storage (Pingel 2025 — no significant change).

## Key parameters
- Probe spacing: typical 1 mm; current sourced through outer probes, voltage measured between inner probes.
- Geometric correction factor for sample size / edge effects.
- Reference lines: dog-bone test pattern (Frasson 2024) or pad-to-pad lines.
- Measured ranges:
  - Bulk Cu: ~2x10⁻⁶ Ohm.cm plated (slightly above 1.7x10⁻⁶ pure).
  - Cu finger line resistance: 0.18 Ohm over 26 mm (CSEM PTP), 1.15 Ohm/cm Ag SP, 4.24 Ohm/cm Cu SP (Yacouba 2025).
  - Low-T Ag paste bulk resistivity: 3.51-12.62 uOhm.cm.

## Common variants / alternatives
- [[transfer-length-method]] — uses 4PP electrodes but extracts contact resistivity in addition to sheet resistance.
- Eddy-current sheet resistance — non-contact, used for ITO Rsh.

## Things to watch for (failure modes)
- [[../failure-modes/Ni-Cu-line-resistance-rise-DH]] — finger-resistance increase under DH; tracked by 4PP before/after.
- [[../failure-modes/FF-degradation-contact-resistance]] — FF gap implies series-resistance loss; 4PP isolates whether Rs comes from finger conductivity vs contact.

## Sources
- [[2012-nrel-aluminum-metallization-tlm-printed]] — implicit; extract Rsh from same TLM lines.
- [[2014-rehman-nicu-plating-csi-review]] — implied throughout for finger / silicide characterisation.
- [[2017-jeon-electroless-ni-front-metallization]] — sheet-resistance trend across silicide phase progression (350-600 C drop, >700 C rise).
- [[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — Kelvin probes for finger line resistance.
- [[2023-tepner-printing-tech-csi-review]] — implicit (RGrid measurement) in screen-print review.
- [[2024-itrpv-15th-edition-roadmap]] — emitter sheet resistance is a tracked roadmap parameter (130-210 Ohm/sq).
- [[2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] — implicit in RGrid measurement on knotless screen-print.
- [[2024-siliconpv-novel-shj-metallization-architectures]] — line resistivity from dog-bone test pattern.
- [[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — implicit (RGrid measurement); Cu paste line-resistance stable after 24 days air.
- [[2025-yacouba-shj-silver-free-metallization-progPV]] — line-resistance characterisation of Cu/AgCu/Ag pastes.
