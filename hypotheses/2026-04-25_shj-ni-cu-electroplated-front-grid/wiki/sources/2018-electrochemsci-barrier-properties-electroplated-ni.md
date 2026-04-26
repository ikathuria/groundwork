---
type: source
id: 2018-electrochemsci-barrier-properties-electroplated-ni
source_type: protocol
title: "Barrier Properties of Electroplating Nickel Layer for Copper Metallization in Silicon Solar Cells"
authors: ["Cheng, Y. R.", "Chen, W. J.", "Ohdaira, K.", "Higashimine, K."]
year: 2018
doi: 10.20964/2018.12.23
url: https://www.electrochemsci.org/papers/vol13/131211516.pdf
raw_path: raw/protocols/2018-electrochemsci-barrier-properties-electroplated-ni.pdf
tags: [Ni-barrier, electroplated-Ni, Cu3Si, thickness-threshold, anneal]
created: 2026-04-26
updated: 2026-04-26
---

# Barrier Properties of Electroplating Nickel Layer for Copper Metallization in Silicon Solar Cells

**Cheng, Y. R., Chen, W. J., Ohdaira, K., Higashimine, K.** — *Int. J. Electrochem. Sci. 13, 11516–11525, 2018*. DOI: 10.20964/2018.12.23

## Summary

Methodology paper on electroplated-Ni thickness vs barrier efficacy. Forms Cu (1.5 µm) / electroplated-Ni (60 or 120 nm) / silicide-passivated textured Si (ta-Si) stacks; anneals 300–800 °C / 10 min in Ar/H₂; tracks Cu₃Si formation by XRD as the failure marker. Direct contradiction to the hypothesis's "sub-100 nm Ni" framing: 60 nm Ni shows Cu₃Si already at 300 °C and strong intensity above 500 °C; 120 nm Ni delays Cu₃Si onset to 400 °C with strong intensity only above 600 °C. Confirms Cu₃Si forms by solid-state reaction at temperatures as low as 200 °C. **Critical anchor source for the contradiction noted in `hypothesis.md` open question #1.**

## Key claims

- Process: electroless Ni → 500 °C anneal → HNO₃ etch unreacted Ni (forms ta-Si silicide-passivated substrate) → electroplate Ni (60 or 120 s, ~1 nm/s) → electroplate Cu 1.5 µm → 10 min anneal at 300–800 °C.
- For Cu/Ni(60 nm)/ta-Si: Cu₃Si peaks visible already at 300 °C, strong above 500 °C. Barrier fails.
- For Cu/Ni(120 nm)/ta-Si: Cu₃Si first detected at 400 °C, strong above 600 °C. Barrier holds at 200 °C and below.
- Cu₃Si forms via solid-state reaction at ~200 °C — i.e., it can occur within the SHJ a-Si:H thermal budget if the Ni is too thin.
- STEM/EDS shows that on the 120 nm Ni stack annealed at 300 °C, Cu has not diffused into the Si substrate; a Ni/Ni-silicide bilayer (Ni layer ~100 nm + Ni₂Si ~200 nm) blocks Cu transport.
- Plain claim: "increasing electroplating nickel time from 60 to 120 seconds will significantly increase the barrier property."

## Methods used

- [[methods/electroless-Ni-deposition]] — first-stage Ni seed (60 s, 70 °C, pH 5) before silicidation.
- [[methods/Ni-sputter-deposition]] — comparison reference (paper deliberately avoids sputtering, but it is the alternative).
- [[methods/electroplated-Ni-Cu-stack]] — the test stack itself: electroplated Ni barrier + electroplated Cu.
- [[methods/Cu-electroplating-acid-bath]] — 25 °C plating bath with magnetic stirring, Pt anode, 1 cm² sample.
- [[methods/SIMS-depth-profile]] — analogous depth-resolved compositional check (here STEM-EDS line scan plays this role).

## Reagents

- [[reagents/nickel-sulfamate-bath]] — electroplating Ni electrolyte (sulfamate / sulfate family).
- [[reagents/acid-Cu-sulfate-bath]] — Cu electroplating bath.
- [[reagents/Cu3Si-intermetallic]] — the failure-product phase the XRD detects.

## Organisms / substrates

- [[organisms/monocrystalline-Si-wafer-n-type]] — phosphorus-doped textured (100) Si wafer (1–3 µm pyramid roughness).

## Failure modes flagged

- [[failure-modes/Cu3Si-formation-at-Si-interface]] — explicit failure mode tracked by XRD; the headline result of the paper.
- [[failure-modes/Ni-barrier-pinholes]] — although not directly imaged, the 60 nm vs 120 nm dichotomy implies pinholes/discontinuity at lower thickness.
- [[failure-modes/Cu-diffusion-into-c-Si]] — the bulk-Si consequence of barrier failure; mitigated only by ≥120 nm Ni at 300 °C.

## Supports / contradicts

- **Supports:** [[sources/2017-jeon-electroless-ni-front-metallization]] — same Yunlin group; uses the 2017 electroless-Ni chemistry as the foundation step.
- **Supports:** [[sources/2015-lindroos-cu-lid-aalto-thesis]] — Lindroos shows even sub-ppb Cu in Si bulk causes recombination collapse; Cheng shows the conditions under which Cu reaches the Si bulk.
- **Contradicts:** [[sources/2014-rehman-nicu-plating-csi-review]] — Rehman's general assertion that Ni "can form a promising barrier" is *thickness-conditional* per Cheng; the hypothesis's sub-100 nm Ni cap sits in the 60-nm-failure regime per this paper.
- **Contradicts:** [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — SunDrive achieves DH stability without an electroplated-Ni barrier at all; resolution requires that the SHJ TCO + a-Si:H stack supplies the barrier function, not Ni.

## Notable quotes

> "For the Cu/Ni(120 nm)/ta-Si samples, the Cu₃Si particles develop from an annealing temperature of 400 ºC. This revealed that electroplating a thin Ni layer can act as a diffusion barrier against Cu at around 400°C." — *Abstract*

> "The strong intensity of Cu₃Si peaks are presented at temperature higher than 500 °C [for 60 nm Ni] … the Cu₃Si phase was formed by a solid-state reaction at 200 °C, which is less than the annealing temperature we used. A thin layer of electroplating Ni can block the diffusion of Cu into Si at 200 °C." — *p. 11519*
