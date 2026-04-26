---
type: failure-mode
slug: Cu-finger-corrosion-encapsulant
severity: high
frequency_estimate: "5 % power loss after 2700 h DH on Cu-plated SHJ glass-glass POE mini-modules without edge sealing (Lachowicz 2024); much higher (4.7 %abs pFF + >6× J02) on EVA-encapsulated samples (Karas 2022). Edge-onset degradation visible in EL after ~1000 h."
applies_to_methods: [damp-heat-aging-1000h, extended-damp-heat-IEC63209, EL-electroluminescence-imaging, IV-curve-measurement, dark-IV-suns-Voc]
applies_to_reagents: [EVA-encapsulant, POE-polyolefin-encapsulant, silver-Ag-cap, tin-Sn-cap, acid-Cu-sulfate-bath, multibusbar-Cu-ribbon]
applies_to_step_kinds: [encapsulation, lamination, accelerated-aging]
sources: [2011-nrel-reliability-testing-beyond-qualification, 2012-nrel-iec61215-what-it-is, 2013-koehl-fraunhofer-accelerated-service-life-testing, 2014-nrel-pv-module-qualification-plus, 2019-karas-damp-heat-degradation-shj-cu, 2022-arena-sundrive-copper-metallisation-demonstration, 2022-karas-cu-outdiffusion-damp-heat, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-nrel-getting-ahead-of-curve-pv-assessment]
tags: [Cu-corrosion, encapsulant, edge-ingress, damp-heat, glass-glass, edge-seal]
created: 2026-04-26
updated: 2026-04-26
---

# Cu finger corrosion in encapsulant under damp heat

**Slug:** `failure-modes/Cu-finger-corrosion-encapsulant` · **Severity:** high

## What it is

Plated Cu fingers within a laminated module are exposed to the encapsulant chemical environment, which under damp-heat (85 °C / 85 % RH) becomes saturated water + (for EVA) acetic acid. The Cu metal is oxidised and / or dissolved, with reaction products mobilised into the encapsulant; mechanistically tied to [[failure-modes/EVA-acetic-acid-corrosion]] and [[failure-modes/Cu-out-diffusion-through-cap-stack]] but distinct in that this failure mode tracks the *cell-finger / encapsulant interface chemistry*, not the cap-stack-internal IMC formation. Lachowicz 2023/2024 show the degradation initiates at unsealed module edges where humidity ingresses; the 1-cell mini-module is the worst-case test geometry because of its high perimeter-to-area ratio.

## How it manifests

- **EL dark spots that propagate inward from the module edge** (Lachowicz 2023/2024) — the spatial signature distinguishing edge-driven moisture ingress from bulk encapsulant chemistry.
- **5 % Pmax loss at 2700 h DH** on Cu-plated SHJ Smartwire mini-modules with POE encapsulant and no edge sealing (Lachowicz 2024).
- **Cu lining voids in EVA above the finger** (Karas 2022 EDS) — direct chemical evidence of Cu mobilised into the encapsulant.
- **Encapsulant discoloration / yellowing** above corroded finger sections.
- **Adhesion / interface delamination** between Cu finger and encapsulant.
- **Series-resistance rise** measurable as FF degradation in 1-sun IV.

## How to detect it

- **DH chamber 85 °C / 85 % RH per IEC 61215** — [[methods/damp-heat-aging-1000h]] — extending to 2000–3000 h ([[methods/extended-damp-heat-IEC63209]]) to surface the slower kinetics of Cu corrosion under POE.
- **EL imaging at 0/250/500/750/1000/2000 h** — [[methods/EL-electroluminescence-imaging]]: track edge-inward propagation of dark spots; the spatial signature distinguishes edge-driven from bulk encapsulant chemistry.
- **1-sun IV at every checkpoint** — [[methods/IV-curve-measurement]]: track Pmax, Voc, FF, Jsc; FF drop without Voc drop suggests series-resistance / contact-corrosion, not bulk Cu contamination.
- **Visual inspection** of the corroded finger sections post-DH; cross-section EDS to identify Cu in encapsulant.
- **Wet leakage / IR thermography** per Wohlgemuth 2011 — surface electrical signs of corrosion before they show up in light IV.
- **Compare 1-cell vs 3-cell mini-module geometries** — the 1-cell module is the worst-case test (Lachowicz 2024).

## Mitigation

- **Edge sealing with polyisobutylene (PIB)** — Lachowicz 2024 identifies this as the planned next step; commercial heterojunction modules already use PIB edge seal to limit moisture ingress.
- **Encapsulant choice POE > EPE > EVA** — see [[failure-modes/EVA-acetic-acid-corrosion]]: POE removes the acetic-acid driver. Use [[reagents/POE-polyolefin-encapsulant]].
- **Glass-glass module construction** with low-WVTR (water vapour transmission rate) backsheet/glass — second-best after POE encapsulant.
- **Cap-layer engineering** — thicker Sn (Cu₆Sn₅ self-limiting per Karas 2022), Ni-doped Cu, or thicker Ag cap to slow Cu mobilisation through the cap into the encapsulant.
- **Bath impurity control** — Karas 2022 ties void formation (and therefore encapsulant Cu mobilisation) to S, Cl, C, O carryover from acid-Cu plating; semiconductor-grade reagents and periodic activated-carbon treatment of [[reagents/acid-Cu-sulfate-bath]].
- **Test geometry** — use 3-cell (or larger) mini-modules with edge seal for development; reserve 1-cell unsealed for accelerated worst-case screening.

## Where it applies

- Methods: [[methods/damp-heat-aging-1000h]], [[methods/extended-damp-heat-IEC63209]], [[methods/EL-electroluminescence-imaging]], [[methods/IV-curve-measurement]], [[methods/dark-IV-suns-Voc]]
- Reagents: [[reagents/EVA-encapsulant]], [[reagents/POE-polyolefin-encapsulant]], [[reagents/silver-Ag-cap]], [[reagents/tin-Sn-cap]], [[reagents/multibusbar-Cu-ribbon]]
- Step kinds: encapsulation, lamination, accelerated-aging

## Severity rationale

High. Lachowicz 2024's 5 % Pmax loss at 2700 h on POE modules without edge sealing is just barely above the 0.5 %abs Δη threshold the hypothesis sets, and is *4-fold worse* under EVA per Karas 2019/2022. The failure mode is mitigated by encapsulant choice + edge sealing (both commercial), but the residual 5 % loss after 2700 h is real and traceable to moisture ingress + Cu chemistry — meaning even best-case Cu-plated SHJ modules need edge-seal engineering to clear extended-DH targets.

## Citing sources

- [[sources/2011-nrel-reliability-testing-beyond-qualification]] — IEC 61215 DH lists corrosion as primary target; this is the SHJ Cu-plated incarnation.
- [[sources/2012-nrel-iec61215-what-it-is]] — defines the 85/85 protocol.
- [[sources/2013-koehl-fraunhofer-accelerated-service-life-testing]] — FEM water-uptake validating 85/85 as a saturated-encapsulant accelerant.
- [[sources/2014-nrel-pv-module-qualification-plus]] — qualification-plus framework for emerging tech.
- [[sources/2019-karas-damp-heat-degradation-shj-cu]] — encapsulant-driven Cu degradation; POE protects Cu-plated cells, EVA does not.
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — passes 2000 h DH with POE + Sn cap; demonstrates the mitigation path is real.
- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — Cu lining voids in EVA above fingers; direct chemical evidence.
- [[sources/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — 5 % degradation at 2700 h DH on POE mini-modules without edge sealing; edge-onset mechanism identified.
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — journal-paper version with EL imaging at 0/1008/2076 h and PIB edge-seal recommendation.
- [[sources/2024-nrel-getting-ahead-of-curve-pv-assessment]] — names POE adoption as the SHJ mitigation for this failure mode.
