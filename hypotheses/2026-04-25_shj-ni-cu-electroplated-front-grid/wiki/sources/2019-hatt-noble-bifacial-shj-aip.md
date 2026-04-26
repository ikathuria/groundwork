---
type: source
id: 2019-hatt-noble-bifacial-shj-aip
source_type: paper
title: "Establishing the 'Native Oxide Barrier Layer for Selective Electroplated' Metallization for Bifacial Silicon Heterojunction Solar Cells"
authors: ["Hatt, T.", "Bartsch, J.", "Kluska, S.", "Glatthaar, M."]
year: 2019
doi: "10.1063/1.5123832"
url: "https://aip.scitation.org/doi/10.1063/1.5123832"
raw_path: raw/papers/2019-hatt-noble-bifacial-shj-aip.pdf
tags: [SHJ, NOBLE, bifacial, full-area-cell, inkjet-NaOH, Al2O3-mask, contact-angle, ITO, sputtering]
---

# Establishing the "Native Oxide Barrier Layer for Selective Electroplated" Metallization for Bifacial Silicon Heterojunction Solar Cells

## Summary
AIP Conference Proceedings companion paper (MIW 2018) by the Fraunhofer ISE NOBLE team that reports the first full-area (156×156 mm²) SHJ cell metallized by NOBLE: efficiency 20.0% with Voc up to 731 mV — i.e. PVD/sputtering does not damage the a-Si:H passivation. The paper goes deeper into why the NaOHaq inkjet-printing works: surface chemistry of the Al / Al₂O₃ / Al(OH)₃ layer, contact-angle evolution from hydrophilic (CA ≈ 30°) immediately after PVD to hydrophobic (CA ≈ 100–120°) after ~5 days of ambient storage — the hydrophobic surface being essential to keep ink droplets from spreading and producing fingers <30 µm wide. Also reports SHJ I-V history: from initial wide-finger 100 µm test (Jsc 33.8 mA/cm², FF 70.7%) to optimized 30-µm finger lab cell at 20.2%.

## Key claims
- A homogeneous bifacial Cu plating requires a thin PVD metal seed; without one, only half the cell area plates due to inhomogeneous current distribution on the high-Rsh ITO (Fig. 1, p. 1).
- Optimal PVD stack: Cu(100 nm)/Al(50–100 nm) on ITO. SEM nanostructure: ITO is polycrystalline ~20–30 nm grains; 50 nm Al is flatter and amorphous; 100 nm Al becomes porous and rounder.
- Wetting evolution on Al surface: contact angle goes from 30° (just-deposited) to 90° (~20 h ambient) to 100–120° (~5 days). Drier 50°C/6%-humidity storage reaches the hydrophobic state in 1 day. The hydrophobic surface is critical for fine-line NaOHaq inkjet patterning without spreading.
- First full-area 156×156 mm² SHJ cell with NOBLE: η = 20.0%, Voc = 731 mV — confirming that sputtering Cu/Al through TCO does not degrade SHJ passivation.
- Reference screen-printed (low-T Ag) full-area cell on same batch: η = 21.5%, FF = 79.0%.
- Path to ~22% identified: optimize NaOHaq inkjet-printing to eliminate finger interruptions.

## Methods used
- [[../methods/NOBLE-selective-Cu-plating]] — full process flow demonstrated on full-area cells.
- [[../methods/inkjet-mask-patterning]] — NaOHaq, droplets 2–5 pL, hydrophobic AlOx surface required.
- [[../methods/Ni-sputter-deposition]] — Cu/Al PVD stack via sputtering or e-beam evaporation (note: Ni not used here; canonical method slug applies to PVD-metal-seed deposition more broadly).
- [[../methods/Cu-electroplating-acid-bath]] — same pulsed Cu plating as in [[2019-hatt-noble-shj-solrrl]].
- [[../methods/IV-curve-measurement]] — STC, AM1.5g.
- [[../methods/dark-IV-suns-Voc]] — pFF used to interpret limitations.

## Reagents
- [[../reagents/acid-Cu-sulfate-bath]] — Cu electrolyte.
- [[../reagents/ITO-transparent-conductive-oxide]] — ~75 nm ITO.
- [[../reagents/a-Si-H-passivation]] — full SHJ stack.
- [[../reagents/silver-Ag-cap]] — immersion Ag.
- New reagent flagged: NaOH(aq) 1 wt% inkjet ink (already flagged in 2019-hatt-solrrl).

## Organisms / substrates
- [[../organisms/SHJ-cell-M6]] — full-area 156×156 mm² (≈ M2/M6 size) commercial SHJ precursors with ITO both sides.

## Failure modes flagged
- [[../failure-modes/TCO-pitting-during-plating]] — observed once (parasitic etching of ITO during PVD-metal etch-back) and corrected by selective etchant choice.
- [[../failure-modes/a-Si-H-passivation-degradation]] — explicitly checked (Voc up to 731 mV indicates no harm).
- [[../failure-modes/FF-degradation-contact-resistance]] — finger interruptions in early prints reduced FF; resolved by tuning AlOx hydrophobicity.
- [[../failure-modes/plating-resist-undercut]] — avoided by going resist-free.

## Supports / contradicts
- Supports: [[2019-hatt-noble-shj-solrrl]] (companion paper)
- Supports: [[2018-pv-tech-metallization-interconnection-bifacial-shj]] (Lachowicz 24.1% resist-route used as reference)
- Foundational for: [[2021-hatt-stable-cu-plated-shj-eupvsec]]

## Notable quotes
- "The first promising efficiency of 20.0% was established by this route on a full area SHJ solar cell" (156×156 mm²).
- "Almost five days allow reaching a hydrophobic surface (CA ≈ 100–120°) which stabilizes after that time. The Al surface might be covered by a porous Al(OH)₃ which grows over the time depending of the storage temperature and humidity."
