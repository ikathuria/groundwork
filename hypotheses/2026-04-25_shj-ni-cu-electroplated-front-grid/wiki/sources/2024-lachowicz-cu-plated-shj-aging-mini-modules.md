---
type: source
id: 2024-lachowicz-cu-plated-shj-aging-mini-modules
source_type: paper
title: "Aging tests of mini-modules with copper-plated heterojunction solar cells and pattern-transfer-printing of copper paste"
authors: ["Lachowicz, A.", "Badel, N.", "Barrou, A.", "Barth, V.", "Harrison, S.", "Frasson, N.", "Galiazzo, M.", "Cohen, N.", "Cohen, E.", "Zhao, J.", "Paviet-Salomon, B.", "Ballif, C."]
year: 2024
doi: "10.1051/epjpv/2024008"
url: "https://doi.org/10.1051/epjpv/2024008"
raw_path: raw/papers/2024-lachowicz-cu-plated-shj-aging-mini-modules.pdf
tags: [SHJ, copper-plating, smartwire, shingle, damp-heat, thermal-cycling, PID, pattern-transfer-printing, edge-sealing, CSEM]
---

# Aging tests of mini-modules with copper-plated heterojunction solar cells and pattern-transfer-printing of copper paste

## Summary
Peer-reviewed CSEM/CEA-INES/AMAT/DR-Utilight study (EPJ Photovoltaics 2024) of three-step plated-Cu metallization on SHJ cells: (1) screen-printed seed grid, (2) PECVD dielectric layer as plating mask, (3) selective Cu electrodeposition. Two interconnection schemes are aged: SmartWire mini-modules with M6 half-cells in glass-glass POE, and shingle mini-modules with M2 cells in glass-glass POE. Thermal-cycling and PID stability are excellent (≤0.2% loss after 690 TC; survives 2× IEC PID). Damp-heat is the bottleneck — 5% Pmax loss after 2700 h on SmartWire modules and >2% FF loss after 2000 h on shingle modules, with degradation initiating at unsealed module edges. Edge sealing (polyisobutylene) is identified as the route to compliance. Champion 24.2% bifacial 9-busbar M6 cell achieved with this process. Pattern-transfer-printing demonstrates 26.1 µm wide, 21.9 µm tall pure-Cu lines with 0.18 Ω over a 26 mm pad-to-pad distance. Contact resistivity of Cu paste on ITO measured at 1.5 mΩ·cm² by screen-printed TLM.

## Key claims
- Three-step process: SCC (silver-coated-copper) paste seed-grid printing, PECVD dielectric mask, Cu electrodeposition through the voids in the dielectric on the paste lines (Fig. 1, Sec. 2).
- Best champion cell: 24.2% efficiency, 81.7% FF, 742.4 mV Voc, 39.9 mA/cm² Jsc, 274.15 cm² M6 bifacial 9-busbar layout (Sec. 3, internal measurement).
- SmartWire glass-glass POE mini-modules with copper: 0.2% Pmax loss after 690 TC cycles (vs 1.4% for SCC reference); survived 2×96 h PID at +1000 V and -1000 V.
- DH degradation: SCC-only references degraded strongly (FF dominated); copper modules with dielectric layer + plated Cu degraded only 5% Pmax after 2700 h DH at 85 °C / 85% RH (Fig. 2 right). Edge initiation visible in EL (Fig. 3).
- Shingle modules (M2 cells, 25 mm tile width, polyolefin encapsulant, glass-glass, no edge sealing): TC stability <0.5% Pmax after 400 cycles; >2% FF loss after 2000 h DH (Fig. 4).
- Significantly higher FF than the SCC-only shingle reference is achieved by copper plating, attributed to higher line conductivity (lines ~25 mm width with electrodeposited Cu give 0.07 Ω over a 25 mm shingle width vs 0.43 Ω for SCC paste alone).
- Contact resistivity of pure copper paste on ITO ≈ 1.5 mΩ·cm² (TLM, screen-printed pattern; Sec. 5).
- PTP (pattern-transfer-printing): 26.1 µm × 21.9 µm pure-Cu line achievable; with electroplated Cu on Cu-paste, line resistance 0.18 Ω over 26 mm pad-to-pad — competitive with SCC reference (1.5 Ω).
- "1-cell mini-modules may represent the hardest condition for DH testing due to their high ratio of perimeter to module area." — DH degradation is dominated by edge moisture ingress.

## Methods used
- [[../methods/screen-printed-Ag-paste]] — for SCC seed grid; comparison reference
- [[../methods/Cu-electroplating-acid-bath]] — selective Cu deposition on the seed grid through dielectric voids
- [[../methods/damp-heat-aging-1000h]] — 85°C / 85% RH up to 2700 h
- [[../methods/temperature-cycling-IEC61215-TC200]] — 690 cycles for SmartWire, 400 for shingle
- [[../methods/transfer-length-method]] — TLM for contact-resistivity of Cu paste on ITO
- [[../methods/EL-electroluminescence-imaging]] — to localize edge-initiated degradation
- [[../methods/IV-curve-measurement]] — cell IV; module Pmax tracking
- [[../methods/inkjet-mask-patterning]] — analogous role; here PECVD dielectric is the plating mask

## Reagents
- [[../reagents/ITO-transparent-conductive-oxide]] — front TCO; barrier against Cu diffusion
- [[../reagents/AZO-aluminum-doped-zinc-oxide]] — alternative TCO referenced for module stability strategy
- [[../reagents/POE-polyolefin-encapsulant]] — used in glass-glass laminates
- [[../reagents/electrically-conductive-adhesive-ECA]] — ~3.5 mg per shingle for shingle interconnection, cured at 150 °C
- [[../reagents/Cu-paste-low-temperature]] — pure Cu paste from Namics, used for PTP and SCC seed grids
- [[../reagents/multibusbar-Cu-ribbon]] — SmartWire wires with In-free low melting point alloy

## Organisms / substrates
- [[../organisms/SHJ-cell-M6]] — half-cells for SmartWire modules, industrial precursors
- [[../organisms/SHJ-cell-M10]] — referenced for upcoming PTP experiments
- [[../organisms/mini-module-glass-glass]] — both SmartWire (1 half-cell) and shingle (6 shingles per string) variants

## Failure modes flagged
- [[../failure-modes/Cu-finger-corrosion-encapsulant]] — DH degradation initiating at module edges; moisture-driven
- [[../failure-modes/Ni-Cu-line-resistance-rise-DH]] — implicated by FF degradation
- [[../failure-modes/finger-adhesion-loss-after-DH]] — implied by FF degradation
- [[../failure-modes/EVA-acetic-acid-corrosion]] — referenced as the reason POE is preferred (mitigated here by using POE)
- [[../failure-modes/FF-degradation-contact-resistance]] — observed in shingle modules

## Supports / contradicts
- Supports: [[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] (CSEM workshop precursor of this paper)
- Supports: [[2021-hatt-stable-cu-plated-shj-eupvsec]] (Cu plating viable on SHJ)
- Supports: [[2024-siliconpv-novel-shj-metallization-architectures]], [[2024-lorenz-cutting-edge-metallization-shj-fraunhofer]]
- Contrasts with: [[2022-karas-cu-outdiffusion-damp-heat]] — Karas observed Cu out-diffusion in EVA-encapsulated PERC/AlBSF; here POE encapsulation and the TCO diffusion barrier mitigate but DH at module edges still dominates.

## Notable quotes
- "DH degradation is at 5% after 2700 h (glass-glass modules without edge sealing)." — abstract
- "The contact resistivity of the copper paste on indium thin oxide is at 1.5 mΩ·cm². This value has been determined with screen-printed TLM pattern." — Sec. 5
- "Edge sealing with polyisobutylene is used in commercial heterojunction modules to improve the stability in damp-heat." — Sec. 3
- "TC stability of shingle modules is very good, whereas after 2000 h damp-heat aging more than 2% loss in fill factor is observed." — abstract
