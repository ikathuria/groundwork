---
type: failure-mode
slug: lateral-Cu-edge-migration
severity: high
frequency_estimate: "Karas 2022: once Cu out-diffuses to the cap surface, it is mobile within the encapsulant — visible by EDS as Cu lining voids in EVA above fingers and laterally distributed beyond contact footprints after 1000–3500 h DH. Edge initiation in SHJ mini-modules at unsealed edges (Lachowicz 2023/2024)."
applies_to_methods: [damp-heat-aging-1000h, extended-damp-heat-IEC63209, EL-electroluminescence-imaging, SIMS-depth-profile]
applies_to_reagents: [EVA-encapsulant, POE-polyolefin-encapsulant, acid-Cu-sulfate-bath]
applies_to_step_kinds: [encapsulate, age]
sources: [2022-karas-cu-outdiffusion-damp-heat]
tags: [Cu-migration, encapsulant, edge-ingress, lateral-transport, electrochemical-migration, damp-heat]
---

# Lateral Cu edge migration

## What it is
Once Cu reaches the outer surface of a finger via [[Cu-out-diffusion-through-cap-stack]], the encapsulant is no longer a passive barrier — it becomes a transport medium. Cu travels laterally through the encapsulant matrix (especially through hydrolyzed EVA voids and along finger/encapsulant interfaces) toward regions with stronger chemical sinks (acetic acid pockets, module-edge moisture pools). Karas 2022 documented Cu lining voids in EVA *above* and *beside* plated fingers, showing the redistribution is not confined to the original contact footprint. In modules with applied bias (PID conditions), electrochemical migration adds a field-driven component. The end-state is a halo of Cu around each contact that bridges to the next contact or to the module edge — a leakage path that does not yet show up as a single localized failure but degrades shunt resistance, PID resistance, and (after enough time) reaches Si under cells via the encapsulant.

## How it manifests
- EDS elemental maps show Cu signal in encapsulant voids extending laterally beyond the finger footprint ([[2022-karas-cu-outdiffusion-damp-heat]] Fig. 3).
- EL imaging develops a halo or reduced contrast pattern around each finger over 1000+ h DH.
- Shunt resistance (R_sh) decreases; reverse-bias I-V shows increased leakage.
- PID-c (corrosion-PID) susceptibility rises as Cu migrates under bias.
- SIMS at locations *between* fingers (not under) detects elevated Cu after extended DH on EVA cells.

## How to detect it
- EDS elemental mapping on cross-sections taken between fingers (not just under) after DH.
- [[../methods/EL-electroluminescence-imaging]] over time during DH; track halo evolution.
- Shunt resistance (R_sh) tracking from light IV.
- PID-c stress test (IEC 62804-1) as a secondary detection method — Cu migration accelerates under bias.
- [[../methods/SIMS-depth-profile]] sampling between fingers, not just under.

## Mitigation (specific actions, not vague advice)
- Use POE encapsulant — Karas 2022 showed POE samples did not develop the void/Cu-migration pattern that EVA samples did at 3500 h DH.
- Apply PIB edge sealing — eliminates the moisture and acetic-acid gradient that drives lateral migration toward edges ([[2024-lachowicz-cu-plated-shj-aging-mini-modules]]).
- Cap Cu fingers with sufficient thickness (≥1 µm Sn or ≥0.2 µm Ag) to delay the out-diffusion event that mobilises Cu in the first place ([[Cu-out-diffusion-through-cap-stack]]).
- Co-deposit Ni with Cu (~9 at.%) to stabilize Cu-Sn IMC and reduce free-Cu inventory at the cap surface ([[2022-karas-cu-outdiffusion-damp-heat]]).
- For glass-glass modules, increase laminate edge-margin to ≥10 mm between cells and edge to lengthen the diffusion path.
- Specify SIMS sampling between fingers (not just under) at the 1000 h DH timepoint as part of the qualification protocol.

## Severity ranking justification
High: this mode does not yet show as catastrophic single-cell failure but it is the *integrative* transport pathway that makes Cu-out-diffusion (high) and Cu-into-Si (critical) coupled in module geometry. Causes ≥2 % R_sh degradation in extended DH and is a leading indicator of upcoming critical failures. Lower than critical because POE + edge-seal eliminates the EVA-specific driver.

## Sources
- `[[2022-karas-cu-outdiffusion-damp-heat]]` — only direct documentation; EDS evidence of Cu lining EVA voids beyond contact footprint; mechanism described as electrochemical migration analogous to leadframe-package literature.

> **Stub flag**: Mitigation evidence for *lateral* Cu migration (as opposed to *upward* out-diffusion) is sparse — only Karas 2022 directly characterizes it. Needs corroboration from PID-c testing on plated-Cu SHJ modules at module scale (current corpus does not contain such a study).
