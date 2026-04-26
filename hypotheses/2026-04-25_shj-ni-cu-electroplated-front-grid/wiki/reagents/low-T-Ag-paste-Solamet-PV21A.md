---
type: reagent
slug: low-T-Ag-paste-Solamet-PV21A
aliases: [DuPont Solamet PV21A, PV21A, Solamet PV21A fire-through Ag paste]
cas: ""
suppliers:
  - name: DuPont (Solamet)
    catalog: "Solamet PV21A (Modification C, 2019)"
    grade: front-side fire-through Ag paste, peak fire ~750–800 °C
    url: https://www.dupont.com/content/dam/dupont/amer/us/en/photovoltaic/public/documents/PV21ATechSheet.pdf
storage: 5–25 °C, sealed; 6 month shelf life
hazards: medium — Ag particles + organic solvents; NOT an SHJ-handling concern (architectural mismatch)
known_failure_modes: [a-Si-H-passivation-degradation, silver-supply-bottleneck]
sources: [2023-tepner-printing-tech-csi-review, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, dupont-solamet-pv21a-tech-sheet]
tags: [DuPont, Solamet, Ag-paste, fire-through, NOT-SHJ-compatible, false-friend, PERC, LDE]
created: 2026-04-26
updated: 2026-04-26
---

# DuPont Solamet PV21A — Ag paste (NOT SHJ-compatible)

**Slug:** `reagents/low-T-Ag-paste-Solamet-PV21A` · **Type:** reagent

## What it is

DuPont Solamet PV21A is a front-side **fire-through** Ag paste designed for PERC / LDE / Al-BSF n-type emitters with rapid-spike firing at peak temperatures aligned with the Solamet PV20x family (~750–800 °C). It is **not a low-temperature paste in the SHJ sense** — the slug name is misleading. PV21A is incompatible with SHJ because the spike-fire peak destroys the a-Si:H passivation that defines SHJ.

> **Despite the misleading slug, the SHJ baseline uses [[reagents/low-T-Ag-paste-generic-SHJ-grade]], not this paste.** PV21A is included in the wiki only as a *false-friend* control, to clarify which Ag paste belongs in the SHJ baseline arm.

## Common uses (in this corpus)

In this corpus PV21A appears as the **architectural-mismatch comparator** — it shows up in the DuPont catalog as part of the legacy PERC/Al-BSF Solamet family, and it is referenced by Tepner 2023 as a frequently-cited LCT-Ag exemplar (somewhat confusingly given the firing profile). Pingel 2025 explicitly does not use PV21A for the SHJ baseline; the SHJ-grade pastes are unambiguously Heraeus / Namics / Giga Solar (see [[reagents/low-T-Ag-paste-generic-SHJ-grade]]).

## Properties / specifications

- **Class:** front-side fire-through Ag paste for n-type emitter contact (PERC / LDE).
- **Firing profile:** "rapid (spike) firing"; peak temperature aligned with Solamet PV20x family (~750–800 °C peak). **Incompatible with the ≤200 °C SHJ a-Si:H limit.**
- **Application:** standard screen-print, 200–350 mm/s; 325–430 mesh stainless steel screens for fine lines (<35–40 µm narrow side); 12–18 µm emulsion thickness.
- **Drying:** vertical 170–230 °C / 10 min, IR belt 150–400 °C / 1 min.
- **Typical line resolution:** 30–40 µm screen-designed width.
- **Solderability:** compatible with 60Sn/40Pb, 62Sn/36Pb/2Ag, 96.5Sn/3.5Ag ribbon.
- **Physical properties:** viscosity 200–320 Pa·s (Brookfield HBT, 20 rpm, SC4-14/6R, 15 °C); solids 91–93 % @ 750 °C; resistivity <5 mΩ/sq/10 µm; cadmium-free.
- **Self-described benefits:** "Improved efficiency up to 0.1 % over DuPont Solamet PV20x series… Superior metallization contact on LDE/ultra-LDE (standard or PERC cell)".
- **Storage:** 5–25 °C, sealed; 6 month shelf life.

## Suppliers

- DuPont (Solamet) — PV21A Tech Sheet (Modification C, 2019); URL https://www.dupont.com/content/dam/dupont/amer/us/en/photovoltaic/public/documents/PV21ATechSheet.pdf

## Alternatives

- [[reagents/low-T-Ag-paste-generic-SHJ-grade]] — **the correct SHJ baseline reagent** (Heraeus SOL96xx, Namics, Giga Solar). PV21A is not a substitute.
- [[reagents/low-T-Ag-paste-Solamet-PV56S]] — companion DuPont Solamet back-side paste; also high-T, also NOT SHJ-compatible.

## Gotchas / failure modes

- [[failure-modes/a-Si-H-passivation-degradation]] — direct hazard if PV21A is mistakenly fired on an SHJ cell: spike firing at 750 °C destroys a-Si:H passivation and the c-Si surface state.
- [[failure-modes/silver-supply-bottleneck]] — fire-through Ag paste contributes to the PV-industry Ag-demand bottleneck; PV21A mass-per-cell is in the same bracket as other fired Ag pastes.

## Citing sources

- [[sources/dupont-solamet-pv21a-tech-sheet]] — primary source: DuPont preliminary tech sheet for PV21A (Modification C, 2019).
- [[sources/2023-tepner-printing-tech-csi-review]] — references PV21A as one DuPont Solamet exemplar in the Ag-paste landscape (without endorsing it for SHJ).
- [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — Pingel 2025 explicitly uses SHJ-grade low-T Ag (NOT PV21A) for the screen-print baseline.
