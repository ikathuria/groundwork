---
type: failure-mode
slug: LPS-contamination-bacterial-prep
severity: medium
frequency_estimate: persistent low-level confounder in any in-house bacterial / recombinant-protein prep
applies_to_methods: [LPS-endotoxin-quantification, ELISA-cytokine-quantification]
applies_to_reagents: [LPS, p40-LGG-derived-protein, p75-Msp2-LGG-derived]
applies_to_organisms: [lactobacillus-rhamnosus-GG]
applies_to_step_kinds: [reagent-prep, dose-prep]
sources: []
created: 2026-04-25
updated: 2026-04-25
tags: [endotoxin, contamination, in-house-prep, mechanism-confounder]
---

# Endotoxin / LPS contamination of LGG prep

## What it is

LGG itself is gram-positive and does not produce LPS. But MRS broth ingredients (peptones, yeast extract) can carry trace endotoxin, and lab water / glassware can introduce more. A typical lab-grown LGG prep can carry 10–1000 EU/mL of LPS unless explicitly endotoxin-managed.

For **recombinant p40 / p75 expressed in *E. coli*** the contamination problem is much worse — the protein is co-purified with abundant *E. coli* LPS unless polymyxin B columns or ToxinEraser-style cleanup is used.

## Why it matters

- Plasma LPS / LBP readings post-LGG dosing may reflect the **carrier**, not the **intervention** — confounding the very translocation marker we use.
- Cytokine responses (TNF-α, IL-6) attributed to LGG / p40 may be LPS-driven via TLR4.
- Effect sizes from in-house p40 preps may not replicate with truly endotoxin-free recombinant p40.

## How to detect it

- LAL-quantify endotoxin in every batch of LGG suspension and recombinant protein. Reject if > 1 EU/mL for in vivo use.
- Run a polymyxin-B-treated control (binds and neutralises LPS): if the polymyxin-treated arm loses the cytokine response, you were measuring LPS.

## Mitigation

1. **Endotoxin-grade water and consumables** for LGG suspension prep.
2. Wash LGG cell pellet ≥ 3× in endotoxin-low PBS before resuspension.
3. For recombinant p40: polymyxin B affinity column + LAL re-test before use.
4. Quantify endotoxin per batch and report it.

## Sources mentioning this

- [[../sources/2026-wu-impact-continuous-probiotic-supplementation-intestinal|2026 · Wu — Impact of continuous probiotic supplementation on intestinal barrier function and hepatic ]]
- [[../sources/2026-ryan-food-derived-molecules-regulators-intestinal|2026 · Ryan — Food-derived molecules as regulators of intestinal tight junctions and barrier function: m]]
- [[../sources/2026-park-cu104-novel-barrier-function-enhancer|2026 · Park — CU104, a novel barrier function enhancer, improves colitis via modulation of barrier funct]]
- [[../sources/openalex-lactobacillus-retractions-snapshot|2026 · OpenAlex — OpenAlex retraction snapshot — Lactobacillus papers (n=25)]]
- [[../sources/2026-oglio-novel-food-supplement-containing-combination|2026 · Oglio — Novel Food Supplement Containing a Combination of Postbiotics and Plant-Derived Compounds ]]
- [[../sources/2025-oglio-postbiotic-effects-elicited-heat-inactivated|2026 · Oglio — Postbiotic effects elicited by heat-inactivated  Lacticaseibacillus rhamnosus GG  against ]]
- [[../sources/2026-lasaviciute-limosilactobacillus-reuteri-metabolites-modulate-immune|2026 · Lasaviciute — Limosilactobacillus reuteri  metabolites modulate immune pathways and intestinal barrier r]]
- [[../sources/2026-hou-lactobacillus-rhamnosus-gg-alleviates-post-weaning|2026 · Hou — Lactobacillus rhamnosus  GG Alleviates Post-Weaning Stress-Induced Intestinal Barrier Dama]]
- [[../sources/2026-abdulqadir-probiotic-bacteria-bifidobacterium-bifidum-upregulation|2026 · Abdulqadir — Probiotic bacteria  Bifidobacterium bifidum  upregulation of intestinal epithelial tight j]]
- [[../sources/2025-yu-restoring-mucosal-barrier-homeostasis-situ|2025 · Yu — Restoring mucosal barrier homeostasis by in situ formation of a living-synthetic therapeut]]
- [[../sources/2025-yi-nicotine-exacerbates-mash-inducing-intestinal|2025 · Yi — Nicotine exacerbates MASH via inducing intestinal dysbiosis and barrier dysfunction]]
- [[../sources/2025-yang-selenium-enrichment-enhances-alleviating-effect|2025 · Yang — Selenium enrichment enhances the alleviating effect of  Lactobacillus rhamnosus  GG on alc]]
- [[../sources/2026-wang-lactobacillus-rhamnosus-gg-supernatant-improves|2025 · Wang — Lactobacillus rhamnosus  GG Supernatant Improves GLP-1 Secretion Through Attenuating L Cel]]
- [[../sources/2025-wang-periodontitis-associated-metabolite-isoleucine-impairs|2025 · Wang — Periodontitis-associated metabolite isoleucine impairs intestinal barrier function and exa]]
- [[../sources/2025-wang-protective-effects-lactobacillus-rhamnosus-gg-supernatant|2025 · Wang — Protective effects of  Lactobacillus rhamnosus  GG supernatant on metabolic associated fat]]
- [[../sources/2025-wang-extracellular-vesicles-containing-mdp-derived|2025 · Wang — Extracellular Vesicles Containing MDP Derived from  Lactobacillus rhamnosus  GG Inhibit HS]]
- [[../sources/2025-su-shikimic-acid-mitigates-deoxynivalenol-induced|2025 · Su — Shikimic Acid Mitigates Deoxynivalenol-Induced Jejunal Barrier Injury in Mice via Activati]]
- [[../sources/2025-smolinska-review-influence-prebiotics-probiotics-synbiotics|2025 · Smolinska — A Review of the Influence of Prebiotics, Probiotics, Synbiotics, and Postbiotics on the Hu]]
- [[../sources/2025-silva-targeting-microbiota-reverses-section-induced|2025 · Silva — Targeting the Microbiota Reverses C‐Section‐Induced Effects on Intestinal Permeability, Mi]]
- [[../sources/2025-si-lactobacillus-rhamnosus-gg-induces-sting|2025 · Si — Lactobacillus rhamnosus  GG induces STING-dependent IL-10 in intestinal monocytes and alle]]
- [[../sources/2025-qumsani-gut-microbiome-engineering-diabetic-kidney|2025 · Qumsani — Gut Microbiome Engineering for Diabetic Kidney Disease Prevention: A  Lactobacillus rhamno]]
- [[../sources/2025-orlando-lt-gt-lactobacillus-rhamnosus-lt|2025 · Orlando — Lactobacillus rhamnosus  GG and  Lactobacillus paracasei  IMPC2.1 Mitigate LPS-Induced Epi]]
- [[../sources/2025-naso-multi-strain-probiotic-formulation-preserves|2025 · Naso — A multi-strain probiotic formulation preserves intestinal epithelial and vascular barriers]]
- [[../sources/2025-luo-regulation-intestinal-health-lactobacillus-rhamnosus|2025 · Luo — Regulation of intestinal health by  Lactobacillus rhamnosus  GG during fasting-induced mol]]
- [[../sources/2025-liu-lt-gt-barnesiella-intestinihominis-lt|2025 · Liu — Barnesiella intestinihominis  improves gut microbiota disruption and intestinal barrier in]]
- [[../sources/2025-liu-lactobacillus-johnsonii-alleviates-experimental-colitis|2025 · Liu — Lactobacillus johnsonii  alleviates experimental colitis by restoring intestinal barrier f]]
- [[../sources/2025-liang-gut-permeability-microbiota-parkinson-disease|2025 · Liang — Gut Permeability and Microbiota in Parkinson’s Disease: Mechanistic Insights and Experimen]]
- [[../sources/2025-ik-promising-antidepressant-potential-role-lactobacillus|2025 · Işık — Promising Antidepressant Potential: The Role of  Lactobacillus rhamnosus  GG in Mental Hea]]
- [[../sources/2025-huang-enterococcus-derived-cytolysin-exacerbates-ischemic|2025 · Huang — Enterococcus -derived cytolysin exacerbates ischemic stroke by disrupting the blood–brain ]]
- [[../sources/2025-guo-effects-lt-gt-lactobacillus-paracei|2025 · Guo — Effects of  Lactobacillus paracei  JY062 Postbiotic on Intestinal Barrier, Immunity, and G]]
- [[../sources/2025-gui-lactobacillus-rhamnosus-gg-maintains-gut|2025 · Gui — Lactobacillus rhamnosus GG  maintains gut microbiota stability and promotes intestinal ada]]
- [[../sources/2025-ferris-probiotics-intestinal-tight-junction-barrier|2025 · Ferris — Probiotics and the intestinal tight junction barrier function]]
- [[../sources/2025-farella-lactobacillus-rhamnosus-sepsis-preterm-infant|2025 · Farella — Lactobacillus rhamnosus  Sepsis in a Preterm Infant Following Probiotic Administration: Ch]]
- [[../sources/2025-dempsey-protective-properties-white-button-mushroom|2025 · Dempsey — Protective Properties of the White Button Mushroom,  Agaricus bisporus , in a Mouse Model ]]
- [[../sources/2025-dai-probiotic-lt-gt-lacticaseibacillus-paracasei|2025 · Dai — Probiotic  Lacticaseibacillus paracasei  E10 Ameliorates Dextran Sulfate Sodium-Induced Co]]
- [[../sources/2025-chen-lt-gt-lacticaseibacillus-paracasei-l21|2025 · Chen — Lacticaseibacillus paracasei L21  and Its Postbiotics Ameliorate Ulcerative Colitis Throug]]
- [[../sources/2025-bao-epithelial-barrier-janus-faced-regulator|2025 · Bao — The epithelial barrier: a Janus-faced regulator in allergic airway diseases from defense t]]
- [[../sources/2024-xuan-lactobacillus-rhamnosus-modulates-murine-neonatal|2024 · Xuan — Lactobacillus rhamnosus  modulates murine neonatal gut microbiota and inflammation caused ]]
- [[../sources/2024-xing-analysis-bifidobacterium-animalis-subsp-lactis|2024 · Xing — Analysis of  Bifidobacterium animalis  subsp.  lactis  BB-12  ®  and  Lactobacillus rhamno]]
- [[../sources/2024-suntornsaratoon-lactobacillus-rhamnosus-gg-stimulates-dietary|2024 · Suntornsaratoon — Lactobacillus rhamnosus  GG Stimulates Dietary Tryptophan-Dependent Production of Barrier-]]
- [[../sources/2024-pan-lactobacillus-rhamnosus-gg-attenuates-depression|2024 · Pan — Lactobacillus rhamnosus  GG attenuates depression‐like behaviour and cognitive deficits in]]
- [[../sources/2024-hu-autoinducer-promotes-colonization-lactobacillus-rhamnosus|2024 · Hu — Autoinducer-2 promotes the colonization of  Lactobacillus rhamnosus GG  to improve the int]]
- [[../sources/2025-arellanogarca-comparative-effects-viable-lactobacillus-rhamnosus|2024 · Arellano‐García — Comparative effects of viable  
 Lactobacillus rhamnosus  GG  and its heat‐inactivated par]]
- [[../sources/2023-zhong-protective-effect-heat-inactivated-companilactobacillus|2023 · Zhong — The Protective Effect of Heat-Inactivated  Companilactobacillus crustorum  on Dextran Sulf]]
- [[../sources/2023-salemi-lactobacillus-rhamnosus-gg-cell-free|2023 · Salemi — Lactobacillus rhamnosus  GG cell-free supernatant as a novel anti-cancer adjuvant]]
- [[../sources/2023-mishra-harnessing-potential-probiotics-treatment-alcoholic|2023 · Mishra — Harnessing the potential of probiotics in the treatment of alcoholic liver disorders]]
- [[../sources/2023-li-exopolysaccharides-lactobacillus-rhamnosus-gg-ameliorate|2023 · Li — Exopolysaccharides of  Lactobacillus rhamnosus  GG ameliorate  Salmonella typhimurium -ind]]
- [[../sources/2023-domnguezdaz-recombinant-p40-protein-promotes-expression|2023 · Domínguez-Díaz — Recombinant p40 Protein Promotes Expression of Occludin in HaCaT Keratinocytes: A Brief Co]]
- [[../sources/2022-llerena-testing-epithelial-permeability-fetal-tissue|2022 · Llerena — Testing Epithelial Permeability in Fetal Tissue-derived Enteroids]]
- [[../sources/2022-le-live-or-heat-killed-lactobacillus|2022 · Le — Live or Heat-Killed  Lactobacillus rhamnosus  Aerosolization Decreases Adenomatous Lung Ca]]
- [[../sources/2021-lgg-conditioned-medium-spinal-cord-injury-RETRACTED|2021 · Lin — [Retracted] The Conditioned Medium of Lactobacillus rhamnoides GG Regulates Microglia/Macr]]
- [[../sources/2021-deng-exposure-p40-early-life-prevents|2021 · Deng — Exposure to p40 in Early Life Prevents Intestinal Inflammation in Adulthood Through Induci]]
- [[../sources/2020-yan-probiotics-probiotic-derived-functional-factors|2020 · Yan — Probiotics and Probiotic-Derived Functional Factors—Mechanistic Insights Into Applications]]
- [[../sources/2020-masia-lgg-fermented-plant-RETRACTED|2020 · Masiá — RETRACTED: Effect of Lactobacillus rhamnosus on Physicochemical Properties of Fermented Pl]]
- [[../sources/2018-shen-supplementation-p40-lactobacillus-rhamnosus-gg|2018 · Shen — Supplementation of p40, a  Lactobacillus rhamnosus  GG-derived protein, in early life prom]]
- [[../sources/2017-yan-neonatal-colonization-mice-lgg-promotes|2016 · Yan — Neonatal Colonization of Mice with LGG Promotes Intestinal Development and Decreases Susce]]
- [[../sources/2010-yan-probiotics-progress-toward-novel-therapies|2010 · Yan — Probiotics: progress toward novel therapies for intestinal diseases]]
- [[../sources/2010-yan-disruption-nf-kappab-signalling-ancient|2010 · Yan — Disruption of NF-κB signalling by ancient microbial molecules: novel therapies of the futu]]
