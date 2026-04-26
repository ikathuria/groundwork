---
type: reagent
slug: DAPI
aliases: [4',6-diamidino-2-phenylindole, DAPI dihydrochloride]
cas: 28718-90-3
formula: C16H15N5
molecular_weight: 277.32
suppliers:
  - name: Thermo Fisher (Invitrogen)
    catalog: "D1306, D3571, D8417"
  - name: Sigma-Aldrich (Merck)
    catalog: "D9542, 32670"
storage: ≤ –20 °C dry; ≤ 4 °C aqueous, light-protected
hazards: medium (DNA-binding; mutagen)
known_failure_modes: [HA-autofluorescence-confounds-livedead]
sources: [2024-wang, 2024-diez-escudero, 2022-yang, protocol-2025-amin]
tags: [fluorescent-dye, DNA-stain, nuclear-staining]
created: 2026-04-25
updated: 2026-04-25
---

# DAPI

Blue-fluorescent DNA stain; binds AT-rich regions of dsDNA. Standard nuclear counterstain in immunofluorescence and live/dead-style imaging — used here primarily to count nuclei and confirm cell distribution across pore-size gradients.

## Properties

- **CAS:** 28718-90-3
- **Excitation / emission:** 358 nm / 461 nm (blue channel).
- **Working concentration:** 0.1–1 µg/mL for fixed cells; 1 µg/mL for permeabilised live cells.

## Common uses in this hypothesis space

- Nuclear counterstain to quantify cell number per pore zone.
- Pair with [[../reagents/phalloidin]] (F-actin stain) for cell morphology.
- Quantitative imaging of edge-effect / depth distribution on scaffolds.

## Suppliers / catalog

| Supplier | Catalog | Notes |
|---|---|---|
| Invitrogen | D1306, D3571, D8417 | various format/conc |
| Sigma | D9542, 32670 | research |

## Alternatives

- Hoechst 33342 — cell-permeant; for live cells.
- Propidium iodide — for dead-only staining.

## Gotchas / things to watch for

- [[../failure-modes/HA-autofluorescence-confounds-livedead]] — HA scaffold autofluorescence in the UV/blue is moderate; use scaffold-only blank, optimise exposure, or excite at 405 nm.
- Photobleaches on prolonged UV exposure.

## Sources

- [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]], [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]], [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — DAPI nuclear counterstain on scaffolds.
- [[../sources/protocol-2025-amin-murine-osteoblast-and-osteoclast-co-cult]] — DAPI in co-culture imaging.
