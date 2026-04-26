---
type: source
id: pubchem-hydroxyapatite-cid24856
source_type: catalog
title: "PubChem CID 24856 (filename: hydroxyapatite; PubChem record resolves to aluminum potassium disulfate / alum)"
authors: ["PubChem (NCBI)"]
year: 2025
doi: ""
url: https://pubchem.ncbi.nlm.nih.gov/compound/24856
raw_path: raw/catalogs/pubchem-hydroxyapatite-cid24856.json
tags: [catalog, pubchem, hydroxyapatite, mismatch, data-integrity]
---

# Summary

**Data-integrity flag:** the file `pubchem-hydroxyapatite-cid24856.json` was fetched as part of the HA literature collection, but PubChem CID 24856 is not hydroxyapatite. The record's preferred IUPAC name is **"aluminum;potassium;disulfate"** (potassium alum, KAl(SO₄)₂), molecular formula `AlKO8S2`, MW 258.21 g/mol, InChIKey `GRLPQNLYRHEGIJ-UHFFFAOYSA-J`. Hydroxyapatite (Ca₁₀(PO₄)₆(OH)₂) is not a single PubChem compound CID — it is a substance with multiple SIDs, since PubChem CID stores molecular compounds and HA is an inorganic crystalline solid.

# Properties (as actually present in this PubChem record)

- CID: 24856
- IUPAC Name (preferred): aluminum;potassium;disulfate
- Molecular Formula: `AlKO8S2`
- Molecular Weight: 258.21 g/mol
- Exact mass: 257.8487042
- SMILES: `[O-]S(=O)(=O)[O-].[O-]S(=O)(=O)[O-].[Al+3].[K+]`
- InChIKey: `GRLPQNLYRHEGIJ-UHFFFAOYSA-J`
- TPSA: 177
- Heavy atoms: 12; covalent units: 4

# Suppliers

- Not in this record. Hydroxyapatite suppliers (Sigma 21223, Bioteck HAP038C5SD09C, Plasma Biotal P88, etc.) should be captured separately on `[[../reagents/hydroxyapatite]]`.

# Hazards / Storage

- Potassium alum (the actual compound here): low hazard, room-temperature stable. **Do not transcribe to the [[../reagents/hydroxyapatite]] page.**

# Failure modes / pitfalls

- [[../failure-modes/ATCC-Sigma-vendor-pages-not-captured]] — extends to "PubChem-CID-mismatch-for-non-molecular-compound." Hydroxyapatite is not a discrete molecular compound, so PubChem CID lookup is fragile; canonical references should be `commons/reagents/hydroxyapatite` linking to CAS 1306-06-5 and supplier pages, not a PubChem CID. **Proposed new failure-mode slug:** `pubchem-cid-mismatch-for-inorganic-mineral`.
- The Pass-1 fetcher accepted the CID-24856 endpoint based on a misleading PubChem search hit; downstream Pass-2/Pass-3 must NOT use this record's properties as authoritative for HA.

# Notes for downstream

- The reagent page [[../reagents/hydroxyapatite]] should record: CAS 1306-06-5, formula Ca₁₀(PO₄)₆(OH)₂, MW 1004.6 g/mol, density ~3.16 g/cm³ — none of which appear in this fetched record.
