---
type: failure-mode
slug: Cu-LID-light-induced-degradation
severity: critical
frequency_estimate: "Observable in B-doped FZ-Si, P-doped FZ-Si, B-/Ga-doped Cz-Si and B-doped mc-Si contaminated with Cu (Lindroos 2015); Cu-LID-defects stable at 200 °C — do not anneal back like BO-LID. Magnitude scales with Cu inventory in the bulk."
applies_to_methods: [minority-carrier-lifetime-photoluminescence, IV-curve-measurement, dark-IV-suns-Voc, UV-preconditioning, damp-heat-aging-1000h]
applies_to_reagents: [acid-Cu-sulfate-bath, a-Si-H-passivation, ITO-transparent-conductive-oxide]
applies_to_step_kinds: [age, measure]
sources: [2015-lindroos-cu-lid-aalto-thesis, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj]
tags: [Cu-LID, light-induced-degradation, bulk-recombination, irreversible, hypothesis-killer]
---

# Cu light-induced degradation (Cu-LID)

## What it is
Once Cu reaches the c-Si bulk, illumination triggers formation of recombination-active defects whose nature is distinct from the well-known boron-oxygen LID. Cu-LID is dominated by *bulk* recombination — removing the degraded Si/SiO₂ interface and re-passivating with Al₂O₃ does not recover the lifetime ([[2015-lindroos-cu-lid-aalto-thesis]], p. 39). Unlike BO-LID, Cu-LID defects are stable at 200 °C and do not anneal back. They form across all common silicon types (B-doped FZ, P-doped FZ, B-/Ga-doped Cz, B-doped mc-Si), proving the mechanism is intrinsic to interstitial Cu, not to oxygen or boron. Cu-LID is the *amplifier* of any Cu-into-Si event: a Cu inventory that would only marginally reduce dark lifetime can produce a much larger drop under field illumination.

## How it manifests
- Stable, irreversible drop in minority-carrier lifetime under continuous 1-sun illumination, saturating after hours-to-days ([[2015-lindroos-cu-lid-aalto-thesis]]).
- Voc and Jsc decline steadily over the first 1000 h of light soaking, then plateau.
- Annealing at 200 °C in the dark does not recover lifetime (distinguishing Cu-LID from BO-LID).
- Negative corona charging (-0.78 µC/cm²) or built-in negative charge (Al₂O₃ passivation) prevents Cu-LID — diagnostic that the defect involves Cu accumulation at the Si surface under positive surface charge.

## How to detect it
- [[../methods/minority-carrier-lifetime-photoluminescence]] — QSSPC or µ-PCD lifetime tracking over 1-sun light soaking; >10% irreversible drop is diagnostic.
- [[../methods/UV-preconditioning]] — extended LID test (1000+ h) with Voc and pFF tracked.
- [[../methods/IV-curve-measurement]] — IV before/after 1000 h light soaking, then after 200 °C dark anneal: persistent loss = Cu-LID; recovered loss = BO-LID.
- [[../methods/damp-heat-aging-1000h]] — DH commonly amplifies pre-existing Cu-LID by adding mobile Cu.

## Mitigation (specific actions, not vague advice)
- Eliminate the Cu source: every mitigation under [[Cu-diffusion-into-c-Si]] applies (≥120 nm Ni barrier per Cheng 2018, intact TCO, POE encapsulant).
- Phosphorus-diffusion gettering removes Cu-LID in mc-Si ([[2015-lindroos-cu-lid-aalto-thesis]]); not directly applicable to SHJ (no diffusion step) but motivates including a wafer-level Cu inventory specification (≤10¹³ Cu/cm³).
- Use Al₂O₃ rear passivation or corona charging to accumulate Cu away from the active junction (Lindroos: -0.78 µC/cm² fully prevents Cu-LID).
- Specify SunDrive's >1000 h LID test ([[2022-arena-sundrive-copper-metallisation-demonstration]]) as part of the qualification protocol — the ARENA report shows Cu-on-TCO SHJ passing minimal degradation, providing a reachable benchmark.
- Avoid continuous-Cu plating on cells with TCO defects: PL-image cells before plating; defective TCO patches are direct routes for Cu→Si and a Cu-LID amplifier.

## Severity ranking justification
Critical: Cu-LID is what makes a small amount of bulk Cu unrecoverable. Distinguishing it from BO-LID requires only a 200 °C dark-anneal control, but once present the lifetime loss is permanent and the hypothesis (no efficiency loss after 1000 h DH) is rejected. The fact that it operates in n-type FZ-Si means the SHJ wafer offers no intrinsic immunity.

## Sources
- `[[2015-lindroos-cu-lid-aalto-thesis]]` — entire dissertation; canonical Cu-LID reference, six publications including bulk-recombination character, doping-type independence, 200 °C stability, corona prevention.
- `[[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]]` — flags Cu-LID as a general concern motivating long-term reliability tests for screen-printed Cu pastes; pending DH module data.
