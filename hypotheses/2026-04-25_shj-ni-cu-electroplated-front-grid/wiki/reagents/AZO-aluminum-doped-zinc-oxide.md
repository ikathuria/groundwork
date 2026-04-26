---
type: reagent
slug: AZO-aluminum-doped-zinc-oxide
aliases: [Al-doped ZnO, AZO, ZnO:Al]
cas: 1314-13-2 (ZnO base)
formula: ZnO:Al (Al ~1-2 at%)
suppliers:
  - name: Umicore / GfE / Plansee (sputter targets)
    catalog: AZO sputter targets (Al doping 1–2 wt%)
    grade: 4N
    url: null
storage: target room-temperature, dry; AZO film moisture-sensitive — loses conductivity on prolonged DH exposure
hazards: low — Zn / Al oxides are nuisance dusts; no acute hazards as deposited films
known_failure_modes: [Cu-finger-corrosion-encapsulant, Ni-Cu-line-resistance-rise-DH]
sources: [2023-taiyangnews-heterojunction-technology-report, 2024-lachowicz-cu-plated-shj-aging-mini-modules]
tags: [TCO, In-free, sputtered-oxide, sustainability]
---

# AZO — aluminium-doped zinc oxide (TCO)

## What it is
An In-free transparent conductive oxide based on ZnO doped with ~1–2 at% Al. Cheaper and more sustainable than ITO/IWO at TW scale because zinc and aluminium are abundant, but historically more sensitive to humidity (the ZnO matrix corrodes in damp heat) and lower performance on SHJ at the same thickness. Used in AZO/ITO bilayer stacks to reduce indium content by up to 85% (FZJ data).

## Common uses
- AZO/ITO TCO stacks on SHJ where the ZnO bulk replaces the In-rich middle of the TCO and a thin ITO cap protects against humidity ([[2023-taiyangnews-heterojunction-technology-report]]).
- Alternative TCO referenced for module-stability strategy in plated-Cu SHJ work ([[2024-lachowicz-cu-plated-shj-aging-mini-modules]]).

## Key spec / concentration ranges
- Al doping 1–2 at% (typical); ZnO:Al composition.
- Sputtered thickness 70–200 nm depending on stack design.
- Sheet resistance 30–100 Ω/sq (achievable similar to ITO with thicker films).
- Mobility 20–40 cm²/V·s; carrier concentration ~10²⁰ cm⁻³.
- Optical transparency >90% in 400–800 nm; slightly more parasitic IR absorption than ITO at matched sheet resistance.
- Deposition: DC magnetron sputtering, T < 200 °C for SHJ compatibility.
- AZO/ITO stack reduces indium consumption ≈85% (FZJ).

## Alternatives / variants
- [[ITO-transparent-conductive-oxide]] — mainstream baseline; AZO is the cheaper less-stable In-free comparator.
- [[IWO-tungsten-doped-indium-oxide]] — high-mobility In-doped variant.
- AZO/ITO bilayer — practical compromise that retains plating-process compatibility while cutting indium.

## Gotchas
- ZnO bulk is hygroscopic and can corrode in 85 °C / 85% RH damp heat; bare AZO is NOT recommended as the outer TCO for plated-Cu modules. Always cap with thin ITO or include edge sealing.
- Cu plating chemistry compatibility is less well characterised than ITO — verify finger adhesion + ρc before committing to a full plated-Cu run on AZO-only.
- AZO contact resistivity to Cu pastes is generally higher than to ITO (limited published data).

## Sources
- [[2023-taiyangnews-heterojunction-technology-report]] — AZO/ITO 85% In reduction stack (FZJ data); industry-level discussion.
- [[2024-lachowicz-cu-plated-shj-aging-mini-modules]] — AZO referenced as TCO alternative under module-stability strategy.
