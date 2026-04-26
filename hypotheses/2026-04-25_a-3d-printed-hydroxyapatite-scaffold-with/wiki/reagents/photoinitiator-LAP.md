---
type: reagent
slug: photoinitiator-LAP
aliases: [LAP, lithium phenyl-2,4,6-trimethylbenzoylphosphinate]
cas: 85073-19-4
formula: C16H16LiO3P
molecular_weight: 294.20
suppliers:
  - name: Sigma-Aldrich (Merck)
    catalog: "900889"
  - name: TCI
    catalog: "L0290"
storage: room-temperature, dry, light-protected
hazards: low (cell-compatible at use concentrations)
known_failure_modes: [cytotoxic-residue-from-binders-or-photoinitiators]
sources: [2020-garot, 2025-tang]
tags: [photoinitiator, DLP-resin, water-soluble, 405-nm, cell-compatible]
created: 2026-04-25
updated: 2026-04-25
---

# Photoinitiator LAP

Water-soluble Type-I phosphinate photoinitiator. Cell-compatible at use concentrations (0.05–0.5 wt%); the dominant choice for cell-laden bioink photopolymerisation and the safer modern alternative to [[../reagents/photoinitiator-TPO]].

## Properties

- **CAS:** 85073-19-4
- **MW:** 294.20 g/mol
- **Absorption:** 365–405 nm (effective at 405 nm).
- **Solubility:** water-soluble (~10 mg/mL).
- **Use concentration:** 0.05–0.5 wt%.

## Common uses in this hypothesis space

- DLP / SLA cell-laden GelMA, PEG-DA, methacrylated bioink crosslinking.
- HA-slurry photopolymerisation in modern DLP ceramic printing.

## Suppliers / catalog

| Supplier | Catalog | Notes |
|---|---|---|
| Sigma | 900889 | research |
| TCI | L0290 | research |

## Alternatives

- [[../reagents/photoinitiator-TPO]] — oil-soluble, more efficient, more toxic.
- Irgacure 2959 — UV-only, older.

## Gotchas / things to watch for

- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — though LAP is cell-compatible at use concentrations, residual unreacted LAP at high loading still affects viability; rinse or post-cure thoroughly.
- Hydrolyses slowly in solution; make stock fresh.

## Sources

- [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] — DLP photoinitiator selection.
- [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]] — modern DLP work.
