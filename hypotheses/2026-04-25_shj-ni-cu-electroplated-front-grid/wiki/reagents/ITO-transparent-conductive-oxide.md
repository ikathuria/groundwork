---
type: reagent
slug: ITO-transparent-conductive-oxide
aliases: [indium tin oxide, Sn-doped In2O3, ITO TCO]
cas: ""
suppliers:
  - name: Umicore
    catalog: "ITO sputter targets (90 wt% In2O3 / 10 wt% SnO2)"
    grade: PV-grade rotary or planar
    url: https://eom.umicore.com
  - name: Materion
    catalog: "ITO targets, indium-tin-oxide ceramic"
    grade: 99.99 % purity
    url: https://www.materion.com
  - name: JX Nippon Mining & Metals
    catalog: "ITO target series"
    grade: PV / display
    url: https://www.nmm.jx-group.co.jp
storage: ambient; sputter targets stored dry, sealed
hazards: low (deposited film); ITO dust is respiratory hazard (indium lung disease historically)
known_failure_modes: [TCO-pitting-during-plating, Jsc-loss-from-cap-stack-shading, Cu-diffusion-into-c-Si]
sources: [2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, 2021-goldschmidt-tech-learning-tw-pv, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-taiyangnews-heterojunction-technology-report, 2024-fraunhoferise-photovoltaics-report, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-lorenz-cutting-edge-metallization-shj-fraunhofer, 2024-siliconpv-novel-shj-metallization-architectures, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV]
tags: [TCO, ITO, SHJ-front-electrode, indium, Cu-diffusion-barrier]
created: 2026-04-26
updated: 2026-04-26
---

# ITO — indium tin oxide

**Slug:** `reagents/ITO-transparent-conductive-oxide` · **Type:** reagent

## What it is

Indium tin oxide (ITO) is the dominant transparent conductive oxide (TCO) for the SHJ front electrode — a degenerately doped n-type In2O3 with ~10 wt% SnO2 dopant. It provides lateral conduction over the a-Si:H emitter, optical anti-reflection, and (per Yacouba 2025 SIMS) acts as an effective barrier against Cu diffusion into c-Si.

## Common uses (in this corpus)

ITO is the **most-cited reagent in this corpus after the Cu sulfate bath** (16 sources). It is the SHJ front-electrode default; sits between the a-Si:H passivation and the metal grid (plated, paste, or screen-printed); and — critically for the hypothesis — is a *passive co-barrier* to Cu diffusion. Yacouba 2025 cites Chen et al. and confirms by SIMS / pFF / Voc that ITO blocks Cu well enough for paste-Cu cells with no Ni barrier; this is exactly the architectural divergence flagged in the hypothesis (SunDrive, Hatt NOBLE, Adachi/Kaneka all rely on TCO + thin PVD seed rather than electroplated Ni).

## Properties / specifications

- Composition: ~90 wt% In2O3 + ~10 wt% SnO2 (canonical sputter target).
- Sheet resistance: ~30–80 Ω/sq at 70–100 nm thickness (SHJ-grade).
- Carrier density: ~5×10²⁰ cm⁻³; mobility 30–50 cm²/V·s.
- Optical transmittance: ≥85 % over 400–1000 nm; bandgap ~3.7 eV.
- Deposition: DC / RF magnetron sputtering at ≤200 °C (SHJ thermal budget); reactive Ar/O2 plasma.
- Thickness on SHJ: 70–100 nm typical (chosen for AR optimum + R/sheet trade-off).
- Chemical stability: more robust than AZO in dilute acid, but still etched by pH-1 acid-Cu plating bath at long dwell or any seed-layer pinhole.
- Cu-barrier behavior: SIMS shows ~1–2 orders of magnitude Cu rejection across an ITO film of 80 nm; effectively blocks Cu in single-cell DH (Yacouba 2025) but module-level long-term aging requires further verification.

## Suppliers

- Umicore — ITO sputter targets (90/10 wt%); URL https://eom.umicore.com
- Materion — ceramic ITO targets, 99.99 % purity; URL https://www.materion.com
- JX Nippon Mining & Metals — ITO target series; URL https://www.nmm.jx-group.co.jp
- Plasmaterials, Kurt J. Lesker — additional research-scale target vendors.

## Alternatives

- [[reagents/IWO-tungsten-doped-indium-oxide]] — higher-mobility alternative; better optics at equal R/sheet.
- [[reagents/AZO-aluminum-doped-zinc-oxide]] — indium-free alternative; less acid-stable, less mature.

## Gotchas / failure modes

- [[failure-modes/TCO-pitting-during-plating]] — pH ≈ 1 acid-Cu bath dissolves ITO at any seed-layer pinhole; the dominant TCO-damage mode.
- [[failure-modes/Jsc-loss-from-cap-stack-shading]] — TCO optical absorption + parasitic absorption in the metal grid contributes to front-side optical losses.
- [[failure-modes/Cu-diffusion-into-c-Si]] — ITO is a *barrier* against this failure mode, but only as long as the film is intact (no pinholes, no plating-induced thinning).

## Citing sources

- [[sources/2025-yacouba-shj-silver-free-metallization-progPV]] — explicitly confirms ITO as effective Cu diffusion barrier via stable pFF/Voc in all-Cu-SP cells.
- [[sources/2018-pv-international-metallization-shj]] — SHJ Ni/Cu workflow with ITO front TCO.
- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — CSEM/Meyer Burger SHJ workflow.
- [[sources/2018-pvtech-metallization-shj-cells-modules]] — SHJ cell stack overview.
- [[sources/2019-hatt-noble-shj-solrrl]] — NOBLE process plating directly on ITO.
- [[sources/2019-hatt-noble-bifacial-shj-aip]] — bifacial SHJ NOBLE.
- [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — DH stability of Cu-plated SHJ on ITO.
- [[sources/2021-goldschmidt-tech-learning-tw-pv]] — tech-learning roadmap for SHJ TCO.
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — SunDrive plates Cu directly on ITO.
- [[sources/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — CSEM SHJ on ITO.
- [[sources/2023-taiyangnews-heterojunction-technology-report]] — industry HJT report; ITO landscape.
- [[sources/2024-fraunhoferise-photovoltaics-report]] — Fraunhofer industry overview; ITO as SHJ default.
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — ITO front TCO in aging study.
- [[sources/2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] — fine-line printing on ITO TCO.
- [[sources/2024-siliconpv-novel-shj-metallization-architectures]] — novel SHJ metallization architectures all on ITO.
- [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — Pingel 2025 ITO substrate for AgCu paste study.
