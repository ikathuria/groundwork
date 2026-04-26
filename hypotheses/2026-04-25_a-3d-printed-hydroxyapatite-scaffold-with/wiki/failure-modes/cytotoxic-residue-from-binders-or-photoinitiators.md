---
type: failure-mode
slug: cytotoxic-residue-from-binders-or-photoinitiators
severity: medium
frequency_estimate: recurring — TPO/LAP/Irgacure residues at >10 ppm consistently reduce viability in primary osteoblasts and MSCs
applies_to_methods: [DLP-vat-photopolymerization, 3D-printing-stereolithography, binder-jet-3D-printing, debinding-thermal-treatment, slurry-preparation-for-DLP, MTS-assay, MTT-assay, alamarBlue-proliferation-assay, live-dead-staining]
applies_to_reagents: [photoinitiator-TPO, photoinitiator-LAP, ammonium-bicarbonate, hydroxyapatite, polycaprolactone, polylactic-acid, PLGA]
applies_to_step_kinds: [scaffold-prep, debinding, washing, seeding, viability-QC]
sources: [2014-thavornyutikarn, 2015-chia, 2015-do, 2020-wang, 2024-wang, 2026-thammarakcharoen, 2017-bose, 2020-garot, 2025-hossen, 2025-picado-tejero, 2025-tang, crossref-retraction-10-1016-j-heliyon-2024-e36493, pubchem-l-ascorbic-acid-2-phosphate-cid54679073]
tags: [cytotoxicity, photoinitiator, binder, residue, DLP, biocompatibility]
created: 2026-04-25
updated: 2026-04-25
---

# Cytotoxic residue from binders or photoinitiators

## What it is

DLP and SLA scaffolds use photoinitiators (TPO, LAP, Irgacure 2959) to crosslink the resin or HA-loaded slurry; binder-jet and DIW use organic binders (CMC, PVA, polyacrylates, ammonium bicarbonate as porogen). After curing/printing, residual unreacted photoinitiator molecules and partially decomposed binder leach into culture medium and reduce cell viability. The effect is not "cytotoxic ceramic" — the HA itself is benign — but a subtle 10–30% drop in proliferation/viability that mimics a real biological signal.

## How it manifests

- Lower viability on freshly debound scaffolds vs scaffolds aged 7+ days in DI water; visible as alamarBlue / MTS depression on day 1–3 [[../sources/2017-bose-additive-manufacturing-of-biomaterials]].
- Garot 2020 explicitly: "without a photoinitiator, the materials cannot be printed: this requirement excludes ceramics and metals alone" — and photoinitiator residue is the price [[../sources/2020-garot-additive-manufacturing-of-material-scaff]]. Tang 2025 echoes: "photoinitiator cytotoxicity must be considered" for SLA/DLP [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]].
- Ammonium bicarbonate porogen (used in eggshell-HA composite scaffolds) leaves residual NH₄⁺/CO₃²⁻ that perturbs medium pH; the eggshell-HA-NH₄HCO₃ paper Heliyon 2024 was retracted within a month, with residue cytotoxicity / characterisation gaps as plausible reasons [[../sources/crossref-retraction-10-1016-j-heliyon-2024-e36493]].
- Saos-2 / MC3T3 LDH release elevated > 1.5× control with insufficiently washed DLP HA scaffolds.
- Live/dead imaging shows pinpoint EthD-1+ cells across the entire scaffold at day 1, plateauing by day 7 as residues leach out.
- Slurry-additive cytotoxicity: dispersants (Darvan), CMC binders, and surfactants used to tune rheology each leave traces [[../sources/2017-bose-additive-manufacturing-of-biomaterials]], [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]].
- L-ascorbic-acid-2-phosphate, used as an osteogenic supplement, has a similar concern: residual reducing agents at high doses (>250 μM) can be cytotoxic [[../sources/pubchem-l-ascorbic-acid-2-phosphate-cid54679073]].

## How to detect it

- **Scaffold-conditioned-medium cytotoxicity assay** per ISO 10993-5: incubate scaffold in fresh medium 1 mL/cm² for 24 h, transfer medium to a 2D MC3T3-E1 / L929 culture, run MTS at 24 h. ≥ 70% viability vs blank-medium control = pass [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]].
- HPLC or LC-MS of the conditioned medium for known photoinitiator masses (TPO m/z 348, LAP m/z 319) — quantify ppm residue [[../sources/2020-garot-additive-manufacturing-of-material-scaff]].
- Compare day-1 alamarBlue on freshly washed scaffold vs scaffold aged 7 days in DI water (then re-equilibrated in medium); systematic difference indicates leachable residue.
- Run the same scaffold through L929 cytotoxicity (ISO 10993-5) and MC3T3-E1 proliferation — if MC3T3 underperforms but L929 is fine, the cytotoxicity is osteoblast-selective (e.g. dexamethasone interaction).
- Ames test (Salmonella TA1535/TA98/TA100/TA102 ± S9) on scaffold extracts catches mutagenic residues [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]].

## Mitigation

- **Post-process wash schedule**: 3× IPA rinses → 5× DI water rinses → 24 h DI water soak with 4 medium changes → autoclave or ethylene-oxide sterilization → 24 h PBS pre-equilibration before seeding [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] (caveat: autoclaving / EtO can themselves cause shrinkage / residue — see same source).
- Increase post-cure UV exposure dose by 2× to fully convert remaining photoinitiator (DLP).
- Use **LAP rather than TPO** when biocompatibility is critical: LAP has lower in vitro cytotoxicity at typical doses (5 mM) [[../sources/2020-garot-additive-manufacturing-of-material-scaff]], [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]], [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]].
- For binder-jet: validate full binder removal in debinding by TGA before sintering — residual organic mass < 0.5% [[../sources/2017-bose-additive-manufacturing-of-biomaterials]], [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]].
- For ammonium-bicarbonate porogen routes: extend thermal decomposition step (100 °C for 24 h before sintering ramp) to drive off NH₃/CO₂ fully [[../sources/crossref-retraction-10-1016-j-heliyon-2024-e36493]].
- Always include scaffold-only blank in every viability assay (no cells) to subtract HA's own MTS/MTT signal background.
- For polymer composites (PCL, PLA, PLGA), residual monomer / catalyst from precursor manufacture also contributes — use medical-grade resins [[../sources/2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por]], [[../sources/2025-hossen-biomimetic-strategies-for-bone-regenerat]].
- Run a positive control with the *resin alone* (no HA) to isolate ceramic-vs-resin cytotoxicity [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]].

## Original sources / evidence

- [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] — explicit: photoinitiator required and residue is a clinical concern.
- [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]] — "photoinitiator cytotoxicity must be considered" for SLA/DLP.
- [[../sources/2017-bose-additive-manufacturing-of-biomaterials]] — debinding requirements / residue control.
- [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] — full ISO-10993-5 + Ames negative on validated 3DPHA, the regulatory floor.
- [[../sources/crossref-retraction-10-1016-j-heliyon-2024-e36493]] — eggshell-HA-NH₄HCO₃ retraction; ammonium bicarbonate residue as a plausible failure mechanism.
- [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]], [[../sources/2015-chia-recent-advances-in-3d-printing-of-biomat]], [[../sources/2015-do-3d-printing-of-scaffolds-for-tissue-rege]], [[../sources/2020-wang-3d-printing-of-bone-tissue-engineering-s]], [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]], [[../sources/2025-hossen-biomimetic-strategies-for-bone-regenerat]], [[../sources/2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por]] — review-level discussion of residue / biocompatibility.
- [[../sources/pubchem-l-ascorbic-acid-2-phosphate-cid54679073]] — high-dose ascorbate concern.

## Affects

- Methods: [[../methods/DLP-vat-photopolymerization]], [[../methods/3D-printing-stereolithography]], [[../methods/binder-jet-3D-printing]], [[../methods/debinding-thermal-treatment]], [[../methods/slurry-preparation-for-DLP]], [[../methods/MTS-assay]], [[../methods/MTT-assay]], [[../methods/alamarBlue-proliferation-assay]], [[../methods/live-dead-staining]]
- Reagents: [[../reagents/photoinitiator-TPO]], [[../reagents/photoinitiator-LAP]], [[../reagents/ammonium-bicarbonate]], [[../reagents/hydroxyapatite]], [[../reagents/polycaprolactone]], [[../reagents/polylactic-acid]], [[../reagents/PLGA]]
