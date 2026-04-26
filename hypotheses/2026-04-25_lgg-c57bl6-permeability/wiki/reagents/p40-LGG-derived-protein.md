---
type: reagent
slug: p40-LGG-derived-protein
aliases: [p40, Msp1, major secreted protein 1, LGG p40]
cas: n/a (protein)
suppliers:
  - name: in-house recombinant
    notes: "no off-the-shelf catalog; expressed in E. coli or P. pastoris from the LGG msp1 gene; commercial p40 is rarely listed but can be custom-ordered from GenScript / Cusabio"
storage: "−80 °C, single-use aliquots; avoid freeze-thaw"
hazards: low
known_failure_modes: [LPS-contamination-bacterial-prep]
related_methods: [Western-blot-tight-junction, ELISA-cytokine-quantification]
created: 2026-04-25
updated: 2026-04-25
tags: [LGG-secreted-protein, EGFR-ligand, postbiotic-candidate, mechanism]
---

# p40 (Msp1) — LGG-derived secreted soluble protein

A ~40 kDa soluble protein secreted by *L. rhamnosus* GG. The most thoroughly mechanistically dissected LGG-derived molecule in our corpus. Discovered & characterised by the Yan/Polk lab (Vanderbilt) across a series of papers from 2002–2021. The seminal mechanism papers (PMC3036990 Yan 2007 JCI, PMC3104743 Yan 2011 Gastroenterology, PMC3798544 Yan 2013 EMBO Mol Med) are flagged in `raw/fetch_log.jsonl` as "failed-403" — they were not in the PMC OA fulltext subset and PDF retries hit recaptcha. The mechanism is reconstructed here from the 2017–2021 follow-ups (Yan 2017, Shen 2018, Yang 2019 [also failed], Yan & Polk 2020 review, Deng 2021) which cite and build on the seminals.

## Mechanism

1. p40 is secreted by LGG into the gut lumen.
2. p40 binds EGFR on intestinal epithelial cells (transactivation, possibly via membrane-bound HB-EGF release / ADAM17).
3. EGFR activation engages **PI3K-Akt** downstream → anti-apoptotic, pro-proliferative.
4. In parallel, p40 promotes **mucin (Muc2)** production and **IgA** (via APRIL up-regulation in dendritic cells / B-cell helpers).
5. Net effect: barrier-protective in cytokine-injured (TNF-α / IFN-γ) epithelium and in DSS / NEC models.

## Why this matters for the hypothesis

- **Heat-killed LGG** retains p40 (it is a **secreted soluble protein**, not membrane-bound). This explains why our corpus repeatedly reports comparable barrier protection from heat-killed / postbiotic preparations (Arellano-García, Oglio, Le Noci) — the active principle survives heat inactivation.
- **Recombinant p40 alone** reproduces the in vivo barrier-protective effect (Shen 2018, Deng 2021, Domínguez-Díaz 2023). This is the cleanest evidence that LGG's barrier effect is at least partly p40-mediated, and a principled basis for adding a recombinant-p40 arm to Pass 3 if budget allows.

## Caveats

- Most p40 mechanism work is in **stressed** epithelium (TNF, IFN, DSS, NEC). The bare effect of p40 on **unstressed** intestinal epithelium is small — consistent with our [[../failure-modes/baseline-permeability-too-low-detect-30pct]] concern.
- **LPS contamination** of recombinant-protein preps is a recurring confounder: any p40 expressed in *E. coli* requires endotoxin removal (polymyxin B columns) and validation. See [[../failure-modes/LPS-contamination-bacterial-prep]].

## Sources mentioning this

- [[../sources/2026-wang-lactobacillus-rhamnosus-gg-supernatant-improves|2025 · Wang — Lactobacillus rhamnosus  GG Supernatant Improves GLP-1 Secretion Through Attenuating L Cel]]
- [[../sources/2025-wang-protective-effects-lactobacillus-rhamnosus-gg-supernatant|2025 · Wang — Protective effects of  Lactobacillus rhamnosus  GG supernatant on metabolic associated fat]]
- [[../sources/2025-smolinska-review-influence-prebiotics-probiotics-synbiotics|2025 · Smolinska — A Review of the Influence of Prebiotics, Probiotics, Synbiotics, and Postbiotics on the Hu]]
- [[../sources/2025-guo-effects-lt-gt-lactobacillus-paracei|2025 · Guo — Effects of  Lactobacillus paracei  JY062 Postbiotic on Intestinal Barrier, Immunity, and G]]
- [[../sources/2024-suntornsaratoon-lactobacillus-rhamnosus-gg-stimulates-dietary|2024 · Suntornsaratoon — Lactobacillus rhamnosus  GG Stimulates Dietary Tryptophan-Dependent Production of Barrier-]]
- [[../sources/2023-salemi-lactobacillus-rhamnosus-gg-cell-free|2023 · Salemi — Lactobacillus rhamnosus  GG cell-free supernatant as a novel anti-cancer adjuvant]]
- [[../sources/2023-mishra-harnessing-potential-probiotics-treatment-alcoholic|2023 · Mishra — Harnessing the potential of probiotics in the treatment of alcoholic liver disorders]]
- [[../sources/2023-li-exopolysaccharides-lactobacillus-rhamnosus-gg-ameliorate|2023 · Li — Exopolysaccharides of  Lactobacillus rhamnosus  GG ameliorate  Salmonella typhimurium -ind]]
- [[../sources/2023-domnguezdaz-recombinant-p40-protein-promotes-expression|2023 · Domínguez-Díaz — Recombinant p40 Protein Promotes Expression of Occludin in HaCaT Keratinocytes: A Brief Co]]
- [[../sources/2021-deng-exposure-p40-early-life-prevents|2021 · Deng — Exposure to p40 in Early Life Prevents Intestinal Inflammation in Adulthood Through Induci]]
- [[../sources/2020-yan-probiotics-probiotic-derived-functional-factors|2020 · Yan — Probiotics and Probiotic-Derived Functional Factors—Mechanistic Insights Into Applications]]
- [[../sources/2018-shen-supplementation-p40-lactobacillus-rhamnosus-gg|2018 · Shen — Supplementation of p40, a  Lactobacillus rhamnosus  GG-derived protein, in early life prom]]
- [[../sources/2017-yan-neonatal-colonization-mice-lgg-promotes|2016 · Yan — Neonatal Colonization of Mice with LGG Promotes Intestinal Development and Decreases Susce]]
- [[../sources/2010-yan-probiotics-progress-toward-novel-therapies|2010 · Yan — Probiotics: progress toward novel therapies for intestinal diseases]]
