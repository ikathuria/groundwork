---
type: method
slug: MTT-assay
aliases: [MTT, MTT-tetrazolium-assay]
related_methods: [MTS-assay, alamarBlue-proliferation-assay, CCK-8-assay, PicoGreen-DNA-quantification]
key_reagents: [MTT]
known_failure_modes: [HA-autofluorescence-confounds-livedead, proliferation-vs-differentiation-tradeoff]
sources: [2026-thammarakcharoen-comprehensive-toxicological-evaluation-o, 2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone, 2016-murphy-scaffolds-and-cells-for-tissue-regeneration]
tags: [proliferation-assay, metabolic-assay, colorimetric-readout]
created: 2026-04-25
updated: 2026-04-25
---

# MTT proliferation assay

## What it measures / produces

MTT [3-(4,5-dimethylthiazol-2-yl)-2,5-diphenyltetrazolium bromide] is reduced by mitochondrial dehydrogenases to insoluble purple formazan crystals; cells are subsequently lysed (DMSO or acid-isopropanol) to dissolve the formazan, and absorbance is read at 570 nm. Output: absorbance proportional to viable cell number. Older / cheaper than MTS but requires a solubilisation step.

## When to use it

Use MTT for (a) cheap, broadly familiar proliferation readout, (b) when the formazan-precipitate is acceptable in 3D scaffolds (lysis can be challenging in deep pores). [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]] used MTT for hADSCs on PCL/HA gradient scaffolds at day 14 — recorded 243,413 ± 22,484 cells on PCL/HA vs 186,579 ± 14,221 on PCL alone (p = 0.0003).

## Key parameters

- **Working concentration**: 5 mg/mL stock; 1:10 dilution (0.5 mg/mL final) in serum-free medium.
- **Incubation**: 3–4 h at 37 °C until formazan crystals visible.
- **Solubilisation**: DMSO (most common) or acid-isopropanol; agitate gently.
- **Read wavelength**: 570 nm with 630 nm reference subtraction.

## Common variants

- **Standard MTT**.
- **Modified MTT** with overnight crystallisation for low-cell-number sensitivity.

## Things to watch for

- [[../failure-modes/HA-autofluorescence-confounds-livedead]] — porous HA can scatter; blank-subtract.
- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — metabolic-state-dependent.

## Sources

- [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] — MTT in 3DPHA cytotoxicity battery.
- [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]] — MTT for hADSC proliferation on PCL/HA / PCL/TCP / PCL/Bioglass gradient scaffolds; quantitative day-14 effect sizes.
- [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]] — MTT in scaffold-cell interaction reviews.
