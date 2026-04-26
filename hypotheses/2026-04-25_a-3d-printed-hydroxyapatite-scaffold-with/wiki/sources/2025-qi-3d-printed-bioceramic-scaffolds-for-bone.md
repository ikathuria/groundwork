---
type: source
id: 2025-qi-3d-printed-bioceramic-scaffolds-for-bone
source_type: paper
title: "3D-printed bioceramic scaffolds for bone defect repair: bone aging and immune regulation"
authors: ["Qi, Haoran", "Zhang, Bo", "Lian, Feng"]
year: 2025
doi: 10.3389/fbioe.2025.1557203
url: https://doi.org/10.3389/fbioe.2025.1557203
raw_path: raw/papers/2025-qi-3d-printed-bioceramic-scaffolds-for-bone.xml
tags: [3D-printing, bioceramic, immune-microenvironment, macrophage-polarization, aging, osteoporosis, review, strontium, pore-size]
created: 2026-04-25
updated: 2026-04-25
---

# Qi, Zhang & Lian 2025 — 3D-printed bioceramic scaffolds for aging bone repair

## Summary

A focused review (Front. Bioeng. Biotechnol., 2025) of 3D-printed bioceramic scaffolds (HA, β-TCP, bioactive glass, strontium / zinc / silicon-doped CaPs) viewed through the dual lens of bone aging and immune regulation. Tabulates a large set of recent scaffold studies, including direct comparisons of pore-size effects on macrophage polarisation: e.g., Li et al. 2022 PCL/PEG/HA with **600-μm pore size** "significantly reduces foreign-body response and induced more M2 macrophage infiltration, vascular ingrowth, and new bone formation compared to smaller pore sizes." Provides explicit prior-art benchmarks at the 600 μm and adjacent pore sizes that frame our 100–500 μm gradient design.

## Key claims

- **Pore-size benchmark (canonical to our hypothesis)**: Li et al. 2022 PCL/PEG/HA scaffold with **600-μm pore size** reduced foreign-body response and increased M2-macrophage infiltration, vascular ingrowth, and new-bone formation vs. smaller pore sizes. The paper concludes "the 600 μm pore-sized scaffold most effectively promoted macrophage M2 polarization and improved the inflammatory response by upregulating interferon-β and HIF-1α production."
- **Reviewed scaffold-immune interactions**: HA/TCP, Sr-doped TCP, Mg/TCP, CaSiO3/β-TCP/IFN-γ, β-TCP/S1P, Cu/BG, Sr2ZnSi2O7, Sr-Mg3(PO4)2 — broad library of pore-size, ion-release and immune-modulation strategies.
- **Aging biology**: chronic low-grade inflammation drives M1 polarisation and oxidative stress; senescent MSCs have diminished proliferative capacity; HA/TCP scaffolds can be loaded with anti-osteoporosis drugs (e.g., zoledronic acid, strontium ranelate).
- **Strontium**: Sr ions promote osteoblast proliferation and inhibit osteoclast proliferation, useful for osteoporotic bone defects.
- **MC3T3 / HUVEC** are flagged as recurring in-vitro readouts in the reviewed literature.
- **Critical-sized bone defects** in aging populations are highlighted as the unmet clinical need that drives the field.

## Methods used

- [[../methods/3D-printing-stereolithography]]
- [[../methods/extrusion-based-3D-printing]]
- [[../methods/robocasting-direct-ink-writing]]
- [[../methods/binder-jet-3D-printing]]
- [[../methods/SEM-imaging]]
- [[../methods/micro-CT-imaging]]
- [[../methods/alamarBlue-proliferation-assay]]
- [[../methods/qPCR]]
- [[../methods/in-vivo-calvarial-defect-model]]

## Reagents

- [[../reagents/hydroxyapatite]]
- [[../reagents/beta-tricalcium-phosphate]]
- [[../reagents/biphasic-calcium-phosphate]]
- [[../reagents/bioglass-45S5]]
- [[../reagents/strontium]]
- [[../reagents/polycaprolactone]]
- [[../reagents/polydopamine]]

## Organisms / cell lines

- [[../organisms/MC3T3-E1]]
- [[../organisms/HUVEC]]
- [[../organisms/RAW264.7-osteoclast-precursor]]
- [[../organisms/hBMSC]]

## Failure modes flagged

- [[../failure-modes/short-term-proliferation-vs-long-term-bone-formation]] — review emphasises that proliferation alone misses immune coupling.
- [[../failure-modes/monoculture-misses-osteoclast-coupling]] — explicitly framed: scaffolds must regulate macrophage / osteoclast precursors as well as osteoblasts.
- [[../failure-modes/in-vivo-vs-in-vitro-discordance]] — pore-size effects on M2 polarisation may not transfer between species or models.
- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — large pores favour proliferation/macrophage M2 but may limit early ALP/RUNX2 induction.

## Supports / contradicts

- **Partially contradicts** the canonical "300 μm optimal" pore-size claim — the 600 μm benchmark cited here suggests larger pores may be superior for immune-mediated bone formation, which is consistent with the gradient hypothesis (small pores at the cortical face for early osteoblast attachment, large pores in the cancellous core for vascularisation and M2 macrophage infiltration).
- Supports [[2024-wang-polydopamine-functionalized-calcium-defi]] (gradient + polydopamine + bioceramic).
- Supports [[2018-zhang-effect-of-microporosity-on-scaffolds-for]] (microporosity → in-vivo response).
- Supports [[2017-eliaz-calcium-phosphate-bioceramics-a-review-o]] (CaP family).

## Notable quotes

- "The scaffold with 600 μm pore size significantly reduces the foreign body response and induced more M2 macrophage infiltration, vascular ingrowth, and new bone formation compared to smaller pore sizes." (Table of pore-size effects, citing Li et al. 2022)
- "The 600 μm pore-sized scaffold most effectively promoted macrophage M2 polarization and improved the inflammatory response by upregulating interferon-β and HIF-1α production." (Pore-size / immune section)
- "Aging disrupts bone-immune crosstalk, exacerbating repair challenges and impairing transition to the M2 phenotype. Chronic low-grade inflammation perpetuates M1 polarization and oxidative stress." (Aging biology section)
