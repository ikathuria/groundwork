---
type: failure-mode
slug: Ni-Cu-line-resistance-rise-DH
severity: medium
frequency_estimate: "Pure Cu paste ΔRs +2.3–2.4 mΩ across 200–270 °C / 10 min stress vs +0.1–0.5 mΩ for Ag/AgCu pastes (Frasson 2024). DH-driven series-resistance rise on plated Cu with cap stacks is encapsulant-dependent (POE: minimal; EVA: significant per Karas 2019/2022)."
applies_to_methods: [damp-heat-aging-1000h, temperature-cycling-IEC61215-TC200, four-point-probe-sheet-resistance, dark-IV-suns-Voc, IV-curve-measurement]
applies_to_reagents: [silver-Ag-cap, tin-Sn-cap, EVA-encapsulant, POE-polyolefin-encapsulant, Cu-paste-low-temperature]
applies_to_step_kinds: [plating, cap-deposition, encapsulation, accelerated-aging]
sources: [2011-nrel-reliability-testing-beyond-qualification, 2018-pvtech-metallization-shj-cells-modules, 2019-hatt-noble-bifacial-shj-aip, 2024-siliconpv-novel-shj-metallization-architectures]
tags: [line-resistance, Rs, DH, thermal-cycling, ageing, Cu-oxidation, FF]
created: 2026-04-26
updated: 2026-04-26
---

# Ni/Cu line resistance rise under damp heat and thermal cycling

**Slug:** `failure-modes/Ni-Cu-line-resistance-rise-DH` · **Severity:** medium

## What it is

The Ni/Cu plated stack's bulk line resistance (target ρL ≈ 2 µΩ·cm, near-Cu-bulk) can rise during damp-heat or thermal-cycling aging via several mechanisms: (a) Cu oxidation through cap-stack defects (cascades to [[failure-modes/Cu-finger-oxidation-damp-heat]]), (b) IMC formation at Cu/Sn or Cu/Ag interfaces consuming low-resistivity Cu (Karas 2022), (c) TCO sheet-resistance changes after etch-back / contact aging (Hatt 2019), and (d) for paste-Cu seed routes, oxidation of un-plated paste regions. Frasson 2024 quantifies the worst case: pure-Cu paste +2.3–2.4 mΩ Rs gain across 200–270 °C / 10 min stress, vs +0.1–0.5 mΩ for Ag and AgCu pastes — i.e. a 5–20× higher line-R rise for un-capped Cu vs Ag.

## How it manifests

- **Series-resistance increase in dark IV** — the canonical detector.
- **FF drop in 1-sun IV** — ΔFF ∝ −ΔRs.
- **Local hot spots in IR thermography** — high-Rs regions self-heat under bias.
- **Visual discoloration of fingers** for the un-capped Cu case.
- **EL dark spots** at high-Rs regions.
- **Hatt 2019 NOBLE**: ITO sheet-resistance increase after chemical etch-back damaging the TCO underneath the plated stack.

## How to detect it

- **Dark IV / Suns-VOC pFF − FF gap** — [[methods/dark-IV-suns-Voc]]: pFF − FF > 1 %abs flags a series-R problem; track delta across DH/TC checkpoints.
- **Four-point-probe / Kelvin-probe line resistance** — [[methods/four-point-probe-sheet-resistance]]: pad-to-pad measurement of ΔR_L; fast and direct.
- **DH chamber 85 °C / 85 % RH** — [[methods/damp-heat-aging-1000h]]; checkpoints at 0/250/500/750/1000/2000 h.
- **Thermal cycling -40 °C ↔ +85 °C** — [[methods/temperature-cycling-IEC61215-TC200]]; 200/500 cycles per Wohlgemuth 2011.
- **IR thermography under forward bias** — Wohlgemuth 2011 recommended; spatially resolves Rs hot spots.
- **EL imaging** — [[methods/EL-electroluminescence-imaging]]: dark spots correlate with high-Rs regions.

## Mitigation

- **Continuous Sn or Ag cap** — see [[failure-modes/Cu-finger-oxidation-damp-heat]]; Hatt 2019 (~200 nm immersion Ag), SunDrive (SnBiAg / SnBiPb solder cap).
- **POE encapsulant** — see [[failure-modes/EVA-acetic-acid-corrosion]]: EVA hydrolysis acetic acid drives Cu mobility through cap, indirectly raising Rs.
- **Karas 2022 cap engineering** — thicker Sn (Cu₆Sn₅ self-limiting), Ni-doped Cu ((Cu,Ni)₆Sn₅ stable IMC).
- **For paste arms**: AgCu (Cu core / Ag shell) paste — Frasson 2024: AgCu1 matches Ag at +0.1–0.5 mΩ vs +2.3–2.4 mΩ for pure Cu.
- **Hatt 2019 etch-back chemistry tuning** — ammonium persulfate (NH₄)₂S₂O₈ for selective Cu seed removal without ITO attack.
- **Edge sealing** of glass-glass mini-modules (Lachowicz 2024 PIB recommendation).
- **Process discipline**: don't leave un-capped plated Cu in air for more than minutes.

## Where it applies

- Methods: [[methods/damp-heat-aging-1000h]], [[methods/temperature-cycling-IEC61215-TC200]], [[methods/four-point-probe-sheet-resistance]], [[methods/dark-IV-suns-Voc]], [[methods/IV-curve-measurement]]
- Reagents: [[reagents/silver-Ag-cap]], [[reagents/tin-Sn-cap]], [[reagents/EVA-encapsulant]], [[reagents/POE-polyolefin-encapsulant]], [[reagents/Cu-paste-low-temperature]]
- Step kinds: plating, cap-deposition, encapsulation, accelerated-aging

## Severity rationale

Medium. Line-resistance rise is the cell-level, post-aging consequence of upstream failures — Cu oxidation, encapsulant-driven Cu mobility, IMC formation. By itself ΔRs of a few mΩ produces ΔFF < 0.5 %abs; the failure becomes serious only when it compounds with [[failure-modes/Cu-finger-oxidation-damp-heat]] or [[failure-modes/Cu-finger-corrosion-encapsulant]]. For the *plated* Ni/Cu/Ag stack the hypothesis specifies, line-R rise is well-controlled by the cap. For *paste*-based comparator arms (Cu paste, AgCu) it is a meaningful failure mode that determines reliability.

## Citing sources

- [[sources/2011-nrel-reliability-testing-beyond-qualification]] — series-resistance rise during DH is precisely what dark IV is meant to surface early.
- [[sources/2018-pvtech-metallization-shj-cells-modules]] — referenced via reliability data on aged plated cells; <5 % degradation after >3× IEC.
- [[sources/2019-hatt-noble-bifacial-shj-aip]] — discusses ITO sheet-resistance increase after chemical etch-back; the TCO-side contribution to line-R rise.
- [[sources/2024-siliconpv-novel-shj-metallization-architectures]] — Frasson: pure-Cu paste +2.3–2.4 mΩ Rs gain at 200–270 °C; tightly related to line-R rise from Cu oxidation. AgCu and Ag pastes show only +0.1–0.5 mΩ.
