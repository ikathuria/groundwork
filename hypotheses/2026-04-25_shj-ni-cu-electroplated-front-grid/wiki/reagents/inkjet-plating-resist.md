---
type: reagent
slug: inkjet-plating-resist
aliases: [hot-melt resist, wax-based plating mask, inkjet mask ink]
cas: null (proprietary wax/polymer formulations)
formula: hot-melt wax or thermoplastic polymer dissolved/printed at 50–80 °C
suppliers:
  - name: Notion Systems GmbH
    catalog: industrial inkjet printer (n.jet evo, n.jet EHD); resist ink supplied by third parties
    grade: capital equipment + consumable
    url: https://www.notion-systems.com/en/industrial-solutions/solar
  - name: Meyer Burger / SUSS MicroTec / PiXDRO
    catalog: inkjet platforms compatible with PV plating-resist inks
    grade: production
    url: null
  - name: third-party ink suppliers (custom)
    catalog: hot-melt waxes (e.g., Xennia, Sun Chemical PV-resist inks)
    grade: production
    url: null
storage: ink cartridges room-temperature, sealed; printed mask layers stable on cells for hours-to-days
hazards: low — wax/solvent vapor exposure during print; inks generally non-toxic
known_failure_modes: [plating-resist-undercut, TCO-pitting-during-plating, FF-degradation-contact-resistance]
sources: [notion-systems-solar-inkjet-overview]
tags: [resist, mask-patterning, inkjet, hot-melt, additive-process]
---

# Inkjet plating resist (hot-melt mask)

## What it is
A patternable resist deposited by industrial inkjet printers — typically a hot-melt wax or thermoplastic that is solid at room temperature and printed at 50–80 °C. The resist masks the SHJ TCO surface in a finger-pattern's complement, so that Cu plating only deposits in the open "finger" channels. After plating, the resist is stripped (solvent or thermal). It is one of three patterning routes in the SHJ-Cu-plating workflow (along with photolithography and dielectric-mask + laser-ablation), favoured for its >70% reduction in masking-ink consumption (Hermans et al. two-step hotmelt) and additive-process compatibility.

## Common uses
- Selective masking of SHJ TCO for direct Cu electroplating onto opened finger lines (Hermans, Notion Systems-class inkjet platforms).
- Two-step hotmelt mask (Hermans 2014) — first pass deposits thick mask, second pass thins / opens; reduces ink consumption >70%.
- SunDrive's <6 µm finger mask in production-scale SHJ Cu plating ([[2022-arena-sundrive-copper-metallisation-demonstration]] — proprietary; not explicitly inkjet but in the same class).
- Maxwell's photoresist patterning is a comparable mask role using photolith instead of inkjet ([[2023-taiyangnews-heterojunction-technology-report]]).

## Key spec / concentration ranges
- Print temperature: 50–80 °C (hot-melt deposits at this temp, freezes on contact with cooler substrate).
- Droplet volume 2–5 pL per drop in PiXDRO/Notion-class platforms.
- Achievable finger opening: 16–20 µm in 2017 demonstrations on textured ITO ([[2018-pv-international-metallization-shj]]); <6 µm in SunDrive proprietary systems; 25–30 µm typical lab.
- Mask thickness: 5–15 µm typical.
- Strip: solvent (organic) or thermal ramp (60–100 °C melt + clean).
- Hardware platforms (Notion Systems): n.jet evo (lab), n.jet EHD (high-resolution electrohydrodynamic), n.unixx/varixx/chemixx/maxx for 200–300 mm substrates and larger.
- Pricing: capital equipment (quote-based, $100k–$1M); resist ink ~$500–2000/L production grade.

## Alternatives / variants
- Photolithography (dry-film photoresist) — higher resolution, more steps, more waste-water (NOBLE motivation to avoid).
- Dielectric mask (PECVD SiNx + laser-ablation) — used in CSEM 3-step process ([[2024-lachowicz-cu-plated-shj-aging-mini-modules]]) and Maxwell.
- NOBLE PVD-Al + NaOH inkjet (no resist at all — Al/AlOx serves as the mask, NaOH opens it) ([[2019-hatt-noble-shj-solrrl]]).

## Gotchas
- Hot-melt resist can be undercut by acidic Cu plating bath (especially Cl⁻ rich) if the mask is not fully cured — failure mode `plating-resist-undercut`.
- Ink rheology must match the printhead — droplet volume, viscosity, surface tension are all carefully tuned.
- Mask removal solvent must be compatible with the underlying TCO (no ITO etching) and with downstream processing.
- For SHJ specifically, no resist anneal can exceed ~200 °C — limits cross-linkable resists to low-T formulations.
- Notion Systems supplies the platform; the resist ink is third-party. Verify ink compatibility with the cell and bath chemistry.

## Sources
- [[notion-systems-solar-inkjet-overview]] — vendor overview of inkjet printing systems for solar; equipment lines (n.jet evo, n.jet EHD, n.unixx/varixx/chemixx/maxx); R&D centers Singen + Schwetzingen.
