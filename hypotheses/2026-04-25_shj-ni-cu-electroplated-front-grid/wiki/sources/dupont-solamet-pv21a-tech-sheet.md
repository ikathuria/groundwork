---
type: source
id: dupont-solamet-pv21a-tech-sheet
source_type: catalog
title: "DuPont™ Solamet® PV21A photovoltaic metallization — Preliminary Technical Data Sheet"
supplier: "DuPont"
catalog_number: "Solamet PV21A"
year: 2019
url: "https://www.dupont.com/solamet"
raw_path: raw/catalogs/dupont-solamet-pv21a-tech-sheet.txt
tags: [reagent-spec, supplier-data, ag-paste, fire-through, perc, control-comparator, tds]
---

# DuPont Solamet PV21A — high-temperature fire-through Ag paste (PERC/PERC+)

## Summary
DuPont (now Solamet/Solar Materials division) front-side fire-through silver paste, intended for co-firing with backside (p-type) Al conductors and tabbing Ag pastes such as Solamet PV5xx. PV21A is a *high-temperature* (peak firing) Ag paste — *not* an SHJ-compatible low-T paste. It is included here as the screen-printed Ag paste benchmark and for context on industry-standard fired-Ag finger resistivity. For SHJ-relevant low-T pastes, the analog is Solamet PV56S (back-side, [[dupont-solamet-pv56s-data-sheet]]) and dedicated low-T variants of the PV-series. PV21A's specs anchor what "screen-printed Ag" means as the comparator in the hypothesis.

## Key product specs
- Application: standard screen print, 200–350 mm/sec print speed.
- Screen: 325–430 mesh stainless steel; 16/16/14/16/13 µm wire diameter; 17–28 µm mesh thickness; 12–18 µm emulsion; mesh angle 22–30°.
- Typical line resolution: 30–40 µm screen-designed width (narrow side).
- Drying: vertical dryer 170–230 °C ×10 min, or IR belt dryer 150–400 °C ×1 min.
- Firing: rapid (spike) firing co-fireable with PV20x; peak firing similar to PV20x — well above 600 °C → not compatible with SHJ thermal limit (~250 °C).
- Soldering: industry-standard non-clean L0/M0 flux (ANSI/J-STD-004); ribbon compatible with 60Sn/40Pb, 62Sn/36Pb/2Ag, 96.5Sn/3.5Ag.
- Physical:
  - Viscosity 200–320 Pa·s (Brookfield HBT, 20 rpm, SC4-14/6R, 15 °C).
  - Solids 91–93% at 750 °C.
  - Fineness of grind <12 µm / <6 µm (4th / 50th percentile).
  - Resistivity <5 mΩ/sq/10 µm (printed line).
  - Thinner: DuPont 9450.
  - Shelf life 6 months.
- Storage: 5–25 °C, lids tightly sealed; >25 °C or freezer storage NOT recommended.
- Cadmium-free (no intentional Cd; trace amounts may be present).
- Pricing: not listed.

## Reagents (linked entity)
- [[../reagents/low-T-Ag-paste-Solamet-PV21A]] — this product (despite "PV21A" being a high-T paste, it is the entity slot reserved for it).
- [[../reagents/silver-Ag-cap]] — silver paste underlies the silver-cap concept analogically (different application).

## Methods this product is used in
- [[../methods/screen-printed-Ag-paste]] — standard fire-through Ag paste step on PERC; the comparator architecture.

## Failure modes flagged
- [[../failure-modes/silver-supply-bottleneck]] — implicit; no explicit warnings on the TDS regarding Ag scarcity, but the existence of PV21A is the legacy reason for the silver-bottleneck problem.
- [[../failure-modes/a-Si-H-passivation-degradation]] — *not* flagged on TDS, but the high firing temperature means PV21A is incompatible with SHJ — this is itself why the hypothesis exists.

## Notable quotes
- "Solamet PV21A photovoltaic metallization front side paste is a highly conductive silver composition with innovative material science which enables finer line design and excellent printability. This paste can be co-fired with back side (p-type) aluminum conductors and tabbing silver such as Solamet PV5xx. It is designed for rapid dry and fast (spike) firing." — Product Description
- "Resistivity (mΩ/sq/10µm) <5" — Table 1
- "Compatible with industry standard material & condition. Flux type: non-clean, reactivity level L0/M0. Ribbon: Compatible with Pb contained and Pb free solder material, i.e. 60Sn/40Pb, 62Sn/36Pb/2Ag, 96.5Sn/3.5Ag." — Soldering
