---
type: source
id: cellosaurus-mc3t3-e1-subclone4-cvcl5437
source_type: catalog
title: "Cellosaurus CVCL_5437 — MC3T3-E1 Subclone 14 (filename misnomer; the file labeled 'subclone4' is actually CVCL_5437 = Subclone 14)"
authors: ["Cellosaurus / SIB"]
year: 2026
doi: ""
url: https://www.cellosaurus.org/CVCL_5437
raw_path: raw/catalogs/cellosaurus-mc3t3-e1-subclone4-cvcl5437.json
tags: [catalog, cellosaurus, MC3T3-E1-subclone-14, mouse-osteoblast, ATCC-CRL-2594, mineralization, naming-mismatch]
---

# Summary

**Naming mismatch flag:** the local filename `cellosaurus-mc3t3-e1-subclone4-cvcl5437.json` says "subclone4" but Cellosaurus accession **CVCL_5437 is MC3T3-E1 Subclone 14**, not Subclone 4. Subclone 4 is a different accession (CVCL_5440). The fetched JSON consistently identifies the cell line as "MC3T3-E1 Subclone 14" with ATCC catalog CRL-2594. The published Wang et al. 1999 (PMID 10352097) characterization placed Subclone 14 among the high-mineralizing subclones (along with Subclone 4); the two are functionally similar but have distinct STR profiles and accessions. The Sheikh 2025 protocol (this hypothesis batch) uses Subclone 4 (CVCL_5440 / ATCC CRL-2593) — the present catalog file does NOT correspond to that protocol's exact line.

# Properties

- Cellosaurus accession: CVCL_5437
- **Identifier name: MC3T3-E1 Subclone 14** (NOT Subclone 4)
- Species: *Mus musculus*
- Breed: C57BL/6
- Sex: unspecified
- Cell type: Osteoblast
- Site: Bone, calvaria
- Category: Spontaneously immortalized cell line
- Parent: CVCL_0409 (MC3T3-E1)
- Children: Subclone 14-Luc (CVCL_C8WY) and 5 Ubigene KO derivatives (Clk4, Egfr, Notum, Npnt, Tsc1)
- Characteristic comment (ATCC=CRL-2594): "Exhibits high levels of osteoblast differentiation after growth in ascorbic acid and 3 to 4 mM inorganic phosphate. Forms a well mineralized extracellular matrix (ECM) after 10 days."

# Suppliers (xrefs)

- ATCC: CRL-2594 (active)
- BCRJ: 0285
- CCRID: 3101MOUGNM15
- CLS: 305185
- KCB: 200786YJ
- Ubigene: YC-C026

# Hazards / Storage

- Standard BSL-1; mycoplasma testing required.
- Growth: α-MEM + ascorbic acid + 3–4 mM inorganic phosphate (the subclone's distinguishing feature is competence to mineralize quickly under these conditions).

# Failure modes / pitfalls

- [[../failure-modes/mc3t3-e1-subclone-variability]] — Subclone 14 vs Subclone 4 confusion is itself a manifestation. Cite ATCC catalog # (CRL-2593 for Subclone 4, CRL-2594 for Subclone 14) AND Cellosaurus CVCL_xxxx, not just "MC3T3-E1 subclone 4".
- [[../failure-modes/cell-line-misidentification]] — STR profile available (PubMed=37712227) — should be run on receipt.
- For this hypothesis's HA-scaffold proliferation hypothesis: **either** Subclone 4 or Subclone 14 is acceptable provided the line is named with both nomenclatures (subclone number + CVCL_ accession + ATCC catalog). The filename in the raw archive should be corrected during a future fetch.
