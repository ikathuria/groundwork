---
type: reagent
slug: a-Si-H-passivation
aliases: [hydrogenated amorphous silicon, a-Si:H, intrinsic / doped a-Si:H bilayer]
cas: null
formula: a-Si:H (intrinsic) + a-Si:H(n)/(p) (doped, ~10–15 nm each)
suppliers:
  - name: Meyer Burger / Maxwell / Indeotec / AMAT / Von Ardenne (PECVD tools)
    catalog: SHJ PECVD process line (cluster tools, in-line)
    grade: production
    url: null
  - name: Linde / Air Liquide / Air Products
    catalog: SiH4, H2, B2H6, PH3 process gases
    grade: 5N–6N
    url: null
storage: gases — high-pressure cylinders, segregated cabinet; deposited a-Si:H film is stable at room temperature but degrades by H out-diffusion above ~280 °C
hazards: high — silane (SiH4) is pyrophoric; B2H6 / PH3 are highly toxic and pyrophoric (gas-handling concern, not film hazard)
known_failure_modes: [a-Si-H-passivation-degradation, Cu-LID-light-induced-degradation, Voc-degradation-Cu-contamination]
sources: [2015-lindroos-cu-lid-aalto-thesis, 2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration, 2023-taiyangnews-heterojunction-technology-report, 2024-itrpv-15th-edition-roadmap, 2024-lorenz-cutting-edge-metallization-shj-fraunhofer, 2025-yacouba-shj-silver-free-metallization-progPV]
tags: [passivation, SHJ-stack, PECVD, junction]
---

# a-Si:H passivation (SHJ junction)

## What it is
The defining feature of the silicon heterojunction (SHJ) cell. A 5–10 nm thin intrinsic hydrogenated amorphous silicon (a-Si:H i-layer) is deposited by PECVD on both sides of an n-type Cz-Si wafer, providing chemical passivation of the c-Si surface dangling bonds. Doped a-Si:H(n) on one face and a-Si:H(p) on the other create the heterojunction that separates carriers. Subsequent ITO TCO layers deposit over them. The entire structure is processed below 200 °C — this thermal ceiling is the central constraint that drives the move away from fired Ag screen-print pastes (>700 °C) toward low-T pastes and plated metallizations like the Ni/Cu electroplated stack of this hypothesis.

## Common uses
- Front and rear passivation/junction layers of every commercial SHJ cell.
- Fundamental boundary condition: any front-grid metallization must complete below ~250 °C peak temperature (and 280 °C / 5 s for short anneals — see [[2025-yacouba-shj-silver-free-metallization-progPV]]).
- Process-quality monitor for plating workflows: PL/EL imaging at 1 sun shows passivation damage from sputtering or laser ablation ([[2021-hatt-stable-cu-plated-shj-eupvsec]]).

## Key spec / concentration ranges
- Layer stack (typical): c-Si(n) / a-Si:H(i) ~5 nm / a-Si:H(n or p) ~5–10 nm; mirrored on the rear.
- Deposition by PECVD (13.56 MHz or VHF), T_substrate 150–200 °C, SiH4 + H2 + dopant gas (B2H6 or PH3).
- Hydrogen content typically 8–15 at% in i-layer.
- Thermal stability ceiling: 280 °C for 5 s short anneal ([[2025-yacouba-shj-silver-free-metallization-progPV]]); 320 °C costs ~0.5%abs irreversibly; 360 °C costs ~1.5%abs.
- Voc capability: 730–745 mV on industrial SHJ; iVoc up to ~755 mV.
- HJT 2.0 / 3.0: nc-Si on emitter (HJT2.0) or both sides (HJT3.0) replaces a-Si:H(p) for higher FF ([[2023-taiyangnews-heterojunction-technology-report]]).

## Alternatives / variants
- nc-Si:H (microcrystalline Si:H) — used in HJT 2.0/3.0 emitter for lower lateral resistance.
- TOPCon / poly-Si tunnel oxide — different cell architecture, not a-Si:H based.
- Al2O3 / SiNx passivation — used on PERC (high-T-tolerant; not SHJ).

## Gotchas
- Hard ≤200 °C process ceiling — fire-through Ag pastes ([[low-T-Ag-paste-Solamet-PV21A]], [[low-T-Ag-paste-Solamet-PV56S]]) are NOT compatible.
- Sputter damage from PVD seed deposition (Cu, Al, TiW) costs ~10 mV Voc; recoverable by 200 °C / 15 min anneal in air ([[2019-hatt-noble-shj-solrrl]]).
- Laser ablation of dielectric/Al/AlOx must use UV fs lasers and pulse energy below the passivation-damage threshold (~4.7 µJ at 343 nm with ≥500 nm Cu buffer in [[2021-hatt-stable-cu-plated-shj-eupvsec]]).
- Cu LID (light-induced degradation) in c-Si bulk is stable at 200 °C — does not anneal back like BO-LID; bulk-recombination effect ([[2015-lindroos-cu-lid-aalto-thesis]]). The a-Si:H + ITO stack is the front-line defence against Cu reaching the bulk.
- Hydrogen out-diffusion above ~280 °C causes irreversible passivation loss — light-soaking partially recovers but only for short excursions.

## Sources
- [[2025-yacouba-shj-silver-free-metallization-progPV]] — quantitative thermal-budget data: 280 °C/5 s safe; 300 °C/5 s reversible (light-soak recovers); 320/360 °C irreversible.
- [[2018-pvtech-metallization-shj-cells-modules]] — canonical SHJ stack description (a-Si:H bilayer + ITO).
- [[2019-hatt-noble-shj-solrrl]] / [[2019-hatt-noble-bifacial-shj-aip]] / [[2021-hatt-stable-cu-plated-shj-eupvsec]] — Voc up to 731 mV on plated-Cu SHJ; PL imaging used for passivation health.
- [[2022-arena-sundrive-copper-metallisation-demonstration]] — 26.41% certified record on intact a-Si:H + ITO with plated Cu.
- [[2023-taiyangnews-heterojunction-technology-report]] — HJT 1.0/2.0/3.0 nomenclature and roadmap.
- [[2018-pv-international-metallization-shj]] / [[2018-pv-tech-metallization-interconnection-bifacial-shj]] / [[2024-itrpv-15th-edition-roadmap]] / [[2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] — SHJ stack context.
- [[2015-lindroos-cu-lid-aalto-thesis]] — bulk Cu-LID stability at 200 °C; surface-passivation independence.
