---
type: source
id: 2017-jeon-electroless-ni-front-metallization
source_type: paper
title: "Electroless Nickel Deposition for Front Side Metallization of Silicon Solar Cells"
authors: ["Hsieh, S. H.", "Hsieh, J. M.", "Chen, W. J.", "Chuang, C. C."]
year: 2017
doi: 10.3390/ma10080942
url: https://mdpi-res.com/materials/materials-10-00942/article_deploy/materials-10-00942.pdf
raw_path: raw/papers/2017-jeon-electroless-ni-front-metallization.pdf
tags: [electroless-Ni, NiP, NiSi, seed-layer, HF-activation]
created: 2026-04-26
updated: 2026-04-26
---

# Electroless Nickel Deposition for Front Side Metallization of Silicon Solar Cells

**Hsieh, S. H., Hsieh, J. M., Chen, W. J., Chuang, C. C.** — *Materials (MDPI), 10, 942, 2017*. DOI: 10.3390/ma10080942

## Summary

Experimental study (National Yunlin University + Motech) of electroless Ni-P seed-layer chemistry on textured Si: SnCl₂/PdCl₂ activation, NiSO₄ + NaH₂PO₂ bath at 70 °C / pH 5, plating rate ~1 nm/s. Characterised by SEM, TEM, EDS, XRD, sheet-resistance, and Voc on completed Cu/Ni cells annealed 300–800 °C. Establishes that NiSi forms at ≥500 °C (lowest-resistivity silicide phase) and that an HF activation step before electroless plating significantly raises Voc by removing the native SiO₂ that otherwise raises series resistance.

## Key claims

- Electroless Ni-P deposits at ~1 nm/s; films are continuous above 45 nm thickness and uniform on textured Si pyramids (SEM cross-sections at 60, 90, 120, 180 s plating times = 58, 95, 106, 184 nm).
- Annealing 300–800 °C / 10 min in Ar/H₂ produces Ni₂Si (210, 211, 021, 002) and NiSi (011, 211, 002) phases (XRD); NiSi₂ appears only above 800 °C. NiSi has the lowest resistivity of the three silicide phases — preferred for ohmic contact formation.
- Adding HF to the activation bath improves Voc significantly. Mechanism: HF removes/reduces native SiO₂ at the Ni/Si interface, lowering series resistance.
- The bath enables the electroless Ni layer to serve as both the *seed* (for subsequent Cu electroplating) *and* the *diffusion barrier* before Cu deposition — a single-chemistry two-function layer.

## Methods used

- [[methods/electroless-Ni-deposition]] — the paper's primary technique (NiSO₄/NaH₂PO₂ bath, pH 5, 70 °C, 1 nm/s).
- [[methods/Cu-electroplating-acid-bath]] — Cu thickening above the Ni-P seed.
- [[methods/IV-curve-measurement]] — Voc measured under AM1.5 to gauge HF activation effect.
- [[methods/four-point-probe-sheet-resistance]] — film characterisation.

## Reagents

- [[reagents/nickel-phosphorus-NiP-electroless]] — the as-deposited Ni-P alloy (P from hypophosphite reducer).
- [[reagents/nickel-sulfamate-bath]] — Ni-source family (here NiSO₄·6H₂O variant of the same family).
- [[reagents/acid-Cu-sulfate-bath]] — Cu electroplating step on the Ni seed.

## Organisms / substrates

- [[organisms/monocrystalline-Si-wafer-p-type]] — pyramid-textured single-crystal Si used as the substrate (homojunction context).

## Failure modes flagged

- [[failure-modes/Cu-diffusion-into-c-Si]] — explicit justification for using Ni as a diffusion barrier between Cu and Si.
- [[failure-modes/FF-degradation-contact-resistance]] — series-resistance reduction via HF activation is the explicit performance lever; native SiO₂ at the interface is the failure mechanism mitigated.

## Supports / contradicts

- **Supports:** [[sources/2014-rehman-nicu-plating-csi-review]] — same two-step Ni-seed + Cu-electroplating concept; this paper provides the experimental anchor for Rehman's review claims.
- **Supports:** [[sources/2018-electrochemsci-barrier-properties-electroplated-ni]] — Cheng et al. (same Yunlin group, follow-up paper) tests barrier properties of these electroless-Ni / electroplated-Ni stacks at 60 vs 120 nm; this paper provides the seed-layer chemistry.

## Notable quotes

> "The deposits are continuous thin films above the thickness of 45 nm. The characteristics of this bath enable us to conclude that it can be used as a seed layer and diffusion barrier before copper deposition for contact solar cells on silicon." — *p. 3*

> "The results show that open circuit voltage of a solar cell can be enhanced when the activation solution incorporated hydrofluoric acid (HF). This is mainly attributed to the native silicon oxide layer that can be decreased and/or removed by HF with the corresponding reduction of series resistance." — *Abstract*
