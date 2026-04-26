---
type: source
id: 2018-pvtech-metallization-shj-cells-modules
source_type: protocol
title: "Metallization and Interconnection for High-Efficiency Bifacial Silicon Heterojunction Solar Cells and Modules"
authors: ["Despeisse, M.", "Ballif, C.", "Faes, A.", "Lachowicz, A."]
year: 2018
doi: ""
url: https://www.pv-tech.org/wp-content/uploads/legacy-publication-pdfs/b40c4315ce-metallization-and-interconnection-for-silicon-heterojunction-solar-cells-and-modules.pdf
raw_path: raw/protocols/2018-pvtech-metallization-shj-cells-modules.pdf
tags: [SHJ, metallization, interconnection, SmartWire, Cu-plating, CSEM, protocol]
created: 2026-04-26
updated: 2026-04-26
---

# Metallization and Interconnection for Silicon Heterojunction Solar Cells and Modules

**Despeisse, M., Ballif, C., Faes, A., Lachowicz, A. (CSEM)** — *PV-Tech / Photovoltaics International, 2018*.

## Summary

CSEM/Meyer Burger methodology paper covering the three industrial paths to SHJ metallization: fine-line LCT Ag screen-print, SmartWire (SWCT) multi-wire interconnection, and Cu electroplating. Provides the canonical engineering target: **20 µm-wide Cu-plated fingers can be produced with line resistance ~1 Ω/cm, vs 5 Ω/cm for fine-line LCT Ag at ~30 µm width**. Documents the SHJ-specific Cu plating route — direct electroplating on the conductive front-side TCO (no LIP needed because TCO is conductive), with the TCO acting as a *built-in* Cu-migration barrier. Describes the standard process: "growth of a nickel–copper stack by plating … the nickel layer will form a nickel silicide barrier to copper diffusion after annealing."

## Key claims

- LCT Ag paste bulk resistivity: 6–10 ×10⁻⁶ Ω·cm — 2–3× higher than firing-through Ag on PERC.
- 30-µm-wide screen-printed LCT Ag fingers achieve line resistance ~5 Ω/cm; sufficient for SWCT 18-wire integration.
- 30 mg Ag per cell side achievable with fine-line print + SWCT, vs 180 mg/side baseline → cost from 8 ¢/cell down to ~1.33 ¢/cell.
- SWCT with 18 wires divides finger power loss by 13 vs 5BB (P_f ∝ 1/n_BB²), so finger line resistance can be relaxed from <1 Ω/cm (5BB) to up to 10 Ω/cm (18 wire) — completely changing the metallization design constraints.
- Cu electroplating on SHJ: "the plating is performed on the conductive front TCO layer of the SHJ solar cell. **This TCO layer will already act as an efficient barrier to copper migration towards the silicon, and therefore limit potential degradation.**"
- Standard SHJ Cu-plating process flow: (1) deposit dielectric/organic mask; (2) open mask to TCO; (3) grow Ni/Cu stack by plating — Ni → Ni-silicide barrier on anneal, Cu → conductive layer.
- Plated Cu bulk resistivity ~2×10⁻⁶ Ω·cm, only marginally above pure Cu (1.7×10⁻⁶ Ω·cm).
- Inkjet hot-melt mask is identified as the cost-competitive patterning route for industrial Cu plating.
- Reliability: SHJ cells with SWCT have demonstrated <5% degradation after >3× IEC standard accelerated aging tests.

## Methods used

- [[methods/screen-printed-Ag-paste]] — fine-line LCT-Ag (30 µm fingers).
- [[methods/Cu-electroplating-acid-bath]] — Cu plating onto TCO with masking.
- [[methods/electroplated-Ni-Cu-stack]] — explicit Ni-then-Cu plating sequence; Ni → Ni-silicide barrier.
- [[methods/inkjet-mask-patterning]] — hot-melt inkjet mask (CSEM/Hermans).
- [[methods/laser-ablation-of-dielectric]] — alternative mask-opening method.
- [[methods/damp-heat-aging-1000h]] — referenced for ">3× IEC accelerated aging" reliability claim.
- [[methods/IV-curve-measurement]] — implicit in performance characterisation.

## Reagents

- [[reagents/low-T-Ag-paste-generic-SHJ-grade]] — the LCT-Ag baseline (6–10 µΩ·cm).
- [[reagents/ITO-transparent-conductive-oxide]] — SHJ TCO; flagged as a *Cu-migration barrier* in its own right.
- [[reagents/acid-Cu-sulfate-bath]] — Cu plating chemistry.
- [[reagents/nickel-sulfamate-bath]] — Ni plating chemistry for the Ni/Cu stack.
- [[reagents/inkjet-plating-resist]] — hot-melt mask.
- [[reagents/a-Si-H-passivation]] — sets the ≤200 °C thermal budget.

## Organisms / substrates

- [[organisms/monocrystalline-Si-wafer-n-type]] — SHJ standard substrate.
- [[organisms/SHJ-cell-M6]] — 6" cell format implied throughout.
- [[organisms/full-size-module-60-cell]] — bifacial single-cell modules referenced (CSEM 327 Wp 60-cell).

## Failure modes flagged

- [[failure-modes/Cu-diffusion-into-c-Si]] — the *reason* the Ni→silicide step exists in the plated stack; TCO supplies the second barrier.
- [[failure-modes/silver-supply-bottleneck]] — Ag-paste cost the central economic driver.
- [[failure-modes/FF-degradation-contact-resistance]] — line-resistance optimisation is the central engineering lever.
- [[failure-modes/Ni-Cu-line-resistance-rise-DH]] — referenced via reliability data on aged plated cells.
- [[failure-modes/finger-adhesion-loss-after-DH]] — implicit in mask-and-plating discussion.

## Supports / contradicts

- **Supports:** [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — same author group, same content with module-level data.
- **Supports:** [[sources/2018-pv-international-metallization-shj]] — companion CSEM trade article.
- **Supports:** [[sources/2014-rehman-nicu-plating-csi-review]] — confirms the Ni/Cu stack concept; both flag Ni-silicide as the barrier mechanism.
- **Supports:** [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — both attribute Cu-barrier function partly to the TCO; SunDrive extends this to "TCO is the *whole* barrier, no Ni needed."

## Notable quotes

> "This TCO layer will already act as an efficient barrier to copper migration towards the silicon, and therefore limit potential degradation." — *p. 64*

> "The standard process then consists of the growth of a nickel–copper stack by plating. The nickel layer will form a nickel silicide barrier to copper diffusion after annealing, while the copper acts as the conductive layer." — *p. 64*

> "20µm-wide copper-plated fingers can be produced with a line resistance of about 1Ω/cm." — *p. 64*
