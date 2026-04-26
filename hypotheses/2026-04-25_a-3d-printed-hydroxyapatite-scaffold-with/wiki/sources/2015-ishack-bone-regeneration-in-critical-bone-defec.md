---
type: source
id: 2015-ishack-bone-regeneration-in-critical-bone-defec
source_type: paper
title: "Bone Regeneration in Critical Bone Defects Using Three-Dimensionally Printed β-Tricalcium Phosphate/Hydroxyapatite Scaffolds Is Enhanced by Coating Scaffolds with Either Dipyridamole or BMP-2"
authors: ["Ishack, Stephanie", "Mediero, Aranzazu", "Wilder, Tuere", "Ricci, John L.", "Cronstein, Bruce N."]
year: 2015
doi: 10.1002/jbm.b.33561
url: https://doi.org/10.1002/jbm.b.33561
raw_path: raw/papers/2015-ishack-bone-regeneration-in-critical-bone-defec.xml
tags: [3D-printing, robocasting, hydroxyapatite, beta-TCP, dipyridamole, BMP-2, in-vivo, calvarial-defect, critical-bone-defect]
created: 2026-04-25
updated: 2026-04-25
---

# Ishack et al. 2015 — 3D-printed HA/β-TCP scaffolds + dipyridamole or BMP-2 in critical bone defects

## Summary

Robocasted 15% HA / 85% β-TCP composite scaffolds were 3D-printed (RoboCAD 4.1, 250-μm extrusion nozzle, sintered 1100 °C × 4 h) and surface-coated with dipyridamole (100 μM), BMP-2 (200 ng/mL), or saline vehicle, then implanted in 3-mm cranial critical defects in C57Bl/6 and adenosine A2A-receptor knockout (A2AKO) mice for 2–8 weeks. MicroCT and histology showed significantly increased bone formation and remodeling for dipyridamole- and BMP-2-coated scaffolds vs. vehicle (n = 5/group; p ≤ 0.05–0.01 across 2-, 4-, 8-week time-points), and dipyridamole's effect was abolished in A2AKO mice — implicating adenosine A2A signalling as the mechanism. Establishes a concrete, citable HA/β-TCP fabrication pipeline (composition, sintering schedule, CAD strut/pore values, in-vivo defect model) directly relevant to our scaffold protocol.

## Key claims

- Scaffold geometry: circular "plug-with-cap" CAD; cap layer diameter 4.4 mm, plug diameter 3.3 mm, **250-μm struts**, **300-μm pore spacing**, designed in RoboCAD 4.1 (3D Inks LLC).
- Composition: 15% HA : 85% β-TCP colloidal ink, multistep ink prep (calcination 800 °C × 11 h → attrition milling in zirconia media in DI-H2O), 250-μm-diameter extrusion nozzle, sintered at 1100 °C × 4 h.
- Coating doses: BMP-2 at 200 ng/mL; dipyridamole at 100 μM; saline vehicle control. Scaffolds incubated/coated and implanted into 3-mm cranial critical defects.
- In vivo readout (microCT, n = 5/group): HA/β-TCP-dipyridamole and HA/β-TCP-BMP-2 produced significant bone formation and remodeling vs. vehicle at 2, 4, and 8 weeks (p ≤ 0.05, p ≤ 0.05, p ≤ 0.01 respectively).
- Mechanism: dipyridamole's pro-osteogenic effect is **abolished in A2AKO mice**, confirming adenosine A2A receptor dependence.
- Empty (zero time-point) scaffolds were micro-CT'd to give baseline measures of scaffold volume, empty space volume, strut thickness, and pore size — a procedural template for our gradient-vs-uniform comparison.

## Methods used

- [[../methods/robocasting-direct-ink-writing]]
- [[../methods/extrusion-based-3D-printing]]
- [[../methods/ceramic-sintering]]
- [[../methods/micro-CT-imaging]]
- [[../methods/micro-CT-bone-volume-quantification]]
- [[../methods/in-vivo-calvarial-defect-model]]
- [[../methods/spectrophotometric-calcium-assay]]

## Reagents

- [[../reagents/hydroxyapatite]]
- [[../reagents/beta-tricalcium-phosphate]]
- [[../reagents/biphasic-calcium-phosphate]]
- [[../reagents/dipyridamole]]
- [[../reagents/BMP-2]]

## Organisms / cell lines

- [[../organisms/mouse-cranial-defect-model]]
- C57Bl/6 mice (wild-type) and adenosine A2A-receptor knockout (A2AKO) mice on a C57Bl/6 background (>10 backcrosses).

## Failure modes flagged

- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — empty scaffolds were imaged by μCT to verify volume / strut thickness / actual pore size, implicitly because sintered output deviates from CAD.
- [[../failure-modes/sintering-shrinkage-pore-deviation]] — multi-step sintering (1100 °C × 4 h) is the source of shrinkage that motivates the empty-scaffold μCT QC.
- [[../failure-modes/in-vivo-vs-in-vitro-discordance]] — paper is purely in vivo (no osteoblast culture proliferation data), illustrating the gap our hypothesis must bridge.

## Supports / contradicts

- Supports [[2020-wang-3d-printing-of-bone-tissue-engineering-s]] (extrusion / robocasting of CaP scaffolds for bone defects).
- Supports [[2017-eliaz-calcium-phosphate-bioceramics-a-review-o]] (HA/β-TCP biphasic compositions for bone repair).
- Provides an experimental template, not a direct test of pore-size-gradient effects on osteoblast proliferation; relevance is fabrication route + in-vivo bone formation as a downstream validation endpoint.

## Notable quotes

- "3-D circular 'plug' shaped scaffolds with cap (cap layer diameter 4.4-mm, 'plug' diameter 3.3-mm, 250-μm struts, and 300-μm pore spacing) were designed utilizing a computer-aided design (CAD) system (RoboCAD 4.1; 3D Inks LLC Tulsa, OK)." (Materials & Methods)
- "MicroCT showed significant bone formation and remodeling in HA/β-TCP-dipyridamole and HA/β-TCP-BMP-2 scaffolds when compared to scaffolds immersed in vehicle at 2, 4 and 8 weeks (n = 5 per group; p ≤ 0.05, p ≤ 0.05 and p ≤ 0.01, respectively)." (Abstract)
- "Coating scaffolds with dipyridamole did not enhance bone regeneration in A2AKO mice." (Abstract — mechanism confirmation)
