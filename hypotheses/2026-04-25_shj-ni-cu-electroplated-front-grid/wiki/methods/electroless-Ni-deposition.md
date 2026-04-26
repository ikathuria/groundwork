---
type: method
slug: electroless-Ni-deposition
aliases: [electroless Ni-P plating, autocatalytic Ni deposition, Ni-P seed]
related_methods: [electroplated-Ni-Cu-stack, light-induced-plating, laser-ablation-of-dielectric, four-point-probe-sheet-resistance]
key_reagents: [nickel-phosphorus-NiP-electroless, sulfuric-acid-H2SO4]
known_failure_modes: [Ni-barrier-pinholes, Cu-diffusion-into-c-Si, Voc-degradation-Cu-contamination, FF-degradation-contact-resistance]
sources: [2010-bartsch-lip-pvsc, 2014-rehman-nicu-plating-csi-review, 2017-jeon-electroless-ni-front-metallization, 2018-electrochemsci-barrier-properties-electroplated-ni, fisher-AA8902018-nickel-sulfamate-hydrate, fisher-AC424525000-sulfuric-acid-acs-sds, pvtech-metallization-challenges-cell-manufacturing]
tags: [plating, autocatalytic, Ni-P, hypophosphite, native-oxide, silicide, seed-layer]
---

# Electroless Nickel Deposition

## What it measures / does
Autocatalytic chemical reduction of Ni2+ from a nickel salt (NiSO4 or NiCl2) by sodium hypophosphite onto an activated Si/TCO surface, producing a Ni-P alloy film (typically 5-15 at% P) without external current. The film serves as the diffusion-barrier seed below electroplated Cu and, on PERC/homojunction, is annealed to form Ni-silicide (NiSi/Ni2Si) for ohmic contact.

## When to use it
Used as the Ni barrier seed in two-step Ni/Cu plating, particularly for laser-ablated-dielectric PERC or buried-contact cells. On SHJ, electroless Ni-P is less common because the SHJ thermal budget (<=200 C) prevents silicide formation; instead, electroplated Ni or PVD Ni/Cu seeds are used. Critical pretreatment: SnCl2/HCl sensitization + PdCl2/HCl(/HF) activation.

## Key parameters
- Bath: NiSO4·6H2O + NaH2PO2·H2O at ~70 C, pH 5.
- Deposition rate: ~1 nm/s on textured Si (Hsieh 2017; Cheng 2018).
- Continuous coverage threshold: ~45 nm minimum thickness for pinhole-free film (Hsieh 2017).
- Activation: PdCl2/HCl alone (B1) gives Voc 0.590 V; PdCl2 + 3 mL/L HCl + 83 mL/L HF (B2) gives Voc 0.632 V (+42 mV) by removing the native SiOx that otherwise blocks silicide formation.
- Anneal (PERC): Ni2Si and NiSi at 300-700 C; NiSi2 + agglomeration above 700 C; sheet resistance drops 350-600 C, abruptly rises >700 C.
- Silicide thickness: 125-160 nm after 60 s plate + 500-600 C anneal.

## Common variants / alternatives
- [[electroplated-Ni-Cu-stack]] — DC-electroplated Ni replaces electroless Ni when current can be applied externally; dominant on SHJ with TCO front.
- [[Ni-sputter-deposition]] — PVD Ni avoids the native-oxide / activation problem entirely.
- [[light-induced-plating]] — light-supported electroless Ni from commercial bath as alternative to LIP-Ni.

## Things to watch for (failure modes)
- [[../failure-modes/Ni-barrier-pinholes]] — below ~45 nm thickness the Ni-P film is discontinuous and Cu reaches Si.
- [[../failure-modes/Cu-diffusion-into-c-Si]] — incomplete silicide / pinhole-mediated Cu transport produces deep-level recombination centres in c-Si.
- [[../failure-modes/Voc-degradation-Cu-contamination]] — Hsieh 2017 tracks Voc as the principal indicator; HF activation +42 mV.
- [[../failure-modes/FF-degradation-contact-resistance]] — native SiOx at the Ni/Si interface raises series resistance.

## Sources
- [[2010-bartsch-lip-pvsc]] — light-supported electroless Ni from commercial bath as alternative to LIP-Ni; Ni-Cu-Sn stack reaches 20.3% on FZ.
- [[2014-rehman-nicu-plating-csi-review]] — autocatalytic Ni-P mechanism with sodium hypophosphite reductant; review of bath chemistry variants.
- [[2017-jeon-electroless-ni-front-metallization]] — quantitative deposition rate (1 nm/s), continuity threshold (45 nm), HF activation +42 mV Voc.
- [[2018-electrochemsci-barrier-properties-electroplated-ni]] — canonical electroless-Ni / silicide / strip / electroplate / Cu workflow.
- [[fisher-AA8902018-nickel-sulfamate-hydrate]] — note: nickel sulfamate is for *electroplated* Ni, not electroless; included here for cross-reference (electroless uses NiSO4 + hypophosphite).
- [[fisher-AC424525000-sulfuric-acid-acs-sds]] — pre-clean H2SO4/H2O2 (piranha) of textured Si before sensitization.
- [[pvtech-metallization-challenges-cell-manufacturing]] — IMEC overview of buried-contact and laser-opened PERC routes using electroless Ni.
