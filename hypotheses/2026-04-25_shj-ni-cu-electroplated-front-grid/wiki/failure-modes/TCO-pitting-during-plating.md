---
type: failure-mode
slug: TCO-pitting-during-plating
severity: high
frequency_estimate: "Acid-Cu bath operates at pH ≈ 1; ITO/IWO dissolves at any pinhole in the seed/Ni layer, especially at long dwell or high cathode current density (3.0 A/dm² optimum per Atotech Cupracid). Severity scales with seed-layer continuity: seedless or PVD-seedless routes (SunDrive direct adhesive plating) require proprietary chemistry control; sputtered-seed routes (NOBLE) confirm ITO thickness preserved by SEM."
applies_to_methods: [Cu-electroplating-acid-bath, light-induced-plating, electroplated-Ni-Cu-stack, photolithography-mask-patterning, NOBLE-selective-Cu-plating]
applies_to_reagents: [acid-Cu-sulfate-bath, sulfuric-acid-H2SO4, nickel-sulfamate-bath, ITO-transparent-conductive-oxide, IWO-tungsten-doped-indium-oxide, AZO-aluminum-doped-zinc-oxide]
applies_to_step_kinds: [plating, characterization]
sources: [2018-pv-tech-metallization-interconnection-bifacial-shj, 2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, atotech-cupracid-ultra-a-tds, fisher-AA8902018-nickel-sulfamate-hydrate, fisher-AC197730010-cu-sulfate-pentahydrate-sds, fisher-AC424525000-sulfuric-acid-acs-sds]
tags: [TCO, ITO, IWO, AZO, pitting, acid-attack, plating-bath, seed-discontinuity]
created: 2026-04-26
updated: 2026-04-26
---

# TCO pitting during plating

**Slug:** `failure-modes/TCO-pitting-during-plating` · **Severity:** high

## What it is

The acid-Cu sulfate plating bath operates at pH ≈ 1 (60 g/L H₂SO₄ in Cupracid Ultra). At this pH, [[reagents/ITO-transparent-conductive-oxide]] and [[reagents/IWO-tungsten-doped-indium-oxide]] are slowly dissolved; AZO is dissolved much faster. The Ni or PVD seed layer is the protective barrier — but at any pinhole or seed discontinuity, the bath etches the underlying TCO during the plating dwell, producing pits that (a) raise local TCO sheet resistance, (b) compromise the diffusion barrier the TCO is supposed to provide for [[failure-modes/Cu-diffusion-into-c-Si]], and (c) drive ρc instability across the cell. Hatt 2019 confirms ITO thickness preserved by SEM after the NOBLE etch-back; SunDrive's "adhesive direct plating" required proprietary chemistry tuning specifically to achieve plating-on-bare-TCO without pitting.

## How it manifests

- **Local TCO sheet-resistance rise** — measurable as series-resistance hot spots in dark IV.
- **Pits in TCO surface** visible by SEM cross-section after plating (the diagnostic).
- **Discoloration / loss of antireflective effect** in pitted regions — Jsc loss as a side effect.
- **Cu plating on c-Si or a-Si:H at pinhole locations** — the most catastrophic case: TCO pitting opens a direct Cu-to-Si path (cascades to [[failure-modes/Cu-diffusion-into-c-Si]] / [[failure-modes/Cu3Si-formation-at-Si-interface]]).
- **EL dark spots** under affected fingers post-plating.
- **Plating bath In contamination** detectable in bath analysis if dissolution is significant.

## How to detect it

- **SEM cross-section through finger and into surrounding TCO** before and after plating — direct evidence of pitting.
- **Sheet-resistance mapping (4-point probe)** of TCO before and after plating dwell — Δ Rsh > 5 % flags pitting.
- **TCO thickness measurement** by ellipsometry or stylus profilometry at exposed edge regions.
- **Bath analysis (ICP-MS or AAS)** for dissolved In or Sn content — quantifies TCO loss.
- **Cu-displacement decoration** of the Ni/seed layer on the TCO before plating — identifies pinholes that would lead to TCO pitting.
- **EL imaging post-plating + post-DH** — [[methods/EL-electroluminescence-imaging]]: localised dark spots persisting after thermal stress.
- **Optical / colorimetric** — pitted ITO loses its characteristic transparency uniformity.

## Mitigation

- **Shortest practical plating dwell** — the bath is mass-transport limited; faster plating at higher CD (within Cupracid spec: 3.0 A/dm² optimum, up to 6.0 A/dm²) reduces TCO exposure time.
- **Seed-layer continuity** — see [[failure-modes/Ni-barrier-pinholes]]: continuous Ni ≥120 nm or sputtered PVD seed (Cu/Al, NOBLE) eliminates exposed TCO during plating.
- **Bath chemistry within spec** — H₂SO₄ at 60 g/L (Cupracid Ultra), CuSO₄·5H₂O at 210 g/L; chloride 100 ppm; out-of-spec acid concentrations accelerate TCO etching.
- **Operating temperature 24–28 °C** (Cupracid) — higher T accelerates dissolution; bath chillers required for sustained production.
- **Pulsed plating** — Hatt 2019 NOBLE: 6 A/dm² with 15 ms forward / 1 ms reverse cycle; reduces effective dwell at any single point.
- **Ni-sulfamate bath at pH ≈ 4** for the Ni step (much milder than Cu-sulfate pH ≈ 1) — limits TCO attack during the barrier-deposition phase.
- **Stable-TCO selection** — IWO is more chemically stable than ITO; AZO is *less* stable and should be avoided in acid-Cu plating workflows. The Lachowicz 2024 thin-ITO + dielectric mask scheme deliberately uses dielectric protection during plating.
- **Edge-protection fixturing** — wafer carriers should mask cell edges where TCO is exposed.

## Where it applies

- Methods: [[methods/Cu-electroplating-acid-bath]], [[methods/light-induced-plating]], [[methods/electroplated-Ni-Cu-stack]], [[methods/photolithography-mask-patterning]], [[methods/NOBLE-selective-Cu-plating]]
- Reagents: [[reagents/acid-Cu-sulfate-bath]], [[reagents/sulfuric-acid-H2SO4]], [[reagents/nickel-sulfamate-bath]], [[reagents/ITO-transparent-conductive-oxide]], [[reagents/IWO-tungsten-doped-indium-oxide]], [[reagents/AZO-aluminum-doped-zinc-oxide]]
- Step kinds: plating, characterization

## Severity rationale

High. TCO pitting is the *gating* failure for plating directly onto SHJ TCO without a continuous Ni or PVD seed barrier; it is the failure mode that motivated NOBLE (PVD seed first) and that SunDrive's proprietary "adhesive direct plating" had to solve before commercial deployment. Severity is high because the failure compounds — TCO pitting at one stage opens the door to Cu-diffusion-into-c-Si — but mitigation is well-established (continuous seed, bath spec, dwell control).

## Citing sources

- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — implicit in route 3A (full-area PVD seed protects TCO) vs 3C (patterned seed exposes TCO).
- [[sources/2019-hatt-noble-bifacial-shj-aip]] — etch-back of PVD Cu/Al risks attacking ITO underneath if not selective; SEM confirms ITO thickness preserved.
- [[sources/2019-hatt-noble-shj-solrrl]] — selective wet etching characterised across Al, Cu, Ag, Ti, NiV; NaOH (1 %, 4 %) etches Al at 0.8–2.6 nm/s without attacking Cu/Ag, but acid-Cu bath at pH 1 is the residual hazard.
- [[sources/atotech-cupracid-ultra-a-tds]] — bath spec: 60 g/L H₂SO₄, pH ≈ 1, 24–28 °C operating window. Off-spec drives TCO attack.
- [[sources/fisher-AA8902018-nickel-sulfamate-hydrate]] — Ni-sulfamate bath at pH ≈ 4 is much milder; still attacks TCO at long dwell or high CD.
- [[sources/fisher-AC197730010-cu-sulfate-pentahydrate-sds]] — Cu source for the bath.
- [[sources/fisher-AC424525000-sulfuric-acid-acs-sds]] — acid component; the dominant pH driver.
