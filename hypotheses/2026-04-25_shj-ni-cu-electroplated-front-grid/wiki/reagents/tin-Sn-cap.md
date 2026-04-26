---
type: reagent
slug: tin-Sn-cap
aliases: [Sn cap, tin finishing layer, plated Sn, MSA Sn]
cas: 7440-31-5 (Sn metal)
formula: Sn (~1 µm)
suppliers:
  - name: Atotech (MKS)
    catalog: Solar plating line — Sn cap chemistry (e.g., Stannostar / Sulfotech)
    grade: production
    url: https://www.atotech.com/products/general-metal-finishing/solar-industry/
  - name: MacDermid Enthone / Coventya
    catalog: methanesulfonate-based Sn plating baths
    grade: production
    url: null
storage: room-temperature; Sn whiskering risk on plated parts in long ambient storage
hazards: low (Sn metal); methanesulfonic acid in plating bath is corrosive
known_failure_modes: [Cu-out-diffusion-through-cap-stack, Cu-finger-corrosion-encapsulant, finger-adhesion-loss-after-DH, EVA-acetic-acid-corrosion]
sources: [2010-bartsch-lip-pvsc, 2014-rehman-nicu-plating-csi-review, 2019-karas-damp-heat-degradation-shj-cu, 2022-arena-sundrive-copper-metallisation-demonstration, 2022-karas-cu-outdiffusion-damp-heat, atotech-solar-industry-overview]
tags: [cap-layer, oxidation-protection, solderability, finishing-layer, low-cost]
---

# Tin (Sn) cap

## What it is
A thin (~1 µm) tin finishing layer electroplated over the Cu finger to prevent oxidation and to enable standard ribbon soldering. Sn is dramatically cheaper than Ag and is the default cap in Atotech's commercial Ni/Cu/Sn stack and in Bartsch et al.'s foundational Ni/Cu/Sn LIP work. The trade-off vs. Ag is that Cu-Sn intermetallic compounds (Cu3Sn, Cu6Sn5) and Kirkendall voids form during damp heat, providing an out-diffusion path for Cu.

## Common uses
- Outer cap on the Ni/Cu/Sn electroplated front grid in industrial plated metallization ([[atotech-solar-industry-overview]], [[2010-bartsch-lip-pvsc]]).
- LIP Sn cap (~1 µm) in Karas et al. damp-heat experiments on c-Si Ni/Cu/Sn stack ([[2019-karas-damp-heat-degradation-shj-cu]], [[2022-karas-cu-outdiffusion-damp-heat]]).
- Solderable finish for Maxwell's SHJ Cu plating roadmap process ([[2023-taiyangnews-heterojunction-technology-report]] — Sn plating after Cu).
- Capping option in SunDrive's plated-Cu SHJ ([[2022-arena-sundrive-copper-metallisation-demonstration]]).

## Key spec / concentration ranges
- Thickness ~1 µm typical (Karas: 1 µm LIP Sn; Atotech "ultra-thin").
- Bulk Sn resistivity 11.5 µΩ·cm (higher than Cu but cap layer is thin so contribution is small).
- Bath chemistry: methanesulfonate-based (Sn(MSA)2 + free MSA + brightener) is the modern standard; replaces older fluoroborate baths.
- Solderability: compatible with Pb-free (96.5Sn/3.5Ag, SnBiAg) and Pb-Sn (60Sn/40Pb) ribbons.
- IMC formation kinetics: η-Cu6Sn5 forms quickly at 25–85 °C; ε-Cu3Sn dominates at higher temperatures and in extended DH.
- Kirkendall voids appear at the Cu/Cu3Sn interface every 1–2 µm after 2000 h DH ([[2022-karas-cu-outdiffusion-damp-heat]]).
- pFF loss in Ni/Cu/Sn DH: 82.1% → 77.0% at 2000 h on EVA; J02 doubles ([[2022-karas-cu-outdiffusion-damp-heat]]).

## Alternatives / variants
- [[silver-Ag-cap]] — more expensive, less oxidation-prone, but still allows grain-boundary Cu diffusion.
- Sn-Ag eutectic cap (96.5Sn/3.5Ag, 8–10 µm) — used in some industrial processes for direct ribbon attach without flux.
- (Cu,Ni)6Sn5 phase stabilisation via 9 at% Ni co-deposition into Cu — slows Kirkendall void growth ([[2022-karas-cu-outdiffusion-damp-heat]]).

## Gotchas
- Cu-Sn IMC + Kirkendall void formation at Cu/Cu3Sn interface is the central DH failure mode for Sn-capped fingers — voids appear every 1–2 µm after 2000 h, and Cu accumulates on the outer Sn surface ([[2022-karas-cu-outdiffusion-damp-heat]]).
- Pure Sn is prone to whisker growth (especially on Cu) — addition of trace Bi or Ag, or annealing, suppresses this; relevant for long-term reliability.
- Sn plating bath chemistry must be tightly controlled: pH, current density, brightener concentration. Burnt deposits make IMC + void formation worse.
- POE encapsulation reduces (but does not eliminate) Cu out-diffusion through Sn vs. EVA — ~3× less surface Cu after 3500 h DH ([[2022-karas-cu-outdiffusion-damp-heat]]).
- For SHJ specifically, the Sn deposition must remain ≤200 °C process-wide; standard methanesulfonate Sn plating runs at ~50 °C, which is fine.

## Sources
- [[atotech-solar-industry-overview]] — Sn cap as one of two industrial Atotech finishing options.
- [[2010-bartsch-lip-pvsc]] — Ni/Cu/Sn LIP stack with thermal accelerated aging — foundational Fraunhofer ISE work.
- [[2014-rehman-nicu-plating-csi-review]] — review citing Sn cap as the lower-cost alternative to Ag for the Ni/Cu finishing step.
- [[2019-karas-damp-heat-degradation-shj-cu]] / [[2022-karas-cu-outdiffusion-damp-heat]] — quantitative DH degradation of Sn-capped fingers; Cu out-diffusion + Kirkendall void mechanism.
- [[2022-arena-sundrive-copper-metallisation-demonstration]] — Sn cap option in SunDrive plated-Cu SHJ; SnBiAg / SnBiPb solders validated.
