---
type: source
id: cellosaurus-saos-2-cvcl0548
source_type: catalog
title: "Cellosaurus CVCL_0548 — Saos-2 (Sarcoma OSteogenic-2)"
authors: ["Cellosaurus / SIB"]
year: 2026
doi: ""
url: https://www.cellosaurus.org/CVCL_0548
raw_path: raw/catalogs/cellosaurus-saos-2-cvcl0548.json
tags: [catalog, cellosaurus, Saos-2, human-osteosarcoma, female, TP53-null, cancer-cell-line, ATCC-HTB-85]
---

# Summary

Cellosaurus record for Saos-2, a female human osteosarcoma cell line (Caucasian) widely used as an osteoblast-like model in bone tissue engineering despite its tumor origin and TP53-null status. Originally Memorial Sloan Kettering Cancer Center; transferred to ATCC via the Naval Biosciences Laboratory in 1982. Saos-2 is part of the Cancer Dependency Map (DepMap/CCLE) and COSMIC cell-line projects. Corresponds to [[../organisms/Saos-2]].

# Properties

- Cellosaurus accession: CVCL_0548
- Species: *Homo sapiens*
- Sex: Female
- Population: Caucasian
- Site: Bone (osteosarcoma)
- Category: Cancer cell line
- Disease: Osteosarcoma
- TP53: null (key genotype — drives the line's distinctive aneuploidy and proliferation behavior)
- STR profile available; whole-exome sequenced; CGH/SNP arrays; RNA-seq; ChIP-seq H3K4me1 — extensively characterized in DepMap/CCLE.
- Children: 9 named derivatives (Tet-Off, EGFP, Luc, alpha2beta1, SaOS-LM1, Saos2-I, STA5, SuperSOST C9/G5).
- Synonyms: SaOS-2, SAOS-2, Saos 2, Saos2, SaOs2, "Sarcoma OSteogenic-2"

# Suppliers (xrefs from JSON)

- ATCC: HTB-85
- ECACC, DSMZ, RIKEN BRC, KCB, BCRJ, CLS — all listed as providers in the Cellosaurus xref block.

# Hazards / Storage

- BSL-1; tumor-derived line — no enhanced biohazard, but mycoplasma testing required.
- Growth: McCoy's 5A or DMEM, 15% FBS (high-FBS requirement is characteristic), P/S; 37 °C / 5% CO₂.

# Failure modes / pitfalls

- [[../failure-modes/saos-2-tumor-derived-not-physiological]] — **the central pitfall for this hypothesis.** Saos-2 is osteosarcoma, not a normal osteoblast: TP53-null, aneuploid, deposits HA-like mineral but with an abnormal collagen ratio. Proliferation rates and mineralization kinetics on a scaffold surface are NOT physiological; using Saos-2 alone for an osteoblast-proliferation claim is questionable. Pair with a primary osteoblast or MC3T3-E1 subclone 4 arm.
- [[../failure-modes/cell-line-misidentification]] — Saos-2 is well-authenticated by STR; nonetheless, run authentication on receipt because the line has many luciferase/EGFP/KO derivatives that can be confused at the freezer.
- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — Saos-2 already expresses an osteoblast-late-stage phenotype (high ALP, mineralizing) at baseline; "differentiation" readouts are non-informative.
- Mineralization on Saos-2 is partly driven by extracellular matrix vesicle release from a cancer cell, not from a physiological osteoid template.
