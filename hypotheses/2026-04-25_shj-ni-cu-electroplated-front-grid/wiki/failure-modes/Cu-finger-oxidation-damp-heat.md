---
type: failure-mode
slug: Cu-finger-oxidation-damp-heat
severity: high
frequency_estimate: "Pure Cu paste fingers: +2.3–2.4 mΩ Rs gain across 200–270 °C / 10 min stress, visible blue-green discoloration; thermal-cycling reduces module power up to 40 % in 200 cycles for prior Cu-paste-only SHJ modules (Frasson 2024). Cu-paste cells lose ~0.2 %abs in 300 °C / 5 s anneal recoverable by light soaking (Yacouba 2025)."
applies_to_methods: [Cu-electroplating-acid-bath, electroplated-Ni-Cu-stack, light-induced-plating, screen-printed-Ag-paste, damp-heat-aging-1000h, temperature-cycling-IEC61215-TC200, EL-electroluminescence-imaging, four-point-probe-sheet-resistance]
applies_to_reagents: [silver-Ag-cap, tin-Sn-cap, Cu-paste-low-temperature, EVA-encapsulant, POE-polyolefin-encapsulant, acid-Cu-sulfate-bath]
applies_to_step_kinds: [plating, cap-deposition, screen-print, encapsulation, accelerated-aging]
sources: [2019-hatt-noble-shj-solrrl, 2022-arena-sundrive-copper-metallisation-demonstration, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-nrel-getting-ahead-of-curve-pv-assessment, 2024-siliconpv-novel-shj-metallization-architectures, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV, atotech-solar-industry-overview, fisher-AC197730010-cu-sulfate-pentahydrate-sds]
tags: [Cu-oxidation, cap-stack, damp-heat, thermal-cycling, Frasson, Ag-cap, Sn-cap]
created: 2026-04-26
updated: 2026-04-26
---

# Cu finger oxidation under damp heat / thermal cycling

**Slug:** `failure-modes/Cu-finger-oxidation-damp-heat` · **Severity:** high

## What it is

Bare or thinly-capped plated Cu fingers oxidise on contact with atmospheric oxygen, accelerated by humidity and thermal stress. The native Cu₂O / CuO surface forms even at room temperature; under DH (85 °C / 85 % RH) or thermal cycling the oxidation propagates, raising line resistance and (for Cu-paste fingers) preventing inter-particle sintering. The Sn or Ag cap layer is the engineered defence; without it, plated Cu fingers visibly discolour (blue-green) and module power drops up to 40 % in 200 thermal cycles (Frasson 2024). Pure Cu paste is especially vulnerable because each particle has its own oxide skin.

## How it manifests

- **Blue-green discoloration of finger surfaces** (Frasson 2024) — visible to the naked eye.
- **Series-resistance rise**: +2.3–2.4 mΩ Rs gain across 200–270 °C / 10 min for pure-Cu paste (Frasson 2024); contrasts with +0.1–0.5 mΩ for Ag and AgCu pastes.
- **Up to 40 % thermal-cycling module power loss in 200 cycles** for prior Cu-paste-only SHJ modules (Frasson 2024).
- **EL dark spots** at oxidised finger sections.
- **FF and Pmax drop in 1-sun IV** at DH and TC checkpoints.
- **Cu-paste annealing window** narrow: Yacouba 2025 reports ~0.2 %abs efficiency drop on Cu-paste cells annealed at 300 °C / 5 s (recoverable by light soaking), but degradation onset is at >280 °C; Cu-paste annealing requires backing-paper protective covers to limit air exposure during cure.
- **Tarnished Ag cap or oxidised Sn cap** in the IMC region after extended DH.

## How to detect it

- **Visual inspection** — Cu oxidation is colorimetrically obvious (Cu metal red → Cu₂O orange → CuO black; for paste, blue-green tarnishing).
- **Four-point-probe / Kelvin-probe line resistance** before and after thermal stress — [[methods/four-point-probe-sheet-resistance]]: ΔR_L tracks oxide thickness.
- **DH 1000–2700 h chamber test** — [[methods/damp-heat-aging-1000h]] — track Pmax / FF / R_s.
- **Thermal cycling -40 °C ↔ +85 °C, 200–600 cycles** — [[methods/temperature-cycling-IEC61215-TC200]] — Frasson's 200 cycles / 40 % loss is the canonical worst-case data point.
- **EL imaging** — [[methods/EL-electroluminescence-imaging]] localises affected fingers; oxidised regions appear dark.
- **Cross-section EDS / SEM** of finger surface — quantify oxide thickness and morphology.
- **For Cu-paste only: anneal-temperature ladder** (200/250/280/300/320/360 °C / 5 s) — Yacouba 2025 reports degradation onset at >280 °C.

## Mitigation

- **Sn or Ag cap on plated Cu** — the standard engineered defence. Hatt 2019 (NOBLE) uses immersion Ag at ~200 nm; SunDrive 2022 uses SnBiAg / SnBiPb solder caps. See [[reagents/silver-Ag-cap]] and [[reagents/tin-Sn-cap]].
- **Atotech-style Ni/Cu/Ag or Ni/Cu/Sn stack** — the commercial product positioning ([[sources/atotech-solar-industry-overview]]); the cap is the barrier against oxidation.
- **POE encapsulant** — see [[failure-modes/EVA-acetic-acid-corrosion]]; POE removes the acetic-acid sink that mobilises Cu through the cap, reducing the rate at which oxidation reaches the underlying metal.
- **For Cu-paste: backing-paper protective covers during anneal** (Yacouba 2025) — limits O₂ exposure during the cure step.
- **For Cu-paste: Al₂O₃ overlayer** — Lachowicz 2024 mentions an Al₂O₃ cover as an oxidation-protection option on pure Cu paste seed-grids.
- **Surface deoxidation pretreatment before plating** — Lachowicz 2024 recommends deoxidising the printed Cu paste surface (HCl dip or similar) before electrodeposition to ensure low-resistance contact between paste and plated Cu.
- **AgCu (Cu core / Ag shell) paste** — Frasson 2024 demonstrates the Ag shell remains intact through print + cure (EDX shows only 0.3 %wt Cu surface vs 18.8 %wt Ag); avoids the bare-Cu oxidation problem of pure-Cu pastes.
- **For plated Cu: avoid leaving uncapped Cu in air for more than minutes** — process hand-off discipline.

## Where it applies

- Methods: [[methods/Cu-electroplating-acid-bath]], [[methods/electroplated-Ni-Cu-stack]], [[methods/light-induced-plating]], [[methods/screen-printed-Ag-paste]], [[methods/damp-heat-aging-1000h]], [[methods/temperature-cycling-IEC61215-TC200]], [[methods/EL-electroluminescence-imaging]], [[methods/four-point-probe-sheet-resistance]]
- Reagents: [[reagents/silver-Ag-cap]], [[reagents/tin-Sn-cap]], [[reagents/Cu-paste-low-temperature]], [[reagents/EVA-encapsulant]], [[reagents/POE-polyolefin-encapsulant]], [[reagents/acid-Cu-sulfate-bath]]
- Step kinds: plating, cap-deposition, screen-print, encapsulation, accelerated-aging

## Severity rationale

High. Frasson 2024's 40 % module-power loss in 200 thermal cycles for Cu-paste-only SHJ modules is severe and represents the canonical industrial reliability failure of un-capped Cu metallization. For *plated* Cu (the hypothesis's intervention), the cap-stack reliably blocks atmospheric oxidation but Cu mobilisation under DH ([[failure-modes/Cu-out-diffusion-through-cap-stack]]) still creates outer-cap-surface Cu that can oxidise in the encapsulant. Severity is high, not critical, because the cap-stack engineering toolkit (Sn/Ag, POE encapsulant, edge sealing) is well-developed and the mitigation path is established.

## Citing sources

- [[sources/2019-hatt-noble-shj-solrrl]] — Hatt: immersion Ag (~200 nm) capping motivated specifically by Cu oxidation.
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — SunDrive: SnBiAg / SnBiPb solder caps; passes 2000 h DH.
- [[sources/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — pure Cu paste oxidation needing Al₂O₃ cover.
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — surface-deoxidation pretreatment recommended; Cu paste oxidation under cure.
- [[sources/2024-nrel-getting-ahead-of-curve-pv-assessment]] — implicit Cu-specific oxidation failure flagged for emerging tech.
- [[sources/2024-siliconpv-novel-shj-metallization-architectures]] — Frasson: pure-Cu paste +2.3–2.4 mΩ Rs gain at 200–270 °C; 40 % TC module power loss in 200 cycles; AgCu shell remains intact.
- [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — Pingel: Cu oxidation flagged as the manufacturability/reliability risk for Cu pastes.
- [[sources/2025-yacouba-shj-silver-free-metallization-progPV]] — Cu paste highly sensitive to atmospheric oxidation; backing-paper protective covers during 300 °C / 5 s anneal.
- [[sources/atotech-solar-industry-overview]] — vendor positioning of the Ni/Cu/Ag or Ni/Cu/Sn stack with cap as the oxidation defence.
- [[sources/fisher-AC197730010-cu-sulfate-pentahydrate-sds]] — Cu metal originating from the sulfate bath is the oxidation target during DH.
