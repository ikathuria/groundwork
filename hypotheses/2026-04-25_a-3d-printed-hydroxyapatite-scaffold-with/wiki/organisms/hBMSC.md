---
type: organism
slug: hBMSC
organism_type: primary-cell
source: primary isolation (commercial: Lonza, ATCC, PromoCell, RoosterBio); IRB-approved bone-marrow aspirate
external_id: not a single accession — donor-resolved; commercial lots have lot-specific RRID
characteristics:
  - primary human bone-marrow-derived mesenchymal stromal cell, plastic-adherent, multipotent (osteo / chondro / adipo)
  - osteogenically inducible with β-glycerophosphate + ascorbic acid + dexamethasone
  - donor-, age-, and passage-dependent osteogenic capacity (donor variability is large)
  - finite lifespan (~6–10 passages before senescence / phenotype drift)
  - identity criteria (ISCT 2006): plastic-adherent; CD73+/CD90+/CD105+/CD34−/CD45−/CD14−/CD11b−/CD79α−/CD19−/HLA-DR−; tri-lineage differentiation
known_failure_modes: [donor-variability-hMSC, proliferation-vs-differentiation-tradeoff, edge-effect-in-scaffold-cell-seeding, cell-seeding-efficiency-variation, in-vivo-vs-in-vitro-discordance, HA-autofluorescence-confounds-livedead]
sources: [2025-de-carvalho, 2025-qi, 2018-zhang, 2013-loh, 2024-wang, 2025-conoscenti, 2022-yang, 2026-liu, 2025-liu, 2025-xie, 2025-lee, 2012-amini, 2013-henkel, 2014-polo-corrales, 2014-thavornyutikarn, 2015-baino, 2015-chia, 2015-do, 2017-gao, 2016-murphy]
tags: [primary-cell, human, MSC, bone-marrow, osteogenic]
created: 2026-04-25
updated: 2026-04-25
---

# hBMSC — primary human bone-marrow-derived mesenchymal stromal cell

## What it is

hBMSCs are primary, plastic-adherent multipotent stromal cells isolated from human bone-marrow aspirate. Under the ISCT 2006 minimal criteria they are CD73+/CD90+/CD105+/CD34−/CD45− and capable of tri-lineage (osteo / chondro / adipo) differentiation in vitro. For bone-tissue-engineering scaffold work, hBMSCs are the **gold-standard human cell type**: they recapitulate the in-vivo osteogenic precursor biology much better than any immortalized line, and their performance on a scaffold is the in-vitro endpoint most predictive of in-vivo bone-defect outcome ([[../sources/2013-henkel-bone-regeneration-based-on-tissue-engine]], [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]]). They are also the cell type most subject to donor variability and passage-induced drift.

## Growth conditions

- **Medium (proliferation)**: low-glucose DMEM or α-MEM + 10% FBS (or "MSC-qualified" FBS) + 1% P/S + 1–2 mM L-glutamine. Some labs add 1 ng/mL bFGF to suppress senescence.
- **Medium (osteogenic induction)**: above + 10 nM dexamethasone + 50 µg/mL L-ascorbic-acid-2-phosphate + 10 mM β-glycerophosphate ([[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]], [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]], [[../sources/protocol-2025-amin-murine-osteoblast-and-osteoclast-co-cult]]).
- **Atmosphere**: 37 °C, 5% CO₂, humidified. Some protocols use 5% O₂ (physiological hypoxia) for expansion to slow senescence.
- **Subculturing**: 0.05% trypsin-EDTA at ~70–80% confluence; do not over-confluence — contact inhibition triggers premature osteogenic commitment, biasing later differentiation readouts.
- **Passage cap**: avoid > P6–P8 for osteogenic experiments. Senescence-associated phenotype drift starts ~P5 in most donors.
- **Authentication**: ISCT-criteria flow-cytometry panel + tri-lineage differentiation should be re-verified for each donor lot.
- **Sources**: Lonza (PT-2501), ATCC (PCS-500-012), PromoCell (C-12974), RoosterBio (RoosterVial-hBM, lot-specific). Each commercial lot is a single donor — donor identity should be tracked.

## Donor variability

The single largest noise term in hBMSC scaffold experiments. Across donors, day-14 ALP, day-21 mineralization, and even baseline doubling time can vary 3–10×. The Conoscenti 2025 group ([[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]]) explicitly flags donor variability as a confounder of pore-architecture comparisons. Mitigations:

1. Use ≥ 3 donors per experimental group; treat donor as a random effect in mixed-model statistics (NOT pooled across donors).
2. Match donor age, sex, and passage between gradient and uniform-pore arms.
3. Pre-screen donors for osteogenic competence on a flat tissue-culture plastic control before committing scaffold material.

See [[../failure-modes/donor-variability-hMSC]].

## Common variants

- **hADSC** ([[hADSC]]) — adipose-derived MSCs; easier to isolate (lipoaspirate vs marrow aspirate) but lower osteogenic potency baseline; not interchangeable.
- **mouse-BMSC-primary** ([[mouse-BMSC-primary]]), **rat-BMSC-primary** ([[rat-BMSC-primary]]) — species analogues for animal-model arms.

## Why pick hBMSC for this hypothesis (vs MC3T3-E1 / Saos-2 / hFOB)

- **+** Human, primary, near-physiological, ISCT-defined identity. Scaffold-proliferation results carry directly to clinical translation arguments.
- **+** Captures real clinical donor variability — strengthens external validity if the gradient-vs-uniform effect survives donor random effect.
- **−** Donor variability inflates the n needed; ≥ 3 donors × ≥ 3 scaffolds per donor per group per time point.
- **−** Senescence and passage drift; expensive per cell relative to MC3T3-E1.
- **−** Slower proliferation than MC3T3-E1 → smaller absolute day-14 effect sizes.
- For this hypothesis: **the human-relevance arm**. Run alongside MC3T3-E1 Subclone 4 (the high-throughput screen) and confirm the gradient-vs-uniform effect on hBMSC before claiming a generalizable osteoblast result.

## Common pitfalls

- [[../failure-modes/donor-variability-hMSC]] — central pitfall. ≥ 3 donors, donor as random effect.
- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — hBMSCs commit to osteogenic lineage during the proliferation window once dex is added; day-14 proliferation endpoints must specify whether osteogenic medium was used.
- [[../failure-modes/edge-effect-in-scaffold-cell-seeding]] — hBMSCs settle slowly under static seeding and bias to the outer scaffold surface.
- [[../failure-modes/cell-seeding-efficiency-variation]] — seeding efficiency varies donor-to-donor and pore-size–to–pore-size; quantify retained-cell number after seeding (DNA quantification of unattached cells).
- [[../failure-modes/in-vivo-vs-in-vitro-discordance]] — hBMSC in-vitro results predict in-vivo better than other lines but are still imperfect.
- [[../failure-modes/HA-autofluorescence-confounds-livedead]] — pair calcein-AM with PicoGreen DNA quantification.

## Sources

- [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] — used hBMSCs (with α-MEM + 10% FBS) on 3D-printed CaP scaffolds; PicoGreen + RT-PCR readouts.
- [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]] — hBMSC arm on bioceramic scaffolds with osteogenic induction.
- [[../sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]] — hBMSC and primary rat calvarial OB on microporous HA; in-vivo rat-femoral-defect model.
- [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]] — porosity-effect review citing hBMSC studies.
- [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] — polydopamine-functionalized CaP with hBMSC (mouse-BMSC primary as parallel arm).
- [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] — **gradient-pore vs uniform on hBMSC** — most directly relevant source for this hypothesis; flags donor variability.
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — Gaussian-curvature/TPMS scaffolds with hBMSC osteogenic induction.
- [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]] — biomimetic-gradient review citing hBMSC.
- [[../sources/2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]] — gradient-scaffold review citing hBMSC.
- [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]] — gradient-biomimetic-scaffold review citing hBMSC.
- [[../sources/2025-lee-pcl-scaffold-with-well-defined-hierarchi]] — hierarchical PCL scaffold with hBMSC (DMEM + 10% FBS).
- [[../sources/2012-amini-bone-tissue-engineering-recent-advances]] — bone-TE review.
- [[../sources/2013-henkel-bone-regeneration-based-on-tissue-engine]] — bone-regeneration review citing hBMSC as gold standard for translation studies.
- [[../sources/2014-polo-corrales-scaffold-design-for-bone-regeneration]] — scaffold-design review.
- [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]] — comprehensive scaffolding review.
- [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]] — bioceramic-scaffold review.
- [[../sources/2015-chia-recent-advances-in-3d-printing-of-biomat]] — 3D-printing-biomaterials review.
- [[../sources/2015-do-3d-printing-of-scaffolds-for-tissue-rege]] — 3D-printing-scaffold review.
- [[../sources/2017-gao-bone-biomaterials-and-interactions-with]] — bone-biomaterial-interactions review.
- [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]] — scaffolds-and-cells review (Bruzauskaite et al. 2016).
