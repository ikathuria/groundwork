---
type: reagent
slug: low-T-Ag-paste-Solamet-PV21A
aliases: [Solamet PV21A, DuPont PV21A, fire-through PERC Ag paste]
cas: null (multi-component metallization paste)
formula: Ag flakes + glass frit (Pb-O-SiOx fire-through) + binder + vehicle
suppliers:
  - name: DuPont / Solamet (now Solar Materials)
    catalog: Solamet PV21A
    grade: production (fire-through, PERC front)
    url: https://www.dupont.com/solamet
storage: 5–25 °C; lids sealed; do NOT exceed 25 °C; do NOT freeze; shelf life 6 months
hazards: low — Ag dust, organic solvents; cadmium-free (no intentional Cd)
known_failure_modes: [a-Si-H-passivation-degradation, silver-supply-bottleneck]
sources: [2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2023-taiyangnews-heterojunction-technology-report, 2023-tepner-printing-tech-csi-review, dupont-solamet-pv21a-tech-sheet]
tags: [Ag-paste, fire-through, high-T, PERC-front, control-comparator-ONLY, NOT-SHJ-compatible]
---

# DuPont Solamet PV21A — high-T fire-through Ag paste

## What it is
DuPont's flagship front-side fire-through silver paste for PERC homojunctions. **Despite being filed under the "low-T-Ag-paste-..." reagent slot for trade-name continuity with the Solamet line, PV21A is a HIGH-temperature fire-through paste (peak firing well above 600 °C) and is NOT compatible with SHJ thermal limits (~250 °C).** PV21A is included in this wiki as the screen-printed Ag paste benchmark for PERC-class cells and as historical context for the silver-supply bottleneck driving the hypothesis.

## Common uses
- Front-side metallization on PERC homojunctions, co-fired with backside p-type Al + tabbing Ag pastes (PV5xx series) ([[dupont-solamet-pv21a-tech-sheet]]).
- Historical industry benchmark for "screen-printed Ag" cost / efficiency in metallization reviews ([[2018-pv-tech-metallization-interconnection-bifacial-shj]], [[2023-tepner-printing-tech-csi-review]], [[2023-taiyangnews-heterojunction-technology-report]]).

## Key spec / concentration ranges
- Application: standard screen print, 200–350 mm/s.
- Screen: 325–430 mesh stainless steel; 16/16/14/16/13 µm wire diameter; 17–28 µm mesh thickness; 12–18 µm emulsion; 22–30° mesh angle.
- Typical line resolution: 30–40 µm screen-designed width.
- Drying: vertical dryer 170–230 °C / 10 min, or IR belt 150–400 °C / 1 min.
- Firing: rapid (spike) firing, peak above 600 °C; co-fireable with PV20x.
- Soldering: industry-standard non-clean L0/M0 flux; Pb-Sn or Pb-free ribbons.
- Viscosity 200–320 Pa·s; solids 91–93% at 750 °C; fineness <12 µm/<6 µm.
- Resistivity <5 mΩ/sq/10 µm (printed line) — high-T fired paste.
- Cadmium-free; thinner: DuPont 9450; shelf life 6 months.

## Alternatives / variants
- [[low-T-Ag-paste-generic-SHJ-grade]] — the actual SHJ-compatible low-T paste class (Namics LCT, Solamet PV42B/PV43B, Heraeus etc.). USE THIS for any SHJ work.
- [[low-T-Ag-paste-Solamet-PV56S]] — DuPont back-side solderable Ag paste; also fire-through, also NOT SHJ-compatible.
- [[Cu-paste-low-temperature]] / AgCu pastes — emerging low-T alternatives.

## Gotchas
- **PV21A is NOT SHJ-compatible.** Peak firing >600 °C destroys a-Si:H passivation. Do not select PV21A as the SHJ control reagent. Use [[low-T-Ag-paste-generic-SHJ-grade]] for actual SHJ benchmarking.
- The Pb-O-SiOx glass frit is a regulated hazard; PV21A is exempt under EU RoHS for PV but trends toward Pb-free are pushing replacement.
- The TDS does NOT list pricing; production-volume pricing is set by the kg silver content — historically >$300/kg paste at $25/oz Ag.

## Sources
- [[dupont-solamet-pv21a-tech-sheet]] — primary TDS; full screen / firing / solder spec.
- [[2018-pv-international-metallization-shj]] / [[2018-pv-tech-metallization-interconnection-bifacial-shj]] — referenced as the legacy fire-through Ag benchmark in SHJ reviews.
- [[2023-taiyangnews-heterojunction-technology-report]] — Solamet line referenced; PV42B/PV43B profiled as the SHJ-compatible variants.
- [[2023-tepner-printing-tech-csi-review]] — context on screen-print history.
