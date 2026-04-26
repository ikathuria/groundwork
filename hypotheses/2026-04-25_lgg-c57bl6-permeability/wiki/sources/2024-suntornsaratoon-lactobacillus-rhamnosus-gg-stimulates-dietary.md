---
type: source
id: 2024-suntornsaratoon-lactobacillus-rhamnosus-gg-stimulates-dietary
source_type: paper
title: "Lactobacillus rhamnosus  GG Stimulates Dietary Tryptophan-Dependent Production of Barrier-Protecting Methylnicotinamide"
authors: ["Suntornsaratoon Panan", "Antonio Jayson M.", "Flores Juan", "Upadhyay Ravij", "Veltri John", "Bandyopadhyay Sheila", "Dadala Rhema", "Kim Michael", "Liu Yue", "Balasubramanian Iyshwarya", "Turner Jerrold R.", "Su Xiaoyang", "Li Wei Vivian", "Gao Nan", "Ferraris Ronaldo P."]
year: 2024
doi: 10.1016/j.jcmgh.2024.04.003
raw_path: raw/papers/2024-suntornsaratoon-lactobacillus-rhamnosus-gg-stimulates-dietary.xml
tags: [paper, LGG, FITC-dextran, permeability, p40]
created: 2026-04-25
updated: 2026-04-25
synthesis: scaffold
---

# Lactobacillus rhamnosus  GG Stimulates Dietary Tryptophan-Dependent Production of Barrier-Protecting Methylnicotinamide

**Suntornsaratoon Panan et al., 2024** · doi:`10.1016/j.jcmgh.2024.04.003` · `` · raw: `raw/papers/2024-suntornsaratoon-lactobacillus-rhamnosus-gg-stimulates-dietary.xml`

## Why this is in the wiki

LGG-specific;FITC-dextran method;p40 / LGG soluble protein;tight-junction biology;DSS-colitis comparator.

## Synthesis

_Scaffold — to be enriched with key claims, supports/contradicts, and notable quotes during Pass 2 hand-pass on top-N sources._

## Methods used

- [[../methods/FITC-dextran-permeability-assay|FITC-dextran intestinal permeability assay]] — in vivo paracellular permeability readout via plasma fluorescence after oral FITC-dextran gavage
- [[../methods/DSS-colitis-model|DSS-induced colitis (mouse)]] — chemical disruption of the colonic epithelium by dextran sulfate sodium in drinking water
- [[../methods/Ussing-chamber-TEER|Ussing chamber & transepithelial electrical resistance (TEER)]] — ex vivo electrophysiological measurement of mucosal barrier integrity
- [[../methods/16S-rRNA-microbiome-sequencing|16S rRNA gene sequencing / qPCR]] — taxonomic profiling of the gut microbiota community
- [[../methods/Western-blot-tight-junction|Western blot / immunofluorescence of tight-junction proteins]] — protein-level quantification of ZO-1, occludin, claudins
- [[../methods/bacterial-CFU-enumeration|bacterial CFU enumeration]] — viable cell counting by serial-dilution plating on selective agar
- [[../methods/SCFA-quantification|short-chain fatty acid quantification]] — GC/HPLC quantification of acetate / propionate / butyrate in caecum or faeces
- [[../methods/LPS-endotoxin-quantification|plasma LPS / endotoxin quantification (LAL)]] — limulus amoebocyte lysate or LBP ELISA as systemic translocation surrogate
## Reagents

- [[../reagents/FITC-dextran-4kDa|FITC-dextran 4 kDa (FD-4)]] — the canonical small-molecule paracellular probe for in vivo permeability
- [[../reagents/DSS|dextran sulfate sodium (DSS)]] — colitogenic polymer used to break the epithelial barrier in mice
- [[../reagents/MRS-broth|de Man, Rogosa & Sharpe (MRS) broth]] — selective Lactobacillus growth medium
- [[../reagents/LPS|lipopolysaccharide (LPS / endotoxin)]] — gram-negative cell-wall component used as a barrier challenge or translocation marker
- [[../reagents/p40-LGG-derived-protein|p40 (Msp1) — LGG-derived secreted soluble protein]] — ~40 kDa secreted soluble protein; activates EGFR-PI3K/Akt; protects barrier
## Organisms

- [[../organisms/C57BL-6|Mus musculus, C57BL/6 inbred strain]] — the canonical inbred mouse strain for gut-microbiome and barrier studies
- [[../organisms/lactobacillus-rhamnosus-GG|Lacticaseibacillus rhamnosus GG (LGG / ATCC 53103 / DSM 33156)]] — the most-studied human-origin probiotic Lactobacillus
- [[../organisms/lactobacillus-rhamnosus-other-strains|Lactobacillus rhamnosus, non-GG strains]] — comparator L. rhamnosus strains (BL23, HN001, etc.) used in similar barrier studies
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

Background & Aims Lacticaseibacillus rhamnosus  GG (LGG) is the world’s most consumed probiotic but its mechanism of action on intestinal permeability and differentiation along with its interactions with an essential source of signaling metabolites, dietary tryptophan (trp), are unclear. Methods Untargeted metabolomic and transcriptomic analyses were performed in LGG monocolonized germ-free mice fed trp-free or -sufficient diets. LGG-derived metabolites were profiled in vitro under anaerobic and aerobic conditions. Multiomic correlations using a newly developed algorithm discovered novel metabolites tightly linked to tight junction and cell differentiation genes whose abundances were regulated by LGG and dietary trp. Barrier-modulation by these metabolites were functionally tested in Caco2 cells, mouse enteroids, and dextran sulfate sodium experimental colitis. The contribution of these metabolites to barrier protection is delineated at specific tight junction proteins and enterocyte-promoting factors with gain and loss of function approaches. Results LGG, strictly with dietary trp, promotes the enterocyte program and expression of tight junction genes, particularly  Ocln . Functio

