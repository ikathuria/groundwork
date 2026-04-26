---
type: failure-mode
slug: a-Si-H-passivation-degradation
severity: critical
frequency_estimate: "Yacouba 2025: 280 °C / 5 s is the SHJ cell-survival threshold; 320 °C / 5 s costs ~0.5 %abs irreversibly; 360 °C / 5 s costs ~1.5 %abs. Hatt 2021: fs-UV laser pulse energies >4.7 µJ damage passivation (PL-imaged)."
applies_to_methods: [Ni-sputter-deposition, laser-ablation-of-dielectric, NOBLE-selective-Cu-plating, electroless-Ni-deposition, Cu-electroplating-acid-bath, light-induced-plating, UV-preconditioning, minority-carrier-lifetime-photoluminescence]
applies_to_reagents: [a-Si-H-passivation, ITO-transparent-conductive-oxide, Cu-paste-low-temperature, low-T-Ag-paste-generic-SHJ-grade]
applies_to_step_kinds: [plate, etch, anneal, age, measure]
sources: [2018-pvtech-metallization-shj-cells-modules, 2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, 2021-hatt-stable-cu-plated-shj-eupvsec, 2023-taiyangnews-heterojunction-technology-report, 2024-nrel-getting-ahead-of-curve-pv-assessment, 2025-yacouba-shj-silver-free-metallization-progPV, dupont-solamet-pv21a-tech-sheet]
tags: [a-Si:H, passivation, hydrogen-out-diffusion, thermal-budget, sputter-damage, laser-damage, hypothesis-killer]
---

# a-Si:H passivation degradation

## What it is
The SHJ Voc advantage (>730 mV) comes from the a-Si:H(i) intrinsic-layer passivation of the c-Si interface, which depends on hydrogen termination of dangling bonds. Above ~280 °C the hydrogen out-diffuses irreversibly, the dangling-bond density rises, and Voc collapses ([[2025-yacouba-shj-silver-free-metallization-progPV]]). Sputter damage during PVD-seed deposition introduces UV/ion damage that creates Si-H bond breakage even at ambient stage temperature ([[2019-hatt-noble-shj-solrrl]]). Laser ablation of overlying layers — used in NOBLE-laser variant — couples thermal pulses into the a-Si:H stack and can damage passivation if the pulse energy exceeds 4.7 µJ ([[2021-hatt-stable-cu-plated-shj-eupvsec]]). UV exposure in the field also slowly degrades passivation ([[2024-nrel-getting-ahead-of-curve-pv-assessment]]).

## How it manifests
- Voc drops 10–30+ mV; pFF drops accordingly (junction recombination loss).
- PL imaging at 1-sun shows dark patches localized to laser-ablated regions or near contact perimeters ([[2021-hatt-stable-cu-plated-shj-eupvsec]] PL maps).
- µ-PCD or QSSPC effective lifetime drops below ~1 ms (typical SHJ ≥3-5 ms).
- The drop is recoverable by light-soaking at ~175 °C / 55 kW/m² LED for ~90 s if mild (Yacouba 2025: 0.2 %abs Cu-paste anneal cost is fully recovered); irreversible above 280 °C / 5 s.

## How to detect it
- [[../methods/minority-carrier-lifetime-photoluminescence]] — PL imaging at 1-sun is the canonical SHJ damage map; Hatt 2021 uses it to qualify laser pulse energy.
- [[../methods/dark-IV-suns-Voc]] — pFF / Voc as integrated damage metric.
- [[../methods/UV-preconditioning]] — IEC 61215 UV pre-conditioning is undersized for SHJ; NREL recommends extended UV testing per [[../methods/extended-damp-heat-IEC63209]].
- Implant-Voc on lifetime samples (carrier density vs Voc fit) before vs after every metallization step.

## Mitigation (specific actions, not vague advice)
- Hard cap all post-TCO process steps at ≤200 °C ([[2019-hatt-noble-shj-solrrl]] uses 200 °C / 15 min recovery anneal; Yacouba 2025 confirms 280 °C / 5 s ceiling).
- For PVD-seed deposition (NOBLE flow), characterize sputter damage with PL on lifetime samples and add a 200 °C / 15 min recovery anneal ([[2019-hatt-noble-shj-solrrl]]) — Voc 731 mV achieved on full-area cell post-anneal.
- For laser patterning, keep fs-UV (343 nm) pulse energy ≤4.7 µJ with Cu buffer ≥500 nm; use PL imaging to qualify each laser parameter set ([[2021-hatt-stable-cu-plated-shj-eupvsec]]).
- For Cu-paste cure, never exceed 280 °C / 5 s; standard 300 °C / 5 s costs 0.2 %abs but is fully recovered by 90 s light-soaking at ~175 °C.
- Use POE encapsulation; the bifacial UV ingress paths in SHJ make POE/transparent-backsheet selection a passivation-protection question, not just a Cu-corrosion question ([[2024-nrel-getting-ahead-of-curve-pv-assessment]]).
- Specify a UV preconditioning + DH sequence: UV 60 kWh/m² → 1000 h DH → re-IV; this catches passivation-degradation modes that DH alone misses.

## Severity ranking justification
Critical: a-Si:H passivation collapse directly destroys the SHJ Voc advantage that justifies plated-Cu in the first place. The hypothesis ("no measurable efficiency loss after 1000 h DH") cannot survive a-Si:H damage. The 280 °C ceiling is a hard physical limit — every plating, anneal, and laser step in the proposed flow must be benchmarked against it.

## Sources
- `[[2025-yacouba-shj-silver-free-metallization-progPV]]` — quantified 280 °C / 5 s cell-survival threshold; light-soak recovery characterized.
- `[[2019-hatt-noble-shj-solrrl]]` — sputter-damage recovery via 200 °C / 15 min anneal; full-area Voc 731 mV.
- `[[2019-hatt-noble-bifacial-shj-aip]]` — confirms PVD does not damage passivation if anneal is included.
- `[[2021-hatt-stable-cu-plated-shj-eupvsec]]` — fs-UV laser pulse-energy threshold (4.7 µJ) by PL imaging.
- `[[2024-nrel-getting-ahead-of-curve-pv-assessment]]` — UV/passivation susceptibility in SHJ; recommends extended UV protocols.
- `[[2018-pvtech-metallization-shj-cells-modules]]` — <250 °C process window for SHJ.
- `[[2023-taiyangnews-heterojunction-technology-report]]` — SHJ-specific FF degradation linked to oxygen-induced a-SiOₓ at TCO/a-Si interface; light-soak recovery.
- `[[dupont-solamet-pv21a-tech-sheet]]` — low-T paste cure profile constrained by passivation.
