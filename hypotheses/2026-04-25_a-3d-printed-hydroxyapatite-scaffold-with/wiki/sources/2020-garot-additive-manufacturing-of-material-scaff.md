---
type: source
id: 2020-garot-additive-manufacturing-of-material-scaff
source_type: paper
title: "Additive Manufacturing of Material Scaffolds for Bone Regeneration: Toward Application in the Clinics"
authors: ["Garot, Charlotte", "Bettega, Georges", "Picart, Catherine"]
year: 2020
journal: "Advanced Functional Materials"
doi: 10.1002/adfm.202006967
pmcid: PMC7116655
pmid: 33531885
url: https://doi.org/10.1002/adfm.202006967
raw_path: raw/papers/2020-garot-additive-manufacturing-of-material-scaff.xml
tags: [3D-printing, additive-manufacturing, bone-regeneration, clinical-translation, review]
created: 2026-04-25
updated: 2026-04-25
---

# Garot et al. 2020 — Additive Manufacturing of Material Scaffolds for Bone Regeneration

## Summary

Clinical-translation–oriented review of AM materials and methods for bone regeneration. Methods are grouped into three categories — extrusion-based (FDM, robocasting/DIW, dispense-plotting, Multi Head Deposition), powder-based (binder jetting, SLS/SLM), and liquid-based (SLA, DLP) — with explicit comparison on price, ease of use, achievable resolution, and material range. Provides quantitative process-window numbers crucial for choosing an HA fabrication route in the 100–500 μm pore-size range.

## Key claims

- "**It is impossible to print features of size below 100 μm**" with current routine BTE AM (Table 2 of the paper). Aligns with the lower bound of the proposed gradient.
- "Pore size between 100 and 400 μm is considered as ideal" for bone-regeneration scaffolds; macroporous scaffolds with **pore sizes 300–550 μm and strut sizes 150–500 μm are the best candidates for cranial defects**.
- Dimensional errors below 200 μm are "considered as satisfying" for BTE — consistent with achievable AM accuracy.
- SLA/DLP can print photosensitive polymers and ceramic slurries; **DLP uses light projection rather than scanning**, increasing throughput.
- Extrusion-based (FDM, robocasting, dispense plotting, MHDS) processes input as filament or paste — directly maps to robocasting of HA.
- A photoinitiator is required for vat photopolymerization, which excludes ceramics and metals alone — they must be loaded into a photocurable resin matrix and post-processed (debinding + sintering).
- Sterilization is identified as a major translation bottleneck: autoclaving, ethylene oxide, and plasma sterilization should be avoided because they induce shrinkage, toxicity, or physical alteration in many BTE materials.
- Specific AM-route ↔ clinical-application mappings are tabulated based on material biomimetism, mechanical match, biodegradability, imaging compatibility, histological performance, and sterilization compatibility.

## Methods used

- [[../methods/3D-printing-stereolithography]]
- [[../methods/DLP-vat-photopolymerization]]
- [[../methods/robocasting-direct-ink-writing]]
- [[../methods/binder-jet-3D-printing]]
- [[../methods/selective-laser-sintering]]
- [[../methods/fused-deposition-modeling]]
- [[../methods/extrusion-based-3D-printing]]
- [[../methods/inkjet-3D-printing]]
- [[../methods/two-photon-polymerization]]
- [[../methods/ceramic-sintering]]
- [[../methods/debinding-thermal-treatment]]
- [[../methods/slurry-preparation-for-DLP]]
- [[../methods/micro-CT-imaging]]

## Reagents

- [[../reagents/hydroxyapatite]]
- [[../reagents/beta-tricalcium-phosphate]]
- [[../reagents/biphasic-calcium-phosphate]]
- [[../reagents/polycaprolactone]]
- [[../reagents/polylactic-acid]]
- [[../reagents/PLGA]]
- [[../reagents/PEG-DA]]
- [[../reagents/photoinitiator-TPO]]
- [[../reagents/photoinitiator-LAP]]
- [[../reagents/collagen]]
- [[../reagents/gelatin]]

## Organisms

- (Review — clinical translation focus, no primary cell or animal data.)

## Failure modes flagged

- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — vat photopolymerization requires a photoinitiator; residual photoinitiator can be cytotoxic. Sterilization can also leave residues.
- [[../failure-modes/sintering-shrinkage-pore-deviation]] — sterilization (autoclave) and post-processing can induce shrinkage; the paper explicitly flags this for materials.
- [[../failure-modes/HA-phase-decomposition-during-sintering]] — implicit in the trade-off between high sintering temperature for densification and HA stoichiometry.
- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — the paper sets dimensional accuracy expectations of <200 μm error.

## Supports / contradicts

- Strongly supports the hypothesis's pore-size window and identifies HA-loadable AM routes (DLP, robocasting, binder jetting). The 100 μm lower-bound choice in the hypothesis is exactly the lower-resolution limit cited here, justifying the hypothesis's design choice.
- Reinforces clinical-translation considerations Pass 3 must build into the plan (sterilization, regulatory pathway).
- Concordant with [[2017-bose-additive-manufacturing-of-biomaterials]] on AM route classification.

## Notable quotes

- "Indeed, it is impossible to print features of size below 100 μm."
- "A pore size between 100 and 400 μm is considered as ideal for these applications."
- "Macroporous scaffolds with pore sizes between 300 and 550 μm and strut sizes between 150 and 500 μm are the best candidates for the treatment of cranial defects."
- "Without a photoinitiator, the materials cannot be printed: this requirement excludes ceramics and metals alone."
- "Autoclaving, ethylene oxide and plasma sterilization should be avoided because they induce a shrinkage of the materials, toxicity and physical alterations respectively."
