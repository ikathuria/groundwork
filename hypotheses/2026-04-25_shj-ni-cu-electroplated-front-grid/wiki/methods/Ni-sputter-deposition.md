---
type: method
slug: Ni-sputter-deposition
aliases: [PVD Ni, sputtered Ni seed, magnetron sputtering Ni, PVD seed layer]
related_methods: [electroplated-Ni-Cu-stack, NOBLE-selective-Cu-plating, Cu-electroplating-acid-bath, thermal-evaporation-Ag-cap]
key_reagents: [nickel-sulfamate-bath, ITO-transparent-conductive-oxide, a-Si-H-passivation]
known_failure_modes: [a-Si-H-passivation-degradation, Ni-barrier-pinholes, finger-adhesion-loss-after-DH, TCO-pitting-during-plating]
sources: [2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, 2023-taiyangnews-heterojunction-technology-report, atotech-solar-industry-overview, fisher-AA8902018-nickel-sulfamate-hydrate, fisher-AC424525000-sulfuric-acid-acs-sds]
tags: [PVD, sputtering, Ni-seed, Cu-seed, blanket-deposition, etch-back-route]
---

# Ni Sputter Deposition (PVD Seed Layer)

## What it measures / does
Magnetron-sputter or e-beam deposition of a thin metal seed (Ni, Cu, Ag, TiW) blanket-coating the SHJ TCO surface. The seed enables uniform Cu electroplating by carrying the cathodic current across the cell, then is etched back outside the plated grid. Sputtered metal also serves as the underlying layer in NOBLE (Cu/Al stack) and in Maxwell's commercial seed-and-plate flow. Note: this method slug covers PVD-seed deposition broadly — Ni, Cu, and Ag PVD all share the same equipment / process window.

## When to use it
Use as the seed-deposition step in any SHJ Cu plating route that requires uniform current distribution (mandatory for bifacial homogeneity — Hatt 2019 shows that without PVD seed only half the cell area plates). For SHJ specifically, PVD seed gives better Cu adhesion than direct Cu electrodeposition on TCO.

## Key parameters
- Seed thickness: 50-100 nm (Cu); 50-100 nm Al (NOBLE); ~500 nm Cu buffer for high-energy laser variant.
- SHJ thermal limit: <=200 C cumulative process; sputter-deposit cool to preserve a-Si:H.
- Anneal recovery: 200 C / 15 min in air recovers a-Si:H sputter damage (Hatt 2019).
- Maxwell process: sputtered Cu seed, then photoresist mask, simultaneous front+rear Cu electroplate.
- Throughput: Maxwell PECVD 7,200 wafers/h (M10); Von Ardenne PVD 7,500 wafers/h.
- ITO grain size 20-30 nm; 50 nm Al amorphous; 100 nm Al becomes porous (Hatt 2019).

## Common variants / alternatives
- [[electroless-Ni-deposition]] — chemical alternative without vacuum; better for non-conductive substrates.
- [[electroplated-Ni-Cu-stack]] — fully plated alternative without PVD seed.
- [[NOBLE-selective-Cu-plating]] — uses PVD Cu/Al stack with native AlOx as mask.

## Things to watch for (failure modes)
- [[../failure-modes/a-Si-H-passivation-degradation]] — sputter-induced damage to a-Si:H/c-Si interface; mitigated by 200 C anneal.
- [[../failure-modes/Ni-barrier-pinholes]] — incomplete coverage at islands / steps in the TCO topography.
- [[../failure-modes/finger-adhesion-loss-after-DH]] — micro-voids reported between Cu and Ni-on-TCO interfaces (Geissbühler 2018).
- [[../failure-modes/TCO-pitting-during-plating]] — etch-back step can pit the underlying ITO if selective etchant uncontrolled.

## Sources
- [[2018-pv-international-metallization-shj]] — PVD seed-layer noted to give better Cu adhesion than direct Cu electrodeposition on TCO; "evidence of micro-voids" between Cu and Ni-on-TCO.
- [[2018-pv-tech-metallization-interconnection-bifacial-shj]] — PVD seed (TiW, Ag, Cu) deposition; CSEM 24.1% record bifacial via PVD seed + hotmelt mask + plate.
- [[2019-hatt-noble-bifacial-shj-aip]] — Cu/Al PVD stack via sputtering or e-beam evaporation; canonical NOBLE PVD step.
- [[2019-hatt-noble-shj-solrrl]] — Cu-PVD or Ag-PVD seed (note: Ni not used in NOBLE — slug covers PVD-metal seed broadly).
- [[2023-taiyangnews-heterojunction-technology-report]] — Maxwell sputtered Cu seed + photoresist + simultaneous front+rear plate.
- [[atotech-solar-industry-overview]] — alternative to plated Ni; not Atotech's domain (plating only) but contextual.
- [[fisher-AA8902018-nickel-sulfamate-hydrate]] — Ni sulfamate bath is for *electroplated* Ni, not PVD; included for cross-reference.
- [[fisher-AC424525000-sulfuric-acid-acs-sds]] — H2SO4 used in pre-deposition wet cleans, not in PVD itself.
