---
type: plan
id: plan-v1
created: 2026-04-25
derived_from: ../hypothesis.md
sources_used: 65
corrections_applied: 0
total_budget_usd: 23360
total_timeline_weeks: 12
---

# Lab Brief — Gradient-pore HA scaffold vs uniform HA scaffold (plan-v1)

> Continuous radial 100 → 500 μm pore gradient, phase-pure 3D-printed HA, vs uniform 300 μm pore HA control. Primary endpoint: day-14 PicoGreen DNA on MC3T3-E1 Subclone 4. Threshold: ≥ 25 % higher on the gradient scaffold.

## Hypothesis (refined)

| | |
|---|---|
| **Intervention** | DLP-printed phase-pure HA cylinder (6 mm Ø × 4 mm) with continuous radial pore gradient: 100 μm at outer surface → 500 μm at central axis. |
| **Outcome** | Osteoblast proliferation by [[../wiki/methods/PicoGreen-DNA-quantification]] (primary) and [[../wiki/methods/alamarBlue-proliferation-assay]] (orthogonal). |
| **Threshold** | Day-14 dsDNA ≥ 1.25× uniform control (one-sided two-sample t-test, α = 0.05, n = 6). |
| **Mechanism** | Cortical→cancellous trabecular-spacing mimicry; small-pore shell for adhesion + large-pore core for diffusion; avoids necrotic core (uniform large-pore) AND surface-skin (uniform small-pore); graded curvature/permeability cues per [[../wiki/sources/2022-yang-gaussian-curvature-driven-direction-of-c]]. |
| **Control** | Uniform 300 μm HA scaffold matched on porosity (±3 pp), mass (±5 %), BET surface area (±10 %), HA phase purity (XRD β-TCP < 5 %), Ca/P (ICP-MS, 1.667 ± 0.05). |

Root: [[../hypothesis]]. Method: [[../wiki/methods/gradient-pore-design]] · [[../wiki/methods/DLP-vat-photopolymerization]]. Cells: [[../wiki/organisms/MC3T3-E1-subclone-4]]. Material: [[../wiki/reagents/hydroxyapatite]].

## Literature QC

**Verdict: `similar-work-exists`** — close-but-imperfect precedents in adjacent systems; no paper fabricates a continuous radial pure-HA pore gradient at 100→500 μm with osteoblast-proliferation as the primary endpoint.

| Reference | What it shows | Where it falls short |
|---|---|---|
| [[../wiki/sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]] (Daskalakis 2024) | Three-zone radial pore gradient PCL/HA bone bricks; PCL/HA d14 cell number 243k ± 22k vs PCL 187k ± 14k (p = 0.0003, +30 %); cells increase monotonically inner→outer pore region. | PCL/HA composite (not pure HA), 52 % porosity, three discrete zones (not continuous), pore-size range not reported as 100–500 μm. |
| [[../wiki/sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]] (Conoscenti 2025) | Continuous TIPS gradient 70→200 μm in PLLA biases hMSC fate under identical media — strongest mechanistic precedent for a continuous-gradient effect. | PLLA (osteochondral, not pure HA); pore range 70–200 μm below the proposed 100–500 μm window. |
| [[../wiki/sources/2024-wang-polydopamine-functionalized-calcium-defi]] (Wang 2024) | Closest pure-CaP gradient precedent: extrusion-printed CDHA with explicit gradient pore structure supports BMSC proliferation + ALP/RUNX2/OPN. | Calcium-deficient HA (not stoichiometric HA); gradient parameters not reported as 100–500 μm; primary readouts tumor + BMSC/HUVEC, not parametric osteoblast proliferation. |

**Literature cautions** (carry forward to discussion):
- Pore-size optimum is genuinely contested (200–350 μm vs 300–500 μm vs 600 μm vs hierarchical) — see [[../wiki/methods/gradient-pore-design]] and Pass-2 cross-source contradictions.
- Native rabbit-femur Haversian/Volkmann canal diameters are 40–200 μm ([[../wiki/sources/2026-zhao-longitudinal-and-radial-microgradients-i]]); the 500 μm core targets trabecular spacing rather than cortical canal diameter — restate the biomimetic claim accordingly.
- Karageorgiou & Kaplan 2005 (canonical "100 μm min, ~300 μm optimum") is non-OA and not in `raw/` ([[../wiki/failure-modes/paywalled-or-non-OA-canonical-source-not-captured]]) — cited transitively.
- 8 retractions in `raw/retractions/`; image reuse is the dominant retraction signature ([[../wiki/failure-modes/image-reuse-unsupported-osteogenesis-claims]]).

## Summary

- **Total budget**: $23,360 USD
- **Total timeline**: 12 weeks
- **Top failure modes (inline at protocol steps)**: [[../wiki/failure-modes/cad-vs-actual-pore-size-mismatch]] · [[../wiki/failure-modes/sintering-shrinkage-pore-deviation]] · [[../wiki/failure-modes/HA-phase-decomposition-during-sintering]] · [[../wiki/failure-modes/nutrient-diffusion-limitation-in-scaffold-core]] · [[../wiki/failure-modes/cell-seeding-uniformity-loss-large-pores]] · [[../wiki/failure-modes/HA-autofluorescence-confounds-livedead]] · [[../wiki/failure-modes/incomplete-cell-lysis-3d-scaffold-picogreen]] · [[../wiki/failure-modes/mc3t3-e1-subclone-variability]]

## Protocol

### Step 1 — Generate parametric CAD (4 h)

Two cylindrical 6 mm Ø × 4 mm scaffolds. **Gradient**: pore d(r) = 100 μm at r = 3 mm → 500 μm at r = 0, continuous voxel-by-voxel field. **Uniform**: 300 μm throughout. Both at target 65 % porosity (computed by integration over the gradient profile so total porosity matches). [[../wiki/methods/TPMS-scaffold-design|TPMS gyroid topology]] preferred over orthogonal lattice for CAD-to-physical fidelity.

- Failure: [[../wiki/failure-modes/cad-vs-actual-pore-size-mismatch]] (medium) — geometry not finalised until Step 2 shrinkage lookup is in hand.
- Failure: [[../wiki/failure-modes/abrupt-interface-stress-concentration]] (medium) — use continuous (not zonal/biphasic) gradient; [[../wiki/sources/2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]], [[../wiki/sources/2025-xie-recent-advances-in-gradient-biomimetic-s]].

Methods: [[../wiki/methods/gradient-pore-design]], [[../wiki/methods/TPMS-scaffold-design]]. Sources: [[../wiki/sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]], [[../wiki/sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]], [[../wiki/sources/2017-zhang-additively-manufactured-scaffolds-for-bo]], [[../wiki/sources/2020-chen-porous-scaffold-design-for-additive-manu]], [[../wiki/sources/2026-liu-design-and-fabrication-of-biomimetic-gra]].

### Step 2 — Calibration array + shrinkage lookup (24 h end-to-end, 1 print + 1 sinter)

Print and sinter a 6×6 array with CAD pores 50 / 100 / 150 / 200 / 300 / 500 / 700 μm in HA / TPO / PEG-DA slurry at 60 vol % HA loading. μCT post-sinter; compute S = d_post/d_CAD per pore bin; build per-batch lookup. Bose 2017 cites 60–70 wt % HA loading minimises shrinkage and warping.

- Reagents: [[../wiki/reagents/hydroxyapatite]] (Plasma Biotal P88, 60 vol % slurry loading), [[../wiki/reagents/photoinitiator-TPO]] (Sigma 415952, 1 wt %).
- Failure: [[../wiki/failure-modes/sintering-shrinkage-pore-deviation]] (high) — pre-compensate CAD by S ≈ 0.80; calibrate per powder lot, slurry batch, sintering schedule.
- Failure: [[../wiki/failure-modes/HA-phase-decomposition-during-sintering]] (high) — cap sintering at 1200–1250 °C; verify Ca/P 1.667 ± 0.05; XRD β-TCP < 5 %.
- Failure: [[../wiki/failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] (high) — slow 0.5 °C/min debinding through 300–600 °C, ≥ 2 h soak; EtOH/water reflux leach; ISO-10993-5 cytotoxicity gate at Step 5.
- Failure: [[../wiki/failure-modes/cad-vs-actual-pore-size-mismatch]] (medium) — pair μCT (≤ 10 μm voxel) with SEM cross-sections; mercury intrusion porosimetry on a sister scaffold for independent pore-throat distribution.

Methods: [[../wiki/methods/slurry-preparation-for-DLP]] · [[../wiki/methods/DLP-vat-photopolymerization]] · [[../wiki/methods/debinding-thermal-treatment]] · [[../wiki/methods/ceramic-sintering]] · [[../wiki/methods/micro-CT-imaging]] · [[../wiki/methods/XRD-phase-analysis]]. Sources: [[../wiki/sources/2017-bose-additive-manufacturing-of-biomaterials]], [[../wiki/sources/2020-garot-additive-manufacturing-of-material-scaff]], [[../wiki/sources/2015-ishack-bone-regeneration-in-critical-bone-defec]], [[../wiki/sources/2022-yang-gaussian-curvature-driven-direction-of-c]], [[../wiki/sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]].

### Step 3 — Fabricate experimental scaffolds (~48 h, 2 prints + 1 sinter)

Print n = 36 gradient + n = 36 uniform scaffolds (60 needed for the 5 × 6 × 2 design + 12 spares). Same slurry batch, same debinding, same sintering run for both groups. Half each batch printed cylinder-axis-vertical, half horizontal — controls for [[../wiki/failure-modes/pore-anisotropy-from-print-direction]].

- Reagents: [[../wiki/reagents/hydroxyapatite]] (same lot as Step 2), [[../wiki/reagents/photoinitiator-TPO]].
- Failure: [[../wiki/failure-modes/pore-anisotropy-from-print-direction]] (medium) — vertical/horizontal split.
- Failure: [[../wiki/failure-modes/batch-to-batch-HA-stoichiometry-variation]] (medium) — single HA powder lot for the entire study; ICP-MS Ca/P at lot receipt; XRD per batch.
- Failure: [[../wiki/failure-modes/brittle-ceramic-mechanical-failure]] (medium) — destructive compression on 3 sister scaffolds per group; reject batch if E drops > 2× from FE prediction.

Methods: [[../wiki/methods/DLP-vat-photopolymerization]] · [[../wiki/methods/slurry-preparation-for-DLP]] · [[../wiki/methods/debinding-thermal-treatment]] · [[../wiki/methods/ceramic-sintering]]. Sources: [[../wiki/sources/2017-bose-additive-manufacturing-of-biomaterials]], [[../wiki/sources/2022-yang-gaussian-curvature-driven-direction-of-c]], [[../wiki/sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]].

### Step 4 — Characterise each batch (48 h, parallel runs)

μCT every experimental scaffold (≤ 10 μm voxel); thresholded pore-size histogram per radial bin (outer 0–500 μm, mid, core). XRD on one scaffold per batch (Cu-Kα, 2θ = 20–60°, 0.02° step, 2 s dwell, Rietveld); BET N₂ adsorption surface area; ICP-MS acid-digested Ca/P; mercury intrusion porosimetry on a sister scaffold; mechanical compression on 3 sister scaffolds per group; SEM-EDX cross-sections.

**Acceptance gate**: gradient and uniform groups within ±3 pp porosity, ±10 % BET, β-TCP < 5 %, Ca/P 1.667 ± 0.05, mass within ±5 %.

- Failure: [[../wiki/failure-modes/cad-vs-actual-pore-size-mismatch]] (high) — reject any scaffold where outer-zone mean falls outside 100 ± 25 μm or core mean outside 500 ± 50 μm.
- Failure: [[../wiki/failure-modes/HA-phase-decomposition-during-sintering]] (high) — XRD per batch; reject if β-TCP > 5 %.
- Failure: [[../wiki/failure-modes/HA-stoichiometry-affects-resorption]] (medium) — ICP-MS Ca/P 1.667 ± 0.05.

Methods: [[../wiki/methods/micro-CT-imaging]] · [[../wiki/methods/XRD-phase-analysis]] · [[../wiki/methods/BET-surface-area-analysis]] · [[../wiki/methods/ICP-MS]] · [[../wiki/methods/SEM-imaging]] · [[../wiki/methods/mercury-intrusion-porosimetry]] · [[../wiki/methods/mechanical-compression-testing]]. Sources: [[../wiki/sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]], [[../wiki/sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]], [[../wiki/sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]], [[../wiki/sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]].

### Step 5 — Sterilise + ISO-10993-5 cytotoxicity gate (24 h)

Soxhlet-style EtOH/water reflux leach × 24 h, vacuum dry, gamma-sterilise (25 kGy) or autoclave (121 °C × 30 min, dry cycle). [[../wiki/organisms/L929-fibroblast]] cytotoxicity test (24 h scaffold-conditioned medium, n = 6) — viability ≥ 80 % required to release for MC3T3 work.

- Reagents: [[../wiki/reagents/PBS]] (Gibco 10010-023).
- Failure: [[../wiki/failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] (high) — non-negotiable gate; do NOT seed MC3T3 if L929 viability < 80 %.

Methods: [[../wiki/methods/live-dead-staining]]. Sources: [[../wiki/sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]], [[../wiki/sources/2020-garot-additive-manufacturing-of-material-scaff]].

### Step 6 — Cells: receive, expand, STR-authenticate, mycoplasma-screen (4 d, 96 h spread over 1 week)

Source [[../wiki/organisms/MC3T3-E1-subclone-4]] from **ATCC CRL-2593** (CVCL_5440, high-mineraliser) — *not* parental CVCL_0409, *not* Subclone 14 (CVCL_5437, ATCC CRL-2594), and *not* the wiki's mis-labelled `cellosaurus-mc3t3-e1-subclone4-cvcl5437.json` file. STR-authenticate at receipt (mouse 9-locus); PlasmoTest mycoplasma; passage ≤ 10 throughout.

- Reagents: [[../wiki/reagents/alpha-MEM]] (Gibco 12571-063), [[../wiki/reagents/FBS]] (Gibco 16140-071, single lot for entire study), [[../wiki/reagents/penicillin-streptomycin]] (Gibco 15140-122), [[../wiki/reagents/L-glutamine]] (Gibco 35050-061 GlutaMAX).
- Failure: [[../wiki/failure-modes/mc3t3-e1-subclone-variability]] (high) — explicit Subclone 4 sourcing.
- Failure: [[../wiki/failure-modes/cell-line-misidentification]] (high) — STR at receipt; reject on locus mismatch.

Methods: [[../wiki/methods/STR-cell-line-authentication]]. Sources: [[../wiki/sources/cellosaurus-mc3t3-e1-cvcl0409]], [[../wiki/sources/cellosaurus-mc3t3-e1-subclone4-cvcl5437]] (data-integrity flag), [[../wiki/sources/protocol-2025-amin-murine-osteoblast-and-osteoclast-co-cult]], [[../wiki/sources/protocol-2025-sheikh-isolation-of-in-vitro-osteoblastic-deriv]].

### Step 7 — Pre-coat + dynamic-perfusion seed at 5 × 10⁴ MC3T3 per scaffold (8 h)

Pre-coat scaffolds with 10 μg/mL fibronectin × 1 h at 37 °C. Mount each in custom perfusion chamber; oscillating flow at 0.5 mL/min × 4 h; recover outlet medium and count to compute per-scaffold seeding efficiency. Reject any scaffold where seeded count differs from group mean by > 2 SD.

- Reagents: [[../wiki/reagents/PBS]], [[../wiki/reagents/alpha-MEM]] + 10 % [[../wiki/reagents/FBS]].
- Failure: [[../wiki/failure-modes/cell-seeding-uniformity-loss-large-pores]] (high) — perfusion + fibronectin coating; Conoscenti 2025 reported 22.8 ± 1.3 % efficiency uniform across a gradient.
- Failure: [[../wiki/failure-modes/edge-effect-in-scaffold-cell-seeding]] (medium) — sentinel DAPI cross-sections at 24 h.
- Failure: [[../wiki/failure-modes/cell-seeding-efficiency-variation]] (medium) — per-scaffold QC.

Methods: [[../wiki/methods/cell-seeding-dynamic-perfusion]] · [[../wiki/methods/cell-seeding-static]]. Sources: [[../wiki/sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]], [[../wiki/sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]], [[../wiki/sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]].

### Step 8 — Perfusion culture × 21 d (proliferation medium only) (504 h)

Continuous perfusion at 0.5 mL/min ( ≥ 1× scaffold-volume turnover/min). Daily medium change. **Proliferation medium only** — no β-glycerophosphate, no AsAP, no dexamethasone — to keep cells proliferative through d14. n = 6 scaffolds per group per time point × 5 time points × 2 groups = 60 scaffolds (matches Step 3 fabrication count).

- Reagents: [[../wiki/reagents/alpha-MEM]] + 10 % [[../wiki/reagents/FBS]] + 1 % [[../wiki/reagents/penicillin-streptomycin]] + 1 % [[../wiki/reagents/L-glutamine]].
- Failure: [[../wiki/failure-modes/nutrient-diffusion-limitation-in-scaffold-core]] (high) — perfusion is the dominant mitigation; CFD-predict permeability ≥ 10⁻⁹ m²; DAPI cross-section radial bins to confirm core not necrotic.
- Failure: [[../wiki/failure-modes/proliferation-vs-differentiation-tradeoff]] (medium) — non-osteogenic medium for primary cohort; differentiation tracked separately at Step 11.
- Failure: [[../wiki/failure-modes/short-term-proliferation-vs-long-term-bone-formation]] (low) — pre-register d14 as the primary endpoint; frame claim as "in-vitro proliferation," not "bone formation."

Methods: [[../wiki/methods/cell-seeding-dynamic-perfusion]] · [[../wiki/methods/computational-fluid-dynamics-permeability]]. Sources: [[../wiki/sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]], [[../wiki/sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]], [[../wiki/sources/2010-murphy-understanding-the-effect-of-mean-pore-size-on]], [[../wiki/sources/2008-chan-scaffolding-in-tissue-engineering-general-approaches]].

### Step 9 — Serial alamarBlue at d1 / d4 / d7 / d14 / d21 (~6 h per time point)

10 % v/v [[../wiki/reagents/alamarBlue]] (Bio-Rad / Thermo BUF012B / DAL1025) in medium, 1 mL per scaffold, 1–4 h at 37 °C, read 560 / 590 nm. Non-destructive — same scaffolds re-read at every time point.

- Failure: [[../wiki/failure-modes/HA-autofluorescence-confounds-livedead]] (high) — scaffold-only no-cell blank per geometry per plate; subtract; verify signal-to-blank > 3×.

Methods: [[../wiki/methods/alamarBlue-proliferation-assay]]. Sources: [[../wiki/sources/thermo-picogreen-p11496]], [[../wiki/sources/protocol-2025-battistelli-a-quantitative-spectrophotometric-assay]].

### Step 10 — Endpoint sampling: lyse, PicoGreen DNA, DAPI cross-sections (8 h per time point)

At each time point sacrifice n = 6 per group: chaotropic lysis (proteinase-K 200 μg/mL in TE, 56 °C × 30 min + 10 × 5 s sonication on ice + 1 % SDS), [[../wiki/methods/PicoGreen-DNA-quantification]] (Thermo P11496, 1:200 working dilution, 480 / 520 nm), with scaffold-only no-cell blanks per geometry per plate. Validate ≥ 80 % recovery on 3 sentinel scaffolds (known seed → immediate lysis). DAPI confocal cross-sections in 3 radial bins (outer / middle / inner) on n = 2 sentinel scaffolds per group at d1 / d7 / d14. Live/dead (calcein-AM + EthD-1) at d14 on n = 2 per group as sanity check.

- Reagents: [[../wiki/reagents/PicoGreen]], [[../wiki/reagents/DAPI]] (Thermo 62248), [[../wiki/reagents/calcein-AM]] (Thermo C1430), [[../wiki/reagents/ethidium-homodimer]] (Thermo E1169), [[../wiki/reagents/PBS]].
- Failure: [[../wiki/failure-modes/incomplete-cell-lysis-3d-scaffold-picogreen]] (high) — chaotropic + sonication; recovery validation experiment before any group comparison.
- Failure: [[../wiki/failure-modes/HA-autofluorescence-confounds-livedead]] (high) — no-cell scaffold blanks every plate every time point; "scaffold + known DNA spike" control to detect HA quenching.
- Failure: [[../wiki/failure-modes/cad-vs-actual-pore-size-mismatch]] (low) — radial-bin DAPI sampling distinguishes "gradient redistributes cells" from "gradient grows more total cells."

Methods: [[../wiki/methods/PicoGreen-DNA-quantification]] · [[../wiki/methods/DAPI-staining]] · [[../wiki/methods/confocal-microscopy]] · [[../wiki/methods/live-dead-staining]]. Sources: [[../wiki/sources/thermo-picogreen-p11496]], [[../wiki/sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]], [[../wiki/sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]].

### Step 11 — Secondary differentiation cohort (osteogenic medium, parallel) (~24 h end-to-end)

Parallel cohort (n = 4 per group, separate scaffolds), osteogenic medium = α-MEM + 10 % FBS + 50 μg/mL [[../wiki/reagents/L-ascorbic-acid-2-phosphate]] (Sigma A8960) + 10 mM [[../wiki/reagents/beta-glycerophosphate]] (Sigma G9422) + 10 nM [[../wiki/reagents/dexamethasone]] (Sigma D4902). Readouts: [[../wiki/methods/ALP-activity-assay]] at d7/d14 ([[../wiki/reagents/p-nitrophenyl-phosphate]] Sigma N1891), [[../wiki/methods/qPCR]] for RUNX2/COL1A1/OCN/GAPDH at d14, [[../wiki/methods/alizarin-red-staining]] semi-quantitative at d21 ([[../wiki/reagents/alizarin-red-S]] Sigma A5533).

- Failure: [[../wiki/failure-modes/proliferation-vs-differentiation-tradeoff]] (high) — Daskalakis 2024: PCL/HA wins proliferation, PCL/Bioglass wins differentiation; report as separate primary endpoints, do NOT combine.
- Failure: [[../wiki/failure-modes/ARS-binds-residual-scaffold-HA]] (high) — scaffold-only blank; calibrate standard curve on synthetic HA per Battistelli 2025; cross-validate with [[../wiki/methods/von-kossa-staining]] and SEM-EDX.
- Failure: [[../wiki/failure-modes/spontaneous-dystrophic-mineralization-bglycerophosphate]] (medium) — no-cell scaffold + osteogenic medium parallel control.

Methods: [[../wiki/methods/osteogenic-differentiation-induction]] · [[../wiki/methods/ALP-activity-assay]] · [[../wiki/methods/qPCR]] · [[../wiki/methods/alizarin-red-staining]] · [[../wiki/methods/spectrophotometric-calcium-assay]]. Sources: [[../wiki/sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]], [[../wiki/sources/2025-conoscenti-continuous-pore-size-gradient-enhances-z]], [[../wiki/sources/protocol-2025-battistelli-a-quantitative-spectrophotometric-assay]], [[../wiki/sources/protocol-2025-amin-murine-osteoblast-and-osteoclast-co-cult]].

### Step 12 — Statistics, data integrity, pre-registration (~12 h)

Pre-register on OSF before Step 7: primary endpoint = d14 PicoGreen, one-sided two-sample t-test, α = 0.05, n = 6 per group, expected effect size ≥ 25 % per the hypothesis. Power analysis: detect 25 % mean difference with σ = 15 % (typical from Daskalakis 2024) at 80 % power → n = 6 per group per time point. Second-reviewer image audit before any submission.

- Failure: [[../wiki/failure-modes/image-reuse-unsupported-osteogenesis-claims]] (high) — archive all raw images with original filenames; second-reviewer audit; do not splice/duplicate panels (8 retractions in `raw/retractions/`).
- Failure: [[../wiki/failure-modes/donor-variability-hMSC]] (low) — MC3T3 is a cell line, not donor-variable; flagged for any future hBMSC follow-up.

Sources: [[../wiki/sources/crossref-retraction-10-3892-mmr-2025-13519]], [[../wiki/sources/crossref-retraction-10-1111-clr-12656]], [[../wiki/sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]].

## Materials

| Category | Item | Supplier | Catalog | Qty | Price (USD) |
|---|---|---|---|---|---|
| Scaffold raw | [[../wiki/reagents/hydroxyapatite]] | Plasma Biotal | P88 / Captal | 500 g | 600 |
| Scaffold raw | [[../wiki/reagents/photoinitiator-TPO]] | Sigma-Aldrich | 415952 | 50 g | 250 |
| Scaffold raw | [[../wiki/reagents/PEG-DA]] + diluents | Sigma-Aldrich | 455008 + reactive diluents | 500 mL | 400 |
| Cells | [[../wiki/organisms/MC3T3-E1-subclone-4]] | ATCC | CRL-2593 (CVCL_5440) | 1 vial | 625 |
| Cells | [[../wiki/organisms/L929-fibroblast]] | ATCC | CCL-1 | 1 vial | 580 |
| Media | [[../wiki/reagents/alpha-MEM]] | Gibco | 12571-063 | 5 × 500 mL | 250 |
| Media | [[../wiki/reagents/FBS]] (single lot) | Gibco | 16140-071 | 1 × 500 mL | 500 |
| Media | [[../wiki/reagents/penicillin-streptomycin]] | Gibco | 15140-122 | 1 × 100 mL | 80 |
| Media | [[../wiki/reagents/L-glutamine]] (GlutaMAX) | Gibco | 35050-061 | 1 × 100 mL | 40 |
| Media | [[../wiki/reagents/PBS]] | Gibco | 10010-023 | 5 × 500 mL | 100 |
| Osteogenic | [[../wiki/reagents/L-ascorbic-acid-2-phosphate]] | Sigma | A8960 | 5 g | 80 |
| Osteogenic | [[../wiki/reagents/beta-glycerophosphate]] | Sigma | G9422 | 100 g | 60 |
| Osteogenic | [[../wiki/reagents/dexamethasone]] | Sigma | D4902 | 100 mg | 30 |
| Assay | [[../wiki/reagents/PicoGreen]] | Thermo Fisher | P11496 | 1 kit | 475 |
| Assay | [[../wiki/reagents/alamarBlue]] | Thermo Fisher | DAL1025 | 100 mL | 250 |
| Assay | [[../wiki/reagents/calcein-AM]] | Thermo Fisher | C1430 | 1 mg | 200 |
| Assay | [[../wiki/reagents/ethidium-homodimer]] | Thermo Fisher | E1169 | 1 mL of 2 mM | 100 |
| Assay | [[../wiki/reagents/DAPI]] | Thermo Fisher | 62248 | 10 mL | 30 |
| Assay | [[../wiki/reagents/alizarin-red-S]] | Sigma | A5533 | 100 g | 60 |
| Assay | [[../wiki/reagents/p-nitrophenyl-phosphate]] | Sigma | N1891 | ALP kit | 200 |
| Mol. bio. | Trizol + cDNA + qPCR + RUNX2/COL1A1/OCN/GAPDH primers | Various | — | Bundle | 800 |
| Plastics | Plates / dishes / tips / perfusion tubing | Various | — | Bundle | 1,500 |
| QC | STR (mouse 9-locus) + PlasmoTest | ATCC / IDEXX | — | 1 + 4 | 350 |
| Equipment | DLP slurry printer (Lithoz CeraFab 7500 / Tethon3D) | Univ. CMC | — | 5 days | 1,000 |
| Equipment | Debinding + sintering furnace | Univ. CMC | — | 3 runs | 300 |
| Equipment | μCT @ ≤ 10 μm voxel (Bruker SkyScan / ScanCo) | Univ. CMC | — | 24 scans | 4,800 |
| Equipment | BET / XRD / ICP-MS / Hg-porosimetry / mechanical / SEM-EDX | Univ. CMC | — | Bundled | 1,700 |
| Personnel | Postdoc 0.5 FTE × 12 weeks (academic rate) | — | — | — | 5,500 |
| Other | OSF pre-reg + biostats + 15 % buffer | — | — | — | 2,500 |

> **Vendor caveat**: ATCC and Sigma direct catalog pages were not captured in `raw/` ([[../wiki/failure-modes/ATCC-Sigma-vendor-pages-not-captured]]) — confirm catalog numbers and grades on the live vendor pages before purchase. PubChem CID 24856 in the wiki is potassium alum, NOT HA ([[../wiki/failure-modes/pubchem-cid-mismatch-for-inorganic-mineral]]); the HA properties used here come from [[../wiki/sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]], [[../wiki/sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]], [[../wiki/sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]].

## Budget

| Bucket | Cost (USD) |
|---|---:|
| Scaffold raw materials | 1,250 |
| Cells | 1,205 |
| Cell-culture media + supplements | 1,140 |
| Assay kits + reagents | 1,315 |
| Molecular biology | 800 |
| Plasticware | 1,500 |
| Cell-line authentication / mycoplasma | 350 |
| DLP printer access | 1,000 |
| Furnace access | 300 |
| μCT access | 4,800 |
| Other characterisation | 1,700 |
| Personnel (postdoc 0.5 FTE × 12 wk) | 5,500 |
| Stats / pre-reg / 15 % buffer | 2,500 |
| **Total** | **23,360** |

## Timeline

| Phase | Weeks | Depends on | Deliverables |
|---|---|---|---|
| 1. Design + slurry | 1–2 | — | Gradient + uniform CAD STL; 60 vol % HA / TPO / PEG-DA slurry on rheology spec |
| 2. Calibration array | 3–4 | 1 | Per-batch S = d_post/d_CAD lookup; pre-compensated experimental CAD |
| 3. Fabricate + characterise | 5–6 | 2 | 72 sintered scaffolds; μCT/XRD/BET/ICP-MS/SEM/mech QC reports; match-on-confound acceptance |
| 4. Sterilise + cyto pre-screen + cell expansion | 7 | 3 | Sterile scaffolds released; STR-authenticated MC3T3 stocks; mycoplasma-negative |
| 5. Seeding + perfusion culture + serial alamarBlue | 8–11 | 4 | Serial alamarBlue d1/d4/d7/d14/d21; per-scaffold seeding-efficiency QC |
| 6. Endpoint + stats | 12 | 5 | PicoGreen, DAPI, ALP, qPCR, ARS; pre-registered statistical report |

**Total: 12 weeks.**

## Validation

**Primary endpoint**: day-14 dsDNA per scaffold ([[../wiki/methods/PicoGreen-DNA-quantification]], blank-subtracted), gradient vs uniform.

### Success criteria
- Gradient d14 dsDNA ≥ 1.25× uniform-control d14 dsDNA (one-sided two-sample t-test, α = 0.05, n = 6 per group).
- alamarBlue d14 fluorescence directionally consistent; (alamarBlue / PicoGreen) ratio within ±25 % between groups (both groups remained proliferative).
- Match-on-confound acceptance: porosity ±3 pp, BET ±10 %, β-TCP < 5 %, Ca/P 1.667 ± 0.05, mass ±5 %.
- Seeding efficiency between groups within ±20 %, no group below 60 %.
- L929 ISO-10993-5 viability ≥ 80 % on conditioned medium pre-MC3T3.
- DAPI cross-sections show gradient-core cell density ≥ 50 % of outer-zone density (confirms diffusion-mitigation).

### Failure criteria
- d14 dsDNA gradient/uniform ratio < 1.25 OR p > 0.05 → **hypothesis falsified**.
- Match-on-confound spec violated → result inadmissible (gradient effect not isolable from chemistry/porosity confound).
- Seeding efficiency between groups > ±20 % OR DAPI hollow large-pore core in gradient → re-design seeding (longer perfusion, fibronectin) before re-running.
- L929 viability < 80 % → re-process scaffolds; do NOT seed MC3T3.
- alamarBlue / PicoGreen ratio drifts > 50 % by d14 → cells differentiated unintentionally; revisit medium / passage.
- Image-audit discrepancy → full re-audit before any reporting.

### Measurements

| Measurement | Method | Time points (d) | n per group |
|---|---|---|---|
| PicoGreen dsDNA (lysate) | [[../wiki/methods/PicoGreen-DNA-quantification]] | 1, 4, 7, 14, 21 | 6 |
| alamarBlue (non-destructive) | [[../wiki/methods/alamarBlue-proliferation-assay]] | 1, 4, 7, 14, 21 | 6 |
| DAPI confocal radial bins | [[../wiki/methods/DAPI-staining]] · [[../wiki/methods/confocal-microscopy]] | 1, 7, 14 | 2 |
| Live/dead (calcein-AM + EthD-1) | [[../wiki/methods/live-dead-staining]] | 14 | 2 |
| ALP (osteogenic cohort) | [[../wiki/methods/ALP-activity-assay]] | 7, 14 | 4 |
| qPCR RUNX2/COL1A1/OCN/GAPDH | [[../wiki/methods/qPCR]] | 14 | 4 |
| Alizarin Red S (osteogenic, semi-quant) | [[../wiki/methods/alizarin-red-staining]] | 21 | 4 |
| μCT pore-size acceptance | [[../wiki/methods/micro-CT-imaging]] | pre-seeding | 12 |

## Failure Map (top failure modes, inline at protocol steps)

| Failure mode | Severity | Step | Mitigation |
|---|---|---|---|
| [[../wiki/failure-modes/cad-vs-actual-pore-size-mismatch]] | high | 2, 4 | Per-batch S calibration; μCT every scaffold; reject outside 100 ± 25 / 500 ± 50 μm |
| [[../wiki/failure-modes/sintering-shrinkage-pore-deviation]] | high | 2 | Pre-compensate CAD by S ≈ 0.80; per-lot S calibration; 60–70 vol % HA loading |
| [[../wiki/failure-modes/HA-phase-decomposition-during-sintering]] | high | 2 | Cap sintering 1200–1250 °C; ICP-MS Ca/P 1.667 ± 0.05 in/out; XRD β-TCP < 5 % per batch |
| [[../wiki/failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] | high | 5 | Slow 0.5 °C/min debinding ≥ 2 h soak; EtOH/water reflux leach; ISO-10993-5 L929 ≥ 80 % gate |
| [[../wiki/failure-modes/cell-seeding-uniformity-loss-large-pores]] | high | 7 | Dynamic perfusion (4 h, 0.5 mL/min); fibronectin pre-coating; per-scaffold efficiency QC |
| [[../wiki/failure-modes/nutrient-diffusion-limitation-in-scaffold-core]] | high | 8 | Perfusion ≥ 1× scaffold-volume turnover/min; CFD permeability ≥ 10⁻⁹ m²; DAPI radial bins |
| [[../wiki/failure-modes/HA-autofluorescence-confounds-livedead]] | high | 9, 10 | Scaffold-only no-cell blank per geometry per plate per time point; signal-to-blank > 3× |
| [[../wiki/failure-modes/incomplete-cell-lysis-3d-scaffold-picogreen]] | high | 10 | Proteinase-K + sonication + 1 % SDS; recovery validation ≥ 80 % before group comparisons |
| [[../wiki/failure-modes/mc3t3-e1-subclone-variability]] | high | 6 | Source Subclone 4 from ATCC CRL-2593; STR at receipt; passage ≤ 10; ignore the wiki's mis-labelled cellosaurus file |
| [[../wiki/failure-modes/proliferation-vs-differentiation-tradeoff]] | medium | 8 | Non-osteogenic medium for primary cohort; differentiation tracked separately at Step 11 |
| [[../wiki/failure-modes/ARS-binds-residual-scaffold-HA]] | high | 11 | Scaffold-only blank; calibrate ARS curve on synthetic HA; cross-validate with von Kossa + EDX |
| [[../wiki/failure-modes/image-reuse-unsupported-osteogenesis-claims]] | high | 12 | Archive raw images with original filenames; second-reviewer audit; no panel splicing |

## Scope caveats / things to flag in discussion

- Karageorgiou & Kaplan 2005 (canonical "100 μm min, ~300 μm optimum") is non-OA and not in `raw/` — claims invoking that figure are transitively cited only.
- Plan covers in-vitro proliferation only. In-vivo follow-up is the natural next step but out of scope ([[../wiki/failure-modes/in-vivo-vs-in-vitro-discordance]], [[../wiki/failure-modes/short-term-proliferation-vs-long-term-bone-formation]]).
- Native rabbit-femur Haversian/Volkmann canal diameters are 40–200 μm ([[../wiki/sources/2026-zhao-longitudinal-and-radial-microgradients-i]]); the 500 μm core is closer to trabecular spacing — restate the biomimetic claim accordingly.

## Items under-supported by current wiki (Pass-3 honesty)

- DLP slurry rheology / specific-gravity / cure-depth parameters for 60 vol % HA + TPO are not in `raw/` — Step 2 calibration is broader because of this. **Suggested fix**: `/ingest-source` a protocols.io HA-DLP recipe.
- Quantitative shrinkage factor S for stoichiometric HA at 1250 °C is given in the wiki as a 0.75–0.85 range, derived from Bose 2017 + Garot 2020 generalities; Ishack 2015's 1100 °C × 4 h is on robocasted HA/β-TCP, a different system. Step 2 calibration is essential, not optional.
- ATCC and Sigma direct catalog pages not in `raw/` ([[../wiki/failure-modes/ATCC-Sigma-vendor-pages-not-captured]]) — catalog numbers in the materials table come from Cellosaurus / PubChem cross-references and standard published catalog conventions. Confirm at purchase.
- CFD permeability parameters for HA at 100→500 μm are not in any source page; Conoscenti 2025 ran CFD for 70→200 μm PLLA. Step 8 mitigation references the principle but the lab will need to parameterise the model itself.

---

*plan-v1 generated by Pass 3 on 2026-04-25 from [[../wiki/index]]. Structured form: [[../plan/plan.json]]. Filed back into wiki as [[../wiki/plans/plan-v1]].*
