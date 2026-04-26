---
type: failure-mode
slug: Cu-finger-oxidation-damp-heat
severity: high
frequency_estimate: "Frasson 2024: pure Cu paste on SHJ at 200 °C → 270 °C anneal in air shows ΔRs +2.3 to +2.4 mΩ vs +0.1 mΩ for AgCu and Ag, with visible blue-green discoloration. Pingel 2025: Cu paste line resistance unchanged after 24 days at room temperature in air. SunDrive 2022: Sn/Ag-capped Cu modules pass 2000–3000 h DH."
applies_to_methods: [damp-heat-aging-1000h, four-point-probe-sheet-resistance, EL-electroluminescence-imaging, IV-curve-measurement, thermal-evaporation-Ag-cap]
applies_to_reagents: [acid-Cu-sulfate-bath, tin-Sn-cap, silver-Ag-cap, Cu-paste-low-temperature]
applies_to_step_kinds: [plate, anneal, encapsulate, age]
sources: [2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2019-hatt-noble-shj-solrrl, 2022-arena-sundrive-copper-metallisation-demonstration, 2023-taiyangnews-heterojunction-technology-report, 2024-siliconpv-novel-shj-metallization-architectures, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV, atotech-cupracid-ultra-a-tds]
tags: [Cu-oxidation, capping, Sn-cap, Ag-cap, damp-heat, line-resistance]
---

# Cu finger oxidation under damp heat

## What it is
Bare metallic Cu oxidises on exposure to oxygen/moisture, forming Cu₂O and CuO at the surface and (under acidic conditions) basic copper carbonates and acetates. The oxide layer is electrically insulating and grows by a parabolic-rate law in DH, raising line resistance and reducing finger cross-section. For pure Cu paste, Frasson 2024 measured ΔRs +2.3 mΩ after 200 → 230 °C air anneal — clearly visible as blue-green discoloration. AgCu core-shell pastes (44–55 % Ag) produced ΔRs ≤0.1 mΩ over the same range, demonstrating that an Ag shell is the paste-side analogue of the metallic Sn/Ag cap on plated Cu. For *plated* Cu, Sn or Ag electroplated/immersion caps prevent direct atmospheric exposure but corrode under acetic acid (couples to [[EVA-acetic-acid-corrosion]]).

## How it manifests
- Visible blue-green discoloration of unprotected Cu fingers after thermal-cycling or DH ([[2024-siliconpv-novel-shj-metallization-architectures]]).
- Line resistance rise of 1–5 Ω/cm correlates with FF loss (couples to [[Ni-Cu-line-resistance-rise-DH]]).
- Pingel 2025 reports Cu paste line resistance unchanged after 24 days at room temperature — oxidation is *kinetically slow* at ambient but accelerates above 60 °C and dramatically above 200 °C in air.
- Frasson 2021 (cited in [[2024-siliconpv-novel-shj-metallization-architectures]]) reported ≥40 % module power loss after 200 thermal cycles for unprotected Cu paste modules.

## How to detect it
- [[../methods/four-point-probe-sheet-resistance]] of fingers before/after DH, every 250 h.
- [[../methods/IV-curve-measurement]] — series-resistance increase without pFF change indicates oxidation/contact, not Cu-into-Si.
- Visual / colour-change inspection (blue-green = Cu carbonate/oxide).
- Cross-section SEM with EDS — Cu-O signal at finger surface.
- TGA on isolated finger material (uncommon; for forensic root cause).
- [[../methods/EL-electroluminescence-imaging]] — broken-finger pattern indicates localized severe oxidation.

## Mitigation (specific actions, not vague advice)
- Cap plated Cu with ≥0.2 µm immersion Ag (Hatt 2019: only nanometres of bare Cu remain on flanks) or ≥1 µm electroplated Sn ([[2022-arena-sundrive-copper-metallisation-demonstration]]).
- For pastes, use AgCu (44–55 % Ag shell) not pure Cu — Frasson 2024 demonstrates AgCu matches Ag thermal stability.
- Protect Cu during cell processing: nitrogen-inerted ovens, immediate transfer to capping or laminating step ([[2025-yacouba-shj-silver-free-metallization-progPV]]).
- Limit cure profile to ≤280 °C / 5 s in air (anything higher is double-blocked by Cu oxidation and a-Si:H damage).
- Use POE + edge-seal lamination to prevent slow ambient oxidation during 25-year operation.
- Specify ΔR_finger ≤10 % after 1000 h DH as the failure criterion; track via 4-point-probe TLM scans.

## Severity ranking justification
High: in production environments without proper capping or under the wrong cure profile, Cu oxidation alone can wipe >2 %abs of efficiency and cause module-level failure (Frasson 2021's 40 % TC loss). Fully mitigatable with caps and oxygen-controlled processing, but historically a leading failure cause for prototype Cu metallizations. Lower than "critical" because the cap-stack is a known-good engineering solution.

## Sources
- `[[2024-siliconpv-novel-shj-metallization-architectures]]` — Frasson AMAT direct measurement: pure Cu paste ΔRs +2.3 mΩ at 200 °C, AgCu +0.1 mΩ; cites 40 % TC200 module power loss for prior Cu paste.
- `[[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]]` — Cu paste line resistance unchanged after 24 days room-temperature air storage; module DH still pending.
- `[[2025-yacouba-shj-silver-free-metallization-progPV]]` — Cu finger handling protocols; protective wrapping required.
- `[[2022-arena-sundrive-copper-metallisation-demonstration]]` — Sn/Ag capping rationale; modules pass 2000+ h DH.
- `[[2019-hatt-noble-shj-solrrl]]` — immersion Ag cap geometry, flank coverage.
- `[[2018-pv-international-metallization-shj]]`, `[[2018-pv-tech-metallization-interconnection-bifacial-shj]]` — cap discussion in CSEM review.
- `[[2023-taiyangnews-heterojunction-technology-report]]` — industry framing of Cu-oxidation risk for AgCu/Cu paste.
- `[[atotech-cupracid-ultra-a-tds]]` — Cu deposit ductility/quality from acid bath; oxidation a downstream concern.
