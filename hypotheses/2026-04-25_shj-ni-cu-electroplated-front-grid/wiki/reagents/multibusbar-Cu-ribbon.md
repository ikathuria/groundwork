---
type: reagent
slug: multibusbar-Cu-ribbon
aliases: [Cu ribbon, multi-busbar tabbing, MBB ribbon, SmartWire, SWCT, multi-wire]
cas: null
formula: solder-coated Cu ribbon or wire (Sn-Pb, Sn-Bi, Sn-Pb-Ag, In-free LMPA)
suppliers:
  - name: Ulbrich / Hitachi Metals / Bruker-Spaleck
    catalog: PV ribbon stock (flat ribbon 0.8–2.0 mm × 100–300 µm)
    grade: PV-grade, solder-coated
    url: null
  - name: Meyer Burger (SWCT)
    catalog: SmartWire foil with 18×200 µm Cu wires + LMPA coating
    grade: production
    url: null
  - name: teamtechnik / Mondragon Assembly
    catalog: stringers compatible with multi-wire ribbon
    grade: capital equipment
    url: null
storage: dry, room-temperature; flux-coated stock has shelf life 6–12 months
hazards: low — Pb-bearing ribbons subject to RoHS exemption; In supply concerns for In-bearing LMPAs
known_failure_modes: [finger-adhesion-loss-after-DH, FF-degradation-contact-resistance, Cu-finger-corrosion-encapsulant]
sources: [2014-fraunhofer-peel-testing-ribbons-solar-cells, 2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2022-arena-sundrive-copper-metallisation-demonstration, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-taiyangnews-heterojunction-technology-report, 2023-tepner-printing-tech-csi-review, 2024-itrpv-15th-edition-roadmap, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-nrel-getting-ahead-of-curve-pv-assessment, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj]
tags: [interconnection, ribbon, multi-busbar, SmartWire, ECA-glued, soldered]
---

# Multi-busbar Cu ribbon (interconnection)

## What it is
The flat or round Cu ribbon / wire used to electrically connect cells into strings and modules. With ≥9–18 busbars or 18+ wires (SmartWire), the lateral resistance demand on each finger drops dramatically, enabling fine-line metallization and silver/Cu reduction. Ribbons are pre-coated with a low-melting-point solder alloy (LMPA) so lamination simultaneously bonds the wire to the metal pad.

## Common uses
- Soldering busbar attach to LCT-Ag pads on screen-printed SHJ ([[2018-pv-international-metallization-shj]], [[2018-pv-tech-metallization-interconnection-bifacial-shj]]).
- SmartWire (SWCT) on plated-Cu SHJ — 18 × 200 µm-diameter Cu wires on polymer foil with LMPA coating ([[2018-pvtech-metallization-shj-cells-modules]], [[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]]).
- 9-busbar / 12-BB / 15-BB / 18-BB / 24-BB layouts on industrial SHJ ([[2023-taiyangnews-heterojunction-technology-report]], [[2024-itrpv-15th-edition-roadmap]]).
- ECA-glued attach on plated-Cu cells (alternative to soldering) ([[2018-pv-tech-metallization-interconnection-bifacial-shj]]).
- Pull-test / peel-test reliability studies ([[2014-fraunhofer-peel-testing-ribbons-solar-cells]]).

## Key spec / concentration ranges
- Flat ribbon dimensions: 0.8–2.0 mm wide × 100–300 µm thick; tin-coated.
- SmartWire: 18 × 200 µm-diameter Cu wires on polymer foil; effective optical width per wire ~140 µm; pitch ~8 mm ([[2018-pvtech-metallization-shj-cells-modules]]).
- 24-BB: very narrow ribbons or wires; 24-wire pitch ~6.5 mm.
- Solder coating: 60Sn/40Pb, 62Sn/36Pb/2Ag (Pb), 96.5Sn/3.5Ag (Pb-free), or LMPA (e.g., SnBi 138 °C, SnIn 117 °C). For SHJ the solder must melt below the SHJ thermal ceiling (~200 °C) — LMPA In-free formulations now standard ([[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]]).
- Peel force target: ≥1 N/mm at 90° ([[2018-pv-tech-metallization-interconnection-bifacial-shj]]); on plated Cu/Ag stack reaches ≥2 N/mm ([[2021-hatt-stable-cu-plated-shj-eupvsec]]); on SunDrive plated-Cu shear strength exceeds Si — pull tests rip out TCO and Si shards ([[2022-arena-sundrive-copper-metallisation-demonstration]]).
- Tolerable finger line resistance vs. busbar count ([[2023-tepner-printing-tech-csi-review]]): 30 wires ≤ 30.9 Ω/cm; 18 wires ≤ 11.1 Ω/cm; 12 wires ≤ 4.9 Ω/cm; 6BB ≤ 1.3 Ω/cm; 5BB ≤ 0.9 Ω/cm.
- Mass per ribbon: ~30–60 mg/cell for 5BB; SmartWire reduces tabbing-pad Ag laydown to ~60 mg total ([[2018-pv-tech-metallization-interconnection-bifacial-shj]]).

## Alternatives / variants
- [[electrically-conductive-adhesive-ECA]] — non-solder attach; cures at ~150 °C; necessary for ribbon-to-Cu when soldering is undesirable.
- Shingle ECA bonding — overlapping cells without ribbons.
- IBC bus structure — wholly different architecture; no front-side ribbons.

## Gotchas
- Pb-bearing solders (60Sn/40Pb) are RoHS-exempt for PV but the industry trend is Pb-free.
- LMPA formulations using indium are tied to indium supply — In-free alternatives (SnBi, SnAgCu) are now preferred.
- Soldering on Cu requires a working flux (non-clean L0/M0 typical); on Ag pads same flux works; on bare TCO direct ribbon is possible (SmartWire) but adhesion is marginal — use ECA or capping.
- For SHJ the solder melt temperature must be ≤200 °C to preserve a-Si:H — full Pb-Sn (183 °C) is borderline; SnBiAg (138 °C) is safer.

## Sources
- [[2014-fraunhofer-peel-testing-ribbons-solar-cells]] — canonical 90° peel-test method.
- [[2018-pvtech-metallization-shj-cells-modules]] / [[2018-pv-tech-metallization-interconnection-bifacial-shj]] / [[2018-pv-international-metallization-shj]] — SmartWire / multi-BB SHJ context, finger-resistance tradeoffs, peel-force benchmarks.
- [[2022-arena-sundrive-copper-metallisation-demonstration]] — 15-BB layout on M12 half-cut, pull strength exceeds Si.
- [[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] / [[2024-lachowicz-cu-plated-shj-aging-mini-modules]] — SmartWire mini-modules with In-free LMPA on plated-Cu SHJ.
- [[2023-taiyangnews-heterojunction-technology-report]] / [[2024-itrpv-15th-edition-roadmap]] — busbar-count roadmap (12 BB → 18 BB → busbarless).
- [[2023-tepner-printing-tech-csi-review]] / [[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] / [[2024-nrel-getting-ahead-of-curve-pv-assessment]] — context on finger-resistance / interconnection trade-offs.
