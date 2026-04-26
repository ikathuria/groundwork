---
type: source
id: 2024-nrel-getting-ahead-of-curve-pv-assessment
source_type: protocol
title: "Getting Ahead of the Curve: Assessment of New Photovoltaic Module Reliability Risks Associated With Projected Technological Changes"
authors: ["Zuboy, J.", "Springer, M.", "Palmiotti, E. C.", "Karas, J.", "Smith, B. L.", "Woodhouse, M.", "Barnes, T. M."]
year: 2024
doi: 10.1109/JPHOTOV.2023.3334477
url: https://docs.nrel.gov/docs/fy24osti/84131.pdf
raw_path: raw/protocols/2024-nrel-getting-ahead-of-curve-pv-assessment.pdf
tags: [reliability, NREL, SHJ, copper-plating, n-type, ITRPV, emerging-tech, methodology]
created: 2026-04-26
updated: 2026-04-26
---

# Getting Ahead of the Curve: Assessment of New Photovoltaic Module Reliability Risks Associated With Projected Technological Changes

**Zuboy, J., Springer, M., Palmiotti, E. C., Karas, J., Smith, B. L., Woodhouse, M., Barnes, T. M. (NREL, DuraMAT 2)** — *IEEE Journal of Photovoltaics 14(1):4–22, January 2024*. DOI: 10.1109/JPHOTOV.2023.3334477

## Summary

NREL's 2024 review of 11 emerging crystalline-silicon module technology trends and the *new* reliability risks each introduces — explicitly including SHJ + plated Cu metallization. Argues that the qualification-test "screen for known field failures" approach is fundamentally inadequate for emerging tech and that the PV community must build a "reliability learning cycle" of field diagnostics → failure analysis → accelerated tests → standards. Directly relevant for the SHJ Ni/Cu hypothesis: it names plated Cu as introducing potential new failure modes (Cu ingress, plated-contact adhesion) and argues for tailored accelerated-test sequences rather than relying on IEC 61215 retest.

## Key claims

- **The 11 tracked trends are grouped into 4 categories:** module architecture (larger, thinner cells), interconnect technologies (multibusbar, busbarless, shingling, ECA), bifacial modules (POE, glass-glass, thinner glass), and **cell technology (PERC → TOPCon → SHJ)**.
- **n-type silver problem named explicitly:** "n-type cells typically require higher silver content in their contacts compared to p-type cells, which increases costs, raises concerns about the global supply of silver, and motivates redesign of the metallization and interconnection scheme. Copper is an attractive alternative material owing to being both cheaper and more earth-abundant than silver, and SHJ has an additional requirement for low process temperature metallization and interconnection, which gives further motivation to replace silver." — direct endorsement of the SHJ Ni/Cu hypothesis premise.
- **Plated Cu reliability risks NREL flags:** (1) increased risk of degradation from copper ingress into the cell; (2) adhesion of plated contacts to the cell. Notes that plated Cu may require new manufacturing processes and tools and different interconnection schemes.
- **Counter-evidence cited:** "some promising lab- and pilot-scale work has demonstrated equal or better performance by plated copper contacts in various reliability tests." — i.e. NREL frames the question as open and answerable by experiment.
- **AAA-backsheet precedent (cautionary tale):** AAA-polyamide backsheets passed standard DH and UV but cracked after 5–10 years from mechanical stresses not covered by the standard. Used as the canonical example of why "passes IEC 61215" is insufficient for novel materials — directly relevant to the Cu-plated-stack reliability claim.
- **Recommended path:** standards must add methods to detect and screen out *unanticipated* failure modes; lifetime estimation and predictive modelling are needed to assess multiple degradation mechanisms simultaneously.
- **POE encapsulant rising:** flagged as the SHJ-bifacial-driven encapsulant of choice (because POE has no acetic-acid pathway, unlike EVA) — relevant for the Cu-finger-corrosion failure mode that the Lachowicz CSEM/SunDrive papers also resolve via POE.
- **Low-temperature interconnects:** SHJ requires low-temperature solder or ECA because of the a-Si:H thermal budget. ECA debonding and corrosion of nonsilver conductive particles are flagged as understudied failure modes.

## Methods used

- [[methods/damp-heat-aging-1000h]] — IEC 61215 baseline; explicitly flagged as inadequate for emerging tech alone.
- [[methods/extended-damp-heat-IEC63209]] — implicitly recommended; the paper argues for extended DH for plated-Cu contacts.
- [[methods/temperature-cycling-IEC61215-TC200]] — included in the IEC retest matrix invoked by IEC TS 62915 for cell-technology changes.
- [[methods/SIMS-depth-profile]] — implicit; "Cu ingress into the cell" is the failure mode SIMS detects.
- [[methods/EL-electroluminescence-imaging]] — recommended diagnostic for emerging-tech reliability.

## Reagents

- [[reagents/EVA-encapsulant]] — flagged as legacy; POE rising due to acetic-acid issue.
- [[reagents/POE-polyolefin-encapsulant]] — explicitly named as the bifacial-SHJ encapsulant of choice.
- [[reagents/electrically-conductive-adhesive-ECA]] — flagged as low-T interconnect for SHJ with poorly-characterised long-term reliability.

## Organisms / substrates

- [[organisms/SHJ-cell-M10]] — SHJ on M10 wafers is the projected dominant n-type cell architecture in the trends analysis.
- [[organisms/full-size-module-60-cell]] — module-level reliability framing.

## Failure modes flagged

- [[failure-modes/Cu-diffusion-into-c-Si]] — "increased risk of degradation from copper ingress into the cell" — explicitly named.
- [[failure-modes/finger-adhesion-loss-after-DH]] — "adhesion of plated contacts to the cell" — explicitly named.
- [[failure-modes/Cu-finger-oxidation-damp-heat]] — implicit Cu-specific oxidation failure.
- [[failure-modes/Cu-finger-corrosion-encapsulant]] — POE adoption framed as mitigation for this failure mode.
- [[failure-modes/EVA-acetic-acid-corrosion]] — the upstream chemistry that motivates the EVA → POE switch.
- [[failure-modes/silver-supply-bottleneck]] — explicitly cited as motivator for Cu plating in n-type cells.

## Supports / contradicts

- **Supports:** [[sources/2024-itrpv-15th-edition-roadmap]] — paper draws heavily on multi-year ITRPV data for trend projections.
- **Supports:** [[sources/2022-karas-cu-outdiffusion-damp-heat]] — Karas (the failure-mode evidence paper) is a co-author here; the 2024 review is the policy-level statement of his earlier mechanistic work.
- **Supports:** [[sources/2019-karas-damp-heat-degradation-shj-cu]] — same author family, framing the same Cu-DH failure-mode question.
- **Contradicts:** none of the SHJ Ni/Cu literature directly, but argues against the implicit assumption that 1000 h DH is sufficient — softer support for the hypothesis's success criterion.

## Notable quotes

> "Copper is an attractive alternative material owing to being both cheaper and more earth-abundant than silver, and SHJ has an additional requirement for low process temperature metallization and interconnection, which gives further motivation to replace silver. Plated copper metallization has been demonstrated in both TOPCon and SHJ cell architectures … Copper contacts could conceivably introduce new reliability issues, including increased risk of degradation from copper ingress into the cell and adhesion of plated contacts to the cell." — *p. 14*

> "These AAA backsheets passed standard damp-heat and ultraviolet (UV) light tests, but many began cracking after five to ten years owing to mechanical stresses from production and environmental exposure that had not been part of standard testing." — *p. 4*
