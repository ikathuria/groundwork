---
type: reagent
slug: photoinitiator-TPO
aliases: [TPO, diphenyl(2,4,6-trimethylbenzoyl)phosphine oxide, Lucirin TPO]
cas: 75980-60-8
formula: C22H21O2P
molecular_weight: 348.37
suppliers:
  - name: Sigma-Aldrich (Merck)
    catalog: "415952"
  - name: BASF
    catalog: "Lucirin TPO"
storage: room-temperature, sealed, light-protected
hazards: medium (suspected reproductive toxicant; classified Cat 1B by ECHA in 2019; PPE)
known_failure_modes: [cytotoxic-residue-from-binders-or-photoinitiators]
sources: [2020-garot, 2025-tang, 2022-yang]
tags: [photoinitiator, DLP-resin, UV-curing, 405-nm]
created: 2026-04-25
updated: 2026-04-25
---

# Photoinitiator TPO

Type-I phosphine-oxide photoinitiator. Absorbs 380–425 nm light to generate radicals; widely used in dental and DLP resins where 405 nm projection is standard. Chemical safety status changed materially in 2019: ECHA classified TPO as a reproductive toxin Cat 1B, restricting consumer use in the EU.

## Properties

- **CAS:** 75980-60-8
- **MW:** 348.37 g/mol
- **Absorption:** 380–425 nm; bleaches on cure (yellow → colourless).
- **Loading:** 0.5–2 wt% in resin.

## Common uses in this hypothesis space

- DLP/SLA HA-slurry photopolymerisation at 405 nm.
- Dental resins; clinical translation friendly historically, regulatory increasingly difficult.

## Suppliers / catalog

| Supplier | Catalog | Notes |
|---|---|---|
| Sigma | 415952 | research |
| BASF | Lucirin TPO | industrial |

## Alternatives

- [[../reagents/photoinitiator-LAP]] — water-soluble, cell-compatible, 405 nm.
- Irgacure 2959 — UV (365 nm), older standard.
- BAPO — di-phosphine analogue.

## Gotchas / things to watch for

- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — unreacted TPO is cytotoxic and mutagenic; debinding and post-cure must reduce residual to ≤ ppm.
- Reproductive-toxicant Cat 1B classification (ECHA, 2019); growing regulatory pressure.
- Photobleach product is not toxic but can affect optical properties.

## Sources

- [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] — DLP photoinitiator selection.
- [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]] — modern DLP scaffold work.
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — DLP-printed curved scaffolds with TPO.
