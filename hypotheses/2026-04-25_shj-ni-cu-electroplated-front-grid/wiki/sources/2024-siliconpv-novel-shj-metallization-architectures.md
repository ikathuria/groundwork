---
type: source
id: 2024-siliconpv-novel-shj-metallization-architectures
source_type: paper
title: "Pushing Heterojunction Technology Further: Novel Metallization Processes and Architectures"
authors: ["Frasson, N.", "Galiazzo, M."]
year: 2024
doi: "10.52825/siliconpv.v2i.1305"
url: "https://www.tib-op.org/ojs/index.php/siliconpv/article/view/1305"
raw_path: raw/papers/2024-siliconpv-novel-shj-metallization-architectures.pdf
tags: [SHJ, AgCu-paste, Ag-coated-Cu, reactive-Ag-ink, screen-printing, AMAT, Cu-oxidation, thermal-stability, M2-cell, G12]
---

# Pushing Heterojunction Technology Further: Novel Metallization Processes and Architectures

## Summary
Applied Materials Italia (Frasson & Galiazzo) SiliconPV 2024 paper benchmarking five low-T metallization pastes for SHJ cells: standard Ag micro, two AgCu (silver-coated-copper) formulations, reactive Ag particle-free ink, and Ag nano-size. Only AgCu-1 met print-quality requirements at production-relevant speeds. AgCu-1 reaches 21.94% on M2 SHJ at 200 mm/s, equivalent to Ag micro reference (21.95%) within statistical noise, while reducing Ag consumption from ~25.7 mg/W (G12 production data) to ~10 mg/W. Pure Cu paste fails thermal stability — 200°C exposure raises Rs by ~2.3 mΩ vs +0.1 mΩ for AgCu — confirming the necessity of an Ag shell in core-shell formulations to manage Cu oxidation. Implicit but key for the SHJ-Ni/Cu-plating hypothesis: shows that screen-printed AgCu can already cut Ag consumption substantially without plating, defining the moving target that plating must beat.

## Key claims
- Pastes screened: Ag micro (94% Ag), AgCu-1 (44% Ag), AgCu-2 (55% Ag, prototype), Ag particle-free (33%, prototype), Ag nano (>75%, prototype).
- AgCu-1 cell on M2 SHJ: η = 21.94%, FF = 79.77%, Rs = 2.38 mΩ, Voc = 727 mV at 20-min cure (Table 4) — statistically equivalent to Ag-micro reference (η = 21.95%, FF = 79.91%, Rs = 2.05 mΩ).
- Ag consumption: lab AgCu-1 used 233 mg vs 246 mg for Ag-micro on the same M2; on G12 production "average Ag consumption of 25.7 mg/W" projected to drop to 10 mg/W with AgCu — a 2.5× reduction from screen-print paste replacement alone.
- Pure-Cu paste fails the 200–270°C thermal stability test: ΔRs = +2.3 mΩ (200→230°C), +2.4 mΩ (230→270°C), with cells discolouring blue-green from oxidation. AgCu-1 ΔRs = +0.1 to +0.5 mΩ (same as Ag).
- Core-shell AgCu particles (Cu core, ~few-nm Ag shell): EDX detects only 0.3% Cu exposed at surface, confirming shell integrity.
- AgCu-1 and AgCu-2 morphology: spherical aggregates ~4.9 µm vs Ag-micro flake-shape ~8.4 µm — narrower fingers achievable.
- AgCu paste shorter cure (10 min) viable, vs 20 min for Ag micro.
- Earlier work (cited Frasson 2021) had reported pure-Cu metallization on SHJ with 0.8% efficiency drop and ≥40% module power loss after 200 thermal cycles — strong contradiction case study.

## Methods used
- [[../methods/screen-printed-Ag-paste]] — primary technology; AgCu/Ag-nano/particle-free variants.
- [[../methods/IV-curve-measurement]] — STC on AMAT Botticelli LED multi-spectral simulator.
- [[../methods/EL-electroluminescence-imaging]] — uniformity of cell printing.
- [[../methods/temperature-cycling-IEC61215-TC200]] — referenced for prior Cu-paste failure (40% power loss at 200 cycles).
- [[../methods/four-point-probe-sheet-resistance]] — line resistivity from dog-bone test pattern.

## Reagents
- [[../reagents/low-T-Ag-paste-generic-SHJ-grade]] — Ag micro reference.
- New reagent flagged: AgCu (silver-coated-copper) paste, core-shell particles — see `new_entities`.
- New reagent flagged: reactive Ag particle-free ink — see `new_entities`.
- [[../reagents/Cu-paste-low-temperature]] — pure-Cu paste tested and failing thermal stability.
- [[../reagents/ITO-transparent-conductive-oxide]] — TCO base.

## Organisms / substrates
- [[../organisms/SHJ-cell-M6]] — closest match (M2 156.75 mm pseudo-square wafer).
- [[../organisms/SHJ-cell-G12]] — explicitly cited for 25.7 mg/W production figure.

## Failure modes flagged
- [[../failure-modes/Cu-finger-oxidation-damp-heat]] — pure-Cu paste shows clear oxidation at 200–270°C in air.
- [[../failure-modes/Ni-Cu-line-resistance-rise-DH]] — quantified for Cu vs AgCu vs Ag (ΔRs).
- [[../failure-modes/silver-supply-bottleneck]] — explicitly framed (Fig. 7 with 1 TW production target).
- [[../failure-modes/FF-degradation-contact-resistance]] — slightly higher Rs for AgCu attributed to material properties.

## Supports / contradicts
- Supports: [[2018-pv-tech-metallization-interconnection-bifacial-shj]], [[2018-pv-international-metallization-shj]] (silver-reduction roadmap)
- Supports: [[2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] (parallel screen-print optimization)
- Direct precedent for: [[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] (Pingel et al. extend AgCu screening with similar findings)
- Cites: Verlinden 2020, Zhang 2021 (Ag/In/Bi terawatt sustainability)
- Provides the screen-printed-AgCu baseline against which plated Cu (NOBLE / Ni-Cu) must compete: [[2019-hatt-noble-shj-solrrl]], [[2021-hatt-stable-cu-plated-shj-eupvsec]]

## Notable quotes
- "Cu based metallization had -0.8% average difference in cell efficiency with respect to Ag-based SHJ solar cells due to increased grid resistance. Moreover, reliability test failures for Cu based SHJ modules have been experienced at module level due to Cu oxidation (Thermal Cycling reduces the module power up to 40% in 200 cycles)." — Section 2.1, p. 2.
- "AgCu 1 paste, with Cu core and Ag coated particles, seems to be a valid alternative to pure Ag paste by matching the electrical and temperature stability performance of the reference Ag." — Conclusions.
