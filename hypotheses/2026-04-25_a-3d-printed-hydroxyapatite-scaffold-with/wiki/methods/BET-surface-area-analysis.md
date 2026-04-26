---
type: method
slug: BET-surface-area-analysis
aliases: [Brunauer-Emmett-Teller, BET-isotherm, gas-adsorption-surface-area, N2-adsorption]
related_methods: [mercury-intrusion-porosimetry, micro-CT-imaging, XRD-phase-analysis, SEM-imaging]
key_reagents: [hydroxyapatite, mesoporous-bioactive-glass, beta-tricalcium-phosphate]
known_failure_modes: [batch-to-batch-HA-stoichiometry-variation, sintering-shrinkage-pore-deviation]
sources: [2017-eliaz-calcium-phosphate-bioceramics-a-review-o, 2025-de-carvalho-three-dimensional-printing-of-calcium-ph, 2018-zhang-effect-of-microporosity-on-scaffolds-for, 2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity, 2015-baino-bioceramics-and-scaffolds-a-winning-comb, 2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por, 2010-murphy-understanding-the-effect-of-mean-pore-size-on]
tags: [characterization, surface-area, gas-adsorption, scaffold-QC]
created: 2026-04-25
updated: 2026-04-25
---

# BET surface-area analysis

## What it measures / produces

The Brunauer–Emmett–Teller (BET) method quantifies specific surface area (m²/g) by measuring the amount of gas (typically N₂ at 77 K) adsorbed at varying relative pressures and fitting a multilayer adsorption isotherm. Output: total specific surface area, plus pore-size distribution in the micro/mesopore regime (<50 nm) via BJH analysis of the desorption branch. For HA scaffolds, BET captures **internal surface area within strut walls** — including microporosity (<10 μm) and any mesoporous additives like MBG — which μCT cannot resolve.

## When to use it

Use BET when (a) matching gradient and uniform-pore controls on **specific surface area** (a critical confound — gradient and uniform may have the same total porosity but different surface area distributions), (b) characterising mesoporous additives like mesoporous bioactive glass (pore sizes 2–50 nm) [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]], (c) tracking how sintering schedule changes strut microporosity / surface area, or (d) modelling cell-attachment ligand availability (BET surface area sets the upper bound on ligand-density-mediated adhesion). Required for the present hypothesis to match the gradient and uniform-pore controls within ±10% surface area.

## Key parameters

- **Adsorbate**: N₂ at 77 K standard; Kr at 77 K for low-surface-area samples; CO₂ for ultramicropores.
- **Relative pressure range**: BET fit valid in 0.05–0.30 P/P₀; multipoint isotherms are standard.
- **Outgassing pre-treatment**: typically 100–300 °C × several hours under vacuum to desorb water/contaminants.
- **Specific surface area** (representative HA scaffolds): bulk dense HA ~0.1–1 m²/g; porous sintered HA scaffolds 1–20 m²/g; HA/MBG composites can reach >100 m²/g due to mesoporous additive [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]].
- **Pore-size distribution** (BJH or DFT): captures pores from ~1 nm to ~100 nm — the regime that drives protein adsorption and microporosity-mediated osteoinduction [[../sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]].
- **Cellular-solids surface-area scaling** (analytical; for tetrakaidecahedral foam): SA/V = 0.718 / d (d = mean macropore diameter); SA scales inversely with pore size [[../sources/2010-murphy-understanding-the-effect-of-mean-pore-size-on]] — relevant for matching gradient vs uniform total surface area.

## Common variants

- **Single-point BET** (quick, less accurate) vs **multi-point BET** (standard).
- **Krypton BET** for low-surface-area samples (<1 m²/g); 100× more sensitive than N₂.
- **Mercury intrusion porosimetry** (MIP) is the complementary method for the macropore range (50 nm – 200 μm); see [[mercury-intrusion-porosimetry]].
- **DFT (density functional theory) pore-size analysis**: more accurate than BJH for narrow mesopores.

## Step-level notes

- Outgassing temperature must be high enough to remove physisorbed water but low enough not to alter the sample (HA can dehydrate above ~400 °C).
- For dense ceramic samples, expect long equilibration times per pressure point (low-surface-area samples take hours).
- Combine BET (mesopore + microporosity) with MIP (macropore) for full pore-size distribution from nm to mm.
- Report both total surface area and BET-isotherm classification (Type I, II, IV, etc.) — Type IV with hysteresis is the hallmark of mesoporous materials [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]].
- For matching gradient vs uniform controls, report surface area on a *per-scaffold* basis (m² per scaffold) as well as per gram, since gradient and uniform may have the same per-gram value but different per-scaffold values if mass differs.

## Things to watch for

- [[../failure-modes/batch-to-batch-HA-stoichiometry-variation]] — different HA powder lots can have substantially different surface areas (sintered density depends on green packing); BET-verify each lot.
- [[../failure-modes/sintering-shrinkage-pore-deviation]] — sintering temperature dramatically reduces surface area as struts densify; report BET *after* the sintering step that produces the actual scaffold.

## Sources

- [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]] — BET as part of the CaP characterisation toolkit.
- [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] — BET surface-area for CPC + MBG composites; mesoporous structure 2–50 nm verified by N₂ adsorption.
- [[../sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]] — BET-derived surface area drives microporosity-mediated osteoinduction.
- [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]] — BET in pore-size characterisation review.
- [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]] — BET for ceramic scaffold characterisation.
- [[../sources/2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por]] — BET in porous bioprinting.
- [[../sources/2010-murphy-understanding-the-effect-of-mean-pore-size-on]] — analytical surface-area scaling SA/V = 0.718/d for tetrakaidecahedral cellular solids.
