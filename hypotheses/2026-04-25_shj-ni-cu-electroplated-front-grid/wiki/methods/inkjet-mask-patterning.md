---
type: method
slug: inkjet-mask-patterning
aliases: [inkjet plating resist, hot-melt inkjet mask, NaOH inkjet patterning, drop-on-demand patterning]
related_methods: [photolithography-mask-patterning, laser-ablation-of-dielectric, Cu-electroplating-acid-bath, electroplated-Ni-Cu-stack, NOBLE-selective-Cu-plating]
key_reagents: [inkjet-plating-resist, ITO-transparent-conductive-oxide, acid-Cu-sulfate-bath]
known_failure_modes: [plating-resist-undercut, lateral-Cu-edge-migration, finger-adhesion-loss-after-DH, FF-degradation-contact-resistance, TCO-pitting-during-plating]
sources: [2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration, notion-systems-solar-inkjet-overview, pvtech-metallization-challenges-cell-manufacturing]
tags: [patterning, inkjet, plating-resist, hot-melt, additive-manufacturing]
created: 2026-04-26
updated: 2026-04-26
---

# Inkjet plating-mask patterning

**Slug:** `methods/inkjet-mask-patterning` · **Type:** method

## What it measures / does

Drop-on-demand inkjet printing deposits a patterned resist (hot-melt wax, UV-curable polymer, or aqueous functional ink) directly onto the cell surface, defining where subsequent plating will or will not occur. For SHJ Cu metallization the canonical mode is CSEM/Hermans hot-melt inkjet that opens the pattern in a continuous resist; in NOBLE the polarity is inverted — inkjet-NaOH prints *into* a previously deposited Al/Al₂O₃ layer to selectively dissolve the Al only on grid lines, with the surrounding Al₂O₃ acting as the plating-inhibiting barrier.

## When to use it

Use whenever a cost-competitive industrial-throughput alternative to photolithography is needed for plated-Cu front-grid definition. CSEM, Hatt/NOBLE, SunDrive, and Maxwell all rely on inkjet patterning at scale. Vendor equipment is supplied by Notion Systems and SUSS PiXDRO.

## Key parameters / setpoints

- **Drop volume:** 2–5 pL (NOBLE NaOH ink) for 20–30 µm line widths.
- **Ink viscosity:** 5–15 mPa·s typical for UV-curable; hot-melt inkjet is liquid only at elevated temperatures.
- **Curing:** UV (for polymer) or solidification on cooling (for hot-melt wax) immediately after droplet deposition.
- **Achievable line width:** down to <20 µm with hot-melt inkjet (Hermans/CSEM); 20–30 µm in the Al layer for NOBLE.
- **NOBLE Al thickness target:** PVD-Al with ≥ 20 h ambient hydrophobic ageing (water contact angle ~90°) or 1 day at 50 °C / 6 % RH for hydrophobic ink line definition.
- **Industrial throughput:** Notion Systems / SUSS PiXDRO platforms target M6/M10/G12 wafer compatibility at production speeds.

## Common variants

- **Hot-melt wax resist** (CSEM Hermans 2014) — wax deposited on hotplate, cools to solid; resist defines unplated regions.
- **UV-curable polymer resist** — deposited liquid, UV-cured in-line; faster than wax but harder to strip cleanly.
- **NaOH aqueous ink** (Fraunhofer NOBLE) — etches Al in the underlying PVD seed; selective plating on the etched (exposed) Cu seed.
- **Functional inks that prevent resist cross-linking** — Geissbühler 2018 mentions this as an inverted-polarity variant.

## Things to watch for

- Resist bevel-edged sidewalls give bevel-edged Cu fingers — Faes 2018 reports ≥70 µm finger widths with organic resist masks vs ~20 µm with photolithography.
- Resist undercut at the base — bath chemistry can attack the resist edge during long Cu plating dwell ([[failure-modes/plating-resist-undercut]]).
- Inkjet resist residue after stripping causes adhesion failure or local TCO damage (open question 3 in `hypothesis.md`).
- Throughput at industrial line speed (200+ mm/s) requires multi-head printers and tight droplet placement (<5 µm registration error) — Notion / SUSS PiXDRO are the named vendors.
- Aqueous NaOH ink in NOBLE requires precise hydrophobicity control on the PVD-Al surface — too hydrophilic and lines spread; too hydrophobic and the ink beads up.

## Related methods

- [[methods/photolithography-mask-patterning]] — research-grade alternative; cleaner sidewalls but expensive at scale.
- [[methods/laser-ablation-of-dielectric]] — alternative patterning route; opens dielectric directly without mask deposition.
- [[methods/Cu-electroplating-acid-bath]] — downstream plating step that the mask defines.
- [[methods/NOBLE-selective-Cu-plating]] — Fraunhofer ISE process built on NaOH-inkjet patterning.

## Citing sources

- [[sources/2018-pv-international-metallization-shj]] — hot-melt inkjet mask (CSEM Hermans) as cost-competitive masking route.
- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — hot-melt inkjet mask flow for SHJ Cu plating.
- [[sources/2018-pvtech-metallization-shj-cells-modules]] — inkjet hot-melt mask identified as the cost-competitive patterning route for industrial Cu plating.
- [[sources/2019-hatt-noble-bifacial-shj-aip]] — inkjet patterning of NaOHaq ink to open Al; lines as narrow as 20–30 µm with 2–5 pL droplets.
- [[sources/2019-hatt-noble-shj-solrrl]] — inkjet printing of NaOH ink to pattern the Al/Al₂O₃ mask.
- [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — NaOHaq inkjet patterning judged "mature enough to be tested on industrial pilot."
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — proprietary high-resolution patterning replacing PVD seed.
- [[sources/notion-systems-solar-inkjet-overview]] — vendor product page for industrial inkjet platforms targeting plating-mask deposition.
- [[sources/pvtech-metallization-challenges-cell-manufacturing]] — IMEC review covering inkjet for both direct-write and seed-deposition roles.
