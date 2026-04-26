---
type: source
id: 2018-pv-international-metallization-shj
source_type: paper
title: "Metallization Techniques and Interconnection Schemes for High-Efficiency Silicon Heterojunction PV"
authors: ["Geissbühler, J.", "Faes, A.", "Lachowicz, A.", "Ballif, C.", "Despeisse, M."]
year: 2018
doi: ""
url: http://solar-media.s3.amazonaws.com/assets/PVCellTech18/Metallization%20techniques%20and%20interconnection%20schemes%20for%20high-efficiency%20silicon%20heterojunction%20PV.pdf
raw_path: raw/papers/2018-pv-international-metallization-shj.pdf
tags: [SHJ, metallization, low-T-Ag, Cu-plating, SmartWire, CSEM]
created: 2026-04-26
updated: 2026-04-26
---

# Metallization Techniques and Interconnection Schemes for High-Efficiency Silicon Heterojunction PV

**Geissbühler, J., Faes, A., Lachowicz, A., Ballif, C., Despeisse, M. (CSEM PV-center)** — *Photovoltaics International, 41, pp. 61–69, 2018*.

## Summary

CSEM/EPFL trade-press review of the three metallization options for SHJ (low-temperature-cured Ag screen print, Cu electroplating, multiwire SWCT) with quantitative cost benchmarks. The canonical reference establishing the SHJ thermal budget (≤200 °C) and the consequence — Ag pastes 2–3× more resistive than firing-through pastes used on PERC, drives Ag mass ~1 g/cell on legacy designs. Documents the Cu-plating route as: PVD-seed (or thin Ni adhesion layer) on TCO + inkjet hot-melt mask + electroplated Cu, with the warning that direct Cu plating on TCO has adhesion problems and "even with the addition of a nickel-plated adhesion layer, evidence of micro-voids has been found."

## Key claims

- SHJ thermal budget is ~200 °C, set by a-Si:H passivation; precludes ~800 °C firing of standard Ag pastes — must use low-curing-temperature Ag, which is ~2–3× more resistive than firing-through Ag.
- Best low-T Ag bulk resistivity has dropped from 18 µΩ·cm (2009) to 5.5 µΩ·cm (2018), with prototype pastes <5 µΩ·cm — compared to 1.58 µΩ·cm for pure Ag.
- Standard 5BB SHJ cell uses ~1 g of Ag paste (40% on busbars); SmartWire (SWCT, 18 wires) reduces this to 60 mg/cell while allowing finger line resistance up to 10 Ω/cm (vs <1 Ω/cm for 2BB).
- Cu electroplating on SHJ: TCO is conductive (cannot act as plating mask, unlike SiNₓ on PERC) → requires either an organic/dielectric mask + PVD seed *or* a thin electroplated Ni adhesion layer.
- Direct Cu plating on TCO has "adhesion problems"; even with electroplated Ni adhesion layer, "evidence of micro-voids has been found, which might lead to reduced finger adhesion."
- PVD seed (e.g., Cu/Al stack) at sheet resistance of a few Ω/sq enables uniform plating without LIP, and acts as the diffusion barrier.
- Cu plating delivers ~25.1% (Kaneka, sub-100 nm Cu fingers) and 23.1% (Silevo/Tesla, electroplated Cu gridlines) on SHJ. Sunpreme 402 Wp 72-cell bifacial module is the canonical industrial demonstration.
- Patterning options reviewed: low-cost photolithography (dry photosensitive film), screen-printed insulating mask, dielectric + laser transfer, inkjet functional ink that prevents resist cross-linking, and inkjet hot-melt mask (Hermans/CSEM, finger width <20 µm achievable).
- Cu-plating finger line resistance <0.5 Ω/cm is "easily achievable" — far below the >5 Ω/cm typical of fine-line Ag.

## Methods used

- [[methods/screen-printed-Ag-paste]] — the SHJ baseline (LCT-Ag, ~200 °C cure).
- [[methods/Cu-electroplating-acid-bath]] — primary alternative discussed.
- [[methods/light-induced-plating]] — historical default for Cu-on-Si plating; CSEM uses PVD-seed-and-DC instead.
- [[methods/inkjet-mask-patterning]] — hot-melt inkjet mask (Hermans 2014) referenced as the cost-competitive masking route.
- [[methods/photolithography-mask-patterning]] — dry-film photolithography as a research-grade alternative.
- [[methods/laser-ablation-of-dielectric]] — laser-transfer + dielectric mask option.
- [[methods/Ni-sputter-deposition]] — implicit in PVD-seed adhesion layer discussions.
- [[methods/electroplated-Ni-Cu-stack]] — the Ni-adhesion-layer-then-Cu route flagged as having micro-void problems.

## Reagents

- [[reagents/low-T-Ag-paste-generic-SHJ-grade]] — the Ag-paste baseline being compared (Namics data, 5.5 µΩ·cm).
- [[reagents/ITO-transparent-conductive-oxide]] — SHJ front TCO; the substrate Cu must adhere to.
- [[reagents/acid-Cu-sulfate-bath]] — the Cu electrolyte.
- [[reagents/inkjet-plating-resist]] — hot-melt inkjet mask material.

## Organisms / substrates

- [[organisms/monocrystalline-Si-wafer-n-type]] — SHJ standard substrate.
- [[organisms/full-size-module-72-cell]] — Sunpreme 402 Wp bifacial module example.

## Failure modes flagged

- [[failure-modes/finger-adhesion-loss-after-DH]] — directly: "the adhesion of copper may be problematic" on TCO; even with Ni adhesion layer, "evidence of micro-voids has been found."
- [[failure-modes/Ni-barrier-pinholes]] — micro-void evidence in plated-Ni adhesion layers is the same physical phenomenon as pinholes / discontinuity.
- [[failure-modes/silver-supply-bottleneck]] — paper opens with the cost driver: SHJ Ag use ~2× a PERC cell.
- [[failure-modes/FF-degradation-contact-resistance]] — line resistance is the central performance lever; LCT Ag is the rate-limiter.
- [[failure-modes/plating-resist-undercut]] — implicit in masking discussion (Hermans hot-melt design specifically aims to control finger edges).

## Supports / contradicts

- **Supports:** [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — same author group (CSEM/EPFL/Meyer Burger), expanded version with explicit cost tables for soldering vs ECA vs SWCT.
- **Supports:** [[sources/2018-pvtech-metallization-shj-cells-modules]] — same group's 2018 PV-Tech protocol article; identical message with module-level focus.
- **Supports:** [[sources/2023-tepner-printing-tech-csi-review]] — Tepner & Lorenz reach the same conclusion that fine-line LCT-Ag screen-print is the SHJ industrial baseline plating must beat.
- **Contradicts:** [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — Geissbühler flags Ni-plated-adhesion-layer micro-voids as a problem; SunDrive proprietary process claims direct adhesion to TCO without seed-layer micro-voids.

## Notable quotes

> "A consequence of the significantly different cell architecture, and of the use of hydrogenated amorphous silicon, is a limitation of the maximum temperature acceptable for metallization, typically around 200°C. This clearly prohibits the use of silver metallization pastes used for homojunction devices, which are typically sintered around 800°C." — *p. 62*

> "The adhesion of copper may be problematic and will require either specific pre-treatment or a thin electroplated nickel layer. However, even with the addition of a nickel-plated adhesion layer, evidence of micro-voids has been found, which might lead to reduced finger adhesion." — *pp. 65–66*

> "Remarkable efficiencies have recently been achieved by using copper electroplating for the metallization of SHJ devices – for instance, 25.1% by Kaneka, and 23.1% for Silevo." — *p. 66*
