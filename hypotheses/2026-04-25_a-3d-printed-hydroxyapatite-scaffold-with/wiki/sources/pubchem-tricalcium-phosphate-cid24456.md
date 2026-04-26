---
type: source
id: pubchem-tricalcium-phosphate-cid24456
source_type: catalog
title: "PubChem CID 24456 — Tricalcium diphosphate (β-tricalcium phosphate, β-TCP)"
authors: ["PubChem (NCBI)"]
year: 2025
doi: ""
url: https://pubchem.ncbi.nlm.nih.gov/compound/24456
raw_path: raw/catalogs/pubchem-tricalcium-phosphate-cid24456.json
tags: [catalog, pubchem, tricalcium-phosphate, beta-TCP, calcium-phosphate, biphasic]
---

# Summary

PubChem record for tricalcium diphosphate, Ca₃(PO₄)₂ — the β-tricalcium phosphate (β-TCP) commonly used in biphasic calcium-phosphate scaffolds and as a more resorbable counterpart to hydroxyapatite. In this hypothesis's vocabulary corresponds to [[../reagents/beta-tricalcium-phosphate]].

# Properties

- CID: 24456
- IUPAC Name (preferred): tricalcium diphosphate
- Molecular Formula: `Ca3O8P2` (i.e., Ca₃(PO₄)₂)
- Molecular Weight: 310.18 g/mol
- Exact mass: 309.7946135
- SMILES: `[O-]P(=O)([O-])[O-].[O-]P(=O)([O-])[O-].[Ca+2].[Ca+2].[Ca+2]`
- InChIKey: `QORWJWZARLRLPR-UHFFFAOYSA-H`
- TPSA: 173
- Heavy atoms: 13; covalent units: 5
- CAS (typical, not in this record): 7758-87-4

# Suppliers (from the broader literature, not in this record)

- Sigma-Aldrich 21218 (β-TCP nominal)
- Plasma Biotal P201, etc.
- Suppliers should be enumerated on [[../reagents/beta-tricalcium-phosphate]].

# Hazards / Storage

- Low hazard, dry/room-temperature stable in solid form.

# Failure modes / pitfalls

- [[../failure-modes/HA-stoichiometry-affects-resorption]] — β-TCP and HA are commonly used together in biphasic scaffolds (BCP); the HA:β-TCP ratio controls resorption rate and should be reported as a fraction, not a binary "biphasic" label.
- [[../failure-modes/HA-phase-decomposition-during-sintering]] — HA at high sintering temperatures decomposes to β-TCP + CaO + H2O; β-TCP appearing in an "HA scaffold" XRD trace is a red-flag for over-sintering rather than a designed feature.
- [[../failure-modes/batch-to-batch-HA-stoichiometry-variation]] — applies analogously to β-TCP via α-TCP / β-TCP polymorphism.

# Notes

- α-TCP and β-TCP have the same chemical formula but different crystal structures and very different resorption behavior; PubChem does not distinguish them at the compound level.
