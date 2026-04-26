---
type: failure-mode
slug: silver-supply-bottleneck
severity: low
frequency_estimate: "Industry-wide. PV consumed ~10 % of global Ag in 2019 (Verlinden 2020) and ~18 % in 2023 (ITRPV 15th edition). At 1 TW/year production unchanged Ag/W reaches 100 % of global Ag (~2028 under 25 % CAGR). Without learning rate ≥15 %, Goldschmidt 2021 projects PV Ag demand exceeds global production by 2027 (worst case) or 2051 (best case)."
applies_to_methods: [screen-printed-Ag-paste, Cu-electroplating-acid-bath, electroplated-Ni-Cu-stack]
applies_to_reagents: [low-T-Ag-paste-generic-SHJ-grade, low-T-Ag-paste-Solamet-PV21A, low-T-Ag-paste-Solamet-PV56S, Cu-paste-low-temperature, silver-Ag-cap, acid-Cu-sulfate-bath]
applies_to_step_kinds: [screen-print, plating, cap-deposition]
sources: [2014-rehman-nicu-plating-csi-review, 2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2020-verlinden-future-challenges-tw-pv, 2021-goldschmidt-tech-learning-tw-pv, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration, 2023-taiyangnews-heterojunction-technology-report, 2023-tepner-printing-tech-csi-review, 2024-fraunhoferise-photovoltaics-report, 2024-iea-pvps-trends-pv-applications, 2024-itrpv-15th-edition-roadmap, 2024-lorenz-cutting-edge-metallization-shj-fraunhofer, 2024-nrel-getting-ahead-of-curve-pv-assessment, 2024-siliconpv-novel-shj-metallization-architectures, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV, atotech-solar-industry-overview, dupont-solamet-pv21a-tech-sheet, dupont-solamet-pv56s-data-sheet, pvtech-metallization-challenges-cell-manufacturing]
tags: [silver, supply, terawatt, sustainability, structural-failure-mode, motivation, commons-candidate]
created: 2026-04-26
updated: 2026-04-26
---

# Silver supply bottleneck at terawatt-scale PV

**Slug:** `failure-modes/silver-supply-bottleneck` · **Severity:** low

## What it is

A **structural / economic** failure mode — not a device failure, but a constraint on the PV industry's ability to scale screen-printed-Ag SHJ to terawatt-class production. PV consumed ~10 % of global Ag in 2019 (Verlinden 2020) and ~18 % in 2023 (ITRPV 15th edition: 5,750 t / ~32,000 t global mine production). At unchanged Ag-per-Watt, the industry hits 100 % of global Ag at 1 TW/year of production (~2028 under 25 % CAGR projected by Verlinden). Goldschmidt 2021's REMIND-model analysis quantifies the same crossover at 2027 worst case / 2051 best case; both papers explicitly identify Cu plating (alongside FlexTrail printing and AgCu paste) as the only known route to per-Wp Ag below screen-printing's floor. This is the entire economic motivation for the SHJ Ni/Cu hypothesis.

**Note:** This is the canonical motivating failure mode for the hypothesis but is *not* a device-physics issue. The "failure" is the failure of the metallization-as-deployed-at-TW-scale to meet the resource constraint. Likely a strong commons-promotion candidate — recurs across every PV-metallization hypothesis.

## How it manifests

- **PV Ag consumption at unsustainable share of global production**: 7.9 % (2018, Goldschmidt) → ~10 % (2019, Verlinden) → ~18 % (2023, ITRPV).
- **Per-cell / per-Watt Ag laydown**: ITRPV 15th sees PERC at 9.6 mg/W, TOPCon 15 mg/W, SHJ ~19 mg/W (M10 baseline 160 mg/cell, G12 230 mg/cell).
- **Ag price volatility** — May 2024 spot $853.92/kg (ITRPV 15th), up from $650/kg one year prior; ~$0.98 ¢/W of cell cost from front grid alone.
- **Industry roadmap target**: per-Wp Ag must fall to <5 mg/W by 2030 to be sustainable (Verlinden 2020); Goldschmidt projects 0.7–2.9 mg/W by 2100. Lorenz 2024 demonstrates 4.4 mg/W on knotless fine-line screens; Pingel 2025 demonstrates <5 mg/W with Cu rear paste.
- **Plating market share lag** — ITRPV 15th: "Plating is still not introduced in a significant mass production market share."

## How to detect it

- **Cost analysis at production scale** — model per-cell Ag cost vs Cu-plating CapEx + chemistry consumables; compare $/cell.
- **Per-cell mass spectrometry / XRF** — direct Ag consumption measurement.
- **Industry survey data** — ITRPV (annual VDMA), IEA-PVPS Trends Report (annual), Fraunhofer ISE PV Report (annual). All track per-Wp Ag.
- **Spot-price tracking** — Ag price volatility itself is a detection signal.
- **Resource-modelling analyses** — REMIND (Goldschmidt), MIT IAM, ITRPV scenario analysis.

## Mitigation

- **Cu plating** — the canonical resolution. Verlinden 2020 explicitly cites it; Goldschmidt 2021 identifies it as one of the routes to per-Wp Ag below screen-print's floor. NOBLE, SunDrive, Maxwell, Tongwei commercial activities. The hypothesis's intervention.
- **AgCu (Cu core / Ag shell) paste** — Frasson 2024 (AMAT) demonstrates AgCu1 matches Ag at 21.94 % vs 21.95 %; ~58 % Ag reduction lab, projected 60 %+ at production scale.
- **Pure-Cu paste** — Yacouba 2025: 23.08 % SHJ with Cu paste on both sides (zero Ag); 100 % Ag reduction.
- **Fine-line screen printing** — Lorenz 2024: 23.2 % SHJ at 16.3 mg/cell (~4.4 mg/W); the *Ag-only* sustainable trajectory.
- **FlexTrail printing** — Goldschmidt 2021 cites 0.05 mg/Wp; Tepner & Lorenz 2023 review.
- **Smartwire (SWCT) / multibusbar interconnection** — relaxes finger-resistance constraint, enabling 60 mg/cell (CSEM/Faes 2018) vs ~1 g/cell legacy.
- **Indium-bottleneck mitigation** — Goldschmidt 2021 flags ITO/IWO indium as the *next* bottleneck after Ag; AZO + thin-ITO compromises (Lachowicz 2024) extend SHJ sustainability.
- **Recycling** — Verlinden notes PV recycled ~100 MW in 2020 (~0.1 % of annual production); needs ~10× growth in 10 years to recover end-of-life Ag, Cu, Sn, glass, Si.

## Where it applies

- Methods: [[methods/screen-printed-Ag-paste]], [[methods/Cu-electroplating-acid-bath]], [[methods/electroplated-Ni-Cu-stack]]
- Reagents: [[reagents/low-T-Ag-paste-generic-SHJ-grade]], [[reagents/low-T-Ag-paste-Solamet-PV21A]], [[reagents/low-T-Ag-paste-Solamet-PV56S]], [[reagents/Cu-paste-low-temperature]], [[reagents/silver-Ag-cap]], [[reagents/acid-Cu-sulfate-bath]]
- Step kinds: screen-print, plating, cap-deposition

## Severity rationale

Low (in the device-physics sense — this is an *economic* not a *physical* failure). The SHJ device works fine with 160 mg Ag/cell; the constraint is industry-wide, not cell-specific. But severity is "low" only by the device-failure rubric: the *strategic* impact is critical because it is the entire reason the SHJ Ni/Cu hypothesis exists. Verlinden 2020 frames it explicitly: "for the sustainability of Si photovoltaics, it is crucial that the future metallization solutions only make use of abundantly available and non-toxic materials."

## Citing sources

- [[sources/2020-verlinden-future-challenges-tw-pv]] — *the* canonical citation: 100 % of global Ag at 1 TW/year (~2028), Cu plating named explicitly as the resolution. <5 mg/W target.
- [[sources/2021-goldschmidt-tech-learning-tw-pv]] — REMIND-model quantification: 2027 worst case / 2051 best case for PV Ag demand exceeding global production. Indium as next bottleneck.
- [[sources/2024-itrpv-15th-edition-roadmap]] — 18 % of world Ag in 2023; per-cell laydown trajectory; "plating not yet at significant mass production market share."
- [[sources/2024-iea-pvps-trends-pv-applications]] — implicit; 456 GW 2023 → projected TW/yr is the upstream of this failure mode.
- [[sources/2024-fraunhoferise-photovoltaics-report]] — Fraunhofer's CAGR / cumulative deployment figures consistent with Verlinden's 1 TW/yr trajectory.
- [[sources/2014-rehman-nicu-plating-csi-review]] — early framing: Ag-paste consumes up to 40 % of cell processing cost; Cu ~100× cheaper.
- [[sources/2018-pv-international-metallization-shj]] — SHJ Ag use ~2× a PERC cell; foundational SHJ metallization framing.
- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — same framing with cost tables.
- [[sources/2018-pvtech-metallization-shj-cells-modules]] — same group's protocol companion.
- [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — "silver supply will soon become a bottleneck and is already causing 10 % of the costs for a typical solar module."
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — entire economic motivation; 25 % cell-level / 17 % module-level cost reduction from Ag elimination.
- [[sources/2023-taiyangnews-heterojunction-technology-report]] — industry survey: 18 mg/W (2022) → 10 mg/W target (2023).
- [[sources/2023-tepner-printing-tech-csi-review]] — fine-line screen-print trajectory as one mitigation route.
- [[sources/2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] — 4.4 mg/Wp at 23.2 % via fine-line screen.
- [[sources/2024-nrel-getting-ahead-of-curve-pv-assessment]] — explicit n-type Ag-supply concern; Cu attractive alternative.
- [[sources/2024-siliconpv-novel-shj-metallization-architectures]] — AgCu paste reduces Ag 58 % lab / 60 % projected.
- [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — <5 mg/W with Cu rear paste; 35 µm AgCu fingers.
- [[sources/2025-yacouba-shj-silver-free-metallization-progPV]] — 23.08 % all-Cu paste SHJ; 100 % Ag reduction.
- [[sources/atotech-solar-industry-overview]] — vendor framing of the silver-supply argument.
- [[sources/dupont-solamet-pv21a-tech-sheet]], [[sources/dupont-solamet-pv56s-data-sheet]] — fire-through Ag pastes; the supply-cost target the plated-Cu hypothesis addresses (also wiki red-flagged as PERC-only, false-friend SHJ controls).
- [[sources/pvtech-metallization-challenges-cell-manufacturing]] — "for the sustainability of Si photovoltaics, future metallization solutions must use abundantly available and non-toxic materials."
