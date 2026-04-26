---
type: source
id: 2023-tepner-printing-tech-csi-review
source_type: paper
title: "Printing Technologies for Silicon Solar Cell Metallization: A Comprehensive Review"
authors: ["Tepner, S.", "Lorenz, A."]
year: 2023
doi: "10.1002/pip.3674"
url: "https://onlinelibrary.wiley.com/doi/10.1002/pip.3674"
raw_path: raw/papers/2023-tepner-printing-tech-csi-review.pdf
tags: [review, screen-printing, fine-line, paste-rheology, contact-formation, SHJ, TOPCon, low-T-paste, alternative-printing]
---

# Printing Technologies for Silicon Solar Cell Metallization: A Comprehensive Review

## Summary
Definitive 30-page Tepner & Lorenz (Fraunhofer ISE) review (Prog. PV 2023) of printing technologies for c-Si metallization. Comprehensive history of flatbed screen printing (1975–2023), the physics of contact formation (fire-through Ag pastes vs low-T pastes), screen-print process mechanics (squeegee, knotless mesh, EOM), paste rheology/yield-stress requirements, and an exhaustive comparison of alternative printing approaches: stencil, dispensing, FlexTrail, rotary-screen, inkjet/aerosol-jet. Provides the canonical fine-line plot showing screen-printed finger widths shrinking from 150 µm in 2008 to <20 µm in 2020, and explicitly addresses the metallization options for SHJ (low-T pastes) and tandem (sub-150°C cure). Provides the benchmark that any alternative SHJ metallization (including Ni-Cu plating) must compete against; flags screen-printing as the likely default for at least the next decade.

## Key claims
- Screen-printed finger width has dropped from ~150 µm (1980s) to <20 µm (2020) on c-Si solar cells (Fig. 1A).
- For SHJ: temperature limit ~200–230°C necessitates low-T (LT) curing pastes; SHJ market share expected to grow rapidly.
- Maximum tolerable lateral finger resistance RL,max for rs,f ≤ 0.1 Ω·cm² (Table 1):
  - Busbarless / multiwire 30 wires: 30.9 Ω/cm
  - 18 wires: 11.1 Ω/cm
  - 12 wires: 4.9 Ω/cm
  - 6BB H-pattern: 1.3 Ω/cm
  - 5BB: 0.9; 4BB: 0.6; 3BB: 0.3 Ω/cm.
- Confirms triangular finger profile is theoretically optimal for shading reduction; current screen-prints are Gaussian/parabolic.
- Paste rheology — yield-stress and shear-thinning behavior — is decisive for fine-line printability; details DASH analysis software developed at Fraunhofer ISE.
- Screen technology evolution: knotless screens (mesh angle 0°) substantially reduce mesh-marks and lateral finger resistance vs angled (22.5°) screens, particularly important for ≤20 µm fingers.
- Reviews fire-through Ag paste contact formation chemistry (glass frit etching SiNx, Ag colloids forming via crystallites — Schubert model) — relevant to homojunctions, not SHJ.
- Alternative printing approaches reviewed for SHJ: dispensing, FlexTrail, rotary screen-printing, all targeting <5 mg/Wp.
- Shingled-cell concept (originating 1957, revived mid-1990s): high lateral conductivity required from the cell stripe.

## Methods used
- [[../methods/screen-printed-Ag-paste]] — central topic.
- [[../methods/IV-curve-measurement]] — implicit; benchmark methodology.
- [[../methods/transfer-length-method]] — discussed for ρc characterization.
- [[../methods/four-point-probe-sheet-resistance]] — implicit.
- [[../methods/EQE-measurement]] — discussed for shading characterization.

## Reagents
- [[../reagents/low-T-Ag-paste-generic-SHJ-grade]] — extensively reviewed.
- [[../reagents/low-T-Ag-paste-Solamet-PV21A]] — implicit (DuPont/Solamet line).
- [[../reagents/low-T-Ag-paste-Solamet-PV56S]] — implicit Solamet PV56S referenced.
- [[../reagents/multibusbar-Cu-ribbon]] — multi-wire/SmartWire context.
- [[../reagents/EVA-encapsulant]] — module-level discussion.

## Organisms / substrates
- [[../organisms/SHJ-cell-M6]] — SHJ application discussed.
- [[../organisms/monocrystalline-Si-wafer-p-type]] — PERC application.
- [[../organisms/monocrystalline-Si-wafer-n-type]] — TOPCon, SHJ application.

## Failure modes flagged
- [[../failure-modes/silver-supply-bottleneck]] — central context for review's relevance going forward.
- [[../failure-modes/FF-degradation-contact-resistance]] — extensively discussed via RL/ρc trade-offs.
- [[../failure-modes/Jsc-loss-from-cap-stack-shading]] — finger-shape physics of shading.

## Supports / contradicts
- Supports: [[2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] (same authorship line; the 2024 paper executes recommendations from this review)
- Supports: [[2024-siliconpv-novel-shj-metallization-architectures]] (paste rheology methodology aligned)
- Supports: [[2018-pv-tech-metallization-interconnection-bifacial-shj]], [[2018-pv-international-metallization-shj]]
- Foundational printing-tech context for: [[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]]
- Provides the wider screen-print benchmark for plated-Cu work: [[2019-hatt-noble-shj-solrrl]], [[2021-hatt-stable-cu-plated-shj-eupvsec]]

## Notable quotes
- "Modern high-efficiency solar cells with a full size format of 156 mm × 156 mm or more usually have a comparatively high current, which induces substantial resistive power losses on module level."
- "The optical quality of the contact fingers (considering the actual reflection losses in the module) is referred to as effective or shading-relevant finger width wf,eff."
