---
type: failure-mode
slug: Cu3Si-formation-at-Si-interface
severity: critical
frequency_estimate: "occurs by solid-state reaction at temperatures as low as 200 °C if Ni barrier is breached. With 60 nm electroplated Ni: Cu₃Si XRD peaks already at 300 °C. With 120 nm Ni: Cu₃Si onset at 400 °C, strong above 600 °C (Cheng 2018)."
applies_to_methods: [Cu-electroplating-acid-bath, electroplated-Ni-Cu-stack, electroless-Ni-deposition, SIMS-depth-profile]
applies_to_reagents: [acid-Cu-sulfate-bath, nickel-sulfamate-bath, Cu3Si-intermetallic]
applies_to_step_kinds: [plating, anneal, accelerated-aging, characterization]
sources: [2018-electrochemsci-barrier-properties-electroplated-ni, 2022-karas-cu-outdiffusion-damp-heat]
tags: [Cu3Si, intermetallic, barrier-failure, XRD, critical, Cheng-2018]
created: 2026-04-26
updated: 2026-04-26
---

# Cu₃Si formation at the Cu/Si interface

**Slug:** `failure-modes/Cu3Si-formation-at-Si-interface` · **Severity:** critical

## What it is

Cu₃Si (η′-Cu₃Si copper silicide) is the failure-product phase formed when metallic Cu reaches bare or partially-passivated c-Si. Cu₃Si forms by **solid-state reaction at temperatures as low as 200 °C** (Cheng 2018) — i.e. within the SHJ a-Si:H thermal budget if the Ni or TCO barrier fails. The phase nucleates as discrete particles at pinholes / grain boundaries in the Ni layer, and once seeded propagates laterally as Cu continues to react with Si. Cu₃Si is also a recombination-active deep-defect-band donor (E_C −(0.15–0.58) eV per Lindroos 2015), so its formation simultaneously consumes Si lattice and injects Cu interstitials into the surrounding bulk.

## How it manifests

- **XRD diffraction peaks** at the Cu₃Si reflections; the canonical Cheng 2018 detection signature. With 60 nm Ni: Cu₃Si XRD peaks already at 300 °C, strong above 500 °C. With 120 nm Ni: Cu₃Si first detected at 400 °C, strong above 600 °C.
- **STEM/EDS line-scan** showing Cu/Ni/Ni-silicide bilayer at the interface; Cheng 2018 saw Ni layer ~100 nm + Ni₂Si ~200 nm on the 120 nm barrier at 300 °C, with no Cu reaching Si — the success case.
- **Local pFF and Voc collapse** under the affected fingers; Cu interstitials emanating from each Cu₃Si nucleation site degrade local minority-carrier lifetime ([[failure-modes/Cu-LID-light-induced-degradation]]).
- **EL dark spots** at finger pinhole locations after thermal stress.
- **Kirkendall-like microvoids** at Cu/Cu-silicide or Cu/Cu-Sn interfaces; Karas 2022 reports voids every 1–2 µm at the Cu–Sn IMC interface (the analogous phenomenon for the Cu/Sn cap).

## How to detect it

- **XRD on plated stacks before and after thermal stress** — the Cheng 2018 protocol. Track Cu₃Si peak intensity vs anneal temperature (300/400/500/600/700 °C, 10 min in Ar/H₂). Threshold: any Cu₃Si peak above background flags barrier failure at that temperature.
- **STEM/EDS line scan** of finger cross-section — gold standard for spatially resolving the Ni / Ni-silicide / Cu / Cu₃Si layer sequence. Use FIB liftout from a degraded EL dark spot.
- **SIMS depth profile** — [[methods/SIMS-depth-profile]] integrates the cross-section signature into a 1D Cu / Ni / Si profile; detects Cu in c-Si as a leading indicator of Cu₃Si nucleation.
- **Cu-displacement decoration test** (CDD) on Ni layer pre-Cu plating: immerse the Ni-coated TCO in a CuSO₄ solution; Cu metal preferentially deposits at any pinhole exposing Si or TCO — provides a fast, qualitative pinhole-density screen before committing to the full plating run.

## Mitigation

- **Continuous Ni barrier ≥120 nm** (Cheng 2018) for thermal budgets to 300 °C. This sits above the SHJ a-Si:H limit (200 °C), but Cu₃Si forms by solid-state reaction at 200 °C if the barrier is discontinuous — so the thickness-coverage requirement still applies even at the SHJ thermal envelope. Use [[methods/electroplated-Ni-Cu-stack]] with [[reagents/nickel-sulfamate-bath]] sulfamate chemistry.
- **Form Ni-silicide before Cu deposition** — Jeon 2017's electroless-Ni + 500 °C silicidation step (Ni₂Si / NiSi phases) creates a robust silicide barrier, but the 500 °C anneal is *not* SHJ-compatible. SHJ-specific routes therefore rely on the TCO + a-Si:H stack instead.
- **Use the SHJ TCO (ITO, IWO, AZO) as the primary Cu barrier** — SunDrive 2022 demonstrates this works for 2000 h DH with no Ni barrier; the TCO's amorphous In/Sn-oxide network blocks Cu-Si reaction. See [[reagents/ITO-transparent-conductive-oxide]].
- **Pinhole verification by Cu-displacement decoration** before bulk Cu plating — single-spot detection of any TCO/Si exposure.
- **Ni-doped Cu (forming stable (Cu,Ni)₆Sn₅ at the Sn cap)** — Karas 2022 suggests this engineering trick to reduce Kirkendall void formation at the Cu/Sn interface; analogous logic applies at the Cu/Si interface.

## Where it applies

- Methods: [[methods/electroplated-Ni-Cu-stack]], [[methods/Cu-electroplating-acid-bath]], [[methods/electroless-Ni-deposition]], [[methods/SIMS-depth-profile]]
- Reagents: [[reagents/Cu3Si-intermetallic]], [[reagents/nickel-sulfamate-bath]], [[reagents/acid-Cu-sulfate-bath]]
- Step kinds: plating, anneal, accelerated-aging, characterization

## Severity rationale

Critical. Cheng 2018's XRD evidence directly contradicts the hypothesis's "sub-100 nm Ni" framing — 60 nm electroplated Ni shows Cu₃Si formation already at 300 °C, and the Cu₃Si phase forms by solid-state reaction at 200 °C, which is the SHJ a-Si:H thermal limit. Cu₃Si nucleation is not just a phase-formation event; it is a Cu-injection mechanism that drives the entire [[failure-modes/Cu-diffusion-into-c-Si]] cascade locally. Severity matches Cu-diffusion-into-c-Si because the two phenomena are causally linked: Cu₃Si is the first observable failure when the Ni barrier breaks.

## Citing sources

- [[sources/2018-electrochemsci-barrier-properties-electroplated-ni]] — Cheng et al.: 60 nm vs 120 nm electroplated Ni barrier study; tracks Cu₃Si XRD peaks vs 300–800 °C anneal. Direct contradiction to the hypothesis's sub-100 nm Ni claim. STEM/EDS confirms the Ni / Ni₂Si bilayer that holds at 300 °C for the 120 nm case.
- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — Karas: discusses Cu-Sn IMC formation (ε-Cu₃Sn, η-Cu₆Sn₅) as the analogous self-limiting / void-generating phenomenon at the cap-stack side of the plated stack; the underlying Kirkendall mechanism is identical.
