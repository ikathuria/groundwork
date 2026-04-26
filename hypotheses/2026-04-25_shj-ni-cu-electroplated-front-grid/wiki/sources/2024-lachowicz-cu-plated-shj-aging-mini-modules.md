---
type: source
id: 2024-lachowicz-cu-plated-shj-aging-mini-modules
source_type: paper
title: "Aging tests of mini-modules with copper-plated heterojunction solar cells and pattern-transfer-printing of copper paste"
authors: ["Lachowicz, A.", "Badel, N.", "Barrou, A.", "Barth, V.", "Harrison, S.", "Frasson, N.", "Galiazzo, M.", "Cohen, N.", "Cohen, E.", "Zhao, J.", "Paviet-Salomon, B.", "Ballif, C."]
year: 2024
doi: 10.1051/epjpv/2024008
url: https://www.epj-pv.org/articles/epjpv/pdf/2024/01/pv230062.pdf
raw_path: raw/papers/2024-lachowicz-cu-plated-shj-aging-mini-modules.pdf
tags: [SHJ, Cu-plating, CSEM, EPJ-PV, mini-modules, damp-heat, shingle, smartwire, pattern-transfer-printing]
created: 2026-04-26
updated: 2026-04-26
---

# Aging tests of mini-modules with copper-plated heterojunction solar cells and pattern-transfer-printing of copper paste

**Lachowicz, A., Badel, N., Barrou, A., Barth, V., Harrison, S., Frasson, N., Galiazzo, M., Cohen, N., Cohen, E., Zhao, J., Paviet-Salomon, B., Ballif, C.** — *EPJ Photovoltaics 15, 11 (2024)*. DOI: 10.1051/epjpv/2024008

## Summary

CSEM (with CEA-INES, AMAT, DR Utilight) journal paper on extended TC / DH / PID aging of glass-glass mini-modules with SHJ Cu-plated cells using a 3-step process (Cu-paste seed-grid → PECVD dielectric mask → selective Cu electrodeposition). The most directly comparable result for the hypothesis: SHJ Cu-plated mini-modules tested at 0 / 1000 / 2000 / 2700 h DH, with explicit comparison to SCC paste reference and Smartwire/shingle interconnection variants.

## Key claims

- 3-step process advantages: only one new step versus production (electrodeposition); compatible with thin-ITO + dielectric layers, which simultaneously serve as plating mask and indium-reduction strategy.
- Best M6 cell (bifacial 9-busbar internal measurement, post-plating): η = 24.2 % with SCC seed-grid, PECVD dielectric, electrodeposited Cu — comparable to industry best.
- Smartwire glass-glass mini-modules with M6 half-cells, polyolefin encapsulant, *no edge sealing*: DH degradation = 5 % after 2700 h (Cu-plated cells with dielectric layer); the SCC-paste-only reference modules degraded much more strongly.
- TC stability: 0.2 % power loss after 690 cycles for Cu-plated Smartwire modules; 1.4 % for SCC reference.
- PID: all modules withstood 2 × 96 h at 85 °C / 85 % RH with ±1000 V applied — no measurable degradation.
- Shingle modules (CEA INES SHJ M2 precursors, AMAT shingle stringing): TC <0.5 % power change after 400 cycles; DH >2 % FF loss after 2000 h, again with edge-onset degradation visible in EL.
- Pattern-transfer printing (DR Utilight) with pure Cu paste + electrodeposited Cu yields lines 26.1 µm wide × 21.9 µm tall, ρc = 1.5 mΩ·cm² on ITO (TLM, screen-printed pattern).
- Line resistance hierarchy after PTP: SCC paste 1.5 Ω over 26 mm pad-to-pad → Cu paste alone 5.1 Ω → Cu paste + plated Cu 0.18 Ω, on equal cell layouts.
- Edge sealing with polyisobutylene is identified as the planned next step to improve DH performance — DH degradation in current modules initiates at unsealed glass-glass edges.

## Methods used

- [[methods/Cu-electroplating-acid-bath]] — Cu electrodeposition through PECVD dielectric mask
- [[methods/screen-printed-Ag-paste]] — Ag / SCC / Cu paste seed-grid printing
- [[methods/damp-heat-aging-1000h]] — 85 °C / 85 % RH up to 2700 h
- [[methods/extended-damp-heat-IEC63209]] — extended DH (3× IEC equivalent)
- [[methods/temperature-cycling-IEC61215-TC200]] — TC up to 690 cycles for Smartwire, 400 cycles for shingle modules
- [[methods/EL-electroluminescence-imaging]] — EL imaging at 0 / 1008 / 2076 h DH; EL imaging after TC
- [[methods/IV-curve-measurement]] — Pmax tracking, IV under 1-sun
- [[methods/transfer-length-method]] — TLM measurement of Cu paste ρc on ITO
- [[methods/four-point-probe-sheet-resistance]] — Kelvin-probe line-resistance measurements pad-to-pad

## Reagents

- [[reagents/Cu-paste-low-temperature]] — pure copper paste from Namics for PTP / screen printing
- [[reagents/low-T-Ag-paste-generic-SHJ-grade]] — SCC reference paste
- [[reagents/POE-polyolefin-encapsulant]] — module encapsulant of choice
- [[reagents/electrically-conductive-adhesive-ECA]] — for shingle interconnection (~3.5 mg per shingle, cured 150 °C)
- [[reagents/ITO-transparent-conductive-oxide]] — thin (~30 nm) ITO + dielectric layer as antireflective + plating mask
- [[reagents/AZO-aluminum-doped-zinc-oxide]] — referenced as alternative TCO (AZO + dielectric layer for stability)
- [[reagents/multibusbar-Cu-ribbon]] — Smartwire low-melting-point alloy

## Organisms / substrates

- [[organisms/SHJ-cell-M6]] — M6 industrial precursors for Smartwire modules
- [[organisms/SHJ-cell-M10]] — DR Utilight equipment scaling target (closest available slug for M2 precursors)
- [[organisms/mini-module-glass-glass]] — 1-cell glass-glass mini-modules; ~3-cell shingle mini-modules

## Failure modes flagged

- [[failure-modes/Cu-finger-corrosion-encapsulant]] — DH degradation initiates at unsealed module edges
- [[failure-modes/Cu-finger-oxidation-damp-heat]] — Cu paste surface oxidation requires deoxidation pretreatment before plating
- [[failure-modes/FF-degradation-contact-resistance]] — pure Cu paste alone has high line R until Cu plating reinforces it
- [[failure-modes/finger-adhesion-loss-after-DH]] — discussed in EL imaging of edge degradation

## Supports / contradicts

- **Supports:** [[sources/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — same dataset, presentation slides
- **Supports:** [[sources/2024-siliconpv-novel-shj-metallization-architectures]] — co-authored with AMAT; complementary industrial perspective
- **Supports:** [[sources/2019-hatt-noble-shj-solrrl]] — independent confirmation that Cu plating on TCO can deliver competitive efficiencies
- **Contradicts:** [[sources/2022-karas-cu-outdiffusion-damp-heat]] — Karas (EVA encapsulant, no edge seal) reports significant Cu outdiffusion through Sn / Ag caps and SIMS-confirmed Cu in c-Si; Lachowicz (POE + thin TCO + dielectric mask) reports much milder ~5 % DH degradation at 2700 h with edge effects only

## Notable quotes

> "DH degradation is at 5% after 2700 h (glass-glass modules without edge sealing)." — *Abstract*

> "Modules with Smartwire interconnection, fabricated with M6 half-cells, are stable in extended TC and PID tests." — *Abstract*

> "Such small modules may represent the hardest condition for DH testing due to their high ratio of perimeter to module area, resulting in increased moisture ingress per cell area. For the next module experiment the application of an edge sealant is planned." — *§3 Smartwire modules*

> "Edge sealing with polyisobutylene is used in commercial heterojunction modules to improve the stability in damp-heat." — *§3 Smartwire modules*

> "Pure copper paste can be used for seed-grid formation because it only needs to conduct a small current for electrodeposition. Once some copper is electrodeposited, the transport occurs through this highly conductive layer." — *§6 Summary*
