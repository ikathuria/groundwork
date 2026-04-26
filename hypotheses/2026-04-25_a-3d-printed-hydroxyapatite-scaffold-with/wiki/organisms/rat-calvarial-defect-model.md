---
type: organism
slug: rat-calvarial-defect-model
organism_type: model-organism
source: in-house animal facility (Sprague-Dawley or Wistar)
external_id: NA — rat strain (Sprague-Dawley / Wistar) + IACUC protocol number
characteristics:
  - adult rat (Sprague-Dawley or Wistar), typically 8–12 wk, male; bilateral or single 5-mm or 8-mm full-thickness circular defect drilled in parietal calvaria
  - the canonical small-animal "critical-size cranial defect" model for bone-tissue-engineering scaffold testing
  - non-load-bearing, flat anatomy — ideal first in-vivo test of scaffold osteoconductivity
  - typical follow-up: 4 / 8 / 12 weeks; readouts by μCT bone-volume-fraction + histology
known_failure_modes: [in-vivo-vs-in-vitro-discordance, short-term-proliferation-vs-long-term-bone-formation, image-reuse-unsupported-osteogenesis-claims]
sources: [2012-amini, 2014-polo-corrales]
tags: [in-vivo, rat, calvarial, critical-size-defect]
created: 2026-04-25
updated: 2026-04-25
---

# Rat calvarial defect model

## What it is

The rat critical-size calvarial defect is the workhorse small-animal model for bone-tissue-engineering scaffold osteoconductivity testing. A circular full-thickness defect (5 mm or 8 mm diameter — 8 mm is "critical-size" in adult rat per the literature consensus) is drilled bilaterally in the parietal bones with a trephine bur under anesthesia; the dura is preserved. The scaffold disc (diameter-matched, 1–2 mm thick) is press-fit into the defect; the periosteum and skin are closed. Animals are sacrificed at 4 / 8 / 12 weeks and the calvarial caps are harvested for μCT (bone-volume-fraction within the defect ROI) and histology (H&E, Masson's trichrome, sometimes Alizarin Red).

## Why this model for this hypothesis

- The hypothesis is in-vitro-first (osteoblast proliferation), but if extended to in-vivo, rat calvarial is the smallest, cheapest, fastest first translational test.
- Non-load-bearing → tests osteoconductivity / cellular in-growth without confounding by mechanical failure of brittle HA scaffolds.
- The 5-mm vs 8-mm choice matters: 5 mm is sub-critical in adult rat (heals spontaneously by 8 wk in some strains/ages), 8 mm is critical. Use 8 mm if the claim is "scaffold required for healing".

## Typical parameters

- **Strain / age / sex**: Sprague-Dawley or Wistar, 8–12 wk, male (female if estrogen-deficiency comparison).
- **Defect size**: 5 mm (sub-critical, faster) or 8 mm (critical-size, more rigorous).
- **n**: ≥ 6 animals per group per time point (12 defects per group bilaterally if both calvaria used, but bilateral within-animal designs need careful statistics).
- **Time points**: 4, 8, 12 weeks.
- **Readouts**: μCT bone-volume-fraction (`BV/TV`), histomorphometry, sometimes fluorochrome labeling (calcein/alizarin) for bone-formation rate.

## Common pitfalls

- [[../failure-modes/in-vivo-vs-in-vitro-discordance]] — in-vitro proliferation effects often do not survive translation to in-vivo bone formation.
- [[../failure-modes/short-term-proliferation-vs-long-term-bone-formation]] — early proliferation peak does not predict 12-week bone-volume-fraction.
- [[../failure-modes/image-reuse-unsupported-osteogenesis-claims]] — μCT and histology images of small defects have been duplicated or recycled in retracted papers; pre-register imaging plans.

## Sources

- [[../sources/2012-amini-bone-tissue-engineering-recent-advances]] — bone-TE review citing rat-calvarial as standard small-animal first in-vivo test.
- [[../sources/2014-polo-corrales-scaffold-design-for-bone-regeneration]] — scaffold-design review citing rat-calvarial for HA / β-TCP scaffold osteoconductivity studies.
