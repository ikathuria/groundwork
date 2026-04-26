---
type: reagent
slug: DMEM
aliases: [Dulbecco's Modified Eagle Medium, DMEM-HG, DMEM-LG, DMEM/F12]
cas: "n/a (mixture)"
formula: "modified Eagle's medium with elevated amino acids and vitamins"
suppliers:
  - name: Thermo Fisher (Gibco)
    catalog: "11965-092 (high-glucose), 11885-084 (low-glucose), 11320-033 (DMEM/F12)"
  - name: Sigma-Aldrich (Merck)
    catalog: "D6429 (high-glucose), D6046 (low-glucose)"
  - name: Lonza
    catalog: "BE12-604F"
storage: 2–8 °C, light-protected
hazards: low
known_failure_modes: []
sources: [2024-diez-escudero, 2025-conoscenti, 2025-lee]
tags: [cell-culture, basal-medium]
created: 2026-04-25
updated: 2026-04-25
---

# Dulbecco's Modified Eagle Medium (DMEM)

Higher-amino-acid, higher-vitamin formulation of MEM; the most common general-purpose mammalian cell-culture medium. Used in this hypothesis space for hBMSC and hADSC culture in some studies; α-MEM is more typical for MC3T3-E1.

## Properties

- **Glucose:** high (25 mM = 4500 mg/L) or low (5.5 mM); choose based on cell type.
- **Amino acids:** ~4× MEM concentrations.
- **Buffer:** sodium bicarbonate; 5% CO₂.

## Common uses in this hypothesis space

- hBMSC and hADSC culture in [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]] and [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]].
- PCL scaffold culture in [[../sources/2025-lee-pcl-scaffold-with-well-defined-hierarchi]].

## Suppliers / catalog

| Supplier | Catalog | Notes |
|---|---|---|
| Gibco | 11965-092, 11885-084, 11320-033 | high-glucose, low-glucose, F12 |
| Sigma | D6429, D6046 | high, low |
| Lonza | BE12-604F | liquid |

## Alternatives

- [[../reagents/alpha-MEM]] — preferred for MC3T3-E1 and many primary osteoblasts.

## Gotchas / things to watch for

- High glucose may bias differentiation in some MSC studies; document the choice.
- L-glutamine instability — use fresh or GlutaMAX.

## Sources

- [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]] — DMEM in hADSC gradient-scaffold study.
- [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] — DMEM in continuous-gradient study.
- [[../sources/2025-lee-pcl-scaffold-with-well-defined-hierarchi]] — DMEM in PCL scaffold culture.
