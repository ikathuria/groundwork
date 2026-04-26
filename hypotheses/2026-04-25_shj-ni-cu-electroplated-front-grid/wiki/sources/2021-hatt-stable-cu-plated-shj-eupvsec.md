---
type: source
id: 2021-hatt-stable-cu-plated-shj-eupvsec
source_type: paper
title: "Stable Copper Plated Metallization on SHJ Solar Cells & Investigation of Selective Al/AlOx Laser Patterning"
authors: ["Hatt, T.", "Bartsch, J.", "Schellinger, S.", "Schneider, J.", "Brand, A. A.", "Kluska, S.", "Glatthaar, M."]
year: 2021
doi:
url: https://www.ise.fraunhofer.de/content/dam/ise/de/documents/publications/conference-paper/38th-eupvsec-2021/Hatt_2DV3.pdf
raw_path: raw/papers/2021-hatt-stable-cu-plated-shj-eupvsec.pdf
tags: [SHJ, NOBLE, Cu-electroplating, laser-patterning, Al-AlOx, EUPVSEC, fraunhofer-ise]
created: 2026-04-26
updated: 2026-04-26
---

# Stable Copper Plated Metallization on SHJ Solar Cells & Investigation of Selective Al/AlOx Laser Patterning

**Hatt, T., Bartsch, J., Schellinger, S., Schneider, J., Brand, A. A., Kluska, S., Glatthaar, M.** — *Proc. 38th EUPVSEC, 2021*.

## Summary

Fraunhofer ISE EUPVSEC 2021 paper showing that the NOBLE Cu-plating route on SHJ has matured to reproducible 22.6 % efficiency on large-area (M2) industrial SHJ precursors, comparable to the screen-printed Ag reference, using NaOHaq inkjet patterning of the Al/AlOx mask. Introduces a femtosecond UV (343 nm) laser-ablation alternative to inkjet for higher throughput, with a first 21.4 % large-area cell.

## Key claims

- 12 large-area SHJ cells metallised by NOBLE with NaOHaq inkjet patterning achieved reproducible η ≈ 22.6 % with Voc above 735 mV — close to the screen-printed Ag reference (best 22.7 %) on the same M2 precursor batch.
- NOBLE plated Cu fingers vs. screen-printed Ag low-T paste: width 25–30 µm vs. 30–40 µm, line resistivity ρL ≈ 2 µΩ·cm vs. ≥ 5 µΩ·cm, contact resistivity ρc = 0.1–1 mΩ·cm² vs. ≥ 2 mΩ·cm², peel force ≥ 2 N/mm vs. ≤ 0.5 N/mm.
- Contact resistivities below 1 mΩ·cm² are required to avoid series-resistance penalty when narrowing finger width — a requirement met by NOBLE.
- Femtosecond UV laser ablation (343 nm) of the top Al/AlOx layer is feasible at two operating regimes: (i) high pulse energy with thicker buffer Cu (500 nm) preventing passivation damage, (ii) low pulse energy with multiple repetitions on the same spot.
- First large-area SHJ cell with laser patterning reached η = 21.4 %, Voc = 726.8 mV, FF = 76.3 %, with selective plating successful and ρc down to 1.6 ± 0.3 mΩ·cm². ~10 mV Voc loss vs. inkjet attributed to early-stage laser damage.
- NaOHaq inkjet patterning is judged "mature enough to be tested on industrial pilot."

## Methods used

- [[methods/NOBLE-selective-Cu-plating]] — the optimised NOBLE process flow
- [[methods/Cu-electroplating-acid-bath]] — Cu electrodeposition step
- [[methods/inkjet-mask-patterning]] — NaOHaq inkjet patterning of the Al/AlOx mask
- [[methods/laser-ablation-of-dielectric]] — femtosecond UV laser ablation of Al/AlOx (alternative patterning route)
- [[methods/transfer-length-method]] — TLM measurements of ρc on large-area cells
- [[methods/IV-curve-measurement]] — sun-simulator I-V on M2 cells
- [[methods/dark-IV-suns-Voc]] — pFF / Suns-VOC tracking
- [[methods/minority-carrier-lifetime-photoluminescence]] — PL imaging at 1-sun to assess passivation damage from laser
- [[methods/peel-test-90deg]] — peel force ≥ 2 N/mm reported for plated Cu fingers
- [[methods/screen-printed-Ag-paste]] — Ag reference cells on the same precursor batch

## Reagents

- [[reagents/acid-Cu-sulfate-bath]] — Cu electroplating bath
- [[reagents/ITO-transparent-conductive-oxide]] — TCO underlying the PVD seed
- [[reagents/silver-Ag-cap]] — Ag capping protecting plated Cu
- [[reagents/low-T-Ag-paste-generic-SHJ-grade]] — screen-printed Ag reference paste
- [[reagents/a-Si-H-passivation]] — passivating contact (sensitive to laser damage)

## Organisms / substrates

- [[organisms/SHJ-cell-M6]] — M2 industrial SHJ precursors (closest available slug to M2 large-area)

## Failure modes flagged

- [[failure-modes/a-Si-H-passivation-degradation]] — laser-induced passivation damage discussed and characterised by PL imaging
- [[failure-modes/FF-degradation-contact-resistance]] — contact resistivities below 1 mΩ·cm² required to avoid series-R losses for narrow fingers
- [[failure-modes/finger-adhesion-loss-after-DH]] — peel force ≥ 2 N/mm is the design target for plated Cu adhesion
- [[failure-modes/silver-supply-bottleneck]] — explicit motivation: silver supply will soon become a bottleneck

## Supports / contradicts

- **Supports:** [[sources/2019-hatt-noble-shj-solrrl]] — establishes Solar RRL NOBLE route at large-area
- **Supports:** [[sources/2019-hatt-noble-bifacial-shj-aip]] — full-area bifacial implementation
- **Supports:** [[sources/2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] — Fraunhofer ISE colleagues' parallel screen-printed Ag work; this paper is the plated alternative

## Notable quotes

> "Reproducible I-V characteristics reached on 12 large area SHJ solar cells metallized with the 'NOBLE' approach (inkjet patterning) compared to the best screen-printed reference." — *Figure 2 caption*

> "Contact resistivities ρc below 1 mΩ·cm² are required to avoid impacting the series resistance of the solar cell. This requirement is well met with the 'NOBLE' metallization." — *§Approach*

> "The so-called 'NOBLE' approach with inkjet patterning is considered to be mature enough to be tested on industrial pilot line." — *Conclusion*

> "Especially silver supply will soon become a bottleneck and is already causing 10% of the costs for a typical solar module." — *§Introduction*
