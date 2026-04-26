---
type: reagent
slug: sulfuric-acid-H2SO4
aliases: [sulphuric acid, oil of vitriol, H2SO4, hydrogen sulfate]
cas: 7664-93-9
suppliers:
  - name: Fisher Scientific
    catalog: "AC424525000 (500 mL, ACS reagent ≥95 %)"
    grade: ACS reagent ≥95 % w/w
    url: https://www.fishersci.com/store/msds?partNumber=AC424525000
  - name: Sigma-Aldrich
    catalog: "258105 (Sulfuric acid 95–98 %, ACS reagent)"
    grade: ACS reagent
    url: https://www.sigmaaldrich.com/US/en/product/sial/258105
  - name: Honeywell / VWR
    catalog: "Sulfuric acid 96 %, 25 L drums for plating-line make-up"
    grade: industrial / electronic
    url: https://www.honeywell.com
storage: tightly closed, locked-up cabinet; segregate from bases, organics, metals
hazards: critical — corrosive Cat 1 (skin/eye); STOT-SE Cat 3 (respiratory); Prop 65 cancer warning
known_failure_modes: [TCO-pitting-during-plating, plating-resist-undercut]
sources: [2010-bartsch-lip-pvsc, 2019-hatt-noble-shj-solrrl, atotech-cupracid-ultra-a-tds, fisher-AC197730010-cu-sulfate-pentahydrate-sds, fisher-AC424525000-sulfuric-acid-acs-sds]
tags: [acid, electrolyte-component, conductivity-additive, pH-driver, hazard-critical]
created: 2026-04-26
updated: 2026-04-26
---

# Sulfuric acid (H2SO4)

**Slug:** `reagents/sulfuric-acid-H2SO4` · **Type:** reagent

## What it is

Sulfuric acid (H2SO4) is the canonical conductivity / pH-determining additive for the [[reagents/acid-Cu-sulfate-bath]] and many other plating electrolytes. In the Cupracid Ultra recipe (Atotech) it is used at 50–70 g/L (~0.6 M) to set bath pH near 1 and raise conductivity, lowering operating voltage at given current density. Also used in cleaning / pre-treatment etches and in LIP-mode acid-Cu electrolytes.

## Common uses (in this corpus)

H2SO4 is the **acid component** of the Cu-plating electrolyte at every site that plates Cu in this corpus — Atotech Cupracid TDS specifies 60 g/L; Fisher AC424525000 SDS confirms ACS-grade sulfuric is the lab-grade make-up reagent; Hatt 2019 SolRRL uses sulfuric-acid acid-Cu in NOBLE; Bartsch 2010 PVSC uses it in LIP. The pH-1 environment it produces is the cause of the [[failure-modes/TCO-pitting-during-plating]] failure mode that limits Cu plating directly on bare ITO/IWO/AZO.

## Properties / specifications

- Formula: H2SO4; MW 98.08 g/mol.
- CAS: 7664-93-9.
- Concentration in acid-Cu bath: 50–70 g/L (~0.6 M); pH ≈ 1 in operating window.
- Concentration as sold: ACS reagent ≥95–98 % w/w.
- GHS: Skin Corrosion Cat 1; Serious Eye Damage Cat 1; STOT-SE Cat 3 (respiratory). Signal Word: Danger. Prop 65 cancer listing (occupational mist exposure).
- Density (95 %): 1.84 g/mL.
- Reactivity: exothermic dilution (always add acid to water, never water to acid); reacts violently with bases, organics, alkali metals.
- PPE: full chemical-splash goggles + face shield, neoprene/nitrile gloves, acid apron, lab fume hood; eye-wash + safety shower in plating-line proximity.

## Suppliers

- Fisher Scientific — AC424525000 (500 mL ACS reagent); URL https://www.fishersci.com/store/msds?partNumber=AC424525000
- Sigma-Aldrich — 258105 (Sulfuric acid 95–98 %, ACS reagent); URL https://www.sigmaaldrich.com/US/en/product/sial/258105
- Honeywell / VWR — industrial drums (25 L) for plating-line make-up.

## Alternatives

- Methanesulfonic acid (CH3SO3H) — alternative non-oxidizing strong acid for some plating chemistries; rare in PV Cu plating.
- Hydrochloric acid (HCl) — used in pre-clean steps but not as plating-bath acid (chloride at high concentration alters Cu deposit morphology).

## Gotchas / failure modes

- [[failure-modes/TCO-pitting-during-plating]] — pH ≈ 1 from H2SO4 dissolves ITO / IWO / AZO at any seed-layer pinhole; the dominant TCO-damage mechanism.
- [[failure-modes/plating-resist-undercut]] — high-acid baths attack inkjet plating-resist masks at the resist edge if dwell is excessive or temperature drifts up.

## Citing sources

- [[sources/fisher-AC424525000-sulfuric-acid-acs-sds]] — primary catalog source: SDS, hazard data, supplier.
- [[sources/atotech-cupracid-ultra-a-tds]] — Atotech recipe specifies 60 g/L H2SO4 (~0.6 M).
- [[sources/fisher-AC197730010-cu-sulfate-pentahydrate-sds]] — companion Cu-source SDS for the same bath.
- [[sources/2010-bartsch-lip-pvsc]] — LIP acid-Cu electrolyte uses H2SO4.
- [[sources/2019-hatt-noble-shj-solrrl]] — NOBLE process plates Cu from sulfuric-acid acid Cu bath.
