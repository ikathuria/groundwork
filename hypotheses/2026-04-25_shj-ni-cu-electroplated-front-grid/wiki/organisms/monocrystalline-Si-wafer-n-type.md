---
type: organism
slug: monocrystalline-Si-wafer-n-type
organism_type: wafer
external_id: Cz-n-Si (M6/M10/G12 pseudo-square)
characteristics:
  - Phosphorus-doped Czochralski-grown monocrystalline silicon
  - Resistivity 1–10 Ω·cm typical for SHJ; bulk minority-carrier lifetime > 1 ms after passivation
  - 130–155 µm production thickness in 2023; SHJ pushing to 100 µm by 2034
  - (100) surface, alkaline (KOH/NaOH) random-pyramid texture, ~3 µm pyramid height
  - Very low LeTID susceptibility (vs B-doped p-type)
  - The mandatory base wafer for all SHJ cells (M6/M10/G12)
known_failure_modes: [Cu-diffusion-into-c-Si, Cu-LID-light-induced-degradation, Cu3Si-formation-at-Si-interface, Ni-barrier-pinholes, Voc-degradation-Cu-contamination]
sources: [2010-bartsch-lip-pvsc, 2014-rehman-nicu-plating-csi-review, 2015-lindroos-cu-lid-aalto-thesis, 2018-electrochemsci-barrier-properties-electroplated-ni, 2018-pvtech-metallization-shj-cells-modules, 2019-hatt-noble-shj-solrrl, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration, 2023-taiyangnews-heterojunction-technology-report, 2023-tepner-printing-tech-csi-review, 2024-itrpv-15th-edition-roadmap, 2025-yacouba-shj-silver-free-metallization-progPV]
tags: [wafer, n-type, Cz-Si, SHJ, base-substrate, phosphorus-doped]
---

# n-type monocrystalline silicon wafer (Cz)

## What it is
Phosphorus-doped Czochralski-grown monocrystalline silicon wafer — the universal starting substrate for SHJ cells (and increasingly TOPCon and IBC). For the SHJ-Ni/Cu front-grid hypothesis, every certified record cell, every damp-heat reliability dataset, and every cost simulation runs on this wafer class.

## Standard dimensions / spec
- Crystal growth: Cz with phosphorus dopant, base resistivity 1–10 Ω·cm.
- Surface: (100) orientation, alkaline-textured random pyramids (~3 µm height) on both faces for SHJ.
- Format: M6 (166 mm), M10 (182 mm), or G12 (210 mm) pseudo-square; M2 (156.75 mm) in legacy / lab use.
- Thickness 2023: ~155 µm typical for SHJ; trajectory to 125 µm by 2027 and 100 µm by 2034 ([[2024-itrpv-15th-edition-roadmap]]).
- Bulk lifetime > 1 ms after a-Si:H passivation; supports SHJ Voc up to 750 mV.
- Cu interstitial diffusivity in Si: D ≈ 3×10⁻⁴·exp(−0.18 eV/kT) cm²/s — interstitial Cu crosses a 400 µm wafer in <11 h at room temperature ([[2015-lindroos-cu-lid-aalto-thesis]]).
- Ni interstitial diffusivity comparable to Cu (D ≈ 1.7×10⁻⁴·exp(−0.15 eV/kT)) — Ni is itself a fast diffuser if it reaches bare Si ([[2015-lindroos-cu-lid-aalto-thesis]]).

## Common pitfalls / handling notes
- Even sub-ppb Cu in the c-Si bulk forms recombination centres (η′-Cu₃Si, deep band EC−0.15 to EC−0.58 eV) — Cu-LID is a permanent defect, stable at 200 °C ([[2015-lindroos-cu-lid-aalto-thesis]]).
- The TCO (ITO/IWO) on SHJ wafers acts as the *front-side* Cu diffusion barrier; with intact ITO, SIMS detects no Cu in the c-Si even with Cu paste directly on the TCO ([[2025-yacouba-shj-silver-free-metallization-progPV]]).
- For non-TCO architectures (PERC/AlBSF/TOPCon front), a sub-100 nm electroplated Ni barrier is the canonical Cu-Si separator — but Cheng et al. show 60 nm Ni is *not* sufficient at 300 °C ([[2018-electrochemsci-barrier-properties-electroplated-ni]]).
- HF dip immediately before plating is mandatory but native oxide regrows in seconds; HF-bearing PdCl₂ activation gives +42 mV Voc vs HF-free ([[2017-jeon-electroless-ni-front-metallization]]).
- LeTID and BO-LID (the dominant degradation modes of p-type Cz) are essentially absent in n-type — one of the structural reasons SHJ uses n-type exclusively.

## Failure modes commonly associated
- `[[../failure-modes/Cu-diffusion-into-c-Si]]` — central concern motivating the Ni barrier.
- `[[../failure-modes/Cu-LID-light-induced-degradation]]` — bulk recombination defect from interstitial Cu.
- `[[../failure-modes/Cu3Si-formation-at-Si-interface]]` — observed at 300–500 °C with thin Ni barriers.
- `[[../failure-modes/Ni-barrier-pinholes]]` — Ni pinholes route Cu directly to Si.
- `[[../failure-modes/Voc-degradation-Cu-contamination]]` — Voc / pFF as Cu-contamination tracers.

## Sources
- `[[2015-lindroos-cu-lid-aalto-thesis]]` — Cu-LID and Cu/Ni diffusivity in Si (foundational).
- `[[2014-rehman-nicu-plating-csi-review]]` — Ni/Cu plating review covering n-type and p-type.
- `[[2010-bartsch-lip-pvsc]]` — Ni-barrier thermal-aging Arrhenius data on Si.
- `[[2018-electrochemsci-barrier-properties-electroplated-ni]]` — Ni 60 vs 120 nm barrier benchmark on textured (100) n-Si.
- `[[2019-hatt-noble-shj-solrrl]]`, `[[2021-hatt-stable-cu-plated-shj-eupvsec]]` — n-type SHJ precursors with NOBLE plating.
- `[[2022-arena-sundrive-copper-metallisation-demonstration]]` — n-type wafer thickness ~155 µm trending to 125 µm by 2032.
- `[[2024-itrpv-15th-edition-roadmap]]`, `[[2023-taiyangnews-heterojunction-technology-report]]`, `[[2023-tepner-printing-tech-csi-review]]` — n-type / SHJ industry trajectory.
- `[[2025-yacouba-shj-silver-free-metallization-progPV]]` — TCO as Cu diffusion barrier on n-type SHJ.
- `[[2018-pvtech-metallization-shj-cells-modules]]` — n-type SHJ cell architecture context.
