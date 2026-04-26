---
type: source
id: 2014-fraunhofer-peel-testing-ribbons-solar-cells
source_type: protocol
title: "Peel Testing of Ribbons on Solar Cells at Different Angles: Consistent Comparison by Using Adhesive Fracture Energies"
authors: ["U. Eitner", "L. C. Rendler"]
year: 2014
doi: null
url: "https://www.ise.fraunhofer.de/en.html"
raw_path: raw/protocols/2014-fraunhofer-peel-testing-ribbons-solar-cells.pdf
tags: [protocol, methodology, peel-test, adhesion, DIN-EN-50461, Kinloch-Kawashita, plated-contacts, reference-method, Fraunhofer-ISE]
---

# Peel Testing of Ribbons on Solar Cells at Different Angles: Consistent Comparison by Using Adhesive Fracture Energies

## Summary
Fraunhofer ISE 29th EU PVSEC (2014) paper that establishes the peel-test methodology used to qualify cell-metallization adhesion in production. It documents the DIN EN 50461 minimum-force spec (1 N per mm of joint width) but exposes its incompleteness: peel angle is not specified, and 121 measurements at 45°/90°/135°/180° on the same SnPbAg-soldered Cu ribbons on multicrystalline Si cells with three continuous busbars show peel-force means of 9.74 N (45°) vs ~3 N at the other angles — a 4× artifact purely from geometry. Eitner & Rendler propose using the Kinloch–Kawashita adhesive-fracture-energy formulation (G_A) which collapses the angle dependence to a factor of 0.6. **Critically, the conclusion explicitly flags the method as essential for "novel technologies that come along with lower adhesion such as plated contacts or conductive gluing"** — making this the canonical adhesion protocol reference for evaluating SHJ Ni/Cu front-grid mechanical robustness post-damp-heat.

## Key claims
- DIN EN 50461 specifies a minimum peel force of 1 N per mm of joint width but does not specify the peel angle, leading to inconsistent qualification of new metallization stacks.
- Peel-force angle dependence (121 tests, mean values, SnPbAg-coated 160 µm × 1.6 mm Cu ribbon, IR-soldered to multi-Si cell with 3 continuous BBs):
  - 45°: 9.74 N
  - 90°: 3.14 N
  - 135°: 2.46 N
  - 180°: 3.49 N
- Translating to adhesive fracture energy G_A via Kinloch (1994) / Kawashita (2006) energy-balance equation collapses the spread to 510/395/441/595 J/m² (45°/90°/135°/180°), factor 0.66 between min and max.
- The G_A method incorporates the ribbon's stress–strain curve (true vs engineering stress) — necessary input to compute G_T (plastic tensile dissipation) and G_B (plastic bending at the peel front).
- Constant-G_A back-calculation: at fixed adhesive fracture energy, the measured peel force rises sharply for decreasing peel angles — explains why "passing 1 N/mm at 45°" and "passing 1 N/mm at 180°" are very different requirements.
- **Direct call-out**: "We believe this subject to be of major importance for qualifying novel technologies that come along with lower adhesion such as plated contacts or conductive gluing."
- Practical sample-prep note: rear side of cell glued to a rigid substrate to avoid cell cracking at high peel forces.

## Methods used
- [[../methods/peel-test-90deg]] — canonical protocol reference for the 90° peel test on cell metallization; explicitly part of DIN EN 50461. Provides the experimental setup (ribbon width 1.6 mm, IR-soldered, rigid backing) and the angle-corrected G_A interpretation framework.

## Reagents
- [[../reagents/multibusbar-Cu-ribbon]] — SnPbAg-coated 160 µm × 1.6 mm Cu ribbon used as the standard ribbon stock; stress-strain curve characterized in tensile mode.

## Organisms / substrates
- (Multi-crystalline Si cells with 3 continuous busbars; not on the canonical organism slug list — generic precursor to the modern multi-busbar SHJ context.)

## Failure modes flagged
- [[../failure-modes/finger-adhesion-loss-after-DH]] — direct relevance: peel test is the canonical protocol for detecting post-damp-heat adhesion loss at the metal/cell interface; the paper explicitly flags lower-adhesion plated contacts as the use case.

## Supports / contradicts
- Supports: [[2012-nrel-aluminum-metallization-tlm-printed]] (companion methodology — TLM and peel test together qualify a printed/plated metallization stack)
- Supports: [[2018-electrochemsci-barrier-properties-electroplated-ni]]

## Notable quotes
- "We believe this subject to be of major importance for qualifying novel technologies that come along with lower adhesion such as plated contacts or conductive gluing." — Conclusion
- "The peel test is a very simple and fast method to determine the adhesion of interconnector ribbons to solar cell metallizations. It is part of the solar cell standard DIN EN 50461 and is, due to its ease of use, widely accepted to qualify cell metallizations and the soldering process. In the standard a minimum force of 1 N per mm of joint width is specified but other relevant quantities are missing, for example the peeling angle." — Abstract
- "Transforming the force values into adhesive fracture energies, the mean values deviate only by a factor of 0.6 (45°: 510 J/m², 90°: 395 J/m², 135°: 441 J/m², 180°: 595 J/m²). This indicates that the method improves the interpretation of peel testing data by using the adhesive fracture energies as mechanical material parameters to quantify the adhesion." — Abstract
