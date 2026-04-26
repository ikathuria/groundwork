---
type: source
id: 2022-karas-cu-outdiffusion-damp-heat
source_type: paper
title: "Copper Outdiffusion from Copper-Plated Solar Cell Contacts During Damp Heat Exposure"
authors: ["Karas, J.", "Phua, B.", "Mo, A.", "Iqbal, N.", "Davis, K.", "Bowden, S.", "Lennon, A.", "Augusto, A."]
year: 2022
doi: null
url: null
raw_path: raw/papers/2022-karas-cu-outdiffusion-damp-heat.pdf
tags: [damp-heat, copper-outdiffusion, EVA, POE, SIMS, EDS, capping-layer, Cu-Sn-IMC, grain-boundary, SHJ-relevant]
---

# Copper Outdiffusion from Copper-Plated Solar Cell Contacts During Damp Heat Exposure

## Summary
Critical follow-up to Karas 2019/2020 (ASU/UNSW collaboration). After 1000–3500 h of 85°C/85% RH damp heat, plated-Cu fingers on encapsulated c-Si cells exhibit *upward* Cu out-diffusion through both Sn (LIP) and Ag (LIP) capping layers — confirmed by SEM cross-sections, EDS elemental maps and SIMS depth profiles. The mechanism is a Cu-Sn IMC growth + Kirkendall void formation in Sn-capped contacts, and grain-boundary diffusion in Ag-capped contacts. Once Cu reaches the outer surface, it is mobile in the module and SIMS detects elevated Cu in the c-Si emitter and bulk, correlating with pFF loss in I-V. EVA encapsulation produces ~3× more surface Cu than POE in matched samples, identifying acetic acid (EVA hydrolysis) as the chemical "sink" that drives Cu out-diffusion. This is the definitive damp-heat failure-mode paper for plated-Cu c-Si.

## Key claims
- After 2000 h DH, Ni-Cu-Sn plated finger shows clear Cu accumulation at the outer Sn surface and small voids at the Cu-Sn interface every 1-2 µm, with pFF dropping from 82.1% to 77.0% and J02 doubling (Fig. 1, Fig. 2).
- After 1000 h DH, Ni-Cu-Ag plated finger (3×3 cm cell, 1 µm Ni / 11 µm Cu / 1 µm Ag) shows Cu on the outer Ag surface and lining voids in EVA above the finger; pFF drops from 79.4% to 77.9% (Fig. 3).
- SIMS depth profiles into c-Si of Ni-Cu-Sn EVA-encapsulated cells (3500 h DH) show ~3× more Cu at the Si surface than POE-encapsulated sister samples (Fig. 4); the EVA sample lost 4.7%abs pFF with >6× J02 increase, the POE sample did not appreciably degrade.
- Ag-screenprinted EVA reference shows essentially no Cu signal in SIMS — Cu is plated-finger-derived, not background.
- For Cu-Ag, the mechanism is grain-boundary diffusion driven by a chemical "sink reaction" at the surface (Cu corrodes/oxidises with acetic acid from EVA hydrolysis), supported by leadframe-package literature (Lin, Li, Zhang) and historical daguerreotype studies.
- For Cu-Sn, classical Cu-Sn-IMC formation (ε-Cu₃Sn, η-Cu₆Sn₅) plus Kirkendall void growth at the Cu-Cu₃Sn interface, enhanced by impurities in plated Cu (S, Cl, C, O from sulphate baths).
- Recommended mitigations: alternative encapsulants without acetic acid generation (POE), Ni co-deposition into Cu (~9 at.%) to stabilise (Cu,Ni)₆Sn₅ phase, or grain-boundary engineering of the Ag cap.

## Methods used
- [[../methods/damp-heat-aging-1000h]] — extended to 1000-3500 h
- [[../methods/SIMS-depth-profile]] — PHI Adept 1010 dynamic SIMS, oxygen primary beam, 60×60 µm raster
- [[../methods/EL-electroluminescence-imaging]] — to identify "good" vs "bad" cell regions for SIMS sampling
- [[../methods/dark-IV-suns-Voc]] — Sinton Suns-VOC for pFF / J02 tracking
- [[../methods/light-induced-plating]] — LIP Ni, Cu, Sn, Ag stack deposition
- [[../methods/laser-ablation-of-dielectric]] — 266 nm ps laser for SiNx ablation prior to plating

## Reagents
- [[../reagents/nickel-sulfamate-bath]] — Ni diffusion barrier deposition
- [[../reagents/acid-Cu-sulfate-bath]] — sulfate-based LIP Cu bath
- [[../reagents/EVA-encapsulant]] — driver of Cu out-diffusion via acetic acid
- [[../reagents/POE-polyolefin-encapsulant]] — protective alternative
- [[../reagents/tin-Sn-cap]] — LIP acid stannous Sn cap (~1 µm)
- [[../reagents/silver-Ag-cap]] — LIP Ag cap (~1 µm)
- [[../reagents/Cu3Si-intermetallic]] — referenced as the Si-side analogue concern

## Organisms / substrates
- [[../organisms/monocrystalline-Si-wafer-p-type]] — 6" textured p-type Al-BSF cell precursor and 156×156 mm PERC precursors
- [[../organisms/mini-module-glass-glass]] — three-cell EVA mini-module

## Failure modes flagged
- [[../failure-modes/Cu-out-diffusion-through-cap-stack]] — central finding (both Sn and Ag caps)
- [[../failure-modes/Cu-diffusion-into-c-Si]] — confirmed by SIMS in degraded EVA cells
- [[../failure-modes/EVA-acetic-acid-corrosion]] — proposed mechanistic driver of the out-diffusion
- [[../failure-modes/Cu-finger-corrosion-encapsulant]] — Cu observed lining voids in EVA above fingers
- [[../failure-modes/Voc-degradation-Cu-contamination]] — pFF loss correlated with Cu in Si bulk
- [[../failure-modes/lateral-Cu-edge-migration]] — Cu mobile within the encapsulant once outdiffused

## Supports / contradicts
- Supports: [[2019-karas-damp-heat-degradation-shj-cu]] (same group, original sample set; this paper provides the mechanistic explanation for the earlier I-V observations)
- Supports: [[2015-lindroos-cu-lid-aalto-thesis]] (Cu in Si is recombination-active)
- Supports: [[2014-rehman-nicu-plating-csi-review]] (review identifying contact-integrity concerns)
- Contradicts: cells with TCO diffusion barriers (SHJ, [[2021-hatt-stable-cu-plated-shj-eupvsec]]) which avoid the direct Cu-Si interface — though upward out-diffusion through caps remains a generic plated-Cu module concern.

## Notable quotes
- "we find evidence of Cu outdiffusion upward through capping layers made of both tin and silver applied with light-induced plating, resulting in a layer of Cu on the outer contact surface." — abstract
- "The EVA sample has a roughly three-fold greater concentration of Cu at the surface than the POE sample, on average." — p. 13
- "Upward Cu outdiffusion may also need to be considered, particularly in module packages that create a chemical reaction sink at the outer surface of the contact, e.g., acetic acid from hydrolyzed EVA." — Conclusion, p. 15
