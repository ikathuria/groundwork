---
type: reagent
slug: PEG-DA
aliases: [PEGDA, poly(ethylene glycol) diacrylate]
cas: "26570-48-9 (varies by Mn)"
formula: H2C=CH-CO-O-(CH2CH2O)n-CO-CH=CH2
suppliers:
  - name: Sigma-Aldrich (Merck)
    catalog: "455008 (Mn 575), 437441 (Mn 700), 729108 (Mn 6000)"
storage: ≤ 4 °C, light-protected (inhibitor-stabilised: MEHQ)
hazards: medium (acrylate, skin sensitiser)
known_failure_modes: [cytotoxic-residue-from-binders-or-photoinitiators]
sources: [2015-chia, 2020-garot]
tags: [hydrogel, photopolymer, DLP-resin, soft-scaffold]
created: 2026-04-25
updated: 2026-04-25
---

# Poly(ethylene glycol) diacrylate (PEG-DA)

Photocurable linear bifunctional acrylate. Forms hydrogel networks under UV/visible light with photoinitiator. Common base resin for DLP/SLA bioprinting where soft, hydrated scaffolds are needed. In bone scaffold work, used as a porogen-removable template or as the resin matrix for HA particle suspensions.

## Properties

- **Mn options:** 250, 575, 700, 6000 (Da) — controls crosslink density and swelling.
- **Cure:** radical photopolymerisation with [[../reagents/photoinitiator-LAP]] or [[../reagents/photoinitiator-TPO]].

## Common uses in this hypothesis space

- DLP resin matrix loaded with HA particles for ceramic-slurry photopolymerisation (followed by debinding + sintering).
- Sacrificial template for porogen-leaching pore creation.

## Suppliers / catalog

| Supplier | Catalog | Notes |
|---|---|---|
| Sigma-Aldrich | 455008 (Mn 575), 437441 (Mn 700), 729108 (Mn 6000) | research |

## Alternatives

- [[../reagents/photoinitiator-LAP]], [[../reagents/photoinitiator-TPO]] — different initiator/wavelength options for the same resin.
- GelMA, methacrylated chitosan / hyaluronic acid for biopolymer hydrogels.

## Gotchas / things to watch for

- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — uncured acrylate monomer is cytotoxic; post-cure rinse is essential. After debinding/sintering of HA-PEGDA slurries, no PEGDA should remain.
- MEHQ inhibitor must be confirmed before crosslink reactions; some applications require fresh, deinhibited resin.

## Sources

- [[../sources/2015-chia-recent-advances-in-3d-printing-of-biomat]] — DLP/SLA resins.
- [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] — photopolymer scaffolds.
