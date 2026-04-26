---
type: source
id: cellosaurus-mc3t3-e1-cvcl0409
source_type: catalog
title: "Cellosaurus CVCL_0409 — MC3T3-E1 (parental, unselected)"
authors: ["Cellosaurus / SIB"]
year: 2026
doi: ""
url: https://www.cellosaurus.org/CVCL_0409
raw_path: raw/catalogs/cellosaurus-mc3t3-e1-cvcl0409.json
tags: [catalog, cellosaurus, MC3T3-E1, mouse-osteoblast, calvarial, C57BL/6, preosteoblast, parental-line]
---

# Summary

Cellosaurus record for the parental, unselected MC3T3-E1 mouse preosteoblast cell line — derived from C57BL/6 newborn mouse calvaria (Sudo, Kodama et al. 1981/1983). Spontaneously immortalized; sex unspecified; doubling time ~24–48 h. The parental MC3T3-E1 has been subcloned into 11 selected and named subclones (Subclone 4, 14, 24, 30, etc.) with very different mineralization phenotypes — see Wang et al. 1999 (PMID 10352097). The parental population is heterogeneous; **most modern bone-TE studies use Subclone 4 specifically**. Corresponds to [[../organisms/MC3T3-E1]] (parental) vs. [[../organisms/MC3T3-E1-subclone-4]] (selected).

# Properties

- Cellosaurus accession: CVCL_0409
- Species: *Mus musculus* (NCBI taxid 10090)
- Breed/strain: C57BL/6
- Age at derivation: <1 day
- Sex: unspecified
- Cell type: Osteoblast (CL_0000062)
- Site: Bone, calvaria (UBERON_0004339, vault of skull)
- Category: Spontaneously immortalized cell line
- Doubling time: ~24–48 h (DSMZ ACC-210)
- Children: 11 named subclones in Cellosaurus, including CVCL_5440 (Subclone 4), CVCL_5437 (Subclone 14), CVCL_5438 (Subclone 24), CVCL_5439 (Subclone 30), plus MC3T3-NM4 (CVCL_B6H0).
- Notable: "Space-flown" cell line — flown on STS-56, STS-76, STS-81, STS-84.

# Suppliers (xrefs)

- ATCC: CRL-2953 (**discontinued** per Cellosaurus xref)
- DSMZ: ACC-210 (`https://www.dsmz.de/collection/catalogue/details/culture/ACC-210`)
- ECACC: 99072810
- RIKEN BRC: RCB1126
- Cytion / CLS: 305187
- Lonza: 521
- CCRID: 1101MOU-PUMC000012

# Hazards / Storage

- Standard BSL-1; mycoplasma testing required.
- Growth: α-MEM (no ascorbic acid is recommended for the *parental* line), 10% FBS, P/S; 37 °C / 5% CO₂.

# Failure modes / pitfalls

- [[../failure-modes/mc3t3-e1-subclone-variability]] — **the central pitfall.** Wang et al. 1999 (PMID 10352097) explicitly characterized the parental as a heterogeneous mix; subclones 4, 14, 24, 30 differ ≥10× in mineralization potential. A study reporting "MC3T3-E1" without specifying subclone is uninterpretable for mineralization endpoints.
- [[../failure-modes/cell-line-misidentification]] — Didion et al. 2014 (PMID 25277546) flagged widespread mouse-cell-line cross-contamination via SNP-array authentication. STR profile available (PubMed=37712227) but rarely run in scaffold studies.
- ATCC has discontinued CRL-2953, increasing reliance on DSMZ/ECACC sources — supply discontinuity affects reproducibility.
- "Restoration of mineral depositions by dexamethasone in the matrix of nonmineralizing osteoblastic cells subcloned from MC3T3-E1 cells" (Baba 2000, PMID 11136541) confirms that some subclones don't mineralize without dexamethasone rescue.
