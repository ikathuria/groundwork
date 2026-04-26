---
type: failure-mode
slug: EVA-acetic-acid-corrosion
severity: high
frequency_estimate: "Karas 2022: ~3× more Cu at Si surface in EVA vs POE after 3500 h DH; pFF loss 4.7 %abs in EVA, no loss in POE on matched samples. Lachowicz 2023/2024 mitigates via POE — DH degradation ~5 % Pmax at 2700 h with POE + edge sealing missing."
applies_to_methods: [damp-heat-aging-1000h, extended-damp-heat-IEC63209, SIMS-depth-profile, EL-electroluminescence-imaging, dark-IV-suns-Voc]
applies_to_reagents: [EVA-encapsulant, POE-polyolefin-encapsulant, acid-Cu-sulfate-bath, silver-Ag-cap, tin-Sn-cap]
applies_to_step_kinds: [encapsulate, age]
sources: [2011-nrel-reliability-testing-beyond-qualification, 2012-nrel-iec61215-what-it-is, 2013-koehl-fraunhofer-accelerated-service-life-testing, 2014-nrel-pv-module-qualification-plus, 2014-rehman-nicu-plating-csi-review, 2019-karas-damp-heat-degradation-shj-cu, 2022-arena-sundrive-copper-metallisation-demonstration, 2022-karas-cu-outdiffusion-damp-heat, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-nrel-getting-ahead-of-curve-pv-assessment]
tags: [EVA, encapsulant, acetic-acid, hydrolysis, chemical-driver, damp-heat]
---

# EVA acetic-acid corrosion of Cu fingers

## What it is
Ethylene-vinyl-acetate (EVA) encapsulant hydrolyzes under hot/humid conditions to release acetic acid. Acetic acid creates a chemical "sink reaction" at the outer surface of Cu/Sn/Ag-capped fingers — corroding the cap, reacting with Cu to produce mobile copper species, and pulling Cu out of the finger via grain-boundary diffusion ([[2022-karas-cu-outdiffusion-damp-heat]]). The same acetic-acid pathway corrodes Ni, Sn, and Ag caps. Karas 2022 directly compared EVA vs POE matched samples and found ~3× more Cu at the Si surface after 3500 h DH in EVA — quantitative proof that the encapsulant chemistry is the primary driver of plated-Cu module DH failure. The mechanism converts a packaged module from "Cu trapped in finger" into "Cu redistributed across encapsulant and into Si bulk."

## How it manifests
- pFF drops 4–5 %abs after 2000–3500 h DH on EVA-encapsulated Cu-plated cells; matched POE samples show no loss ([[2022-karas-cu-outdiffusion-damp-heat]]).
- EDS cross-sections show Cu lining voids in EVA above the fingers ([[2022-karas-cu-outdiffusion-damp-heat]] Fig. 3).
- Visible discoloration of Sn/Ag caps under DH; SEM shows Cu accumulated at the outer surface every 1–2 µm.
- Module-level: edge-initiated EL dark patterns where moisture-driven hydrolysis is fastest.
- pH inside laminate drops measurably (acetic-acid-strip ionic chromatography test).

## How to detect it
- [[../methods/damp-heat-aging-1000h]] extended to ≥2000 h, with paired EVA-vs-POE laminates is the canonical comparative test.
- [[../methods/SIMS-depth-profile]] of Cu in c-Si under contacts after DH (Karas 2022 protocol).
- EDS elemental mapping of EVA voids above fingers post-DH for Cu signal.
- [[../methods/EL-electroluminescence-imaging]] for edge-initiated darkening.
- pH testing of post-DH encapsulant via cold water extraction and titration.

## Mitigation (specific actions, not vague advice)
- Use POE (polyolefin elastomer) encapsulant instead of EVA — eliminates the acetic-acid pathway ([[2019-karas-damp-heat-degradation-shj-cu]], [[2022-karas-cu-outdiffusion-damp-heat]]). POE is now the SHJ-industry default ([[2024-nrel-getting-ahead-of-curve-pv-assessment]]).
- Apply edge sealing with polyisobutylene (PIB) on glass-glass laminates to block moisture ingress at the perimeter — Lachowicz 2024 identifies edge-initiation as the dominant damage mode and PIB as the commercial-SHJ standard fix.
- If EVA is unavoidable for cost reasons, increase Sn or Ag cap thickness to ≥1 µm and engineer for Cu-Sn IMC stability via Ni co-deposition (~9 at.% Ni in Cu) to stabilize (Cu,Ni)₆Sn₅ phase ([[2022-karas-cu-outdiffusion-damp-heat]]).
- Specify 2000 h DH (2× IEC 61215) on EVA-encapsulated control modules to *demonstrate* acetic-acid resistance — passing 1000 h is no longer sufficient for SHJ-Cu reliability claims ([[2024-nrel-getting-ahead-of-curve-pv-assessment]]).
- Avoid hybrid EVA/POE coextrusion encapsulants until reliability is independently characterized — flagged as understudied by NREL.

## Severity ranking justification
High: this is the single most-cited reason 1000 h DH passes/fails for plated-Cu modules. It causes ≥5 % Pmax loss within 2000 h DH at 85 °C / 85 % RH on EVA — a margin that wipes out the cost case. POE essentially eliminates the failure mode in matched experiments, which is why the hypothesis (and SHJ industry consensus) defaults to POE. Not "critical" because it is fully mitigatable by encapsulant choice, but high because every wrong encapsulant decision costs ~5 %.

## Sources
- `[[2022-karas-cu-outdiffusion-damp-heat]]` — definitive mechanism paper; SIMS, EDS, pFF tracking; EVA vs POE matched comparison.
- `[[2019-karas-damp-heat-degradation-shj-cu]]` — first DH evidence linking encapsulant chemistry to Cu-plated cell degradation.
- `[[2024-lachowicz-cu-plated-shj-aging-mini-modules]]` — POE+edge-sealing mitigation; 5 % Pmax loss at 2700 h on glass-glass POE.
- `[[2014-rehman-nicu-plating-csi-review]]` — review-level discussion of cap/encapsulant interaction.
- `[[2022-arena-sundrive-copper-metallisation-demonstration]]` — minimal degradation in SunDrive POE/glass-glass after 2000 h DH.
- `[[2024-nrel-getting-ahead-of-curve-pv-assessment]]` — POE adoption rationale; flag of mixed-encapsulant unknowns.
- `[[2011-nrel-reliability-testing-beyond-qualification]]`, `[[2012-nrel-iec61215-what-it-is]]`, `[[2013-koehl-fraunhofer-accelerated-service-life-testing]]`, `[[2014-nrel-pv-module-qualification-plus]]` — IEC 61215 framework and beyond-qualification rationale.
