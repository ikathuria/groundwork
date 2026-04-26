---
type: organism
slug: hFOB-1.19
organism_type: cell-line
source: ATCC
external_id: CVCL_3708 (Cellosaurus); ATCC CRL-11372
characteristics:
  - human (female) fetal limb-bone osteoblast, conditionally immortalized with temperature-sensitive SV40 large T antigen (SV40-tsLT) plus Tn5 neo selection marker
  - proliferates at 33.5 °C (permissive — SV40-tsLT active); shifts toward osteoblast differentiation at 39.5 °C (restrictive — SV40-tsLT inactivated)
  - non-tumorigenic despite SV40-tsLT presence (the temperature-sensitive variant)
  - patented cell line; "space-flown" on STS-80
  - phenol-red-free DMEM/F-12 + G418 selection in maintenance
known_failure_modes: [proliferation-vs-differentiation-tradeoff, temperature-shift-nonuniform-in-3d-scaffold, cell-line-misidentification, HA-autofluorescence-confounds-livedead, edge-effect-in-scaffold-cell-seeding]
sources: [cellosaurus-hfob-1-19-cvcl3708]
tags: [cell-line, human, fetal, osteoblast, conditionally-immortalized, temperature-sensitive]
created: 2026-04-25
updated: 2026-04-25
---

# hFOB 1.19 — conditionally immortalized human fetal osteoblast

## What it is

hFOB 1.19 is a female human fetal-limb-bone osteoblast line conditionally immortalized with a temperature-sensitive SV40 large T antigen (SV40-tsLT) plus a Tn5-neo selection marker (Harris et al. 1995). The line proliferates at the permissive temperature (33.5 °C, where SV40-tsLT is active and drives the cell cycle) and shifts toward an osteoblast-differentiation program at the restrictive temperature (39.5 °C, where SV40-tsLT is inactivated). Because it is non-tumorigenic, diploid, and human, it is the cleanest "near-physiological human osteoblast" cell line available — but the temperature-shift requirement makes it operationally awkward, especially in 3D-scaffold work. See [[../sources/cellosaurus-hfob-1-19-cvcl3708]].

## Growth conditions

- **Medium**: 1:1 DMEM/F-12 + 10% FBS + 0.3 mg/mL G418 (Geneticin), **phenol-red-free** (phenol red has weak estrogenic activity that confounds bone-cell readouts).
- **Atmosphere**: 5% CO₂, humidified.
- **Temperature (proliferation)**: **33.5 °C** — required for SV40-tsLT activity and active proliferation.
- **Temperature (differentiation)**: shift to **39.5 °C** for ~7–14 days to drive ALP / mineralization. The shift is the line's defining experimental feature.
- **Subculturing**: 0.05% trypsin-EDTA at ~80% confluence; G418 selection should be maintained continuously to prevent loss of SV40-tsLT (Tn5-neo can drift if G418 is dropped during expansion).
- **Source**: ATCC CRL-11372 (canonical purchase). Patented line — confirm licensing for industrial / GMP use; academic use is covered under standard ATCC purchase.

## Common variants

- **hFOB/ER9** (CVCL_DG20) — ERα-overexpressing derivative used in estrogen-signalling work; not appropriate for the standard pore-architecture proliferation hypothesis.

## Why pick hFOB-1.19 for this hypothesis (vs MC3T3-E1 / Saos-2 / hBMSC)

- **+** Human, diploid, near-physiological — addresses the central weakness of MC3T3-E1 (mouse) and Saos-2 (cancer).
- **+** Same line gives both a proliferation phase (33.5 °C) and a differentiation phase (39.5 °C) on demand.
- **−** **The temperature shift is non-instantaneous and non-uniform across a 3D porous HA scaffold.** A radial-gradient pore scaffold has different thermal mass and convective flow at the dense-cortical outer rim vs the porous core; "differentiation" readouts will be inhomogeneous along the pore-size gradient — confounding the very axis the hypothesis is trying to interrogate. See [[../failure-modes/temperature-shift-nonuniform-in-3d-scaffold]].
- **−** Slower proliferation than MC3T3-E1; primary-endpoint (day-14 DNA / metabolic) effect sizes will be smaller.
- **−** G418 selection requires continuous maintenance.
- For this hypothesis: **run hFOB exclusively at 33.5 °C for the proliferation primary endpoint** and avoid the temperature shift on the gradient-pore scaffold to keep the radial-gradient readout interpretable. If a differentiation arm is needed, run it on a second flat-control scaffold.

## Common pitfalls

- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — hFOB is the canonical example: at 33.5 °C cells proliferate but don't fully differentiate; at 39.5 °C they differentiate but proliferate slowly. Day-14 endpoints must specify the temperature.
- [[../failure-modes/temperature-shift-nonuniform-in-3d-scaffold]] — central pitfall *for this hypothesis*. The radial pore-size gradient creates a thermal gradient that confounds the temperature-shift differentiation program.
- [[../failure-modes/cell-line-misidentification]] — STR profile is less commonly run on hFOB; authenticate on receipt.
- [[../failure-modes/HA-autofluorescence-confounds-livedead]] — applies to all calcein-AM/EthD readouts on HA scaffolds.
- [[../failure-modes/edge-effect-in-scaffold-cell-seeding]] — applies; pair static seeding with dynamic perfusion if uniform infiltration is needed.
- G418 selection drift — if G418 is dropped during scaffold expansion, the SV40-tsLT cassette can be lost.

## Sources

- [[../sources/cellosaurus-hfob-1-19-cvcl3708]] — canonical Cellosaurus catalog for CVCL_3708; SV40-tsLT mechanism, supplier xrefs, temperature-shift protocol notes, the hypothesis-specific 3D-scaffold thermal-gradient warning.
