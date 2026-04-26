---
type: source
id: 2023-koushik-bone-tissue-engineering-scaffolds-functi
source_type: paper
title: "Bone Tissue Engineering Scaffolds: Function of Multi-Material Hierarchically Structured Scaffolds"
authors: ["Koushik, Tejas M.", "Miller, Catherine M.", "Antunes, Elsa"]
year: 2023
journal: "Advanced Healthcare Materials"
doi: 10.1002/adhm.202202766
pmcid: PMC11468595
pmid: 36512599
url: https://doi.org/10.1002/adhm.202202766
raw_path: raw/papers/2023-koushik-bone-tissue-engineering-scaffolds-functi.xml
tags: [bone-tissue-engineering, multi-material-scaffold, hierarchical-structure, hydroxyapatite, freeze-casting, review]
created: 2026-04-25
updated: 2026-04-25
---

# Koushik et al. 2023 — BTE Scaffolds: Function of Multi-Material Hierarchically Structured Scaffolds

## Summary

Review focused on multi-material and hierarchically structured BTE scaffolds. Frames the scaffold's dual role (load bearing + ECM-interaction for healing) and dedicates a section to the four primary structural axes — porosity, pore size, surface area, and interconnectivity — and the necessity of hierarchical pore-size distribution for emulating the natural bone hierarchy (osteons, Haversian canals, lamellae). Strong support for the hypothesis's biomimetic rationale.

## Key claims

- The four primary structural parameters of BTE scaffolds: porosity, pore size, surface area, and interconnectivity.
- "Osteoblast cells (10–50 μm in size) prefer pore sizes greater than 300 μm as this enables infiltration of biomolecules and transportation of nutrients and waste."
- **Optimal pore sizes for in-growth are within the range of 250–500 μm.**
- Pores ≤100 μm cause fibrous tissue formation around the scaffold, physically preventing angiogenesis and surface interaction — directly relevant to whether the 100 μm cortical-mimicking outer zone of the proposed gradient should be considered the lower bound.
- Mesopores 50–100 μm at scaffold surfaces (e.g., in silk fibroin) prevent cell leakage from larger pores during cell culture — a useful design pattern arguing for a small-pore "skin" in a gradient scaffold.
- Hierarchical scaffolds — including freeze-cast graded HA — better replicate bone's natural multi-scale architecture (Haversian system 150–300 μm thick, osteons 10–500 μm).
- TPMS-based scaffolds support increased cell migration through the porous volume vs cross-hatch structures, with corresponding higher cell density.
- Sequential freeze casting can produce graded porous HA — an alternative non-AM route to gradient HA.

## Methods used

- [[../methods/3D-printing-stereolithography]]
- [[../methods/selective-laser-sintering]]
- [[../methods/fused-deposition-modeling]]
- [[../methods/TPMS-scaffold-design]]
- [[../methods/gradient-pore-design]]
- [[../methods/SEM-imaging]]
- [[../methods/mechanical-compression-testing]]

## Reagents

- [[../reagents/hydroxyapatite]]
- [[../reagents/beta-tricalcium-phosphate]]
- [[../reagents/biphasic-calcium-phosphate]]
- [[../reagents/polycaprolactone]]
- [[../reagents/polylactic-acid]]
- [[../reagents/silk-fibroin]]
- [[../reagents/collagen]]

## Organisms

- (Review — no primary cell data.)

## Failure modes flagged

- [[../failure-modes/cell-seeding-uniformity-loss-large-pores]] — pores >> cell size lose attachment; mesopore "skin" mitigates this.
- [[../failure-modes/nutrient-diffusion-limitation-in-scaffold-core]] — argues for larger pores in the core, smaller at surface — exactly the proposed gradient.
- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — different pore sizes drive proliferation vs differentiation differently.
- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — characterisation methods (μCT, SEM, BET) needed to verify as-built geometry.

## Supports / contradicts

- Strongly supports the hypothesis: explicitly motivates hierarchical / graded pore architecture as a design pattern superior to uniform-pore scaffolds.
- The "≤100 μm causes fibrous tissue formation" point is a real design risk for the cortical-mimicking outer zone of the proposed scaffold and should be treated as a tunable parameter (i.e., 100 μm may need to be the strict lower bound, not nominal value).
- Aligns with [[2017-zhang-additively-manufactured-scaffolds-for-bo]], [[2020-chen-porous-scaffold-design-for-additive-manu]], [[2025-hossen-biomimetic-strategies-for-bone-regenerat]] on biomimetic hierarchical design.

## Notable quotes

- "Osteoblast cells (10–50 μm in size) prefer pore sizes greater than 300 μm as this enables infiltration of biomolecules and transportation of nutrients and waste."
- "Optimal pore sizes for in-growth have been shown to be within the range of 250–500 μm."
- "Smaller pores (≤100 μm) cause fibrous tissue formation around the scaffold, which physically prevents angiogenesis and any interaction with the scaffold surface."
- "While larger pore sizes of greater than 100 μm enabled full infiltration of ECM, mesopores ranging between 50 and 100 μm at the silk fibroin prevented cell leakage from the larger pores during cell culture."
- "[Authors] produced graded porous hydroxyapatites using a sequential freeze-casting process."
