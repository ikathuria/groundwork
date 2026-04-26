---
type: reagent
slug: boric-acid
aliases: [H3BO3, orthoboric acid]
cas: 10043-35-3
formula: H3BO3
suppliers:
  - name: Fisher / Thermo Scientific Chemicals
    catalog: bundled with nickel sulfamate kits (AA8902018 etc.); separate SKU for pure H3BO3
    grade: ACS / electroplating
    url: https://www.fishersci.com/
  - name: Atotech (MKS)
    catalog: bundled with proprietary Ni / Cu plating starter kits
    grade: production
    url: https://www.atotech.com/products/general-metal-finishing/solar-industry/
storage: room-temperature, dry, sealed
hazards: moderate — H360FD reproductive toxicity (Cat 1B); otherwise low acute toxicity
known_failure_modes: []
sources: [atotech-cupracid-ultra-a-tds, fisher-AA8902018-nickel-sulfamate-hydrate]
tags: [buffer, plating-additive, weak-acid]
---

# Boric acid (H3BO3)

## What it is
The standard pH buffer in nickel sulfamate, nickel sulfate (Watts), and many tin plating baths. H3BO3 stabilises the cathode-film pH (~4.0) during Ni deposition, suppressing Ni(OH)2 inclusion and burning at high current density. NOT used in acid Cu sulfate plating (no buffering need at the working pH ≈ 0).

## Common uses
- pH buffer in [[nickel-sulfamate-bath]] make-up (~30–40 g/L H3BO3).
- pH buffer in Sn or Sn-alloy cap plating baths ([[tin-Sn-cap]]).
- Bath stabiliser in commercial Atotech / Fisher Ni plating kits.

## Key spec / concentration ranges
- 30–40 g/L in Ni sulfamate baths (typical industrial range; not stated explicitly on Cupracid ULTRA TDS because Cupracid ULTRA is acid Cu, not Ni).
- Solubility ~50 g/L in water at 25 °C (saturation limit constrains how much buffering is achievable).
- pH 5–6 typical for the buffered Ni bath.
- pKa1 = 9.24; in sulfamate baths it functions as a coordinating species more than a Brønsted buffer.

## Alternatives / variants
- Glycine, citrate — alternative buffers used in pulse-Ni or bath-free electroless variants.
- [[nickel-sulfamate-bath]] — the host electrolyte that boric acid buffers.
- [[sulfuric-acid-H2SO4]] — counterpart pH-control reagent (acidifier rather than buffer).

## Gotchas
- Reproductive toxicity (REACH SVHC; H360FD) — substitution under EU CLP regulations is being explored, but no industrial replacement has full equivalence in Ni plating performance.
- Do not exceed solubility — undissolved H3BO3 causes pinholes / orange-peel deposit.
- Confused with borate buffers (e.g., Na2B4O7); they are NOT interchangeable in Ni sulfamate (different complexation).

## Sources
- [[atotech-cupracid-ultra-a-tds]] — explicitly notes boric acid is NOT used in acid Cu (relevant only to Ni sulfamate baths).
- [[fisher-AA8902018-nickel-sulfamate-hydrate]] — flags ~30–40 g/L boric acid as the canonical Ni sulfamate buffer.
