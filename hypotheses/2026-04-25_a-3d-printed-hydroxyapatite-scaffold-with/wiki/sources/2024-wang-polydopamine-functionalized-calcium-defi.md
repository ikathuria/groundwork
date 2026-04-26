---
type: source
id: 2024-wang-polydopamine-functionalized-calcium-defi
source_type: paper
title: "Polydopamine-functionalized calcium-deficient hydroxyapatite 3D-printed scaffold with sustained doxorubicin release for synergistic chemo-photothermal therapy of osteosarcoma and accelerated bone regeneration"
authors: ["Wang, Lu", "Dai, Zihan", "Bi, Jianqiang", "Chen, Yunzhen", "Wang, Ziyu", "Sun, Zhenqian", "Ji, Zhongjie", "Wang, Hongliang", "Zhang, Yan", "Wang, Limei", "Mao, Junjie", "Yang, Junxing"]
year: 2024
doi: 10.1016/j.mtbio.2024.101253
url: https://doi.org/10.1016/j.mtbio.2024.101253
raw_path: raw/papers/2024-wang-polydopamine-functionalized-calcium-defi.xml
tags: [CDHA, polydopamine, doxorubicin, osteosarcoma, gradient-pore, extrusion-3D-printing, photothermal, BMSC, HUVEC, BALB/c]
created: 2026-04-25
updated: 2026-04-25
---

# Wang et al. 2024 — Polydopamine-functionalized CDHA gradient-pore scaffold (DOX/PDA@CDHA)

## Summary

3D-printed calcium-deficient hydroxyapatite (CDHA) scaffolds **with an explicit gradient pore structure** were extrusion-printed from an α-TCP / sodium-alginate / F-127 slurry, self-set in mild body fluid, then surface-coated with polydopamine (PDA) and loaded with doxorubicin (DOX). The PDA coating gives near-infrared photothermal capability; DOX is released on dual NIR + acidic-pH stimulus to target tumour cells. Although osteosarcoma-focused, the paper provides directly transferable evidence that (a) extrusion-based 3D printing can produce HA/CDHA scaffolds with explicit pore-size gradients, (b) PDA-coated CDHA "promoted the proliferation of osteoblasts in a concentration-dependent manner," (c) gradient pore architecture supports BMSC/HUVEC adhesion, proliferation, ALP/RUNX2/OPN expression, and VEGF/CD31 angiogenic signalling.

## Key claims

- **Gradient pore architecture (in-paper claim)**: "the three-dimensional calcium-deficient hydroxyapatite scaffold, featuring a gradient pore structure, is fabricated using extrusion-based 3D printing, followed by self-setting in a mild body fluid environment." — most directly relevant prior art for our hypothesis.
- **Slurry composition**: 7 g α-TCP / 0.6 g sodium alginate / 15 g F-127 (20 wt%) aqueous solution; α-TCP synthesised by modified co-precipitation, wet-milled in alcohol before extrusion.
- **PDA coating** raises surface roughness from ~10 μm to ~20 μm at intermediate dopamine concentration; higher PDA (6 mg/mL) re-smooths the surface and decreases contact angle (Wenzel-regime wettability).
- **Cellular biology**: BMSCs (mouse, isolated from tibia/femur of 8-week-old mice, αMEM + 10% FBS + 1% P/S) and HUVECs adhere and proliferate well on the gradient scaffold; "polydopamine coating on the surface of calcium phosphate scaffolds promoted the proliferation of osteoblasts in a concentration-dependent manner."
- **Osteogenic markers** (qRT-PCR + WB): ALP, RUNX2, OPN upregulated by PDA@CDHA. **Angiogenic markers**: VEGF and CD31 upregulated in HUVECs.
- **In vivo tumour model**: 4-week-old BALB/c mice (Beijing Vital River) implanted with K7M2 osteosarcoma; DOX/PDA@CDHA scaffolds with NIR irradiation eradicated tumours and supported bone regeneration. μCT scan parameters: 90 kV, 88 μA, 10 min, 36 μm pixel resolution; reconstruction with Skyscan NRecon, analysis with CTVox.

## Methods used

- [[../methods/extrusion-based-3D-printing]]
- [[../methods/robocasting-direct-ink-writing]]
- [[../methods/gradient-pore-design]]
- [[../methods/slurry-preparation-for-DLP]]
- [[../methods/ceramic-sintering]]
- [[../methods/contact-angle-wettability]]
- [[../methods/SEM-imaging]]
- [[../methods/confocal-microscopy]]
- [[../methods/DAPI-staining]]
- [[../methods/phalloidin-actin-staining]]
- [[../methods/qPCR]]
- [[../methods/RT-PCR]]
- [[../methods/western-blot]]
- [[../methods/micro-CT-imaging]]
- [[../methods/micro-CT-bone-volume-quantification]]
- [[../methods/osteogenic-differentiation-induction]]
- [[../methods/cell-seeding-static]]

## Reagents

- [[../reagents/hydroxyapatite]]
- [[../reagents/calcium-deficient-hydroxyapatite]]
- [[../reagents/alpha-tricalcium-phosphate]]
- [[../reagents/polydopamine]]
- [[../reagents/doxorubicin]]
- [[../reagents/alginate]]
- [[../reagents/alpha-MEM]]
- [[../reagents/FBS]]
- [[../reagents/penicillin-streptomycin]]
- [[../reagents/DAPI]]

## Organisms / cell lines

- Mouse Bone Marrow Mesenchymal Stem Cells (mBMSCs), isolated from tibia/femur of 8-week-old mice. → use slug `mouse-BMSC-primary` (proposed; closest in vocabulary is [[../organisms/hBMSC]]).
- HUVEC — [[../organisms/HUVEC]]
- 4-week-old BALB/c mice (in-vivo osteosarcoma model). → proposed slug `BALB-c-mouse-osteosarcoma-model`.
- K7M2 mouse osteosarcoma cells (cell-line implanted). → proposed slug `K7M2-mouse-osteosarcoma`.

## Failure modes flagged

- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — sodium alginate / F-127 slurry components must be removed during self-setting.
- [[../failure-modes/HA-stoichiometry-affects-resorption]] — CDHA is intentionally non-stoichiometric; resorption profile differs from stoichiometric HA.
- [[../failure-modes/in-vivo-vs-in-vitro-discordance]] — in vitro PDA@CDHA proliferation results are bridged to in-vivo bone regeneration via μCT only (no direct day-14 osteoblast counting in vivo).
- [[../failure-modes/pore-clogging-by-sintering-aids]] — PDA coating thickens at higher dopamine concentrations and could partially occlude small pores; the paper notes contact-angle changes.

## Supports / contradicts

- **Strongly supports the gradient-pore HA hypothesis** ([[../../hypothesis|hypothesis.md]]) — closest prior art; demonstrates the gradient-pore extrusion-printed CDHA scaffold favours pre-adhesion and proliferation of vascular and stromal cells.
- Supports [[2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] (extrusion-based CPC scaffolds with α-TCP / HA, biological readouts on BMSCs).
- Supports [[2020-wang-3d-printing-of-bone-tissue-engineering-s]] (gradient-structure printing examples).

## Notable quotes

- "The three-dimensional calcium-deficient hydroxyapatite scaffold, featuring a gradient pore structure, is fabricated using extrusion-based 3D printing, followed by self-setting in a mild body fluid environment." (Abstract / Section 2)
- "Polydopamine coating on the surface of calcium phosphate scaffolds promoted the proliferation of osteoblasts in a concentration-dependent manner." (Section on osteogenic performance)
- "BMSCs… exhibited spread morphology, tight intercellular connections and large spreading area, which suggests the scaffold's gradient pore structure and surface veneer of the scaffolds are favorable for the pre-adhesion and proliferation of HUVECs." (Cell adhesion section)
