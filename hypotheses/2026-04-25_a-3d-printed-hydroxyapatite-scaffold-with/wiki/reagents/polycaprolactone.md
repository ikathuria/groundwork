---
type: reagent
slug: polycaprolactone
aliases: [PCL, poly(ε-caprolactone), poly(epsilon-caprolactone)]
cas: 24980-41-4
formula: (C6H10O2)n
suppliers:
  - name: Sigma-Aldrich (Merck)
    catalog: "440744"
    grade: "Mn ~80,000, pellets"
  - name: Sigma-Aldrich (Merck)
    catalog: "440752"
    grade: "Mn ~45,000"
  - name: Corbion Purac
    catalog: "PURASORB PC 12 / PC 17"
    grade: "medical grade"
  - name: Evonik
    catalog: "RESOMER C 209"
    grade: "medical implant grade"
storage: room-temperature, dry; long-term ≤4 °C
hazards: low (melt processing fumes — use ventilation)
known_failure_modes: [cytotoxic-residue-from-binders-or-photoinitiators, brittle-ceramic-mechanical-failure, sintering-shrinkage-pore-deviation]
sources: [2020-wang, 2025-qi, 2013-loh, 2024-diez-escudero, 2026-liu, 2025-liu, 2025-xie, 2025-lee, 2012-amini, 2012-bose, 2013-henkel, 2014-thavornyutikarn, 2015-chia, 2015-do, 2017-gao, 2016-murphy, 2017-bose, 2019-chocholata, 2020-chen, 2020-garot, 2021-montoya, 2023-koushik, 2025-hossen, 2025-picado-tejero, 2025-tang, 2026-daghrery]
tags: [polymer, biodegradable, scaffold-material, FDM-filament, composite]
created: 2026-04-25
updated: 2026-04-25
---

# Polycaprolactone (PCL)

Aliphatic semi-crystalline polyester, FDA-approved, slow-degrading (~2–4 years in vivo). The most commonly cited polymer matrix for HA-PCL composite scaffolds and the canonical FDM filament for bone tissue engineering due to its low melt temperature (~60 °C) and ease of processing.

## Properties

- **CAS:** 24980-41-4
- **Repeat unit:** [-O-(CH₂)₅-C(=O)-]ₙ
- **Molecular weights commonly used:** Mn 45,000–80,000 (most lab work); medical-grade up to 200,000.
- **Tm:** ~58–63 °C; **Tg:** ~−60 °C
- **Solubility:** chloroform, dichloromethane, THF, dioxane (good); moderate in DMF, acetone; insoluble in water/alcohols.
- **Degradation:** hydrolytic + enzymatic; mass loss in physiological conditions over 1–2+ years; products are non-toxic (caproic acid → metabolised).

## Common uses in this hypothesis space

- **Composite matrix** for HA-PCL scaffolds — provides ductility and machinability that pure HA lacks. [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]] uses HA-PCL gradient scaffolds; [[../sources/2025-lee-pcl-scaffold-with-well-defined-hierarchi]] uses precision extrusion of PCL.
- **FDM filament** — HA-loaded PCL filaments allow desktop FDM of bone scaffolds at moderate resolution.
- **Robocasting / DIW** — PCL solutions in chloroform / DCM with HA filler.
- **Carrier for growth factors** — slow degradation makes PCL a sustained-release vehicle.

## Suppliers / catalog

| Supplier | Catalog | Mn / grade | Notes |
|---|---|---|---|
| Sigma-Aldrich | 440744 | 80,000, pellets | most cited |
| Sigma-Aldrich | 440752 | 45,000 | lower-MW for solution processing |
| Corbion Purac | PURASORB PC 12 / PC 17 | medical | for translational work |
| Evonik | RESOMER C 209 | implant grade | regulatory-validated |

## Alternatives

- [[../reagents/polylactic-acid]] — PLA: faster degrading (months), more brittle.
- [[../reagents/PLGA]] — tunable degradation (weeks–months).
- [[../reagents/PEG-DA]] — photopolymerisable hydrogel; for soft scaffolds, not load-bearing.
- [[../reagents/collagen]], [[../reagents/gelatin]], [[../reagents/silk-fibroin]] — natural polymer matrices.

## Gotchas / things to watch for

- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — solvent-cast PCL scaffolds must be exhaustively dried; residual chloroform/DCM is cytotoxic at ppm levels.
- [[../failure-modes/brittle-ceramic-mechanical-failure]] — high-HA loading (>50 wt%) reduces PCL's ductility advantage and the composite reverts toward ceramic-like brittleness.
- [[../failure-modes/sintering-shrinkage-pore-deviation]] — analogous: PCL-rich composites cannot be sintered (they melt); pore size set in print is final, but thermal annealing for HA fusion is impossible without losing the polymer.
- Low Tm (~60 °C) limits sterilisation: gamma- or EtO-sterilise; do **not** autoclave.

## Sources

- [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]] — HA-PCL gradient scaffolds.
- [[../sources/2025-lee-pcl-scaffold-with-well-defined-hierarchi]] — precision-extruded PCL scaffolds.
- [[../sources/2020-wang-3d-printing-of-bone-tissue-engineering-s]], [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]], [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]] — 3D-printed PCL composites.
- [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]] — porosity in PCL scaffolds.
- [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]], [[../sources/2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]], [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]] — gradient PCL composites.
- [[../sources/2012-amini-bone-tissue-engineering-recent-advances]], [[../sources/2012-bose-recent-advances-in-bone-tissue-engineeri]], [[../sources/2013-henkel-bone-regeneration-based-on-tissue-engine]], [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]], [[../sources/2015-chia-recent-advances-in-3d-printing-of-biomat]], [[../sources/2015-do-3d-printing-of-scaffolds-for-tissue-rege]], [[../sources/2017-gao-bone-biomaterials-and-interactions-with]], [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]] — broad TE reviews.
- [[../sources/2017-bose-additive-manufacturing-of-biomaterials]], [[../sources/2019-chocholata-fabrication-of-scaffolds-for-bone-tissue]], [[../sources/2020-chen-porous-scaffold-design-for-additive-manu]], [[../sources/2020-garot-additive-manufacturing-of-material-scaff]], [[../sources/2021-montoya-on-the-road-to-smart-biomaterials-for-bo]], [[../sources/2023-koushik-bone-tissue-engineering-scaffolds-functi]], [[../sources/2025-hossen-biomimetic-strategies-for-bone-regenerat]], [[../sources/2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por]], [[../sources/2026-daghrery-advances-in-3d-printed-scaffolds-for-per]] — AM-specific reviews.
