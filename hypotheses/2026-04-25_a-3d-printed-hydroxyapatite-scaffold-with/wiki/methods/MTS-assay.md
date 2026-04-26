---
type: method
slug: MTS-assay
aliases: [MTS, MTS-tetrazolium-assay, Promega-CellTiter]
related_methods: [MTT-assay, alamarBlue-proliferation-assay, CCK-8-assay, PicoGreen-DNA-quantification]
key_reagents: [MTS]
known_failure_modes: [HA-autofluorescence-confounds-livedead, proliferation-vs-differentiation-tradeoff]
sources: [2026-thammarakcharoen-comprehensive-toxicological-evaluation-o, 2025-conoscenti-continuous-pore-size-gradient-enhances-z]
tags: [proliferation-assay, metabolic-assay, colorimetric-readout]
created: 2026-04-25
updated: 2026-04-25
---

# MTS proliferation assay

## What it measures / produces

MTS [3-(4,5-dimethylthiazol-2-yl)-5-(3-carboxymethoxyphenyl)-2-(4-sulfophenyl)-2H-tetrazolium] is a tetrazolium salt that is reduced by mitochondrial dehydrogenases in metabolically active cells to a coloured formazan that is soluble in culture medium (no solubilisation step needed, unlike MTT). Output: absorbance at 490 nm proportional to viable, metabolically active cells. Equivalent to alamarBlue and MTT as a generic metabolic proliferation readout; MTS is preferred for its single-step, no-wash workflow.

## When to use it

Use MTS when (a) you want a simple, high-throughput colorimetric proliferation readout, (b) MTT-style insoluble formazan would be problematic for porous 3D scaffolds. Used in [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] in 3DPHA biocompatibility battery and [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] for hMSC proliferation on TIPS PLLA gradient scaffolds (more than doubled by day 7).

## Key parameters

- **Reagent**: MTS, typically 5 mg/mL stock; phenazine methosulfate (PMS) electron coupler.
- **Working concentration**: 1:5 dilution into medium (manufacturer protocol).
- **Read wavelength**: 490 nm (formazan absorbance) with 650 nm reference subtraction.
- **Incubation**: 1–4 h at 37 °C.

## Common variants

- **Promega CellTiter 96 AQueous One Solution** — single-bottle MTS+PMS.
- **Older XTT** — similar chemistry, slightly different solubility.

## Things to watch for

- [[../failure-modes/HA-autofluorescence-confounds-livedead]] — porous HA can scatter and shift baseline absorbance; blank-subtract per geometry.
- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — metabolic-state-dependent like alamarBlue; differentiating cells reduce MTS less per cell.

## Sources

- [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] — MTS in 3DPHA cytotoxicity / proliferation battery.
- [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] — MTS for hBMSC proliferation on TIPS PLLA gradient scaffolds; cell counts more than doubled by day 7.
