---
type: source
id: 2023-tepner-printing-tech-csi-review
source_type: paper
title: "Printing Technologies for Silicon Solar Cell Metallization: A Comprehensive Review"
authors: ["Tepner, S.", "Lorenz, A."]
year: 2023
doi: 10.1002/pip.3674
url: https://publica.fraunhofer.de/bitstreams/ea4578d0-c217-4f39-ba3e-43d902264a99/download
raw_path: raw/papers/2023-tepner-printing-tech-csi-review.pdf
tags: [screen-printing, fine-line, Ag-paste, SHJ, dispensing, review, Fraunhofer]
created: 2026-04-26
updated: 2026-04-26
---

# Printing Technologies for Silicon Solar Cell Metallization: A Comprehensive Review

**Tepner, S. and Lorenz, A. (Fraunhofer ISE)** — *Progress in Photovoltaics: Research and Applications, 2023*. DOI: 10.1002/pip.3674

## Summary

34-page open-access Fraunhofer ISE review of printing technologies for c-Si metallization — primarily flatbed screen printing (the industrial dominant), plus stencil, dispense, rotary, FlexTrail, and inkjet alternatives. Establishes the canonical fine-line trajectory: screen-printed finger widths reduced from ~150 µm (1980s) to <20 µm today. Defines the SHJ-specific constraint (~200–230 °C max process temperature → mandatory LCT-Ag pastes) and identifies the open challenge: how printing technologies will scale to ever-finer lines + lower Ag mass while passivated-contact cells (SHJ, TOPCon) gain market share. The reference establishing the Ag-screen-print baseline cost / line-width / Ag-mass that any plated-Cu replacement must beat.

## Key claims

- Flatbed screen printing has been the predominant industrial metallization for c-Si for >30 years; >97% of 2018 production share.
- Finger widths progression: ~150 µm (early 1980s) → ≤20 µm (2020+) via screen technology, paste rheology, and emulsion improvements.
- SHJ a-Si:H imposes a ≤200–230 °C maximum processing temperature → must use LCT pastes (lower bulk conductivity than fired pastes) and accept reduced contact-formation efficiency vs PERC firing.
- LCT-Ag pastes for SHJ must reach bulk resistivity below ~5×10⁻⁶ Ω·cm to keep Ag mass acceptable; this is the active R&D frontier 2020–2025.
- Dispensing, FlexTrail, and rotary printing emerge as throughput / fine-line alternatives to flatbed; not yet at industrial scale.
- Implicit comparison: every alternative metallization (Cu plating, Cu paste, Ag/Cu paste) must beat the moving cost-and-finger-width target set by screen printing's continuous improvement curve.

## Methods used

- [[methods/screen-printed-Ag-paste]] — central topic; fire-through and LCT pastes both reviewed.
- [[methods/electroplated-Ni-Cu-stack]] — referenced as a historical alternative ("electroplated Cu layer after screen printing of metal pastes" was the early SHJ workflow per the paper's history section).

## Reagents

- [[reagents/low-T-Ag-paste-generic-SHJ-grade]] — LCT-Ag pastes for SHJ; the central baseline.
- [[reagents/low-T-Ag-paste-Solamet-PV21A]] — DuPont Solamet PV21A is a frequently-cited LCT-Ag exemplar.
- [[reagents/low-T-Ag-paste-Solamet-PV56S]] — DuPont Solamet PV56S — fire-through Ag paste comparator.
- [[reagents/a-Si-H-passivation]] — sets the SHJ thermal-budget constraint.
- [[reagents/Cu-paste-low-temperature]] — emerging alternative discussed.

## Organisms / substrates

- [[organisms/monocrystalline-Si-wafer-n-type]] — SHJ context.
- [[organisms/monocrystalline-Si-wafer-p-type]] — PERC context throughout the historical section.
- [[organisms/SHJ-cell-M6]] — referenced as the workhorse SHJ format.

## Failure modes flagged

- [[failure-modes/silver-supply-bottleneck]] — explicit motivation for the entire review's fine-line trajectory; "reduced silver consumption" is one of the four key challenges named in the abstract.
- [[failure-modes/FF-degradation-contact-resistance]] — LCT Ag's higher bulk resistivity is the SHJ-specific pain point; section "Screen printing meets carrier-selective contacts" makes this explicit.
- [[failure-modes/a-Si-H-passivation-degradation]] — the ≤230 °C thermal budget exists precisely to avoid this failure mode.

## Supports / contradicts

- **Supports:** [[sources/2018-pv-international-metallization-shj]] — Geissbühler 2018 LCT-Ag bulk-resistivity numbers (5.5 µΩ·cm) sit on Tepner & Lorenz's 2008–2020 trajectory.
- **Supports:** [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — Faes et al. 2018 cost / mass figures are the snapshot Tepner & Lorenz extend to 2023.
- **Supports:** [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — Pingel 2025 (same Fraunhofer ISE group) builds on this review with experimental Ag-coated-Cu paste data; co-author A. Lorenz on both.
- **Contradicts:** [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — review concludes screen printing will remain dominant; SunDrive argues plated Cu can displace it. Contradiction is on industrial trajectory, not physics.

## Notable quotes

> "Until today, two particularly promising approaches for carrier-selective contacts have found their way to an industrial large-scale production. The silicon heterojunction (SHJ) solar cell concept … However, the temperature sensitivity of the a-Si:H layers limits the maximum processing temperature to 200–230 °C." — *Section 1.2*

> "Screen printing will again be the method of choice for metallization of SHJ solar cells on industrial scale." — *Section 1.2*

> "Published results of screen and stencil printed finger widths on silicon solar cells underline the progress that has been done in the last decade culminating in extremely narrow finger widths down to less than 20 μm today." — *Section 1.1*
