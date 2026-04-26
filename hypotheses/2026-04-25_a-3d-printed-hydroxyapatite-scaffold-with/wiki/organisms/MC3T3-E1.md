---
type: organism
slug: MC3T3-E1
organism_type: cell-line
source: ATCC / DSMZ / ECACC / RIKEN BRC
external_id: CVCL_0409 (Cellosaurus); ATCC CRL-2953 (parental, **discontinued**); DSMZ ACC-210; ECACC 99072810; RIKEN BRC RCB1126
characteristics:
  - mouse (C57BL/6) calvarial pre-osteoblast, spontaneously immortalized (Sudo, Kodama et al. 1981/1983)
  - adherent; doubling time ~24-48 h
  - parental (unselected) line is heterogeneous — modern bone-TE work usually uses Subclone 4 (CVCL_5440, ATCC CRL-2593) or Subclone 14 (CVCL_5437, ATCC CRL-2594)
  - canonical osteoblast model for in-vitro scaffold proliferation and mineralization studies
  - "space-flown" on STS-56, STS-76, STS-81, STS-84
known_failure_modes: [mc3t3-e1-subclone-variability, cell-line-misidentification, proliferation-vs-differentiation-tradeoff, HA-autofluorescence-confounds-livedead, edge-effect-in-scaffold-cell-seeding]
sources: [2010-murphy, 2008-palmer, 2026-liu, 2025-liu, 2025-xie, 2020-wang, 2025-qi, 2018-zhang, 2017-bose, 2021-montoya, 2012-amini, 2012-bose, 2014-polo-corrales, 2014-thavornyutikarn, 2015-baino, 2015-chia, 2015-do, 2017-gao, 2016-murphy, cellosaurus-mc3t3-e1-cvcl0409]
tags: [cell-line, mouse, pre-osteoblast, calvarial]
created: 2026-04-25
updated: 2026-04-25
---

# MC3T3-E1 — mouse calvarial pre-osteoblast

## What it is

MC3T3-E1 is a spontaneously-immortalized mouse pre-osteoblast cell line derived from C57BL/6 newborn-mouse calvaria by Sudo and Kodama in 1981–1983. It is the **default in-vitro osteoblast model** for bone-tissue-engineering scaffold work — used in roughly half of the surveyed reviews for this hypothesis ([[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]], [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]], [[../sources/2015-chia-recent-advances-in-3d-printing-of-biomat]], [[../sources/2017-gao-bone-biomaterials-and-interactions-with]], [[../sources/2020-wang-3d-printing-of-bone-tissue-engineering-s]]). It proliferates as a flat, fibroblast-like population, then under osteogenic supplementation (ascorbic acid + β-glycerophosphate ± dexamethasone) progresses through ALP induction → matrix deposition → mineralization over ~3–4 weeks.

The Cellosaurus accession **CVCL_0409** refers specifically to the *parental, unselected* MC3T3-E1 — see [[../sources/cellosaurus-mc3t3-e1-cvcl0409]]. Modern work increasingly cites a specific subclone (see "Common variants / subclones" below).

## Growth conditions

- **Medium**: α-MEM, 10% FBS, 1% penicillin-streptomycin. The *parental* line per ATCC/DSMZ does **not** require ascorbic-acid supplementation in maintenance medium (some α-MEM formulations are explicitly ascorbic-acid–free); subclones 4/14 do require ascorbic acid + 3–4 mM inorganic phosphate to mineralize ([[../sources/cellosaurus-mc3t3-e1-cvcl0409]], [[../sources/cellosaurus-mc3t3-e1-subclone4-cvcl5437]]).
- **Atmosphere / temperature**: 37 °C, 5% CO₂, humidified.
- **Subculturing**: 0.05% trypsin-EDTA at ~80% confluence; do not over-confluence — contact inhibition triggers premature differentiation in subclone 4 and biases proliferation endpoints.
- **Osteogenic induction**: switch to medium with 50 µg/mL L-ascorbic-acid-2-phosphate + 10 mM β-glycerophosphate (± 10 nM dexamethasone) once cells are confluent on the scaffold ([[../sources/protocol-2025-amin-murine-osteoblast-and-osteoclast-co-cult]], [[../sources/protocol-2025-sheikh-isolation-of-in-vitro-osteoblastic-deriv]]).
- **Authentication**: mouse STR profile available (PubMed 37712227); rarely run in scaffold studies but should be at receipt.
- **ATCC supply note**: ATCC CRL-2953 (parental) is listed as **discontinued** in Cellosaurus; sourcing from DSMZ ACC-210 or ECACC 99072810 is currently more reliable.

## Common variants / subclones

The parental MC3T3-E1 is heterogeneous — Wang et al. 1999 (PMID 10352097) showed that named subclones differ by ≥10× in mineralization potential. The Cellosaurus children of CVCL_0409 include 11 named subclones; the four most-used are:

| Subclone | CVCL | ATCC | Phenotype |
|---|---|---|---|
| Subclone 4 | CVCL_5440 | CRL-2593 | High mineralizer; canonical for bone-TE |
| Subclone 14 | CVCL_5437 | CRL-2594 | High mineralizer; behaves similarly to Subclone 4 |
| Subclone 24 | CVCL_5438 | — | Low mineralizer |
| Subclone 30 | CVCL_5439 | — | Non-mineralizer (rescuable with dexamethasone, Baba 2000 PMID 11136541) |

A study reporting "MC3T3-E1" without subclone designation is uninterpretable for mineralization endpoints. See [[MC3T3-E1-subclone-4]] for details on the most-cited variant and the data-integrity flag on the local catalog file.

## Why pick MC3T3-E1 for this hypothesis (vs Saos-2 / hFOB-1.19 / hBMSC)

- **+** Robust, fast-doubling, cheap, standard. The literature distribution of "day-14 proliferation on HA scaffold" effect sizes is built almost entirely on MC3T3-E1.
- **+** Diploid, non-tumor-derived — proliferation kinetics reflect a near-physiological pre-osteoblast.
- **−** Mouse, not human — translation to clinical bone-defect outcomes is indirect.
- **−** Parental-vs-subclone heterogeneity will dominate noise unless the subclone is pinned down.
- For this hypothesis (gradient-pore HA scaffold proliferation): **MC3T3-E1 Subclone 4 is the default choice**, with a primary-hBMSC arm as the human-relevance control.

## Common pitfalls

- [[../failure-modes/mc3t3-e1-subclone-variability]] — central pitfall. Pin the subclone by both CVCL accession and ATCC catalog #.
- [[../failure-modes/cell-line-misidentification]] — Didion et al. 2014 (PMID 25277546) showed widespread mouse-cell-line cross-contamination; STR-authenticate on receipt.
- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — once mineralization begins, proliferation slows; day-14 endpoint may sit on the transition.
- [[../failure-modes/HA-autofluorescence-confounds-livedead]] — calcein-AM/EthD readouts on HA scaffolds suffer from substrate autofluorescence; pair with PicoGreen DNA quantification.
- [[../failure-modes/edge-effect-in-scaffold-cell-seeding]] — MC3T3-E1 settles fast under static seeding; cells bias to the outer surface unless dynamic perfusion or vacuum infiltration is used.

## Sources

- [[../sources/cellosaurus-mc3t3-e1-cvcl0409]] — canonical Cellosaurus catalog for the parental line; subclone genealogy, supplier xrefs, ATCC discontinuation note.
- [[../sources/2010-murphy-understanding-the-effect-of-mean-pore-size-on]] — used MC3T3-E1 to map pore size → cell-attachment / proliferation on collagen-GAG scaffolds; foundational pore-size paper.
- [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]] — biomimetic HA mineralization referenced MC3T3-E1 as one validation cell type.
- [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]] — gradient-scaffold review; MC3T3-E1 cited as default in-vitro readout.
- [[../sources/2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]] — gradient-scaffold review; MC3T3-E1 cited.
- [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]] — gradient-scaffold review; MC3T3-E1 cited.
- [[../sources/2020-wang-3d-printing-of-bone-tissue-engineering-s]] — review of 3D-printed HA/BCP scaffolds using MC3T3-E1.
- [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]] — 3D-printed bioceramic scaffolds; MC3T3-E1 used for proliferation and ALP.
- [[../sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]] — micro-porosity effects on osteoblast proliferation, MC3T3-E1 arm.
- [[../sources/2017-bose-additive-manufacturing-of-biomaterials]] — additive manufacturing review citing MC3T3-E1 as standard cell type.
- [[../sources/2021-montoya-on-the-road-to-smart-biomaterials-for-bo]] — smart-biomaterial review; MC3T3-E1 cited for ALP / osteogenic readouts.
- [[../sources/2012-amini-bone-tissue-engineering-recent-advances]] — bone-TE review citing MC3T3-E1.
- [[../sources/2012-bose-recent-advances-in-bone-tissue-engineeri]] — bone-TE review citing MC3T3-E1 in CaP scaffold studies.
- [[../sources/2014-polo-corrales-scaffold-design-for-bone-regeneration]] — pore-size / scaffold-design review; MC3T3-E1 cited.
- [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]] — comprehensive scaffolding review; MC3T3-E1 in cell-type table.
- [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]] — bioceramic-scaffold review; MC3T3-E1 cited.
- [[../sources/2015-chia-recent-advances-in-3d-printing-of-biomat]] — 3D-printing biomaterials review; MC3T3-E1 cited.
- [[../sources/2015-do-3d-printing-of-scaffolds-for-tissue-rege]] — 3D-printing review; MC3T3-E1 cited.
- [[../sources/2017-gao-bone-biomaterials-and-interactions-with]] — bone-biomaterial interactions review; MC3T3-E1 used as proliferation/ALP cell.
- [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]] — scaffold/cell-type review; MC3T3-E1 cited (note actual authors are Bruzauskaite et al. 2016, slug preserved).
