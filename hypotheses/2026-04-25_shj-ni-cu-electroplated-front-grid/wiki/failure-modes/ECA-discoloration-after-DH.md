---
type: failure-mode
slug: ECA-discoloration-after-DH
severity: low
frequency_estimate: "NREL 2024: ECA novel-material risks (debonding and corrosion of nonsilver conductive particles) flagged but not yet quantified at scale; ECA increasingly used in shingled / SmartWire SHJ where standard SnPbAg solder is incompatible with low-T cell process. Lachowicz 2023/2024 demonstrates POE/ECA glass-glass shingles with <0.5 % loss after 200 TC and ~3-4 % Pmax loss after 1500 h DH."
applies_to_methods: [damp-heat-aging-1000h, extended-damp-heat-IEC63209, temperature-cycling-IEC61215-TC200, EL-electroluminescence-imaging, peel-test-90deg]
applies_to_reagents: [electrically-conductive-adhesive-ECA, multibusbar-Cu-ribbon, POE-polyolefin-encapsulant]
applies_to_step_kinds: [encapsulate, age]
sources: [2024-nrel-getting-ahead-of-curve-pv-assessment]
tags: [ECA, electrically-conductive-adhesive, discoloration, shingling, novel-material, low-temperature-interconnect]
---

# ECA discoloration after damp heat

## What it is
Electrically conductive adhesives (ECAs) — typically silver-flake-filled epoxy or modified silicone — are used to bond ribbons or shingled-cell tabs at temperatures (~150 °C) below standard SnPbAg solder reflow (~220 °C), making them attractive for the SHJ thermal budget. Under damp heat, ECAs can discolor (yellowing of epoxy, blackening from oxidation of conductive filler), debond from the metal-plated finger, and lose particle-to-particle conductivity as moisture causes hydrolysis at conductive-particle interfaces. NREL 2024 explicitly flags ECA durability as a novel-material reliability risk, citing both debonding and corrosion of *nonsilver* conductive particles ([[2024-nrel-getting-ahead-of-curve-pv-assessment]] Sec. V). Discoloration itself is mostly cosmetic but is the visible signature of underlying chemical degradation.

## How it manifests
- Visible yellowing or browning of ECA bondlines after 1000+ h DH.
- Resistance increase across ECA bond joints (4-point measurement).
- Debonding visible in EL imaging as bright/dark transition at shingle joints.
- Peel-test pull-force drop on ribbons bonded with ECA.
- For shingled modules ([[2024-lachowicz-cu-plated-shj-aging-mini-modules]]): >2 % FF loss after 2000 h DH.
- IR thermography under operation shows localized hot-spots at degraded ECA joints.

## How to detect it
- [[../methods/EL-electroluminescence-imaging]] for joint integrity over time.
- [[../methods/peel-test-90deg]] before vs after DH on ECA-bonded ribbons.
- 4-point resistance measurement of ECA bonds (per shingle joint).
- Visual / colorimetric inspection.
- IR thermography under ~1 sun operation.
- [[../methods/damp-heat-aging-1000h]] extended to 2000 h, with intermediate timepoints.

## Mitigation (specific actions, not vague advice)
- Specify ECA mass per shingle ≥3.5 mg with cure at 150 °C ([[2024-lachowicz-cu-plated-shj-aging-mini-modules]] Sec. 3 — proven shingle process).
- Use Ag-filled ECAs (not Cu-filled or Ni-filled) — Cu/Ni filler oxidises faster under DH per NREL 2024.
- Match ECA chemistry to encapsulant: POE-compatible epoxy formulations where the encapsulant cure does not attack the ECA matrix.
- Apply PIB edge sealing — moisture is the universal accelerant for ECA degradation.
- Specify acceptance: ΔR_bond ≤10 % and Δpeel ≤25 % after 1000 h DH; visual inspection rated against a reference colour panel.
- Track ECA-specific reliability per IEC TS 63209-2 polymer-durability suite per [[2024-nrel-getting-ahead-of-curve-pv-assessment]].

## Severity ranking justification
Low: discoloration itself is cosmetic; the underlying chemical degradation can escalate but is detectable early via 4-point resistance and EL. ECA is a peripheral choice for the hypothesis (SmartWire / shingle modules can use it; standard busbar interconnection does not). Standard ribbon-soldering with low-T SnBi solder is an alternative path that bypasses this failure mode entirely.

## Sources
- `[[2024-nrel-getting-ahead-of-curve-pv-assessment]]` — flags ECA debonding and conductive-particle corrosion as novel-material risks.

> **Stub flag**: Mitigation evidence is thin in the corpus — only NREL 2024 explicitly flags ECA reliability, and Lachowicz 2024 only reports overall shingle FF loss without separating ECA contribution from finger-corrosion contribution. Pass-3 should consider ordering a long-DH study with ECA-specific 4-point monitoring.
