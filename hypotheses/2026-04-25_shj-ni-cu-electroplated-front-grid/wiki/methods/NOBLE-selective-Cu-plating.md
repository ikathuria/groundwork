---
type: method
slug: NOBLE-selective-Cu-plating
aliases: [NOBLE process, Native Oxide Barrier Layer Electroplating, Fraunhofer NOBLE, Al-AlOx selective plating]
related_methods: [Cu-electroplating-acid-bath, electroplated-Ni-Cu-stack, Ni-sputter-deposition, inkjet-mask-patterning, laser-ablation-of-dielectric, transfer-length-method, peel-test-90deg]
key_reagents: [acid-Cu-sulfate-bath, ITO-transparent-conductive-oxide, silver-Ag-cap, a-Si-H-passivation]
known_failure_modes: [TCO-pitting-during-plating, plating-resist-undercut, Cu-finger-oxidation-damp-heat, a-Si-H-passivation-degradation, FF-degradation-contact-resistance]
sources: [2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, 2021-hatt-stable-cu-plated-shj-eupvsec]
tags: [NOBLE, Cu-plating, SHJ, Fraunhofer-ISE, Al-AlOx, selective-plating, signature-method]
created: 2026-04-26
updated: 2026-04-26
---

# NOBLE: Native Oxide Barrier Layer for selective Electroplating

**Slug:** `methods/NOBLE-selective-Cu-plating` · **Type:** method

## What it measures / does

Fraunhofer ISE's flagship SHJ Cu-plating route. A thin sputtered Cu/Al (or Ag/Al) PVD stack is deposited onto the SHJ ITO. The aluminium top layer grows a native Al₂O₃ in ambient atmosphere; this alumina inhibits Cu electroplating everywhere it remains. NaOHaq inkjet-printed ink (or fs-UV laser ablation) selectively dissolves the Al only at grid positions, exposing the Cu seed beneath; bifacial Cu electrodeposition then proceeds *only* at the etched stripes. After plating, an immersion Ag cap covers the Cu, and (NH₄)₂S₂O₈ removes the unwanted PVD seed in non-grid areas.

## When to use it

Use it on SHJ when (a) a resist-mask-free selective plating is desired (saves consumables and one process step vs the resist route), (b) only ~5–10 % of the cell area needs to be patterned (vs >90 % for resist), and (c) bifacial Cu is wanted in a single bath dwell. It is the SHJ-specific implementation of the [[methods/electroplated-Ni-Cu-stack]] concept; Hatt 2019/2021 demonstrates competitive efficiency (22.6 % large-area, ρc 0.1–1 mΩ·cm², peel ≥ 2 N/mm) and explicitly considers it "mature enough to be tested on industrial pilot."

## Key parameters / setpoints

- **PVD stack:** Cu (~100 nm) / Al (~50 nm), sputtered cold (compatible with a-Si:H).
- **Al hydrophobic ageing:** 1 day at 50 °C / 6 % RH or ≥20 h at ambient to grow the Al₂O₃ to water contact angle 90–120°.
- **Inkjet ink:** dilute NaOHaq, droplet 2–5 pL; etches Al at 0.8–2.6 nm/s in 1–4 % NaOH without attacking Cu, Ag, ITO.
- **Cu plating:** acid CuSO₄/H₂SO₄ pulsed forward/reverse, 6 A/dm² medium current, 15 ms forward / 1 ms reverse, anodic:cathodic = 4.5; bifacial simultaneous deposition.
- **Cap layer:** immersion Ag (~200 nm) inhibits Cu oxidation.
- **PVD seed-layer etch-back:** H₃PO₄/HNO₃ blend etches Cu/Ag at >10 nm/s at room temperature without attacking ITO; (NH₄)₂S₂O₈ alternative for the Cu etch.
- **Performance (Hatt 2021):** 12 large-area M2 SHJ cells reach reproducible η ≈ 22.6 % vs Ag screen-print best 22.7 %; ρc 0.1–1 mΩ·cm², peel ≥ 2 N/mm.
- **Laser variant (Hatt 2021):** fs-UV (343 nm) replaces inkjet; first 21.4 % large-area cell, ρc 1.6 ± 0.3 mΩ·cm², ~10 mV Voc loss vs inkjet attributed to early-stage laser damage.

## Common variants

- **NaOHaq inkjet patterning** (Hatt 2019, baseline) — judged industrial-pilot-ready in 2021.
- **fs-UV laser patterning** (Hatt 2021) — higher throughput, modest Voc loss.
- **Ag/Al seed** (Hatt 2019) — alternative to Cu/Al if the conductivity layer should be Ag.
- **Photolithography baseline** — used internally for proof-of-concept before NOBLE.

## Things to watch for

- ITO non-attack is critical during seed-layer etch-back; SEM/Rsh verification is the standard quality gate (Hatt 2019: SEM confirms ITO thickness preserved).
- Al hydrophobicity is a process-window-sensitive parameter — too hydrophilic and the inkjet ink spreads beyond the line; too hydrophobic and droplets bead up. Document ambient ageing time/RH.
- For laser variant: fs-UV only avoids passivation damage in two operating regimes (high pulse energy + buffer Cu, or low pulse energy + multi-shot); outside those windows Voc drops noticeably.
- Cu finger oxidation between plating and Ag-capping is a process-time risk — minimise air exposure between the two.
- The native Al₂O₃ + Al stack is much thinner than a resist; check that bath additives don't undermine it during long Cu plating.

## Related methods

- [[methods/Cu-electroplating-acid-bath]] — bath chemistry NOBLE relies on.
- [[methods/electroplated-Ni-Cu-stack]] — broader concept NOBLE specialises.
- [[methods/Ni-sputter-deposition]] — the PVD-seed step under another name.
- [[methods/inkjet-mask-patterning]] — NaOHaq inkjet is the canonical NOBLE patterning.
- [[methods/laser-ablation-of-dielectric]] — fs-UV alternative.
- [[methods/transfer-length-method]] — ρc verification.
- [[methods/peel-test-90deg]] — adhesion verification (≥2 N/mm target).

## Citing sources

- [[sources/2019-hatt-noble-bifacial-shj-aip]] — bifacial scale-up; first full-area 156×156 mm² SHJ at 20.0 % via NOBLE.
- [[sources/2019-hatt-noble-shj-solrrl]] — canonical NOBLE Solar RRL paper introducing the route; first SHJ cell at 20.2 %.
- [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — large-area NOBLE 22.6 %; fs-UV laser variant introduced; "mature enough to be tested on industrial pilot."
