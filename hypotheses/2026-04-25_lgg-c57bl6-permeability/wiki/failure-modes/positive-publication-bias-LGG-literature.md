---
type: failure-mode
slug: positive-publication-bias-LGG-literature
severity: high
frequency_estimate: pervasive in the probiotic-barrier literature; multiple confirmed retractions of LGG papers
applies_to_step_kinds: [literature-QC, effect-size-estimation]
sources: []
created: 2026-04-25
updated: 2026-04-25
tags: [meta-science, publication-bias, retraction, literature-QC]
---

# Strong positive-publication bias in LGG-barrier literature

## What it is

The published LGG-barrier literature is heavily skewed positive. Multiple converging signals:

1. **Direct retractions of LGG-mouse papers in our corpus** ([[../sources/2014-singh-lgg-fermented-milk-aging-mice-RETRACTED]], [[../sources/2024-retraction-notice-singh-lgg-aging-mice]], [[../sources/2021-lgg-conditioned-medium-spinal-cord-injury-RETRACTED]], [[../sources/2020-masia-lgg-fermented-plant-RETRACTED]], [[../sources/2013-petrillo-lgasseri-sf1183-epithelial-RETRACTED]]). The 2014 Singh aging-mouse retraction is *especially* relevant — its claims overlap our intervention-outcome combination almost exactly.
2. **OpenAlex snapshot** ([[../sources/openalex-lactobacillus-retractions-snapshot]]): 36 retracted Lactobacillus papers across the broader literature, a non-trivial fraction of which have probiotic-barrier claims.
3. **Underpowered designs** are the norm — many papers in the corpus have n = 4–8 / arm.
4. **Unstressed-baseline arms with null results are largely absent** from the published record. The "challenge-model" preference (see [[challenge-model-vs-baseline-mismatch]]) is partly biological and partly publication bias — nulls in unstressed mice don't get written up.

## Why it matters for this hypothesis

- The "30 % reduction" effect-size threshold is implicitly anchored to published LGG-barrier effect sizes. Those sizes are inflated by publication bias.
- A real-world LGG-barrier effect in unstressed mice may be much smaller than the meta-mean of published challenge-model studies.
- Pass 3's literature-QC verdict needs to weight the evidence accordingly.

## How to detect it

- Funnel plot of effect size vs sample size across studies that report both → asymmetry indicates bias.
- Compare Cochrane / systematic-review effect estimates (which down-weight small studies) to the headline mean — large gap = bias.
- Search for and cite explicit null-result papers; if you can't find any, that itself is the signal.

## Mitigation

1. **Cite the retractions** explicitly in Pass 3's literature-QC verdict.
2. Discount published effect sizes by ~30–50 % when forecasting your own expected effect.
3. **Pre-register the design and analysis** of this study in advance (OSF or similar) — every line you commit to publicly is one less degree of freedom for post-hoc cherry-picking.
4. **Commit to publishing the result** regardless of direction, including null. Make this explicit in the IACUC protocol and any preregistration.
5. In the lab brief, flag the Singh 2014 retraction as a direct precedent that did *not* hold up.

## Sources mentioning this

- [[../sources/openalex-lactobacillus-retractions-snapshot|2026 · OpenAlex — snapshot of all retracted Lactobacillus papers (n = 36)]]
- [[../sources/2024-retraction-notice-singh-lgg-aging-mice|2024 · Singer Springer — Retraction Note: Singh et al. LGG fermented milk in aging mice]]
- [[../sources/2021-lgg-conditioned-medium-spinal-cord-injury-RETRACTED|2021 · Lin — [Retracted] LGG conditioned medium / spinal cord injury / microglia polarisation]]
- [[../sources/2020-masia-lgg-fermented-plant-RETRACTED|2020 · Masiá — RETRACTED: L. rhamnosus on physicochemical properties of fermented plant-based materials]]
- [[../sources/2020-retraction-notice-masia-lgg-plant|2020 · Editor — Retraction notice for Masiá et al. 2020]]
- [[../sources/2014-singh-lgg-fermented-milk-aging-mice-RETRACTED|2014 · Singh — RETRACTED ARTICLE: LGG fermented milk improves Th1/Th2 / antioxidative status in aging mice]]
- [[../sources/2013-petrillo-lgasseri-sf1183-epithelial-RETRACTED|2013 · Petrillo — RETRACTED: L. gasseri SF1183 affects intestinal epithelial cell survival and growth]]
