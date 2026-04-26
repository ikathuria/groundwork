---
type: failure-mode
slug: Ni-barrier-pinholes
severity: high
frequency_estimate: "Hsieh 2017: electroless Ni-P below 45 nm is discontinuous; only above 45 nm is the film fully continuous. Cheng 2018: Cu/Ni(60 nm)/textured-Si shows Cu₃Si already at 300 °C — consistent with pinhole-mediated Cu transport. Rehman 2014 reviews ghost-plating root causes (SiNx pinholes, mechanical-stress cracks)."
applies_to_methods: [electroless-Ni-deposition, electroplated-Ni-Cu-stack, NOBLE-selective-Cu-plating, Ni-sputter-deposition, SIMS-depth-profile, four-point-probe-sheet-resistance]
applies_to_reagents: [nickel-sulfamate-bath, nickel-phosphorus-NiP-electroless, ITO-transparent-conductive-oxide]
applies_to_step_kinds: [plate, etch, anneal, measure]
sources: [2010-bartsch-lip-pvsc, 2014-rehman-nicu-plating-csi-review, 2017-jeon-electroless-ni-front-metallization, 2018-electrochemsci-barrier-properties-electroplated-ni, fisher-AA8902018-nickel-sulfamate-hydrate, pvtech-metallization-challenges-cell-manufacturing]
tags: [Ni-barrier, pinholes, ghost-plating, continuity, sub-100nm, hypothesis-relevant]
---

# Ni barrier pinholes

## What it is
The Ni barrier between Cu and the SHJ cell stack must be a continuous, dense film. Pinholes — small (sub-100 nm) gaps in coverage — are direct percolation pathways for Cu transport during anneal, soldering, or DH. Pinholes arise from (i) sub-critical thickness (electroless Ni-P below 45 nm is discontinuous per [[2017-jeon-electroless-ni-front-metallization]]), (ii) substrate-surface defects (native-oxide patches, particles, mechanical scratches), (iii) bath additive imbalance (organic levellers/brighteners affecting nucleation density), and (iv) hydrogen co-evolution at high current density. Bartsch 2010 names Ni "thickness, coverage, homogeneity" as the three parameters whose insufficiency lets Cu through. The hypothesis specifies "sub-100 nm electroplated nickel barrier" — this is in the regime where pinhole density is the gating parameter, and Cheng 2018's data shows 60 nm Ni already fails at 300 °C anneal.

## How it manifests
- Ghost plating ("parasitic plating"): Cu nuclei form at unintended locations, indicating bath access through pinholes ([[2014-rehman-nicu-plating-csi-review]]).
- Cu₃Si peaks in XRD at temperatures below the bulk-Ni-barrier threshold (Cheng 2018 detected Cu₃Si in 60 nm Ni at 300 °C vs 400 °C for 120 nm).
- SIMS of c-Si shows localized Cu spikes (under pinholes) rather than uniform tail.
- pFF degradation correlates with pinhole density measured by Cu-displacement decoration test (electrochemical: bare Si exposed to Cu²⁺ solution forms Cu deposits at every pinhole).
- Sheet-resistance non-uniformity across the cell when measured by 4-point-probe.

## How to detect it
- Cu-displacement pinhole decoration: dip Ni-coated coupon in dilute CuSO₄ for 60 s, rinse, image by optical/SEM — Cu spots = pinholes. Quantify density per cm².
- Cross-section TEM/STEM-EDS at suspected pinhole sites ([[2018-electrochemsci-barrier-properties-electroplated-ni]] Fig. 3).
- [[../methods/four-point-probe-sheet-resistance]] mapping; pinhole-rich regions show uneven sheet resistance.
- [[../methods/SIMS-depth-profile]] in c-Si — localized Cu spikes vs uniform tail.
- Anneal-stress test: 200 °C / 4 h, then SIMS / pFF; pinhole-driven failure is more localized than uniform diffusion.

## Mitigation (specific actions, not vague advice)
- Increase Ni thickness to ≥120 nm where the SHJ thermal budget permits (Cheng 2018 quantitative threshold) — directly pushes the hypothesis target.
- If holding at sub-100 nm, form a NiSi silicide buffer by 200 °C anneal — silicide grains plug residual pinholes ([[2017-jeon-electroless-ni-front-metallization]]).
- Activate Si surface with HF immediately before plating to remove native-oxide patches that nucleate pinholes ([[2017-jeon-electroless-ni-front-metallization]]: HF activation gives +42 mV Voc).
- Piranha clean (H₂O₂ + H₂SO₄) before Ni plating to remove organic contamination that nucleates ghost plating ([[2014-rehman-nicu-plating-csi-review]]).
- Use sulfamate Ni bath with adequate boric-acid buffer (30–40 g/L) and pH 3.8–4.2 to keep nucleation density high and stress low ([[fisher-AA8902018-nickel-sulfamate-hydrate]]).
- Use pulse-reverse plating (Hatt 2019: 15 ms forward / 1 ms reverse) which dissolves parasitic seeds and densifies the deposit ([[2019-hatt-noble-shj-solrrl]]).
- For sub-100 nm targets: characterize *every* batch by Cu-displacement decoration and reject Ni layers with pinhole density >1 cm⁻².

## Severity ranking justification
High: pinhole-driven barrier failure converts directly into Cu-into-Si and Cu₃Si formation, both of which are critical. Distinct from those critical modes because it's a *measurable upstream cause* with QC-actionable mitigations. The hypothesis sets a thickness target (sub-100 nm) that is empirically right at the pinhole-critical threshold per Cheng 2018 — making this the failure mode most likely to trigger Pass-3 protocol modifications.

## Sources
- `[[2018-electrochemsci-barrier-properties-electroplated-ni]]` — quantitative thickness threshold (60 nm fails @ 300 °C, 120 nm holds); STEM-EDS validation.
- `[[2017-jeon-electroless-ni-front-metallization]]` — sub-45 nm electroless Ni-P discontinuous; HF activation reduces pinhole nucleation.
- `[[2014-rehman-nicu-plating-csi-review]]` — ghost-plating root causes; piranha clean mitigation.
- `[[2010-bartsch-lip-pvsc]]` — thickness/coverage/homogeneity rationale; Arrhenius-extrapolated lifetime.
- `[[fisher-AA8902018-nickel-sulfamate-hydrate]]` — bath chemistry context.
- `[[pvtech-metallization-challenges-cell-manufacturing]]` — industry framing of plating-coverage QC.
