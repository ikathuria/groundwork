---
type: method
slug: DLP-vat-photopolymerization
aliases: [DLP, digital-light-processing, vat-photopolymerization, ceramic-DLP, LCD-printing]
related_methods: [3D-printing-stereolithography, slurry-preparation-for-DLP, debinding-thermal-treatment, ceramic-sintering, gradient-photocuring, two-photon-polymerization, gradient-pore-design, micro-CT-imaging]
key_reagents: [hydroxyapatite, beta-tricalcium-phosphate, biphasic-calcium-phosphate, photoinitiator-TPO, photoinitiator-LAP, PEG-DA]
known_failure_modes: [cytotoxic-residue-from-binders-or-photoinitiators, sintering-shrinkage-pore-deviation, HA-phase-decomposition-during-sintering, cad-vs-actual-pore-size-mismatch, brittle-ceramic-mechanical-failure, pore-anisotropy-from-print-direction]
sources: [2017-bose-additive-manufacturing-of-biomaterials, 2020-garot-additive-manufacturing-of-material-scaff, 2025-hossen-biomimetic-strategies-for-bone-regenerat, 2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por, 2025-tang-advances-in-3d-printed-scaffolds-for-bon, 2020-wang-3d-printing-of-bone-tissue-engineering-s, 2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity, 2022-yang-gaussian-curvature-driven-direction-of-c, 2026-liu-design-and-fabrication-of-biomimetic-gra, 2025-liu-gradient-scaffolds-in-bone-soft-tissue-i, 2025-xie-recent-advances-in-gradient-biomimetic-s, 2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp, 2015-baino-bioceramics-and-scaffolds-a-winning-comb, 2015-chia-recent-advances-in-3d-printing-of-biomat]
tags: [additive-manufacturing, vat-photopolymerization, ceramic-printing, high-resolution]
created: 2026-04-25
updated: 2026-04-25
---

# DLP vat photopolymerization

## What it measures / produces

DLP (digital light processing) is a vat-photopolymerization additive-manufacturing route in which a digital micromirror device (DMD) projects a *whole-layer* UV pattern into a vat of photocurable resin (or ceramic-loaded slurry), curing one entire cross-section at a time. The build platform indexes one layer thickness, the next pattern is projected, and so on. For HA scaffolds, the resin is a UV-curable monomer + photoinitiator + ceramic (HA / β-TCP / BCP) loaded as a high-volume-fraction slurry; the green part is post-processed by debinding (thermal removal of the polymer binder) and sintering to produce a dense ceramic. Output: a near-net-shape ceramic scaffold with high geometric fidelity (≥25–50 μm voxel resolution) inheriting the CAD geometry, including arbitrary internal pore-size gradients.

## When to use it

Use DLP when (a) you need fine pore-architecture control (sub-100 μm features approached, though print-feature limit is ~100 μm in routine BTE practice [[../sources/2020-garot-additive-manufacturing-of-material-scaff]]), (b) you want to print TPMS or implicit-surface gradient designs cleanly, (c) throughput matters (DLP cures whole layer at once, much faster than scanning SLA), or (d) the design has internal complexity (overhangs, lattices, internal channels) that extrusion cannot match. For the present hypothesis, DLP is one of the three primary candidate routes for a 100–500 μm HA gradient scaffold.

## Key parameters

- **Feature resolution**: limited to ~100 μm in routine BTE practice; below this, ceramic slurry scattering and resin meniscus dominate [[../sources/2020-garot-additive-manufacturing-of-material-scaff]].
- **Ceramic loading**: HA loading should be as high as possible to reduce cracking and warping during sintering; up to ~70 vol% bioglass demonstrated for DLP slurries [[../sources/2017-bose-additive-manufacturing-of-biomaterials]].
- **Photoinitiator**: TPO (diphenyl(2,4,6-trimethylbenzoyl)phosphine oxide) and LAP (lithium phenyl-2,4,6-trimethylbenzoylphosphinate) are the two standard photoinitiators in BTE-grade DLP resins [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]]. Yang et al. used TPO for β-TCP TPMS slurries [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]].
- **Sintering schedule (HA / β-TCP slurries)**: typical 1100–1250 °C × 2–4 h after debinding; Ishack robocasted HA/β-TCP at 1100 °C × 4 h [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]] (cited as an analogous sintering reference for DLP green parts).
- **Throughput vs SLA**: DLP cures a whole layer per exposure (typically a few seconds), versus SLA's point-by-point laser scanning — significant speedup for large lattice scaffolds [[../sources/2020-garot-additive-manufacturing-of-material-scaff]].
- **Wavelength**: most BTE DLP printers use 385 or 405 nm UV LEDs.

## Common variants

- **DLP** (DMD projector): whole-layer projection, fastest, the modern standard.
- **Stereolithography (SLA)**: laser-scanned point-by-point, higher resolution at small scale but slower; see [[3D-printing-stereolithography]].
- **LCD / mSLA**: LCD mask + UV backlight; cheaper, lower-resolution variant of DLP common in hobby printers.
- **Two-photon polymerization (2PP)**: nonlinear absorption gives sub-micron resolution at extreme cost — see [[two-photon-polymerization]] for the niche use.
- **Top-down vs bottom-up vat**: bottom-up (resin pulled from below the platform) is the modern DLP norm; top-down used for ceramic slurries that settle.
- **Gradient photocuring**: spatial modulation of light dose / wavelength to produce crosslinking-density gradients within a single layer — a route to multi-property gradient scaffolds [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]].

## Step-level notes

- Slurry preparation is the limiting factor for ceramic DLP: high HA loading + low viscosity + uniform suspension is hard to satisfy simultaneously [[../sources/2017-bose-additive-manufacturing-of-biomaterials]]. See [[slurry-preparation-for-DLP]].
- After printing, the green part contains polymer binder; debinding (thermal treatment 300–600 °C) is required before sintering, and is a major source of cracking, warping, and dimensional drift [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] [[../sources/2017-bose-additive-manufacturing-of-biomaterials]]. See [[debinding-thermal-treatment]].
- Residual photoinitiator can be cytotoxic if not fully removed by debinding [[../sources/2020-garot-additive-manufacturing-of-material-scaff]].
- Layer-direction anisotropy: pore geometry can differ between in-plane and through-plane directions [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] explicitly prints in two orientations to control for this.
- For gradient designs, slice-by-slice grayscale exposure can be used to spatially modulate cure depth, indirectly controlling local porosity ("gradient photocuring") [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]].

## Things to watch for

- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — residual TPO/LAP after incomplete debinding is the #1 cytotoxicity risk for DLP-printed HA scaffolds; require post-process leaching or extended debinding.
- [[../failure-modes/sintering-shrinkage-pore-deviation]] — green-to-sintered linear shrinkage of HA slurries is typically 15–25%; designed pore sizes must compensate or μCT-verify.
- [[../failure-modes/HA-phase-decomposition-during-sintering]] — high sintering temperatures can convert HA to β-TCP/α-TCP/CaO depending on Ca/P ratio, atmosphere, and impurities.
- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — DLP voxel size + slurry resolution + sintering shrinkage compound to deviate from CAD; verify by μCT.
- [[../failure-modes/brittle-ceramic-mechanical-failure]] — DLP-printed ceramic has internal microcracks if slurry loading or debinding is suboptimal.
- [[../failure-modes/pore-anisotropy-from-print-direction]] — layer-by-layer DLP can produce in-plane vs through-plane mechanical and pore anisotropy; control with multi-orientation printing.

## Sources

- [[../sources/2017-bose-additive-manufacturing-of-biomaterials]] — DLP/SLA slurry-loading and sintering trade-offs for HA / bioglass.
- [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] — clinical-translation review; sets the 100 μm feature-size floor and lists photoinitiator/sterilization concerns.
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — concrete DLP-of-β-TCP-slurry with TPO photoinitiator for TPMS scaffolds.
- [[../sources/2025-hossen-biomimetic-strategies-for-bone-regenerat]] — DLP within the biomimetic-AM toolkit.
- [[../sources/2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por]] — DLP for porous bioprinted scaffolds.
- [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]] — DLP photoinitiator chemistry and gradient-DLP variants.
- [[../sources/2020-wang-3d-printing-of-bone-tissue-engineering-s]] — DLP among AM techniques for BTE.
- [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]] — DLP / SLA in scaffold porosity context.
- [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]] — gradient photocuring as DLP variant for multi-gradient scaffolds.
- [[../sources/2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]] — DLP among AM routes for interface-tissue gradient scaffolds.
- [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]] — DLP for tendon-bone interface gradient scaffolds.
- [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]] — DLP/SLA in BTE scaffold comparison.
- [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]] — DLP/SLA among ceramic AM routes.
- [[../sources/2015-chia-recent-advances-in-3d-printing-of-biomat]] — DLP review for biomaterial printing.
