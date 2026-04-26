---
type: source
id: 2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por
source_type: paper
title: "Recent Advances in 3D Bioprinting of Porous Scaffolds for Tissue Engineering: A Narrative and Critical Review"
authors: ["Picado-Tejero, David", "Mendoza-Cerezo, Laura", "Rodríguez-Rego, Jesús M.", "Carrasco-Amador, Juan P.", "Marcos-Romero, Alfonso C."]
year: 2025
journal: "Journal of Functional Biomaterials"
doi: 10.3390/jfb16090328
pmcid: PMC12470888
pmid: 41003399
url: https://doi.org/10.3390/jfb16090328
raw_path: raw/papers/2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por.xml
tags: [3D-bioprinting, porosity, scaffold-design, FEA, characterization-standards, review]
created: 2026-04-25
updated: 2026-04-25
---

# Picado-Tejero et al. 2025 — Recent Advances in 3D Bioprinting of Porous Scaffolds for Tissue Engineering

## Summary

Critical narrative review (112 core articles, 2014–2025) systematically analysing how porosity-related parameters — pore size, geometry, distribution, interconnectivity — affect cell behavior and mechanical performance in 3D-bioprinted scaffolds. Identifies the **lack of standardised methodologies for characterising and comparing porosity parameters** as a major obstacle and explicitly motivates unified characterisation systems. Includes a parameterised study table (HA, β-TCP, Ti, polymers) cataloguing published pore-size + porosity combinations across applications.

## Key claims

- Pores of 100–500 μm "promote essential biological processes such as cell migration, adhesion, tissue ingrowth, and vascularization" — directly the hypothesis's window.
- Pores <100 μm have a more limited effect on tissue in-growth but play a crucial role in transporting ions and small adhesion / signalling molecules — a role for the cortical-mimicking outer zone of the gradient beyond just attachment.
- Tabulates published HA scaffolds, e.g., a hydroxyapatite scaffold for **dental neovascularization and osteogenesis at 750–900 μm pore size and 85% porosity**; 200–300 μm calcium-polyphosphate; 300–500 μm titanium for trabecular regeneration at 54–58% porosity.
- TPMS unit cells (gyroid, primitive, diamond) and Voronoi tessellation enable precisely defined porosity distribution, interconnectivity, and pore geometry — the formal mathematical basis for continuous gradient designs.
- Pore size and geometry affect cell adhesion via curvature-dependent focal adhesion formation — an explicit mechanism connecting pore geometry to osteoblast behavior.
- Osteoblasts measured at 10–15 μm enter and reside in pores 30–100 μm at 50% porosity HA / β-TCP scaffolds.
- "Significant challenges persist, including the lack of standardized methodologies for characterizing and comparing porosity parameters across different studies" — direct caveat for the hypothesis's experimental design (pore-size verification protocol must be rigorously specified).
- Some bioprinting methods leave behind cytotoxic compounds — explicit mention of post-print residue.

## Methods used

- [[../methods/3D-printing-stereolithography]]
- [[../methods/DLP-vat-photopolymerization]]
- [[../methods/extrusion-based-3D-printing]]
- [[../methods/inkjet-3D-printing]]
- [[../methods/binder-jet-3D-printing]]
- [[../methods/TPMS-scaffold-design]]
- [[../methods/gradient-pore-design]]
- [[../methods/finite-element-analysis]]
- [[../methods/computational-fluid-dynamics-permeability]]
- [[../methods/micro-CT-imaging]]
- [[../methods/mercury-intrusion-porosimetry]]
- [[../methods/BET-surface-area-analysis]]

## Reagents

- [[../reagents/hydroxyapatite]]
- [[../reagents/beta-tricalcium-phosphate]]
- [[../reagents/biphasic-calcium-phosphate]]
- [[../reagents/polylactic-acid]]
- [[../reagents/polycaprolactone]]
- [[../reagents/PLGA]]
- [[../reagents/collagen]]
- [[../reagents/gelatin]]
- [[../reagents/alginate]]

## Organisms

- (Review — secondary citation only.)

## Failure modes flagged

- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — explicit: "some methods may leave behind remnants of cytotoxic compounds."
- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — review highlights inconsistent characterisation methods across studies.
- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — pore size optimum differs for adhesion vs proliferation vs ECM production.

## Supports / contradicts

- Strongly supports the hypothesis: explicitly identifies the 100–500 μm range as the active biological window for AM scaffolds.
- The HA-specific tabulated data (e.g., 750–900 μm for dental neovascularization at 85%) lies above the proposed gradient and provides a comparator point for the hypothesis's choice of upper bound (500 μm).
- Reinforces the hypothesis's emphasis on matching porosity, surface area, and HA chemistry across uniform/gradient groups: the review identifies non-standardised characterisation as the dominant pitfall in the field.

## Notable quotes

- "Pores ranging from 100 to 500 μm, typically produced through conventional fabrication techniques and characterized by random arrangement, are generally interconnected and promote essential biological processes such as cell migration, adhesion, tissue ingrowth, and vascularization."
- "Conversely, pores smaller than 100 μm have a more limited effect on these processes but play a crucial role in facilitating the transport of ions and macromolecules, such as adhesion and signaling molecules."
- "Significant challenges persist, including the lack of standardized methodologies for characterizing and comparing porosity parameters across different studies."
- "Advanced design strategies, such as Triply Periodic Minimal Surfaces (TPMS) and Voronoi tessellation, now enable the fabrication of scaffolds with precisely defined porosity, distribution, interconnectivity, and pore geometry."
- "In a study on cellular behavior at different interpore sizes, researchers analyzed osteoblast activity in hydroxyapatite and β-tricalcium phosphate ceramic scaffolds with 50% porosity, using interpore sizes ranging from 30 to 100 μm."
