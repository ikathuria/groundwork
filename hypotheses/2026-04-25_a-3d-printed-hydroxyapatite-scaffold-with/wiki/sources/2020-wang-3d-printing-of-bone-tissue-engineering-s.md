---
type: source
id: 2020-wang-3d-printing-of-bone-tissue-engineering-s
source_type: paper
title: "3D printing of bone tissue engineering scaffolds"
authors: ["Wang, Chong", "Huang, Wei", "Zhou, Yu", "He, Libing", "He, Zhi", "Chen, Ziling", "He, Xiao", "Tian, Shuo", "Liao, Jiaming", "Lu, Bingheng", "Wei, Yen", "Wang, Min"]
year: 2020
doi: 10.1016/j.bioactmat.2020.01.004
url: https://doi.org/10.1016/j.bioactmat.2020.01.004
raw_path: raw/papers/2020-wang-3d-printing-of-bone-tissue-engineering-s.xml
tags: [3D-printing, bone-tissue-engineering, scaffold, review, gradient, FDM, SLS, stereolithography, robocasting]
created: 2026-04-25
updated: 2026-04-25
---

# Wang et al. 2020 — 3D printing of bone tissue engineering scaffolds

## Summary

A 2020 review (Bioactive Materials) of additive-manufacturing routes for bone-tissue-engineering scaffolds, covering FDM, SLS, stereolithography, selective laser melting, inkjet, vat photopolymerisation, continuous liquid interface production, and digital laser processing. Discusses customised shape, tailored pore size/porosity, tuned mechanical properties as the central advantages of 3D printing, and highlights gradient-composition / gradient-structure scaffolds as a leading-edge design (e.g., Gao et al.'s hydrogel scaffolds with distinct cartilage-vs-subchondral microstructures and anisotropic mechanics). Documents specific examples of HA / β-TCP / CDHA / bioactive-glass inks blended with binders or photopolymers, sintered to remove organics. Directly supports the feasibility of fabricating gradient-pore HA scaffolds at clinically relevant resolutions.

## Key claims

- **3D printing advantages for bone scaffolds**: customised shape, tailored pore size/porosity, tuned mechanical properties — explicitly enabling cellular-response engineering.
- **Gradient scaffolds**: "Gao et al. produced hydrogel scaffolds with gradient composition/structure and excellent mechanical strength through direct 3D printing. The cartilage layer and the subchondral layer in the gradient scaffolds had distinct microscopic structures, compositions and anisotropic mechanical strengths" — proof-of-concept for radially / axially graded architecture.
- **CaP ink chemistry**: HA, β-TCP, CDHA, bioactive glasses can be blended with binders or photopolymers, printed, then sintered to remove organic phase, leaving "hard bioceramic scaffolds." Bioceramic micro/nanoparticles can be blended with biodegradable synthetic polymers to make composite inks.
- **Robocasting case**: Touri et al. printed 60% HA / 40% β-TCP latticed scaffolds, sintered, then dip-coated with calcium peroxide (CPO)/PCL — illustrating composite post-processing.
- **Trade-offs by route**: ceramic-only scaffolds are unsuitable for load-bearing because of brittleness and low compressive strength/modulus — reinforcing the cortical-shell rationale of the gradient design.
- **Polymer coating** on bioceramic scaffolds "promotes bone ingrowth with improved osteoblast cell viability and proliferation under hypoxic conditions."

## Methods used

- [[../methods/3D-printing-stereolithography]]
- [[../methods/DLP-vat-photopolymerization]]
- [[../methods/fused-deposition-modeling]]
- [[../methods/selective-laser-sintering]]
- [[../methods/inkjet-3D-printing]]
- [[../methods/robocasting-direct-ink-writing]]
- [[../methods/extrusion-based-3D-printing]]
- [[../methods/binder-jet-3D-printing]]
- [[../methods/ceramic-sintering]]
- [[../methods/contact-angle-wettability]]
- [[../methods/gradient-pore-design]]

## Reagents

- [[../reagents/hydroxyapatite]]
- [[../reagents/beta-tricalcium-phosphate]]
- [[../reagents/calcium-deficient-hydroxyapatite]]
- [[../reagents/biphasic-calcium-phosphate]]
- [[../reagents/bioglass-45S5]]
- [[../reagents/polycaprolactone]]
- [[../reagents/polylactic-acid]]
- [[../reagents/PLGA]]

## Organisms / cell lines

- Reviews various osteoblast / pre-osteoblast culture systems but does not standardise on one cell line; cited examples include MC3T3-E1 contexts in original primary papers.
- [[../organisms/MC3T3-E1]]

## Failure modes flagged

- [[../failure-modes/brittle-ceramic-mechanical-failure]] — explicit: bioceramic-only scaffolds "unsuitable for load bearing applications; relatively low compressive strength and modulus; brittleness."
- [[../failure-modes/sintering-shrinkage-pore-deviation]] — sintering removes organic binders and shrinks the green body.
- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — review notes the need to "remove the organic phase" via sintering, implicitly because residues are problematic.
- [[../failure-modes/pore-anisotropy-from-print-direction]] — discussion of layer-by-layer build axis introduces anisotropy.

## Supports / contradicts

- Supports [[2015-ishack-bone-regeneration-in-critical-bone-defec]] (robocasting HA/β-TCP scaffolds).
- Supports [[2024-wang-polydopamine-functionalized-calcium-defi]] (extrusion-based CDHA gradient-pore scaffold).
- Supports [[2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] (extrusion-based CPC/MBG).
- Provides the methodological taxonomy underpinning fabrication-route selection in our protocol.

## Notable quotes

- "It is now possible to create novel bone tissue engineering scaffolds with customized shape, architecture, favorable macro-micro structure, wettability, mechanical strength and cellular responses." (Abstract)
- "Gao et al. produced hydrogel scaffolds with gradient composition/structure and excellent mechanical strength through direct 3D printing. The cartilage layer and the subchondral layer in the gradient scaffolds had distinct microscopic structures, compositions and anisotropic mechanical strengths." (Gradient scaffolds section)
- "Hydroxyapatite (HA), beta-tricalcium phosphate (β-TCP), calcium deficient hydroxyapatite (CDHA), bioactive glasses, etc., can be blended with binders or photopolymers to form printing inks to make 3D printed 'green body', which are further sintered to remove the organic phase, leaving only hard bioceramic scaffolds." (Bioceramic scaffold ink section)
