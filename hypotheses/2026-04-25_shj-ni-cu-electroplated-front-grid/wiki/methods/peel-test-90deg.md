---
type: method
slug: peel-test-90deg
aliases: [90 deg peel test, ribbon peel test, DIN EN 50461 peel]
related_methods: [damp-heat-aging-1000h, temperature-cycling-IEC61215-TC200, transfer-length-method]
key_reagents: [multibusbar-Cu-ribbon, electrically-conductive-adhesive-ECA]
known_failure_modes: [finger-adhesion-loss-after-DH, Cu-finger-corrosion-encapsulant]
sources: [2014-fraunhofer-peel-testing-ribbons-solar-cells, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2019-hatt-noble-shj-solrrl, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration, 2024-nrel-getting-ahead-of-curve-pv-assessment]
tags: [adhesion, mechanical-test, DIN-EN-50461, peel-force, plated-contact-qualification]
---

# 90-Degree Peel Test

## What it measures / does
Mechanical adhesion test specified in DIN EN 50461: a soldered interconnect ribbon is pulled away from the cell surface at a controlled angle (commonly 90 deg) at a constant velocity, and the steady-state peel force per unit ribbon width is recorded (N/mm). Fraunhofer ISE (Eitner & Rendler 2014) showed that converting force to adhesive fracture energy G_A via the Kinloch-Kawashita formulation collapses the angle dependence and gives a more comparable mechanical material parameter.

## When to use it
Use after metal stack deposition + cap + soldering, and again after damp heat / thermal cycling, to track adhesion loss. Critical for plated-Cu / NOBLE / ECA-glued contacts which historically show lower peel force than fired Ag (1 N/mm minimum spec).

## Key parameters
- Standard: DIN EN 50461 minimum 1 N per mm of joint width; angle not specified in the standard (Eitner & Rendler 2014 highlight this gap).
- Ribbon: SnPbAg-coated 160 um x 1.6 mm Cu ribbon, IR-soldered to cell metallization.
- Sample prep: rear of cell glued to a rigid backing to avoid cell cracking at high peel forces.
- Angle dependence (Eitner data, same sample): 9.74 N at 45 deg; 3.14 N at 90 deg; 2.46 N at 135 deg; 3.49 N at 180 deg — 4x artifact from geometry alone.
- G_A interpretation: 510 / 395 / 441 / 595 J/m² — collapses to factor 0.66.
- Reported NOBLE: >=2 N/mm peel force (Hatt 2021); SunDrive Cu busbar pull test exceeds Si shear strength.

## Common variants / alternatives
- 180 deg peel (T-peel) — also defined; different geometry, different force readings.
- 4-point bend / shear pull-test — used by SunDrive when peel force exceeds Si strength.

## Things to watch for (failure modes)
- [[../failure-modes/finger-adhesion-loss-after-DH]] — direct relevance: peel test is the canonical protocol for detecting post-damp-heat adhesion loss; Eitner explicitly flags plated contacts as the use case.
- [[../failure-modes/Cu-finger-corrosion-encapsulant]] — moisture corrosion at the metal/cell interface manifests as peel-force collapse.

## Sources
- [[2014-fraunhofer-peel-testing-ribbons-solar-cells]] — protocol-defining reference; angle-dependence study + G_A formulation; explicit call-out that peel test is essential for "plated contacts or conductive gluing".
- [[2018-pv-tech-metallization-interconnection-bifacial-shj]] — soldered-ribbon peel test >=1 N/mm on LCT-Ag busbars; thermo-cycle + DH sequence.
- [[2019-hatt-noble-shj-solrrl]] — Kapton-tape peel passed; cites prior peel forces >4 N/mm on PVD/TCO with resist-mask routes.
- [[2021-hatt-stable-cu-plated-shj-eupvsec]] — NOBLE Cu peel force >=2 N/mm vs <=0.5 N/mm for screen-printed Ag.
- [[2022-arena-sundrive-copper-metallisation-demonstration]] — pull-test adhesion exceeds Si shear strength (rips out TCO + Si shards).
- [[2024-nrel-getting-ahead-of-curve-pv-assessment]] — adhesion of plated contacts called out as critical and underspecified.
