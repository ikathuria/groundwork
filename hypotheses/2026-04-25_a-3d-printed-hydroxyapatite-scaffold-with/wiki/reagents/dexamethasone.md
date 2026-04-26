---
type: reagent
slug: dexamethasone
aliases: [dex, DEX, 9α-fluoro-16α-methylprednisolone]
cas: 50-02-2
formula: C22H29FO5
molecular_weight: 392.5
suppliers:
  - name: Sigma-Aldrich (Merck)
    catalog: "D4902"
    grade: "powder, ≥97% HPLC"
  - name: Sigma-Aldrich (Merck)
    catalog: "D2915"
    grade: "cell-culture tested"
  - name: Tocris
    catalog: "1126"
    grade: "research"
  - name: STEMCELL Technologies
    catalog: "72092"
    grade: "research"
storage: room-temperature dry; once dissolved, aliquot at –20 °C, light-protected
hazards: medium (glucocorticoid; reproductive toxicity Cat 1B in some classifications; PPE)
known_failure_modes: [proliferation-vs-differentiation-tradeoff]
sources: [2025-conoscenti, 2022-yang, protocol-2025-amin, protocol-2025-sheikh, pubchem-dexamethasone-cid5743]
tags: [osteogenic-supplement, glucocorticoid, differentiation]
created: 2026-04-25
updated: 2026-04-25
---

# Dexamethasone

Synthetic fluorinated glucocorticoid; the third member of the canonical osteogenic cocktail with β-GP and AA-2P. Drives osteogenic commitment in MSCs and pre-osteoblasts at typically 100 nM (10⁻⁷ M).

## Properties

- **CAS:** 50-02-2
- **PubChem CID:** 5743
- **Formula:** C₂₂H₂₉FO₅
- **MW:** 392.5 g/mol
- **Solubility:** ~ethanol stocks (1 mM typical), then dilute into medium.
- **Working concentration:** 100 nM in osteogenic medium.

## Common uses in this hypothesis space

- 100 nM supplement in osteogenic differentiation media for MC3T3-E1, hBMSC, hADSC.
- **Not used** in pure-proliferation comparisons — drives differentiation, suppresses proliferation.

## Suppliers / catalog

| Supplier | Catalog | Notes |
|---|---|---|
| Sigma-Aldrich | D4902 | ≥97% HPLC |
| Sigma-Aldrich | D2915 | cell-culture tested |
| Tocris | 1126 | research |
| STEMCELL | 72092 | research |

## Alternatives

- BMP-2 (recombinant) — alternative differentiation driver; works through a different pathway.
- Hydrocortisone (less potent corticosteroid) used in some protocols.

## Gotchas / things to watch for

- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — dexamethasone drives differentiation, which **suppresses proliferation**. The day-14 proliferation primary endpoint of this hypothesis should NOT include dex in the proliferation-comparison medium. If both are needed, run separate arms (proliferation medium vs osteogenic medium).
- Dose- and donor-dependent effects: high-dose dex is cytotoxic to primary hBMSCs; "100 nM" is a literature default, not always optimal.
- Light-sensitive in solution; degraded stocks underperform. Aliquot.

## Sources

- [[../sources/pubchem-dexamethasone-cid5743]] — authoritative compound record.
- [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] — osteogenic medium.
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — osteogenic medium.
- [[../sources/protocol-2025-amin-murine-osteoblast-and-osteoclast-co-cult]], [[../sources/protocol-2025-sheikh-isolation-of-in-vitro-osteoblastic-deriv]] — protocol osteogenic media.
