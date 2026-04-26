---
type: reagent
slug: ethidium-homodimer
aliases: [EthD-1, ethidium homodimer-1]
cas: 61926-22-5
formula: C46H50Cl4N8
molecular_weight: 856.77
suppliers:
  - name: Thermo Fisher (Invitrogen)
    catalog: "L3224 (LIVE/DEAD kit), E1169"
storage: ≤ –20 °C, light-protected
hazards: medium (mutagen; standard PPE)
known_failure_modes: [HA-autofluorescence-confounds-livedead]
sources: [2025-conoscenti, 2025-lee]
tags: [fluorescent-dye, dead-cell-stain, viability]
created: 2026-04-25
updated: 2026-04-25
---

# Ethidium homodimer (EthD-1)

Membrane-impermeant DNA-binding dye; enters only dead cells with compromised membranes and binds nuclear DNA, generating bright red fluorescence. The "dead" component of the standard LIVE/DEAD kit (with [[../reagents/calcein-AM]]).

## Properties

- **CAS:** 61926-22-5
- **Excitation / emission:** ~528 / ~617 nm (red).
- **Working concentration:** 2–4 µM, 30 min at 37 °C.

## Common uses in this hypothesis space

- Dead-cell imaging on scaffolds; combined with calcein-AM for live/dead.

## Alternatives

- Propidium iodide — cheaper, similar membrane-exclusion behaviour.
- TO-PRO-3 / 7-AAD — alternative dead-cell stains in different channels.

## Gotchas / things to watch for

- [[../failure-modes/HA-autofluorescence-confounds-livedead]] — HA autofluorescence at 617 nm is lower but non-zero; use scaffold blanks.
- Mutagen: handle and dispose carefully.

## Sources

- [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] — live/dead on gradient scaffolds.
- [[../sources/2025-lee-pcl-scaffold-with-well-defined-hierarchi]] — live/dead on PCL.
