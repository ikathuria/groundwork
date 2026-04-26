---
type: method
slug: transfer-length-method
aliases: [TLM, transmission line method, TLM-Scan, contact resistivity measurement, ρc measurement]
related_methods: [four-point-probe-sheet-resistance, IV-curve-measurement, NOBLE-selective-Cu-plating, electroplated-Ni-Cu-stack, screen-printed-Ag-paste, Cu-electroplating-acid-bath]
key_reagents: [ITO-transparent-conductive-oxide, low-T-Ag-paste-generic-SHJ-grade, Cu-paste-low-temperature, acid-Cu-sulfate-bath, a-Si-H-passivation]
known_failure_modes: [FF-degradation-contact-resistance, Ni-Cu-line-resistance-rise-DH]
sources: [2012-nrel-aluminum-metallization-tlm-printed, 2019-hatt-noble-shj-solrrl, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV, pvtech-metallization-challenges-cell-manufacturing]
tags: [TLM, contact-resistivity, characterization, ρc, the-success-criterion]
created: 2026-04-26
updated: 2026-04-26
---

# Transfer length method (TLM)

**Slug:** `methods/transfer-length-method` · **Type:** method

## What it measures / does

Measures specific contact resistivity ρc (Ω·cm²) and sheet resistance Rsh (Ω/sq) on a metal/semiconductor or metal/TCO interface from the slope and intercept of total resistance vs. line spacing, sampled across a series of pads with logarithmically- or linearly-spaced gaps. For SHJ Ni/Cu work, TLM is the *primary success-criterion instrument*: the hypothesis success threshold of ρc ≤ 2 mΩ·cm² is defined by a TLM measurement on the Ni/Cu plated arm.

## When to use it

Use it post-metallization, on dedicated TLM coupons (or laser-scribed stripes from a finished cell), as the contact-quality gate before committing to full-cell IV. Pingel 2025 and Lachowicz 2024 both build TLM-Scan stripes on the same cell precursor used for module integration. Hatt 2019/2021 NOBLE work measures TLM ρc 0.1–4 mΩ·cm² on the plated stack as the headline performance number.

## Key parameters / setpoints

- **Geometry (NREL Platt 2012, canonical):** ten parallel printed/plated lines with line-to-line spacings ranging 700 µm to 4800 µm on a textured Si wafer; linear regression of total resistance vs spacing yields ρc intercept and Rs slope.
- **Pad geometry (Yacouba 2025):** 2 mm × 10 mm pads.
- **Test pattern (Pingel 2025):** TLM-Scan setup (PV-Tools) on laser-separated stripes from full cells.
- **Probe:** four-point Kelvin probe per pad pair; constant current 1–100 mA; voltage drop ≤ 100 mV.
- **Output:** ρc (mΩ·cm²), Rsh (Ω/sq), transfer length L_T = √(ρc / Rsh).
- **Reported ρc values for SHJ pastes / plating (from corpus):**
  - Plated Cu on ITO (NOBLE, Hatt 2021): 0.1–1 mΩ·cm²
  - Plated Cu on ITO (NOBLE, Hatt 2019): 1.8–4 mΩ·cm²
  - Cu paste + plated Cu (Lachowicz 2024 PTP): 1.5 mΩ·cm²
  - AgCu paste on ITO (Pingel 2025): 5–12 mΩ·cm² (above 2 mΩ·cm² hypothesis target)
  - Pure Cu paste on ITO (Yacouba 2025): 10.28 mΩ·cm² at 56 µm fingers
  - AgCu paste (Yacouba 2025): 8.10 mΩ·cm²
  - LCT-Ag screen print: ≥ 2 mΩ·cm² typical (Hatt 2021 ref).
- **Hypothesis success criterion:** ρc ≤ 2 mΩ·cm² on the Ni/Cu arm post-plating.

## Common variants

- **Linear TLM** (Platt 2012, NREL canonical) — equally-spaced lines.
- **Circular TLM** — concentric ring electrodes; eliminates current-spread error.
- **Cross-Kelvin / Cross-Bridge Kelvin Resistor** — cleaner separation of ρc from sheet contributions.
- **TLM-Scan** (PV-Tools, used by Pingel/Fraunhofer ISE) — automated probe-and-fit on laser-scribed stripes.
- **Half-cell laser-separated TLM** (Pingel) — extracts ρc from production-format cells without dedicated test coupons.

## Things to watch for

- Spacing range must straddle the transfer length L_T; if all spacings are >> L_T, ρc is poorly resolved.
- Substrate prep matters: ρc on textured Si is different from polished — Lorenz / Pingel measure on the actual TCO + pyramid texture stack.
- Probe-tip damage to soft Cu plating can artificially raise the measured contact R; use light contact force or pre-deposited Kelvin pads.
- Series-resistance from the finger itself confounds long-spacing data; correct using the independently-measured line resistance.
- For SHJ specifically, the ρc is *to the TCO*, not to c-Si — paste / plated-Cu / TCO interface is what matters.

## Related methods

- [[methods/four-point-probe-sheet-resistance]] — companion Rsh measurement.
- [[methods/IV-curve-measurement]] — Rs from IV slope is the cell-level outcome of finger ρc + Rsh.
- [[methods/NOBLE-selective-Cu-plating]] — TLM is the headline performance gate.
- [[methods/electroplated-Ni-Cu-stack]] — TLM measures the resulting plated-stack ρc.
- [[methods/screen-printed-Ag-paste]] — Ag-paste baseline ρc comparator.
- [[methods/Cu-electroplating-acid-bath]] — ρc on Cu/TCO post-plating.

## Citing sources

- [[sources/2012-nrel-aluminum-metallization-tlm-printed]] — canonical 10-line, 700–4800 µm spacing TLM workflow on textured Si; printed Al ρc 80→20 mΩ·cm² across 550–800 °C firing.
- [[sources/2019-hatt-noble-shj-solrrl]] — TLM on a-Si:H(n) and a-Si:H(p) sides for NOBLE plated stacks; 1.8–4 mΩ·cm².
- [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — TLM ρc 0.1–1 mΩ·cm² for NOBLE on M2 cells.
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — implicit in TCO-resistivity / contact-resistance discussion.
- [[sources/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — TLM ρc on ITO 1.5 mΩ·cm² for Cu paste fingers.
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — TLM measurement of Cu paste ρc on ITO.
- [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — explicit ρc measurement using TLM-Scan setup (PV-Tools) on laser-separated stripes.
- [[sources/2025-yacouba-shj-silver-free-metallization-progPV]] — TLM with 2 mm × 10 mm pads to measure ρc to TCO.
- [[sources/pvtech-metallization-challenges-cell-manufacturing]] — implicit context (ρc is the qualifying metric for any seed layer).
