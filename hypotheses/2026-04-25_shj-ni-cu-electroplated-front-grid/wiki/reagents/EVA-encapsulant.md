---
type: reagent
slug: EVA-encapsulant
aliases: [ethylene vinyl acetate, EVA, EVA encapsulant film]
cas: ""
suppliers:
  - name: Mitsui Chemicals (Solar Evasky)
    catalog: "Solar Evasky S88"
    grade: standard fast-cure EVA, ~460 µm
    url: https://www.mitsuichemicals.com
  - name: Hangzhou First PV Material
    catalog: "First-EVA F806"
    grade: PV grade
    url: https://www.firstpvm.com
  - name: STR (Specialized Technology Resources)
    catalog: "Photocap 15455P"
    grade: PV-encapsulant
    url: https://www.strsolar.com
storage: cool (≤25 °C), dry; protect from UV; shelf life 6–12 months
hazards: low (as cured film); uncured EVA contains peroxide curing agents
known_failure_modes: [EVA-acetic-acid-corrosion, Cu-finger-corrosion-encapsulant, Cu-out-diffusion-through-cap-stack]
sources: [2013-koehl-fraunhofer-accelerated-service-life-testing, 2014-nrel-pv-module-qualification-plus, 2014-rehman-nicu-plating-csi-review, 2019-karas-damp-heat-degradation-shj-cu, 2022-karas-cu-outdiffusion-damp-heat, 2023-taiyangnews-heterojunction-technology-report, 2024-nrel-getting-ahead-of-curve-pv-assessment, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj]
tags: [encapsulant, EVA, module-package, acetic-acid, Cu-corrosion-driver]
created: 2026-04-26
updated: 2026-04-26
---

# EVA encapsulant

**Slug:** `reagents/EVA-encapsulant` · **Type:** reagent

## What it is

Ethylene vinyl acetate (EVA) is the dominant polymer encapsulant for c-Si PV modules — a thermoset crosslinked sheet (~450 µm) laminated above and below the cell stack to provide UV protection, mechanical compliance, and moisture barrier. **For plated-Cu cells, EVA is the central adversary**: under damp heat it hydrolyzes to release acetic acid, which corrodes Cu fingers and acts as a sink-reaction driving Cu out-diffusion through cap layers (Karas 2022).

## Common uses (in this corpus)

EVA appears across this corpus as the **default module encapsulant** and the **mechanistic anchor** for plated-Cu DH failure. Karas 2022 / 2019 demonstrate that EVA gives ~3× higher Cu surface concentration after DH than POE; Rehman 2014 names EVA as the corrosive driver for the Cu finger; NREL reliability literature treats EVA acetic-acid release as a known PV DH failure pathway. The hypothesis must explicitly choose between EVA and POE for any module-level evaluation — they produce different outcomes.

## Properties / specifications

- Polymer: ethylene-vinyl acetate copolymer, ~28–33 wt% VA content (PV grade).
- Crosslinker: typically tert-butyl peroxy ester ("TBEC"-class) or peroxide blend; cures during lamination.
- Lamination: ~150 °C / 8–15 min hot-press in vacuum laminator (within SHJ thermal budget).
- Thickness: 0.4–0.5 mm per sheet; double-layer (front + back) for glass-glass or glass-backsheet modules.
- Refractive index: ~1.48 (matches glass), enabling optical coupling.
- Acetic acid release: hydrolysis of vinyl acetate side groups under DH (85 °C / 85 % RH) accumulates CH3COOH at 10s–100s ppm levels in the encapsulant phase.
- UV transmission: PV grade has UV stabilizers but transmits 300–400 nm; older formulations browned under UV.

## Suppliers

- Mitsui Chemicals — Solar Evasky S88; URL https://www.mitsuichemicals.com
- Hangzhou First PV Material — First-EVA F806; URL https://www.firstpvm.com
- STR — Photocap 15455P; URL https://www.strsolar.com
- Sveck, Jinbo, Bridgestone — additional Asia-pacific PV-EVA suppliers.

## Alternatives

- [[reagents/POE-polyolefin-encapsulant]] — polyolefin alternative; **no acetic-acid pathway**; ~3× lower Cu out-diffusion in DH (Karas 2022). Strongly preferred for plated-Cu modules.
- TPO (thermoplastic polyolefin), silicone encapsulants — niche / premium.

## Gotchas / failure modes

- [[failure-modes/EVA-acetic-acid-corrosion]] — direct hydrolysis pathway; the central anti-EVA mechanism for Cu cells.
- [[failure-modes/Cu-finger-corrosion-encapsulant]] — combined moisture + acetic acid + Cu surface chemistry under EVA gives accelerated finger corrosion.
- [[failure-modes/Cu-out-diffusion-through-cap-stack]] — Karas 2022 shows EVA "pulls" Cu through the cap stack via the acetic-acid sink reaction.

## Citing sources

- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — mechanistic anchor: EVA vs POE side-by-side; EVA gives ~3× Cu surface concentration in DH.
- [[sources/2019-karas-damp-heat-degradation-shj-cu]] — Karas precursor paper; first demonstration of plated-Cu DH degradation with EVA.
- [[sources/2014-rehman-nicu-plating-csi-review]] — review naming EVA as Cu-finger corrosive driver.
- [[sources/2013-koehl-fraunhofer-accelerated-service-life-testing]] — service-life modeling; EVA degradation kinetics.
- [[sources/2014-nrel-pv-module-qualification-plus]] — module qualification framework where EVA-driven failures show up.
- [[sources/2024-nrel-getting-ahead-of-curve-pv-assessment]] — reliability roadmap; EVA acetic-acid pathway listed.
- [[sources/2023-taiyangnews-heterojunction-technology-report]] — SHJ industry overview discussing encapsulant choice.
- [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — Pingel 2025 Ag-Cu paste study notes encapsulant choice as a downstream concern.
