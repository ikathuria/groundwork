---
type: failure-mode
slug: Cu-diffusion-into-c-Si
severity: critical
frequency_estimate: "Inevitable without a barrier: Cu diffuses through 400 µm B-doped wafer in <11 h at room temperature (Lindroos 2015); Cheng 2018 observed Cu₃Si formation at 300 °C in Cu/Ni(60 nm)/textured-Si and at 400 °C in Cu/Ni(120 nm). On TCO-protected SHJ, Yacouba 2025 found no detectable Cu in Si — TCO is a viable barrier when intact."
applies_to_methods: [Cu-electroplating-acid-bath, electroplated-Ni-Cu-stack, electroless-Ni-deposition, NOBLE-selective-Cu-plating, light-induced-plating, SIMS-depth-profile, minority-carrier-lifetime-photoluminescence]
applies_to_reagents: [acid-Cu-sulfate-bath, nickel-sulfamate-bath, nickel-phosphorus-NiP-electroless, ITO-transparent-conductive-oxide, a-Si-H-passivation, Cu3Si-intermetallic]
applies_to_step_kinds: [plate, anneal, age, measure]
sources: [2010-bartsch-lip-pvsc, 2014-rehman-nicu-plating-csi-review, 2015-lindroos-cu-lid-aalto-thesis, 2017-jeon-electroless-ni-front-metallization, 2018-electrochemsci-barrier-properties-electroplated-ni, 2019-karas-damp-heat-degradation-shj-cu, 2022-arena-sundrive-copper-metallisation-demonstration, 2022-karas-cu-outdiffusion-damp-heat, 2024-nrel-getting-ahead-of-curve-pv-assessment, pvtech-metallization-challenges-cell-manufacturing]
tags: [copper, diffusion, c-Si, fast-diffuser, recombination, hypothesis-killer]
---

# Cu diffusion into crystalline silicon

## What it is
Copper is one of the fastest-diffusing impurities in silicon. Interstitial Cu has an intrinsic diffusivity of D = 3×10⁻⁴·exp(−0.18 eV/kBT) cm²/s and traverses a 400 µm B-doped wafer in under 11 h at room temperature ([[2015-lindroos-cu-lid-aalto-thesis]]). Once in the bulk it precipitates as η′-Cu₃Si and creates a deep recombination band between EC−0.15 and EC−0.58 eV, collapsing minority-carrier lifetime. In a [[../methods/Cu-electroplating-acid-bath]] front-grid stack, the Ni interlayer (or the SHJ ITO/a-Si:H stack) is the only thing standing between the Cu finger and the Si bulk, so any pinhole, undersized barrier, or post-anneal silicide breach is a direct path to catastrophic Voc and pFF loss.

## How it manifests
- pFF and Voc collapse with no compensating change in series resistance — diode-parameter degradation, not finger-conductivity loss ([[2019-karas-damp-heat-degradation-shj-cu]]).
- J02 increases by >2× (often >6×) after extended damp-heat ([[2022-karas-cu-outdiffusion-damp-heat]]).
- SIMS depth profile shows a Cu tail extending micrometres into c-Si under the contact, with concentration scaling with EVA encapsulant rather than POE ([[2022-karas-cu-outdiffusion-damp-heat]]).
- µ-PCD or QSSPC bulk lifetime collapses to the tens-of-µs range in regions previously >1 ms; PL imaging shows dark patches under fingers.
- η′-Cu₃Si facet-like grains visible by STEM-EDS at the Si interface ([[2018-electrochemsci-barrier-properties-electroplated-ni]]).

## How to detect it
- [[../methods/SIMS-depth-profile]] — dynamic SIMS with O₂⁺ primary beam quantifies Cu in c-Si. Karas threshold: any Cu signal >3× the Ag-screenprint reference is diagnostic.
- [[../methods/dark-IV-suns-Voc]] — pFF drop ≥1.5 %abs combined with J02 doubling is a strong indicator.
- [[../methods/minority-carrier-lifetime-photoluminescence]] — bulk lifetime collapse stable at 200 °C anneal (BO-LID would partially recover) is diagnostic of Cu-LID per Lindroos.
- XRD at the Si/contact interface — Cu₃Si peaks ([[2018-electrochemsci-barrier-properties-electroplated-ni]]).
- IV-curve: Voc drop ≥10 mV after 1000 h DH on cells with no other identified failure mode.

## Mitigation (specific actions, not vague advice)
- Use a Ni barrier ≥120 nm (Cheng 2018 STEM-EDS confirmed 60 nm fails at 300 °C, 120 nm holds to 300 °C); the hypothesis's "sub-100 nm" target is below this threshold and must be justified empirically with SIMS, or paired with a NiSi silicide buffer formed by 200 °C anneal.
- Pre-clean with HF immediately before Ni plating to remove native oxide that otherwise blocks silicide formation ([[2017-jeon-electroless-ni-front-metallization]]); +42 mV Voc gain.
- Keep the SHJ TCO ≥75 nm and intact under the contact — TCO is itself a Cu barrier ([[2018-pvtech-metallization-shj-cells-modules]], [[2025-yacouba-shj-silver-free-metallization-progPV]]).
- Cap the Cu finger to prevent upward Cu mobilisation that returns to Si via the encapsulant (see [[Cu-out-diffusion-through-cap-stack]]).
- Use POE encapsulant; EVA-derived acetic acid drives Cu out- and re-diffusion into Si ([[2022-karas-cu-outdiffusion-damp-heat]]).
- Limit post-plate anneal to ≤200 °C / 15 min ([[2019-hatt-noble-shj-solrrl]]) to suppress Cu₃Si nucleation kinetics.
- Field-stop test: 1000 h at 200 °C dry anneal on encapsulated cells; pFF must be unchanged (Bartsch 2010 reference protocol).

## Severity ranking justification
Critical: Cu in c-Si is the headline historical reason solar metallization stayed on silver for forty years. A few ppm of mobile Cu in the bulk is enough to collapse minority-carrier lifetime, and the defects are stable at 200 °C — they do not anneal back ([[2015-lindroos-cu-lid-aalto-thesis]]). If observed at any quantitative level inside the c-Si bulk after DH, the hypothesis is rejected.

## Sources
- `[[2015-lindroos-cu-lid-aalto-thesis]]` — diffusivity, deep-level recombination, bulk-LID character.
- `[[2018-electrochemsci-barrier-properties-electroplated-ni]]` — quantified Ni-thickness threshold (60 vs 120 nm) for Cu₃Si formation under anneal.
- `[[2022-karas-cu-outdiffusion-damp-heat]]` — SIMS evidence of Cu in Si after DH on EVA-encapsulated plated-Cu cells.
- `[[2019-karas-damp-heat-degradation-shj-cu]]` — first DH evidence of pFF/J02 degradation traced to junction-area Cu.
- `[[2014-rehman-nicu-plating-csi-review]]` — review-level discussion of Ni barrier requirements.
- `[[2017-jeon-electroless-ni-front-metallization]]` — silicide quality and HF activation for barrier reliability.
- `[[2010-bartsch-lip-pvsc]]` — Arrhenius extrapolation 0.1 yr (no Ni) → >1000 yr (with Ni).
- `[[2022-arena-sundrive-copper-metallisation-demonstration]]` — TCO-only barrier viable on SHJ at module scale.
- `[[2024-nrel-getting-ahead-of-curve-pv-assessment]]` — Cu ingress flagged as central novel-tech reliability risk.
- `[[pvtech-metallization-challenges-cell-manufacturing]]` — industry framing.
