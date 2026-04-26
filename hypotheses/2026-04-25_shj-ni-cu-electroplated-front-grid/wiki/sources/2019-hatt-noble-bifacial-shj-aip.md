---
type: source
id: 2019-hatt-noble-bifacial-shj-aip
source_type: paper
title: "Establishing the Native Oxide Barrier Layer for Selective Electroplated Metallization for Bifacial Silicon Heterojunction Solar Cells"
authors: ["Hatt, T.", "Bartsch, J.", "Kluska, S.", "Glatthaar, M."]
year: 2019
doi: 10.1063/1.5123832
url: https://publica.fraunhofer.de/bitstreams/f38ba150-c4d2-48b9-8bd0-7d60908a3297/download
raw_path: raw/papers/2019-hatt-noble-bifacial-shj-aip.pdf
tags: [SHJ, Cu-electroplating, NOBLE, bifacial, fraunhofer-ise, full-area-cell]
created: 2026-04-26
updated: 2026-04-26
---

# Establishing the Native Oxide Barrier Layer for Selective Electroplated Metallization for Bifacial Silicon Heterojunction Solar Cells

**Hatt, T., Bartsch, J., Kluska, S., Glatthaar, M.** — *AIP Conference Proceedings 2147, 040005 (SiliconPV 2019)*. DOI: 10.1063/1.5123832

## Summary

AIP Conf. Proc. follow-on to the Solar RRL NOBLE paper, focused on transferring the NOBLE selective Cu-plating route to full-area (156×156 mm²) bifacial SHJ cells. Reports process-window data (PVD-Al thickness, surface ageing for hydrophobicity, NaOH inkjet-printing parameters) and a first full-area cell at 20.0 % efficiency on industrial precursors with screen-printed Ag baseline at 21.5 % on the same batch.

## Key claims

- First full-area (156×156 mm²) bifacial SHJ cell metallised by NOBLE reached η = 20.0 %, Voc = 731 mV — confirming that the metal-PVD step does not damage a-Si:H passivation.
- On the same batch, Ag-screen-printed reference (low-temperature paste) reached η = 21.5 %, FF = 79.0 % — i.e. NOBLE is ~1.5 %abs below the screen-printed reference, with finger interruptions and grid design identified as the limiting factors.
- A thin metal seed layer (Cu or Ag, on top of ITO) is necessary for homogeneous bifacial plating: without it, plating stops at half the cell area (FIGURE 1a vs. 1b).
- PVD-Al hydrophobicity grows with native-oxide ageing: water contact angle goes from ~30° (fresh) to ~90° (after 20 h ambient) to 100–120° (after 5 days), or already hydrophobic after 1 day at 50 °C / 6 % RH — relevant for inkjet-line precision.
- Lines as narrow as 20–30 µm are achievable in the Al layer by inkjet-printing of low-concentration NaOHaq ink (droplets 2–5 pL).
- Cu seed-layer in non-grid positions removed by ammonium persulfate (NH₄)₂S₂O₈ after a thin immersion-Ag cap protects the plated Cu fingers.

## Methods used

- [[methods/NOBLE-selective-Cu-plating]] — process being established for full-area bifacial cells
- [[methods/Cu-electroplating-acid-bath]] — bifacial simultaneous Cu electrodeposition
- [[methods/Ni-sputter-deposition]] — PVD of the Cu/Al (or Ag/Al) seed and plating-mask stack (sputtering or e-beam evap)
- [[methods/inkjet-mask-patterning]] — inkjet patterning of NaOHaq ink to open Al
- [[methods/IV-curve-measurement]] — 1-sun STC characterisation
- [[methods/dark-IV-suns-Voc]] — Suns-VOC pseudo-efficiency comparisons

## Reagents

- [[reagents/acid-Cu-sulfate-bath]] — Cu electrolyte
- [[reagents/ITO-transparent-conductive-oxide]] — TCO substrate
- [[reagents/silver-Ag-cap]] — immersion Ag capping
- [[reagents/a-Si-H-passivation]] — passivating contact below ITO

## Organisms / substrates

- [[organisms/SHJ-cell-M6]] — 156×156 mm² industrial bifacial SHJ precursors

## Failure modes flagged

- [[failure-modes/Ni-Cu-line-resistance-rise-DH]] — discusses ITO sheet-resistance increase after etch-back damaging (chemical) of the TCO
- [[failure-modes/TCO-pitting-during-plating]] — etch-back of PVD Cu/Al risks attacking ITO underneath if not selective
- [[failure-modes/FF-degradation-contact-resistance]] — finger interruptions during inkjet-printing limit FF
- [[failure-modes/a-Si-H-passivation-degradation]] — addressed by demonstrating Voc up to 731 mV (rim effect overcome on full area)

## Supports / contradicts

- **Supports:** [[sources/2019-hatt-noble-shj-solrrl]] — the canonical NOBLE Solar RRL paper; this AIP paper is the bifacial scale-up
- **Supports:** [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — same group, EUPVSEC 2021 full-area stable run with laser patterning
- **Supports:** [[sources/2010-bartsch-lip-pvsc]] — Fraunhofer ISE LIP foundation

## Notable quotes

> "A first promising efficiency of 20.0% was established by this route on a full area SHJ solar cell." — *Conclusion*

> "The thin metal-seed layer deposited onto the TCO allows fast simultaneous bifacial electrodeposition of copper." — *§Approach*

> "The native oxide and hydroxide growing at the Al-surface after PVD seem to be a key-factor to obtain a hydrophobic surface suitable for fine line etching in the Al layer with NaOHaq inkjet-printing." — *§Fine Line Structuring*
