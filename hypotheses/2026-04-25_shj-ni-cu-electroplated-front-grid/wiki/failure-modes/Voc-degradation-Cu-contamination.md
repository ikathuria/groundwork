---
type: failure-mode
slug: Voc-degradation-Cu-contamination
severity: critical
frequency_estimate: "Karas 2022 EVA-encapsulated Ni-Cu-Sn cells: pFF dropped 82.1→77.0 % after 2000 h DH (Δ=5.1 %abs); Cu-Ag cells: 79.4→77.9 % at 1000 h. Yacouba 2025 found no Voc/pFF change attributable to Cu on TCO-protected SHJ over standard test conditions."
applies_to_methods: [dark-IV-suns-Voc, IV-curve-measurement, minority-carrier-lifetime-photoluminescence, SIMS-depth-profile, damp-heat-aging-1000h]
applies_to_reagents: [acid-Cu-sulfate-bath, ITO-transparent-conductive-oxide, a-Si-H-passivation, EVA-encapsulant, POE-polyolefin-encapsulant]
applies_to_step_kinds: [age, measure]
sources: [2010-bartsch-lip-pvsc, 2014-nrel-pv-module-qualification-plus, 2014-rehman-nicu-plating-csi-review, 2015-lindroos-cu-lid-aalto-thesis, 2017-jeon-electroless-ni-front-metallization, 2019-karas-damp-heat-degradation-shj-cu, 2022-karas-cu-outdiffusion-damp-heat, 2025-yacouba-shj-silver-free-metallization-progPV]
tags: [Voc, pFF, junction-degradation, J02, recombination, hypothesis-killer]
---

# Voc / pFF degradation from Cu contamination

## What it is
Cu interstitials and Cu₃Si precipitates act as deep-level Shockley-Read-Hall recombination centres in c-Si, lowering minority-carrier lifetime in the junction depletion region and the quasi-neutral bulk. The electrical fingerprint is rising J02 (non-ideal recombination current) with falling pFF (Suns-Voc-derived pseudo-fill-factor) — i.e. *junction-area* degradation, not finger-conductivity loss ([[2019-karas-damp-heat-degradation-shj-cu]]). Voc declines because the saturation current rises; in extreme cases Jsc also drops as bulk lifetime collapses below the wafer thickness. This is the metric most sensitive to Cu inventory in the active part of the cell, and the one Bartsch 2010 used as the proxy for plated-Ni/Cu reliability via Suns-Voc tracking over 1700 h at 200 °C.

## How it manifests
- pFF decrease ≥1.5 %abs after 1000 h DH while series-resistance-related FF stays flat — diagnostic of junction (not contact) degradation ([[2019-karas-damp-heat-degradation-shj-cu]]).
- J02 increases by ≥2× (often 6×) per Sinton Suns-Voc fit ([[2022-karas-cu-outdiffusion-damp-heat]]).
- Voc drops 5–20 mV depending on Cu inventory; on EVA-encapsulated plated cells, Karas measured 4.7 %abs pFF loss after 3500 h DH.
- EL imaging shows uniform darkening rather than localized dark-spot pattern (vs adhesion or finger-break failures).
- µ-PCD bulk-lifetime drop concentrated under fingers and busbars on SIMS-correlated EL maps.

## How to detect it
- [[../methods/dark-IV-suns-Voc]] — pFF and J02 from Sinton Suns-Voc; threshold pFF drop ≥1 %abs over baseline indicates Cu-junction risk; >2 %abs flags rejection.
- [[../methods/IV-curve-measurement]] — STC IV; Voc loss without R_s gain.
- [[../methods/SIMS-depth-profile]] — Cu signal in c-Si correlates with pFF loss (Karas 2022 Fig. 4).
- [[../methods/minority-carrier-lifetime-photoluminescence]] — PL imaging localizes lifetime drop to active junction.
- Combine with [[../methods/damp-heat-aging-1000h]] at 1000+ h to provoke the failure.

## Mitigation (specific actions, not vague advice)
- Maintain SHJ TCO ≥75 nm under contacts as Cu barrier — Yacouba 2025 found no Voc loss with Cu paste directly on ITO ([[2025-yacouba-shj-silver-free-metallization-progPV]]).
- Add a thin Ni layer (≥120 nm per Cheng 2018, or sub-100 nm with NiSi silicide buffer) between TCO and Cu plating.
- Use POE encapsulation, not EVA — Karas 2022 measured 3× lower Cu in Si under POE vs EVA after 3500 h DH.
- Specify HF activation immediately before Ni plating to remove native oxide, gaining +42 mV Voc ([[2017-jeon-electroless-ni-front-metallization]]).
- Track pFF with Suns-Voc *every 250 h* during DH (not just at 1000 h); J02 rise is the early warning signal that allows aborting before catastrophic loss.
- Specification target: ΔpFF ≤1 %abs and ΔVoc ≤5 mV after 1000 h at 85 °C / 85 % RH (matches IEC 61215 Pmax budget per [[2014-rehman-nicu-plating-csi-review]] for 5 % total module-level).

## Severity ranking justification
Critical: this is the integrated electrical fingerprint of Cu reaching the junction. The hypothesis is specifically about "no measurable efficiency loss after 1000 h DH" — Voc/pFF degradation from Cu contamination is the most direct quantitative way to falsify it. Karas 2019/2022 demonstrated this failure mode is real on plated-Cu c-Si modules.

## Sources
- `[[2019-karas-damp-heat-degradation-shj-cu]]` — first demonstration of pFF/J02 degradation pattern on Cu-plated cells under DH.
- `[[2022-karas-cu-outdiffusion-damp-heat]]` — quantified Cu/SIMS link to pFF loss (5.1 %abs after 2000 h DH on Ni-Cu-Sn EVA cells).
- `[[2015-lindroos-cu-lid-aalto-thesis]]` — Cu-as-recombination-centre physics; deep level depths.
- `[[2010-bartsch-lip-pvsc]]` — pFF as primary contamination indicator; 1700 h at 200 °C protocol.
- `[[2014-rehman-nicu-plating-csi-review]]` — review of pFF tracking under accelerated aging; 3000 h DH on HJT (3 % power loss).
- `[[2017-jeon-electroless-ni-front-metallization]]` — Voc tracking method, +42 mV with HF-activation.
- `[[2025-yacouba-shj-silver-free-metallization-progPV]]` — counter-evidence that TCO blocks Cu effectively on SHJ.
- `[[2014-nrel-pv-module-qualification-plus]]` — qualification framework.
