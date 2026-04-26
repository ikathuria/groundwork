---
type: source
id: 2025-orlando-lt-gt-lactobacillus-rhamnosus-lt
source_type: paper
title: "Lactobacillus rhamnosus  GG and  Lactobacillus paracasei  IMPC2.1 Mitigate LPS-Induced Epithelial Barrier Dysfunction: A Focus on Autophagy Regulation"
authors: ["Orlando Antonella", "Maqoud Fatima", "Mallardi Domenica", "Drago Simona", "Malerba Eleonora", "Chimienti Guglielmina", "Russo Francesco"]
year: 2025
doi: 10.3390/ijms262211148
raw_path: raw/papers/2025-orlando-lt-gt-lactobacillus-rhamnosus-lt.xml
tags: [paper, LGG, FITC-dextran, permeability, postbiotic]
created: 2026-04-25
updated: 2026-04-25
synthesis: scaffold
---

# Lactobacillus rhamnosus  GG and  Lactobacillus paracasei  IMPC2.1 Mitigate LPS-Induced Epithelial Barrier Dysfunction: A Focus on Autophagy Regulation

**Orlando Antonella et al., 2025** · doi:`10.3390/ijms262211148` · `` · raw: `raw/papers/2025-orlando-lt-gt-lactobacillus-rhamnosus-lt.xml`

## Why this is in the wiki

LGG-specific;FITC-dextran method;tight-junction biology;DSS-colitis comparator;HFD comparator;heat-killed / postbiotic LGG.

## Synthesis

_Scaffold — to be enriched with key claims, supports/contradicts, and notable quotes during Pass 2 hand-pass on top-N sources._

## Methods used

- [[../methods/FITC-dextran-permeability-assay|FITC-dextran intestinal permeability assay]] — in vivo paracellular permeability readout via plasma fluorescence after oral FITC-dextran gavage
- [[../methods/DSS-colitis-model|DSS-induced colitis (mouse)]] — chemical disruption of the colonic epithelium by dextran sulfate sodium in drinking water
- [[../methods/high-fat-diet-model|high-fat diet (HFD) gut barrier model]] — diet-induced obesity and metabolic endotoxaemia, often with measurable barrier loss
- [[../methods/Ussing-chamber-TEER|Ussing chamber & transepithelial electrical resistance (TEER)]] — ex vivo electrophysiological measurement of mucosal barrier integrity
- [[../methods/Western-blot-tight-junction|Western blot / immunofluorescence of tight-junction proteins]] — protein-level quantification of ZO-1, occludin, claudins
- [[../methods/bacterial-CFU-enumeration|bacterial CFU enumeration]] — viable cell counting by serial-dilution plating on selective agar
- [[../methods/SCFA-quantification|short-chain fatty acid quantification]] — GC/HPLC quantification of acetate / propionate / butyrate in caecum or faeces
- [[../methods/LPS-endotoxin-quantification|plasma LPS / endotoxin quantification (LAL)]] — limulus amoebocyte lysate or LBP ELISA as systemic translocation surrogate
## Reagents

- [[../reagents/FITC-dextran-4kDa|FITC-dextran 4 kDa (FD-4)]] — the canonical small-molecule paracellular probe for in vivo permeability
- [[../reagents/DSS|dextran sulfate sodium (DSS)]] — colitogenic polymer used to break the epithelial barrier in mice
- [[../reagents/MRS-broth|de Man, Rogosa & Sharpe (MRS) broth]] — selective Lactobacillus growth medium
- [[../reagents/LPS|lipopolysaccharide (LPS / endotoxin)]] — gram-negative cell-wall component used as a barrier challenge or translocation marker
- [[../reagents/LGG-exopolysaccharide-EPS|LGG exopolysaccharide (EPS)]] — polysaccharide layer with anti-inflammatory and barrier-supporting activity
## Organisms

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
- [[../failure-modes/coprophagy-microbiome-equilibration|coprophagy equilibrates microbiomes across co-housed cages]] — co-housing LGG vs control mice or sharing rack air-flow lets faecal LGG cross to controls; effect collapses to null
- [[../failure-modes/baseline-permeability-too-low-detect-30pct|baseline permeability too low to detect a 30 % drop]] — unstressed adult C57BL/6 plasma FD-4 is already at assay floor; 30 % reduction may be undetectable without a barrier challenge
- [[../failure-modes/challenge-model-vs-baseline-mismatch|published LGG-barrier evidence comes from challenge models, not baseline mice]] — most cited LGG-permeability work uses DSS / alcohol / HFD / NEC. Generalising to unchallenged C57BL/6 may be unwarranted
- [[../failure-modes/LPS-contamination-bacterial-prep|endotoxin / LPS contamination of LGG prep]] — residual gram-negative LPS in lab-grown LGG cultures can drive a cytokine response wrongly attributed to LGG itself
- [[../failure-modes/ZO-1-occludin-detection-artifacts|tight-junction protein detection artefacts]] — non-specific bands, antibody clone variability, and quantification of total vs membrane-localised pools all bias interpretation
## Abstract

The intestinal epithelial barrier is critical for maintaining gut homeostasis, yet its integrity can be compromised by inflammation and microbial dysbiosis. Here, we demonstrate that  Lactobacillus rhamnosus GG  (LGG) and  Lactobacillus paracasei  IMPC2.1 ( L. paracasei ) show their effectiveness in enhancing epithelial barrier function and modulating autophagy, counteract the epithelial barrier dysfunction, induced by Lipopolysaccharide (LPS), in Caco-2 cells by modulating tight junction (TJ) protein expression through regulation of inflammation and apoptosis. LPS exposure significantly reduced transepithelial electrical resistance (TEER) and increased paracellular permeability, effects that were partially reversed by both probiotic strains. Western blot analysis revealed that LPS downregulated ZO-1, Occludin, and p-mTOR, while upregulating autophagy markers LC3-II and Beclin1, without affecting p62 levels. The latter finding indicated an impairment of autophagy flux, confirmed by immunofluorescence experiments. Co-treatment with LGG or  L. paracasei  restored TJ protein expression and alleviated the LPS-induced impairment of autophagic flux. Both probiotics suppressed LPS-induced

