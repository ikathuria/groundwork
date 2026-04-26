---
type: reagent
slug: IWO-tungsten-doped-indium-oxide
aliases: [W-doped In2O3, IWO TCO, In:W oxide]
cas: ""
suppliers:
  - name: Umicore
    catalog: "IWO sputter targets (W-doped In2O3)"
    grade: PV-grade ceramic target
    url: https://eom.umicore.com
  - name: Materion
    catalog: "IWO ceramic targets"
    grade: 99.99 % purity
    url: https://www.materion.com
storage: ambient; sputter targets stored dry, sealed
hazards: low (deposited film); In dust is respiratory hazard
known_failure_modes: [TCO-pitting-during-plating, Cu-diffusion-into-c-Si]
sources: [2021-goldschmidt-tech-learning-tw-pv, 2022-arena-sundrive-copper-metallisation-demonstration]
tags: [TCO, IWO, high-mobility, SHJ-front-electrode, indium]
created: 2026-04-26
updated: 2026-04-26
---

# IWO — tungsten-doped indium oxide

**Slug:** `reagents/IWO-tungsten-doped-indium-oxide` · **Type:** reagent

## What it is

Tungsten-doped indium oxide (IWO, In2O3:W) is a high-mobility transparent conductive oxide variant of indium oxide where W (~1–3 wt%) replaces Sn as the dopant. Compared to ITO, IWO trades carrier density for mobility — fewer free carriers means less free-carrier absorption (better near-IR transparency), but mobility ~80–120 cm²/V·s gives the same sheet resistance at thinner films.

## Common uses (in this corpus)

In this corpus IWO appears as the **high-efficiency SHJ front-TCO option** chosen by SunDrive (ARENA 2022 demonstration) and discussed by Goldschmidt 2021 in the SHJ tech-learning roadmap. The motivation is current gain: lower parasitic absorption in the IR → ~0.3–0.5 mA/cm² Jsc improvement vs ITO at the same R/sheet. SunDrive's plated-Cu workflow uses IWO as the underlying TCO that the Cu fingers contact directly.

## Properties / specifications

- Composition: In2O3 + ~1–3 wt% WO3 dopant.
- Sheet resistance: ~30–80 Ω/sq at 70–90 nm; comparable to ITO.
- Carrier density: ~2–4×10²⁰ cm⁻³ (lower than ITO's ~5×10²⁰).
- Mobility: 80–120 cm²/V·s (vs 30–50 cm²/V·s for ITO).
- Optical: improved IR transmittance vs ITO (less free-carrier absorption); ~0.3–0.5 mA/cm² Jsc gain reported in SHJ.
- Deposition: DC / RF magnetron sputtering at ≤200 °C; same tools as ITO.
- Acid resistance: comparable to ITO; both etched by pH-1 acid-Cu bath at pinholes.

## Suppliers

- Umicore — IWO sputter targets; URL https://eom.umicore.com
- Materion — IWO ceramic targets; URL https://www.materion.com
- JX Nippon Mining & Metals — In-based TCO targets including IWO variants.

## Alternatives

- [[reagents/ITO-transparent-conductive-oxide]] — the dominant SHJ default; IWO trades cost for performance.
- [[reagents/AZO-aluminum-doped-zinc-oxide]] — indium-free alternative; less mature, less acid-stable.

## Gotchas / failure modes

- [[failure-modes/TCO-pitting-during-plating]] — IWO is etched by pH-1 acid-Cu plating bath at any seed-layer pinhole, similar to ITO.
- [[failure-modes/Cu-diffusion-into-c-Si]] — IWO is expected to act as a co-barrier similar to ITO, but specific SIMS data on IWO + Cu under DH is sparse in this corpus.

## Citing sources

- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — SunDrive's production-pilot SHJ Cu-plating workflow uses IWO as the front TCO.
- [[sources/2021-goldschmidt-tech-learning-tw-pv]] — SHJ tech-learning roadmap discusses IWO as the high-Jsc TCO option.
