---
type: organism
slug: rat-femoral-defect-model
organism_type: model-organism
source: in-house animal facility (Sprague-Dawley or Wistar)
external_id: NA — rat strain + IACUC protocol number
characteristics:
  - adult rat (Sprague-Dawley or Wistar), typically 10–16 wk, male; segmental femoral-shaft defect (5–10 mm) stabilized with internal/external fixator
  - load-bearing critical-size segmental-bone-defect model
  - tests scaffold osteoconductivity AND mechanical integration under physiological load
  - typical follow-up: 8 / 12 / 16 weeks; readouts by μCT, biomechanical testing (3-point bend / torsion), histology
known_failure_modes: [brittle-ceramic-mechanical-failure, in-vivo-vs-in-vitro-discordance, short-term-proliferation-vs-long-term-bone-formation, HA-stoichiometry-affects-resorption]
sources: [2018-zhang, 2012-bose, 2013-henkel]
tags: [in-vivo, rat, femoral, segmental-defect, load-bearing]
created: 2026-04-25
updated: 2026-04-25
---

# Rat femoral defect model

## What it is

A critical-size segmental defect (typically 5–10 mm gap, with 5 mm being sub-critical in adult rat and 8–10 mm being critical) is created in the mid-diaphyseal rat femur after exposing the bone via a lateral approach. The scaffold is press-fit or sutured into the gap; mechanical stability is provided by an internal fixator (mini-plate + screws), an intramedullary K-wire, or an external fixator. Unlike the calvarial model, this is a **load-bearing** test — the scaffold experiences compressive, bending, and torsional loads from the moment the animal weight-bears post-op, so brittle-ceramic scaffolds (pure HA, β-TCP) often fail mechanically before biological integration is complete unless paired with a fixator or a polymer composite.

## Why this model for this hypothesis

- The hypothesis is centrally about pore architecture; the rat femoral model adds the mechanical-integration dimension that calvarial does not.
- For a gradient-pore HA scaffold the cortical-mimicking outer (small-pore, dense) zone should provide mechanical strength while the core (large-pore) zone supports vascularization and bone in-growth — exactly the architecture this hypothesis tests. The femoral model is where that architectural claim is most rigorously tested.
- A pure-HA scaffold without composite reinforcement will likely fail mechanically in this model; co-author with a composite (HA-PCL / HA-PLA) approach if going to femoral.

## Typical parameters

- **Strain / age / sex**: Sprague-Dawley or Wistar, 10–16 wk, male.
- **Defect size**: 5 mm (sub-critical, healing baseline) or 8–10 mm (critical-size).
- **Fixator**: mini-plate + screws (most rigid) or external fixator (allows graded loading); intramedullary K-wire for low-load comparators.
- **n**: ≥ 6 animals per group per time point.
- **Time points**: 4, 8, 12, 16 weeks.
- **Readouts**: μCT bone-volume-fraction within the defect, 3-point bending or torsion biomechanical testing of the explanted femur, H&E / Masson's trichrome histology.

## Common pitfalls

- [[../failure-modes/brittle-ceramic-mechanical-failure]] — pure-HA / β-TCP scaffolds often fracture under load before biological integration. Critical to instrument with biomechanical testing at endpoint.
- [[../failure-modes/in-vivo-vs-in-vitro-discordance]] — mechanical demands of the femoral model expose limitations not visible in calvarial or in-vitro studies.
- [[../failure-modes/short-term-proliferation-vs-long-term-bone-formation]] — in-vitro day-14 proliferation does not predict 12-week femoral bone-bridging.
- [[../failure-modes/HA-stoichiometry-affects-resorption]] — HA / TCP ratio affects how fast the scaffold dissolves; mismatched dissolution + bone-formation rates are a common failure mode.

## Sources

- [[../sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]] — micro-porosity on HA scaffolds tested in rat-femoral defect; primary rat calvarial OB and rat-BMSC arms.
- [[../sources/2012-bose-recent-advances-in-bone-tissue-engineeri]] — bone-TE review citing rat-femoral for load-bearing scaffold testing.
- [[../sources/2013-henkel-bone-regeneration-based-on-tissue-engine]] — bone-regeneration review covering rat-femoral as the standard small-animal load-bearing model.
