---
type: organism
slug: MC3T3-E1-subclone-4
organism_type: cell-line
source: ATCC (canonical)
external_id: CVCL_5440 (Cellosaurus, canonical); ATCC CRL-2593 (canonical)
characteristics:
  - high-mineralizing subclone of [[MC3T3-E1]] selected by Wang et al. 1999 (PMID 10352097)
  - mineralizes a well-organized type-I collagen ECM in 10–14 days under ascorbic acid + 3–4 mM β-glycerophosphate
  - canonical "MC3T3-E1" used in modern bone-TE scaffold studies — preferred over the heterogeneous parental
  - mouse (C57BL/6) calvarial pre-osteoblast; spontaneously immortalized; adherent
  - "Subclone 4" must be paired with CVCL_5440 / ATCC CRL-2593 to disambiguate from Subclone 14 (CVCL_5437 / ATCC CRL-2594)
known_failure_modes: [cell-line-misidentification, mc3t3-e1-subclone-variability, proliferation-vs-differentiation-tradeoff, edge-effect-in-scaffold-cell-seeding, HA-autofluorescence-confounds-livedead]
sources: [protocol-2025-sheikh, cellosaurus-mc3t3-e1-subclone4-cvcl5437]
tags: [cell-line, mouse, pre-osteoblast, mineralization, subclone]
created: 2026-04-25
updated: 2026-04-25
---

# MC3T3-E1 Subclone 4 — high-mineralizing pre-osteoblast subclone

## What it is

MC3T3-E1 Subclone 4 is one of the four high-mineralizing subclones (4, 14 vs the low-mineralizing 24, 30) selected by Wang, Chen, Quarles et al. 1999 (PMID 10352097) from the heterogeneous parental [[MC3T3-E1]] population. Under ascorbic acid + 3–4 mM β-glycerophosphate, Subclone 4 cells progress from proliferation through ALP induction to a well-organized, type-I-collagen-templated mineralized ECM in ~10–14 days — substantially more reproducibly than the parental line. It is the cell line invoked when modern bone-TE papers say "MC3T3-E1" without further qualification, and is the line used in the Sheikh 2025 matrix-vesicle isolation protocol ([[../sources/protocol-2025-sheikh-isolation-of-in-vitro-osteoblastic-deriv]]) referenced in this hypothesis.

## Data-integrity note (CRITICAL)

The captured catalog file in `raw/catalogs/` named `cellosaurus-mc3t3-e1-subclone4-cvcl5437.json` is **mislabeled**. Cellosaurus accession **CVCL_5437** is MC3T3-E1 **Subclone 14** (ATCC CRL-2594), not Subclone 4. The canonical Subclone 4 record is:

- **Cellosaurus accession**: **CVCL_5440**
- **ATCC catalog #**: **CRL-2593**

The captured file's contents and source page ([[../sources/cellosaurus-mc3t3-e1-subclone4-cvcl5437]]) are accurate for Subclone 14 — the misnomer is in the *filename*, not the data. The Sheikh 2025 protocol ([[../sources/protocol-2025-sheikh-isolation-of-in-vitro-osteoblastic-deriv]]) is the only source in this hypothesis batch that explicitly invokes Subclone 4. For any future pull, fetch CVCL_5440 directly. Functionally, Subclone 4 and Subclone 14 are similar (both high-mineralizing); the records should not be conflated for STR / lineage tracking.

See [[../failure-modes/cell-line-misidentification]] and [[../failure-modes/mc3t3-e1-subclone-variability]].

## Growth conditions

- **Medium (proliferation)**: α-MEM + 10% FBS + 1% P/S, 37 °C, 5% CO₂.
- **Medium (osteogenic / mineralization)**: α-MEM + 10% FBS + 1% P/S + 50 µg/mL L-ascorbic-acid-2-phosphate + 10 mM β-glycerophosphate (occasionally + 10 nM dexamethasone, though Subclone 4 mineralizes without dex). Switch at confluence.
- **Mineralization timing**: Detectable Alizarin-Red-S–positive nodules from day 10; robust mineralization by day 14–21 ([[../sources/protocol-2025-sheikh-isolation-of-in-vitro-osteoblastic-deriv]]).
- **Subculturing**: trypsinize at ~80% confluence; do not over-confluence in maintenance.
- **STR authentication**: STR profile listed in Cellosaurus (PubMed 37712227 covers MC3T3 family). Authenticate on receipt.

## Why pick Subclone 4 for this hypothesis

- The hypothesis's day-14 proliferation endpoint sits at the proliferation/mineralization transition; Subclone 4's reproducibility makes the transition timing predictable.
- It is the canonical line for the matrix-vesicle / mineralization-readout protocols this hypothesis would draw on.
- For the proliferation primary endpoint specifically, harvest at day 7–10 (still in active proliferation) and use Subclone 4's mineralization onset as a secondary differentiation readout — both come from one plate.

## Common pitfalls

- [[../failure-modes/cell-line-misidentification]] — Subclone 4 vs Subclone 14 confusion is itself a recurring instance. Always cite *both* CVCL accession and ATCC catalog #, never just "MC3T3-E1 subclone 4".
- [[../failure-modes/mc3t3-e1-subclone-variability]] — even within a single subclone, late-passage drift can shift mineralization phenotype; cap at passage ~25.
- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — Subclone 4's strong mineralization tendency means a day-14 proliferation endpoint may capture cells that have already exited the cell cycle.
- [[../failure-modes/edge-effect-in-scaffold-cell-seeding]] — Subclone 4 settles fast under static seeding; for radial-gradient scaffolds, dynamic perfusion or vacuum infiltration is essential to avoid biasing readouts to the outer-pore zone.
- [[../failure-modes/HA-autofluorescence-confounds-livedead]] — pair calcein-AM imaging with PicoGreen DNA quantification.

## Sources

- [[../sources/cellosaurus-mc3t3-e1-subclone4-cvcl5437]] — captured Cellosaurus record. **Note filename misnomer**: the file is for CVCL_5437 (Subclone 14); canonical Subclone 4 = CVCL_5440 / CRL-2593. Use this page for the family context and for the explicit naming-mismatch flag.
- [[../sources/protocol-2025-sheikh-isolation-of-in-vitro-osteoblastic-deriv]] — only source in this hypothesis explicitly using Subclone 4; matrix-vesicle isolation protocol with osteogenic induction (β-glycerophosphate + ascorbic-acid-2-phosphate ± dex).
- [[../sources/cellosaurus-mc3t3-e1-cvcl0409]] — parental-line genealogy and full subclone table; reference for the Wang 1999 (PMID 10352097) characterization.
