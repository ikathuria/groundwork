---
type: source
id: 2024-nrel-getting-ahead-of-curve-pv-assessment
source_type: protocol
title: "Getting Ahead of the Curve: Assessment of New Photovoltaic Module Reliability Risks Associated With Projected Technological Changes"
authors: ["Zuboy, J.", "Springer, M.", "Palmiotti, E. C.", "Karas, J.", "Smith, B. L.", "Woodhouse, M.", "Barnes, T. M."]
year: 2024
doi: "10.1109/JPHOTOV.2023.3334477"
url: "https://doi.org/10.1109/JPHOTOV.2023.3334477"
raw_path: raw/protocols/2024-nrel-getting-ahead-of-curve-pv-assessment.pdf
tags: [reliability, technology-trends, ITRPV, SHJ, TOPCon, plated-Cu, bifacial, ECA, multibusbar, NREL, DuraMAT, DOE]
---

# Getting Ahead of the Curve: Assessment of New Photovoltaic Module Reliability Risks Associated With Projected Technological Changes

## Summary
NREL DuraMAT-funded review (IEEE J. Photovoltaics 2024, Vol. 14 No. 1) identifying 11 PV-module technology trends and their reliability implications. Trends grouped into four categories: module architecture (larger/thinner cells, larger modules, cell cutting), interconnect technologies (more busbars, wires, structured foil, ECA, shingling, low-temperature solders), bifacial modules (thinner glass, transparent backsheets, POE encapsulants), and cell technology (PERC → TOPCon, SHJ, IBC). For SHJ specifically: bifaciality factor near unity, Voc up to 750 mV, but ultrathin a-Si:H passivation susceptibility to UV/surface degradation, additional PID-c (corrosion) and PID-p (polarization) modes, and a hard requirement for low-temperature interconnects. **Plated copper metallization** explicitly called out as the silver-replacement candidate for SHJ — both an opportunity (cheaper, more abundant) and a risk (Cu ingress, plated-contact adhesion). Authoritative articulation of the "PV reliability learning cycle" that motivates extended damp-heat testing for any plated-Cu SHJ design.

## Key claims
- 11 trends identified (Fig. 2), 4 categories: module architecture (larger modules to >3 m², larger cells M10/G12, cell cutting/half-cut, thinner wafers from ~170 µm to <130 µm); interconnect (more busbars, round wires displacing flat ribbons, structured foil, ECA, shingling, low-temperature solders); bifacial (60% bifacial market share by 2032 per ITRPV; thinner front glass <3 mm; POE displacing EVA); cell technology (n-type → 60% by 2032; PERC → TOPCon → SHJ; IBC niche).
- "Copper is an attractive alternative material owing to being both cheaper and more earth-abundant than silver, and SHJ has an additional requirement for low process temperature metallization and interconnection, which gives further motivation to replace silver. Plated copper metallization has been demonstrated in both TOPCon and SHJ cell architectures, and copper-based screenprint pastes have been demonstrated on SHJ and IBC cells. Copper contacts could conceivably introduce new reliability issues, including increased risk of degradation from copper ingress into the cell and adhesion of plated contacts to the cell." — Sec. VI
- AAA-polyamide backsheet failure case (entered market 2010, passed IEC 61215 DH+UV, cracked after 5-10 years in field) explicitly cited as the cautionary archetype for novel materials introduced under cost pressure (Sec. I).
- SHJ vs PERC reliability trade-offs: SHJ has Voc up to 750 mV (vs PERC's 680 mV) due to a-Si-based intrinsic passivation; LETID risk lower in n-type; PID landscape different — TCO-based cells have additional PID-c (corrosion) and PID-p (polarization) modes; current IEC 62804-1 ed. 1 PID test optimised for monofacial/PID-s, may miss SHJ-specific mechanisms.
- "Some promising lab- and pilot-scale work has demonstrated equal or better performance by plated copper contacts in various reliability tests" — Sec. VI (refs 143, 147, 148).
- For interconnect material changes: ECA (electrically conductive adhesive) and low-temperature Sn-Bi solder enabling shingled cells and SHJ-compatible processes have unknown long-term reliability — debonding and corrosion of nonsilver conductive particles flagged as risks. ECA referenced in [[2024-lachowicz-cu-plated-shj-aging-mini-modules]] and [[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]].
- POE encapsulant: greater volume resistivity, lower water vapor transmission rate, no acetic acid generation — preferred for SHJ. Mixed/coextruded EVA/POE encapsulants flagged as understudied.
- "PV reliability learning cycle" (Fig. 19): new product introduction → field diagnostics → degradation/failure analysis → accelerated tests/standards development → predictive modelling → next-gen products. Argues for tests that detect *unanticipated* failure modes, not just established ones (e.g., PID was missed because JPL deployments were low-voltage).
- Recommendations for SHJ + Cu: develop tests for UV-induced and PID risk in industrial bifacial TOPCon/SHJ; assess Cu ingress and plated-contact adhesion; codify bifacial-specific PID protocols (IEC 62804 update needed).

## Methods used
- [[../methods/damp-heat-aging-1000h]] — IEC 61215 baseline; needs extension for new tech
- [[../methods/extended-damp-heat-IEC63209]] — IEC TS 63209-2 cited as the new menu of polymer-durability tests
- [[../methods/temperature-cycling-IEC61215-TC200]] — IEC 61215 baseline
- [[../methods/UV-preconditioning]] — UV testing flagged as critical for SHJ a-Si:H layers
- [[../methods/peel-test-90deg]] — adhesion of plated contacts called out as critical and underspecified

## Reagents
- [[../reagents/EVA-encapsulant]] — declining market share but still dominant
- [[../reagents/POE-polyolefin-encapsulant]] — increasing share, preferred for SHJ
- [[../reagents/electrically-conductive-adhesive-ECA]] — shingle interconnection; novel reliability concerns
- [[../reagents/ITO-transparent-conductive-oxide]] — SHJ TCO relevant to PID-c
- [[../reagents/multibusbar-Cu-ribbon]] — round-wire multiwire architecture

## Organisms / substrates
- [[../organisms/SHJ-cell-M10]] — projected dominant cell size for SHJ
- [[../organisms/SHJ-cell-G12]] — projected for utility scale
- [[../organisms/full-size-module-60-cell]], [[../organisms/full-size-module-72-cell]]
- [[../organisms/mini-module-glass-glass]] — bifacial standard

## Failure modes flagged
- [[../failure-modes/Cu-diffusion-into-c-Si]] — explicit risk for plated-Cu metallization on cells
- [[../failure-modes/finger-adhesion-loss-after-DH]] — adhesion of plated contacts to cell
- [[../failure-modes/EVA-acetic-acid-corrosion]] — driver of POE adoption in bifacial/SHJ
- [[../failure-modes/a-Si-H-passivation-degradation]] — UV/surface susceptibility of SHJ a-Si layers
- [[../failure-modes/ECA-discoloration-after-DH]] — ECA novel-material risks (debonding, conductive-particle corrosion)
- [[../failure-modes/silver-supply-bottleneck]] — central driver of the Cu-replacement trend

## Supports / contradicts
- Supports: [[2011-nrel-reliability-testing-beyond-qualification]], [[2012-nrel-iec61215-what-it-is]], [[2014-nrel-pv-module-qualification-plus]] (intellectual lineage)
- Supports: [[2013-koehl-fraunhofer-accelerated-service-life-testing]]
- Supports: [[2020-verlinden-future-challenges-tw-pv]], [[2021-goldschmidt-tech-learning-tw-pv]] (TW-scale Ag bottleneck driving Cu)
- Supports: [[2024-itrpv-15th-edition-roadmap]], [[2024-iea-pvps-trends-pv-applications]], [[2024-fraunhoferise-photovoltaics-report]] (technology-trend evidence)
- Supports: [[2023-taiyangnews-heterojunction-technology-report]] (SHJ market trends)

## Notable quotes
- "The AAA backsheets became popular because of their low cost and because the supply of conventional backsheets was constrained. These AAA backsheets passed standard damp-heat and ultraviolet (UV) light tests, but many began cracking after five to ten years owing to mechanical stresses from production and environmental exposure that had not been part of standard testing." — Sec. I
- "Plated copper metallization has been demonstrated in both TOPCon and SHJ cell architectures … Copper contacts could conceivably introduce new reliability issues, including increased risk of degradation from copper ingress into the cell and adhesion of plated contacts to the cell." — Sec. VI
- "An emphasis should be placed on understanding and mitigating PID risk in industrial implementations of the TOPCon and SHJ architectures, and standard PID tests specific to bifacial modules should be codified." — Sec. VI
- "the rapid pace of material and design evolution in PV cells and modules introduces multiple changes at once that may not be detected by tests developed for issues that have been seen before. Test protocols are needed to assess weaknesses without prior knowledge of the likely failure modes." — Sec. VII
