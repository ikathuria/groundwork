---
type: source
id: 2024-lorenz-cutting-edge-metallization-shj-fraunhofer
source_type: paper
title: "Towards a cutting-edge metallization process for silicon heterojunction solar cells with very low silver laydown"
authors: ["Lorenz, A.", "Wenzel, T.", "Pingel, S.", "Salimi Sabet, M.", "Retzlaff, M.", "Clement, F."]
year: 2024
doi: 10.1002/pip.3808
url: https://publica-rest.fraunhofer.de/server/api/core/bitstreams/92fcce16-5cd9-4a24-a58b-b56965b88fc4/content
raw_path: raw/papers/2024-lorenz-cutting-edge-metallization-shj-fraunhofer.pdf
tags: [SHJ, screen-printing, Ag-low-laydown, fine-line, knotless-screen, fraunhofer-ise, baseline-Ag]
created: 2026-04-26
updated: 2026-04-26
---

# Towards a cutting-edge metallization process for silicon heterojunction solar cells with very low silver laydown

**Lorenz, A., Wenzel, T., Pingel, S., Salimi Sabet, M., Retzlaff, M., Clement, F.** — *Progress in Photovoltaics: Research and Applications, 32, 655–663 (2024)*. DOI: 10.1002/pip.3808

## Summary

Fraunhofer ISE journal paper pushing the screen-printed Ag baseline for SHJ to its current limit through (i) knotless fine-mesh screens, (ii) finer finger pitch (120 → 156 fingers, 1.3 → 1.0 mm), and (iii) nominal finger widths down to 15 µm. Champion cells reach η = 23.2 % with average Ag laydown of 16.3 mg per cell — the cost target the plated Cu hypothesis must beat. Sets the screen-printed Ag SHJ benchmark for the hypothesis success criterion on Ag reduction.

## Key claims

- Best optimised group (knotless 520 × 11 × 0° screen, 1.0 mm pitch, 156 fingers, 15 µm nominal width): average η = 23.19 %, best cell η = 23.37 %, Voc = 738.0–739.2 mV, FF = 81.98–82.44 %, Jsc = 38.33–38.35 mA/cm², Ag laydown = 16.3 mg per cell.
- Reference (520 × 11 × 22.5°, 1.3 mm pitch, 120 fingers, 20 µm nominal): average η = 23.02 %, Ag laydown 18.7 mg.
- Total Δη = +0.17 %abs gain from optimisation, with Ag laydown reduced by ~2 mg per cell.
- Knotless screen alone gives Δη = +0.1 %abs (Δjsc = +0.056 mA/cm² from reduced shading width Δwf ≈ 1.3 µm); finger uniformity also improved (lower variance in wf, hf, Af).
- Reducing nominal finger width 20 → 18 → 15 µm yields shading width decreasing 26 → 23 µm and Ag laydown decreasing 21 → 16 mg, with Δη = +0.14 %abs gain from less shading.
- Fine-line printing with low-T paste below 20 µm nominal width is achievable with industrial knotless screens; "even the smallest nominal finger width of wn = 15 µm can be printed reliably and with good visual quality."
- Predicted goal of <5 mg/Wp for SHJ "seems to be within reach" via fine-line printing combined with low-T pastes — Lorenz's optimised cell laydown converts to roughly 4.4 mg/Wp at 23.2 % efficiency on a 244 cm² M2 cell.

## Methods used

- [[methods/screen-printed-Ag-paste]] — knotless 520 wires/in fine-mesh screen, 11 µm wire, 13 µm EOM, low-T paste (Namics)
- [[methods/IV-curve-measurement]] — GridTouch industrial cell tester, separately measured Rgrid using added busbars
- [[methods/four-point-probe-sheet-resistance]] — separate dual-print 5-busbar test for accurate Rgrid

## Reagents

- [[reagents/low-T-Ag-paste-generic-SHJ-grade]] — Namics low-T Ag paste used throughout, cured 220 °C / 1 min
- [[reagents/ITO-transparent-conductive-oxide]] — TCO substrate on industrial SHJ precursors

## Organisms / substrates

- [[organisms/SHJ-cell-M6]] — industrially prefabricated SHJ cells (157.35 × 157.35 mm) with TCO on both sides, no metallization (closest slug to M2 / M6 industrial SHJ)

## Failure modes flagged

- [[failure-modes/Jsc-loss-from-cap-stack-shading]] — finger shading width is the dominant Jsc lever
- [[failure-modes/FF-degradation-contact-resistance]] — Rgrid optimisation requires fine balance between shading and series resistance
- [[failure-modes/silver-supply-bottleneck]] — explicit motivator: silver consumption could reach 90 % of global annual production by 2030 if untreated

## Supports / contradicts

- **Supports:** [[sources/2025-yacouba-shj-silver-free-metallization-progPV]] — Yacouba's silver-free path complements Lorenz's silver-low path
- **Supports:** [[sources/2024-siliconpv-novel-shj-metallization-architectures]] — Frasson/Galiazzo also push fine-line / AgCu screen printing
- **Contradicts:** [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — Hatt argues plating is the long-term path because screen printing has higher ρL and ρc; Lorenz argues fine-line screen printing can stay competitive at very low Ag laydown

## Notable quotes

> "Compared to the reference group without optimization, this corresponds to a gain of Δη = +0.17 %abs, which comes along with an additional decrease of the silver paste laydown by approximately 2 mg." — *Abstract*

> "Using fine-mesh screens to print very fine contacts, even the predicted goal to reduce the silver consumption below 5 mg/Wp seems to be within reach." — *§1 Introduction*

> "Surprisingly, it is possible to print even the grid layout with a very small nominal finger width of wn = 15 µm reliably and with good visual quality using the given high-performance screen specification and LT silver paste." — *§2.3 Variation of nominal finger width*

> "Based on the projected growth of installed PV capacity in the coming years, the silver consumption of the PV industry could increase to up to 90% of the global annual production volume until 2030." — *§1 Introduction*
