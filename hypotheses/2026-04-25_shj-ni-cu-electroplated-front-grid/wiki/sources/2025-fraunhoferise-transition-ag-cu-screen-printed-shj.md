---
type: source
id: 2025-fraunhoferise-transition-ag-cu-screen-printed-shj
source_type: paper
title: "Transition from Silver- to Copper-Based Screen Printed SHJ Solar Cells"
authors: ["Pingel, S.", "Maarouf, F.M.", "Wengenmeyr, N.", "Linse, M.", "Folcarelli, L.", "Schube, J.", "Hoffmann, S.", "Tepner, S.", "Huyeng, J.", "Lorenz, A.", "Clement, F."]
year: 2025
doi: "10.1016/j.solmat.2025.113593"
url: "https://www.sciencedirect.com/science/article/pii/S0927024825001473"
raw_path: raw/papers/2025-fraunhoferise-transition-ag-cu-screen-printed-shj.pdf
tags: [SHJ, AgCu-paste, Cu-paste, screen-printing, fine-line, silver-laydown, GridMaster-simulation, mini-module, cost-optimization, Fraunhofer-ISE]
---

# Transition from Silver- to Copper-Based Screen Printed SHJ Solar Cells

## Summary
Pingel et al. Sol. Energy Mater. Sol. Cells 2025 paper benchmarking 13 Ag and 7 AgCu low-T pastes plus pure Cu paste for SHJ on M6/M10 precursors. Key result: cells with 7.5 mg/W Ag (AgCu/AgCu front+rear) and below 5 mg/W (Ag front + Cu rear) demonstrated at module-relevant scale; cell efficiency maintained while bifaciality improved by 1%rel and Ag laydown cut by 63% vs reference. Extends [[2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] with a cost-optimization simulation (GridMaster) showing a 0.3–0.4%abs efficiency drop is the price of cost-optimal layouts at €1000/kg Ag — defining a "window of opportunity" for alternative low-Ag/Ag-free metallizations like NOBLE Cu plating. Confirms Cu paste high contact resistivity (ρc ≈ 5 mΩ·cm² for 80 µm fingers; ≈12 mΩ·cm² for 25 µm fingers) — far above the ≤2 mΩ·cm² target of the present hypothesis — meaning Cu paste is currently uncompetitive on fine fingers. Key reliability insight: Cu paste line resistance did NOT increase after 24-day air storage, so Cu oxidation is slower than feared at room temperature, but module-level damp-heat reliability still pending.

## Key claims
- Long-term Ag target per Zhang et al. 2021: 2 mg/W (vs 15.5 mg/W in 2023). Mid-term 5 mg/W "within reach in the next two years."
- AgCu paste screening: only AgCu-04 and AgCu-05 (~45% Ag) achieved RLINE ≈ 2 Ω/cm at wn = 30 µm and effective silver usage λESU > 50 cm²/(Ω·mg) — 2× better than best Ag pastes at wn = 24 µm. But these AgCu pastes had ρc 0.8–1.0 mΩ·cm², worse than Ag (typically <0.4 mΩ·cm²).
- Ag-paste fine-line capability: 11 of 13 pastes printable at wn ≥ 21 µm; 2 (Ag-07, Ag-10) printable at wn = 18 µm with RLINE < 5 Ω/cm.
- Cell batch 1 (M6 SHJ, Ag-03 vs AgCu-04): combining Ag on FS + AgCu on RS gave best 18BB simulated η. AgCu/AgCu cells reached mAg ≈ 7.5 mg/W (9BB measurement), 7 mg/W after pseudo-busbar correction.
- Cell batch 2 (Ag-01 FS + Cu-01 RS): wide-finger (80 µm) Cu RS gave only 0.1% efficiency drop vs Ag RS; narrow-finger (25 µm) Cu RS lost 0.6%abs efficiency — root cause: Cu ρc = 5 mΩ·cm² (80 µm) vs Ag-01 ρc ≈ 0.2 mΩ·cm². "Cu paste seems not yet ready for fine-line contacts due to high ρc."
- Cu paste line-resistance stability: NO significant change after 24 days room-temperature air storage — i.e. Cu finger oxidation in ambient is slower than catastrophic, but module-level damp-heat tests still pending.
- Cell batch 3 + module integration: half-cut SHJ cells in bifacial glass-glass + POE modules. Group 1 (reference 2.1/0.6 mm pitches) Ag laydown 21.1 mg/W vs Group 9 (1.0/1.0 mm pitches, fine-line) 7.9 mg/W — 62.6% reduction; module η rose 1%rel, Voc rose 6 mV, FF rose 0.5%abs, BFR (bifaciality) rose 1%abs.
- GridMaster cost-optimization (M10, 20-wire): cost-optimum is ~0.4%abs lower η than η-optimum and ~3 mg/W lower Ag — across both Ag and AgCu pastes, indicating substantial economic incentive to push fine-line printing or alternative metallizations like Cu plating.
- References Hatt 2019 NOBLE process, Limodio 2020 alternative-seed Cu plating, and acknowledges Sundrive, PV2+, Sunwell as commercial Cu-plating players.

## Methods used
- [[../methods/screen-printed-Ag-paste]] — primary technique; ASYS EKRA line.
- [[../methods/transfer-length-method]] — TLM-Scan setup from PV-Tools, for ρc, Rsh.
- [[../methods/IV-curve-measurement]] — HALM cell tester, 5BB/9BB/18BB extrapolation.
- [[../methods/EL-electroluminescence-imaging]] — module-level uniformity.
- [[../methods/four-point-probe-sheet-resistance]] — implicit (RGrid measurement).
- [[../methods/damp-heat-aging-1000h]] — flagged as next-step but not done in this paper.

## Reagents
- [[../reagents/low-T-Ag-paste-generic-SHJ-grade]] — 13 Ag pastes screened.
- New reagent flagged: AgCu (silver-coated-copper) paste — see `new_entities` (already flagged from Frasson 2024).
- [[../reagents/Cu-paste-low-temperature]] — Cu-01 paste (pure Cu) tested on RS.
- [[../reagents/ITO-transparent-conductive-oxide]] — TCO base.
- [[../reagents/POE-polyolefin-encapsulant]] — POE encapsulation in mini-modules.
- [[../reagents/EVA-encapsulant]] — comparator (not used here, but discussed).
- [[../reagents/multibusbar-Cu-ribbon]] — 18-wire interconnection simulated.

## Organisms / substrates
- [[../organisms/SHJ-cell-M6]] — full-cell experiments.
- [[../organisms/SHJ-cell-M10]] — GridMaster simulations on 182 mm.
- [[../organisms/mini-module-glass-glass]] — bifacial glass-glass POE half-cut modules characterized.

## Failure modes flagged
- [[../failure-modes/silver-supply-bottleneck]] — primary motivation; explicit roadmap to 2 mg/W.
- [[../failure-modes/Cu-finger-oxidation-damp-heat]] — Cu paste line resistance stable after 24 days air, but DH still pending.
- [[../failure-modes/FF-degradation-contact-resistance]] — Cu paste ρc 5 mΩ·cm² flagged as fine-line blocker.
- [[../failure-modes/Cu-LID-light-induced-degradation]] — implied general Cu-on-Si concern.
- [[../failure-modes/finger-adhesion-loss-after-DH]] — module-level reliability flagged as next priority.

## Supports / contradicts
- Supports: [[2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] (same Fraunhofer ISE team, builds on the fine-line Ag paste work)
- Supports: [[2024-siliconpv-novel-shj-metallization-architectures]] (Frasson AMAT — same conclusions on AgCu pastes' core-shell effectiveness; Fraunhofer ISE confirms with 7 different AgCu pastes)
- Cites and supports: [[2019-hatt-noble-shj-solrrl]] (NOBLE process as plating route)
- Provides the latest Ag-screen-print benchmark that NOBLE Ni-Cu plating must beat: [[2021-hatt-stable-cu-plated-shj-eupvsec]]
- Aligned with: [[2018-pv-tech-metallization-interconnection-bifacial-shj]] cost framework

## Notable quotes
- "The mid-term goal of 5 mg/W given in Ref. [5] is within reach and will likely be achieved in the next two years. The long-term goal of 2 mg/W is more challenging and will require a substantial improvement of the AgCu pastes or the application of pure Cu pastes."
- "The Cu paste seems not yet ready for fine-line contacts due to the high ρc."
- "The RLINE did not change significantly indicating that the bulk and surface of the pastes is not significantly oxidizing. This is already a good indication for the stability of the paste in a production environment but needs to be followed up by reliability tests on module level." — re: Cu paste 24-day air storage.
