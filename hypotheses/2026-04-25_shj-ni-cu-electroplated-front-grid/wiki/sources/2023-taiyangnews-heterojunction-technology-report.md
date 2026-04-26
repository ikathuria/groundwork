---
type: source
id: 2023-taiyangnews-heterojunction-technology-report
source_type: paper
title: "Heterojunction Solar Technology 2023 — Working Hard on Cost Reduction"
authors: ["Shravan K. Chunduri", "Michael Schmela"]
year: 2023
doi: ""
url: https://images.assettype.com/taiyangnews/2024-06/4d81d4e5-ecda-429e-92d4-359d5806e4b5/TaiyangNews_Report_Heterojunction_Solar_Technology_2023_download_EN_v2.pdf
raw_path: raw/papers/2023-taiyangnews-heterojunction-technology-report.pdf
tags: [HJT, SHJ, industry-report, metallization, plating, silver-laydown, commercialization]
created: 2026-04-26
updated: 2026-04-26
---

# Heterojunction Solar Technology 2023 — Working Hard on Cost Reduction

**TaiyangNews (Shravan K. Chunduri, Michael Schmela)** — *2023*. URL: https://images.assettype.com/taiyangnews/2024-06/4d81d4e5-ecda-429e-92d4-359d5806e4b5/TaiyangNews_Report_Heterojunction_Solar_Technology_2023_download_EN_v2.pdf

## Summary

TaiyangNews's 2023 industry survey of heterojunction (HJT/SHJ) solar technology — the most widely cited trade-press snapshot of the SHJ segment in the year that LONGi broke Kaneka's 5-year cell-efficiency record (26.81 %). Maps the competitive landscape across cell processing, TCO, metallization, and module assembly, with extended coverage of plated Cu metallization as the leading silver-reduction route. Anchors novelty QC for any SHJ Cu-plating hypothesis: it names every commercializer (Maxwell, SunDrive at 26.41 %, Tongwei, Huasun, GS-Solar, Hanergy/Xu, Risen) and their public efficiency claims.

## Key claims / specifications

- **Industry Ag laydown:** HJT cells averaged ~18 mg Ag/W in 2022; the industry target was 10 mg/W in 2023; silver-coated Cu pastes and plating expected to drive further reductions.
- **Cell-efficiency landscape (2023):** LONGi 26.81 % HJT-only world record (Nov 2022), surpassing Kaneka's 26.63 % HBC. Maxwell + SunDrive 26.41 % Cu-plated silver-free SHJ. Industrial averages in China >25 %.
- **Plated Cu architecture (Maxwell/Sundrive route):** PVD seed (sputtered) → photoresist mask → exposure → simultaneous front+rear electroplated Cu → photoresist strip → tin plating → annealing. Reported finger width 18.1 µm vs 40.15 µm screen-printed; Maxwell roadmap: pilot 2023, production 2024, commercial Q3/2024.
- **Plating equipment landscape:** Maxwell (cooperating with partners), RENA (inline platform with one-side electrolyte immersion + rear contact, working with CSEM seed-and-plate), SunDrive (Australia), GS-Solar.
- **Costs/yields tradeoff for plating:** "high potential for increasing efficiency and lowering metallization costs, while CapEx, facility costs and yield losses are high" (Maxwell).
- **Wafer/format:** Industry already at 130 µm with line-of-sight to 100 µm and 80 µm; M10 and G12 dominant; half-cell processing now standard.
- **Encapsulation for HJT:** EPE (EVA-POE-EVA coextruded) is the most common; pure POE used in glass-glass to limit moisture ingress and TCO compatibility issues.
- **Interconnection:** Soldering allowed only at <200 °C for HJT; ECA-based interconnection (Mondragon, teamtechnik) common outside China.

## Methods used

- [[methods/electroplated-Ni-Cu-stack]] — survey describes the canonical Ni/Cu plated SHJ front grid as the industry's leading Ag-reduction route.
- [[methods/Cu-electroplating-acid-bath]] — Maxwell process flow uses simultaneous front+rear acid Cu electroplating after PVD seed.
- [[methods/photolithography-mask-patterning]] — Maxwell route uses photoresist mask + exposure to define plated grid.
- [[methods/screen-printed-Ag-paste]] — baseline reference (SMBB, dual-print, 18-24 busbar layouts) the plated Cu approach must beat.
- [[methods/light-induced-plating]] — referenced in the broader plating discussion.

## Reagents

- [[reagents/ITO-transparent-conductive-oxide]] — ITO+AZO stacks discussed as a route to cut indium consumption ~85 %.
- [[reagents/AZO-aluminum-doped-zinc-oxide]] — partial-replacement TCO option.
- [[reagents/EVA-encapsulant]] — EPE stack is dominant HJT encapsulation; pure EVA disfavored due to moisture/acid concerns.
- [[reagents/POE-polyolefin-encapsulant]] — preferred encapsulant for glass-glass HJT modules.
- [[reagents/electrically-conductive-adhesive-ECA]] — low-T interconnection alternative to soldering.
- [[reagents/low-T-Ag-paste-generic-SHJ-grade]] — the SHJ-compatible screen-print baseline.
- [[reagents/multibusbar-Cu-ribbon]] — SMBB/24-busbar interconnection trend.
- [[reagents/tin-Sn-cap]] — Maxwell finishes plated Cu with a tin plating cap.

## Organisms / substrates

- [[organisms/SHJ-cell-M10]] — dominant size in 2023 HJT lines.
- [[organisms/SHJ-cell-G12]] — also covered by automation.
- [[organisms/SHJ-cell-M6]] — earlier-generation pilots (Risen, GS-Solar 25.61 % R&D average).
- [[organisms/monocrystalline-Si-wafer-n-type]] — n-type wafers at 130 µm trending to 100 µm.

## Failure modes flagged

- [[failure-modes/silver-supply-bottleneck]] — the central economic motivation framing the entire metallization chapter.
- [[failure-modes/Jsc-loss-from-cap-stack-shading]] — discussion of finger width 18 µm (plated) vs 40 µm (screen-print) ties directly to optical shading.
- [[failure-modes/non-reproducibility-in-solar-cell-claims]] — implicit context for record-claim disclosure (LONGi cell size unspecified).

## Supports / contradicts

- **Supports:** [[sources/2024-itrpv-15th-edition-roadmap]] — Ag laydown trajectory aligned (18 mg/W 2022 → ~5 mg/cell by 2034).
- **Supports:** [[sources/2025-yacouba-shj-silver-free-metallization-progPV]] — independently cites SunDrive 26.41 %.
- **Supports:** [[sources/2024-fraunhoferise-photovoltaics-report]] — concurs on n-type/HJT market share rise.
- **Contradicts:** [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — TaiyangNews flags "high CapEx, facility costs and yield losses" for plating; SunDrive's ARENA report argues plating CapEx is competitive at scale. Different vantage points (trade press vs vendor disclosure).

## Notable quotes

> "The industry averaged about 18 mg of silver per watt in 2022, and the target is to lower it to 10 mg/W in 2023. Silver coated copper-based pastes are expected to play a vital role in further reducing silver consumption." — *Executive Summary, p. 5.*

> "A few companies are of the opinion that plating is going to play an important role in cost reduction as well as performance improvement of HJT in the near future." — *Executive Summary, p. 5.*

> "Plating has high potential for increasing efficiency and lowering metallization costs, while the CapEx, facility costs and yield losses are high." — *Maxwell comparison table, §2.5, p. 18.*
