---
type: reagent
slug: a-Si-H-passivation
aliases: [hydrogenated amorphous silicon, a-Si:H, intrinsic a-Si:H passivation layer]
cas: ""
suppliers:
  - name: Meyer Burger
    catalog: "PECVD HJT process tool (proprietary)"
    grade: intrinsic + doped a-Si:H stack
    url: https://www.meyerburger.com
  - name: INDEOtec
    catalog: "Octopus II PECVD"
    grade: i/n/p a-Si:H
    url: https://www.indeotec.com
storage: in-situ on wafer; protect from process temperatures >200 °C
hazards: low (deposited film); SiH4 process gas is pyrophoric (handled in PECVD tool)
known_failure_modes: [a-Si-H-passivation-degradation, FF-degradation-contact-resistance]
sources: [2018-pvtech-metallization-shj-cells-modules, 2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration, 2023-tepner-printing-tech-csi-review, 2024-fraunhoferise-photovoltaics-report]
tags: [SHJ, passivation, PECVD, thermal-budget, defining-layer]
created: 2026-04-26
updated: 2026-04-26
---

# Hydrogenated amorphous silicon (a-Si:H) passivation

**Slug:** `reagents/a-Si-H-passivation` · **Type:** reagent

## What it is

Hydrogenated amorphous silicon (a-Si:H) is a thin (~5–10 nm) PECVD-deposited film that chemically passivates dangling bonds at the c-Si surface in silicon-heterojunction (SHJ) solar cells. The architecture uses an intrinsic i-a-Si:H buffer plus a doped (n- or p-type) a-Si:H emitter/back layer; the i-layer carries the passivation budget while the doped layer forms the carrier-selective contact.

## Common uses (in this corpus)

a-Si:H is the **defining layer** of the SHJ architecture. Its presence drives every constraint that makes plated Ni/Cu metallization compatible with SHJ in the first place: the maximum process temperature has to stay ≤200–230 °C to avoid hydrogen effusion and bond-network reconfiguration. This is exactly why screen-printed *fire-through* Ag pastes (peak >600 °C) cannot be used on SHJ — and why low-T Ag pastes, low-T Cu pastes, and electroplated Ni/Cu (all room-temperature wet processes) are the SHJ-compatible options.

## Properties / specifications

- Thickness: ~5–10 nm (i-layer) + ~5–15 nm (doped layer) on each side of the c-Si wafer.
- Bandgap: ~1.7–1.8 eV (vs. 1.12 eV in c-Si) → energy-band offsets at the c-Si/a-Si:H heterointerface define carrier selectivity.
- Hydrogen content: ~10–15 at.% in device-grade material; H drives surface-state passivation and is the most temperature-sensitive component.
- Maximum allowable post-deposition thermal budget: 200–230 °C (Tepner & Lorenz 2023; Yacouba 2025 reports onset of degradation at >280 °C / 5 s, ~0.5 %abs efficiency loss at >320 °C / 5 s, ~1.5 %abs at >360 °C).
- Deposition: PECVD (RF, 13.56 MHz typical) from SiH4/H2 + B2H6 (p-doping) or PH3 (n-doping) precursor gases.

## Suppliers

- Meyer Burger — proprietary HJT PECVD tool integrated into full SHJ line; URL https://www.meyerburger.com
- INDEOtec — Octopus II PECVD platform for R&D and pilot SHJ; URL https://www.indeotec.com
- Applied Materials, ULVAC, Centrotherm — alternative SHJ PECVD tool vendors.

## Alternatives

- [[reagents/ITO-transparent-conductive-oxide]] — sits *on top* of the a-Si:H to provide lateral conduction; the a-Si:H/ITO stack is co-engineered, not interchangeable.
- Polysilicon-on-oxide (poly-Si/SiOx, the TOPCon passivating contact) — competing carrier-selective passivation with much higher thermal tolerance but a different process flow.

## Gotchas / failure modes

- [[failure-modes/a-Si-H-passivation-degradation]] — H effusion at >200 °C, plus UV/light exposure during plating, can degrade the passivation and lower Voc / iVoc. The hypothesis's plated Ni/Cu intervention is built around staying below this thermal limit.
- [[failure-modes/FF-degradation-contact-resistance]] — a-Si:H is resistive; the contact stack (TCO + metal grid) must be engineered carefully because the a-Si:H itself contributes series resistance.

## Citing sources

- [[sources/2023-tepner-printing-tech-csi-review]] — defines the SHJ ≤200–230 °C maximum process temperature constraint that comes from a-Si:H.
- [[sources/2018-pvtech-metallization-shj-cells-modules]] — describes the SHJ stack and the metallization options compatible with a-Si:H.
- [[sources/2024-fraunhoferise-photovoltaics-report]] — industry context for SHJ as a passivated-contact architecture defined by a-Si:H.
- [[sources/2019-hatt-noble-shj-solrrl]] — NOBLE process explicitly engineered to fit within the a-Si:H thermal budget.
- [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — DH stability of SHJ Cu-plated cells; passivation degradation is one tracked failure mode.
- [[sources/2019-hatt-noble-bifacial-shj-aip]] — bifacial SHJ NOBLE; a-Si:H thermal limit drives architecture choices.
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — SunDrive demo plates Cu directly onto SHJ TCO over a-Si:H; entire workflow stays at ambient.
