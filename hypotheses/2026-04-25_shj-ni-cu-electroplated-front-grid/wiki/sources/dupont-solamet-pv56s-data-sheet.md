---
type: source
id: dupont-solamet-pv56s-data-sheet
source_type: catalog
title: "DuPont Solamet PV56S Photovoltaic Metallization Paste — Technical Data Sheet"
authors: ["DuPont"]
year: 2014
doi: ""
url: https://www.dupont.com/content/dam/dupont/amer/us/en/photovoltaic/public/documents/solamet-pv56s-data-sheet.pdf
raw_path: raw/catalogs/dupont-solamet-pv56s-data-sheet.pdf
tags: [DuPont, Solamet, Ag-paste, NOT-SHJ-compatible, back-side, LBSF, co-fire, fire-through]
created: 2026-04-26
updated: 2026-04-26
---

# DuPont Solamet PV56S Photovoltaic Metallization Paste — Technical Data Sheet

**DuPont (Solamet)** — *2014 (K-27823 02/14)*. URL: https://www.dupont.com/content/dam/dupont/amer/us/en/photovoltaic/public/documents/solamet-pv56s-data-sheet.pdf

## Summary

DuPont's tech sheet for Solamet PV56S — a back-side solderable Ag paste for localized back-surface-field (LBSF) cells, designed to co-fire with front-side Ag (Solamet PV17x/PV18x) and back-side Al (PV36x). **Despite the "non fire-through" tagline, PV56S is still high-firing-temperature (>600 °C peak)**: it is co-fireable with the Solamet front+rear PERC/LBSF stack, and the data sheet explicitly notes "thermal budget above 600 °C should be kept to minimum, ideally <8 seconds". This is fundamentally incompatible with the ≤200 °C process budget of an SHJ cell. Included in the wiki only to clarify that **PV56S is NOT the SHJ-compatible back-side paste** and to forward readers to the SHJ-grade low-T Ag paste used in this hypothesis's baseline arm.

## Key claims / specifications

- **Class:** back-side solderable Ag paste for LBSF (localized back-surface field) cells; "non fire-through" but co-fired with PV17x/PV18x front Ag and PV36x back Al — i.e. the cell sees the standard PERC firing peak (~750–800 °C) regardless.
- **Firing profile:** "rapid (spike) firing… Thermal budget above 600 °C should be kept to minimum, ideally <8 seconds to ensure optimum electrical contact to the wafer." — **This >600 °C peak destroys a-Si:H passivation in SHJ cells.**
- **Application:** standard screen-print, 180–250 mm/s; 200 or 250 mesh stainless steel screen.
- **Drying:** vertical 170–230 °C / 10 min, IR belt 220–270 °C / 30 s.
- **Solderability:** ribbon 60Sn/40Pb, 62Sn/36Pb/2Ag, 96.5Sn/3.5Ag; flux non-clean L0/M0 per ANSI/J-STD-004.
- **Physical properties:** viscosity 50–100 Pa·s (Brookfield HADV, SC4-14/6R, 10 rpm, 25 °C); solids 59–61 % @ 750 °C; cadmium-free; thinner 9450; 6-month shelf life.
- **Self-described benefits:** "High adhesion with low consumption… high Voc by reducing charge carrier recombination in passivation layer when used in conjunction with back side aluminum compositions."
- **Co-firing partners:** front Ag PV17x/PV18x (high-T fire-through), back Al PV36x — defines this paste as part of the diffused-junction/PERC ecosystem.

## Methods used

- [[methods/screen-printed-Ag-paste]] — PV56S is a representative high-T paste and would be inappropriate as an SHJ control (use [[reagents/low-T-Ag-paste-generic-SHJ-grade]] instead).

## Reagents

- [[reagents/low-T-Ag-paste-Solamet-PV56S]] — the entity this catalog populates (the slug name is misleading: PV56S is not low-T in the SHJ sense; readers should be redirected to the SHJ-grade generic).
- [[reagents/low-T-Ag-paste-generic-SHJ-grade]] — the correct SHJ baseline reagent.
- [[reagents/silver-Ag-cap]] — distinct concept; Ag cap on plated Cu is plated/sputtered, not screen-printed.

## Organisms / substrates

- [[organisms/monocrystalline-Si-wafer-n-type]] — PV56S is targeted at LBSF p-type cells with diffused junctions; not SHJ wafers in a-Si:H state.

## Failure modes flagged

- [[failure-modes/a-Si-H-passivation-degradation]] — direct hazard if PV56S is fired on an SHJ cell: peak >600 °C, destroying a-Si:H passivation.
- [[failure-modes/silver-supply-bottleneck]] — Ag-paste cost is the economic motivation the hypothesis intervenes against.

## Supports / contradicts

- **Contradicts (architecturally):** [[sources/dupont-solamet-pv21a-tech-sheet]] — PV21A is the front-side counterpart in the same fire-through paste ecosystem; both are PERC/LBSF, not SHJ.
- **Compares to:** [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — Fraunhofer's SHJ baseline uses an SHJ-grade low-T paste (≤200 °C cure), not PV56S.

## Notable quotes

> "Solamet® PV56S is able to co-fire with front side (n-type) silver conductors such as DuPont™ Solamet® PV17x, PV18x and with back side (p-type) aluminum conductors such as DuPont™ Solamet® PV36x." — *Product Description, p. 1.*

> "Solamet® PV56S is designed for rapid (spike) firing. Thermal budget above 600 °C should be kept to minimum, ideally <8 seconds to ensure optimum electrical contact to the wafer." — *Firing, p. 1.*
