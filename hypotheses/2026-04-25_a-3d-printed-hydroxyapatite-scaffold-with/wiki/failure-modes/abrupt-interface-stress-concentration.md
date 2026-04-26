---
type: failure-mode
slug: abrupt-interface-stress-concentration
severity: medium
frequency_estimate: dominant in biphasic / triphasic scaffolds — clinical re-tear rates 15–94% in tendon-bone repair
applies_to_methods: [mechanical-compression-testing, finite-element-analysis, gradient-pore-design]
applies_to_reagents: [hydroxyapatite, beta-tricalcium-phosphate, polycaprolactone, polylactic-acid]
applies_to_step_kinds: [scaffold-design, mechanical-testing, claim]
sources: [2025-liu, 2025-xie]
tags: [interface, stress-concentration, biphasic, multiphasic, gradient, mechanics]
created: 2026-04-25
updated: 2026-04-25
---

# Abrupt-interface stress concentration

## What it is

Bone-soft-tissue interfaces (osteochondral, tendon-bone, ligament-bone) in the body are continuous gradients in mineralization, composition, and mechanical modulus. Engineered scaffolds that approximate this with discrete biphasic (2 layers) or triphasic (3 layers) construction concentrate stress at the layer interfaces because of the stepwise modulus mismatch — the same physical principle as cleavage failure at a metal-ceramic bond. Re-tear rates clinically: 20–94% for rotator-cuff repair (Heuberer 2017; Zhao 2017). For monolithic bone scaffolds the effect is subtler but real: any uniform-pore scaffold abutting native bone has a sharp interface that concentrates stress.

## How it manifests

- Liu 2025: "Compared to other reconstruction methods, which often struggle to address the stiffness differences between various tissues, gradient scaffolds gradually transition the mechanical properties of materials, effectively alleviating stress concentrations" [[../sources/2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]].
- Xie 2025: clinical re-tear rates 20–94% in rotator-cuff repair attributed to abrupt scaffold interfaces [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]].
- Liu 2025 explicitly traces design evolution: single-phase → biphasic → triphasic → multiphasic → continuous gradient — the trend is exactly toward smoother gradients to reduce stress concentration [[../sources/2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]].
- FEA shows interface stress amplification ≥ 2× under physiological loads at sharp modulus mismatches.
- For monolithic bone scaffolds at the implant-bone boundary: a uniform-modulus scaffold abutting cortical / cancellous bone has stress-amplification at this implant-tissue boundary, contributing to peri-implant bone resorption / aseptic loosening (related to [[../failure-modes/stress-shielding-from-uniform-stiffness-implants]]).

## How to detect it

- FEA the scaffold + bone defect; identify regions of stress > 2× nominal at interfaces. Compare uniform vs gradient scaffold designs.
- Compression-fracture testing of biphasic / multiphasic scaffolds: failure typically initiates at the interface; with continuous gradient, failure initiates at the lowest-modulus region (less localized).
- In-vivo: at 4 and 12 weeks post-implant, micro-CT bone volume in the peri-implant zone vs distant; gradient designs typically show better bone-volume retention.
- Cell distribution at scaffold-bone interface: discontinuous mineralized matrix at biphasic interfaces vs continuous through gradient designs (Conoscenti 2025 analogue) [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]].

## Mitigation

- **Use continuous gradients rather than biphasic / multiphasic scaffolds** — exactly the design choice in the proposed hypothesis (continuous radial 100→500 μm gradient) [[../sources/2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]], [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]].
- Smooth modulus transitions — implementable via TPMS / gyroid topology with continuously varying parameters [[../sources/2017-zhang-additively-manufactured-scaffolds-for-bo]] (cross-link).
- For implant-tissue boundary: design outer rim of scaffold to mechanically match adjacent cortical bone (modulus, strength), thus avoiding a step at this critical interface [[../sources/2026-zhao-longitudinal-and-radial-microgradients-i]] (cross-link).
- Multi-material extrusion / coaxial printing can implement composition gradients alongside structural gradients — Liu 2025 surveys techniques [[../sources/2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]], [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]].
- For the gradient-pore HA hypothesis: demonstrate continuity of the gradient by μCT with no measurable step (slope, not staircase, in pore-size vs radial position).

## Original sources / evidence

- [[../sources/2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]] — explicit framing: gradient scaffolds outperform abrupt biphasic / triphasic for stress dissipation and cellular integration.
- [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]] — clinical re-tear-rate motivation; bibliometric analysis shows porosity gradients dominant.

## Affects

- Methods: [[../methods/mechanical-compression-testing]], [[../methods/finite-element-analysis]], [[../methods/gradient-pore-design]]
- Reagents: [[../reagents/hydroxyapatite]], [[../reagents/beta-tricalcium-phosphate]], [[../reagents/polycaprolactone]], [[../reagents/polylactic-acid]]
