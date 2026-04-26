---
type: source
id: 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules
source_type: paper
title: "Stability of Minimodules with Copper Plated Heterojunction Solar Cells"
authors: ["Lachowicz, A.", "Badel, N.", "Barrou, A.", "Barth, V.", "Harrison, S.", "Frasson, N.", "Galiazzo, M.", "Zhao, J.", "Paviet-Salomon, B.", "Ballif, C."]
year: 2023
doi: null
url: null
raw_path: raw/papers/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules.pdf
tags: [SHJ, copper-plating, smartwire, shingle, damp-heat, thermal-cycling, PID, MIW-2023, conference, edge-sealing]
---

# Stability of Minimodules with Copper Plated Heterojunction Solar Cells

## Summary
CSEM/CEA-INES/AMAT presentation at MIW 2023 (Module International Workshop, Neuchâtel, May 2023) — the conference precursor to [[2024-lachowicz-cu-plated-shj-aging-mini-modules]]. Self-aligned 3-step Cu electrodeposition on SHJ (seed-grid printing → PECVD dielectric mask → Cu electrodeposition). SmartWire mini-modules (1 half-cell, M6 industrial HJT precursors, polyolefin glass-glass) and shingle mini-modules (M2 cells, 6 shingles, ECA-bonded) are aged through TC, DH (3× IEC = 3000 h) and PID (2× IEC = 192 h). SmartWire modules with copper show 0.2% PTC degradation after 690 cycles vs 1.4% for SCC reference; PID is fully stable at ±1000 V. DH is the bottleneck: copper modules degrade ~5% Pmax after ~2700 h (better than SCC-only references, which collapse), with degradation initiating at unsealed edges. Shingle modules show <0.5% TC loss after 200 cycles and ~3-4% Pmax loss after 1500 h DH. Pattern-transfer-printing demos a 26 mm pad-to-pad line resistance of 0.18 Ω with pure Cu paste + electrodeposited Cu, vs 1.5 Ω for SCC paste.

## Key claims
- 3-step plating process: ① seed-grid print + cure (200 °C), ② dielectric layer deposition over the wafer, ③ Cu electrodeposition through paste-particle-induced voids in the dielectric (slide 3).
- Line resistance comparison (slide 4): Ag reference 5.3 µΩ·cm specific resistivity (1.5 Ω/cm), Cu paste alone 27 µΩ·cm (95 Ω/cm), Cu paste + plated Cu 2.0 µΩ·cm (0.3 Ω/cm).
- Best champion plated cell on M6 industrial HJT precursor (9-busbar layout, 274.15 cm²): 24.2% efficiency, 81.7% FF, 742.4 mV Voc, 39.9 mA/cm² Jsc (slide 5).
- SmartWire 1-half-cell M6 modules in glass-glass POE: PTC -0.2% after 690 cycles (vs -1.4% SCC ref); PID stable through 2× 96 h at +1000 V and -1000 V.
- DH on SmartWire: SCC-only modules degrade strongly (FF dominant); copper modules degrade ~5% Pmax after 2700 h, with EL revealing edge-initiated damage in 1-cell modules (slides 7-8). Hypothesis: 1-cell modules are the worst-case for DH due to high perimeter-to-area ratio.
- Shingle modules (M2-based, 6 shingles per string, ECA, glass-glass): TC -0.5% after 200 cycles, ~3-4% Pmax loss after 1500 h DH (slide 11). Line resistance per shingle width: 0.43 Ω as-printed (Ag paste) vs 0.07 Ω after Cu plating (slide 10).
- Pattern transfer printing: 26.1 µm × 21.9 µm Cu line achievable; pad-to-pad resistance over 26 mm: 0.18 Ω (Cu + plated Cu) vs 5.1 Ω (Cu paste alone) vs 1.5 Ω (SCC paste). Contact resistance of paste on TCO ≈ 1.5 mΩ·cm² from prior screen-printed TLM (slide 12).

## Methods used
- [[../methods/screen-printed-Ag-paste]] — SCC reference and seed-grid
- [[../methods/Cu-electroplating-acid-bath]] — selective electrodeposition through dielectric voids
- [[../methods/damp-heat-aging-1000h]] — extended to 2700 h (3× IEC)
- [[../methods/temperature-cycling-IEC61215-TC200]] — 690 cycles SmartWire, 200 shingle
- [[../methods/transfer-length-method]] — referenced for prior contact-resistance measurement (1.5 mΩ·cm²)
- [[../methods/EL-electroluminescence-imaging]] — module health imaging
- [[../methods/four-point-probe-sheet-resistance]] — Kelvin probes for line resistance

## Reagents
- [[../reagents/ITO-transparent-conductive-oxide]] — thin ITO + dielectric for Indium reduction
- [[../reagents/POE-polyolefin-encapsulant]] — glass-glass module encapsulation
- [[../reagents/electrically-conductive-adhesive-ECA]] — ~3.5 mg per shingle, cured at 150 °C
- [[../reagents/Cu-paste-low-temperature]] — pure Cu paste from Namics; SCC paste also evaluated
- [[../reagents/multibusbar-Cu-ribbon]] — SmartWires with In-free LMPA solder

## Organisms / substrates
- [[../organisms/SHJ-cell-M6]] — industrial HJT precursors for SmartWire
- [[../organisms/mini-module-glass-glass]] — 1-cell SmartWire and 6-shingle modules

## Failure modes flagged
- [[../failure-modes/Cu-finger-corrosion-encapsulant]] — edge-initiated DH damage
- [[../failure-modes/Ni-Cu-line-resistance-rise-DH]] — possible contributor to FF loss
- [[../failure-modes/FF-degradation-contact-resistance]] — observed in DH
- [[../failure-modes/finger-adhesion-loss-after-DH]] — referenced as a concern motivating edge sealing

## Supports / contradicts
- Supports: [[2024-lachowicz-cu-plated-shj-aging-mini-modules]] (the journal version of this work)
- Supports: [[2021-hatt-stable-cu-plated-shj-eupvsec]] (Cu plating on SHJ feasible)
- Supports: [[2018-pv-tech-metallization-interconnection-bifacial-shj]], [[2018-pv-international-metallization-shj]]
- Supports: [[2024-fraunhoferise-photovoltaics-report]] (industry transition narrative)

## Notable quotes
- "Pure copper paste can be printed directly on the cell surface since thin conductive oxides are excellent barriers against copper diffusion." — slide 4
- "5% degradation of 1-cell-modules with dielectric layer + copper" after 3× IEC DH — slide 8
- "Good stability after 200 TC and 1500 h DH, test ongoing" — slide 11 (shingle modules)
- "Further line width reduction to <20 µm feasible and more triangular shape with conformal plating" — slide 13
