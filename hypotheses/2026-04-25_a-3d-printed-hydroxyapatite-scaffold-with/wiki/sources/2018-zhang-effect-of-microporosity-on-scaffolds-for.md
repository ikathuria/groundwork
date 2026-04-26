---
type: source
id: 2018-zhang-effect-of-microporosity-on-scaffolds-for
source_type: paper
title: "Effect of microporosity on scaffolds for bone tissue engineering"
authors: ["Zhang, Ke", "Fan, Yubo", "Dunne, Nicholas", "Li, Xiaoming"]
year: 2018
doi: 10.1093/rb/rby001
url: https://doi.org/10.1093/rb/rby001
raw_path: raw/papers/2018-zhang-effect-of-microporosity-on-scaffolds-for.xml
tags: [microporosity, macroporosity, scaffold, bone-tissue-engineering, BCP, capillary, protein-adsorption, review]
created: 2026-04-25
updated: 2026-04-25
---

# Zhang et al. 2018 — Effect of microporosity on bone tissue-engineering scaffolds

## Summary

A focused review (Regen. Biomater., 2018) of how **microporosity** (pore size < 10 μm) — distinct from macroporosity (> 100 μm, the "cell-scale" pores) — alters protein adsorption, capillary uptake, scaffold degradation, and downstream osteogenic-related cell function. Synthesises in-vitro and in-vivo data showing micropores increase specific surface area, enrich osteogenic protein adsorption (incl. BMPs), and drive osteoinduction even where the geometry should not allow direct cell entry. Critically, also flags evidence that **higher microporosity can be unfavorable for osteoblast proliferation** (Rosa et al.: rat BMSC proliferation higher on BCP scaffolds at 5–15% microporosity than at 30%) — a direct caveat for our gradient design. Distinguishes "macropore" (osteogenesis / angiogenesis driver) from "micropore" (osteoinduction / protein-adsorption driver).

## Key claims

- **Definitions used in the field**: macroporosity = pore size **above 100 μm** (required for osteogenesis / angiogenesis / fluid circulation / cell migration); microporosity = pore size **smaller than 10 μm** (drives osteoinduction via secondary effects).
- **Mechanism set for microporosity**: (a) increased specific surface area → more protein-adsorption sites and faster degradation; (b) altered surface roughness, surface charge, and surface free energy → modulates integrin engagement (e.g., α2β1); (c) capillary force in micropores anchors cells and even allows penetration into pores smaller than the cells themselves.
- **Wettability / hydrophilicity**: lower surface free energy → lower hydrophilicity; Kennedy et al. observed cell proliferation was greater on hydrophobic surfaces because of altered fibronectin adsorption.
- **Caveat — proliferation trade-off**: "higher microporosity was unfavorable for the proliferation of osteoblasts. For example, Rosa et al. demonstrated that rat bone marrow stromal cells (BMSCs) proliferation was greater on BCP scaffolds with microporosity rates of 5% and 15%, as compared with those with microporosity rate of 30%." → microporosity has a U-shape; too much hurts proliferation.
- **In-vivo effect**: microporous BCP scaffolds drive ectopic osteoinduction in some animal models even without exogenous BMPs (cited concentration of bone-inducing proteins on micropore surfaces).
- **Mechanical caveat**: increasing microporosity reduces compressive strength — same scaling concern as macropore design.

## Methods used

- [[../methods/BET-surface-area-analysis]]
- [[../methods/mercury-intrusion-porosimetry]]
- [[../methods/SEM-imaging]]
- [[../methods/contact-angle-wettability]]
- [[../methods/mechanical-compression-testing]]
- [[../methods/in-vivo-calvarial-defect-model]]
- [[../methods/in-vivo-femoral-defect-model]]

## Reagents

- [[../reagents/hydroxyapatite]]
- [[../reagents/beta-tricalcium-phosphate]]
- [[../reagents/biphasic-calcium-phosphate]]
- [[../reagents/BMP-2]]

## Organisms / cell lines

- [[../organisms/MC3T3-E1]]
- [[../organisms/hBMSC]]
- Rat BMSCs (primary). → use [[../organisms/primary-rat-calvarial-osteoblast]] or proposed `rat-BMSC-primary`.

## Failure modes flagged

- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — explicit: high microporosity favours differentiation/osteoinduction but can suppress proliferation.
- [[../failure-modes/short-term-proliferation-vs-long-term-bone-formation]] — proliferation at day 14 (our endpoint) may not predict in-vivo osteoinduction.
- [[../failure-modes/brittle-ceramic-mechanical-failure]] — increasing microporosity reduces compressive strength.
- [[../failure-modes/HA-stoichiometry-affects-resorption]] — degradation products amplified by microporosity-driven surface area.

## Supports / contradicts

- **Important caveat for our hypothesis**: this paper warns that the relationship between porosity and proliferation is non-monotonic. Our 100–500 μm gradient sits in the macropore regime, but micropores in the strut walls (typical of sintered HA) could work either way.
- Supports [[2017-eliaz-calcium-phosphate-bioceramics-a-review-o]] (BET / surface-area / Ca-P chemistry framing).
- Supports [[2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] (MBG mesopores → enhanced surface area → better day-3/7 proliferation).
- Supports [[2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]] (broader pore-size review).

## Notable quotes

- "Macropororosity (pore size above 100 μm) is usually required to facilitate the osteogenesis and angiogenesis. Interconnected macropores are necessary to promote body fluid circulation and cell migration to the core of the implant. More importantly, people also found that microporosity (pore size smaller than 10 μm) plays a significant role in enhancing the osteoinduction of scaffolds." (Introduction)
- "Higher microporosity was unfavorable for the proliferation of osteoblasts. For example, Rosa et al. demonstrated that rat bone marrow stromal cells (BMSCs) proliferation was greater on BCP scaffolds with microporosity rates of 5% and 15%, as compared with those with microporosity rate of 30%." (Proliferation section)
- "The presence of microporosity can significantly enhance the specific surface area and improve the permeability of scaffolds, thereby providing more protein adsorption sites and enhancing the degradation of scaffolds." (Mechanism section)
