---
type: method
slug: screen-printed-Ag-paste
aliases: [SP Ag, low-T Ag screen print, fire-through Ag paste]
related_methods: [IV-curve-measurement, transfer-length-method, four-point-probe-sheet-resistance, electroplated-Ni-Cu-stack]
key_reagents: [low-T-Ag-paste-generic-SHJ-grade, low-T-Ag-paste-Solamet-PV21A, low-T-Ag-paste-Solamet-PV56S, Cu-paste-low-temperature]
known_failure_modes: [silver-supply-bottleneck, FF-degradation-contact-resistance, Jsc-loss-from-cap-stack-shading, Cu-finger-oxidation-damp-heat]
sources: [2014-rehman-nicu-plating-csi-review, 2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2022-arena-sundrive-copper-metallisation-demonstration, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-taiyangnews-heterojunction-technology-report, 2023-tepner-printing-tech-csi-review, 2024-itrpv-15th-edition-roadmap, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-lorenz-cutting-edge-metallization-shj-fraunhofer, 2024-siliconpv-novel-shj-metallization-architectures, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV, dupont-solamet-pv21a-tech-sheet, dupont-solamet-pv56s-data-sheet, pvtech-metallization-challenges-cell-manufacturing]
tags: [screen-printing, Ag-paste, low-temperature, comparator, fine-line, knotless-screen]
---

# Screen-Printed Ag Paste

## What it measures / does
Industry-standard contact metallization: a viscous Ag (or AgCu / Cu) paste is squeegee-pressed through a fine-mesh screen onto the cell surface, then thermally cured. For SHJ, low-temperature (<=200-230 C) cure pastes are used to preserve a-Si:H passivation; for PERC/TOPCon the paste is fire-through (peak ~800 C). It is the dominant incumbent metallization technology and the comparator the SHJ-Ni/Cu plating hypothesis must beat on cost, finger geometry, and reliability.

## When to use it
Always — as the comparator/control in any plated-Cu hypothesis. In the present SHJ-Ni/Cu hypothesis, screen-printed low-T Ag is the reference cell built on the same precursor batch; Pingel 2025 and Lorenz 2024 set the benchmark at 23.0-23.2% champion efficiency with 16-19 mg Ag laydown.

## Key parameters
- Cure: low-T pastes 200 C / 1 min (SHJ); fire-through 750-900 C ~5 s (PERC).
- Print speed: 200-300 mm/s for SHJ (Solamet PV42B claims to close gap to 400 mm/s for PERC).
- Finger width: 27 um (2023 ITRPV) -> 15 um (2034 target); knotless 0 deg screen, wn = 15-20 um demonstrated (Lorenz 2024).
- Bulk resistivity: low-T Ag paste 5.5 uOhm.cm (2018) -> <5 uOhm.cm (2025); ~3x pure Ag (1.58 uOhm.cm).
- Contact resistivity (rho_c): typically <0.4 mOhm.cm² for Ag on ITO; AgCu 0.8-1.0 mOhm.cm²; pure Cu paste 5-12 mOhm.cm² (Pingel 2025).
- Ag laydown: 2023 baseline 19 mg/W (SHJ M10); 16.3 mg/W champion (Lorenz 2024); 7.5 mg/W AgCu (Pingel 2025); long-term target 2 mg/W.
- Paste rheology: yield-stress and shear-thinning; viscosity 50-320 Pa.s.

## Common variants / alternatives
- [[electroplated-Ni-Cu-stack]] — the plated-Cu replacement under test in the present hypothesis.
- [[NOBLE-selective-Cu-plating]] — Fraunhofer ISE plating alternative.
- [[Cu-electroplating-acid-bath]] — direct Cu-on-TCO route (SunDrive).

## Things to watch for (failure modes)
- [[../failure-modes/silver-supply-bottleneck]] — PV consumes 18% of world Ag supply (ITRPV 2024); SHJ uses 2-3x PERC-level Ag.
- [[../failure-modes/FF-degradation-contact-resistance]] — fine-line tradeoff; pure Cu paste rho_c ~5-12 mOhm.cm² blocks <30 um fingers.
- [[../failure-modes/Jsc-loss-from-cap-stack-shading]] — central wn vs Jsc tradeoff Lorenz 2024 documents.
- [[../failure-modes/Cu-finger-oxidation-damp-heat]] — pure Cu paste fails 200-270 C thermal stability (Frasson 2024); module-level DH still pending for AgCu/Cu pastes.

## Sources
- [[2014-rehman-nicu-plating-csi-review]] — review using SP Ag as comparator throughout.
- [[2018-pv-international-metallization-shj]] — low-T paste resistivity history 18 -> 5.5 uOhm.cm; 16 um fine-line print on Asada mesh.
- [[2018-pv-tech-metallization-interconnection-bifacial-shj]] — Ag laydown trajectory 4BB-6BB; cost framework.
- [[2018-pvtech-metallization-shj-cells-modules]] — fine-line print 30 um wide, 30 mg Ag/side, 22.7% cell, 20% module.
- [[2022-arena-sundrive-copper-metallisation-demonstration]] — Ag SP control module from same precursor batch as 26.41% Cu-plated record.
- [[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — SCC paste reference and seed grid.
- [[2023-taiyangnews-heterojunction-technology-report]] — Solamet PV42B/PV43B paste; HJT print speed gap.
- [[2023-tepner-printing-tech-csi-review]] — definitive review; finger width 150 um -> <20 um (1980-2020).
- [[2024-itrpv-15th-edition-roadmap]] — finger width 27 -> 15 um, busbar count >=18 BB.
- [[2024-lachowicz-cu-plated-shj-aging-mini-modules]] — SCC seed grid + Cu plate three-step process.
- [[2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] — knotless screen, wn = 15 um, 23.2% / 16.3 mg Ag — current best Ag SP benchmark for SHJ.
- [[2024-siliconpv-novel-shj-metallization-architectures]] — AgCu-1 paste 21.94% on M2 SHJ; pure Cu paste fails 200-270 C.
- [[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — 13 Ag + 7 AgCu + 1 Cu paste benchmark; Cu paste rho_c 5-12 mOhm.cm² blocks fine-line.
- [[2025-yacouba-shj-silver-free-metallization-progPV]] — Cu SP both sides 22.4% avg, 23.08% champion (zero-Ag).
- [[dupont-solamet-pv21a-tech-sheet]] — high-T fire-through Ag paste TDS; comparator only.
- [[dupont-solamet-pv56s-data-sheet]] — solderable back-side Ag paste TDS.
- [[pvtech-metallization-challenges-cell-manufacturing]] — IMEC industry overview of SP Ag baseline.
