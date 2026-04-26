---
type: reagent
slug: PBS
aliases: [phosphate-buffered saline, Dulbecco's PBS, DPBS]
cas: "n/a (mixture)"
formula: "137 mM NaCl, 2.7 mM KCl, 10 mM Na2HPO4, 1.8 mM KH2PO4, pH 7.4"
suppliers:
  - name: Thermo Fisher (Gibco)
    catalog: "10010-023 (with Ca/Mg: 14040-133)"
  - name: Sigma-Aldrich (Merck)
    catalog: "P4417 (tablets), D8537 (DPBS)"
  - name: Lonza
    catalog: "BE17-516Q"
storage: room-temperature; sterile
hazards: low
known_failure_modes: []
sources: [2024-diez-escudero, 2025-conoscenti, 2025-lee, protocol-2025-battistelli]
tags: [buffer, cell-culture, wash]
created: 2026-04-25
updated: 2026-04-25
---

# Phosphate-buffered saline (PBS)

The standard isotonic buffer for cell-culture wash steps and reagent dilution.

## Properties

- **Composition:** 137 mM NaCl, 2.7 mM KCl, 10 mM Na₂HPO₄, 1.8 mM KH₂PO₄, pH 7.4.
- **With or without Ca²⁺ / Mg²⁺:** Ca/Mg-free for trypsin/EDTA detachment; Ca/Mg-containing for adhesion-preserving washes.

## Common uses in this hypothesis space

- Wash buffer for fixation, immunostaining, and pre-stain steps.
- Vehicle for dilute reagent solutions.

## Suppliers / catalog

| Supplier | Catalog | Notes |
|---|---|---|
| Gibco | 10010-023 (no Ca/Mg) / 14040-133 (with) | most common |
| Sigma | P4417 (tablets), D8537 | research |
| Lonza | BE17-516Q | research |

## Alternatives

- HBSS, TBS, HEPES-buffered saline.

## Gotchas / things to watch for

- Phosphate in PBS can precipitate with Ca²⁺ in HA dissolution products; acid-rinse / DI water rinse may be preferable for some scaffold-equilibration steps.

## Sources

- [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]], [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]], [[../sources/2025-lee-pcl-scaffold-with-well-defined-hierarchi]], [[../sources/protocol-2025-battistelli-a-quantitative-spectrophotometric-assay]] — wash buffer in scaffold protocols.
