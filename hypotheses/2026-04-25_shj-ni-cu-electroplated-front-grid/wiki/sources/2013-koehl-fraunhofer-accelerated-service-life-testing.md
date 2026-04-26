---
type: source
id: 2013-koehl-fraunhofer-accelerated-service-life-testing
source_type: protocol
title: "Accelerated Service Life Testing of Photovoltaic Modules"
authors: ["Köhl, M."]
year: 2013
doi: ""
url: https://www.nist.gov/system/files/documents/el/building_materials/SLP-koehl-130305.pdf
raw_path: raw/protocols/2013-koehl-fraunhofer-accelerated-service-life-testing.pdf
tags: [accelerated-testing, damp-heat, climate, Fraunhofer-ISE, methodology, service-life]
created: 2026-04-26
updated: 2026-04-26
---

# Accelerated Service Life Testing of Photovoltaic Modules

**Köhl, M. (Fraunhofer ISE)** — *Service Life Prediction of Polymeric Materials Conference, Monterey, March 2013*. DOI: —

## Summary

Fraunhofer ISE's methodology slide deck on how to design accelerated-aging chamber tests that actually predict 25-year field service life rather than merely screen infant mortality. Builds the bridge from monitored macro-climate (ambient T, humidity, irradiance) to *micro-climate* (module temperature, internal water concentration, UV dose) and then to chamber test conditions, including FEM simulation of water vapor ingress and an Arrhenius reciprocity ttest = (Ii/Itest)^p · ti · exp[-(Ea/R)(1/Ttest − 1/Ti)] for translating accelerated-test hours into field-equivalent years.

## Key claims

- **Damp heat testing 85% RH @ 85°C** is the conventional accelerated chamber condition; Köhl shows FEM-simulated water concentration in the encapsulant approaches saturation under DH, validating that 85/85 is a valid corrosion accelerant — i.e. the IEC 61215 condition is mechanistically appropriate for the encapsulant-corrosion failure family the SHJ Ni/Cu hypothesis must survive.
- **Type approval ≠ life test:** "No life tests, even when harsher test conditions are applied" — restates the limitation noted by Wohlgemuth/NREL but from the European/Fraunhofer perspective.
- **Microclimate modelling:** module temperature is computed via Faiman's correlation Tmod = Tamb + H/(U0 + U1·v), with cell-technology-specific U0 / U1 coefficients (c-Si: U0 = 30.0, U1 = 6.2). For SHJ-class modules this yields Tmod time-series histograms used to bound chamber temperature.
- **UV dose budget:** UV ≈ 5% of global irradiation in plane-of-array; a "5-suns + elevated temperature" UV chamber test of ~1000 h corresponds to 25 years of desert-climate UV, modulated by activation energy (Arrhenius).
- **Reference reliability sites:** Sede Boqer (arid, Israel), Serpang (tropical, Indonesia), Pozo Izquierdo (maritime, Gran Canaria), Zugspitze (alpine, Germany), Freiburg (Germany) — the canonical Fraunhofer multi-climate outdoor benchmark used to calibrate accelerated tests.
- **Diagnostic spectroscopy after DH:** Raman spectroscopy of the vinyl band vs the fluorescence background reveals encapsulant degradation after 4000 h DH; the same spectroscopic check should be in the SHJ Ni/Cu plan to catch EVA discoloration / acetic-acid generation that drives Cu-finger corrosion.

## Methods used

- [[methods/damp-heat-aging-1000h]] — IEC 61215 baseline; Köhl shows FEM water-uptake validation that 85/85 is mechanistically the right encapsulant-corrosion screen.
- [[methods/extended-damp-heat-IEC63209]] — Köhl's "go beyond 1000 h" philosophy and Arrhenius extrapolation underlies the later IEC 63209 extended-DH protocol used for emerging tech reliability assessment.
- [[methods/UV-preconditioning]] — UV-dose model (5% of global irradiation) used to size accelerated UV chamber runs.
- [[methods/EL-electroluminescence-imaging]] — slide deck shows EL imaging of degraded cells after 4000 h DH as the per-checkpoint diagnostic.
- [[methods/IV-curve-measurement]] — STC power per checkpoint.

## Reagents

- [[reagents/EVA-encapsulant]] — focal degrading polymer (vinyl band loss after 4000 h DH visible by Raman).

## Failure modes flagged

- [[failure-modes/EVA-acetic-acid-corrosion]] — Köhl's FEM water-ingress simulation is the mechanistic anchor for why DH drives EVA hydrolysis and acetic-acid build-up.
- [[failure-modes/Cu-finger-corrosion-encapsulant]] — the chemical environment Köhl simulates (saturated water in encapsulant at 85°C) is exactly the regime in which Cu fingers corrode.
- [[failure-modes/finger-adhesion-loss-after-DH]] — encapsulant elasticity loss after DH directly drives interface delamination.

## Supports / contradicts

- **Supports:** [[sources/2012-nrel-iec61215-what-it-is]] — independent (Fraunhofer) confirmation that 1000 h IEC 61215 DH is the right corrosion screen but not a 25-year test.
- **Supports:** [[sources/2024-nrel-getting-ahead-of-curve-pv-assessment]] — both papers argue that emerging-tech (here Cu plating) requires extended/tailored accelerated tests, not just IEC 61215 retest.

## Notable quotes

> "High quality is ensured by type approval testing (IEC 61215 and IEC 61646) — Infant mortality tests, no life tests, even when harsher test conditions are applied." — *opening "Reliability" slide*

> "Damp-heat testing 85% rh @ 85°C" — annotated FEM water-concentration plot, *Hülsmann simulation slide*
