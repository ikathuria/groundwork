---
type: reagent
slug: inkjet-plating-resist
aliases: [inkjet resist, hot-melt plating mask, UV-curable plating resist]
cas: ""
suppliers:
  - name: Notion Systems
    catalog: "Industrial inkjet platforms (PiCO / N.Jet / R&D systems)"
    grade: production-pilot SHJ resist deposition
    url: https://www.notion-systems.com/products/Industrial-solutions/solar.html
  - name: SUSS MicroTec (PiXDRO)
    catalog: "PiXDRO LP50 / IP410 inkjet"
    grade: research / pilot inkjet platform
    url: https://www.suss.com
  - name: Notion Systems (resist materials)
    catalog: "Hot-melt or UV-curable plating resist (Notion-formulated or 3rd-party)"
    grade: alkali-strippable
    url: https://www.notion-systems.com
  - name: Dycotec, Sun Chemical, Megasol
    catalog: "Inkjet-compatible plating resists"
    grade: SHJ-compatible
    url: https://www.dycotecmaterials.com
storage: ambient; UV-shielded for UV-curable variants; hot-melt resists kept solid at room T
hazards: medium — UV-curable resists contain photoinitiators and acrylate monomers (skin sensitisers)
known_failure_modes: [plating-resist-undercut, finger-adhesion-loss-after-DH]
sources: [2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, notion-systems-solar-inkjet-overview, pvtech-metallization-challenges-cell-manufacturing]
tags: [inkjet, plating-mask, resist, hot-melt, UV-curable, Notion, PiXDRO]
created: 2026-04-26
updated: 2026-04-26
---

# Inkjet plating resist

**Slug:** `reagents/inkjet-plating-resist` · **Type:** reagent

## What it is

An inkjet plating resist is a low-viscosity, jettable formulation (UV-curable acrylate or hot-melt wax) deposited by drop-on-demand inkjet to define the negative pattern of the plated grid. After plating, the resist is stripped (alkaline solution for UV resists; thermal melt + solvent for hot-melt) to expose the cell surface. Inkjet resist is the SHJ-friendly cost-down alternative to photolithography for plating-mask deposition. Both **Notion Systems** and **SUSS PiXDRO** are the dominant industrial-inkjet equipment vendors that deposit this class of resist.

## Common uses (in this corpus)

In this corpus inkjet plating resist appears as the **patterning consumable** of the SHJ Ni/Cu flow (Hatt NOBLE, CSEM/Meyer Burger, SunDrive). Notion Systems and SUSS PiXDRO are repeatedly named as the equipment vendors that deposit these resists at production scale. The 2018 PV-Tech and PV-International articles, and the Notion product overview, treat inkjet-resist patterning as a key cost-down lever — replacing photolithography means dropping a wet-clean step + a UV-exposure tool from the cell line.

## Properties / specifications

- Viscosity (jetting): 5–15 cP at jetting temperature (UV-curable: room T; hot-melt: ~80–120 °C in printhead).
- Drop size: 5–30 pL typical; piezo-DOD printheads (Konica Minolta KM, Ricoh, Fujifilm Dimatix).
- Cure (UV): broadband UV-LED, ~365–395 nm, 100–500 mJ/cm²; cures in <1 s on substrate.
- Resist thickness: 5–25 µm typical; SHJ Ni/Cu plating typically requires 8–15 µm for good aspect ratio.
- Strip chemistry: dilute NaOH or KOH (1–5 wt%) for UV-acrylate; hot solvent / hot deionized water for hot-melt.
- Resist line width (state of art): 25–40 µm finger openings achievable on commercial inkjet platforms.
- Acid resistance (during plating): must survive pH ≈ 1 acid-Cu + pH ≈ 4 Ni-sulfamate baths for the duration of plating (~3–10 min).

## Suppliers

- Notion Systems — industrial inkjet platforms for c-Si PV resist deposition; URL https://www.notion-systems.com/products/Industrial-solutions/solar.html
- SUSS MicroTec (PiXDRO) — LP50 / IP410 inkjet platforms; URL https://www.suss.com
- Dycotec Materials — inkjet plating resists for PV; URL https://www.dycotecmaterials.com
- Sun Chemical, Megasol — additional inkjet-resist suppliers.

## Alternatives

- Photolithographic mask (photoresist + photomask + UV exposure + develop) — finer features but ~5× higher per-cell cost; used in research / record-cell flows.
- Laser-ablation of dielectric (LCO route) — different patterning paradigm; opens an SiNx / SiOx mask rather than depositing an organic resist.
- Screen-printed masking ink — coarser features, less control over edge; rarely used industrially for SHJ Ni/Cu.

## Gotchas / failure modes

- [[failure-modes/plating-resist-undercut]] — high-acid Cu bath attacks the resist edge during long dwells; resist film thickness, sidewall profile, and adhesion all govern undercut severity.
- [[failure-modes/finger-adhesion-loss-after-DH]] — organic residue from incompletely stripped inkjet resist can locally damage the TCO or block adhesion of the plated finger, accelerating peel failure under DH.

## Citing sources

- [[sources/notion-systems-solar-inkjet-overview]] — vendor product page positioning Notion industrial inkjet for c-Si PV resist deposition.
- [[sources/2018-pv-international-metallization-shj]] — names inkjet-resist patterning as the SHJ Ni/Cu cost-down lever.
- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — CSEM/Meyer Burger workflow uses inkjet-deposited resist for selective plating.
- [[sources/2018-pvtech-metallization-shj-cells-modules]] — overall metallization options matrix; inkjet resist is the SHJ-compatible patterning consumable.
- [[sources/pvtech-metallization-challenges-cell-manufacturing]] — industry perspective on inkjet-resist scaling in cell manufacturing.
