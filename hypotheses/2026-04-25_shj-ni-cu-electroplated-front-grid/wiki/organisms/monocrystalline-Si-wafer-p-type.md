---
type: organism
slug: monocrystalline-Si-wafer-p-type
organism_type: wafer
external_id: Cz-p-Si (B- or Ga-doped, 156–166 mm)
characteristics:
  - Boron- or gallium-doped Czochralski monocrystalline silicon
  - Resistivity 1–3 Ω·cm typical for PERC/Al-BSF
  - 150–180 µm production thickness in 2023 (PERC/TOPCon-p)
  - Used as the historical Ni/Cu plating substrate (PERC/Al-BSF, 156×156 mm) in the foundational damp-heat work
  - Susceptible to BO-LID (B-O light-induced degradation) and LeTID
  - Not used for SHJ — but supplies the legacy DH-failure dataset that motivates the Ni barrier
known_failure_modes: [Cu-diffusion-into-c-Si, Cu-LID-light-induced-degradation, EVA-acetic-acid-corrosion, Voc-degradation-Cu-contamination, Ni-barrier-pinholes]
sources: [2010-bartsch-lip-pvsc, 2012-nrel-aluminum-metallization-tlm-printed, 2014-rehman-nicu-plating-csi-review, 2015-lindroos-cu-lid-aalto-thesis, 2017-jeon-electroless-ni-front-metallization, 2019-karas-damp-heat-degradation-shj-cu, 2022-karas-cu-outdiffusion-damp-heat, 2023-tepner-printing-tech-csi-review]
tags: [wafer, p-type, Cz-Si, PERC, Al-BSF, legacy, boron-doped]
---

# p-type monocrystalline silicon wafer (Cz)

## What it is
Boron-doped (sometimes Ga-doped) Czochralski monocrystalline silicon wafer — the dominant c-Si substrate from ~2005 through 2023, used in PERC and Al-BSF cell architectures. SHJ cells are *not* built on p-type wafers, but most of the foundational Cu-out-diffusion / damp-heat-failure datasets that motivate the Ni barrier in the present hypothesis were generated on p-type 156×156 mm PERC/Al-BSF cells.

## Standard dimensions / spec
- Crystal growth: Cz with B (or Ga) dopant, resistivity 1–3 Ω·cm.
- Format: 156×156 (M2 / standard), 158.75 (M4), 161.7 (M5), or 166 (M6) pseudo-square in 2018–2023 PERC manufacturing.
- Thickness 2023: 150 µm (all p-type formats per [[2024-itrpv-15th-edition-roadmap]]); thinning slower than n-type SHJ.
- Surface: alkaline-textured pyramids on (100); diffused n+ emitter (POCl₃) on the front for PERC.
- BO-LID present in B-doped Cz (mitigated by regeneration anneal); LeTID present in mc-Si and in some Cz.
- No TCO — direct Si/dielectric interface — so any plated Cu must be separated from Si by an explicit Ni (or NiSi) barrier.

## Common pitfalls / handling notes
- Direct Cu in contact with p-type Si causes immediate Cu-LID; barrier integrity is binary, not statistical ([[2015-lindroos-cu-lid-aalto-thesis]]).
- Karas et al. 2019/2022 EVA-encapsulated p-type PERC mini-modules with Ni/Cu/Sn or Ni/Cu/Ag plating: pFF dropped 4.7%abs and J02 increased >6× after 1000–3500 h DH; POE encapsulation prevented the loss ([[2019-karas-damp-heat-degradation-shj-cu]], [[2022-karas-cu-outdiffusion-damp-heat]]).
- p-type market share is collapsing: ITRPV projects p-type ceasing to dominate from 2024.
- SHJ-Ni/Cu hypothesis testing on p-type would *not* validate the SHJ-relevant TCO-mediated diffusion-barrier story — it tests only the Ni-barrier-on-bare-Si story (legacy PERC route).
- Good control wafer for accelerated-aging cross-validation: Bartsch 2010 thermal-aging Arrhenius experiments were on p-type FZ and Cz ([[2010-bartsch-lip-pvsc]]).

## Failure modes commonly associated
- `[[../failure-modes/Cu-diffusion-into-c-Si]]` — direct Cu-Si contact failure mode without TCO.
- `[[../failure-modes/Cu-LID-light-induced-degradation]]` — B-doped p-type especially vulnerable.
- `[[../failure-modes/EVA-acetic-acid-corrosion]]` — primary chemical driver of Cu out-diffusion in legacy PERC modules.
- `[[../failure-modes/Voc-degradation-Cu-contamination]]` — pFF tracer for Cu in bulk.
- `[[../failure-modes/Ni-barrier-pinholes]]` — failure mode central to PERC Ni/Cu plating.

## Sources
- `[[2010-bartsch-lip-pvsc]]` — Ni-barrier accelerated-aging on p-type FZ/Cz.
- `[[2014-rehman-nicu-plating-csi-review]]` — comprehensive p-type Ni/Cu reliability literature.
- `[[2015-lindroos-cu-lid-aalto-thesis]]` — Cu-LID characterised on B-doped Cz, B/Ga-doped FZ, and B-doped mc-Si.
- `[[2017-jeon-electroless-ni-front-metallization]]` — p-type homojunction Ni-Cu front contacts; Voc tracking.
- `[[2019-karas-damp-heat-degradation-shj-cu]]`, `[[2022-karas-cu-outdiffusion-damp-heat]]` — p-type Al-BSF/PERC mini-module DH-failure (EVA→acetic acid pathway).
- `[[2012-nrel-aluminum-metallization-tlm-printed]]` — Al/Si TLM contact-resistivity baseline on p-type.
- `[[2023-tepner-printing-tech-csi-review]]` — historical PERC printing context.
