---
type: method
slug: XRD-phase-analysis
aliases: [XRD, X-ray-diffraction, powder-XRD, phase-identification]
related_methods: [EDX-spectroscopy, ICP-MS, SEM-imaging, ceramic-sintering, BET-surface-area-analysis]
key_reagents: [hydroxyapatite, beta-tricalcium-phosphate, alpha-tricalcium-phosphate, biphasic-calcium-phosphate, calcium-deficient-hydroxyapatite]
known_failure_modes: [HA-phase-decomposition-during-sintering, batch-to-batch-HA-stoichiometry-variation, HA-stoichiometry-affects-resorption]
sources: [2017-eliaz-calcium-phosphate-bioceramics-a-review-o, 2026-thammarakcharoen-comprehensive-toxicological-evaluation-o, 2025-de-carvalho-three-dimensional-printing-of-calcium-ph, 2015-baino-bioceramics-and-scaffolds-a-winning-comb, 2017-gao-bone-biomaterials-and-interactions-with, 2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]
tags: [characterization, crystallography, phase-purity, scaffold-QC]
created: 2026-04-25
updated: 2026-04-25
---

# XRD phase analysis

## What it measures / produces

X-ray diffraction (XRD) measures crystalline phase identity and quantitative phase composition by recording the angular distribution of X-ray scattering from a powdered or bulk sample and comparing peak positions/intensities against reference patterns (ICDD, COD). For HA scaffolds, XRD is the **primary phase-purity QC step**: confirms the green/sintered scaffold is phase-pure HA (Ca₁₀(PO₄)₆(OH)₂, Ca/P = 1.67) versus β-TCP (Ca₃(PO₄)₂, Ca/P = 1.5), α-TCP (high-temperature polymorph), CaO (decomposition product), or biphasic mixtures. Output: phase identification, quantitative phase fractions (Rietveld refinement), and crystallite size/lattice strain (Williamson-Hall analysis).

## When to use it

Use XRD (a) on raw HA powder before printing to verify Ca/P stoichiometry and phase purity, (b) on the green scaffold (post-print, pre-sinter) if the route involves chemical setting, (c) on the **sintered scaffold** to confirm sintering did not decompose HA into β-TCP / α-TCP / CaO [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]] [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]], (d) when comparing the gradient and uniform-pore scaffolds — both must have **identical phase composition** to isolate pore-architecture effects on proliferation. Also used to verify low-temperature transformation routes produce phase-pure HA [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]].

## Key parameters

- **Wavelength**: Cu Kα (1.5418 Å) is the standard.
- **2θ range**: 10–80° covers all major HA / β-TCP / α-TCP / CaO peaks.
- **Step size & time**: 0.02° step, 1–2 s per step for routine; finer for Rietveld.
- **Reference patterns** (ICDD): HA = PDF 09-0432; β-TCP = PDF 09-0169; α-TCP = PDF 29-0359; CaO = PDF 37-1497.
- **Detection limit**: ~1–5 wt% for secondary phase by routine XRD; lower with Rietveld + long counting.
- **Crystallite size** (Scherrer equation): biogenic HA crystals are ~50 nm × 20 nm × 5 nm vs synthetic ceramic HA crystallites typically larger after sintering [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]].
- **Amorphous content**: identifiable as broad halo at low 2θ; mesoporous bioactive glass is largely amorphous [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]].

## Common variants

- **Powder XRD** (most routine): bulk powder or ground scaffold.
- **Grazing-incidence XRD** (GIXRD) for surface-sensitive analysis (coatings).
- **In-situ high-temperature XRD** for tracking phase transitions during sintering.
- **Synchrotron XRD** for higher resolution / smaller samples.
- **Rietveld refinement** for quantitative multi-phase composition.

## Step-level notes

- Sample prep: grind to fine powder (<10 μm) for routine; bulk fragments OK for phase ID but quantitative analysis needs powder.
- Background subtraction and Kα2 stripping are standard preprocessing.
- For HA: critical peaks are (002) at 2θ ≈ 25.9°, triplet (211)/(112)/(300) at 31.7–32.9°, (310) at 39.8°.
- For β-TCP: (0210) at 2θ ≈ 31.0° distinguishes from HA.
- HA + α/β-TCP biphasic compositions (BCP) are common in commercial scaffolds; quantify both phases.
- Sintering above ~1300 °C (or in dry atmosphere) can convert HA → β-TCP → α-TCP → CaO; XRD captures this [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]].
- For the present hypothesis: report % HA, % β-TCP, % α-TCP, % CaO, and amorphous fraction for both gradient and uniform scaffolds; require match within reasonable tolerance.

## Things to watch for

- [[../failure-modes/HA-phase-decomposition-during-sintering]] — the headline failure mode XRD detects: appearance of β-TCP / α-TCP / CaO peaks indicates over-sintering or atmosphere control failure.
- [[../failure-modes/batch-to-batch-HA-stoichiometry-variation]] — HA powder lot variability shows up in subtle peak shifts and intensity ratios; XRD per lot is good practice.
- [[../failure-modes/HA-stoichiometry-affects-resorption]] — the in-vivo consequence of phase-purity drift; XRD provides the lab-side proxy.

## Sources

- [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]] — XRD as part of CaP characterisation; phase-identification and Ca/P verification rationale.
- [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] — XRD verification of phase-pure HA via low-T transformation BJT route.
- [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] — XRD of CPC + MBG composite (amorphous MBG halo + crystalline HA peaks).
- [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]] — XRD in ceramic scaffold characterisation.
- [[../sources/2017-gao-bone-biomaterials-and-interactions-with]] — XRD in bone-biomaterial review.
- [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]] — phase chemistry: HA → β-TCP / α-TCP / CaO decomposition pathway and its sensitivity to Ca/P, atmosphere, impurities.
