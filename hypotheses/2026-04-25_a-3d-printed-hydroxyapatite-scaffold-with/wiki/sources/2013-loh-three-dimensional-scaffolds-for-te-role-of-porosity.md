---
type: source
id: 2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity
source_type: paper
title: "Three-Dimensional Scaffolds for Tissue Engineering Applications: Role of Porosity and Pore Size"
authors: ["Loh, Qiu Li", "Choong, Cleo"]
year: 2013
doi: 10.1089/ten.teb.2012.0437
url: https://doi.org/10.1089/ten.teb.2012.0437
raw_path: raw/papers/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity.txt
tags: [porosity, pore-size, scaffold, review, gradient-porosity, tissue-engineering, fabrication, hydroxyapatite, freeze-casting]
created: 2026-04-25
updated: 2026-04-25
---

# Loh & Choong 2013 — Role of porosity and pore size in 3D scaffolds

## Summary

A foundational review (Tissue Eng. Part B, 2013) of how pore size and porosity govern cellular response and mechanical performance in 3D scaffolds, with a dedicated section on **graded porosity** that directly underpins our gradient-pore HA hypothesis. Compiles fabrication routes (salt leaching, gas forming, phase separation, freeze-drying, 3D printing, SLS, stereolithography, FDM, electrospinning), porosity measurement methods (mercury intrusion, μCT, gravimetric, permeability, gas adsorption), and a Table 1 summarising pore-size ranges per cellular activity. Cites the canonical Karageorgiou & Kaplan (2005) reference for the **"100 μm minimum, ~300 μm optimal" pore-size claim** that motivates our 100-to-500 μm gradient. Specifically discusses HA/TCP scaffolds with gradient porosity fabricated by camphene-based freeze-casting.

## Key claims

- **Canonical pore-size claim** (cited transitively): Karageorgiou & Kaplan, *Biomaterials* 26: 5474, 2005, ref [11] in this review — minimum pore size of ~100 μm for bone tissue engineering, with ~300 μm cited as optimal for osteogenesis. The review notes "vascularization of constructs necessitates pores greater than 300 μm" (refs 145, 155 in this paper).
- **Gradient porosity is biologically motivated**: "Native tissues, including tissues, typically have a gradient porous structure (GPS), in which porosity is not uniform. Rather, it is distributed in such a manner so as to maximize the overall performance of the structure."
- **Bone-specific**: "Gradient porosity is observed in bone tissues and this optimizes the material's response to external loading. Gradient porosity is also observed in tissues such as the skin, where the pore size increases with distance away from the skin surface."
- **HA / β-TCP gradient examples**: "Hydroxyapatite/tricalcium phosphate (HA/TCP) ceramic scaffolds with gradient porosity were also fabricated using a room temperature camphene-based freeze-casting method as a potential bone graft substitute. Calcium phosphate-based ceramics, for example, HA have excellent biocompatibility, bioactivity, and osteoconductivity."
- **Bioglass-graded scaffolds** were produced by foam replication; freeze casting is noted as superior for graded scaffolds because foam replication generates pyrolysis defects.
- **Cell-behaviour caveats**: smaller pores (~40 μm in PolyHIPE) drove higher osteoblast populations but >100 μm pores were needed for cell migration; CG scaffolds with mean pore size > 300 μm performed better for osteogenesis.
- **Chondrocyte-relevant range**: 250–500 μm pores supported preferential proliferation and ECM production (cited example).
- **Mass-transport / mechanics tension**: high porosity / large pores improve diffusion but compromise mechanical properties — the explicit motivation for graded scaffolds.
- **3D printing**: enables better control of pore size, morphology, porosity than salt leaching / gas forming, but is limited by available powder-form biomaterials and post-processing sintering for ceramics.

## Methods used

- [[../methods/3D-printing-stereolithography]]
- [[../methods/DLP-vat-photopolymerization]]
- [[../methods/selective-laser-sintering]]
- [[../methods/fused-deposition-modeling]]
- [[../methods/extrusion-based-3D-printing]]
- [[../methods/binder-jet-3D-printing]]
- [[../methods/micro-CT-imaging]]
- [[../methods/mercury-intrusion-porosimetry]]
- [[../methods/BET-surface-area-analysis]]
- [[../methods/SEM-imaging]]
- [[../methods/gradient-pore-design]]
- [[../methods/computational-fluid-dynamics-permeability]]

## Reagents

- [[../reagents/hydroxyapatite]]
- [[../reagents/beta-tricalcium-phosphate]]
- [[../reagents/biphasic-calcium-phosphate]]
- [[../reagents/bioglass-45S5]]
- [[../reagents/PLGA]]
- [[../reagents/polycaprolactone]]
- [[../reagents/collagen-glycosaminoglycan]]
- [[../reagents/hyaluronic-acid]]

## Organisms / cell lines

- Multiple discussed; not standardised. Cited examples include hMSCs (in vivo rat implantation), murine implantation models, primary chondrocytes.
- [[../organisms/hBMSC]]

## Failure modes flagged

- [[../failure-modes/short-term-proliferation-vs-long-term-bone-formation]] — explicit: smaller pores can give higher early cell numbers but limit migration and downstream tissue formation.
- [[../failure-modes/brittle-ceramic-mechanical-failure]] — porosity / mechanical-property trade-off named throughout.
- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — pore-size-dependent fate (e.g., 100–150 μm low-porosity vs high-porosity matrices: HP supports higher differentiation/aggregation; LP supports higher proliferation).
- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — review notes shrinkage during stereolithography post-curing as a resolution-limiting factor.
- [[../failure-modes/paywalled-or-non-OA-canonical-source-not-captured]] — Karageorgiou & Kaplan 2005 is cited but not directly captured in raw/.

## Supports / contradicts

- **Strongly supports the gradient-pore HA hypothesis** ([[../../hypothesis|hypothesis.md]]) — explicitly endorses GPS as biologically appropriate and gives prior art for HA/TCP gradient-pore scaffolds via freeze-casting.
- Supports [[2017-eliaz-calcium-phosphate-bioceramics-a-review-o]] (FGM concept).
- Supports [[2018-zhang-effect-of-microporosity-on-scaffolds-for]] (porosity ↔ proliferation trade-off).
- Supports [[2020-wang-3d-printing-of-bone-tissue-engineering-s]] (3D-printing / fabrication taxonomy).

## Notable quotes

- "Vascularization of constructs necessitates pores greater than 300 μm." (Pore size for cell behaviour; refs 145, 155 — Karageorgiou & Kaplan and a related secondary)
- "Native tissues, including tissues, typically have a gradient porous structure (GPS), in which porosity is not uniform. Rather, it is distributed in such a manner so as to maximize the overall performance of the structure." (Gradient porosity section)
- "Hydroxyapatite/tricalcium phosphate (HA/TCP) ceramic scaffolds with gradient porosity were also fabricated using a room temperature camphene-based freeze-casting method as a potential bone graft substitute." (Gradient HA/TCP example)
- "[Loh & Choong] adopt the Karageorgiou & Kaplan, *Porosity of 3D biomaterial scaffolds and osteogenesis*, *Biomaterials* 26, 5474, 2005" (References list, ref 11) — flag for the canonical "100 μm minimum, ~300 μm optimal" claim that is repeatedly transmitted in the literature without direct re-validation.
