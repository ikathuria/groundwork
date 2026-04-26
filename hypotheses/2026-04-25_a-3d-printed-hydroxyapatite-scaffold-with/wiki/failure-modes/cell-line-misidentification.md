---
type: failure-mode
slug: cell-line-misidentification
severity: critical
frequency_estimate: ~10–20% of mouse cell lines are mis-identified per Didion 2014 SNP-array cross-contamination scan
applies_to_methods: [STR-cell-line-authentication, alamarBlue-proliferation-assay, qPCR, ALP-activity-assay, alizarin-red-staining]
applies_to_reagents: [alpha-MEM, DMEM, FBS]
applies_to_step_kinds: [sourcing, banking, QC, claim]
sources: [cellosaurus-mc3t3-e1-cvcl0409, cellosaurus-mc3t3-e1-subclone4-cvcl5437, cellosaurus-saos-2-cvcl0548, cellosaurus-hfob-1-19-cvcl3708]
tags: [cell-authentication, STR, contamination, identity]
created: 2026-04-25
updated: 2026-04-25
---

# Cell line misidentification

## What it is

A cell line in a freezer / from a colleague is not necessarily the cell line on the label. STR (short tandem repeat) profiling shows that a non-trivial fraction of "established" cell lines in research stock are mis-identified or cross-contaminated. For mouse cell lines, Didion et al. 2014 (PMID 25277546) used SNP-arrays to identify widespread cross-contamination. For an HA-scaffold osteoblast study, an "MC3T3-E1" stock that is actually an unrelated mouse fibroblast invalidates every readout.

## How it manifests

- Saos-2 cell stocks have many luciferase / EGFP / KO derivatives (CVCL_T0DV etc.) easily mixed up at the freezer — visible in Cellosaurus children list [[../sources/cellosaurus-saos-2-cvcl0548]].
- MC3T3-E1 has 11 named subclones in Cellosaurus (CVCL_5440 Subclone 4, CVCL_5437 Subclone 14, CVCL_5438 Subclone 24, CVCL_5439 Subclone 30, etc.) with very different mineralization phenotypes — confusion between subclones (or between any subclone and parental CVCL_0409) gives different mineralization data with the same name on the tube [[../sources/cellosaurus-mc3t3-e1-cvcl0409]], [[../sources/cellosaurus-mc3t3-e1-subclone4-cvcl5437]].
- The fetched filename `cellosaurus-mc3t3-e1-subclone4-cvcl5437.json` is itself a misidentification: CVCL_5437 is Subclone 14, not Subclone 4 — Subclone 4 is CVCL_5440. The catalog file exposes the recurring slip [[../sources/cellosaurus-mc3t3-e1-subclone4-cvcl5437]].
- hFOB 1.19: STR profile less commonly run; users assume "human fetal osteoblast" without verification [[../sources/cellosaurus-hfob-1-19-cvcl3708]].
- ATCC has discontinued CRL-2953 (parental MC3T3-E1) — secondary suppliers (DSMZ ACC-210, ECACC 99072810, RIKEN BRC RCB1126) may differ in subclone or passage history [[../sources/cellosaurus-mc3t3-e1-cvcl0409]].
- Saos-2 is well-authenticated by STR but its many derivatives and synonyms (SaOS-2, Saos2, etc.) are easy to swap [[../sources/cellosaurus-saos-2-cvcl0548]].

## How to detect it

- **STR profile on receipt** (and every 6 months / before each major experiment):
  - Saos-2 and human MSCs: standard STR loci (CSF1PO, D5S818, D7S820, D13S317, D16S539, vWA, TH01, TPOX, AMEL); STR profile available via Cellosaurus / ATCC / NIST authentication standard. Low cost (~$50/sample at commercial services like ATCC-AS, IDEXX Bioanalytics).
  - For mouse cell lines: SNP-array authentication (Didion 2014, PMID 25277546) — better than STR for mouse [[../sources/cellosaurus-mc3t3-e1-cvcl0409]].
  - hFOB 1.19: PubMed=37712227 STR profile published; check on receipt [[../sources/cellosaurus-hfob-1-19-cvcl3708]].
- Document and report Cellosaurus accession (CVCL_xxxx) AND ATCC catalog (CRL-xxxx) AND vendor lot in every publication (matching Sheikh 2025 best practice [[../sources/cellosaurus-mc3t3-e1-subclone4-cvcl5437]]).
- Check passage number — late-passage cells (>50) drift even when identity is verified.
- Mycoplasma testing every passage; mycoplasma changes proliferation/differentiation kinetics independent of identity (related but distinct failure mode).

## Mitigation

- **Buy directly from ATCC / DSMZ / ECACC / RIKEN** with named accession; avoid "freezer-finds" or colleague-shared stocks for primary publication.
- For MC3T3-E1: state which subclone (Subclone 4 = CVCL_5440 / ATCC CRL-2593; Subclone 14 = CVCL_5437 / ATCC CRL-2594; parental = CVCL_0409 / ATCC CRL-2953 [discontinued]). Subclone choice matters: Subclones 4 and 14 mineralize quickly under ascorbate + Pi; other subclones don't [[../sources/cellosaurus-mc3t3-e1-subclone4-cvcl5437]].
- For Saos-2: confirm parental CVCL_0548 vs derivative; check synonyms (SaOS-2, SAOS-2, Saos 2) all map to the same CVCL [[../sources/cellosaurus-saos-2-cvcl0548]].
- For hFOB 1.19: confirm CRL-11372 / CVCL_3708; explicitly state passage number; run at 33.5 °C for proliferation experiments [[../sources/cellosaurus-hfob-1-19-cvcl3708]].
- Bank low-passage aliquots (passage ≤ 5 from receipt) for the entire experiment; expand and use only those for the experimental cohort.
- Maintain a cell-line registry (lab-internal): receipt date, vendor, lot, CVCL accession, STR result, passage history, mycoplasma status. Update before every experimental cohort.
- For collaborations: ship aliquots between labs, don't re-source independently — eliminates a common cross-lab divergence.

## Original sources / evidence

- [[../sources/cellosaurus-mc3t3-e1-cvcl0409]] — parental MC3T3-E1 record; ATCC discontinuation; subclone children. Didion 2014 mouse cross-contamination flag.
- [[../sources/cellosaurus-mc3t3-e1-subclone4-cvcl5437]] — naming-mismatch exemplar (CVCL_5437 ≠ Subclone 4); ATCC CRL-2594 for Subclone 14; STR profile available.
- [[../sources/cellosaurus-saos-2-cvcl0548]] — well-authenticated, many derivatives; ATCC HTB-85.
- [[../sources/cellosaurus-hfob-1-19-cvcl3708]] — conditionally-immortalized line; STR profile less commonly run; ATCC CRL-11372.

## Affects

- Methods: [[../methods/STR-cell-line-authentication]], [[../methods/alamarBlue-proliferation-assay]], [[../methods/qPCR]], [[../methods/ALP-activity-assay]], [[../methods/alizarin-red-staining]]
- Reagents: [[../reagents/alpha-MEM]], [[../reagents/DMEM]], [[../reagents/FBS]]
