---
type: source
id: 2019-hatt-noble-shj-solrrl
source_type: paper
title: "Native Oxide Barrier Layer for Selective Electroplated Metallization of Silicon Heterojunction Solar Cells"
authors: ["Hatt, T.", "Kluska, S.", "Yamin, M.", "Bartsch, J.", "Glatthaar, M."]
year: 2019
doi: 10.1002/solr.201900006
url: https://publica.fraunhofer.de/bitstreams/4683c40e-4c9c-4e9b-90ae-0d76d7527564/download
raw_path: raw/papers/2019-hatt-noble-shj-solrrl.pdf
tags: [SHJ, Cu-electroplating, NOBLE, ITO, contact-resistivity, fraunhofer-ise, pivotal]
created: 2026-04-26
updated: 2026-04-26
---

# Native Oxide Barrier Layer for Selective Electroplated Metallization of Silicon Heterojunction Solar Cells

**Hatt, T., Kluska, S., Yamin, M., Bartsch, J., Glatthaar, M.** — *Solar RRL, 2019, 3, 1900006*. DOI: 10.1002/solr.201900006

## Summary

Canonical NOBLE paper. Introduces the "Native Oxide Barrier Layer for Selective Electroplating" route for SHJ cells: a thin sputtered Cu/Al (or Ag/Al) PVD stack deposited on ITO, with the Al layer locally inkjet-etched by aqueous NaOH to expose the metal seed only at grid positions. The Al's native oxide (Al₂O₃) inhibits Cu plating elsewhere, yielding selective bifacial Cu electrodeposition without an organic resist mask.

## Key claims

- First SHJ solar cell metallised with the NOBLE route reached η = 20.2 %, FF = 78.0 %, Voc = 718 mV, Jsc = 36.1 mA/cm² on a 6.25 cm² lab-scale cell with non-optimised metal sputtering and grid design (pFF limited to 80.5 % by small-cell rim effect).
- Contact resistivities ρc on ITO from TLM after NOBLE metallisation: 1.8–4.0 mΩ·cm² across Cu/Cu and Ag/Cu seed stacks on a-Si:H(n) and a-Si:H(p) sides; lit. values for optimised Cu-alloy seeds reach 0.4–0.8 mΩ·cm².
- The native Al₂O₃ on the Al surface acts as the plating-inhibiting barrier — confirmed by selective Cu deposition only in NaOH-etched grid lines while the rest of the wafer (covered by Al/Al₂O₃) sees no parasitic plating.
- Selective wet etching characterised across Al, Cu, Ag, Ti, NiV: NaOH (1 %, 4 %) etches Al at 0.8–2.6 nm/s without attacking Cu or Ag; H₃PO₄/HNO₃ etches Cu/Ag fast (>10 nm/s) at room temperature for the post-plating PVD seed-layer etchback.
- NOBLE saves one process step versus the resist-mask route and avoids organic mask consumables; only ~5–10 % of the cell area must be inkjet-printed, vs. >90 % for the resist route.
- Forward/reverse pulsed Cu plating at 6 A/dm² medium current density, 15 ms forward / 1 ms reverse, anodic:cathodic = 4.5, plus immersion Ag capping (~200 nm) to inhibit Cu oxidation.

## Methods used

- [[methods/NOBLE-selective-Cu-plating]] — the route introduced in this paper
- [[methods/Cu-electroplating-acid-bath]] — slightly acidic Cu-sulfate electrolyte with pulsed plating
- [[methods/electroplated-Ni-Cu-stack]] — bifacial Cu electrodeposition on PVD seed
- [[methods/inkjet-mask-patterning]] — inkjet printing of NaOH ink to pattern the Al/Al₂O₃ mask
- [[methods/transfer-length-method]] — TLM measurements of ρc on a-Si:H(n) and a-Si:H(p) sides
- [[methods/IV-curve-measurement]] — 1-sun STC characterisation
- [[methods/dark-IV-suns-Voc]] — pFF / Suns-VOC characterisation

## Reagents

- [[reagents/acid-Cu-sulfate-bath]] — Cu electroplating electrolyte
- [[reagents/ITO-transparent-conductive-oxide]] — TCO substrate for the PVD seed stack
- [[reagents/silver-Ag-cap]] — immersion Ag capping (~200 nm) to inhibit Cu oxidation
- [[reagents/a-Si-H-passivation]] — passivating contact below ITO
- [[reagents/sulfuric-acid-H2SO4]] — H₃PO₄/HNO₃ blend used for PVD layer etch-back

## Organisms / substrates

- [[organisms/SHJ-cell-M6]] — commercial bifacial SHJ precursors (used in 6.25 cm² diced form for first proof-of-concept)
- [[organisms/monocrystalline-Si-wafer-n-type]] — n-type c-Si base for the SHJ architecture

## Failure modes flagged

- [[failure-modes/TCO-pitting-during-plating]] — discusses ITO non-attack during etch-back; SEM confirms ITO thickness preserved
- [[failure-modes/plating-resist-undercut]] — argued away as a NOBLE advantage: only 5–10 % of cell area is patterned vs. >90 % for resist route
- [[failure-modes/Cu-finger-oxidation-damp-heat]] — motivates the immersion Ag capping

## Supports / contradicts

- **Supports:** [[sources/2019-hatt-noble-bifacial-shj-aip]] — companion AIP paper formalises bifacial implementation
- **Supports:** [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — follow-on work demonstrating large-area NOBLE stability and laser patterning of Al/AlOx
- **Supports:** [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — independent CSEM validation that Cu plating on TCO is industrially viable
- **Supports:** [[sources/2025-yacouba-shj-silver-free-metallization-progPV]] — cites NOBLE as benchmark for silver-free plated SHJ

## Notable quotes

> "The NOBLE (native oxide barrier layer for selective electroplating) approach allows reaching a first encouraging SHJ solar cell efficiency of 20.2% with low contact resistivity." — *Abstract*

> "Contact resistivities below 3 mΩ cm² were achieved on stack systems of ITO-CuPVD-Cuplated-Agplated and the improvement of the sputtering might allow reaching 0.4 mΩ cm² as reported in the literature." — *Conclusion, p. 17*

> "The native oxide Al2O3 (alumina) growing in ambient atmosphere on the Al surface is convenient for the selective electroplating described below." — *§2 Approach*
