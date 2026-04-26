---
type: source
id: 2025-guo-effects-lt-gt-lactobacillus-paracei
source_type: paper
title: "Effects of  Lactobacillus paracei  JY062 Postbiotic on Intestinal Barrier, Immunity, and Gut Microbiota"
authors: ["Guo Jinfeng", "Zhao Ying", "Guo Wenqian", "Sun Yilin", "Zhang Wei", "Zhao Qianyu", "Zhang Yu", "Jiang Yujun"]
year: 2025
doi: 10.3390/nu17071272
raw_path: raw/papers/2025-guo-effects-lt-gt-lactobacillus-paracei.xml
tags: [paper, LGG, FITC-dextran, permeability, p40, postbiotic]
created: 2026-04-25
updated: 2026-04-25
synthesis: scaffold
---

# Effects of  Lactobacillus paracei  JY062 Postbiotic on Intestinal Barrier, Immunity, and Gut Microbiota

**Guo Jinfeng et al., 2025** · doi:`10.3390/nu17071272` · `` · raw: `raw/papers/2025-guo-effects-lt-gt-lactobacillus-paracei.xml`

## Why this is in the wiki

LGG-specific;FITC-dextran method;p40 / LGG soluble protein;tight-junction biology;DSS-colitis comparator;alcohol-leaky-gut comparator;heat-killed / postbiotic LGG.

## Synthesis

_Scaffold — to be enriched with key claims, supports/contradicts, and notable quotes during Pass 2 hand-pass on top-N sources._

## Methods used

- [[../methods/FITC-dextran-permeability-assay|FITC-dextran intestinal permeability assay]] — in vivo paracellular permeability readout via plasma fluorescence after oral FITC-dextran gavage
- [[../methods/DSS-colitis-model|DSS-induced colitis (mouse)]] — chemical disruption of the colonic epithelium by dextran sulfate sodium in drinking water
- [[../methods/alcohol-induced-leaky-gut-model|alcohol / ethanol-induced gut barrier disruption]] — acute or chronic ethanol exposure to model alcoholic liver disease and gut hyperpermeability
- [[../methods/Ussing-chamber-TEER|Ussing chamber & transepithelial electrical resistance (TEER)]] — ex vivo electrophysiological measurement of mucosal barrier integrity
- [[../methods/16S-rRNA-microbiome-sequencing|16S rRNA gene sequencing / qPCR]] — taxonomic profiling of the gut microbiota community
- [[../methods/ELISA-cytokine-quantification|ELISA cytokine and barrier-marker quantification]] — plasma / mucosal cytokine, LBP, lipocalin-2 measurement
- [[../methods/SCFA-quantification|short-chain fatty acid quantification]] — GC/HPLC quantification of acetate / propionate / butyrate in caecum or faeces
- [[../methods/LPS-endotoxin-quantification|plasma LPS / endotoxin quantification (LAL)]] — limulus amoebocyte lysate or LBP ELISA as systemic translocation surrogate
## Reagents

- [[../reagents/FITC-dextran-4kDa|FITC-dextran 4 kDa (FD-4)]] — the canonical small-molecule paracellular probe for in vivo permeability
- [[../reagents/DSS|dextran sulfate sodium (DSS)]] — colitogenic polymer used to break the epithelial barrier in mice
- [[../reagents/MRS-broth|de Man, Rogosa & Sharpe (MRS) broth]] — selective Lactobacillus growth medium
- [[../reagents/LPS|lipopolysaccharide (LPS / endotoxin)]] — gram-negative cell-wall component used as a barrier challenge or translocation marker
- [[../reagents/p40-LGG-derived-protein|p40 (Msp1) — LGG-derived secreted soluble protein]] — ~40 kDa secreted soluble protein; activates EGFR-PI3K/Akt; protects barrier
## Organisms

- [[../organisms/lactobacillus-rhamnosus-GG|Lacticaseibacillus rhamnosus GG (LGG / ATCC 53103 / DSM 33156)]] — the most-studied human-origin probiotic Lactobacillus
- [[../organisms/Caco-2|Caco-2 (human colorectal carcinoma, intestinal-epithelial-cell model)]] — differentiated monolayers approximate small-intestinal epithelium for in vitro TEER and permeability
## Failure modes flagged

- [[../failure-modes/serum-autofluorescence-FITC-readout|serum autofluorescence inflates FITC-dextran readout]] — plasma haemolysis / lipaemia / endogenous chromophores raise blank fluorescence; small effects can vanish into baseline noise
- [[../failure-modes/FITC-dextran-photobleaching|FITC-dextran photobleaching during prep / read]] — FITC bleaches under ambient light; sample prep without amber tubes systematically underestimates permeability
- [[../failure-modes/incomplete-fasting-before-gavage|incomplete fasting before FITC-dextran gavage]] — food in the stomach dilutes & delays FD-4 absorption; lack of standardised 4-6 h fast is a top source of inter-lab variance
- [[../failure-modes/FITC-dextran-dose-timing-heterogeneity|FD-4 dose & blood-draw timing not standardised]] — published doses span 60–750 mg/kg, draw times 1–4 h; cross-study comparison without harmonisation is unreliable
- [[../failure-modes/LGG-strain-drift-passage|LGG genotypic / phenotypic drift on lab passage]] — long lab passage of LGG selects for plasmid loss and reduced adhesion / EPS production; verify identity at study start
- [[../failure-modes/LGG-viability-loss-during-gavage-prep|LGG viability loss between thaw and gavage]] — poor cold-chain or long bench time before dosing drops viable CFU 1-3 logs; verify CFU on the dose-day plate
- [[../failure-modes/coprophagy-microbiome-equilibration|coprophagy equilibrates microbiomes across co-housed cages]] — co-housing LGG vs control mice or sharing rack air-flow lets faecal LGG cross to controls; effect collapses to null
- [[../failure-modes/baseline-permeability-too-low-detect-30pct|baseline permeability too low to detect a 30 % drop]] — unstressed adult C57BL/6 plasma FD-4 is already at assay floor; 30 % reduction may be undetectable without a barrier challenge
- [[../failure-modes/challenge-model-vs-baseline-mismatch|published LGG-barrier evidence comes from challenge models, not baseline mice]] — most cited LGG-permeability work uses DSS / alcohol / HFD / NEC. Generalising to unchallenged C57BL/6 may be unwarranted
- [[../failure-modes/LPS-contamination-bacterial-prep|endotoxin / LPS contamination of LGG prep]] — residual gram-negative LPS in lab-grown LGG cultures can drive a cytokine response wrongly attributed to LGG itself
## Abstract

Background/Objectives: Research on postbiotics derived from probiotic fermented milk bases require further expansion, and the mechanisms through which they exert their effects have yet to be fully elucidated. This study utilized in vitro cell co-culture, digestion, and fermentation experiments, combined with targeted T500 technology, to elucidate the mechanism by which postbiotic Pa JY062 safeguards intestinal health. Compared to the LPS group, Pa JY062 boosted phagocytic ability in RAW264.7 macrophages, decreased NO levels, and alleviated LPS-induced excessive inflammation. Pa JY062 suppressed pro-inflammatory cytokines (IL-6, IL-17α, and TNF-α) while elevating anti-inflammatory IL-10. It prevented LPS-induced TEER reduction in Caco-2 monolayers, decreased FITC-dextran permeability, restored intestinal microvilli integrity, and upregulated tight junction genes ( ZO-1 ,  occludin ,  claudin-1 , and  E-cadherin ). The hydrolysis rate of Pa JY062 progressively rose in gastrointestinal fluids in 0–120 min. At 5 mg/mL, it enriched gut microbiota diversity and elevated proportions of  Limosilactobacillus ,  Lactobacillus ,  Pediococcus , and  Lacticaseibacillus  while augmenting the mic

