---
type: reagent
slug: Cu-paste-low-temperature
aliases: [low-T Cu paste, Cu nanoparticle paste, LCT-Cu paste]
cas: ""
suppliers:
  - name: Applied Materials (AMAT)
    catalog: "AgCu / Cu paste (proprietary)"
    grade: SHJ-compatible cure ≤300 °C / 5 s
    url: https://www.appliedmaterials.com
  - name: Hitachi Chemical / Resonac
    catalog: "Cu paste prototypes"
    grade: research / pilot
    url: https://www.resonac.com
  - name: Heraeus
    catalog: "Cu and AgCu paste prototypes"
    grade: development
    url: https://www.heraeus.com
storage: refrigerated (5–10 °C); shelf life typically <3 months for research-grade Cu pastes
hazards: medium — Cu nanoparticles, organic vehicle (solvents, binder); inhalation hazard
known_failure_modes: [Cu-finger-oxidation-damp-heat, FF-degradation-contact-resistance, a-Si-H-passivation-degradation, Cu-finger-corrosion-encapsulant]
sources: [2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-tepner-printing-tech-csi-review, 2024-itrpv-15th-edition-roadmap, 2024-lachowicz-cu-plated-shj-aging-mini-modules, 2024-siliconpv-novel-shj-metallization-architectures, 2025-fraunhoferise-transition-ag-cu-screen-printed-shj, 2025-yacouba-shj-silver-free-metallization-progPV]
tags: [Cu-paste, screen-print, low-T-cure, silver-free, AgCu-paste]
created: 2026-04-26
updated: 2026-04-26
---

# Low-temperature Cu paste

**Slug:** `reagents/Cu-paste-low-temperature` · **Type:** reagent

## What it is

A low-temperature Cu paste is a screen-printable / dispensable formulation of Cu nanoparticles (or Cu-coated particles, or Ag-coated Cu — AgCu paste) in an organic vehicle (resin + solvents + dispersants) that cures at SHJ-compatible peak temperatures (≤300 °C / 5 s typical). It is the *paste-route* alternative to electroplated Cu for SHJ silver-reduction, and the parallel intervention to the hypothesis's electroplated route.

## Common uses (in this corpus)

In this corpus low-T Cu paste appears as the **competing intervention** to the hypothesis. Yacouba 2025 reports champion 23.08 % bifacial SHJ with all-Cu-SP fingers (zero Ag); Fraunhofer ISE (Pingel/Lorenz 2025) characterizes Cu and AgCu pastes against the LCT-Ag baseline; Lachowicz 2023/2024 evaluates Cu paste in CSEM mini-module aging; ITRPV 2024 lists Cu paste in the silver-reduction roadmap. The key data point: Cu paste line resistance and contact resistivity (ρc ≈ 10 mΩ·cm² at 56 µm finger width, Yacouba 2025) **do not meet** the hypothesis's ≤2 mΩ·cm² target — only *plated* Cu can clear that bar, which is precisely why this hypothesis chose the electroplating route.

## Properties / specifications

- Cure profile: 200–300 °C peak, 1–5 s belt time (SHJ-compatible); above 320 °C / 5 s incurs ~0.5 %abs efficiency loss from a-Si:H degradation (Yacouba 2025).
- Bulk resistivity (after cure): 1.68–12.6 µΩ·cm depending on formulation and cure (Yacouba 2025; ~10× pure Cu's 1.7 µΩ·cm in best case).
- Line geometry (50 µm screen opening, Yacouba 2025): 56 µm wide × 10 µm tall typical Cu SP; AgCu SP gives 45 µm × 12.5 µm.
- Contact resistivity ρc to ITO: 8–13 mΩ·cm² for Cu SP, 5–12 mΩ·cm² for AgCu SP (Pingel 2025, Yacouba 2025) — significantly above the 0.1–4 mΩ·cm² achievable with plated Cu (NOBLE process).
- Atmosphere during cure: requires inert / protective backing to suppress Cu nanoparticle oxidation.

## Suppliers

- Applied Materials (AMAT) — AgCu paste at production-pilot scale (Frasson/Galiazzo 2024); URL https://www.appliedmaterials.com
- Hitachi Chemical / Resonac — Cu paste research products; URL https://www.resonac.com
- Heraeus — Cu and AgCu development pastes; URL https://www.heraeus.com
- Cell-developer-internal (Fraunhofer ISE, Forschungszentrum Jülich, CSEM) — non-commercial research formulations.

## Alternatives

- [[reagents/low-T-Ag-paste-generic-SHJ-grade]] — the screen-print baseline; better contact resistance but Ag-supply bottleneck.
- [[reagents/acid-Cu-sulfate-bath]] (the plated-Cu route) — meets ρc target but adds capex for plating line.
- [[reagents/silver-Ag-cap]] — Ag finish on a Cu finger, plated/sputtered rather than screen-printed.

## Gotchas / failure modes

- [[failure-modes/Cu-finger-oxidation-damp-heat]] — exposed Cu paste fingers oxidize aggressively in DH; backing-paper protection needed during cure.
- [[failure-modes/FF-degradation-contact-resistance]] — poor sintering of nanoparticles at SHJ-compatible cure temperatures gives ρc ~10 mΩ·cm², missing the ≤2 mΩ·cm² target.
- [[failure-modes/a-Si-H-passivation-degradation]] — cure peaks above 280 °C / 5 s damage the SHJ passivation.
- [[failure-modes/Cu-finger-corrosion-encapsulant]] — at the module level, Cu-paste fingers are exposed to the same EVA/POE driven corrosion as plated Cu.

## Citing sources

- [[sources/2025-yacouba-shj-silver-free-metallization-progPV]] — champion all-Cu-SP bifacial SHJ at 23.08 %; full electrical/geometrical characterization of Cu paste.
- [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — Pingel 2025 AgCu paste vs. low-T Ag baseline.
- [[sources/2024-siliconpv-novel-shj-metallization-architectures]] — Frasson/Galiazzo (AMAT) AgCu paste at production scale.
- [[sources/2023-tepner-printing-tech-csi-review]] — review names Cu paste as emerging Ag-replacement option.
- [[sources/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — CSEM mini-module stability data, Cu-paste pathway discussed alongside plated Cu.
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — extended mini-module aging.
- [[sources/2024-itrpv-15th-edition-roadmap]] — silver-reduction roadmap explicitly mentions Cu/AgCu paste timelines.
