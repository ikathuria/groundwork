---
type: plan
id: plan-v1
created: 2026-04-25
derived_from: ../../hypothesis.md
sources_used: 14
corrections_applied: 0
total_budget_usd: 93500
total_timeline_weeks: 12
---

# Plan v1: Copper Replacing Silver in Photovoltaic Panels

Interactive artifact: [lab-brief.html](../../plan/lab-brief.html)

## Hypothesis

Replacing silver-based photovoltaic metallization with a copper-paste route on crystalline silicon cells can reduce silver demand while maintaining initial electrical performance and module-relevant reliability. The first acceptance threshold is no more than 0.3 percentage point absolute efficiency loss versus a matched silver-paste control, with no copper-diffusion-linked degradation after reliability screening.

Primary method: [[../methods/copper-paste-screen-printing|copper paste screen printing]].

Control: [[../reagents/silver-conductive-paste|commercial photovoltaic silver conductive paste]].

## Literature QC

Verdict: `similar-work-exists`.

Related work exists in [[../sources/2022-chen-thermal-stable-copper-screen-printed-back-contact|Chen 2022]], [[../sources/2024-lachowicz-aging-tests-copper-plated-heterojunction|Lachowicz 2024]], and the failure-focused [[../sources/2022-karas-copper-outdiffusion-damp-heat|Karas 2022]]. The plan therefore tests feasibility and reliability rather than claiming the copper-for-silver idea is new.

## Protocol Spine

1. Lock experimental design and procurement gates using [[../reagents/copper-metallization-paste]], [[../reagents/silver-conductive-paste]], and matched [[../organisms/perc-solar-cell]] cells or precursors.
2. Prepare matched silver-control and copper-test lots.
3. Screen print copper and silver lots via [[../methods/copper-paste-screen-printing]].
4. Dry and fire with controls for [[../failure-modes/copper-contamination-of-shared-furnace]].
5. Characterize initial I-V, fill factor, series resistance, line resistance, and EL/PL.
6. Run sacrificial SIMS/EDS checks for [[../failure-modes/copper-diffusion-into-silicon]].
7. Encapsulate matched [[../organisms/photovoltaic-mini-module]] test articles using [[../reagents/eva-encapsulant]] and optionally [[../reagents/tpo-encapsulant]].
8. Run [[../methods/damp-heat-and-thermal-cycling-pv-reliability-test]] with 85 deg C / 85% RH as the core stress.
9. Decide based on efficiency parity, copper migration, and post-stress degradation relative to silver controls.

## Budget And Timeline

Estimated budget: $93,500.

Timeline: 12 weeks.

The largest uncertainty is not the protocol structure; it is quote-dependent cost for copper paste, cells/precursors, SIMS, and chamber time.

## Failure Map

- [[../failure-modes/copper-diffusion-into-silicon]] - critical.
- [[../failure-modes/copper-outdiffusion-during-damp-heat]] - high.
- [[../failure-modes/copper-contamination-of-shared-furnace]] - high.
- [[../failure-modes/contact-resistivity-drift]] - high.
- [[../failure-modes/damp-heat-module-corrosion]] - high.

## Under-Supported Areas

- [[../reagents/copper-metallization-paste]] needs supplier/catalog ingest before procurement.
- [[../organisms/topcon-solar-cell]] should remain a later route until TOPCon copper-plating sources are ingested.
- [[../methods/damp-heat-and-thermal-cycling-pv-reliability-test]] cannot complete inside one week, only start.
