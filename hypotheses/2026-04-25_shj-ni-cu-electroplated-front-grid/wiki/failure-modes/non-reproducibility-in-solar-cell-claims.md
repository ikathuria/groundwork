---
type: failure-mode
slug: non-reproducibility-in-solar-cell-claims
severity: medium
frequency_estimate: "Author-initiated retraction of Nature Materials 16, 522–525 (2017) for cell-to-cell IV variability + time-evolution of PV parameters (Ergen et al. 2018). LONGi 26.81 % HJT and SunDrive 26.41 % Cu-plated SHJ records carry institution + measurement-organisation tags but cell area / N is often unspecified in trade press."
applies_to_methods: [IV-curve-measurement, EQE-measurement, dark-IV-suns-Voc, EL-electroluminescence-imaging, damp-heat-aging-1000h]
applies_to_reagents: []
applies_to_step_kinds: [characterization, accelerated-aging]
sources: [2018-nmat-graded-bandgap-perovskite-retraction-note, 2023-taiyangnews-heterojunction-technology-report, 2024-itrpv-15th-edition-roadmap, 2024-nrel-best-research-cell-efficiency-chart]
tags: [reproducibility, retraction, certification, structural-failure-mode, hypothesis-discipline]
created: 2026-04-26
updated: 2026-04-26
---

# Non-reproducibility in solar cell efficiency / reliability claims

**Slug:** `failure-modes/non-reproducibility-in-solar-cell-claims` · **Severity:** medium

## What it is

A **structural / meta** failure mode — not a device-physics failure but a *publishing* / *measurement-discipline* failure. The Ergen et al. (2018) retraction of Nature Materials 16, 522–525 (2017) is the canonical precedent: a high-profile graded-bandgap perovskite cell paper retracted because (a) cell-to-cell IV / spectral-response variability across nominally identical devices and (b) rapid time evolution of key photovoltaic parameters undermined the conclusions. The exact same risk profile applies to any plated-Cu SHJ champion-efficiency or 1000 h damp-heat claim made on a single device or single-checkpoint measurement: Cu contamination ([[failure-modes/Cu-LID-light-induced-degradation]]) is *defined* by hour-to-day variability and time evolution of the IV. The hypothesis must be designed and reported defensively against this structural failure.

## How it manifests

- **High variance in η, Voc, FF, Jsc across nominally identical devices** — N=1 hero data hides the variance.
- **Time evolution of PV parameters under storage or light-soak** — IV drifts hours-to-days post-fabrication.
- **Unreproducible champion claims** — record cell efficiencies that cannot be replicated by the original authors or independent labs.
- **Non-certified vendor performance claims** — TaiyangNews 2023 names every commercializer (Maxwell, SunDrive 26.41 %, LONGi 26.81 %, Tongwei, Huasun, GS-Solar) but not all claims have been third-party certified at NREL/FhG-ISE/AIST/JET.
- **Industry roadmap "promised" technologies that never reach mass production** — ITRPV's "plating still not introduced in significant mass production market share" reflects an ongoing reproducibility-at-scale gap.

## How to detect it

- **N ≥ 5–10 cells per arm** — pre-register the sample size and the rejection criteria. The Ergen retraction would not have been needed had this discipline been in place.
- **Checkpoint IV at 0/250/500/750/1000 h DH** — track time evolution across the protocol; a drift signature is itself a detection.
- **Independent third-party certification** — NREL, FhG-ISE, AIST, JET measurement laboratories; the [[sources/2024-nrel-best-research-cell-efficiency-chart]] is the canonical reference for certified-vs-claimed efficiency.
- **Open data publication** — release the full dataset (per-cell IV curves at every checkpoint), not just summary statistics.
- **Pre-registration of the protocol and threshold** — the IEC TS 62915 retest matrix triggers 200 TC + 1000 h DH + Hot Spot retest for cell-technology changes, but the *interpretation* of those tests remains author-driven and should be pre-specified.
- **Variability statistics**: standard deviation, coefficient of variation, and best-vs-mean reporting at every metric. Champion-only claims are red-flagged.
- **EL + dark IV at every checkpoint** — surface dark spots and series-R drift before they affect 1-sun IV.

## Mitigation

- **N ≥ 5–10 cells per arm + pre-registered protocol** — the discipline that prevents the Ergen pattern.
- **Report best, mean, std for every metric** — never publish η = X.XX % without the variance.
- **Third-party certification of champion claims** — NREL / FhG-ISE / AIST / JET measurement.
- **Pre-bake the rejection criterion** — the hypothesis specifies Δη ≤ 0.5 %abs at 1000 h DH; commit to the threshold before measurements.
- **Open-data publication** — full dataset including failed cells.
- **Retraction-watch hygiene** — periodic check of related papers to ensure the work being cited has not been retracted; the [[sources/2018-nmat-graded-bandgap-perovskite-retraction-note]] is the cautionary precedent.
- **Independent replication arm** — designate one arm of the experiment to be replicated by a second lab if possible (cross-institutional QC).

## Where it applies

- Methods: [[methods/IV-curve-measurement]], [[methods/EQE-measurement]], [[methods/dark-IV-suns-Voc]], [[methods/EL-electroluminescence-imaging]], [[methods/damp-heat-aging-1000h]]
- Step kinds: characterization, accelerated-aging

## Severity rationale

Medium — but conceptually pivotal. This failure mode is not a device-physics failure; it is a *meta* failure of the publishing and measurement discipline that surrounds device-physics failures. Severity is medium because the mitigations (N ≥ 5, third-party certification, pre-registered thresholds) are well-known and tractable; severity would rise to high in any paper that does *not* implement them.

## Citing sources

- [[sources/2018-nmat-graded-bandgap-perovskite-retraction-note]] — *the* canonical example: cell-to-cell variability + time-evolution of PV parameters as retraction triggers. Structurally identical to the risk profile for plated-Cu SHJ champion-efficiency or 1000 h DH claims on small samples.
- [[sources/2023-taiyangnews-heterojunction-technology-report]] — implicit context for record-claim disclosure (LONGi cell size unspecified in trade press); names every commercializer and their public efficiency claims, none individually certified.
- [[sources/2024-itrpv-15th-edition-roadmap]] — slow take-up of plating despite promises reflects industrial reproducibility risks beyond lab demos: "Plating is still not introduced in a significant mass production market share."
- [[sources/2024-nrel-best-research-cell-efficiency-chart]] — the antidote to non-certified vendor claims: each entry third-party verified at NREL, FhG-ISE, AIST, or JET.
