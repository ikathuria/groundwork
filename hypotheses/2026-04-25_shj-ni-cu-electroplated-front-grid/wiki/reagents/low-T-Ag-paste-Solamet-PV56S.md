---
type: reagent
slug: low-T-Ag-paste-Solamet-PV56S
aliases: [Solamet PV56S, DuPont PV56S, back-side solderable Ag paste, LBSF non-fire-through]
cas: null (multi-component metallization paste)
formula: Ag flakes (low Ag loading) + glass frit + binder + vehicle (non-fire-through)
suppliers:
  - name: DuPont / Solamet (now Solar Materials)
    catalog: Solamet PV56S
    grade: production (back-side, LBSF)
    url: https://www.dupont.com/solamet
storage: 5–25 °C; not >30 °C, not <0 °C; lids sealed; shelf life 6 months
hazards: low — Ag dust, organic solvents; cadmium-free
known_failure_modes: [a-Si-H-passivation-degradation, silver-supply-bottleneck]
sources: [2023-taiyangnews-heterojunction-technology-report, 2023-tepner-printing-tech-csi-review, dupont-solamet-pv56s-data-sheet]
tags: [Ag-paste, back-side, LBSF, non-fire-through, control-comparator-ONLY, NOT-SHJ-compatible]
---

# DuPont Solamet PV56S — back-side solderable Ag paste (LBSF, fire-through-compatible)

## What it is
DuPont Solamet PV56S is a back-side solderable silver paste designed for localized back-surface-field (LBSF) PERC cells with reduced silver loading (~60% solids). Like PV21A, it is fire-through-capable and the firing thermal budget exceeds 600 °C — **NOT compatible with SHJ thermal limits**. PV56S is included here as the industry-standard solderable Ag tabbing-pad benchmark; the hypothesis's plated-Ni/Cu/Sn(Ag) cap stack must match the ribbon-soldered-to-Ag-pad performance that PV56S defines for PERC.

## Common uses
- Back-side soldering pads on PERC LBSF cells, co-fired with front Ag (PV17x/PV18x) and back Al (PV36x) ([[dupont-solamet-pv56s-data-sheet]]).
- Reference for industry-standard solderable Ag tabbing pad ribbon-attach.

## Key spec / concentration ranges
- Application: standard screen print, 180–250 mm/s.
- Screen: 200 or 250 mesh stainless steel.
- Drying: 170–230 °C / 10 min (vertical) or 220–270 °C / 30 s (IR belt).
- Firing: rapid spike firing; thermal budget above 600 °C kept ≤8 s for optimum contact.
- Viscosity 50–100 Pa·s; solids 59–61% at 750 °C; fineness <12 µm/<6 µm.
- Soldering: non-clean L0/M0 flux; Pb-Sn or Pb-free ribbons (60Sn/40Pb, 62Sn/36Pb/2Ag, 96.5Sn/3.5Ag).
- Cadmium-free; thinner: DuPont 9450; shelf life 6 months.

## Alternatives / variants
- [[low-T-Ag-paste-generic-SHJ-grade]] — the actual SHJ-compatible low-T paste class. USE THIS for SHJ.
- [[low-T-Ag-paste-Solamet-PV21A]] — DuPont front-side fire-through PERC paste; same SHJ-incompatibility.
- [[silver-Ag-cap]] — plated/immersion Ag finish for the SHJ Ni/Cu/Ag stack — analogous role on the plated process side.

## Gotchas
- **PV56S is NOT SHJ-compatible.** Firing >600 °C destroys a-Si:H passivation. Do not select PV56S as the SHJ control reagent. Use [[low-T-Ag-paste-generic-SHJ-grade]] for SHJ benchmarking.
- Even though "non-fire-through" sometimes implies low-temperature, PV56S is non-fire-through to SiNx but still requires PERC-class spike firing for proper Ag sintering.
- "PV56S" is also referenced loosely in some industry slides (e.g., [[2023-tepner-printing-tech-csi-review]]) as a generic low-Ag-loading benchmark — be careful not to conflate the spec sheet with downstream review-paper paraphrasing.

## Sources
- [[dupont-solamet-pv56s-data-sheet]] — primary TDS; full process spec, viscosity, fineness, firing window.
- [[2023-taiyangnews-heterojunction-technology-report]] — Solamet line in industry context.
- [[2023-tepner-printing-tech-csi-review]] — references "PV56S" loosely as a low-Ag reference paste.
