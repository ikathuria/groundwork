---
type: reagent
slug: acid-Cu-sulfate-bath
aliases: [acid copper plating bath, CuSO4 plating electrolyte, Cupracid, Cu-LIP bath]
cas: null
formula: CuSO4·5H2O + H2SO4 + Cl- + organic additives
suppliers:
  - name: Atotech (MKS)
    catalog: Cupracid ULTRA (Make-up + Part A + Part B)
    grade: production
    url: https://www.atotech.com/products/general-metal-finishing/solar-industry/
  - name: Fisher / Acros Organics
    catalog: AC197730010 (CuSO4·5H2O, 50 g, CAS 7758-99-8)
    grade: ACS reagent ≥95%
    url: https://www.fishersci.com/shop/products/copper-ii-sulfate-pentahydrate-acs-acros-organics/AC197730010
  - name: Fisher / Acros Organics
    catalog: AC424525000 (H2SO4, CAS 7664-93-9)
    grade: ACS ≥95%
    url: https://www.fishersci.com/shop/products/sulfuric-acid-acs-acros-organics-2/AC424525000
storage: room-temperature, sealed PVC/polyester tank; CuSO4 air-sensitive (store under inert atmosphere); H2SO4 in corrosives cabinet
hazards: moderate — CuSO4 acute oral tox Cat 4, eye damage Cat 1; H2SO4 skin/eye corrosion Cat 1; aquatic ecotoxicity
known_failure_modes: [TCO-pitting-during-plating, Cu-finger-oxidation-damp-heat, Cu-diffusion-into-c-Si, Cu3Si-formation-at-Si-interface, plating-resist-undercut]
sources: [2010-bartsch-lip-pvsc, 2014-rehman-nicu-plating-csi-review, 2017-jeon-electroless-ni-front-metallization, 2018-electrochemsci-barrier-properties-electroplated-ni, 2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration, 2022-karas-cu-outdiffusion-damp-heat, atotech-cupracid-ultra-a-tds, atotech-solar-industry-overview, fisher-AC197730010-cu-sulfate-pentahydrate-sds, fisher-AC424525000-sulfuric-acid-acs-sds, pvtech-metallization-challenges-cell-manufacturing]
tags: [electrolyte, Cu-plating, sulfate-bath, primary-reagent]
---

# Acid Cu sulfate plating bath

## What it is
A sulfuric-acid-based copper(II) sulfate electrolyte with chloride ions and proprietary organic additives (brightener, leveler, suppressor) that produces low-stress, ductile, bright, leveled Cu deposits. It is the canonical bath for the front-grid Cu thickening step in this hypothesis: Cu is electroplated onto the Ni-barrier seed (or, in TCO-only variants, directly onto ITO) to form 5–15 µm tall fingers.

## Common uses
- Industrial plating of Ni/Cu/Sn(Ag) front-grid metallization on SHJ, PERC, TOPCon ([[atotech-solar-industry-overview]], [[2022-arena-sundrive-copper-metallisation-demonstration]]).
- Light-induced plating (LIP) on screen-printed Ag seed layers in homojunction cells ([[2010-bartsch-lip-pvsc]], [[2014-rehman-nicu-plating-csi-review]]).
- Pulsed forward/reverse plating for selective fill of NaOH-patterned PVD-Al/Cu seed in NOBLE process ([[2019-hatt-noble-shj-solrrl]]).
- Three-step plating (seed-grid + dielectric mask + Cu electrodeposition) on SHJ at CSEM ([[2024-lachowicz-cu-plated-shj-aging-mini-modules]]).

## Key spec / concentration ranges
- Cu source: CuSO4·5H2O 195–255 g/L (210 g/L optimum) per Atotech Cupracid ULTRA TDS ([[atotech-cupracid-ultra-a-tds]]).
- Conducting acid: H2SO4 50–70 g/L (60 g/L optimum); 66°Bé.
- Chloride: 80–150 mg/L (100 mg/L optimum) for grain refinement.
- Organic additives (Cupracid ULTRA): Make-up 10 mL/L; Part A 0.4–0.6 mL/L; Part B 0.4–0.6 mL/L.
- Operating temperature: 20–30 °C (24–28 °C optimum) — low-T bath.
- Cathode current density: 1.0–6.0 A/dm² (3.0 A/dm² optimum); pulsed forward/reverse 6 A/dm² with 15 ms forward / 1 ms reverse, anodic:cathodic = 4.5 in NOBLE work ([[2019-hatt-noble-shj-solrrl]]).
- Voltage 1.0–4.0 V; rectifier ripple ≤10%.
- Anodes: phosphorus-bearing Cu (P 0.03–0.06%) in Ti baskets / dynel anode bags.
- Filtration 5 µm at 2–3 turnovers/h; PVC sparger air agitation (no compressed air).
- Bulk Cu resistivity achieved: ≈2×10⁻⁶ Ω·cm (vs. 1.7×10⁻⁶ for pure Cu) ([[2018-pvtech-metallization-shj-cells-modules]]).
- Plating rate ≈1 µm/min at 3 A/dm²; ~1500 s for 1.5 µm Cu in lab cells ([[2018-electrochemsci-barrier-properties-electroplated-ni]]).

## Alternatives / variants
- [[nickel-sulfamate-bath]] — sequential predecessor in the Ni/Cu stack (plates the diffusion barrier).
- [[nickel-phosphorus-NiP-electroless]] — alternative seed-layer chemistry deposited before Cu.
- [[Cu-paste-low-temperature]] — additive (printed) Cu rather than electroplated; comparator path.
- [[silver-Ag-cap]] / [[tin-Sn-cap]] — successor reagent in the stack (cap layer over plated Cu).

## Gotchas
- Pitting / cluster pitting on TCO is a known fault mode; remediated by Cupracid GM Plus wetting agent (20 mL / 100 L initial; 100–200 mL per 10,000 A·h) — flagged on the Atotech TDS ([[atotech-cupracid-ultra-a-tds]]).
- "Ghost" / parasitic plating on SiNx pinholes mitigated by piranha pre-clean (H2O2 + H2SO4) ([[2014-rehman-nicu-plating-csi-review]]).
- Compressed air for agitation is NOT acceptable (oxidises additives); use cathode rod movement + low-pressure blower air.
- Bath impurities (S, Cl, C, O) co-deposit into Cu and accelerate Kirkendall void formation in Cu-Sn interfaces during damp heat ([[2022-karas-cu-outdiffusion-damp-heat]]).
- Always add H2SO4 to water (reacts violently with water); H2 evolution on Cu metals.

## Sources
- [[atotech-cupracid-ultra-a-tds]] — full canonical operating window (composition, current density, agitation, anodes, additive control).
- [[atotech-solar-industry-overview]] — supplier-side anchor that the Cupracid family ships at industry scale for PV metallization.
- [[fisher-AC197730010-cu-sulfate-pentahydrate-sds]] — CuSO4·5H2O hazard / identity / SKU.
- [[fisher-AC424525000-sulfuric-acid-acs-sds]] — H2SO4 hazard / identity / SKU.
- [[2010-bartsch-lip-pvsc]] — foundational LIP-Cu / Ni-Cu stack with thermal accelerated aging.
- [[2018-pvtech-metallization-shj-cells-modules]] — quantitative SHJ-Cu plating benchmark (~2×10⁻⁶ Ω·cm bulk resistivity, 20 µm fingers, 1 Ω/cm line resistance).
- [[2019-hatt-noble-shj-solrrl]] — pulsed-current chemistry on slightly acidic CuSO4.
- [[2018-electrochemsci-barrier-properties-electroplated-ni]] — Cu electroplating @ 25 °C, Pt counter-electrode, magnetic stirring.
- [[2022-arena-sundrive-copper-metallisation-demonstration]] — proprietary in-house chemistry reformulated for adhesion and smoother fingers.
- [[2022-karas-cu-outdiffusion-damp-heat]] — bath impurity → Kirkendall void mechanism in DH.
- [[2014-rehman-nicu-plating-csi-review]] — review of LIP / Cu plating on c-Si.
- [[2017-jeon-electroless-ni-front-metallization]], [[2018-electrochemsci-barrier-properties-electroplated-ni]], [[2018-pv-international-metallization-shj]], [[2018-pv-tech-metallization-interconnection-bifacial-shj]], [[2019-hatt-noble-bifacial-shj-aip]], [[2021-hatt-stable-cu-plated-shj-eupvsec]], [[pvtech-metallization-challenges-cell-manufacturing]] — corroborating use cases.
