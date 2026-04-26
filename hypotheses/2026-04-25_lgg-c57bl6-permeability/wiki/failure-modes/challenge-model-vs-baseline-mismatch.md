---
type: failure-mode
slug: challenge-model-vs-baseline-mismatch
severity: high
frequency_estimate: applies to literature-comparison for this hypothesis specifically
applies_to_methods: [FITC-dextran-permeability-assay, DSS-colitis-model, alcohol-induced-leaky-gut-model, high-fat-diet-model]
applies_to_step_kinds: [hypothesis-design, literature-QC]
sources: []
created: 2026-04-25
updated: 2026-04-25
tags: [hypothesis-risk, literature-mismatch, generalisability]
---

# Published LGG-barrier evidence comes from challenge models, not baseline mice

## What it is

The hypothesis pre-registers the LGG-permeability test in **unchallenged adult C57BL/6 mice**. Reviewing our 72-source corpus, ~85 % of the LGG-permeability evidence is from **challenge models** — DSS colitis, alcohol-induced leaky gut, HFD-induced metabolic endotoxaemia, NEC, post-weaning stress, ageing, irradiation, chemotherapy.

The published "LGG protects intestinal barrier" effect is robust **in challenged mice**. Generalising it to unchallenged C57BL/6 — where the barrier is already intact — is an unsupported extrapolation.

This pairs with [[baseline-permeability-too-low-detect-30pct]]: not only is the baseline near the assay floor, but the literature you would cite to predict an effect doesn't actually study your animals.

## How it manifests in literature QC

- Pass 3's literature-QC step would say "similar-work-exists" for LGG + barrier studies, but in fact every cited paper uses a different baseline state. The "exact match" is somewhere between "not-found" and "similar-work-exists with major caveats."
- Effect-size predictions from the literature are inflated by the challenge state of those studies.

## How to detect it

- Tabulate every paper you cite for LGG → permeability with a column "baseline state" — DSS / alcohol / HFD / NEC / unchallenged.
- Count the unchallenged-baseline rows. If < 5, the literature does not support the hypothesis as stated.

## Mitigation

1. Re-frame hypothesis to include a challenge (Pass 3 decision).
2. Or pre-register that this is **a deliberately under-explored question** and that null result is informative.
3. Or use a more sensitive primary endpoint than FD-4 (LBP, multi-probe).
4. Make the framing transparent in the literature-QC verdict — the brief asks for honest novelty assessment.

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
