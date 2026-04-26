---
type: failure-mode
slug: plating-resist-undercut
severity: high
frequency_estimate: "Photolithography ~20 µm rectangular fingers achievable; organic-resist routes (hot-melt inkjet) yield bevel-edged fingers ≥70 µm (Faes 2018). Bath chloride > 150 ppm causes anode polarisation and bath leveling collapse, locally undercutting the resist (Cupracid TDS spec)."
applies_to_methods: [Cu-electroplating-acid-bath, photolithography-mask-patterning, inkjet-mask-patterning, NOBLE-selective-Cu-plating, light-induced-plating]
applies_to_reagents: [acid-Cu-sulfate-bath, sulfuric-acid-H2SO4, inkjet-plating-resist]
applies_to_step_kinds: [plating, characterization]
sources: [2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2019-hatt-noble-shj-solrrl, atotech-cupracid-ultra-a-tds, fisher-AC424525000-sulfuric-acid-acs-sds, notion-systems-solar-inkjet-overview]
tags: [plating-resist, undercut, mushrooming, finger-width, resist-edge, bath-additives]
created: 2026-04-26
updated: 2026-04-26
---

# Plating-resist undercut and mushrooming

**Slug:** `failure-modes/plating-resist-undercut` · **Severity:** high

## What it is

The plating mask (photoresist, dry photosensitive film, or inkjet-printed hot-melt / NaOH ink) defines the lateral footprint of the plated finger. Under bath chemistry off-spec (additive ratio drift, chloride out of range, pH or temperature drift), the deposit can grow laterally beyond the resist opening — "mushrooming" — or the bath can attack the resist edge — "undercut". Both produce wider fingers than designed (Jsc penalty), variable line width across the cell (manufacturing-yield problem), and adhesion failures at the resist/finger interface. Faes 2018 reports organic-resist routes give bevel-edged fingers ≥70 µm — a direct manifestation of undercut/mushrooming. Photolithographic routes can give 20 µm rectangular fingers, but at industrial-prohibitive cost.

## How it manifests

- **Mushroomed finger profile** — laterally overgrown beyond the resist opening; SEM cross-section shows characteristic T-shape.
- **Wider effective finger** than designed — Jsc loss from increased shading (see [[failure-modes/Jsc-loss-from-cap-stack-shading]]).
- **Variable finger width** across the cell — directly visible in optical microscopy.
- **Adhesion failure at resist-removed regions** — undercut leaves voids at the Cu/TCO interface.
- **Bath additive degradation signature** — Hull-cell tests (Atotech Cupracid procedure) show off-spec leveling.
- **Poor finger sidewall verticality** — designed rectangular profile becomes trapezoidal or beveled.

## How to detect it

- **SEM cross-section through finger** — direct measurement of mushroomed profile and undercut at the resist edge.
- **Optical microscopy or confocal profilometry** — finger width and aspect ratio across the cell.
- **Hull-cell test** (Atotech Cupracid procedure: 2 A, 10 min, air-agitated) on incremental additive additions — identifies bath-chemistry drift before it shows up in plated cells.
- **Periodic bath analysis** — EDTA/murexide for Cu, NaOH/bromphenol-blue for H₂SO₄, AgNO₃/Hg(NO₃)₂ for chloride (Cupracid procedures).
- **Aspect ratio check** — SunDrive prototype line: aspect ratio 1.0–1.2 (vs 0.6 lab); higher aspect = better resist confinement. NOBLE: 25–30 µm finger width vs 30–40 µm screen-printed Ag.
- **Inkjet-printed resist quality** — Hatt 2019 NOBLE characterises water contact angle 30°→90°→100–120° as Al ages; resist printability depends on substrate hydrophobicity.

## Mitigation

- **Bath spec adherence** — Cupracid Ultra: CuSO₄·5H₂O 195–255 g/L, H₂SO₄ 50–70 g/L, chloride 80–150 ppm, brightener Parts A/B at 0.5 mL/L each on amp-hour-consumed basis. Out-of-spec chloride > 150 ppm causes anode polarisation and leveling collapse.
- **Continuous filtration** — 5 µm media at 2–3 turnovers/hour (Cupracid spec); carbon-particle inclusions produce matte/rough deposits and edge defects.
- **Pulsed plating** — Hatt 2019: 6 A/dm² with 15 ms forward / 1 ms reverse, anodic:cathodic 4.5; the reverse pulse "polishes" the deposit and reduces lateral overgrowth.
- **Photolithographic mask** for narrow-finger research-grade work — yields 20 µm rectangular fingers but is industrially expensive.
- **Inkjet hot-melt mask** (CSEM/Hermans 2014) — finger width <20 µm achievable; superior edge confinement vs liquid resist routes.
- **NOBLE Al/AlOx mask** — Hatt 2019: only ~5–10 % of cell area patterned (vs >90 % for resist), reducing the resist-edge problem to a small footprint.
- **Process temperature control** — 24–28 °C optimum (Cupracid); high temperature attacks resist edge.
- **Resist removal cleanliness** — inkjet resists must be cleanly stripped; residue causes adhesion failure (cascades to [[failure-modes/finger-adhesion-loss-after-DH]]).

## Where it applies

- Methods: [[methods/Cu-electroplating-acid-bath]], [[methods/photolithography-mask-patterning]], [[methods/inkjet-mask-patterning]], [[methods/NOBLE-selective-Cu-plating]], [[methods/light-induced-plating]]
- Reagents: [[reagents/acid-Cu-sulfate-bath]], [[reagents/sulfuric-acid-H2SO4]], [[reagents/inkjet-plating-resist]]
- Step kinds: plating, characterization

## Severity rationale

High. Resist undercut directly determines finger width, which determines Jsc shading loss and series resistance. Faes 2018's ≥70 µm bevel-edged finger is a 2× shading penalty vs the 30–40 µm screen-print baseline; the failure mode is what drove development of NOBLE (proprietary Al/AlOx mask) and SunDrive (proprietary mask + adhesive plating). Severity is high because the impact is immediate and quantitative; mitigation requires either capital-intensive photolithography or proprietary processes.

## Citing sources

- [[sources/2018-pv-international-metallization-shj]] — Geissbühler: hot-melt inkjet design controls finger edges; organic resist gives bevel-edged ≥70 µm.
- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — Faes: organic resist 70 µm vs photolithography 20 µm rectangular; cost trade-off.
- [[sources/2019-hatt-noble-shj-solrrl]] — NOBLE: only 5–10 % of cell area is patterned vs >90 % for resist route; argued away as a NOBLE advantage.
- [[sources/atotech-cupracid-ultra-a-tds]] — bath spec: chloride 100 ppm (range 80–150); off-spec causes anode polarisation and leveling collapse, locally undercutting the resist. Hull-cell QC procedure.
- [[sources/fisher-AC424525000-sulfuric-acid-acs-sds]] — high-acid baths attack inkjet plating-resist masks at the resist edge if dwell is excessive or temperature drifts up.
- [[sources/notion-systems-solar-inkjet-overview]] — vendor: inkjet plating-resist deposition is the canonical SHJ Ni/Cu workflow step; resist film thickness, sidewall profile, and adhesion all governed by inkjet equipment + ink combination.
