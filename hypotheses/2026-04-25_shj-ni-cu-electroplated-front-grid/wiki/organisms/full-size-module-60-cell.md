---
type: organism
slug: full-size-module-60-cell
organism_type: module
external_id: 60-cell residential module (or 120-half-cell equivalent)
characteristics:
  - 60 full cells (or 120 half-cells) in series-parallel layout; ~1640×990 mm M2 footprint, larger for M6/M10
  - Bifacial glass-glass or glass-backsheet construction; SHJ favours glass-glass POE
  - Power class 300–410 Wp depending on cell efficiency and bifacial gain
  - Standard residential / commercial-rooftop module form factor
  - Subjected to IEC 61215 qualification: 1000 h DH, 200 TC, UV, mechanical-load, hail
  - SunDrive's 21.94% active-area Cu-plated 120-half-cell M2 module is the central +0.67%abs full-module reliability data point for this hypothesis
known_failure_modes: [Cu-finger-corrosion-encapsulant, EVA-acetic-acid-corrosion, finger-adhesion-loss-after-DH, lateral-Cu-edge-migration, ECA-discoloration-after-DH]
sources: [2011-nrel-reliability-testing-beyond-qualification, 2012-nrel-iec61215-what-it-is, 2013-koehl-fraunhofer-accelerated-service-life-testing, 2014-nrel-pv-module-qualification-plus, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2022-arena-sundrive-copper-metallisation-demonstration, 2024-nrel-getting-ahead-of-curve-pv-assessment]
tags: [module, 60-cell, full-size, residential, bifacial, IEC61215, glass-glass]
---

# Full-size module — 60-cell (residential class)

## What it is
Standard 60-cell (or 120-half-cell) crystalline-silicon photovoltaic module — the residential / commercial-rooftop form factor in which IEC 61215 qualification is run. For this hypothesis, the 60-cell module is the smallest commercially-meaningful testbed at which a Cu-plated SHJ front grid must demonstrate ≤5% Pmax loss after 1000 h damp heat *and* commercial cost parity.

## Standard dimensions / spec
- Cell count: 60 full cells in 6×10 layout, or 120 half-cells in 6×20 / 12×10.
- Footprint: ~1640×990 mm at M2 (156.75 mm); ~1700×1000 mm at M6.
- Cell-to-module loss (CTM): ~3–5% Pmax for SHJ glass-glass; SunDrive plated-Cu 120-half-cell M2 module measured 21.94% active-area η = +0.67%abs over Ag screen-print control built from same precursor batch ([[2022-arena-sundrive-copper-metallisation-demonstration]]).
- Module power class 2018: 335 Wp (CSEM bifacial 6BB); 2022: 21.94% active-area = ~340–360 Wp class.
- Encapsulant: POE preferred for SHJ; EVA still common in legacy.
- Glass: 3.2 mm front glass standard (legacy); ≤3 mm for bifacial (NREL trend).
- IEC 61215 acceptance: ≤5% Pmax loss after 1000 h DH (85 °C / 85% RH) and 200 TC (−40 to +85 °C).

## Common pitfalls / handling notes
- 60-cell glass-glass bifacial modules without edge sealing exhibit perimeter-initiated DH degradation, though less severely than 1-cell mini-modules due to lower perimeter-to-area ratio ([[2024-lachowicz-cu-plated-shj-aging-mini-modules]]).
- Edge sealing with polyisobutylene is the standard mitigation for SHJ glass-glass under DH — used commercially.
- IEC 61215 is *qualification*, not service-life prediction; "PV reliability learning cycle" warns of failure modes outside the standardised tests (AAA-backsheet historical case) ([[2024-nrel-getting-ahead-of-curve-pv-assessment]]).
- For Cu-plated cells: cap layers (Sn, Ag) need adhesion + oxidation-resistance verification at module level; SunDrive solder pull-test rips out TCO and Si shards rather than failing at the Cu/cap interface ([[2022-arena-sundrive-copper-metallisation-demonstration]]).
- Bifacial 60-cell modules use round Cu wires (multi-busbar) increasingly displacing flat ribbons — reduces optical loss and module Ag laydown.

## Failure modes commonly associated
- `[[../failure-modes/Cu-finger-corrosion-encapsulant]]` — Cu species mobility once out-diffused into encapsulant.
- `[[../failure-modes/EVA-acetic-acid-corrosion]]` — acetic-acid driver; mitigated by POE.
- `[[../failure-modes/finger-adhesion-loss-after-DH]]` — solder-bond and Cu-finger adhesion in field.
- `[[../failure-modes/lateral-Cu-edge-migration]]` — Cu mobile within encapsulant once outdiffused.
- `[[../failure-modes/ECA-discoloration-after-DH]]` — ECA-bonded shingled / multibusbar variants; novel-material risk.

## Sources
- `[[2022-arena-sundrive-copper-metallisation-demonstration]]` — 120-half-cell M2 plated-Cu module +0.67%abs vs Ag screen-print control.
- `[[2018-pv-tech-metallization-interconnection-bifacial-shj]]` — CSEM 60-cell bifacial SHJ Cu-plating cost-economics framework.
- `[[2011-nrel-reliability-testing-beyond-qualification]]`, `[[2012-nrel-iec61215-what-it-is]]`, `[[2014-nrel-pv-module-qualification-plus]]` — IEC 61215 testing framework.
- `[[2013-koehl-fraunhofer-accelerated-service-life-testing]]` — Fraunhofer accelerated-aging context for full-size modules.
- `[[2024-nrel-getting-ahead-of-curve-pv-assessment]]` — full-module reliability gap analysis for SHJ + plated Cu.
