---
type: method
slug: EQE-measurement
aliases: [external quantum efficiency, spectral response]
related_methods: [IV-curve-measurement, EL-electroluminescence-imaging, four-point-probe-sheet-resistance]
key_reagents: [ITO-transparent-conductive-oxide, a-Si-H-passivation]
known_failure_modes: [Jsc-loss-from-cap-stack-shading, FF-degradation-contact-resistance]
sources: [2022-arena-sundrive-copper-metallisation-demonstration, 2023-tepner-printing-tech-csi-review]
tags: [characterization, spectral-response, optical-loss, shading, current-collection]
---

# EQE Measurement

## What it measures / does
External Quantum Efficiency: the cell's collection probability for photons of each wavelength, measured by illuminating with a monochromator and recording short-circuit current. Decomposes Jsc loss into reflection / shading, parasitic absorption (TCO, a-Si:H), and bulk recombination. Complementary to IV — IV gives the integrated Jsc, EQE shows where the photons are being lost.

## When to use it
Used in conjunction with IV for high-fidelity cell characterisation, particularly when comparing finger-width / shading effects (Tepner 2023 review on screen-printing) and certified record cells (SunDrive ISFH measurement protocol).

## Key parameters
- Wavelength range: 300-1200 nm typical for c-Si.
- Monochromator + lock-in detection, with bias light (1-sun) for SHJ to populate the carrier traps in a-Si:H.
- Triangular vs Gaussian/parabolic finger profile drives differing EQE shading signatures (Tepner 2023).
- Effective shading-relevant finger width wf,eff is extracted from EQE comparison.

## Common variants / alternatives
- [[IV-curve-measurement]] — gives integrated Jsc but no spectral information.
- Reflectance spectroscopy — separates reflection from electrical loss.

## Things to watch for (failure modes)
- [[../failure-modes/Jsc-loss-from-cap-stack-shading]] — primary signature; finger shading drops EQE in 400-1100 nm range.
- [[../failure-modes/FF-degradation-contact-resistance]] — does not show in EQE (a Jsc-side metric); use IV/Suns-Voc instead.

## Sources
- [[2022-arena-sundrive-copper-metallisation-demonstration]] — used along with IV for cell characterisation of record SHJ Cu-plated cells.
- [[2023-tepner-printing-tech-csi-review]] — discussed for shading characterisation in screen-print review.
