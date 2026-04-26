---
type: method
slug: spectrophotometric-calcium-assay
aliases: [Ca2+-quantification, OCPC-calcium-assay, alizarin-extraction-quantification]
related_methods: [alizarin-red-staining, ICP-MS, ALP-activity-assay]
key_reagents: [alizarin-red-S, PBS]
known_failure_modes: [ARS-binds-residual-scaffold-HA]
sources: [2015-ishack-bone-regeneration-in-critical-bone-defec, protocol-2025-battistelli-a-quantitative-spectrophotometric-assay]
tags: [mineralization-quantification, calcium, spectrophotometric]
created: 2026-04-25
updated: 2026-04-25
---

# Spectrophotometric calcium assay

## What it measures / produces

Quantitative readout of cell-deposited Ca²⁺ in mineralised matrix, by either (a) ARS extraction with cetylpyridinium chloride and absorbance at 405–562 nm, or (b) o-cresolphthalein complexone (OCPC) Ca²⁺ assay on acid-extracted samples. Output: μg or mmol Ca²⁺ per scaffold, normalised to total protein or DNA.

## When to use it

Use when qualitative ARS staining is insufficient and quantitative comparison across scaffolds is needed. Critical caveat for HA scaffolds: residual HA confounds the read, so cell-free scaffold blanks are mandatory.

## Step-level notes

- Cell-free scaffold blanks essential to subtract residual HA Ca²⁺ contribution [[../sources/protocol-2025-battistelli-a-quantitative-spectrophotometric-assay]].
- For ARS-extraction: 10% CPC, agitate 30 min, read at 405 or 562 nm.
- For OCPC: acid-extract samples, react with OCPC + 8-hydroxyquinoline, read at 575 nm.

## Things to watch for

- [[../failure-modes/ARS-binds-residual-scaffold-HA]] — the dominant confound; cell-free blanks are non-negotiable.

## Sources

- [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]] — calcium quantification in critical-defect studies.
- [[../sources/protocol-2025-battistelli-a-quantitative-spectrophotometric-assay]] — Bio-protocol for quantitative ARS-extraction Ca²⁺ assay; explicit warning about HA scaffold confound.
