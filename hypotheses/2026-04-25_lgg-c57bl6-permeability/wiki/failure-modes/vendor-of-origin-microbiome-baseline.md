---
type: failure-mode
slug: vendor-of-origin-microbiome-baseline
severity: medium
frequency_estimate: ubiquitous; usually unreported
applies_to_methods: [FITC-dextran-permeability-assay, 16S-rRNA-microbiome-sequencing]
applies_to_organisms: [C57BL-6]
applies_to_step_kinds: [study-design, vendor-selection]
sources: []
created: 2026-04-25
updated: 2026-04-25
tags: [microbiome, vendor, baseline, study-design]
---

# Vendor-of-origin microbiome shifts baseline barrier

## What it is

Mice from different commercial vendors (Jackson, Charles River, Taconic, Envigo) arrive with measurably different commensal communities — even at identical genotype and age. The differences are driven by colony husbandry, dam-derived seeding, water and feed differences across breeding facilities. Documented impact on:

- DSS colitis susceptibility
- Th17 / Treg balance (the famous Taconic vs JAX SFB story)
- Baseline endotoxaemia
- Probiotic engraftment efficiency (LGG colonises differently against different background communities)

## Why it matters for this hypothesis

- An LGG niche may already be occupied (high baseline *Lactobacillus*) or empty (low baseline) depending on the source colony, changing how easily LGG engrafts.
- Baseline FD-4 plasma levels — your "control" — depend on the background microbiome. Two control groups from two vendors are not the same baseline.
- Animals shipped recently arrive in a transient state (stress + diet change + microbiome dysbiosis); see acclimation note below.

## Mitigation

1. **Single vendor, single shipment, single age cohort** for the entire study.
2. ≥ 14 d acclimation in the local vivarium before any intervention starts — enough for the microbiome to re-equilibrate.
3. Document the source colony in methods; compare your effect sizes only to literature using the same vendor when possible.
4. Optionally pre-screen baseline microbiome with a single faecal 16S sample from each cage before randomisation; balance LGG vs control arms by baseline community PCA.

## Sources mentioning this

- [[../sources/2026-zhu-integrative-mendelian-randomization-experimental-validation|2026 · Zhu — Integrative Mendelian randomization and experimental validation prioritize KLF4 in the gut]]
- [[../sources/2026-ryan-food-derived-molecules-regulators-intestinal|2026 · Ryan — Food-derived molecules as regulators of intestinal tight junctions and barrier function: m]]
- [[../sources/2026-park-cu104-novel-barrier-function-enhancer|2026 · Park — CU104, a novel barrier function enhancer, improves colitis via modulation of barrier funct]]
- [[../sources/2025-miao-berberine-taxifolin-co-administration-attenuates|2026 · Miao — Berberine-taxifolin co-administration attenuates inflammatory response and intestinal barr]]
- [[../sources/2026-abdulqadir-probiotic-bacteria-bifidobacterium-bifidum-upregulation|2026 · Abdulqadir — Probiotic bacteria  Bifidobacterium bifidum  upregulation of intestinal epithelial tight j]]
- [[../sources/2025-yi-nicotine-exacerbates-mash-inducing-intestinal|2025 · Yi — Nicotine exacerbates MASH via inducing intestinal dysbiosis and barrier dysfunction]]
- [[../sources/2026-wang-lactobacillus-rhamnosus-gg-supernatant-improves|2025 · Wang — Lactobacillus rhamnosus  GG Supernatant Improves GLP-1 Secretion Through Attenuating L Cel]]
- [[../sources/2025-wang-periodontitis-associated-metabolite-isoleucine-impairs|2025 · Wang — Periodontitis-associated metabolite isoleucine impairs intestinal barrier function and exa]]
- [[../sources/2025-wang-protective-effects-lactobacillus-rhamnosus-gg-supernatant|2025 · Wang — Protective effects of  Lactobacillus rhamnosus  GG supernatant on metabolic associated fat]]
- [[../sources/2025-wang-extracellular-vesicles-containing-mdp-derived|2025 · Wang — Extracellular Vesicles Containing MDP Derived from  Lactobacillus rhamnosus  GG Inhibit HS]]
- [[../sources/2025-naso-multi-strain-probiotic-formulation-preserves|2025 · Naso — A multi-strain probiotic formulation preserves intestinal epithelial and vascular barriers]]
- [[../sources/2025-liu-lt-gt-barnesiella-intestinihominis-lt|2025 · Liu — Barnesiella intestinihominis  improves gut microbiota disruption and intestinal barrier in]]
- [[../sources/2025-liang-gut-permeability-microbiota-parkinson-disease|2025 · Liang — Gut Permeability and Microbiota in Parkinson’s Disease: Mechanistic Insights and Experimen]]
- [[../sources/2025-ik-promising-antidepressant-potential-role-lactobacillus|2025 · Işık — Promising Antidepressant Potential: The Role of  Lactobacillus rhamnosus  GG in Mental Hea]]
- [[../sources/2025-huang-enterococcus-derived-cytolysin-exacerbates-ischemic|2025 · Huang — Enterococcus -derived cytolysin exacerbates ischemic stroke by disrupting the blood–brain ]]
- [[../sources/2025-gui-lactobacillus-rhamnosus-gg-maintains-gut|2025 · Gui — Lactobacillus rhamnosus GG  maintains gut microbiota stability and promotes intestinal ada]]
- [[../sources/2025-dempsey-protective-properties-white-button-mushroom|2025 · Dempsey — Protective Properties of the White Button Mushroom,  Agaricus bisporus , in a Mouse Model ]]
- [[../sources/2025-dai-probiotic-lt-gt-lacticaseibacillus-paracasei|2025 · Dai — Probiotic  Lacticaseibacillus paracasei  E10 Ameliorates Dextran Sulfate Sodium-Induced Co]]
- [[../sources/2025-chen-lt-gt-lacticaseibacillus-paracasei-l21|2025 · Chen — Lacticaseibacillus paracasei L21  and Its Postbiotics Ameliorate Ulcerative Colitis Throug]]
- [[../sources/2024-suntornsaratoon-lactobacillus-rhamnosus-gg-stimulates-dietary|2024 · Suntornsaratoon — Lactobacillus rhamnosus  GG Stimulates Dietary Tryptophan-Dependent Production of Barrier-]]
- [[../sources/2024-pan-lactobacillus-rhamnosus-gg-attenuates-depression|2024 · Pan — Lactobacillus rhamnosus  GG attenuates depression‐like behaviour and cognitive deficits in]]
- [[../sources/2024-hu-autoinducer-promotes-colonization-lactobacillus-rhamnosus|2024 · Hu — Autoinducer-2 promotes the colonization of  Lactobacillus rhamnosus GG  to improve the int]]
- [[../sources/2025-arellanogarca-comparative-effects-viable-lactobacillus-rhamnosus|2024 · Arellano‐García — Comparative effects of viable  
 Lactobacillus rhamnosus  GG  and its heat‐inactivated par]]
- [[../sources/2023-zhong-protective-effect-heat-inactivated-companilactobacillus|2023 · Zhong — The Protective Effect of Heat-Inactivated  Companilactobacillus crustorum  on Dextran Sulf]]
- [[../sources/2023-mishra-harnessing-potential-probiotics-treatment-alcoholic|2023 · Mishra — Harnessing the potential of probiotics in the treatment of alcoholic liver disorders]]
- [[../sources/2023-aldarsgarca-ex-vivo-intestinal-permeability-assay|2023 · Bootz-Maoz — Ex vivo intestinal permeability assay (X-IPA) for tracking barrier function dynamics]]
- [[../sources/2021-deng-exposure-p40-early-life-prevents|2021 · Deng — Exposure to p40 in Early Life Prevents Intestinal Inflammation in Adulthood Through Induci]]
- [[../sources/2021-boerner-functional-assessment-intestinal-permeability-neutrophil|2021 · Boerner — Functional Assessment of Intestinal Permeability and Neutrophil Transepithelial Migration ]]
- [[../sources/2018-shen-supplementation-p40-lactobacillus-rhamnosus-gg|2018 · Shen — Supplementation of p40, a  Lactobacillus rhamnosus  GG-derived protein, in early life prom]]
- [[../sources/2017-yan-neonatal-colonization-mice-lgg-promotes|2016 · Yan — Neonatal Colonization of Mice with LGG Promotes Intestinal Development and Decreases Susce]]
