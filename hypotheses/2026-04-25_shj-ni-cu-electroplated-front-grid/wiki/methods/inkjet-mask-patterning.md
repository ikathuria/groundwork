---
type: method
slug: inkjet-mask-patterning
aliases: [inkjet hot-melt mask, NaOH inkjet, hot-melt resist printing, drop-on-demand mask]
related_methods: [photolithography-mask-patterning, laser-ablation-of-dielectric, NOBLE-selective-Cu-plating, Cu-electroplating-acid-bath]
key_reagents: [ITO-transparent-conductive-oxide]
known_failure_modes: [plating-resist-undercut, FF-degradation-contact-resistance, TCO-pitting-during-plating]
sources: [2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration, 2023-taiyangnews-heterojunction-technology-report, 2024-lachowicz-cu-plated-shj-aging-mini-modules, notion-systems-solar-inkjet-overview, pvtech-metallization-challenges-cell-manufacturing]
tags: [patterning, inkjet, hot-melt, NaOH, AlOx-mask, fine-line, selective-plating]
---

# Inkjet Mask Patterning

## What it measures / does
Drop-on-demand inkjet printing deposits a patterned mask on the cell surface to define the plated-Cu grid. Two main flavours: (1) *hot-melt resist*: a wax-based ink is deposited and solidifies on contact, blocking Cu plating outside the grid; (2) *NaOHaq etch ink* (NOBLE): 1 wt% aqueous NaOH selectively etches a thin Al layer to expose the underlying PVD seed only along the grid lines, with the surrounding native AlOx blocking plating elsewhere.

## When to use it
Patterning step in SHJ Cu-plating workflows. Replaces photolithography (saves wet processing) and is competitive with laser ablation. Critical for hypothesis: with hydrophobic AlOx surface, NOBLE achieves <30 um finger widths from a single inkjet pass with 2-5 pL droplets.

## Key parameters
- Droplets: 2-5 pL.
- Hot-melt print at 50-80 C; finger widths down to 60 um (Posthuma 2009 IMEC) and to 16-20 um (Hermans 2014, CSEM).
- NaOH ink: 1 wt% aqueous; etches Al at 2.4-11 nm/s (1-4% NaOH); does not attack Cu or Ag (Hatt 2019).
- Surface readiness: AlOx evolves from hydrophilic (CA 30 deg, fresh PVD) to hydrophobic (CA 100-120 deg, ~5 days ambient or 1 day at 50 C / 6% RH); hydrophobic is required for fine-line spreading control.
- SunDrive: <6 um finger openings on industrial wafers via proprietary inkjet patterning.
- Two-step hot-melt: reduces masking-ink consumption by >70% (Hermans).
- Suppliers: Notion Systems n.jet evo / n.jet EHD; PiXDRO/Meyer Burger.

## Common variants / alternatives
- [[laser-ablation-of-dielectric]] — alternative non-resist patterning.
- [[photolithography-mask-patterning]] — higher-resolution but more wet steps.
- PECVD dielectric mask (CSEM 3-step) — the dielectric layer over a printed seed acts as plating mask.

## Things to watch for (failure modes)
- [[../failure-modes/plating-resist-undercut]] — acidic Cu bath can undercut hot-melt mask if undercured; NOBLE NaOH variant avoids this entirely.
- [[../failure-modes/FF-degradation-contact-resistance]] — finger interruptions in early NOBLE prints reduced FF; resolved by tuning AlOx hydrophobicity.
- [[../failure-modes/TCO-pitting-during-plating]] — over-etch of Al layer can attack underlying TCO if NaOH dwell uncontrolled.

## Sources
- [[2018-pv-international-metallization-shj]] — hot-melt inkjet mask + two-step thinning route reviewed.
- [[2018-pv-tech-metallization-interconnection-bifacial-shj]] — CSEM 24.1% bifacial SHJ via PVD seed + hotmelt inkjet mask + Cu plating.
- [[2018-pvtech-metallization-shj-cells-modules]] — Hermans 2014 inkjet hot-melt mask cited as low-cost SHJ patterning.
- [[2019-hatt-noble-bifacial-shj-aip]] — full-area 156x156 mm² SHJ with NOBLE NaOH inkjet; contact-angle evolution detailed.
- [[2019-hatt-noble-shj-solrrl]] — foundational NOBLE paper; 1 wt% NaOH(aq) ink, 2-5 pL droplets, 25 um fingers.
- [[2021-hatt-stable-cu-plated-shj-eupvsec]] — NOBLE matured to large-area 22.6% with optimised NaOH inkjet.
- [[2022-arena-sundrive-copper-metallisation-demonstration]] — proprietary patterning achieves <6 um finger openings at industrial scale.
- [[2023-taiyangnews-heterojunction-technology-report]] — discussed indirectly via "plating resist" patterning options.
- [[2024-lachowicz-cu-plated-shj-aging-mini-modules]] — CSEM 3-step process; PECVD dielectric is the analogue plating mask.
- [[notion-systems-solar-inkjet-overview]] — supplier of the inkjet hardware (n.jet evo, n.jet EHD).
- [[pvtech-metallization-challenges-cell-manufacturing]] — IMEC inkjet masking + wet-chemical etch overview.
