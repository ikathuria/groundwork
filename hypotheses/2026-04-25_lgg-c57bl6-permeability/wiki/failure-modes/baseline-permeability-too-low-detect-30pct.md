---
type: failure-mode
slug: baseline-permeability-too-low-detect-30pct
severity: critical
frequency_estimate: the headline risk for this specific hypothesis
applies_to_methods: [FITC-dextran-permeability-assay]
applies_to_organisms: [C57BL-6]
applies_to_step_kinds: [hypothesis-design, sample-size]
sources: []
created: 2026-04-25
updated: 2026-04-25
tags: [floor-effect, study-design, statistical-power, hypothesis-risk]
---

# Baseline permeability too low to detect a 30 % drop

## What it is

Healthy adult C57BL/6J mice have **low and tightly distributed plasma FD-4** at baseline. Published values cluster around 0.5–2 µg/mL at 4 h post a 600 mg/kg gavage. The **assay floor** (sample autofluorescence, plate-reader noise, residual matrix effects) is typically 0.1–0.3 µg/mL.

A 30 % reduction from a baseline of 1 µg/mL is 0.3 µg/mL — **the same magnitude as the assay floor**. It is mathematically possible to detect with very large n and tight technique, but in practice most published unstressed-baseline studies fail to find anything.

This is the **headline risk** for the hypothesis as written. It is why the corpus is dominated by challenge models (DSS, alcohol, HFD, NEC) — those models elevate baseline FD-4 by 5–20×, making a 30 % LGG effect easy to detect.

## How it manifests

- Power calculation shows n > 30 / arm needed even at modest within-group SD.
- Pilot data shows mean LGG plasma FD-4 lower than mean PBS — but not statistically significantly so.
- Effect-size estimate is dominated by 1–2 outlier mice.

## How to detect it

- Pre-study power calculation using:
  - SD from a published unstressed C57BL/6 cohort
  - The 30 % effect size
  - α = 0.05, power = 0.80
  - If n > 15 / arm, the design is at-risk.
- Pilot study (n = 4 / arm) to estimate within-group SD before committing to the main cohort.

## Mitigation (Pass 3 will choose between)

1. **Add a barrier-challenge arm** (mild DSS, 1 % × 5 d, or HFD × 8 wk) — primary endpoint becomes "% reduction in challenge-induced FD-4 elevation." Easier to power, more biologically informative.
2. **Use plasma LBP / LPS as primary endpoint** ([[../methods/LPS-endotoxin-quantification]]) — has lower baseline noise relative to dynamic range in unstressed animals.
3. **Increase n per arm** to 20–30 — costly but defensible.
4. **Re-frame hypothesis** to "≥ 30 % reduction in challenge-induced FD-4" — more specific, more powered, more publishable.

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
