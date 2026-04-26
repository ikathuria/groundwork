---
type: method
slug: FITC-dextran-permeability-assay
aliases: [FD-4 assay, in vivo intestinal permeability assay, fluorescein-dextran permeability assay]
related_methods: [oral-gavage-mouse, Ussing-chamber-TEER, ex-vivo-intestinal-permeability-assay, ELISA-cytokine-quantification]
key_reagents: [FITC-dextran-4kDa]
known_failure_modes: [FITC-dextran-photobleaching, serum-autofluorescence-FITC-readout, incomplete-fasting-before-gavage, FITC-dextran-dose-timing-heterogeneity]
created: 2026-04-25
updated: 2026-04-25
tags: [permeability, in-vivo, gut, paracellular]
---

# FITC-dextran intestinal permeability assay

The single-most-used in vivo readout of small-molecule paracellular gut barrier function. A defined dose of fluorescein-conjugated dextran (typically 4 kDa, "FD-4") is delivered by oral gavage to fasted mice; plasma is sampled and the fluorescence translated to dextran concentration against a same-day standard curve. The reading is the **primary endpoint** in our hypothesis.

## What it measures

- **Paracellular flux through the small-intestinal epithelium**, dominated by the leak/unrestricted pathway (which 4 kDa molecules can use when ZO-1/occludin/claudin barriers are compromised). FD-4 does **not** report on transcellular permeability or on large-molecule (FD-40, FD-70) translocation, both of which require companion probes if the mechanism question demands them.
- It is a **single-time-point integral** of luminal-to-blood passage between gavage and sample. Unlike Ussing-chamber TEER, it is not a real-time conductance measurement.

## Canonical protocol (consensus from sources)

| Step | Parameters seen in literature | Recommended (this hypothesis) |
|---|---|---|
| Fast | 4–6 h (most), water ad lib; some studies use no fast | **6 h fast**, water ad lib (standardise) |
| FD-4 dose | 60 mg / 100 g BW (Volynets-style) … 600 mg/kg … up to 750 mg/kg | **600 mg/kg** in sterile PBS |
| Vehicle | PBS, sterile water, saline | sterile PBS |
| Gavage volume | 100–200 µL via 22G stainless ball-tip needle | 200 µL |
| Plasma draw | retro-orbital, submandibular, or terminal cardiac | submandibular at 4 h post-gavage |
| Read | 485 nm ex / 520 nm em on a fluorescent plate reader | same; 96-well black plate |
| Quant | external FD-4 standard curve in **pooled naïve mouse plasma** (not buffer) — corrects for matrix autofluorescence | required |

## Common variants

- **Larger probes** (FD-40, FD-70): used when leak-path damage is suspected; not paracellular-specific.
- **Multi-probe (lactulose / mannitol / sucralose) with urine collection**: dispenses with terminal blood draw and resolves small- vs large-bowel permeability separately. Out of scope here.
- **Ex vivo X-IPA** (Aldars-García 2023): ex vivo correlate; useful for mechanism dissection on isolated mucosa.

## Things to watch for

- The standard curve **must** be made in the same biological matrix (plasma) and read on the same plate as samples — buffer-only standards systematically bias the reading. See [[../failure-modes/serum-autofluorescence-FITC-readout]].
- Sample handling **must** be in amber tubes / shielded from ambient light. See [[../failure-modes/FITC-dextran-photobleaching]].
- Fasting status is the single largest source of inter-study variance. See [[../failure-modes/incomplete-fasting-before-gavage]].
- The published dose / timing matrix is wide enough that effect-size meta-analysis across studies is unreliable. See [[../failure-modes/FITC-dextran-dose-timing-heterogeneity]].

## How it relates to alternative methods

- **TEER / Ussing chamber** ([[Ussing-chamber-TEER]]) is the orthogonal mucosal-conductance measurement. They usually agree on direction but not magnitude.
- **Plasma LBP / endotoxin** ([[LPS-endotoxin-quantification]]) is the systemic-translocation surrogate. It can detect translocation events FD-4 misses (large-molecule, late-phase).
- **Tight-junction protein quantification** ([[Western-blot-tight-junction]]) gives the molecular substrate for any FD-4 change.

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
