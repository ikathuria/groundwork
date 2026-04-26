---
type: reagent
slug: POE-polyolefin-encapsulant
aliases: [polyolefin elastomer encapsulant, POE film, polyolefin-based encapsulant]
cas: ""
suppliers:
  - name: Mitsui Chemicals (Solar Evasky)
    catalog: "Solar Evasky T8X (POE-class film)"
    grade: PV-grade POE encapsulant
    url: https://www.mitsuichemicals.com
  - name: Borealis / Borouge
    catalog: "Quentys POE for PV"
    grade: PV-grade
    url: https://www.borealisgroup.com
  - name: Hangzhou First PV Material
    catalog: "First-POE"
    grade: PV-grade POE
    url: https://www.firstpvm.com
storage: cool, dry; protect from UV; shelf life 6–12 months
hazards: low (cured film); LDPE-class polymer
known_failure_modes: [Cu-finger-corrosion-encapsulant, finger-adhesion-loss-after-DH]
sources: [2019-karas-damp-heat-degradation-shj-cu, 2022-arena-sundrive-copper-metallisation-demonstration, 2022-karas-cu-outdiffusion-damp-heat, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-taiyangnews-heterojunction-technology-report, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-nrel-getting-ahead-of-curve-pv-assessment, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj]
tags: [encapsulant, POE, polyolefin, plated-Cu-friendly, no-acetic-acid, n-type-modules]
created: 2026-04-26
updated: 2026-04-26
---

# POE — polyolefin encapsulant

**Slug:** `reagents/POE-polyolefin-encapsulant` · **Type:** reagent

## What it is

Polyolefin elastomer (POE) encapsulant is a polyethylene-based PV encapsulant film used as the SHJ-friendly alternative to EVA. Crucially for plated-Cu cells, POE has **no vinyl acetate side groups** — it cannot hydrolyze to release acetic acid, so the dominant encapsulant-driven Cu-corrosion pathway is absent. POE is the consensus encapsulant choice for n-type modules (SHJ, TOPCon) and the chosen encapsulant for SunDrive's plated-Cu mini-modules that pass 2700 h DH.

## Common uses (in this corpus)

In this corpus POE is the **plated-Cu-friendly encapsulant** that resolves much of the EVA + Cu DH-failure pathway. Karas 2022 demonstrates POE gives ~3× lower Cu c-Si surface concentration than EVA after 3500 h DH; SunDrive ARENA 2022 mini-modules with POE pass 2700 h DH; Lachowicz 2024 CSEM modules use POE. Tepner 2023 / Pingel 2025 / NREL 2024 all flag POE as the SHJ-default encapsulant.

## Properties / specifications

- Polymer: polyolefin elastomer, primarily ethylene-octene or ethylene-butene copolymers; **no vinyl acetate**.
- Crosslinker: typically peroxide-based (like EVA); cures during lamination at ~150 °C.
- Lamination: ~150 °C / 10–15 min hot-press in vacuum laminator.
- Thickness: 0.4–0.5 mm per sheet.
- Refractive index: ~1.48 (matches glass).
- Volume resistivity: ~10¹⁵–10¹⁶ Ω·cm — generally higher than EVA (PID-resistant).
- Water vapor transmission rate (WVTR): typically lower than EVA (better moisture barrier).
- **No acetic-acid pathway:** polyolefin backbone has no ester groups to hydrolyze; eliminates the dominant EVA-driven Cu-finger corrosion pathway.

## Suppliers

- Mitsui Chemicals — Solar Evasky T8X (POE-class film); URL https://www.mitsuichemicals.com
- Borealis / Borouge — Quentys POE for PV; URL https://www.borealisgroup.com
- Hangzhou First PV Material — First-POE; URL https://www.firstpvm.com
- HIUV, Cybrid — additional Asia-pacific POE-encapsulant suppliers.

## Alternatives

- [[reagents/EVA-encapsulant]] — incumbent encapsulant; cheaper but releases acetic acid under DH (the dominant Cu-corrosion driver).
- TPO (thermoplastic polyolefin) — variant of POE, similar advantages.
- EPE (EVA / POE / EVA co-extruded) — composite that retains EVA-cost benefit while putting POE next to the cell.

## Gotchas / failure modes

- [[failure-modes/Cu-finger-corrosion-encapsulant]] — POE *reduces* but does not eliminate this failure mode; moisture ingress + galvanic effects still possible at long DH dwell.
- [[failure-modes/finger-adhesion-loss-after-DH]] — POE adhesion to glass and to the cell front grid can be weaker than EVA's; lamination process tuning required.

## Citing sources

- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — mechanistic anchor: POE gives ~3× lower Cu c-Si surface concentration than EVA after 3500 h DH.
- [[sources/2019-karas-damp-heat-degradation-shj-cu]] — Karas precursor paper; encapsulant-dependent degradation kinetics.
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — SunDrive's plated-Cu mini-modules with POE pass 2700 h DH.
- [[sources/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — CSEM SHJ mini-module aging with POE.
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — extended POE aging follow-up.
- [[sources/2023-taiyangnews-heterojunction-technology-report]] — industry HJT report; POE as SHJ encapsulant default.
- [[sources/2024-nrel-getting-ahead-of-curve-pv-assessment]] — reliability roadmap; POE as plated-Cu / n-type-module enabler.
- [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — Pingel 2025; POE as SHJ encapsulant in AgCu paste study.
