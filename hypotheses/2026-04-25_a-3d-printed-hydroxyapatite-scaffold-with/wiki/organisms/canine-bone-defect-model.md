---
type: organism
slug: canine-bone-defect-model
organism_type: model-organism
source: research animal facility (Beagle most common)
external_id: NA — strain (Beagle / mongrel) + IACUC / equivalent protocol number
characteristics:
  - dog (typically Beagle, 1–2 yr, 8–12 kg) — large-animal translational model with Haversian remodeling and bone size approximating human
  - typical defects: mandibular (segmental), tibial / radial / ulnar (segmental), or femoral-condyle plug
  - bone size and load magnitude make this the canonical pre-clinical "go / no-go" test for orthopedic devices
  - regulatory weight: large-animal data is often required for FDA / CE pre-clinical packages
  - typical follow-up: 12 / 26 / 52 weeks
known_failure_modes: [brittle-ceramic-mechanical-failure, in-vivo-vs-in-vitro-discordance, short-term-proliferation-vs-long-term-bone-formation]
sources: [2013-henkel]
tags: [in-vivo, dog, large-animal, pre-clinical, regulatory]
created: 2026-04-25
updated: 2026-04-25
---

# Canine bone defect model

## What it is

Dog (most often Beagle) bone-defect models are the standard large-animal pre-clinical test for orthopedic devices and bone-tissue-engineering scaffolds intended for clinical translation. Bone size, Haversian remodeling, and load magnitude approximate human, and FDA / CE pre-clinical packages frequently require a large-animal dataset. Common defect sites include mandibular segmental defects (oral / maxillofacial scaffold use case), tibial / radial / ulnar segmental defects (orthopedic load-bearing), and femoral-condyle plug defects (cancellous-bone plug).

## Why this model for this hypothesis

- The hypothesis is in-vitro-first; canine is far downstream of the planned experiment. It is included here because [[../sources/2013-henkel-bone-regeneration-based-on-tissue-engine]] cites canine as part of the standard translational hierarchy (rat → rabbit → dog/sheep → clinical).
- If the gradient-pore HA scaffold reaches the regulatory pre-clinical stage, a canine segmental long-bone defect is a likely required step.

## Typical parameters

- **Strain / age**: Beagle, 1–2 yr, 8–12 kg.
- **Defect**: mandibular 15–25 mm segmental, tibial 20–30 mm segmental, femoral-condyle 8–12 mm plug.
- **n**: ≥ 4–6 per group per time point (large-animal n is constrained by ethics and cost).
- **Time points**: 12, 26, 52 weeks.
- **Readouts**: serial radiographs, μCT, biomechanical testing of explant (3-point bend, torsion, push-out), histomorphometry, fluorochrome labeling.

## Common pitfalls

- [[../failure-modes/brittle-ceramic-mechanical-failure]] — pure HA at canine load magnitudes will fracture; composite or fixator support is required.
- [[../failure-modes/in-vivo-vs-in-vitro-discordance]] — applies; canine is the closest non-human model but not human.
- [[../failure-modes/short-term-proliferation-vs-long-term-bone-formation]] — applies at the 52-week timescale.

## Sources

- [[../sources/2013-henkel-bone-regeneration-based-on-tissue-engine]] — bone-regeneration tissue-engineering review covering canine as a translational large-animal model.
