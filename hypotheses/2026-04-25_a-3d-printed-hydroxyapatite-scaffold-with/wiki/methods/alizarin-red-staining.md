---
type: method
slug: alizarin-red-staining
aliases: [alizarin-red-S, ARS, calcium-staining]
related_methods: [von-kossa-staining, ALP-activity-assay, spectrophotometric-calcium-assay]
key_reagents: [alizarin-red-S]
known_failure_modes: [ARS-binds-residual-scaffold-HA, proliferation-vs-differentiation-tradeoff]
sources: [2025-conoscenti-continuous-pore-size-gradient-enhances-z, 2022-yang-gaussian-curvature-driven-direction-of-c, 2008-palmer-biomimetic-systems-for-hydroxyapatite-mi, 2014-polo-corrales-scaffold-design-for-bone-regeneration, 2016-murphy-scaffolds-and-cells-for-tissue-regeneration, protocol-2025-amin-murine-osteoblast-and-osteoclast-co-cult, protocol-2025-battistelli-a-quantitative-spectrophotometric-assay]
tags: [mineralization, calcium-stain, late-osteogenic-marker]
created: 2026-04-25
updated: 2026-04-25
---

# Alizarin red S (ARS) staining

## What it measures / produces

Alizarin Red S binds Ca²⁺ ions in mineralised matrix, staining mineralised nodules bright red. Output: qualitative red staining of mineralisation; quantitative via cetylpyridinium chloride extraction and absorbance at 405 nm. Late-stage osteogenic marker (matrix mineralisation, ~day 21–28).

## When to use it

Use ARS at day 21–28 of osteogenic culture to confirm matrix mineralisation. Pair with von Kossa (phosphate, see [[von-kossa-staining]]) for orthogonal confirmation. Standard companion to [[ALP-activity-assay]] (early differentiation) and [[qPCR]] (gene expression).

## Key parameters

- **Working concentration**: 40 mM ARS, pH 4.1–4.3.
- **Incubation**: 10–30 min at RT.
- **Wash**: PBS or DI water until washes are clear.
- **Quantification**: extract with 10% cetylpyridinium chloride (CPC); read at 405 nm or 562 nm.

## Step-level notes

- Critical caveat for HA scaffolds: **ARS binds residual scaffold HA** (calcium phosphate ceramic itself stains red), confounding cell-deposited mineralisation [[../sources/protocol-2025-battistelli-a-quantitative-spectrophotometric-assay]]. Solutions: (a) image cell-free scaffold blanks; (b) use cell-derived calcium quantification (Ca²⁺ ICP-MS on lysate); (c) use osteopontin or OCN immunostaining as an orthogonal mineralisation marker.

## Things to watch for

- [[../failure-modes/ARS-binds-residual-scaffold-HA]] — the dominant confound for HA scaffolds; cell-free scaffold controls are essential.
- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — late-stage ARS signal does not necessarily correlate with day-14 proliferation.

## Sources

- [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] — ARS for mineralisation in osseous-zone region of gradient PLLA scaffolds.
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — ARS on TPMS β-TCP scaffolds.
- [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]] — ARS in HA mineralisation review.
- [[../sources/2014-polo-corrales-scaffold-design-for-bone-regeneration]] — ARS in scaffold-design review.
- [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]] — ARS in scaffold-cell interaction review.
- [[../sources/protocol-2025-amin-murine-osteoblast-and-osteoclast-co-cult]] — ARS in osteoblast-osteoclast co-culture mineralisation readout.
- [[../sources/protocol-2025-battistelli-a-quantitative-spectrophotometric-assay]] — quantitative ARS protocol; explicit warning that ARS binds residual scaffold HA.
