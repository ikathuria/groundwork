---
type: reagent
slug: p-nitrophenyl-phosphate
aliases: [pNPP, 4-nitrophenyl phosphate, ALP substrate]
cas: 4264-83-9
formula: C6H4NO6PNa2
molecular_weight: "263.04 (disodium hexahydrate ~371.14)"
suppliers:
  - name: Sigma-Aldrich (Merck)
    catalog: "N9389 (substrate tablets), P4744 (powder), N1891 (substrate solution)"
  - name: Thermo Fisher
    catalog: "37621 (1-Step PNPP)"
storage: ≤ –20 °C dry; reconstituted ≤ 4 °C ≤ 1 week
hazards: low
known_failure_modes: []
sources: [2024-diez-escudero]
tags: [enzyme-substrate, ALP-activity-assay, colorimetric]
created: 2026-04-25
updated: 2026-04-25
---

# p-nitrophenyl phosphate (pNPP)

Standard substrate for alkaline phosphatase (ALP) activity assay. ALP cleaves pNPP to release p-nitrophenol (yellow, λmax 405 nm at alkaline pH); the rate of absorbance increase is proportional to ALP activity, which marks early osteoblast differentiation.

## Properties

- **CAS:** 4264-83-9 (disodium salt)
- **Substrate concentration:** typically 5–10 mM in reaction buffer (Tris or carbonate, pH 9.5–10.4).
- **Read:** absorbance at 405 nm; reaction stopped with NaOH.

## Common uses in this hypothesis space

- ALP-activity readout for osteoblast differentiation as a secondary endpoint.
- Normalised to total protein or dsDNA (PicoGreen) for per-cell ALP activity.

## Suppliers / catalog

| Supplier | Catalog | Notes |
|---|---|---|
| Sigma | N9389 | tablets |
| Sigma | P4744 | powder |
| Thermo | 37621 | 1-Step PNPP, ready-to-use |

## Alternatives

- BCIP/NBT — colorimetric ALP detection in tissue / cell staining.
- 4-MUP (4-methylumbelliferyl phosphate) — fluorogenic, more sensitive.

## Gotchas / things to watch for

- ALP from medium serum can produce a background signal; either heat-inactivate FBS or include a no-cell control.
- HA scaffolds slowly leach phosphate, but pNPP is the substrate, not the product, so this is less of an issue here than for alizarin / mineralisation assays.

## Sources

- [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]] — pNPP for ALP on gradient scaffolds.
