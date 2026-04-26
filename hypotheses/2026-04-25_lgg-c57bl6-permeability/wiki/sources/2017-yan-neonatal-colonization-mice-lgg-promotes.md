---
type: source
id: 2017-yan-neonatal-colonization-mice-lgg-promotes
source_type: paper
title: "Neonatal Colonization of Mice with LGG Promotes Intestinal Development and Decreases Susceptibility to Colitis in Adulthood"
authors: ["Yan Fang", "Liu Liping", "Cao Hailong", "Moore Daniel J.", "Washington M. Kay", "Wang Bangmao", "Peek Richard M.", "Acra Sari A.", "Polk D. Brent"]
year: 2016
doi: 10.1038/mi.2016.43
raw_path: raw/papers/2017-yan-neonatal-colonization-mice-lgg-promotes.xml
tags: [paper, LGG, FITC-dextran, permeability, p40]
created: 2026-04-25
updated: 2026-04-25
synthesis: scaffold
---

# Neonatal Colonization of Mice with LGG Promotes Intestinal Development and Decreases Susceptibility to Colitis in Adulthood

**Yan Fang et al., 2016** · doi:`10.1038/mi.2016.43` · `` · raw: `raw/papers/2017-yan-neonatal-colonization-mice-lgg-promotes.xml`

## Why this is in the wiki

LGG-specific;FITC-dextran method;p40 / LGG soluble protein;tight-junction biology;DSS-colitis comparator;HFD comparator.

## Synthesis

_Scaffold — to be enriched with key claims, supports/contradicts, and notable quotes during Pass 2 hand-pass on top-N sources._

## Methods used

- [[../methods/FITC-dextran-permeability-assay|FITC-dextran intestinal permeability assay]] — in vivo paracellular permeability readout via plasma fluorescence after oral FITC-dextran gavage
- [[../methods/oral-gavage-mouse|oral gavage in mice]] — intragastric dose delivery to mice via curved feeding needle
- [[../methods/DSS-colitis-model|DSS-induced colitis (mouse)]] — chemical disruption of the colonic epithelium by dextran sulfate sodium in drinking water
- [[../methods/high-fat-diet-model|high-fat diet (HFD) gut barrier model]] — diet-induced obesity and metabolic endotoxaemia, often with measurable barrier loss
- [[../methods/16S-rRNA-microbiome-sequencing|16S rRNA gene sequencing / qPCR]] — taxonomic profiling of the gut microbiota community
- [[../methods/ELISA-cytokine-quantification|ELISA cytokine and barrier-marker quantification]] — plasma / mucosal cytokine, LBP, lipocalin-2 measurement
- [[../methods/bacterial-CFU-enumeration|bacterial CFU enumeration]] — viable cell counting by serial-dilution plating on selective agar
## Reagents

- [[../reagents/FITC-dextran-4kDa|FITC-dextran 4 kDa (FD-4)]] — the canonical small-molecule paracellular probe for in vivo permeability
- [[../reagents/DSS|dextran sulfate sodium (DSS)]] — colitogenic polymer used to break the epithelial barrier in mice
- [[../reagents/MRS-broth|de Man, Rogosa & Sharpe (MRS) broth]] — selective Lactobacillus growth medium
- [[../reagents/p40-LGG-derived-protein|p40 (Msp1) — LGG-derived secreted soluble protein]] — ~40 kDa secreted soluble protein; activates EGFR-PI3K/Akt; protects barrier
## Organisms

- [[../organisms/C57BL-6|Mus musculus, C57BL/6 inbred strain]] — the canonical inbred mouse strain for gut-microbiome and barrier studies
- [[../organisms/lactobacillus-rhamnosus-GG|Lacticaseibacillus rhamnosus GG (LGG / ATCC 53103 / DSM 33156)]] — the most-studied human-origin probiotic Lactobacillus
- [[../organisms/lactobacillus-rhamnosus-other-strains|Lactobacillus rhamnosus, non-GG strains]] — comparator L. rhamnosus strains (BL23, HN001, etc.) used in similar barrier studies
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
## Abstract

Development of the intestinal microbiota during early life serves a key regulatory stage in establishing the host-microbial relationship. This symbiotic relationship contributes to developing host immunity and maintaining health throughout the life span. This study was to develop an approach to colonize conventionally raised mice with a model probiotic bacterium,  Lactobacillus rhamnosus GG  (LGG), and determine the effects of LGG colonization on intestinal development and prevention of colitis in adulthood. LGG colonization in conventionally raised was established by administering LGG to pregnant mice starting at gestational day 18 and pups at postnatal day 1 to day 5. LGG colonization promoted bodyweight gain and increased diversity and richness of the colonic mucosa-associated microbiota prior to weaning. Intestinal epithelial cell proliferation, differentiation, tight junction formation and mucosal IgA production were all significantly enhanced in LGG colonized mice. Adult mice colonized with LGG showed increased IgA production and decreased susceptibility to intestinal injury and inflammation induced in the dextran sodium sulphate model of colitis. Thus, neonatal colonization 

