---
type: organism
slug: SHJ-cell-M6
organism_type: cell
source: commercial SHJ pilot lines (Meyer Burger, Enel 3SUN, Risen, Huasun) and R&D institutes (CSEM, Fraunhofer ISE, ISC Konstanz)
external_id: ITRPV M6 (166 mm pseudo-square)
characteristics:
  - silicon heterojunction (SHJ) device built on n-type CZ monocrystalline c-Si wafer
  - M6 wafer format — 166 mm pseudo-square, ~274 cm² wafer area, ~258–262 cm² active cell area depending on chamfer
  - intrinsic + doped a-Si:H passivation stack on both sides (≤200 °C process budget)
  - ITO (or IWO/AZO) front and rear TCO, ~70–90 nm typical
  - dominant SHJ R&D format 2018–2022; the workhorse cell in nearly every plated-Cu SHJ paper in this hypothesis's corpus
  - typical short-circuit current ~10.0–10.5 A under STC; champion efficiencies 23.5–25.1 % (Adachi/Kaneka PVD-Cu seed record on M6)
known_failure_modes: [a-Si-H-passivation-degradation, Cu-diffusion-into-c-Si, Cu-finger-corrosion-encapsulant, Cu-finger-oxidation-damp-heat, Cu-out-diffusion-through-cap-stack, FF-degradation-contact-resistance, finger-adhesion-loss-after-DH, Jsc-loss-from-cap-stack-shading, Ni-barrier-pinholes, plating-resist-undercut, TCO-pitting-during-plating, Voc-degradation-Cu-contamination]
sources: [2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, 2020-verlinden-future-challenges-tw-pv, 2021-goldschmidt-tech-learning-tw-pv, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-taiyangnews-heterojunction-technology-report, 2023-tepner-printing-tech-csi-review, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-lorenz-cutting-edge-metallization-shj-fraunhofer, 2024-nrel-best-research-cell-efficiency-chart, 2024-siliconpv-novel-shj-metallization-architectures, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV, atotech-cupracid-ultra-a-tds, atotech-solar-industry-overview, fisher-AA8902018-nickel-sulfamate-hydrate, fisher-AC197730010-cu-sulfate-pentahydrate-sds, fisher-AC424525000-sulfuric-acid-acs-sds, notion-systems-solar-inkjet-overview]
tags: [SHJ, cell, M6, n-type, heterojunction, device-under-test]
created: 2026-04-26
updated: 2026-04-26
---

# SHJ cell, M6 (166 mm) format

**Slug:** `organisms/SHJ-cell-M6` · **Type:** organism (substrate / device under test)

## What it is

A silicon heterojunction (SHJ) solar cell fabricated on a 166 mm pseudo-square monocrystalline n-type c-Si wafer. M6 is the dominant SHJ R&D and pilot-line format from roughly 2018 through 2022 and remains the most-cited cell-size in this hypothesis's corpus — virtually every plated-Cu SHJ proof point (Hatt NOBLE, SunDrive ARENA demonstrator, CSEM mini-module aging studies, Fraunhofer ISE Ag→Cu transition work) is built on M6.

## Geometry / format

- Wafer: 166 mm × 166 mm pseudo-square, 223 mm corner-to-corner diagonal
- Wafer area ≈ 274 cm²; chamfered active cell area ≈ 258–262 cm²
- Wafer thickness: 130–170 µm typical for SHJ (thinner than PERC)
- Front grid: 5–12 busbars (multibusbar, MBB) or SmartWire / wire-interconnect
- Finger pitch: 1.0–1.5 mm; finger width target 20–35 µm for plated, 30–50 µm for screen-printed
- Power class: ~6.3–7.0 W per cell at 23.5–25.0 % efficiency
- Short-circuit current Isc: ~10.0–10.5 A under STC AM1.5g
- Industry adoption: dominant SHJ format ~2018–2022; gradually displaced by M10 and G12 in mass production from ~2022 onward, but remains the academic/R&D reference

## Construction (where relevant)

- Bare cell precursor: n-type CZ wafer, alkaline texture, intrinsic + doped a-Si:H stack both sides, ITO/IWO/AZO TCO both sides
- Front-side metallization: low-T screen-printed Ag paste (industry baseline) or plated Ni/Cu/Ag stack (intervention)
- Rear-side metallization: usually low-T screen-printed Ag (often a Ag/Cu hybrid for cost)
- Cells are not typically encapsulated at this stage; module-level encapsulation tests use this cell embedded in a mini-module or full-size laminate

## Common pitfalls

- [[failure-modes/a-Si-H-passivation-degradation]] — any process step >200 °C or aggressive UV pre-conditioning degrades the defining a-Si:H passivation; sets the upper bound on plating thermal budget
- [[failure-modes/Cu-diffusion-into-c-Si]] — Cu has the highest interstitial diffusivity among 3d metals in Si; without a barrier, even ppb-level Cu wrecks minority-carrier lifetime
- [[failure-modes/Cu-out-diffusion-through-cap-stack]] — Karas 2022 reports 5–8 % Pmax loss at 1000 h DH for poorly capped plated Cu on M6 SHJ
- [[failure-modes/Cu-finger-oxidation-damp-heat]] — exposed Cu surfaces oxidise to red CuO/Cu₂O during 85/85 aging
- [[failure-modes/Cu-finger-corrosion-encapsulant]] — encapsulant-mediated corrosion (especially with EVA acetic-acid pathway)
- [[failure-modes/FF-degradation-contact-resistance]] — TLM contact resistivity drift at the Ni/TCO or seed/TCO interface
- [[failure-modes/finger-adhesion-loss-after-DH]] — peel strength drop after damp-heat; key acceptance test for plated grids
- [[failure-modes/Jsc-loss-from-cap-stack-shading]] — wider plated fingers / extra cap layers shade Jsc
- [[failure-modes/Ni-barrier-pinholes]] — Cheng 2018 reports 60 nm electroplated Ni fails as a Cu barrier at 300 °C; pinhole density must be verified pre-cap
- [[failure-modes/plating-resist-undercut]] — inkjet resist undercut leads to wide / shorted fingers
- [[failure-modes/TCO-pitting-during-plating]] — acid Cu sulfate (pH ≈ 1) attacks ITO at pinholes
- [[failure-modes/Voc-degradation-Cu-contamination]] — Lindroos 2015 traces Voc loss to Cu in c-Si bulk via SPV / lifetime mapping

## Citing sources

- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — bifacial M6 SHJ metallization survey
- [[sources/2018-pvtech-metallization-shj-cells-modules]] — M6 SHJ metallization & module integration overview
- [[sources/2019-hatt-noble-bifacial-shj-aip]] — NOBLE Cu-plated bifacial M6 SHJ
- [[sources/2019-hatt-noble-shj-solrrl]] — NOBLE process on M6 SHJ
- [[sources/2020-verlinden-future-challenges-tw-pv]] — TW PV scaling premises tied to M6 baseline
- [[sources/2021-goldschmidt-tech-learning-tw-pv]] — TW PV roadmap built on M6/M10 cells
- [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — DH-stable plated Cu SHJ on M6
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — SunDrive ARENA demonstrator on M6
- [[sources/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — CSEM stability study, M6 cells in mini-modules
- [[sources/2023-taiyangnews-heterojunction-technology-report]] — industry SHJ format snapshot, M6/M10/G12
- [[sources/2023-tepner-printing-tech-csi-review]] — printing-tech review with M6 SHJ context
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — extended aging on M6 plated Cu
- [[sources/2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] — Fraunhofer ISE M6 plated-Cu SHJ
- [[sources/2024-nrel-best-research-cell-efficiency-chart]] — NREL chart entry, Adachi/Kaneka M6 SHJ record
- [[sources/2024-siliconpv-novel-shj-metallization-architectures]] — novel architectures benchmarked on M6
- [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — Ag→Cu transition pathway on M6
- [[sources/2025-yacouba-shj-silver-free-metallization-progPV]] — Cu-paste champion on M6
- [[sources/atotech-cupracid-ultra-a-tds]] — Cu plating bath datasheet (M6 reference cell)
- [[sources/atotech-solar-industry-overview]] — supplier industry view, M6 SHJ
- [[sources/fisher-AA8902018-nickel-sulfamate-hydrate]] — Ni bath chemical, M6 reference
- [[sources/fisher-AC197730010-cu-sulfate-pentahydrate-sds]] — Cu bath chemical, M6 reference
- [[sources/fisher-AC424525000-sulfuric-acid-acs-sds]] — bath acid, M6 reference
- [[sources/notion-systems-solar-inkjet-overview]] — inkjet patterning on M6 SHJ
