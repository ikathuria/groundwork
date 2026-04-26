---
type: source
id: 2021-hatt-stable-cu-plated-shj-eupvsec
source_type: paper
title: "Stable Copper Plated Metallization on SHJ Solar Cells & Investigation of Selective Al/AlOx Laser Patterning"
authors: ["Hatt, T.", "Bartsch, J.", "Schellinger, S.", "Schneider, J.", "Brand, A.A.", "Kluska, S.", "Glatthaar, M."]
year: 2021
doi: null
url: "https://userarea.eupvsec.org/proceedings/EU-PVSEC-2021/3CO.4.1/"
raw_path: raw/papers/2021-hatt-stable-cu-plated-shj-eupvsec.pdf
tags: [SHJ, NOBLE, copper-plating, laser-patterning, femtosecond-UV, photoluminescence, contact-resistivity, Fraunhofer-ISE, EUPVSEC]
---

# Stable Copper Plated Metallization on SHJ Solar Cells & Investigation of Selective Al/AlOx Laser Patterning

## Summary
38th EU-PVSEC paper showing the NOBLE process matured to industrially relevant scale: 12 large-area SHJ cells reproducibly delivering ~22.6% with the optimized NaOHaq inkjet patterning, equal to the screen-printed Ag reference (22.7%) on the same SHJ precursors. Introduces a femtosecond-UV (343 nm) laser ablation alternative to inkjet patterning, with photoluminescence imaging (1-sun) used to map laser-induced passivation damage. Two laser regimes are explored — high pulse energy with thicker buffer PVD layer, and low pulse energy + multiple pulses — demonstrating first 21.4% large-area cell with laser-patterned NOBLE Cu metallization. Reports the cleanest "performance comparison" data: NOBLE Cu fingers 25–30 µm wide, line resistivity ≈2 µΩ·cm, contact resistivity 0.1–1 mΩ·cm² to ITO, peel force ≥2 N/mm — all clearly superior to screen-printed Ag (40 µm wide, ≥5 µΩ·cm, ≥2 mΩ·cm², ≤0.5 N/mm).

## Key claims
- "Plated Cu (NOBLE)" finger characteristics on SHJ-ITO (Table 1, p. 2): width 25–30 µm, line resistivity ρL ≈ 2 µΩ·cm, contact resistivity ρc 0.1–1 mΩ·cm², peel force ≥ 2 N/mm.
- "Screen-printed Ag" comparison (same Table): width 30–40 µm, ρL ≥ 5 µΩ·cm, ρc ≥ 2 mΩ·cm², peel force ≤ 0.5 N/mm — i.e. NOBLE Cu beats every electrical and mechanical metric.
- 12 large-area SHJ cells across PVD seed types (TiW/Ag, Ag, etc.) reproducibly hit ~22.6% efficiency with Voc above 735 mV, vs Ag screen-print reference 22.7% (Fig. 2, p. 2).
- Femtosecond UV (343 nm) laser ablation patterning of Al/AlOx layer: with high pulse energy (2.2–4.7 µJ) and thicker PVD buffer (Cu 500 nm), passivation is preserved up to ~4.7 µJ (PL imaging confirms), and selective Cu plating succeeds.
- Low-pulse-energy regime (0.2–0.7 µJ) with 1–35 pulse repetitions: smaller damage-free process window but ρc as low as 1.6 ± 0.3 mΩ·cm² achieved.
- First large-area NOBLE+laser cell: η = 21.4%, Voc = 726.8 mV, FF = 76.3%, pFF = 83.4% (Table 2). Inkjet variant: η = 22.7%, Voc = 735.7, FF = 80.5%, pFF = 84.4%. The 10 mV Voc loss in the laser variant attributed to early-stage passivation damage.
- Silver supply identified as imminent bottleneck: ~10% of typical solar module cost is silver paste; smart-wire interconnection (which had been the silver-saving stopgap) becoming proprietary to one manufacturer.
- Cites Hatt 2020 IEEE PVSC (ref 12) for PVD-contacting-layer optimization and Hatt 2020 MIW (ref 14) for resist-free busbar-compatible plating reaching 22.7%.
- References hydrophobic SAM treatment of AlOx (Hatt et al. ACS AMI 2021, ref 15) for instantaneous patterning surface readiness.

## Methods used
- [[../methods/NOBLE-selective-Cu-plating]] — full mature process applied to 12 large-area cells.
- [[../methods/inkjet-mask-patterning]] — NaOHaq inkjet patterning of Al, optimized version.
- [[../methods/laser-ablation-of-dielectric]] — femtosecond UV (343 nm) laser ablation of Al/AlOx as patterning alternative.
- [[../methods/EL-electroluminescence-imaging]] — not directly; uses PL at 1-sun.
- [[../methods/minority-carrier-lifetime-photoluminescence]] — PL imaging at 1-sun for damage characterization.
- [[../methods/Cu-electroplating-acid-bath]] — same pulsed Cu plating as prior NOBLE papers.
- [[../methods/transfer-length-method]] — implied, ρc 0.1–1 mΩ·cm² measured.
- [[../methods/peel-test-90deg]] — ≥2 N/mm peel force.
- [[../methods/IV-curve-measurement]] — STC, AM1.5g.

## Reagents
- [[../reagents/acid-Cu-sulfate-bath]] — Cu electrolyte.
- [[../reagents/ITO-transparent-conductive-oxide]] — both faces of SHJ M2 precursor.
- [[../reagents/a-Si-H-passivation]] — passivation explicitly checked by PL.
- [[../reagents/silver-Ag-cap]] — Ag immersion cap.

## Organisms / substrates
- [[../organisms/SHJ-cell-M6]] — large-area M2 SHJ precursors covered both sides with ITO.
- [[../organisms/monocrystalline-Si-wafer-n-type]] — base substrate.

## Failure modes flagged
- [[../failure-modes/a-Si-H-passivation-degradation]] — quantified by PL; pulse energy >4.7 µJ damages.
- [[../failure-modes/Cu-finger-corrosion-encapsulant]] — controlled by Ag cap.
- [[../failure-modes/silver-supply-bottleneck]] — explicitly flagged as motivation.
- [[../failure-modes/FF-degradation-contact-resistance]] — laser-pattern variant lower FF (76.3 vs 80.5%) due to PVD-Al inhomogeneity / focusing variance.

## Supports / contradicts
- Supports: [[2019-hatt-noble-shj-solrrl]] (extends to large-area, laser variant)
- Supports: [[2019-hatt-noble-bifacial-shj-aip]] (companion full-area lineage)
- Supports: [[2018-pv-tech-metallization-interconnection-bifacial-shj]] (CSEM resist-route ~24% as upper benchmark; but NOBLE matches at lower process complexity)
- Cites and supports: [[2021-goldschmidt-tech-learning-tw-pv]], the Verlinden TW-PV paper (Verlinden 2020) for silver-supply rationale.

## Notable quotes
- "By reducing the finger width, contact resistivities ρc below 1 mΩ·cm² are required to avoid impacting the series resistance of the solar cell. This requirement is well met with the 'NOBLE' metallization." — p. 2.
- "Encouraging contact resistivity ρc down to 1.6 ± 0.3 mΩ·cm² was measured" with the low-pulse-energy laser variant.
- "Especially silver supply will soon become a bottleneck and is already causing 10% of the costs for a typical solar module." — Introduction, p. 1.
