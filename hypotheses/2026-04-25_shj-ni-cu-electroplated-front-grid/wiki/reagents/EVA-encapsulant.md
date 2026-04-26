---
type: reagent
slug: EVA-encapsulant
aliases: [ethylene vinyl acetate, EVA film, EVA encapsulant]
cas: 24937-78-8
formula: poly(ethylene-co-vinyl acetate); 28–33% VA content typical
suppliers:
  - name: First Solar / Hangzhou First / Cybrid / Bridgestone
    catalog: standard EVA encapsulant films (e.g., EVASKY, FC-40)
    grade: PV-grade
    url: null
  - name: STR (acquired by EVASA) / 3M (legacy)
    catalog: EVA encapsulant rolls
    grade: PV-grade
    url: null
storage: cool, dry, sealed roll; 18–24 months shelf life
hazards: low — EVA itself is benign; concern is the acetic acid hydrolysis byproduct over module lifetime
known_failure_modes: [EVA-acetic-acid-corrosion, Cu-out-diffusion-through-cap-stack, Cu-finger-corrosion-encapsulant, Cu-diffusion-into-c-Si]
sources: [2011-nrel-reliability-testing-beyond-qualification, 2012-nrel-iec61215-what-it-is, 2013-koehl-fraunhofer-accelerated-service-life-testing, 2014-nrel-pv-module-qualification-plus, 2014-rehman-nicu-plating-csi-review, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2019-karas-damp-heat-degradation-shj-cu, 2022-arena-sundrive-copper-metallisation-demonstration, 2022-karas-cu-outdiffusion-damp-heat, 2023-taiyangnews-heterojunction-technology-report, 2023-tepner-printing-tech-csi-review, 2024-fraunhoferise-photovoltaics-report, 2024-nrel-getting-ahead-of-curve-pv-assessment, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj]
tags: [encapsulant, polymer-film, lamination, hydrolysis, deprecated-for-Cu]
---

# Ethylene-vinyl acetate (EVA) encapsulant

## What it is
The dominant photovoltaic module encapsulant film since the 1990s — a thermoplastic ethylene/vinyl-acetate copolymer typically containing 28–33% vinyl acetate. EVA is laminated between the cell stack and front glass / back sheet at ~150 °C with peroxide cross-linking. For plated-Cu SHJ, EVA is the WRONG encapsulant: hydrolysis of the vinyl-acetate side group generates acetic acid that drives Cu out-diffusion through any cap stack (Sn or Ag) and corrodes the finger. POE is the recommended replacement.

## Common uses
- Standard encapsulant for ~80% of installed PV modules historically.
- Lamination standard 150 °C, 5–10 min cycle.
- Reference comparator in plated-Cu DH studies — the encapsulant against which POE is benchmarked ([[2019-karas-damp-heat-degradation-shj-cu]], [[2022-karas-cu-outdiffusion-damp-heat]]).

## Key spec / concentration ranges
- VA content 28–33% typical; lower VA content reduces acetic-acid generation but lowers transparency.
- Thickness 0.4–0.6 mm per layer; one front layer + one rear layer per module.
- Cure: peroxide-driven cross-linking at 130–150 °C / 5–15 min.
- Optical transmission >90% in 400–1100 nm.
- Hydrolysis: H2O + EVA → ROH + CH3COOH (acetic acid); Arrhenius-accelerated at 85 °C / 85% RH.
- Karas et al. quantification: Ni/Cu/Sn EVA-encapsulated cell loses 5.1%abs pFF after 2000 h DH; ~3× more Cu at the Si surface than POE-encapsulated sister sample after 3500 h ([[2022-karas-cu-outdiffusion-damp-heat]]).

## Alternatives / variants
- [[POE-polyolefin-encapsulant]] — preferred for Cu plated SHJ (no acetic acid generation).
- EPE (EVA/POE/EVA tri-layer) — standard for SHJ in [[2023-taiyangnews-heterojunction-technology-report]]; compromise that retains EVA process compatibility while inserting a POE diffusion barrier.
- TPO (thermoplastic polyolefin) — emerging, similar advantages to POE.
- Ionomer (Surlyn / DNP) — niche, high-transparency.

## Gotchas
- DO NOT use EVA with plated-Cu metallization — acetic-acid hydrolysis is the central DH failure driver ([[2019-karas-damp-heat-degradation-shj-cu]], [[2022-karas-cu-outdiffusion-damp-heat]]). Even Ag-capped Cu fingers degrade ~3× more in EVA than POE.
- Fast-cure EVA formulations (lower peroxide content, anti-hydrolysis additives) reduce but don't eliminate acetic-acid evolution — POE is still the safer call for plated-Cu modules.
- For Ag-screenprinted controls in any DH benchmark, EVA is the historical standard — keep this control to validate that DH degradation is Cu-finger-driven, not encapsulant-driven ([[2022-karas-cu-outdiffusion-damp-heat]]).
- IEC 61215 / IEC 61730 qualification was historically tuned to EVA; new standards (UL 9540, IEC 63209) are pushing extended-DH testing to capture POE-class encapsulants.

## Sources
- [[2022-karas-cu-outdiffusion-damp-heat]] — quantitative EVA vs POE comparison; central evidence that acetic acid drives Cu out-diffusion.
- [[2019-karas-damp-heat-degradation-shj-cu]] — first major DH evidence that EVA-encapsulated Cu plated cells fail and POE prevents.
- [[2014-rehman-nicu-plating-csi-review]] — review flagging Cu/EVA interaction concern.
- [[2023-taiyangnews-heterojunction-technology-report]] — industry: EPE encapsulant standard for SHJ; UV-conversion films layered on top.
- [[2018-pv-tech-metallization-interconnection-bifacial-shj]] — module BOM context.
- [[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] / [[2024-fraunhoferise-photovoltaics-report]] / [[2023-tepner-printing-tech-csi-review]] — module-level discussion / comparator.
- [[2011-nrel-reliability-testing-beyond-qualification]] / [[2012-nrel-iec61215-what-it-is]] / [[2013-koehl-fraunhofer-accelerated-service-life-testing]] / [[2014-nrel-pv-module-qualification-plus]] / [[2014-nrel-pv-module-qualification-plus]] / [[2024-nrel-getting-ahead-of-curve-pv-assessment]] — accelerated-aging / qualification framework that historically assumed EVA.
- [[2022-arena-sundrive-copper-metallisation-demonstration]] — module BOM context for plated Cu.
