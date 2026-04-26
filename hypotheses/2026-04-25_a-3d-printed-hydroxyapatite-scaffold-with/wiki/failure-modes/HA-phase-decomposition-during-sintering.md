---
type: failure-mode
slug: HA-phase-decomposition-during-sintering
severity: high
frequency_estimate: recurring — significant HA → β-TCP / α-TCP / CaO conversion above ~1300 °C, especially with non-stoichiometric powders
applies_to_methods: [ceramic-sintering, XRD-phase-analysis, debinding-thermal-treatment, slurry-preparation-for-DLP, binder-jet-3D-printing, DLP-vat-photopolymerization]
applies_to_reagents: [hydroxyapatite, calcium-deficient-hydroxyapatite, beta-tricalcium-phosphate, alpha-tricalcium-phosphate, biphasic-calcium-phosphate]
applies_to_step_kinds: [sintering, debinding, QC, scaffold-prep]
sources: [2012-bose, 2015-baino, 2017-gao, 2017-eliaz, 2026-thammarakcharoen, 2017-bose, 2020-garot, 2022-yang, 2008-palmer, pubchem-tricalcium-phosphate-cid24456]
tags: [sintering, phase-decomposition, HA, TCP, XRD]
created: 2026-04-25
updated: 2026-04-25
---

# HA phase decomposition during sintering

## What it is

Stoichiometric hydroxyapatite (Ca/P = 1.667) is thermodynamically stable up to ~1300 °C in air. Above that, or at lower temperatures with calcium-deficient HA (CDHA, Ca/P < 1.667) or trapped moisture, HA dehydroxylates and decomposes to β-tricalcium phosphate (β-TCP), α-TCP, tetracalcium phosphate (TTCP), and/or CaO. The resulting scaffold is no longer "hydroxyapatite" — it is a multi-phase CaP composite with different solubility, resorption rate, and mechanical properties. This silently invalidates "HA scaffold" claims unless XRD verifies post-sinter phase purity.

## How it manifests

- XRD pattern shows β-TCP peaks (e.g., (0210) at 2θ ≈ 31.0° for Cu-Kα) appearing alongside HA peaks ((211) at 2θ ≈ 31.8°, (300) at 32.9°) post-sinter; intensity ratio gives biphasic-CaP fraction [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]], [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]].
- Faster in-vitro dissolution than expected (β-TCP and α-TCP dissolve 3–10× faster than stoichiometric HA at pH 7.4) — visible as Ca²⁺ release in ICP-MS supernatant > 5× HA-only baseline [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]].
- Surface SEM shows secondary phase grain morphology (β-TCP tends to form smaller, rhombohedral grains compared to HA's hexagonal-prismatic) [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]].
- Free CaO at strut surfaces hydrates to Ca(OH)₂ in culture medium → local pH spike to >9 → cytotoxicity even though "HA scaffold" was reported.
- Reagent / source confusion: PubChem CID 24456 ("calcium phosphate") is tricalcium phosphate, not HA — using it as an HA reference is itself a phase mis-identification trap [[../sources/pubchem-tricalcium-phosphate-cid24456]].

## How to detect it

- **XRD on every sintered batch**: Cu-Kα, 2θ from 20° to 60°, 0.02° step, 2 s dwell. Quantify β-TCP/(HA+β-TCP) by Rietveld refinement or ratio of (0210) β-TCP to (211) HA peak. Reject if β-TCP fraction > 5% (unless biphasic CaP is intentional).
- ICP-MS Ca/P ratio of acid-digested scaffold should be 1.667 ± 0.05 for stoichiometric HA. Deviation indicates CDHA precursor or decomposition [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]].
- FTIR for OH⁻ stretching at 3570 cm⁻¹ and 632 cm⁻¹ — loss of intensity indicates dehydroxylation [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]].
- Soak scaffold in PBS, measure pH after 24 h: persistent pH > 8 indicates free CaO from over-decomposition.
- Cell viability with no-cell scaffold-conditioned medium (24 h pre-incubation): if conditioned medium alone reduces viability by >20%, decomposition products are toxic.

## Mitigation

- **Cap sintering temperature at 1200–1250 °C** for stoichiometric HA powder. Bose 2017 cites 1250 °C for binder-jet HA at 450 μm pore size as a working point [[../sources/2017-bose-additive-manufacturing-of-biomaterials]].
- Verify Ca/P ratio of starting HA powder by ICP-MS or EDX before formulating slurry — non-stoichiometric powder + high T = guaranteed decomposition [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]].
- Sinter under controlled humidity / steam atmosphere to suppress dehydroxylation; saturated water-vapor partial pressure during ramp-up keeps HA OH-stoichiometric [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]].
- Use **microwave sintering** (Bose 2017) — shorter dwell, less decomposition; or low-temperature calcium-sulfate phase-transformation route (Thammarakcharoen 2026) which avoids high-T entirely [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]].
- Two-step sintering schedule with intermediate hold at 800–900 °C for crystallization, before final densification at 1200 °C, gives more reproducible phase output than single ramp [[../sources/2017-bose-additive-manufacturing-of-biomaterials]].
- If biphasic HA/β-TCP is acceptable, characterize and report the ratio (HA:β-TCP) explicitly, since it controls resorption rate.
- Yang 2022 and Palmer 2008 caution that nano-HA precursors and biomimetic peptide-templated HA are particularly prone to phase shifts at sintering — verify by XRD [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]], [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]].

## Original sources / evidence

- [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]] — phase-stability framing, Ca/P ratio, OH⁻ FTIR, dissolution-rate ranking.
- [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] — XRD phase purity verification on binder-jet HA; low-T transformation as mitigation.
- [[../sources/2017-bose-additive-manufacturing-of-biomaterials]] — sintering schedules, microwave, decomposition above 1300 °C.
- [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]] — phase-stability and atmosphere control.
- [[../sources/2017-gao-bone-biomaterials-and-interactions-with]] — Sr substitution and phase considerations.
- [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] — sintering schedule classification per AM route.
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — DLP HA sintering issues.
- [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]] — biomimetic-HA grain morphology.
- [[../sources/2012-bose-recent-advances-in-bone-tissue-engineeri]] — earlier review of TCP/HA phase-process issues.
- [[../sources/pubchem-tricalcium-phosphate-cid24456]] — illustrates how reagent confusion (TCP labelled "calcium phosphate") propagates phase ambiguity into the supply chain.

## Affects

- Methods: [[../methods/ceramic-sintering]], [[../methods/XRD-phase-analysis]], [[../methods/debinding-thermal-treatment]], [[../methods/slurry-preparation-for-DLP]], [[../methods/binder-jet-3D-printing]], [[../methods/DLP-vat-photopolymerization]]
- Reagents: [[../reagents/hydroxyapatite]], [[../reagents/calcium-deficient-hydroxyapatite]], [[../reagents/beta-tricalcium-phosphate]], [[../reagents/alpha-tricalcium-phosphate]], [[../reagents/biphasic-calcium-phosphate]]
