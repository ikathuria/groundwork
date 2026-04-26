---
type: method
slug: laser-ablation-of-dielectric
aliases: [laser opening of dielectric, LCO, laser-contact opening, ps/fs laser patterning, laser-transfer]
related_methods: [inkjet-mask-patterning, photolithography-mask-patterning, electroplated-Ni-Cu-stack, NOBLE-selective-Cu-plating, Cu-electroplating-acid-bath, light-induced-plating]
key_reagents: [a-Si-H-passivation, ITO-transparent-conductive-oxide, inkjet-plating-resist]
known_failure_modes: [a-Si-H-passivation-degradation, FF-degradation-contact-resistance, Ni-barrier-pinholes, Cu-diffusion-into-c-Si]
sources: [2010-bartsch-lip-pvsc, 2014-rehman-nicu-plating-csi-review, 2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-karas-cu-outdiffusion-damp-heat, pvtech-metallization-challenges-cell-manufacturing]
tags: [laser-ablation, patterning, dielectric, SiNx, Al-AlOx, fs-laser, ps-laser]
created: 2026-04-26
updated: 2026-04-26
---

# Laser ablation of dielectric / cap layer

**Slug:** `methods/laser-ablation-of-dielectric` · **Type:** method

## What it measures / does

Uses a focused short-pulse laser (typically 266–355 nm UV ps or fs, but also 532/1064 nm green/IR for some processes) to selectively ablate a dielectric layer (SiNₓ ARC, SiOₓ, Al₂O₃, or PVD-Al/AlOx cap) and expose the underlying conductive surface for subsequent plating or contact formation. In SHJ Cu plating: laser opens the dielectric mask between the resist-defined plating window and the TCO, or in NOBLE laser-ablates the Al/AlOx selectively as an alternative to NaOHaq inkjet patterning.

## When to use it

Use whenever a hard inorganic mask (PECVD SiNₓ / SiOₓ / Al₂O₃) is preferred over an organic resist for chemical robustness in the plating bath, *and* photolithography is too slow/expensive for production. Hatt 2021 demonstrates fs-UV laser ablation of NOBLE Al/AlOx as a higher-throughput alternative to inkjet. Bartsch 2010 ablates SiNₓ ARC on FZ Si before direct Ni plating. Karas 2022 uses 266 nm ps laser for Cu-plated, Ag-capped sample preparation.

## Key parameters / setpoints

- **Laser:** 266 nm (UV) ps Lumera Nd:YAG (Karas 2022); 343 nm (UV) fs (Hatt 2021); 355 nm UV / 532 nm green also used.
- **Pulse energy / regime:** Hatt 2021 reports two operating regimes — (i) high pulse energy with thicker buffer Cu (500 nm) preventing passivation damage, (ii) low pulse energy with multiple repetitions on the same spot.
- **Spot diameter:** ~10–30 µm focused; line widths down to 20 µm achievable.
- **Repetition rate:** kHz–MHz; scanned by galvo mirror over wafer.
- **Substrate temperature:** ambient; the SHJ ≤200 °C constraint means ablation must dissipate heat fast enough not to damage a-Si:H.
- **Hatt 2021 result:** 21.4 % large-area SHJ with laser patterning, ρc 1.6 ± 0.3 mΩ·cm²; Voc 726.8 mV, ~10 mV below inkjet attributed to early-stage laser damage.

## Common variants

- **Laser-contact opening (LCO)** — opens contact windows in dielectric for direct plating.
- **Laser-induced metal deposition / LCMD** — uses the laser to *deposit* metal from a precursor (Rehman 2014 reviews).
- **Laser-transfer + dielectric mask** (route 3B in Faes 2018) — pattern PVD seed by laser, then plate through dielectric.
- **fs UV ablation** (Hatt 2021) — minimal heat-affected-zone; preferred for SHJ.
- **ps UV ablation** (Karas 2022) — broader process window; used for sample preparation in DH studies.

## Things to watch for

- Laser damage to a-Si:H passivation is the primary failure: PL imaging after ablation is the standard quality gate (Hatt 2021). Even with fs UV, ~10 mV Voc loss is reported.
- Heat-affected-zone in the dielectric may leave residue or modify the underlying TCO; SEM/EDS verification recommended.
- Wavelength selection trades absorption depth in dielectric vs damage to underlying a-Si:H — UV ps/fs is the sweet spot for SHJ; IR penetrates too deep.
- Throughput (cells/hour) on production lines depends on galvo speed and cell size; G12 / M10 wafers stretch the system.
- Particulate ejecta from ablation may redeposit on the surface; in-line cleaning (rinse, wet bench) is needed.

## Related methods

- [[methods/inkjet-mask-patterning]] — alternative for NOBLE patterning.
- [[methods/photolithography-mask-patterning]] — alternative for research-grade narrow features.
- [[methods/NOBLE-selective-Cu-plating]] — Hatt 2021 introduces fs-UV laser as a NOBLE patterning alternative.
- [[methods/Cu-electroplating-acid-bath]] — downstream plating step.
- [[methods/light-induced-plating]] — Bartsch 2010 sequence: laser ablation of SiNₓ ARC → direct Ni plating.

## Citing sources

- [[sources/2010-bartsch-lip-pvsc]] — SiNx ARC opening prior to direct Ni plating on Si.
- [[sources/2014-rehman-nicu-plating-csi-review]] — laser-induced Ni deposition (LCMD) reviewed.
- [[sources/2018-pv-international-metallization-shj]] — laser-transfer + dielectric mask as one of three patterning routes.
- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — opening of dielectric mask in route 3B.
- [[sources/2018-pvtech-metallization-shj-cells-modules]] — alternative mask-opening method.
- [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — fs UV (343 nm) laser ablation of Al/AlOx; first 21.4 % large-area cell with laser patterning.
- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — 266 nm ps Lumera Nd:YAG laser ablation for Cu-plated, Ag-capped sample preparation.
- [[sources/pvtech-metallization-challenges-cell-manufacturing]] — laser micro-sintering and laser-opened contacts in the seed-and-plate landscape.
