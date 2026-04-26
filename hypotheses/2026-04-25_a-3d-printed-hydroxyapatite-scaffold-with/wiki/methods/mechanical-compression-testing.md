---
type: method
slug: mechanical-compression-testing
aliases: [compressive-testing, uniaxial-compression, modulus-measurement]
related_methods: [finite-element-analysis, micro-CT-imaging, computational-fluid-dynamics-permeability]
key_reagents: [hydroxyapatite, beta-tricalcium-phosphate]
known_failure_modes: [brittle-ceramic-mechanical-failure, sintering-shrinkage-pore-deviation, stress-shielding-from-uniform-stiffness-implants, abrupt-interface-stress-concentration]
sources: [2018-zhang-effect-of-microporosity-on-scaffolds-for, 2017-bose-additive-manufacturing-of-biomaterials, 2017-zhang-additively-manufactured-scaffolds-for-bo, 2023-koushik-bone-tissue-engineering-scaffolds-functi, 2025-tang-advances-in-3d-printed-scaffolds-for-bon, 2012-bose-recent-advances-in-bone-tissue-engineeri, 2013-henkel-bone-regeneration-based-on-tissue-engine, 2014-polo-corrales-scaffold-design-for-bone-regeneration, 2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp, 2015-baino-bioceramics-and-scaffolds-a-winning-comb, 2017-gao-bone-biomaterials-and-interactions-with, 2016-murphy-scaffolds-and-cells-for-tissue-regeneration, 2025-conoscenti-continuous-pore-size-gradient-enhances-z, 2022-yang-gaussian-curvature-driven-direction-of-c, 2026-zhao-longitudinal-and-radial-microgradients-i]
tags: [mechanical-characterization, scaffold-strength, modulus]
created: 2026-04-25
updated: 2026-04-25
---

# Mechanical compression testing

## What it measures / produces

Uniaxial compression of a scaffold sample between flat platens, recording load-displacement, computing engineering or true stress-strain curves, and extracting compressive modulus, yield strength, ultimate strength, and strain to failure. Output: scaffold modulus (MPa) and strength benchmarked against native bone targets.

## When to use it

Use compression testing (a) to verify the gradient-vs-uniform scaffolds match (or differ) on bulk modulus, (b) to confirm the cortical-mimicking outer shell carries load, (c) to track sintering-schedule effects on density and modulus.

## Key parameters

- **Native bone targets**: cortical bone E ~10–20 GPa; cancellous bone E = 50–500 MPa, tensile strength 1.2–20 MPa, K_IC = 0.1 MPa·m^(1/2) [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]] [[../sources/2026-zhao-longitudinal-and-radial-microgradients-i]] (rabbit femur 5–15 MPa local modulus).
- **PCL composite scaffold moduli**: PCL alone 187 MPa, PCL/HA 239 MPa, PCL/TCP 247 MPa, PCL/Bioglass 343 MPa [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]].
- **Strain rate**: 1 mm/min (quasi-static) standard; 0.5–10 mm/min acceptable range.
- **Sample geometry**: cylindrical or cuboid; aspect ratio ≥1.5 to avoid end effects.

## Common variants

- **Wet (PBS-immersed) testing** — closer to in-vivo; lower modulus than dry.
- **Hydrated cell-seeded scaffolds** — for matured-construct mechanics.
- **Cyclic / fatigue testing** — for long-term durability.
- **Three-point or four-point bend** — alternative to compression for thin samples.

## Things to watch for

- [[../failure-modes/brittle-ceramic-mechanical-failure]] — sintered HA struts have low strain-to-failure; compression curves often show abrupt fracture rather than progressive yielding.
- [[../failure-modes/sintering-shrinkage-pore-deviation]] — modulus depends strongly on as-built density; report sintering schedule with mechanical data.
- [[../failure-modes/stress-shielding-from-uniform-stiffness-implants]] — uniform-stiffness scaffolds over-stiffen mid-shaft and under-support metaphyseal regions.
- [[../failure-modes/abrupt-interface-stress-concentration]] — discrete-zone gradient scaffolds with sharp pore-size transitions concentrate stress at interfaces.

## Sources

- [[../sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]] — compressive strength vs microporosity.
- [[../sources/2017-bose-additive-manufacturing-of-biomaterials]] — compression of binder-jet β-TCP / robocast HA.
- [[../sources/2017-zhang-additively-manufactured-scaffolds-for-bo]] — FEA-paired compression for AM scaffolds.
- [[../sources/2023-koushik-bone-tissue-engineering-scaffolds-functi]] — compression in functional BTE.
- [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]] — compression updates.
- [[../sources/2012-bose-recent-advances-in-bone-tissue-engineeri]] — early compression review.
- [[../sources/2013-henkel-bone-regeneration-based-on-tissue-engine]] — compression in translation pipeline.
- [[../sources/2014-polo-corrales-scaffold-design-for-bone-regeneration]] — compression in scaffold-design review (porosity / strength tradeoff).
- [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]] — compression in BTE comparison.
- [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]] — compression in ceramic scaffold review.
- [[../sources/2017-gao-bone-biomaterials-and-interactions-with]] — compression in bone-biomaterial review (modulus-mismatch problem).
- [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]] — compression in scaffold-cell interaction review.
- [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] — compression of TIPS PLLA gradient scaffolds; gradient less stiff than uniform small-pore.
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — compression of TPMS β-TCP scaffolds.
- [[../sources/2026-zhao-longitudinal-and-radial-microgradients-i]] — compression of native rabbit femur slices: 15 MPa mid-shaft → 5 MPa at ends, the design-target benchmark.
