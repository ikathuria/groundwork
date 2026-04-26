---
type: method
slug: peel-test-90deg
aliases: [peel test, 90° peel test, ribbon peel test, DIN EN 50461 peel, IEC 62788-1-2 peel, T-peel]
related_methods: [damp-heat-aging-1000h, temperature-cycling-IEC61215-TC200, NOBLE-selective-Cu-plating, screen-printed-Ag-paste, IV-curve-measurement]
key_reagents: [multibusbar-Cu-ribbon, ITO-transparent-conductive-oxide, electrically-conductive-adhesive-ECA, EVA-encapsulant, POE-polyolefin-encapsulant, silver-Ag-cap]
known_failure_modes: [finger-adhesion-loss-after-DH, FF-degradation-contact-resistance]
sources: [2014-fraunhofer-peel-testing-ribbons-solar-cells, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration]
tags: [adhesion, peel-test, mechanical, DIN-EN-50461, IEC-62788, qualification]
created: 2026-04-26
updated: 2026-04-26
---

# 90° peel test (DIN EN 50461 / IEC 62788-1-2)

**Slug:** `methods/peel-test-90deg` · **Type:** method

## What it measures / does

Pulls a soldered or laminated ribbon (or single finger) from the cell at a controlled peel angle (90° is the canonical convention) on a tensile-test machine, recording force vs displacement. Reports peel force per unit joint width (N/mm) — the standard adhesion figure of merit for solar-cell metallization. DIN EN 50461 specifies a minimum acceptance threshold of 1 N/mm. Eitner & Rendler 2014 show that the 90° geometry gives the lowest force (~3 N for SnPbAg-Cu ribbon) and is therefore the *most conservative* adhesion screen.

## When to use it

Use it on every metallization development run: pre-DH baseline + post-DH retest, on every arm. For SHJ Cu plating specifically, peel-test value (and its drop after DH) is the canonical instrument for the [[failure-modes/finger-adhesion-loss-after-DH]] failure mode. NOBLE plated Cu fingers report peel ≥ 2 N/mm (Hatt 2021); SunDrive's busbar pull-test "pulls underlying Si shards out of the wafer — adhesion exceeds Si shear strength."

## Key parameters / setpoints

- **Peel angle:** 90° canonical; alternatives 45°, 135°, 180° (Eitner shows ~4× variation in force across angles, all measuring the *same* interfacial fracture energy — convert with Kinloch–Kawashita formulae for geometry independence).
- **Crosshead speed:** 50 mm/min (DIN EN 50461 / IEC 61730-2 standard).
- **Test machine:** Zwick or equivalent tensile tester with µN-resolution load cell.
- **Substrate prep:** rear of cell glued to a rigid substrate to prevent bending / cracking at high peel forces.
- **Ribbon used:** SnPbAg-coated 160 µm × 1.6 mm Cu ribbon (Eitner reference) or matched for the actual interconnection scheme (multibusbar Cu ribbon, ECA-bonded, SmartWire low-melt alloy).
- **Acceptance threshold:** 1 N/mm minimum (DIN EN 50461); 2 N/mm typical for plated Cu success criterion (Hatt 2021).
- **Reported reference values (Eitner 2014):** mean peel 9.74 N (45°), 3.14 N (90°), 2.46 N (135°), 3.49 N (180°) for SnPbAg-Cu ribbon on 3-busbar mc-Si — a factor-of-4 angle dependence that makes the angle-spec mandatory.
- **Adhesive fracture energies (Kinloch-Kawashita, Eitner):** 510 (45°), 395 (90°), 441 (135°), 595 (180°) J/m² — agree within factor 0.66; *this* is the geometry-independent number to report alongside peel force.

## Common variants

- **180° peel** (Faes 2018) — used in some DH/TC reliability studies on plated cells.
- **T-peel** — used for bonded interfaces.
- **Pull-test** (SunDrive) — full busbar pulled vertically; measures cohesion + adhesion; SunDrive reports adhesion exceeds Si shear strength.
- **Pre-DH vs post-DH** — Eitner notes DH "typically halves peel force by encapsulant softening + interface corrosion."
- **Adhesive fracture energy (GA)** — Kinloch-Kawashita transformation for geometry-independent reporting; recommended by Eitner for novel metallization comparisons.

## Things to watch for

- DIN EN 50461 leaves the peel *angle* unspecified, so quoting "1 N/mm" without an angle is meaningless — always document angle + crosshead speed.
- For plated contacts and ECA, peel forces are lower than fired-Ag; Eitner explicitly flags this as the regime where the GA conversion matters.
- Encapsulant-bonded peel tests measure the *weakest* interface in the stack; cohesive failure inside the encapsulant is a different failure mode from adhesive failure at the metal/cell interface — inspect the peeled surface.
- SunDrive's "Si shear-strength-limited" pull test means the metal/cell adhesion is no longer the failure interface — a strong design signal but also means the test no longer differentiates excellent from acceptable.
- Damp heat halves peel force on EVA-encapsulated plated stacks; pre-DH peel must be ≥ 2 N/mm to survive a 1000 h DH halving.

## Related methods

- [[methods/damp-heat-aging-1000h]] — peel test is the standard pre/post-DH adhesion check.
- [[methods/temperature-cycling-IEC61215-TC200]] — pre/post TC adhesion check.
- [[methods/NOBLE-selective-Cu-plating]] — peel-test target ≥ 2 N/mm met by NOBLE.
- [[methods/screen-printed-Ag-paste]] — Ag-paste baseline peel comparator.

## Citing sources

- [[sources/2014-fraunhofer-peel-testing-ribbons-solar-cells]] — methodology paper; defines the 90° canonical convention and the GA conversion.
- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — Faes Fig. 4 shows 180° peel + DH/TC reliability on plated cells.
- [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — peel force ≥ 2 N/mm reported for plated Cu fingers (NOBLE).
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — SunDrive busbar pull-test exceeds Si shear strength.
