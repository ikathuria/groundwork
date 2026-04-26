---
type: source
id: 2025-liu-lactobacillus-johnsonii-alleviates-experimental-colitis
source_type: paper
title: "Lactobacillus johnsonii  alleviates experimental colitis by restoring intestinal barrier function and reducing NET-mediated gut-liver inflammation"
authors: ["Liu Hao-Yu", "Yuan Peng", "Li Shicheng", "Ogamune Kennedy Jerry", "Shi Xinyu", "Zhu Cuipeng", "Ennab Wael", "Hu Ping", "Ahmed Abdelkareem A.", "Zhang Yunzeng", "Kim In Ho", "Cai Demin"]
year: 2025
doi: 10.1038/s42003-025-08679-4
raw_path: raw/papers/2025-liu-lactobacillus-johnsonii-alleviates-experimental-colitis.xml
tags: [paper, LGG, FITC-dextran, permeability]
created: 2026-04-25
updated: 2026-04-25
synthesis: scaffold
---

# Lactobacillus johnsonii  alleviates experimental colitis by restoring intestinal barrier function and reducing NET-mediated gut-liver inflammation

**Liu Hao-Yu et al., 2025** · doi:`10.1038/s42003-025-08679-4` · `` · raw: `raw/papers/2025-liu-lactobacillus-johnsonii-alleviates-experimental-colitis.xml`

## Why this is in the wiki

LGG-specific;FITC-dextran method;tight-junction biology;DSS-colitis comparator.

## Synthesis

_Scaffold — to be enriched with key claims, supports/contradicts, and notable quotes during Pass 2 hand-pass on top-N sources._

## Methods used

- [[../methods/FITC-dextran-permeability-assay|FITC-dextran intestinal permeability assay]] — in vivo paracellular permeability readout via plasma fluorescence after oral FITC-dextran gavage
- [[../methods/oral-gavage-mouse|oral gavage in mice]] — intragastric dose delivery to mice via curved feeding needle
- [[../methods/DSS-colitis-model|DSS-induced colitis (mouse)]] — chemical disruption of the colonic epithelium by dextran sulfate sodium in drinking water
- [[../methods/16S-rRNA-microbiome-sequencing|16S rRNA gene sequencing / qPCR]] — taxonomic profiling of the gut microbiota community
- [[../methods/Western-blot-tight-junction|Western blot / immunofluorescence of tight-junction proteins]] — protein-level quantification of ZO-1, occludin, claudins
- [[../methods/ELISA-cytokine-quantification|ELISA cytokine and barrier-marker quantification]] — plasma / mucosal cytokine, LBP, lipocalin-2 measurement
- [[../methods/bacterial-CFU-enumeration|bacterial CFU enumeration]] — viable cell counting by serial-dilution plating on selective agar
- [[../methods/SCFA-quantification|short-chain fatty acid quantification]] — GC/HPLC quantification of acetate / propionate / butyrate in caecum or faeces
- [[../methods/LPS-endotoxin-quantification|plasma LPS / endotoxin quantification (LAL)]] — limulus amoebocyte lysate or LBP ELISA as systemic translocation surrogate
## Reagents

- [[../reagents/FITC-dextran-4kDa|FITC-dextran 4 kDa (FD-4)]] — the canonical small-molecule paracellular probe for in vivo permeability
- [[../reagents/DSS|dextran sulfate sodium (DSS)]] — colitogenic polymer used to break the epithelial barrier in mice
- [[../reagents/MRS-broth|de Man, Rogosa & Sharpe (MRS) broth]] — selective Lactobacillus growth medium
- [[../reagents/LPS|lipopolysaccharide (LPS / endotoxin)]] — gram-negative cell-wall component used as a barrier challenge or translocation marker
- [[../reagents/LGG-extracellular-vesicles|LGG-derived extracellular vesicles (EVs)]] — membrane-bounded particles carrying p40, EPS, MDP and other cargo
## Organisms

- [[../organisms/lactobacillus-rhamnosus-GG|Lacticaseibacillus rhamnosus GG (LGG / ATCC 53103 / DSM 33156)]] — the most-studied human-origin probiotic Lactobacillus
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

Inflammatory bowel disease (IBD) remains a global health challenge linked to intestinal barrier disruption, microbiota dysbiosis, and immune dysregulation, though the interplay of these mechanisms remains poorly defined. Here, we investigated the therapeutic potential of  Lactobacillus johnsonii  N5 in a murine dextran sulfate sodium (DSS)-induced colitis model. Prophylactic N5 administration alleviated colitis symptoms (weight loss, colon shortening), reduced fecal and serum lipocalin-2 levels, and suppressed colonic pro-inflammatory cytokines (IL-1β, IL-6). N5 preserved microbial diversity, enhanced mucus secretion, and reinforced mucosal barrier integrity, preventing colitis onset. Therapeutically, N5 attenuated disease progression by downregulating IL-1β, IL-6, IL-8 expression, restoring  Lactobacillus  populations, and suppressing  Escherichia-Shigella  expansion, thereby reducing bacterial translocation and systemic inflammation. N5 promoted Ki67 +  epithelial proliferation, accelerating mucosal repair. Mechanistically, N5 targeted neutrophil-mediated gut-liver injury, suppressing coagulation pathways in colon-liver transcriptomes, reducing hepatic lesions, platelet aggregati

