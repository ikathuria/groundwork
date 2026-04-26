---
type: failure-mode
slug: ECA-discoloration-after-DH
severity: medium
frequency_estimate: "ECA debonding and corrosion of non-silver conductive particles flagged as 'understudied failure modes' (NREL 2024). For SHJ Cu-plated cells with ECA shingle interconnect: DH degradation primarily edge-onset (Lachowicz 2024 reports >2 % FF loss after 2000 h DH on shingle modules). Discoloration onset poorly quantified in the open literature."
applies_to_methods: [damp-heat-aging-1000h, temperature-cycling-IEC61215-TC200, EL-electroluminescence-imaging, peel-test-90deg, IV-curve-measurement]
applies_to_reagents: [electrically-conductive-adhesive-ECA, EVA-encapsulant, POE-polyolefin-encapsulant, silver-Ag-cap, multibusbar-Cu-ribbon]
applies_to_step_kinds: [encapsulation, lamination, accelerated-aging]
sources: [2018-pv-tech-metallization-interconnection-bifacial-shj, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-taiyangnews-heterojunction-technology-report, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-nrel-getting-ahead-of-curve-pv-assessment]
tags: [ECA, electrically-conductive-adhesive, shingle, low-T-interconnect, DH, discoloration]
created: 2026-04-26
updated: 2026-04-26
---

# ECA discoloration / debonding after damp heat

**Slug:** `failure-modes/ECA-discoloration-after-DH` · **Severity:** medium

## What it is

Electrically conductive adhesive (ECA) — a polymer matrix loaded with Ag flakes (or, increasingly, Ag-coated Cu, Ni, or graphite particles) — is the SHJ-friendly low-temperature alternative to soldered ribbon interconnection, cured at 130–150 °C. NREL 2024 explicitly flags "ECA debonding and corrosion of nonsilver conductive particles" as understudied failure modes for emerging SHJ tech. Under DH or thermal cycling, the polymer matrix can yellow / discolour (UV + thermal aging), absorb moisture and lose adhesion, and the conductive particles can corrode at the resin-particle interface — raising contact resistance and breaking the interconnect mechanical tie. The ECA route is intrinsic to the shingle and Smartwire interconnection trends in modern SHJ modules.

## How it manifests

- **Visible yellowing or browning** of ECA bond lines under prolonged DH or UV.
- **Adhesion loss / debonding** at ribbon-to-cell or shingle-to-shingle interface.
- **Series-resistance rise** measurable as FF drop in 1-sun IV — Lachowicz 2024 reports >2 % FF loss after 2000 h DH on shingle modules with ECA interconnect.
- **EL dark stripes** at the ribbon / shingle interface where ECA bond has failed.
- **Particle corrosion at the resin-particle interface** (Ag-coated Cu particles especially vulnerable) — the NREL-flagged understudied failure.
- **Edge-onset degradation** in glass-glass mini-modules — same edge-ingress mechanism as [[failure-modes/Cu-finger-corrosion-encapsulant]].

## How to detect it

- **DH 1000–2700 h chamber test** — [[methods/damp-heat-aging-1000h]]; track FF, Pmax, EL.
- **Thermal cycling 200–600 cycles** — [[methods/temperature-cycling-IEC61215-TC200]]; especially relevant for shingle modules where ECA must accommodate CTE mismatch.
- **Peel test on ECA bonds** — [[methods/peel-test-90deg]] adapted for ECA: report ΔF / Δ peel force at 0/250/500/1000 h DH.
- **EL imaging** — [[methods/EL-electroluminescence-imaging]] localises debonded segments; dark stripes at ribbon / shingle interfaces.
- **Visual / colorimetric inspection** — yellowing index of the ECA bond.
- **SEM cross-section + EDS** at degraded ECA bonds — identify particle corrosion, polymer decomposition products.
- **Side-by-side EVA vs POE encapsulant arms** — disambiguate matrix-driven discoloration from particle corrosion.

## Mitigation

- **POE encapsulant + edge sealing** — both reduce moisture ingress and acetic-acid attack at ECA bonds. Lachowicz 2024 recommends PIB edge seal as the planned remediation.
- **Use Ag-flake ECA for high reliability arms** — Ag flakes do not corrode; non-Ag particles (Cu, Ni, graphite) are flagged by NREL as understudied. A reliability-vs-cost trade-off.
- **Vendor selection**: Mondragon and teamtechnik (TaiyangNews 2023) named as common ECA-interconnection vendors outside China; vendor-specific cure profiles and adhesion qualifications matter.
- **Cure profile within spec** — Lachowicz 2024 cites ~3.5 mg ECA per shingle, cured 150 °C — exceeding 200 °C cure threatens a-Si:H passivation ([[failure-modes/a-Si-H-passivation-degradation]]).
- **Pre-DH peel-test gate** — establish ≥1 N/mm peel-force baseline (DIN EN 50461) before DH; failure to clear the threshold fresh predicts catastrophic post-DH failure.
- **UV preconditioning** — [[methods/UV-preconditioning]] before DH to surface UV-driven yellowing of the polymer matrix early.

## Where it applies

- Methods: [[methods/damp-heat-aging-1000h]], [[methods/temperature-cycling-IEC61215-TC200]], [[methods/EL-electroluminescence-imaging]], [[methods/peel-test-90deg]], [[methods/IV-curve-measurement]]
- Reagents: [[reagents/electrically-conductive-adhesive-ECA]], [[reagents/EVA-encapsulant]], [[reagents/POE-polyolefin-encapsulant]], [[reagents/silver-Ag-cap]], [[reagents/multibusbar-Cu-ribbon]]
- Step kinds: encapsulation, lamination, accelerated-aging

## Severity rationale

Medium. ECA discoloration / debonding is real (Lachowicz 2024 reports it on shingle modules at >2000 h DH) but the failure is incremental, not catastrophic, and well-mitigated by encapsulant choice + Ag-particle ECA + edge sealing. NREL 2024 flags it as "understudied," meaning the open literature has not yet published a Karas-grade quantitative DH study. Severity is medium because the failure compounds with other DH failure modes but is rarely the dominant failure on its own.

## Citing sources

- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — ECA gluing as the SHJ-friendly low-T interconnect alternative to soldering; introduces ECA into the SHJ workflow.
- [[sources/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — used for shingle interconnection (~3.5 mg per shingle).
- [[sources/2023-taiyangnews-heterojunction-technology-report]] — ECA-based interconnection (Mondragon, teamtechnik) common outside China; flags soldering-temperature constraint <200 °C.
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — DH >2 % FF loss after 2000 h on shingle modules with ECA, with edge-onset degradation visible in EL.
- [[sources/2024-nrel-getting-ahead-of-curve-pv-assessment]] — explicit "ECA debonding and corrosion of nonsilver conductive particles are flagged as understudied failure modes" — the canonical citation.
