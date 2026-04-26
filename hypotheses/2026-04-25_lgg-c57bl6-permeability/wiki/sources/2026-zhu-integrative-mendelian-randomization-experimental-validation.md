---
type: source
id: 2026-zhu-integrative-mendelian-randomization-experimental-validation
source_type: paper
title: "Integrative Mendelian randomization and experimental validation prioritize KLF4 in the gut microbiota–pyroptosis–barrier axis of ulcerative colitis"
authors: ["Zhu Wenya", "Jin Xiaoxu", "Guo Xiaofeng", "Gao Xin"]
year: 2026
doi: 10.3389/fimmu.2026.1773990
raw_path: raw/papers/2026-zhu-integrative-mendelian-randomization-experimental-validation.xml
tags: [paper, FITC-dextran, permeability]
created: 2026-04-25
updated: 2026-04-25
synthesis: scaffold
---

# Integrative Mendelian randomization and experimental validation prioritize KLF4 in the gut microbiota–pyroptosis–barrier axis of ulcerative colitis

**Zhu Wenya et al., 2026** · doi:`10.3389/fimmu.2026.1773990` · `` · raw: `raw/papers/2026-zhu-integrative-mendelian-randomization-experimental-validation.xml`

## Why this is in the wiki

FITC-dextran method;tight-junction biology;DSS-colitis comparator.

## Synthesis

_Scaffold — to be enriched with key claims, supports/contradicts, and notable quotes during Pass 2 hand-pass on top-N sources._

## Methods used

- [[../methods/FITC-dextran-permeability-assay|FITC-dextran intestinal permeability assay]] — in vivo paracellular permeability readout via plasma fluorescence after oral FITC-dextran gavage
- [[../methods/oral-gavage-mouse|oral gavage in mice]] — intragastric dose delivery to mice via curved feeding needle
- [[../methods/DSS-colitis-model|DSS-induced colitis (mouse)]] — chemical disruption of the colonic epithelium by dextran sulfate sodium in drinking water
- [[../methods/16S-rRNA-microbiome-sequencing|16S rRNA gene sequencing / qPCR]] — taxonomic profiling of the gut microbiota community
- [[../methods/Western-blot-tight-junction|Western blot / immunofluorescence of tight-junction proteins]] — protein-level quantification of ZO-1, occludin, claudins
- [[../methods/ELISA-cytokine-quantification|ELISA cytokine and barrier-marker quantification]] — plasma / mucosal cytokine, LBP, lipocalin-2 measurement
## Reagents

- [[../reagents/FITC-dextran-4kDa|FITC-dextran 4 kDa (FD-4)]] — the canonical small-molecule paracellular probe for in vivo permeability
- [[../reagents/DSS|dextran sulfate sodium (DSS)]] — colitogenic polymer used to break the epithelial barrier in mice
## Organisms

- [[../organisms/C57BL-6|Mus musculus, C57BL/6 inbred strain]] — the canonical inbred mouse strain for gut-microbiome and barrier studies
## Failure modes flagged

- [[../failure-modes/serum-autofluorescence-FITC-readout|serum autofluorescence inflates FITC-dextran readout]] — plasma haemolysis / lipaemia / endogenous chromophores raise blank fluorescence; small effects can vanish into baseline noise
- [[../failure-modes/FITC-dextran-photobleaching|FITC-dextran photobleaching during prep / read]] — FITC bleaches under ambient light; sample prep without amber tubes systematically underestimates permeability
- [[../failure-modes/incomplete-fasting-before-gavage|incomplete fasting before FITC-dextran gavage]] — food in the stomach dilutes & delays FD-4 absorption; lack of standardised 4-6 h fast is a top source of inter-lab variance
- [[../failure-modes/FITC-dextran-dose-timing-heterogeneity|FD-4 dose & blood-draw timing not standardised]] — published doses span 60–750 mg/kg, draw times 1–4 h; cross-study comparison without harmonisation is unreliable
- [[../failure-modes/C57BL-6J-vs-N-substrain-confounder|C57BL/6J vs C57BL/6N substrain confounder]] — Nnt deletion in 6J vs full Nnt in 6N alters mitochondrial redox; differing baseline microbiome and barrier behaviour
- [[../failure-modes/vendor-of-origin-microbiome-baseline|vendor-of-origin microbiome shifts baseline barrier]] — Jackson vs Taconic vs Charles River mice arrive with measurably different commensals; an LGG niche may already be occupied or empty
- [[../failure-modes/coprophagy-microbiome-equilibration|coprophagy equilibrates microbiomes across co-housed cages]] — co-housing LGG vs control mice or sharing rack air-flow lets faecal LGG cross to controls; effect collapses to null
- [[../failure-modes/baseline-permeability-too-low-detect-30pct|baseline permeability too low to detect a 30 % drop]] — unstressed adult C57BL/6 plasma FD-4 is already at assay floor; 30 % reduction may be undetectable without a barrier challenge
- [[../failure-modes/challenge-model-vs-baseline-mismatch|published LGG-barrier evidence comes from challenge models, not baseline mice]] — most cited LGG-permeability work uses DSS / alcohol / HFD / NEC. Generalising to unchallenged C57BL/6 may be unwarranted
- [[../failure-modes/ZO-1-occludin-detection-artifacts|tight-junction protein detection artefacts]] — non-specific bands, antibody clone variability, and quantification of total vs membrane-localised pools all bias interpretation
## Abstract

Background Ulcerative colitis (UC) arises from complex crosstalk between gut microbiota, epithelial barrier integrity, and inflammatory cell death, yet causal mediators along this axis remain poorly defined. We aimed to delineate microbiota–pyroptosis–UC pathways and functionally validate key effectors, with a focus on KLF4. Methods A multistage framework integrating genome-wide association studies of gut microbiota (MiBioGen), plasma proteomics (deCODE), and UC (UK Biobank) was constructed to perform two-sample Mendelian randomization (MR). Pyroptosis-related proteins were screened for causal associations with UC, followed by MR of UC-associated microbial taxa on these proteins and two-step mediation analysis. KLF4 was further evaluated using bulk and single-cell transcriptomic datasets, including virtual knockout network perturbation. Its clinical relevance was tested in two cohorts of UC patients receiving anti-TNF-α therapy. Finally, the KLF4 function was validated in a dextran sulfate sodium (DSS)-induced colitis model with systemic AAV9-mediated KLF4 overexpression. Results MR identified 35 pyroptosis-related plasma proteins and 23 microbial taxa with putative causal effects 

