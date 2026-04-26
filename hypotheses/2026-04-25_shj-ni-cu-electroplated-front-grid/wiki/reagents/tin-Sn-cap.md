---
type: reagent
slug: tin-Sn-cap
aliases: [Sn cap layer, Sn finish, plated Sn cap, tin capping layer]
cas: 7440-31-5
suppliers:
  - name: Atotech (MKS)
    catalog: "Stannostar / Sn plating chemistry"
    grade: PV finish layer
    url: https://www.atotech.com/products/general-metal-finishing/solar-industry/
  - name: MacDermid Alpha
    catalog: "Solderon ST / Sn plating"
    grade: electronics / PV
    url: https://www.macdermidalpha.com
  - name: Coventya / Atotech (Stannostar variants)
    catalog: "Methanesulfonate Sn plating chemistry"
    grade: industrial
    url: https://www.atotech.com
storage: bath at controlled T (20–25 °C); short bath life vs Cu (Sn²⁺ oxidation)
hazards: medium — methanesulfonate Sn²⁺ baths; PPE required
known_failure_modes: [Cu-out-diffusion-through-cap-stack, Cu-finger-oxidation-damp-heat, Cu3Si-formation-at-Si-interface]
sources: [2014-rehman-nicu-plating-csi-review, 2019-karas-damp-heat-degradation-shj-cu, 2022-arena-sundrive-copper-metallisation-demonstration, 2022-karas-cu-outdiffusion-damp-heat, 2023-taiyangnews-heterojunction-technology-report, atotech-solar-industry-overview]
tags: [Sn-cap, finish-layer, oxidation-protection, plated-stack-tail, IMC-Cu6Sn5, Kirkendall-voids]
created: 2026-04-26
updated: 2026-04-26
---

# Tin (Sn) cap layer

**Slug:** `reagents/tin-Sn-cap` · **Type:** reagent

## What it is

The Sn cap is a thin (~0.5–2 µm) plated tin finish on top of the plated Cu finger. Its function — like the Ag cap — is to protect Cu from oxidation and provide a solderable surface. Sn is the lower-cost alternative to [[reagents/silver-Ag-cap]] and is the "Cu/Sn" tail of the Atotech-marketed Ni/Cu/Sn stack. **However:** Sn forms intermetallic compounds (IMCs) with Cu — ε-Cu3Sn and η-Cu6Sn5 — which grow even at low temperature and produce Kirkendall voids at the Cu/Sn interface (Karas 2022).

## Common uses (in this corpus)

In this corpus Sn cap is the **cost-down alternative** to the Ag cap on plated-Cu cells. Atotech's product page markets Ni/Cu/Sn alongside Ni/Cu/Ag. SunDrive ARENA 2022 includes a Sn-capped variant. Karas 2022 / 2019 are the **damning forensic studies**: Sn-capped Cu cells under EVA + DH show Cu accumulating on the outer Sn surface with Cu3Sn / Cu6Sn5 IMC formation, plus Kirkendall voids at 1–2 µm spacing along the Cu/Sn interface. pFF dropped from 82.1 % → 77.0 % over 2000 h DH; J02 more than doubled.

## Properties / specifications

- Thickness: 0.5–2 µm (LIP-Sn in Karas 2022 ≈ 1 µm).
- Bulk resistivity: ~11 µΩ·cm (pure Sn) — much higher than Cu but the cap is thin so contribution is small.
- Deposition: light-induced plating (LIP) from methanesulfonate-Sn or sulfate-Sn bath; or thermal evaporation.
- IMC formation: Cu3Sn (ε) and Cu6Sn5 (η) form at room T at the Cu/Sn interface, accelerated under DH; Karas 2022 sees voids at 1–2 µm spacing.
- Kirkendall voids: form at Cu/Cu3Sn interface due to faster Cu diffusion into Sn than Sn into Cu; impurities (S, Cl, C, O from acid plating baths) enhance void formation.
- Acetic-acid + DH behavior: under EVA, Cu reaches outer Sn surface; SIMS shows ~3× higher c-Si Cu surface concentration than POE sister cells.
- Solid-solubility with Cu: very low below ~200 °C; outdiffusion is by Cu3Sn / Cu6Sn5 IMC growth, not solid-solution diffusion.

## Suppliers

- Atotech (MKS) — Stannostar / Sn plating chemistry as part of the PV Ni/Cu/Sn stack; URL https://www.atotech.com/products/general-metal-finishing/solar-industry/
- MacDermid Alpha — Solderon ST Sn plating; URL https://www.macdermidalpha.com
- Methanesulfonate Sn variants from major plating-chemistry vendors.

## Alternatives

- [[reagents/silver-Ag-cap]] — Ag finish; more expensive but no IMC pathway (although Ag also fails under EVA + DH per Karas 2022).
- Direct Cu (no cap) — used in SunDrive POE-encapsulated cells; eliminates the Cu-Sn IMC pathway entirely.
- Thicker Sn (with Cu6Sn5 self-limiting barrier) — Karas 2022 conjecture: thick-enough Sn might form a passivating IMC layer.
- Ni-doped Cu — forms more stable (Cu,Ni)6Sn5 IMC.

## Gotchas / failure modes

- [[failure-modes/Cu-out-diffusion-through-cap-stack]] — direct EDS evidence in Karas 2022: Cu reaches outer Sn surface after 1000+ h DH.
- [[failure-modes/Cu-finger-oxidation-damp-heat]] — Sn cap is the immediate oxidation-protection layer; failure exposes Cu directly.
- [[failure-modes/Cu3Si-formation-at-Si-interface]] — closely-related IMC chemistry (Cu3Sn / Cu6Sn5 at the Cu/Sn interface is analogous to the Cu3Si formation at the Cu/Si interface; the Cu3Si slug is the closest available entity for the IMC concept).

## Citing sources

- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — mechanistic anchor: Sn cap fails forensically under EVA + DH; Cu3Sn / Cu6Sn5 / Kirkendall voids characterized.
- [[sources/2019-karas-damp-heat-degradation-shj-cu]] — precursor paper; first DH-degradation evidence on Sn-capped plated-Cu cells.
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — SunDrive Sn-cap variant in the production pilot.
- [[sources/2014-rehman-nicu-plating-csi-review]] — review naming Sn cap as standard finish for Ni/Cu/Sn stack.
- [[sources/2023-taiyangnews-heterojunction-technology-report]] — industry HJT report; Ni/Cu/Sn stack option.
- [[sources/atotech-solar-industry-overview]] — Atotech sells Ni/Cu/Sn alongside Ni/Cu/Ag.
