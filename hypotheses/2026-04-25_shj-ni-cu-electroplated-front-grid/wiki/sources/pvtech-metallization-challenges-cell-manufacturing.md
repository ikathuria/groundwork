---
type: source
id: pvtech-metallization-challenges-cell-manufacturing
source_type: catalog
title: "Current and Future Metallization Challenges and Solutions for Crystalline Cell Manufacturing"
authors: ["PV-Tech"]
year: 2018
doi: ""
url: https://www.pv-tech.org/wp-content/uploads/legacy-publication-pdfs/2462272dd3-current-and-future-metallization-challenges-and-solutions-for-crystalline-cell-manufacturing.pdf
raw_path: raw/catalogs/pvtech-metallization-challenges-cell-manufacturing.pdf
tags: [PV-Tech, Photovoltaics-International, IMEC, screen-print, plating, fine-line, seed-and-plate, supplier-landscape]
created: 2026-04-26
updated: 2026-04-26
---

# Current and Future Metallization Challenges and Solutions for Crystalline Cell Manufacturing

**Photovoltaics International / PV-Tech (Posthuma, John, Beaucarne, Van Kerschaver — IMEC)** — *2018 (legacy reprint of Photovoltaics International Volume 3 article)*. URL: https://www.pv-tech.org/wp-content/uploads/legacy-publication-pdfs/2462272dd3-current-and-future-metallization-challenges-and-solutions-for-crystalline-cell-manufacturing.pdf

## Summary

Industry review (IMEC authors, published in Photovoltaics International journal, mirrored on PV-Tech) of the c-Si metallization landscape: state-of-the-art screen-printed Ag, two-step (seed + plate) processes, and emerging fine-line additive techniques (inkjet, pad-print, aerosol jet, laser micro-sintering). Establishes the screen-printing baseline (>85 % industry share, 100–150 µm line widths, 1500–2000 wph) the plated-Cu hypothesis must beat, and lists the Ag-paste / plating-chemistry supplier ecosystem (Heraeus, DuPont, Schlenk, Atotech, MacDermid). Important context for the cost-target sub-bullet of the hypothesis and for the catalog/supplier side of the materials table.

## Key claims / specifications

- **Industry baseline:** screen-printing of Ag/Al thick-film pastes used by ">85 % of photovoltaic solar cell manufacturers"; line widths 100–150 µm, throughput 1500–2000 wph.
- **Firing process:** front-side Ag fire-through SiNx requires ~800–900 °C peak in spike profile (incompatible with SHJ; this article predates wide SHJ adoption).
- **Two-step metal process:** thin seed layer (silicide / sputtered metal / printed seed) + thick high-conductivity layer (Ag or Cu by plating). "Most resembles traditional screen-printing… in combination with (light-induced) silver plating." Cu plating discussed as the route to displace high-cost Ag in the second-layer step.
- **Fine-line printing methods covered:** advanced screen-print (hot-melt ink, lines down to 60 µm, FF up to 80.6 %); inkjet (multi-pass, narrow lines, low-viscosity ink); pad printing (≤50 µm, throughput-friendly); aerosol jet (down to 14 µm; combined with LIP achieving 20.3 % on FZ wafers); laser micro-sintering (line width <30 µm, lower thermal budget).
- **Supplier ecosystem (named in body / cited via industry context):** Ag pastes — Heraeus, DuPont (Solamet), Schlenk; plating chemistry — Atotech, MacDermid (Enthone). Sets the supplier landscape the materials table draws from.
- **Material-availability framing:** "for the sustainability of Si photovoltaics, it is crucial that the future metallization solutions only make use of abundantly available and non-toxic materials" — direct silver-supply argument.
- **Back-contacted cells:** "Back-contacted cells are increasingly being introduced in production, and they pose very specific challenges to metallization." Foreshadows IBC + plated metallization research.
- **SHJ mentioned as "developed" alongside MWT/EWT/BC** — at the time of the article SHJ was nascent in mass production.

## Methods used

- [[methods/screen-printed-Ag-paste]] — establishes the >85 % market-share baseline and firing parameters.
- [[methods/light-induced-plating]] — covered as the canonical seed-thickening method for the second metal layer.
- [[methods/Cu-electroplating-acid-bath]] — discussed as the route to replace Ag in the thick-layer plating step.
- [[methods/inkjet-mask-patterning]] — inkjet covered as both a direct-write and seed-deposition method.
- [[methods/photolithography-mask-patterning]] — implicit comparator throughout the seed-and-plate discussion.
- [[methods/transfer-length-method]] — implicit context (contact resistivity is the qualifying metric for any seed layer).
- [[methods/laser-ablation-of-dielectric]] — laser micro-sintering and laser-opened contacts discussed.

## Reagents

- [[reagents/low-T-Ag-paste-generic-SHJ-grade]] — implicit comparator; the article predates the SHJ-specific low-T paste generation but sets up the "if Ag is unsustainable, plate Cu" framing.
- [[reagents/acid-Cu-sulfate-bath]] — implied in the second-step plating discussion.
- [[reagents/inkjet-plating-resist]] — implied in the inkjet-direct-write and seed-deposition discussion.

## Organisms / substrates

- [[organisms/monocrystalline-Si-wafer-n-type]] — n-type emitter cells covered.
- [[organisms/monocrystalline-Si-wafer-p-type]] — p-type Al-BSF/PERC cells the article's screen-print baseline targets.

## Failure modes flagged

- [[failure-modes/silver-supply-bottleneck]] — explicit framing of the resource-scarcity argument.
- [[failure-modes/Jsc-loss-from-cap-stack-shading]] — finger-width discussion (100–150 µm screen-print → narrower lines for less shading).
- [[failure-modes/FF-degradation-contact-resistance]] — covered as the cost the seed-thickening process must not pay.

## Supports / contradicts

- **Supports:** [[sources/2023-tepner-printing-tech-csi-review]] — Tepner & Lorenz 2023 is the current-decade update to the same review topic.
- **Supports:** [[sources/atotech-solar-industry-overview]] — independent industry review names the same plating-chemistry supplier ecosystem.
- **Supports:** [[sources/2014-rehman-nicu-plating-csi-review]] — same general framework for Ni/Cu plating on c-Si.
- **Compares to:** [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — companion PV-Tech article specific to SHJ (CSEM/Meyer Burger authors), bringing the seed-and-plate analysis into the SHJ-specific architecture.

## Notable quotes

> "Thick-film metallization by means of screen-printing is the contacting technique employed by more than 85 % of photovoltaic solar cell manufacturers." — *Introduction.*

> "Back-contacted cells are increasingly being introduced in production, and they pose very specific challenges to metallization." — *Introduction.*

> "For the sustainability of Si photovoltaics, it is crucial that the future metallization solutions only make use of abundantly available and non-toxic materials." — *Abstract.*
