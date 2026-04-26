---
type: organism
slug: full-size-module-60-cell
organism_type: module
source: industry-standard PV module format (residential / commercial rooftop)
external_id: 60-cell c-Si module (IEC 61215 / IEC 61730 reference format)
characteristics:
  - 60 cells in a 6 × 10 arrangement, the residential / commercial rooftop standard format from roughly 2010 through ~2020
  - typical M0 / M2 / M6-era format; ~1.65 m × 1.0 m laminate, ~250–340 W power class with c-Si cells
  - the canonical full-size laminate for IEC 61215 / IEC 61730 module qualification testing
  - encapsulant most commonly EVA historically; POE / EPE moving in for n-type / SHJ formats
  - relevant in this hypothesis as the field-deployed format for plated-Cu SHJ modules and the target device for accelerated-life-test extrapolations (NREL 2011/2014/2024)
known_failure_modes: [Cu-finger-corrosion-encapsulant, Cu-finger-oxidation-damp-heat, EVA-acetic-acid-corrosion, finger-adhesion-loss-after-DH]
sources: [2014-nrel-pv-module-qualification-plus, 2018-pvtech-metallization-shj-cells-modules, 2022-arena-sundrive-copper-metallisation-demonstration, 2024-nrel-getting-ahead-of-curve-pv-assessment]
tags: [module, full-size, 60-cell, IEC-61215, residential]
created: 2026-04-26
updated: 2026-04-26
---

# Full-size module, 60-cell

**Slug:** `organisms/full-size-module-60-cell` · **Type:** organism (substrate / device under test)

## What it is

The 60-cell c-Si PV module — 60 cells in a 6 × 10 arrangement — is the residential and small-commercial rooftop standard format that dominated production from roughly 2010 through 2020. It is the canonical reference geometry for IEC 61215 and IEC 61730 qualification testing protocols (NREL's reliability literature in this corpus references it as the default full-size laminate for "module-level" tests). It enters this hypothesis as the field-deployed target format for plated-Cu SHJ modules and as the laminate against which mini-module accelerated-aging results must extrapolate.

## Geometry / format

- 60 cells in a 6 × 10 grid; cells were 156 mm × 156 mm (M0/M2-era) and later up to M6 (166 mm)
- Laminate dimensions: ~1.65 m × 1.0 m (industry-standard), ~19–22 kg
- Power class: ~250–340 W with c-Si (lower at the start of the era, higher with mono-PERC and SHJ)
- IEC 61215 / IEC 61730 type-test reference format — the framework by which damp-heat 1000 h, thermal cycling TC200, humidity-freeze HF10, UV preconditioning, and mechanical-load tests are defined for module qualification
- Industry adoption: dominant rooftop format ~2010–2020; gradually displaced by 72-cell utility formats and by larger M10/G12 cell designs from ~2020 onward, but still produced for residential

## Construction (where relevant)

- **Encapsulant:** EVA was the historical default; POE / EPE (polyolefin or co-extruded layers) increasingly used for n-type SHJ cells to avoid the acetic-acid corrosion pathway
- **Front glass:** 3.2 mm tempered low-iron solar glass with anti-reflection coating
- **Back layer:** opaque polymer backsheet (TPT/TPE) historically; glass-glass for bifacial
- **Interconnection:** Cu ribbon (typically tin-coated) or multibusbar Cu ribbon; for SHJ, often via ECA rather than soldering because of the ≤200 °C cell process budget
- **Edge frame:** anodised aluminium; junction box with bypass diodes on the rear

## Common pitfalls

- [[failure-modes/Cu-finger-corrosion-encapsulant]] — full-size laminate is the format in which the encapsulant-Cu corrosion pathway is ultimately certified (or rejected)
- [[failure-modes/Cu-finger-oxidation-damp-heat]] — long-finger Cu surfaces under field DH stress
- [[failure-modes/EVA-acetic-acid-corrosion]] — drives the move to POE / EPE for SHJ Cu modules
- [[failure-modes/finger-adhesion-loss-after-DH]] — loss surfaces as EL-dark cells / strings in field-aged 60-cell modules

## Citing sources

- [[sources/2014-nrel-pv-module-qualification-plus]] — IEC 61215 module qualification, 60-cell reference
- [[sources/2018-pvtech-metallization-shj-cells-modules]] — SHJ cell-and-module integration including 60-cell laminates
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — SunDrive Cu-plating demonstrator targeting 60/72-cell formats
- [[sources/2024-nrel-getting-ahead-of-curve-pv-assessment]] — NREL field-reliability assessment, 60-cell module class
