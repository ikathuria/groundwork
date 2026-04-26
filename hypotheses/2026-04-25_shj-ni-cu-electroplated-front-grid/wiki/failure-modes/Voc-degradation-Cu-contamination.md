---
type: failure-mode
slug: Voc-degradation-Cu-contamination
severity: high
frequency_estimate: "5–10 mV Voc loss within 1000–2000 h DH on Cu-plated p-Si cells with EVA encapsulant per Karas 2019; pFF 82.1 → 77.0 % over 2000 h with J02 doubling per Karas 2022"
applies_to_methods: [Cu-electroplating-acid-bath, electroplated-Ni-Cu-stack, IV-curve-measurement, dark-IV-suns-Voc, EL-electroluminescence-imaging, damp-heat-aging-1000h, SIMS-depth-profile]
applies_to_reagents: [acid-Cu-sulfate-bath, EVA-encapsulant, silver-Ag-cap, tin-Sn-cap]
applies_to_step_kinds: [plating, encapsulation, accelerated-aging, characterization]
sources: [2015-lindroos-cu-lid-aalto-thesis, 2018-nmat-graded-bandgap-perovskite-retraction-note, 2019-karas-damp-heat-degradation-shj-cu, 2022-karas-cu-outdiffusion-damp-heat]
tags: [Voc, J02, Cu-contamination, pFF, damp-heat, Karas]
created: 2026-04-26
updated: 2026-04-26
---

# Voc / pFF / J02 degradation from Cu contamination

**Slug:** `failure-modes/Voc-degradation-Cu-contamination` · **Severity:** high

## What it is

The cell-level electrical signature of Cu reaching the c-Si bulk: open-circuit voltage and pseudo-fill-factor drop while non-ideal recombination current density (J02) rises. The mechanism is the deep-level recombination centres formed by Cu interstitials, substitutional Cu, and Cu₃Si precipitates ([[failure-modes/Cu-LID-light-induced-degradation]]); the pathway is barrier breach during plating or aging ([[failure-modes/Cu-diffusion-into-c-Si]], [[failure-modes/Cu-out-diffusion-through-cap-stack]]). Manifests in the *finished* cell as the IV-readable consequence of the upstream physical-chemistry failures.

## How it manifests

- **pFF drop on Suns-VOC**: 82.1 → 77.0 % over 2000 h DH on Cu-plated, Sn-capped p-type cells under EVA (Karas 2022).
- **J02 increase >2×** on the same samples; for Ni-Cu-Sn / EVA modules J02 increased >6× while POE sister cells did not appreciably degrade (Karas 2022).
- **Voc loss** of 5–10 mV correlated with the J02 increase; harder to surface than pFF because Voc has multiple drivers, but Cu contamination is distinguishable when accompanied by **stable Jsc** (rules out optical / TCO causes) and **EL dark spots under fingers** (localises to the contact stack).
- **Cell-to-cell variability** in nominally identical samples and time-evolution of the IV under storage — the cautionary precedent from the [[sources/2018-nmat-graded-bandgap-perovskite-retraction-note]] retraction note: any pFF / Voc claim that drifts hour-to-day on a small sample set risks the same fate.

## How to detect it

- **Suns-VOC pFF tracking at 0/250/500/750/1000 h DH** — [[methods/dark-IV-suns-Voc]]. Δ pFF > 1 %abs at the 1000 h mark is the alarm threshold; > 5 %abs is unambiguous Cu contamination evidence.
- **Dark IV / J02 extraction** — track the non-ideal recombination current; J02 doubling is the diagnostic of Cu contamination (Karas 2022).
- **1-sun IV at every checkpoint** — [[methods/IV-curve-measurement]]: track Voc, Jsc, FF, η simultaneously. Voc loss with stable Jsc indicates a recombination problem, not optical or TCO.
- **EL imaging at high injection (e.g. 8 A)** — [[methods/EL-electroluminescence-imaging]]: dark spots under fingers correlate with localised Cu ingress at pinholes.
- **SIMS depth profile** — [[methods/SIMS-depth-profile]]: confirms the Cu signal in c-Si that *causes* the Voc/pFF drop; closes the causal loop.
- **N ≥ 5–10 cells per arm + checkpoint IV** — to surface variability before publishing (the retraction discipline).

## Mitigation

- **Prevent the upstream contamination** via the cascade in [[failure-modes/Cu-diffusion-into-c-Si]]: continuous Ni ≥120 nm OR rely on TCO + a-Si:H, ensure cap-stack integrity, switch encapsulant from EVA to [[reagents/POE-polyolefin-encapsulant]].
- **Encapsulant change EVA → POE** — Karas 2019 showed Cu-plated cells under POE did not degrade while EVA sisters did; same conclusion in 2022 for SIMS Cu-in-c-Si signal.
- **Cap-layer thickening or chemistry change** — thicker Sn (Cu₆Sn₅ self-limiting), Ni-doped Cu (stable (Cu,Ni)₆Sn₅), or POE substitution per Karas 2022's three-route recommendation.
- **N ≥ 5–10 cells per arm + IV at 0/250/500/750/1000 h** — the discipline that the retraction-note precedent mandates.
- **Reject champion-only claims** — never publish Δη ≤ 0.5 %abs at 1000 h DH on a single device or single-checkpoint measurement; pre-register the checkpoint schedule and the rejection criterion.

## Where it applies

- Methods: [[methods/IV-curve-measurement]], [[methods/dark-IV-suns-Voc]], [[methods/EL-electroluminescence-imaging]], [[methods/damp-heat-aging-1000h]], [[methods/SIMS-depth-profile]], [[methods/Cu-electroplating-acid-bath]], [[methods/electroplated-Ni-Cu-stack]]
- Reagents: [[reagents/acid-Cu-sulfate-bath]], [[reagents/EVA-encapsulant]], [[reagents/silver-Ag-cap]], [[reagents/tin-Sn-cap]]
- Step kinds: plating, encapsulation, accelerated-aging, characterization

## Severity rationale

High (not critical only because the cell-level Voc/pFF readout is downstream of the truly catastrophic [[failure-modes/Cu-diffusion-into-c-Si]] / [[failure-modes/Cu-LID-light-induced-degradation]] root causes — by the time Voc has dropped 10 mV the device is already lost). Karas 2019/2022 directly quantify the failure: 5 %abs pFF loss and >6× J02 rise at 1000–2000 h DH for Cu-plated cells under EVA, vs no measurable change under POE. The hypothesis's success threshold (Δη ≤ 0.5 %abs at 1000 h) requires this failure mode to be absent.

## Citing sources

- [[sources/2015-lindroos-cu-lid-aalto-thesis]] — Voc and Jsc loss are the cell-level fingerprints of Cu-LID; Lindroos provides the bulk-recombination mechanism behind the IV-readable degradation.
- [[sources/2019-karas-damp-heat-degradation-shj-cu]] — direct ASU/NREL DH study on encapsulated Cu-plated cells: pFF / J02 degradation, isolated by EVA-vs-POE comparison.
- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — the SIMS / EDS forensic follow-up: pFF 82.1 → 77.0 %, J02 doubling, ~3× higher Cu in c-Si under EVA vs POE.
- [[sources/2018-nmat-graded-bandgap-perovskite-retraction-note]] — cautionary precedent: cell-to-cell IV variability + time-evolution of key PV parameters were the retraction triggers; structurally identical to the Cu-contamination risk profile.
