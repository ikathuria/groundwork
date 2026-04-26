---
type: method
slug: SIMS-depth-profile
aliases: [secondary ion mass spectrometry, SIMS, ToF-SIMS, dynamic SIMS, depth profile]
related_methods: [minority-carrier-lifetime-photoluminescence, dark-IV-suns-Voc, damp-heat-aging-1000h, extended-damp-heat-IEC63209]
key_reagents: [Cu3Si-intermetallic, ITO-transparent-conductive-oxide, a-Si-H-passivation, silver-Ag-cap, tin-Sn-cap, nickel-sulfamate-bath]
known_failure_modes: [Cu-diffusion-into-c-Si, Cu-out-diffusion-through-cap-stack, Cu3Si-formation-at-Si-interface, Voc-degradation-Cu-contamination, Ni-barrier-pinholes]
sources: [2015-lindroos-cu-lid-aalto-thesis, 2018-electrochemsci-barrier-properties-electroplated-ni, 2022-karas-cu-outdiffusion-damp-heat, 2024-nrel-getting-ahead-of-curve-pv-assessment]
tags: [characterization, SIMS, depth-profile, Cu-detection, forensic, surface-science]
created: 2026-04-26
updated: 2026-04-26
---

# Secondary ion mass spectrometry (SIMS) depth profiling

**Slug:** `methods/SIMS-depth-profile` · **Type:** method

## What it measures / does

Sputters away the sample with a primary ion beam (O₂⁺ for electropositives like Cu / Ni; Cs⁺ for electronegatives) while collecting secondary ions in a mass spectrometer to give a count vs. depth profile of every element of interest. ppb-to-ppm sensitivity for Cu in Si makes SIMS the *definitive* forensic test for whether the Ni / TCO + a-Si:H barrier has held: a non-flat Cu signal at the c-Si interface or in the bulk is the smoking gun for [[failure-modes/Cu-diffusion-into-c-Si]].

## When to use it

Use it as the endpoint test on every accelerated-aging arm — Karas 2022 is the canonical example: SIMS at 0/1000/2000/3500 h DH on Ni-Cu-Sn / EVA samples shows ~3× higher surface Cu than POE sister cells and elevated Cu at the Si surface and bulk. Use it on as-fabricated samples to confirm the Ni barrier is intact pre-stress. Combine with PL / lifetime mapping and pFF / J02 to triangulate barrier failure.

## Key parameters / setpoints

- **Tool (Karas 2022):** PHI Adept 1010 dynamic SIMS, O₂⁺ primary ion beam, 60 × 60 µm raster, 19 × 19 µm detection area.
- **Detection limit for Cu in Si:** ~10¹⁵–10¹⁶ atoms/cm³ (ppb level); sufficient to detect the lifetime-killing Cu interstitial concentration Lindroos quantifies.
- **Depth resolution:** ~5–10 nm for Cu in Si stacks; degraded at high sputter depths.
- **Profile range:** typically 0–5 µm into c-Si under the contact stack; cap layer (Sn/Ag), Cu finger, Ni barrier, TCO, a-Si:H, c-Si all resolved if the calibration standards exist.
- **Cross-section vs depth profile:** in Karas 2022 the cell is sectioned and the cross-section EDS-line-scanned; SIMS done on the planar surface with the contact stack intact.

## Common variants

- **Dynamic SIMS** (Karas 2022) — most-quantitative; uses high primary-ion current.
- **ToF-SIMS** — full mass spectrum at every pixel; lower depth resolution but better for unknown contamination identification.
- **TXRF (total-reflection X-ray fluorescence)** — Lindroos Publication III used for ppb-level Cu / Ni profiling; complementary surface-sensitive technique.
- **STEM-EDS line scan** (Cheng 2018) — analogous depth-resolved compositional check on a thinned cross-section.
- **EDS line scan in SEM** (Karas 2022 secondary tool) — used to map Cu accumulating on the outer Sn/Ag surface.

## Things to watch for

- Quantification requires implant standards in the same matrix; Cu calibration in c-Si vs in Cu finger vs in Ni barrier all need separate standards.
- Sputter-induced mixing artificially broadens sharp interfaces; report interface widths cautiously.
- For the Ni-Cu-Sn / EVA failure mode (Karas), Cu accumulates at the *outer* Sn surface as well as in the c-Si bulk; profile *both* directions, not just downward into Si.
- Ni barrier integrity check: Cu should drop ≥ 4 orders of magnitude across the Ni layer in an as-fabricated sample. Any leak indicates pinholes or insufficient thickness — connect to [[failure-modes/Ni-barrier-pinholes]].
- 2024 NREL emerging-tech report flags SIMS implicit need for "Cu ingress into the cell" diagnosis — i.e. Pass-3 plan must include endpoint SIMS, not assume the Ni barrier holds.

## Related methods

- [[methods/minority-carrier-lifetime-photoluminescence]] — bulk-lifetime consequence of the Cu detected by SIMS.
- [[methods/dark-IV-suns-Voc]] — pFF / J02 shift correlates with the SIMS Cu signal.
- [[methods/damp-heat-aging-1000h]] / [[methods/extended-damp-heat-IEC63209]] — the stress regimes SIMS forensically diagnoses.

## Citing sources

- [[sources/2015-lindroos-cu-lid-aalto-thesis]] — referenced for Cu / Ni profiling in bulk Si (TXRF used in Publication III).
- [[sources/2018-electrochemsci-barrier-properties-electroplated-ni]] — STEM-EDS line scan plays the analogous depth-resolved compositional role.
- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — primary evidence for Cu ingress into c-Si bulk; PHI Adept 1010, O₂⁺ primary ion beam, 60×60 µm raster, 19×19 µm detection area; 3× higher Cu in EVA-sister cells vs POE at 3500 h DH.
- [[sources/2024-nrel-getting-ahead-of-curve-pv-assessment]] — implicit; "Cu ingress into the cell" is the failure mode SIMS detects.
