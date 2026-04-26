---
type: source
id: 2018-electrochemsci-barrier-properties-electroplated-ni
source_type: protocol
title: "Barrier Properties of Electroplating Nickel Layer for Copper Metallization in Silicon Solar Cells"
authors: ["You Ren Cheng", "Wen Jauh Chen", "Keisuke Ohdaira", "Koichi Higashimine"]
year: 2018
doi: "10.20964/2018.12.23"
url: "http://www.electrochemsci.org/papers/vol13/131211516.pdf"
raw_path: raw/protocols/2018-electrochemsci-barrier-properties-electroplated-ni.pdf
tags: [protocol, methodology, electroplated-Ni-Cu, nickel-barrier, Cu3Si, textured-silicon, electroless-Ni-seed, SIMS-STEM, reference-method, barrier-thickness]
---

# Barrier Properties of Electroplating Nickel Layer for Copper Metallization in Silicon Solar Cells

## Summary
Cheng et al. (Yunlin Univ. of Science & Technology, with JAIST in Japan) systematically benchmark the **diffusion-barrier performance of electroplated Ni at 60 nm vs 120 nm thickness** for Cu metallization on textured (100) Si. The protocol uses an electroless-Ni / silicidation / HNO₃-strip / Ni-electroplate / Cu-electroplate stack (the canonical NiP-seed Ni-Cu workflow), then anneals at 300–800 °C in Ar/H₂ for 10 min. **Cu/Ni(60 nm) fails at 300 °C with detectable Cu₃Si; Cu/Ni(120 nm) is stable to 300 °C, with Cu₃Si beginning at 400 °C** (XRD + STEM-EDS). The paper directly quantifies the hypothesis-relevant Ni barrier-thickness threshold: **<100 nm is too thin; ~120 nm is borderline; new barrier materials needed for >400 °C**. This is the most direct protocol reference for the hypothesis's "sub-100 nm electroplated nickel barrier" claim — Cheng's data argues for using ≥100 nm. The paper also documents the full reagent stack (NiSO₄·6H₂O + NaH₂PO₂·H₂O electroless bath at 70 °C, pH 5; Cu electroplating at 25 °C with Pt anode), and provides the STEM-EDS imaging workflow that resolves the Ni/Ni-silicide bilayer and the Cu₃Si facet-like grains at barrier failure.

## Key claims
- Cu/Ni/textured-Si stack process: clean (acetone, H₂SO₄/H₂O₂, HF) → sensitize (SnCl₂/HCl) → activate (PdCl₂/HCl) → electroless Ni 60 s @ 70 °C, pH 5, ~60 nm Ni → anneal 500 °C 10 min Ar/H₂ for NiSi formation → HNO₃ strip of unreacted Ni → electroplated Ni at ~1 nm/s deposition rate (60 or 120 s) → 1.5 µm Cu electroplate (~1500 s) → anneal ladder 300–800 °C, 10 min.
- XRD scan of as-plated electroless Ni annealed at 300–800 °C: NiSi (011) and Ni₂Si (121) peaks appear at 500 °C; NiSi₂ at 800 °C; NiSi/Ni₂Si coexist >500 °C.
- **Cu/Ni(60 nm)/ta-Si**: Cu₃Si peaks already detectable at 300 °C, strong above 500 °C — barrier failure.
- **Cu/Ni(120 nm)/ta-Si**: no Cu₃Si at 300 °C; Cu₃Si begins at 400 °C, strong above 600 °C — barrier holds to 300 °C.
- STEM-EDS at 300 °C, Cu/Ni(120 nm): three distinct layers — top Cu, middle bilayer of Ni + Ni₂Si (~100 nm Ni metal + ~200 nm Ni-silicide), bottom Si; Cu has not penetrated the Ni layer.
- STEM-EDS at 500 °C, Cu/Ni(120 nm): "loose structure" multilayer; Cu element present in Ni/Ni-silicide AND in Si substrate; facet-like Cu₃Si grains grown into textured Si — barrier rupture.
- **Direct quantitative conclusion: "increasing electroplating nickel time from 60 to 120 seconds will significantly increase the barrier property"; "new diffusion barrier materials should be developed to prevent copper diffusion at temperature high than 400°C."**
- Comparison to prior work: ITO barrier (Hsieh) fails at 600 °C; Cu/TiN (Mühlbacher) fails via grain-boundary diffusion to η″-Cu₃Si.
- Companion data on NiCo alloy (Huang et al., cited): Ni₇₁Co₂₉ delays cell degradation to 250 °C vs pure Ni at 200 °C.

## Methods used
- [[../methods/electroless-Ni-deposition]] — canonical recipe documented: 60 nm in 60 s at 70 °C, pH 5, NiSO₄·6H₂O + NaH₂PO₂·H₂O bath, with SnCl₂/HCl + PdCl₂/HCl sensitization-activation pretreatment.
- [[../methods/electroplated-Ni-Cu-stack]] — documents the full Ni-electroplate-on-NiSi-seed → Cu-electroplate workflow with deposition rates (~1 nm/s Ni; 1.5 µm Cu in ~1500 s).
- [[../methods/Cu-electroplating-acid-bath]] — beaker-cell setup, 25 °C bath, Pt counter-electrode, magnetic stirring.
- [[../methods/SIMS-depth-profile]] — STEM-EDS compositional profiling across the Cu/Ni/Ni-silicide/ta-Si stack serves the same role as SIMS for resolving Cu out-diffusion vs Ni-barrier integrity.
- [[../methods/NOBLE-selective-Cu-plating]] — implicitly relevant; this paper is the barrier-design half of the NOBLE-style stack.

## Reagents
- [[../reagents/nickel-sulfamate-bath]] — generic Ni-electroplating bath reference (Cheng uses sulfamate-class chemistry).
- [[../reagents/acid-Cu-sulfate-bath]] — Cu electroplating bath chemistry.
- [[../reagents/sulfuric-acid-H2SO4]] — used in pre-cleaning textured Si (H₂SO₄/H₂O₂).
- [[../reagents/nickel-phosphorus-NiP-electroless]] — electroless Ni from NiSO₄ + NaH₂PO₂; this is the NiP electroless seed reagent.

## Organisms / substrates
- [[../organisms/monocrystalline-Si-wafer-n-type]] — pyramid-textured (100) phosphorus-doped Si wafers (1×1 cm² test coupons).

## Failure modes flagged
- [[../failure-modes/Cu-diffusion-into-c-Si]] — direct experimental observation: Cu penetrates Ni(60 nm) at 300 °C and Ni(120 nm) at 400 °C.
- [[../failure-modes/Cu3Si-formation-at-Si-interface]] — XRD- and STEM-confirmed Cu₃Si formation; facet-like grains at 500 °C in Cu/Ni(120 nm).
- [[../failure-modes/Ni-barrier-pinholes]] — at 60 nm, Ni barrier already fails at 300 °C, consistent with pinhole-mediated Cu transport.
- [[../failure-modes/Cu-out-diffusion-through-cap-stack]] — analogous failure mode for the inverted stack.

## Supports / contradicts
- Supports: [[2014-rehman-nicu-plating-csi-review]] (Rehman's review independently flags Ni barrier thickness as the key Cu-Si reliability lever)
- Supports: [[2017-jeon-electroless-ni-front-metallization]]
- Supports: [[2010-bartsch-lip-pvsc]] (cited at ref [4])
- Contradicts (in part): the hypothesis claim of "sub-100 nm electroplated nickel barrier" — Cheng et al. show 60 nm Ni fails at 300 °C, suggesting that **a sub-100 nm electroplated Ni barrier alone is insufficient unless complemented by additional engineering** (e.g., NiSi-silicidation buffer, NiCo alloy, lower SHJ-process-temperature ceiling of ≤200 °C, or different bath chemistry yielding denser films).

## Notable quotes
- "For the Cu/Ni(60 nm)/ta-Si samples, when the annealing temperature was above 300ºC, a small amount of Cu₃Si forms. When the thickness of nickel film increases to 120 nm and is applied as a diffusion barrier that is between copper and the textured silicon substrate, there is no evidence of reactions observed for the Cu/Ni(120 nm)/ta-Si samples annealed up to 300°C." — Conclusions
- "The results indicate that increasing electroplating nickel time from 60 to 120 seconds will significantly increase the barrier property." — p. 11519
- "Textured silicon with 120 nm electroplating nickel layer showed improved reliability at a 300ºC, suggesting that new diffusion barrier materials should be developed to prevent copper diffusion at temperature high than 400ºC." — Conclusions
- "Although low costs and high conductivity are significant advantages of copper, there is a primary concern due to its high diffusivity and solubility in silicon as well as copper contamination in silicon solar cells, i.e. they will have diminished device performance from the introduction of minority carrier recombination centers." — Introduction
