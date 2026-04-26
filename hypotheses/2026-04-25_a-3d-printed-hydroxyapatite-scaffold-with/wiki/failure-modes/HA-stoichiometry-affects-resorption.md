---
type: failure-mode
slug: HA-stoichiometry-affects-resorption
severity: high
frequency_estimate: recurring — Ca/P deviations of >0.05 from 1.667 cause measurable shifts in solubility and cellular response
applies_to_methods: [XRD-phase-analysis, EDX-spectroscopy, ICP-MS, ceramic-sintering, alizarin-red-staining]
applies_to_reagents: [hydroxyapatite, calcium-deficient-hydroxyapatite, beta-tricalcium-phosphate, alpha-tricalcium-phosphate, biphasic-calcium-phosphate, strontium, bismuth]
applies_to_step_kinds: [scaffold-prep, characterization, biological-assay, claim]
sources: [2017-gao, 2017-eliaz, 2024-wang, 2018-zhang, 2021-montoya, 2025-tang, 2008-palmer, pubchem-tricalcium-phosphate-cid24456, crossref-retraction-10-1021-acsami-8b04360]
tags: [Ca/P-ratio, stoichiometry, solubility, resorption, ion-substitution]
created: 2026-04-25
updated: 2026-04-25
---

# HA stoichiometry affects resorption

## What it is

Hydroxyapatite stoichiometry — most importantly the Ca/P molar ratio (ideal 1.667), but also OH⁻ content, carbonate substitution, and dopant content (Sr, Mg, F, Si, Bi) — directly controls solubility, dissolution kinetics, ion-release profile, and cellular response. A scaffold labelled "HA" with Ca/P = 1.55 (calcium-deficient) dissolves 5–20× faster than stoichiometric HA at pH 7.4, releasing more Ca²⁺ and shifting local pH. The "same scaffold geometry" between groups in a comparison can have entirely different bioactivity simply because the powder lots differ.

## How it manifests

- Calcium-deficient HA (CDHA, Ca/P 1.5–1.65) decomposes to β-TCP at 800 °C, while stoichiometric HA is stable to >1300 °C [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]] (cross-link).
- Sr-substituted HA: Sr replaces Ca in the lattice; substitution >5 mol% increases dissolution rate and alters cell response [[../sources/2017-gao-bone-biomaterials-and-interactions-with]], [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]], [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]].
- Bi-doped single-crystalline HA fundamentally alters HA stoichiometry; the ACS retraction (10.1021/acsami.5b11723) implicitly involved Bi-doping outrunning characterisation [[../sources/crossref-retraction-10-1021-acsami-8b04360]].
- Ca²⁺ release in conditioned medium: CDHA scaffolds show 100–500 μM Ca²⁺ at 24 h vs 20–50 μM for stoichiometric HA [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]].
- Wang 2024 polydopamine-functionalized CDHA scaffolds explicitly use the higher solubility of CDHA for ion-mediated cell signalling [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]].
- Reagent confusion: PubChem CID 24456 ("calcium phosphate") is tricalcium phosphate, *not* HA — using it as a reference for HA stoichiometry is itself a stoichiometry mismatch [[../sources/pubchem-tricalcium-phosphate-cid24456]].
- Zhang 2018 and Montoya 2021 connect microporosity / surface chemistry to resorption rate [[../sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]], [[../sources/2021-montoya-on-the-road-to-smart-biomaterials-for-bo]].

## How to detect it

- **Per-batch ICP-MS** of acid-digested scaffold for Ca, P, Mg, Sr, Na, F, Si; report Ca/P molar ratio. Reject batch if Ca/P deviates >0.03 from target stoichiometry [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]].
- **Per-batch XRD** with Rietveld refinement for phase quantification: HA (PDF 09-0432), β-TCP (PDF 09-0169), α-TCP (PDF 09-0348) — quantify each phase. Reject if any unwanted phase >5% [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] (cross-link).
- **EDX point-and-area scans** at multiple scaffold locations confirm spatial uniformity of Ca/P [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]].
- **Static dissolution test**: incubate 100 mg scaffold in 10 mL Tris-buffered SBF (pH 7.4, 37 °C), sample at 24 h, 7 d; measure Ca²⁺ by ICP-MS. Stoichiometric HA: 20–50 μM; CDHA: 100–500 μM; β-TCP: > 500 μM.
- TEM lattice imaging: HA c-axis 6.88 Å, β-TCP a-axis 10.43 Å; pure-phase identification [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]].

## Mitigation

- **Source HA from a single qualified lot** for the entire experiment; verify Ca/P, XRD, BET surface area on receipt and at use [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]].
- For dopant studies (Sr, Mg, Si): characterize doping uniformity by EDX at minimum 5 locations; consistency in dopant level is the experimental variable, not Ca/P drift [[../sources/2017-gao-bone-biomaterials-and-interactions-with]].
- Avoid eggshell-derived or mineral-derived "natural" HA without rigorous Ca/P / impurity verification; biogenic-HA papers are repeat retraction targets [[../sources/crossref-retraction-10-1016-j-heliyon-2024-e36493]] (cross-link).
- Report Ca/P, phase fraction (HA/β-TCP), Ca²⁺ release at 24 h, and pH change as part of every scaffold's compositional QC table.
- For comparisons between scaffold groups: match Ca/P stoichiometry within ± 0.02; differences larger than this turn the proliferation comparison into a stoichiometry comparison [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]].
- Consider the alternative: report explicitly that scaffolds are biphasic CaP (HA / β-TCP) and characterize the ratio — matches Eliaz & Metoki's recommendation [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]].

## Original sources / evidence

- [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]] — most thorough review of CaP family stoichiometry-vs-properties.
- [[../sources/2017-gao-bone-biomaterials-and-interactions-with]] — dopant effects on HA bioactivity and resorption.
- [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] — explicit CDHA use; functional implications.
- [[../sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]] — microporosity / surface chemistry driving resorption.
- [[../sources/2021-montoya-on-the-road-to-smart-biomaterials-for-bo]] — modern translational view on resorption matching.
- [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]] — β-TCP vs α-TCP resorption comparison.
- [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]] — biomimetic-HA grain morphology / Ca/P verification by TEM/EDX.
- [[../sources/pubchem-tricalcium-phosphate-cid24456]] — reagent confusion (TCP vs HA).
- [[../sources/crossref-retraction-10-1021-acsami-8b04360]] — Bi-doped HA scaffold retraction with stoichiometry over-claim risk.

## Affects

- Methods: [[../methods/XRD-phase-analysis]], [[../methods/EDX-spectroscopy]], [[../methods/ICP-MS]], [[../methods/ceramic-sintering]], [[../methods/alizarin-red-staining]]
- Reagents: [[../reagents/hydroxyapatite]], [[../reagents/calcium-deficient-hydroxyapatite]], [[../reagents/beta-tricalcium-phosphate]], [[../reagents/alpha-tricalcium-phosphate]], [[../reagents/biphasic-calcium-phosphate]], [[../reagents/strontium]], [[../reagents/bismuth]]
