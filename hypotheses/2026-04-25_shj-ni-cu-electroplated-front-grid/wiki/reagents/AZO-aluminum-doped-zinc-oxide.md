---
type: reagent
slug: AZO-aluminum-doped-zinc-oxide
aliases: [Al-doped ZnO, ZnO:Al, AZO TCO]
cas: ""
suppliers:
  - name: Umicore
    catalog: "AZO sputter targets"
    grade: 2 wt% Al2O3 in ZnO, ceramic target
    url: https://eom.umicore.com
  - name: Plasmaterials / Kurt J. Lesker
    catalog: "ZnO:Al2O3 (98:2 wt%) targets"
    grade: 99.99 % purity
    url: https://www.lesker.com
storage: ambient; sputter targets stored dry
hazards: low (deposited film); ZnO dust is irritant
known_failure_modes: [TCO-pitting-during-plating, Jsc-loss-from-cap-stack-shading]
sources: [2023-taiyangnews-heterojunction-technology-report, 2024-lachowicz-cu-plated-shj-aging-mini-modules]
tags: [TCO, AZO, ZnO, indium-free, SHJ-front-electrode]
created: 2026-04-26
updated: 2026-04-26
---

# AZO — aluminum-doped zinc oxide

**Slug:** `reagents/AZO-aluminum-doped-zinc-oxide` · **Type:** reagent

## What it is

Aluminum-doped zinc oxide (AZO) is a transparent conductive oxide (TCO) based on ZnO doped with ~2 wt% Al2O3. It is one of the indium-free alternatives to ITO for the SHJ front electrode, motivated by indium-supply risk and cost. Sheet resistance and optical transparency are competitive with ITO at the carrier densities typical of SHJ.

## Common uses (in this corpus)

In this corpus AZO appears as the **indium-free TCO option** discussed in industry reviews of the SHJ metallization stack. Lachowicz 2024 reports SHJ mini-module work where AZO appears as a candidate front-TCO; the TaiyangNews HJT 2023 report documents AZO alongside ITO and IWO in the bifacial-cell TCO landscape. AZO is more sensitive to acidic plating chemistries than ITO, which has implications for direct-on-TCO Cu plating.

## Properties / specifications

- Composition: ZnO + 1.5–2 wt% Al2O3 (or equivalent dopant level).
- Sheet resistance: ~30–80 Ω/sq at 80–100 nm thickness on SHJ; comparable to ITO at slightly thicker layers.
- Optical: ≥85 % transmittance over 400–1000 nm; bandgap ~3.3 eV.
- Deposition: DC / RF magnetron sputtering, typically <200 °C to stay within SHJ thermal budget.
- Chemical stability: AZO etches readily in dilute acid (HCl, H2SO4) — much less stable than ITO in the pH-1 acid-Cu plating bath.

## Suppliers

- Umicore — AZO sputter targets (2 wt% Al2O3); URL https://eom.umicore.com
- Plasmaterials / Kurt J. Lesker — ZnO:Al2O3 (98:2 wt%) targets at 99.99 % purity; URL https://www.lesker.com
- Materion, Toshima Manufacturing — additional ceramic AZO target vendors.

## Alternatives

- [[reagents/ITO-transparent-conductive-oxide]] — the dominant SHJ front TCO, more chemically robust but indium-dependent.
- [[reagents/IWO-tungsten-doped-indium-oxide]] — higher mobility variant of indium oxide, lower carrier density; better optical transparency at equal sheet R.

## Gotchas / failure modes

- [[failure-modes/TCO-pitting-during-plating]] — AZO is *more* susceptible than ITO to the pH-1 acid-Cu bath; direct plating onto AZO without a Ni or PVD seed is generally not feasible.
- [[failure-modes/Jsc-loss-from-cap-stack-shading]] — TCO optical absorption contributes to the front-side optical losses that the metallization must minimize.

## Citing sources

- [[sources/2023-taiyangnews-heterojunction-technology-report]] — surveys AZO/IWO/ITO landscape for SHJ; discusses indium-supply risk motivating AZO.
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — references AZO as a candidate SHJ front TCO in the broader plated-Cu SHJ context.
