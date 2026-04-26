---
type: source
id: fisher-AA8902018-nickel-sulfamate-hydrate
source_type: catalog
title: "Nickel(II) sulfamate hydrate — Fisher / Thermo Scientific Chemicals (formerly Alfa Aesar)"
supplier: "Fisher"
catalog_number: "AA8902018 (50 g) / AA8902030 (250 g) / AA89020A1 (1 kg) — CAS 13770-89-3"
year: 2026
url: "https://www.fishersci.com/shop/products/nickel-ii-sulfamate-hydrate/AA8902018"
raw_path: raw/catalogs/fisher-AA8902018-nickel-sulfamate-hydrate.html
tags: [reagent-spec, supplier-data, ni-sulfamate, electrolyte-precursor, alfa-aesar, html]
---

# Nickel(II) sulfamate hydrate — Fisher / Thermo Scientific Chemicals (Alfa Aesar legacy)

## Summary
Web product page for the canonical Ni source used to make up nickel sulfamate plating baths — the standard low-stress Ni electrolyte for the thin Ni barrier layer in this hypothesis (sub-100 nm Ni between TCO and Cu). Fisher carries it via Thermo Scientific Chemicals (formerly Alfa Aesar) at three pack sizes: 50 g, 250 g, 1 kg. CAS 13770-89-3. The product page itself is sparse on bath-formulation guidance (it is a chemical SKU page, not a TDS) but provides the identity, hazard pictograms, GHS H-codes, and product-suggestion linkage for the lab procurement. Note: the synonyms list explicitly includes "aeronikl 250 / aeronikl 400 / aeronikl 575" — these are the well-known industry trade names for plating-grade Ni sulfamate solutions.

## Key product specs
- Identity: Nickel(II) sulfamate hydrate, CAS 13770-89-3.
- IUPAC name: nickel(2+) disulfamate.
- Formula: H4N2NiO6S2; molecular weight 250.85–250.86 g/mol (anhydrous basis).
- MDL: MFCD00137261; PubChem CID 83720.
- SMILES: [Ni++].NS([O-])(=O)=O.NS([O-])(=O)=O
- Synonyms: nickel sulfamate, nickel bis sulphamidate, nickel ii sulfamate, aeronikl 250, aeronikl 400, aeronikl 575, nickel 2+ disulfamate, sulfamic acid nickel 2+ salt 2:1.
- Appearance: blue crystals; odorless; soluble in water.
- Catalog numbers (Fisher / Thermo Scientific Chemicals, Alfa Aesar legacy):
  - AA8902018 — 50 g
  - AA8902030 — 250 g
  - AA89020A1 — 1 kg
- Hazard category (GHS H-codes): H317 (skin sensitizer), H334 (respiratory sensitizer / asthma), H341 (suspected mutagen), H350i (carcinogenic by inhalation), H360D (may damage fertility / unborn child), H372 (chronic target organ).
- Precautionary statements: P201, P202, P260, P264b, P270, P272, P280g, P281, P285, P302+P352, P304+P341, P308+P313, P333+P313, P342+P311, P363, P501c.
- DOT: Class 9, Packaging Group III.
- EINECS 237-396-1; RTECS QR9275000; TSCA listed.
- Storage: ambient temperatures.
- SDS classification: RUO (Research Use Only).
- Recommended use (per SDS): "electroplating and surface treating agent. Finds application in metal coloring and casting."
- Pricing: requires sign-in to view (account-gated).

## Reagents (linked entity)
- [[../reagents/nickel-sulfamate-bath]] — direct entity instantiation; nickel sulfamate is the canonical low-stress Ni plating chemistry, typically prepared at ~75-90 g/L Ni (300–400 g/L Ni(SO3NH2)2·xH2O), pH 3.5–4.5, with boric acid (~30–40 g/L) as buffer.
- [[../reagents/boric-acid]] — used together with Ni sulfamate to buffer the bath.

## Methods this product is used in
- [[../methods/Cu-electroplating-acid-bath]] — sequential step (Ni first, then Cu).
- [[../methods/electroless-Ni-deposition]] — *no*; this is for *electroplated* Ni baths. Electroless Ni uses NiSO4/hypophosphite chemistry, not Ni sulfamate.
- [[../methods/Ni-sputter-deposition]] — alternative non-plating route for the Ni barrier; Ni sulfamate is not used in PVD.

## Failure modes flagged
- Operator-safety hazards (carcinogenicity, reproductive toxicity, respiratory sensitization). Bath operation requires ventilation.
- [[../failure-modes/Ni-barrier-pinholes]] — not flagged on the product page but is the device-level failure mode the Ni layer is meant to mitigate; bath quality / additive control affects pinhole density.

## Notable quotes
- "CAS: 13770-89-3 | H4N2NiO6S2 | 250.85 g/mol. Nickel(II) sulfamate is used as an electro plating and surface treating agent. It finds application in metal coloring and casting." — Description
- "Hazard Category: H317-H334-H341-H350i-H360D-H372." — Safety and Handling
- "Synonym: nickel sulfamate, nickel bis sulphamidate, nickel ii sulfamate, aeronikl 250, aeronikl 400, aeronikl 575, …" — Specifications
