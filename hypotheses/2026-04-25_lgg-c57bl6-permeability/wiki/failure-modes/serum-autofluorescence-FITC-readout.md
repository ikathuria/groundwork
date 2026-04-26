---
type: failure-mode
slug: serum-autofluorescence-FITC-readout
severity: medium
frequency_estimate: ~30 % of in vivo FITC-dextran studies that report effect sizes
applies_to_methods: [FITC-dextran-permeability-assay, ex-vivo-intestinal-permeability-assay]
applies_to_reagents: [FITC-dextran-4kDa]
applies_to_step_kinds: [plasma-read, standard-curve]
sources: []
created: 2026-04-25
updated: 2026-04-25
tags: [fitc, assay, autofluorescence, standard-curve]
---

# Serum autofluorescence inflates FITC-dextran readout

## What it is

Mouse plasma is not optically clean. Free haemoglobin (haemolysis from blood draw), bilirubin (jaundice from challenge models), lipaemia (postprandial samples), and endogenous flavoproteins all fluoresce or absorb in the FITC band (485 nm ex / 520 nm em). The blank plasma signal is non-trivial — typically 5–15 % of a positive FD-4 reading.

If the standard curve is built in **buffer** (PBS, water) rather than **pooled naïve plasma**, the unknowns are read against a baseline that excludes this matrix fluorescence. Net result: **systematic overestimation of plasma FD-4** in all samples, with the absolute error proportional to plasma autofluorescence.

## How it manifests

- Treatment effects vanish when controls are also high (LGG and PBS arms both have inflated readings against the wrong blank).
- Inter-cohort variance balloons — different blood-draw quality across days produces different baseline noise.
- A 30 % real reduction in paracellular FD-4 can be invisible if the blank floor is high.

## How to detect it

- Pre-calibrate: compare standard curves built in PBS vs in pooled naïve plasma. If the slopes differ by > 20 %, you are matrix-sensitive.
- Run a **plasma-only blank well** every plate: if it reads above ~5 % of your highest standard, autofluorescence is non-negligible.

## Mitigation

1. **Always** build the FD-4 standard curve in **pooled plasma from naïve, age-matched mice**, not in buffer.
2. Read on a black 96-well plate (white plates over-reflect).
3. Avoid haemolysed samples — score visually; reject any visibly pink plasma.
4. Collect samples consistently from the same vein at the same time-of-day.
5. Standardise fasting (a postprandial draw is lipaemic).

## Sources mentioning this

- [[../sources/2026-zhu-integrative-mendelian-randomization-experimental-validation|2026 · Zhu — Integrative Mendelian randomization and experimental validation prioritize KLF4 in the gut]]
- [[../sources/2026-yu-long-noncoding-rna-gas5-disrupts|2026 · Yu — Long noncoding RNA  GAS5  disrupts intestinal epithelial barrier function by increasing sm]]
- [[../sources/2026-yang-oral-microcapsules-encapsulating-endometrial-regenerative|2026 · Yang — Oral Microcapsules Encapsulating Endometrial Regenerative Cell-Derived Exosomes Promote In]]
- [[../sources/2026-wu-impact-continuous-probiotic-supplementation-intestinal|2026 · Wu — Impact of continuous probiotic supplementation on intestinal barrier function and hepatic ]]
- [[../sources/2026-ryan-food-derived-molecules-regulators-intestinal|2026 · Ryan — Food-derived molecules as regulators of intestinal tight junctions and barrier function: m]]
- [[../sources/2026-park-cu104-novel-barrier-function-enhancer|2026 · Park — CU104, a novel barrier function enhancer, improves colitis via modulation of barrier funct]]
- [[../sources/2026-oglio-novel-food-supplement-containing-combination|2026 · Oglio — Novel Food Supplement Containing a Combination of Postbiotics and Plant-Derived Compounds ]]
- [[../sources/2025-oglio-postbiotic-effects-elicited-heat-inactivated|2026 · Oglio — Postbiotic effects elicited by heat-inactivated  Lacticaseibacillus rhamnosus GG  against ]]
- [[../sources/2025-miao-berberine-taxifolin-co-administration-attenuates|2026 · Miao — Berberine-taxifolin co-administration attenuates inflammatory response and intestinal barr]]
- [[../sources/2026-lasaviciute-limosilactobacillus-reuteri-metabolites-modulate-immune|2026 · Lasaviciute — Limosilactobacillus reuteri  metabolites modulate immune pathways and intestinal barrier r]]
- [[../sources/2025-yu-restoring-mucosal-barrier-homeostasis-situ|2025 · Yu — Restoring mucosal barrier homeostasis by in situ formation of a living-synthetic therapeut]]
- [[../sources/2025-wang-periodontitis-associated-metabolite-isoleucine-impairs|2025 · Wang — Periodontitis-associated metabolite isoleucine impairs intestinal barrier function and exa]]
- [[../sources/2025-wang-protective-effects-lactobacillus-rhamnosus-gg-supernatant|2025 · Wang — Protective effects of  Lactobacillus rhamnosus  GG supernatant on metabolic associated fat]]
- [[../sources/2025-orlando-lt-gt-lactobacillus-rhamnosus-lt|2025 · Orlando — Lactobacillus rhamnosus  GG and  Lactobacillus paracasei  IMPC2.1 Mitigate LPS-Induced Epi]]
- [[../sources/2025-naso-multi-strain-probiotic-formulation-preserves|2025 · Naso — A multi-strain probiotic formulation preserves intestinal epithelial and vascular barriers]]
- [[../sources/2025-liu-lactobacillus-johnsonii-alleviates-experimental-colitis|2025 · Liu — Lactobacillus johnsonii  alleviates experimental colitis by restoring intestinal barrier f]]
- [[../sources/2025-huang-enterococcus-derived-cytolysin-exacerbates-ischemic|2025 · Huang — Enterococcus -derived cytolysin exacerbates ischemic stroke by disrupting the blood–brain ]]
- [[../sources/2025-guo-effects-lt-gt-lactobacillus-paracei|2025 · Guo — Effects of  Lactobacillus paracei  JY062 Postbiotic on Intestinal Barrier, Immunity, and G]]
- [[../sources/2025-ferris-probiotics-intestinal-tight-junction-barrier|2025 · Ferris — Probiotics and the intestinal tight junction barrier function]]
- [[../sources/2025-dempsey-protective-properties-white-button-mushroom|2025 · Dempsey — Protective Properties of the White Button Mushroom,  Agaricus bisporus , in a Mouse Model ]]
- [[../sources/2025-bao-epithelial-barrier-janus-faced-regulator|2025 · Bao — The epithelial barrier: a Janus-faced regulator in allergic airway diseases from defense t]]
- [[../sources/2024-suntornsaratoon-lactobacillus-rhamnosus-gg-stimulates-dietary|2024 · Suntornsaratoon — Lactobacillus rhamnosus  GG Stimulates Dietary Tryptophan-Dependent Production of Barrier-]]
- [[../sources/2023-aldarsgarca-ex-vivo-intestinal-permeability-assay|2023 · Bootz-Maoz — Ex vivo intestinal permeability assay (X-IPA) for tracking barrier function dynamics]]
- [[../sources/2021-boerner-functional-assessment-intestinal-permeability-neutrophil|2021 · Boerner — Functional Assessment of Intestinal Permeability and Neutrophil Transepithelial Migration ]]
- [[../sources/2017-yan-neonatal-colonization-mice-lgg-promotes|2016 · Yan — Neonatal Colonization of Mice with LGG Promotes Intestinal Development and Decreases Susce]]
