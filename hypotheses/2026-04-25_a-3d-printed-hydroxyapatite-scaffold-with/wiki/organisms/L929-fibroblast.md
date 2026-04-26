---
type: organism
slug: L929-fibroblast
organism_type: cell-line
source: ATCC / ECACC
external_id: ATCC CCL-1; CVCL_0462; ECACC 85011425
characteristics:
  - mouse (C3H/An) areolar / adipose connective tissue fibroblast cell line, established by Earle 1948 — the **first mammalian cell line ever established as a continuous culture**
  - the canonical ISO 10993-5 cytotoxicity / biocompatibility screening cell line
  - adherent, fast-growing; not an osteoblast — used as the regulatory-default fibroblast for materials cytotoxicity testing
known_failure_modes: [cytotoxic-residue-from-binders-or-photoinitiators, cell-line-misidentification]
sources: [2026-thammarakcharoen]
tags: [cell-line, mouse, fibroblast, cytotoxicity, ISO-10993]
created: 2026-04-25
updated: 2026-04-25
---

# L929 — mouse fibroblast cytotoxicity-screening line

## What it is

L929 (ATCC CCL-1, CVCL_0462) is a mouse C3H/An connective-tissue fibroblast cell line established by Earle in 1948 — historically the first continuous mammalian cell line. It is the **canonical ISO 10993-5 cytotoxicity-screening cell type** for medical-device and biomaterials biocompatibility testing. It is not an osteoblast model; it appears in this hypothesis as the cytotoxicity-arm cell type for scaffold extracts and leachate testing.

## Growth conditions

- **Medium**: MEM or DMEM + 10% FBS + 1% P/S; 37 °C, 5% CO₂.

## Why pick L929 for this hypothesis

- Required by ISO 10993-5 for cytotoxicity validation of any new scaffold formulation. Used in [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] for comprehensive toxicological evaluation of HA / CaP scaffold formulations (MTS / MTT cytotoxicity, plus Ames mutagenicity).
- Not relevant to the gradient-pore osteoblast-proliferation primary endpoint.

## Common pitfalls

- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — the central reason L929 is in the test panel: detect leachable photoinitiator, binder, or sintering-aid residue.
- [[../failure-modes/cell-line-misidentification]] — STR-authenticate.

## Sources

- [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] — comprehensive toxicological evaluation of HA / CaP scaffolds; L929 cytotoxicity (MTS / MTT) + Salmonella Ames mutagenicity arms.
