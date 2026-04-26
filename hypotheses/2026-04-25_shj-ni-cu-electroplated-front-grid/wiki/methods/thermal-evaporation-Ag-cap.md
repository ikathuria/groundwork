---
type: method
slug: thermal-evaporation-Ag-cap
aliases: [evaporated Ag cap, thermal evaporation, e-beam Ag, PVD Ag finish]
related_methods: [electroplated-Ni-Cu-stack, NOBLE-selective-Cu-plating, Ni-sputter-deposition, Cu-electroplating-acid-bath, light-induced-plating]
key_reagents: [silver-Ag-cap, tin-Sn-cap, acid-Cu-sulfate-bath]
known_failure_modes: [Cu-finger-oxidation-damp-heat, Cu-out-diffusion-through-cap-stack, Cu-finger-corrosion-encapsulant, finger-adhesion-loss-after-DH]
sources: [2014-rehman-nicu-plating-csi-review]
tags: [PVD, thermal-evaporation, Ag-cap, oxidation-protection, finishing]
created: 2026-04-26
updated: 2026-04-26
---

# Thermal evaporation of Ag cap

**Slug:** `methods/thermal-evaporation-Ag-cap` · **Type:** method

## What it measures / does

Deposits a thin Ag (or Sn) capping layer over the plated Cu finger by thermal or electron-beam evaporation in vacuum. The cap protects Cu from atmospheric oxidation (during storage / lamination) and provides a solderable / encapsulant-compatible surface. Rehman 2014 reviews this as one of two canonical Cu-cap options (the other being electroplated/immersion Sn or LIP-Ag). Less common today than immersion / LIP Ag (NOBLE, Karas) because PVD requires breaking the plating-line vacuum and adds tool capex.

## When to use it

Use when an exceptionally clean, dense, oriented Ag cap is required and PVD-line capacity exists. In current SHJ Cu-plating practice, immersion Ag (NOBLE, Hatt 2019: ~200 nm) and LIP-Ag/Sn (Karas 2019/2022) dominate over evaporation; thermal-evaporated Ag caps appear primarily in older homojunction Ni/Cu work. For the SHJ Ni/Cu hypothesis Pass-3, this is a viable but capex-heavy alternative to immersion / LIP capping.

## Key parameters / setpoints

- **Source:** Ag pellets in tungsten boat (thermal) or Ag target in e-beam crucible.
- **Vacuum:** ≤ 10⁻⁶ mbar.
- **Substrate temperature:** ambient or moderate; SHJ a-Si:H constraint requires ≤ 200 °C.
- **Thickness:** 100–500 nm typical; sufficient for oxidation protection without significant optical shading.
- **Deposition rate:** 0.5–5 nm/s.
- **Alternatives in same role:** immersion Ag (~200 nm), LIP-Ag (~1 µm), LIP-Sn (~1 µm).

## Common variants

- **Thermal-evaporated Ag** (Rehman 2014) — vacuum-deposited.
- **E-beam-evaporated Ag** — denser films, higher capex.
- **Sputtered Ag** — broader process window.
- **Immersion Ag** (NOBLE Hatt 2019) — wet-bench, no vacuum needed; today's preferred SHJ-compatible cap.
- **LIP-Ag / LIP-Sn** (Karas) — same wet-bench advantage.

## Things to watch for

- Cu-Ag has minimal mutual solid-solubility below ~700 °C, so the cap is a good immediate barrier — but Karas 2022 shows that under EVA + DH, Cu still out-diffuses through the Ag cap *along grain boundaries*, accumulating on the outer surface; thicker Ag does *not* simply solve the problem (engineer the cap with grain-boundary diffusion in mind, or switch to POE encapsulant).
- Vacuum-line throughput is the practical limiter at production scale; this is why SunDrive / NOBLE moved to wet-process caps.
- Ag cap thickness of ~200 nm (NOBLE) is an order of magnitude thinner than the LIP-Ag (~1 µm) of Karas; thinner cap is faster but more prone to grain-boundary leakage.
- Toxic / flammable handling considerations for Ag in hot tungsten boat.

## Related methods

- [[methods/electroplated-Ni-Cu-stack]] — the stack the cap finishes.
- [[methods/light-induced-plating]] — wet-bench alternative for the cap.
- [[methods/NOBLE-selective-Cu-plating]] — uses immersion Ag as cap, not thermal-evaporated.
- [[methods/Ni-sputter-deposition]] — PVD relative for upstream seed.
- [[methods/Cu-electroplating-acid-bath]] — upstream Cu-finger step.

## Citing sources

- [[sources/2014-rehman-nicu-plating-csi-review]] — capping option above Cu; Sn cap also discussed.

> **In-corpus coverage note:** Only one source in the Pass-1 corpus (Rehman 2014) explicitly describes thermal-evaporated Ag cap; the modern SHJ Cu-plating literature (NOBLE, Karas, SunDrive, Lachowicz) uses immersion Ag or LIP-Ag/Sn. This page is included for completeness; lint pass should consider whether to fold into a broader "Cu cap deposition" method or retain as the historical PVD reference.
