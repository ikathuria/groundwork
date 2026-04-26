---
type: method
slug: Cu-electroplating-acid-bath
aliases: [acid Cu plating, CuSO4 electroplating, Cupracid plating, sulfate Cu bath]
related_methods: [electroplated-Ni-Cu-stack, light-induced-plating, NOBLE-selective-Cu-plating, Ni-sputter-deposition]
key_reagents: [acid-Cu-sulfate-bath, sulfuric-acid-H2SO4, nickel-sulfamate-bath]
known_failure_modes: [TCO-pitting-during-plating, Cu-out-diffusion-through-cap-stack, plating-resist-undercut, FF-degradation-contact-resistance]
sources: [2017-jeon-electroless-ni-front-metallization, 2018-electrochemsci-barrier-properties-electroplated-ni, 2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-taiyangnews-heterojunction-technology-report, 2024-itrpv-15th-edition-roadmap, 2024-lachowicz-cu-plated-shj-aging-mini-modules, atotech-cupracid-ultra-a-tds, atotech-solar-industry-overview, fisher-AA8902018-nickel-sulfamate-hydrate, fisher-AC197730010-cu-sulfate-pentahydrate-sds, fisher-AC424525000-sulfuric-acid-acs-sds, pvtech-metallization-challenges-cell-manufacturing]
tags: [plating, acid-Cu, sulfate-bath, electroplating, Cu-conductor, hypothesis-core]
---

# Cu Electroplating (Acid Bath)

## What it measures / does
DC or pulsed electroplating of Cu from a sulfuric-acid-based CuSO4 electrolyte (Cupracid family) onto an externally-biased cathode. Produces low-stress, ductile Cu fingers with bulk resistivity ~2 uOhm.cm — only slightly above pure Cu (1.7 uOhm.cm). The Cu-thickening step in any plated-Ni-Cu stack and in resist-free direct-on-TCO architectures (NOBLE, SunDrive).

## When to use it
The hypothesis-defining metallization step. Used after the Ni-barrier is in place (or directly on TCO + adhesion-tuned route, SunDrive), after patterning (laser / inkjet / photolithography), to grow 1-10 um of Cu finger.

## Key parameters
- Bath (Cupracid ULTRA TDS):
  - CuSO4·5H2O: 195-255 g/L (210 g/L optimum).
  - H2SO4 (66 deg Baume): 50-70 g/L (60 g/L optimum).
  - Cl-: 80-150 mg/L (100 mg/L optimum).
  - Cupracid Make-up 10 mL/L; Part A and Part B 0.4-0.6 mL/L each.
- Operating: 24-28 C, 1-6 A/dm² (3 A/dm² optimum), V 1-4 V, ripple <=10%.
- Anodes: phosphorus-bearing Cu (P 0.03-0.06%), nuggets/balls in Ti baskets.
- Pulse-reverse (NOBLE): 6 A/dm², 15 ms forward / 1 ms reverse, anodic:cathodic 4.5; selectively dissolves parasitic seeds.
- Filtration 5 um at 2-3 turnovers/h; PVC sparger air agitation.
- Throughput on Maxwell line: simultaneous front+rear plate; SunDrive ~60 cells/h prototype, 510 cells/h target.
- Cu finger geometry: 11-30 um wide, 6.7-7.0 um tall, aspect ratio 1.0-1.2 (SunDrive).

## Common variants / alternatives
- [[light-induced-plating]] — illumination-driven, no external front-grid contact.
- [[NOBLE-selective-Cu-plating]] — selective via native AlOx mask.
- Pyrophosphate Cu bath — alkaline alternative; less common for solar.

## Things to watch for (failure modes)
- [[../failure-modes/TCO-pitting-during-plating]] — uncontrolled bath / over-current pits ITO; Atotech TDS notes pitting wetting agent (Cupracid GM Plus).
- [[../failure-modes/Cu-out-diffusion-through-cap-stack]] — sulfate bath impurities (S, Cl, C, O) accelerate grain-boundary out-diffusion (Karas 2022).
- [[../failure-modes/plating-resist-undercut]] — acidic Cu attacks undercured hot-melt mask sidewalls.
- [[../failure-modes/FF-degradation-contact-resistance]] — non-uniform Cu thickness raises Rs.

## Sources
- [[2017-jeon-electroless-ni-front-metallization]] — Cu electroplated on top of Ni seed.
- [[2018-electrochemsci-barrier-properties-electroplated-ni]] — beaker-cell setup, 25 C, Pt anode, ~1.5 um Cu in 1500 s.
- [[2018-pv-international-metallization-shj]] — multiple SHJ Cu-plating routes reviewed.
- [[2018-pv-tech-metallization-interconnection-bifacial-shj]] — three Cu-plating routes; CSEM 24.1% via PVD seed + hotmelt + Cu plate.
- [[2018-pvtech-metallization-shj-cells-modules]] — direct Cu-on-TCO route; rho ~2x10⁻⁶ Ohm.cm.
- [[2019-hatt-noble-bifacial-shj-aip]] — same pulsed Cu plating as NOBLE SolRRL.
- [[2019-hatt-noble-shj-solrrl]] — pulsed forward/reverse Cu plating, 6 A/dm², slightly acidic CuSO4.
- [[2021-hatt-stable-cu-plated-shj-eupvsec]] — same pulsed Cu plating; line resistivity ~2 uOhm.cm.
- [[2022-arena-sundrive-copper-metallisation-demonstration]] — proprietary two-step adhesion-tuned Cu plating directly on TCO.
- [[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — selective electrodeposition through PECVD dielectric voids.
- [[2023-taiyangnews-heterojunction-technology-report]] — central to Maxwell process flow.
- [[2024-itrpv-15th-edition-roadmap]] — implicit in "plating technologies" market-share projection.
- [[2024-lachowicz-cu-plated-shj-aging-mini-modules]] — selective Cu deposition on seed grid through dielectric voids.
- [[atotech-cupracid-ultra-a-tds]] — direct application; canonical operating window.
- [[atotech-solar-industry-overview]] — Cupracid family adapted for solar metallization.
- [[fisher-AA8902018-nickel-sulfamate-hydrate]] — sequential step (Ni first, then Cu).
- [[fisher-AC197730010-cu-sulfate-pentahydrate-sds]] — bath make-up reagent at 195-255 g/L.
- [[fisher-AC424525000-sulfuric-acid-acs-sds]] — direct bath component, 50-70 g/L.
- [[pvtech-metallization-challenges-cell-manufacturing]] — Cu-thickening step on top of Ni seed.
