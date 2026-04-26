---
type: failure-mode
slug: ZO-1-occludin-detection-artifacts
severity: medium
frequency_estimate: pervasive low-level confounder in any tight-junction Western blot / IHC paper
applies_to_methods: [Western-blot-tight-junction]
applies_to_step_kinds: [protein-quant, IF-quant]
sources: []
created: 2026-04-25
updated: 2026-04-25
tags: [tight-junction, antibody, IF, western-blot, quantification]
---

# Tight-junction protein detection artefacts

## What it is

Antibody-based quantification of ZO-1, occludin, and the claudin family is harder than the methods sections suggest. Pervasive issues:

- **Antibody clone variability**: different commercial clones for the "same" protein give different bands at different molecular weights, with different specificity. Claudin antibodies are notorious.
- **Total vs membrane pool**: WB on whole lysate measures total protein; what matters for barrier function is **membrane-localised** protein at the tight junction. Total ZO-1 can be unchanged while membrane ZO-1 drops by half — a real barrier change WB will miss.
- **Loading-control drift in colitis**: GAPDH and β-actin can themselves shift with inflammation. Total-protein normalisation (Ponceau, stain-free) is more robust.
- **IF quantification subjectivity**: line-scan-based "intensity at the apical junction" is operator-dependent without blinded analysis or automated pipelines.

## How it manifests

- WB shows no change but IF shows redistribution → real barrier change misclassified as "no effect."
- Different antibody lot mid-study creates an apparent treatment effect that's actually a reagent change.
- LGG arm shows "increased ZO-1" because the LGG-arm gels were loaded slightly differently.

## Mitigation

1. **Blind the analyst** to treatment when scoring IF.
2. Use **automated quantification pipelines** (e.g. CellProfiler ZO-1 line scans) over manual scoring.
3. **Pair WB with IF on adjacent sections** — agreement increases confidence; disagreement is informative.
4. Use a single antibody lot for the whole study; document catalog + lot number.
5. Use **total-protein normalisation** instead of GAPDH / β-actin in DSS / inflammation contexts.
6. Include positive-control tissue (treated with a known barrier disruptor) on every blot.

## Sources mentioning this

- [[../sources/2026-zhu-integrative-mendelian-randomization-experimental-validation|2026 · Zhu — Integrative Mendelian randomization and experimental validation prioritize KLF4 in the gut]]
- [[../sources/2026-yu-long-noncoding-rna-gas5-disrupts|2026 · Yu — Long noncoding RNA  GAS5  disrupts intestinal epithelial barrier function by increasing sm]]
- [[../sources/2026-yang-oral-microcapsules-encapsulating-endometrial-regenerative|2026 · Yang — Oral Microcapsules Encapsulating Endometrial Regenerative Cell-Derived Exosomes Promote In]]
- [[../sources/2026-wu-impact-continuous-probiotic-supplementation-intestinal|2026 · Wu — Impact of continuous probiotic supplementation on intestinal barrier function and hepatic ]]
- [[../sources/2026-park-cu104-novel-barrier-function-enhancer|2026 · Park — CU104, a novel barrier function enhancer, improves colitis via modulation of barrier funct]]
- [[../sources/2025-miao-berberine-taxifolin-co-administration-attenuates|2026 · Miao — Berberine-taxifolin co-administration attenuates inflammatory response and intestinal barr]]
- [[../sources/2026-lasaviciute-limosilactobacillus-reuteri-metabolites-modulate-immune|2026 · Lasaviciute — Limosilactobacillus reuteri  metabolites modulate immune pathways and intestinal barrier r]]
- [[../sources/2026-abdulqadir-probiotic-bacteria-bifidobacterium-bifidum-upregulation|2026 · Abdulqadir — Probiotic bacteria  Bifidobacterium bifidum  upregulation of intestinal epithelial tight j]]
- [[../sources/2025-yu-restoring-mucosal-barrier-homeostasis-situ|2025 · Yu — Restoring mucosal barrier homeostasis by in situ formation of a living-synthetic therapeut]]
- [[../sources/2025-yi-nicotine-exacerbates-mash-inducing-intestinal|2025 · Yi — Nicotine exacerbates MASH via inducing intestinal dysbiosis and barrier dysfunction]]
- [[../sources/2025-yang-selenium-enrichment-enhances-alleviating-effect|2025 · Yang — Selenium enrichment enhances the alleviating effect of  Lactobacillus rhamnosus  GG on alc]]
- [[../sources/2025-wang-periodontitis-associated-metabolite-isoleucine-impairs|2025 · Wang — Periodontitis-associated metabolite isoleucine impairs intestinal barrier function and exa]]
- [[../sources/2025-wang-protective-effects-lactobacillus-rhamnosus-gg-supernatant|2025 · Wang — Protective effects of  Lactobacillus rhamnosus  GG supernatant on metabolic associated fat]]
- [[../sources/2025-wang-extracellular-vesicles-containing-mdp-derived|2025 · Wang — Extracellular Vesicles Containing MDP Derived from  Lactobacillus rhamnosus  GG Inhibit HS]]
- [[../sources/2025-su-shikimic-acid-mitigates-deoxynivalenol-induced|2025 · Su — Shikimic Acid Mitigates Deoxynivalenol-Induced Jejunal Barrier Injury in Mice via Activati]]
- [[../sources/2025-orlando-lt-gt-lactobacillus-rhamnosus-lt|2025 · Orlando — Lactobacillus rhamnosus  GG and  Lactobacillus paracasei  IMPC2.1 Mitigate LPS-Induced Epi]]
- [[../sources/2025-naso-multi-strain-probiotic-formulation-preserves|2025 · Naso — A multi-strain probiotic formulation preserves intestinal epithelial and vascular barriers]]
- [[../sources/2025-liu-lt-gt-barnesiella-intestinihominis-lt|2025 · Liu — Barnesiella intestinihominis  improves gut microbiota disruption and intestinal barrier in]]
- [[../sources/2025-liu-lactobacillus-johnsonii-alleviates-experimental-colitis|2025 · Liu — Lactobacillus johnsonii  alleviates experimental colitis by restoring intestinal barrier f]]
- [[../sources/2025-huang-enterococcus-derived-cytolysin-exacerbates-ischemic|2025 · Huang — Enterococcus -derived cytolysin exacerbates ischemic stroke by disrupting the blood–brain ]]
- [[../sources/2025-gui-lactobacillus-rhamnosus-gg-maintains-gut|2025 · Gui — Lactobacillus rhamnosus GG  maintains gut microbiota stability and promotes intestinal ada]]
- [[../sources/2025-dai-probiotic-lt-gt-lacticaseibacillus-paracasei|2025 · Dai — Probiotic  Lacticaseibacillus paracasei  E10 Ameliorates Dextran Sulfate Sodium-Induced Co]]
- [[../sources/2025-chen-lt-gt-lacticaseibacillus-paracasei-l21|2025 · Chen — Lacticaseibacillus paracasei L21  and Its Postbiotics Ameliorate Ulcerative Colitis Throug]]
- [[../sources/2024-suntornsaratoon-lactobacillus-rhamnosus-gg-stimulates-dietary|2024 · Suntornsaratoon — Lactobacillus rhamnosus  GG Stimulates Dietary Tryptophan-Dependent Production of Barrier-]]
- [[../sources/2024-hu-autoinducer-promotes-colonization-lactobacillus-rhamnosus|2024 · Hu — Autoinducer-2 promotes the colonization of  Lactobacillus rhamnosus GG  to improve the int]]
- [[../sources/2023-zhong-protective-effect-heat-inactivated-companilactobacillus|2023 · Zhong — The Protective Effect of Heat-Inactivated  Companilactobacillus crustorum  on Dextran Sulf]]
- [[../sources/2023-salemi-lactobacillus-rhamnosus-gg-cell-free|2023 · Salemi — Lactobacillus rhamnosus  GG cell-free supernatant as a novel anti-cancer adjuvant]]
- [[../sources/2023-li-exopolysaccharides-lactobacillus-rhamnosus-gg-ameliorate|2023 · Li — Exopolysaccharides of  Lactobacillus rhamnosus  GG ameliorate  Salmonella typhimurium -ind]]
- [[../sources/2023-domnguezdaz-recombinant-p40-protein-promotes-expression|2023 · Domínguez-Díaz — Recombinant p40 Protein Promotes Expression of Occludin in HaCaT Keratinocytes: A Brief Co]]
- [[../sources/2023-aldarsgarca-ex-vivo-intestinal-permeability-assay|2023 · Bootz-Maoz — Ex vivo intestinal permeability assay (X-IPA) for tracking barrier function dynamics]]
- [[../sources/2022-llerena-testing-epithelial-permeability-fetal-tissue|2022 · Llerena — Testing Epithelial Permeability in Fetal Tissue-derived Enteroids]]
- [[../sources/2021-deng-exposure-p40-early-life-prevents|2021 · Deng — Exposure to p40 in Early Life Prevents Intestinal Inflammation in Adulthood Through Induci]]
- [[../sources/2018-shen-supplementation-p40-lactobacillus-rhamnosus-gg|2018 · Shen — Supplementation of p40, a  Lactobacillus rhamnosus  GG-derived protein, in early life prom]]
