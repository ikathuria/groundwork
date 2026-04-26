---
type: method
slug: ICP-MS
aliases: [inductively-coupled-plasma-mass-spectrometry, ICP-OES]
related_methods: [EDX-spectroscopy, XRD-phase-analysis]
key_reagents: []
known_failure_modes: [batch-to-batch-HA-stoichiometry-variation, HA-stoichiometry-affects-resorption]
sources: [2017-eliaz-calcium-phosphate-bioceramics-a-review-o, 2026-thammarakcharoen-comprehensive-toxicological-evaluation-o, 2025-de-carvalho-three-dimensional-printing-of-calcium-ph]
tags: [characterization, elemental-quantification, trace-impurity]
created: 2026-04-25
updated: 2026-04-25
---

# Inductively coupled plasma — mass spectrometry (ICP-MS)

## What it measures / produces

ICP-MS atomises and ionises a sample in an argon plasma, then quantifies element concentrations via mass spectrometry. Output: ng/L–mg/L sensitivity for most elements, including trace heavy metals. ICP-OES (optical emission) is the lower-sensitivity, higher-throughput sibling.

## When to use it

Use ICP-MS for (a) Ca/P stoichiometry of HA powder (more accurate than EDX semi-quantitative), (b) trace heavy-metal impurity quantification (regulatory / ISO-10993 compliance) — used in [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] for 3DPHA toxicology, (c) Si / Sr / Mg ion-release tracking from MBG / doped scaffolds — used in [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] for Ca²⁺ / PO₄³⁻ / Si⁴⁺ release.

## Key parameters

- **Detection limit**: pg/L for most elements.
- **Sample digestion**: HNO₃ + HF for ceramic samples; HNO₃ alone for solutions.
- **Internal standards**: ⁴⁵Sc, ¹¹⁵In standard for drift correction.

## Things to watch for

- [[../failure-modes/batch-to-batch-HA-stoichiometry-variation]] — ICP-MS-verify Ca/P every powder lot for the highest-sensitivity check.
- [[../failure-modes/HA-stoichiometry-affects-resorption]] — Ca/P ratio drives in-vivo dissolution.

## Sources

- [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]] — ICP-MS in CaP characterisation toolkit.
- [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] — ICP-MS for trace heavy-metal impurity in 3DPHA (regulatory floor).
- [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] — ICP-MS for Ca²⁺ / PO₄³⁻ / Si⁴⁺ ion release from CPC/MBG scaffolds.
