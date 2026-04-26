---
type: method
slug: qPCR
aliases: [quantitative-PCR, real-time-PCR, qRT-PCR, RT-qPCR]
related_methods: [RT-PCR, western-blot, ELISA, osteogenic-differentiation-induction]
key_reagents: []
known_failure_modes: [proliferation-vs-differentiation-tradeoff, donor-variability-hMSC]
sources: [2024-wang-polydopamine-functionalized-calcium-defi, 2025-de-carvalho-three-dimensional-printing-of-calcium-ph, 2025-qi-3d-printed-bioceramic-scaffolds-for-bone, 2025-conoscenti-continuous-pore-size-gradient-enhances-z, 2022-yang-gaussian-curvature-driven-direction-of-c, 2021-montoya-on-the-road-to-smart-biomaterials-for-bo, 2026-daghrery-advances-in-3d-printed-scaffolds-for-per]
tags: [gene-expression, qPCR, osteogenic-markers]
created: 2026-04-25
updated: 2026-04-25
---

# Quantitative real-time PCR (qPCR / qRT-PCR)

## What it measures / produces

qPCR quantifies cDNA transcript levels by amplifying with gene-specific primers and measuring fluorescence (SYBR Green or TaqMan probe) in real time. Combined with reverse transcription (RT-qPCR) on mRNA, output is relative or absolute gene expression. Standard tool for osteogenic differentiation markers: RUNX2, OCN (BGLAP), COL1A1, ALP, OPN, BSP.

## When to use it

Use qPCR for (a) early osteogenic differentiation profiling (RUNX2, COL1A1) at day 7, (b) mid-stage markers (ALP, OPN) at day 14, (c) late-stage markers (OCN, BSP) at day 21–28. Standard panel across [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]], [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]], [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]], [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]].

## Key parameters

- **Reference gene**: GAPDH or β-actin standard; verify stability with multiple references.
- **Primer concentration**: 200–500 nM final.
- **TaqMan vs SYBR Green**: TaqMan more specific (probe-based); SYBR cheaper.
- **ΔΔCt analysis**: relative quantification vs control + reference gene.
- **Effect-size example**: CPC/MBG vs CPC at day 14 — significant upregulation of COL1A1, OCN, RUNX2 (p < 0.05) on hBMSCs [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]].

## Common variants

- **SYBR Green** — cheaper, requires melt-curve validation.
- **TaqMan probes** — more specific, allows multiplexing.
- **Digital PCR (dPCR)** — absolute quantification, no standard curve.

## Step-level notes

- RNA extraction: TRIzol or column-based; verify integrity by RIN.
- Reverse transcription: random hexamers or oligo-dT primers.
- Always include no-RT and no-template controls.

## Things to watch for

- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — high RUNX2/OCN does not guarantee long-term bone formation; pair with mineralisation assays.
- [[../failure-modes/donor-variability-hMSC]] — primary hMSC gene expression varies across donors; pool ≥3 donors.

## Sources

- [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] — qPCR for ALP, RUNX2, OPN on gradient CDHA scaffolds.
- [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] — qRT-PCR for COL1A1, OCN, RUNX2 at day 14 on CPC/MBG scaffolds (TaqMan, GAPDH normalisation).
- [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]] — qPCR in bioceramic-scaffold reviews.
- [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] — qPCR for SOX9, ACAN, COL2 (chondrogenic) and RUNX2, BSP2, OPN (osteogenic) on TIPS PLLA gradient scaffolds.
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — qPCR for RUNX2 / VEGF on TPMS β-TCP scaffolds.
- [[../sources/2021-montoya-on-the-road-to-smart-biomaterials-for-bo]] — qPCR in smart-biomaterial differentiation evaluation.
- [[../sources/2026-daghrery-advances-in-3d-printed-scaffolds-for-per]] — qPCR in periodontal scaffold characterisation.
