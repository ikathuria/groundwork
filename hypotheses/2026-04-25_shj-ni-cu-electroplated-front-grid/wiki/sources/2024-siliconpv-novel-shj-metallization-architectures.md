---
type: source
id: 2024-siliconpv-novel-shj-metallization-architectures
source_type: paper
title: "Pushing Heterojunction Technology Further: Novel Metallization Processes and Architectures"
authors: ["Frasson, N.", "Galiazzo, M."]
year: 2024
doi: 10.52825/siliconpv.v2i.1305
url: https://www.tib-op.org/ojs/index.php/siliconpv/article/download/1305/2486
raw_path: raw/papers/2024-siliconpv-novel-shj-metallization-architectures.pdf
tags: [SHJ, AgCu-paste, copper-paste, screen-printing, AMAT, SiliconPV, industrial-perspective, reliability, oxidation]
created: 2026-04-26
updated: 2026-04-26
---

# Pushing Heterojunction Technology Further: Novel Metallization Processes and Architectures

**Frasson, N., Galiazzo, M.** — *SiliconPV 2024 Conf. Proc. (TIB Open Publishing)*. DOI: 10.52825/siliconpv.v2i.1305

## Summary

Applied Materials Italia industrial-perspective survey of low-Ag and Ag-free SHJ metallization pastes — Ag micro-size reference, AgCu (Cu core / Ag shell), Ag particle-free reactive ink, Ag nano-size — printed and characterised on M2 SHJ wafers. Confirms AgCu (Cu-Ag core-shell) as the only paste with production-ready printability and matches Ag reference efficiency, while pure-Cu pastes fail reliability tests due to oxidation. Industrial complement to the academic Cu-plating literature.

## Key claims

- AgCu 1 paste (44 wt % Ag, Cu-Ag core-shell) reached η = 21.94 % at 20-min curing on M2 SHJ vs. 21.95 % for the Ag-micro-size reference — i.e. statistically indistinguishable cell efficiency.
- Ag laydown / consumption: Ag reference at 46.4 mg/W on M2 lab cells, AgCu 1 at 19.3 mg/W (~58 % Ag reduction); on customer G12 SHJ production data, AgCu projects to 10 mg/W vs. Ag at 25.7 mg/W.
- Reliability testing (10 min ovenings at increasing T): Ag micro-size and AgCu 1 show only +0.1 to +0.5 mΩ Rs gain across 200–270 °C; pure-Cu paste shows +2.3 to +2.4 mΩ Rs gain due to oxidation, with cell fingers visibly discoloured (blue-green).
- Pure-Cu paste reliability failures cited at module level: thermal cycling reduces module power up to 40 % in 200 cycles for prior Cu-paste-only SHJ modules, attributed to Cu oxidation.
- Of the five pastes tested, only AgCu 1 met minimum print-quality requirements at industrial speed (200 mm/s); other pastes failed via incomplete transfer at cell edges, slow required printing speed (<50 mm/s), high stickiness, or screen breakage from required printing force.
- The Cu-Ag core-shell structure on AgCu particles is stable across the print-and-cure process: EDX shows only 0.3 wt % Cu exposed at the surface in AgCu 1 vs. 18.8 wt % Ag, confirming the shell remains intact.
- Authors flag the "early results" of Cu-based metallization for SHJ as having a "−0.8 % average difference in cell efficiency vs. Ag-based SHJ solar cells due to increased grid resistance" and frame plating as the alternative high-performance route.

## Methods used

- [[methods/screen-printed-Ag-paste]] — Ag, AgCu, Ag nano, Cu, particle-free pastes; 380/14 mesh front, 440/13 mesh back
- [[methods/IV-curve-measurement]] — AMAT Botticelli LED multi-spectral solar simulator
- [[methods/EL-electroluminescence-imaging]] — EL inspection of best cells per batch
- [[methods/four-point-probe-sheet-resistance]] — line-resistance / volume-resistivity on 3 cm long dog-bone test patterns

## Reagents

- [[reagents/Cu-paste-low-temperature]] — pure-Cu paste under reliability test (oxidation failure)
- [[reagents/low-T-Ag-paste-generic-SHJ-grade]] — Ag micro-size paste reference at 94 wt % Ag
- [[reagents/ITO-transparent-conductive-oxide]] — TCO under printed pastes

## Organisms / substrates

- [[organisms/SHJ-cell-M6]] — M2 SHJ pseudo-square wafers (156.75 mm, 244.32 cm², 160 µm) with TCO on both sides (closest slug)
- [[organisms/SHJ-cell-G12]] — referenced for customer production data scaling (G12, 210 mm pseudo square, 440.96 cm²)

## Failure modes flagged

- [[failure-modes/Cu-finger-oxidation-damp-heat]] — pure-Cu paste oxidises during 200–270 °C 10-min testing, +2.3–2.4 mΩ Rs gain per step, fingers visibly discoloured
- [[failure-modes/Ni-Cu-line-resistance-rise-DH]] — closely related (Cu line R rise from oxidation under thermal stress)
- [[failure-modes/silver-supply-bottleneck]] — explicit motivator framed via the 1 TW/y target and global Ag supply
- [[failure-modes/Jsc-loss-from-cap-stack-shading]] — finger geometry across pastes drives Jsc trade-off
- [[failure-modes/FF-degradation-contact-resistance]] — Cu paste-induced Rs gain dominates FF / efficiency loss

## Supports / contradicts

- **Supports:** [[sources/2025-yacouba-shj-silver-free-metallization-progPV]] — AgCu and Cu paste both viable on SHJ, with AgCu the practical industrial path
- **Supports:** [[sources/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — co-authors at AMAT; same group's industrial perspective on plating
- **Supports:** [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — co-authored
- **Contradicts:** [[sources/2025-yacouba-shj-silver-free-metallization-progPV]] — Yacouba achieves 22.4–23.08 % with pure Cu SP on both sides whereas Frasson reports pure-Cu paste fails on print quality and reliability; the contradiction reflects different paste suppliers and 2024 vs. 2025 paste evolution

## Notable quotes

> "AgCu 1 paste, with Cu core and Ag coated particles, seems to be a valid alternative to pure Ag paste by matching the electrical and temperature stability performance of the reference Ag." — *§4 Conclusions*

> "For pure-copper pastes, the drop in cell efficiency is very clear and the main reason is oxidation (this is clearly visible by looking at the cells, printed lines appear of blue-green colors)." — *§3.3 Temperature stability testing*

> "Customer production data on G12 SHJ (210 mm pseudo square wafers, 440.96 mm²) shown an average Ag consumption of 25.7 mg/W, meaning 10 mg/W when using AgCu potentially by applying the learning curve we experimented at lab scale." — *§3.2*

> "Reliability test failures for Cu based SHJ modules have been experienced at module level due to Cu oxidation (Thermal Cycling reduces the module power up to 40% in 200 cycles)." — *§2.1*
