---
type: failure-mode
slug: cad-vs-actual-pore-size-mismatch
severity: medium
frequency_estimate: dominant — every AM route shows ≥10% deviation between CAD and as-printed/post-sintered pore size
applies_to_methods: [3D-printing-stereolithography, DLP-vat-photopolymerization, robocasting-direct-ink-writing, binder-jet-3D-printing, fused-deposition-modeling, selective-laser-sintering, inkjet-3D-printing, extrusion-based-3D-printing, two-photon-polymerization, ceramic-sintering, micro-CT-imaging, gradient-pore-design, TPMS-scaffold-design]
applies_to_reagents: [hydroxyapatite, beta-tricalcium-phosphate, biphasic-calcium-phosphate, polycaprolactone, polylactic-acid, PLGA]
applies_to_step_kinds: [scaffold-prep, sintering, QC, design]
sources: [2014-thavornyutikarn, 2015-baino, 2015-chia, 2015-do, 2015-ishack, 2013-loh, 2017-zhang, 2020-chen, 2020-garot, 2023-koushik, 2025-picado-tejero, 2026-daghrery, 2026-liu, 2025-xie, 2025-lee, 2026-zhao, protocol-2025-landau]
tags: [CAD, dimensional-accuracy, AM-resolution, pore-size]
created: 2026-04-25
updated: 2026-04-25
---

# CAD vs actual pore size mismatch

## What it is

The pore size you design in CAD is rarely the pore size you measure in the printed-and-processed scaffold. AM-route resolution limits, slurry / paste rheology, light-scattering in DLP, voxel anisotropy, and post-process sintering shrinkage all combine to shift the measured pore-size distribution. Garot et al. 2020 explicitly: "it is impossible to print features of size below 100 μm" with current routine BTE AM. Reporting "100→500 μm gradient" without μCT verification is a recurring fudge in this literature.

## How it manifests

- Whole-scaffold μCT post-print (and post-sinter) shows pore-size histograms shifted 10–25% from design. Daskalakis 2024 and Conoscenti 2025 both verify their gradients by μCT or SEM rather than relying on CAD [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]], [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]].
- DLP overcure / scattering: pores designed at 100 μm fill in to <60 μm because polymerization light scatters into the unwanted region; visible only by SEM.
- Robocasting filament spreading: paste deposited at 0.33 mm needle (Daskalakis) settles to wider strut, narrower pore [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]].
- Anisotropy between in-plane and through-plane pore size in extrusion / FDM scaffolds — z-pores shorter than x-y pores due to layer compression.
- Voxel quantization: CAD pores not multiples of voxel size are rounded.
- Garot 2020: "Dimensional errors below 200 μm are considered as satisfying" — i.e. ±200 μm error is the AM-route accepted accuracy floor, well below the 400 μm dynamic range of a 100→500 μm gradient [[../sources/2020-garot-additive-manufacturing-of-material-scaff]].
- Lee 2025 and Liu 2026 reviews emphasize the recurring need to publish *measured* pore sizes alongside CAD targets [[../sources/2025-lee-pcl-scaffold-with-well-defined-hierarchi]], [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]].

## How to detect it

- **μCT every printed scaffold** at ≤ 10 μm voxel resolution, both pre-sinter and post-sinter. Threshold and compute pore-size distribution per radial bin (outer 0–500 μm, mid, core). Compare to CAD distribution with K-S test; reject if max deviation > 15%.
- Pair μCT with SEM at 50–500× on cross-sections to verify strut/pore morphology in 2D — μCT thresholding can mis-segment thin struts [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]].
- Mercury-intrusion porosimetry on scaffold offcuts gives an independent pore-throat distribution; compare to μCT pore-size distribution. Disagreement ≥ 20% indicates closed pores or mis-segmentation [[../sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]] (cross-link).
- BET surface area / mercury porosimetry detect microporosity below μCT resolution [[../sources/protocol-2025-landau-a-micro-computed-tomography-based-simpli]].

## Mitigation

- **Calibrate per AM route**: print/sinter a calibration array with CAD pores 50, 100, 150, 200, 300, 500, 700 μm; measure post-process by μCT; build a CAD-target → measured-result lookup; design experimental scaffolds against the *measured* axis.
- For DLP/SLA: use anti-halation dyes in slurry to limit overcure; tune layer thickness and exposure to minimize scatter.
- For robocasting: use paste with shear-thinning rheology that recovers fast post-extrusion (yield stress ≥ 200 Pa); calibrate strut spacing per needle diameter and translation speed [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]].
- For binder-jet: use fine powder (<20 μm) for higher surface finish and resolution [[../sources/2017-bose-additive-manufacturing-of-biomaterials]] (cross-link).
- **Always report measured pore size** with mean ± SD, not just design target. Explicitly state CAD target alongside μCT-measured for reviewer transparency [[../sources/2026-zhao-longitudinal-and-radial-microgradients-i]], [[../sources/protocol-2025-landau-a-micro-computed-tomography-based-simpli]].
- TPMS / gyroid topologies have well-characterized CAD-to-physical relationships and reduce mismatch vs orthogonal lattices [[../sources/2017-zhang-additively-manufactured-scaffolds-for-bo]], [[../sources/2020-chen-porous-scaffold-design-for-additive-manu]].
- For the 100 μm lower bound of the proposed gradient: this is at AM resolution floor — use two-photon polymerization or microfluidic gradient route if sub-100 μm fidelity is critical [[../sources/2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]], [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]].

## Original sources / evidence

- [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] — "<100 μm impossible"; ±200 μm dimensional error is "satisfying."
- [[../sources/protocol-2025-landau-a-micro-computed-tomography-based-simpli]] — μCT-based protocol for measuring scaffold porosity, the reference QC method.
- [[../sources/2025-lee-pcl-scaffold-with-well-defined-hierarchi]] — "well-defined hierarchical pore" requires explicit verification.
- [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]], [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]] — gradient-fabrication reviews emphasising calibration.
- [[../sources/2017-zhang-additively-manufactured-scaffolds-for-bo]], [[../sources/2020-chen-porous-scaffold-design-for-additive-manu]] — TPMS / lattice topology vs CAD fidelity.
- [[../sources/2026-daghrery-advances-in-3d-printed-scaffolds-for-per]] — periodontal-scaffold review with similar resolution constraints.
- [[../sources/2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por]] — bioprinting resolution survey.
- [[../sources/2023-koushik-bone-tissue-engineering-scaffolds-functi]] — pore-architecture / fabrication comparison.
- [[../sources/2026-zhao-longitudinal-and-radial-microgradients-i]] — native-bone benchmark to design *against measured*.
- [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]], [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]], [[../sources/2015-chia-recent-advances-in-3d-printing-of-biomat]], [[../sources/2015-do-3d-printing-of-scaffolds-for-tissue-rege]], [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]], [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]] — broad reviews establishing the gap between CAD and as-printed.

## Affects

- Methods: [[../methods/3D-printing-stereolithography]], [[../methods/DLP-vat-photopolymerization]], [[../methods/robocasting-direct-ink-writing]], [[../methods/binder-jet-3D-printing]], [[../methods/fused-deposition-modeling]], [[../methods/selective-laser-sintering]], [[../methods/inkjet-3D-printing]], [[../methods/extrusion-based-3D-printing]], [[../methods/two-photon-polymerization]], [[../methods/ceramic-sintering]], [[../methods/micro-CT-imaging]], [[../methods/gradient-pore-design]], [[../methods/TPMS-scaffold-design]]
- Reagents: [[../reagents/hydroxyapatite]], [[../reagents/beta-tricalcium-phosphate]], [[../reagents/biphasic-calcium-phosphate]], [[../reagents/polycaprolactone]], [[../reagents/polylactic-acid]], [[../reagents/PLGA]]
