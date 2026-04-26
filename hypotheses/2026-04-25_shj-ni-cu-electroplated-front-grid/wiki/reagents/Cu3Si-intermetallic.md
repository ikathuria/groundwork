---
type: reagent
slug: Cu3Si-intermetallic
aliases: [copper silicide, η-Cu3Si, eta-Cu3Si phase]
cas: 12159-07-8
suppliers: []
storage: forms in situ at the Cu/Si interface; not a purchased reagent
hazards: low (as formed phase); the *upstream* Cu and Si are routine
known_failure_modes: [Cu3Si-formation-at-Si-interface, Cu-diffusion-into-c-Si, Voc-degradation-Cu-contamination, Cu-LID-light-induced-degradation]
sources: [2015-lindroos-cu-lid-aalto-thesis, 2018-electrochemsci-barrier-properties-electroplated-ni, 2022-karas-cu-outdiffusion-damp-heat]
tags: [intermetallic, silicide, reaction-product, failure-mode-anchor, Cu-Si-interface]
created: 2026-04-26
updated: 2026-04-26
---

# Cu3Si intermetallic

**Slug:** `reagents/Cu3Si-intermetallic` · **Type:** reagent

## What it is

Copper silicide (η-Cu3Si) is the room-temperature stable intermetallic phase that forms at a direct Cu/Si contact. It is **technically a reaction product**, not a purchased reagent, but it is kept as a reagent entity in this wiki so the graph can track every phase that lives at an interface in the cell stack. Cu3Si nucleates whenever a Ni (or PVD seed, or TCO) barrier fails — it is the chemical signature of barrier breakdown and the entry point for the Cu-into-c-Si failure cascade.

## Where it forms

- **Pinhole / discontinuity in the Ni barrier:** any place where Cu is in direct contact with Si begins to form Cu3Si at room temperature; growth accelerates at >150–200 °C.
- **At the c-Si interface after barrier breakdown under DH:** Karas 2022 SIMS detects Cu in c-Si bulk after 1000–3500 h DH; this is the macroscopic readout of microscopic Cu3Si nucleation followed by dissolved Cu interstitial diffusion.
- **Adjacent intermetallics in plated Ni/Cu/Sn stacks:** ε-Cu3Sn and η-Cu6Sn5 form by analogous low-T interdiffusion at the Cu/Sn interface and produce Kirkendall voids; the Cu3Si chemistry is the c-Si-interface analogue.

## Properties / specifications

- Phase: η-Cu3Si (also called η' / η'' polymorphs); CAS 12159-07-8; formula Cu3Si.
- Formation enthalpy: ΔHf ≈ −38 kJ/mol per formula unit (room-T stable).
- Growth kinetics: parabolic at >300 °C; effectively unbounded at SHJ process temperatures (<200 °C) given long enough dwell + Cu reservoir.
- Detection: SIMS (Cu signal at c-Si surface above background), TEM cross-section, EDS line-scan at the cell front contact.
- Consequence in c-Si: Cu interstitials liberated from any Cu3Si reservoir create deep mid-gap recombination centers (Ec − 0.16 eV) that catastrophically reduce minority-carrier lifetime — see [[failure-modes/Cu-LID-light-induced-degradation]].

## Suppliers

Not applicable — Cu3Si is a reaction product, formed in situ from upstream Cu (the [[reagents/acid-Cu-sulfate-bath]] deposited finger) and Si (the wafer).

## Alternatives

There is no "alternative" to Cu3Si — its formation is what the Ni barrier is engineered to prevent.

- [[reagents/nickel-sulfamate-bath]] — the upstream chemistry whose Ni layer prevents Cu3Si from ever nucleating.
- [[reagents/nickel-phosphorus-NiP-electroless]] — alternative barrier chemistry (amorphous NiP) reported to give more uniform coverage.

## Gotchas / failure modes

- [[failure-modes/Cu3Si-formation-at-Si-interface]] — direct: Cu3Si formation *is* this failure mode. The phase is the marker.
- [[failure-modes/Cu-diffusion-into-c-Si]] — Cu3Si is the source-reservoir for the dissolved Cu interstitials that subsequently diffuse into c-Si.
- [[failure-modes/Voc-degradation-Cu-contamination]] — measurable cell-level outcome of dissolved Cu in c-Si.
- [[failure-modes/Cu-LID-light-induced-degradation]] — Lindroos 2015 establishes the lifetime / Voc penalty of even sub-ppb Cu in c-Si bulk.

## Citing sources

- [[sources/2015-lindroos-cu-lid-aalto-thesis]] — comprehensive Cu-LID study; covers Cu3Si formation thermodynamics and the lifetime consequence in c-Si.
- [[sources/2018-electrochemsci-barrier-properties-electroplated-ni]] — barrier-properties study where Cu3Si formation is the test endpoint defining barrier failure.
- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — discusses Cu-Sn IMC formation (Cu3Sn / Cu6Sn5) as the analogous low-T interdiffusion phenomenon at the cap-stack interface; closest available slug for that IMC chemistry.
