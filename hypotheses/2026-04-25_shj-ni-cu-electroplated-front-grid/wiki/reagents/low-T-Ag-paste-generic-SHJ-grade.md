---
type: reagent
slug: low-T-Ag-paste-generic-SHJ-grade
aliases: [LCT Ag paste, low-temperature Ag paste, SHJ Ag paste, Namics LCT, Solamet PV42B/PV43B, Heraeus / Toyo / Yu Cheng]
cas: null (multi-component metallization paste)
formula: micro/nano Ag flakes + low-T glass frit / polymer binder + organic vehicle
suppliers:
  - name: DuPont / Solamet (now Solar Materials)
    catalog: Solamet PV42B, PV43B (SHJ low-T variants); PV2xx legacy
    grade: production
    url: https://www.dupont.com/solamet
  - name: Namics
    catalog: LCT (Low-Cure Temperature) Ag pastes
    grade: production
    url: null
  - name: Heraeus / Toyo Aluminium / Yu Cheng / Soltrium
    catalog: SHJ low-T Ag paste lines
    grade: production
    url: null
storage: 5–25 °C, lids tightly sealed; do not freeze; shelf life 6 months
hazards: low — silver dust; organic solvents in vehicle (typical PV-paste exposure controls)
known_failure_modes: [silver-supply-bottleneck, FF-degradation-contact-resistance, Cu-finger-corrosion-encapsulant, Jsc-loss-from-cap-stack-shading]
sources: [2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2023-taiyangnews-heterojunction-technology-report, 2023-tepner-printing-tech-csi-review, 2024-itrpv-15th-edition-roadmap, 2024-lorenz-cutting-edge-metallization-shj-fraunhofer, 2024-siliconpv-novel-shj-metallization-architectures, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV, pvtech-metallization-challenges-cell-manufacturing]
tags: [Ag-paste, screen-printed, low-temperature, SHJ-compatible, control-comparator]
---

# Low-temperature SHJ-grade Ag paste (generic)

## What it is
The screen-printable low-temperature-cure (≤200 °C) silver paste used to form the front and rear contact grid on standard SHJ cells. This is the dominant SHJ metallization in 2023–2025 and is the primary control comparator for the present hypothesis: any plated-Ni/Cu metallization claim must be benchmarked against this paste. Bulk resistivity has dropped from ~18 µΩ·cm (2009) to ~5 µΩ·cm (2025 prototypes) — still ~3× pure Ag.

## Common uses
- Front and rear screen-printed grid on SHJ M2/M6/M10/G12 cells ([[2018-pvtech-metallization-shj-cells-modules]], [[2023-taiyangnews-heterojunction-technology-report]], [[2024-itrpv-15th-edition-roadmap]]).
- Reference comparator in essentially every plated-Cu SHJ paper ([[2019-hatt-noble-shj-solrrl]] and onward).
- Seed-grid in three-step CSEM "screen-printed seed + dielectric mask + Cu electrodeposition" plating route ([[2024-lachowicz-cu-plated-shj-aging-mini-modules]]).

## Key spec / concentration ranges
- Cure: 200–230 °C / 1–20 min (typical 220 °C / 1 min on inline belt — [[2024-lorenz-cutting-edge-metallization-shj-fraunhofer]]).
- Bulk resistivity: 5–10×10⁻⁶ Ω·cm ([[2018-pvtech-metallization-shj-cells-modules]]); prototypes <5 µΩ·cm ([[2018-pv-international-metallization-shj]]); 2024 production 5.5 µΩ·cm.
- Contact resistivity to ITO: typically <0.4 mΩ·cm² for fired Ag; ≥2 mΩ·cm² for low-T pastes on screen-printed fingers ([[2021-hatt-stable-cu-plated-shj-eupvsec]]); 5.04 mΩ·cm² for one Ag-SP paste on ITO with 46.6 µm fingers ([[2025-yacouba-shj-silver-free-metallization-progPV]]).
- Finger width: 30 µm achievable with knotless 0° screen and AgCu pastes ([[2024-lorenz-cutting-edge-metallization-shj-fraunhofer]]); record 16–18 µm with optimized screens ([[2018-pv-international-metallization-shj]]).
- Ag laydown 2023–2025: 19 mg/W (SHJ baseline, ITRPV); reducible to 16.3 mg/W with knotless 0° + 156 fingers ([[2024-lorenz-cutting-edge-metallization-shj-fraunhofer]]); 7.5 mg/W with AgCu front+rear ([[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]]).
- Champion SHJ efficiency with Ag screen-print: 23.2% ([[2024-lorenz-cutting-edge-metallization-shj-fraunhofer]]); industry targets ≥25% with HJT 2.0 emitter.
- Print speed: 200–300 mm/s industrial; HJT 200–250 mm/s vs PERC 400 mm/s ([[2023-taiyangnews-heterojunction-technology-report]]).

## Alternatives / variants
- [[Cu-paste-low-temperature]] — pure Cu paste, ~50% Ag-containing AgCu pastes (silver-coated copper), reactive Ag inks.
- [[low-T-Ag-paste-Solamet-PV21A]] / [[low-T-Ag-paste-Solamet-PV56S]] — Solamet products. **Note these specific products are HIGH-T fire-through pastes despite being in the "low-T paste" entity slot — not SHJ-compatible.** This generic slug is the correct entity for actual SHJ-grade low-T pastes.
- Plated Ni/Cu/Ag — the present hypothesis; an entirely different process route.

## Gotchas
- The Solamet PV21A and PV56S TDSs are NOT SHJ pastes — they are PERC fire-through pastes (peak >600 °C). Don't confuse the "Solamet" trade name with SHJ-compatible low-T variants. SHJ-compatible Solamet variants are PV42B / PV43B, profiled in [[2023-taiyangnews-heterojunction-technology-report]].
- Bulk-paste resistivity is intrinsically limited by the polymer binder (no glass-frit melt-and-merge reaction at low T) — currently ~5 µΩ·cm² is near the practical floor.
- Ag laydown is 2× of TOPCon and 5× of PERC at 2023 baseline; this is the silver-supply driver for the entire hypothesis.
- Knotless 0°-mesh screens are strictly better than angled screens for fine-line printability at wn ≤20 µm ([[2024-lorenz-cutting-edge-metallization-shj-fraunhofer]]).

## Sources
- [[2018-pvtech-metallization-shj-cells-modules]] — canonical bulk-resistivity benchmark (6–10×10⁻⁶ Ω·cm).
- [[2018-pv-international-metallization-shj]] — LCT-paste evolution from 18 → 5.5 µΩ·cm 2009–2018.
- [[2018-pv-tech-metallization-interconnection-bifacial-shj]] — Ag laydown for 4BB/5BB/6BB SHJ.
- [[2023-tepner-printing-tech-csi-review]] — comprehensive screen-print review; finger-width history.
- [[2023-taiyangnews-heterojunction-technology-report]] — Solamet PV42B/PV43B; industry roadmap.
- [[2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] — fine-line knotless-screen optimisation; 23.2% with 16.3 mg Ag.
- [[2024-siliconpv-novel-shj-metallization-architectures]] — Ag-micro vs AgCu vs reactive ink benchmarking on SHJ M2.
- [[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — 13 Ag pastes screened; 7.5 mg/W AgCu.
- [[2025-yacouba-shj-silver-free-metallization-progPV]] — Ag SP reference for Cu/AgCu paste benchmarking.
- [[2024-itrpv-15th-edition-roadmap]] — 19 mg/W → 9 mg/W roadmap.
- [[pvtech-metallization-challenges-cell-manufacturing]] — historical industry overview.
