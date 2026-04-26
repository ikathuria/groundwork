---
type: failure-mode
slug: finger-adhesion-loss-after-DH
severity: high
frequency_estimate: "DIN EN 50461 minimum 1 N/mm peel force at 90°; DH typically halves peel force on Ag-screen-print baseline (~3 N/mm fresh → ~1.5 N/mm post-DH). NOBLE plated Cu fingers reach ≥2 N/mm fresh (Hatt 2021). SunDrive busbar pull-test exceeds Si shear strength fresh."
applies_to_methods: [peel-test-90deg, damp-heat-aging-1000h, extended-damp-heat-IEC63209, electroplated-Ni-Cu-stack, Cu-electroplating-acid-bath, screen-printed-Ag-paste]
applies_to_reagents: [acid-Cu-sulfate-bath, ITO-transparent-conductive-oxide, EVA-encapsulant, POE-polyolefin-encapsulant, multibusbar-Cu-ribbon, silver-Ag-cap]
applies_to_step_kinds: [plating, cap-deposition, encapsulation, accelerated-aging]
sources: [2011-nrel-reliability-testing-beyond-qualification, 2012-nrel-iec61215-what-it-is, 2013-koehl-fraunhofer-accelerated-service-life-testing, 2014-fraunhofer-peel-testing-ribbons-solar-cells, 2014-nrel-pv-module-qualification-plus, 2014-rehman-nicu-plating-csi-review, 2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2019-karas-damp-heat-degradation-shj-cu, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration, 2022-karas-cu-outdiffusion-damp-heat, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-nrel-getting-ahead-of-curve-pv-assessment, atotech-solar-industry-overview]
tags: [adhesion, peel-test, micro-voids, DH, Ni-on-TCO, IEC-50461, GA]
created: 2026-04-26
updated: 2026-04-26
---

# Finger / ribbon adhesion loss after damp heat

**Slug:** `failure-modes/finger-adhesion-loss-after-DH` · **Severity:** high

## What it is

The plated Cu finger (or its soldered ribbon connection) must adhere to the underlying TCO with peel force ≥1 N/mm at 90° per DIN EN 50461 (Eitner 2014). Adhesion fails through several mechanisms: (a) Ni-on-TCO micro-voids at the seed-layer interface (Geissbühler 2018: "evidence of micro-voids has been found"), (b) DH-driven encapsulant softening + interface corrosion that halves peel force, and (c) Cu mobilisation through the cap stack ([[failure-modes/Cu-out-diffusion-through-cap-stack]]) that compromises the solder joint. NREL 2024 names "adhesion of plated contacts to the cell" as one of two explicit reliability flags for plated Cu metallization.

## How it manifests

- **Peel-test failure** — peel force drops below the 1 N/mm DIN EN 50461 threshold at 90°, often by ~50 % after 1000 h DH.
- **Visible delamination** of finger from TCO at finger ends or under busbar pads.
- **Adhesion fracture mode shift** from cohesive (within encapsulant or Cu) to adhesive (at the Cu/TCO or Cu/Ni interface) — diagnostic of interface degradation.
- **Series-resistance rise** as the connection becomes intermittent.
- **Ribbon pull-out during module handling / lamination** — extreme cases.

## How to detect it

- **90° peel test per DIN EN 50461 / IEC 61730-2** — [[methods/peel-test-90deg]]: 50 mm/min crosshead speed; report peel force in N/mm and adhesive fracture energy GA in J/m² (Eitner 2014's recommended geometry-independent metric). 90° is the most conservative geometry — 45° readings are ~4× higher and not directly comparable.
- **Fresh + post-DH measurements** — [[methods/damp-heat-aging-1000h]] / [[methods/extended-damp-heat-IEC63209]]: Δ peel force at 1000 h DH must remain ≥1 N/mm.
- **Busbar pull-test** — SunDrive's "exceeds Si shear strength" test; the strongest case is when the Si itself fractures before the contact fails.
- **SEM cross-section of fractured interface** — identify fracture path: interfacial vs cohesive.
- **EDS at fracture surface** — diagnose contamination (e.g. inkjet resist residue) at the failed interface.
- **Fraunhofer-style multi-angle peel (45°/90°/135°/180°)** — Eitner 2014 recommends reporting GA from multiple angles for emerging-tech (plated, ECA) adhesion claims.

## Mitigation

- **Sputtered PVD seed (Cu/Al, Cu, Ag)** before plated Cu — Hatt 2019 (NOBLE) and Faes 2018 use PVD seed to bypass the Ni-on-TCO micro-void problem. See [[methods/Ni-sputter-deposition]].
- **SunDrive's "adhesive direct plating" approach** — proprietary tuning of plating chemistry and process to deliver adhesion exceeding Si shear strength without PVD seed (2022 ARENA report).
- **Inkjet-resist residue control** — inkjet hot-melt and NaOH inks must be cleanly removed before plating; residue causes adhesion failure even with continuous Ni.
- **Plated peel force ≥2 N/mm spec** (Hatt 2021 NOBLE) — sets a 2× safety margin against the DIN EN 50461 minimum.
- **Encapsulant choice POE > EVA** — POE removes the acetic-acid driver of interface corrosion ([[failure-modes/EVA-acetic-acid-corrosion]]); peel force degradation is encapsulant-driven.
- **Edge sealing** of glass-glass mini-modules with PIB to limit moisture ingress (Lachowicz 2024).
- **Cap-layer engineering** — Ag cap (Hatt: ~200 nm immersion) provides solderable surface; Sn cap with controlled IMC growth (Cu₆Sn₅ self-limiting per Karas 2022).
- **Multi-angle GA reporting** — Eitner 2014: report adhesive fracture energy in J/m² to make Ag-baseline / Ni-Cu / ECA comparisons defensible.

## Where it applies

- Methods: [[methods/peel-test-90deg]], [[methods/damp-heat-aging-1000h]], [[methods/extended-damp-heat-IEC63209]], [[methods/electroplated-Ni-Cu-stack]], [[methods/Cu-electroplating-acid-bath]], [[methods/screen-printed-Ag-paste]]
- Reagents: [[reagents/acid-Cu-sulfate-bath]], [[reagents/ITO-transparent-conductive-oxide]], [[reagents/EVA-encapsulant]], [[reagents/POE-polyolefin-encapsulant]], [[reagents/multibusbar-Cu-ribbon]], [[reagents/silver-Ag-cap]]
- Step kinds: plating, cap-deposition, encapsulation, accelerated-aging

## Severity rationale

High. NREL 2024 names plated-contact adhesion as one of two explicit reliability flags (the other is Cu-ingress). Karas 2019/2022 correlate finger adhesion with DH degradation. The DIN EN 50461 1 N/mm threshold is well-defined and tractable: NOBLE achieves ≥2 N/mm and SunDrive exceeds Si shear strength fresh. The failure mode is real but engineered around in the leading commercial routes; severity is high because the *post-DH* number is what matters and it is harder to defend than fresh adhesion.

## Citing sources

- [[sources/2014-fraunhofer-peel-testing-ribbons-solar-cells]] — Eitner: DIN EN 50461 1 N/mm minimum; angle-dependent peel force; GA recommended for plated / ECA claims.
- [[sources/2014-rehman-nicu-plating-csi-review]] — review names adhesion as one of the four perennial Ni/Cu plating challenges.
- [[sources/2018-pv-international-metallization-shj]] — Geissbühler: "the adhesion of copper may be problematic… even with a nickel-plated adhesion layer, evidence of micro-voids has been found."
- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — peel-test data on plated Cu cells with hot-melt inkjet mask passing IEC 61215.
- [[sources/2018-pvtech-metallization-shj-cells-modules]] — implicit; mask-and-plating discussion.
- [[sources/2019-karas-damp-heat-degradation-shj-cu]] — adhesion correlates with DH degradation in the companion 2020 Karas study.
- [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — NOBLE plated Cu peel force ≥2 N/mm fresh.
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — busbar pull-test exceeds Si shear strength.
- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — finger adhesion correlates with DH-induced degradation.
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — adhesion discussed via EL imaging of edge degradation.
- [[sources/2024-nrel-getting-ahead-of-curve-pv-assessment]] — explicit NREL flag: plated-contact adhesion is one of two emerging-tech reliability risks.
- [[sources/2011-nrel-reliability-testing-beyond-qualification]], [[sources/2012-nrel-iec61215-what-it-is]], [[sources/2013-koehl-fraunhofer-accelerated-service-life-testing]], [[sources/2014-nrel-pv-module-qualification-plus]] — IEC 61215 DH framework where adhesion-after-DH is checked.
- [[sources/atotech-solar-industry-overview]] — vendor positioning: Atotech specialist article on plated-Ni/Cu/Ag fracture-stress and soldered-interconnect reliability.
