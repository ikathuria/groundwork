---
type: source
id: 2023-aldarsgarca-ex-vivo-intestinal-permeability-assay
source_type: protocol
title: "Ex vivo intestinal permeability assay (X-IPA) for tracking barrier function dynamics"
authors: ["Bootz-Maoz Hadar", "Simon Ariel", "Del Mare-Roumani Sara", "Bennet Yifat", "Toister Einat", "Romano Hadar", "Zheng Danping", "Amidror Sivan", "Elinav Eran", "Yissachar Nissan"]
year: 2023
doi: 10.1038/s41522-023-00409-0
raw_path: raw/protocols/2023-aldarsgarca-ex-vivo-intestinal-permeability-assay.xml
tags: [protocol, FITC-dextran, permeability]
created: 2026-04-25
updated: 2026-04-25
synthesis: scaffold
---

# Ex vivo intestinal permeability assay (X-IPA) for tracking barrier function dynamics

**Bootz-Maoz Hadar et al., 2023** · doi:`10.1038/s41522-023-00409-0` · `` · raw: `raw/protocols/2023-aldarsgarca-ex-vivo-intestinal-permeability-assay.xml`

## Why this is in the wiki

FITC-dextran method;tight-junction biology;alcohol-leaky-gut comparator;methodology paper — canonical protocol for permeability assays.

## Synthesis

_Scaffold — to be enriched with key claims, supports/contradicts, and notable quotes during Pass 2 hand-pass on top-N sources._

## Methods used

- [[../methods/ex-vivo-intestinal-permeability-assay|ex vivo intestinal permeability assay]] — methodology paper canonicalising the assay
- [[../methods/FITC-dextran-permeability-assay|FITC-dextran intestinal permeability assay]] — in vivo paracellular permeability readout via plasma fluorescence after oral FITC-dextran gavage
- [[../methods/oral-gavage-mouse|oral gavage in mice]] — intragastric dose delivery to mice via curved feeding needle
- [[../methods/alcohol-induced-leaky-gut-model|alcohol / ethanol-induced gut barrier disruption]] — acute or chronic ethanol exposure to model alcoholic liver disease and gut hyperpermeability
- [[../methods/Ussing-chamber-TEER|Ussing chamber & transepithelial electrical resistance (TEER)]] — ex vivo electrophysiological measurement of mucosal barrier integrity
- [[../methods/Western-blot-tight-junction|Western blot / immunofluorescence of tight-junction proteins]] — protein-level quantification of ZO-1, occludin, claudins
- [[../methods/bacterial-CFU-enumeration|bacterial CFU enumeration]] — viable cell counting by serial-dilution plating on selective agar
## Reagents

- [[../reagents/FITC-dextran-4kDa|FITC-dextran 4 kDa (FD-4)]] — the canonical small-molecule paracellular probe for in vivo permeability
## Organisms

- [[../organisms/C57BL-6|Mus musculus, C57BL/6 inbred strain]] — the canonical inbred mouse strain for gut-microbiome and barrier studies
- [[../organisms/Caco-2|Caco-2 (human colorectal carcinoma, intestinal-epithelial-cell model)]] — differentiated monolayers approximate small-intestinal epithelium for in vitro TEER and permeability
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

The intestinal epithelial barrier facilitates homeostatic host–microbiota interactions and immunological tolerance. However, mechanistic dissections of barrier dynamics following luminal stimulation pose a substantial challenge. Here, we describe an ex vivo intestinal permeability assay, X-IPA, for quantitative analysis of gut permeability dynamics at the whole-tissue level. We demonstrate that specific gut microbes and metabolites induce rapid, dose-dependent increases to gut permeability, thus providing a powerful approach for precise investigation of barrier functions.

