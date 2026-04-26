---
type: source
id: 2022-yang-gaussian-curvature-driven-direction-of-c
source_type: paper
title: "Gaussian curvature–driven direction of cell fate toward osteogenesis with triply periodic minimal surface scaffolds"
authors:
  - "Yang, Yuhe"
  - "Xu, Tianpeng"
  - "Bei, Ho-Pan"
  - "Zhang, Lei"
  - "Tang, Chak-Yin"
  - "Zhang, Ming"
  - "Xu, Chenjie"
  - "Bian, Liming"
  - "Yeung, Kelvin Wai-Kwok"
  - "Fuh, Jerry Ying Hsi"
  - "Zhao, Xin"
year: 2022
doi: 10.1073/pnas.2206684119
url: https://doi.org/10.1073/pnas.2206684119
raw_path: raw/papers/2022-yang-gaussian-curvature-driven-direction-of-c.xml
tags: [TPMS, gaussian-curvature, beta-TCP, stereolithography, hMSC, osteogenesis, angiogenesis, rabbit-femoral-defect]
---

## Summary

Yang et al. designed a series of triply periodic minimal surface (TPMS) scaffolds with controlled hyperboloidal topography and varying Gaussian curvatures, fabricated by stereolithography 3D printing of β-TCP slurry followed by sintering. They show that Gaussian curvature alone (independent of mean pore size or material) directs human MSC fate toward osteogenesis with coupled angiogenic paracrine signalling, via cytoskeleton reorganization, lamin A/C upregulation, and nuclear deformation. In a rabbit femoral defect model, the high-curvature TPMS scaffolds accelerated new bone formation. Although this paper uses β-TCP rather than HA and does not test a continuous pore-size gradient per se, the topology-as-fate-determinant framing is foundational mechanistic support for the hypothesis that scaffold geometry (pore size + curvature) drives osteoblast/MSC behavior beyond biochemical cues.

## Key claims

- TPMS β-TCP scaffolds were 3D-printed by stereolithography with body-inherent β-TCP, then sintered; multiple Gaussian-curvature levels (G0–G6) tested with otherwise matched porosity and chemistry.
- High Gaussian curvature (G6) increased: focal-adhesion size, F-actin stress fibres, vinculin near nuclei, lamin A/C expression, and nuclear deformation in hMSCs.
- Cells on convex (K1 > 0) regions: elongated/snail-shaped; on concave (K2 < 0): contracted shape.
- Curvature-induced cytoskeletal reorganization → osteogenesis–angiogenesis coupling: VEGF and other angiogenic factors upregulated alongside RUNX2/OCN.
- In vivo rabbit femoral defect model: high-curvature TPMS β-TCP scaffolds showed accelerated new bone formation (μCT bone-volume quantification) and neovascularization.
- Mouse subcutaneous implantation: validated tissue infiltration and neovascularization.
- Inhibitor studies (PF-573228 FAK inhibitor; Y-27632 ROCK inhibitor; blebbistatin myosin-II inhibitor) abolished curvature-driven osteogenic response, confirming mechanotransduction pathway.

## Methods used

- [[../methods/3D-printing-stereolithography]]
- [[../methods/DLP-vat-photopolymerization]]
- [[../methods/ceramic-sintering]]
- [[../methods/slurry-preparation-for-DLP]]
- [[../methods/TPMS-scaffold-design]]
- [[../methods/SEM-imaging]]
- [[../methods/micro-CT-imaging]]
- [[../methods/micro-CT-bone-volume-quantification]]
- [[../methods/confocal-microscopy]]
- [[../methods/phalloidin-actin-staining]]
- [[../methods/DAPI-staining]]
- [[../methods/qPCR]]
- [[../methods/in-vivo-femoral-defect-model]]
- [[../methods/mechanical-compression-testing]]
- [[../methods/finite-element-analysis]]
- [[../methods/osteogenic-differentiation-induction]]

## Reagents

- [[../reagents/beta-tricalcium-phosphate]]
- [[../reagents/photoinitiator-TPO]]
- [[../reagents/dexamethasone]]
- [[../reagents/L-ascorbic-acid-2-phosphate]]
- [[../reagents/beta-glycerophosphate]]
- [[../reagents/DAPI]]
- [[../reagents/VEGF]]
- [[../reagents/alizarin-red-S]]

## Organisms / cell lines

- [[../organisms/hBMSC]]
- [[../organisms/rabbit-bone-defect-model]]
- [[../organisms/HUVEC]]

## Failure modes flagged

- [[../failure-modes/pore-anisotropy-from-print-direction]] — authors print in two perpendicular orientations to *exclude* nano-pattern-from-printing effects, indicating awareness that print direction can confound topology results.
- [[../failure-modes/HA-phase-decomposition-during-sintering]] — implicit; sintering protocol carefully optimized for β-TCP phase fidelity.

## Supports / contradicts

- **Supports** [[2025-conoscenti-continuous-pore-size-gradient-enhances-z]]: scaffold geometry directs cell fate beyond biochemical cues.
- **Supports** the broader rationale of [[2026-liu-design-and-fabrication-of-biomimetic-gra]] / [[2025-xie-recent-advances-in-gradient-biomimetic-s]] / [[2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]] reviews on geometric/topological gradient design.
- **Tension/limitation for the present hypothesis:** uses β-TCP (not HA) and the manipulated variable is curvature, not pore-size gradient. So mechanistic support is indirect.

## Notable quotes

- "TPMS scaffolds with hyperboloidal surfaces can regulate the behaviors and functions of mesenchymal stem cells (MSCs) in terms of osteogenic differentiation and angiogenic paracrine for osteogenesis–angiogenesis coupling and vascularized bone regeneration." (Fig. 1B)
- "We thus hypothesize that the hyperboloidal structure could modulate the behaviors and functions of stem cells involved in bone regeneration." (Introduction)
- "Curvature-induced cytoskeleton reorganization results in cytoskeletal contractility and nucleus deformation with higher lamin A/C expression, leading to osteogenesis–angiogenesis coupling, which is critical for accelerated bone regeneration." (Introduction)
