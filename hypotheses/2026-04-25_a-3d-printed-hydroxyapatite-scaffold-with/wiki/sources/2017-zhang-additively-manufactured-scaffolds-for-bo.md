---
type: source
id: 2017-zhang-additively-manufactured-scaffolds-for-bo
source_type: paper
title: "Additively Manufactured Scaffolds for Bone Tissue Engineering and the Prediction of their Mechanical Behavior: A Review"
authors: ["Zhang, Xiang-Yu", "Fang, Gang", "Zhou, Jie"]
year: 2017
journal: "Materials"
doi: 10.3390/ma10010050
pmcid: PMC5344607
pmid: 28772411
url: https://doi.org/10.3390/ma10010050
raw_path: raw/papers/2017-zhang-additively-manufactured-scaffolds-for-bo.xml
tags: [3D-printing, additive-manufacturing, scaffold, finite-element-analysis, TPMS, mechanical-properties, review]
created: 2026-04-25
updated: 2026-04-25
---

# Zhang et al. 2017 — Additively Manufactured Scaffolds for BTE and the Prediction of their Mechanical Behavior

## Summary

Review of AM-fabricated bone-tissue-engineering scaffolds with a focus on (a) architectural design strategies (regular, stochastic, TPMS, functionally graded), (b) AM methods that work on powdered feedstocks (SLS, SLM, EBM, binder jetting), and (c) finite-element prediction of the mechanical response of porous AM scaffolds. Although the paper emphasises metallic biomaterials (titanium alloys), its architecture-design framework — including TPMS unit cells and functionally-graded porosity — directly informs how to construct a continuous radial pore-size gradient in HA.

## Key claims

- BTE scaffolds must satisfy five design criteria: biocompatibility, appropriate pore size and porosity for bone-cell infiltration and growth, mechanical match to host bone, osteoconductivity, and manufacturability.
- The 200–500 μm pore-size range has been most systematically studied for bone in-growth, but acceptable results have also been obtained at <200 μm and >500 μm — and even up to 2200 μm — depending on geometry, material, and biological context. The "optimum pore size" claim is contested.
- TPMS unit cells (e.g., gyroid, diamond, primitive surfaces) inspired by trabecular bone are a flexible vehicle for parametric pore-size variation; SLM-fabricated Ti-6Al-4V TPMS scaffolds have achieved pore sizes 480–1600 μm with porosities 80–95%.
- Functionally graded porosity (porosity-graded titanium with continuously varying pore fraction) is achievable by AM and yields tunable, location-specific mechanical and biological response.
- Compared with stochastic (random) porous structures, regular / parametric porous structures have distinct advantages in mechanical-property homogeneity and osteoconductivity.
- Finite-element analysis is the standard tool for predicting effective modulus and yield strength of AM scaffolds and is needed to match scaffold mechanics to host bone.

## Methods used

- [[../methods/selective-laser-sintering]]
- [[../methods/binder-jet-3D-printing]]
- [[../methods/3D-printing-stereolithography]]
- [[../methods/TPMS-scaffold-design]]
- [[../methods/gradient-pore-design]]
- [[../methods/finite-element-analysis]]
- [[../methods/mechanical-compression-testing]]
- [[../methods/micro-CT-imaging]]

## Reagents

- (Primarily metallic / Ti-6Al-4V; HA is referenced as a comparator ceramic.)
- [[../reagents/hydroxyapatite]]
- [[../reagents/beta-tricalcium-phosphate]]

## Organisms

- (Review — no primary cell or animal data.)

## Failure modes flagged

- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — pore size as fabricated by SLM/SLS deviates from the CAD model; FEA-based prediction must be calibrated against μCT-measured geometry.
- [[../failure-modes/pore-anisotropy-from-print-direction]] — layer-by-layer fabrication produces direction-dependent pore geometry and mechanical anisotropy.
- [[../failure-modes/brittle-ceramic-mechanical-failure]] — applies when AM is used with HA / CaP rather than the metals featured in this review.

## Supports / contradicts

- Strongly supports the hypothesis's design strategy: a continuous radial pore-size gradient is exactly the kind of "functionally graded architecture" the review identifies as a key advantage of AM.
- Contradicts simplistic "single optimum pore size" framings; argues the literature supports a much wider window than 300 μm.
- Reinforces the need for μCT verification of as-built geometry — see [[../methods/micro-CT-imaging]] and [[../failure-modes/cad-vs-actual-pore-size-mismatch]].
- Aligns with [[2020-chen-porous-scaffold-design-for-additive-manu]] on parametric design (TPMS, Voronoi).

## Notable quotes

- "The architecture of a scaffold in terms of porosity, pore size and pore interconnectivity is of critical importance, because it strongly affects the cellular activities and the mechanical properties…"
- "Pore sizes in a range of 200 to 500 μm were systematically studied… Acceptable results were obtained with pore sizes that were smaller than 200 μm, larger than 500 μm and even up to 2200 μm."
- "With the application of the AM technology, the geometrical structure of the scaffold can be precisely controlled and targeted mechanical and biological properties can be achieved through functionally graded architectures."
