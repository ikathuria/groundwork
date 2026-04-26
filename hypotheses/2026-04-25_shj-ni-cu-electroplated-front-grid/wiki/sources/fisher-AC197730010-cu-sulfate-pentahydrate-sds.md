---
type: source
id: fisher-AC197730010-cu-sulfate-pentahydrate-sds
source_type: catalog
title: "Copper(II) Sulfate Pentahydrate Safety Data Sheet (Fisher Scientific AC197730010, CAS 7758-99-8)"
authors: ["Fisher Scientific"]
year: 2025
doi: ""
url: https://www.fishersci.com/store/msds?partNumber=AC197730010&productDescription=COPPER(II)+SULFATE+PENTA+1KG&vendorId=VN00032119&countryCode=US&language=en
raw_path: raw/catalogs/fisher-AC197730010-cu-sulfate-pentahydrate-sds.pdf
tags: [reagent-catalog, copper-sulfate, plating-electrolyte, SDS, Fisher, CAS-7758-99-8, acid-Cu-bath]
created: 2026-04-26
updated: 2026-04-26
---

# Copper(II) Sulfate Pentahydrate SDS — Fisher Scientific AC197730010

**Fisher Scientific** — *2025 (Revision Date 19-Dec-2025, Revision 10; created 19-Oct-2009)*. URL: https://www.fishersci.com/store/msds?partNumber=AC197730010

## Summary

Fisher Scientific Safety Data Sheet for copper(II) sulfate pentahydrate — the primary Cu source for the acid-Cu electroplating bath used in the hypothesis. Required materials-table entry for the Cu-electroplating step. Pairs with the H₂SO₄ SDS to define the chemistry of the [[reagents/acid-Cu-sulfate-bath]] entity (CuSO₄·5H₂O + H₂SO₄ + chloride + organic additives).

## Key claims / specifications

- **Identity:** Copper(II) sulfate pentahydrate, "Blue Vitriol", CuSO₄·5H₂O, CAS 7758-99-8, ≥95 % w/w by composition specification.
- **Catalog numbers (Fisher / Acros Organics):** AC197730000, AC197730010, AC197730050, AC197730250 (size variants).
- **Recommended use:** "Laboratory chemicals." Uses advised against: food, drug, pesticide, biocidal product use.
- **GHS hazard classifications:** Acute oral toxicity Cat 4; Serious Eye Damage Cat 1. Signal word **Danger**. Hazard statements: harmful if swallowed; causes serious eye damage.
- **Environmental hazard:** "Very toxic to aquatic life with long lasting effects" — relevant for plating-bath waste handling.
- **PPE:** protective gloves, clothing, eye + face protection; standard fume-hood handling.
- **Bath role:** Cu-source salt; in the Cupracid-style acid-Cu bath ([[sources/atotech-cupracid-ultra-a-tds]]) used at ~210 g/L (range 195–255 g/L), giving ~52 g/L Cu²⁺.

## Methods used

- [[methods/Cu-electroplating-acid-bath]] — CuSO₄·5H₂O is the Cu source for this bath.
- [[methods/light-induced-plating]] — same Cu-source salt used in LIP electrolytes.
- [[methods/electroplated-Ni-Cu-stack]] — the Cu layer of the stack is plated from a CuSO₄/H₂SO₄ bath built around this salt.

## Reagents

- [[reagents/acid-Cu-sulfate-bath]] — the entity CuSO₄·5H₂O is the primary make-up reagent for.
- [[reagents/sulfuric-acid-H2SO4]] — paired conductivity-additive for the same bath.

## Organisms / substrates

- [[organisms/SHJ-cell-M6]] — wafer format the plated Cu finger is deposited onto.

## Failure modes flagged

- [[failure-modes/TCO-pitting-during-plating]] — at off-spec CuSO₄/H₂SO₄ ratio the bath etches ITO at any pinhole in the seed layer.
- [[failure-modes/Cu-diffusion-into-c-Si]] — the deposited Cu, if not blocked by Ni, is the source of the lifetime-killing Cu interstitials in c-Si.
- [[failure-modes/Cu-finger-oxidation-damp-heat]] — the deposited Cu metal (originating from this salt) is the corrosion target during damp-heat aging.

## Supports / contradicts

- **Supports:** [[sources/atotech-cupracid-ultra-a-tds]] — Cupracid Ultra recipe explicitly calls out CuSO₄·5H₂O at 210 g/L as the bath's Cu source.
- **Supports:** [[sources/fisher-AC424525000-sulfuric-acid-acs-sds]] — companion SDS for the bath's acid component.
- **Supports:** [[sources/2014-rehman-nicu-plating-csi-review]] — review uses CuSO₄·5H₂O / H₂SO₄ as the canonical c-Si Cu-plating chemistry.

## Notable quotes

> "Product Name: Copper(II) sulfate pentahydrate. CAS No 7758-99-8. Synonyms: Blue Vitriol." — *§1 Identification.*

> "Acute oral toxicity Category 4; Serious Eye Damage/Eye Irritation Category 1. Signal Word: Danger." — *§2 Hazard identification.*

> "Very toxic to aquatic life with long lasting effects." — *§2 HNOC.*
