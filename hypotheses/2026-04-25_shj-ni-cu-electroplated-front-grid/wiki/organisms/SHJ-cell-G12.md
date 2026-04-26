---
type: organism
slug: SHJ-cell-G12
organism_type: cell
source: large-format SHJ pilots and mass-production lines (Trina Solar, Tongwei, Huasun, Astronergy, SunDrive)
external_id: ITRPV G12 (210 mm pseudo-square / full-square)
characteristics:
  - silicon heterojunction (SHJ) cell on n-type CZ c-Si wafer in G12 format
  - 210 mm × 210 mm pseudo-/full-square, ~441 cm² wafer area
  - the largest mass-produced cell format; introduced by Trina ~2020 (TOPCon/PERC) and adopted for SHJ from ~2022
  - typical Isc ~17–18 A; cell power ~10.0–11.0 W at 23.5–25 % efficiency
  - SunDrive's ARENA Cu-plating demonstrator and Trina's bifacial SHJ records use G12
  - large-format poses harder challenges for plated-Cu finger uniformity, current crowding, and mini-module DH testing
known_failure_modes: [Cu-diffusion-into-c-Si, Cu-finger-corrosion-encapsulant, Cu-finger-oxidation-damp-heat, FF-degradation-contact-resistance, finger-adhesion-loss-after-DH, Jsc-loss-from-cap-stack-shading, non-reproducibility-in-solar-cell-claims, silver-supply-bottleneck]
sources: [2022-arena-sundrive-copper-metallisation-demonstration, 2023-taiyangnews-heterojunction-technology-report, 2024-itrpv-15th-edition-roadmap, 2024-siliconpv-novel-shj-metallization-architectures, notion-systems-solar-inkjet-overview]
tags: [SHJ, cell, G12, n-type, heterojunction, large-format]
created: 2026-04-26
updated: 2026-04-26
---

# SHJ cell, G12 (210 mm) format

**Slug:** `organisms/SHJ-cell-G12` · **Type:** organism (substrate / device under test)

## What it is

A silicon heterojunction (SHJ) cell built on a 210 mm pseudo- or full-square n-type c-Si wafer. G12 is the largest mass-produced cell format in commercial PV — introduced by Trina Solar around 2020 (initially for TOPCon / PERC) and adopted for SHJ from roughly 2022 onward. SunDrive's ARENA Cu-plating demonstrator and Trina's bifacial SHJ-related records have used G12; ITRPV's 15th Edition (2024) tracks G12 as the high-current end of the wafer-format roadmap.

## Geometry / format

- Wafer: 210 mm × 210 mm pseudo-square (or full square), ~297 mm diagonal
- Wafer area ≈ 441 cm² (~33 % larger than M10)
- Wafer thickness: 130–160 µm for SHJ
- Front grid: 12–24 busbars / SmartWire; finger pitch ≤ 1.0 mm to keep series-resistance manageable at high current
- Power class: ~10.0–11.0 W at 23.5–25 % efficiency
- Short-circuit current Isc: ~17–18 A — the highest-current cell format in production; drives the most aggressive plated-finger cross-section and adhesion requirements
- Industry adoption: SHJ on G12 from ~2022; the limiting format for plated-Cu uniformity (bath agitation, current density gradients, resist patterning) and for mini-module DH chambers (footprint)

## Construction (where relevant)

- a-Si:H + ITO chemistry identical to M6/M10
- The challenge specific to G12 is electrochemical: maintaining uniform Cu plating thickness and finger height across a 297 mm diagonal demands careful bath fluid dynamics and current-distribution design (Atotech and SunDrive process notes)
- Mini-modules built with a single G12 cell (or a quartered G12) need custom tooling; full-size laminates with G12 cells dominate utility-scale modules

## Common pitfalls

- [[failure-modes/Cu-diffusion-into-c-Si]] — barrier requirements unchanged with format
- [[failure-modes/Cu-finger-oxidation-damp-heat]] — longer finger paths increase exposed Cu
- [[failure-modes/Cu-finger-corrosion-encapsulant]] — increased finger-encapsulant interface area
- [[failure-modes/FF-degradation-contact-resistance]] — high current makes ρc and finger resistance tolerances tighter than on M6/M10
- [[failure-modes/finger-adhesion-loss-after-DH]] — longer fingers and more thermal stress per cycle
- [[failure-modes/Jsc-loss-from-cap-stack-shading]] — G12 designs trade more / finer fingers vs Jsc shading; plated narrow fingers are a key competitive lever
- [[failure-modes/non-reproducibility-in-solar-cell-claims]] — G12 record claims are particularly sensitive to active-area definition and certification disputes (NREL chart conventions)
- [[failure-modes/silver-supply-bottleneck]] — per-W Ag consumption on G12 SHJ is the steepest in the lineup, sharpening the cost case for Cu

## Citing sources

- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — SunDrive ARENA G12 Cu-plating demonstrator
- [[sources/2023-taiyangnews-heterojunction-technology-report]] — industry G12 SHJ adoption snapshot
- [[sources/2024-itrpv-15th-edition-roadmap]] — ITRPV G12 wafer-format roadmap
- [[sources/2024-siliconpv-novel-shj-metallization-architectures]] — novel SHJ architectures including G12 plated grids
- [[sources/notion-systems-solar-inkjet-overview]] — inkjet patterning scalability on G12
