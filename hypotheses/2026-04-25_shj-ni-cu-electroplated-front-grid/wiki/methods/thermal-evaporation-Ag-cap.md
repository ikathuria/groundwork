---
type: method
slug: thermal-evaporation-Ag-cap
aliases: [thermal evaporation Ag, immersion Ag cap, e-beam Ag finishing]
related_methods: [NOBLE-selective-Cu-plating, Cu-electroplating-acid-bath, Ni-sputter-deposition]
key_reagents: [silver-Ag-cap, acid-Cu-sulfate-bath]
known_failure_modes: [Cu-finger-oxidation-damp-heat, Cu-finger-corrosion-encapsulant, Cu-out-diffusion-through-cap-stack]
sources: [2019-hatt-noble-shj-solrrl]
tags: [Ag-cap, evaporation, immersion-Ag, finishing, oxidation-protection, NOBLE]
---

# Thermal Evaporation Ag Cap

## What it measures / does
Deposits a thin silver capping layer (typically ~200 nm immersion or evaporated Ag) on top of the plated Cu finger. The cap protects the Cu from atmospheric and encapsulant oxidation, enables soldering with standard Pb-free or Pb-Sn ribbons, and (on the contact flank) leaves only a few nm of Cu un-capped vs the several um left exposed by organic-resist routes. Critical for plated-Cu reliability in encapsulated modules.

## When to use it
Final step in the NOBLE Cu plating flow: after Cu electroplating, immersion or evaporated Ag cap is applied, then PVD layers etched back (H3PO4/HNO3 at 50 C). For commercial SHJ Cu-plating (Maxwell, SunDrive), Sn cap is more common because it pairs with conventional ribbon soldering.

## Key parameters
- Cap thickness: ~200 nm Ag (NOBLE), ~1 um Ag (Karas full LIP stack), ~1 um Sn alternative.
- Method: immersion Ag (NOBLE) — galvanic displacement, no external bias; thermal evaporation in vacuum; e-beam.
- Process temperature: room temperature (immersion); evaporation chamber typical 25 C.
- Coverage: capping the *flank* of the finger is critical — NOBLE leaves only a few nm un-capped on the flank vs several um in resist routes.

## Common variants / alternatives
- Sn cap via LIP stannous bath — more common in commercial seed-and-plate flows.
- ENIG (electroless Ni + immersion Au) — used in PCB metallization, not standard for solar.
- Direct Cu finger without cap — fails DH due to oxidation.

## Things to watch for (failure modes)
- [[../failure-modes/Cu-finger-oxidation-damp-heat]] — primary purpose of the Ag cap; failure mode if cap is too thin or porous.
- [[../failure-modes/Cu-finger-corrosion-encapsulant]] — Ag cap mitigates EVA-acetic-acid attack on Cu.
- [[../failure-modes/Cu-out-diffusion-through-cap-stack]] — Karas 2022: even with Ag cap, Cu out-diffuses through grain boundaries after 1000-3500 h DH.

## Sources
- [[2019-hatt-noble-shj-solrrl]] — final NOBLE stack: PVD-Cu(50 nm) / plated-Cu(1-10 um) / immersion-Ag(~200 nm); on the contact flank only few nm of Cu are not protected by Ag (vs several um in resist routes).
