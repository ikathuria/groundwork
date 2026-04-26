---
type: source
id: 2020-chen-porous-scaffold-design-for-additive-manu
source_type: paper
title: "Porous Scaffold Design for Additive Manufacturing in Orthopedics: A Review"
authors: ["Chen, Hao", "Han, Qing", "Wang, Chenyu", "Liu, Yang", "Chen, Bingpeng", "Wang, Jincheng"]
year: 2020
journal: "Frontiers in Bioengineering and Biotechnology"
doi: 10.3389/fbioe.2020.00609
pmcid: PMC7311579
pmid: 32626698
url: https://doi.org/10.3389/fbioe.2020.00609
raw_path: raw/papers/2020-chen-porous-scaffold-design-for-additive-manu.xml
tags: [3D-printing, scaffold-design, parametric-design, TPMS, gradient-pore, orthopedics, review]
created: 2026-04-25
updated: 2026-04-25
---

# Chen et al. 2020 — Porous Scaffold Design for Additive Manufacturing in Orthopedics

## Summary

Design-focused review classifying AM porous-scaffold architectures into (a) cellular structures — non-parametric (diamond, BCC, polyhedral) and parametric (Voronoi, TPMS) — and (b) whole-structure designs (uniform, layered-gradient, layered-gradient-with-topology-optimization). Provides a directly relevant taxonomy for the proposed continuous radial pore-size gradient: it places "gradient pore distribution" alongside uniform pores as a recognized whole-structure design pattern, and reviews experimental data on porosity / pore size and bone formation.

## Key claims

- The four primary factors affecting bone in-growth in AM porous scaffolds are: porosity, pore size, pore shape, and randomness of pore distribution.
- "Over 60% porosity and pore size larger than 300 μm could promote bone formation" — cites the Hollister-derived consensus, but also reports in vivo work at 500–700 μm pore size and 60–70% porosity comparing osteogenesis directly.
- Diamond/FCC-designed porous Ti/Ta show excellent osteogenesis at 500 μm pore diameter.
- Parametric designs (TPMS, Voronoi) are only realisable through AM; they enable continuous control of pore size and connectivity across the build volume, making them the natural vehicles for gradient pore architecture.
- Whole-structure design literature is moving from uniform to **layered-gradient** to layered-gradient-with-topology-optimization — explicitly tracking the demand for biomimetic mechanical and biological gradients.
- Stochastic vs regular (parametric) porous structures: regular structures have more homogeneous mechanics and reproducible osteoconductivity.

## Methods used

- [[../methods/TPMS-scaffold-design]]
- [[../methods/gradient-pore-design]]
- [[../methods/finite-element-analysis]]
- [[../methods/computational-fluid-dynamics-permeability]]
- [[../methods/selective-laser-sintering]]
- [[../methods/3D-printing-stereolithography]]

## Reagents

- (Mostly metallic / Ti/Ta — comparator material.)
- [[../reagents/hydroxyapatite]]
- [[../reagents/polycaprolactone]]

## Organisms

- (Review — secondary citation of in vivo orthopedic models.)

## Failure modes flagged

- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — discusses the gap between parametric design and as-built geometry.
- [[../failure-modes/pore-anisotropy-from-print-direction]] — non-parametric unit cells (diamond, BCC) have intrinsic anisotropy.

## Supports / contradicts

- Directly supports the hypothesis: layered-/continuous-gradient pore architecture is identified as a leading-edge design pattern for orthopedic AM scaffolds, distinct from uniform pores.
- Provides the design-classification vocabulary the gradient-pore HA hypothesis fits into (parametric, whole-structure gradient).
- Aligns with [[2017-zhang-additively-manufactured-scaffolds-for-bo]] on TPMS / functionally graded approaches.
- The "≥300 μm + ≥60% porosity" rule is reported but the review acknowledges direct comparisons across 500 / 600 / 700 μm at 60–70% porosity, leaving the optimum genuinely contested.

## Notable quotes

- "The main factors affecting bone ingrowth are the following: porosity, pore size, the shape of the pore, and randomness of pore distribution."
- "The previous research suggested that over 60% porosity and pore size larger than 300 μm could promote bone formation."
- "Orthopedic scaffolds are required to appropriate pore size and porosity, reasonable pore shape, and random or gradient pore distribution analogous to bone."
- "The Diamond/FCC designed porous Ti/Ta showed excellent osteogenesis when the pore diameter is 500 μm."
