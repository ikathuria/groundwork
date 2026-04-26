---
type: source
id: atotech-cupracid-ultra-a-tds
source_type: catalog
title: "Cupracid® ULTRA — Acid Copper Plating Process — Technical Data Sheet"
supplier: "Atotech"
catalog_number: "Cupracid ULTRA Make-up / Part A / Part B"
year: 2004
url: "https://www.atotech.com"
raw_path: raw/catalogs/atotech-cupracid-ultra-a-tds.txt
tags: [reagent-spec, supplier-data, electrolyte, acid-copper-bath, brightener, leveler, tds]
---

# Cupracid® ULTRA — Atotech (acid Cu plating bath TDS)

## Summary
Atotech's flagship sulfuric-acid-based bright acid Cu plating process (TDS Issue 3, 14 Jan 2004 — replaces Issue 2 of 16 Jul 2002). It is the canonical industrial reference electrolyte for the front-grid Cu plating step in this hypothesis: a CuSO4·5H2O / H2SO4 / Cl⁻ bath with proprietary organic additives (Cupracid ULTRA Part A and Part B) producing low-stress, ductile, bright, leveled deposits. Atotech's general-metal-finishing branch later supplies these chemistries adapted for solar-cell metallization (see [[atotech-solar-industry-overview]]). This TDS gives the operating window — current density, temperature, agitation, anodes, additive ratios — that the hypothesis's plating protocol can be specified against.

## Key product specs
- Bath composition (optimum / range):
  - Copper sulfate pentahydrate (CuSO4·5H2O): 210 g/L (range 195–255 g/L).
  - Sulfuric acid (66° Baumé): 60 g/L (range 50–70 g/L).
  - Chloride: 100 mg/L (range 80–150 mg/L).
  - Cupracid ULTRA Make-up: 10 mL/L.
  - Cupracid ULTRA Part A: 0.5 mL/L (range 0.4–0.6 mL/L).
  - Cupracid ULTRA Part B: 0.5 mL/L (range 0.4–0.6 mL/L).
- Operating conditions:
  - Temperature: 24–28 °C optimum, 20–30 °C range (low-temperature bath — additives function up to 30 °C without quality loss).
  - Cathode current density: 3.0 A/dm² optimum, 1.0–6.0 A/dm² range (≈10–55 A/ft²).
  - Anode current density: ≥0.5 A/dm² to maintain a black anode film, range 0.5–2.5 A/dm².
  - Voltage: 1.0–4.0 V (up to 6 V depending on load); rectifier ripple ≤10%.
  - Agitation: cathode rod movement and/or low-pressure blower air; compressed air not acceptable; PVC sparger.
  - Filtration: continuous through 5 µm media at 2-3 turnovers/h.
  - Anodes: phosphorus-bearing copper (P 0.03–0.06%); P-Cu nuggets/balls in Ti baskets, in dynel or polypropylene anode bags.
- Additive control: 2 amp-Hull-cell test (10 min, air agitation, P-Cu anode, polished brass cathode). Replenishment per 10,000 A·h: 0.7 L Part A, 0.5 L Part B.
- Equipment: hard-rubber-lined steel or PVC/polyester tanks; graphite/Ti/PTFE/PVC/PE heating-cooling.
- Initial activation: electrolyze 2 A·h/L after make-up to reach optimum brightness.
- Storage / hazards: refer to MSDS — H2SO4 corrosive (see [[fisher-AC424525000-sulfuric-acid-acs-sds]]) and CuSO4·5H2O harmful if swallowed / serious eye damage (see [[fisher-AC197730010-cu-sulfate-pentahydrate-sds]]). General OSHA/ACGIH/NIOSH compliance required.
- Pricing: not listed in TDS.

## Reagents (linked entity)
- [[../reagents/acid-Cu-sulfate-bath]] — Cupracid ULTRA is a commercial instantiation of this canonical electrolyte family.
- [[../reagents/sulfuric-acid-H2SO4]] — bath acid (50–70 g/L).
- [[../reagents/boric-acid]] — not used in acid Cu (relevant to Ni sulfamate baths instead).

## Methods this product is used in
- [[../methods/Cu-electroplating-acid-bath]] — direct application; the TDS gives the canonical operating window.
- [[../methods/NOBLE-selective-Cu-plating]] — chemistry-compatible with NOBLE-style native-oxide-mask plating since same acid Cu bath is used.

## Failure modes flagged
- [[../failure-modes/TCO-pitting-during-plating]] — TDS notes "fine pitting / crater pitting / cluster pitting" remediated with Cupracid GM Plus Wetting Agent (initial 20 mL / 100 L bath; 100–200 mL per 10,000 A·h continuous) — directly relevant to the hypothesis's TCO-pitting failure mode.
- [[../failure-modes/Cu-finger-oxidation-damp-heat]] — TDS notes Cu deposit ductility and low stress but does not address downstream cap-stack oxidation, which is product-domain.

## Notable quotes
- "Cupracid® ULTRA is a sulfuric acid-based copper plating process that produces low-stressed, ductile, and bright copper deposits. The additives are designed to operate at bath temperatures up to 86 °F (30 °C) without any noticeable loss in quality." — p. 1
- "Cathode Current Density — 30 Amps/ft² (3.0 A/dm²); Range 10–55 A/ft² (1.0–6.0 A/dm²)." — p. 2
- "Copper anodes with a phosphorus content of 0.03–0.06% are recommended. Phosphorized copper nuggets or balls in titanium baskets are preferred." — p. 3
