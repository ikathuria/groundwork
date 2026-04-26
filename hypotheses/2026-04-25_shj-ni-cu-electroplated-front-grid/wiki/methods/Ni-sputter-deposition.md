---
type: method
slug: Ni-sputter-deposition
aliases: [PVD-Ni, sputtered Ni seed, magnetron-sputtered nickel, Ni PVD]
related_methods: [electroplated-Ni-Cu-stack, electroless-Ni-deposition, Cu-electroplating-acid-bath, NOBLE-selective-Cu-plating, photolithography-mask-patterning]
key_reagents: [a-Si-H-passivation, ITO-transparent-conductive-oxide, acid-Cu-sulfate-bath, nickel-sulfamate-bath]
known_failure_modes: [Ni-barrier-pinholes, Cu-diffusion-into-c-Si, Cu3Si-formation-at-Si-interface, finger-adhesion-loss-after-DH]
sources: [2018-electrochemsci-barrier-properties-electroplated-ni, 2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2019-hatt-noble-bifacial-shj-aip]
tags: [PVD, sputter, nickel, seed-layer, barrier, magnetron]
created: 2026-04-26
updated: 2026-04-26
---

# Ni / PVD seed sputter deposition

**Slug:** `methods/Ni-sputter-deposition` · **Type:** method

## What it measures / does

Magnetron-sputtered Ni (or Ni-V, NiCr, or PVD-Cu/Al/Ag stacks) deposited onto the front-side TCO as a thin seed/adhesion/barrier layer for subsequent Cu electroplating. In SHJ practice the "Ni-sputter-deposition" slug is broader than literal Ni: it covers any PVD seed deposited at low temperature compatible with the SHJ a-Si:H thermal budget (Cu/Al stack in NOBLE, NiV adhesion layer at CSEM, sputtered Cu seed at SunDrive's earlier process generations). This method is structurally equivalent to "PVD-Ni" — flag for lint pass.

## When to use it

Use it when a uniform, fully-conformal seed layer is required to start DC Cu plating on the TCO — particularly when (a) inkjet/photolithographic resist will define the plating window and the seed must be globally conductive, or (b) when the Ni-on-Si silicide barrier mechanism (Cheng 2018) is desired and electroless Ni is unavailable. NOBLE uses sputtered Cu/Al (Hatt 2019) as both the conductive seed and (via the Al's native oxide) the plating mask.

## Key parameters / setpoints

- **Process:** DC or RF magnetron sputtering at <100 °C substrate temperature; SHJ-compatible.
- **Thickness:** 30–500 nm depending on role — thin (50 nm) for adhesion, thicker (200–500 nm) for buffer / barrier.
- **Stack examples:** Cu/Al (NOBLE: 100 nm Cu / 50 nm Al), Ti/Cu, NiV/Cu, Cu seed alone (SunDrive earlier process).
- **Sputter target:** elemental Ni or Ni-V (V suppresses ferromagnetism for magnetron stability).
- **Tool:** in-line PVD cluster tool with mask shadow (route 3B in Faes 2018) or full-area deposition followed by patterning.

## Common variants

- **Cu/Al seed** (NOBLE) — Cu provides conductivity, Al's native oxide provides selective-plating mask.
- **Ag/Al seed** (NOBLE alternative) — replaces Cu with Ag for the conductivity layer.
- **NiV** — used as adhesion layer between Cu and TCO at CSEM.
- **Ti/Cu** — Ti as adhesion promoter.
- **Patterned PVD seed** (route 3B) — shadow-mask deposition only at grid positions; eliminates the etch-back step.
- **Full-area + etch-back** (route 3A in Faes 2018) — full PVD, then plate through resist, then etch unwanted seed.

## Things to watch for

- Deposition rate and substrate temperature must stay below the SHJ a-Si:H damage threshold (~200 °C); cold sputter is mandatory.
- Pinholes in thin Ni at <100 nm — Cheng 2018 indirectly contradicts: 60 nm electroplated Ni fails as Cu barrier; sputtered Ni at the same thickness has not been comprehensively tested in the SHJ regime, but the same geometric concern applies — see [[failure-modes/Ni-barrier-pinholes]].
- Etch-back of the unwanted PVD seed risks attacking the underlying TCO; Hatt 2019 demonstrates NaOH (1–4 %) etches Al at 0.8–2.6 nm/s without attacking Cu/Ag, and H₃PO₄/HNO₃ etches Cu/Ag fast (>10 nm/s) without TCO attack at controlled dwell.
- Sputter coverage on textured Si pyramids requires angle-tuning or rotation to avoid shadow-side pinholes.
- For the hypothesis, a key contradiction with the literature is that PVD-Ni or PVD-Cu/Al seed is the *industrial* SHJ-Cu route (NOBLE, SunDrive's earlier process) — *not* the electroplated-Ni barrier the hypothesis proposes.

## Related methods

- [[methods/electroplated-Ni-Cu-stack]] — the post-PVD plating stack.
- [[methods/electroless-Ni-deposition]] — chemical alternative for the same Ni barrier role.
- [[methods/Cu-electroplating-acid-bath]] — the downstream Cu thickening step.
- [[methods/NOBLE-selective-Cu-plating]] — built on PVD-Cu/Al sputter seed.

## Citing sources

- [[sources/2018-electrochemsci-barrier-properties-electroplated-ni]] — Cheng et al. compares electroplated Ni vs sputtering as the alternative; paper explicitly avoids sputtering, but it is the industrial reference.
- [[sources/2018-pv-international-metallization-shj]] — implicit in PVD-seed adhesion-layer discussions; CSEM Cu/Al stack.
- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — PVD seed (Ni or Cu/Al) referenced as one of the three SHJ Cu-plating process flows.
- [[sources/2019-hatt-noble-bifacial-shj-aip]] — PVD of the Cu/Al (or Ag/Al) seed and plating-mask stack (sputtering or e-beam evap).

> **Aliasing note:** This page is essentially "PVD seed deposition" rather than literally Ni-only sputtering. In NOBLE the seed is Cu/Al, not Ni. The slug `Ni-sputter-deposition` is somewhat misleading; the lint pass should consider promoting to `PVD-seed-deposition` and flagging electroplated/electroless Ni as a separate barrier mechanism.
