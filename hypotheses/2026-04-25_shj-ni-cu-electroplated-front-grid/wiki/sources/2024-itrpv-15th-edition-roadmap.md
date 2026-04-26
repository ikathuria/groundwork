---
type: source
id: 2024-itrpv-15th-edition-roadmap
source_type: paper
title: "International Technology Roadmap for Photovoltaics (ITRPV) — 15th Edition, Results 2023"
authors: ["VDMA Photovoltaic Equipment", "International Technology Roadmap for Photovoltaics steering committee (50 contributors)"]
year: 2024
doi: null
url: "https://itrpv.vdma.org/"
raw_path: raw/papers/2024-itrpv-15th-edition-roadmap.pdf
tags: [industry-roadmap, ITRPV, market-context, SHJ, TOPCon, silver, copper-plating, finger-width, busbar, n-type, market-share-projections]
---

# International Technology Roadmap for Photovoltaics (ITRPV) — 15th Edition, May 2024

## Summary
ITRPV is the canonical industry-consensus roadmap, prepared by 50 leading poly-Si producers, wafer suppliers, c-Si cell/module manufacturers, equipment suppliers, materials providers and research institutes under VDMA. The 15th edition covers calendar 2023 and forward-looking 10-year projections (to 2034). Most relevant for this hypothesis: **2023 baseline silver consumption is 9.6 mg/W for PERC, 15 mg/W for TOPCon, 19 mg/W for SHJ**, with target reductions to ~9 mg/W for both TOPCon and SHJ by 2034. The market-share projection for SHJ metallization (Fig. 14) shows silver-based dropping from ~80% in 2023 to a substantial copper-containing share by 2034 — ITRPV explicitly names "copper, applied with plating technologies" and "silver-coated copper" as the two roads. Plating market share for **rear-side metallization** is projected at ~6% in 2034. The roadmap also documents finger width 27 µm (2023) → 15 µm (2034), busbar count >18 (rising) or busbarless (37% by 2034), and SHJ wafer thickness leading the industry down to 100 µm by 2034. 500 GW of PERC cells in 2023 consumed ~5,750 t silver = 18% of world silver supply. Module learning rate 24.9%/doubling from 1976. This is the canonical "where the industry says it is going" reference; the hypothesis aims at the SHJ-Cu-plating market share that ITRPV currently projects but has not yet seen materialize at scale.

## Key claims
- 2023 c-Si and PV module production capacity ≈ 1000 GWp; market 502 GW; learning rate 24.9% over 1976–2023.
- 2023 weighted-average c-Si module spot price: 0.118 US$/Wp (Dec 2023), down from 0.228 US$/Wp end-2022 (52% YoY drop).
- Market shares 2023: PERC 65%, TOPCon 35%; transition to n-type underway, p-type expected to lose dominance in 2024.
- Silver consumption per cell, M10 wafer, 2023: PERC 74 mg/cell, TOPCon 120 mg/cell, SHJ 160 mg/cell.
- Silver per Watt 2023: **PERC 9.6 mg/W, TOPCon 15 mg/W, SHJ 19 mg/W**; target by 2034 ≈ 9 mg/W for both TOPCon and SHJ.
- 500 GW PERC + TOPCon (2023, 65:35) consumed ~5750 t silver, ~18% of 2023 world silver supply (Silver Institute).
- Silver price May 2024: 853.92 US$/kg ≈ 0.98 US$cent/W of cell.
- **SHJ metallization market share projection (Fig. 14)**: silver-based dominates 2023 but copper-containing (plating + Ag-coated Cu paste) gains substantial share by 2034.
- "Plating is still considered to be interesting as **rear side metallization technology** with market shares around 6% after 2034."
- Front silver grid: dual print mainstream (84% in 2023), single print phasing out, double print disappearing in 2024.
- Finger width: 27 µm in 2023 → 15 µm in 2034 (40% reduction needed); alignment precision 5 µm @ ±3σ.
- Busbar counts: ≤12 BB at 62% in 2023, ≤12 BB falls to 10% by 2034; >18 BB and busbarless (37% by 2034) gain share; layouts of 5/6 BB no longer exist.
- Wafer thickness 2023: p-type all formats 150 µm; n-type TOPCon 125 µm; **SHJ leads thickness reduction toward 100 µm by 2034**; IBC ≥G12 → 130 µm.
- Casted Si and BBr3 boron diffusion are essentially extinct from market share by 2024.
- Selective emitter (laser-doped) is 100% market share in PERC since 2023.
- Front-side TOPCon/IBC poly-Si thickness 120 nm (2023) → 70 nm (2034).
- Boron-diffused emitter sheet resistance for n-type cells: 130 → 170 Ω/sq (homogenous), 165 → 210 Ω/sq (selective).
- Cleaning: ozone-based dominant for SHJ; RCA stable at 5–7%; H₂O₂-based dominant for PERC/TOPCon transitioning to ozone.
- 700 W+ module power class enabled by larger wafers (M10R, G12R 182×210 rectangular formats); SEMI standardization ongoing.
- M10 module standard width: 1134 mm; IEC working on a new wafer standard.
- Lead-free metallization pastes already mainstream for SHJ; Pb-free trend for PERC/TOPCon.
- Throughput: 7,900 wafers/h screen printing for M10 in 2024; 7,200 for SHJ PECVD (Maxwell); 7,500 for SHJ PVD (Von Ardenne).

## Methods used
- [[../methods/screen-printed-Ag-paste]] — explicitly named as the mainstream front+rear metallization technology, projected to remain mainstream over the next decade.
- [[../methods/electroplated-Ni-Cu-stack]] — projected as ≤6% market share for rear-side metallization by 2034; the SHJ-front pathway is the open question this hypothesis addresses.
- [[../methods/Cu-electroplating-acid-bath]] — implicit in the "plating technologies" market-share projection.
- [[../methods/four-point-probe-sheet-resistance]] — emitter sheet resistance is a tracked roadmap parameter (130–210 Ω/sq).
- [[../methods/laser-ablation-of-dielectric]] — selective-emitter laser doping is 100% PERC market share.

## Reagents
- [[../reagents/low-T-Ag-paste-generic-SHJ-grade]] — SHJ uses lead-free low-T pastes; market share 100% in 2023.
- [[../reagents/Cu-paste-low-temperature]] — silver-coated copper paste explicitly called out for SHJ as one of the two Ag-replacement paths.
- [[../reagents/multibusbar-Cu-ribbon]] — busbar count is a tracked roadmap parameter; 12 BB → 18 BB → busbarless trend.
- [[../reagents/ITO-transparent-conductive-oxide]] — implicit in the SHJ TCO discussion.
- [[../reagents/a-Si-H-passivation]] — SHJ structure assumed.

## Organisms / substrates
- [[../organisms/SHJ-cell-M10]] — primary tracked format (182×182 mm²).
- [[../organisms/SHJ-cell-G12]] — primary tracked format (210×210 mm²).
- [[../organisms/monocrystalline-Si-wafer-n-type]] — all SHJ uses n-type Cz-Si.
- [[../organisms/full-size-module-72-cell]] — 700 W+ module class.

## Failure modes flagged
- [[../failure-modes/silver-supply-bottleneck]] — central economic driver of the silver-reduction roadmap; ITRPV quantifies the 18%-of-global-supply 2023 baseline.
- [[../failure-modes/Jsc-loss-from-cap-stack-shading]] — finger-width-reduction roadmap (27 → 15 µm) trades shading vs. line resistance.
- [[../failure-modes/FF-degradation-contact-resistance]] — implicit in the "reduce finger width without reducing conductivity" trade-off.

## Supports / contradicts
- Supports: [[2020-verlinden-future-challenges-tw-pv]]
- Supports: [[2021-goldschmidt-tech-learning-tw-pv]]
- Supports: [[2024-fraunhoferise-photovoltaics-report]]
- Supports: [[2024-iea-pvps-trends-pv-applications]]
- Supports: [[2023-taiyangnews-heterojunction-technology-report]]
- Supports: [[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]]

## Notable quotes
- "The current study found about 9.6 mg/W on cell level as the median value in 2023 standard PERC monofacial and bifacial cells… For TOPCon 15 mg/W and SHJ around 19 mg/W are the current values. Moreover, a reduction down to values around 9 mg/W for TOPCon and SHJ is expected to be reached within the next 10 years." — p. 16
- "On top of a continuous reduction of silver consumption at the cell manufacturing level, silver replacement is still considered. Copper (Cu), as less expensive material, applied with plating technologies or even with silver coated copper as another approach. The latter is mainly targeting the SHJ cell concepts. Plating is still not introduced in a significant mass production market share." — p. 16
- "We see screen printing also in the future as the mainstream metallization technology. Plating is still considered to be interesting as rear side metallization technology with market shares around 6% after 2034." — p. 26
- "500 GW PERC cells in 2023 consumed about 5,750 tons of silver, assuming 9.6 mg/W for PERC and 15mg/W for TOPCon respectively (assuming a share PERC:TOPCon of 65:35). This corresponds to about 18% of world silver supply in 2023." — p. 16
- "Finger widths of about 27 µm were standard in 2023… A further reduction down to 15 µm over the next 10 years is expected." — p. 29
