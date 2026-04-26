---
type: source
id: 2017-bose-additive-manufacturing-of-biomaterials
source_type: paper
title: "Additive manufacturing of biomaterials"
authors: ["Bose, Susmita", "Ke, Dongxu", "Sahasrabudhe, Himanshu", "Bandyopadhyay, Amit"]
year: 2017
journal: "Progress in Materials Science"
doi: 10.1016/j.pmatsci.2017.08.003
pmcid: PMC6690629
pmid: 31406390
url: https://doi.org/10.1016/j.pmatsci.2017.08.003
raw_path: raw/papers/2017-bose-additive-manufacturing-of-biomaterials.xml
tags: [3D-printing, additive-manufacturing, hydroxyapatite, beta-TCP, binder-jetting, robocasting, stereolithography, sintering, review]
created: 2026-04-25
updated: 2026-04-25
---

# Bose et al. 2017 — Additive manufacturing of biomaterials

## Summary

Comprehensive review of additive manufacturing methods (vat photopolymerization / SLA & DLP, material extrusion / FDM & robocasting, binder jetting, powder bed fusion / SLS & SLM) applied to ceramics, polymers, and metals for biomedical use. Establishes the process-window-vs-material-fidelity trade-off space relevant to fabricating HA scaffolds with controlled pore architecture. Covers in detail how powder size, slurry rheology, sintering schedule, and binder chemistry constrain achievable pore size, density, and mechanical strength of HA / β-TCP scaffolds.

## Key claims

- Binder jetting can produce porous CaP scaffolds with **macropore sizes of ~300–845 μm and microporosity of 40%** when sintered at 1250 °C; microwave sintering significantly increases density and compressive strength of binder-jetted β-TCP versus conventional sintering.
- Robocasting / direct ink writing of HA suspensions produces interconnected porous HA scaffolds with controllable strut spacing; CMC additions tune ink rheology to meet robocasting requirements.
- DLP-based vat photopolymerization can be loaded to ~70% bioglass to improve the mechanical strength of the resulting ceramic part after debinding/sintering.
- HA solid loading in slurry should be as high as possible to reduce cracking and warping during sintering.
- Binder jetting with fine powder (<20 μm) yields parts with higher post-sintering density and better surface finish than coarse-powder dry binder jetting, but requires wet/slurry feed.
- Pore-size studies in CaP / HA scaffolds typically span 200–800 μm; new bone formation in vivo increases with both pore size and overall porosity within this range.
- Demonstrated feasibility of binder-jet HA scaffolds with **450 μm pore size** and SLM/SLS-based metal/ceramic scaffolds with pore sizes 200–500 μm at high porosity (~70%).

## Methods used

- [[../methods/binder-jet-3D-printing]]
- [[../methods/robocasting-direct-ink-writing]]
- [[../methods/3D-printing-stereolithography]]
- [[../methods/DLP-vat-photopolymerization]]
- [[../methods/selective-laser-sintering]]
- [[../methods/fused-deposition-modeling]]
- [[../methods/extrusion-based-3D-printing]]
- [[../methods/ceramic-sintering]]
- [[../methods/slurry-preparation-for-DLP]]
- [[../methods/debinding-thermal-treatment]]
- [[../methods/mechanical-compression-testing]]

## Reagents

- [[../reagents/hydroxyapatite]]
- [[../reagents/beta-tricalcium-phosphate]]
- [[../reagents/biphasic-calcium-phosphate]]
- [[../reagents/bioglass-45S5]]
- [[../reagents/polycaprolactone]]
- [[../reagents/polylactic-acid]]

## Organisms

- [[../organisms/MC3T3-E1]]

## Failure modes flagged

- [[../failure-modes/sintering-shrinkage-pore-deviation]] — high HA loading is required to reduce cracking and warping during sintering, and slurry-route HA shows shrinkage during densification.
- [[../failure-modes/HA-phase-decomposition-during-sintering]] — high-temperature consolidation of CaP can shift HA toward β-TCP/α-TCP if conditions are not controlled.
- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — vat photopolymerization requires a photoinitiator and binder-jetting requires liquid binder; both must be removed in debinding.
- [[../failure-modes/brittle-ceramic-mechanical-failure]] — review notes curling, warping, and shrinkage during high-shrinkage processes; bioceramic struts have limited strain-to-failure.

## Supports / contradicts

- Establishes the canonical fabrication-route trade-offs relevant to the gradient-pore HA hypothesis.
- Supports the hypothesis's premise that 100–500 μm is an achievable pore-size window across multiple AM routes (binder jet, robocasting, SLA-derived methods).
- Provides background that aligns with [[2017-zhang-additively-manufactured-scaffolds-for-bo]] and [[2020-garot-additive-manufacturing-of-material-scaff]] on AM-method classification.

## Notable quotes

- "HA scaffolds with 450 μm of pore size were fabricated using this method." (binder jetting)
- "Scaffolds with a 500 μm of designed pore size and 27% of designed porosity microwave sintered at 1250 °C had 42[% density]…"
- "HA loading should be as high as possible to reduce cracking and warping during sintering."
- "Microwave sintering can significantly increase the density and compressive strength of porous tricalcium phosphate (TCP) parts by binder jetting compared to conventional sintering."
- "AM is an excellent tool to create complex design and control pore size, shape as well as porosity."
