---
type: source
id: atotech-cupracid-ultra-a-tds
source_type: catalog
title: "Cupracid ULTRA — Acid Copper Plating Process (Technical Data Sheet)"
authors: ["Atotech"]
year: 2004
doi: ""
url: https://5.imimg.com/data5/SELLER/Doc/2022/1/OV/NO/WG/25460806/atotech-cupracid-ultra-a.pdf
raw_path: raw/catalogs/atotech-cupracid-ultra-a-tds.pdf
tags: [acid-Cu-bath, plating-electrolyte, Atotech, Cupracid, brightener, CuSO4, H2SO4, chloride, additives]
created: 2026-04-26
updated: 2026-04-26
---

# Cupracid ULTRA — Acid Copper Plating Process (Technical Data Sheet)

**Atotech** — *2004 (Issue 3, 14.01.2004; revised within the Atotech/MKS portfolio)*. URL: https://5.imimg.com/data5/SELLER/Doc/2022/1/OV/NO/WG/25460806/atotech-cupracid-ultra-a.pdf

## Summary

Atotech's commercial technical data sheet for the Cupracid ULTRA bright acid-Cu plating chemistry — a representative example of the industrial sulfuric-acid-based CuSO₄ electrolyte family used in PCB and PV plating lines. Documents the bath composition, operating window, additive regime (organic brightener Parts A/B + chloride), and analysis procedures that any SHJ Cu electroplating workflow must implement. Treated here as the reagent-stack reference for the [[reagents/acid-Cu-sulfate-bath]] entity.

## Key claims / specifications

- **Bath composition (optimum):** CuSO₄·5H₂O 210 g/L (range 195–255), H₂SO₄ 60 g/L (range 50–70), chloride 100 ppm (range 80–150), Cupracid ULTRA Make-up 1.0 % v/v, Part A 0.5 mL/L, Part B 0.5 mL/L.
- **Operating temperature:** 24–28 °C optimum; 20–30 °C usable. Higher temperatures degrade additive performance.
- **Cathode current density:** 3.0 A/dm² optimum (1.0–6.0 A/dm² range, 30 A/ft² optimum). Anode CD ≥0.5 A/dm² to maintain phosphorized-Cu black anode film.
- **Anodes:** phosphorized-Cu 0.03–0.06 % P content recommended; nuggets/balls in titanium baskets; bagged in dynel/polypropylene.
- **Filtration:** continuous through 5-µm media at 2–3× turnovers/hr — critical to avoid carbon-particle inclusions that produce matte/rough deposits.
- **Tank materials:** mild steel + hard rubber lining or PVC; anode bags in synthetic acid-resistant fabric.
- **Additive control method:** Hull-cell tests (2 A, 10 min, air-agitated) on incremental additions; Parts A/B never pre-mixed; both are added on amp-hour-consumed basis.
- **Make-up procedure:** dissolve CuSO₄ in DI water, treat with 0.2 kg/100 L plating-grade activated carbon (1 hr stirring, then filter), add H₂SO₄ slowly with PPE, add HCl + additives last; pre-electrolyze 2 amp-hours/L before production.
- **Analysis:** EDTA/murexide titration for Cu, NaOH/bromphenol-blue titration for H₂SO₄, AgNO₃/Hg(NO₃)₂ for chloride.
- **Output deposit:** "low-stressed, ductile, and bright copper deposits" suitable for PCB through-hole plating; family of chemistries used by Atotech in PV solar lines.

## Methods used

- [[methods/Cu-electroplating-acid-bath]] — this TDS is the canonical industrial reference recipe for the acid-Cu bath used in the Cu-plating step of the Ni/Cu stack.

## Reagents

- [[reagents/acid-Cu-sulfate-bath]] — primary entity this catalog populates: CuSO₄/H₂SO₄/Cl⁻/proprietary brightener formulation.
- [[reagents/sulfuric-acid-H2SO4]] — bath acid component (60 g/L, ~0.6 M).
- [[reagents/boric-acid]] — not used in acid-Cu bath (cross-reference: boric acid is for Ni-sulfamate baths only); included by negation to avoid confusion.

## Organisms / substrates

- [[organisms/SHJ-cell-M6]] — the SHJ wafer onto which the plated Cu finger is deposited via this chemistry.

## Failure modes flagged

- [[failure-modes/TCO-pitting-during-plating]] — pH ≈ 1 (sulfuric) bath dissolves ITO/IWO at any pinhole in the Ni or PVD-Cu seed; cathode current density 3.0 A/dm² also stresses TCO at edges.
- [[failure-modes/lateral-Cu-edge-migration]] — bright additives (leveler/brightener Part A/B) directly govern deposit isotropy; off-spec additive ratio causes mushrooming that overgrows the resist edge.
- [[failure-modes/plating-resist-undercut]] — with chloride > 150 ppm anodes polarise and bath leveling collapses, locally undercutting the resist.

## Supports / contradicts

- **Supports:** [[sources/2014-rehman-nicu-plating-csi-review]] — same acid-Cu chemistry described as standard for c-Si Cu plating.
- **Supports:** [[sources/2018-electrochemsci-barrier-properties-electroplated-ni]] — uses a sulfamate Ni / sulfate-Cu paired electrolyte system consistent with this TDS.
- **Supports:** [[sources/atotech-solar-industry-overview]] — Atotech's PV product page positions this Cupracid family as the production-proven acid-Cu chemistry for solar metallization.

## Notable quotes

> "Cupracid® ULTRA is a sulfuric acid-based copper plating process that produces low-stressed, ductile, and bright copper deposits. The additives are designed to operate at bath temperatures up to 86°F (30°C) without any noticeable loss in quality." — *Introduction, p. 1.*

> "Continuous filtration through 5-micron media is recommended. The filter turnover rate should be 2 - 3 times per hour." — *Operating Conditions, p. 2.*
