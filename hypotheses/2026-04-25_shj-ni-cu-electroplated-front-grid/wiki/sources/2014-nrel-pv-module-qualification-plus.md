---
type: source
id: 2014-nrel-pv-module-qualification-plus
source_type: protocol
title: "Photovoltaic Module Qualification Plus Testing"
authors: ["Kurtz, S.", "Wohlgemuth, J.", "Kempe, M.", "Bosco, N.", "Hacke, P.", "Jordan, D.", "Miller, D. C.", "Silverman, T. J.", "Phillips, N.", "Earnest, T.", "Romero, R."]
year: 2013
doi: ""
url: https://docs.nrel.gov/docs/fy14osti/60950.pdf
raw_path: raw/protocols/2014-nrel-pv-module-qualification-plus.pdf
tags: [Qualification-Plus, IEC-61215, NREL, damp-heat, sampling, methodology]
created: 2026-04-26
updated: 2026-04-26
---

# Photovoltaic Module Qualification Plus Testing

**Kurtz, S., Wohlgemuth, J., Kempe, M., Bosco, N., Hacke, P., Jordan, D., Miller, D. C., Silverman, T. J., Phillips, N., Earnest, T., Romero, R. (NREL / 3M / DuPont / Black & Veatch)** — *NREL Technical Report TP-5200-60950, December 2013*. DOI: —

## Summary

The NREL "Qualification Plus" specification — a set of accelerated tests *beyond* IEC 61215 / IEC 61730 designed to detect product weaknesses that the qualification sequence misses, optimised before formal IEC adoption. Recommended for c-Si modules with glass / polymeric backsheet / EVA construction. Defines extended UV exposure (component-level), revised bypass diode and hot-spot tests, dynamic mechanical load (IEC 62782), system-voltage / PID screening (IEC 62804), random sampling from production, and a quality-management-system audit. Provides the practical template for the SHJ Ni/Cu chamber instrumentation (per-checkpoint EL, dark IV, peak power) and sampling plan.

## Key claims

- **Three-part Qualification Plus proposal:** (1) new or revised accelerated tests for components and modules including system-voltage bias, UV, and mechanical stress; (2) revised sampling procedures including random sampling from the production line; (3) required audit of the quality management system.
- **Field-failure rationale (Table 3):** the field-failure dataset that motivates Qual-Plus shows ~2% failure rate after 8 years dominated by laminate internal-circuit failures, glass, and j-box; cell + encapsulant + backsheet account for ~26%. Encapsulant discoloration appears in 66% of failure reports, delamination in 60%, corrosion in 26% — the same DH failure-mode menu the SHJ Ni/Cu plan must screen.
- **Block IV → Block V dropped field failures from >50% to ~1%** after adding 200 TC, harsher humidity-freeze, and hot-spot test. Confirms the IEC 61215 sequence baseline is mechanistically right.
- **1000 h damp heat is *not* in JPL Block V** — added later in IEC 61215 to capture corrosion in fielded modules, identical history to the slide deck of [[sources/2012-nrel-iec61215-what-it-is]].
- **Qualification Plus accelerated test menu:** UV exposure for encapsulants, backsheets, connectors/cables, j-boxes; bypass diode and j-box thermal test; thermal cycling extension (IEC 61215 plus); IEC 62782 dynamic mechanical load (±1000 Pa, 1–10 cycles/min, 1000 cycles with current flow); enhanced hot-spot (ASTM E2481-06, 50 h at 1 kW/m²); IEC 62804 PID with system-voltage bias.
- **Backsheet UV dose target:** 320 kWh/m² (300–400 nm) for the back-side ≈ Phoenix service-life dose; front-side limited to 6 months ≈ ~3 years Phoenix-equivalent.
- **Backsheet pass criterion:** elongation-at-break ≥ 50% after UV (functioning fielded backsheets typically retain >70%; safety threshold ~2%).
- **Random sampling from production:** mandatory — addresses the "qualified one batch, shipped a different batch" failure mode that catalysed the AAA-backsheet field-cracking incident.

## Methods used

- [[methods/damp-heat-aging-1000h]] — the IEC 61215 baseline that Qualification Plus extends.
- [[methods/extended-damp-heat-IEC63209]] — Qualification Plus is the precursor that fed into IEC 63209 emerging-tech extended-DH.
- [[methods/temperature-cycling-IEC61215-TC200]] — Qual-Plus calls for extension beyond 200 cycles.
- [[methods/humidity-freeze-IEC61215-HF10]] — retained from IEC 61215.
- [[methods/UV-preconditioning]] — Qual-Plus replaces with longer component-level UV exposures.
- [[methods/EL-electroluminescence-imaging]] — explicitly listed as a per-checkpoint diagnostic to surface degradation before STC power loss.
- [[methods/dark-IV-suns-Voc]] — recommended for picking up small Rs/Rsh shifts.
- [[methods/IV-curve-measurement]] — STC pass/fail.

## Reagents

- [[reagents/EVA-encapsulant]] — explicit target of Qualification Plus UV / DH validation; the encapsulant whose discoloration appears in 66% of field-failure reports.

## Organisms / substrates

- [[organisms/full-size-module-60-cell]] — Qualification Plus is module-level; the SHJ Ni/Cu plan's mini-module DH chamber run inherits the per-checkpoint instrumentation.
- [[organisms/full-size-module-72-cell]] — same.

## Failure modes flagged

- [[failure-modes/EVA-acetic-acid-corrosion]] — encapsulant discoloration / corrosion; 66% / 26% of field-failure reports.
- [[failure-modes/Cu-finger-corrosion-encapsulant]] — corrosion under DH that Qualification Plus targets.
- [[failure-modes/finger-adhesion-loss-after-DH]] — delamination is 60% of field-failure reports; Qual-Plus DH retest is the screen.

## Supports / contradicts

- **Supports:** [[sources/2011-nrel-reliability-testing-beyond-qualification]] — same NREL author pair, same "extend qualification with explicit baseline" philosophy.
- **Supports:** [[sources/2012-nrel-iec61215-what-it-is]] — same factual restatement of the IEC 61215 sequence and its limitations.
- **Supports:** [[sources/2024-nrel-getting-ahead-of-curve-pv-assessment]] — Qualification Plus is the pre-cursor to the 2024 NREL emerging-tech reliability assessment.

## Notable quotes

> "The Qualification Plus tests are being recommended specifically for crystalline silicon modules with glass/polymeric backsheet construction." — *Executive Summary*

> "The proposal contains three parts: (1) New or revised accelerated tests for components and modules including tests applying system-voltage bias, ultra-violet (UV) light, and mechanical stress; (2) Revised sampling procedures, including the requirement of random sampling from the production line; (3) Required audit of the quality management system." — *Executive Summary*
