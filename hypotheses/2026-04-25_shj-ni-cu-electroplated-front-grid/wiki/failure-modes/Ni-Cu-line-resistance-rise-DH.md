---
type: failure-mode
slug: Ni-Cu-line-resistance-rise-DH
severity: medium
frequency_estimate: "Lachowicz 2023/2024: shingle modules >2 % FF loss after 2000 h DH attributed in part to line-resistance rise. Frasson 2024: pure Cu paste ΔRs +2.3 mΩ at 200 °C anneal vs +0.1 mΩ for AgCu. SunDrive 2022: Sn/Ag-capped Cu lines pass 2700 h DH without measurable line-resistance change."
applies_to_methods: [four-point-probe-sheet-resistance, transfer-length-method, IV-curve-measurement, damp-heat-aging-1000h, EL-electroluminescence-imaging]
applies_to_reagents: [acid-Cu-sulfate-bath, tin-Sn-cap, silver-Ag-cap, Cu-paste-low-temperature]
applies_to_step_kinds: [plate, anneal, encapsulate, age]
sources: [2018-pv-tech-metallization-interconnection-bifacial-shj, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-siliconpv-novel-shj-metallization-architectures]
tags: [line-resistance, conductivity-loss, Cu-oxidation, IMC-growth, Kirkendall, damp-heat]
---

# Ni-Cu line-resistance rise during damp heat

## What it is
The Cu finger's bulk resistance is set by its cross-section and bulk resistivity. DH degrades both: (i) Cu oxidation reduces the conducting cross-section as oxide grows from the surface inward (couples to [[Cu-finger-oxidation-damp-heat]]); (ii) Cu-Sn IMC growth on Sn-capped fingers consumes ductile Cu and replaces it with the more resistive Cu₃Sn / Cu₆Sn₅ phases ([[2022-karas-cu-outdiffusion-damp-heat]]); (iii) Kirkendall voids reduce effective conductor cross-section locally; (iv) electromigration / dissolution at finger-bath/encapsulant interface roughens the line and increases scattering. Distinct from contact-resistance failure: line-resistance rise affects long fingers / high-current paths first and shows up as ΔR_s without ρc change in TLM.

## How it manifests
- Line resistance per cm rises; finger conductivity drops uniformly along the finger.
- 4-point-probe scan shows ΔR rising progressively along finger length (vs. ρc which is point-localized at pads).
- ΔFF up to 2 %abs at 2000 h DH on shingle modules ([[2024-lachowicz-cu-plated-shj-aging-mini-modules]]).
- EL imaging shows finger dimming (more diffuse than the bright/dim pattern of broken-finger adhesion failure).
- Cross-section SEM shows Cu cross-section reduction and IMC layer thickening.

## How to detect it
- [[../methods/four-point-probe-sheet-resistance]] — direct line-resistance per cm; track every 250 h during DH.
- [[../methods/transfer-length-method]] — ρc vs R_finger separation.
- [[../methods/IV-curve-measurement]] — STC R_s extraction.
- [[../methods/EL-electroluminescence-imaging]] under low injection — finger-dimming pattern.
- SEM cross-section and EDS for IMC quantification.

## Mitigation (specific actions, not vague advice)
- Cap with ≥1 µm Sn or ≥0.2 µm immersion Ag to prevent direct Cu oxidation ([[Cu-finger-oxidation-damp-heat]]).
- Co-deposit ~9 at.% Ni in Cu to stabilize the (Cu,Ni)₆Sn₅ IMC phase and suppress Kirkendall void growth ([[2022-karas-cu-outdiffusion-damp-heat]]).
- Use POE encapsulation + PIB edge sealing to eliminate moisture-driven oxidation acceleration ([[EVA-acetic-acid-corrosion]]).
- Specify Cu finger cross-section ≥10 µm × 5 µm with ~10 % margin for cross-section consumption over 25 years (rule of thumb: 10 % cross-section loss = 5 % R rise = ~0.25 %abs FF at typical pitch).
- Acceptance: ΔR_finger ≤10 % after 1000 h DH per 4-point probe scan.
- Avoid pure Cu paste on cells exposed to >200 °C cure or open ambient operation; use AgCu shell paste ([[2024-siliconpv-novel-shj-metallization-architectures]]).

## Severity ranking justification
Medium: causes 1–2 %abs FF loss in 2000 h DH on unsealed POE shingle modules — within the 5 % IEC budget but above the hypothesis target. Distinguishable from contact-resistance failure by 4-point-probe vs TLM separation. Fully mitigatable with capping, encapsulant, and edge-seal engineering.

## Sources
- `[[2024-lachowicz-cu-plated-shj-aging-mini-modules]]` — >2 % FF loss at 2000 h DH on shingle modules; line-resistance contribution.
- `[[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]]` — workshop precursor.
- `[[2024-siliconpv-novel-shj-metallization-architectures]]` — pure Cu paste line-resistance instability vs AgCu.
- `[[2018-pv-tech-metallization-interconnection-bifacial-shj]]` — line-resistivity benchmarks for plated Cu (~2 µΩ·cm).
