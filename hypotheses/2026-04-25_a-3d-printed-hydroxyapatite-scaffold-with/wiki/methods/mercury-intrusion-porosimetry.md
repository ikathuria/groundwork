---
type: method
slug: mercury-intrusion-porosimetry
aliases: [MIP, Hg-porosimetry]
related_methods: [BET-surface-area-analysis, micro-CT-imaging, SEM-imaging]
key_reagents: [hydroxyapatite]
known_failure_modes: [cad-vs-actual-pore-size-mismatch]
sources: [2017-eliaz-calcium-phosphate-bioceramics-a-review-o, 2018-zhang-effect-of-microporosity-on-scaffolds-for, 2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity, 2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por]
tags: [characterization, pore-size-distribution, porosimetry]
created: 2026-04-25
updated: 2026-04-25
---

# Mercury intrusion porosimetry (MIP)

## What it measures / produces

MIP forces non-wetting mercury into a porous sample under increasing pressure; pore-size distribution is computed from the Washburn equation (pore diameter ∝ 1/pressure). Output: pore-size distribution and total pore volume from ~3 nm (high pressure) to ~200 μm (low pressure). For HA scaffolds, MIP captures the meso-to-macropore transition that BET (mesopore) and μCT (macropore >10 μm) bridge incompletely.

## When to use it

Use MIP when you need pore-size distribution from nm to ~200 μm in a single measurement, or when you want a complementary readout to BET (mesopore-and-down) and μCT (macropore-and-up).

## Key parameters

- **Pressure range**: vacuum to 30,000 psi; pore-size range ~3 nm to ~200 μm.
- **Wetting angle of Hg**: 130° standard.
- **Sample mass**: 0.1–1 g.

## Step-level notes

- Hg is toxic — proper waste handling required.
- Pore-shape assumption: cylindrical pores for the Washburn equation; ink-bottle pores can give artefactual peaks.
- Combine with BET (microporosity) and μCT (macroporosity) for full pore-size distribution.

## Things to watch for

- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — MIP is a quantitative pore-size verification; combine with μCT for spatial information.

## Sources

- [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]] — MIP in CaP characterisation toolkit.
- [[../sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]] — MIP for microporosity quantification.
- [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]] — MIP in scaffold-porosity review.
- [[../sources/2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por]] — MIP in porous bioprinting characterisation.
