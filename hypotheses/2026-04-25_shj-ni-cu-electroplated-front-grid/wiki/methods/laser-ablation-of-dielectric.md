---
type: method
slug: laser-ablation-of-dielectric
aliases: [laser opening, picosecond laser ablation, fs-UV laser patterning, dielectric scribing]
related_methods: [inkjet-mask-patterning, photolithography-mask-patterning, electroplated-Ni-Cu-stack, NOBLE-selective-Cu-plating, light-induced-plating]
key_reagents: [ITO-transparent-conductive-oxide, a-Si-H-passivation]
known_failure_modes: [a-Si-H-passivation-degradation, FF-degradation-contact-resistance, TCO-pitting-during-plating]
sources: [2010-bartsch-lip-pvsc, 2014-rehman-nicu-plating-csi-review, 2018-pvtech-metallization-shj-cells-modules, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-karas-cu-outdiffusion-damp-heat, 2023-taiyangnews-heterojunction-technology-report, 2024-itrpv-15th-edition-roadmap, pvtech-metallization-challenges-cell-manufacturing]
tags: [patterning, laser, dielectric, SiNx, Al2O3, fs-UV, ARC-opening, selective-plating]
---

# Laser Ablation of Dielectric

## What it measures / does
A focused laser beam removes a dielectric layer (SiNx ARC for PERC, or Al/AlOx for NOBLE) along the desired contact-grid pattern, exposing the underlying Si or TCO for selective plating. Avoids organic resist masks and aligns naturally with inline manufacturing. Pulse-duration regime governs whether the underlying passivation is preserved.

## When to use it
Used as the patterning step before plating: PERC -> ablate SiNx -> electroless Ni / electroplated Cu; SHJ NOBLE -> ablate Al/AlOx -> electroplated Cu (alternative to NaOH inkjet); CSEM seed-and-plate -> ablate PECVD dielectric on top of Ag seed -> direct Cu plate.

## Key parameters
- Wavelength: 266 nm ps (Karas 2022); 343 nm fs UV (Hatt 2021); commonly green 532 nm or UV 355 nm.
- Pulse energy: high regime 2.2-4.7 uJ + thicker PVD buffer (Cu 500 nm), preserves passivation up to ~4.7 uJ; low regime 0.2-0.7 uJ + 1-35 pulses, smaller damage-free window but rho_c down to 1.6 mOhm.cm² (Hatt 2021).
- PL imaging at 1-sun used to map laser-induced passivation damage.
- Selective-emitter laser doping: 100% PERC market share by 2023 (ITRPV).
- Process speed: production lasers compatible with screen-print throughput (>2000 wafers/h per IMEC overview).

## Common variants / alternatives
- [[inkjet-mask-patterning]] — alternative non-thermal patterning route; NaOHaq inkjet on Al for NOBLE.
- [[photolithography-mask-patterning]] — high-resolution lab benchmark.
- LCMD (laser chemical metal deposition) — combines ablation + seeding in one step.

## Things to watch for (failure modes)
- [[../failure-modes/a-Si-H-passivation-degradation]] — direct laser-induced damage to a-Si:H/c-Si interface; PL imaging the primary diagnostic.
- [[../failure-modes/FF-degradation-contact-resistance]] — incomplete dielectric removal raises rho_c; over-ablation damages TCO.
- [[../failure-modes/TCO-pitting-during-plating]] — over-ablation thins or pits the TCO, opening Cu-diffusion paths.

## Sources
- [[2010-bartsch-lip-pvsc]] — laser ablation of SiNx ARC opens contacts for direct Ni plating on Si; FF gap attributed to ablation inhomogeneity.
- [[2014-rehman-nicu-plating-csi-review]] — review covers laser-doped selective emitter and LCMD options.
- [[2018-pvtech-metallization-shj-cells-modules]] — laser ablation patterning route discussed; for SHJ requires additional resist mask because TCO is conductive.
- [[2021-hatt-stable-cu-plated-shj-eupvsec]] — fs-UV (343 nm) laser ablation of Al/AlOx as patterning alternative to inkjet; 21.4% large-area cell.
- [[2022-karas-cu-outdiffusion-damp-heat]] — 266 nm ps laser SiNx ablation prior to LIP plating.
- [[2023-taiyangnews-heterojunction-technology-report]] — CSEM seed-and-plate uses laser-open SiNx + direct Cu plating; deposited dielectric prevents ghost plating.
- [[2024-itrpv-15th-edition-roadmap]] — selective-emitter laser doping at 100% PERC market share since 2023.
- [[pvtech-metallization-challenges-cell-manufacturing]] — IMEC overview of picosecond laser ablation for selective NiSi2/Cu plating.
