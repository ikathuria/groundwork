---
type: reagent
slug: low-T-Ag-paste-Solamet-PV56S
aliases: [DuPont Solamet PV56S, PV56S, Solamet PV56S back-side Ag paste]
cas: ""
suppliers:
  - name: DuPont (Solamet)
    catalog: "Solamet PV56S (K-27823 02/14)"
    grade: back-side solderable Ag paste for LBSF, peak fire >600 °C
    url: https://www.dupont.com/content/dam/dupont/amer/us/en/photovoltaic/public/documents/solamet-pv56s-data-sheet.pdf
storage: refrigerated; 6 month shelf life
hazards: medium — Ag particles + organic solvents; NOT an SHJ-handling concern (architectural mismatch)
known_failure_modes: [a-Si-H-passivation-degradation, silver-supply-bottleneck]
sources: [2023-tepner-printing-tech-csi-review, dupont-solamet-pv56s-data-sheet]
tags: [DuPont, Solamet, Ag-paste, NOT-SHJ-compatible, false-friend, back-side, LBSF, co-fire]
created: 2026-04-26
updated: 2026-04-26
---

# DuPont Solamet PV56S — Ag paste (NOT SHJ-compatible)

**Slug:** `reagents/low-T-Ag-paste-Solamet-PV56S` · **Type:** reagent

## What it is

DuPont Solamet PV56S is a back-side solderable Ag paste for localized back-surface-field (LBSF) cells, designed to co-fire with front-side Ag (Solamet PV17x/PV18x) and back-side Al (PV36x) at PERC/Al-BSF firing peaks. **Despite the "non fire-through" tagline, PV56S is high-firing-temperature (>600 °C peak)**: the data sheet explicitly notes "thermal budget above 600 °C should be kept to minimum, ideally <8 seconds". This is fundamentally incompatible with the ≤200 °C process budget of an SHJ cell.

> **Despite the misleading slug, the SHJ baseline uses [[reagents/low-T-Ag-paste-generic-SHJ-grade]], not this paste.** PV56S is included in the wiki only as a *false-friend* control.

## Common uses (in this corpus)

In this corpus PV56S appears alongside PV21A as a **architectural-mismatch comparator** to clarify the legacy DuPont catalog's PERC/Al-BSF orientation and the absence of an off-the-shelf SHJ-grade DuPont paste in the public catalog. Tepner 2023 names PV56S in the printing-tech review without endorsing it for SHJ. The right SHJ control is the [[reagents/low-T-Ag-paste-generic-SHJ-grade]] — Heraeus SOL96xx, Namics, or Giga Solar.

## Properties / specifications

- **Class:** back-side solderable Ag paste for LBSF (localized back-surface field) cells; "non fire-through" but co-fired with PV17x/PV18x front Ag and PV36x back Al — i.e. the cell sees the standard PERC firing peak (~750–800 °C) regardless.
- **Firing profile:** "rapid (spike) firing… Thermal budget above 600 °C should be kept to minimum, ideally <8 seconds to ensure optimum electrical contact to the wafer." — **>600 °C peak destroys a-Si:H passivation in SHJ cells.**
- **Application:** standard screen-print, 180–250 mm/s; 200 or 250 mesh stainless steel screen.
- **Drying:** vertical 170–230 °C / 10 min, IR belt 220–270 °C / 30 s.
- **Solderability:** ribbon 60Sn/40Pb, 62Sn/36Pb/2Ag, 96.5Sn/3.5Ag; flux non-clean L0/M0.
- **Physical properties:** viscosity 50–100 Pa·s (Brookfield HADV, SC4-14/6R, 10 rpm, 25 °C); solids 59–61 % @ 750 °C; cadmium-free; thinner 9450; 6-month shelf life.
- **Self-described benefits:** "High adhesion with low consumption… high Voc by reducing charge carrier recombination in passivation layer when used in conjunction with back side aluminum compositions."
- **Co-firing partners:** front Ag PV17x/PV18x (high-T fire-through), back Al PV36x — defines this paste as part of the diffused-junction/PERC ecosystem.

## Suppliers

- DuPont (Solamet) — PV56S Data Sheet (K-27823 02/14); URL https://www.dupont.com/content/dam/dupont/amer/us/en/photovoltaic/public/documents/solamet-pv56s-data-sheet.pdf

## Alternatives

- [[reagents/low-T-Ag-paste-generic-SHJ-grade]] — **the correct SHJ baseline reagent**.
- [[reagents/low-T-Ag-paste-Solamet-PV21A]] — companion DuPont front-side paste; also high-T, also NOT SHJ-compatible.
- [[reagents/silver-Ag-cap]] — distinct concept (Ag finish on plated Cu, not a screen-printed paste).

## Gotchas / failure modes

- [[failure-modes/a-Si-H-passivation-degradation]] — direct hazard if PV56S is mistakenly fired on an SHJ cell: peak >600 °C destroys a-Si:H passivation.
- [[failure-modes/silver-supply-bottleneck]] — Ag-paste cost is the economic motivation the hypothesis intervenes against.

## Citing sources

- [[sources/dupont-solamet-pv56s-data-sheet]] — primary source: DuPont tech sheet for PV56S (2014, K-27823 02/14).
- [[sources/2023-tepner-printing-tech-csi-review]] — references PV56S in the Ag-paste landscape; not endorsed for SHJ.
