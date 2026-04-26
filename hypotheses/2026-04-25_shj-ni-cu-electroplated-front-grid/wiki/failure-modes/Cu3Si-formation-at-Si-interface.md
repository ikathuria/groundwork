---
type: failure-mode
slug: Cu3Si-formation-at-Si-interface
severity: critical
frequency_estimate: "Cu/Ni(60 nm)/textured-Si: Cu₃Si XRD-detectable at 300 °C / 10 min anneal in Ar/H₂ (Cheng 2018). Cu/Ni(120 nm): Cu₃Si onset at 400 °C. η′-Cu₃Si precipitates also nucleate at 200 °C at thin-film-Cu/Si interfaces (Lindroos 2015)."
applies_to_methods: [electroplated-Ni-Cu-stack, electroless-Ni-deposition, Cu-electroplating-acid-bath, light-induced-plating, SIMS-depth-profile]
applies_to_reagents: [acid-Cu-sulfate-bath, nickel-sulfamate-bath, nickel-phosphorus-NiP-electroless, Cu3Si-intermetallic]
applies_to_step_kinds: [plate, anneal, measure]
sources: [2015-lindroos-cu-lid-aalto-thesis, 2018-electrochemsci-barrier-properties-electroplated-ni]
tags: [intermetallic, Cu3Si, eta-prime, silicide, Ni-barrier-failure, anneal]
---

# Cu₃Si intermetallic formation at the Si interface

## What it is
When Cu makes direct contact with Si and is heated, it reacts to form copper silicide (η′-Cu₃Si) at the Si interface. η′-Cu₃Si nucleates at temperatures as low as 200 °C at thin-film-Cu/Si interfaces ([[2015-lindroos-cu-lid-aalto-thesis]]) and grows as facet-like grains into the textured Si pyramids once the Ni barrier is breached ([[2018-electrochemsci-barrier-properties-electroplated-ni]]). Beyond destroying the contact geometry, Cu₃Si is the kinetic source of Cu interstitials feeding [[Cu-diffusion-into-c-Si]] — the silicide is the storage tank that delivers fast-diffusing Cu deep into the wafer over its operating lifetime. In the SHJ stack, Cu₃Si is what would form if (i) the Ni barrier has pinholes or is too thin and (ii) the TCO/a-Si:H stack underneath is locally absent (laser ablation residue, mechanical scratch).

## How it manifests
- Cu₃Si XRD peaks (η′ phase, characteristic 2θ near 44–45° and 51°) emerge after anneal ([[2018-electrochemsci-barrier-properties-electroplated-ni]]).
- STEM-EDS cross-section shows Cu signal in the Si substrate plus facet-like grains penetrating into pyramid faces (Cheng 2018, Fig. 3-4 at 500 °C).
- pFF collapses; bulk minority-carrier lifetime drops; Voc loss correlates with silicide volume.
- Once nucleated, η′-Cu₃Si is stable at 200 °C and does not anneal back; lifetime is permanently degraded.

## How to detect it
- [[../methods/SIMS-depth-profile]] — Cu signal extending into the Si bulk under the contact area; STEM-EDS cross-section is the gold-standard direct visualization (Cheng 2018 protocol).
- XRD of contact regions — Cu₃Si phase peaks separable from Cu, NiSi, Ni₂Si peaks.
- [[../methods/minority-carrier-lifetime-photoluminescence]] — irreversible bulk-lifetime drop after a 200 °C anneal cycle on encapsulated cells is diagnostic (BO-LID would recover).
- [[../methods/dark-IV-suns-Voc]] — pFF collapse without R_s rise.

## Mitigation (specific actions, not vague advice)
- Use ≥120 nm electroplated Ni barrier (Cheng 2018 directly contradicts the hypothesis's "sub-100 nm" target — 60 nm fails at 300 °C); if going thinner, add a 200 °C / 5 min NiSi silicide-formation anneal as a kinetically dense buffer ([[2017-jeon-electroless-ni-front-metallization]]).
- Confirm absence of pinholes in the Ni barrier by SEM and electrochemical pinhole testing (e.g., copper-displacement decoration) before cap deposition ([[Ni-barrier-pinholes]]).
- Hard-cap the SHJ thermal budget at ≤200 °C for any post-plate process; ≤280 °C / 5 s as the absolute upper bound from a-Si:H survival ([[2025-yacouba-shj-silver-free-metallization-progPV]]).
- Verify TCO continuity under the contact — laser-ablation residue in NOBLE flow can locally remove TCO and expose a-Si:H/Si ([[2021-hatt-stable-cu-plated-shj-eupvsec]]).
- Add a Ni-Co alloy (Ni₇₁Co₂₉) co-deposition step to delay Cu₃Si nucleation by ~50 °C if extended thermal margin is required (Huang et al., cited in [[2018-electrochemsci-barrier-properties-electroplated-ni]]).
- Avoid >300 °C ribbon-soldering; use SnBi or LMPA solder ≤180 °C ([[2022-arena-sundrive-copper-metallisation-demonstration]]).

## Severity ranking justification
Critical: η′-Cu₃Si is the on-wafer mechanism that converts a barrier-failure event into permanent device degradation. Once nucleated it both removes Cu (and Ni) from the contact and feeds the silicon bulk with mobile Cu. There is no field anneal that recovers it, and on Cheng's 60 nm Ni it forms below the SHJ-irrelevant 300 °C limit, so even a brief soldering excursion would suffice if the Ni is undersized.

## Sources
- `[[2018-electrochemsci-barrier-properties-electroplated-ni]]` — direct quantification of Ni thickness vs Cu₃Si formation temperature; STEM-EDS cross-sections.
- `[[2015-lindroos-cu-lid-aalto-thesis]]` — η′-Cu₃Si as the bulk Cu-storage phase, recombination-band depth, 200 °C nucleation.
