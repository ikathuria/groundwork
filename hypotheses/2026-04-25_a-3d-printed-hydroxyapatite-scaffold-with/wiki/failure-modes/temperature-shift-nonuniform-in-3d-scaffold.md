---
type: failure-mode
slug: temperature-shift-nonuniform-in-3d-scaffold
severity: low
frequency_estimate: case-by-case — applies only when hFOB 1.19 (or other temperature-sensitive cell line) is the model
applies_to_methods: [osteogenic-differentiation-induction, alamarBlue-proliferation-assay, qPCR, ALP-activity-assay]
applies_to_reagents: [hydroxyapatite]
applies_to_step_kinds: [culture, temperature-shift, sampling]
sources: [cellosaurus-hfob-1-19-cvcl3708]
tags: [hFOB, temperature-shift, SV40-tsLT, 3D-scaffold, thermal-equilibration]
created: 2026-04-25
updated: 2026-04-25
---

# Temperature shift non-uniform in 3D scaffold

## What it is

hFOB 1.19 (CVCL_3708, ATCC CRL-11372) is a conditionally immortalized human fetal osteoblast cell line bearing temperature-sensitive SV40 large T antigen (SV40-tsLT). It proliferates at the permissive 33.5 °C (where SV40-tsLT is active) and shifts toward osteoblast differentiation at the restrictive 39.5 °C (where SV40-tsLT is inactivated). For 2D culture this temperature shift is fast (minutes). For a 3D porous HA scaffold ≥ 5 mm thick the thermal-mass + porosity-driven thermal-resistance creates radial temperature gradients during the shift: outer cells equilibrate quickly, core cells lag by 5–30 minutes, and persistent gradients of < 1 °C across the scaffold can mean the core stays partially permissive even at "39.5 °C." Differentiation/proliferation is then inhomogeneous across pore depth in a way that confounds the gradient-pore comparison.

## How it manifests

- Cellosaurus record explicitly: "Temperature shift is non-instantaneous and non-uniform in a 3D scaffold: a porous HA scaffold has thermal-mass and convective gradients that mean the core may not equilibrate to 39.5 °C as quickly as the surface, so 'differentiation' is inhomogeneous across pore depth. For this hypothesis's gradient-pore scaffold, this confounds spatial readouts." [[../sources/cellosaurus-hfob-1-19-cvcl3708]]
- Consequence: cells in scaffold core remain in permissive regime longer than expected → continue proliferating while surface cells differentiate; gradient of phenotypes that mimics or confounds a real pore-size-driven gradient.
- Day-N readouts depend on whether cells across the scaffold radius were truly synchronized to the differentiation temperature.

## How to detect it

- Insert a thin thermocouple into the scaffold center pre-experiment; record T(t) during shift from 33.5 °C → 39.5 °C. If equilibration time > 5 min, gradient is non-trivial.
- Image-based: cell-cycle marker (Ki67) at multiple radial bins after temperature shift; gradient indicates non-uniform shift.
- qPCR for SV40-tsLT-active vs inactive markers (the temperature-sensitive antigen has measurable expression differences) at outer vs inner bins.
- Compare hFOB 1.19 results on 2D plate vs 3D scaffold same condition; > 20% kinetic difference can be temperature-shift artifact.

## Mitigation

- **Run the proliferation experiment at constant 33.5 °C throughout** — keep cells in proliferation regime, don't trigger the temperature shift. The hypothesis is about proliferation; differentiation is out of scope. The Cellosaurus record explicitly: "A day-14 proliferation endpoint should be run at 33.5 °C throughout." [[../sources/cellosaurus-hfob-1-19-cvcl3708]]
- For differentiation experiments: pre-equilibrate the entire scaffold + media + plate at 39.5 °C for ≥ 30 min before adding cells (or transfer the seeded scaffold to a pre-equilibrated 39.5 °C incubator); allow the system to equilibrate from outside-in.
- Consider switching to **non-temperature-sensitive cell line** (MC3T3-E1 Subclone 4, hBMSC, primary osteoblast) for 3D-scaffold work, where thermal non-uniformity is irrelevant. hFOB has utility in 2D mechanism studies but adds complexity in 3D.
- Use thinner scaffolds (≤ 3 mm) if hFOB temperature shift is necessary for the experimental design.
- Bake thermal-equilibration into the protocol explicitly; document the time-to-equilibrium and shift it to the analysis as an offset.
- Note: G418 selection for the Tn5 neo marker should not be dropped during expansion (avoid line drift) [[../sources/cellosaurus-hfob-1-19-cvcl3708]].

## Original sources / evidence

- [[../sources/cellosaurus-hfob-1-19-cvcl3708]] — explicit warning about non-uniform temperature shift in 3D porous HA scaffold; permissive vs restrictive temperature regimes; recommendation to run proliferation experiments at 33.5 °C.

## Affects

- Methods: [[../methods/osteogenic-differentiation-induction]], [[../methods/alamarBlue-proliferation-assay]], [[../methods/qPCR]], [[../methods/ALP-activity-assay]]
- Reagents: [[../reagents/hydroxyapatite]]
