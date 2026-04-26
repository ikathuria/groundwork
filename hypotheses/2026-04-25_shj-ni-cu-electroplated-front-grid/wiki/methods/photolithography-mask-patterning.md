---
type: method
slug: photolithography-mask-patterning
aliases: [photolithography, photoresist patterning, dry-film photolithography, photo mask, lithographic plating mask]
related_methods: [inkjet-mask-patterning, laser-ablation-of-dielectric, Cu-electroplating-acid-bath, electroplated-Ni-Cu-stack, NOBLE-selective-Cu-plating]
key_reagents: [inkjet-plating-resist, ITO-transparent-conductive-oxide, acid-Cu-sulfate-bath]
known_failure_modes: [plating-resist-undercut, finger-adhesion-loss-after-DH, FF-degradation-contact-resistance, TCO-pitting-during-plating]
sources: [2014-rehman-nicu-plating-csi-review, 2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2022-arena-sundrive-copper-metallisation-demonstration, 2023-taiyangnews-heterojunction-technology-report, notion-systems-solar-inkjet-overview, pvtech-metallization-challenges-cell-manufacturing]
tags: [patterning, photolithography, photoresist, dry-film, narrow-finger]
created: 2026-04-26
updated: 2026-04-26
---

# Photolithography mask patterning

**Slug:** `methods/photolithography-mask-patterning` · **Type:** method

## What it measures / does

Standard semiconductor photolithography applied to plating-mask definition: a UV-sensitive photoresist (typically a dry-film laminate for solar) is laminated to the wafer, exposed through a photomask, and developed to leave a patterned plating-resist layer. Used as the research-grade route for narrow (≤ 20 µm) rectangular plated Cu fingers when inkjet's bevel-edge sidewalls are unacceptable — also as the *baseline* against which inkjet patterning is benchmarked at industrial scale (Faes 2018: photolithography "can give ~20 µm rectangular fingers but is too expensive for industry").

## When to use it

Use in the lab whenever the cleanest possible sidewall and the narrowest finger geometry are needed. Maxwell's commercial route (per TaiyangNews 2023) is "PVD seed → photoresist mask → exposure → simultaneous front+rear electroplated Cu → photoresist strip → tin plating → annealing" — i.e. photolithography in production. SunDrive explicitly avoided this route in favour of inkjet patterning, citing throughput.

## Key parameters / setpoints

- **Resist:** dry-film photosensitive laminate (e.g., DuPont Riston-class) is standard for solar; spin-coated liquid resist used in lab.
- **Exposure:** UV (365–405 nm) through a chrome-on-glass photomask; alignment ≤ 5 µm registration.
- **Development:** alkaline aqueous developer (Na₂CO₃ ~1 % w/v) for dry-film; specific solvent for liquid resist.
- **Resist thickness:** 10–50 µm; defines max plated Cu height (above which mushrooming begins).
- **Achievable finger width:** ~20 µm rectangular (vs ≥ 70 µm bevel-edged with organic inkjet resist) per Faes 2018.
- **Strip:** alkaline (NaOH-based) stripper, hot deionised-water rinse.
- **Maxwell production sequence (TaiyangNews 2023):** PVD seed → photoresist → exposure → bifacial Cu plate → strip → Sn cap → anneal. Reported finger width 18.1 µm.

## Common variants

- **Dry-film photolithography** — solar-line standard; faster than spin-coat.
- **Liquid spin-coat / spray-coat resist** — for research, narrower features possible.
- **Negative vs positive resist** — negative is standard for plating masks (exposed = remain).
- **Roll-to-roll lamination** — increases throughput for production.

## Things to watch for

- Cost and throughput are the standing weaknesses vs inkjet — Faes 2018 explicitly states "too expensive for industry" for dedicated lithography lines.
- Resist undercut from the developer or from the plating bath ([[failure-modes/plating-resist-undercut]]) — mitigate by tuning develop time and bath temperature.
- Residue from the strip step on the TCO surface can cause adhesion failure or local TCO damage.
- Acid Cu plating bath (pH ≈ 1) attacks dry-film resist edge with long dwell — keep the plating cycle ≤ 20 min and the bath temperature within the resist's specified compatibility window.
- Pinholes in the resist film expose the underlying TCO to the bath, causing parasitic plating and TCO etch.

## Related methods

- [[methods/inkjet-mask-patterning]] — production-cost-competitive alternative.
- [[methods/laser-ablation-of-dielectric]] — non-organic-mask alternative.
- [[methods/Cu-electroplating-acid-bath]] — downstream plating step.
- [[methods/electroplated-Ni-Cu-stack]] — full plated stack the mask defines.
- [[methods/NOBLE-selective-Cu-plating]] — Fraunhofer's resist-mask-free alternative.

## Citing sources

- [[sources/2014-rehman-nicu-plating-csi-review]] — research-grade comparator for finger-width definition.
- [[sources/2018-pv-international-metallization-shj]] — dry-film photolithography as a research-grade narrow-finger comparator.
- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — research-grade narrow-finger comparator vs hot-melt inkjet mask flow.
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — referenced as the alternative SunDrive explicitly avoided due to throughput.
- [[sources/2023-taiyangnews-heterojunction-technology-report]] — Maxwell production process uses photoresist mask + exposure to define plated grid.
- [[sources/notion-systems-solar-inkjet-overview]] — alternative the Notion inkjet platforms compete against on cost.
- [[sources/pvtech-metallization-challenges-cell-manufacturing]] — implicit comparator throughout the seed-and-plate discussion.
