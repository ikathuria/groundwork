---
type: method
slug: STR-cell-line-authentication
aliases: [short-tandem-repeat-profiling, STR-profiling, cell-line-authentication]
related_methods: []
key_reagents: []
known_failure_modes: [cell-line-misidentification, mc3t3-e1-subclone-variability]
sources: [cellosaurus-mc3t3-e1-cvcl0409, cellosaurus-mc3t3-e1-subclone4-cvcl5437, cellosaurus-saos-2-cvcl0548, cellosaurus-hfob-1-19-cvcl3708]
tags: [QC, cell-line-validation, NEW]
created: 2026-04-25
updated: 2026-04-25
---

# STR cell-line authentication

## What it measures / produces

Short tandem repeat (STR) profiling of polymorphic loci on cell-line genomic DNA produces a unique fingerprint that can be matched against the originating-stock STR profile (Cellosaurus, ATCC). Output: identity confirmation or detection of cross-contamination / drift.

## When to use it

Authenticate every cell line before publication and re-authenticate after long passage / suspected contamination. Cellosaurus records (e.g., MC3T3-E1 CVCL_0409, Saos-2 CVCL_0548, hFOB 1.19 CVCL_3708) include reference STR profiles for comparison.

## Things to watch for

- [[../failure-modes/cell-line-misidentification]] — major reproducibility risk; STR is the gold-standard countermeasure.
- [[../failure-modes/mc3t3-e1-subclone-variability]] — STR distinguishes MC3T3-E1 parental (CVCL_0409) from Subclone 4 (CVCL_5440) and Subclone 14 (CVCL_5437).

## Sources

- [[../sources/cellosaurus-mc3t3-e1-cvcl0409]] — MC3T3-E1 reference Cellosaurus record with STR profile.
- [[../sources/cellosaurus-mc3t3-e1-subclone4-cvcl5437]] — MC3T3-E1 Subclone 4 (note: filename mismatch — captured record is CVCL_5437 = Subclone 14).
- [[../sources/cellosaurus-saos-2-cvcl0548]] — Saos-2 Cellosaurus reference.
- [[../sources/cellosaurus-hfob-1-19-cvcl3708]] — hFOB 1.19 Cellosaurus reference.
