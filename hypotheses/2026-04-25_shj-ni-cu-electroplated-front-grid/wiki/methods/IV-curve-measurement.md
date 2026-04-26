---
type: method
slug: IV-curve-measurement
aliases: [IV curve, light IV, AM1.5g STC, sun-simulator IV]
related_methods: [dark-IV-suns-Voc, EQE-measurement, EL-electroluminescence-imaging, four-point-probe-sheet-resistance]
key_reagents: [ITO-transparent-conductive-oxide, a-Si-H-passivation]
known_failure_modes: [FF-degradation-contact-resistance, Voc-degradation-Cu-contamination, Jsc-loss-from-cap-stack-shading]
sources: [2010-bartsch-lip-pvsc, 2012-nrel-aluminum-metallization-tlm-printed, 2014-nrel-pv-module-qualification-plus, 2015-lindroos-cu-lid-aalto-thesis, 2017-jeon-electroless-ni-front-metallization, 2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, 2019-karas-damp-heat-degradation-shj-cu, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration, 2023-taiyangnews-heterojunction-technology-report, 2023-tepner-printing-tech-csi-review, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-lorenz-cutting-edge-metallization-shj-fraunhofer, 2024-siliconpv-novel-shj-metallization-architectures, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV]
tags: [characterization, AM1.5g, STC, efficiency, FF, Voc, Jsc, hypothesis-primary-metric]
---

# IV Curve Measurement (Light IV at STC)

## What it measures / does
Cell-level current-voltage characterisation under standard test conditions (AM1.5g, 1000 W/m², 25 C). Extracts efficiency, open-circuit voltage Voc, short-circuit current density Jsc, fill factor FF, and series/shunt resistance. This is the principal cell-level metric the hypothesis measures: "no measurable efficiency loss after 1000 h damp heat" requires before/after IV.

## When to use it
At every checkpoint: after metallization, after first damp-heat dwell, and at intermediate intervals. For SHJ specifically, slow-sweep (250 ms) IV is required because of the large internal capacitance of the a-Si:H stack — 20 ms sweep underestimates FF.

## Key parameters
- Standard: AM1.5g at 1000 W/m², cell temperature 25 C.
- Sweep: SHJ requires 250 ms (RapidWAVE) vs 20 ms for PERC; HJT2.0 nc-Si emitter reduces this.
- Reference cells: ISFH-certified for record-cell measurement.
- Equipment: HALM cell tester (Lorenz 2024), AMAT Botticelli LED multi-spectral simulator (Frasson 2024), LOANA (Yacouba 2025).
- GridTouch / 5BB / 9BB / 18BB measurement modes for cell-level FF extrapolation.
- Reference SHJ cell efficiencies: NOBLE Cu 22.6%, NOBLE+laser 21.4-22.7% (Hatt 2021); SunDrive Cu-plated 26.41% certified (2022); zero-Ag Cu paste 22.4-23.08% (Yacouba 2025); knotless screen-print Ag 23.2% (Lorenz 2024).

## Common variants / alternatives
- [[dark-IV-suns-Voc]] — pseudo-FF and J02 from Sinton Suns-Voc method, free of Rs effects.
- [[EQE-measurement]] — spectral quantum-efficiency complement; identifies optical loss mechanisms.

## Things to watch for (failure modes)
- [[../failure-modes/FF-degradation-contact-resistance]] — FF gap pFF-FF flags contact resistance issues.
- [[../failure-modes/Voc-degradation-Cu-contamination]] — Voc drop signals junction-area Cu contamination after DH.
- [[../failure-modes/Jsc-loss-from-cap-stack-shading]] — Jsc reduction maps to finger-shading.

## Sources
- [[2010-bartsch-lip-pvsc]] — STC sun simulator IV; 20.3% FZ best.
- [[2012-nrel-aluminum-metallization-tlm-printed]] — 13% champion 21 cm² c-Si cell with aerosol-jet Al + SP Ag.
- [[2014-nrel-pv-module-qualification-plus]] — STC peak-power before/after testing.
- [[2015-lindroos-cu-lid-aalto-thesis]] — referenced for solar-cell-level Cu-LID effects.
- [[2017-jeon-electroless-ni-front-metallization]] — AM1.5 measurement before/after anneal.
- [[2018-pv-international-metallization-shj]] — SHJ cell/module benchmark.
- [[2018-pv-tech-metallization-interconnection-bifacial-shj]] — Plated + soldering 4BB/5BB/6BB all 22.7%.
- [[2019-hatt-noble-bifacial-shj-aip]] — STC AM1.5g full-area NOBLE 20.0%.
- [[2019-hatt-noble-shj-solrrl]] — first NOBLE lab cell 20.2%.
- [[2019-karas-damp-heat-degradation-shj-cu]] — light IV before/after DH.
- [[2021-hatt-stable-cu-plated-shj-eupvsec]] — 12 large-area SHJ cells reproducibly ~22.6%.
- [[2022-arena-sundrive-copper-metallisation-demonstration]] — ISFH-certified 25.54% / 26.07% / 26.41%.
- [[2023-taiyangnews-heterojunction-technology-report]] — SHJ-specific challenges (RapidWAVE, internal capacitance, 250 ms sweep).
- [[2023-tepner-printing-tech-csi-review]] — implicit benchmark methodology.
- [[2024-lachowicz-cu-plated-shj-aging-mini-modules]] — cell IV; module Pmax tracking.
- [[2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] — GridTouch industrial cell tester, 5BB + 9BB.
- [[2024-siliconpv-novel-shj-metallization-architectures]] — STC on AMAT Botticelli LED simulator.
- [[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — HALM cell tester; 5BB/9BB/18BB extrapolation.
- [[2025-yacouba-shj-silver-free-metallization-progPV]] — LOANA IV characterisation under STC.
