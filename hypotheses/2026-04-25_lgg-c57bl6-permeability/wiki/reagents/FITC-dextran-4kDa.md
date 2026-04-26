---
type: reagent
slug: FITC-dextran-4kDa
aliases: [FD-4, FD4, fluorescein isothiocyanate-dextran 4 kDa, fluorescein-dextran 4000]
cas: 60842-46-8
suppliers:
  - name: Sigma-Aldrich
    catalog: 46944
    grade: "FITC content 0.003–0.020 mol FITC / mol glucose"
    url: https://www.sigmaaldrich.com/US/en/product/sigma/46944
  - name: Sigma-Aldrich
    catalog: FD4
    notes: "alternate listing of the same product line; check current SKU"
  - name: Thermo Fisher
    catalog: D1820
    notes: "Invitrogen labelled FD-4 (4 000 MW); 0.0004 FITC/glucose nominal"
storage: "−20 °C, desiccated, light-protected"
hazards: low (FITC is a mild irritant; powder handling in fume hood)
known_failure_modes: [FITC-dextran-photobleaching, serum-autofluorescence-FITC-readout, FITC-dextran-dose-timing-heterogeneity]
related_methods: [FITC-dextran-permeability-assay, ex-vivo-intestinal-permeability-assay]
sources: []
created: 2026-04-25
updated: 2026-04-25
tags: [permeability-probe, fluorescent-tracer, dextran]
---

# FITC-dextran 4 kDa (FD-4)

The canonical small-molecule paracellular tracer for in vivo intestinal permeability. A 4 kDa dextran polymer randomly substituted with fluorescein isothiocyanate (~3–20 mmol FITC / mol glucose). Small enough to use the leak / unrestricted paracellular pathway, large enough that transcellular uptake is negligible — so a clean(-ish) reporter of tight-junction status.

## Why specifically 4 kDa

- **70 kDa (FD-70)** reports only on gross epithelial damage (ulcerated mucosa, large gaps).
- **40 kDa (FD-40)** is between paracellular and damage-only.
- **4 kDa (FD-4)** sits at the upper end of the leak-pathway-permissive range — sensitive to claudin-2 / claudin-15 alterations, and the reference standard across our corpus.

Some papers use 3 kDa (FD-3, Thermo D3306) interchangeably with FD-4; effect direction is the same, magnitude differs.

## Working solution

- Reconstitute lyophilised powder in sterile PBS at **125 mg/mL**.
- Dose **600 mg/kg** by oral gavage (5 µL/g body weight at 125 mg/mL).
- Wrap reconstituted solution and dosing syringes in foil; use within 2 h.

## Plate-read

- Excitation 485 nm / emission 520 nm, top read on a black 96-well plate.
- Standard curve in **pooled naïve mouse plasma** (not buffer or PBS) — see [[../failure-modes/serum-autofluorescence-FITC-readout]].

## Pitfalls

- [[../failure-modes/FITC-dextran-photobleaching]] — handle under foil.
- [[../failure-modes/serum-autofluorescence-FITC-readout]] — match standard-curve matrix.
- [[../failure-modes/FITC-dextran-dose-timing-heterogeneity]] — pre-register dose & timing.

## Sources mentioning this

- [[../sources/2026-zhu-integrative-mendelian-randomization-experimental-validation|2026 · Zhu — Integrative Mendelian randomization and experimental validation prioritize KLF4 in the gut]]
- [[../sources/2026-yu-long-noncoding-rna-gas5-disrupts|2026 · Yu — Long noncoding RNA  GAS5  disrupts intestinal epithelial barrier function by increasing sm]]
- [[../sources/2026-yang-oral-microcapsules-encapsulating-endometrial-regenerative|2026 · Yang — Oral Microcapsules Encapsulating Endometrial Regenerative Cell-Derived Exosomes Promote In]]
- [[../sources/2026-wu-impact-continuous-probiotic-supplementation-intestinal|2026 · Wu — Impact of continuous probiotic supplementation on intestinal barrier function and hepatic ]]
- [[../sources/2026-ryan-food-derived-molecules-regulators-intestinal|2026 · Ryan — Food-derived molecules as regulators of intestinal tight junctions and barrier function: m]]
- [[../sources/2026-park-cu104-novel-barrier-function-enhancer|2026 · Park — CU104, a novel barrier function enhancer, improves colitis via modulation of barrier funct]]
- [[../sources/2026-oglio-novel-food-supplement-containing-combination|2026 · Oglio — Novel Food Supplement Containing a Combination of Postbiotics and Plant-Derived Compounds ]]
- [[../sources/2025-oglio-postbiotic-effects-elicited-heat-inactivated|2026 · Oglio — Postbiotic effects elicited by heat-inactivated  Lacticaseibacillus rhamnosus GG  against ]]
- [[../sources/2025-miao-berberine-taxifolin-co-administration-attenuates|2026 · Miao — Berberine-taxifolin co-administration attenuates inflammatory response and intestinal barr]]
- [[../sources/2026-lasaviciute-limosilactobacillus-reuteri-metabolites-modulate-immune|2026 · Lasaviciute — Limosilactobacillus reuteri  metabolites modulate immune pathways and intestinal barrier r]]
- [[../sources/2025-yu-restoring-mucosal-barrier-homeostasis-situ|2025 · Yu — Restoring mucosal barrier homeostasis by in situ formation of a living-synthetic therapeut]]
- [[../sources/2025-wang-periodontitis-associated-metabolite-isoleucine-impairs|2025 · Wang — Periodontitis-associated metabolite isoleucine impairs intestinal barrier function and exa]]
- [[../sources/2025-wang-protective-effects-lactobacillus-rhamnosus-gg-supernatant|2025 · Wang — Protective effects of  Lactobacillus rhamnosus  GG supernatant on metabolic associated fat]]
- [[../sources/2025-orlando-lt-gt-lactobacillus-rhamnosus-lt|2025 · Orlando — Lactobacillus rhamnosus  GG and  Lactobacillus paracasei  IMPC2.1 Mitigate LPS-Induced Epi]]
- [[../sources/2025-naso-multi-strain-probiotic-formulation-preserves|2025 · Naso — A multi-strain probiotic formulation preserves intestinal epithelial and vascular barriers]]
- [[../sources/2025-liu-lactobacillus-johnsonii-alleviates-experimental-colitis|2025 · Liu — Lactobacillus johnsonii  alleviates experimental colitis by restoring intestinal barrier f]]
- [[../sources/2025-huang-enterococcus-derived-cytolysin-exacerbates-ischemic|2025 · Huang — Enterococcus -derived cytolysin exacerbates ischemic stroke by disrupting the blood–brain ]]
- [[../sources/2025-guo-effects-lt-gt-lactobacillus-paracei|2025 · Guo — Effects of  Lactobacillus paracei  JY062 Postbiotic on Intestinal Barrier, Immunity, and G]]
- [[../sources/2025-ferris-probiotics-intestinal-tight-junction-barrier|2025 · Ferris — Probiotics and the intestinal tight junction barrier function]]
- [[../sources/2025-dempsey-protective-properties-white-button-mushroom|2025 · Dempsey — Protective Properties of the White Button Mushroom,  Agaricus bisporus , in a Mouse Model ]]
- [[../sources/2025-bao-epithelial-barrier-janus-faced-regulator|2025 · Bao — The epithelial barrier: a Janus-faced regulator in allergic airway diseases from defense t]]
- [[../sources/2024-suntornsaratoon-lactobacillus-rhamnosus-gg-stimulates-dietary|2024 · Suntornsaratoon — Lactobacillus rhamnosus  GG Stimulates Dietary Tryptophan-Dependent Production of Barrier-]]
- [[../sources/2023-aldarsgarca-ex-vivo-intestinal-permeability-assay|2023 · Bootz-Maoz — Ex vivo intestinal permeability assay (X-IPA) for tracking barrier function dynamics]]
- [[../sources/2021-boerner-functional-assessment-intestinal-permeability-neutrophil|2021 · Boerner — Functional Assessment of Intestinal Permeability and Neutrophil Transepithelial Migration ]]
- [[../sources/2017-yan-neonatal-colonization-mice-lgg-promotes|2016 · Yan — Neonatal Colonization of Mice with LGG Promotes Intestinal Development and Decreases Susce]]
