---
type: failure-mode
slug: edge-effect-in-scaffold-cell-seeding
severity: high
frequency_estimate: dominant in static-seeded ceramic scaffolds; ~70–90% of seeded cells remain in outer 500 μm
applies_to_methods: [cell-seeding-static, cell-seeding-dynamic-perfusion, PicoGreen-DNA-quantification, DAPI-staining, confocal-microscopy]
applies_to_reagents: [hydroxyapatite, beta-tricalcium-phosphate, polycaprolactone, FBS]
applies_to_step_kinds: [seeding, sampling, imaging]
sources: [2012-amini, 2016-murphy, 2008-chan, 2010-murphy, thermo-picogreen-p11496]
tags: [seeding, edge-effect, spatial-bias, static-culture]
created: 2026-04-25
updated: 2026-04-25
---

# Edge effect in scaffold cell seeding

## What it is

When cell suspension is pipetted onto a 3D porous scaffold under static conditions, the cells settle in a thin outer rim near the seeding surface and rarely migrate to the scaffold center within the duration of standard cultures. The result is that "scaffold seeded at 5 × 10⁴ cells" does not mean cells were uniformly distributed — it means most cells are within ~500 μm of the loaded face, regardless of total scaffold volume. This biases every downstream readout (PicoGreen / alamarBlue / ALP) toward surface phenomena.

## How it manifests

- "Cellular skin" — a continuous ring of cells around the outer surface of small-pore (85–120 μm) scaffolds blocking further infiltration; documented quantitatively by Murphy & O'Brien for MC3T3-E1 on 96 μm pore CG scaffolds [[../sources/2010-murphy-understanding-the-effect-of-mean-pore-size-on]].
- Cell-number gradient outer→inner observed even in *gradient*-pore scaffolds (Daskalakis 2024): more cells in larger-pore outer region, fewer in small-pore inner regardless of pore-size optimum, because seeding itself is biased by gravity + pore-size aspiration [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]] (cross-link).
- DAPI on cross-sections at 24 h post-seeding shows ≥ 70% of nuclei in outer 500 μm rim of a 5 mm cube scaffold [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]].
- PicoGreen yields a "cell number" without spatial info — agrees with imaging on cell totals but masks the edge bias [[../sources/thermo-picogreen-p11496]]: "PicoGreen reports total scaffold dsDNA, not spatial distribution; combine with DAPI imaging or section-by-section sampling."
- Aggregation at the meniscus when scaffold is loaded from above: cells cluster at the air-medium interface and never enter sub-surface pores.

## How to detect it

- Cross-section the scaffold at 24 h post-seeding (before proliferation matters); DAPI-stain three radial bins; quantify nuclei per bin. Outer:inner > 3:1 confirms edge bias.
- Confocal z-stack from outer surface every 100 μm; map nuclei density vs depth; expect exponential decay into the scaffold under static seeding.
- "Cell-seeding efficiency" = (total cells recovered from scaffold by trypsin) / (total cells loaded). Conoscenti 2025 reported only 22.8 ± 1.3% efficiency for static seeding of an 8.5 × 3.5 mm gradient PLLA scaffold — a representative number to expect [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]].
- Compare PicoGreen on whole scaffold vs sum of section-by-section (mechanically dissect after culture). A whole-scaffold under-read by >20% suggests cells are encrusted at edges and lyse incompletely.
- Run a positive control where cells are seeded onto thin (≤ 1 mm) HA discs; if proliferation/viability looks vastly better, edge effect on the thicker scaffold is implicated.

## Mitigation

- **Use dynamic perfusion seeding** (spinner flask, perfusion bioreactor, oscillating-flow chamber). Conoscenti 2025 used dynamic seeding via biphasic bioreactor and reported reproducible spatial distribution [[../sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]], [[../sources/2008-chan-scaffolding-in-tissue-engineering-general-approaches]].
- **Pre-wet scaffolds** under vacuum (degas in PBS for 30 min, then flood with cell suspension) to fill all pores with liquid before cell loading, eliminating air pockets that block cell entry.
- For static seeding: drop-seed in **multiple aliquots from multiple faces** (top, bottom, sides) over 4 h with periodic gentle re-suspension and 2 h re-attachment intervals. Improves uniformity vs single top-down loading.
- Increase initial seeding density 2–3× to compensate for losses.
- Always seed ≥ n=4 scaffolds per group per time-point; report seeding-efficiency as a primary QC metric.
- Pair PicoGreen with DAPI imaging on cross-sections — never report bulk "cell number" alone for thick scaffolds [[../sources/thermo-picogreen-p11496]], [[../sources/2010-murphy-understanding-the-effect-of-mean-pore-size-on]].

## Original sources / evidence

- [[../sources/2010-murphy-understanding-the-effect-of-mean-pore-size-on]] — small-pore CG scaffolds: cellular capsule restricts cell migration; 325 μm pores allow center colonization; "the effect of specific surface area is overcome in larger pores by the improved potential for cell migration."
- [[../sources/2012-amini-bone-tissue-engineering-recent-advances]] — review documents seeding-uniformity loss as a recurring TE concern.
- [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]] — pore-size review with seeding distribution discussion.
- [[../sources/2008-chan-scaffolding-in-tissue-engineering-general-approaches]] — establishes dynamic seeding / perfusion seeding as standard mitigations.
- [[../sources/thermo-picogreen-p11496]] — kit page explicitly notes that bulk DNA quantification "reports total scaffold dsDNA, not spatial distribution; combine with DAPI imaging or section-by-section sampling."

## Affects

- Methods: [[../methods/cell-seeding-static]], [[../methods/cell-seeding-dynamic-perfusion]], [[../methods/PicoGreen-DNA-quantification]], [[../methods/DAPI-staining]], [[../methods/confocal-microscopy]]
- Reagents: [[../reagents/hydroxyapatite]], [[../reagents/beta-tricalcium-phosphate]], [[../reagents/polycaprolactone]], [[../reagents/FBS]]
