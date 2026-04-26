---
type: method
slug: light-induced-plating
aliases: [LIP, photo-induced plating, illuminated electroplating, light-induced Cu plating]
related_methods: [Cu-electroplating-acid-bath, electroless-Ni-deposition, electroplated-Ni-Cu-stack, Ni-sputter-deposition, NOBLE-selective-Cu-plating, laser-ablation-of-dielectric]
key_reagents: [acid-Cu-sulfate-bath, sulfuric-acid-H2SO4, nickel-sulfamate-bath, nickel-phosphorus-NiP-electroless, silver-Ag-cap, tin-Sn-cap]
known_failure_modes: [TCO-pitting-during-plating, Ni-barrier-pinholes, Cu-diffusion-into-c-Si, finger-adhesion-loss-after-DH]
sources: [2010-bartsch-lip-pvsc, 2014-rehman-nicu-plating-csi-review, 2018-pv-international-metallization-shj, 2019-karas-damp-heat-degradation-shj-cu, 2022-karas-cu-outdiffusion-damp-heat, 2023-taiyangnews-heterojunction-technology-report, fisher-AA8902018-nickel-sulfamate-hydrate, fisher-AC197730010-cu-sulfate-pentahydrate-sds, fisher-AC424525000-sulfuric-acid-acs-sds, pvtech-metallization-challenges-cell-manufacturing]
tags: [LIP, plating, light-induced, copper, nickel, photovoltage]
created: 2026-04-26
updated: 2026-04-26
---

# Light-induced plating (LIP)

**Slug:** `methods/light-induced-plating` · **Type:** method

## What it measures / does

Uses the cell's own photovoltage to drive electrodeposition: illuminating the front side generates a photocurrent that, through the cell's internal junction, biases the front contact cathodically with respect to the bath, plating Ni or Cu onto exposed seed regions without an external power supply. LIP was the canonical c-Si Cu metallization route from the 2000s onwards (foundational paper: Bartsch 2010); it remains in use for Ni / Cu / Ag / Sn cap plating in stacks where the seed cannot easily be wired (e.g., when using inkjet or laser-defined patterns on a non-conductive seed precursor).

## When to use it

Use it when (a) the front-side seed is not continuous enough for DC plating (e.g., laser-opened SiNₓ on a passivated PERC), (b) you want a self-limiting deposition mode that follows the photoactive area, or (c) you can tolerate a slower deposition rate than DC plating. On SHJ the front TCO is conductive, so most modern SHJ Cu-plating routes (NOBLE, SunDrive, CSEM 3-step) use *DC* plating; LIP is more common for the homojunction Ni/Cu literature this hypothesis builds on (Bartsch, Rehman) and for the cap layer on top of plated Cu (Karas 2019/2022 used LIP-Ag and LIP-Sn caps).

## Key parameters / setpoints

- **Bath chemistry:** acid CuSO₄/H₂SO₄ for Cu LIP; Ni-sulfamate or Ni-hypophosphite for Ni LIP; immersion-Ag or LIP-Ag for the cap.
- **Illumination:** 0.5–1 sun on the cell front; intensity sets the photocurrent and thus the plating rate.
- **Operating temperature:** 25–40 °C typical for Cu; 60–80 °C for Ni.
- **Plating rate:** ~10× faster than dark electroless on the same chemistry (Rehman 2014).
- **Ni LIP electrolyte:** essentially the electroless bath (NiSO₄ or NiCl₂ + NaH₂PO₂ + ammonium-citrate buffer at pH 8–10) operated under illumination.
- **Cu LIP electrolyte:** standard acid-Cu (CuSO₄·5H₂O 200 g/L + H₂SO₄ 50–70 g/L + Cl⁻ + brightener).

## Common variants

- **Ni LIP** — used for the seed/barrier in Bartsch 2010 (Fraunhofer ISE foundational paper).
- **Cu LIP** — used for the conductive layer; preferred for SHJ when DC plating is infeasible.
- **Ag LIP** — used for the immersion-Ag cap (NOBLE, Karas).
- **Sn LIP** — used for the Sn cap (Karas 2022, SunDrive variant).
- **Combined LIP + dark electroless** — Bartsch 2010 demonstrated light-supported electroless Ni as a hybrid.

## Things to watch for

- Plating rate is non-uniform across the cell area if illumination is non-uniform — careful illumination calibration is needed.
- Pinholes in the seed layer locally short-circuit the photovoltage drive, causing parasitic plating and TCO attack at the pinhole — see [[failure-modes/TCO-pitting-during-plating]].
- LIP rate is lower than DC plating, so industrial throughput is a concern for the thick-Cu step; SHJ commercial routes (SunDrive, Maxwell) have moved to DC plating on PVD seed.
- Bath impurities are concentrated by the photocurrent at the cathode; in-line filtration is critical.
- Karas 2022 specifically flags that LIP-deposited Cu/Sn/Ag caps carry impurities (S, Cl, C, O) into the deposit, which then enhance Kirkendall void formation under DH.

## Related methods

- [[methods/Cu-electroplating-acid-bath]] — DC alternative; same chemistry.
- [[methods/electroless-Ni-deposition]] — chemically related (Ni LIP is illuminated electroless).
- [[methods/electroplated-Ni-Cu-stack]] — the stack LIP commonly fills.
- [[methods/Ni-sputter-deposition]] — non-plated alternative for the Ni layer.
- [[methods/NOBLE-selective-Cu-plating]] — uses DC pulsed plating, not LIP, but the chemistry/cap layers overlap.

## Citing sources

- [[sources/2010-bartsch-lip-pvsc]] — foundational Fraunhofer ISE LIP paper introducing LIP for c-Si Ni/Cu metallization.
- [[sources/2014-rehman-nicu-plating-csi-review]] — Cu LIP from acid Cu-sulfate as the SHJ-friendly mode; review establishes the Ni LIP electrolyte chemistry.
- [[sources/2018-pv-international-metallization-shj]] — historical default for Cu-on-Si plating; CSEM uses PVD-seed-and-DC instead.
- [[sources/2019-karas-damp-heat-degradation-shj-cu]] — LIP-deposited Cu / Ag / Sn contact stacks under DH test.
- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — Ni / Cu / Sn / Ag LIP fabrication of contact stacks under test.
- [[sources/2023-taiyangnews-heterojunction-technology-report]] — referenced in the broader plating discussion.
- [[sources/fisher-AA8902018-nickel-sulfamate-hydrate]] — Ni-sulfamate bath used in LIP-mode Ni deposition.
- [[sources/fisher-AC197730010-cu-sulfate-pentahydrate-sds]] — Cu source-salt for LIP electrolytes.
- [[sources/fisher-AC424525000-sulfuric-acid-acs-sds]] — H₂SO₄ component in LIP-mode acid-Cu electrolytes.
- [[sources/pvtech-metallization-challenges-cell-manufacturing]] — IMEC review covers LIP as the canonical seed-thickening method.
