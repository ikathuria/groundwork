---
type: source
id: fisher-AA8902018-nickel-sulfamate-hydrate
source_type: catalog
title: "Nickel(II) Sulfamate Hydrate (Fisher Scientific AA8902018, Thermo Scientific Chemicals, CAS 13770-89-3)"
authors: ["Fisher Scientific"]
year: 2025
doi: ""
url: https://www.fishersci.com/shop/products/nickel-ii-sulfamate-hydrate-thermo-scientific/AA8902018
raw_path: raw/catalogs/fisher-AA8902018-nickel-sulfamate-hydrate.html
tags: [reagent-catalog, nickel-sulfamate, plating-electrolyte, Fisher, Thermo-Scientific, Ni-barrier, CAS-13770-89-3]
created: 2026-04-26
updated: 2026-04-26
---

# Nickel(II) Sulfamate Hydrate — Fisher Scientific AA8902018

**Fisher Scientific / Thermo Scientific Chemicals** — *2025 (current product listing)*. URL: https://www.fishersci.com/shop/products/nickel-ii-sulfamate-hydrate-thermo-scientific/AA8902018

## Summary

Catalog product page for the primary Ni-electrolyte salt — nickel(II) sulfamate hydrate, the industry-standard chemistry for Ni-barrier electroplating in c-Si solar Ni/Cu stacks. Provides the supplier, catalog numbers, CAS, and form data needed to populate the materials table for the hypothesis's Ni-barrier electroplating step. The bath built from this salt is described in the [[reagents/nickel-sulfamate-bath]] entity.

## Key claims / specifications

- **Chemical identity:** Nickel(II) sulfamate hydrate, formula H₄N₂NiO₆S₂ (anhydrous formula weight 250.85 g/mol), IUPAC name nickel(2+) disulfamate.
- **CAS:** 13770-89-3.
- **Synonyms:** nickel sulfamate, nickel bis-sulphamidate, Aeronikl 250/400/575 (commercial brand variants), nickel(2+) disulfamate.
- **Catalog numbers (Fisher / Thermo Scientific Chemicals):** AA8902018 (50 g), AA8902030 (250 g), AA89020A1 (1 kg).
- **Supplier item code:** Thermo Scientific Chemicals 08902018; legacy Alfa Aesar SKUs preserved through brand transition.
- **Physical form:** blue crystals, odourless, soluble in water.
- **Storage:** ambient temperature; SDS classification "Research Use Only" (RUO).
- **Hazard codes:** H317-H334-H341-H350i-H360D-H372 — skin/respiratory sensitiser, suspected carcinogen by inhalation, reproductive toxin, organ-target toxicity. EINECS 237-396-1, RTECS QR9275000. DOT class 9, packaging group III.
- **Use claim:** "Nickel(II) sulfamate is used as an electro plating and surface treating agent." (the canonical PV use case).

## Methods used

- [[methods/electroplated-Ni-Cu-stack]] — the Ni-sulfamate bath fed by this salt is the source of the Ni barrier in the stack.
- [[methods/electroless-Ni-deposition]] — distinct chemistry but related supplier ecosystem.
- [[methods/light-induced-plating]] — Ni-sulfamate baths are used in LIP-mode Ni deposition on c-Si.

## Reagents

- [[reagents/nickel-sulfamate-bath]] — primary entity this catalog populates (the bath is built from this salt + boric-acid pH buffer + brighteners + chloride-free Ni-anode pellets).
- [[reagents/boric-acid]] — pH-buffer companion in any Watts/sulfamate Ni bath.
- [[reagents/nickel-phosphorus-NiP-electroless]] — alternative chemistry (NaH₂PO₂-reduced) for the same Ni-barrier role.

## Organisms / substrates

- [[organisms/SHJ-cell-M6]] — the SHJ wafer onto which the Ni barrier is plated from the sulfamate bath.

## Failure modes flagged

- [[failure-modes/Ni-barrier-pinholes]] — the hazard the bath chemistry is engineered to minimise; Watts and sulfamate Ni baths produce low-stress films but pinhole density is current-density and additive-dependent.
- [[failure-modes/TCO-pitting-during-plating]] — Ni sulfamate baths run at pH ≈ 4 (much milder than acid Cu pH ≈ 1) but still corrode TCO at long dwell or high CD.
- [[failure-modes/Cu-diffusion-into-c-Si]] — the failure mode that Ni sulfamate plating is the *barrier* against; failure of the Ni layer exposes the Si bulk to Cu.

## Supports / contradicts

- **Supports:** [[sources/2014-rehman-nicu-plating-csi-review]] — review identifies Ni-sulfamate as the standard PV Ni-barrier chemistry.
- **Supports:** [[sources/2018-electrochemsci-barrier-properties-electroplated-ni]] — uses sulfamate-Ni bath for the barrier-property study.
- **Supports:** [[sources/2017-jeon-electroless-ni-front-metallization]] — alternative electroless route, citing sulfamate plating as the parallel benchmark.

## Notable quotes

> "Nickel(II) sulfamate is used as an electro plating and surface treating agent. It finds application in metal coloring and casting." — *Product Description.*

> "CAS: 13770-89-3 | H₄N₂NiO₆S₂ | 250.85 g/mol" — *Specifications.*
