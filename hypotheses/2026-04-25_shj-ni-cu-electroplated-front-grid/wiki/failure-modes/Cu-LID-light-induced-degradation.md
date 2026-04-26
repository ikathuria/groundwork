---
type: failure-mode
slug: Cu-LID-light-induced-degradation
severity: critical
frequency_estimate: "always present once Cu enters the c-Si bulk above ~10¹³ cm⁻³ contamination; sub-ppb total Cu sufficient. Onset time scales with effective Cu diffusivity (B-doped p-Si: hours-to-days; lightly doped n-Si: faster)"
applies_to_methods: [Cu-electroplating-acid-bath, electroplated-Ni-Cu-stack, light-induced-plating, minority-carrier-lifetime-photoluminescence, SIMS-depth-profile, UV-preconditioning]
applies_to_reagents: [acid-Cu-sulfate-bath, nickel-sulfamate-bath, Cu3Si-intermetallic, a-Si-H-passivation]
applies_to_step_kinds: [plating, accelerated-aging, characterization]
sources: [2015-lindroos-cu-lid-aalto-thesis]
tags: [Cu-LID, lifetime, bulk-recombination, Voc, critical, Lindroos]
created: 2026-04-26
updated: 2026-04-26
---

# Cu-related light-induced degradation (Cu-LID)

**Slug:** `failure-modes/Cu-LID-light-induced-degradation` · **Severity:** critical

## What it is

Cu-LID is a **bulk** (not surface) recombination effect in c-Si caused by light-activated formation of Cu-related defect complexes — interstitial Cu (Cu_i, E_C −0.15 to −0.20 eV), substitutional Cu (Cu_s, E_V +0.20–0.46 eV), Cu_s-Cu_i₃ complexes (E_V +0.07 eV), and Cu₃Si precipitate bands (E_C −(0.15–0.58) eV). Distinct mechanistically from boron-oxygen LID: Cu-LID disappears under negative surface charging (corona, Al₂O₃) but BO-LID does not. **Defects are stable at 200 °C** — damp-heat aging at 85 °C cannot anneal them. For the SHJ Ni/Cu hypothesis, Cu-LID is the bulk-c-Si consequence of any barrier breach: a wafer that picks up Cu during plating or aging will silently degrade under field illumination over weeks to years.

## How it manifests

- **Voc and Jsc loss** in finished cells under illumination, not present in dark storage; magnitude scales with effective Cu diffusivity (B-doped p-Si slower than n-Si or Ga-Si).
- **Lifetime collapse** (μ-PCD / QSSPC / PL) on illuminated wafers. Lindroos 2015 quantifies activation energies that depend on Si doping concentration; rate-limited by Cu diffusivity.
- **No recovery on 200 °C anneal** — distinguishes Cu-LID from BO-LID and from regenerable thermal defects.
- **Recovery on negative-corona surface charging** — the diagnostic fingerprint that separates Cu-LID from BO-LID.

## How to detect it

- **Photoluminescence / minority-carrier lifetime under illumination vs dark** — [[methods/minority-carrier-lifetime-photoluminescence]]. Track lifetime degradation over 0–100 h of 1-sun illumination at 25 °C. >10 % lifetime drop without 200 °C recovery = Cu-LID candidate.
- **SIMS / TXRF of the c-Si bulk** — [[methods/SIMS-depth-profile]] and TXRF (Lindroos Publication III); detection limit at the ppb level, capable of confirming the contamination pathway.
- **Negative-corona-charging diagnostic** — apply negative surface charge with a corona gun or deposit Al₂O₃: Cu-LID disappears, BO-LID does not.
- **Suns-VOC pFF tracking under continuous 1-sun light-soaking** — the cell-level proxy; pFF should be stable in the absence of Cu contamination.

## Mitigation

- **Prevent Cu from reaching c-Si in the first place** — see [[failure-modes/Cu-diffusion-into-c-Si]] for the cascade of barrier strategies (continuous Ni ≥120 nm per Cheng 2018; SHJ TCO + a-Si:H stack per SunDrive 2022; HF activation per Jeon 2017).
- **Source-Cu purity control** — use semiconductor-grade [[reagents/acid-Cu-sulfate-bath]] make-up reagents; activated-carbon-treat the bath at make-up (Atotech Cupracid procedure: 0.2 kg/100 L plating-grade carbon, 1 hr stir, filter) to remove organic contamination that can co-transport Cu.
- **Negative surface charging at module level** — Al₂O₃ deposition or corona-charging passivation can suppress the LID signature even if some Cu has entered the bulk; a last-line-of-defence repair, not a substitute for prevention.
- **Light-soak preconditioning + IV reference** — UV-precondition modules per [[methods/UV-preconditioning]] before reporting STC efficiency; reveals Cu-LID-prone cells immediately rather than after deployment.
- **Reject Cu-LID-prone wafer batches** — n-type CZ-Si and Ga-doped p-type are *more* susceptible than B-doped (faster effective diffusivity) — but B-doped CuB pairs are unstable at RT, so all are vulnerable. There is no doping fix.

## Where it applies

- Methods: [[methods/Cu-electroplating-acid-bath]], [[methods/electroplated-Ni-Cu-stack]], [[methods/light-induced-plating]], [[methods/minority-carrier-lifetime-photoluminescence]], [[methods/SIMS-depth-profile]], [[methods/UV-preconditioning]]
- Reagents: [[reagents/acid-Cu-sulfate-bath]], [[reagents/Cu3Si-intermetallic]], [[reagents/a-Si-H-passivation]]
- Step kinds: plating, accelerated-aging, characterization

## Severity rationale

Critical. Cu-LID's defining feature is irreversibility under the SHJ thermal budget: defects are stable at 200 °C (Lindroos 2015 abstract), so the SHJ a-Si:H damp-heat envelope (≤85 °C) cannot anneal them. Combined with sub-ppb Cu being sufficient and Cu's room-temperature transit through a full wafer in <11 h once in c-Si (Lindroos Eq. 2.2), even a small contamination event during plating produces an unrecoverable Voc loss that grows under field illumination over the cell's life. This is the silent killer of the hypothesis.

## Citing sources

- [[sources/2015-lindroos-cu-lid-aalto-thesis]] — *the* canonical reference for this failure mode. Six publications consolidated into a doctoral thesis: Cu-LID is bulk recombination, mechanistically distinct from BO-LID, defects stable at 200 °C, eliminated by negative surface charging (corona / Al₂O₃). Headline Publication VI: Ni diffuses as fast as Cu in Si — implies even a leaky Ni barrier carries its own bulk-recombination risk in addition to letting Cu through.
