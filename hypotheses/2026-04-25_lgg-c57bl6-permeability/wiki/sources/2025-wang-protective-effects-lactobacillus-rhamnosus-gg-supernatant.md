---
type: source
id: 2025-wang-protective-effects-lactobacillus-rhamnosus-gg-supernatant
source_type: paper
title: "Protective effects of  Lactobacillus rhamnosus  GG supernatant on metabolic associated fatty liver disease through intestinal barrier restoration and regulation of the regenerating gene 3γ"
authors: ["Wang Si-Pu", "Ba Ling", "Lv Xin-Rui", "Qi Ya-Xin", "Wang Xu", "Zhang Jie", "Xu Xin"]
year: 2025
doi: 10.3389/fmicb.2025.1580171
raw_path: raw/papers/2025-wang-protective-effects-lactobacillus-rhamnosus-gg-supernatant.xml
tags: [paper, LGG, FITC-dextran, permeability, p40]
created: 2026-04-25
updated: 2026-04-25
synthesis: scaffold
---

# Protective effects of  Lactobacillus rhamnosus  GG supernatant on metabolic associated fatty liver disease through intestinal barrier restoration and regulation of the regenerating gene 3γ

**Wang Si-Pu et al., 2025** · doi:`10.3389/fmicb.2025.1580171` · `` · raw: `raw/papers/2025-wang-protective-effects-lactobacillus-rhamnosus-gg-supernatant.xml`

## Why this is in the wiki

LGG-specific;FITC-dextran method;p40 / LGG soluble protein;tight-junction biology;alcohol-leaky-gut comparator;HFD comparator.

## Synthesis

_Scaffold — to be enriched with key claims, supports/contradicts, and notable quotes during Pass 2 hand-pass on top-N sources._

## Methods used

- [[../methods/FITC-dextran-permeability-assay|FITC-dextran intestinal permeability assay]] — in vivo paracellular permeability readout via plasma fluorescence after oral FITC-dextran gavage
- [[../methods/oral-gavage-mouse|oral gavage in mice]] — intragastric dose delivery to mice via curved feeding needle
- [[../methods/alcohol-induced-leaky-gut-model|alcohol / ethanol-induced gut barrier disruption]] — acute or chronic ethanol exposure to model alcoholic liver disease and gut hyperpermeability
- [[../methods/high-fat-diet-model|high-fat diet (HFD) gut barrier model]] — diet-induced obesity and metabolic endotoxaemia, often with measurable barrier loss
- [[../methods/16S-rRNA-microbiome-sequencing|16S rRNA gene sequencing / qPCR]] — taxonomic profiling of the gut microbiota community
- [[../methods/Western-blot-tight-junction|Western blot / immunofluorescence of tight-junction proteins]] — protein-level quantification of ZO-1, occludin, claudins
- [[../methods/ELISA-cytokine-quantification|ELISA cytokine and barrier-marker quantification]] — plasma / mucosal cytokine, LBP, lipocalin-2 measurement
- [[../methods/LPS-endotoxin-quantification|plasma LPS / endotoxin quantification (LAL)]] — limulus amoebocyte lysate or LBP ELISA as systemic translocation surrogate
## Reagents

- [[../reagents/FITC-dextran-4kDa|FITC-dextran 4 kDa (FD-4)]] — the canonical small-molecule paracellular probe for in vivo permeability
- [[../reagents/MRS-broth|de Man, Rogosa & Sharpe (MRS) broth]] — selective Lactobacillus growth medium
- [[../reagents/LPS|lipopolysaccharide (LPS / endotoxin)]] — gram-negative cell-wall component used as a barrier challenge or translocation marker
- [[../reagents/p40-LGG-derived-protein|p40 (Msp1) — LGG-derived secreted soluble protein]] — ~40 kDa secreted soluble protein; activates EGFR-PI3K/Akt; protects barrier
## Organisms

- [[../organisms/C57BL-6|Mus musculus, C57BL/6 inbred strain]] — the canonical inbred mouse strain for gut-microbiome and barrier studies
- [[../organisms/lactobacillus-rhamnosus-GG|Lacticaseibacillus rhamnosus GG (LGG / ATCC 53103 / DSM 33156)]] — the most-studied human-origin probiotic Lactobacillus
- [[../organisms/Caco-2|Caco-2 (human colorectal carcinoma, intestinal-epithelial-cell model)]] — differentiated monolayers approximate small-intestinal epithelium for in vitro TEER and permeability
## Failure modes flagged

- [[../failure-modes/serum-autofluorescence-FITC-readout|serum autofluorescence inflates FITC-dextran readout]] — plasma haemolysis / lipaemia / endogenous chromophores raise blank fluorescence; small effects can vanish into baseline noise
- [[../failure-modes/FITC-dextran-photobleaching|FITC-dextran photobleaching during prep / read]] — FITC bleaches under ambient light; sample prep without amber tubes systematically underestimates permeability
- [[../failure-modes/incomplete-fasting-before-gavage|incomplete fasting before FITC-dextran gavage]] — food in the stomach dilutes & delays FD-4 absorption; lack of standardised 4-6 h fast is a top source of inter-lab variance
- [[../failure-modes/FITC-dextran-dose-timing-heterogeneity|FD-4 dose & blood-draw timing not standardised]] — published doses span 60–750 mg/kg, draw times 1–4 h; cross-study comparison without harmonisation is unreliable
- [[../failure-modes/LGG-strain-drift-passage|LGG genotypic / phenotypic drift on lab passage]] — long lab passage of LGG selects for plasmid loss and reduced adhesion / EPS production; verify identity at study start
- [[../failure-modes/LGG-viability-loss-during-gavage-prep|LGG viability loss between thaw and gavage]] — poor cold-chain or long bench time before dosing drops viable CFU 1-3 logs; verify CFU on the dose-day plate
- [[../failure-modes/C57BL-6J-vs-N-substrain-confounder|C57BL/6J vs C57BL/6N substrain confounder]] — Nnt deletion in 6J vs full Nnt in 6N alters mitochondrial redox; differing baseline microbiome and barrier behaviour
- [[../failure-modes/vendor-of-origin-microbiome-baseline|vendor-of-origin microbiome shifts baseline barrier]] — Jackson vs Taconic vs Charles River mice arrive with measurably different commensals; an LGG niche may already be occupied or empty
- [[../failure-modes/coprophagy-microbiome-equilibration|coprophagy equilibrates microbiomes across co-housed cages]] — co-housing LGG vs control mice or sharing rack air-flow lets faecal LGG cross to controls; effect collapses to null
- [[../failure-modes/baseline-permeability-too-low-detect-30pct|baseline permeability too low to detect a 30 % drop]] — unstressed adult C57BL/6 plasma FD-4 is already at assay floor; 30 % reduction may be undetectable without a barrier challenge
- [[../failure-modes/challenge-model-vs-baseline-mismatch|published LGG-barrier evidence comes from challenge models, not baseline mice]] — most cited LGG-permeability work uses DSS / alcohol / HFD / NEC. Generalising to unchallenged C57BL/6 may be unwarranted
- [[../failure-modes/LPS-contamination-bacterial-prep|endotoxin / LPS contamination of LGG prep]] — residual gram-negative LPS in lab-grown LGG cultures can drive a cytokine response wrongly attributed to LGG itself
- [[../failure-modes/ZO-1-occludin-detection-artifacts|tight-junction protein detection artefacts]] — non-specific bands, antibody clone variability, and quantification of total vs membrane-localised pools all bias interpretation
## Abstract

Objective The regenerating gene 3γ (Reg IIIγ) protein, a key antimicrobial peptide, is essential for maintaining intestinal barrier homeostasis and host defense. Its expression is impaired in metabolic-associated fatty liver disease (MAFLD), particularly under high-fat diet (HFD) conditions, contributing to barrier dysfunction. Given evidence that probiotic-derived components can modulate Reg IIIγ, this study aimed to evaluate the effects of  Lactobacillus rhamnosus  GG supernatant (LGGs) on Reg IIIγ expression, their impact on intestinal barrier function, and their therapeutic potential in mitigating MAFLD, while elucidating the underlying mechanisms involving the TLR2/MyD88/pSTAT3 signaling pathway. Methods Six-week-old C57BL/6 J mice were randomly assigned to four groups: standard diet with phosphate-buffered saline (PBS), standard diet with LGGs, high-fat diet (HFD) with PBS, and HFD with LGG. The expression of intestinal Reg IIIγ, changes in intestinal microbiota, and intestinal permeability were analyzed using quantitative PCR (qPCR) and western blot techniques.  In vitro  experiments involved assessing HIP/PAP expression in Caco-2 cell lines following stimulation with LGG su

