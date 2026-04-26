---
type: method
slug: SEM-imaging
aliases: [SEM, scanning-electron-microscopy, FE-SEM]
related_methods: [EDX-spectroscopy, TEM-imaging, micro-CT-imaging, mercury-intrusion-porosimetry]
key_reagents: [hydroxyapatite, beta-tricalcium-phosphate]
known_failure_modes: [cad-vs-actual-pore-size-mismatch, sintering-shrinkage-pore-deviation]
sources: [2008-chan-scaffolding-in-tissue-engineering-general-approaches, 2015-ishack-bone-regeneration-in-critical-bone-defec, 2017-eliaz-calcium-phosphate-bioceramics-a-review-o, 2020-wang-3d-printing-of-bone-tissue-engineering-s, 2024-wang-polydopamine-functionalized-calcium-defi, 2026-thammarakcharoen-comprehensive-toxicological-evaluation-o, 2025-de-carvalho-three-dimensional-printing-of-calcium-ph, 2025-qi-3d-printed-bioceramic-scaffolds-for-bone, 2018-zhang-effect-of-microporosity-on-scaffolds-for, 2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity, 2019-chocholata-fabrication-of-scaffolds-for-bone-tissue, 2021-montoya-on-the-road-to-smart-biomaterials-for-bo, 2023-koushik-bone-tissue-engineering-scaffolds-functi, 2026-daghrery-advances-in-3d-printed-scaffolds-for-per, 2012-amini-bone-tissue-engineering-recent-advances, 2012-bose-recent-advances-in-bone-tissue-engineeri, 2013-henkel-bone-regeneration-based-on-tissue-engine, 2014-polo-corrales-scaffold-design-for-bone-regeneration, 2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp, 2015-baino-bioceramics-and-scaffolds-a-winning-comb, 2015-chia-recent-advances-in-3d-printing-of-biomat, 2015-do-3d-printing-of-scaffolds-for-tissue-rege, 2017-gao-bone-biomaterials-and-interactions-with, 2016-murphy-scaffolds-and-cells-for-tissue-regeneration, 2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone, 2025-conoscenti-continuous-pore-size-gradient-enhances-z, 2022-yang-gaussian-curvature-driven-direction-of-c, 2025-lee-pcl-scaffold-with-well-defined-hierarchi, 2008-palmer-biomimetic-systems-for-hydroxyapatite-mi, protocol-2025-battistelli-a-quantitative-spectrophotometric-assay, protocol-2025-sheikh-isolation-of-in-vitro-osteoblastic-deriv]
tags: [imaging, surface-morphology, characterization]
created: 2026-04-25
updated: 2026-04-25
---

# Scanning electron microscopy (SEM) imaging

## What it measures / produces

SEM produces high-resolution surface-morphology images by scanning a focused electron beam over the sample and detecting secondary or back-scattered electrons. Output: 2D images with topographic / compositional contrast at nm to μm scale. Common companion technique to EDX (elemental composition, see [[EDX-spectroscopy]]) on the same instrument. For HA scaffolds, SEM is the standard tool for verifying surface morphology, strut microstructure, cell adhesion / spreading, and apatite-layer formation.

## When to use it

Use SEM (a) for as-built scaffold morphology after sintering (strut surface roughness, micropores, gradient transition zones), (b) for cell morphology on scaffold surfaces (spreading, lamellipodia, contact guidance), (c) paired with EDX for elemental verification (Ca/P ratio, Si presence in MBG composites), (d) for apatite-layer formation tracking (Ca + P enrichment over culture time). Used in nearly every source page for the present hypothesis.

## Key parameters

- **Accelerating voltage**: 5–20 kV; lower for biological samples to reduce charging.
- **Coating**: Au / Au-Pd / C sputter-coating for non-conducting ceramic and biological samples.
- **Resolution**: ~1–10 nm (FE-SEM); ~10–100 nm (W filament).
- **Magnification**: 50–100,000×.
- **Surface roughness**: PCL/HA scaffolds with PDA coating: ~10 μm bare → ~20 μm with intermediate PDA → re-smoothing at higher PDA [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]].

## Common variants

- **Conventional W-filament SEM**.
- **FE-SEM** (field-emission SEM) — higher resolution, used for fine cell morphology / mineralised matrix.
- **Variable-pressure / environmental SEM** — for hydrated biological samples without coating.
- **Cryo-SEM** — frozen samples for hydrogel structure preservation.

## Step-level notes

- For cell/scaffold imaging: fix in 2–4% glutaraldehyde, dehydrate in graded ethanol, critical-point dry, sputter-coat.
- For ceramic-only: just sputter-coat (avoiding chemical fixation / dehydration).
- Combine with EDX point/area/map analysis for composition.
- For apatite-layer detection (Ca + P enrichment over time): map Ca and P intensity vs day 0 [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]].

## Things to watch for

- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — SEM gives 2D verification of feature sizes; pair with μCT for 3D verification.
- [[../failure-modes/sintering-shrinkage-pore-deviation]] — SEM of pre/post-sintering reveals shrinkage.

## Sources

(Used throughout the literature; 30+ citing sources listed in frontmatter.)

- [[../sources/2008-chan-scaffolding-in-tissue-engineering-general-approaches]], [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]], [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]], [[../sources/2020-wang-3d-printing-of-bone-tissue-engineering-s]], [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]], [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]], [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]], [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]], [[../sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]], [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]], [[../sources/2019-chocholata-fabrication-of-scaffolds-for-bone-tissue]], [[../sources/2021-montoya-on-the-road-to-smart-biomaterials-for-bo]], [[../sources/2023-koushik-bone-tissue-engineering-scaffolds-functi]], [[../sources/2026-daghrery-advances-in-3d-printed-scaffolds-for-per]], [[../sources/2012-amini-bone-tissue-engineering-recent-advances]], [[../sources/2012-bose-recent-advances-in-bone-tissue-engineeri]], [[../sources/2013-henkel-bone-regeneration-based-on-tissue-engine]], [[../sources/2014-polo-corrales-scaffold-design-for-bone-regeneration]], [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]], [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]], [[../sources/2015-chia-recent-advances-in-3d-printing-of-biomat]], [[../sources/2015-do-3d-printing-of-scaffolds-for-tissue-rege]], [[../sources/2017-gao-bone-biomaterials-and-interactions-with]], [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]], [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]], [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]], [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]], [[../sources/2025-lee-pcl-scaffold-with-well-defined-hierarchi]], [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]], [[../sources/protocol-2025-battistelli-a-quantitative-spectrophotometric-assay]], [[../sources/protocol-2025-sheikh-isolation-of-in-vitro-osteoblastic-deriv]] — all use SEM as routine morphological / cell-spreading characterisation.
