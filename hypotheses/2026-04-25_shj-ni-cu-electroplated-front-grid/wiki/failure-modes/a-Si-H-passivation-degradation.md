---
type: failure-mode
slug: a-Si-H-passivation-degradation
severity: high
frequency_estimate: "Onset >280 °C / 5 s; 320 °C / 5 s gives ~0.5 %abs efficiency loss; 360 °C gives ~1.5 %abs (Yacouba 2025). PERC firing temperatures (~750–800 °C) destroy a-Si:H passivation completely. NOBLE laser patterning ~10 mV Voc loss attributed to early-stage laser damage (Hatt 2021)."
applies_to_methods: [laser-ablation-of-dielectric, screen-printed-Ag-paste, NOBLE-selective-Cu-plating, minority-carrier-lifetime-photoluminescence, dark-IV-suns-Voc, IV-curve-measurement]
applies_to_reagents: [a-Si-H-passivation, low-T-Ag-paste-generic-SHJ-grade, Cu-paste-low-temperature, ITO-transparent-conductive-oxide]
applies_to_step_kinds: [cell-prep, screen-print, cap-deposition, anneal, lamination]
sources: [2019-hatt-noble-bifacial-shj-aip, 2021-hatt-stable-cu-plated-shj-eupvsec, 2023-tepner-printing-tech-csi-review, 2025-yacouba-shj-silver-free-metallization-progPV, dupont-solamet-pv21a-tech-sheet, dupont-solamet-pv56s-data-sheet]
tags: [a-Si-H, passivation, thermal-budget, hydrogen-effusion, Voc, SHJ-defining]
created: 2026-04-26
updated: 2026-04-26
---

# Hydrogenated amorphous silicon (a-Si:H) passivation degradation

**Slug:** `failure-modes/a-Si-H-passivation-degradation` · **Severity:** high

## What it is

The passivating contact in an SHJ cell is a thin (~5–10 nm) hydrogenated amorphous silicon (i-a-Si:H + n- or p-doped a-Si:H) layer between the c-Si wafer and the ITO TCO. The layer's passivation quality depends on hydrogen content and bond configuration; **above ~200–230 °C, hydrogen effuses out of the a-Si:H, defects re-emerge, and minority-carrier lifetime drops irrecoverably**. This sets the SHJ-defining ≤200 °C process budget — the constraint that excludes fired-Ag pastes (~750–800 °C peak) and motivates Cu plating (low-temperature, plate-compatible) in the first place. Yacouba 2025 quantifies the onset: degradation begins above 280 °C / 5 s; PERC-style firing destroys passivation entirely.

## How it manifests

- **Voc collapse** in the finished cell, often >20 mV. SHJ Voc baseline is 730–745 mV; degraded passivation drops it below 700 mV.
- **pFF / Suns-VOC drop** from baseline 82–84 % to <80 %.
- **Lifetime drop** in PL imaging at 1-sun injection — laser-damaged regions appear as dark patches.
- **Yacouba 2025 anneal ladder** for Cu paste cure: 280 °C / 5 s recoverable; 320 °C / 5 s = 0.5 %abs loss; 360 °C / 5 s = 1.5 %abs loss.
- **Hatt 2021 NOBLE laser patterning**: ~10 mV Voc loss vs inkjet, attributed to early-stage laser damage to a-Si:H during fs-UV (343 nm) ablation.
- **DuPont PV21A / PV56S co-fired Ag paste** misapplied on SHJ would *immediately* destroy passivation (peak T ~750–800 °C) — the false-friend control, not a real DH-aging signature.

## How to detect it

- **PL imaging at 1-sun** — [[methods/minority-carrier-lifetime-photoluminescence]]: dark patches reveal localised passivation damage (Hatt 2021's diagnostic for laser damage).
- **Suns-VOC pFF measurement** — [[methods/dark-IV-suns-Voc]]: pFF drop with Voc drop and stable Jsc indicates passivation degradation, not Cu contamination (which gives pFF + Voc + J02 signature).
- **1-sun IV** — [[methods/IV-curve-measurement]]: track Voc, Jsc, FF; Voc is the most sensitive metric.
- **QSSPC / μ-PCD lifetime** — bulk + surface recombination separation; surface recombination velocity rise localises the failure to the passivating contact.
- **Anneal-ladder calibration** — Yacouba 2025-style: pre-stress witness samples at 200/250/280/300/320/360 °C / 5 s and back out the thermal-budget envelope of any new process step.

## Mitigation

- **Stay below 200 °C peak temperature** for *every* process step that follows a-Si:H deposition — the SHJ-defining constraint. Use [[reagents/low-T-Ag-paste-generic-SHJ-grade]] (cures ≤200 °C), avoid fired pastes (PV21A / PV56S).
- **For Cu paste**: use Cu-paste cure profiles ≤280 °C / 5 s (Yacouba 2025); deploy backing-paper protective covers to limit O₂ exposure; light-soak the cell after cure to recover passivation (Yacouba reports 0.2 %abs reversible loss at 300 °C / 5 s).
- **For laser patterning**: low-pulse-energy multi-pass (Hatt 2021) or buffer-Cu (500 nm) protection layer to absorb laser energy before it reaches the a-Si:H.
- **Prefer inkjet patterning over laser** when feasible — inkjet (NaOH ink on Al/AlOx in NOBLE; hot-melt resist) is a-Si:H-safe at room temperature.
- **PVD seed deposition** at low ion energy (sputtering > thermal evap for damage minimisation in some configurations) — Hatt 2019 demonstrates Voc 731 mV after PVD step on full-area cells.
- **Process hand-off discipline** — measure pFF / Voc immediately after each thermal or laser step; surface degradation before subsequent steps compound it.
- **Avoid PERC pastes (PV21A, PV56S)** absolutely — these are wiki red-flagged as false-friend controls.

## Where it applies

- Methods: [[methods/laser-ablation-of-dielectric]], [[methods/screen-printed-Ag-paste]], [[methods/NOBLE-selective-Cu-plating]], [[methods/minority-carrier-lifetime-photoluminescence]], [[methods/dark-IV-suns-Voc]], [[methods/IV-curve-measurement]]
- Reagents: [[reagents/a-Si-H-passivation]], [[reagents/low-T-Ag-paste-generic-SHJ-grade]], [[reagents/Cu-paste-low-temperature]], [[reagents/ITO-transparent-conductive-oxide]]
- Step kinds: cell-prep, screen-print, cap-deposition, anneal, lamination

## Severity rationale

High. The a-Si:H passivation is what *defines* the SHJ architecture and its 730–745 mV Voc; loss of passivation drops Voc by 20+ mV and is in many cases not recoverable. The ≤200 °C thermal budget constraint is well-known and cleanly engineered around: low-T pastes, plated metallization, inkjet patterning. Severity is high (not critical) because process-discipline can fully prevent it — but a single thermal misstep (e.g. firing PV21A by accident) destroys the device.

## Citing sources

- [[sources/2019-hatt-noble-bifacial-shj-aip]] — full-area NOBLE: Voc 731 mV demonstrating PVD step does not damage a-Si:H.
- [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — laser patterning: ~10 mV Voc loss vs inkjet from a-Si:H damage; PL imaging at 1-sun is the diagnostic.
- [[sources/2023-tepner-printing-tech-csi-review]] — establishes ≤200–230 °C thermal-budget constraint as the SHJ-defining limitation.
- [[sources/2025-yacouba-shj-silver-free-metallization-progPV]] — quantitative anneal ladder: 280/320/360 °C / 5 s thresholds; H effusion mechanism.
- [[sources/dupont-solamet-pv21a-tech-sheet]] — PV21A: ~750–800 °C spike-firing peak; would destroy a-Si:H. False-friend control.
- [[sources/dupont-solamet-pv56s-data-sheet]] — PV56S: >600 °C peak; same false-friend warning.
