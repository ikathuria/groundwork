---
type: method
slug: EDX-spectroscopy
aliases: [EDS, EDX, energy-dispersive-X-ray-spectroscopy, EDXS]
related_methods: [SEM-imaging, XRD-phase-analysis, ICP-MS, BET-surface-area-analysis]
key_reagents: [hydroxyapatite, calcium-deficient-hydroxyapatite, beta-tricalcium-phosphate]
known_failure_modes: [batch-to-batch-HA-stoichiometry-variation, HA-stoichiometry-affects-resorption]
sources: [2017-eliaz-calcium-phosphate-bioceramics-a-review-o, 2026-thammarakcharoen-comprehensive-toxicological-evaluation-o, 2025-de-carvalho-three-dimensional-printing-of-calcium-ph, 2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone, 2008-palmer-biomimetic-systems-for-hydroxyapatite-mi, protocol-2025-battistelli-a-quantitative-spectrophotometric-assay, protocol-2025-sheikh-isolation-of-in-vitro-osteoblastic-deriv]
tags: [characterization, elemental-analysis, scaffold-QC]
created: 2026-04-25
updated: 2026-04-25
---

# Energy-dispersive X-ray spectroscopy (EDX / EDS)

## What it measures / produces

EDX detects characteristic X-rays emitted from a sample under electron-beam excitation; element peaks identify atoms present and intensities give semi-quantitative composition. Mounted on most SEMs as an add-on. For HA scaffolds, EDX is used to verify Ca/P ratio, detect substitutions (F, Sr, Mg), confirm apatite-layer formation (Ca/P enrichment over culture time), and identify residual binders.

## When to use it

Use EDX (a) on raw HA powder + sintered scaffold to verify Ca/P stoichiometry (~1.67 for stoichiometric HA), (b) on cultured scaffolds to detect cell-deposited apatite layer (Ca and P enrichment vs day 0) [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]], (c) for Si/Sr/Mg dopants (mesoporous bioactive glass releases Si — confirmable via EDX [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]]), (d) for matrix-vesicle mineralisation [[../sources/protocol-2025-sheikh-isolation-of-in-vitro-osteoblastic-deriv]].

## Key parameters

- **Resolution**: ~120–130 eV (Si(Li) detector); ~125–140 eV (SDD).
- **Detection limits**: ~0.1–1 wt% for elements > Be.
- **Quantification**: semi-quantitative without standards (ZAF correction); quantitative with matched standards.
- **Spatial mapping**: elemental maps at SEM-pixel resolution.

## Common variants

- **Point analysis** — single-spot quantification.
- **Line scan** — composition along a line (gradient verification).
- **Area mapping** — full 2D elemental map.

## Step-level notes

- Coat samples with C (instead of Au) for EDX quantification of Ca and P (Au peaks overlap).
- Acquire at 15–20 kV for good Ca/P excitation; lower kV for surface sensitivity.
- For thin apatite layers on scaffold surface, use lower kV to confine the interaction volume.
- Combine with XRD: EDX gives bulk composition, XRD gives phase identity. They are complementary.

## Things to watch for

- [[../failure-modes/batch-to-batch-HA-stoichiometry-variation]] — EDX-verify Ca/P every powder lot.
- [[../failure-modes/HA-stoichiometry-affects-resorption]] — Ca/P ratio drives in-vivo dissolution; EDX is the lab proxy.

## Sources

- [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]] — EDX in CaP characterisation toolkit.
- [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] — EDX for 3DPHA composition verification.
- [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] — EDX detection of Si in MBG-loaded scaffolds.
- [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]] — EDX of apatite-layer formation (Ca/P enrichment day 0 → 14).
- [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]] — EDX in HA chemistry / biomineralisation review.
- [[../sources/protocol-2025-battistelli-a-quantitative-spectrophotometric-assay]] — EDX in mineralisation-assay characterisation.
- [[../sources/protocol-2025-sheikh-isolation-of-in-vitro-osteoblastic-deriv]] — EDX verification of matrix-vesicle composition.
