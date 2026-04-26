---
type: source
id: 2015-do-3d-printing-of-scaffolds-for-tissue-rege
source_type: paper
title: "3D Printing of Scaffolds for Tissue Regeneration Applications"
authors: ["Do, Anh-Vu", "Khorsand, Behnoush", "Geary, Sean M.", "Salem, Aliasger K."]
year: 2015
doi: 10.1002/adhm.201500168
url: https://doi.org/10.1002/adhm.201500168
raw_path: raw/papers/2015-do-3d-printing-of-scaffolds-for-tissue-rege.xml
tags: [3D-printing, scaffold, tissue-regeneration, review, hydroxyapatite, MC3T3-E1, pore-size]
---

# Do, Khorsand, Geary & Salem (2015) — 3D Printing of Scaffolds for Tissue Regeneration Applications

## Summary

Advanced Healthcare Materials review of 3D-printing methods for tissue-regeneration scaffolds. Highlights the limits of conventional fabrication (poor control over pore size, geometry, interconnectivity, mechanical strength) versus AM techniques (direct 3DP, FDM, SLA, SLS). Most relevant to the hypothesis: cites a study where **HA scaffolds with 500 μm pore channels supported MC3T3-E1 proliferation** — directly the cell line + upper pore size of the proposed gradient — and another where mixed HA/TCP scaffolds were printed with **300 μm pore size** to enable nutrient transfer.

## Key claims

- Conventional fabrication is "often inadequate at fabricating precise pore size, pore geometry, high levels of interconnectivity, and high mechanical strength" — motivates AM for pore-architecture-sensitive hypotheses.
- "**Interconnecting channels with pore sizes of 500 μm in the designed scaffolds displayed the ability to facilitate mouse MC3T3-E1 cell proliferation**, illustrating the potential of HA scaffolds to regenerate bone." Direct support that 500 μm HA scaffolds (the hypothesis's core pore size) drive MC3T3 proliferation.
- HA + TCP scaffolds printed with **~300 μm pore size are large enough to allow nutrient transfer for cells.** Supports the upper end of the diffusion-supportive range.
- "Hydroxyapatite (HA), itself a ceramic, is commonly found in human teeth and bones, thus making the use of HA, or similar ceramics, attractive materials for creating scaffolds with strong mechanical properties similar to that of natural bone."
- Synthetic polymers (PCL, PLGA) yield higher mechanical strength, processability, and controllable degradation vs. natural materials.
- HA scaffolds were created in a layer-by-layer process followed by sintering — the canonical binder-jet → sinter HA route.
- Inkjet 3D printing (binder jetting / drop-on-powder) is a major route for porous scaffolds; Fe-Mn metallic scaffolds also produced this way.
- AM techniques surveyed: direct 3D printing, FDM, SLA, SLS.
- Hybrid systems combining inkjet (hydrogels) + FDM (thermoplastics) used to compensate hydrogel mechanical weakness.

## Methods used

- [[../methods/binder-jet-3D-printing]]
- [[../methods/inkjet-3D-printing]]
- [[../methods/fused-deposition-modeling]]
- [[../methods/3D-printing-stereolithography]]
- [[../methods/selective-laser-sintering]]
- [[../methods/extrusion-based-3D-printing]]
- [[../methods/ceramic-sintering]]
- [[../methods/SEM-imaging]]
- [[../methods/micro-CT-imaging]]
- [[../methods/alamarBlue-proliferation-assay]]
- [[../methods/live-dead-staining]]

## Reagents

- [[../reagents/hydroxyapatite]]
- [[../reagents/beta-tricalcium-phosphate]]
- [[../reagents/biphasic-calcium-phosphate]]
- [[../reagents/polycaprolactone]]
- [[../reagents/PLGA]]
- [[../reagents/polylactic-acid]]
- [[../reagents/collagen]]
- [[../reagents/gelatin]]
- [[../reagents/alginate]]

## Organisms / cell lines

- [[../organisms/MC3T3-E1]]
- [[../organisms/primary-human-osteoblast]]
- [[../organisms/hBMSC]]

## Failure modes flagged

- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — explicit critique of conventional methods' poor pore-size precision.
- [[../failure-modes/sintering-shrinkage-pore-deviation]]
- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — for inkjet binders.
- [[../failure-modes/brittle-ceramic-mechanical-failure]]
- [[../failure-modes/cell-seeding-uniformity-loss-large-pores]] — implicit in 500 μm HA scaffold cell discussion.

## Supports / contradicts

- **Strongly supports** [[../hypothesis|the gradient-pore hypothesis]]: the 500 μm HA / MC3T3 proliferation finding is essentially the upper anchor of the proposed gradient with the proposed cell line.
- **Consistent with** [[2012-amini-bone-tissue-engineering-recent-advances]] (300 μm sustains diffusion), [[2012-bose-recent-advances-in-bone-tissue-engineeri]] (200–350 μm optimum), [[2015-chia-recent-advances-in-3d-printing-of-biomat]] (binder-jet HA route).

## Notable quotes

> "The interconnecting channels with pore sizes of 500μm in the designed scaffolds displayed the ability to facilitate mouse MC3T3-E1 cell proliferation, illustrating the potential of HA scaffolds to regenerate bone."

> "calcium phosphate ... when combined with other ceramics, such as HA and TCP, yields scaffolds with pore sizes of 300 μm that are large enough to allow nutrient transfer for cells."

> "These conventional methods have many limitations since they are often inadequate at fabricating precise pore size, pore geometry, high levels of interconnectivity, and high mechanical strength"
