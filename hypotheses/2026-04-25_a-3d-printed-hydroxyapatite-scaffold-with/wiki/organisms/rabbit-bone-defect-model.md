---
type: organism
slug: rabbit-bone-defect-model
organism_type: model-organism
source: in-house animal facility (New Zealand White)
external_id: NA — strain (typically New Zealand White) + IACUC protocol number
characteristics:
  - adult rabbit (typically New Zealand White, 3.0–4.0 kg, male or female); calvarial, mandibular, or femoral/tibial defects depending on the question
  - mid-tier translational model — bone size and remodeling rate closer to human than rat; standard "second animal model" before sheep/dog
  - typical defect: 8 mm (femoral condyle), 15 mm (calvarial), or 10–15 mm segmental tibial/radial
  - typical follow-up: 4 / 8 / 12 / 24 weeks
known_failure_modes: [in-vivo-vs-in-vitro-discordance, brittle-ceramic-mechanical-failure, short-term-proliferation-vs-long-term-bone-formation]
sources: [2021-montoya, 2022-yang, 2026-zhao, 2012-amini]
tags: [in-vivo, rabbit, defect-model, mid-tier]
created: 2026-04-25
updated: 2026-04-25
---

# Rabbit bone defect model

## What it is

The rabbit bone-defect model (most commonly New Zealand White, 3.0–4.0 kg) sits between rat and large-animal (dog, sheep) models in the translational hierarchy. Its principal advantage over rat is that bone size (rabbit femoral diameter is ~8 mm vs rat ~3 mm) and Haversian remodeling rate are closer to human, making μCT and histomorphometry resolution-friendly and remodeling kinetics more clinically plausible. It is the standard "second in-vivo test" for HA/CaP scaffolds after rat. Common variants include calvarial (15 mm), femoral condyle (8 mm cylindrical), tibial / radial segmental (10–15 mm), and mandibular (5–10 mm).

## Why this model for this hypothesis

- Rabbit defect studies are where pore-size effects start to integrate over a clinically relevant remodeling timescale (12–24 weeks).
- The femoral-condyle plug model (8 mm cylindrical defect in the medial femoral condyle) is particularly well-suited to test gradient-pore radial architecture: the defect dimensions match the hypothesis's planned scaffold geometry, and weight-bearing is partial.
- Used by the longitudinal-and-radial-microgradient paper ([[../sources/2026-zhao-longitudinal-and-radial-microgradients-i]]), which is the most direct in-vivo precedent for this hypothesis.

## Typical parameters

- **Strain / age**: New Zealand White, 6+ months, 3.0–4.0 kg.
- **Defect site**: femoral condyle (8 mm cylindrical, partial weight-bearing) or calvarial (15 mm) most common in HA-scaffold work.
- **n**: ≥ 4–6 per group per time point.
- **Time points**: 4, 8, 12, 24 weeks (24 wk lets the remodeling phase complete).
- **Readouts**: μCT bone-volume-fraction, histomorphometry, fluorochrome labeling (calcein/alizarin/tetracycline) for bone-formation rate, occasional biomechanical push-out testing.

## Common pitfalls

- [[../failure-modes/in-vivo-vs-in-vitro-discordance]] — applies; the rabbit model is closer to clinical than rat but still imperfect.
- [[../failure-modes/brittle-ceramic-mechanical-failure]] — load-bearing femoral / tibial defects expose brittle-HA mechanical limits.
- [[../failure-modes/short-term-proliferation-vs-long-term-bone-formation]] — early time-points (4 wk) capture proliferation/early matrix, not remodeled bone.

## Sources

- [[../sources/2021-montoya-on-the-road-to-smart-biomaterials-for-bo]] — smart-biomaterial review citing rabbit defect models.
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — Gaussian-curvature TPMS scaffolds tested in rabbit femoral-condyle.
- [[../sources/2026-zhao-longitudinal-and-radial-microgradients-i]] — **most directly relevant**: longitudinal + radial microgradient HA scaffold tested in rabbit defect with histomorphometry.
- [[../sources/2012-amini-bone-tissue-engineering-recent-advances]] — bone-TE review citing rabbit as mid-tier translational model.
