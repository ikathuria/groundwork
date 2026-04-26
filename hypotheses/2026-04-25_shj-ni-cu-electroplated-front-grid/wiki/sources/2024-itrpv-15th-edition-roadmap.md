---
type: source
id: 2024-itrpv-15th-edition-roadmap
source_type: paper
title: "International Technology Roadmap for Photovoltaic (ITRPV) 15th Edition — Results 2023"
authors: ["VDMA"]
year: 2024
doi: ""
url: https://www.qualenergia.it/wp-content/uploads/2024/06/ITRPV-15th-Edition-2024-2.pdf
raw_path: raw/papers/2024-itrpv-15th-edition-roadmap.pdf
tags: [ITRPV, roadmap, silver-laydown, Cu-plating, SHJ, market-share, VDMA]
created: 2026-04-26
updated: 2026-04-26
---

# International Technology Roadmap for Photovoltaic (ITRPV) 15th Edition — Results 2023

**VDMA Photovoltaic Equipment** — *VDMA, Frankfurt, 15th Edition (results year 2023), released 2024*. DOI: —

## Summary

The ITRPV is the canonical industry survey of c-Si PV technology trajectory: per-cell silver laydown, n-type market share, Cu-plating adoption, wafer thickness, cell efficiency, and equipment trends, polled annually from VDMA-member-equipment manufacturers and Tier-1 cell makers. The 15th Edition (released 2024 with 2023 results) provides the primary numerical anchor for the SHJ Ni/Cu hypothesis's economic case: it gives the projected Ag-laydown trajectory the plated-Cu intervention must beat, the SHJ market share, and the projected Cu-containing-metallization market share for SHJ.

## Key claims

- **2023 SHJ silver consumption (M10 baseline):** **160 mg/cell** front + rear; expected to fall toward TOPCon's level (~120 mg/cell) over the next 10 years. G12 SHJ baseline ~230 mg/cell.
- **Ag per Watt (2023, cell-level median):** PERC 9.6 mg/W, TOPCon 15 mg/W, SHJ ~19 mg/W; projected to converge to ~9 mg/W for both TOPCon and SHJ by ~2034.
- **PERC paste check (2023):** 9.6 mg/W × ~500 GW PERC + 15 mg/W × TOPCon (65:35 split) ≈ 5,750 tons of Ag, **~18% of 2023 world silver supply** — the supply-bottleneck argument the hypothesis rests on.
- **Ag price snapshot (May 2024):** $853.92/kg Ag → ~$0.98 ¢/W of cell cost just from the front grid; up from ~$650/kg one year prior — illustrates the price-volatility risk Cu plating mitigates.
- **SHJ metallization market-share projection (Fig. 14):** "Copper-containing" metallization rises from ~5% (2023) to a meaningful share by 2031–2034. Silver-based remains dominant near-term; Cu plating is *not yet* in significant mass production market share.
- **Pb-free pastes:** SHJ already uses lead-free pastes; PERC/TOPCon transitioning to lead-free.
- **Wafer thickness trajectory:** SHJ wafer thickness falling toward minimum **100 µm by 2034** (M10) — relevant for the SHJ Ni/Cu hypothesis's mechanical / handling constraints.
- **n-type market share:** ITRPV 15th sees rapid n-type (TOPCon + SHJ) takeoff replacing PERC over 2024–2032; n-type wafers ~70% of production by 2024 (per Fraunhofer ISE PV Report cross-reference).
- **Plating status:** "Plating is still not introduced in a significant mass production market share. In general, copper is already being used in SHJ more in the form of adapted pastes." — flags the SHJ Cu-paste route (Yacouba 2025, Lorenz 2025) as the *current* industrial alternative to plating.

## Methods used

- [[methods/screen-printed-Ag-paste]] — ITRPV's reference baseline for cost / performance comparisons.
- [[methods/electroplated-Ni-Cu-stack]] — flagged as the long-term "copper-containing metallization" trajectory.
- [[methods/Cu-electroplating-acid-bath]] — the mass-production version of the trajectory, even if not yet at significant share in 2023.
- [[methods/IV-curve-measurement]] — implicit; the cell-efficiency targets (Fig. 40) used to back out per-Watt Ag values.

## Reagents

- [[reagents/low-T-Ag-paste-generic-SHJ-grade]] — the ITRPV-tracked baseline SHJ paste; the 160 mg/cell M10 figure is for this paste class.
- [[reagents/Cu-paste-low-temperature]] — the "silver-coated copper paste" trajectory ITRPV explicitly names for SHJ.
- [[reagents/silver-Ag-cap]] — top layer of the projected plated-Cu stack (Cu cap with thin Ag).

## Organisms / substrates

- [[organisms/SHJ-cell-M10]] — the 182×182 mm SHJ cell format that sets ITRPV's primary reference.
- [[organisms/SHJ-cell-G12]] — the 210×210 mm format (the 230 mg/cell figure).

## Failure modes flagged

- [[failure-modes/silver-supply-bottleneck]] — explicitly framed (~18% of world silver in 2023, untenable at TW scale).
- [[failure-modes/non-reproducibility-in-solar-cell-claims]] — implicit; the roadmap's slow-take-up of plating reflects industrial reproducibility risks beyond lab demos.

## Supports / contradicts

- **Supports:** [[sources/2020-verlinden-future-challenges-tw-pv]] — Verlinden's "PV will use 100% of global Ag at 1 TW" maps directly onto ITRPV's 18% in 2023 + supply-bottleneck framing.
- **Supports:** [[sources/2021-goldschmidt-tech-learning-tw-pv]] — Goldschmidt's resource-bottleneck quantification is the academic counterpart to ITRPV's industry survey.
- **Supports:** [[sources/2024-fraunhoferise-photovoltaics-report]] — Fraunhofer ISE PV Report cross-cites ITRPV for n-type share and wafer thickness.
- **Supports:** [[sources/2024-iea-pvps-trends-pv-applications]] — IEA-PVPS Trends Report 2024 uses ITRPV data for cell-technology-share projections.
- **Supports:** [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — Lorenz 2025 explicitly cites ITRPV 14 (immediate predecessor of this edition) for the Ag-mg/cell baseline.

## Notable quotes

> "Our report results show that n-type cell concepts have an expected higher silver consumption than p-type PERC that consumes 74 mg/cell in M10 format. TOPCon consumes 120 mg/cell and SHJ 160 mg/cell." — *p. 15*

> "On top of a continuous reduction of silver consumption at the cell manufacturing level, silver replacement is still considered. Copper (Cu), as less expensive material, applied with plating technologies or even with silver coated copper as another approach. The latter is mainly targeting the SHJ cell concepts. Plating is still not introduced in a significant mass production market share." — *p. 17*

> "500 GW PERC cells in 2023 consumed about 5,750 tons of silver, assuming 9.6 mg/W for PERC and 15mg/W for TOPCon respectively (assuming a share PERC:TOPCon of 65:35). This corresponds to about 18% of world silver supply in 2023." — *p. 16*
