---
type: reagent
slug: ITO-transparent-conductive-oxide
aliases: [indium tin oxide, In2O3:Sn, TCO]
cas: 50926-11-9
formula: In2-xSnxO3 (x ≈ 0.05-0.10; ~10 wt% SnO2 in In2O3)
suppliers:
  - name: Plansee / GfE / Umicore (sputter targets)
    catalog: In2O3:SnO2 90:10 wt%, rotary or planar targets
    grade: 4N–5N production
    url: null
  - name: Materion / Soleras (alternative target vendors)
    catalog: ITO sputter targets
    grade: 4N–5N
    url: null
storage: target stored room-temperature, dry, sealed; cells with ITO layer stored ambient (the layer self-passivates under thin SnOx)
hazards: low (as deposited film); In dust exposure during target machining is a concern (chronic indium lung disease)
known_failure_modes: [TCO-pitting-during-plating, FF-degradation-contact-resistance, a-Si-H-passivation-degradation]
sources: [2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-taiyangnews-heterojunction-technology-report, 2024-itrpv-15th-edition-roadmap, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-lorenz-cutting-edge-metallization-shj-fraunhofer, 2024-nrel-getting-ahead-of-curve-pv-assessment, 2024-siliconpv-novel-shj-metallization-architectures, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV]
tags: [TCO, sputtered-oxide, contact-layer, Cu-diffusion-barrier, indium]
---

# ITO — indium tin oxide (transparent conductive oxide)

## What it is
A degenerate-semiconductor transparent conductive oxide deposited by magnetron sputtering on the front and rear of an SHJ cell over the doped a-Si:H layers. ITO simultaneously (i) collects laterally-conducted carriers to the metal grid, (ii) anti-reflection-couples light into the cell (~75–80 nm tuned thickness), and (iii) — critical for this hypothesis — acts as an effective Cu diffusion barrier so that plated Cu fingers on top do NOT contaminate the c-Si bulk.

## Common uses
- Front and rear contact layer of every commercial SHJ cell ([[2023-taiyangnews-heterojunction-technology-report]], [[2024-itrpv-15th-edition-roadmap]]).
- Cu-diffusion barrier that obviates the need for a Ni interlayer in TCO-only plated Cu architectures ([[2018-pvtech-metallization-shj-cells-modules]], [[2022-arena-sundrive-copper-metallisation-demonstration]], [[2025-yacouba-shj-silver-free-metallization-progPV]]).
- Underlayer for PVD seed (Cu, Ag, TiW) in NOBLE-style selective plating ([[2019-hatt-noble-shj-solrrl]], [[2019-hatt-noble-bifacial-shj-aip]], [[2021-hatt-stable-cu-plated-shj-eupvsec]]).

## Key spec / concentration ranges
- Composition: 90:10 wt% In2O3:SnO2 (most common); CAS 50926-11-9.
- Sputtered thickness 70–110 nm (typical ARC tuning); commonly ~75–80 nm on SHJ ([[2019-hatt-noble-shj-solrrl]], [[2019-hatt-noble-bifacial-shj-aip]]).
- Sheet resistance ~50–150 Ω/sq depending on doping and post-anneal; typical SHJ-ITO ~80–100 Ω/sq.
- Optical: T > 90% in 400–1100 nm; refractive index ~1.9–2.0 (well-matched to glass/EVA).
- Deposition: magnetron sputtering (DC, RF, or RCS) below 200 °C to preserve a-Si:H passivation.
- Contact resistivity to plated Cu: 0.1–1 mΩ·cm² with PVD-Ag seed ([[2021-hatt-stable-cu-plated-shj-eupvsec]]); 1.8–4.0 mΩ·cm² with PVD-Cu seed ([[2019-hatt-noble-shj-solrrl]]); 1.5 mΩ·cm² with screen-printed Cu paste ([[2024-lachowicz-cu-plated-shj-aging-mini-modules]]).
- ARENA SunDrive demonstrated 70% In reduction in low-In TCO variants while maintaining 25.94% efficiency ([[2022-arena-sundrive-copper-metallisation-demonstration]]).

## Alternatives / variants
- [[IWO-tungsten-doped-indium-oxide]] — higher mobility, lower carrier concentration → less parasitic IR absorption.
- [[AZO-aluminum-doped-zinc-oxide]] — In-free alternative; AZO/ITO stack reduces In 85% per FZJ data ([[2023-taiyangnews-heterojunction-technology-report]]).
- HZO (hydrogen-doped In2O3) — research-grade alternative.

## Gotchas
- ITO is conductive, so plating directly onto a TCO without a patterning mask plates the entire surface, not just fingers — a patterning step (inkjet hot-melt, photoresist, NaOH on PVD-Al, dielectric mask, laser ablation) is mandatory ([[2018-pvtech-metallization-shj-cells-modules]]).
- ITO can be pitted by acidic Cu plating baths if the Cu PVD seed has discontinuities — flagged on Cupracid TDS ([[atotech-cupracid-ultra-a-tds]]) and observed in NOBLE etch-back step ([[2019-hatt-noble-bifacial-shj-aip]]).
- Indium supply is itself a sustainability bottleneck for TW-scale SHJ; In-reduced TCOs (low-In ITO, IWO/AZO stacks) are an active R&D thread.
- Sputter damage to underlying a-Si:H can cost 10+ mV Voc unless followed by 200 °C / 15 min anneal in air ([[2019-hatt-noble-shj-solrrl]]).
- Native SnOx surface forms in air — wets Cu plating non-uniformly unless freshly cleaned or sputter-finished.

## Sources
- [[2018-pvtech-metallization-shj-cells-modules]] — canonical statement that "TCO layer will already act as an efficient barrier to copper migration towards the silicon."
- [[2025-yacouba-shj-silver-free-metallization-progPV]] — direct experimental confirmation that no Cu diffusion into Si is detectable on Cu-pasted SHJ (TCO is the barrier).
- [[2022-arena-sundrive-copper-metallisation-demonstration]] — 25.54%/26.07%/26.41% records on Cu-on-ITO SHJ; low-In TCO route also demonstrated.
- [[2019-hatt-noble-shj-solrrl]] / [[2019-hatt-noble-bifacial-shj-aip]] / [[2021-hatt-stable-cu-plated-shj-eupvsec]] — ITO contact-resistivity benchmarks 0.1–4.0 mΩ·cm² with PVD-seed variations.
- [[2018-pv-international-metallization-shj]] / [[2018-pv-tech-metallization-interconnection-bifacial-shj]] — CSEM SHJ M&I review.
- [[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] / [[2024-lachowicz-cu-plated-shj-aging-mini-modules]] — DH of plated-Cu-on-ITO SHJ mini-modules.
- [[2023-taiyangnews-heterojunction-technology-report]] / [[2024-itrpv-15th-edition-roadmap]] / [[2024-fraunhoferise-photovoltaics-report]] (via downstream refs) / [[2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] / [[2024-nrel-getting-ahead-of-curve-pv-assessment]] / [[2024-siliconpv-novel-shj-metallization-architectures]] / [[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — industry / roadmap context for ITO use and indium reduction.
