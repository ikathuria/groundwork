# Session log — 2026-04-25_a-3d-printed-hydroxyapatite-scaffold-with

## [2026-04-25 18:55] research | 2026-04-25_a-3d-printed-hydroxyapatite-scaffold-with
Sources fetched: 65 total (papers: 41, protocols: 6, retractions: 8, catalogs: 10).
- Papers: 36 PMC JATS XML + 5 PDF (Europe PMC `?pdf=render`) with deterministic `pdftotext` companions. Two foundational reviews (Bose 2012 CaP ceramics, Ma 2008 biomimetic materials) failed both routes — Europe PMC PDF mirror returned a 232-byte HTML stub for both DOIs; logged as `failed-europepmc-no-pdf-html-stub-returned`. Several other older PMC entries (Karageorgiou 2005 etc.) only expose `<front>` metadata in PMC JATS — recovered via the PDF route where Europe PMC had a render.
- Protocols: 6 Bio-protocol step-by-step JATS articles (osteoblast prep, μCT volume, co-culture, spectrophotometric assay, etc.). 3 candidates were front-only and were not recoverable without bypassing OA constraints.
- Retractions: 8 Crossref retraction-notice JSON records — including the directly-relevant 2025 retraction of "grooved hydroxyapatite scaffold modulates mitochondria homeostasis & osteogenesis in BMSCs" and the 2020 retraction of an MSC-seeded 3D PLA/PCL/HA composite scaffold.
- Catalogs: PubChem (HA, β-TCP, dexamethasone, ascorbic-acid-2-phosphate, sodium glycerophosphate) + Cellosaurus (MC3T3-E1, MC3T3-E1 subclone 4, Saos-2, hFOB 1.19) + Thermo Fisher PicoGreen P11496. ATCC and Sigma-Aldrich both blocked scripted requests (ATCC returned a 500-error page; Sigma WAF dropped the connection silently); used PubChem and Cellosaurus as canonical neutral substitutes.

Notable for Pass 2:
- The single most directly relevant precedent for the hypothesis is **Diez-Escudero 2024 (PMC11057695)** — *In Vitro Evaluation of Pore Size Graded Bone Scaffolds with Different Material Composition* — pulled via the Europe PMC PDF mirror; this should be the anchoring reference when Pass 2 sets the day-14 effect-size threshold and writes the gradient-vs-uniform comparison.
- **Conoscenti 2025 (PMC12377023)** — *Continuous pore size gradient enhances zonal-specific differentiation of stem cells in an osteochondral scaffold* — strongest "continuous gradient ⇒ enhanced cell-fate" mechanistic precedent; Pass 2 should treat as a comparator (osteochondral, not pure-bone) and surface the methodological gap.
- **Yang 2022 (PMC9564829)** — *Gaussian curvature-driven direction of cell fate toward osteogenesis with TPMS scaffolds* — quantitative pore-curvature → osteogenesis link; supports the mechanism clause.
- **Murphy 2010 (PMC2958613)** — Murphy/O'Brien collagen-GAG pore-size study — the canonical reference for "different mean pore sizes change cell behaviour"; foundational.
- **Karageorgiou & Kaplan 2005** — the canonical "100 µm minimum, ~300 µm optimal" review — *not OA*, not in raw/. Pass 2 should note that this seminal claim is referenced indirectly through Loh 2013 (PMC3826579) and Polo-Corrales 2014 (PMC3997175), both fetched.
- **Retraction signal**: at least one HA-scaffold + osteogenesis claim was retracted in 2025 (Wang et al., 10.3892/mmr.2020.11352, retracted by 10.3892/mmr.2025.13519). Pass 2 should generate a `failure-mode` entry around "image-reuse / unsupported osteogenesis claims in HA-scaffold literature" — caution for the literature QC verdict.
- **Coverage gaps to flag**:
  - No paper found that fabricates a *continuous radial* HA-only pore gradient at exactly 100 → 500 µm. Closest precedent is Diez-Escudero (graded bone scaffolds) and Conoscenti (osteochondral). The hypothesis is plausibly novel.
  - No protocols.io content ingested (auth-required API). Bio-protocol JATS articles cover the assay end (μCT, ALP, co-culture) but not the slurry-prep / SLA print parameters for HA scaffolds.
  - ATCC and Sigma direct catalog pages not captured. PubChem + Cellosaurus give canonical chemical / cell-line records; Pass 2's `reagents/<slug>.md` and `organisms/<slug>.md` pages should still cite ATCC / Sigma catalog numbers (they are present in the Cellosaurus xref block and in well-known product naming) and flag that no live vendor-page snapshot was captured.
- All helper fetch scripts moved to `tooling/` to keep `raw/` artifact-only per `context.md` §7.1 constraints.

## [2026-04-25 19:40] wiki | 2026-04-25_a-3d-printed-hydroxyapatite-scaffold-with
Pages: sources=65, methods=71, reagents=58, organisms=23, failure-modes=33 (250 wiki pages total + index.md + log.md). Compile time ~40 min driven by 5 parallel source-page batches and 4 parallel entity-page batches.

Promotion candidates (mention 2+ likely future hypotheses, recurrent across cell-biology / biomaterials work):
- **Methods**: micro-CT-imaging, SEM-imaging, qPCR, alamarBlue-proliferation-assay, MTT-assay, MTS-assay, CCK-8-assay, PicoGreen-DNA-quantification, ALP-activity-assay, XRD-phase-analysis, EDX-spectroscopy, BET-surface-area-analysis, ICP-MS, mechanical-compression-testing, live-dead-staining, DAPI-staining, confocal-microscopy, fluorescence-microscopy, osteogenic-differentiation-induction, ceramic-sintering, debinding-thermal-treatment, slurry-preparation-for-DLP, STR-cell-line-authentication.
- **Reagents**: PBS, FBS, DMEM, alpha-MEM, penicillin-streptomycin, L-glutamine, DAPI, PicoGreen, alamarBlue, MTS, MTT, alizarin-red-S, calcein-AM, ethidium-homodimer, BMP-2, dexamethasone, beta-glycerophosphate, L-ascorbic-acid-2-phosphate, collagen, gelatin, hydroxyapatite, beta-tricalcium-phosphate, biphasic-calcium-phosphate, polycaprolactone, polylactic-acid, PLGA.
- **Organisms**: MC3T3-E1, hBMSC, HUVEC, Saos-2, L929-fibroblast, salmonella-typhimurium-ames-strains.
- **Failure modes (the most cross-domain)**: cell-line-misidentification, proliferation-vs-differentiation-tradeoff, image-reuse-unsupported-osteogenesis-claims (→ generalize to image-reuse-unsupported-claims), retracted-claim, nutrient-diffusion-limitation-in-scaffold-core (any 3D culture ≥ 2 mm), edge-effect-in-scaffold-cell-seeding, cell-seeding-efficiency-variation, donor-variability-hMSC (→ donor-variability-primary-cells), pubchem-cid-mismatch-for-inorganic-mineral (any pipeline ingesting PubChem for non-molecular substances), paywalled-or-non-OA-canonical-source-not-captured, ATCC-Sigma-vendor-pages-not-captured, incomplete-cell-lysis-3d-scaffold-picogreen (→ incomplete-cell-lysis-3d-culture).

Cross-source contradictions surfaced (Pass 3 must address):
1. **Pore-size optimum is genuinely contested.** 200–350 μm (Bose 2012), 300–500 μm (Bruzauskaite 2016 citing Ishaug), ~300 μm (canonical Karageorgiou-Kaplan 2005 transitively), 600 μm for M2 polarisation (Qi 2025 citing Li 2022), 200–2200 μm acceptable (Zhang 2017), ~200 μm outperforms 350–400 μm in vivo (Montoya 2021 citing rabbit study). The 100–500 μm gradient endpoints span this whole window — both an opportunity (covers all sub-optima) and a risk (no single zone is unambiguously optimal).
2. **Native bone target is smaller than the proposed gradient.** Zhao 2026 measures rabbit-femur canal diameters at 40–200 μm; the hypothesis's 500 μm core is closer to trabecular spacing than canal diameter. Pass 3's mechanism statement should reflect this.
3. **<100 μm pore role disagreement.** Chocholata 2019 says 10–100 μm pores not suitable for osteoblast seeding; Picado-Tejero 2025 says <100 μm "crucial for ions/macromolecules transport". The 100 μm cortical-mimicking outer zone of the gradient sits at this disputed edge.
4. **Microporosity / proliferation U-shape.** Zhang 2018 (Rosa et al.) found 30 % microporosity hurts proliferation while 5–15 % helps. The PCL/HA gradient hypothesis assumes monotonic pore-size response; this evidence argues for tuning microporosity orthogonal to mean pore size.
5. **Composition vs architecture trade-off.** Daskalakis 2024 found PCL/HA wins on proliferation but PCL/Bioglass wins on differentiation — the proliferation-vs-differentiation tradeoff is *composition-dependent* on top of *pore-architecture-dependent*. Pass 3 must keep the proposed HA-only design intact rather than drift to a HA/Bioglass hybrid.

Critical data-integrity flags Pass 3 must respect:
- `pubchem-hydroxyapatite-cid24856` is potassium alum (AlKO8S2, MW 258.21), NOT hydroxyapatite. Do not cite this catalog as an HA properties source. Use 2017-eliaz / 2008-palmer / 2026-thammarakcharoen / Sigma catalog numbers instead.
- `cellosaurus-mc3t3-e1-subclone4-cvcl5437.json` is named ‟subclone4" but CVCL_5437 = Subclone 14 (ATCC CRL-2594). Canonical Subclone 4 is CVCL_5440 / ATCC CRL-2593. The Sheikh 2025 protocol uses Subclone 4. Pass 3 must source MC3T3-E1 Subclone 4 from ATCC CRL-2593 with STR-authentication.
- 2024-diez-escudero filename slug — actual lead authors are **Daskalakis et al. 2024** (DOI 10.1089/3dp.2022.0138). Slug retained per Pass-1 fetch convention; correct citation is in the source page metadata.
- 2016-murphy filename slug — actual authors are **Bruzauskaite, Bironaite, Bagdonas, Bernotiene 2016** (DOI 10.1007/s10616-015-9895-4). Slug retained per Pass-1 fetch convention.
- **Karageorgiou & Kaplan 2005** — the canonical "100 μm minimum, ~300 μm optimal" review is non-OA and not in `raw/`. Cited transitively via 2013-loh, 2014-polo-corrales, 2015-baino, 2016-murphy. Pass 3 should treat this as a transitively-grounded claim, not a primary citation.

Sources that were difficult to extract:
- `2024-diez-escudero` PDF text-extraction had cp1252 encoding artifacts (μ/β/° rendered weakly); recoverable via UTF-8 forced extraction.
- `2008-chan` PDF-derived `.txt` had OCR character drift (β → b, μ → l); quotes use latin-1 fallback.
- Several JATS XMLs are >25K-token single-line files; processed via Python regex extraction rather than the Read tool.
- 7 of the 8 retraction-notice JSONs from Crossref provide **no narrative reason**; reasons inferred from titles or noted as "reason not stated in Crossref notice".
- `protocol-2025-bertacchi` is **out-of-domain** (telencephalic neural organoids); page kept minimal.

Working files left in wiki/ for the lint pass to tidy or ignore:
- `wiki/.vocabulary.md` — controlled-slug seed used during Pass 2.
- `wiki/.entity-mentions.md` — consolidated entity → source-IDs mapping. Both files start with `.` so they don't appear in Obsidian's vault sidebar by default.

## [2026-04-25 20:30] plan | plan-v1
Total budget: $23,360. Timeline: 12 weeks. Sources used: 65 (every protocol step traces to ≥1 wiki source; the 3 anchor precedents are Daskalakis 2024 / Conoscenti 2025 / Wang 2024). Top failure modes: cad-vs-actual-pore-size-mismatch, sintering-shrinkage-pore-deviation, HA-phase-decomposition-during-sintering, cytotoxic-residue-from-binders-or-photoinitiators, cell-seeding-uniformity-loss-large-pores, nutrient-diffusion-limitation-in-scaffold-core, HA-autofluorescence-confounds-livedead, incomplete-cell-lysis-3d-scaffold-picogreen, mc3t3-e1-subclone-variability, ARS-binds-residual-scaffold-HA, image-reuse-unsupported-osteogenesis-claims.
Novelty: similar-work-exists (3 close-but-imperfect precedents — PCL/HA composite three-zone gradient, PLLA continuous 70→200 μm, CDHA gradient extrusion — none combine continuous radial pure-HA + 100→500 μm + osteoblast proliferation).

Pass-3 honesty (items under-supported by current wiki, surfaced in plan.json `under_supported_by_wiki`):
- DLP slurry rheology / cure-depth recipe for 60 vol% HA + TPO is not in raw/; Step 2 calibration array is broader because of this. Possible fix: `/ingest-source` a protocols.io HA-DLP recipe.
- Quantitative shrinkage factor S for stoichiometric HA at 1250 °C is range-only in the wiki (Bose 2017 + Garot 2020 generalities); per-lot calibration at Step 2 is essential, not optional.
- ATCC and Sigma direct catalog pages were not captured in raw/; vendor catalog numbers in materials list come from cross-references and standard published catalog conventions — confirm at purchase. Cellosaurus file labelled `subclone4` references CVCL_5437 (Subclone 14, ATCC CRL-2594), so the plan explicitly directs sourcing from CRL-2593 (CVCL_5440, Subclone 4) and STR-authentication at receipt.
- CFD permeability parameters for HA at 100→500 μm are not in any source page; lab will parameterise the model itself.

Files written:
- plan/plan.json (structured artifact for the Next.js Lab Brief UI)
- plan/plan.md (human-readable mirror with Obsidian wikilinks)
- wiki/plans/plan-v1.md (filed back into the wiki graph)
- hypothesis.md status: wiki → complete; latest_plan: wiki/plans/plan-v1
- wiki/index.md plans count: 0 → 1
- wiki/log.md and session.log.md appended.
