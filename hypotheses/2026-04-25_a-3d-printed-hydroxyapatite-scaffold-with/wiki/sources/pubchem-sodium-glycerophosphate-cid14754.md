---
type: source
id: pubchem-sodium-glycerophosphate-cid14754
source_type: catalog
title: "PubChem CID 14754 — Disodium glycerophosphate (β-glycerophosphate disodium salt)"
authors: ["PubChem (NCBI)"]
year: 2025
doi: ""
url: https://pubchem.ncbi.nlm.nih.gov/compound/14754
raw_path: raw/catalogs/pubchem-sodium-glycerophosphate-cid14754.json
tags: [catalog, pubchem, beta-glycerophosphate, sodium-glycerophosphate, phosphate-source, osteogenic-supplement, mineralization]
---

# Summary

PubChem record for disodium 2,3-dihydroxypropyl phosphate ("disodium glyceryl phosphate"), the free phosphate-donor used in osteogenic media (typically 10 mM β-glycerophosphate) as substrate for alkaline phosphatase to liberate phosphate for mineralization. Corresponds to [[../reagents/beta-glycerophosphate]]. Note: this PubChem CID describes the **mixed α/β** glycerophosphate isomer (2,3-dihydroxypropyl phosphate); the cell-culture reagent is specifically **β-glycerophosphate** (sn-glycerol-2-phosphate equivalent), and most suppliers' products are mixtures.

# Properties

- CID: 14754
- IUPAC Name (preferred): disodium;2,3-dihydroxypropyl phosphate
- Traditional name: disodium;glyceryl phosphate
- Molecular Formula: `C3H7Na2O6P`
- Molecular Weight: 216.04 g/mol
- Exact mass: 215.97756350
- InChIKey: `GEKBIENFFVFKRG-UHFFFAOYSA-L`
- SMILES: `C(C(COP(=O)([O-])[O-])O)O.[Na+].[Na+]`
- 1 stereocenter (undefined — the glycerol carbon).
- CAS (typical for β-glycerophosphate disodium pentahydrate): 13408-09-8 (anhydrous) / 819-83-0 (hydrate variants)

# Suppliers (typical)

- Sigma-Aldrich G9422 (β-glycerophosphate disodium salt pentahydrate, ≥99%)
- Sigma-Aldrich G9891 (cell culture tested)
- Calbiochem 35675

# Hazards / Storage

- Low hazard.
- Storage: room temperature, dry; solutions made fresh and 0.22 µm filter-sterilized (do NOT autoclave — heat hydrolyzes glycerophosphate, releasing free phosphate that precipitates with Ca²⁺ in the medium → spurious "mineralization").

# Failure modes / pitfalls

- **Spontaneous dystrophic mineralization:** β-glycerophosphate at 10 mM can spontaneously precipitate with medium Ca²⁺ even without active osteoblast ALP, especially if the stock has been autoclaved or aged → false-positive mineralization. Always include a "no cells" / "no osteogenic supplement" control.
- Often confused with sodium glycerol phosphate / glycerol-3-phosphate (different isomer); supplier specs should be checked.
- Working concentration drifts with stock-pentahydrate vs. anhydrous: a 10 mM target uses different masses depending on hydrate count.
