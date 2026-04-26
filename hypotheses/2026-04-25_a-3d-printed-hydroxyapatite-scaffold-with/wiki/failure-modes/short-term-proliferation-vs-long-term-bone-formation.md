---
type: failure-mode
slug: short-term-proliferation-vs-long-term-bone-formation
severity: high
frequency_estimate: dominant — early proliferation peaks (day 7) routinely fail to predict mineralization (day 28+) or bone in-growth
applies_to_methods: [PicoGreen-DNA-quantification, alamarBlue-proliferation-assay, MTT-assay, alizarin-red-staining, ALP-activity-assay, in-vivo-calvarial-defect-model, in-vivo-femoral-defect-model, micro-CT-bone-volume-quantification]
applies_to_reagents: [hydroxyapatite, beta-tricalcium-phosphate, biphasic-calcium-phosphate, dexamethasone, beta-glycerophosphate, L-ascorbic-acid-2-phosphate]
applies_to_step_kinds: [culture, time-course, sampling, claim]
sources: [2013-henkel, 2021-montoya, 2025-de-carvalho, 2025-qi, 2018-zhang, 2013-loh, 2010-murphy, crossref-retraction-10-3892-mmr-2025-13519, crossref-retraction-10-1016-j-lfs-2020-118038, crossref-retraction-10-1155-2024-9893086]
tags: [time-course, proliferation, bone-formation, endpoint-selection]
created: 2026-04-25
updated: 2026-04-25
---

# Short-term proliferation vs long-term bone formation

## What it is

The in-vitro proliferation winner at day 7 frequently is *not* the mineralization winner at day 28, and the day-28 mineralization winner is not necessarily the in-vivo bone-formation winner at 8 weeks. Early proliferative supremacy can come from diffusion-limited surface growth that exhausts before differentiation occurs; late mineralization can come from cells that proliferated less but differentiated more efficiently. Picking a single day-14 endpoint in an osteogenesis study smuggles a methodological choice into the conclusion.

## How it manifests

- Murphy & O'Brien 2010: at 48 h, 96 μm pores have *highest* cell number; by day 7, 325 μm pores have highest. Same scaffold series, opposite winner depending on time point [[../sources/2010-murphy-understanding-the-effect-of-mean-pore-size-on]].
- de Carvalho 2025: CPC/MBG beats CPC at day 3–7 on DNA/cell viability; CPC/MBG beats CPC on COL1A1/RUNX2/OCN at day 14 — but if only day 14 DNA were measured, the trend may attenuate as cells exit proliferation [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]].
- Qi 2025: proliferation curves cross between groups between day 7 and day 14 — selecting day 7 vs day 14 as the primary endpoint changes which scaffold "wins" [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]].
- Retraction signal: the BioMed Research International "Sr/Chitosan/HA/Norcantharidin" paper claimed simultaneous osteosarcoma inhibition + osteogenic promotion based on short-term in-vitro endpoints — retracted, classic short-term over-claim [[../sources/crossref-retraction-10-1155-2024-9893086]].
- The Spandidos retraction (10.3892/mmr.2020.11352, retracted 2025-04-07 by 10.3892/mmr.2025.13519) layered "mitochondria → osteogenesis" mechanism onto early differentiation outcomes; mechanistic over-extension on short-term data is a recurring retraction pattern [[../sources/crossref-retraction-10-3892-mmr-2025-13519]].
- The Oryan 2020 PLA/PCL/HA + MSC rat radial defect paper was retracted 2 weeks after publication: bone-volume claims at short time points outran the actual histology [[../sources/crossref-retraction-10-1016-j-lfs-2020-118038]].

## How to detect it

- **Multi-time-point time course**: minimum days 1, 4, 7, 14, 21 (and 28 if budget allows). Fit a kinetic model (logistic growth + linear differentiation) per group; compare full curves with mixed-effects model rather than single-time-point t-test.
- Track proliferation marker (Ki67) AND DNA content AND ALP AND OCN AND ARS at each time point — all five ride different time courses.
- For in-vivo: minimum two time points per defect model (e.g., 4 and 12 weeks calvarial; 4 and 12 weeks femoral); single-time-point in-vivo claims are systematically suspect [[../sources/2013-henkel-bone-regeneration-based-on-tissue-engine]].
- Pre-register endpoint and analysis (the proposed hypothesis specifies day 14 — keep it primary, day 7 and day 21 secondary).
- Sanity-check against the literature kinetics: HA-scaffold proliferation typically peaks day 7, plateaus day 14, mineralization onset day 14–21, mature mineralization day 28+ for MC3T3-E1 in osteogenic medium [[../sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]], [[../sources/2010-murphy-understanding-the-effect-of-mean-pore-size-on]].

## Mitigation

- Run the **full time course** (≥ 4 time points) regardless of budget pressure to cut to a single day-14 readout. Single-time-point experiments cannot test a proliferation hypothesis robustly [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]].
- Stage proliferation (no osteogenic supplement) and differentiation (with supplements) experiments in separate culture arms [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]].
- For long-term claims: pair in-vitro day-28 mineralization with at least one in-vivo time point [[../sources/2013-henkel-bone-regeneration-based-on-tissue-engine]], [[../sources/2021-montoya-on-the-road-to-smart-biomaterials-for-bo]].
- Publish full time-course data even when only day 14 is the primary endpoint — reviewers / Pass-3 readers can independently re-test alternative endpoints from the data.
- Don't claim "promotes osteogenesis" on basis of ALP at day 7 alone — ALP precedes mineralization by 7–14 days [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]], [[../sources/2010-murphy-understanding-the-effect-of-mean-pore-size-on]].

## Original sources / evidence

- [[../sources/2010-murphy-understanding-the-effect-of-mean-pore-size-on]] — explicit pore-size winner inversion between 48 h and 7 d.
- [[../sources/2013-henkel-bone-regeneration-based-on-tissue-engine]] — translational time-course framework.
- [[../sources/2021-montoya-on-the-road-to-smart-biomaterials-for-bo]] — modern review on time-course endpoint selection.
- [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] — paired short-term proliferation + late differentiation readouts.
- [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]] — group cross-over between time points.
- [[../sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]], [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]] — pore-architecture vs time-course discussion.
- [[../sources/crossref-retraction-10-3892-mmr-2025-13519]] — retraction with short-term mechanistic over-claim pattern.
- [[../sources/crossref-retraction-10-1016-j-lfs-2020-118038]] — short-time-point in-vivo claim retracted.
- [[../sources/crossref-retraction-10-1155-2024-9893086]] — short-term dual-action over-claim retracted.

## Affects

- Methods: [[../methods/PicoGreen-DNA-quantification]], [[../methods/alamarBlue-proliferation-assay]], [[../methods/MTT-assay]], [[../methods/alizarin-red-staining]], [[../methods/ALP-activity-assay]], [[../methods/in-vivo-calvarial-defect-model]], [[../methods/in-vivo-femoral-defect-model]], [[../methods/micro-CT-bone-volume-quantification]]
- Reagents: [[../reagents/hydroxyapatite]], [[../reagents/beta-tricalcium-phosphate]], [[../reagents/biphasic-calcium-phosphate]], [[../reagents/dexamethasone]], [[../reagents/beta-glycerophosphate]], [[../reagents/L-ascorbic-acid-2-phosphate]]
