---
type: source
id: 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules
source_type: paper
title: "Stability of Mini-Modules with Copper-Plated Heterojunction Solar Cells (MI Workshop slides)"
authors: ["Lachowicz, A.", "Badel, N.", "Barrou, A.", "Barth, V.", "Harrison, S.", "Frasson, N.", "Galiazzo, M.", "Zhao, J.", "Paviet-Salomon, B.", "Ballif, C."]
year: 2023
doi:
url: https://miworkshop.info/wp-content/uploads/2023/05/13-Minimodules_CopperMet_HJT_CSEM_AgataLachowicz.pdf
raw_path: raw/papers/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules.pdf
tags: [SHJ, Cu-plating, CSEM, mini-modules, damp-heat, smartwire, shingle, MI-workshop, EUPVSEC]
created: 2026-04-26
updated: 2026-04-26
---

# Stability of Mini-Modules with Copper-Plated Heterojunction Solar Cells (MI Workshop slides)

**Lachowicz, A., Badel, N., Barrou, A., Barth, V., Harrison, S., Frasson, N., Galiazzo, M., Zhao, J., Paviet-Salomon, B., Ballif, C.** — *MI Workshop 2023 (Neuchâtel)*. CSEM / CEA INES / AMAT.

## Summary

CSEM presentation slides on a self-aligned 3-step Cu-plating route for SHJ (printed seed-grid → dielectric mask deposition → Cu electrodeposition) and on aging tests of resulting mini-modules with Smartwire and shingle interconnections. Reports thermal-cycling, damp-heat, PID, and EL imaging out to 2700 h DH and 690 PTC; this is the companion to the 2024 EPJ-PV journal paper.

## Key claims

- 3-step self-aligned Cu electrodeposition: (1) screen-print seed-grid using copper-based paste at 200 °C, (2) PECVD dielectric layer over entire wafer surface (acts as plating mask), (3) Cu electrodeposition only on grid positions — exploiting that the dielectric layer is not continuous on paste particles, allowing current to pass and Cu to deposit selectively.
- Best M6 cell with silver-coated copper (SCC) seed-grid + dielectric + electrodeposited Cu, 9-busbar layout: η = 24.2 %, Voc = 742.4 mV, Jsc = 39.9 mA/cm², FF = 81.7 %, area 274.15 cm².
- Line resistance comparison: Ag reference paste 1.5 Ω/cm (919 µm² CS), Cu paste alone 95 Ω/cm (240 µm²), Cu paste + electrodeposited Cu 0.3 Ω/cm (1160 µm²) — i.e. plating on a Cu paste seed delivers 5× lower line R than the Ag reference.
- Smartwire mini-module DH degradation (M6 half-cell, polyolefin encapsulant, glass-glass): Cu-plated modules degrade ~5 % after 2700 h DH while SCC-paste-only references show stronger DH degradation; degradation initiates at the unsealed module edges (1-cell module = worst-case ratio of perimeter to module area).
- PTC stability: Cu-plated SCC seed module −1.2 % after 690 PTC cycles (mostly storage component, only −0.2 % attributable to PTC); SCC reference −1.4 %.
- PID stability: tested at 85 °C / 85 % RH + 1000 V or −1000 V, 2 × 96 h cycles, all modules stable.
- Shingle modules from M2 precursors with reduced Ag-paste laydown + electrodeposited Cu (∼20 µm thick): line resistance per shingle width drops from 0.43 Ω (Ag paste only) to 0.07 Ω (with plated Cu).
- Pattern-transfer printing (PTP) with pure Cu paste + Cu electrodeposition gives lines ~26 µm wide × 22 µm tall, contact resistivity on ITO of 1.5 mΩ·cm² with screen-printed TLM patterns.

## Methods used

- [[methods/Cu-electroplating-acid-bath]] — Cu electrodeposition through dielectric mask
- [[methods/screen-printed-Ag-paste]] — Ag (or SCC / Cu paste) seed-grid printing
- [[methods/damp-heat-aging-1000h]] — 85 °C / 85 % RH up to 2700 h on glass-glass mini-modules
- [[methods/temperature-cycling-IEC61215-TC200]] — 690 PTC cycles
- [[methods/EL-electroluminescence-imaging]] — EL maps to localise edge-onset DH degradation
- [[methods/IV-curve-measurement]] — Pmax / Voc / Isc / FF tracking through aging
- [[methods/transfer-length-method]] — TLM ρc on ITO (1.5 mΩ·cm² for Cu paste)

## Reagents

- [[reagents/Cu-paste-low-temperature]] — pure-copper paste used for PTP and screen printing
- [[reagents/low-T-Ag-paste-generic-SHJ-grade]] — SCC reference paste
- [[reagents/POE-polyolefin-encapsulant]] — polyolefin encapsulant in glass-glass modules
- [[reagents/electrically-conductive-adhesive-ECA]] — used for shingle interconnection (~3.5 mg per shingle)
- [[reagents/ITO-transparent-conductive-oxide]] — TCO under the seed grid
- [[reagents/multibusbar-Cu-ribbon]] — Smartwire interconnection (closest slug)

## Organisms / substrates

- [[organisms/SHJ-cell-M6]] — M6 industrial precursors for Smartwire modules
- [[organisms/SHJ-cell-M10]] — referred to in PTP scaling discussion (closest available slug for M2; treat as M-class precursors)
- [[organisms/mini-module-glass-glass]] — 1-cell glass-glass mini-module test vehicles

## Failure modes flagged

- [[failure-modes/Cu-finger-corrosion-encapsulant]] — DH degradation initiates at the module edge where humidity ingresses
- [[failure-modes/Cu-finger-oxidation-damp-heat]] — pure Cu paste oxidation needing an Al₂O₃ cover or capping
- [[failure-modes/FF-degradation-contact-resistance]] — high line resistance of Cu paste alone (95 Ω/cm) is fixed only after Cu electrodeposition

## Supports / contradicts

- **Supports:** [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — same dataset, journal paper; this presentation has additional EL and shingle data
- **Supports:** [[sources/2024-siliconpv-novel-shj-metallization-architectures]] — Frasson/Galiazzo (AMAT) co-authors; complementary industrial-perspective paper
- **Contradicts:** [[sources/2022-karas-cu-outdiffusion-damp-heat]] — Karas (EVA encapsulant) sees significant Cu outdiffusion / SIMS Cu in c-Si; Lachowicz (POE encapsulant + thin TCO + dielectric mask) sees much milder DH effects, isolated to module edges

## Notable quotes

> "5% degradation of modules with copper after 2700 h damp-heat / To re-test / with another materials." — *slide 7*

> "Pure copper paste can be printed directly on the cell surface since thin conductive oxides are excellent barriers against copper diffusion." — *slide 4*

> "1-cell mini-modules: worst case for testing DH degradation? Humidity ingress from (unsealed) module edges close to the cell." — *slide 8*
