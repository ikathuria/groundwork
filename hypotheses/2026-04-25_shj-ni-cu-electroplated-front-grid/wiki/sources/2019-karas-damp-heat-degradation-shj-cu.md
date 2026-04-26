---
type: source
id: 2019-karas-damp-heat-degradation-shj-cu
source_type: paper
title: "Degradation of Copper-plated silicon solar cells with damp heat stress"
authors: ["Karas, J.", "Michaelson, L.", "Munoz, K.", "Hossain, M. J.", "Schneller, E.", "Davis, K. O.", "Bowden, S.", "Augusto, A."]
year: 2020
doi: "10.1002/pip.3331"
url: "https://doi.org/10.1002/pip.3331"
raw_path: raw/papers/2019-karas-damp-heat-degradation-shj-cu.pdf
tags: [damp-heat, copper-plated, encapsulant, EVA, POE, SHJ, pFF-degradation, J02]
---

# Degradation of Copper-plated silicon solar cells with damp heat stress

## Summary
Karas et al.'s first major DH study of plated Cu-metallised c-Si cells (Prog. Photovoltaics 2020, ASU/UNSW). Encapsulated cells with Cu-plated contacts were exposed to extended damp heat at 85 °C / 85% RH and compared against screen-printed Ag references. Cu-plated samples in EVA-encapsulated modules degraded markedly more than Ag references — pseudo fill factor (pFF) decreased and the non-ideal recombination current density (J02) increased, indicating junction-area degradation. Replacing EVA with polyolefin elastomer (POE) prevented the degradation. The paper is the foundational evidence that Cu-plated c-Si modules can fail DH testing, and that the encapsulant chemistry (EVA → acetic acid) is a primary driver. Note: the .txt extraction of this PDF is empty in the corpus — claims below are reconstructed from the 2022 follow-up paper [[2022-karas-cu-outdiffusion-damp-heat]] which directly references and re-examines these samples (refs 20, 21).

## Key claims
- Cu-plated cells encapsulated in EVA show pFF loss and J02 increase after 1000+ h DH; comparative Ag-screen-printed cells in EVA do not (referenced as ref. 20 in 2022-karas).
- The degradation is described as "junction degradation" — a diode-parameter loss, not a finger-conductivity loss.
- Replacing EVA with POE encapsulant prevented the degradation in sister samples — implicating acetic acid (EVA hydrolysis product) as the chemical driving force.
- Establishes the experimental baseline that 2022-karas later extends with cross-sectional EDS / SIMS to directly observe Cu out-diffusion through capping and Cu ingress into c-Si.

## Methods used
- [[../methods/damp-heat-aging-1000h]] — 85 °C / 85% RH, 1000+ h on encapsulated mini-modules
- [[../methods/dark-IV-suns-Voc]] — Suns-VOC (Sinton method) for pFF and J02 extraction
- [[../methods/IV-curve-measurement]] — light I-V before/after DH

## Reagents
- [[../reagents/EVA-encapsulant]] — driver of the observed degradation (acetic acid pathway)
- [[../reagents/POE-polyolefin-encapsulant]] — protective alternative
- [[../reagents/silver-Ag-cap]] — LIP Ag capping over plated Cu
- [[../reagents/tin-Sn-cap]] — LIP Sn capping (parallel sample set)

## Organisms / substrates
- [[../organisms/monocrystalline-Si-wafer-p-type]] — p-type c-Si Al-BSF and PERC precursors
- [[../organisms/mini-module-glass-glass]] — 3-cell mini-modules

## Failure modes flagged
- [[../failure-modes/Cu-diffusion-into-c-Si]] — implicated by junction-parameter (J02) degradation
- [[../failure-modes/EVA-acetic-acid-corrosion]] — the central mechanistic finding of the paper
- [[../failure-modes/Voc-degradation-Cu-contamination]] — pFF loss attributed to junction-area Cu contamination
- [[../failure-modes/FF-degradation-contact-resistance]] — observed FF loss in DH

## Supports / contradicts
- Supports: [[2022-karas-cu-outdiffusion-damp-heat]] (direct continuation, same authors, same samples)
- Supports: [[2024-lachowicz-cu-plated-shj-aging-mini-modules]], [[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] (corroborating DH degradation pattern, with edge-sealing as mitigation)
- Contradicts: [[2021-hatt-stable-cu-plated-shj-eupvsec]] (which reports stable plated Cu on SHJ, different cell architecture with TCO diffusion barrier)

## Notable quotes
- (from 2022-karas, ref. 20) "encapsulated cells with Cu-plated contacts degrade more under damp heat (DH) stress than comparative encapsulated cells with Ag-screenprinted contacts. Specifically, the degradation in Cu-plated samples affected diode parameters, indicating junction degradation described by increasing non-ideal recombination current density (J02) and decreasing pseudo fill factor (pFF)."
- (from 2022-karas, ref. 20) "degradation was prevented in Cu-plated cells when the encapsulant was polyolefin elastomer (POE), rather than the more common ethylene vinyl acetate (EVA)."
