---
type: source
id: 2026-liu-design-and-fabrication-of-biomimetic-gra
source_type: paper
title: "Design and Fabrication of Biomimetic Gradient Bone Tissue Engineering Scaffolds: Evolution from Single-Gradient to Multi-Gradient"
authors:
  - "Liu, Haitao"
  - "Liu, Junjun"
  - "Sun, Chenhui"
  - "Wang, Yuhan"
  - "Sun, Yazhou"
  - "Shi, Xiaoquan"
year: 2026
doi: 10.3390/gels12020131
url: https://doi.org/10.3390/gels12020131
raw_path: raw/papers/2026-liu-design-and-fabrication-of-biomimetic-gra.xml
tags: [review, gradient-scaffold, multi-gradient, biomimetic, additive-manufacturing, design-strategy, bone-tissue-engineering]
---

## Summary

Liu et al. systematically review the state of biomimetic gradient bone-tissue-engineering scaffolds, framing the evolution from homogeneous → single-gradient → multi-gradient (synergistic) designs that integrate physical-structure, biochemical-composition, and mechanical-property gradients. They organise gradient scaffolds by gradient *type* (geometric structural, material compositional, crosslinking density) and *fabrication route* (3D bioprinting, electrospinning, physicochemical, hybrid), with deep coverage of additive-manufacturing strategies — multi-nozzle extrusion, real-time mixers, coaxial printing/spinning, and gradient photocuring. The review establishes the field-wide consensus that homogeneous scaffolds cannot recapitulate the cortical→cancellous heterogeneity of native bone, and that radial pore-size gradients are a primary design lever. Important context for the hypothesis: gradient designs are explicitly framed as superior, but rigorous head-to-head in vitro comparisons of gradient vs uniform-pore scaffolds matched on porosity/surface area/chemistry remain rare in the literature.

## Key claims

- **Bone is intrinsically gradient.** "Natural bone tissue is an anisotropic material characterized by an intricate gradient distribution in structure, mechanical properties, and biochemical composition; this multi-dimensional heterogeneity is crucial for maintaining its physiological functions and guiding regeneration."
- Self-healing limit of native bone: ~6 mm; larger defects need scaffolds.
- Gradient categories defined: (i) geometric/structural — pore size, porosity, fiber orientation, mechanical modulus; (ii) compositional — degree of mineralization, polymer/ceramic ratio; (iii) crosslinking-density.
- Multi-gradient (synergistic) scaffolds combining ≥2 gradient types are the current research frontier.
- Reviewed AM techniques for gradient construction:
  - **Multi-nozzle extrusion** — different inks per nozzle, spatial control
  - **Real-time mixer** — continuous composition variation along build path
  - **Coaxial printing/spinning** — radial gradient within a single filament
  - **Gradient photocuring** — varying light dose / wavelength to tune crosslinking gradients in DLP/SLA
- Review cites and aggregates studies showing pore-size gradients, density gradients, and material gradients each independently improve osteogenesis and vascularization.
- 3D printing (DLP, FDM, robocasting, binder jet) preferred over electrospinning for ceramic / large-pore gradient scaffolds.
- Calls out the gap between elegant design and reproducible, scalable fabrication; sintering shrinkage, ink rheology, and cross-process compatibility are recurring practical hurdles.

## Methods used

- [[../methods/3D-printing-stereolithography]]
- [[../methods/DLP-vat-photopolymerization]]
- [[../methods/extrusion-based-3D-printing]]
- [[../methods/robocasting-direct-ink-writing]]
- [[../methods/binder-jet-3D-printing]]
- [[../methods/fused-deposition-modeling]]
- [[../methods/inkjet-3D-printing]]
- [[../methods/two-photon-polymerization]]
- [[../methods/electrospinning]]
- [[../methods/gradient-pore-design]]
- [[../methods/multi-nozzle-extrusion]]
- [[../methods/real-time-mixing-3D-printing]]
- [[../methods/coaxial-printing-spinning]]
- [[../methods/gradient-photocuring]]
- [[../methods/ceramic-sintering]]

## Reagents

- [[../reagents/hydroxyapatite]]
- [[../reagents/beta-tricalcium-phosphate]]
- [[../reagents/biphasic-calcium-phosphate]]
- [[../reagents/bioglass-45S5]]
- [[../reagents/polycaprolactone]]
- [[../reagents/polylactic-acid]]
- [[../reagents/PLGA]]
- [[../reagents/collagen]]
- [[../reagents/gelatin]]
- [[../reagents/alginate]]
- [[../reagents/chitosan]]
- [[../reagents/silk-fibroin]]
- [[../reagents/hyaluronic-acid]]

## Organisms / cell lines

- (Review — no primary cell line; cites multiple including [[../organisms/MC3T3-E1]], [[../organisms/hBMSC]], [[../organisms/Saos-2]].)

## Failure modes flagged

- [[../failure-modes/sintering-shrinkage-pore-deviation]]
- [[../failure-modes/cad-vs-actual-pore-size-mismatch]]
- [[../failure-modes/brittle-ceramic-mechanical-failure]] — large-pore scaffolds susceptible to mechanical failure under load.
- [[../failure-modes/pore-anisotropy-from-print-direction]]

## Supports / contradicts

- **Frames** the present hypothesis (radial 100→500 μm HA gradient) as a single-gradient design and motivates the multi-gradient direction as future work.
- **Supports** [[2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]], [[2025-conoscenti-continuous-pore-size-gradient-enhances-z]], [[2022-yang-gaussian-curvature-driven-direction-of-c]], [[2026-zhao-longitudinal-and-radial-microgradients-i]] as anchor studies for the gradient-scaffold paradigm.
- **Overlaps heavily** with [[2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]] and [[2025-xie-recent-advances-in-gradient-biomimetic-s]], but is broader (whole-bone) rather than interface-focused.

## Notable quotes

- "Homogeneous or single-gradient scaffolds often struggle to precisely recapitulate the high degree of heterogeneity and anisotropy of natural bone from the macroscopic to the microscopic level, thereby limiting their capability in repairing complex bone defects." (Abstract)
- "Biomimetic gradient scaffolds — particularly those employing multi-gradient synergistic designs that integrate physical structure, biochemical composition, and mechanical properties — have emerged as a research frontier in this field due to their ability to accurately mimic the natural bone microenvironment and regulate cellular behavior." (Abstract)
- "Although bone tissue possesses self-healing capabilities, it can only regenerate and remodel small defects/injuries (<6 mm); it remains insufficient for repairing larger defects." (Introduction)
