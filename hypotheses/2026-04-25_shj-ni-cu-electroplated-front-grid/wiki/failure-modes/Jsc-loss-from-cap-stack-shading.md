---
type: failure-mode
slug: Jsc-loss-from-cap-stack-shading
severity: medium
frequency_estimate: "ITRPV 2024: finger width 27 µm (2023) → 15 µm (2034) needed to recover ~1 % shading area. Plated Cu (NOBLE, Hatt 2021) achieves 25–30 µm finger width at production scale; SunDrive 2022 demonstrates 11 µm record-cell finger and pathway to <6 µm. Lorenz 2024: knotless screen-printed Ag now 23 µm shading width — fine-line gap closing rapidly."
applies_to_methods: [IV-curve-measurement, EQE-measurement, screen-printed-Ag-paste, NOBLE-selective-Cu-plating, inkjet-mask-patterning]
applies_to_reagents: [acid-Cu-sulfate-bath, tin-Sn-cap, silver-Ag-cap, low-T-Ag-paste-generic-SHJ-grade, Cu-paste-low-temperature]
applies_to_step_kinds: [plate, encapsulate, measure]
sources: [2023-taiyangnews-heterojunction-technology-report, 2023-tepner-printing-tech-csi-review, 2024-itrpv-15th-edition-roadmap, 2024-lorenz-cutting-edge-metallization-shj-fraunhofer]
tags: [shading, finger-width, Jsc, optical-loss, busbar-count, fine-line]
---

# Jsc loss from cap-stack shading

## What it is
The Cu/Sn/Ag finger-and-cap stack on the front side is opaque — its projected area on the cell directly subtracts from the active area for sunlight collection. For a typical SHJ cell with 27 µm finger width and 1 mm pitch, fingers cover ~2.7 % of the front, costing ~0.7 mA/cm² Jsc. Any cap-stack process that broadens the finger (LIP overplate, Sn cap on flanks, immersion Ag halo) increases shading. Conversely, narrower fingers improve Jsc but raise series resistance. The hypothesis target is "matching screen-printed silver" — meaning the Cu/Sn/Ag stack must achieve ≤30 µm shading width with ≤2 mΩ·cm² ρc, a balance currently demonstrated by NOBLE (25–30 µm, 0.1–1 mΩ·cm²) and SunDrive (≤11 µm with proprietary patterning).

## How it manifests
- Jsc 0.2–0.5 mA/cm² lower than expected from quantum-efficiency model for the active area.
- Finger profilometry shows wider-than-spec footprint (e.g., spec 25 µm, measured 35 µm with cap halo).
- EQE measurement at finger-aligned vs finger-perpendicular illumination shows non-uniform response.
- Total finger-shaded area >3 % of front (worst case 5–6 % for screen-printed Ag with 5BB busbars).

## How to detect it
- Optical microscopy + image processing: measure finger width (W_finger) and shading width (W_shadow); shading is typically 5–8 µm wider than the bare finger due to cap-stack geometry.
- [[../methods/IV-curve-measurement]] — Jsc deficit vs theoretical (active-area corrected).
- [[../methods/EQE-measurement]] — finger-aligned scans; Jsc loss localizes.
- 3D finger reconstruction by confocal microscopy or structured-illumination profilometry.
- Compare to ITRPV roadmap: 2023 baseline 27 µm; 2034 target 15 µm.

## Mitigation (specific actions, not vague advice)
- Use NOBLE or SunDrive-style fine-line patterning (inkjet NaOH on PVD-Al for NOBLE; proprietary mask for SunDrive) — both achieve ≤30 µm.
- Switch to multiwire / SmartWire interconnection (≥18 wires) — reduces finger-pitch sensitivity and allows narrower fingers; ITRPV projects busbarless 37 % market share by 2034 ([[2024-itrpv-15th-edition-roadmap]]).
- For knotless screen-printed Ag: 15 µm nominal finger width is now printable ([[2024-lorenz-cutting-edge-metallization-shj-fraunhofer]]) — Cu plating must beat or match.
- Use pulse-reverse plating to keep finger walls vertical (aspect ratio ≥1.0) — reduces shading-width-to-conductivity-ratio (SunDrive's chemistry achieves AR 1.0–1.2 vs <0.6 previously).
- Specify finger geometry: W_finger ≤25 µm at base, ≥7 µm height (aspect ratio ≥1.0); W_shadow ≤30 µm including cap.
- Acceptance: total finger+busbar shading ≤2.5 % of front area; Jsc deficit ≤0.3 mA/cm² vs active-area-only model.

## Severity ranking justification
Medium: causes ~1 %abs efficiency loss if uncontrolled but is fully recoverable by process tuning. The hypothesis target ("matching Ag screen-printed") is the right framing — Cu plating already wins on finger width at lab scale (NOBLE 25 µm vs Ag screen-print 27–40 µm) so the failure mode is more about "achieving the design width" than "the design width itself."

## Sources
- `[[2024-itrpv-15th-edition-roadmap]]` — finger-width roadmap; 27 → 15 µm by 2034.
- `[[2024-lorenz-cutting-edge-metallization-shj-fraunhofer]]` — knotless screen-print 15 µm nominal; shading 23 µm.
- `[[2023-taiyangnews-heterojunction-technology-report]]` — finger width 18.1 µm (Risen Laser PTP) vs 40 µm screen-print; busbar-count trade-off.
- `[[2023-tepner-printing-tech-csi-review]]` — printing-technology review.
