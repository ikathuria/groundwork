---
type: source
id: 2026-lasaviciute-limosilactobacillus-reuteri-metabolites-modulate-immune
source_type: paper
title: "Limosilactobacillus reuteri  metabolites modulate immune pathways and intestinal barrier repair after 5 fluorouracil exposure"
authors: ["Lasaviciute Gintare", "López Plana Marta", "Sundberg Örtegren Sofia", "Telli Sevasteia", "Kourmoulakis Symeon", "Ermann Lundberg Ludwig", "Lidberg Kenny", "Peiris Oshadi", "Sinha Indranil", "Jonsson Ann-Beth", "Roos Stefan", "Nilsson Anna", "Mata Forsberg Manuel", "Sverremark-Ekström Eva"]
year: 2026
doi: 10.1038/s41598-026-45524-y
raw_path: raw/papers/2026-lasaviciute-limosilactobacillus-reuteri-metabolites-modulate-immune.xml
tags: [paper, LGG, FITC-dextran, permeability, postbiotic]
created: 2026-04-25
updated: 2026-04-25
synthesis: scaffold
---

# Limosilactobacillus reuteri  metabolites modulate immune pathways and intestinal barrier repair after 5 fluorouracil exposure

**Lasaviciute Gintare et al., 2026** · doi:`10.1038/s41598-026-45524-y` · `` · raw: `raw/papers/2026-lasaviciute-limosilactobacillus-reuteri-metabolites-modulate-immune.xml`

## Why this is in the wiki

LGG-specific;FITC-dextran method;tight-junction biology;probiotic safety / sepsis signal;heat-killed / postbiotic LGG.

## Synthesis

_Scaffold — to be enriched with key claims, supports/contradicts, and notable quotes during Pass 2 hand-pass on top-N sources._

## Methods used

- [[../methods/FITC-dextran-permeability-assay|FITC-dextran intestinal permeability assay]] — in vivo paracellular permeability readout via plasma fluorescence after oral FITC-dextran gavage
- [[../methods/Ussing-chamber-TEER|Ussing chamber & transepithelial electrical resistance (TEER)]] — ex vivo electrophysiological measurement of mucosal barrier integrity
- [[../methods/Western-blot-tight-junction|Western blot / immunofluorescence of tight-junction proteins]] — protein-level quantification of ZO-1, occludin, claudins
- [[../methods/LPS-endotoxin-quantification|plasma LPS / endotoxin quantification (LAL)]] — limulus amoebocyte lysate or LBP ELISA as systemic translocation surrogate
## Reagents

- [[../reagents/FITC-dextran-4kDa|FITC-dextran 4 kDa (FD-4)]] — the canonical small-molecule paracellular probe for in vivo permeability
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
- [[../failure-modes/probiotic-bacteremia-sepsis|probiotic bacteraemia / sepsis (rare but serious)]] — viable LGG can translocate in immunocompromised, preterm, or barrier-injured hosts and cause bloodstream infection
- [[../failure-modes/LPS-contamination-bacterial-prep|endotoxin / LPS contamination of LGG prep]] — residual gram-negative LPS in lab-grown LGG cultures can drive a cytokine response wrongly attributed to LGG itself
- [[../failure-modes/ZO-1-occludin-detection-artifacts|tight-junction protein detection artefacts]] — non-specific bands, antibody clone variability, and quantification of total vs membrane-localised pools all bias interpretation
## Abstract

Antimetabolites such as 5 fluorouracil are known to induce inflammation in the gut and oral cavity, underscoring the need for strategies that mitigate chemotherapy-associated toxicity. The aim of this study was to determine whether secreted components from the probiotic bacterium  Limosilactobacillus reuteri  DSM 17938, specifically cell-free supernatant, exopolysaccharides, and extracellular membrane vesicles, can support epithelial barrier recovery following 5 fluorouracil-induced injury. Exposure to 5 fluorouracil impaired viability, metabolic activity, and barrier integrity, and shifted the functional responses of Caco-2 cells toward increased inflammation. Stimulation with exopolysaccharides after removal of 5 fluorouracil significantly improved barrier integrity in both enterocyte-like Caco-2 cells and primary human intestinal epithelial cells, while paradoxically inducing an inflammatory protein profile in the enterocyte-like cells. Transcriptomic analysis revealed that exopolysaccharides modulate gene programs associated with extracellular matrix organization and structural remodelling. Furthermore, cell-free supernatant, membrane vesicles, and exopolysaccharides differenti

