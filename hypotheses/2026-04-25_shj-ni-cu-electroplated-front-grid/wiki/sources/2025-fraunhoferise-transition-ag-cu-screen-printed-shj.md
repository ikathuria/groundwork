---
type: source
id: 2025-fraunhoferise-transition-ag-cu-screen-printed-shj
source_type: paper
title: "Transition from Silver- to Copper-Based Screen Printed SHJ Solar Cells"
authors: ["Pingel, S.", "Maarouf, F. M.", "Wengenmeyr, N.", "Linse, M.", "Folcarelli, L.", "Schube, J.", "Hoffmann, S.", "Tepner, S.", "Huyeng, J.", "Lorenz, A.", "Clement, F."]
year: 2025
doi: 10.1016/j.solmat.2025.113593
url: https://publica.fraunhofer.de/bitstreams/40ff65fa-d57a-4a14-b285-3f2b643ed2de/download
raw_path: raw/papers/2025-fraunhoferise-transition-ag-cu-screen-printed-shj.pdf
tags: [SHJ, screen-printing, AgCu-paste, Cu-paste, low-T-paste, Fraunhofer, MIW2024]
created: 2026-04-26
updated: 2026-04-26
---

# Transition from Silver- to Copper-Based Screen Printed SHJ Solar Cells

**Pingel, S., Maarouf, F. M., Wengenmeyr, N., Linse, M., Folcarelli, L., Schube, J., Hoffmann, S., Tepner, S., Huyeng, J., Lorenz, A., Clement, F. (Fraunhofer ISE)** — *Solar Energy Materials and Solar Cells, 287, 113593, 2025*. DOI: 10.1016/j.solmat.2025.113593

## Summary

Fraunhofer ISE benchmarks 13 Ag and 7 Ag-coated-Cu (AgCu) low-temperature pastes plus pure Cu paste for SHJ screen printing on M6 (166 mm) industrial precursors, with the headline result that screen-printed AgCu fingers can be 35 µm wide with line resistance ~2 Ω/cm and silver laydown <8 mg/W (down from 13.9 mg/W reference). Glass-glass POE-encapsulated bifacial modules built from these cells were characterised — establishing the *non-plating* Cu route the hypothesis competes against. Crucially: contact resistivity on the best AgCu paste falls to 5–12 mΩ·cm² — *above* the hypothesis's ≤2 mΩ·cm² target, confirming that *paste* Cu cannot meet the spec while *plated* Cu (per NOBLE / SunDrive) can.

## Key claims

- 11 of 13 Ag pastes printed reliably at nominal opening 24 µm with line resistance 2–4 Ω/cm; only Ag-04 underperformed.
- AgCu pastes (35 %wt to 65 %wt Ag) printed at 30 µm nominal opening; AgCu-04 and AgCu-05 reach RLINE ~2 Ω/cm — comparable to LCT-Ag references.
- Effective silver-usage parameter λESU > 50 cm²/(Ω mg) for the best AgCu pastes — 2× improvement over best Ag pastes at the same opening.
- Specific Ag consumption demonstrated at 7.5 mg/W (Ag-only optimal layout) and below 5 mg/W when rear is metallised with pure Cu paste.
- Module integration: 8 mg/W Ag laydown on glass-glass POE-encapsulated SHJ half-cell modules (3 mm float glass, POE encapsulation, 16-wire interconnection); same efficiency level as reference Ag, improved bifaciality.
- Cost model: PCFprod = 1.3 production cost factor, Ag = 1000 €/kg, Cu = 458 €/kg; AgCu pastes are economically attractive at any Cu-content ratio with current Ag prices.
- Outlook: at the long-term Ag target of ≤2 mg/W (Zhang et al.), SHJ cannot rely on Ag-only screen printing — must shift to AgCu, Cu paste, or plated Cu.

## Methods used

- [[methods/screen-printed-Ag-paste]] — primary technology under test (paste screening on M6 SHJ precursors).
- [[methods/transfer-length-method]] — explicit ρc measurement using TLM-Scan setup (PV-Tools) on laser-separated stripes.
- [[methods/four-point-probe-sheet-resistance]] — Rsh measurement on the same TLM stripes.
- [[methods/IV-curve-measurement]] — HALM cell tester, 5BB and 9BB configurations; conductive chuck with black chuck Jsc calibration.
- [[methods/EL-electroluminescence-imaging]] — module characterisation with EL imaging.

## Reagents

- [[reagents/low-T-Ag-paste-generic-SHJ-grade]] — 13 Ag pastes screened (~92 %wt Ag content).
- [[reagents/low-T-Ag-paste-Solamet-PV21A]] — DuPont LCT-Ag exemplar in this class.
- [[reagents/Cu-paste-low-temperature]] — pure Cu LCT pastes (Cu-01) tested on the rear side.
- [[reagents/POE-polyolefin-encapsulant]] — module encapsulant (3 mm float glass / POE).
- [[reagents/ITO-transparent-conductive-oxide]] — SHJ TCO; 140 Ω/sq sheet resistance assumed in the simulation.
- [[reagents/EVA-encapsulant]] — referenced via prior literature as the alternative encapsulant; *not used* in the actual modules (POE chosen specifically for Cu-compatibility).

## Organisms / substrates

- [[organisms/SHJ-cell-M6]] — primary cell format (166 mm M6 industrial precursors).
- [[organisms/SHJ-cell-M10]] — used in the GridMaster simulation (182 mm).
- [[organisms/mini-module-glass-glass]] — half-cut bifacial glass-glass module configuration.
- [[organisms/full-size-module-72-cell]] — implied by the half-cut, 16-wire scaling.

## Failure modes flagged

- [[failure-modes/silver-supply-bottleneck]] — explicit driver: Ag must drop from 15.5 mg/W (2023) to ≤2 mg/W long-term per Zhang et al.
- [[failure-modes/Cu-finger-oxidation-damp-heat]] — paper notes "first testing shows good results for TOPCon and SHJ" but flags Cu oxidation as the manufacturability/reliability risk.
- [[failure-modes/Cu-diffusion-into-c-Si]] — explicitly listed as a Cu-paste risk: "cell performance degradation (due to Si base contamination)."
- [[failure-modes/FF-degradation-contact-resistance]] — central performance metric; AgCu paste ρc 5–12 mΩ·cm² documented.

## Supports / contradicts

- **Supports:** [[sources/2023-tepner-printing-tech-csi-review]] — same Fraunhofer ISE group; Pingel applies the screening framework Tepner & Lorenz set up.
- **Supports:** [[sources/2018-pv-international-metallization-shj]] — both confirm fine-line LCT-Ag is the moving SHJ baseline.
- **Contradicts:** [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — Pingel argues *paste* Cu is the cost-effective Ag-replacement; SunDrive argues *plated* Cu (no paste) is.
- **Contradicts:** the hypothesis's ≤2 mΩ·cm² target — paste-Cu ρc is 5–12 mΩ·cm², *above* the spec; only plated-Cu can hit it. This is one of the contradictions noted in `hypothesis.md` Pass-3 list.

## Notable quotes

> "The achieved grid fingers were characterized towards the line and contact resistance as well as the printed width. The most promising pastes with silver or silver-coated-copper particles allow printing of 35 μm narrow fingers with low line resistance of well below 10 Ω/cm." — *Abstract*

> "The use of Cu in metallization bears risks for i) cell performance degradation (due to Si base contamination) and ii) the manufacturability or module reliability (due to oxidation on the metal surface)." — *p. 1*

> "[Specific silver consumption] of 7.5 mg/W and even below 5 mg/W if the rear side was realized with a pure copper paste." — *Abstract*
