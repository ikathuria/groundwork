---
type: failure-mode
slug: batch-to-batch-HA-stoichiometry-variation
severity: medium
frequency_estimate: recurring — commercial HA powder lots commonly vary in Ca/P by ±0.03, particle size by 2×, surface area by 50%
applies_to_methods: [XRD-phase-analysis, EDX-spectroscopy, ICP-MS, BET-surface-area-analysis, ceramic-sintering]
applies_to_reagents: [hydroxyapatite, calcium-deficient-hydroxyapatite, beta-tricalcium-phosphate, biphasic-calcium-phosphate]
applies_to_step_kinds: [scaffold-prep, characterization, sourcing, QC]
sources: [2017-eliaz, 2026-thammarakcharoen, 2025-de-carvalho, 2008-palmer, pubchem-tricalcium-phosphate-cid24456, crossref-retraction-10-1088-1748-605x-ace76a, crossref-retraction-10-1016-j-heliyon-2024-e36493]
tags: [batch-variability, sourcing, QC, reproducibility]
created: 2026-04-25
updated: 2026-04-25
---

# Batch-to-batch HA stoichiometry variation

## What it is

Commercial HA powders (Sigma 21223, Plasma Biotal P88, Bioteck HAP series, etc.) routinely vary lot-to-lot in Ca/P ratio (typical ±0.03), particle size distribution (D₅₀ 1–10 μm specified, 0.5–20 μm actual), specific surface area (5–50 m²/g across lots from same supplier), and trace heavy-metal content. "Biogenic" / eggshell-derived / coral-derived HA shows even larger lot variation. A study using two different lots in successive batches can produce divergent results that are mistakenly attributed to design changes.

## How it manifests

- Sintered scaffold density / strength varies 20–40% lot-to-lot at fixed sintering schedule [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]].
- "Biogenic HA" papers are repeat retraction targets for under-characterized starting material — eggshell-HA Heliyon 2024 retracted within ~1 month [[../sources/crossref-retraction-10-1016-j-heliyon-2024-e36493]].
- Multi-component composite scaffolds (silk-fibroin + nano-HA + hyaluronic-acid in the IOP retraction) are unusually sensitive to nano-HA batch variability [[../sources/crossref-retraction-10-1088-1748-605x-ace76a]].
- Cell viability data scatter: scaffold-to-scaffold CV in alamarBlue / MTS routinely > 30% when traceable to powder lot [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]].
- ICP-MS shows Cr, Cd, Pb, As at lot-dependent ppm levels in commercial HA, especially mineral-derived; Thammarakcharoen 2026 explicitly verified low trace heavy-metal levels as a *passing* QC, implying the failing version exists [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]].
- de Carvalho 2025: commercial CPC ink lot variability is implicit; addressed by single-lot use + characterisation [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]].

## How to detect it

- **Run incoming-QC on every powder lot** before formulating slurry/paste:
  - ICP-MS Ca/P ratio: report within ± 0.02 of target
  - XRD phase analysis: HA fraction > 95% (or report biphasic fraction)
  - BET surface area: within ± 10% of last lot
  - Particle-size distribution (laser diffraction): D₁₀, D₅₀, D₉₀ within ± 20% of last lot
  - Heavy-metal Cr, Cd, Pb, As, Hg by ICP-MS: <1 ppm each
- Reserve a "reference lot" (e.g., NIST 2910b biological apatite) — re-test it alongside experimental lots to establish instrument drift vs lot drift.
- Document the lot number for every scaffold batch in fetch_log / experimental-manifest with a one-line QC summary.
- If multiple lots in one experiment are unavoidable, randomize lot assignment across groups so lot effect is balanced.

## Mitigation

- **Buy and aliquot a single qualified lot** of HA powder for the entire planned experiment series. Storage: dry argon or vacuum desiccator, 4 °C; avoid moisture pickup that would shift stoichiometry [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]].
- Use **vendor-certified medical-grade HA** (Plasma Biotal P88, Bioteck HAP038C5SD09C used in Battistelli 2025 — synthetic with verified standards) rather than reagent-grade [[../sources/protocol-2025-battistelli-a-quantitative-spectrophotometric-assay]] (cross-link).
- Avoid biogenic HA (eggshell, bone-meal, coral) for primary publications — use synthetic precipitated HA with documented Ca/P [[../sources/crossref-retraction-10-1016-j-heliyon-2024-e36493]].
- For collaboration / replication: ship aliquots of the *same lot* between sites rather than each site sourcing locally.
- Re-test every 6 months if powder is stored long-term; HA can absorb atmospheric CO₂ (becoming carbonated apatite) and moisture, drifting Ca/P [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]].
- Note the PubChem CID 24456 confusion — TCP catalog records masquerade as HA in some databases; confirm CAS 1306-06-5 for stoichiometric HA [[../sources/pubchem-tricalcium-phosphate-cid24456]].
- For scaffold groups: match within-group powder lot exactly; do not split groups across lots [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]].

## Original sources / evidence

- [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]] — review emphasizes Ca/P verification as standard practice.
- [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] — heavy-metal QC, ISO-10993 framing, low-T transformation reduces lot sensitivity.
- [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] — single-lot CPC ink usage as QC strategy.
- [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]] — biomimetic HA grain morphology / characterization.
- [[../sources/pubchem-tricalcium-phosphate-cid24456]] — reagent-database confusion as a sourcing-uncertainty exemplar.
- [[../sources/crossref-retraction-10-1088-1748-605x-ace76a]] — silk-fibroin/nano-HA/hyaluronic-acid composite retraction; nano-HA lot variability as a likely contributor.
- [[../sources/crossref-retraction-10-1016-j-heliyon-2024-e36493]] — eggshell-HA retraction; biogenic source variability.

## Affects

- Methods: [[../methods/XRD-phase-analysis]], [[../methods/EDX-spectroscopy]], [[../methods/ICP-MS]], [[../methods/BET-surface-area-analysis]], [[../methods/ceramic-sintering]]
- Reagents: [[../reagents/hydroxyapatite]], [[../reagents/calcium-deficient-hydroxyapatite]], [[../reagents/beta-tricalcium-phosphate]], [[../reagents/biphasic-calcium-phosphate]]
