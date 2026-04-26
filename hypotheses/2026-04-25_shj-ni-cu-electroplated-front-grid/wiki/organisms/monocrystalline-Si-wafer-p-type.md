---
type: organism
slug: monocrystalline-Si-wafer-p-type
organism_type: wafer
source: commercial wafer suppliers (LONGi, Zhonghuan, GCL) for CZ p-type c-Si
external_id: n/a (commodity; ITRPV-spec resistivity 1–3 Ω·cm, boron-doped, ~170–180 µm for PERC)
characteristics:
  - boron-doped (p-type) Czochralski-grown monocrystalline silicon wafer
  - canonical PERC / Al-BSF substrate; relevant in this hypothesis as the comparator wafer for older Cu-plating literature (Bartsch 2010, Rehman 2014, Jeon 2017) developed for homojunction architectures
  - typical bulk resistivity 1–3 Ω·cm; thickness 170–180 µm
  - subject to boron-oxygen light-induced degradation (BO-LID) — distinct from Cu-LID, but compounds the lifetime-loss story when Cu contamination is also present
  - NOT canonical for SHJ — included here because much of the foundational electroplated-Ni-as-Cu-barrier literature was developed on p-type wafers and must be re-validated on n-type CZ for SHJ
known_failure_modes: [Cu-diffusion-into-c-Si, Voc-degradation-Cu-contamination]
sources: [2012-nrel-aluminum-metallization-tlm-printed, 2014-fraunhofer-peel-testing-ribbons-solar-cells, 2014-rehman-nicu-plating-csi-review, 2015-lindroos-cu-lid-aalto-thesis, 2017-jeon-electroless-ni-front-metallization, 2019-karas-damp-heat-degradation-shj-cu, 2022-karas-cu-outdiffusion-damp-heat, 2023-tepner-printing-tech-csi-review, pvtech-metallization-challenges-cell-manufacturing]
tags: [wafer, p-type, monocrystalline, CZ, PERC-precursor, comparator]
created: 2026-04-26
updated: 2026-04-26
---

# Monocrystalline p-type Si wafer (CZ)

**Slug:** `organisms/monocrystalline-Si-wafer-p-type` · **Type:** organism (substrate / device under test)

## What it is

A boron-doped, Czochralski-grown monocrystalline silicon wafer — the canonical PERC / Al-BSF substrate. In this hypothesis it does not appear as the device under test of the experiment itself (which is SHJ on n-type CZ), but rather as the **comparator wafer** for the foundational Cu-electroplating literature: Bartsch 2010 (LIP on PERC), Rehman 2014 (Ni/Cu plating review for c-Si), Jeon 2017 (electroless Ni on c-Si), and Karas 2019/2022 (damp-heat aging) all developed their barrier-stack and process knowledge on p-type wafers, and that literature must be **re-validated on n-type CZ for SHJ** before its conclusions transfer.

## Geometry / format

- Bulk resistivity: 1–3 Ω·cm typical for PERC
- Wafer thickness: ~170–180 µm (PERC era)
- Surface: alkaline-textured pyramids
- Subject to boron-oxygen light-induced degradation (BO-LID) — lifetime drops over the first ~24 h of illumination at room temperature unless permanently regenerated; a separate phenomenon from Cu-LID but compounds Cu contamination's signature in lifetime-vs-time data

## Construction (where relevant)

(Bare wafer; no construction at the wafer stage. Where used in this corpus, it is the substrate for PERC-style cells whose plating-stack lessons inform — but do not directly replace — the SHJ design.)

## Common pitfalls

- [[failure-modes/Cu-diffusion-into-c-Si]] — same physics as in n-type CZ; Cu is a fast interstitial diffuser in any c-Si
- [[failure-modes/Voc-degradation-Cu-contamination]] — Voc loss from Cu-induced recombination; on p-type the BO-LID background must be deconvolved from the Cu-LID signature, which is a methodological subtlety that the SHJ-on-n-type case largely avoids

## Citing sources

- [[sources/2012-nrel-aluminum-metallization-tlm-printed]] — TLM on Al-metallized p-type cells
- [[sources/2014-fraunhofer-peel-testing-ribbons-solar-cells]] — peel-test methodology developed on p-type Al-BSF cells
- [[sources/2014-rehman-nicu-plating-csi-review]] — Ni/Cu plating review with p-type wafer corpus
- [[sources/2015-lindroos-cu-lid-aalto-thesis]] — Cu LID studies including p-type CZ
- [[sources/2017-jeon-electroless-ni-front-metallization]] — electroless Ni on p-type c-Si front
- [[sources/2019-karas-damp-heat-degradation-shj-cu]] — comparator p-type cells in DH study
- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — Cu out-diffusion mechanistic work, p-type substrates
- [[sources/2023-tepner-printing-tech-csi-review]] — printing-tech review with p-type baseline
- [[sources/pvtech-metallization-challenges-cell-manufacturing]] — manufacturing-side view, p-type and n-type comparison
