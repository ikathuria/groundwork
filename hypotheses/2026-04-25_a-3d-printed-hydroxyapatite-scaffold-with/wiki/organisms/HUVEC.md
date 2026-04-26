---
type: organism
slug: HUVEC
organism_type: primary-cell
source: primary isolation (commercial: Lonza, ATCC, PromoCell); umbilical-cord vein after Caesarean delivery
external_id: not a single accession — donor-resolved; commercial: Lonza CC-2517 (pooled or single-donor); ATCC PCS-100-010
characteristics:
  - primary human umbilical-vein endothelial cell, isolated by collagenase digestion of the cord vein lumen
  - canonical human endothelial-cell model for vascularization, angiogenesis, and tube-formation assays
  - finite lifespan (~6–10 passages); donor- and lot-dependent
  - identity criteria: CD31+ / VE-cadherin+ / vWF+
  - used in bone-TE for co-culture with osteoblasts to model scaffold pre-vascularization
known_failure_modes: [donor-variability-hMSC, edge-effect-in-scaffold-cell-seeding, in-vivo-vs-in-vitro-discordance]
sources: [2024-wang, 2025-qi, 2022-yang, 2015-baino, 2016-murphy]
tags: [primary-cell, human, endothelial, vascularization, co-culture]
created: 2026-04-25
updated: 2026-04-25
---

# HUVEC — primary human umbilical-vein endothelial cell

## What it is

HUVECs are primary endothelial cells isolated from human umbilical-vein endothelium by collagenase digestion. They are the default human endothelial cell type for vascularization assays — tube-formation on Matrigel, scratch wound migration, sprouting from beads, and **co-culture with osteoblasts/MSCs on scaffolds** to model pre-vascularization of bone-tissue-engineering constructs. In this hypothesis they appear as the vascularization arm in scaffold studies that argue gradient pore architecture enables nutrient diffusion and capillary in-growth ([[../sources/2024-wang-polydopamine-functionalized-calcium-defi]], [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]], [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]]).

## Growth conditions

- **Medium**: EGM-2 (Lonza CC-3162) or VascuLife endothelial growth medium, with the supplied SingleQuots / supplement bullet (hEGF, hFGF-β, R³-IGF-1, ascorbic acid, hydrocortisone, heparin, VEGF, FBS 2%, gentamicin/amphotericin). Plain DMEM + 10% FBS is *not* sufficient.
- **Flask coating**: gelatin-coated (0.1% gelatin) or fibronectin-coated tissue-culture plastic for primary attachment.
- **Atmosphere**: 37 °C, 5% CO₂, humidified.
- **Subculturing**: 0.05% trypsin-EDTA at ~80% confluence; pre-seed gelatin-coated flask.
- **Passage cap**: ≤ P6 for vascularization assays (later passages lose tube-formation capacity).

## Why pick HUVEC for this hypothesis

- The hypothesis's mechanism explicitly invokes "nutrient/waste diffusion and vascularization" as a benefit of the larger interior pores. HUVEC + osteoblast co-culture on the gradient vs uniform scaffold can directly test whether the gradient architecture supports more capillary-like network formation.
- HUVECs are not the primary readout (osteoblast proliferation is) but a strong secondary endpoint: tube-formation density, CD31+ network length, sprouting depth into the scaffold can all be quantified by confocal.

## Common pitfalls

- [[../failure-modes/donor-variability-hMSC]] — same logic applies (donor variability). Pooled-donor HUVEC lots reduce noise but mask donor-specific effects.
- [[../failure-modes/edge-effect-in-scaffold-cell-seeding]] — HUVECs prefer 2D surfaces; co-seeding with MSCs/osteoblasts on a 3D scaffold biases endothelial cells to the outer surface unless dynamic perfusion is used.
- [[../failure-modes/in-vivo-vs-in-vitro-discordance]] — in-vitro tube formation does not always predict in-vivo vascularization.

## Sources

- [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] — polydopamine-functionalized CaP scaffold; HUVEC vascularization arm.
- [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]] — 3D-printed bioceramic scaffold with HUVEC + MSC co-culture vascularization readouts.
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — Gaussian-curvature TPMS scaffold; HUVEC tube-formation on the curved surfaces.
- [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]] — bioceramic-scaffold review citing HUVEC co-culture studies.
- [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]] — scaffolds-and-cells review (Bruzauskaite et al. 2016) listing HUVEC for co-culture.
