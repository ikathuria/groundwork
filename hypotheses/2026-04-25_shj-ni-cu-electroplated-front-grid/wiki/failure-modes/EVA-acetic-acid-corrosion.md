---
type: failure-mode
slug: EVA-acetic-acid-corrosion
severity: high
frequency_estimate: "5–8 %abs Pmax loss at 1000 h DH on Cu-plated cells under EVA per Karas 2019/2022; up to 4.7 %abs pFF loss with J02 increase >6× on Ni-Cu-Sn / EVA mini-modules vs no measurable degradation under POE"
applies_to_methods: [damp-heat-aging-1000h, extended-damp-heat-IEC63209, EL-electroluminescence-imaging, IV-curve-measurement, dark-IV-suns-Voc, SIMS-depth-profile]
applies_to_reagents: [EVA-encapsulant, POE-polyolefin-encapsulant, silver-Ag-cap, tin-Sn-cap, acid-Cu-sulfate-bath]
applies_to_step_kinds: [encapsulation, lamination, accelerated-aging]
sources: [2011-nrel-reliability-testing-beyond-qualification, 2012-nrel-iec61215-what-it-is, 2013-koehl-fraunhofer-accelerated-service-life-testing, 2014-nrel-pv-module-qualification-plus, 2019-karas-damp-heat-degradation-shj-cu, 2022-arena-sundrive-copper-metallisation-demonstration, 2022-karas-cu-outdiffusion-damp-heat, 2024-nrel-getting-ahead-of-curve-pv-assessment]
tags: [EVA, acetic-acid, hydrolysis, encapsulant, POE, Karas, damp-heat]
created: 2026-04-26
updated: 2026-04-26
---

# EVA acetic-acid corrosion of Cu / Cu-cap fingers

**Slug:** `failure-modes/EVA-acetic-acid-corrosion` · **Severity:** high

## What it is

Ethylene-vinyl-acetate (EVA) encapsulant hydrolyses under elevated humidity and temperature (e.g. 85 °C / 85 % RH damp-heat per IEC 61215) producing acetic acid in situ. Köhl 2013's FEM water-uptake simulations confirm the encapsulant approaches saturation under DH, validating 85/85 as a mechanistically appropriate corrosion accelerant. The acetic acid attacks Cu, Ag, and Sn metallization, and — critically for plated-Cu SHJ — acts as a **chemical reaction sink** at the surface that drives Cu outdiffusion through the cap stack via grain-boundary transport (Karas 2022). Mechanistically distinct from neutral water corrosion: pH-driven dissolution accelerates Cu mobilisation by orders of magnitude.

## How it manifests

- **Cu accumulating in EVA above the finger** — Karas 2022 EDS evidence: Cu mobilised into the encapsulant, lining voids in the EVA above plated-Cu / Ag-capped fingers.
- **3× higher c-Si surface Cu concentration under EVA vs POE** in sister mini-modules after 3500 h DH (Karas 2022).
- **pFF drop, J02 rise** at the cell level in encapsulated modules: 4.7 %abs pFF loss + >6× J02 increase on Ni-Cu-Sn / EVA after 2000 h DH; POE sisters unchanged.
- **EVA discoloration** (yellowing) under prolonged DH; correlates with vinyl-band loss in Raman (Köhl 2013 reports vinyl-band degradation visible spectroscopically after 4000 h DH).
- **Encapsulant delamination** from cell front and finger edges in the worst cases.
- **Ag-paste front-grid corrosion in legacy modules** is the original "EVA + acetic acid" failure precedent — the same chemistry now attacks plated-Cu fingers.

## How to detect it

- **DH chamber 85 °C / 85 % RH per IEC 61215** with 0/250/500/750/1000 h checkpoints — [[methods/damp-heat-aging-1000h]]; extended to 2000–3000 h per IEC 63209 for emerging tech ([[methods/extended-damp-heat-IEC63209]]).
- **Suns-VOC pFF + J02 tracking** at every checkpoint — [[methods/dark-IV-suns-Voc]]: Δ pFF > 1 %abs after 1000 h flags a Cu-corrosion problem.
- **EDS / SIMS forensic** on cross-sections post-DH — [[methods/SIMS-depth-profile]]: Cu in EVA, in cap, in c-Si.
- **Raman spectroscopy of EVA vinyl band** — Köhl 2013's encapsulant degradation diagnostic; reveals hydrolysis before electrical degradation is measurable.
- **EL imaging** — [[methods/EL-electroluminescence-imaging]]: localises degradation to corroded fingers.
- **Visual / colorimetric monitoring** — yellowing index of the encapsulant tracks acetate accumulation.
- **Side-by-side EVA vs POE encapsulant arms** in the experimental matrix to isolate the chemistry contribution.

## Mitigation

- **Replace EVA with [[reagents/POE-polyolefin-encapsulant]]** — POE has no acetic-acid hydrolysis pathway. SunDrive 2022 modules used POE to pass 2000 h DH with minimal degradation. Karas 2019/2022 directly show POE sister cells do not degrade while EVA sisters lose pFF.
- **EPE coextruded encapsulant (EVA-POE-EVA)** is a compromise used in some HJT module lines (TaiyangNews 2023): POE inner layer protects the cell while EVA outer skins maintain process compatibility.
- **Edge sealing with polyisobutylene** in glass-glass modules — Lachowicz 2024 identifies edge-onset moisture ingress as the dominant DH degradation pathway; PIB edge seal is the planned remediation.
- **Thicker / engineered cap stacks** — see [[failure-modes/Cu-out-diffusion-through-cap-stack]]: thicker Sn (Cu₆Sn₅ self-limiting), Ni-doped Cu, or thicker Ag cap with controlled grain size; reduces but does not eliminate the EVA-acetic-acid driver.
- **N ≥ 5 cells per arm + EVA-vs-POE comparator** — required to deconvolve encapsulant contribution from cap-stack contribution.

## Where it applies

- Methods: [[methods/damp-heat-aging-1000h]], [[methods/extended-damp-heat-IEC63209]], [[methods/EL-electroluminescence-imaging]], [[methods/IV-curve-measurement]], [[methods/dark-IV-suns-Voc]], [[methods/SIMS-depth-profile]]
- Reagents: [[reagents/EVA-encapsulant]], [[reagents/POE-polyolefin-encapsulant]], [[reagents/silver-Ag-cap]], [[reagents/tin-Sn-cap]]
- Step kinds: encapsulation, lamination, accelerated-aging

## Severity rationale

High. Karas 2019/2022 directly quantify 4.7 %abs pFF loss and >6× J02 rise on Cu-plated / EVA-encapsulated cells at 1000–2000 h DH, vs no measurable degradation on POE sisters from the same Cu-plating run. The hypothesis's success threshold (Δη ≤ 0.5 %abs at 1000 h DH) is *only* achievable under POE; using EVA encapsulant for the test article would essentially guarantee hypothesis rejection. Severity rationale: encapsulant choice is fully tractable (POE is commercially available) so this is an avoidable failure with documented mechanistic understanding, but the failure mode is the headline contradiction between Karas (EVA, fails) and Lachowicz/SunDrive (POE, passes).

## Citing sources

- [[sources/2019-karas-damp-heat-degradation-shj-cu]] — original ASU/NREL DH study: Cu-plated cells degrade more under EVA than POE; established the encapsulant-chemistry driver.
- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — direct mechanism: acetic acid acts as a chemical reaction sink driving Cu outdiffusion through Ag grain boundaries; ~3× higher Cu in c-Si under EVA vs POE.
- [[sources/2013-koehl-fraunhofer-accelerated-service-life-testing]] — Fraunhofer FEM water-uptake simulation validating 85/85 as a saturated-encapsulant test; Raman vinyl-band diagnostic at 4000 h DH.
- [[sources/2011-nrel-reliability-testing-beyond-qualification]] — IEC 61215 DH targets corrosion + encapsulant adhesion loss; flagged as exactly the failure-mode family this corrosion drives.
- [[sources/2012-nrel-iec61215-what-it-is]] — defines the 85 °C / 85 % RH protocol.
- [[sources/2014-nrel-pv-module-qualification-plus]] — extended/qualified test matrix that pushes DH beyond 1000 h.
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — POE explicitly chosen to avoid the EVA acetic-acid pathway; passes 2000 h DH.
- [[sources/2024-nrel-getting-ahead-of-curve-pv-assessment]] — POE adoption framed as the SHJ-bifacial-driven mitigation for this failure mode.
