---
type: method
slug: electroplated-Ni-Cu-stack
aliases: [Ni/Cu plated grid, electroplated Ni-Cu, two-step seed-and-plate, Ni barrier + Cu finger, Ni/Cu/Ag stack, Ni/Cu/Sn stack]
related_methods: [Cu-electroplating-acid-bath, electroless-Ni-deposition, light-induced-plating, NOBLE-selective-Cu-plating, Ni-sputter-deposition, inkjet-mask-patterning, photolithography-mask-patterning, laser-ablation-of-dielectric, SIMS-depth-profile, transfer-length-method]
key_reagents: [nickel-sulfamate-bath, acid-Cu-sulfate-bath, nickel-phosphorus-NiP-electroless, silver-Ag-cap, tin-Sn-cap, ITO-transparent-conductive-oxide, a-Si-H-passivation, inkjet-plating-resist]
known_failure_modes: [Cu-diffusion-into-c-Si, Cu3Si-formation-at-Si-interface, Ni-barrier-pinholes, finger-adhesion-loss-after-DH, FF-degradation-contact-resistance, Cu-out-diffusion-through-cap-stack, Ni-Cu-line-resistance-rise-DH]
sources: [2014-rehman-nicu-plating-csi-review, 2018-electrochemsci-barrier-properties-electroplated-ni, 2018-pv-international-metallization-shj, 2018-pvtech-metallization-shj-cells-modules, 2019-hatt-noble-shj-solrrl, 2020-verlinden-future-challenges-tw-pv, 2021-goldschmidt-tech-learning-tw-pv, 2023-taiyangnews-heterojunction-technology-report, 2023-tepner-printing-tech-csi-review, 2024-itrpv-15th-edition-roadmap, atotech-solar-industry-overview, fisher-AA8902018-nickel-sulfamate-hydrate, fisher-AC197730010-cu-sulfate-pentahydrate-sds, fisher-AC424525000-sulfuric-acid-acs-sds, notion-systems-solar-inkjet-overview]
tags: [Ni-Cu, plated-grid, barrier, stack, metallization, the-hypothesis]
created: 2026-04-26
updated: 2026-04-26
---

# Electroplated Ni/Cu front-grid stack

**Slug:** `methods/electroplated-Ni-Cu-stack` · **Type:** method

## What it measures / does

The composite "two-step seed-and-plate" front grid: a thin Ni (or PVD-Ni / electroless Ni-P) barrier deposited first onto the patterned cell surface, followed by an electroplated Cu finger and an optional Sn or Ag oxidation cap. The Ni layer's job is to block Cu diffusion into c-Si (forming a NiSi/Ni₂Si silicide barrier on anneal where the thermal budget allows); the Cu provides the high-conductivity bulk; the cap protects Cu from atmospheric oxidation and from EVA-driven corrosion. This *is* the intervention the SHJ Ni/Cu hypothesis is testing.

## When to use it

Use it whenever silver paste must be replaced and a plated metallization is acceptable. On homojunction (PERC, IBC, Al-BSF) cells the stack pairs with high-T silicidation. On SHJ the ≤200 °C thermal budget changes the barrier story significantly — the Ni layer cannot fully silicide, so the *as-deposited* Ni and/or the SHJ TCO + a-Si:H stack must do barrier duty. SunDrive (2022) and the Faes/Geissbühler/CSEM line argue that on SHJ the TCO can replace the electroplated Ni; Cheng 2018 shows the Ni-only barrier requires ≥120 nm at 300 °C — sub-100 nm is in the failure regime per Cheng but defended by hypothesis context (lower SHJ temperatures).

## Key parameters / setpoints

- **Stack:** typically Ni 60–200 nm / Cu 10–20 µm / Ag or Sn cap ~1 µm.
- **Ni source:** electroplated from sulfamate bath (Watts-type, low-stress, pH ~4); or electroless Ni-P (Hsieh 2017 chemistry); or PVD-Ni (Ni-sputter).
- **Cu source:** acid CuSO₄/H₂SO₄ bath (Cupracid-class), 3 A/dm² DC or pulsed (NOBLE 6 A/dm² 15/1 ms).
- **Cap layer:** thermal-evaporated Ag, immersion Ag (~200 nm), or LIP Sn (~1 µm).
- **Mask:** inkjet hot-melt resist, photolithographic dry-film, or laser-ablated dielectric (SiNₓ/SiOₓ); CSEM 3-step process uses a printed seed-grid + PECVD dielectric where the dielectric is naturally discontinuous on paste particles.
- **Performance targets:** finger width 20–30 µm; line resistance 0.5–1 Ω/cm (5× lower than fine-line LCT-Ag); ρc 0.1–4 mΩ·cm² on ITO (Hatt 2019/2021).

## Common variants

- **NOBLE** — Fraunhofer ISE PVD-Cu/Al + inkjet-NaOH + plated Cu — see [[methods/NOBLE-selective-Cu-plating]].
- **SunDrive direct-to-TCO** — adhesive Cu plating without Ni or PVD seed; the TCO + a-Si:H supplies the diffusion barrier.
- **Cheng / Yunlin two-step electroplated Ni** — electroless Ni seed → silicide → electroplated Ni → electroplated Cu.
- **Atotech Ni/Cu/Ag commercial stack** — production-qualified for TOPCon and SHJ markets.
- **CSEM printed-seed-grid + dielectric + Cu plate** — three-step self-aligned route.

## Things to watch for

- Pinhole density at sub-100 nm Ni is the dominant failure: Cheng 2018 directly contradicts the hypothesis's "sub-100 nm Ni" framing — flag this in any plan.
- For SHJ, "Ni" is often a misnomer because the actual barrier is the TCO + a-Si:H stack, not an electroplated Ni layer (per SunDrive 2022, Faes 2018, Despeisse 2018).
- Adhesion of plated Cu directly to TCO is "problematic" per Geissbühler 2018; even with a Ni adhesion layer, micro-voids appear at the interface.
- The cap layer (Sn, Ag) must be engineered for long-term Cu retention under DH + EVA — Karas 2022 shows that 1-µm Ag and 1-µm Sn caps both leak under DH+EVA. Use POE encapsulant or thicker Cu₆Sn₅-forming Sn caps.
- ρc target ≤ 2 mΩ·cm² is the hypothesis spec; achievable with plating (NOBLE 0.1–4 mΩ·cm²) but not with paste Cu (5–12 mΩ·cm² per Pingel 2025).

## Related methods

- [[methods/Cu-electroplating-acid-bath]] / [[methods/electroless-Ni-deposition]] / [[methods/light-induced-plating]] — the three deposition modes that build the stack.
- [[methods/Ni-sputter-deposition]] — PVD alternative for the Ni layer.
- [[methods/NOBLE-selective-Cu-plating]] — SHJ-specific implementation that omits the electroplated Ni in favour of PVD seed + Al/Al₂O₃ mask.
- [[methods/inkjet-mask-patterning]] / [[methods/photolithography-mask-patterning]] / [[methods/laser-ablation-of-dielectric]] — patterning routes.
- [[methods/SIMS-depth-profile]] — definitive Cu-in-c-Si verification on the stack.
- [[methods/transfer-length-method]] — ρc measurement on the completed stack.

## Citing sources

- [[sources/2014-rehman-nicu-plating-csi-review]] — defines the canonical two-step Ni-seed + Cu-LIP stack.
- [[sources/2018-electrochemsci-barrier-properties-electroplated-ni]] — Cheng et al. 60 nm vs 120 nm electroplated Ni barrier study.
- [[sources/2018-pv-international-metallization-shj]] — Geissbühler/CSEM trade review of three SHJ Cu plating routes.
- [[sources/2018-pvtech-metallization-shj-cells-modules]] — "the standard process consists of the growth of a nickel-copper stack by plating."
- [[sources/2019-hatt-noble-shj-solrrl]] — bifacial Cu electrodeposition on PVD seed.
- [[sources/2020-verlinden-future-challenges-tw-pv]] — Cu plating cited as the only sustainable Ag replacement.
- [[sources/2021-goldschmidt-tech-learning-tw-pv]] — plating named as one of the routes to per-Wp Ag below screen-printing minima.
- [[sources/2023-taiyangnews-heterojunction-technology-report]] — Maxwell/SunDrive Ni/Cu/Sn or Cu/Sn industrial routes.
- [[sources/2023-tepner-printing-tech-csi-review]] — historical reference to "electroplated Cu layer after screen printing of metal pastes" as the early SHJ workflow.
- [[sources/2024-itrpv-15th-edition-roadmap]] — Cu-containing-metallization market-share trajectory.
- [[sources/atotech-solar-industry-overview]] — Ni/Cu/Ag stack as commercial product family.
- [[sources/fisher-AA8902018-nickel-sulfamate-hydrate]] — Ni source-salt feeding the barrier electrolyte.
- [[sources/fisher-AC197730010-cu-sulfate-pentahydrate-sds]] — Cu source-salt for the conductive layer.
- [[sources/fisher-AC424525000-sulfuric-acid-acs-sds]] — H₂SO₄ for the Cu bath.
- [[sources/notion-systems-solar-inkjet-overview]] — inkjet-resist-defined plating is the canonical mask flow for the stack.
