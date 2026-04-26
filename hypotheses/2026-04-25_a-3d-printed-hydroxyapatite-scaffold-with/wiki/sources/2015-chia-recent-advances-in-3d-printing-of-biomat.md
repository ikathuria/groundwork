---
type: source
id: 2015-chia-recent-advances-in-3d-printing-of-biomat
source_type: paper
title: "Recent advances in 3D printing of biomaterials"
authors: ["Chia, Helena N.", "Wu, Benjamin M."]
year: 2015
doi: 10.1186/s13036-015-0001-4
url: https://doi.org/10.1186/s13036-015-0001-4
raw_path: raw/papers/2015-chia-recent-advances-in-3d-printing-of-biomat.xml
tags: [3D-printing, biomaterials, review, stereolithography, FDM, SLS, inkjet, gradient]
---

# Chia & Wu (2015) — Recent advances in 3D printing of biomaterials

## Summary

J Biological Engineering review of 3D-printing technologies for biomaterials. Walks through SLA, FDM, SLS/SLM, and binder-jet/inkjet printing — explicitly tracking each technology's resolution, material compatibility, and **its ability to pattern cells and multiple materials along complex 3D gradients.** Most relevant to the hypothesis: confirms HA scaffolds with fully interconnected channels can be printed directly from HA powder by 3DP/binder-jet, and that the field's emphasis is on gradient material/cell patterning.

## Key claims

- "This review focuses on advanced 3D Printing technologies that are being used to fabricate tissue engineering scaffolds, with **emphasis on their ability to pattern cells and multiple materials along complex 3D gradients**" — direct relevance to gradient-pore scaffolds.
- **Binder jetting/inkjet 3D printing has produced HA scaffolds with fully interconnected channels** directly from HA powder for bone replacement (cited reference 16).
- Resolution limits matter: typical inkjet/3DP printable feature is **~300 μm for 3D features** — sets the lower bound of pore sizes routinely achievable. The hypothesis's 100 μm outer cortical pore size is at or below the comfort zone of standard inkjet/binder-jet printing and may require SLA/DLP to hit reliably.
- **FDM advantages: high porosity from laydown pattern + good mechanical strength.**
- During sintering, "molecular diffusion along the outermost surface of the particle leads to neck formation between neighboring particles" — the basic mechanism that drives sintering shrinkage (and pore-size deviation from CAD).
- Conventional fabrication methods (gas foaming, solvent casting + particle leaching, freeze-drying, electrospinning) produce porosity but with poor control — the comparison case for AM.
- 3DP techniques surveyed include SLA, FDM, SLS, inkjet/binder-jet, with cell types including bovine chondrocytes, RAW264.7, human osteoblasts, C2C12, and bone-marrow stromal cells.
- Stereolithography is the first rapid-prototyping process (developed late 1980s).
- SLS develops from a 1989 University of Texas process; CO₂-laser sintering of powder beds.

## Methods used

- [[../methods/3D-printing-stereolithography]]
- [[../methods/DLP-vat-photopolymerization]]
- [[../methods/fused-deposition-modeling]]
- [[../methods/selective-laser-sintering]]
- [[../methods/binder-jet-3D-printing]]
- [[../methods/inkjet-3D-printing]]
- [[../methods/extrusion-based-3D-printing]]
- [[../methods/two-photon-polymerization]]
- [[../methods/ceramic-sintering]]
- [[../methods/SEM-imaging]]
- [[../methods/micro-CT-imaging]]

## Reagents

- [[../reagents/hydroxyapatite]]
- [[../reagents/beta-tricalcium-phosphate]]
- [[../reagents/polycaprolactone]]
- [[../reagents/polylactic-acid]]
- [[../reagents/PLGA]]
- [[../reagents/PEG-DA]]
- [[../reagents/collagen]]
- [[../reagents/alginate]]
- [[../reagents/gelatin]]

## Organisms / cell lines

- [[../organisms/MC3T3-E1]]
- [[../organisms/RAW264.7-osteoclast-precursor]]
- [[../organisms/primary-human-osteoblast]]
- [[../organisms/hBMSC]]

## Failure modes flagged

- [[../failure-modes/sintering-shrinkage-pore-deviation]] — neck-formation mechanism described.
- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — explicit minimum-feature-size limits per technique.
- [[../failure-modes/pore-anisotropy-from-print-direction]] — implicit in FDM laydown pattern discussion.
- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — discussed for SLA, inkjet binders.
- [[../failure-modes/brittle-ceramic-mechanical-failure]]

## Supports / contradicts

- **Supports** [[../hypothesis|the gradient-pore hypothesis]] by establishing AM as the natural route for 3D gradient material/cell patterning, and by confirming HA-direct printing.
- **Caveat**: the 300 μm resolution floor for inkjet/binder-jet 3DP suggests that the **100 μm outer pore-size end of the gradient is at the limit of standard binder-jet** and may require SLA/DLP or robocasting for reliable fidelity.
- **Consistent with** [[2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]], [[2015-do-3d-printing-of-scaffolds-for-tissue-rege]] on AM technique comparison.

## Notable quotes

> "This review focuses on advanced 3D Printing technologies that are being used to fabricate tissue engineering scaffolds, with emphasis on their ability of these manufacturing technologies to pattern cells and multiple materials along complex 3D gradients."

> "Tissue engineers have used 3DP to fabricate porous ceramic scaffolds with fully interconnected channels directly from hydroxyapatite (HA) powder for bone replacement"

> "300 μm for three dimensional features"

> "During sintering, molecular diffusion along the outermost surface of the particle lead to neck formation between neighboring particles."
