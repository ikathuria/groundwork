---
type: source
id: 2014-fraunhofer-peel-testing-ribbons-solar-cells
source_type: protocol
title: "Peel Testing of Ribbons on Solar Cells at Different Angles: Consistent Comparison by Using Adhesive Fracture Energies"
authors: ["Eitner, U.", "Rendler, L. C."]
year: 2014
doi: ""
url: https://publica.fraunhofer.de/bitstreams/12eff418-bd4d-4e81-bf0e-69acdbd85e3d/download
raw_path: raw/protocols/2014-fraunhofer-peel-testing-ribbons-solar-cells.pdf
tags: [peel-test, adhesion, DIN-EN-50461, IEC-62788, methodology, Fraunhofer-ISE]
created: 2026-04-26
updated: 2026-04-26
---

# Peel Testing of Ribbons on Solar Cells at Different Angles: Consistent Comparison by Using Adhesive Fracture Energies

**Eitner, U. and Rendler, L. C. (Fraunhofer ISE)** — *29th EU PVSEC, Amsterdam, 2014*. DOI: —

## Summary

Methodology paper showing that the peel test for solar-cell metallization (governed by DIN EN 50461) gives angle-dependent force readings that vary by a factor of 4 (45° vs 90°/135°/180°), and proposes using Kinloch–Kawashita adhesive fracture energies GA to make the test geometry-independent. Important for the SHJ Ni/Cu plan because the standard adhesion threshold of *1 N per mm of joint width* is angle-sensitive and the lower-adhesion plated-Ni/Cu and ECA contacts are exactly the failure cases for which a quantitative GA criterion matters.

## Key claims

- **Standard threshold:** DIN EN 50461 specifies a minimum force of **1 N per mm of joint width** for peel-test acceptance of cell metallization. (The SHJ Ni/Cu hypothesis maps its ≥1 N/mm adhesion success criterion directly to this clause.)
- **Standard configuration ambiguity:** DIN EN 50461 leaves the *peel angle* unspecified; consequence is that 45° peel forces are ~4× higher than 90°/135°/180°.
- **Measured peel forces (SnPbAg-coated 160 µm × 1.6 mm Cu ribbon, IR-soldered to 3-busbar mc-Si cells, n=121):** mean force 9.74 N at 45°, 3.14 N at 90°, 2.46 N at 135°, 3.49 N at 180°.
- **Adhesive fracture energies (geometry-independent):** 510 J/m² (45°), 395 J/m² (90°), 441 J/m² (135°), 595 J/m² (180°) — agreement within a factor of 0.66.
- **Test configuration:** rear of cell glued to a rigid substrate to prevent cracking at high peel forces; ribbons peeled on a Zwick tensile machine; **50 mm/min crosshead speed** (industry standard via DIN EN 50461 / IEC 61730-2).
- **Why this matters for plated Cu:** authors explicitly flag that "this subject [is] of major importance for qualifying novel technologies that come along with lower adhesion such as plated contacts or conductive gluing" — i.e. exactly the SHJ Ni/Cu and ECA arms of this hypothesis's experiment.
- **Implication for the plan:** quote a peel angle (90° is the convention, matched to teamtechnik / Klengel peel jig design) and report both peel force and adhesive fracture energy. Consider GA to make Ag-baseline / Ni/Cu / ECA adhesion comparisons defensible.

## Methods used

- [[methods/peel-test-90deg]] — the canonical 90° peel test per DIN EN 50461 / IEC 61730-2; Eitner shows that 90° gives the lowest force (~3 N for SnPbAg-Cu ribbon) and so is the most conservative adhesion screen.
- [[methods/damp-heat-aging-1000h]] — peel test is also the post-DH adhesion check (DH typically halves peel force by encapsulant softening + interface corrosion).

## Reagents

- [[reagents/multibusbar-Cu-ribbon]] — SnPbAg-coated 160 µm × 1.6 mm Cu ribbon used in the test, the standard interconnect to which the plated Cu finger would also be soldered.

## Organisms / substrates

- [[organisms/monocrystalline-Si-wafer-p-type]] — standard 3-busbar mc-Si solar cells used as the test substrate (the same DIN EN 50461 procedure applies to SHJ cells).

## Failure modes flagged

- [[failure-modes/finger-adhesion-loss-after-DH]] — peel-test value (and its drop after DH) is the canonical instrument for this failure mode.
- [[failure-modes/FF-degradation-contact-resistance]] — adhesion loss → contact failure → series-resistance rise; the peel test is the upstream early warning.

## Notable quotes

> "In the standard a minimum force of 1 N per mm of joint width is specified but other relevant quantities are missing, for example the peeling angle." — *Abstract*

> "We believe this subject to be of major importance for qualifying novel technologies that come along with lower adhesion such as plated contacts or conductive gluing." — *Conclusion*
