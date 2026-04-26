---
type: method
slug: four-point-probe-sheet-resistance
aliases: [4PP sheet resistance, Kelvin probe, four-probe Rs, sheet resistance measurement]
related_methods: [transfer-length-method, IV-curve-measurement, electroless-Ni-deposition, screen-printed-Ag-paste]
key_reagents: [acid-Cu-sulfate-bath, ITO-transparent-conductive-oxide, low-T-Ag-paste-generic-SHJ-grade, Cu-paste-low-temperature, nickel-phosphorus-NiP-electroless]
known_failure_modes: [FF-degradation-contact-resistance, Ni-Cu-line-resistance-rise-DH]
sources: [2012-nrel-aluminum-metallization-tlm-printed, 2017-jeon-electroless-ni-front-metallization, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-lorenz-cutting-edge-metallization-shj-fraunhofer, 2024-siliconpv-novel-shj-metallization-architectures, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV]
tags: [characterization, sheet-resistance, line-resistance, four-point-probe, Kelvin]
created: 2026-04-26
updated: 2026-04-26
---

# Four-point probe sheet resistance / line resistance

**Slug:** `methods/four-point-probe-sheet-resistance` · **Type:** method

## What it measures / does

Forces a current through the outer two probes and measures the voltage drop across the inner two on a four-in-line probe head, eliminating contact-resistance error in the voltage reading. Yields sheet resistance Rsh (Ω/sq) for thin films and line resistance RL (Ω/cm) for printed/plated fingers. For SHJ Cu-plating work it is the workhorse for Cu/Ag/Cu-paste line-resistance comparison and for verifying TCO Rsh after plating chemistry exposure.

## When to use it

Use it after every metal-film deposition step (Ni-P, plated Cu, sputtered seed) to verify continuity and conductivity. Use it on dedicated dog-bone or Kelvin-pad test patterns to extract finger line resistance — Lachowicz reports 0.18 Ω over a 26 mm pad-to-pad span on Cu-paste + plated Cu vs 5.1 Ω on Cu paste alone. On the SHJ Ni/Cu plan it is the upstream check before TLM (TLM extracts ρc + Rsh together; 4PP gives Rsh independently).

## Key parameters / setpoints

- **Probe head:** four collinear probes, equal spacing s ~ 1 mm; spring-loaded with controlled force.
- **Geometry correction:** for finite samples, the 4.532 (semi-infinite sheet) factor is replaced by a geometry-dependent correction; for narrow stripes use the Kelvin / dog-bone pattern instead of the sheet formula.
- **Current source:** 1–100 mA constant current; voltmeter resolution µV.
- **Test pattern (Lorenz / Pingel / Lachowicz):** 5-busbar dog-bone test pattern, 3 cm long fingers, separately printed and measured for accurate Rgrid extraction.
- **Outputs:** Rsh (Ω/sq) for sheet, RL (Ω/cm) for finger; bulk resistivity ρ = Rsh × t for known thickness t.

## Common variants

- **In-line 4PP** — handheld or automated for production lines.
- **Eddy-current Rsh** — non-contact, but less reliable on rough/textured Si.
- **Kelvin pad-to-pad** (Lachowicz) — long fingers contacted at both ends with low-resistance pads; deduces line resistance directly.
- **Dual-print 5BB test** (Lorenz 2024) — separately printed busbar + finger array specifically for Rgrid extraction without confounding cell area.

## Things to watch for

- Probe-tip damage on soft Cu plating or thin Ag finger surfaces — use light force or a Kelvin pad pattern.
- Contact resistance between probe tip and sample is *eliminated* in 4-probe but *not* in 2-probe; never report a 2-probe Rsh.
- Edge effects on small samples — apply a geometric correction or use a sufficiently large area.
- For TCO sheet-resistance after acid-Cu plating exposure, drift indicates [[failure-modes/Ni-Cu-line-resistance-rise-DH]] precursor or plating-bath etch attack.

## Related methods

- [[methods/transfer-length-method]] — TLM extracts both ρc and Rsh from the same line-resistance vs spacing fit.
- [[methods/IV-curve-measurement]] — Rs from the IV slope is the finished-cell counterpart.
- [[methods/screen-printed-Ag-paste]] — Pingel/Lorenz test screens and pastes use 4PP as the headline performance metric.

## Citing sources

- [[sources/2012-nrel-aluminum-metallization-tlm-printed]] — implicit companion measurement (TLM extracts both ρc and Rsh from the same fit; 4PP cross-checks Rsh).
- [[sources/2017-jeon-electroless-ni-front-metallization]] — Ni-P film characterisation by sheet-resistance.
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — Kelvin-probe line-resistance on Cu paste + plated Cu hierarchy (1.5 / 5.1 / 0.18 Ω at 26 mm).
- [[sources/2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] — separate dual-print 5-busbar test for accurate Rgrid.
- [[sources/2024-siliconpv-novel-shj-metallization-architectures]] — line-resistance and volume-resistivity on 3 cm dog-bone test patterns.
- [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — Rsh measurement on the same TLM stripes used for ρc.
- [[sources/2025-yacouba-shj-silver-free-metallization-progPV]] — line-resistance via 4-probe after annealing on Cu paste fingers (4.24 Ω/cm at 56 µm wide).
