---
type: source
id: 2018-pv-tech-metallization-interconnection-bifacial-shj
source_type: paper
title: "Metallization and Interconnection for High-Efficiency Bifacial Silicon Heterojunction Solar Cells and Modules"
authors: ["Faes, A.", "Lachowicz, A.", "Bettinelli, A.", "Ribeyron, P.-J.", "Lerat, J.-F.", "Munoz, D.", "Geissbühler, J.", "Li, H.-Y.", "Ballif, C.", "Despeisse, M."]
year: 2018
doi: null
url: "https://www.pv-tech.org/photovoltaics-international/"
raw_path: raw/papers/2018-pv-tech-metallization-interconnection-bifacial-shj.pdf
tags: [SHJ, CSEM, copper-electroplating, screen-printing, bifacial, smart-wire, ECA-gluing, cost-analysis, hot-melt-mask]
---

# Metallization and Interconnection for High-Efficiency Bifacial Silicon Heterojunction Solar Cells and Modules

## Summary
CSEM/CEA review (Photovoltaics International, 2018) summarizing the M&I cost landscape for bifacial SHJ at the dawn of large-scale deployment. Documents three Cu-electroplating routes (organic-resist mask, patterned-PVD-seed + dielectric, screen-printed seed-grid + dielectric) and benchmarks them against low-curing-temp Ag screen-print + soldering, ECA gluing, and SmartWire (SWCT). Reports CSEM's 24.1% record bifacial SHJ via PVD seed + hotmelt inkjet mask + Cu plating, peel forces ≥1 N/mm, and 5×IEC reliability passes for SWCT. Cost analysis: Cu-plating + standard soldering already competes with screen-print + ECA at 2018 prices, and projected 50% reduction in plating capex/consumables would make plating the cheapest M&I option for SHJ.

## Key claims
- LCT silver paste bulk resistivity has fallen ~3× lower over the years but is still ~2× pure Ag at 2018; forecast 3.5 µΩ·cm by 2020, 3.0 µΩ·cm by 2022.
- Soldering on LCT-Ag busbars requires busbar thickness 25–35 µm (peel ≈1 N/mm) → high silver consumption: 4BB SHJ uses 165+255 = 420 mg paste; 6BB 145+190 = 335 mg; ECA-glue 4BB 75+170 = 245 mg; SWCT optimized 20+40 = 60 mg.
- Three Cu-plating routes (Fig. 3): (A) PVD seed + organic resist mask, (B) patterned PVD seed + PECVD dielectric, (C) printed seed-grid + dielectric. Route A used by CSEM to reach 24.1% record bifacial 4BB SHJ.
- Cell efficiency table (Table 3, p. 8): Plated + soldering 4BB/5BB/6BB all 22.7% efficient; module power 403–476 Wp (Bifi20).
- Cost analysis: M&I total 2018 = €0.022–0.049/Wp (7–16% of module price). Plating + soldering already cheaper than print+soldering; with 50% volume-driven cost reduction (likely within years), plating becomes the cheapest M&I option for bifacial SHJ.
- Peel-force test at 180° + thermo-cycles + damp-heat reliability test for small R&D module with sputtered seed + hotmelt inkjet mask passed (Fig. 4).
- SWCT modules pass 5× IEC for thermo-cycles (1000 cycles −40 to +85°C) and 5× IEC damp heat (5000 h at 85°C/85% RH) without noticeable degradation.
- Silver consumption for PV = 7.5% of world Ag supply; production capacity expected ≥3× higher by 2025 → upward pressure on Ag price = additional stimulus for Cu plating.

## Methods used
- [[../methods/Cu-electroplating-acid-bath]] — three plating routes reviewed.
- [[../methods/screen-printed-Ag-paste]] — comparator; LCT pastes at 200°C cure.
- [[../methods/inkjet-mask-patterning]] — hot-melt inkjet mask used in CSEM 24.1% route.
- [[../methods/photolithography-mask-patterning]] — discussed for IBC; sub-20 µm fingers.
- [[../methods/peel-test-90deg]] — soldered ribbon peel test ≥1 N/mm.
- [[../methods/damp-heat-aging-1000h]] — IEC 61215 module-level test referenced.
- [[../methods/temperature-cycling-IEC61215-TC200]] — TC200 + 5×IEC discussed.
- [[../methods/IV-curve-measurement]] — cell + module testing.
- [[../methods/Ni-sputter-deposition]] — discussed via PVD seed (TiW, Ag, Cu) deposition.

## Reagents
- [[../reagents/low-T-Ag-paste-Solamet-PV21A]] — references LCT-Ag-paste developments (Namics-style); specific brand not named here but generic LCT Ag.
- [[../reagents/low-T-Ag-paste-generic-SHJ-grade]] — explicit comparator throughout.
- [[../reagents/acid-Cu-sulfate-bath]] — implicit in plating discussion.
- [[../reagents/ITO-transparent-conductive-oxide]] — TCO for SHJ.
- [[../reagents/a-Si-H-passivation]] — i/n and i/p stacks.
- [[../reagents/electrically-conductive-adhesive-ECA]] — ECA gluing as Ag-saving alternative.
- [[../reagents/EVA-encapsulant]] — implicit.
- [[../reagents/multibusbar-Cu-ribbon]] — 4BB/5BB/6BB ribbons + smart-wire 12-wire.

## Organisms / substrates
- [[../organisms/SHJ-cell-M6]] — 6" bifacial SHJ.
- [[../organisms/full-size-module-60-cell]] — 335 Wp + bifacial gain mentioned.
- [[../organisms/full-size-module-72-cell]] — 410 Wp record (CEA + Meyer Burger 2018).

## Failure modes flagged
- [[../failure-modes/silver-supply-bottleneck]] — primary motivation; 7.5% of world Ag supply.
- [[../failure-modes/Cu-finger-oxidation-damp-heat]] — reliability concern flagged for plated routes; Kaneka SiOx-barrier route improved DH stability.
- [[../failure-modes/finger-adhesion-loss-after-DH]] — peel-force on LCT-Ag is ≤1 N/mm and a known weak point.
- [[../failure-modes/Cu-finger-corrosion-encapsulant]] — addressed via Ag/Sn capping.
- [[../failure-modes/Ni-Cu-line-resistance-rise-DH]] — implicit in module reliability.

## Supports / contradicts
- Supports: [[2019-hatt-noble-shj-solrrl]] (cites Lachowicz 24.1% as benchmark)
- Supports: [[2018-pv-international-metallization-shj]] (companion CSEM publication)
- Provides cost framework cited by: [[2021-hatt-stable-cu-plated-shj-eupvsec]], [[2024-siliconpv-novel-shj-metallization-architectures]], [[2024-lorenz-cutting-edge-metallization-shj-fraunhofer]], [[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]]

## Notable quotes
- "The high conductivity of copper lines would also enable a reduction in the number of cell segments for shingling, and thus a reduction in laser cutting steps."
- "When the interconnection is done via gluing the LCT silver paste mass at the front side drops by more than 50% to values as low as 65 mg for 6BB."
- "Module passing five times IEC for thermo-cycles (1,000 cycles between -40°C and +85°C) without noticeable degradation and five times IEC for damp-heat (5,000 hours at 85°C and 85% relative humidity)" — for SWCT.
