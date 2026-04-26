---
type: reagent
slug: electrically-conductive-adhesive-ECA
aliases: [ECA, conductive adhesive, Ag-filled epoxy, low-T interconnect adhesive]
cas: ""
suppliers:
  - name: Henkel (Loctite)
    catalog: "Loctite Ablestik ICP series (e.g. ICP 4000)"
    grade: SHJ / module interconnect
    url: https://www.henkel-adhesives.com
  - name: Hitachi Chemical / Resonac
    catalog: "EN-4901 / SR-1100 ECA series"
    grade: PV interconnect
    url: https://www.resonac.com
  - name: DuPont (Solamet conductive adhesives)
    catalog: "PV4xx ECA series"
    grade: SHJ-compatible cure ≤180 °C
    url: https://www.dupont.com
storage: refrigerated (≤5 °C); short shelf life (~3–6 months)
hazards: medium — epoxy resin (skin sensitiser); Ag filler dust on cure
known_failure_modes: [ECA-discoloration-after-DH, finger-adhesion-loss-after-DH, Cu-finger-corrosion-encapsulant]
sources: [2018-pv-tech-metallization-interconnection-bifacial-shj, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-taiyangnews-heterojunction-technology-report, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-nrel-getting-ahead-of-curve-pv-assessment]
tags: [interconnect, ECA, Ag-epoxy, low-T-cure, SHJ-stringing]
created: 2026-04-26
updated: 2026-04-26
---

# Electrically conductive adhesive (ECA)

**Slug:** `reagents/electrically-conductive-adhesive-ECA` · **Type:** reagent

## What it is

An electrically conductive adhesive (ECA) is a polymer (typically epoxy) loaded with conductive filler (Ag flakes, Ag-coated Cu, or Cu particles) that cures at low temperature (~150–180 °C) to form simultaneously the *mechanical* and *electrical* bond between the cell front grid and the interconnect ribbon. ECA is the SHJ-compatible alternative to solder, since SHJ a-Si:H cannot tolerate the >250 °C reflow of standard PbSn / SnAg ribbons.

## Common uses (in this corpus)

ECA appears throughout SHJ module-level workflows in this corpus — it is the **standard interconnect bonding chemistry** for SHJ stringing because it cures within the a-Si:H thermal budget. It is especially relevant to plated-Cu cells: with an Ag or Sn cap, the cell finger meets the ECA bond surface and inherits any ECA failure mode (discoloration, hydrolysis, voiding) under DH. Lachowicz 2023/2024 and TaiyangNews 2023 document SHJ mini-modules and full modules using ECA + multibusbar (MBB) Cu-ribbon interconnect.

## Properties / specifications

- Cure temperature: 150–180 °C, 5–30 min (SHJ-compatible).
- Filler: Ag flakes (typical), Ag-coated Cu (Ag-savings variant), or pure Cu (research only).
- Filler loading: ~70–85 wt% for percolation; bulk resistivity 10−4 to 10−5 Ω·cm typical.
- Adhesion: 1–5 N/mm peel strength on cell front grid; degrades under DH with module-package-specific kinetics.
- Glass transition Tg: ~80–120 °C — ECA softens at module operating-extreme temperatures.
- Shelf life: 3–6 months refrigerated; ECA hydrolyzes / settles outside spec window.

## Suppliers

- Henkel (Loctite) — Ablestik ICP series; URL https://www.henkel-adhesives.com
- Hitachi Chemical / Resonac — EN-4901 / SR-1100 PV ECA; URL https://www.resonac.com
- DuPont — Solamet PV4xx ECA series; URL https://www.dupont.com
- Three Bond, Namics — additional vendors active in PV interconnect.

## Alternatives

- Soldered ribbons (SnAg / SnPb / SnAgCu) — used in PERC/TOPCon; **not** SHJ-compatible above ~250 °C reflow.
- Multibusbar (MBB) low-T solder pastes — borderline SHJ-compatible at the upper end.
- [[reagents/multibusbar-Cu-ribbon]] — the *ribbon* the ECA bonds to, not an alternative to the ECA itself.

## Gotchas / failure modes

- [[failure-modes/ECA-discoloration-after-DH]] — epoxy matrix yellows / browns under DH, signaling oxidation and resin degradation; correlated with peel-strength loss.
- [[failure-modes/finger-adhesion-loss-after-DH]] — ECA bond degrades, breaking the cell-to-ribbon connection; module power drop.
- [[failure-modes/Cu-finger-corrosion-encapsulant]] — Cu finger under ECA + encapsulant is exposed to acetic-acid / moisture pathway; ECA can locally accelerate corrosion via filler galvanic effects.

## Citing sources

- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — overview of SHJ interconnection options; ECA is the default for plated-Cu cells.
- [[sources/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — CSEM mini-module aging with ECA-bonded MBB ribbons.
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — extended aging follow-up; ECA failure modes characterized.
- [[sources/2023-taiyangnews-heterojunction-technology-report]] — industry overview of SHJ interconnection ecosystem.
- [[sources/2024-nrel-getting-ahead-of-curve-pv-assessment]] — reliability assessment flagging ECA degradation as a known DH failure mode.
