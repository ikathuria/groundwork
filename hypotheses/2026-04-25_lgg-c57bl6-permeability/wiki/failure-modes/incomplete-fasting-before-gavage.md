---
type: failure-mode
slug: incomplete-fasting-before-gavage
severity: high
frequency_estimate: top documented source of inter-laboratory variance in FITC-dextran intestinal permeability assays
applies_to_methods: [FITC-dextran-permeability-assay, oral-gavage-mouse]
applies_to_reagents: [FITC-dextran-4kDa]
applies_to_step_kinds: [pre-gavage]
sources: []
created: 2026-04-25
updated: 2026-04-25
tags: [fitc, fasting, protocol-drift]
---

# Incomplete fasting before FITC-dextran gavage

## What it is

Food in the stomach at the time of FD-4 gavage **dilutes** the dose, **delays** gastric emptying, and **adsorbs** a fraction of the probe onto food matrix. The same nominal dose (mg/kg) reaches the small-intestinal lumen later and at lower effective concentration. Plasma kinetics shift right; a single late time-point is the most affected.

In the corpus, fasting protocols range across:
- **No fast** (a few studies) — uninterpretable in our framework
- **2-h fast** — partial; mice are largely nocturnal feeders, so daytime 2 h is mostly a no-op
- **4-h fast** — the most common
- **Overnight fast (12–14 h)** — over-stresses the mouse, alters the microbiome, and is ethically borderline; not recommended for routine permeability work

A 6-h daytime fast is the practical sweet spot.

## How it manifests

- Within-cohort plasma FD-4 variance balloons (mice that found a food crumb in their cage have a different absorption profile).
- Cross-study comparisons with mismatched fasting protocols are not meaningful.
- LGG-vs-control differences can be swamped by within-arm fasting noise.

## How to detect it

- Visual inspection: fasted mouse cages should have empty hoppers and clean bedding (no scattered food). Confirm at gavage time.
- A **postprandial control arm** (n = 3 fed mice gavaged FD-4) read alongside the main cohort: if the fed-arm plasma FD-4 differs > 50 % from the fasted controls, fasting compliance was the issue.

## Mitigation

1. **Pre-register a 6-h daytime fast**, water ad lib, identical for all arms.
2. **Remove food + visible crumbs** from cages 6 h ± 15 min before gavage.
3. Confirm cage cleanliness at gavage time.
4. Document any deviations per cage; exclude any obviously-fed mouse from the assay (with reason logged).

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
