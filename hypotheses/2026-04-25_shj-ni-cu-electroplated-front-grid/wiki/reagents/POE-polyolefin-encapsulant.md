---
type: reagent
slug: POE-polyolefin-encapsulant
aliases: [polyolefin elastomer, POE encapsulant, EPE (EVA/POE/EVA tri-layer)]
cas: null (mixture of polyolefin elastomers)
formula: poly(ethylene-co-α-olefin) elastomer
suppliers:
  - name: Hangzhou First / Cybrid / Bridgestone / Borealis
    catalog: standard POE encapsulant films (e.g., F806P, EPE)
    grade: PV-grade
    url: null
  - name: ExxonMobil (Vistamaxx) / Dow (Engage) — base resin
    catalog: polyolefin elastomer resin pellets (compounded by film makers)
    grade: PV-grade
    url: null
storage: cool, dry, sealed roll; 12–24 months shelf life
hazards: low — POE is benign; no acetic acid hydrolysis pathway
known_failure_modes: [Cu-finger-corrosion-encapsulant]
sources: [2014-nrel-pv-module-qualification-plus, 2019-karas-damp-heat-degradation-shj-cu, 2022-arena-sundrive-copper-metallisation-demonstration, 2022-karas-cu-outdiffusion-damp-heat, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-taiyangnews-heterojunction-technology-report, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-nrel-getting-ahead-of-curve-pv-assessment, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj]
tags: [encapsulant, polymer-film, lamination, low-water-uptake, recommended-for-Cu]
---

# Polyolefin elastomer (POE) encapsulant

## What it is
A polyolefin-elastomer-based PV encapsulant that does NOT generate acetic acid on hydrolysis (unlike EVA). POE is the recommended encapsulant for plated-Cu SHJ modules: glass-glass POE laminates have demonstrated 1000–3000 h damp-heat survival in the SunDrive, CSEM, and Karas studies. POE has lower water uptake and better PID resistance than EVA, at the cost of higher cure-temperature sensitivity and roughly 1.5–2× higher film cost. EPE (EVA/POE/EVA tri-layer) is a popular industrial compromise.

## Common uses
- Encapsulant of choice for SHJ glass-glass bifacial modules ([[2023-taiyangnews-heterojunction-technology-report]], [[2022-arena-sundrive-copper-metallisation-demonstration]]).
- Encapsulant in Cu-plated SHJ DH stability studies — survives 2700 h DH with only ~5% Pmax loss in CSEM SmartWire mini-modules ([[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]], [[2024-lachowicz-cu-plated-shj-aging-mini-modules]]).
- Reference encapsulant in Karas damp-heat tests: prevents the EVA acetic-acid-driven Cu out-diffusion ([[2019-karas-damp-heat-degradation-shj-cu]], [[2022-karas-cu-outdiffusion-damp-heat]]).
- Recommended in NREL service-life-testing framework for n-type / glass-glass modules ([[2024-nrel-getting-ahead-of-curve-pv-assessment]]).

## Key spec / concentration ranges
- Resin: poly(ethylene-co-α-olefin) elastomer (octene or butene comonomer).
- Thickness 0.3–0.5 mm per layer.
- Cure: peroxide cross-linking at 150–160 °C / 10–15 min (slightly higher T than EVA).
- Water vapor transmission rate (WVTR) ~5–8 g/m²/day (vs 30–35 for EVA) — significantly lower moisture ingress.
- Volume resistivity >10¹⁵ Ω·cm — better PID resistance than EVA.
- DH performance with plated-Cu cells: ~3× less surface Cu vs EVA after 3500 h DH ([[2022-karas-cu-outdiffusion-damp-heat]]); ~5% Pmax loss after 2700 h on CSEM 1-cell modules ([[2024-lachowicz-cu-plated-shj-aging-mini-modules]]).

## Alternatives / variants
- [[EVA-encapsulant]] — historic baseline; NOT recommended for plated Cu.
- EPE (EVA/POE/EVA tri-layer) — combines EVA process compatibility with a POE moisture barrier; SHJ industry standard ([[2023-taiyangnews-heterojunction-technology-report]]).
- TPO (thermoplastic polyolefin) — non-cross-linked alternative; faster lamination cycles.
- Ionomer (Surlyn) — high-transparency niche.

## Gotchas
- Cure-temperature window is tighter than EVA; under-cured POE causes adhesion loss; over-cured causes haze.
- Higher cost than EVA — about 1.5–2× per m². Cost-aware module designs use EPE tri-layer to retain most of the POE benefit at lower price.
- Edge sealing (polyisobutylene, PIB) is still essential for plated-Cu glass-glass modules in long-term DH; POE alone does not eliminate edge-initiated moisture ingress in 1-cell mini-modules ([[2024-lachowicz-cu-plated-shj-aging-mini-modules]]).
- Less mature long-field-deployment data than EVA — accelerated-aging extrapolations are the primary qualification basis.

## Sources
- [[2022-karas-cu-outdiffusion-damp-heat]] — quantitative POE vs EVA DH comparison; POE prevents the acetic-acid-driven Cu out-diffusion.
- [[2019-karas-damp-heat-degradation-shj-cu]] — first major DH evidence; POE restores Ag-control-like behavior.
- [[2024-lachowicz-cu-plated-shj-aging-mini-modules]] / [[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — POE used in CSEM glass-glass SmartWire and shingle mini-modules surviving 2700 h DH.
- [[2022-arena-sundrive-copper-metallisation-demonstration]] — POE used in SunDrive's glass-glass bifacial modules surviving 3× IEC.
- [[2023-taiyangnews-heterojunction-technology-report]] — POE / EPE as SHJ industry standard.
- [[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — POE in Pingel et al. mini-modules.
- [[2014-nrel-pv-module-qualification-plus]] / [[2024-nrel-getting-ahead-of-curve-pv-assessment]] — POE in NREL extended-qualification frameworks.
