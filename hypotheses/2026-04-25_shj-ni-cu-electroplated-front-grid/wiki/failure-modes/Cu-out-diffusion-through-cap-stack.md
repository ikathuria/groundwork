---
type: failure-mode
slug: Cu-out-diffusion-through-cap-stack
severity: high
frequency_estimate: "Karas 2022 EDS detects Cu accumulation on outer Sn or Ag cap surface after 1000–3500 h DH at 85°C/85% RH. Cu/Sn samples form Kirkendall voids every 1–2 µm at the Cu–Sn interface; Cu/Ag samples show Cu mobility through Ag grain boundaries with EVA acetic acid acting as a sink reaction."
applies_to_methods: [Cu-electroplating-acid-bath, light-induced-plating, electroplated-Ni-Cu-stack, damp-heat-aging-1000h, SIMS-depth-profile, EL-electroluminescence-imaging]
applies_to_reagents: [silver-Ag-cap, tin-Sn-cap, EVA-encapsulant, POE-polyolefin-encapsulant, acid-Cu-sulfate-bath]
applies_to_step_kinds: [plating, cap-deposition, encapsulation, accelerated-aging]
sources: [2019-karas-damp-heat-degradation-shj-cu, 2022-karas-cu-outdiffusion-damp-heat]
tags: [Cu-outdiffusion, cap-stack, Sn-cap, Ag-cap, Kirkendall-voids, IMC, Karas]
created: 2026-04-26
updated: 2026-04-26
---

# Cu out-diffusion through Sn / Ag cap stack

**Slug:** `failure-modes/Cu-out-diffusion-through-cap-stack` · **Severity:** high

## What it is

The Sn or Ag cap deposited above plated Cu is intended to prevent Cu oxidation (and to enable solderability), but Karas 2022's EDS / SIMS forensic evidence shows that Cu migrates **upward** through the cap during damp-heat aging and accumulates at the outer cap surface and into the encapsulant. Mechanism is encapsulant-dependent: in Sn caps, low-temperature Cu-Sn interdiffusion forms ε-Cu₃Sn and η-Cu₆Sn₅ intermetallics with Kirkendall voids every 1–2 µm at the Cu–Cu₃Sn interface; in Ag caps, Cu has minimal solid-solubility in Ag below ~700 °C so transport is via grain boundaries, with acetic acid from EVA hydrolysis acting as a chemical reaction sink at the surface to drive the outdiffusion. Bath impurities (S, Cl, C, O from sulfate-acid plating) enhance void formation.

## How it manifests

- **EDS line-scan with Cu signal at outer Sn or Ag surface** after 1000–3500 h DH (Karas 2022). Cu also lining voids in EVA above the finger — i.e. Cu is actively mobilised into the encapsulant.
- **Kirkendall microvoids** in cross-section every 1–2 µm at the Cu–Sn interface (TEM/STEM).
- **pFF drop and J02 rise** at the cell level — see [[failure-modes/Voc-degradation-Cu-contamination]]. Karas 2022: pFF 82.1 → 77.0 % over 2000 h DH on Cu/Sn/EVA samples; J02 doubled.
- **Encapsulant chemistry-dependent severity**: EVA encapsulant gives ~3× higher c-Si surface Cu concentration than POE after 3500 h DH; POE sister cells did not appreciably degrade.
- **EL dark spots** under the affected fingers; visible discoloration of the cap surface in Sn (Cu₃Sn / Cu₆Sn₅ formation) and tarnished Ag.

## How to detect it

- **EDS line-scan / mapping on FIB cross-section** through finger after DH — the Karas 2022 forensic protocol. Track Cu/Sn/Ag/encapsulant elemental profile; Cu accumulating at cap outer surface or in encapsulant flags this failure.
- **SIMS depth profile** — [[methods/SIMS-depth-profile]] (PHI Adept 1010, O₂⁺, 60×60 µm raster, 19×19 µm detection): Cu signal at the cell surface and into the c-Si bulk, especially at 0/250/500/750/1000 h checkpoints during DH.
- **EL imaging** — [[methods/EL-electroluminescence-imaging]] localises degradation to specific fingers; harvest those for cross-section analysis.
- **STEM/EDS for Kirkendall void density** at Cu–Sn or Cu–Ag interface — confirm IMC formation and void distribution.
- **Cap surface visual / spectral inspection** — Cu₃Sn / Cu₆Sn₅ produce surface discoloration; tarnish on Ag is a leading indicator.

## Mitigation

- **Encapsulant change EVA → POE** — Karas 2019/2022 directly: POE removes the acetic-acid sink that drives Cu outdiffusion; ~3× lower Cu in c-Si and no measurable pFF drop after 1000 h DH. See [[reagents/POE-polyolefin-encapsulant]].
- **Thicker Sn cap** with Cu₆Sn₅ as a self-limiting barrier (Karas 2022 suggests engineering the cap so that IMC growth slows once a continuous Cu₆Sn₅ layer forms).
- **Ni-doped Cu** to form stable (Cu,Ni)₆Sn₅ at the Sn interface — suppresses Kirkendall void formation.
- **Bath impurity control** — Karas 2022 explicitly attributes void formation to S, Cl, C, O carried over from the plating bath; use semiconductor-grade reagents and run periodic activated-carbon treatment of [[reagents/acid-Cu-sulfate-bath]] (per the Atotech Cupracid procedure: 0.2 kg/100 L plating-grade carbon).
- **Edge sealing of glass-glass modules** with polyisobutylene — Lachowicz 2024 showed DH degradation initiates at unsealed module edges; edge seal reduces moisture ingress that drives encapsulant hydrolysis.
- **Thicker Ag cap with controlled grain size** to reduce grain-boundary fast paths; immersion Ag at ~200 nm (Hatt 2019 NOBLE) is the demonstrated minimum.

## Where it applies

- Methods: [[methods/Cu-electroplating-acid-bath]], [[methods/light-induced-plating]], [[methods/electroplated-Ni-Cu-stack]], [[methods/damp-heat-aging-1000h]], [[methods/SIMS-depth-profile]], [[methods/EL-electroluminescence-imaging]]
- Reagents: [[reagents/silver-Ag-cap]], [[reagents/tin-Sn-cap]], [[reagents/EVA-encapsulant]], [[reagents/POE-polyolefin-encapsulant]]
- Step kinds: plating, cap-deposition, encapsulation, accelerated-aging

## Severity rationale

High. Cu out-diffusion through the cap is the *only* documented failure mode that has been directly observed by EDS / SIMS in encapsulated, properly Ni-barriered Cu-plated cells under standard 1000 h DH (Karas 2022): a Ni-Cu-Sn / EVA module lost 4.7 %abs pFF and J02 increased >6× while the POE sister did not degrade. Severity is high because the failure is encapsulant-driven and tractable with a POE switch, but the Karas 2022 evidence is the most direct contradiction in the wiki to the hypothesis's "passes 1000 h DH" target.

## Citing sources

- [[sources/2019-karas-damp-heat-degradation-shj-cu]] — direct precursor: Cu-plated SHJ cells degrade more under DH than Ag screen-printed sisters; degradation prevented when encapsulant is POE rather than EVA.
- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — the SIMS/EDS forensic follow-up. EDS detects Cu on outer Sn / Ag cap surface; SIMS detects Cu in c-Si; EVA gives ~3× higher Cu surface concentration than POE. Mechanisms: Cu-Sn IMC + Kirkendall voids; Cu-Ag grain-boundary transport with EVA acetic-acid sink. Mitigations: thicker Sn (Cu₆Sn₅ self-limiting), Ni-doped Cu ((Cu,Ni)₆Sn₅), or POE substitution.
