---
type: reagent
slug: low-T-Ag-paste-generic-SHJ-grade
aliases: [LCT-Ag paste, low-cure-temperature Ag paste, SHJ-grade Ag paste, Heraeus SOL96xx-class, Namics low-T paste]
cas: ""
suppliers:
  - name: Heraeus
    catalog: "SOL96xx-class low-T Ag paste (e.g. SOL9651, SOL9650)"
    grade: SHJ-grade, cure 200–230 °C
    url: https://www.heraeus.com
  - name: Namics
    catalog: "Low-T Ag paste (used by Fraunhofer ISE Lorenz 2024)"
    grade: SHJ-grade, cure ~220 °C / 1 min
    url: https://www.namics.co.jp
  - name: Toyo Aluminium / Giga Solar Materials
    catalog: "SHJ low-T Ag paste"
    grade: production
    url: https://www.gigasolar.com.tw
storage: refrigerated (5–10 °C); shelf life 3–6 months
hazards: medium — Ag particles + organic solvents (toluene-class)
known_failure_modes: [silver-supply-bottleneck, FF-degradation-contact-resistance]
sources: [2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2020-verlinden-future-challenges-tw-pv, 2021-goldschmidt-tech-learning-tw-pv, 2021-hatt-stable-cu-plated-shj-eupvsec, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-taiyangnews-heterojunction-technology-report, 2023-tepner-printing-tech-csi-review, 2024-fraunhoferise-photovoltaics-report, 2024-iea-pvps-trends-pv-applications, 2024-itrpv-15th-edition-roadmap, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-lorenz-cutting-edge-metallization-shj-fraunhofer, 2024-siliconpv-novel-shj-metallization-architectures, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV, atotech-solar-industry-overview, dupont-solamet-pv21a-tech-sheet, dupont-solamet-pv56s-data-sheet, pvtech-metallization-challenges-cell-manufacturing]
tags: [Ag-paste, low-T-cure, SHJ-baseline, screen-print, Heraeus, Namics, generic]
created: 2026-04-26
updated: 2026-04-26
---

# Low-temperature Ag paste — generic SHJ grade

**Slug:** `reagents/low-T-Ag-paste-generic-SHJ-grade` · **Type:** reagent

## What it is

Generic SHJ-grade low-temperature (low-cure-temperature, LCT) Ag paste — a screen-printable formulation of Ag flakes/particles in a thermoplastic resin + solvent vehicle that cures at SHJ-compatible peak temperatures (200–230 °C, ~1–10 min). Unlike fire-through Ag pastes ([[reagents/low-T-Ag-paste-Solamet-PV21A]], [[reagents/low-T-Ag-paste-Solamet-PV56S]] — see notes below), low-T pastes do not melt the underlying glass frit / etch the dielectric; they form a mechanical + ohmic contact via filler percolation only.

This page is the **canonical SHJ Ag-paste reference** in this wiki. The two leading product families are Heraeus's SOL96xx series and Namics's low-T paste; Heraeus datasheets were not publicly fetchable for this hypothesis. Properties below are synthesized from Tepner 2023, Lorenz 2024, and Yacouba 2025.

## Common uses (in this corpus)

This is the **control / baseline reagent** for the entire hypothesis — every plated-Cu paper reports its results against the LCT-Ag screen-print baseline. Lorenz 2024 (Fraunhofer ISE) drives the SHJ Ag laydown to 16.3 mg/cell (~4.4 mg/Wp) using Namics LCT paste, fine-line knotless screen, and 1.0 mm finger pitch — this is the moving target every alternative metallization must beat. Tepner 2023 establishes the bulk-resistivity floor (<5×10⁻⁶ Ω·cm) the LCT pastes must reach to keep Ag mass acceptable.

## Properties / specifications

- Cure profile: 200–230 °C peak, 1–10 min belt time (within SHJ a-Si:H thermal budget).
- Bulk resistivity (post-cure): typically 5–8×10⁻⁶ Ω·cm (~3–5× pure Ag's 1.6 µΩ·cm); Tepner 2023 names <5×10⁻⁶ Ω·cm as the active R&D target.
- Ag content: 85–93 wt% (flakes + spherical mix); rest is resin + solvents + dispersants.
- Contact resistivity ρc to ITO: 1–3 mΩ·cm² typical (state-of-the-art SHJ).
- Finger geometry (Lorenz 2024 best optimised): 15 µm nominal width, ~25 µm effective (after spread); 12–18 µm finger height; 156 fingers per M2 cell, 1.0 mm pitch.
- Ag laydown: 16–22 mg per M2 cell (state of art) → ~4–6 mg/Wp at 23 % efficiency.
- Viscosity (jetting / screen): 200–400 Pa·s typical; Brookfield rheology characterized in vendor datasheets.

## Suppliers

- Heraeus — SOL96xx-class low-T Ag paste (SOL9651 etc.); URL https://www.heraeus.com
- Namics — Lorenz 2024 / Fraunhofer ISE reference paste; URL https://www.namics.co.jp
- Toyo Aluminium, Giga Solar Materials — additional SHJ-grade vendors; URL https://www.gigasolar.com.tw

## Alternatives

- [[reagents/Cu-paste-low-temperature]] — Cu / AgCu paste alternatives; lower cost but higher ρc (8–13 mΩ·cm² vs 1–3 mΩ·cm²).
- [[reagents/silver-Ag-cap]] — different concept entirely (plated/sputtered Ag finish on plated Cu, not a paste).
- Plated Cu (the hypothesis's intervention) — the long-term Ag-free path.

**Note on misleadingly-named slugs:** The slugs `low-T-Ag-paste-Solamet-PV21A` and `low-T-Ag-paste-Solamet-PV56S` in this wiki are misleading — those DuPont Solamet products are **HIGH-firing-temperature pastes (>600 °C peak)** designed for PERC/Al-BSF, NOT SHJ-compatible. The SHJ baseline uses **this generic SHJ-grade entity** (Heraeus SOL96xx-class, Namics, Giga Solar), not the Solamet pastes.

## Gotchas / failure modes

- [[failure-modes/silver-supply-bottleneck]] — the entire economic motivation for the plated-Cu hypothesis; SHJ Ag laydown is the cost driver to displace.
- [[failure-modes/FF-degradation-contact-resistance]] — LCT paste's higher bulk resistivity (vs fired pastes) is the SHJ-specific FF pain point; fine-line printing trades shading for line resistance.

## Citing sources

- [[sources/2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] — Fraunhofer ISE state-of-art LCT Ag (Namics), 16.3 mg/cell, 23.2 % cell.
- [[sources/2023-tepner-printing-tech-csi-review]] — defines the LCT-paste bulk-resistivity target (<5×10⁻⁶ Ω·cm).
- [[sources/2025-yacouba-shj-silver-free-metallization-progPV]] — Ag low-T paste reference (170 °C / 40 min) baseline 23.79 %.
- [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — Pingel 2025 LCT Ag baseline for AgCu paste comparison.
- [[sources/2024-itrpv-15th-edition-roadmap]] — silver-reduction roadmap targeting LCT-Ag laydown reduction.
- [[sources/2018-pv-international-metallization-shj]] — Geissbühler 2018 LCT-Ag at 5.5 µΩ·cm bulk.
- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — Faes 2018 SHJ LCT-Ag baseline cost / mass.
- [[sources/2018-pvtech-metallization-shj-cells-modules]] — SHJ metallization options matrix.
- [[sources/2020-verlinden-future-challenges-tw-pv]] — TW-PV roadmap names LCT-Ag as the SHJ default.
- [[sources/2021-goldschmidt-tech-learning-tw-pv]] — tech-learning curve.
- [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — Cu-plated comparison vs LCT-Ag baseline.
- [[sources/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — CSEM mini-module aging includes LCT-Ag arm.
- [[sources/2023-taiyangnews-heterojunction-technology-report]] — industry HJT overview.
- [[sources/2024-fraunhoferise-photovoltaics-report]] — Fraunhofer industry overview.
- [[sources/2024-iea-pvps-trends-pv-applications]] — IEA-PVPS market data.
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — extended aging follow-up.
- [[sources/2024-siliconpv-novel-shj-metallization-architectures]] — novel SHJ architectures including LCT-Ag baseline.
- [[sources/atotech-solar-industry-overview]] — Atotech vendor framing the LCT-Ag baseline as the comparator for plated Ni/Cu.
- [[sources/dupont-solamet-pv21a-tech-sheet]] — DuPont Solamet PV21A is **NOT** in this class (false friend; high-T fire-through paste).
- [[sources/dupont-solamet-pv56s-data-sheet]] — DuPont Solamet PV56S is **NOT** in this class (false friend; high-T paste).
- [[sources/pvtech-metallization-challenges-cell-manufacturing]] — industry challenges for cell manufacturing.
