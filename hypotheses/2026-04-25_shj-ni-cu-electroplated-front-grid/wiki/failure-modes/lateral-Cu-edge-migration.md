---
type: failure-mode
slug: lateral-Cu-edge-migration
severity: high
frequency_estimate: "Bright-additive (leveler/brightener Part A/B) ratio drift directly governs deposit isotropy; off-spec ratio causes mushrooming that overgrows the resist edge (Atotech Cupracid TDS). Magnitude: bevel-edge fingers ≥70 µm vs designed 25–30 µm in routes without proprietary resist control."
applies_to_methods: [Cu-electroplating-acid-bath, light-induced-plating, electroplated-Ni-Cu-stack, NOBLE-selective-Cu-plating, photolithography-mask-patterning, inkjet-mask-patterning]
applies_to_reagents: [acid-Cu-sulfate-bath, inkjet-plating-resist, sulfuric-acid-H2SO4]
applies_to_step_kinds: [plating, characterization]
sources: [atotech-cupracid-ultra-a-tds]
tags: [lateral-growth, edge-migration, mushrooming, additives, bath-chemistry, finger-aspect-ratio]
created: 2026-04-26
updated: 2026-04-26
---

# Lateral Cu growth / edge migration during plating

**Slug:** `failure-modes/lateral-Cu-edge-migration` · **Severity:** high

## What it is

Closely related to but distinct from [[failure-modes/plating-resist-undercut]]: this failure mode is the *anisotropy* of Cu growth itself — Cu deposit growing laterally over the resist top instead of confining to the resist opening, even when the resist edge is intact. Driven by the bath's organic-additive system (Atotech Cupracid Parts A/B brightener/leveler combination + chloride), which controls the polarisation of growing facets and therefore the directionality of deposit growth. Off-spec additive ratios (especially Part A:Part B drift) cause "mushrooming" — a T-shaped finger profile with a wide cap on top of the designed footprint — that simultaneously increases shading and creates unsupported overhangs prone to mechanical failure.

## How it manifests

- **T-shaped or mushroom-cap finger profile** in SEM cross-section — wider at top than at base.
- **Reduced aspect ratio** — designed AR 1.0–1.5 collapses to <0.5 if mushrooming is severe.
- **Visible lateral overgrowth** in optical microscopy or top-down SEM — deposit extends visibly beyond the resist opening.
- **Increased Jsc shading loss** for the wider effective finger (cascades to [[failure-modes/Jsc-loss-from-cap-stack-shading]]).
- **Mechanical fragility of the overgrown cap** — peel test fails as the cap detaches; cascades to [[failure-modes/finger-adhesion-loss-after-DH]].
- **Hull-cell test asymmetry** — non-uniform deposit thickness across the test panel, with edge effects more severe than centre.

## How to detect it

- **SEM cross-section** through finger — direct measurement of the lateral overgrowth and aspect ratio.
- **Top-down SEM / optical** at the finger edge — measure effective vs designed finger width.
- **Hull-cell test** (Cupracid procedure: 2 A, 10 min, air-agitated) on incremental Part A / Part B additive additions — identifies additive imbalance before it shows up in cell production.
- **Aspect ratio measurement** — SunDrive: prototype line achieves AR 1.0–1.2; lab process AR 0.6 (mushroomed).
- **Periodic additive analysis** — Cupracid: Parts A/B never pre-mixed; both added on amp-hour-consumed basis. Track added volume vs Ah consumed to detect drift.
- **Confocal profilometry** for height vs width quantification across multiple fingers.

## Mitigation

- **Tight bath additive control** — Cupracid spec: 1.0 % v/v Make-up, Part A 0.5 mL/L, Part B 0.5 mL/L; both added on amp-hour-consumed basis. Hull-cell test on every shift.
- **Chloride within spec (80–150 ppm)** — chloride works synergistically with the brightener; out-of-range chloride disables the leveler and causes mushrooming.
- **Pulsed plating with reverse cycle** — Hatt 2019 NOBLE: 6 A/dm² with 15 ms forward / 1 ms reverse; the reverse pulse preferentially dissolves the high-current-density (high-overgrowth) regions, restoring vertical growth.
- **High-aspect-ratio resist** — taller resist (e.g. dry-film photoresist >25 µm) constrains lateral growth geometrically.
- **Avoid running plating bath beyond rated capacity** — exhaustion of leveler is a non-linear failure; Cupracid Parts A/B replenishment must be on schedule.
- **Operating temperature 24–28 °C** — Cupracid spec; higher T degrades additive performance, accelerating mushrooming.
- **Continuous filtration through 5 µm media at 2–3 turnovers/hour** — Cupracid spec; carbon particles or precipitates also disrupt additive function.

## Where it applies

- Methods: [[methods/Cu-electroplating-acid-bath]], [[methods/light-induced-plating]], [[methods/electroplated-Ni-Cu-stack]], [[methods/NOBLE-selective-Cu-plating]], [[methods/photolithography-mask-patterning]], [[methods/inkjet-mask-patterning]]
- Reagents: [[reagents/acid-Cu-sulfate-bath]], [[reagents/inkjet-plating-resist]], [[reagents/sulfuric-acid-H2SO4]]
- Step kinds: plating, characterization

## Severity rationale

High. The Cupracid TDS explicitly flags additive ratio drift as the cause of mushrooming, and the failure compounds with [[failure-modes/plating-resist-undercut]] and [[failure-modes/Jsc-loss-from-cap-stack-shading]]. Severity is high because the failure is bath-chemistry-driven (process-control problem with established mitigation: Hull-cell QC, additive replenishment, pulsed plating), but it is the dominant non-resist mechanism by which finger geometry deviates from spec.

## Citing sources

- [[sources/atotech-cupracid-ultra-a-tds]] — *the* canonical reference: bright additives (leveler/brightener Part A/B) directly govern deposit isotropy; off-spec ratio causes mushrooming. Specifies bath operating window, Hull-cell QC procedure, and additive replenishment schedule. Includes filtration spec (5 µm media, 2–3 turnovers/hr) and operating temperature 24–28 °C beyond which additives degrade.
