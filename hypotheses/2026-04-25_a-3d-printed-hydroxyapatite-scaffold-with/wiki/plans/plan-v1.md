---
type: plan
id: plan-v1
created: 2026-04-25
derived_from: ../hypothesis.md
sources_used: 65
corrections_applied: 0
total_budget_usd: 23360
total_timeline_weeks: 12
novelty_verdict: similar-work-exists
top_failure_modes: [cad-vs-actual-pore-size-mismatch, sintering-shrinkage-pore-deviation, HA-phase-decomposition-during-sintering, nutrient-diffusion-limitation-in-scaffold-core, cell-seeding-uniformity-loss-large-pores, HA-autofluorescence-confounds-livedead, incomplete-cell-lysis-3d-scaffold-picogreen, mc3t3-e1-subclone-variability]
tags: [plan, lab-brief, gradient-pore, hydroxyapatite, MC3T3, DLP, perfusion, PicoGreen]
---

# plan-v1 — Gradient-pore HA scaffold vs uniform HA scaffold

> **Wiki-internal mirror of [[../../plan/plan.md]] / [[../../plan/plan.json]].** This page is filed under `wiki/plans/` so the plan joins the Obsidian graph. Rendering and detail live at the plan files themselves; this page exists for graph navigation and cross-reference.

## Origin

- Hypothesis: [[../hypothesis]]
- Index: [[../index]]
- Generated: 2026-04-25 by Pass 3
- Structured form: [[../../plan/plan.json]]
- Human-readable mirror: [[../../plan/plan.md]]

## Refined hypothesis (one-line)

A continuous radial 100→500 μm pore gradient in a phase-pure DLP-printed HA scaffold improves day-14 osteoblast (MC3T3-E1 Subclone 4) proliferation by ≥ 25 % vs a uniform 300 μm-pore HA control matched on porosity, BET surface area, and HA chemistry.

## Literature QC verdict — `similar-work-exists`

Anchored on three precedents:
- [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]] — three-zone PCL/HA gradient bone bricks, +30 % d14 cell number on PCL/HA vs PCL.
- [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] — continuous 70→200 μm PLLA gradient; pore size alone biases hMSC fate under identical media.
- [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] — extrusion-printed CDHA gradient supports BMSC proliferation + ALP/RUNX2/OPN.

No paper fabricates a continuous radial *pure-HA* pore gradient at 100→500 μm with osteoblast proliferation as the primary endpoint. Plausibly novel; positioned against three close adjacent precedents.

## Headline numbers

- **Total budget**: $23,360 USD
- **Total timeline**: 12 weeks
- **Scaffolds fabricated**: 72 (36 gradient + 36 uniform + spares)
- **Cell numbers**: 5 × 10⁴ MC3T3-E1 Subclone 4 per scaffold; n = 6 per group per time point × 5 time points × 2 groups
- **Primary endpoint**: d14 PicoGreen dsDNA per scaffold

## Protocol skeleton (12 numbered steps)

1. Generate parametric CAD ([[../methods/gradient-pore-design]], [[../methods/TPMS-scaffold-design]])
2. Calibration array + shrinkage lookup ([[../methods/DLP-vat-photopolymerization]], [[../methods/ceramic-sintering]], [[../methods/micro-CT-imaging]])
3. Fabricate experimental scaffolds (72 total)
4. Characterise: μCT, [[../methods/XRD-phase-analysis]], [[../methods/BET-surface-area-analysis]], [[../methods/ICP-MS]], [[../methods/SEM-imaging]], [[../methods/mercury-intrusion-porosimetry]], [[../methods/mechanical-compression-testing]]
5. Sterilise + ISO-10993-5 [[../organisms/L929-fibroblast]] cytotoxicity gate
6. [[../organisms/MC3T3-E1-subclone-4]] — receive (ATCC CRL-2593), [[../methods/STR-cell-line-authentication]], mycoplasma
7. Pre-coat + [[../methods/cell-seeding-dynamic-perfusion]] at 5 × 10⁴ per scaffold
8. Perfusion culture × 21 d, proliferation medium only
9. Serial [[../methods/alamarBlue-proliferation-assay]] at d1/d4/d7/d14/d21
10. Endpoint: lyse + [[../methods/PicoGreen-DNA-quantification]] + [[../methods/DAPI-staining]] cross-sections + [[../methods/live-dead-staining]]
11. Differentiation cohort (osteogenic medium): [[../methods/ALP-activity-assay]], [[../methods/qPCR]], [[../methods/alizarin-red-staining]]
12. Statistics, data integrity, OSF pre-registration

Full step-by-step detail with reagents, durations, failure-mode warnings, and source citations: [[../../plan/plan.md]].

## Top failure modes (inline at protocol steps)

| Failure mode | Severity | Where it bites |
|---|---|---|
| [[../failure-modes/cad-vs-actual-pore-size-mismatch]] | high | Steps 2, 4 |
| [[../failure-modes/sintering-shrinkage-pore-deviation]] | high | Step 2 |
| [[../failure-modes/HA-phase-decomposition-during-sintering]] | high | Step 2 |
| [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] | high | Step 5 |
| [[../failure-modes/cell-seeding-uniformity-loss-large-pores]] | high | Step 7 |
| [[../failure-modes/nutrient-diffusion-limitation-in-scaffold-core]] | high | Step 8 |
| [[../failure-modes/HA-autofluorescence-confounds-livedead]] | high | Steps 9, 10 |
| [[../failure-modes/incomplete-cell-lysis-3d-scaffold-picogreen]] | high | Step 10 |
| [[../failure-modes/mc3t3-e1-subclone-variability]] | high | Step 6 |
| [[../failure-modes/ARS-binds-residual-scaffold-HA]] | high | Step 11 |
| [[../failure-modes/image-reuse-unsupported-osteogenesis-claims]] | high | Step 12 |
| [[../failure-modes/proliferation-vs-differentiation-tradeoff]] | medium | Step 8 |

## Validation summary

- **Primary success**: gradient d14 dsDNA ≥ 1.25× uniform-control (one-sided two-sample t-test, α = 0.05, n = 6).
- **Match-on-confound acceptance** (gates the entire experiment): porosity ±3 pp, BET ±10 %, β-TCP < 5 %, Ca/P 1.667 ± 0.05.
- **Spatial sanity**: gradient core cell density ≥ 50 % of outer-zone density (DAPI radial bins).

## Items under-supported by the wiki

Pass-3 honesty (filed in [[../../plan/plan.json]] under `under_supported_by_wiki`):

- DLP slurry rheology / cure-depth recipe for 60 vol % HA + TPO is not in `raw/` — Step 2 calibration is broader as a result. Possible fix: `/ingest-source` a protocols.io HA-DLP recipe.
- Quantitative shrinkage factor S for stoichiometric HA at 1250 °C is range-only in the wiki (Bose 2017 + Garot 2020 generalities); per-lot calibration at Step 2 is essential, not optional.
- ATCC / Sigma direct catalog pages were not captured in `raw/` ([[../failure-modes/ATCC-Sigma-vendor-pages-not-captured]]) — catalog numbers in materials list come from cross-references; confirm at purchase.
- CFD permeability parameters for HA at 100→500 μm are not in any source page — lab will need to parameterise the model itself.

---

*Filed by Pass 3 on 2026-04-25. See [[../log]] for the wiki-internal log entry, and `session.log.md` for the per-hypothesis high-level log.*
