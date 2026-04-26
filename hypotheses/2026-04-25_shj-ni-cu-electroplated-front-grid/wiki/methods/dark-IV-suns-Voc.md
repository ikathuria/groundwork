---
type: method
slug: dark-IV-suns-Voc
aliases: [Suns-Voc, Sinton method, pseudo-FF, dark IV, J02 extraction]
related_methods: [IV-curve-measurement, EL-electroluminescence-imaging, minority-carrier-lifetime-photoluminescence, SIMS-depth-profile]
key_reagents: [a-Si-H-passivation, ITO-transparent-conductive-oxide]
known_failure_modes: [Voc-degradation-Cu-contamination, Cu-LID-light-induced-degradation, FF-degradation-contact-resistance, a-Si-H-passivation-degradation]
sources: [2010-bartsch-lip-pvsc, 2014-rehman-nicu-plating-csi-review, 2017-jeon-electroless-ni-front-metallization, 2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, 2019-karas-damp-heat-degradation-shj-cu, 2022-karas-cu-outdiffusion-damp-heat, 2023-taiyangnews-heterojunction-technology-report, 2024-lorenz-cutting-edge-metallization-shj-fraunhofer]
tags: [characterization, Suns-Voc, pseudo-FF, J02, Cu-contamination-tracer, Sinton-method]
---

# Dark IV / Suns-Voc

## What it measures / does
Sinton Suns-Voc records the open-circuit voltage as a function of varying flash-light intensity, producing an "implied IV" curve that is free of series-resistance effects. Extracts pseudo fill factor (pFF), dark saturation currents J01 / J02, and the Rs-free efficiency limit (pseudo efficiency). The pFF gap (pFF - FF) isolates Rs from junction-area degradation; J02 increase signals junction-area Cu contamination.

## When to use it
Critical for Cu-plated SHJ reliability work because it isolates Cu-contamination signature from finger-corrosion / contact-resistance signature. Bartsch 2010 uses pFF as the principal monitor across 1700 h thermal-aging; Karas 2019/2022 documents pFF drop + J02 rise as the Cu-out-diffusion fingerprint.

## Key parameters
- Equipment: Sinton Suns-Voc / WCT-120 / FCT-450 / Solar Photometer.
- Flash decay: ~1-10 ms; cell at open-circuit, photovoltage logged vs flash intensity.
- Outputs: pFF (typical 80-84% for high-quality SHJ), pEta, J01, J02, Voc-implied lifetime.
- Reference J02 values: pre-DH ~10⁻⁹ A/cm² for pristine SHJ; >6x increase after Cu-contamination DH (Karas 2022).
- Reference pFF drops: 82.1 -> 77.0% after 2000 h DH on Ni-Cu-Sn (Karas); 79.4 -> 77.9% after 1000 h on Ni-Cu-Ag.

## Common variants / alternatives
- Dark IV — current-driven analogue; complementary.
- [[IV-curve-measurement]] — light IV gives lumped FF; pFF-FF gap is the Rs signature.

## Things to watch for (failure modes)
- [[../failure-modes/Voc-degradation-Cu-contamination]] — primary use case; J02 rise is the key marker.
- [[../failure-modes/Cu-LID-light-induced-degradation]] — Lindroos: bulk Cu defects stable at 200 C, detected via pFF drop.
- [[../failure-modes/FF-degradation-contact-resistance]] — pFF-FF gap isolates Rs from junction degradation.
- [[../failure-modes/a-Si-H-passivation-degradation]] — Voc loss directly probes a-Si:H quality.

## Sources
- [[2010-bartsch-lip-pvsc]] — pFF as primary contamination indicator during accelerated aging at 200 C.
- [[2014-rehman-nicu-plating-csi-review]] — Fraunhofer ISE pFF unchanged after 1700 h at 200 C.
- [[2017-jeon-electroless-ni-front-metallization]] — Voc tracked as primary cell-level metric after anneal.
- [[2019-hatt-noble-bifacial-shj-aip]] — pFF used to interpret limitations.
- [[2019-hatt-noble-shj-solrrl]] — pFF = 80.5% reported on first NOBLE cell.
- [[2019-karas-damp-heat-degradation-shj-cu]] — Suns-VOC for pFF and J02 extraction; foundational DH degradation paper.
- [[2022-karas-cu-outdiffusion-damp-heat]] — Sinton Suns-VOC for pFF / J02 tracking; correlates with SIMS-detected Cu in c-Si.
- [[2023-taiyangnews-heterojunction-technology-report]] — included in HJT IV characterisation sequence.
- [[2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] — pFF reported.
