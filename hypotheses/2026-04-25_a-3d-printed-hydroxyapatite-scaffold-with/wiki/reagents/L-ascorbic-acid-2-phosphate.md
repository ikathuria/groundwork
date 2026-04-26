---
type: reagent
slug: L-ascorbic-acid-2-phosphate
aliases: [AA-2P, ascorbate-2-phosphate, L-ascorbic acid 2-phosphate sesquimagnesium salt]
cas: "113170-55-1 (sesquimagnesium salt); free acid CID 54679073"
formula: "C6H9O9P (free acid); commercial reagent typically Mg or Na salt"
molecular_weight: "256.10 (free acid); supplier MW differs"
suppliers:
  - name: Sigma-Aldrich (Merck)
    catalog: "A8960"
    grade: "L-ascorbic acid 2-phosphate sesquimagnesium salt"
  - name: Sigma-Aldrich (Merck)
    catalog: "49752"
    grade: "cell-culture tested"
  - name: Wako / FUJIFILM
    catalog: "013-12061"
    grade: "research"
storage: ≤ –20 °C, desiccated, light-protected
hazards: low
known_failure_modes: [cytotoxic-residue-from-binders-or-photoinitiators, proliferation-vs-differentiation-tradeoff]
sources: [2025-conoscenti, 2022-yang, protocol-2025-amin, protocol-2025-sheikh, pubchem-l-ascorbic-acid-2-phosphate-cid54679073]
tags: [osteogenic-supplement, vitamin-C, collagen-synthesis]
created: 2026-04-25
updated: 2026-04-25
---

# L-ascorbic acid 2-phosphate (AA-2P)

Phosphorylated, hydrolysis-stable analogue of vitamin C. Slowly hydrolyses to free ascorbate in cell-culture media, providing sustained vitamin C activity for prolyl-hydroxylase-mediated collagen synthesis — required for osteoblast deposition of collagenous matrix and subsequent mineralisation.

## Properties

- **CAS:** 113170-55-1 (sesquimagnesium salt; the cell-culture standard)
- **Free-acid PubChem CID:** 54679073 — formula C₆H₉O₉P, MW 256.10
- **Working concentration:** typically 50 µg/mL (~200 µM)
- **Stability:** stable to autoclaving in dry form; reconstituted solutions oxidise — make fresh.

## Common uses in this hypothesis space

- 50 µg/mL supplement in osteogenic medium (with dex + β-GP).
- Drives type-I collagen secretion in osteoblasts and MSCs.

## Suppliers / catalog

| Supplier | Catalog | Notes |
|---|---|---|
| Sigma-Aldrich | A8960 | sesquimagnesium salt (most common) |
| Sigma-Aldrich | 49752 | cell-culture tested |
| Wako | 013-12061 | research |

## Alternatives

- Free L-ascorbic acid — hydrolyses much faster; less suitable for sustained dosing.

## Gotchas / things to watch for

- The cell-culture-supplied product is usually the **magnesium salt** (or trisodium); MW differs from the free-acid (256.10 g/mol). **Use supplier MW for concentration calculations**, not the PubChem free-acid value.
- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — analogous concern: degraded ascorbate-2-phosphate generates dehydroascorbate, mildly cytotoxic at high concentrations; replace medium frequently.
- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — AA-2P at 50 µg/mL drives differentiation; should not be in pure-proliferation media for the day-14 endpoint.

## Sources

- [[../sources/pubchem-l-ascorbic-acid-2-phosphate-cid54679073]] — free-acid record; flags MW discrepancy with supplier salt.
- [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] — osteogenic medium for hBMSC on gradient.
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — osteogenic supplement.
- [[../sources/protocol-2025-amin-murine-osteoblast-and-osteoclast-co-cult]], [[../sources/protocol-2025-sheikh-isolation-of-in-vitro-osteoblastic-deriv]] — protocol osteogenic media.
