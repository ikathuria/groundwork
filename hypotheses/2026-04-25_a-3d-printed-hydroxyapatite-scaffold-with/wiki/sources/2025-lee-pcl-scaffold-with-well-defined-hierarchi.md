---
type: source
id: 2025-lee-pcl-scaffold-with-well-defined-hierarchi
source_type: paper
title: "PCL scaffold with well-defined hierarchical pores effectively controls cell migration and alignment of human mesenchymal stem cells"
authors:
  - "Lee, Se-Hwan"
  - "Lee, Jaeyeon"
  - "Kang, Nae-Un"
  - "Cho, Yong Sang"
  - "Heo, Su Chin"
  - "Park, Yongdoo"
  - "Cho, Young-Sam"
year: 2025
doi: 10.1038/s41598-025-96027-1
url: https://doi.org/10.1038/s41598-025-96027-1
raw_path: raw/papers/2025-lee-pcl-scaffold-with-well-defined-hierarchi.xml
tags: [hierarchical-pores, PCL, PED-3D-printing, hMSC, cell-alignment, cell-migration, grid-in-grid, multi-scale]
---

## Summary

Lee et al. fabricated solvent-free 3D-printed PCL scaffolds with a "grid-in-grid" architecture combining global pores and multi-scale local pores using precision extruding deposition (PED) through a 50 μm-inner-diameter nozzle. Four design groups (A–D) varied local strand size and pore hierarchy. Using human mesenchymal stem cells (hMSCs) in vitro, they demonstrated that controlled local pore size induces contact guidance and pore bridging, while surface roughness on global strands aligns cells along strand direction. Group C (with continuous wrinkled local strands) gave the strongest cellular alignment. The paper establishes that hierarchical (multi-scale) pore architectures — a generalisation of pore-size gradient — control cell migration and alignment beyond what uniform-pore scaffolds achieve. Direct relevance to the hypothesis: local pore size at the 100s-of-μm scale modulates osteoblast/hMSC behavior, and dual-scale pore architectures may underperform a continuous gradient for stem-cell migration into the scaffold core.

## Key claims

- PED 3D printing through 50 μm nozzle produced PCL scaffolds with "global" pores (≈400–500 μm strand spacing) and "local" pores within strands (multi-scale hierarchy).
- Recommended pore size range for bone regeneration cited from literature: **200 μm to 1000 μm**, with smaller pores promoting faster tissue growth and larger pores supporting nutrient transport.
- Critical bone defect threshold: 2 cm or >half the bone circumference; ~4 million bone-graft surgeries per year worldwide.
- Cellular alignment ranking across the four geometric groups: C > A > B > D, demonstrating multi-fold sensitivity of cell behavior to micro-architectural details.
- Group A (large clean pores): cells avoided large pores, migrated to local strands.
- Group B (local ladder strands + dual pores): cells aligned along ladder strands, elongated morphology; *synergy* of micro-architecture + dual-pore exposure improves migration.
- Group C (continuous wrinkles on local strands): strongest alignment via contact guidance.
- Group D (no wrinkles, no pore exposure): least aligned — uniform smooth surface poor for guiding cells.
- FE-SEM and live/dead at day 7 confirmed adherent cells with elongated morphology in well-designed pore architectures.
- Authors explicitly note: "[the scaffold] could be applied for combined bone to connective tissue regeneration, where gradient pore structures and cell alignment are essential."

## Methods used

- [[../methods/extrusion-based-3D-printing]]
- [[../methods/precision-extruding-deposition]]
- [[../methods/SEM-imaging]]
- [[../methods/live-dead-staining]]
- [[../methods/confocal-microscopy]]
- [[../methods/fluorescence-microscopy]]
- [[../methods/contact-angle-wettability]]
- [[../methods/cell-migration-tracking]]
- [[../methods/cell-orientation-analysis]]
- [[../methods/gradient-pore-design]]

## Reagents

- [[../reagents/polycaprolactone]]
- [[../reagents/DMEM]]
- [[../reagents/FBS]]
- [[../reagents/calcein-AM]]
- [[../reagents/ethidium-homodimer]]
- [[../reagents/PBS]]

## Organisms / cell lines

- [[../organisms/hBMSC]]

## Failure modes flagged

- [[../failure-modes/cell-seeding-uniformity-loss-large-pores]] — Group A: "most cells avoided the large pores and migrated toward the local strands" — large unstructured pores fail to retain cells.
- [[../failure-modes/cad-vs-actual-pore-size-mismatch]] — emphasises need for *well-defined* pore architecture, implying common practice fails this.
- [[../failure-modes/proliferation-vs-differentiation-tradeoff]]

## Supports / contradicts

- **Supports** [[2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]] — both stress that micro-architecture details (gradient or hierarchical) outperform uniform pores.
- **Supports** [[2026-liu-design-and-fabrication-of-biomimetic-gra]] taxonomy of physical-structure gradients.
- **Caveat for the present hypothesis:** demonstrates that *hierarchical* (dual-scale) pore designs are also competitive with continuous gradients; a uniform-pore control matched only on average pore size could still underperform a gradient for reasons unrelated to gradient per se (e.g., cell guidance from local micro-features).

## Notable quotes

- "Pore sizes are typically between 200 μm to 1000 μm for bone tissue regeneration, with smaller pores promoting faster tissue growth and larger pores supporting nutrient transport." (Introduction)
- "Controlled local pore size induced contact guidance and pore bridging, and the surface roughness of global strands effectively led to cell alignment." (Abstract)
- "[The scaffold] could be applied for combined bone to connective tissue regeneration, where gradient pore structures and cell alignment are essential." (Abstract)
- "In Group A, most cells avoided the large pores and migrated toward the local strands." (Results)
