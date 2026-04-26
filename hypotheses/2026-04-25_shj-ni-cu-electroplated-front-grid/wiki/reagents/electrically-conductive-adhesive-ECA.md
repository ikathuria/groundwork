---
type: reagent
slug: electrically-conductive-adhesive-ECA
aliases: [ECA, conductive adhesive, conductive epoxy, Ag-flake ECA]
cas: null (silver-filled epoxy mixture)
formula: epoxy / acrylic resin filled with Ag flakes (~70–80 wt%)
suppliers:
  - name: Henkel Loctite (e.g., Ablestik, Hysol)
    catalog: Ag-filled ECA pastes (e.g., 8290, AS9000)
    grade: production
    url: null
  - name: DELO / Panacol / ResCoat (Ag-free Cu-filled ECAs)
    catalog: production ECA
    grade: production
    url: null
  - name: DuPont / Solamet
    catalog: Solamet ECA (industry-specific)
    grade: production
    url: null
storage: -20 °C frozen; thaw to room temperature before use; 6–12 months at -20 °C; 24–72 h pot life at RT
hazards: moderate — uncured epoxy is a skin sensitiser; cured ECA is benign
known_failure_modes: [finger-adhesion-loss-after-DH, FF-degradation-contact-resistance, Cu-finger-corrosion-encapsulant]
sources: [2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-taiyangnews-heterojunction-technology-report, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-nrel-getting-ahead-of-curve-pv-assessment]
tags: [adhesive, interconnection, low-T-bonding, Ag-filled, shingle]
---

# Electrically conductive adhesive (ECA)

## What it is
A conductive epoxy or acrylic adhesive filled with silver flakes (typically ~70–80 wt%) that bonds ribbons or shingles to metal pads at curing temperatures of 130–160 °C — well below the soldering temperatures of standard PV ribbons. ECA is the preferred interconnection for plated-Cu and screen-printed low-T Ag cells where avoiding solder is desirable, and is the standard in shingled-cell architectures.

## Common uses
- Ribbon-to-Ag-pad attach on SHJ in lieu of soldering ([[2018-pv-international-metallization-shj]], [[2018-pv-tech-metallization-interconnection-bifacial-shj]]).
- Shingle-cell interconnection — overlapping cells bonded with ECA strips at the busbar edge ([[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]], [[2024-lachowicz-cu-plated-shj-aging-mini-modules]]).
- Module assembly using teamtechnik or Mondragon ECA stringers ([[2023-taiyangnews-heterojunction-technology-report]]).

## Key spec / concentration ranges
- Filler: ~70–80 wt% Ag flakes (~5–15 µm); some formulations now use Ag-coated Cu particles to reduce Ag content.
- Resin: epoxy or acrylic with latent hardener.
- Cure: 150 °C / 5–10 min typical (range 130–160 °C / 1–30 min).
- Cured volume resistivity: 5×10⁻⁵ – 5×10⁻⁴ Ω·cm (factor of 10–100 above bulk Ag).
- Contact resistance to Cu pad: ~0.1–1 mΩ·cm² typical; depends on pressure during cure.
- Mass per shingle in CSEM modules: ~3.5 mg per shingle, cured at 150 °C ([[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]], [[2024-lachowicz-cu-plated-shj-aging-mini-modules]]).
- Lap-shear strength: 5–15 MPa typical (cured).

## Alternatives / variants
- [[multibusbar-Cu-ribbon]] with LMPA solder coating — direct soldering alternative for non-shingle architectures.
- Ag-coated-Cu ECA — same role but lower Ag content.
- Sintered Ag paste (high-T) — high-conductivity alternative used in power electronics, NOT for SHJ (cure too hot).

## Gotchas
- Pot life at room temperature is only 24–72 h after thaw — coordinate cure with module assembly schedule.
- Long-term DH stability of ECA-bonded Cu is moderate; edge-initiated moisture ingress causes interface degradation in 1-cell mini-modules ([[2024-lachowicz-cu-plated-shj-aging-mini-modules]]).
- Curing pressure during ECA bonding affects contact resistance — too little pressure leaves Ag-flake gaps; too much squeezes adhesive out, leading to electrical opens.
- Ag-filled ECA does NOT eliminate Ag from the BOM — it consumes ~3–5 mg Ag per shingle, but at the module level this is comparable to or less than soldered tabbing pads.
- Cured ECA is brittle — module flex tests can crack the bond if substrate stress is high.

## Sources
- [[2018-pv-tech-metallization-interconnection-bifacial-shj]] — ECA gluing as Ag-saving alternative; reduces front-side LCT-Ag-paste mass by >50%.
- [[2018-pv-international-metallization-shj]] — ECA in SHJ M&I overview.
- [[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] / [[2024-lachowicz-cu-plated-shj-aging-mini-modules]] — ECA-bonded shingle modules on plated-Cu SHJ; ~3.5 mg per shingle, cure 150 °C.
- [[2023-taiyangnews-heterojunction-technology-report]] — teamtechnik / Mondragon ECA stringers for SHJ.
- [[2024-nrel-getting-ahead-of-curve-pv-assessment]] — ECA reliability framework.
