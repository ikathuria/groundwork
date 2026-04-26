---
type: method
slug: minority-carrier-lifetime-photoluminescence
aliases: [μ-PCD, QSSPC, photoluminescence imaging, PL imaging, lifetime mapping, minority-carrier lifetime]
related_methods: [SIMS-depth-profile, EL-electroluminescence-imaging, dark-IV-suns-Voc, IV-curve-measurement, laser-ablation-of-dielectric]
key_reagents: [a-Si-H-passivation, ITO-transparent-conductive-oxide, Cu3Si-intermetallic]
known_failure_modes: [Cu-LID-light-induced-degradation, Cu-diffusion-into-c-Si, Voc-degradation-Cu-contamination, a-Si-H-passivation-degradation]
sources: [2015-lindroos-cu-lid-aalto-thesis, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration]
tags: [characterization, lifetime, photoluminescence, PCD, QSSPC, Cu-LID]
created: 2026-04-26
updated: 2026-04-26
---

# Minority-carrier lifetime / photoluminescence imaging

**Slug:** `methods/minority-carrier-lifetime-photoluminescence` · **Type:** method

## What it measures / does

Quantifies the bulk minority-carrier lifetime τ in a Si wafer or finished cell precursor, either as a single-point or a 2D spatial map. Three classical implementations: μ-PCD (microwave-photoconductance decay) injects a laser pulse and tracks the conductance decay; QSSPC (quasi-steady-state photoconductance, Sinton WCT) infers lifetime vs injection level from a flash transient; PL imaging captures the steady-state band-edge luminescence under bias light, which scales with τ. Lindroos 2015 used all three across the six papers in the thesis to establish that *Cu in Si bulk* is a recombination-active defect.

## When to use it

Use it whenever a *bulk* failure mode is suspected — Cu contamination, Ni in-diffusion, B-O LID, surface passivation drift. It is the upstream diagnostic to pFF / Voc loss in finished cells. For the SHJ Ni/Cu hypothesis, lifetime mapping before and after plating (and after each accelerated stress) is the cleanest way to verify the Ni barrier holds: a drop in τ on the bulk c-Si under the Cu finger is the smoking gun for [[failure-modes/Cu-diffusion-into-c-Si]] and [[failure-modes/Cu-LID-light-induced-degradation]]. Hatt 2021 uses PL imaging at 1-sun to assess passivation damage from laser ablation.

## Key parameters / setpoints

- **μ-PCD:** 904 nm laser pulse (~200 ns), microwave probe, sample at 25 °C; resolution ~50–100 µm; injection level ~10¹⁵ cm⁻³.
- **QSSPC (Sinton WCT-120):** 1-sun-equivalent flash, exponential decay; coil-coupled photoconductance; reports τ_eff vs injection.
- **PL imaging:** 800–810 nm laser excitation, Si-CCD camera with 950 nm long-pass filter; 1-sun-equivalent uniform illumination; exposure 0.5–10 s.
- **Lindroos 2015 derived parameters:** Cu interstitial diffusivity D_Cu,in(T) = (3.0 ± 0.3) × 10⁻⁴ exp(−0.18 eV / k_B T) cm²/s; Cu solubility S_Cu(T) = 5×10²² exp(2.4 − 1.49 eV/k_B T) cm⁻³; Cu defect levels in Si (E_C −0.15 to −0.20 eV interstitial, multiple substitutional levels).
- **Cu-LID signature (Lindroos):** lifetime collapse under illumination, defects stable at 200 °C, eliminated only by negative surface charging (corona / Al₂O₃).

## Common variants

- **PL imaging at 1-sun bias** (Hatt 2021) — passivation-damage assessment after laser steps.
- **TXRF (total-reflection X-ray fluorescence)** — used in Lindroos Publication III for Cu / Ni profiling at ppb level, complementary to PL.
- **Bulk vs surface decomposition** — vary wafer thickness or surface passivation to separate τ_bulk from τ_surf.
- **Injection-dependent QSSPC** — extracts the recombination-defect signature (SRH fit gives Et and σ).

## Things to watch for

- "Ni diffuses as fast as Cu in Si" (Lindroos Publication VI) — a leaky Ni barrier, or out-diffusing Ni from the cap stack, has its *own* bulk-recombination risk independent of Cu. Don't assume Ni in the bulk is innocuous.
- Cu-LID is a *bulk* effect that 200 °C anneals do not reverse — DH at 85 °C is well below the recovery threshold, so any Cu reaching the bulk under DH will cumulatively poison τ.
- Surface passivation degradation can mimic bulk lifetime loss; corona-charge or Al₂O₃ overcap to discriminate.
- For SHJ, the a-Si:H surface passivation is so good (τ > 5 ms) that even sub-ppb bulk contamination is detectable in QSSPC.
- For the hypothesis Pass-3 design, lifetime mapping at 0/250/500/750/1000 h DH on each arm is the highest-information-density bulk-Cu probe — pair with SIMS at the endpoint.

## Related methods

- [[methods/SIMS-depth-profile]] — direct elemental Cu measurement; lifetime is the *consequence*.
- [[methods/EL-electroluminescence-imaging]] — finished-cell counterpart (forward-bias luminescence).
- [[methods/dark-IV-suns-Voc]] — pFF tracks lifetime through J02; same recombination physics.
- [[methods/IV-curve-measurement]] — Voc on the finished cell scales with bulk τ.

## Citing sources

- [[sources/2015-lindroos-cu-lid-aalto-thesis]] — primary characterisation tool across all six publications (μ-PCD, QSSPC, photoluminescence); quantitative diffusivity / solubility data.
- [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — PL imaging at 1-sun to assess passivation damage from laser.
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — PL imaging used for defect identification in module CTM analysis.
