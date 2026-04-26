---
type: organism
slug: mouse-skeletal-stem-cell
organism_type: primary-cell
source: primary isolation from mouse long-bone or growth-plate by FACS sorting on surface markers
external_id: NA — surface-marker-defined population (CD45− Ter119− Tie2− αV+ Thy1− 6C3− CD105−), per Chan, Seita, Longaker (Stanford) protocols
characteristics:
  - prospectively isolated mouse skeletal stem cell population (not bulk MSC) — Chan et al. 2015 (Cell)
  - capable of forming bone, cartilage, and stromal lineages; clonal at limiting dilution; transplantable under kidney capsule for in-vivo bone-forming assay
  - distinguished from mouse-BMSC-primary by FACS-purified, surface-marker-defined identity rather than plastic adherence
known_failure_modes: [donor-variability-hMSC, in-vivo-vs-in-vitro-discordance]
sources: [protocol-2023-uchida]
tags: [primary-cell, mouse, skeletal-stem-cell, FACS, kidney-capsule]
created: 2026-04-25
updated: 2026-04-25
---

# Mouse skeletal stem cell (SSC)

## What it is

A prospectively isolated mouse skeletal stem cell population — distinct from the plastic-adherent mouse-BMSC-primary fraction — defined by surface markers and FACS sorting (Chan, Seita, Longaker et al. 2015). The canonical SSC immunophenotype in mouse is **CD45− Ter119− Tie2− αV+ Thy1− 6C3− CD105−**, with the resulting population enriched for clonogenic, transplantable cells capable of producing bone, cartilage, and bone-marrow-supporting stroma in vivo. The kidney-capsule transplantation assay is the defining in-vivo readout.

## Why this organism for this hypothesis

- The hypothesis is in-vitro osteoblast proliferation; SSC are upstream of osteoblasts in the lineage.
- They appear in this hypothesis via [[../sources/protocol-2023-uchida-determining-bone-forming-ability-and-fre]], a protocol for determining bone-forming ability and frequency by limiting-dilution kidney-capsule transplantation.
- Not directly relevant to a gradient-pore-scaffold proliferation experiment; relevant if the experimental design extends to in-vivo bone-forming-frequency comparisons.

## Typical parameters

- **Tissue source**: long-bone diaphysis or growth-plate cartilage, dissociated by collagenase + dispase.
- **FACS panel**: CD45-PE-Cy7, Ter119-FITC, Tie2-APC, CD105-PerCP-Cy5.5, αV-PE, Thy1-BV421, 6C3-BV605 (specific clones per protocol).
- **Sort yield**: ~0.01–0.1% of dissociated bone cells.
- **In-vivo assay**: subcapsular kidney transplant; bone formation visible at 4–8 weeks by μCT and histology.

## Common pitfalls

- [[../failure-modes/donor-variability-hMSC]] — applies (animal-to-animal variability, age effects).
- [[../failure-modes/in-vivo-vs-in-vitro-discordance]] — applies; in-vitro behavior differs from kidney-capsule transplant outcome.

## Sources

- [[../sources/protocol-2023-uchida-determining-bone-forming-ability-and-fre]] — protocol for determining bone-forming ability and frequency of mouse SSC by limiting-dilution kidney-capsule transplantation.
