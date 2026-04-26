---
type: source
id: protocol-2025-landau-a-micro-computed-tomography-based-simpli
source_type: protocol
title: "A Micro-Computed Tomography-Based Simplified Approach to Measure Body Composition, Osteoporosis, and Lung Fibrosis in Mice"
authors: ["Landau, M. B.", "Zou, B.", "Yang, Z.", "Rowan, B. G.", "Anbalagan, M."]
year: 2025
doi: 10.21769/BioProtoc.5207
url: https://bio-protocol.org/e5207
raw_path: raw/protocols/protocol-2025-landau-a-micro-computed-tomography-based-simpli.xml
tags: [protocol, micro-CT, mouse-imaging, bone-mineral-density, osteoporosis-readout, longitudinal-imaging, hounsfield-units]
---

# Summary

Step-by-step Bio-protocol for novice users of in vivo micro-computed tomography (micro-CT) in mice: image acquisition and analysis to quantify body composition (bone, adipose, lean), bone-mineral-density / osteoporosis indicators, and lung fibrosis. Not scaffold-specific, but directly relevant for ex-vivo and in-vivo readout of HA-scaffold-implanted bone (BMD, bone-volume-fraction, scaffold-tissue interface) — provides workflow primitives applicable to a calvarial- or femoral-defect study.

# Key steps (condensed)

1. Anesthetize mouse and position in micro-CT scanner; calibrate with phantom of known radiodensity (Hounsfield units, where dH2O = 0 HU and air = –1000 HU).
2. Acquire scan at appropriate resolution; reconstruct.
3. Segment tissues by HU thresholds (bone, adipose, lean, airspace).
4. Quantify BMD, bone volume, adipose volume, airspace fraction.
5. Repeat longitudinally (live imaging, non-invasive) to reduce cohort size and capture inter-animal variability.

# Methods used

- [[../methods/micro-CT-imaging]]
- [[../methods/micro-CT-bone-volume-quantification]]

# Reagents

- (in vivo; primarily anesthesia/contrast — not enumerated in detail in the abstracted body)

# Organisms

- Mouse (general murine models; not strain-restricted)

# Failure modes flagged

- "Without a standardized protocol for utilization, not only does the reproducibility of research suffer, but it also hinders the ability to build upon the ever-evolving field of structural analysis and to develop an eventual gold standard for body composition characterization." → links generally to scan-protocol-variability, no specific failure-mode in our current vocabulary; relevant to [[../failure-modes/cad-vs-actual-pore-size-mismatch]] insofar as micro-CT is the gold-standard verification of pore architecture.
- HU calibration drift requires phantom-based standardization.

# Notable quotes

- "The benefits of live imaging of murine structures include quantifiable measurements for organic tissue-dependent changes at specific growth stages without inflicting harm or interruption to the life cycle."
- "Most animal tissues do not exceed +2,000 HU and standard clinical limits range from -1,000 to +3,071."
