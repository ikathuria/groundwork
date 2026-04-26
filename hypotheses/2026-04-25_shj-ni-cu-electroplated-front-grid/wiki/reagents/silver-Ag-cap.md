---
type: reagent
slug: silver-Ag-cap
aliases: [Ag cap layer, Ag finish, plated Ag cap, silver capping layer]
cas: 7440-22-4
suppliers:
  - name: Atotech (MKS)
    catalog: "Cyanide-free Ag plating chemistry / Ag bath"
    grade: PV finish layer
    url: https://www.atotech.com/products/general-metal-finishing/solar-industry/
  - name: MacDermid Alpha
    catalog: "Silvex / silver electroplating chemistry"
    grade: electronics / PV
    url: https://www.macdermidalpha.com
  - name: Umicore
    catalog: "Cyanide-based Ag plating chemistry"
    grade: industrial
    url: https://eom.umicore.com
storage: bath at controlled T, light-shielded for cyanide variants
hazards: high if cyanide-based; medium for cyanide-free variants
known_failure_modes: [Cu-out-diffusion-through-cap-stack, Cu-finger-corrosion-encapsulant, silver-supply-bottleneck]
sources: [2014-rehman-nicu-plating-csi-review, 2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, 2019-karas-damp-heat-degradation-shj-cu, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration, 2022-karas-cu-outdiffusion-damp-heat, 2024-itrpv-15th-edition-roadmap, atotech-solar-industry-overview, dupont-solamet-pv21a-tech-sheet, dupont-solamet-pv56s-data-sheet]
tags: [Ag-cap, finish-layer, oxidation-protection, plated-stack-tail, NOBLE-process]
created: 2026-04-26
updated: 2026-04-26
---

# Silver (Ag) cap layer

**Slug:** `reagents/silver-Ag-cap` · **Type:** reagent

## What it is

The Ag cap is a thin (~0.5–1.5 µm) plated or sputtered silver finish on top of the plated Cu finger. Its functions are: (a) protect the Cu from atmospheric oxidation and DH corrosion, (b) provide a solderable / ECA-bondable surface, and (c) reflect light for some bifacial designs. Hatt's NOBLE process and most plated-Ni/Cu stacks include an Ag cap; Atotech's product page lists Ni/Cu/Ag explicitly.

## Common uses (in this corpus)

In this corpus the Ag cap appears as the **stack tail layer** for plated-Cu SHJ — adopted in Hatt NOBLE, Karas 2019/2022 stacks, Rehman 2014 review, and the Atotech production-qualified Ni/Cu/Ag chemistry. It is also the Cu-corrosion-protection layer that **fails forensically** in Karas 2022: EDS shows Cu accumulating on the *outer* surface of the Ag cap after DH, and Cu lining voids in the encapsulant *above* the cap — the cap is breached at grain boundaries under EVA + DH conditions.

## Properties / specifications

- Thickness: 0.5–1.5 µm (LIP-Ag in Karas 2022 ≈ 1 µm).
- Bulk resistivity: ~1.6 µΩ·cm (pure Ag).
- Deposition: light-induced plating (LIP) from Ag plating bath; or thermal evaporation; or PVD sputter.
- Adhesion: relies on intact Cu surface and bath chemistry.
- Solid solubility with Cu: minimal below ~700 °C; outdiffusion proceeds via Ag grain boundaries (Karas 2022).
- Acetic-acid sensitivity: under EVA + DH, acetic acid acts as a "chemical reaction sink" at the outer Ag surface, driving Cu out-diffusion through the cap.
- Ag mass per cell at cap thickness: ~0.5–1 mg/cell — small fraction of LCT-Ag-paste cell laydown (~16 mg) but still ties plated-Cu to the silver supply chain.

## Suppliers

- Atotech (MKS) — Ag plating chemistry as part of the PV Ni/Cu/Ag stack; URL https://www.atotech.com/products/general-metal-finishing/solar-industry/
- MacDermid Alpha — Silvex electroplating Ag; URL https://www.macdermidalpha.com
- Umicore — cyanide-based Ag plating chemistry; URL https://eom.umicore.com

## Alternatives

- [[reagents/tin-Sn-cap]] — Sn alternative; cheaper but forms Cu-Sn IMCs (Cu3Sn / Cu6Sn5) and Kirkendall voids under DH.
- Direct Cu (no cap) — used in SunDrive POE-encapsulated cells; relies on encapsulant to block oxidation. Higher field-reliability risk.
- Ni-doped Cu / (Cu,Ni) cap — research-stage option; more stable IMC chemistry.

## Gotchas / failure modes

- [[failure-modes/Cu-out-diffusion-through-cap-stack]] — Karas 2022: Cu reaches outer Ag surface after 1000 h DH; Ag cap insufficient under EVA.
- [[failure-modes/Cu-finger-corrosion-encapsulant]] — Cu lining voids in EVA above cap; encapsulant + cap couple drives corrosion.
- [[failure-modes/silver-supply-bottleneck]] — even ~1 mg/cell Ag for the cap layer ties the plated-Cu stack to the Ag supply chain; ITRPV 2024 tracks this.

## Citing sources

- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — mechanistic anchor: Ag cap fails forensically under EVA + DH.
- [[sources/2019-karas-damp-heat-degradation-shj-cu]] — precursor paper; first DH-degradation evidence on Ag-capped plated-Cu cells.
- [[sources/2019-hatt-noble-shj-solrrl]] — NOBLE process uses Ag cap on plated Cu.
- [[sources/2019-hatt-noble-bifacial-shj-aip]] — bifacial NOBLE.
- [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — DH stability of NOBLE Ag cap.
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — SunDrive uses (or omits) cap depending on architecture.
- [[sources/2014-rehman-nicu-plating-csi-review]] — review naming Ag cap as standard finish.
- [[sources/atotech-solar-industry-overview]] — Atotech sells Ni/Cu/Ag stack chemistry.
- [[sources/2024-itrpv-15th-edition-roadmap]] — ITRPV tracks Ag cap mass as part of total Ag consumption.
- [[sources/dupont-solamet-pv21a-tech-sheet]] — distinguishes Ag-cap on plated Cu from screen-printed Ag pastes.
- [[sources/dupont-solamet-pv56s-data-sheet]] — same distinction.
