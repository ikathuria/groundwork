---
type: method
slug: electroless-Ni-deposition
aliases: [electroless Ni-P, electroless nickel plating, autocatalytic Ni plating, EN plating]
related_methods: [electroplated-Ni-Cu-stack, Cu-electroplating-acid-bath, light-induced-plating, Ni-sputter-deposition, four-point-probe-sheet-resistance, laser-ablation-of-dielectric]
key_reagents: [nickel-phosphorus-NiP-electroless, nickel-sulfamate-bath, acid-Cu-sulfate-bath, boric-acid]
known_failure_modes: [Ni-barrier-pinholes, Cu-diffusion-into-c-Si, Cu3Si-formation-at-Si-interface, FF-degradation-contact-resistance, finger-adhesion-loss-after-DH]
sources: [2010-bartsch-lip-pvsc, 2014-rehman-nicu-plating-csi-review, 2017-jeon-electroless-ni-front-metallization, 2018-electrochemsci-barrier-properties-electroplated-ni, atotech-solar-industry-overview, fisher-AA8902018-nickel-sulfamate-hydrate]
tags: [plating, nickel, barrier, seed-layer, electroless, Ni-P]
created: 2026-04-26
updated: 2026-04-26
---

# Electroless Ni-P deposition

**Slug:** `methods/electroless-Ni-deposition` · **Type:** method

## What it measures / does

Deposits a Ni-P alloy layer (typically 6–12 wt% P) onto a seeded silicon or TCO surface autocatalytically, with no externally applied current — the reduction is driven by the hypophosphite (NaH₂PO₂) reducer in the bath. The film serves two roles: (a) the Ni acts as a Cu-diffusion barrier when later annealed to form NiSi/Ni₂Si silicide, and (b) it provides a conductive seed for subsequent Cu electroplating. SnCl₂/PdCl₂ activation (with HF) typically precedes plating to nucleate Ni on the textured Si surface.

## When to use it

Use it when a uniform, conformal Ni layer on textured Si is needed without external bias — particularly attractive on patterned SHJ where a wired cathode would be impractical. Hsieh 2017 establishes it as the canonical PV chemistry: NiSO₄/NaH₂PO₂ at pH 5 / 70 °C plates ~1 nm/s, continuous above 45 nm thickness. It is the foundation step in Cheng 2018's Ni-thickness-vs-barrier study and one of the routes Bartsch 2010 used for the Ni barrier under LIP-Cu.

## Key parameters / setpoints

- **Bath chemistry (Hsieh 2017):** NiSO₄·6H₂O + NaH₂PO₂·H₂O reducer + ammonium-citrate buffer + complexing agents; pH 4.5–5.5 (acidic family) or pH 8–10 (alkaline family); operating T = 60–90 °C (70 °C typical).
- **Plating rate:** ~1 nm/s on activated textured Si; thickness scales linearly with dwell (60 / 90 / 120 / 180 s gives 58 / 95 / 106 / 184 nm per Hsieh 2017 SEM cross-sections).
- **Activation:** SnCl₂ then PdCl₂ chemisorption; HF added to remove native SiO₂ (Hsieh 2017 reports significant Voc gain when HF is in the activation bath).
- **As-deposited film:** amorphous Ni-P alloy (6–12 wt% P depending on bath); becomes Ni₂Si / NiSi silicide on anneal (≥500 °C produces NiSi, the lowest-resistivity phase).
- **Continuity threshold:** ≥45 nm for continuous coverage on textured Si per Hsieh 2017; Cheng 2018 shows 60 nm electroplated Ni *fails* as Cu barrier at 300 °C while 120 nm holds — the sub-100 nm regime is the contested zone.

## Common variants

- **Light-supported electroless Ni** — Bartsch 2010 used illumination during electroless Ni to enhance plating uniformity on solar precursors.
- **Acidic vs alkaline NiP** — alkaline (citrate-buffered) baths give higher P content and lower stress; acidic baths (Hsieh 2017) give faster plating and easier waste handling.
- **Single-step seed + barrier** — electroless Ni-P fills both roles in one bath; later electroplated Ni or sputtered Ni can thicken the barrier (Cheng 2018 stack: electroless Ni → 500 °C silicide → HNO₃ etch → electroplated Ni → electroplated Cu).
- **Sulfamate-fed electroless** — when a sulfamate Ni feed salt is used (Fisher AA8902018), bath chemistry shifts toward lower internal stress and finer grain.

## Things to watch for

- Pinhole density at sub-100 nm thickness drives [[failure-modes/Ni-barrier-pinholes]] and [[failure-modes/Cu-diffusion-into-c-Si]] — Cheng 2018 is the contradiction anchor for the SHJ Ni/Cu hypothesis: 60 nm electroplated Ni shows Cu₃Si already at 300 °C.
- HF use during activation is a safety hazard (use HF-handling SOP); but skipping HF leaves native SiO₂ that raises series resistance — see Hsieh 2017.
- Bath stability: hypophosphite spontaneously decomposes; replenish on amp-hour-equivalent basis and watch for nodulation on the cathode plane.
- Anneal step is required to form NiSi/Ni₂Si silicide; the SHJ ≤200 °C process budget rules out high-T silicidation, so the *as-deposited* Ni-P must do barrier duty alone — a tighter constraint than homojunction work assumes.

## Related methods

- [[methods/electroplated-Ni-Cu-stack]] — the upstream/downstream pair that turns electroless Ni into the full plated finger.
- [[methods/Cu-electroplating-acid-bath]] — Cu thickening on the electroless Ni seed.
- [[methods/light-induced-plating]] — light-driven analogue that uses the cell as the cathode.
- [[methods/Ni-sputter-deposition]] — PVD alternative for the Ni barrier.
- [[methods/four-point-probe-sheet-resistance]] — film-quality characterisation.

## Citing sources

- [[sources/2010-bartsch-lip-pvsc]] — light-supported electroless Ni used as alternative for the diffusion barrier.
- [[sources/2014-rehman-nicu-plating-csi-review]] — primary seed-layer mode reviewed (NiSO₄/hypophosphite bath).
- [[sources/2017-jeon-electroless-ni-front-metallization]] — canonical experimental anchor: NiSO₄/NaH₂PO₂ / pH 5 / 70 °C / 1 nm/s; HF activation; NiSi formation at ≥500 °C.
- [[sources/2018-electrochemsci-barrier-properties-electroplated-ni]] — uses electroless Ni as the first-stage seed (60 s, 70 °C, pH 5) before silicidation in the 60-vs-120-nm barrier study.
- [[sources/atotech-solar-industry-overview]] — vendor-supplied electroless Ni / NiP chemistry for PV.
- [[sources/fisher-AA8902018-nickel-sulfamate-hydrate]] — supplier catalog for the Ni-source salt feeding electroless and sulfamate baths.
