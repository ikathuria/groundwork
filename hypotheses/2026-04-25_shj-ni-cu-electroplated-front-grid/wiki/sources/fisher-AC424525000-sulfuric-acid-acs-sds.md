---
type: source
id: fisher-AC424525000-sulfuric-acid-acs-sds
source_type: catalog
title: "Sulfuric Acid ACS Reagent Safety Data Sheet (Fisher Scientific AC424525000, CAS 7664-93-9)"
authors: ["Fisher Scientific"]
year: 2025
doi: ""
url: https://www.fishersci.com/store/msds?partNumber=AC424525000&productDescription=SULFURIC+ACID+ACS+500ML&vendorId=VN00033901&countryCode=US&language=en
raw_path: raw/catalogs/fisher-AC424525000-sulfuric-acid-acs-sds.pdf
tags: [reagent-catalog, sulfuric-acid, plating-electrolyte, SDS, Fisher, CAS-7664-93-9, acid-Cu-bath]
created: 2026-04-26
updated: 2026-04-26
---

# Sulfuric Acid ACS Reagent SDS — Fisher Scientific AC424525000

**Fisher Scientific** — *2025 (Revision Date 19-Dec-2025, Revision 10; created 23-Jun-2009)*. URL: https://www.fishersci.com/store/msds?partNumber=AC424525000

## Summary

Fisher Scientific SDS for ACS-grade sulfuric acid — the conductivity / pH-determining additive for the acid-Cu electroplating bath used in the Cu-finger deposition step of the Ni/Cu stack. Materials-table entry; pairs with the CuSO₄·5H₂O SDS to populate the [[reagents/acid-Cu-sulfate-bath]] entity. The bath's pH ≈ 1 operating window is dictated by ~150–250 g/L H₂SO₄ in the make-up.

## Key claims / specifications

- **Identity:** Sulfuric acid, H₂SO₄, CAS 7664-93-9, ≥95 % w/w (ACS reagent grade).
- **Catalog numbers (Fisher / Acros Organics):** AC424520000, AC424520025, AC424520026, AC424520100, AC424525000, AC424525001, AC424528000.
- **Recommended use:** "Laboratory chemicals."
- **GHS hazard classifications:** Skin Corrosion Cat 1; Serious Eye Damage Cat 1; STOT-SE Cat 3 (respiratory). Target organ: respiratory system. Signal word **Danger**.
- **Hazard statements:** Causes severe skin burns and eye damage; may cause respiratory irritation. Prop 65 cancer warning (https://www.p65warnings.ca.gov/).
- **PPE:** protective gloves, clothing, full-face/eye protection, respirator if vapours expected; well-ventilated area or fume hood; store locked up; tightly closed container.
- **Bath role:** in the acid-Cu plating bath (e.g. Cupracid Ultra) used at 50–70 g/L (~0.6 M); raises bath conductivity, lowers operating voltage at given current density.

## Methods used

- [[methods/Cu-electroplating-acid-bath]] — H₂SO₄ is the conductivity additive for this bath.
- [[methods/light-induced-plating]] — same H₂SO₄ used in LIP-mode acid-Cu electrolytes.
- [[methods/electroplated-Ni-Cu-stack]] — the Cu finger layer is plated from a CuSO₄/H₂SO₄ acid bath built with this acid.

## Reagents

- [[reagents/sulfuric-acid-H2SO4]] — primary entity this SDS populates.
- [[reagents/acid-Cu-sulfate-bath]] — bath that uses H₂SO₄ at 50–70 g/L.

## Organisms / substrates

- [[organisms/SHJ-cell-M6]] — wafer format the Cu finger is plated onto from the H₂SO₄-acidified bath.

## Failure modes flagged

- [[failure-modes/TCO-pitting-during-plating]] — pH ≈ 1 acid-Cu bath dissolves ITO/IWO at pinholes; this acid is the dominant pH driver.
- [[failure-modes/plating-resist-undercut]] — high-acid baths attack inkjet plating-resist masks at the resist edge if dwell is excessive or temperature drifts up.

## Supports / contradicts

- **Supports:** [[sources/atotech-cupracid-ultra-a-tds]] — Cupracid Ultra recipe specifies 60 g/L H₂SO₄ (~0.6 M), achieved by addition of a stock acid like this one.
- **Supports:** [[sources/fisher-AC197730010-cu-sulfate-pentahydrate-sds]] — companion Cu-source SDS for the same bath.
- **Supports:** [[sources/2014-rehman-nicu-plating-csi-review]] — review uses identical CuSO₄/H₂SO₄ acid-Cu chemistry for c-Si plating.

## Notable quotes

> "Product Name: Sulfuric acid. CAS No 7664-93-9." — *§1 Identification.*

> "Skin Corrosion/Irritation Category 1; Serious Eye Damage/Eye Irritation Category 1; Specific target organ toxicity (single exposure) Category 3. Target Organs - Respiratory system. Signal Word: Danger." — *§2 Hazard identification.*

> "Causes severe skin burns and eye damage. May cause respiratory irritation." — *§2 Hazard statements.*
