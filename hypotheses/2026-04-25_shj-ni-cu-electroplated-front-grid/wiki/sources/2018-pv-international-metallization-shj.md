---
type: source
id: 2018-pv-international-metallization-shj
source_type: paper
title: "Metallization Techniques and Interconnection Schemes for High-Efficiency Silicon Heterojunction PV"
authors: ["Geissbühler, J.", "Faes, A.", "Lachowicz, A.", "Ballif, C.", "Despeisse, M."]
year: 2018
doi: null
url: "https://www.pv-tech.org/photovoltaics-international/"
raw_path: raw/papers/2018-pv-international-metallization-shj.pdf
tags: [SHJ, CSEM, low-T-Ag-paste, screen-printing, copper-electroplating, smart-wire, multi-wire, hot-melt-mask, IBC]
---

# Metallization Techniques and Interconnection Schemes for High-Efficiency Silicon Heterojunction PV

## Summary
CSEM review (Photovoltaics International, 2018) — companion piece to the Faes et al. M&I cost analysis — focused on the technical link between metallization technique, grid design, and interconnection. Documents the dramatic reduction in low-curing-temperature Ag-paste bulk resistivity (18 → 5.5 µΩ·cm 2009–2018, with prototypes <5 µΩ·cm) and its impact on screen-print process windows. Reviews Cu electroplating routes for SHJ (photolithography, screen-printed mask, dielectric+laser-transfer, two-step inkjet hot-melt) with finger widths down to 16–20 µm demonstrated on TCO-coated SHJ wafers. Reports record SHJ efficiencies via Cu electroplating: Kaneka 25.1%, Silevo 23.1%, Sunpreme 402 Wp 72-cell module. Provides a coherent rationale for why electroplated Cu remains the most attractive long-finger metallization for shingled-cell SHJ modules.

## Key claims
- Low-T (≤200°C) Ag paste bulk resistivity dropped from 18 µΩ·cm (2009) to 5.5 µΩ·cm (2018), prototypes <5 µΩ·cm — still ~3× pure Ag (1.58 µΩ·cm).
- 2017 record print: 16 µm finger width on textured ITO-coated SHJ wafer (Asada-mesh demo).
- For 6" SHJ with 3BB and standard soldering: total Ag-paste laydown ≈1 g (40% in busbars). 5BB drops it to ~0.5 g; with most recent paste & BB-less ECA design ≤0.2 g.
- SWCT 8-mm wire pitch enables finger line resistivity up to 10 Ω/cm; line widths can be ≤50 µm and total bifacial SHJ Ag laydown <60 mg with SWCT.
- Cu electroplating SHJ approaches reviewed: dry-photosensitive-film litho, screen-printed mask, dielectric+laser-transfer, inkjet hot-melt mask. Finger widths 15–20 µm. Two-step hotmelt (Hermans et al.) reduces masking ink consumption by >70%.
- Records cited: Kaneka 25.1% (Cu plated, large-area bifacial), Silevo 23.1% with Cu gridlines, Sunpreme 402 Wp 72-cell bifacial Cu-plated module, Kaneka 26.7% IBC-SHJ.
- "Plating of an electroplated nickel layer" mentioned as one approach to improve Cu adhesion on TCO; PVD seed-layer noted to give better adhesion than direct Cu electrodeposition on TCO.
- Power loss simulation (Fig. 2) showing line resistivity below 0.5 Ω/cm achievable by Cu electroplating, enabling longer fingers and 2BB/3BB designs or shingled cells with minimal subcells.
- For interconnection: SWCT (24-wire variant) has ~8 mm wire pitch, allowing very high finger line resistivity (10 Ω/cm).

## Methods used
- [[../methods/Cu-electroplating-acid-bath]] — multiple SHJ routes reviewed.
- [[../methods/screen-printed-Ag-paste]] — primary comparator; specific Asada knotless mesh + Namics LCT-paste system.
- [[../methods/inkjet-mask-patterning]] — hot-melt mask with two-step thinning.
- [[../methods/photolithography-mask-patterning]] — dry-film photoresist for SHJ Cu plating.
- [[../methods/Ni-sputter-deposition]] — PVD seed layer for SHJ Cu adhesion improvement.
- [[../methods/electroplated-Ni-Cu-stack]] — described as adhesion-improvement variant.
- [[../methods/IV-curve-measurement]] — for SHJ cell/module benchmark.

## Reagents
- [[../reagents/low-T-Ag-paste-generic-SHJ-grade]] — main subject; Namics LCT pastes.
- [[../reagents/low-T-Ag-paste-Solamet-PV21A]] — implied (Solamet PV21A/PV56S are typical examples).
- [[../reagents/acid-Cu-sulfate-bath]] — Cu plating.
- [[../reagents/ITO-transparent-conductive-oxide]] — TCO contact layer.
- [[../reagents/a-Si-H-passivation]] — SHJ stack.
- [[../reagents/electrically-conductive-adhesive-ECA]] — for ribbon gluing.
- [[../reagents/multibusbar-Cu-ribbon]] — SWCT, multi-wire interconnection.

## Organisms / substrates
- [[../organisms/SHJ-cell-M6]] — 6" SHJ standard.
- [[../organisms/full-size-module-72-cell]] — 402 Wp Sunpreme reference.

## Failure modes flagged
- [[../failure-modes/silver-supply-bottleneck]] — implicit driver of the entire review.
- [[../failure-modes/Cu-finger-oxidation-damp-heat]] — partly addressed via cap.
- [[../failure-modes/finger-adhesion-loss-after-DH]] — micro-voids reported between Cu and Ni-on-TCO interfaces.
- [[../failure-modes/FF-degradation-contact-resistance]] — implicit in line-resistivity discussion.

## Supports / contradicts
- Supports: [[2018-pv-tech-metallization-interconnection-bifacial-shj]] (companion CSEM)
- Supports: [[2019-hatt-noble-shj-solrrl]], [[2019-hatt-noble-bifacial-shj-aip]] (NOBLE represents one of the alternative routes summarized here)
- Methodologically aligned with: [[2014-rehman-nicu-plating-csi-review]] (Ni adhesion / barrier rationale)
- Cost/performance baseline echoed by later: [[2024-lorenz-cutting-edge-metallization-shj-fraunhofer]], [[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]]

## Notable quotes
- "Even with the addition of a nickel-plated adhesion layer, evidence of micro-voids has been found, which might lead to reduced finger adhesion."
- "Remarkable efficiencies have recently been achieved by using copper electroplating for the metallization of SHJ devices — for instance, 25.1% by Kaneka, and 23.1% for Silevo, a company acquired by SolarCity (now Tesla) in 2014."
