---
type: failure-mode
slug: sintering-shrinkage-pore-deviation
severity: medium
frequency_estimate: dominant — 15–25% linear shrinkage of HA scaffolds at 1200–1300 °C is the rule, not the exception
applies_to_methods: [ceramic-sintering, binder-jet-3D-printing, DLP-vat-photopolymerization, robocasting-direct-ink-writing, slurry-preparation-for-DLP, debinding-thermal-treatment, micro-CT-imaging]
applies_to_reagents: [hydroxyapatite, beta-tricalcium-phosphate, biphasic-calcium-phosphate, calcium-deficient-hydroxyapatite]
applies_to_step_kinds: [scaffold-prep, sintering, debinding, QC]
sources: [2012-bose, 2014-thavornyutikarn, 2015-baino, 2015-chia, 2015-do, 2015-ishack, 2020-wang, 2025-de-carvalho, 2017-bose, 2020-garot, 2025-tang, 2026-liu, 2025-xie]
tags: [sintering, shrinkage, pore-fidelity, CAD-to-physical, scaffold-prep]
created: 2026-04-25
updated: 2026-04-25
---

# Sintering shrinkage causing pore-size deviation from CAD

## What it is

Densification during high-temperature sintering of green-state HA scaffolds removes residual porosity in the strut microstructure, shrinking the part isotropically by typically 15–25% linear (~30–55% volumetric) at peak temperatures of 1200–1300 °C. This shrinks every CAD-specified pore correspondingly: a 100 μm CAD pore becomes ~75–85 μm post-sinter; a 500 μm CAD pore becomes ~375–425 μm. Without compensation in the design phase, the entire scaffold is "off by one bin" relative to the literature pore-size optima — and the gradient endpoints can drift below the 100 μm AM resolution floor.

## How it manifests

- μCT-measured post-sinter pore size systematically smaller than CAD by 15–25% — observed across binder-jet, DLP-slurry, and robocasted HA [[../sources/2017-bose-additive-manufacturing-of-biomaterials]].
- Strut diameter shrinkage anisotropy: vertical-stacked struts shrink slightly more than horizontal because gravity contributes to densification along z; visible in sectioned μCT [[../sources/2017-bose-additive-manufacturing-of-biomaterials]], [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]].
- Curling and warping of large flat scaffolds at corners (>10 mm) when shrinkage exceeds ~12%; "HA loading should be as high as possible to reduce cracking and warping during sintering" [[../sources/2017-bose-additive-manufacturing-of-biomaterials]].
- Loss of small features: CAD pores < 80 μm are typically obliterated entirely during sintering; AM-route resolution floor is ~100 μm post-sinter even when pre-sinter is finer [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] ("it is impossible to print features of size below 100 μm").
- Inadequate solvent exchange or non-ideal freezing trajectories in low-temperature deposition manufacturing (LDM, an alternative route) cause "residual solvent, shrinkage, or pore collapse" [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]].

## How to detect it

- **Run a calibration scaffold every batch**: print and sinter a test cube with 100, 200, 300, 400, 500, 600 μm CAD pores; measure each by μCT post-sinter; compute pore-by-pore linear shrinkage factor S = d_post/d_CAD. Report mean ± SD; expected 0.75–0.85.
- After sintering the actual experimental scaffold, μCT at ≤ 10 μm voxel resolution and report (a) measured pore-size distribution histogram, (b) overall porosity by gas pycnometer or μCT thresholding, (c) interconnectivity (% pores connected to surface) [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]], [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]].
- Caliper/dimensional check on the scaffold's outer envelope (compare to CAD) — if dimensions disagree with μCT shrinkage factor, sintering is non-uniform.
- Compare gas-pycnometer porosity to μCT-thresholded porosity — disagreement >5% suggests closed pores from sintering merge.

## Mitigation

- **Pre-compensate CAD by the measured shrinkage factor**: design CAD pore at d_CAD = d_target / S, where S ≈ 0.80 for typical HA at 1250 °C. For a 500 μm target, CAD = 625 μm; for a 100 μm target (already at the AM resolution floor), CAD = 125 μm and accept that very small pores may collapse.
- **Calibrate S per powder lot, per slurry / binder formulation, per sintering schedule** — shrinkage factor is not transferable between batches.
- Maximise HA solid loading in slurry / paste — Bose 2017: 60–70 wt% HA in DLP slurry minimizes shrinkage and warping vs 40–50 wt% [[../sources/2017-bose-additive-manufacturing-of-biomaterials]].
- Use isotropic scaffold design (TPMS, gyroid) so shrinkage anisotropy cancels.
- Two-step sintering schedule (debind at 600 °C, dwell, then ramp to 1250 °C) reduces residual solvent and minimizes pore-collapse from rapid heating [[../sources/2017-bose-additive-manufacturing-of-biomaterials]], [[../sources/2020-garot-additive-manufacturing-of-material-scaff]].
- Microwave sintering reduces dwell time and shrinkage variability vs conventional [[../sources/2017-bose-additive-manufacturing-of-biomaterials]].
- For non-sintering routes: use binder-jet + low-T calcium-sulfate transformation (Thammarakcharoen 2026) which avoids high-T shrinkage entirely [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] (cross-hypothesis); or use DIW with self-setting cement chemistry (de Carvalho 2025) [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]].
- Always μCT post-sinter and report measured (not designed) pore size in publications.

## Original sources / evidence

- [[../sources/2017-bose-additive-manufacturing-of-biomaterials]] — high HA loading, microwave sintering, shrinkage-vs-density curves.
- [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] — "<100 μm impossible"; sintering shrinkage flagged.
- [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]] — solvent exchange / freezing trajectory shrinkage in LDM.
- [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] — direct-ink-writing shrinkage / dimensional fidelity discussion.
- [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]], [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]], [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]], [[../sources/2015-chia-recent-advances-in-3d-printing-of-biomat]], [[../sources/2015-do-3d-printing-of-scaffolds-for-tissue-rege]], [[../sources/2020-wang-3d-printing-of-bone-tissue-engineering-s]], [[../sources/2012-bose-recent-advances-in-bone-tissue-engineeri]], [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]], [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]] — review-level discussion of sintering and dimensional fidelity.

## Affects

- Methods: [[../methods/ceramic-sintering]], [[../methods/binder-jet-3D-printing]], [[../methods/DLP-vat-photopolymerization]], [[../methods/robocasting-direct-ink-writing]], [[../methods/slurry-preparation-for-DLP]], [[../methods/debinding-thermal-treatment]], [[../methods/micro-CT-imaging]]
- Reagents: [[../reagents/hydroxyapatite]], [[../reagents/beta-tricalcium-phosphate]], [[../reagents/biphasic-calcium-phosphate]], [[../reagents/calcium-deficient-hydroxyapatite]]
