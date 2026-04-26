---
type: organism
slug: full-size-module-72-cell
organism_type: module
external_id: 72-cell utility module (or 132/144-half-cell equivalent)
characteristics:
  - 72 full cells (or 132/144 half-cells) in series-parallel; ~1980×990 mm M2 footprint
  - Power class 400–700+ Wp depending on cell technology, format, and bifacial gain
  - Utility-scale / large commercial form factor
  - Bifacial glass-glass POE preferred for SHJ; transparent backsheets emerging
  - 700 W+ class enabled by M10 / G12 wafers + multibusbar (≥18 BB) interconnection
  - Sunpreme demonstrated 402 Wp 72-cell bifacial Cu-plated SHJ module in 2018 — early industrial Cu-plated reference
known_failure_modes: [Cu-finger-corrosion-encapsulant, EVA-acetic-acid-corrosion, finger-adhesion-loss-after-DH, lateral-Cu-edge-migration, Cu-finger-oxidation-damp-heat]
sources: [2011-nrel-reliability-testing-beyond-qualification, 2012-nrel-iec61215-what-it-is, 2013-koehl-fraunhofer-accelerated-service-life-testing, 2014-nrel-pv-module-qualification-plus, 2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2023-taiyangnews-heterojunction-technology-report, 2024-itrpv-15th-edition-roadmap, 2024-nrel-getting-ahead-of-curve-pv-assessment]
tags: [module, 72-cell, full-size, utility, bifacial, 700W, IEC61215]
---

# Full-size module — 72-cell (utility class)

## What it is
72-cell (or 132/144-half-cell) crystalline-silicon module — the utility-scale form factor whose power class has scaled from ~400 Wp (2018, M2) to 700 W+ (2024, M10 / G12 / M10R / G12R) thanks to larger wafers and multibusbar interconnection. For this hypothesis, the 72-cell module is the qualification target against which any plated-Cu SHJ front grid must demonstrate IEC 61215 compliance at commercial scale.

## Standard dimensions / spec
- Cell count: 72 full cells in 6×12, or 132/144 half-cells in 6×22 / 6×24.
- Footprint: ~1980×990 mm at M2; ~2280×1130 mm for M10/G12 layouts.
- Power class: 402 Wp (CSEM 4BB SHJ Cu-plated 72-cell, [[2018-pv-international-metallization-shj]]); 410 Wp (CEA + Meyer Burger 2018 M&I record); ≥700 W class for G12 132-half-cell modules ([[2023-taiyangnews-heterojunction-technology-report]]).
- Encapsulant: POE for SHJ; EVA still common for PERC/TOPCon legacy lines.
- Module standard width (M10): 1134 mm.
- IEC 61215 acceptance: same ≤5% Pmax loss after 1000 h DH and 200 TC; CSEM SWCT plated-Cu modules passed 5× IEC ([[2018-pv-tech-metallization-interconnection-bifacial-shj]]).

## Common pitfalls / handling notes
- Larger module → longer ribbons / wires → tighter constraint on per-finger line resistance to keep CTM losses low; favours plated Cu over screen-printed Ag at ≥M10.
- Series-current handling for full G12 cells too high — 72-cell modules typically use half-cut G12 (132 half-cells) to halve I²R in interconnect.
- Glass thickness: 3.2 mm front + 2.0–2.5 mm rear for glass-glass bifacial; thinner front glass (≤2.8 mm) emerging.
- 72-cell modules pose slightly different mechanical-load and hot-spot tests under IEC 61215 vs 60-cell — reliability data does not transfer 1:1.
- Bifaciality: 60% market share by 2032 (NREL/ITRPV); SHJ benefits more than PERC (BFR ≥0.95 vs ~0.7).
- ITRPV finger-width roadmap (27→15 µm) is set with the 72-cell utility-scale module power-class as anchor.

## Failure modes commonly associated
- `[[../failure-modes/Cu-finger-corrosion-encapsulant]]` — Cu species in encapsulant.
- `[[../failure-modes/EVA-acetic-acid-corrosion]]` — central reason POE is preferred for SHJ utility modules.
- `[[../failure-modes/finger-adhesion-loss-after-DH]]` — long finger / many busbars amplify total adhesion-failure surface.
- `[[../failure-modes/lateral-Cu-edge-migration]]` — long edge perimeter raises edge-initiated DH risk.
- `[[../failure-modes/Cu-finger-oxidation-damp-heat]]` — Cu-paste / pure-Cu reliability concern for full-size deployment.

## Sources
- `[[2018-pv-international-metallization-shj]]` — 402 Wp Sunpreme 72-cell bifacial Cu-plated SHJ reference.
- `[[2018-pv-tech-metallization-interconnection-bifacial-shj]]` — 410 Wp CEA + Meyer Burger 2018 record; SWCT 5× IEC pass.
- `[[2024-itrpv-15th-edition-roadmap]]` — 700 W+ class via M10R / G12R; finger-width and busbar trends.
- `[[2023-taiyangnews-heterojunction-technology-report]]` — Risen Hyper-ion 132-cell G12 module; 72-cell-class trends.
- `[[2024-nrel-getting-ahead-of-curve-pv-assessment]]` — 72-cell-class reliability gap analysis; bifacial PID protocol gaps.
- `[[2011-nrel-reliability-testing-beyond-qualification]]`, `[[2012-nrel-iec61215-what-it-is]]`, `[[2014-nrel-pv-module-qualification-plus]]` — IEC 61215 framework.
- `[[2013-koehl-fraunhofer-accelerated-service-life-testing]]` — Fraunhofer service-life modelling for full-size modules.
