---
type: reagent
slug: hydroxyapatite
aliases: [HA, HAp, HAP, hydroxylapatite, calcium-hydroxyapatite, Ca10(PO4)6(OH)2]
cas: 1306-06-5
formula: Ca10(PO4)6(OH)2
molecular_weight: 1004.6
suppliers:
  - name: Sigma-Aldrich (Merck)
    catalog: "21223"
    grade: "synthetic, reagent grade"
  - name: Sigma-Aldrich (Merck)
    catalog: "67392"
    grade: "nanopowder, <200 nm BET"
  - name: Sigma-Aldrich (Merck)
    catalog: "289396"
    grade: "powder, ≥97%"
  - name: Plasma Biotal
    catalog: "P88 / Captal series"
    grade: "biomedical grade, sintering-validated"
  - name: Fluidinova
    catalog: "nanoXIM·HAp"
    grade: "nanocrystalline, aqueous suspension"
  - name: Bioteck
    catalog: "HAP038C5SD09C"
    grade: "biomedical grade granules"
storage: room-temperature, dry, sealed (hygroscopic surface)
hazards: low (nuisance dust on inhalation; standard PPE)
known_failure_modes: [HA-phase-decomposition-during-sintering, HA-stoichiometry-affects-resorption, batch-to-batch-HA-stoichiometry-variation, brittle-ceramic-mechanical-failure, sintering-shrinkage-pore-deviation, cytotoxic-residue-from-binders-or-photoinitiators, pubchem-cid-mismatch-for-inorganic-mineral, HA-autofluorescence-confounds-livedead]
sources: [2008-chan, 2015-ishack, 2017-eliaz, 2020-wang, 2024-wang, 2026-thammarakcharoen, 2025-de-carvalho, 2025-qi, 2018-zhang, 2013-loh, 2024-diez-escudero, 2026-liu, 2025-liu, 2025-xie, 2008-palmer, 2012-amini, 2012-bose, 2013-henkel, 2014-polo-corrales, 2014-thavornyutikarn, 2015-baino, 2015-chia, 2015-do, 2017-gao, 2016-murphy, 2017-bose, 2017-zhang, 2019-chocholata, 2020-chen, 2020-garot, 2021-montoya, 2023-koushik, 2025-hossen, 2025-picado-tejero, 2025-tang, 2026-daghrery, 2022-yang, protocol-2025-battistelli, crossref-retraction-10-1016-j-heliyon-2024-e36493, crossref-retraction-10-1155-2024-9893086, pubchem-hydroxyapatite-cid24856]
tags: [calcium-phosphate, bioceramic, scaffold-material, central-to-hypothesis]
created: 2026-04-25
updated: 2026-04-25
---

# Hydroxyapatite (HA)

The central inorganic material for this hypothesis. A calcium-phosphate bioceramic that mimics the mineral phase of bone, used as bulk powder, slurry, ink, coating, or composite filler in 3D-printed bone scaffolds.

> **Data-integrity note.** The catalog source [[../sources/pubchem-hydroxyapatite-cid24856]] is **not** authoritative for HA: PubChem CID 24856 resolves to potassium alum (AlKO8S2, MW 258.21), not hydroxyapatite. Properties below are sourced from [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]], [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]], [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]], and supplier specifications. Tracked under [[../failure-modes/pubchem-cid-mismatch-for-inorganic-mineral]].

## Properties

- **CAS:** 1306-06-5
- **Formula:** Ca₁₀(PO₄)₆(OH)₂ (often written Ca₅(PO₄)₃(OH) per unit cell)
- **Molecular weight:** 1004.6 g/mol
- **Density:** ~3.16 g/cm³ (theoretical)
- **Crystal system:** hexagonal (P6₃/m), a = 9.42 Å, c = 6.88 Å
- **Stoichiometric Ca/P molar ratio:** 1.67
- **Decomposition:** dehydroxylates around 800–1000 °C; partial decomposition to β-TCP + CaO + H₂O above ~1200 °C depending on atmosphere and starting Ca/P ratio.
- **Synonyms / aliases:** HA, HAp, HAP, hydroxylapatite, calcium hydroxyapatite, "bone mineral analogue."
- **Physical form for AM:** typically supplied as fine (~1–10 µm) or nano (<200 nm) powder; converted to printable form as DLP/SLA slurry (40–60 vol% solids in photocurable resin), robocasting/DIW ink (with binders + dispersants), or binder-jet powder bed.

## Common uses in this hypothesis space

- **Bulk scaffold material** for 3D-printed bone substitutes via DLP, robocasting, binder-jet, FDM (HA-filled filaments), and SLS — see methods pages and [[../sources/2020-wang-3d-printing-of-bone-tissue-engineering-s]], [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]], [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]].
- **Composite filler** in HA-PCL, HA-PLA, HA-PLGA scaffolds where the polymer provides toughness and the HA provides bioactivity / osteoconduction. See [[../sources/2025-lee-pcl-scaffold-with-well-defined-hierarchi]], [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]].
- **Surface coating** on stronger scaffolds (Ti, β-TCP, BCP) to confer bioactivity — [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]].
- **Reference / control material** in the biphasic CaP family ([[../reagents/biphasic-calcium-phosphate]]) — HA is the slow-resorbing endmember; β-TCP the fast-resorbing endmember.
- **Coating substrate** for polydopamine + drug functionalization — [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] (uses the calcium-deficient analogue [[../reagents/calcium-deficient-hydroxyapatite]]).

## Suppliers / catalog

| Supplier | Catalog | Form / grade | Notes |
|---|---|---|---|
| Sigma-Aldrich | 21223 | reagent-grade powder | most common citation in protocols |
| Sigma-Aldrich | 67392 | nanopowder <200 nm BET | for high-resolution DLP slurries |
| Sigma-Aldrich | 289396 | powder ≥97% | budget alternative |
| Plasma Biotal (UK) | P88 / Captal series | sintering-validated medical grade | preferred when sintered scaffold is the endpoint |
| Fluidinova (PT) | nanoXIM·HAp | aqueous nano-HA suspension | for aqueous DIW inks and coatings |
| Bioteck (IT) | HAP038C5SD09C | biomedical-grade granules | for granule packing studies |
| ATCC / Sigma direct | — | — | direct catalog snippets **not captured** in `raw/` ([[../failure-modes/ATCC-Sigma-vendor-pages-not-captured]]) — confirm catalog and grade against the supplier's live page before purchase |

## Alternatives

- [[../reagents/calcium-deficient-hydroxyapatite]] — Ca/P < 1.67; closer to native bone composition; more resorbable.
- [[../reagents/beta-tricalcium-phosphate]] — Ca₃(PO₄)₂; significantly more resorbable; sometimes used as the inner-pore phase to deliberately "pull" bone in-growth.
- [[../reagents/biphasic-calcium-phosphate]] — engineered HA + β-TCP mixture; the dominant clinical bone-graft chemistry.
- [[../reagents/alpha-tricalcium-phosphate]] — high-temperature polymorph of TCP; rapidly hydrolyses to CDHA in aqueous media; the basis of self-setting CaP cements.
- [[../reagents/bioglass-45S5]] — silica-based bioactive glass; chemically distinct family but addresses similar indications.
- [[../reagents/mesoporous-bioactive-glass]] — bioactive glass with engineered nanoporosity; complementary surface-area-driven bioactivity.

## Gotchas / things to watch for

- [[../failure-modes/HA-phase-decomposition-during-sintering]] — sintering above ~1200 °C (or in dry / non-humid atmosphere) decomposes HA to β-TCP / α-TCP / CaO; XRD trace must be checked post-sinter. β-TCP peaks in an "HA scaffold" trace are a red flag, not a feature.
- [[../failure-modes/HA-stoichiometry-affects-resorption]] — the Ca/P ratio (and CO₃²⁻ / F⁻ substitution) drives in-vivo dissolution kinetics; matched chemistry between gradient and uniform groups requires verified Ca/P, not just nominal "HA."
- [[../failure-modes/batch-to-batch-HA-stoichiometry-variation]] — commercial HA powders vary lot-to-lot in Ca/P, surface area, and crystallinity; lock the lot before fabricating both control and experimental groups.
- [[../failure-modes/sintering-shrinkage-pore-deviation]] — HA scaffolds shrink 15–25% linearly during sintering; CAD pore sizes must be pre-compensated, and shrinkage may be anisotropic across a pore-size gradient.
- [[../failure-modes/brittle-ceramic-mechanical-failure]] — pure-HA scaffolds have low fracture toughness (K_IC ~ 0.1–1 MPa·m^½); compressive strength of macroporous HA can fall below cancellous-bone targets.
- [[../failure-modes/cytotoxic-residue-from-binders-or-photoinitiators]] — DLP / binder-jet HA carries residual binder/photoinitiator/dispersant unless properly debinded; cytotoxicity testing per ISO-10993 is the gating step.
- [[../failure-modes/HA-autofluorescence-confounds-livedead]] — sintered HA scaffolds scatter and weakly autofluoresce at 480/520 nm; acquire scaffold-only (no-cell) blanks for PicoGreen, calcein-AM, and live/dead imaging.
- [[../failure-modes/pubchem-cid-mismatch-for-inorganic-mineral]] — HA is not a discrete molecular compound; PubChem CID lookups can return the wrong record. Use CAS 1306-06-5 + supplier specifications, never a CID, as the canonical reference.

## Sources

- [[../sources/2017-eliaz-calcium-phosphate-bioceramics-a-review-o]] — definitive review of CaP chemistry; FGM design principle motivating gradient scaffolds; native bone targets.
- [[../sources/2008-palmer-biomimetic-systems-for-hydroxyapatite-mi]] — foundational chemistry: Ca/P sensitivity, biogenic vs geological apatite, sintering decomposition.
- [[../sources/2026-thammarakcharoen-comprehensive-toxicological-evaluation-o]] — regulatory floor: phase-pure 3D-printed HA via binder-jet + low-T transformation; ISO-10993 negative.
- [[../sources/2008-chan-scaffolding-in-tissue-engineering-general-approaches]] — generic scaffold materials review including HA.
- [[../sources/2015-ishack-bone-regeneration-in-critical-bone-defec]] — HA in critical-size defect models.
- [[../sources/2020-wang-3d-printing-of-bone-tissue-engineering-s]] — comprehensive review of HA processing across AM methods.
- [[../sources/2024-wang-polydopamine-functionalized-calcium-defi]] — uses CDHA, but provides direct scaffold-fabrication detail.
- [[../sources/2025-de-carvalho-three-dimensional-printing-of-calcium-ph]] — DIW HA scaffolds, hBMSC characterization.
- [[../sources/2025-qi-3d-printed-bioceramic-scaffolds-for-bone]] — review of HA bioceramic scaffolds.
- [[../sources/2018-zhang-effect-of-microporosity-on-scaffolds-for]] — microporosity effects on HA scaffold function.
- [[../sources/2013-loh-three-dimensional-scaffolds-for-te-role-of-porosity]] — pore-size guidance for HA.
- [[../sources/2024-diez-escudero-in-vitro-evaluation-of-pore-size-graded-bone]] — gradient pore HA-PCL composites.
- [[../sources/2026-liu-design-and-fabrication-of-biomimetic-gra]], [[../sources/2025-liu-gradient-scaffolds-in-bone-soft-tissue-i]], [[../sources/2025-xie-recent-advances-in-gradient-biomimetic-s]] — gradient-architecture HA reviews.
- [[../sources/2012-amini-bone-tissue-engineering-recent-advances]], [[../sources/2012-bose-recent-advances-in-bone-tissue-engineeri]], [[../sources/2013-henkel-bone-regeneration-based-on-tissue-engine]] — broad bone tissue engineering reviews.
- [[../sources/2014-polo-corrales-scaffold-design-for-bone-regeneration]], [[../sources/2014-thavornyutikarn-bone-tissue-engineering-scaffolding-comp]] — pore-size design rules of thumb.
- [[../sources/2015-baino-bioceramics-and-scaffolds-a-winning-comb]] — bioceramic-specific design.
- [[../sources/2015-chia-recent-advances-in-3d-printing-of-biomat]], [[../sources/2015-do-3d-printing-of-scaffolds-for-tissue-rege]] — 3D printing reviews including HA.
- [[../sources/2017-gao-bone-biomaterials-and-interactions-with]] — bone biomaterials review.
- [[../sources/2016-murphy-scaffolds-and-cells-for-tissue-regeneration]] — scaffold-cell interactions.
- [[../sources/2017-bose-additive-manufacturing-of-biomaterials]], [[../sources/2017-zhang-additively-manufactured-scaffolds-for-bo]] — AM-specific reviews.
- [[../sources/2019-chocholata-fabrication-of-scaffolds-for-bone-tissue]] — fabrication methods.
- [[../sources/2020-chen-porous-scaffold-design-for-additive-manu]] — porous scaffold AM design.
- [[../sources/2020-garot-additive-manufacturing-of-material-scaff]] — AM scaffold materials.
- [[../sources/2021-montoya-on-the-road-to-smart-biomaterials-for-bo]] — smart biomaterials.
- [[../sources/2023-koushik-bone-tissue-engineering-scaffolds-functi]] — functional scaffold review.
- [[../sources/2025-hossen-biomimetic-strategies-for-bone-regenerat]] — biomimetic strategies.
- [[../sources/2025-picado-tejero-recent-advances-in-3d-bioprinting-of-por]] — porous bioprinting.
- [[../sources/2025-tang-advances-in-3d-printed-scaffolds-for-bon]] — recent 3D-printed scaffolds.
- [[../sources/2026-daghrery-advances-in-3d-printed-scaffolds-for-per]] — 3D printed scaffolds for periodontal applications.
- [[../sources/2022-yang-gaussian-curvature-driven-direction-of-c]] — curvature-driven cell behavior on HA-containing scaffolds.
- [[../sources/protocol-2025-battistelli-a-quantitative-spectrophotometric-assay]] — alizarin-red on HA scaffolds; ARS-binds-residual-HA pitfall.
- [[../sources/crossref-retraction-10-1016-j-heliyon-2024-e36493]], [[../sources/crossref-retraction-10-1155-2024-9893086]] — retractions involving HA scaffold work.
- [[../sources/pubchem-hydroxyapatite-cid24856]] — **incorrect catalog record** retained in graph as the data-integrity exemplar.
