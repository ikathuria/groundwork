---
type: failure-mode
slug: Cu-finger-corrosion-encapsulant
severity: high
frequency_estimate: "Karas 2022: Cu observed lining voids in EVA above plated fingers after 1000 h DH on Ni-Cu-Ag (3×3 cm) cells, with pFF dropping 79.4→77.9 %. Lachowicz 2023/2024: edge-initiated DH degradation in POE glass-glass mini-modules without edge sealing."
applies_to_methods: [damp-heat-aging-1000h, extended-damp-heat-IEC63209, EL-electroluminescence-imaging, peel-test-90deg, dark-IV-suns-Voc]
applies_to_reagents: [EVA-encapsulant, POE-polyolefin-encapsulant, silver-Ag-cap, tin-Sn-cap, acid-Cu-sulfate-bath]
applies_to_step_kinds: [encapsulate, age, measure]
sources: [2011-nrel-reliability-testing-beyond-qualification, 2012-nrel-iec61215-what-it-is, 2014-nrel-pv-module-qualification-plus, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2019-hatt-noble-shj-solrrl, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-karas-cu-outdiffusion-damp-heat, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2024-lachowicz-cu-plated-shj-aging-mini-modules]
tags: [Cu-corrosion, encapsulant, edge-ingress, moisture, damp-heat, void-formation]
---

# Cu finger corrosion at the encapsulant interface

## What it is
Even with a robust diffusion barrier under the Cu, the *outer* surface of the finger sits in contact with the polymer encapsulant. Moisture penetrating the laminate (especially from unsealed module edges) plus reactive species generated in the encapsulant (acetic acid from EVA hydrolysis, residual peroxides from POE crosslinking) corrode the Cu and any Sn/Ag cap. Karas 2022 imaged Cu lining voids in EVA directly above plated fingers after 1000 h DH and identified grain-boundary diffusion through the Ag cap as the chemical pathway for Cu mobility. Lachowicz 2024 found the same edge-initiated pattern in POE glass-glass mini-modules without polyisobutylene edge sealing — moisture is the integrative driver, encapsulant chemistry is the rate constant.

## How it manifests
- EL imaging shows damage initiating at module edges and propagating inward over 500–2000 h DH ([[2024-lachowicz-cu-plated-shj-aging-mini-modules]] Fig. 3).
- Cu accumulated as oxide or hydroxide on outer cap surface (visible blue-green discoloration on uncapped Cu; subsurface grey on Sn).
- Voids in encapsulant directly above fingers, lined with Cu (EDS-confirmed) ([[2022-karas-cu-outdiffusion-damp-heat]] Fig. 3).
- Increasing line resistance and FF loss as finger cross-section is consumed (couples to [[Ni-Cu-line-resistance-rise-DH]]).
- Peel-force degradation due to corrosion-driven adhesion loss at the cap/encapsulant interface (couples to [[finger-adhesion-loss-after-DH]]).

## How to detect it
- [[../methods/EL-electroluminescence-imaging]] — perimeter-to-centre dark-pattern progression is diagnostic of moisture-edge-driven corrosion vs uniform Cu-LID.
- SEM cross-section + EDS at finger/encapsulant interface to image void formation and Cu redistribution.
- [[../methods/peel-test-90deg]] before/after DH; >50 % peel-force drop on outer fingers but not central fingers indicates edge-driven corrosion.
- [[../methods/damp-heat-aging-1000h]] extended to 2000–2700 h; 1-cell mini-modules are worst-case due to high perimeter-to-area ratio (Lachowicz 2024).
- pH titration of moisture extracted from post-DH encapsulant.

## Mitigation (specific actions, not vague advice)
- Apply polyisobutylene (PIB) edge sealing on glass-glass modules — commercial SHJ standard, eliminates the dominant moisture-edge-ingress pathway ([[2024-lachowicz-cu-plated-shj-aging-mini-modules]] Sec. 3).
- Use POE encapsulant rather than EVA to remove the acetic-acid driver ([[EVA-acetic-acid-corrosion]]).
- Cap Cu fingers with ≥1 µm Sn or ≥0.2 µm immersion Ag — Hatt 2019 reports immersion Ag cap leaves only nanometres of exposed Cu on flanks vs micrometres for resist-route flanks ([[2019-hatt-noble-shj-solrrl]]).
- For shingle interconnection, increase ECA mass to ≥3.5 mg per shingle and cure at 150 °C ([[2024-lachowicz-cu-plated-shj-aging-mini-modules]]).
- Specify 2000 h DH at module level (2× IEC), not 1000 h, because 1000 h does not reach the edge-ingress saturation point in 1-cell mini-modules.
- Build glass-glass (not glass-backsheet) laminates; backsheet WVTR is too high for plated-Cu reliability per [[2024-nrel-getting-ahead-of-curve-pv-assessment]].

## Severity ranking justification
High: this is the dominant *module-level* failure mode for plated-Cu SHJ in current literature, distinct from the wafer-level Cu-into-Si failure mode. It causes ~5 % Pmax loss in 2700 h DH on unsealed mini-modules ([[2024-lachowicz-cu-plated-shj-aging-mini-modules]]) — within the IEC budget but above the hypothesis's "no measurable loss" target. Fully mitigatable with edge sealing + POE + cap engineering, hence "high" not "critical".

## Sources
- `[[2022-karas-cu-outdiffusion-damp-heat]]` — direct imaging of Cu in EVA voids above fingers; pFF link.
- `[[2024-lachowicz-cu-plated-shj-aging-mini-modules]]` — edge-initiation pattern in POE; PIB edge-seal mitigation; 5 % Pmax @ 2700 h.
- `[[2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]]` — workshop precursor with same pattern.
- `[[2021-hatt-stable-cu-plated-shj-eupvsec]]` — Ag cap as flank protection.
- `[[2019-hatt-noble-shj-solrrl]]` — thin Ag cap rationale; nanometre vs micrometre flank exposure.
- `[[2018-pv-tech-metallization-interconnection-bifacial-shj]]` — cap/encapsulant DH framework.
- `[[2011-nrel-reliability-testing-beyond-qualification]]`, `[[2012-nrel-iec61215-what-it-is]]`, `[[2014-nrel-pv-module-qualification-plus]]` — qualification framework.
