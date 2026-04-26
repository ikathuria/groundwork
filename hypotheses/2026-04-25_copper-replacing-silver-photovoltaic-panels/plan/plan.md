---
type: plan
id: plan-v1
created: 2026-04-25
derived_from: ../hypothesis.md
sources_used: 14
corrections_applied: 0
total_budget_usd: 93500
total_timeline_weeks: 12
---

# Lab Brief: Copper Replacing Silver in Photovoltaic Panels

## Hypothesis

Replacing silver-based photovoltaic metallization with a copper-paste route on crystalline silicon cells can reduce silver demand while maintaining initial electrical performance and module-relevant reliability. The first acceptance threshold is no more than 0.3 percentage point absolute efficiency loss versus a matched silver-paste control, with no copper-diffusion-linked degradation after reliability screening.

Primary method: [[../wiki/methods/copper-paste-screen-printing|copper paste screen printing]].

Control: [[../wiki/reagents/silver-conductive-paste|commercial photovoltaic silver conductive paste]].

## Literature QC

Verdict: `similar-work-exists`.

Directly related copper substitution work already exists, especially [[../wiki/sources/2022-chen-thermal-stable-copper-screen-printed-back-contact|Chen 2022]] for copper paste and [[../wiki/sources/2024-lachowicz-aging-tests-copper-plated-heterojunction|Lachowicz 2024]] for copper-metallized mini-module aging. The plan is still valuable because it turns the literature tension into a decision experiment: positive copper-paste performance must be tested against the copper migration failures documented by [[../wiki/sources/2022-karas-copper-outdiffusion-damp-heat|Karas 2022]].

## Protocol

1. Lock experimental design and procurement gates. Use [[../wiki/reagents/copper-metallization-paste|copper metallization paste]], [[../wiki/reagents/silver-conductive-paste|silver conductive paste]], and matched [[../wiki/organisms/perc-solar-cell|PERC cells]] or process-ready precursors. Require a furnace contamination-control plan because [[../wiki/failure-modes/copper-contamination-of-shared-furnace|shared-furnace copper contamination]] can invalidate controls.

2. Prepare matched silver-control and copper-test lots. Keep print geometry as similar as possible so changes in [[../wiki/failure-modes/contact-resistivity-drift|contact resistivity drift]] can be attributed to the metallization route, not layout drift.

3. Screen print copper and silver lots. Track print quality, finger dimensions, and oxidation risk via [[../wiki/failure-modes/copper-oxidation|copper oxidation]] checks. This follows the method logic in [[../wiki/methods/copper-paste-screen-printing]].

4. Dry and fire with copper-contamination controls. Fire silver baseline controls before copper or use dedicated equipment. Include witness wafers and sentinel silver controls after copper if equipment is shared, per [[../wiki/sources/2025-stradins-front-side-copper-metallization-paste-crada]].

5. Run initial electrical characterization. Measure I-V, fill factor, series resistance, line resistance, and EL/PL images. Stop if copper cells exceed the 0.3 percentage point absolute efficiency-loss threshold.

6. Run copper migration sentinel analysis. Use sacrificial copper samples for SIMS or SEM/EDS cross-sections. Stop before encapsulation if [[../wiki/failure-modes/copper-diffusion-into-silicon|copper diffusion into silicon]] is detected above the silver-control baseline.

7. Encapsulate matched mini-modules. Use [[../wiki/reagents/eva-encapsulant|EVA]] as the baseline encapsulant and add [[../wiki/reagents/tpo-encapsulant|polyolefin/TPO]] if budget allows, because module packaging affects [[../wiki/failure-modes/damp-heat-module-corrosion|damp-heat corrosion]] and copper mobility.

8. Run accelerated reliability screening. Use [[../wiki/methods/damp-heat-and-thermal-cycling-pv-reliability-test|damp heat and thermal cycling]] logic: 85 deg C / 85% RH as the core stress, with thermal cycling from -40 to +85 deg C if chamber access allows. Track I-V and EL checkpoints.

9. Analyze post-stress failures and decide. Accept copper only if it preserves performance, shows no copper migration above controls, and does not degrade more than silver controls after stress. Tie any scale-up claim back to [[../wiki/failure-modes/silver-supply-and-cost-scaling-risk|silver supply and cost scaling risk]].

## Materials

| Item | Wiki | Supplier / catalog | Qty | Estimate |
|---|---|---|---:|---:|
| Screen-printable copper metallization paste | [[../wiki/reagents/copper-metallization-paste]] | TBD, quote required | 50 g | $2,500 |
| Photovoltaic silver conductive paste | [[../wiki/reagents/silver-conductive-paste]] | DuPont Solamet family | 50 g | $3,000 |
| Matched PERC cells or precursors | [[../wiki/organisms/perc-solar-cell]] | vendor / partner lab quote | 60 cells | $9,000 |
| Printing screens or stencils | [[../wiki/methods/copper-paste-screen-printing]] | custom | 2 layouts | $5,000 |
| Witness silicon wafers/coupons | [[../wiki/organisms/crystalline-silicon-solar-cell]] | quote required | 25 | $1,500 |
| Mini-module materials | [[../wiki/organisms/photovoltaic-mini-module]] | EVA/TPO/glass/backsheet quote | 20 sets | $6,000 |

## Budget

Total estimated budget: $93,500.

This is a planning allowance, not a quoted procurement package. The low-confidence lines are copper paste, cells/precursors, SIMS, and reliability chamber time.

Major line items:

- Materials and cell procurement: $27,000
- Printing setup and consumables: $9,000
- Electrical and optical characterization: $10,000
- SEM/EDS plus SIMS/depth profiling: $18,000
- Damp-heat / thermal-cycling chamber time: $30,000
- Contingency: $6,000

## Timeline

Total timeline: 12 weeks.

- Weeks 1-2: design lock, paste/cell/screen quotes, furnace contamination-control plan.
- Week 3: print, dry, fire, and create witness controls.
- Week 4: initial I-V, EL/PL, line/contact resistance.
- Week 5: mini-module encapsulation and sentinel copper analysis.
- Weeks 6-11: damp-heat reliability gate with optional thermal cycling.
- Week 12: post-stress SIMS/EDS, failure analysis, silver-reduction decision.

## Validation

Success requires all three:

- Initial copper-cell efficiency is no more than 0.3 percentage point absolute below the silver-paste control.
- Copper is not detected in silicon above control baseline in sacrificial SIMS/EDS checks.
- After damp heat, copper mini-modules do not degrade more than silver controls in maximum power, fill factor, series resistance, or EL-visible damage.

## Failure Map

Top risks:

- [[../wiki/failure-modes/copper-diffusion-into-silicon]] - critical; mitigate with barrier-aware geometry and SIMS/EDS.
- [[../wiki/failure-modes/copper-outdiffusion-during-damp-heat]] - high; mitigate with mini-module damp-heat tests and post-stress cross-sections.
- [[../wiki/failure-modes/copper-contamination-of-shared-furnace]] - high; mitigate with dedicated furnace use, witness wafers, or validated decontamination.
- [[../wiki/failure-modes/contact-resistivity-drift]] - high; mitigate with I-V, line resistance, EL/PL, and matched controls.
- [[../wiki/failure-modes/damp-heat-module-corrosion]] - high; mitigate with encapsulated module stress tests.

## Under-Supported Areas

- Copper paste supplier/catalog and exact price need quotes before execution.
- TOPCon-specific copper plating should not be the primary route without an incremental source ingest.
- Full 1000 h damp-heat evidence cannot complete in a week; it can only be started in the first week.
