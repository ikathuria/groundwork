---
type: source
id: 2024-lorenz-cutting-edge-metallization-shj-fraunhofer
source_type: paper
title: "Towards a Cutting-Edge Metallization Process for Silicon Heterojunction Solar Cells with Very Low Silver Laydown"
authors: ["Lorenz, A.", "Wenzel, T.", "Pingel, S.", "Sabet, M.S.", "Retzlaff, M.", "Clement, F."]
year: 2024
doi: "10.1002/pip.3808"
url: "https://onlinelibrary.wiley.com/doi/10.1002/pip.3808"
raw_path: raw/papers/2024-lorenz-cutting-edge-metallization-shj-fraunhofer.pdf
tags: [SHJ, screen-printing, fine-line, knotless-screen, finger-pitch, low-T-Ag-paste, Fraunhofer-ISE, silver-laydown, multi-wire]
---

# Towards a Cutting-Edge Metallization Process for Silicon Heterojunction Solar Cells with Very Low Silver Laydown

## Summary
Fraunhofer ISE Prog. PV 2024 paper showing how fine-line knotless screen-printing of low-T Ag paste can already deliver 23.2% champion-cell efficiency on SHJ at 16 mg Ag laydown per cell front side. Three iterative experiments: (1) knotless 0° vs angled 22.5° screen — knotless gives Δη = +0.1%abs by reducing finger shading; (2) finger pitch 1.3→1.0 mm (120→156 fingers) — FF gain +0.4%abs offset by Jsc loss; (3) nominal finger width 20→18→15 µm — finest screen still printable, Δη = +0.14%abs at 5 mg Ag saved. Key context for the SHJ-Ni/Cu hypothesis: screen-printed Ag is rapidly closing the gap, so any plated route must beat ~16 mg/Wp Ag laydown and 23.2% efficiency at production speed (300 mm/s).

## Key claims
- Champion SHJ cell: η = 23.2% with knotless screen 520×11×0°, 156 fingers, wn = 15 µm, 16.3 mg Ag laydown — 2 mg below reference (Group 1 angled screen, 120 fingers, 18.7 mg Ag).
- Experiment 1 (Table 1): knotless 0° screen vs angled 22.5° at wn = 20 µm: average shading width 27 ± 2.2 µm vs 28 ± 2.5 µm; finger height 7 µm both; cross-section 94 vs 100 µm²; knotless gives more uniform fingers (smaller variance) and Δη = +0.1%abs.
- Experiment 2: Finger pitch 1.3 mm (120 fingers) → 1.0 mm (156 fingers); ΔFF = +0.4%abs; Δjsc ≈ −0.25 mA/cm²; net Δη ≈ 0; Ag laydown rises 19→21 mg.
- Experiment 3 (Table 2): wn = 20/18/15 µm with knotless 0° screen — even 15 µm prints reliably; shading-finger width 27 → 26 → 23 µm; height 7 → 6 → 6 µm; cross-section 94 → 86 → 71 µm²; Ag laydown 21 → 20 → 16 mg.
- I-V improvements at wn=15 µm vs wn=20 µm: Δjsc ≈ +0.1 mA/cm² (less shading), Δη ≈ +0.14%abs.
- Cell-level numbers (Table 3, GridTouch with 5BB+busbar measurement): Group 1 (reference) Avg η = 23.02%, Best 23.25%, 18.7 mg Ag laydown. Group 2 (optimized) Avg 23.19%, Best 23.37%, 16.3 mg Ag.
- Used industrial SHJ precursors (157.35 × 157.35 mm) with TCO; max efficiency potential 23–24%.
- Cure: 220°C / 1 min on inline belt — fast, industrially realistic.
- Multi-wire / SmartWire interconnection (Fig. 1) reduces tolerable lateral finger resistance demands, enabling fine-line ≤20 µm fingers.

## Methods used
- [[../methods/screen-printed-Ag-paste]] — primary technique; Namics LCT paste, ASYS line.
- [[../methods/IV-curve-measurement]] — GridTouch industrial cell tester, 5BB + 9BB.
- [[../methods/four-point-probe-sheet-resistance]] — implicit in RGrid measurement.
- [[../methods/dark-IV-suns-Voc]] — pFF reported.

## Reagents
- [[../reagents/low-T-Ag-paste-generic-SHJ-grade]] — Namics LCT paste, named in text.
- [[../reagents/ITO-transparent-conductive-oxide]] — both faces of SHJ.
- [[../reagents/a-Si-H-passivation]] — SHJ stack (precursor max potential 23–24%).

## Organisms / substrates
- [[../organisms/SHJ-cell-M6]] — 157.35 × 157.35 mm full-size industrial precursors (closest canonical slug).

## Failure modes flagged
- [[../failure-modes/silver-supply-bottleneck]] — explicit motivation; Zhang 2021 cited (silver might be 90% of global Ag supply by 2030 in PV).
- [[../failure-modes/FF-degradation-contact-resistance]] — finger uniformity / mesh marks discussed; knotless reduces this.
- [[../failure-modes/Jsc-loss-from-cap-stack-shading]] — central trade-off in finger-width experiments.

## Supports / contradicts
- Supports: [[2024-siliconpv-novel-shj-metallization-architectures]] (Frasson 2024, parallel paste-side optimization)
- Supports: [[2018-pv-tech-metallization-interconnection-bifacial-shj]], [[2018-pv-international-metallization-shj]] (LCT-paste evolution data continued here)
- Provides the strict screen-printed Ag benchmark that any Ni-Cu-plating hypothesis must beat: [[2019-hatt-noble-shj-solrrl]], [[2021-hatt-stable-cu-plated-shj-eupvsec]]
- Direct precursor to: [[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] (same Fraunhofer ISE team, builds on these screens)

## Notable quotes
- "It is shown that even the smallest nominal width of wn = 15 μm can be printed with high quality, leading to an additional efficiency gain of Δη = +0.15%abs as well as a reduction of silver paste laydown by 5 mg." — Abstract.
- "Maximum efficiency of ηmax = 23.2% … This emphasizes the significance of consistent optimization of the screen-printing process in terms of cell performance and resource utilization for SHJ solar cells."
