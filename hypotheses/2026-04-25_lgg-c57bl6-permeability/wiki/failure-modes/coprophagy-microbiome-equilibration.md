---
type: failure-mode
slug: coprophagy-microbiome-equilibration
severity: high
frequency_estimate: cohort-level — silently destroys the LGG-vs-control contrast in any co-housed design
applies_to_methods: [oral-gavage-mouse, 16S-rRNA-microbiome-sequencing, FITC-dextran-permeability-assay]
applies_to_organisms: [C57BL-6, lactobacillus-rhamnosus-GG]
applies_to_step_kinds: [study-design, housing]
sources: []
created: 2026-04-25
updated: 2026-04-25
tags: [microbiome, housing, study-design, cage-effect]
---

# Coprophagy equilibrates microbiomes across co-housed cages

## What it is

Mice eat each other's faeces (coprophagy) and groom each other extensively. In a shared cage, this means the microbiome of all cage-mates **converges within days**. Even on a shared rack with shared ventilation, faecal aerosol can transfer Lactobacilli between cages.

For an LGG-vs-PBS comparison, this is the difference between:
- **Real test**: LGG cage colonises with LGG; PBS cage stays at baseline → real contrast.
- **Coprophagy collapse**: LGG cage colonises with LGG; PBS cage acquires LGG via shared rack air or attendant cross-contamination → no contrast → null result, no matter how good the intervention.

The classic Th17-Treg studies that established the JAX-vs-Taconic SFB story had to use **separate isolators** to maintain the difference, because co-housed mice equilibrate within ~3 weeks.

## How it manifests

- Faecal LGG CFU detected in the supposed control arm.
- Within-arm variance smaller than between-arm — opposite of expectation.
- Real intervention effect appears null.

## How to detect it

- **Faecal CFU on MRS-anaerobic plates** weekly from a sentinel mouse in each control cage. If LGG appears, contamination has happened.
- Strain-specific qPCR (LGG *welE* primers) on a faecal aliquot from each cage at end of study.

## Mitigation

1. **House LGG and control arms in separate cages** — never co-house treatment with control.
2. Use **separate ventilated racks** if possible; minimum, alternate cages on the rack with an empty cage between treatment and control.
3. Dedicated technician PPE / gloves changed between LGG and control cage handling.
4. Bottom-up changing order: control cages first, then LGG cages, in cage-change cycles.
5. Pre-register the housing design and report it in methods.

## Sources mentioning this

- [[../sources/2026-wu-impact-continuous-probiotic-supplementation-intestinal|2026 · Wu — Impact of continuous probiotic supplementation on intestinal barrier function and hepatic ]]
- [[../sources/openalex-lactobacillus-retractions-snapshot|2026 · OpenAlex — OpenAlex retraction snapshot — Lactobacillus papers (n=25)]]
- [[../sources/2026-oglio-novel-food-supplement-containing-combination|2026 · Oglio — Novel Food Supplement Containing a Combination of Postbiotics and Plant-Derived Compounds ]]
- [[../sources/2025-oglio-postbiotic-effects-elicited-heat-inactivated|2026 · Oglio — Postbiotic effects elicited by heat-inactivated  Lacticaseibacillus rhamnosus GG  against ]]
- [[../sources/2026-lasaviciute-limosilactobacillus-reuteri-metabolites-modulate-immune|2026 · Lasaviciute — Limosilactobacillus reuteri  metabolites modulate immune pathways and intestinal barrier r]]
- [[../sources/2026-hou-lactobacillus-rhamnosus-gg-alleviates-post-weaning|2026 · Hou — Lactobacillus rhamnosus  GG Alleviates Post-Weaning Stress-Induced Intestinal Barrier Dama]]
- [[../sources/2025-yu-restoring-mucosal-barrier-homeostasis-situ|2025 · Yu — Restoring mucosal barrier homeostasis by in situ formation of a living-synthetic therapeut]]
- [[../sources/2025-yi-nicotine-exacerbates-mash-inducing-intestinal|2025 · Yi — Nicotine exacerbates MASH via inducing intestinal dysbiosis and barrier dysfunction]]
- [[../sources/2025-yang-selenium-enrichment-enhances-alleviating-effect|2025 · Yang — Selenium enrichment enhances the alleviating effect of  Lactobacillus rhamnosus  GG on alc]]
- [[../sources/2026-wang-lactobacillus-rhamnosus-gg-supernatant-improves|2025 · Wang — Lactobacillus rhamnosus  GG Supernatant Improves GLP-1 Secretion Through Attenuating L Cel]]
- [[../sources/2025-wang-protective-effects-lactobacillus-rhamnosus-gg-supernatant|2025 · Wang — Protective effects of  Lactobacillus rhamnosus  GG supernatant on metabolic associated fat]]
- [[../sources/2025-wang-extracellular-vesicles-containing-mdp-derived|2025 · Wang — Extracellular Vesicles Containing MDP Derived from  Lactobacillus rhamnosus  GG Inhibit HS]]
- [[../sources/2025-su-shikimic-acid-mitigates-deoxynivalenol-induced|2025 · Su — Shikimic Acid Mitigates Deoxynivalenol-Induced Jejunal Barrier Injury in Mice via Activati]]
- [[../sources/2025-smolinska-review-influence-prebiotics-probiotics-synbiotics|2025 · Smolinska — A Review of the Influence of Prebiotics, Probiotics, Synbiotics, and Postbiotics on the Hu]]
- [[../sources/2025-silva-targeting-microbiota-reverses-section-induced|2025 · Silva — Targeting the Microbiota Reverses C‐Section‐Induced Effects on Intestinal Permeability, Mi]]
- [[../sources/2025-si-lactobacillus-rhamnosus-gg-induces-sting|2025 · Si — Lactobacillus rhamnosus  GG induces STING-dependent IL-10 in intestinal monocytes and alle]]
- [[../sources/2025-qumsani-gut-microbiome-engineering-diabetic-kidney|2025 · Qumsani — Gut Microbiome Engineering for Diabetic Kidney Disease Prevention: A  Lactobacillus rhamno]]
- [[../sources/2025-orlando-lt-gt-lactobacillus-rhamnosus-lt|2025 · Orlando — Lactobacillus rhamnosus  GG and  Lactobacillus paracasei  IMPC2.1 Mitigate LPS-Induced Epi]]
- [[../sources/2025-luo-regulation-intestinal-health-lactobacillus-rhamnosus|2025 · Luo — Regulation of intestinal health by  Lactobacillus rhamnosus  GG during fasting-induced mol]]
- [[../sources/2025-liu-lactobacillus-johnsonii-alleviates-experimental-colitis|2025 · Liu — Lactobacillus johnsonii  alleviates experimental colitis by restoring intestinal barrier f]]
- [[../sources/2025-ik-promising-antidepressant-potential-role-lactobacillus|2025 · Işık — Promising Antidepressant Potential: The Role of  Lactobacillus rhamnosus  GG in Mental Hea]]
- [[../sources/2025-guo-effects-lt-gt-lactobacillus-paracei|2025 · Guo — Effects of  Lactobacillus paracei  JY062 Postbiotic on Intestinal Barrier, Immunity, and G]]
- [[../sources/2025-gui-lactobacillus-rhamnosus-gg-maintains-gut|2025 · Gui — Lactobacillus rhamnosus GG  maintains gut microbiota stability and promotes intestinal ada]]
- [[../sources/2025-ferris-probiotics-intestinal-tight-junction-barrier|2025 · Ferris — Probiotics and the intestinal tight junction barrier function]]
- [[../sources/2025-farella-lactobacillus-rhamnosus-sepsis-preterm-infant|2025 · Farella — Lactobacillus rhamnosus  Sepsis in a Preterm Infant Following Probiotic Administration: Ch]]
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
- [[../sources/2023-salemi-lactobacillus-rhamnosus-gg-cell-free|2023 · Salemi — Lactobacillus rhamnosus  GG cell-free supernatant as a novel anti-cancer adjuvant]]
- [[../sources/2023-mishra-harnessing-potential-probiotics-treatment-alcoholic|2023 · Mishra — Harnessing the potential of probiotics in the treatment of alcoholic liver disorders]]
- [[../sources/2023-li-exopolysaccharides-lactobacillus-rhamnosus-gg-ameliorate|2023 · Li — Exopolysaccharides of  Lactobacillus rhamnosus  GG ameliorate  Salmonella typhimurium -ind]]
- [[../sources/2023-domnguezdaz-recombinant-p40-protein-promotes-expression|2023 · Domínguez-Díaz — Recombinant p40 Protein Promotes Expression of Occludin in HaCaT Keratinocytes: A Brief Co]]
- [[../sources/2022-le-live-or-heat-killed-lactobacillus|2022 · Le — Live or Heat-Killed  Lactobacillus rhamnosus  Aerosolization Decreases Adenomatous Lung Ca]]
- [[../sources/2021-lgg-conditioned-medium-spinal-cord-injury-RETRACTED|2021 · Lin — [Retracted] The Conditioned Medium of Lactobacillus rhamnoides GG Regulates Microglia/Macr]]
- [[../sources/2021-deng-exposure-p40-early-life-prevents|2021 · Deng — Exposure to p40 in Early Life Prevents Intestinal Inflammation in Adulthood Through Induci]]
- [[../sources/2020-yan-probiotics-probiotic-derived-functional-factors|2020 · Yan — Probiotics and Probiotic-Derived Functional Factors—Mechanistic Insights Into Applications]]
- [[../sources/2020-masia-lgg-fermented-plant-RETRACTED|2020 · Masiá — RETRACTED: Effect of Lactobacillus rhamnosus on Physicochemical Properties of Fermented Pl]]
- [[../sources/2018-shen-supplementation-p40-lactobacillus-rhamnosus-gg|2018 · Shen — Supplementation of p40, a  Lactobacillus rhamnosus  GG-derived protein, in early life prom]]
- [[../sources/2017-yan-neonatal-colonization-mice-lgg-promotes|2016 · Yan — Neonatal Colonization of Mice with LGG Promotes Intestinal Development and Decreases Susce]]
- [[../sources/2010-yan-probiotics-progress-toward-novel-therapies|2010 · Yan — Probiotics: progress toward novel therapies for intestinal diseases]]
- [[../sources/2010-yan-disruption-nf-kappab-signalling-ancient|2010 · Yan — Disruption of NF-κB signalling by ancient microbial molecules: novel therapies of the futu]]
