---
type: organism
slug: mini-module-glass-glass
organism_type: module
external_id: 1–6 cell glass-glass laminate, bifacial
characteristics:
  - 1 cell (or 1 half-cell), 3-cell, or 6-shingle laminate between two glass sheets
  - No backsheet, no full module-edge frame; high perimeter-to-area ratio
  - Encapsulant typically POE (preferred for SHJ); EVA used as legacy comparator
  - Standard accelerated-aging vehicle for SHJ Cu-plating reliability work
  - 1-cell mini-modules represent the worst-case for damp-heat due to perimeter-dominated moisture ingress
  - Edge sealing (polyisobutylene) is the canonical mitigation when promoting to full-size DH compliance
known_failure_modes: [Cu-finger-corrosion-encapsulant, EVA-acetic-acid-corrosion, finger-adhesion-loss-after-DH, lateral-Cu-edge-migration, FF-degradation-contact-resistance, Cu-out-diffusion-through-cap-stack]
sources: [2019-karas-damp-heat-degradation-shj-cu, 2022-arena-sundrive-copper-metallisation-demonstration, 2022-karas-cu-outdiffusion-damp-heat, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-nrel-getting-ahead-of-curve-pv-assessment, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj]
tags: [mini-module, glass-glass, bifacial, accelerated-aging, damp-heat, edge-sealing, POE]
---

# Mini-module — glass-glass bifacial

## What it is
Small-area photovoltaic test laminate, typically 1–6 cells (or shingles), built as a glass-encapsulant-cell-encapsulant-glass stack with no backsheet. For SHJ Cu-plating reliability work this is the *primary* accelerated-aging vehicle — Karas (ASU/UNSW), Lachowicz (CSEM), and SunDrive all rely on glass-glass mini-modules for 1000–3500 h damp-heat campaigns.

## Standard dimensions / spec
- Geometry: 1 cell, 1 half-cell SmartWire, 3-cell strings (Karas), or 6-shingle strings (CSEM/Lachowicz).
- Typical wafer formats: M2 (156.75 mm), M6 (166 mm) full or half-cut.
- Encapsulant: POE preferred for SHJ (no acetic acid generation, low WVTR); EVA used as legacy comparator.
- Front + rear glass: 2.5–3.2 mm typical; bifacial by construction.
- Often *no edge sealing* in research configurations — deliberately the worst-case DH condition (high perimeter-to-area ratio).
- Interconnection: SmartWire (24-wire), conventional flat ribbon (4–6 BB), or ECA-bonded shingles.

## Common pitfalls / handling notes
- "1-cell mini-modules may represent the hardest condition for DH testing due to their high ratio of perimeter to module area" ([[2024-lachowicz-cu-plated-shj-aging-mini-modules]]) — failures here are *not* representative of full-size modules with edge sealing.
- Karas SIMS work shows EVA mini-modules accumulate ~3× more Cu at the surface than POE sister samples after 3500 h DH ([[2022-karas-cu-outdiffusion-damp-heat]]) — encapsulant choice dominates the result.
- CSEM SmartWire 1-half-cell M6 plated-Cu mini-modules: ~5% Pmax loss after 2700 h DH (3× IEC); SCC-only references collapse.
- SunDrive glass-glass bifacial M6 mini-modules: 3000 h DH (3× IEC) and 600 TC (3× IEC) with minimal degradation ([[2022-arena-sundrive-copper-metallisation-demonstration]]).
- EL imaging is the standard way to localise edge-initiated degradation in 1-cell mini-modules.
- ECA-bonded shingle mini-modules: TC-stable but DH still bottleneck (~3-4% Pmax after 1500 h, >2% FF after 2000 h).
- For the present hypothesis, mini-module DH 1000 h is the canonical screening test, with 2000+ h preferred to claim true 1× IEC compliance.

## Failure modes commonly associated
- `[[../failure-modes/Cu-finger-corrosion-encapsulant]]` — edge-initiated Cu mobility into encapsulant.
- `[[../failure-modes/EVA-acetic-acid-corrosion]]` — primary chemical driver; mitigated by POE.
- `[[../failure-modes/finger-adhesion-loss-after-DH]]` — Cu/cap/encapsulant interface degradation.
- `[[../failure-modes/lateral-Cu-edge-migration]]` — Cu spreading laterally from outdiffused fingers.
- `[[../failure-modes/FF-degradation-contact-resistance]]` — observed in DH on SCC-only and shingle controls.
- `[[../failure-modes/Cu-out-diffusion-through-cap-stack]]` — central Karas finding via SEM/EDS/SIMS.

## Sources
- `[[2019-karas-damp-heat-degradation-shj-cu]]` — 3-cell EVA mini-modules; pFF and J02 degradation; POE prevents.
- `[[2022-karas-cu-outdiffusion-damp-heat]]` — same mini-modules at 1000–3500 h with full SIMS / EDS / SEM cross-section.
- `[[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]]`, `[[2024-lachowicz-cu-plated-shj-aging-mini-modules]]` — SmartWire 1-half-cell M6 + 6-shingle M2 glass-glass POE mini-modules; 2700 h DH bench.
- `[[2022-arena-sundrive-copper-metallisation-demonstration]]` — 2× M6 half-cut bifacial glass-glass mini-modules; 3000 h DH.
- `[[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]]` — bifacial glass-glass POE half-cut SHJ mini-modules; 1%rel module-η gain.
- `[[2024-nrel-getting-ahead-of-curve-pv-assessment]]` — bifacial mini-module reliability gaps and PID-c/p protocols.
