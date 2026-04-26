---
type: source
id: 2022-karas-cu-outdiffusion-damp-heat
source_type: paper
title: "Copper Outdiffusion from Copper-Plated Solar Cell Contacts during Damp Heat Exposure"
authors: ["Karas, J.", "Phua, B.", "Mo, A.", "Iqbal, N.", "Davis, K.", "Bowden, S.", "Lennon, A.", "Augusto, A."]
year: 2022
doi: 10.1021/acsami.2c14586
url: https://www.osti.gov/servlets/purl/2308790
raw_path: raw/papers/2022-karas-cu-outdiffusion-damp-heat.pdf
tags: [Cu-outdiffusion, damp-heat, SIMS, EDS, ACS-AMI, ASU-NREL-UNSW, critical-contradiction, encapsulant-EVA]
created: 2026-04-26
updated: 2026-04-26
---

# Copper Outdiffusion from Copper-Plated Solar Cell Contacts during Damp Heat Exposure

**Karas, J., Phua, B., Mo, A., Iqbal, N., Davis, K., Bowden, S., Lennon, A., Augusto, A.** — *ACS Applied Materials & Interfaces, 2022* (OSTI accepted manuscript). DOI: 10.1021/acsami.2c14586

## Summary

Critical contradiction source for the hypothesis: in encapsulated p-type Si cells with Ni/Cu/Sn or Ni/Cu/Ag plated contacts after 1000–3500 h of 85 °C / 85 % RH damp-heat (DH), EDS detects Cu accumulating at the outer surface of the cap layer (i.e. Cu has migrated *upward* through the supposedly protective Sn or Ag cap), and SIMS detects elevated Cu concentration at the c-Si surface and into the cell bulk. The encapsulant (EVA vs. POE) modulates outdiffusion: EVA gives ~3× higher Cu surface concentration than POE.

## Key claims

- Cu-plated, Sn-capped cells: pFF dropped from 82.1 % → 77.0 % over 2000 h DH; J02 more than doubled. EDS line-scans show Cu accumulating at the outer Sn surface, with Kirkendall-like microvoids forming every 1–2 µm at the Cu–Sn interface.
- Cu-plated, Ag-capped cells: pFF dropped from 79.4 % → 77.9 % after 1000 h DH; EDS shows Cu on the outer Ag-cap surface and lining voids in the encapsulant above the finger, indicating Cu mobility *into the encapsulant*.
- SIMS evidence of Cu ingress into c-Si: Ni-Cu-Sn / EVA samples after 3500 h DH show ~3× higher surface Cu concentration than Ni-Cu-Sn / POE sister cells; Ag-screen-printed / EVA control shows essentially no Cu signal.
- For the same Ni-Cu-Sn / EVA module, the EVA sample lost 4.7 %abs pFF and J02 increased >6×; the POE sister did not appreciably degrade — directly attributable to encapsulant-dependent Cu mobility.
- Mechanism for Cu-Sn outdiffusion: low-temperature Cu-Sn interdiffusion forms ε-Cu₃Sn and η-Cu₆Sn₅ IMCs, with Kirkendall voids at the Cu–Cu₃Sn interface; impurities (S, Cl, C, O from sulfate-acid plating baths) enhance void formation.
- Mechanism for Cu-Ag outdiffusion: Cu-Ag has minimal solid-solubility below ~700 °C, so outdiffusion proceeds via Ag grain boundaries; acetic acid from EVA hydrolysis acts as a "chemical reaction sink" at the surface, driving the outdiffusion process.
- Implication: with EVA encapsulant, Sn or Ag caps are not sufficient long-term Cu barriers in DH; "thicker Sn (with Cu₆Sn₅ growth as a self-limiting barrier) or Ni-doped Cu (forming stable (Cu,Ni)₆Sn₅) or POE substitution may mitigate."

## Methods used

- [[methods/damp-heat-aging-1000h]] — 85 °C / 85 % RH exposure for 1000–3500 h
- [[methods/SIMS-depth-profile]] — primary evidence for Cu ingress into c-Si bulk; PHI Adept 1010, O₂ primary ion beam, 60×60 µm raster, 19×19 µm detection area
- [[methods/EL-electroluminescence-imaging]] — EL imaging to localise degraded regions for cross-section harvest
- [[methods/dark-IV-suns-Voc]] — Suns-VOC pFF tracking
- [[methods/IV-curve-measurement]] — 1-sun I-V tracking
- [[methods/light-induced-plating]] — Ni / Cu / Sn / Ag LIP fabrication of contact stacks under test
- [[methods/laser-ablation-of-dielectric]] — 266-nm ps Lumera Nd:YAG laser ablation for Cu-plated, Ag-capped sample preparation

## Reagents

- [[reagents/EVA-encapsulant]] — baseline; identified as the dominant outdiffusion driver
- [[reagents/POE-polyolefin-encapsulant]] — alternative; ~3× lower Cu c-Si surface concentration after 3500 h DH
- [[reagents/silver-Ag-cap]] — LIP-Ag capping (~1 µm); insufficient barrier at grain boundaries under EVA + DH
- [[reagents/tin-Sn-cap]] — LIP-Sn capping (~1 µm); forms Cu-Sn IMCs and Kirkendall voids
- [[reagents/nickel-sulfamate-bath]] — sulfamate Ni used for the diffusion barrier
- [[reagents/acid-Cu-sulfate-bath]] — Cu electrolyte; impurity content correlates with void formation
- [[reagents/Cu3Si-intermetallic]] — Cu₃Sn / Cu₆Sn₅ IMC chemistry (closest available slug)

## Organisms / substrates

- [[organisms/monocrystalline-Si-wafer-p-type]] — 6" textured p-type mono-Si Al-BSF precursors
- [[organisms/mini-module-glass-glass]] — encapsulated 3-cell mini-modules under DH

## Failure modes flagged

- [[failure-modes/Cu-out-diffusion-through-cap-stack]] — direct EDS evidence of Cu on outer cap surface, both Sn and Ag
- [[failure-modes/Cu-diffusion-into-c-Si]] — SIMS evidence of Cu in c-Si correlating with pFF / J02 degradation
- [[failure-modes/Voc-degradation-Cu-contamination]] — pFF / J02 degradation in DH attributed to Cu in c-Si
- [[failure-modes/Cu-finger-corrosion-encapsulant]] — Cu lines voids in EVA above fingers; encapsulant chemistry drives Cu mobilisation
- [[failure-modes/EVA-acetic-acid-corrosion]] — acetic acid from EVA hydrolysis acts as sink-reaction driving Cu outdiffusion
- [[failure-modes/Ni-barrier-pinholes]] — Ni barrier between Cu and Si discussed; Cu still detected in c-Si
- [[failure-modes/Cu3Si-formation-at-Si-interface]] — discusses Cu-Sn IMC formation as analogous self-limiting / void-generating phenomenon
- [[failure-modes/finger-adhesion-loss-after-DH]] — finger adhesion correlates with DH-induced degradation in companion 2020 Karas study (ref. 21)

## Supports / contradicts

- **Supports:** [[sources/2019-karas-damp-heat-degradation-shj-cu]] — direct precursor paper from the same authors; this paper is the cross-section / SIMS forensic follow-up
- **Contradicts:** [[sources/2019-hatt-noble-shj-solrrl]] — Hatt's NOBLE relies on a thin Ag cap over plated Cu; this paper shows that a few-µm Ag cap is breached by Cu under EVA + DH
- **Contradicts:** [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — Lachowicz reports better DH stability for SHJ glass-glass modules with thin TCO + dielectric mask + edge sealing; both papers agree edge-sealing / encapsulant choice are critical

## Notable quotes

> "We find evidence of Cu outdiffusion upward through capping layers made of both tin and silver applied with light-induced plating, resulting in a layer of Cu on the outer contact surface." — *Abstract*

> "In several types of Cu-plated, DH-degraded cells, secondary ion mass spectrometry (SIMS) detects elevated levels of Cu at the Si surface and in the Si cell bulk, which suggests that Cu can indeed migrate from contacts into Si over the course of DH stress." — *Abstract*

> "It is well known that DH stress applied to conventional PV modules with EVA encapsulant produces acetic acid. Acetic acid has been noted to corrode cell metallization in other experiments; in Cu-plated, Ag-capped samples it might also provide a sink reaction to drive Cu outdiffusion via grain boundaries." — *§III.A.2, p. 13*

> "Conceivable solutions are to engineer the capping layers to prevent Cu outdiffusion, or to remove the driving force for outdiffusion by better engineering module packages and materials for stable chemical environments, for example, by replacing EVA with other encapsulants." — *Conclusion*
