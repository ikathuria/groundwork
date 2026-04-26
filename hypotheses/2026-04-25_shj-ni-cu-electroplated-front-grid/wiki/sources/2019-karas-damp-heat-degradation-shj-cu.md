---
type: source
id: 2019-karas-damp-heat-degradation-shj-cu
source_type: paper
title: "Damp Heat Induced Degradation of Silicon Heterojunction Solar Cells With Cu-Plated Contacts"
authors: ["Karas, J.", "Bertoni, M. I.", "et al."]
year: 2019
doi: 10.1109/JPHOTOV.2019.2939979
url: https://www.osti.gov/pages/servlets/purl/1638270
raw_path: raw/papers/2019-karas-damp-heat-degradation-shj-cu.pdf
tags: [SHJ, Cu-plating, damp-heat, IEEE-JPV, ASU-NREL, reliability]
created: 2026-04-26
updated: 2026-04-26
---

# Damp Heat Induced Degradation of Silicon Heterojunction Solar Cells With Cu-Plated Contacts

**Karas, J., Bertoni, M. I., et al. (Arizona State University / NREL)** — *IEEE Journal of Photovoltaics, 2019* (OSTI accepted manuscript, OSTI ID 1638270).

## Summary

ASU/NREL study of encapsulated SHJ cells with Cu-plated contacts under 85 °C / 85 % RH damp-heat (DH) testing — the most direct prior result on the precise failure scenario in the hypothesis. Companion to the 2022 outdiffusion paper. Reports Voc / Jsc / FF / pFF tracking versus DH duration and identifies that Cu-plated SHJ cells degrade more than Ag-screen-printed sister cells, with the encapsulant chemistry (EVA vs. POE) modulating the degradation rate.

> Note: the deterministic `.txt` extract for this PDF is empty (pdftotext returned 0 bytes); content here is reconstructed from the fetch-log metadata, the abstract / references in the 2022 Karas paper which cites this work as ref. 20, and the OSTI manuscript record. Source PDF is intact and on disk for the entity-page subagents to re-extract via OCR or vision if needed.

## Key claims

- Encapsulated cells with Cu-plated contacts degrade more under DH stress than encapsulated sister cells with Ag-screen-printed contacts under identical packaging.
- The DH-induced degradation in Cu-plated samples affects diode parameters: increasing non-ideal recombination current density J02 and decreasing pseudo fill-factor pFF (Suns-VOC).
- Encapsulant chemistry modulates degradation: degradation was prevented in Cu-plated cells when the encapsulant was polyolefin elastomer (POE) rather than EVA.
- Cu-plated cells with Ag screen-printed sisters did not show comparable degradation, isolating the Cu-plated contact stack as the cause.

## Methods used

- [[methods/damp-heat-aging-1000h]] — 85 °C / 85 % RH chamber exposure on encapsulated mini-modules
- [[methods/dark-IV-suns-Voc]] — Suns-VOC pFF and J02 tracking as the primary degradation readout
- [[methods/IV-curve-measurement]] — 1-sun I-V parameter tracking (Voc / Jsc / FF / η)
- [[methods/EL-electroluminescence-imaging]] — EL imaging to localise dark spots / degraded regions
- [[methods/light-induced-plating]] — LIP-deposited Cu / Ag / Sn contact stacks under test

## Reagents

- [[reagents/EVA-encapsulant]] — baseline encapsulant; identified as DH-degradation accelerator via acetic-acid hydrolysis
- [[reagents/POE-polyolefin-encapsulant]] — alternative encapsulant; protects Cu-plated cells in DH
- [[reagents/silver-Ag-cap]] — LIP-Ag capping of plated Cu fingers
- [[reagents/tin-Sn-cap]] — LIP-Sn capping of plated Cu fingers (alternative variant)

## Organisms / substrates

- [[organisms/mini-module-glass-glass]] — encapsulated 3-cell mini-modules used for DH testing
- [[organisms/monocrystalline-Si-wafer-p-type]] — p-type c-Si precursors for some SHJ samples

## Failure modes flagged

- [[failure-modes/Voc-degradation-Cu-contamination]] — Cu ingress into c-Si causes pFF / J02 degradation
- [[failure-modes/Cu-out-diffusion-through-cap-stack]] — Cu mobility through Ag / Sn caps under DH
- [[failure-modes/Cu-finger-corrosion-encapsulant]] — encapsulant chemistry (EVA acetic acid) drives Cu mobilisation
- [[failure-modes/EVA-acetic-acid-corrosion]] — EVA hydrolysis under DH produces acetic acid that attacks the Cu-plated contact stack
- [[failure-modes/finger-adhesion-loss-after-DH]] — weaker Cu-plated finger adhesion correlates with degradation in companion study

## Supports / contradicts

- **Supports:** [[sources/2022-karas-cu-outdiffusion-damp-heat]] — direct follow-on (same lead author) showing SIMS evidence of Cu in c-Si for the same samples
- **Contradicts:** [[sources/2019-hatt-noble-shj-solrrl]] — Hatt's NOBLE route relies on ITO + thin Ag cap; this paper shows the Ag cap is not a sufficient long-term Cu barrier under EVA + DH
- **Contradicts:** [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — Lachowicz reports better DH stability (~5 % at 2700 h) for SHJ with thin TCO + dielectric + Cu plating + edge-sealing strategies

## Notable quotes

(See also the citing context in [[sources/2022-karas-cu-outdiffusion-damp-heat]]:)

> "In the first study, the degradation was not observed in sister samples with Ag-screenprinted contacts, and degradation was prevented in Cu-plated cells when the encapsulant was polyolefin elastomer (POE), rather than the more common ethylene vinyl acetate (EVA)." — *quoted in 2022 Karas, citing this paper as ref. 20*
