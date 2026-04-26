---
type: source
id: 2021-goldschmidt-tech-learning-tw-pv
source_type: paper
title: "Technological learning for resource efficient terawatt scale photovoltaics"
authors: ["Goldschmidt, J. C.", "Wagner, L.", "Pietzcker, R.", "Friedrich, L."]
year: 2021
doi: 10.1039/D1EE02497C
url: https://pubs.rsc.org/en/content/articlepdf/2021/ee/d1ee02497c
raw_path: raw/papers/2021-goldschmidt-tech-learning-tw-pv.pdf
tags: [TW-PV, silver-bottleneck, indium, learning-curve, Goldschmidt, EE-and-S, motivation]
created: 2026-04-26
updated: 2026-04-26
---

# Technological learning for resource efficient terawatt scale photovoltaics

**Goldschmidt, J. C., Wagner, L., Pietzcker, R., Friedrich, L.** — *Energy & Environmental Science 14:5147–5160, 2021*. DOI: 10.1039/D1EE02497C

## Summary

Open-access EE&S analysis using the REMIND integrated-assessment model to project resource demands of TW-scale PV (20–80 TWp by 2050; 80–170 TWp by 2100). Goldschmidt et al. quantify three potential bottlenecks — energy, float-glass, and *silver* — and conclude that without continued technological learning rates (LR_Ag ≥ 15%) PV silver demand exceeds global production by 2027 (worst case) or 2051 (best case). Argues *plating* and *advanced printing technologies* are the only known routes that bring per-Wp Ag down enough to be sustainable. The companion academic-rigor counterpart to Verlinden 2020.

## Key claims

- **Deployment scenarios:** 20–80 TWp installed PV by 2050; 80–170 TWp by 2100 (cost-optimal under REMIND with welfare-maximisation constraints).
- **Annual production peak:** 1–2 TW/year after 2030, rising to 3–9 TW/year of new modules by 2100 (factoring 25-year replacement).
- **2018 PV Ag consumption:** 1,959 t Ag = 7.9% of 2018 global Ag mine production (28,037 t).
- **Per-cell Ag (2018, 156×156 mm² baseline):** 100 mg/cell.
- **Ag bottleneck — without learning:** if only efficiency increases reduce per-Wp Ag (no LR_Ag improvement), PV demand exceeds total global production **by 2027 (Scenario 2)** or **by 2051 (Scenario 1)**.
- **Ag bottleneck — with learning:** at LR_Ag = 15% (Scenario 2), total cumulative Ag stays below 18,000 t; at LR_Ag = 25% (Scenario 1), demand stays roughly at today's level.
- **Per-Wp Ag projections:** 3.9–8.9 mg/Wp by 2030; 0.7–2.9 mg/Wp by 2100 (averaged across scenarios).
- **Plating's role:** explicitly cited as one of the technologies (alongside FlexTrail printing at 0.05 mg/Wp and Ag-free perovskite paths) that enable per-Wp Ag below standard screen-printing minimums.
- **Indium bottleneck:** front-side TCOs (ITO, IWO) in SHJ + perovskite tandems use **indium**; "Indium has been identified as critical for much lower installed capacities" — i.e. the SHJ ITO front layer itself is a future bottleneck even after the Ag problem is solved by Cu plating.
- **Module-efficiency trajectory:** 24.1–25.9% by 2030; 27.8–30.7% by 2050; 33.5–36.3% by 2100 (latter requires multi-junction; single-junction Si is capped at 29.4% Auger limit).
- **PERC LCA baseline:** GWP 1.27 kg CO₂-eq/Wp for monocrystalline Si PERC (China production); ~10–14% LR for embodied energy / GHG.
- **Ag learning rate (LR_Ag) in screen printing:** ~20% historically — the empirical baseline against which Cu plating's contribution is measured.

## Methods used

- [[methods/screen-printed-Ag-paste]] — the baseline whose 100 mg/cell figure anchors the analysis.
- [[methods/Cu-electroplating-acid-bath]] — explicitly named as one of the routes to per-Wp Ag below screen-printing's minimum.
- [[methods/electroplated-Ni-Cu-stack]] — implicit; covered in the "plating" trajectory.

## Reagents

- [[reagents/low-T-Ag-paste-generic-SHJ-grade]] — implicit incumbent.
- [[reagents/ITO-transparent-conductive-oxide]] — flagged as the *next* indium-driven bottleneck after Ag.
- [[reagents/IWO-tungsten-doped-indium-oxide]] — same indium-bottleneck implication.

## Organisms / substrates

- [[organisms/SHJ-cell-M6]] — 156×156 baseline; aged but the per-cell Ag value (100 mg) is sourced from this cell size.
- [[organisms/SHJ-cell-M10]] — emerging dominant format the analysis projects.

## Failure modes flagged

- [[failure-modes/silver-supply-bottleneck]] — quantified canonical citation (2027 / 2051 crossover dates).
- [[failure-modes/Jsc-loss-from-cap-stack-shading]] — implicit via TCO / front-cap discussion in indium section.

## Supports / contradicts

- **Supports:** [[sources/2020-verlinden-future-challenges-tw-pv]] — Verlinden's 100% of Ag at 1 TW/year crosses with Goldschmidt's 2027 worst-case crossover under no learning; the two papers are mutually-reinforcing 2020/2021 framings of the same bottleneck.
- **Supports:** [[sources/2024-itrpv-15th-edition-roadmap]] — ITRPV's 18% of world Ag in 2023 is on Goldschmidt's projected trajectory (2018: 7.9% → 2023: ~18% with growth + per-cell reduction).
- **Supports:** [[sources/2024-fraunhoferise-photovoltaics-report]] — Fraunhofer ISE PV Report's experience-curve learning rate of 25.7% is consistent with Goldschmidt's LR assumptions.

## Notable quotes

> "If the silver consumption per cell remained constant such that only device efficiency increases reduce the per Wp silver consumption, the demand of the PV industry will exceed today's global silver production as early as in the year 2027 (Scenario 2) or in the year 2051 (Scenario 1)." — *p. 5151*

> "A further reduction could be achieved with plating or advanced printing technologies, such as FlexTrail printing, with 0.05 mg Wp⁻¹." — *p. 5155*

> "The annual silver consumption of the PV industry was 1959 t in 2018, corresponding to 7.9% of the total annual silver mine production of 28 037 t." — *p. 5151*
