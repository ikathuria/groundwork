---
type: reagent
slug: calcein-AM
aliases: [calcein acetoxymethyl ester]
cas: 148504-34-1
formula: C46H46N2O23
molecular_weight: 994.87
suppliers:
  - name: Thermo Fisher (Invitrogen)
    catalog: "C3099, C3100MP"
  - name: Sigma-Aldrich (Merck)
    catalog: "17783"
storage: ≤ –20 °C, desiccated, light-protected
hazards: low
known_failure_modes: [HA-autofluorescence-confounds-livedead]
sources: [2025-conoscenti, 2025-lee, protocol-2025-amin]
tags: [fluorescent-dye, live-cell-stain, viability]
created: 2026-04-25
updated: 2026-04-25
---

# Calcein-AM

Cell-permeant non-fluorescent ester; intracellular esterases cleave to release fluorescent calcein in viable cells. The "live" component of standard live/dead imaging.

## Properties

- **CAS:** 148504-34-1
- **Excitation / emission of calcein:** ~495 / ~515 nm (FITC channel).
- **Working concentration:** 1–4 µM, 30 min at 37 °C.

## Common uses in this hypothesis space

- Live cell visualisation on scaffolds.
- Pair with [[../reagents/ethidium-homodimer]] for two-colour live/dead.

## Alternatives

- Calcein blue, calcein green — different spectra.
- SYTO dyes for live nucleic-acid staining.

## Gotchas / things to watch for

- [[../failure-modes/HA-autofluorescence-confounds-livedead]] — HA autofluorescence at 495/515 nm strongly overlaps calcein emission; use scaffold blanks and short exposures.
- AM ester is moisture-sensitive — keep desiccated.

## Sources

- [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] — calcein-AM live-staining on gradient scaffolds.
- [[../sources/2025-lee-pcl-scaffold-with-well-defined-hierarchi]] — calcein on PCL scaffolds.
- [[../sources/protocol-2025-amin-murine-osteoblast-and-osteoclast-co-cult]] — co-culture viability imaging.
