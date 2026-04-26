---
type: source
id: 2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone
source_type: paper
title: "In Vitro Evaluation of Pore Size Graded Bone Scaffolds with Different Material Composition"
authors:
  - "Daskalakis, Evangelos"
  - "Huang, Boyang"
  - "Hassan, Mohamed H."
  - "Omar, Abdalla M."
  - "Vyas, Cian"
  - "Acar, Anil A."
  - "Fallah, Ali"
  - "Cooper, Glen"
  - "Weightman, Andrew"
  - "Blunn, Gordon"
  - "Koc, Bahattin"
  - "Bartolo, Paulo"
year: 2024
doi: 10.1089/3dp.2022.0138
url: https://doi.org/10.1089/3dp.2022.0138
raw_path: raw/papers/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone.pdf
tags: [gradient-porosity, PCL-HA, bone-scaffold, extrusion-3D-printing, in-vitro, hADSC, MTT, ALP, OCN, bioglass]
---

> Note on source ID: the filename stem is `2024-diez-escudero-…` but the actual paper is Daskalakis et al. 2024. Source ID retained to match the filename in `raw/`; canonical bibliographic metadata above reflects the real authors.

## Summary

Daskalakis and colleagues (Bartolo group, University of Manchester) fabricated screw-extrusion 3D-printed PCL composite "bone bricks" with a continuous radial pore-size gradient (inner / middle / outer regions) using PCL/HA, PCL/β-TCP, and PCL/Bioglass-45S5 (each 80/20 wt%) at 52% nominal porosity, and compared proliferation (MTT) and osteogenic differentiation (ALP, OCN) of hADSCs over 14 days against pure PCL. PCL/HA scaffolds showed the highest cell number at day 14 (243,413 ± 22,484 vs. 186,579 ± 14,221 for PCL, p = 0.0003), while PCL/Bioglass scaffolds gave the highest osteogenic differentiation (OCN 3.67 vs. 2.13 in PCL/HA). The gradient architecture itself produced a clear region-dependent gradient in cell density, with more cells in outer (larger-pore) regions, supporting the hypothesis that pore-size gradients drive a corresponding gradient in cellular activity.

## Key claims

- Screw-assisted extrusion-based 3D printing (RegenHU 3D Discovery, 0.33 mm needle, 90 °C, 20 mm/s deposition, 12 rpm screw) produced anatomically designed scaffolds with three discrete pore-size regions (inner/middle/outer) and 52% overall porosity.
- At day 14, **PCL/HA outperformed all other groups for cell proliferation** (MTT, hADSCs): PCL/HA 243,413 ± 22,484 cells vs PCL 186,579 ± 14,221 (p = 0.00030), PCL/TCP 210,253 ± 8,876, PCL/Bioglass 240,891 ± 15,086 (no significant difference between PCL/HA and PCL/Bioglass; p = 0.04798 marginal).
- Cell number increased monotonically from inner (small pore) → outer (large pore) regions, confirming the gradient architecture induces a *gradient in cell density*. "Number of cells increase by increasing the pore size (promotes oxygen and nutrients supply), suggesting that the gradient structure can induce cell growth and cell density in a gradient manner."
- Osteogenic markers: PCL/Bioglass had the highest ALP (80.37 ± 14.82) and OCN (3.67 ± 0.07) at day 14, attributed to Si, Ca, P ion release. PCL/HA was second-best on ALP/OCN; PCL/TCP was lowest among ceramic composites.
- EDX confirmed apatite-like layer formation on all ceramic-loaded scaffolds by day 14 (Ca, P enrichment vs day 0).
- Mechanical: previously reported by same group — 187 MPa (PCL), 239 MPa (PCL/HA), 247 MPa (PCL/TCP), 343 MPa (PCL/Bioglass) compressive modulus, suitable for both trabecular and cortical bone.
- Cell bridging across small inner pores was observed in SEM and may compromise nutrient supply to cells in inner regions — flagged as a structural/biological concern of small inner pore sizes.

## Methods used

- [[../methods/extrusion-based-3D-printing]]
- [[../methods/gradient-pore-design]]
- [[../methods/MTT-assay]]
- [[../methods/ALP-activity-assay]]
- [[../methods/SEM-imaging]]
- [[../methods/EDX-spectroscopy]]
- [[../methods/confocal-microscopy]]
- [[../methods/DAPI-staining]]
- [[../methods/phalloidin-actin-staining]]
- [[../methods/osteocalcin-ELISA]]

## Reagents

- [[../reagents/polycaprolactone]]
- [[../reagents/hydroxyapatite]]
- [[../reagents/beta-tricalcium-phosphate]]
- [[../reagents/bioglass-45S5]]
- [[../reagents/DMEM]]
- [[../reagents/penicillin-streptomycin]]
- [[../reagents/L-glutamine]]
- [[../reagents/PBS]]
- [[../reagents/DAPI]]
- [[../reagents/MTT]]
- [[../reagents/p-nitrophenyl-phosphate]]

## Organisms / cell lines

- [[../organisms/hADSC]]

## Failure modes flagged

- [[../failure-modes/nutrient-diffusion-limitation-in-scaffold-core]] — explicitly: "Cell bridging is more evident on the inner regions of the scaffolds (low pore size) and this may compromise oxygen and nutrient supply to the cells that migrated to the internal regions of the scaffold."
- [[../failure-modes/cell-seeding-uniformity-loss-large-pores]] — implicit in observation that outer (larger-pore) regions accumulate more cells in gradient designs.
- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — PCL/HA wins on proliferation, PCL/Bioglass wins on differentiation; the two markers diverge across composition.

## Supports / contradicts

- **Supports** [[2025-conoscenti-continuous-pore-size-gradient-enhances-z]] — both report gradient pore sizes drive a gradient in cellular response across the scaffold radial axis (although Conoscenti is osteochondral PLLA, 70→200 μm).
- **Supports** the framing in [[2026-liu-design-and-fabrication-of-biomimetic-gra]] and [[2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]] reviews that gradient pore architecture is preferable to uniform-pore designs.
- **Caveat for the present hypothesis**: scaffold matrix is PCL/HA composite, not pure HA, and the pore-size range (set by extrusion filament spacing) is not explicitly reported as 100→500 μm; the gradient is qualitative across three discrete regions.

## Notable quotes

- "Results show that the increase of calcium, oxygen, and phosphorous elements and the reduction of carbon elements from day 0 to 14 can explain the rapid proliferation and differentiation of cells on scaffolds surface." (Results, Chemical composition)
- "In all considered cases, results show that the number of cells increase by increasing the pore size (promotes oxygen and nutrients supply), suggesting that the gradient structure can induce cell growth and cell density in a gradient manner." (Cell differentiation)
- "Among the investigated composite scaffolds, PCL/TCP scaffolds present the lowest osteogenic characteristics." (Cell differentiation)
- "PCL/bioglass scaffolds enable fast apatite layer formation on the surface of the scaffolds, high cell proliferation, and osteogenic differentiation." (Conclusions)
