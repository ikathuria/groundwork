---
type: reagent
slug: polylactic-acid
aliases: [PLA, poly(lactic acid), polylactide, PLLA, PDLA]
cas: 26100-51-6
formula: (C3H4O2)n
suppliers:
  - name: NatureWorks
    catalog: "Ingeo 4032D / 4043D"
    grade: "FDM filament feedstock"
  - name: Sigma-Aldrich (Merck)
    catalog: "38534 (Mn ~10,000), 81273 (Mn ~85,000)"
  - name: Corbion Purac
    catalog: "PURASORB PL / PD / PDL series"
    grade: "medical"
storage: room-temperature, dry, sealed (hygroscopic)
hazards: low
known_failure_modes: [cytotoxic-residue-from-binders-or-photoinitiators, brittle-ceramic-mechanical-failure]
sources: [2020-wang, 2025-conoscenti, 2026-liu, 2025-liu, 2025-xie, 2012-amini, 2012-bose, 2014-thavornyutikarn, 2015-chia, 2015-do, 2016-murphy, 2017-bose, 2019-chocholata, 2020-garot, 2021-montoya, 2023-koushik, 2025-hossen, 2025-picado-tejero, 2025-tang, 2026-daghrery]
tags: [polymer, biodegradable, scaffold-material, FDM-filament]
created: 2026-04-25
updated: 2026-04-25
---

# Polylactic acid (PLA)

Biodegradable aliphatic polyester from renewable sources. Faster-degrading and stiffer than PCL; common as an FDM filament for scaffolds and as a matrix in PLA-HA composites.

## Properties

- **CAS:** 26100-51-6 (generic PLA)
- **Tm:** ~150–180 °C (PLLA); **Tg:** ~55–65 °C
- **Stereoisomers:** PLLA (semi-crystalline), PDLA, PDLLA (amorphous)
- **Degradation:** hydrolysis to lactic acid; ~6 months to 2 years in vivo depending on stereochemistry and Mn.

## Common uses in this hypothesis space

- FDM filament for scaffold fabrication (often blended with HA or β-TCP).
- Composite matrix in PLA-HA scaffolds.
- Bioresorbable fixation devices alongside scaffolds.

## Suppliers / catalog

| Supplier | Catalog | Notes |
|---|---|---|
| NatureWorks | Ingeo 4032D / 4043D | FDM filament feedstock |
| Sigma-Aldrich | 38534, 81273 | research grade |
| Corbion Purac | PURASORB PL/PD/PDL | medical |

## Alternatives

- [[../reagents/polycaprolactone]] — slower-degrading, more ductile.
- [[../reagents/PLGA]] — tunable degradation rate.

## Gotchas / things to watch for

- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — acidic degradation products (lactic acid) can lower local pH and reduce cell viability if PLA mass-loss is rapid.
- PLA is hygroscopic; absorbed water at print time causes filament hydrolysis and bubbling.
- Low Tg (~60 °C) — autoclave-incompatible.

## Sources

- [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] — PLA-based gradient scaffolds.
- [[../sources/2020-wang-3d-printing-of-bone-tissue-engineering-s]] — 3D-printed PLA composites.
- [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]], [[../sources/2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]], [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]] — gradient PLA reviews.
- [[../sources/2012-amini-bone-tissue-engineering-recent-advances]], [[../sources/2012-bose-recent-advances-in-bone-tissue-engineeri]], [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]], [[../sources/2015-chia-recent-advances-in-3d-printing-of-biomat]], [[../sources/2015-do-3d-printing-of-scaffolds-for-tissue-rege]], [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]], [[../sources/2017-bose-additive-manufacturing-of-biomaterials]], [[../sources/2019-chocholata-fabrication-of-scaffolds-for-bone-tissue]], [[../sources/2020-garot-additive-manufacturing-of-material-scaff]], [[../sources/2021-montoya-on-the-road-to-smart-biomaterials-for-bo]], [[../sources/2023-koushik-bone-tissue-engineering-scaffolds-functi]], [[../sources/2025-hossen-biomimetic-strategies-for-bone-regenerat]], [[../sources/2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por]], [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]], [[../sources/2026-daghrery-advances-in-3d-printed-scaffolds-for-per]] — broad reviews.
