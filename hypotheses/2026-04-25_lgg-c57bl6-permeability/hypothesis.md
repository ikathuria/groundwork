---
type: hypothesis
slug: 2026-04-25_lgg-c57bl6-permeability
domain: gut-microbiome
status: complete
original_question: |
  Supplementing C57BL/6 mice with Lactobacillus rhamnosus GG for 4 weeks will
  reduce intestinal permeability by at least 30% compared to untreated controls,
  measured by plasma FITC-dextran levels after oral gavage.
created: 2026-04-25
updated: 2026-04-25
sources_count: 72
wiki_pages:
  methods: 13
  reagents: 8
  organisms: 5
  failure-modes: 15
  sources: 72
plan:
  version: 2
  total_budget_usd: 19223
  total_timeline_weeks: 10
  novelty_verdict: similar-work-exists (with major caveats)
  canonical: plan/plan.json
  human_readable: plan/plan.md
  interactive: plan/index.html
  wiki_copy: wiki/plans/plan-v2.md
  prior_versions: [wiki/plans/plan-v1.md]
  v2_note: "Lab Brief HTML regenerated against new wiki-browser spec (118-page corpus, backlinks, hash deep-link, ⌘K). Plan content unchanged."
tags: [probiotic, LGG, intestinal-permeability, FITC-dextran, C57BL/6, gut-barrier]
---

# Hypothesis — LGG and intestinal permeability in C57BL/6 mice

## Original question

> Supplementing C57BL/6 mice with *Lactobacillus rhamnosus* GG for 4 weeks will
> reduce intestinal permeability by at least 30% compared to untreated controls,
> measured by plasma FITC-dextran levels after oral gavage.

## Refined hypothesis

| Element | Specification |
|---|---|
| **Intervention** | Daily oral administration (gavage or drinking-water) of viable *Lactobacillus rhamnosus* GG (ATCC 53103 / LGG / DSM 33156) at 1×10^9 CFU/mouse/day for 28 consecutive days |
| **Outcome** | In vivo intestinal permeability, quantified as plasma fluorescence (FITC-dextran 4 kDa, FD-4) 1–4 h after a single oral gavage of FD-4 (typically 600 mg/kg or 60 mg/100 g body weight) |
| **Threshold** | ≥ 30 % lower plasma FITC-dextran AUC (or single-time-point concentration) vs. age- and sex-matched vehicle controls |
| **Mechanism** | LGG up-regulates apical tight-junction proteins (ZO-1, occludin, claudin-1/3/4), down-regulates pore-forming claudin-2; soluble factors p40 / p75 (Msp1 / Msp2) activate EGFR-PI3K/Akt to protect against cytokine-induced barrier loss; competitive exclusion of pathobionts; SCFA-mediated HIF-1α stabilisation in colonocytes |
| **Control** | Vehicle-only C57BL/6J mice receiving the same gavage volume of sterile PBS / MRS broth carrier; secondary control arm with heat-killed LGG (same CFU equivalent) to dissect viability dependence |

## Scope

- **Organism / strain**: C57BL/6 (most studies use C57BL/6J from Jackson 000664; some use C57BL/6N from Charles River — note as a confounder).
- **Sex / age**: Adult mice, 6–10 weeks at start. Both sexes desirable.
- **Baseline barrier state**: Healthy mice (no DSS, no LPS challenge, no antibiotic depletion). The hypothesis is intentionally about *baseline* permeability, not a stressor model — but the literature is dominated by stressor models, so we will include those as supporting mechanism evidence.
- **Probiotic preparation**: Live LGG, single-strain (no synbiotic / no multi-strain blends as the primary arm). Excluded: yogurt-derived LGG, encapsulated formulations whose viability is unverified.
- **Permeability readout**: FITC-dextran 4 kDa (FD-4) is the canonical small-molecule paracellular probe. Larger probes (FD-40, FD-70) and Ussing-chamber TEER are accepted as supporting evidence but the primary endpoint is FD-4 plasma fluorescence.

## Success criteria (study-design level)

1. Mean plasma FITC-dextran in LGG group ≤ 70 % of vehicle-control mean (≥ 30 % reduction).
2. Effect statistically significant at α = 0.05 (two-sided t-test or Mann–Whitney) with adequately powered n (typically n ≥ 8 per arm; power calculation pending Pass 3).
3. Mechanism corroboration: at least one of {tight-junction protein expression, faecal LPS/lipocalin-2, SCFA profile} moves in the predicted direction.
4. No confounding weight-loss, diarrhoea, or behavioural changes in the LGG arm.

## Key entities (Pass 2 — wiki built)

> Full catalog at [[wiki/index|wiki/index.md]]. The graph view of `groundwork/` in Obsidian renders the connections between these.

**Organisms**
- [[wiki/organisms/lactobacillus-rhamnosus-GG]] — the intervention strain
- [[wiki/organisms/C57BL-6]] — the host (pre-register **C57BL/6J**)

**Methods**
- [[wiki/methods/FITC-dextran-permeability-assay]] — primary endpoint
- [[wiki/methods/oral-gavage-mouse]] — delivery route for both LGG and FD-4
- [[wiki/methods/bacterial-CFU-enumeration]] — dosing QC
- [[wiki/methods/16S-rRNA-microbiome-sequencing]] — engraftment + cross-contamination check
- [[wiki/methods/Western-blot-tight-junction]] — molecular substrate for any FD-4 change
- [[wiki/methods/LPS-endotoxin-quantification]] — orthogonal translocation marker
- [[wiki/methods/Ussing-chamber-TEER]] — orthogonal mucosal-conductance assay

**Reagents**
- [[wiki/reagents/FITC-dextran-4kDa]] — the assay probe
- [[wiki/reagents/MRS-broth]] — LGG growth medium
- [[wiki/reagents/p40-LGG-derived-protein]] — most-characterised LGG soluble mediator (mechanism candidate)
- [[wiki/reagents/LGG-exopolysaccharide-EPS]] — heat-stable barrier mediator (mechanism candidate)

**Top failure modes** (full list at [[wiki/index|index]]; these are the ones Pass 3 must directly address)
- [[wiki/failure-modes/baseline-permeability-too-low-detect-30pct]] — **critical** — the headline risk
- [[wiki/failure-modes/challenge-model-vs-baseline-mismatch]] — high — published evidence is from challenged mice
- [[wiki/failure-modes/coprophagy-microbiome-equilibration]] — high — silently destroys LGG-vs-control contrast
- [[wiki/failure-modes/incomplete-fasting-before-gavage]] — high — top inter-lab variance source
- [[wiki/failure-modes/positive-publication-bias-LGG-literature]] — high — discount published effect sizes
- [[wiki/failure-modes/probiotic-bacteremia-sepsis]] — critical (low frequency but serious; IACUC requires)
- [[wiki/failure-modes/C57BL-6J-vs-N-substrain-confounder]] — medium — pre-register substrain
- [[wiki/failure-modes/LGG-viability-loss-during-gavage-prep]] — high — plate dose-day CFU
- [[wiki/failure-modes/FITC-dextran-dose-timing-heterogeneity]] — high — pre-register dose × time

## Open questions for Pass 2 / Pass 3

1. **Effect size in healthy baseline mice.** Most LGG-permeability studies use a stressor (DSS colitis, LPS, alcohol, high-fat diet, burn injury). What is the published effect on *unchallenged* C57BL/6 — is 30 % even achievable, or does the barrier need to be perturbed first to detect a difference?
2. **Dose & viability.** Is 1×10^9 CFU/day the right dose, or do studies converge on 10^8 or 10^10? How is viability verified at the point of dosing? Does heat-killed LGG retain barrier effects (p40 is a soluble protein, so possibly yes)?
3. **FD-4 timing & dose.** Studies vary 1 h, 2 h, 4 h post-gavage; FD-4 dose 60–750 mg/kg. We need a canonical single timing for the primary endpoint.
4. **C57BL/6J vs C57BL/6N.** Substrain differences in microbiome composition and *Nlrp12* / *Nnt* genetics affect baseline permeability. Pre-register the substrain.
5. **Housing / microbiome confounders.** Co-housing with control mice equilibrates microbiomes via coprophagy; vendor-of-origin microbiome (Jackson vs Taconic vs Charles River) shifts the LGG colonisation niche.
6. **Sample-size / power.** Typical n per arm in published LGG-permeability work — does 30 % effect at typical SD yield n = 6, 8, 12?
7. **Negative-results literature.** Are there published failures-to-replicate of LGG barrier effects on healthy mice (PubPeer, retractions, supplementary "no effect" arms in larger studies)?
8. **FITC-dextran vs alternatives.** Lactulose/mannitol, ^51Cr-EDTA, plasma LBP, Ussing-chamber TEER — when do they disagree with FD-4, and why?

## Status

`researching` — Pass 1 in progress, fetching literature / protocols / negative results / supplier data into `raw/`. Pass 2 will compile the wiki.
