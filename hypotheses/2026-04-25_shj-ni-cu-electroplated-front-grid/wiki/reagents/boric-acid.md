---
type: reagent
slug: boric-acid
aliases: [orthoboric acid, H3BO3, hydrogen borate]
cas: 10043-35-3
suppliers:
  - name: Fisher Scientific
    catalog: "A73-500 (Boric Acid Crystalline, Certified ACS)"
    grade: ACS reagent ≥99.5 %
    url: https://www.fishersci.com/shop/products/boric-acid-crystalline-certified-acs-fisher-chemical-3/A73500
  - name: Sigma-Aldrich
    catalog: "B6768"
    grade: ACS reagent ≥99.5 %
    url: https://www.sigmaaldrich.com/US/en/product/sial/b6768
storage: ambient; dry, well-ventilated; keep container closed
hazards: medium — reproductive toxin (H360FD); skin/eye irritant
known_failure_modes: [Ni-barrier-pinholes, TCO-pitting-during-plating]
sources: [atotech-cupracid-ultra-a-tds, fisher-AA8902018-nickel-sulfamate-hydrate]
tags: [pH-buffer, Ni-bath, sulfamate, additive]
created: 2026-04-26
updated: 2026-04-26
---

# Boric acid (H3BO3)

**Slug:** `reagents/boric-acid` · **Type:** reagent

## What it is

Boric acid (H3BO3) is a weak acid used at 30–45 g/L as a **pH buffer** in nickel-sulfamate (and Watts) plating baths. It stabilizes the cathode-film pH during Ni deposition, preventing localized pH excursions that cause hydroxide co-deposition, pitting, and brittle Ni films.

## Common uses (in this corpus)

In this corpus boric acid is a make-up component of the [[reagents/nickel-sulfamate-bath]] used to plate the sub-100 nm Ni barrier in the Ni/Cu stack. It is **not** used in the [[reagents/acid-Cu-sulfate-bath]] (Atotech Cupracid TDS confirms this — the Cu bath uses CuSO4 + H2SO4 + Cl⁻ + organic additives, no borate). Boric acid is therefore a Ni-side-only reagent in the workflow.

## Properties / specifications

- Formula: H3BO3 (orthoboric acid); MW 61.83 g/mol.
- CAS: 10043-35-3.
- Use concentration in Ni-sulfamate baths: 30–45 g/L (~0.5–0.7 M).
- pKa1: ~9.24 (weak acid; the buffering action in plating baths is via complex equilibria, not classical Brønsted buffering).
- Solubility: ~5 % w/w at 25 °C, increasing with temperature.
- Hazard: GHS reproductive toxin Category 1B (H360FD); EU-classified. PPE required.

## Suppliers

- Fisher Scientific — A73-500 (500 g, ACS reagent ≥99.5 %); URL https://www.fishersci.com/shop/products/boric-acid-crystalline-certified-acs-fisher-chemical-3/A73500
- Sigma-Aldrich — B6768 (ACS reagent ≥99.5 %); URL https://www.sigmaaldrich.com/US/en/product/sial/b6768
- Thermo Scientific Chemicals (Alfa Aesar legacy SKUs) — multiple sizes.

## Alternatives

- Citrate / sulfate buffer mixes (less common in PV-grade Ni baths).
- Bath chemistries that omit boric (e.g. some additive-buffered Ni-sulfamate variants developed in response to EU REACH SVHC listing of boric acid).

## Gotchas / failure modes

- [[failure-modes/Ni-barrier-pinholes]] — under-dosed boric leads to localized pH spikes and Ni hydroxide co-deposition, increasing pinhole density in the sub-100 nm barrier.
- [[failure-modes/TCO-pitting-during-plating]] — secondary risk if pH control fails and bath becomes locally aggressive.

## Citing sources

- [[sources/fisher-AA8902018-nickel-sulfamate-hydrate]] — Fisher catalog page for Ni(II) sulfamate names boric acid as the pH-buffer companion in Watts/sulfamate Ni baths.
- [[sources/atotech-cupracid-ultra-a-tds]] — Atotech Cupracid TDS is referenced *by negation* (boric is **not** in the acid-Cu bath; it belongs only in the Ni-side bath).
