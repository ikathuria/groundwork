---
type: failure-mode
slug: donor-variability-hMSC
severity: medium
frequency_estimate: dominant — proliferation/differentiation phenotype varies 5–10× between hMSC donors
applies_to_methods: [PicoGreen-DNA-quantification, alamarBlue-proliferation-assay, ALP-activity-assay, alizarin-red-staining, qPCR, osteogenic-differentiation-induction, STR-cell-line-authentication]
applies_to_reagents: [DMEM, FBS, dexamethasone]
applies_to_step_kinds: [sourcing, statistics, claim]
sources: [2025-conoscenti]
tags: [hMSC, donor-variability, primary-cells, statistics]
created: 2026-04-25
updated: 2026-04-25
---

# Donor variability in hMSC

## What it is

Primary human bone-marrow-derived MSCs (hBMSCs), adipose-derived MSCs (hADSCs), and other primary osteoprogenitors vary dramatically in proliferation rate, multipotency, ALP activity, and mineralization potential between donors. Conoscenti 2025 explicitly cites "the well-known variability of human donors" as the cause of limited statistical significance in their gradient-PLLA experiment despite consistent trends across n=3 patient pools. A scaffold experiment using donor cells without sufficient n or pooling will not be reproducible.

## How it manifests

- Conoscenti 2025: 3 BM-hMSC donor pools (n = 3 patients per pool, mixed sex/age); statistical significance limited by small donor count, but trends were directionally consistent for SOX9 and BSP2 [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]].
- Day-7 PicoGreen / day-14 ALP can vary 5–10× between donor lots from the same supplier.
- Older donors (>60 yr) often show reduced proliferation and mineralization vs younger; sex-specific effects on osteogenesis are documented.
- Passage-dependent drift: by passage 6+ many primary hMSC populations lose multipotency.
- The Conoscenti 2025 design — pooling 3 donors per pool — partially mitigates but doesn't eliminate variability [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]].

## How to detect it

- **n ≥ 3 independent donors / donor pools** as separate biological replicates (NOT technical replicates of the same donor). Pre-register this in the analysis plan.
- Per-donor baseline characterization: surface-marker FACS panel (CD73+, CD90+, CD105+, CD34-, CD45-) on receipt confirms MSC phenotype; trilineage differentiation (osteogenic, chondrogenic, adipogenic) confirms multipotency.
- Document donor metadata: age, sex, BMI, passage at experiment, source (vendor lot ID).
- Per-donor positive control: every donor should mineralize on TCP under standard osteogenic medium by day 21; if a donor fails the positive control, exclude (and document).
- Use a mixed-effects statistical model with donor as a random effect; this distinguishes scaffold-effect signal from donor-effect noise.

## Mitigation

- Use **n ≥ 3 donors** with mixed-effects analysis. Conoscenti 2025's n=3 pools is a minimum [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]].
- Pool donors within group when biological-replicate budget is constrained; report n_donors and n_pool-replicates explicitly.
- Pre-screen donors: discard those that don't meet positive-control mineralization or proliferation thresholds in 2D culture before scaffold experiment.
- Use a *cell line* (MC3T3-E1 Subclone 4, Saos-2, hFOB 1.19) as a parallel arm for cross-validation: the line gives cleaner statistical signal but lower physiological relevance — see [[../failure-modes/saos-2-tumor-derived-not-physiological]] for caveats.
- Bank low-passage aliquots (≤ passage 4) of each donor for the entire planned experiment; expand uniformly.
- Match donor age, sex, source (commercial vs research-bank), and culture conditions across groups; randomize donor-to-group assignment.
- Source from vendors with quality-controlled donor stocks (Lonza, RoosterBio, ATCC) rather than fresh local clinical samples without QC infrastructure.

## Original sources / evidence

- [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] — explicit donor-variability discussion; n=3 patient pools; statistical significance limited by donor count; trends directionally consistent.

## Affects

- Methods: [[../methods/PicoGreen-DNA-quantification]], [[../methods/alamarBlue-proliferation-assay]], [[../methods/ALP-activity-assay]], [[../methods/alizarin-red-staining]], [[../methods/qPCR]], [[../methods/osteogenic-differentiation-induction]], [[../methods/STR-cell-line-authentication]]
- Reagents: [[../reagents/DMEM]], [[../reagents/FBS]], [[../reagents/dexamethasone]]
