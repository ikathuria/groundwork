---
type: source
id: dupont-solamet-pv21a-tech-sheet
source_type: catalog
title: "DuPont Solamet PV21A Photovoltaic Metallization Paste — Preliminary Technical Data Sheet"
authors: ["DuPont"]
year: 2019
doi: ""
url: https://www.dupont.com/content/dam/dupont/amer/us/en/photovoltaic/public/documents/PV21ATechSheet.pdf
raw_path: raw/catalogs/dupont-solamet-pv21a-tech-sheet.pdf
tags: [DuPont, Solamet, Ag-paste, fire-through, NOT-SHJ-compatible, screen-print, PERC, LDE]
created: 2026-04-26
updated: 2026-04-26
---

# DuPont Solamet PV21A Photovoltaic Metallization Paste — Preliminary Technical Data Sheet

**DuPont (Solamet)** — *2019 (Modification C, 3.14.2019)*. URL: https://www.dupont.com/content/dam/dupont/amer/us/en/photovoltaic/public/documents/PV21ATechSheet.pdf

## Summary

DuPont's preliminary tech sheet for the Solamet PV21A front-side silver paste — a high-temperature, fire-through Ag composition designed for PERC/LDE n-type emitters. **PV21A is not SHJ-compatible**: it is engineered for spike firing at peak temperatures consistent with the rest of the Solamet PV20x co-fire family (>600 °C peak), which would destroy the a-Si:H passivation that defines the SHJ architecture. Included in the wiki only as a *false-friend* control to clarify which Ag paste belongs in the SHJ baseline arm — the right control is a low-temperature SHJ-grade paste (see [[reagents/low-T-Ag-paste-generic-SHJ-grade]]), not PV21A.

## Key claims / specifications

- **Class:** front-side fire-through Ag paste (n-type emitter contact); co-fireable with PV5xx tabbing Ag and PV36x p-side Al on PERC and standard cells.
- **Firing profile:** "rapid (spike) firing"; peak temperature aligned with Solamet PV20x family — i.e. typical PERC/Al-BSF firing peak ~750–800 °C. **This thermal budget is incompatible with the ≤200 °C SHJ a-Si:H limit.**
- **Application:** standard screen-print, 200–350 mm/s; 325–430 mesh stainless steel screens for fine lines (<35–40 µm narrow side); 12–18 µm emulsion thickness.
- **Drying:** vertical 170–230 °C / 10 min, IR belt 150–400 °C / 1 min.
- **Typical line resolution:** 30–40 µm screen-designed width.
- **Solderability:** compatible with 60Sn/40Pb, 62Sn/36Pb/2Ag, 96.5Sn/3.5Ag ribbon; flux non-clean L0/M0 per ANSI/J-STD-004.
- **Physical properties:** viscosity 200–320 Pa·s (Brookfield HBT, 20 rpm, SC4-14/6R, 15 °C); solids 91–93 % @ 750 °C; resistivity <5 mΩ/sq/10 µm; cadmium-free.
- **Self-described benefits:** "Improved efficiency up to 0.1 % over DuPont Solamet PV20x series… Superior metallization contact on LDE/ultra-LDE (standard or PERC cell)".
- **Storage:** 5–25 °C, sealed; 6 month shelf life.

## Methods used

- [[methods/screen-printed-Ag-paste]] — PV21A is a representative example of the high-T fire-through paste class — to be excluded from any SHJ control arm.

## Reagents

- [[reagents/low-T-Ag-paste-Solamet-PV21A]] — the entity this catalog populates (the slug name is misleading: this is *not* low-T; the page should reflect that and forward readers to the SHJ-grade generic).
- [[reagents/low-T-Ag-paste-generic-SHJ-grade]] — the correct SHJ baseline reagent; PV21A is *not* a substitute.
- [[reagents/silver-Ag-cap]] — distinct concept (Ag finish on plated Cu, not a fire-through paste).

## Organisms / substrates

- [[organisms/monocrystalline-Si-wafer-n-type]] — PV21A is designed for n-type emitters on diffused-junction cells; *not* the SHJ wafer in a-Si:H state.

## Failure modes flagged

- [[failure-modes/a-Si-H-passivation-degradation]] — direct hazard if PV21A is mistakenly fired on an SHJ cell: spike firing at 750 °C destroys a-Si:H passivation and the c-Si surface state.
- [[failure-modes/silver-supply-bottleneck]] — fire-through Ag paste is the cost driver the plated-Cu hypothesis is designed to displace.

## Supports / contradicts

- **Contradicts (architecturally):** [[sources/dupont-solamet-pv56s-data-sheet]] — PV56S is similarly a fire-through paste, also high-T, also non-SHJ-compatible — the two together illustrate the legacy DuPont catalog's PERC/Al-BSF orientation and the absence of an off-the-shelf SHJ-grade DuPont paste in the public catalog as of the 2019 revision.
- **Compares to:** [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — Fraunhofer 2025 explicitly uses SHJ-grade low-T Ag (and Ag-coated-Cu) paste for the screen-print baseline, not a fire-through composition.
- **Compares to:** [[sources/2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] — uses SHJ-specific low-T Ag pastes; PV21A is not part of that experimental set.

## Notable quotes

> "This paste can be co-fired with back side (p-type) aluminum conductors and tabbing silver such as Solamet® PV5xx. It is designed for rapid dry and fast (spike) firing." — *Product Description, p. 1.*

> "Solamet® PV21A is designed for rapid (spike) firing. To get the best electrical performance, PV21A should be fired at a peak temperature similar to Solamet® PV20x." — *Firing, p. 2.*
