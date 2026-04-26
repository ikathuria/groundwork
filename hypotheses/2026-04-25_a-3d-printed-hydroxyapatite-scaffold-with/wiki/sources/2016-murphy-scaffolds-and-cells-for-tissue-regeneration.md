---
type: source
id: 2016-murphy-scaffolds-and-cells-for-tissue-regeneration
source_type: paper
title: "Scaffolds and cells for tissue regeneration: different scaffold pore sizes — different cell effects"
authors: ["Bruzauskaite, Ieva", "Bironaite, Daiva", "Bagdonas, Edvardas", "Bernotiene, Eiva"]
year: 2016
doi: 10.1007/s10616-015-9895-4
url: https://doi.org/10.1007/s10616-015-9895-4
raw_path: raw/papers/2016-murphy-scaffolds-and-cells-for-tissue-regeneration.txt
tags: [scaffold, pore-size, review, MSC, osteoblast, bone, vascular, cartilage, skin]
note: "Source ID slug uses 'murphy' but the actual authors are Bruzauskaite et al.; the slug was assigned during Pass 1 ingest and is preserved for traceability."
---

# Bruzauskaite, Bironaite, Bagdonas & Bernotiene (2016) — Scaffolds and cells for tissue regeneration: different scaffold pore sizes — different cell effects

## Summary

Cytotechnology review (DOI 10.1007/s10616-015-9895-4) entirely focused on the relationship between scaffold pore size and cell behaviour across tissue types (bone, vascular, cartilage, skin, neural). For bone, the review tracks the canonical pore-size range and cites **Karageorgiou & Kaplan 2005** for the **100 μm to >300 μm minimum-pore-size range**, and reports that **PLGA scaffolds with 300–500 μm pores produced the best mineralization** (Ishaug et al.). Highly aligned with the hypothesis's 100 μm (cortical) → 500 μm (cancellous) gradient choice.

> Note: the source-ID slug includes "murphy" from Pass 1 file naming but the actual paper is Bruzauskaite et al. (2016) — preserve the slug, correct the metadata.

## Key claims

- "The minimum requirement for pore size in 3D bone regeneration is considered to **range from 100 μm to more than 300 μm (Karageorgiou and Kaplan 2005)**." This is the canonical review-of-reviews citation for the lower bound of the hypothesis's pore-size gradient.
- "**Tissue mineralization was the best on the scaffolds with 300–500 μm pores** (Ishaug et al.)" — direct support for the 300–500 μm portion of the gradient.
- Pore size around **100 μm is important for cell adhesion** (citing supplementary studies); larger pores (>100 μm) are needed for vascularisation and neo-tissue formation.
- Pore-size buckets: **nano (<100 nm), micro (100 nm–100 μm), macro (100 μm–mm)**. Different cell processes are sensitive to different scales.
- Macropores → cell seeding, distribution, migration, neovascularization. Nanopores → collagen fiber formation and ECM organisation.
- Cell migration linearly depends on pore size up to a threshold; cell-secreted MMPs assist migration.
- 3D scaffolds with pore sizes around **100 μm or more** have higher amount of functional units necessary for tissue regeneration.
- **Modification of scaffold polymer with hydroxyapatite increases osteogenesis**, but larger pores can increase osteoblast migration into the scaffold.
- Membrane / transwell-style data: **0.8 μm pores optimal for endothelial / smooth-muscle co-culture**; >3 μm allows feeder-cell migration; 1 μm optimal for the growth of cells without migration. (Out-of-scope for HA scaffold but illustrates the principle that small differences in pore size produce qualitatively different cell behaviours.)
- Silk fibroin scaffolds with 50–300 μm pores produced via freeze-drying — a comparator fabrication route.
- Nanofibrous (50–500 nm) PLLA scaffolds enhance protein adsorption.

## Methods used

- [[../methods/SEM-imaging]]
- [[../methods/live-dead-staining]]
- [[../methods/DAPI-staining]]
- [[../methods/alamarBlue-proliferation-assay]]
- [[../methods/MTT-assay]]
- [[../methods/ALP-activity-assay]]
- [[../methods/alizarin-red-staining]]
- [[../methods/mechanical-compression-testing]]
- [[../methods/micro-CT-imaging]]

## Reagents

- [[../reagents/hydroxyapatite]]
- [[../reagents/beta-tricalcium-phosphate]]
- [[../reagents/polylactic-acid]]
- [[../reagents/PLGA]]
- [[../reagents/polycaprolactone]]
- [[../reagents/silk-fibroin]]
- [[../reagents/collagen]]
- [[../reagents/chitosan]]
- [[../reagents/alginate]]

## Organisms / cell lines

- [[../organisms/MC3T3-E1]]
- [[../organisms/hBMSC]]
- [[../organisms/primary-human-osteoblast]]
- [[../organisms/HUVEC]]

Also cites work with MG63 osteoblasts (a Saos-2-adjacent osteosarcoma cell line); proposed slug `MG63` (not currently in vocabulary) — see new-slugs section below.

## Failure modes flagged

- [[../failure-modes/nutrient-diffusion-limitation-in-scaffold-core]] — implicit in lower-bound discussion.
- [[../failure-modes/cell-seeding-uniformity-loss-large-pores]] — large pores increase migration but reduce retention.
- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — explicit: different pore sizes favour different processes.
- [[../failure-modes/edge-effect-in-scaffold-cell-seeding]]

## Supports / contradicts

- **Strongly supports** [[../hypothesis|the gradient-pore hypothesis]]:
  - Lower bound (100 μm cortical-mimicking) anchored to Karageorgiou & Kaplan 2005's "minimum 100 μm" synthesis.
  - Upper bound (500 μm cancellous-mimicking) anchored to Ishaug et al.'s "best mineralization at 300–500 μm" finding.
- **Consistent with** [[2012-amini-bone-tissue-engineering-recent-advances]], [[2012-bose-recent-advances-in-bone-tissue-engineeri]], [[2014-polo-corrales-scaffold-design-for-bone-regeneration]].
- **Slightly broader optimum** (300–500 μm) than Bose 2012 (200–350 μm) — minor inter-source disagreement on the precise center of the optimum.

## Notable quotes

> "the minimum requirement for pore size in 3D bone regeneration is considered to range from 100 μm to more than 300 μm (Karageorgiou and Kaplan 2005)."

> "tissue mineralization was the best on the scaffolds with 300–500 μm pores (Ishaug et al.)"

> "the 3D scaffolds with large pore size (around 100 μm or more) have higher amount of functional units necessary for the regeneration of various tissues."

> "modification of polymer with hydroxyapatite increased osteogenesis; however, the larger pores increased rate of osteoblasts migration into the scaffold."
