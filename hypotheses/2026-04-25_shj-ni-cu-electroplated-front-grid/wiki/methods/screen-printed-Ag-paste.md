---
type: method
slug: screen-printed-Ag-paste
aliases: [screen-printed silver paste, LCT Ag, low-T Ag screen print, fine-line screen print, knotless screen print]
related_methods: [IV-curve-measurement, transfer-length-method, four-point-probe-sheet-resistance, electroplated-Ni-Cu-stack, peel-test-90deg, EL-electroluminescence-imaging]
key_reagents: [low-T-Ag-paste-generic-SHJ-grade, low-T-Ag-paste-Solamet-PV21A, low-T-Ag-paste-Solamet-PV56S, Cu-paste-low-temperature, ITO-transparent-conductive-oxide, a-Si-H-passivation]
known_failure_modes: [silver-supply-bottleneck, FF-degradation-contact-resistance, Jsc-loss-from-cap-stack-shading, Cu-finger-oxidation-damp-heat, a-Si-H-passivation-degradation]
sources: [2014-rehman-nicu-plating-csi-review, 2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2020-verlinden-future-challenges-tw-pv, 2021-goldschmidt-tech-learning-tw-pv, 2021-hatt-stable-cu-plated-shj-eupvsec, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-taiyangnews-heterojunction-technology-report, 2023-tepner-printing-tech-csi-review, 2024-fraunhoferise-photovoltaics-report, 2024-iea-pvps-trends-pv-applications, 2024-itrpv-15th-edition-roadmap, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-lorenz-cutting-edge-metallization-shj-fraunhofer, 2024-siliconpv-novel-shj-metallization-architectures, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV, atotech-solar-industry-overview, dupont-solamet-pv21a-tech-sheet, dupont-solamet-pv56s-data-sheet, pvtech-metallization-challenges-cell-manufacturing]
tags: [screen-print, Ag-paste, baseline-control, fine-line, LCT, SHJ, the-comparator]
created: 2026-04-26
updated: 2026-04-26
---

# Screen-printed silver paste (low-temperature, SHJ-grade)

**Slug:** `methods/screen-printed-Ag-paste` · **Type:** method

## What it measures / does

Industry-standard metallization for SHJ: a low-curing-temperature silver paste (or AgCu / pure-Cu paste in emerging variants) is screen-printed through a fine-mesh stencil onto the front and rear TCO of an SHJ wafer, then cured at ≤ 230 °C to be compatible with the a-Si:H thermal budget. Lays down 30–200 mg of Ag per cell side and remains the dominant production technology — >97 % of c-Si cells in 2018 (Tepner & Lorenz 2023) and the *baseline control* against which any plated-Cu intervention is measured. This page covers screen-printing of SHJ-grade Ag, AgCu, and Cu pastes alike (the same equipment, different paste).

## When to use it

Use it as the *control arm* in any SHJ Cu-plating experiment — see Lorenz 2024 (16.3 mg/cell at 23.2 % SHJ via knotless 520 fine-mesh screens, 15 µm fingers), Pingel 2025 (AgCu paste fingers, 35 µm width, 8 mg/W), Yacouba 2025 (silver-free Cu paste at 23.08 % bifacial SHJ). The Pass-3 plan must build the screen-printed Ag arm on the same wafer batch as the plated-Cu arm to make the comparison meaningful.

## Key parameters / setpoints

- **Mesh / screen:** 380/14 mesh front + 440/13 mesh back (Frasson 2024); knotless 520 × 11 × 0° at 1.0 mm pitch, 156 fingers, 15 µm nominal width (Lorenz 2024 optimised); 23 µm or 30 µm openings (Yacouba 2025).
- **Print speed:** 200 mm/s industrial (Frasson); 180–250 mm/s baseline.
- **Cure:** 170–230 °C / 1–40 min (Namics LCT-Ag at 220 °C / 1 min, Lorenz 2024); 300 °C / 5 s for Cu paste (Yacouba 2025, with backing-paper cover for oxidation protection).
- **Paste class:** SHJ-grade low-T Ag (~92 %wt Ag); AgCu core-shell (Cu core / Ag shell, 35–65 %wt Ag); pure Cu paste (emerging).
- **Bulk resistivity:** 5–6 µΩ·cm for best LCT-Ag (2018) → < 5 µΩ·cm prototype (2018) → 3 µΩ·cm projected (2022) (Faes 2018).
- **Line resistance:** ~5 Ω/cm at 30 µm width LCT-Ag fingers; ~1 Ω/cm at 20 µm Cu plated; AgCu down to ~2 Ω/cm at 35 µm (Pingel 2025).
- **Contact resistivity on ITO:** 5–12 mΩ·cm² for AgCu / Cu paste — *above* the hypothesis's ≤ 2 mΩ·cm² target (Pingel 2025); plated-Cu is 0.1–4 mΩ·cm².
- **Ag laydown trajectory:** 1 g/cell (5BB, 2018) → 60 mg/cell (SmartWire 18-wire, 2018) → 16.3 mg/cell (Lorenz 2024) → 7.5 mg/W (Pingel 2025) → ≤ 2 mg/W long-term (Zhang et al.).

## Common variants

- **Pure Ag LCT paste** — Heraeus, Namics, DuPont; the SHJ-incumbent.
- **AgCu core-shell paste** — Cu core / Ag shell; saves 25–70 % Ag at matched cell efficiency (Frasson 2024, Yacouba 2025, Pingel 2025).
- **Pure Cu LCT paste** — Yacouba 2025 demonstrates 23.08 % bifacial SHJ; oxidation-sensitive.
- **Dispense / FlexTrail** — dispensing replaces screen for high-throughput / fine-line; 0.05 mg/Wp Ag projected (Goldschmidt 2021).
- **Dual-print** — knotless mesh + fine-finger geometry (Lorenz 2024).

## Things to watch for

- Curing temperature must stay below ~230 °C for SHJ — Yacouba 2025 reports onset of [[failure-modes/a-Si-H-passivation-degradation]] above 280 °C, with 0.5 %abs loss above 320 °C / 5 s and 1.5 %abs above 360 °C.
- DuPont Solamet PV21A / PV56S are *NOT* SHJ-compatible (fire-through, ~750–800 °C peak); the slugs `low-T-Ag-paste-Solamet-PV21A/PV56S` are *false friends* that the Pass-3 plan must explicitly avoid as SHJ controls (use a generic SHJ-grade LCT paste instead).
- Cu paste oxidation under TC reduces module power up to 40 % in 200 cycles (Frasson 2024) — pure-Cu paste is not yet reliability-qualified.
- Paste contact resistivity on ITO does not match plated-Cu — confirms that plated routes (NOBLE, SunDrive) are the only path to the hypothesis's ≤ 2 mΩ·cm² target.
- Screen wear changes finger geometry over the production run; quote N₅BB / 9BB / wn nominal, and measure post-print wf, hf, Af.

## Related methods

- [[methods/IV-curve-measurement]] — primary post-print performance check.
- [[methods/transfer-length-method]] — ρc on ITO under printed pastes.
- [[methods/four-point-probe-sheet-resistance]] — line-resistance of fingers via dog-bone test pattern.
- [[methods/electroplated-Ni-Cu-stack]] — the alternative-arm intervention.
- [[methods/peel-test-90deg]] — adhesion of printed fingers (lower than Ni/Cu plated per Hatt 2021).

## Citing sources

- [[sources/2014-rehman-nicu-plating-csi-review]] — baseline being replaced; review framing.
- [[sources/2018-pv-international-metallization-shj]] — SHJ Ag-paste bulk resistivity 5.5 µΩ·cm; LCT thermal-budget rationale.
- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — Ag-paste laydown trajectory (4BB/5BB/SWCT) and cost framework.
- [[sources/2018-pvtech-metallization-shj-cells-modules]] — fine-line LCT Ag at 30 µm fingers.
- [[sources/2020-verlinden-future-challenges-tw-pv]] — cost driver: Ag must drop to <5 mg/W.
- [[sources/2021-goldschmidt-tech-learning-tw-pv]] — Ag learning rate quantified; FlexTrail at 0.05 mg/Wp.
- [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — Ag reference cells on the same precursor batch as NOBLE.
- [[sources/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — SCC paste seed-grid printed at 200 °C.
- [[sources/2023-taiyangnews-heterojunction-technology-report]] — industry baseline.
- [[sources/2023-tepner-printing-tech-csi-review]] — central topic; >97 % industry share.
- [[sources/2024-fraunhoferise-photovoltaics-report]] — implicit incumbent across 700 GWp 2024 production.
- [[sources/2024-iea-pvps-trends-pv-applications]] — implicit dominant metallization across 456 GW 2023 deployment base.
- [[sources/2024-itrpv-15th-edition-roadmap]] — ITRPV-tracked Ag/cell baseline.
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — Ag/SCC/Cu paste seed-grid printing.
- [[sources/2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] — knotless 520 wires/in fine-mesh screen optimisation.
- [[sources/2024-siliconpv-novel-shj-metallization-architectures]] — five pastes (Ag micro, AgCu, Ag particle-free, Ag nano, pure Cu) tested at production speed.
- [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — 13 Ag pastes + 7 AgCu + Cu paste benchmarking.
- [[sources/2025-yacouba-shj-silver-free-metallization-progPV]] — Cu paste at 23.08 % bifacial SHJ.
- [[sources/atotech-solar-industry-overview]] — explicit comparator the page positions plated Ni/Cu against.
- [[sources/dupont-solamet-pv21a-tech-sheet]] — DuPont LCT-Ag exemplar (NOT SHJ-compatible — see false-friend note).
- [[sources/dupont-solamet-pv56s-data-sheet]] — DuPont fire-through Ag paste (NOT SHJ-compatible).
- [[sources/pvtech-metallization-challenges-cell-manufacturing]] — IMEC review establishing the >85 % market-share baseline.
