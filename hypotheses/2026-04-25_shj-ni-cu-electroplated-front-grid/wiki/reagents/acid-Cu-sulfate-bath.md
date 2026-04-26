---
type: reagent
slug: acid-Cu-sulfate-bath
aliases: [acid copper sulfate plating bath, CuSO4/H2SO4 electrolyte, bright acid Cu]
cas: ""
suppliers:
  - name: Atotech (MKS)
    catalog: "Cupracid ULTRA"
    grade: PV / PCB plating chemistry, full make-up + Parts A/B
    url: https://www.atotech.com/products/general-metal-finishing/solar-industry/
  - name: MacDermid Alpha
    catalog: "Solderon / ViaForm acid Cu families"
    grade: PV / interconnect grade
    url: https://www.macdermidalpha.com
  - name: DuPont (formerly Rohm and Haas Electronic Materials)
    catalog: "Copper Gleam / Microfab series"
    grade: electronics-grade acid Cu
    url: https://www.dupont.com
storage: bath stored in PVC / hard-rubber-lined steel tank; 24–28 °C; continuous filtration
hazards: high — pH ≈ 1, contains H2SO4 + CuSO4 + chloride + organic brighteners; toxic to aquatic life
known_failure_modes: [TCO-pitting-during-plating, plating-resist-undercut, lateral-Cu-edge-migration, Cu-finger-oxidation-damp-heat]
sources: [2014-rehman-nicu-plating-csi-review, 2017-jeon-electroless-ni-front-metallization, 2018-electrochemsci-barrier-properties-electroplated-ni, 2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, 2020-verlinden-future-challenges-tw-pv, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration, 2022-karas-cu-outdiffusion-damp-heat, atotech-cupracid-ultra-a-tds, atotech-solar-industry-overview, fisher-AC197730010-cu-sulfate-pentahydrate-sds, fisher-AC424525000-sulfuric-acid-acs-sds, pvtech-metallization-challenges-cell-manufacturing]
tags: [electrolyte, Cu-plating, CuSO4, H2SO4, brightener, chloride, additives]
created: 2026-04-26
updated: 2026-04-26
---

# Acid Cu sulfate plating bath

**Slug:** `reagents/acid-Cu-sulfate-bath` · **Type:** reagent

## What it is

The acid copper sulfate bath is the canonical industrial Cu-electroplating electrolyte. It is a sulfuric-acid-acidified aqueous solution of CuSO4·5H2O containing a small amount of chloride and a proprietary organic additive package (carrier/suppressor + brightener/accelerator + leveler) that controls deposit grain size, brightness, ductility, and conformality. It is the primary chemistry by which Cu is plated onto the Ni-seeded SHJ front grid.

## Common uses (in this corpus)

This bath is the workhorse for the **Cu finger** in every reported Ni/Cu (or Cu-only) plated SHJ stack — used by Hatt's NOBLE, Lachowicz CSEM, SunDrive, and the Atotech production-qualified Cupracid family. It is the chemistry every plated-Cu hypothesis (this one included) inherits from PCB plating, with PV-specific tuning around line aspect ratio, finger sidewall profile, and resist compatibility.

## Properties / specifications

- **Composition (Atotech Cupracid ULTRA reference):** CuSO4·5H2O 195–255 g/L (210 g/L optimum), H2SO4 50–70 g/L (~0.6 M), chloride 80–150 ppm (100 ppm optimum), organic brighteners (Parts A/B) at sub-mL/L levels.
- **Operating temperature:** 24–28 °C optimum (full range 20–30 °C).
- **Cathode current density:** 1–6 A/dm² operating range, 3.0 A/dm² (30 A/ft²) optimum for PCB; PV LIP modes use lower CD (~0.5–1 A/dm²) to avoid TCO damage.
- **Anode:** phosphorized-Cu (0.03–0.06 % P) nuggets/balls in titanium baskets, dynel/polypropylene anode bags.
- **Filtration:** continuous through 5-µm media at 2–3 turnovers/hr — critical to prevent particulate inclusions.
- **pH:** ≈ 1 (driven by ~0.6 M H2SO4) — this is what dissolves ITO/IWO at any Ni-seed pinhole.
- **Cu deposit:** ~1.7 µΩ·cm bulk resistivity at >97 % purity, ductile, low-stress when additives are within spec.
- **Plated finger geometry (typical SHJ NOBLE / SunDrive):** 20–40 µm wide × 10–20 µm tall after ~3–10 min of plating.

## Suppliers

- Atotech (MKS) — Cupracid ULTRA + PV-qualified plating-line chemistry; URL https://www.atotech.com/products/general-metal-finishing/solar-industry/
- MacDermid Alpha — Solderon / ViaForm acid Cu families; URL https://www.macdermidalpha.com
- DuPont — Copper Gleam / Microfab acid-Cu electronics chemistries; URL https://www.dupont.com
- Reagent-only (lab make-up): [[reagents/sulfuric-acid-H2SO4]] (Fisher AC424525000) + CuSO4·5H2O (Fisher AC197730010).

## Alternatives

- [[reagents/nickel-sulfamate-bath]] — used *upstream* of the acid Cu bath in the same plating line; chemically distinct (Ni vs. Cu, sulfamate vs. sulfate, pH ~4 vs. pH ~1).
- Pyrophosphate-Cu bath (alkaline) — less aggressive on TCO but slower deposition rate; not the production-default for PV.
- Methanesulfonate Cu bath (Sn-plating-derived) — used in some semiconductor flows; rare in PV.

## Gotchas / failure modes

- [[failure-modes/TCO-pitting-during-plating]] — the bath's pH ≈ 1 dissolves ITO/IWO at any seed-layer pinhole; the dominant TCO-damage mode in plated-Cu SHJ workflows.
- [[failure-modes/plating-resist-undercut]] — high acidity attacks inkjet plating-resist masks at the resist edge if dwell is excessive or temperature drifts up.
- [[failure-modes/lateral-Cu-edge-migration]] — off-spec brightener / leveler ratio causes "mushrooming" Cu growth that overgrows the resist edge and increases shading.
- [[failure-modes/Cu-finger-oxidation-damp-heat]] — Cu deposited from this bath is the long-term corrosion target; bath impurity content (S, Cl, C, O) correlates with downstream void formation under DH (Karas 2022).

## Citing sources

- [[sources/atotech-cupracid-ultra-a-tds]] — canonical commercial recipe (composition, CD, anode chemistry, additive control).
- [[sources/fisher-AC197730010-cu-sulfate-pentahydrate-sds]] — Cu-source salt SDS; CAS 7758-99-8, hazard data, lab-grade make-up reference.
- [[sources/fisher-AC424525000-sulfuric-acid-acs-sds]] — acid-component SDS for the same bath.
- [[sources/2014-rehman-nicu-plating-csi-review]] — review naming acid CuSO4/H2SO4 as the canonical c-Si Cu-plating chemistry.
- [[sources/2018-pv-international-metallization-shj]] — bath used in CSEM / Meyer Burger SHJ Ni/Cu workflow.
- [[sources/2018-pvtech-metallization-shj-cells-modules]] — paired with a Ni-sulfamate seed layer in the SHJ Ni/Cu stack.
- [[sources/2019-hatt-noble-shj-solrrl]] — NOBLE process plates Cu from acid sulfate after inkjet-NaOH patterning.
- [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — same chemistry, longer DH-aging study.
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — SunDrive uses a sulfate Cu bath in the production-pilot demonstration.
- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — bath impurity content tied to downstream Kirkendall void formation.
- [[sources/2017-jeon-electroless-ni-front-metallization]] — uses sulfate Cu after electroless NiP seed.
- [[sources/2018-electrochemsci-barrier-properties-electroplated-ni]] — paired sulfamate-Ni / sulfate-Cu electrolyte system in barrier-properties study.
- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — industry overview mentioning the acid Cu bath in SHJ context.
- [[sources/2019-hatt-noble-bifacial-shj-aip]] — bifacial NOBLE plating chemistry.
- [[sources/2020-verlinden-future-challenges-tw-pv]] — listed as the path for plated-Cu cost reduction.
- [[sources/atotech-solar-industry-overview]] — vendor framing of the acid Cu chemistry for solar.
- [[sources/pvtech-metallization-challenges-cell-manufacturing]] — industry challenges for plating chemistry adoption.
