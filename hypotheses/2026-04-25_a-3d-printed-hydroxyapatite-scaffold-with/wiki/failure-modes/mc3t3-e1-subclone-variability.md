---
type: failure-mode
slug: mc3t3-e1-subclone-variability
severity: high
frequency_estimate: dominant — Wang 1999 documented ≥10× difference in mineralization across subclones 4, 14, 24, 30
applies_to_methods: [STR-cell-line-authentication, alizarin-red-staining, ALP-activity-assay, qPCR, alamarBlue-proliferation-assay, osteogenic-differentiation-induction]
applies_to_reagents: [alpha-MEM, FBS, dexamethasone, beta-glycerophosphate, L-ascorbic-acid-2-phosphate]
applies_to_step_kinds: [sourcing, banking, claim]
sources: [protocol-2025-sheikh, cellosaurus-mc3t3-e1-cvcl0409, cellosaurus-mc3t3-e1-subclone4-cvcl5437]
tags: [MC3T3-E1, subclone, mineralization, heterogeneity]
created: 2026-04-25
updated: 2026-04-25
---

# MC3T3-E1 subclone variability

## What it is

MC3T3-E1 is not a single cell line — it is a parental population (CVCL_0409, ATCC CRL-2953, now discontinued) that was subcloned by Sudo / Wang into 11 named subclones, four of which (4, 14, 24, 30) are commercially distributed. Wang et al. 1999 (PMID 10352097) showed that these subclones differ ≥10× in their mineralization phenotype: Subclones 4 and 14 mineralize rapidly and well in osteogenic medium; Subclone 24 doesn't mineralize without dexamethasone rescue; Subclone 30 barely mineralizes at all. A study reporting "MC3T3-E1" without specifying subclone is uninterpretable for any mineralization or osteogenic-differentiation endpoint.

## How it manifests

- Wang 1999 (PMID 10352097): "MC3T3-E1 subclones display differential mineralization potential" with ≥10× ARS difference between high- and low-mineralizing subclones at day 21 in identical osteogenic medium [[../sources/cellosaurus-mc3t3-e1-cvcl0409]].
- Baba 2000 (PMID 11136541): non-mineralizing subclones can be rescued by dexamethasone — implies "MC3T3-E1 + dexamethasone" performance is subclone-dependent [[../sources/cellosaurus-mc3t3-e1-cvcl0409]].
- The fetched filename `cellosaurus-mc3t3-e1-subclone4-cvcl5437.json` is itself an error: CVCL_5437 is Subclone 14 (ATCC CRL-2594), not Subclone 4 (CVCL_5440 / ATCC CRL-2593). Sheikh 2025 used Subclone 4 [[../sources/protocol-2025-sheikh-isolation-of-in-vitro-osteoblastic-deriv]], [[../sources/cellosaurus-mc3t3-e1-subclone4-cvcl5437]].
- Sheikh 2025 explicitly chose Subclone 4 specifically for its mineralization competence; matrix-vesicle yield differs by subclone [[../sources/protocol-2025-sheikh-isolation-of-in-vitro-osteoblastic-deriv]].
- Parental MC3T3-E1 (CVCL_0409) is heterogeneous; "MC3T3-E1" in many older HA-scaffold papers refers to parental, where mineralization is partial and slow [[../sources/cellosaurus-mc3t3-e1-cvcl0409]].
- ATCC has discontinued CRL-2953 (parental); secondary suppliers (DSMZ ACC-210, ECACC 99072810, RIKEN BRC RCB1126) may have different subclone populations or passage histories.

## How to detect it

- **Verify subclone identity** by Cellosaurus accession AND ATCC catalog AND STR profile (PubMed 37712227) on receipt:
  - Subclone 4 = CVCL_5440 = ATCC CRL-2593
  - Subclone 14 = CVCL_5437 = ATCC CRL-2594
  - Subclone 24 = CVCL_5438
  - Subclone 30 = CVCL_5439
  - Parental = CVCL_0409 = ATCC CRL-2953 (discontinued)
- Run a "ground-truth" mineralization assay before the scaffold experiment: seed 5 × 10⁴ cells per well of 24-well TCP, induce with osteogenic medium (50 μg/mL ascorbate-2-P, 10 mM β-GP, 100 nM dex), stain with ARS at day 14 and day 21. Mineralization should be visible by day 14 (Subclone 4 / 14) or absent (Subclone 30) — confirms identity.
- Check published phenotype against your data: Subclone 4 should give >50% confluent mineralized matrix by day 21 in standard osteogenic medium. If it doesn't, the line has drifted, has been mis-shipped, or has lost mineralization capacity due to passage / mycoplasma [[../sources/cellosaurus-mc3t3-e1-subclone4-cvcl5437]].
- Compare proliferation rate at day 4 in expansion medium: parental and subclones differ by 20–40% in doubling time.

## Mitigation

- **Always state subclone explicitly** as Subclone-N (CVCL_xxxx) (ATCC CRL-xxxx) in protocols, manuscripts, and publications. "MC3T3-E1" alone is insufficient.
- For the proposed HA-scaffold proliferation hypothesis: Subclone 4 (CVCL_5440 / ATCC CRL-2593) is the conventional choice — fast proliferating, well-mineralizing, widely used in the literature [[../sources/protocol-2025-sheikh-isolation-of-in-vitro-osteoblastic-deriv]].
- Bank low-passage aliquots (≤ passage 5 from receipt) for the entire experimental cohort.
- Avoid mixing subclones across groups; subclone-driven mineralization differences will dominate any scaffold-architecture effect.
- If a "non-mineralizing" subclone is in use, document and note that mineralization depends on dexamethasone induction at a higher concentration; otherwise the proliferation/differentiation trade-off [[../failure-modes/proliferation-vs-differentiation-tradeoff]] looks different.
- Run an STR (or, better for mouse, SNP-array Didion 2014) profile on each new lot from secondary suppliers (DSMZ, ECACC, RIKEN BRC); cross-supplier subclone identity is not guaranteed [[../sources/cellosaurus-mc3t3-e1-cvcl0409]].
- Note ATCC CRL-2953 discontinuation: if parental is required, pivot to DSMZ ACC-210 with explicit STR/subclone verification.

## Original sources / evidence

- [[../sources/cellosaurus-mc3t3-e1-cvcl0409]] — parental record; explicit Wang 1999 + Baba 2000 citations on subclone heterogeneity; ATCC discontinuation note; Cellosaurus children list.
- [[../sources/cellosaurus-mc3t3-e1-subclone4-cvcl5437]] — naming-mismatch exemplar; CVCL accessions for each subclone; Subclone-14 mineralization phenotype (rapid in ascorbate + 3–4 mM Pi).
- [[../sources/protocol-2025-sheikh-isolation-of-in-vitro-osteoblastic-deriv]] — protocol explicitly selects Subclone 4 for mineralization competence; matrix-vesicle yield differs by subclone.

## Affects

- Methods: [[../methods/STR-cell-line-authentication]], [[../methods/alizarin-red-staining]], [[../methods/ALP-activity-assay]], [[../methods/qPCR]], [[../methods/alamarBlue-proliferation-assay]], [[../methods/osteogenic-differentiation-induction]]
- Reagents: [[../reagents/alpha-MEM]], [[../reagents/FBS]], [[../reagents/dexamethasone]], [[../reagents/beta-glycerophosphate]], [[../reagents/L-ascorbic-acid-2-phosphate]]
