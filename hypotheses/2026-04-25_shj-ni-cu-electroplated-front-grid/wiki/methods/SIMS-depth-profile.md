---
type: method
slug: SIMS-depth-profile
aliases: [secondary ion mass spectrometry, dynamic SIMS, SIMS depth profile, STEM-EDS depth profile]
related_methods: [minority-carrier-lifetime-photoluminescence, EL-electroluminescence-imaging, dark-IV-suns-Voc]
key_reagents: [silver-Ag-cap, tin-Sn-cap, EVA-encapsulant, POE-polyolefin-encapsulant]
known_failure_modes: [Cu-out-diffusion-through-cap-stack, Cu-diffusion-into-c-Si, Cu3Si-formation-at-Si-interface]
sources: [2015-lindroos-cu-lid-aalto-thesis, 2017-jeon-electroless-ni-front-metallization, 2018-electrochemsci-barrier-properties-electroplated-ni, 2022-karas-cu-outdiffusion-damp-heat]
tags: [characterization, depth-profile, Cu-tracking, STEM-EDS, contamination-analysis]
---

# SIMS Depth Profile

## What it measures / does
Dynamic Secondary Ion Mass Spectrometry sputters through a sample with a primary ion beam (commonly O2+ or Cs+) while detecting secondary ions, producing a depth profile of trace elements (Cu, Ni, Sn) at ppm-ppb sensitivity. STEM-EDS (Cheng 2018) and TXRF (Lindroos 2015) serve analogous roles for depth- and surface-resolved Cu detection. Critical for tracking Cu out-diffusion into the encapsulant and Cu in-diffusion into the c-Si bulk, both of which are sub-detection-limit for SEM-EDS.

## When to use it
Use after damp heat to localise Cu accumulation: surface (cap-failure), bulk encapsulant (corrosion sink), and c-Si (bulk-recombination Cu-LID precursor). Karas 2022 shows ~3x more Cu at Si surface in EVA than POE samples after 3500 h DH.

## Key parameters
- Instrument: PHI Adept 1010 dynamic SIMS (Karas 2022).
- Primary beam: oxygen, 60 x 60 um raster.
- Profile depth: micrometres into the cap stack and c-Si emitter.
- Sample prep: encapsulant strip, then sputter-clean.
- Detection limit: ppb-level for Cu in Si (Lindroos: interstitial Cu diffuses through 400 um wafer in <11 h at RT).
- STEM-EDS alternative (Cheng 2018): cross-sectional 300 C / 500 C profiles of Cu/Ni(120 nm)/Si stack; resolves ~100 nm Ni metal + ~200 nm Ni-silicide bilayer.

## Common variants / alternatives
- TXRF (Lindroos) — surface-only, near-surface Cu chemical analysis.
- STEM-EDS cross-section — spatially resolved depth profile.
- ToF-SIMS — higher mass resolution but slower depth profiling.

## Things to watch for (failure modes)
- [[../failure-modes/Cu-out-diffusion-through-cap-stack]] — primary signature in Karas 2022: Cu at Sn / Ag cap surface after DH.
- [[../failure-modes/Cu-diffusion-into-c-Si]] — sub-ppm Cu in c-Si emitter strongly correlates with pFF loss; only SIMS can detect.
- [[../failure-modes/Cu3Si-formation-at-Si-interface]] — XRD + STEM-EDS confirms Cu3Si grains at 500 C anneal in Cu/Ni(120 nm) (Cheng 2018).

## Sources
- [[2015-lindroos-cu-lid-aalto-thesis]] — TXRF chemical analysis of near-surface Cu after RT out-diffusion; canonical Cu-in-Si reference.
- [[2017-jeon-electroless-ni-front-metallization]] — TEM cross-section serves equivalent role to SIMS for resolving silicide layer growth.
- [[2018-electrochemsci-barrier-properties-electroplated-ni]] — STEM-EDS at 300 C and 500 C; resolves Ni metal + Ni-silicide bilayer; documents Cu3Si grain growth.
- [[2022-karas-cu-outdiffusion-damp-heat]] — definitive plated-Cu DH reference: SIMS into c-Si shows 3x more Cu in EVA than POE; correlates with pFF / J02 degradation.
