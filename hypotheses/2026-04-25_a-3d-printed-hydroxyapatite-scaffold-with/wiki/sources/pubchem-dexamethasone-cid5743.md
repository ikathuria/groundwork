---
type: source
id: pubchem-dexamethasone-cid5743
source_type: catalog
title: "PubChem CID 5743 — Dexamethasone"
authors: ["PubChem (NCBI)"]
year: 2025
doi: ""
url: https://pubchem.ncbi.nlm.nih.gov/compound/5743
raw_path: raw/catalogs/pubchem-dexamethasone-cid5743.json
tags: [catalog, pubchem, dexamethasone, glucocorticoid, osteogenic-supplement]
---

# Summary

PubChem record for dexamethasone, a synthetic fluorinated glucocorticoid used in osteogenic differentiation media (typically 100 nM, with [[../reagents/L-ascorbic-acid-2-phosphate]] and [[../reagents/beta-glycerophosphate]]) to drive MC3T3-E1 / hBMSC mineralization in vitro. Corresponds to [[../reagents/dexamethasone]].

# Properties

- CID: 5743
- IUPAC Name (preferred): (8S,9R,10S,11S,13S,14S,16R,17R)-9-fluoro-11,17-dihydroxy-17-(2-hydroxyacetyl)-10,13,16-trimethyl-6,7,8,11,12,14,15,16-octahydrocyclopenta[a]phenanthren-3-one
- Molecular Formula: `C22H29FO5`
- Molecular Weight: 392.5 g/mol
- Exact mass: 392.19990218
- InChIKey: `UREBDLICKHMUKA-CXSFZGCWSA-N`
- SMILES (canonical): `CC1CC2C3CCC4=CC(=O)C=CC4(C3(C(CC2(C1(C(=O)CO)O)C)O)F)C`
- 8 stereocenters defined.
- CAS (typical, not in this record): 50-02-2

# Suppliers (typical)

- Sigma-Aldrich D4902 (powder, ≥97% HPLC; cell-culture-tested D2915)
- Tocris 1126
- Stemcell Technologies 72092

# Hazards / Storage

- Glucocorticoid: handle with appropriate PPE (skin/eye irritant; reproductive toxicity Cat. 1B in some regulations).
- Storage: room temperature dry; once dissolved (typically in ethanol at 1 mM stock), aliquot and store –20 °C, light-protected.
- Working concentration in osteogenic medium: typically 100 nM (10⁻⁷ M).

# Failure modes / pitfalls

- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — dexamethasone drives osteoblast differentiation, which **suppresses proliferation**. A scaffold proliferation hypothesis (this study's outcome at day 14) should NOT include dexamethasone in the proliferation-comparison medium, or should split arms (proliferation medium vs. osteogenic medium).
- Dexamethasone has dose- and donor-dependent effects: high dose can be cytotoxic to primary hBMSCs; "100 nM" is a literature default but not always optimal.
- Light-sensitive in solution; degraded stocks underperform.
