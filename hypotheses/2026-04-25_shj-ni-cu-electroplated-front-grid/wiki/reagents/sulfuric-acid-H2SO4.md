---
type: reagent
slug: sulfuric-acid-H2SO4
aliases: [H2SO4, sulphuric acid, oil of vitriol]
cas: 7664-93-9
formula: H2SO4
suppliers:
  - name: Fisher / Acros Organics
    catalog: AC424520000 / AC424520025 / AC424520026 / AC424520100 / AC424525000 / AC424525001 / AC424528000
    grade: ACS reagent ≥95%
    url: https://www.fishersci.com/shop/products/sulfuric-acid-acs-acros-organics-2/AC424525000
storage: room-temperature, corrosives cabinet; dry, well-ventilated, locked area; in glass or HDPE; segregated from oxidisers / bases / organics / metals / peroxides
hazards: high — Skin/Eye Corrosion Cat 1 (causes severe burns), STOT-SE Cat 3 (respiratory irritation), Cal Prop 65 cancer warning (mists), reacts violently with water (always add acid to water)
known_failure_modes: [TCO-pitting-during-plating]
sources: [2014-rehman-nicu-plating-csi-review, 2017-jeon-electroless-ni-front-metallization, 2018-electrochemsci-barrier-properties-electroplated-ni, atotech-cupracid-ultra-a-tds, fisher-AC424525000-sulfuric-acid-acs-sds]
tags: [acid, electrolyte-component, pre-clean, conductivity-booster]
---

# Sulfuric acid (H2SO4)

## What it is
Concentrated sulfuric acid — the conductivity-boosting acid of the [[acid-Cu-sulfate-bath]] and a workhorse pre-plating clean. ≥95% H2SO4, ACS grade, MW 98.07 g/mol. In the SHJ-Ni/Cu front-grid plating workflow it (i) is a bath component at 50–70 g/L, (ii) participates in piranha pre-cleans with H2O2, and (iii) adjusts pH in [[nickel-sulfamate-bath]] make-up.

## Common uses
- Acid Cu plating bath: 50–70 g/L (60 g/L optimum) per Cupracid ULTRA TDS ([[atotech-cupracid-ultra-a-tds]]).
- Piranha pre-clean (H2SO4 / H2O2) of textured Si before Ni plating ([[2014-rehman-nicu-plating-csi-review]], [[2018-electrochemsci-barrier-properties-electroplated-ni]]).
- pH adjustment in Ni sulfamate baths ([[fisher-AC424525000-sulfuric-acid-acs-sds]]).
- Clean of Cu in TLM resistivity test pads (implicit across NOBLE work).

## Key spec / concentration ranges
- ≥95% H2SO4; density 1.840 g/mL; viscosity 21 mPa·s @ 25 °C.
- pH ≈ 1 (1 N aqueous); melting 10 °C; boiling 290 °C; decomposes 340 °C.
- Vapor pressure 1 mmHg at 146 °C.
- Exposure: ACGIH TLV TWA 0.2 mg/m³; OSHA PEL TWA 1 mg/m³ (vacated); NIOSH IDLH 15 mg/m³.
- NFPA: Health 3 / Flammability 0 / Instability 2 / Special W (water-reactive).
- Cu plating bath: 50–70 g/L (Cupracid ULTRA).
- Piranha (typical lab recipe): 3:1 v/v 96% H2SO4 : 30% H2O2; freshly prepared each use.

## Alternatives / variants
- HCl — alternative for activation steps but not for the Cu plating bath itself.
- Methanesulfonic acid — used in some Sn/Cu cap plating chemistries (lower H+ activity).
- HNO3 — in [[2019-hatt-noble-shj-solrrl]] H3PO4/HNO3 etch-back uses HNO3 as the Cu/Ag etchant.

## Gotchas
- ALWAYS add acid to water (large exotherm; spattering is a serious burn hazard).
- Reacts with finely-divided metals to evolve flammable H2 — store away from Cu, Ni powders.
- Do NOT use water on H2SO4 fires; use dry chemical or sand. Hazardous combustion: H2 and SOx.
- California Prop 65 cancer warning applies to acid mists — full face shield + scrubbed exhaust hood.
- Incompatible with strong oxidisers (HNO3/H2O2 ratio matters in piranha — exotherm is severe), bases, organics (charring), peroxides.

## Sources
- [[fisher-AC424525000-sulfuric-acid-acs-sds]] — full GHS/OSHA SDS, identity, hazard, exposure limits, storage, NFPA.
- [[atotech-cupracid-ultra-a-tds]] — bath concentration spec (50–70 g/L).
- [[2014-rehman-nicu-plating-csi-review]] — piranha pre-clean for ghost-plating mitigation.
- [[2017-jeon-electroless-ni-front-metallization]] — pre-clean of textured Si before Ni plating.
- [[2018-electrochemsci-barrier-properties-electroplated-ni]] — acetone / H2SO4-H2O2 / HF cleaning sequence specified.
