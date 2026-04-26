---
type: failure-mode
slug: Cu-out-diffusion-through-cap-stack
severity: high
frequency_estimate: "Karas 2022: confirmed Cu accumulation at outer Sn surface and Cu-Sn IMC + Kirkendall voids every 1–2 µm after 2000 h DH; Cu also reaches outer surface of 1 µm Ag cap after 1000 h DH on Ni-Cu-Ag stacks via grain-boundary diffusion. SunDrive ARENA 2022: 2000–3000 h DH passes with Sn/Ag-capped Cu — direct contradiction at module/process level."
applies_to_methods: [damp-heat-aging-1000h, extended-damp-heat-IEC63209, SIMS-depth-profile, EL-electroluminescence-imaging]
applies_to_reagents: [acid-Cu-sulfate-bath, tin-Sn-cap, silver-Ag-cap, EVA-encapsulant, POE-polyolefin-encapsulant]
applies_to_step_kinds: [plate, encapsulate, age, measure]
sources: [2018-electrochemsci-barrier-properties-electroplated-ni, 2022-karas-cu-outdiffusion-damp-heat]
tags: [Cu-outdiffusion, IMC, Kirkendall-voids, grain-boundary-diffusion, capping-layer, damp-heat]
---

# Cu out-diffusion through the cap stack

## What it is
The Sn or Ag cap deposited on a plated Cu finger is supposed to seal the Cu in. Karas 2022 demonstrated by SEM cross-section, EDS elemental mapping, and SIMS that *both* caps fail in DH — Cu actively migrates *upward* through them. For Sn caps the mechanism is Cu-Sn intermetallic compound (IMC) growth (ε-Cu₃Sn, η-Cu₆Sn₅) accompanied by Kirkendall void formation at the Cu-Cu₃Sn interface, accelerated by impurities (S, Cl, C, O) carried over from sulphate plating baths. For Ag caps the mechanism is grain-boundary diffusion driven by a chemical sink reaction at the outer surface (Cu-acetic-acid corrosion); supported by analogy to leadframe-package and historical daguerreotype literature. Once Cu reaches the cap exterior, it becomes mobile in the encapsulant and is the source for [[lateral-Cu-edge-migration]] and [[Cu-diffusion-into-c-Si]].

## How it manifests
- SEM cross-section: voids at Cu-Sn interface every 1–2 µm after 2000 h DH on Ni-Cu-Sn stacks ([[2022-karas-cu-outdiffusion-damp-heat]] Fig. 1, Fig. 2).
- EDS elemental map: Cu accumulated at the outer Sn or Ag surface (Karas Fig. 3 for Ag-cap).
- SIMS depth profile in c-Si under contact: ~3× higher Cu in EVA vs POE on matched samples (Karas Fig. 4).
- pFF drops 4.7 %abs on Ni-Cu-Sn EVA cells at 3500 h DH; J02 increases >6×.
- Cu₆Sn₅ and Cu₃Sn phase peaks in XRD at degraded contacts.

## How to detect it
- SEM + EDS cross-section of fingers before/after DH; voids at the Cu-cap interface or Cu signal at the outer cap surface are diagnostic.
- [[../methods/SIMS-depth-profile]] of c-Si under contact — primary quantitative test (Karas 2022 protocol).
- [[../methods/damp-heat-aging-1000h]] extended to 2000–3500 h; failure mode is rate-limited and underdetected at 1000 h.
- XRD on contact regions for IMC phase identification.
- Optical inspection: discoloration of cap surface.

## Mitigation (specific actions, not vague advice)
- For Sn caps: co-deposit ~9 at.% Ni into the Cu to stabilize (Cu,Ni)₆Sn₅ IMC phase and suppress Kirkendall void formation ([[2022-karas-cu-outdiffusion-damp-heat]] mitigations section).
- For Ag caps: engineer grain-boundary structure (smaller grains, denser deposit) — standard immersion Ag is grain-boundary-leaky.
- Reduce plating-bath impurities: use high-purity acid Cu sulfate bath with ≤1 ppm S, Cl, C, O; the impurity inventory directly seeds Kirkendall voids.
- Use POE encapsulant — eliminates the acetic-acid sink reaction that drives upward grain-boundary diffusion in Ag caps ([[EVA-acetic-acid-corrosion]]).
- Increase Ni barrier to ≥120 nm at the bottom of the stack so any Cu mobilized at the top cannot also leak out the bottom (Cheng 2018, [[2018-electrochemsci-barrier-properties-electroplated-ni]]).
- Verify Karas's regime: extended DH (2000+ h, 2× IEC) with SEM + SIMS at intermediate timepoints (500, 1000, 2000 h).

## Severity ranking justification
High: documented to cause >4 %abs pFF loss in EVA-encapsulated Ni-Cu-Sn at 3500 h. The mechanism is unambiguously real (cross-section imaging proof). Note the cross-source contradiction — SunDrive's POE/glass-glass mini-modules pass 2000–3000 h DH with Sn/Ag-capped Cu, suggesting that with the right encapsulant and edge-seal the failure mode is suppressed below detection. This contradiction must be resolved at Pass 3 by sampling at extended DH timepoints with SIMS.

## Sources
- `[[2022-karas-cu-outdiffusion-damp-heat]]` — definitive paper; mechanism, SEM/EDS/SIMS data, mitigations.
- `[[2018-electrochemsci-barrier-properties-electroplated-ni]]` — analogous failure mode for the inverted (downward) stack and rationale for Ni barrier integrity.
