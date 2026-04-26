---
type: organism
slug: Saos-2
organism_type: cell-line
source: ATCC
external_id: CVCL_0548 (Cellosaurus); ATCC HTB-85
characteristics:
  - human (female, Caucasian) osteosarcoma-derived osteoblast-like cell line
  - TP53-null, aneuploid, extensively characterized in DepMap/CCLE/COSMIC
  - high baseline ALP and mineralization tendency
  - tumor-derived — proliferation kinetics not physiological
  - high-FBS requirement (15%) is characteristic
known_failure_modes: [saos-2-tumor-derived-not-physiological, cell-line-misidentification, proliferation-vs-differentiation-tradeoff, HA-autofluorescence-confounds-livedead, edge-effect-in-scaffold-cell-seeding]
sources: [2014-thavornyutikarn, 2015-baino, 2017-gao, 2026-liu, cellosaurus-saos-2-cvcl0548]
tags: [cell-line, human, osteosarcoma, cancer-line]
created: 2026-04-25
updated: 2026-04-25
---

# Saos-2 — human osteosarcoma osteoblast-like line

## What it is

Saos-2 ("Sarcoma OSteogenic-2") is a female human (Caucasian) osteosarcoma-derived cell line, originally established at Memorial Sloan Kettering Cancer Center and transferred to ATCC via the Naval Biosciences Laboratory in 1982. It is widely used in bone-tissue-engineering as an "osteoblast-like" model because it constitutively expresses ALP, deposits a mineralized matrix, and is a stable, easy-to-grow human alternative to MC3T3-E1. The line is **TP53-null** and aneuploid, with a fully characterized genome in DepMap/CCLE — extensively used as a reference cancer cell line, which is also the source of its central problem as an osteoblast model. See [[../sources/cellosaurus-saos-2-cvcl0548]].

## Growth conditions

- **Medium**: McCoy's 5A or DMEM, **15% FBS** (the high-FBS requirement is characteristic — most osteoblast lines run at 10%), 1% P/S; 37 °C, 5% CO₂.
- **Subculturing**: 0.05% trypsin-EDTA at ~80% confluence.
- **Mineralization**: Saos-2 mineralizes spontaneously at high density; supplementation with β-glycerophosphate accelerates it but is not strictly required for ALP/Alizarin-Red readouts.
- **Authentication**: STR profile available; well-authenticated. ATCC HTB-85 is the canonical purchase.
- Available from ATCC, ECACC, DSMZ, RIKEN BRC, KCB, BCRJ, CLS.

## Common variants / subclones

Cellosaurus lists 9 named derivatives, including Tet-Off, EGFP-, Luc-, α2β1-overexpressing, SaOS-LM1 (lung-metastatic subline), Saos2-I, STA5, and SuperSOST C9/G5 reporter lines. For HA-scaffold proliferation work, the parental Saos-2 (HTB-85) is the one cited; the EGFP/Luc derivatives are sometimes used for in-vivo tracking but should not be substituted into proliferation-rate comparisons without re-baselining.

## Why pick Saos-2 for this hypothesis (vs MC3T3-E1 / hFOB / hBMSC)

- **+** Human, stable, fast-growing, well-authenticated. Useful when an MC3T3-E1 (mouse) result needs a human in-vitro confirmation.
- **+** Baseline ALP / mineralization makes osteogenic-readout windows short.
- **−** **TP53-null and aneuploid** — proliferation rates do not reflect physiological osteoblasts; "more proliferation on gradient pore scaffold" results need to be replicated on at least one non-cancer line before being reported as a generalizable osteoblast-proliferation effect ([[../failure-modes/saos-2-tumor-derived-not-physiological]]).
- **−** Already at a mineralizing late-osteoblast phenotype at baseline → "differentiation" induction readouts are uninformative.
- For this hypothesis: **acceptable as a *secondary* human-cell arm; not as the primary osteoblast-proliferation readout.** Pair with primary [[hBMSC]] or [[MC3T3-E1-subclone-4]].

## Common pitfalls

- [[../failure-modes/saos-2-tumor-derived-not-physiological]] — the central pitfall. Do not draw "osteoblast" conclusions from Saos-2 alone.
- [[../failure-modes/cell-line-misidentification]] — although Saos-2 is well-authenticated, the many luciferase / EGFP / KO derivatives can be confused at the freezer; STR-authenticate on receipt.
- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — Saos-2 is constitutively late-osteoblast; differentiation readouts are confounded.
- [[../failure-modes/HA-autofluorescence-confounds-livedead]] — applies to all live/dead readouts on HA scaffolds.
- [[../failure-modes/edge-effect-in-scaffold-cell-seeding]] — Saos-2 attaches fast; static seeding biases to outer scaffold surface.

## Sources

- [[../sources/cellosaurus-saos-2-cvcl0548]] — canonical Cellosaurus catalog: CVCL_0548, ATCC HTB-85, TP53-null, female Caucasian.
- [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]] — comprehensive bone-TE scaffolding review listing Saos-2 in the standard cell-type table.
- [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]] — bioceramic-scaffold review citing Saos-2 as a common osteoblast-like screen.
- [[../sources/2017-gao-bone-biomaterials-and-interactions-with]] — bone-biomaterial interactions review using Saos-2 for ALP / mineralization readouts.
- [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]] — biomimetic-gradient-scaffold review citing Saos-2.
