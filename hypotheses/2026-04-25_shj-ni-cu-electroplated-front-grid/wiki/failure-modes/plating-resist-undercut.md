---
type: failure-mode
slug: plating-resist-undercut
severity: medium
frequency_estimate: "NOBLE-route avoids organic resist entirely (Hatt 2019 SolRRL) — 'plating-resist-undercut' is structurally absent. CSEM resist-route reaches 24.1 % efficiency but with several µm of bare Cu flank exposed (Hatt 2019 quote: 'on the contact flank, only few nanometers of Cu are not protected by Ag in comparison to the Resist route which lets several micrometers un-capped')."
applies_to_methods: [Cu-electroplating-acid-bath, photolithography-mask-patterning, inkjet-mask-patterning, NOBLE-selective-Cu-plating]
applies_to_reagents: [acid-Cu-sulfate-bath, inkjet-plating-resist, ITO-transparent-conductive-oxide]
applies_to_step_kinds: [etch, plate]
sources: [2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, notion-systems-solar-inkjet-overview]
tags: [resist, undercut, mask-failure, mushroom-finger, isotropic-etching, plating]
---

# Plating-resist undercut

## What it is
In resist-based plating routes (CSEM photoresist, hot-melt inkjet ink), an organic mask is patterned with line-shaped openings, and Cu is electrodeposited only into the openings. Two modes degrade the resulting line geometry. (i) *Mushroom-finger overplate*: Cu deposits more than the resist height, then plates laterally over the resist edges, producing a T-shaped finger with shading width >> base width. (ii) *Resist undercut*: acid Cu bath chemistry slowly attacks the resist sidewall, especially at high current density or if the resist is undercured, producing a wider opening at the base than at the surface; the resulting "trumpet-shaped" finger has poor adhesion and unpredictable contact area. Both modes degrade line resolution, raise shading, and create flank exposures (un-capped Cu on the side of the line) where corrosion can initiate. Hatt 2019 explicitly contrasts this with NOBLE — which avoids organic resist entirely and leaves only nanometres of un-capped Cu on flanks vs micrometres for the resist route ([[2019-hatt-noble-shj-solrrl]] Sec. 4.2).

## How it manifests
- SEM cross-section shows mushroom-shape (T-line) or trumpet-shape (V-line) cross-section instead of intended rectangular profile.
- Shading width 1.5–2× base width.
- Flank exposure: micrometres of bare Cu visible on side of finger after cap deposition.
- Reduced adhesion (peel test) at high-curvature flank.
- Increased post-DH degradation rate due to greater Cu/encapsulant interface area (couples to [[Cu-finger-corrosion-encapsulant]]).

## How to detect it
- SEM / FIB cross-section of fingers post-plating and post-cap deposition.
- Optical profilometry: W_top vs W_base measurement; |W_top − W_base| ≤2 µm acceptable.
- Aspect ratio target: ≥1.0 with vertical walls.
- Optical inspection: T-shape or trumpet-shape detectable at 50× magnification.
- [[../methods/peel-test-90deg]] — flank-exposed fingers show reduced adhesion.

## Mitigation (specific actions, not vague advice)
- Use NOBLE process — avoids organic resist by using PVD-Al + native Al₂O₃ as the plating-inhibition layer ([[2019-hatt-noble-shj-solrrl]]).
- For resist routes: cure resist fully (≥120 °C, ≥10 min for hot-melt inks; full UV exposure for photoresists) and use bath additives (organic levellers, suppressors) to limit deposition rate at line edges.
- Stop plating at exactly resist-height to avoid mushroom; use coulometric or thickness sensors to terminate plating precisely.
- Use pulse-reverse plating (Hatt 2019: 15 ms forward / 1 ms reverse) — the reverse pulse preferentially dissolves overplate.
- Choose hot-melt resist with high glass-transition T (not water-soluble at room temperature) and low solubility in acidic Cu bath; Notion Systems and PiXDRO/Meyer Burger supply industrial-grade chemistries ([[notion-systems-solar-inkjet-overview]]).
- Specify acceptance: |W_top − W_base| ≤2 µm; aspect ratio ≥1.0; SEM verification on every batch.

## Severity ranking justification
Medium: not present at all in the NOBLE process flow (which the hypothesis can default to), and fully mitigatable in resist routes by chemistry/process tuning. Cost is up to 1.5× shading width and reduced module-level adhesion if uncontrolled — significant but not hypothesis-breaking.

## Sources
- `[[2019-hatt-noble-shj-solrrl]]` — direct contrast: NOBLE leaves nm of un-capped flank vs µm in resist route; canonical mitigation argument.
- `[[2019-hatt-noble-bifacial-shj-aip]]` — full-area large-cell validation of resist-free flow.
- `[[notion-systems-solar-inkjet-overview]]` — equipment-vendor reference for hot-melt inkjet route alternatives.
