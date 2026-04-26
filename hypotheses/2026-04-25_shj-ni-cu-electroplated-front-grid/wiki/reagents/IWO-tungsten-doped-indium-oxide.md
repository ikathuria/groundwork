---
type: reagent
slug: IWO-tungsten-doped-indium-oxide
aliases: [tungsten-doped indium oxide, IWO, In2O3:W]
cas: null
formula: In2-xWxO3 (x ≈ 0.01-0.02)
suppliers:
  - name: GfE / Plansee / Umicore (sputter targets)
    catalog: IWO sputter targets (research-grade; production-scale via custom orders)
    grade: 4N
    url: null
storage: target stored room-temperature, dry, sealed; deposited film stable in ambient
hazards: low (as film); indium dust exposure during target handling
known_failure_modes: [Jsc-loss-from-cap-stack-shading, FF-degradation-contact-resistance]
sources: [2022-arena-sundrive-copper-metallisation-demonstration, 2023-taiyangnews-heterojunction-technology-report]
tags: [TCO, alternative-In, high-mobility, sputtered-oxide]
---

# IWO — tungsten-doped indium oxide

## What it is
A high-mobility transparent conductive oxide variant in which tungsten replaces tin as the In2O3 dopant. W doping yields lower carrier concentration but ~3× higher mobility than ITO, so the same sheet resistance is achievable with reduced parasitic free-carrier IR absorption — better Jsc on bifacial SHJ. Commonly considered alongside ITO and IZO in the SHJ TCO toolbox.

## Common uses
- Front (and sometimes rear) TCO of high-efficiency SHJ cells where parasitic IR absorption is a concern ([[2023-taiyangnews-heterojunction-technology-report]]).
- Demonstrated in SunDrive's record cell development as part of the In-reduction strategy alongside low-In ITO ([[2022-arena-sundrive-copper-metallisation-demonstration]]).

## Key spec / concentration ranges
- W doping ~1–2 at%; remainder In2O3.
- Thickness 70–110 nm (ARC tuning).
- Sheet resistance comparable to ITO (~80–100 Ω/sq) at lower carrier concentration.
- Mobility ~50–80 cm²/V·s (vs ~30 cm²/V·s for typical ITO).
- Optical transmittance 90–93% in NIR — better than ITO.
- Deposition: sputtering below 200 °C to preserve a-Si:H.
- Contact resistivity to plated Cu / Cu paste: assumed similar to ITO but measurements scarce in the public literature.

## Alternatives / variants
- [[ITO-transparent-conductive-oxide]] — direct mainstream alternative.
- [[AZO-aluminum-doped-zinc-oxide]] — In-free option (cheaper, more abundant, but lower performance).
- IZO (indium zinc oxide) — amorphous TCO with similar high-mobility behaviour.

## Gotchas
- Public SHJ-Cu literature is thin on IWO + plated Cu specifically; most adhesion / contact-resistivity data is for ITO. Treat IWO as functionally equivalent for plating-process design but verify ρc and adhesion experimentally on first run.
- W-doped targets are more expensive and have longer lead times than In2O3:SnO2 — supply chain risk.
- Like ITO, indium supply is a TW-scale concern; IWO does NOT solve the In bottleneck on its own.

## Sources
- [[2022-arena-sundrive-copper-metallisation-demonstration]] — IWO discussed in context of low-In TCO development at SunDrive.
- [[2023-taiyangnews-heterojunction-technology-report]] — IWO referenced as part of the SHJ TCO landscape.
