---
type: source
id: 2010-bartsch-lip-pvsc
source_type: paper
title: "Copper as Conducting Layer in Advanced Front Side Metallization Processes for Crystalline Silicon Solar Cells, Exceeding 20% on Printed Seed Layers"
authors: ["Bartsch, J.", "Mondon, A.", "Schetter, C.", "Hörteis, M.", "Glunz, S. W."]
year: 2010
doi:
url: https://publica-rest.fraunhofer.de/server/api/core/bitstreams/2a87c935-1598-4178-b9a9-74bb07bcaa38/content
raw_path: raw/papers/2010-bartsch-lip-pvsc.pdf
tags: [light-induced-plating, copper-front-grid, nickel-barrier, foundational, fraunhofer-ise, c-Si]
created: 2026-04-26
updated: 2026-04-26
---

# Copper as Conducting Layer in Advanced Front Side Metallization Processes for Crystalline Silicon Solar Cells, Exceeding 20% on Printed Seed Layers

**Bartsch, J., Mondon, A., Schetter, C., Hörteis, M., Glunz, S. W.** — *Proceedings of the 35th IEEE PVSC, Honolulu, 2010*.

## Summary

Foundational Fraunhofer ISE paper introducing light-induced copper plating (LIP) on c-Si solar cells. Demonstrates two routes — Ni/Cu/Sn on printed Ag seed layer and direct Ni-on-Si plating with NiSiX formation — both reaching efficiencies competitive with all-Ag references, plus a thermally accelerated ageing protocol intended to extrapolate Cu-diffusion-limited cell lifetime to 20-year field equivalents.

## Key claims

- A nickel diffusion barrier between Cu and Si is essential: Cu-only stacks degrade to 95% relative pFF in 0.1–3 years estimated lifetime at 80 °C; introducing a Ni barrier extends estimated lifetime by orders of magnitude (one stack: ~1000 years at 80 °C extrapolated).
- Best Ni/Cu/Sn cell on aerosol-printed Ag seed reached η = 20.3 %, FF = 80.8 %, Voc = 646.4 mV, Jsc = 38.86 mA/cm² on 4-inch FZ 2×2 cm² high-efficiency precursors — comparable to Ag-LIP reference.
- 5×5 cm² Cz industrial precursors with aerosol-Ni-Cu-Sn yielded best η = 16.8 %, average η = 16.4 %, on par with the aerosol-Ag-LIP reference (16.5 %) — i.e. swapping Ag for Cu through a Ni barrier did not penalise cell performance.
- For fully plated direct-Ni contacts (no Ag seed), best η ≈ 17.2 % on 5×5 cm² Cz, with FF below pFF attributed to inhomogeneous laser ablation / plating; pFF showed no Cu-induced degradation.
- An accelerated thermal-stress test on a hotplate (typically one week per stack), tracking pFF via Suns-VOC, was developed to estimate long-term Cu impact through Arrhenius extrapolation from elevated to 80 °C operating temperature.

## Methods used

- [[methods/light-induced-plating]] — the originating LIP process for both Ni and Cu on solar-cell precursors
- [[methods/electroless-Ni-deposition]] — light-supported electroless Ni used as alternative for the diffusion barrier
- [[methods/laser-ablation-of-dielectric]] — SiNx ARC opening prior to direct Ni plating on Si
- [[methods/dark-IV-suns-Voc]] — Suns-VOC pFF tracking as the rapid degradation readout for the accelerated ageing test
- [[methods/IV-curve-measurement]] — 1-sun cell I-V characterisation

## Reagents

- [[reagents/sulfuric-acid-H2SO4]] — used in plating-line wet-chemistry steps (commercial Cu / Ni plating solutions)

## Failure modes flagged

- [[failure-modes/Cu-diffusion-into-c-Si]] — explicitly the dominant degradation pathway the Ni barrier is designed to suppress; quantified by accelerated thermal stress + Arrhenius
- [[failure-modes/Ni-barrier-pinholes]] — "if the nickel layer is insufficient regarding certain parameters (e.g. thickness, coverage, homogeneity), the diffusion inhibiting effect is diminished"
- [[failure-modes/FF-degradation-contact-resistance]] — fully plated cells showed FF below pFF due to inhomogeneous Ni / laser-ablation patterning

## Notable quotes

> "The introduction of a nickel diffusion barrier layer is highly effective. It leads to a very important decrease in the degradation rate of the samples." — *p. 3*

> "The highest efficiency obtained was 20.3% on a high-efficiency cell structure. Although some technical details remain to be solved, we believe that an introduction into industrial production is possible in the near future." — *Conclusion*

> "If the nickel layer is insufficient regarding certain parameters (e.g. thickness, coverage, homogeneity), the diffusion inhibiting effect is diminished." — *p. 4*
