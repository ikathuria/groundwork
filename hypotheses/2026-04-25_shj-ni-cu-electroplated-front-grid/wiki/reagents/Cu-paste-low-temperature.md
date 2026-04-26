---
type: reagent
slug: Cu-paste-low-temperature
aliases: [Cu paste, pure Cu paste, AgCu core-shell paste, Ag-coated-Cu paste, SCC paste]
cas: null (multi-component metallization paste)
formula: Cu (or AgCu core-shell) particles + low-T binder/sintering aid + organic vehicle
suppliers:
  - name: Namics
    catalog: pure Cu paste; AgCu core-shell pastes (Cu core + Ag shell)
    grade: production / development
    url: null
  - name: Heraeus / Toyo / Yu Cheng / Soltrium
    catalog: AgCu and pure-Cu pastes for SHJ rear / front
    grade: development
    url: null
  - name: Sumitomo / Mitsuboshi (research)
    catalog: reactive Cu inks
    grade: research
    url: null
storage: 5–25 °C; sealed; avoid air exposure once opened (Cu oxidation); shelf life ~6 months
hazards: low — Cu dust; organic solvents
known_failure_modes: [Cu-finger-oxidation-damp-heat, FF-degradation-contact-resistance, Ni-Cu-line-resistance-rise-DH]
sources: [2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-taiyangnews-heterojunction-technology-report, 2024-itrpv-15th-edition-roadmap, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-siliconpv-novel-shj-metallization-architectures, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV]
tags: [Cu-paste, screen-printed, low-temperature, SHJ-compatible, comparator-architecture]
---

# Low-temperature Cu (and AgCu core-shell) paste

## What it is
A screen-printable / dispensable / pattern-transfer-printable Cu-based metallization paste that cures below the SHJ thermal ceiling (~250 °C), used as an Ag-replacement front- or rear-grid metallization. Two production families exist: (1) AgCu core-shell pastes — Cu particles with a thin (few-nm) Ag shell, ~44–55 wt% Ag — which match Ag-paste electrical performance while cutting Ag content by half; (2) pure Cu pastes (~500 Pa·s viscosity, no Ag) which deliver zero-Ag fingers but currently suffer high contact resistivity (~5–12 mΩ·cm² on ITO at fine line) and Cu-oxidation reliability concerns.

**This is NOT the intervention reagent for the present hypothesis** (which is electroplated Cu on a Ni barrier). It is in the comparator landscape — Pass 3 must distinguish between Cu paste and electroplated Cu carefully.

## Common uses
- Pure Cu paste / AgCu screen-print on M2 SHJ for cell-level efficiency benchmarking ([[2024-siliconpv-novel-shj-metallization-architectures]], [[2025-yacouba-shj-silver-free-metallization-progPV]], [[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]]).
- SCC (silver-coated-copper) paste seed-grid in CSEM three-step plating route ([[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]], [[2024-lachowicz-cu-plated-shj-aging-mini-modules]]).
- Pattern-transfer-printing of pure Cu paste (Risen Laser PTP, CSEM PTP) — 18.1–26.1 µm wide fingers ([[2023-taiyangnews-heterojunction-technology-report]], [[2024-lachowicz-cu-plated-shj-aging-mini-modules]]).
- Listed in ITRPV roadmap as one of two Ag-replacement paths for SHJ ([[2024-itrpv-15th-edition-roadmap]]).

## Key spec / concentration ranges
- AgCu pastes: 44–55 wt% Ag with Cu core; ~few-nm Ag shell; particle size ~5 µm aggregates ([[2024-siliconpv-novel-shj-metallization-architectures]]).
- Pure Cu paste: ~500 Pa·s viscosity ([[2025-yacouba-shj-silver-free-metallization-progPV]]).
- Cure: 200–300 °C / 5–60 s (Cu paste anneal: 300 °C / 5 s in Yacouba, 280 °C is the SHJ-safe limit).
- Bulk resistivity (Cu SP): ≈12.62×10⁻⁶ Ω·cm (vs 3.51 for Ag SP); AgCu intermediate.
- Contact resistivity to ITO (Cu paste): 1.5 mΩ·cm² (CSEM, screen-printed pad TLM, [[2024-lachowicz-cu-plated-shj-aging-mini-modules]]); 5 mΩ·cm² @ 80 µm finger; 12 mΩ·cm² @ 25 µm finger ([[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]]); 10.28 mΩ·cm² ([[2025-yacouba-shj-silver-free-metallization-progPV]]).
- AgCu contact resistivity to ITO: 0.8–1.0 mΩ·cm² ([[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]]); 8.10 mΩ·cm² for one 50 wt% Ag formulation ([[2025-yacouba-shj-silver-free-metallization-progPV]]).
- Champion cell: AgCu front + Ag rear 23.95% on M2 SHJ ([[2025-yacouba-shj-silver-free-metallization-progPV]]); pure Cu both sides 23.08% (zero-Ag champion).
- Thermal stability (pure Cu paste): ΔRs +2.3 mΩ at 200 → 230 °C in air; oxidation visible (blue-green discoloration) ([[2024-siliconpv-novel-shj-metallization-architectures]]). AgCu paste much more stable: ΔRs +0.1 to +0.5 mΩ.
- Pure Cu paste at room-temperature air: NO significant Rline change after 24 days storage ([[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]]).

## Alternatives / variants
- [[low-T-Ag-paste-generic-SHJ-grade]] — pure Ag paste reference.
- [[acid-Cu-sulfate-bath]] — electroplated Cu (the present hypothesis); fundamentally different process.
- Reactive Ag particle-free ink — research-grade alternative.
- [[silver-Ag-cap]] / [[tin-Sn-cap]] — capping reagents over plated-Cu fingers (different role).

## Gotchas
- **Cu paste is NOT the intervention reagent for this hypothesis.** This hypothesis is about ELECTROPLATED Ni + Cu, not screen-printed Cu paste. Pass 3 must not confuse the two — the comparator landscape has both screen-printed Cu and plated Cu, and they have different cost / reliability / process profiles.
- Pure Cu paste fails 200–270 °C thermal stability in air ([[2024-siliconpv-novel-shj-metallization-architectures]]). Annealing must be done in inert / forming-gas atmosphere.
- Cu paste contact resistivity (~5–12 mΩ·cm²) is currently uncompetitive with the present hypothesis's ≤2 mΩ·cm² target.
- Frasson 2021 reported pure-Cu module reliability failure (>40% power loss after 200 thermal cycles); AgCu does not have this failure mode.
- Unsintered Cu nanoparticle regions remain even after 300 °C anneal — likely root cause of high contact resistivity ([[2025-yacouba-shj-silver-free-metallization-progPV]]).

## Sources
- [[2024-siliconpv-novel-shj-metallization-architectures]] — quantitative AgCu vs Ag vs pure Cu paste benchmarking on M2 SHJ; thermal stability test.
- [[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — 7 AgCu pastes screened; Cu-01 paste evaluated; 24-day air-storage stability check.
- [[2025-yacouba-shj-silver-free-metallization-progPV]] — pure Cu paste 23.08% zero-Ag champion; viscosity, finger geometry, line/contact resistivity, anneal recovery via light soaking.
- [[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] / [[2024-lachowicz-cu-plated-shj-aging-mini-modules]] — Cu paste from Namics for PTP; 1.5 mΩ·cm² on ITO.
- [[2023-taiyangnews-heterojunction-technology-report]] — Risen Laser Pattern Transfer Printing 18.1 µm fingers; SCC paste for Huasun rear (-24 mg Ag/M6).
- [[2024-itrpv-15th-edition-roadmap]] — silver-coated copper paste explicitly named as one of two Ag-replacement paths for SHJ.
