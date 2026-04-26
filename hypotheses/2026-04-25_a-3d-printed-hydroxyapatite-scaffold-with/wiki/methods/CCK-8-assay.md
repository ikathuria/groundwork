---
type: method
slug: CCK-8-assay
aliases: [CCK-8, WST-8-assay, cell-counting-kit-8, Dojindo-CCK]
related_methods: [MTS-assay, MTT-assay, alamarBlue-proliferation-assay, PicoGreen-DNA-quantification]
key_reagents: []
known_failure_modes: [HA-autofluorescence-confounds-livedead, proliferation-vs-differentiation-tradeoff]
sources: []
tags: [proliferation-assay, metabolic-assay, canonical-alternative]
created: 2026-04-25
updated: 2026-04-25
---

# CCK-8 (Cell Counting Kit-8) assay

## What it measures / produces

CCK-8 uses WST-8 [2-(2-methoxy-4-nitrophenyl)-3-(4-nitrophenyl)-5-(2,4-disulfophenyl)-2H-tetrazolium], a tetrazolium salt that is reduced by mitochondrial dehydrogenases to a water-soluble orange formazan. Output: absorbance at 450 nm proportional to viable cell number. Single-step, no-wash workflow analogous to MTS but with higher sensitivity and lower cytotoxicity.

## When to use it

Use CCK-8 as a CCK-equivalent alternative to MTS / alamarBlue when those reagents are unavailable. **Note**: no source in this hypothesis's `raw/` directly cites CCK-8 measurements; this page exists for completeness as a canonical alternative listed in the vocabulary.

## Key parameters

- **Working concentration**: 1:10 dilution in medium (manufacturer protocol).
- **Read wavelength**: 450 nm with 650 nm reference subtraction.
- **Incubation**: 1–4 h.

## Common variants

- **Dojindo CCK-8** — original commercial source.
- **Generic WST-8 reagent** — bulk version.

## Things to watch for

- [[../failure-modes/HA-autofluorescence-confounds-livedead]] — porous HA can scatter; blank-subtract.
- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — metabolic-state-dependent.

## Sources

(No direct mentions in the present hypothesis's source set; canonical alternative to MTS / alamarBlue / MTT.)
