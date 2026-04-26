---
type: method
slug: minority-carrier-lifetime-photoluminescence
aliases: [PL imaging, QSSPC, μ-PCD, photoluminescence imaging, minority carrier lifetime]
related_methods: [dark-IV-suns-Voc, EL-electroluminescence-imaging, IV-curve-measurement, SIMS-depth-profile]
key_reagents: [a-Si-H-passivation, ITO-transparent-conductive-oxide]
known_failure_modes: [a-Si-H-passivation-degradation, Voc-degradation-Cu-contamination, Cu-LID-light-induced-degradation, Cu-diffusion-into-c-Si]
sources: [2015-lindroos-cu-lid-aalto-thesis, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration]
tags: [characterization, lifetime, passivation, Cu-LID, PL-imaging, damage-mapping]
---

# Minority Carrier Lifetime / Photoluminescence Imaging

## What it measures / does
Optical methods for the minority-carrier lifetime in a passivated wafer or cell: QSSPC (quasi-steady-state photoconductance, Sinton) gives an injection-dependent lifetime curve; μ-PCD gives spatially resolved decay; PL imaging at 1-sun gives a 2-D lifetime map with passivation damage as dark patches. The Voc-implied lifetime is the upper-bound diagnostic for any process step that risks damaging the a-Si:H passivation in SHJ.

## When to use it
After every passivation-risking step: PVD seed deposition, laser ablation, anneal, plating. Hatt 2021 maps fs-UV laser-induced damage at 1-sun PL: pulse energies <=4.7 uJ preserve passivation, above damages a-Si:H. Lindroos 2015 uses QSSPC + μ-PCD to track Cu-LID kinetics under bias-laser illumination.

## Key parameters
- Bias illumination: 1-sun-equivalent halogen / LED for PL.
- Spatial resolution: ~100 um for PL camera; sub-mm for μ-PCD.
- Sensitivity: detects sub-1% bulk Cu contamination via lifetime drop.
- Damage thresholds (Hatt 2021 fs-UV laser): pulse energy <=4.7 uJ + Cu(500 nm) PVD buffer preserves passivation.
- Lindroos: Cu-LID stable at 200 C; bulk effect (not surface); negative corona charge -0.78 uC/cm² fully prevents Cu-LID.

## Common variants / alternatives
- [[dark-IV-suns-Voc]] — Suns-Voc gives pFF, J02, J01 from a single curve; non-imaging.
- [[EL-electroluminescence-imaging]] — current-injected emission imaging; sensitive to series resistance + dark spots.

## Things to watch for (failure modes)
- [[../failure-modes/a-Si-H-passivation-degradation]] — primary use case; PL maps damage from PVD / laser / anneal.
- [[../failure-modes/Voc-degradation-Cu-contamination]] — Cu in c-Si bulk drops minority-carrier lifetime; PL detects.
- [[../failure-modes/Cu-LID-light-induced-degradation]] — Lindroos: stable at 200 C, bulk-recombination signature.
- [[../failure-modes/Cu-diffusion-into-c-Si]] — direct lifetime impact.

## Sources
- [[2015-lindroos-cu-lid-aalto-thesis]] — QSSPC and μ-PCD lifetime tracking under halogen and bias-laser illumination; canonical Cu-LID reference.
- [[2021-hatt-stable-cu-plated-shj-eupvsec]] — 1-sun PL imaging maps fs-UV laser-induced passivation damage; up to 4.7 uJ preserved.
- [[2022-arena-sundrive-copper-metallisation-demonstration]] — PL imaging used to identify defects and degradation in plated cells.
