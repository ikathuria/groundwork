---
type: reagent
slug: nickel-sulfamate-bath
aliases: [Ni-sulfamate plating bath, Ni(NH2SO3)2 electrolyte, sulfamate Ni bath]
cas: ""
suppliers:
  - name: Fisher Scientific / Thermo Scientific Chemicals
    catalog: "AA8902018 / AA8902030 / AA89020A1 — Nickel(II) sulfamate hydrate (CAS 13770-89-3)"
    grade: lab-grade make-up
    url: https://www.fishersci.com/shop/products/nickel-ii-sulfamate-hydrate-thermo-scientific/AA8902018
  - name: Atotech (MKS)
    catalog: "Watts / Sulfamate Ni chemistry (PV-grade)"
    grade: PV plating chemistry
    url: https://www.atotech.com/products/general-metal-finishing/solar-industry/
  - name: Macdermid Alpha
    catalog: "Sulfamate Ni / SulNic"
    grade: PV / PCB
    url: https://www.macdermidalpha.com
storage: bath stored at room T; pH 3.5–4.5; periodic replenishment
hazards: medium-high — Ni salts (skin/respiratory sensitizer, suspect carcinogen, reproductive toxin)
known_failure_modes: [Ni-barrier-pinholes, TCO-pitting-during-plating, Cu-diffusion-into-c-Si]
sources: [2014-rehman-nicu-plating-csi-review, 2017-jeon-electroless-ni-front-metallization, 2018-electrochemsci-barrier-properties-electroplated-ni, 2018-pvtech-metallization-shj-cells-modules, 2022-karas-cu-outdiffusion-damp-heat, atotech-solar-industry-overview, fisher-AA8902018-nickel-sulfamate-hydrate]
tags: [electrolyte, Ni-plating, sulfamate, low-stress-Ni, SHJ-barrier]
created: 2026-04-26
updated: 2026-04-26
---

# Nickel sulfamate plating bath

**Slug:** `reagents/nickel-sulfamate-bath` · **Type:** reagent

## What it is

The nickel sulfamate bath is the canonical electroplating electrolyte for low-stress Ni deposition. Composition: Ni(NH2SO3)2 (~300–450 g/L) + boric acid (~30–45 g/L pH buffer) + Ni-anode pellets + (optionally) chloride for anode activation + brighteners. Sulfamate baths produce ductile, low internal-stress Ni films and are the canonical electroplated-Ni chemistry for the Ni barrier in the SHJ Ni/Cu stack. Operates at pH ~4 — much milder on TCO than the pH-1 acid-Cu bath downstream.

## Common uses (in this corpus)

In this corpus the Ni-sulfamate bath is the **direct intervention reagent** for the hypothesis's Ni barrier. It is named in Rehman 2014 (review of c-Si Ni/Cu chemistry), Cheng 2018 (barrier-properties study), and Karas 2022 (DH outdiffusion forensics). It is paired upstream of the [[reagents/acid-Cu-sulfate-bath]] in every plated Ni/Cu workflow. The Atotech and MacDermid product pages mark it as PV-qualified.

## Properties / specifications

- **Composition (typical):** Ni(NH2SO3)2·4H2O 300–450 g/L (~70–110 g/L Ni²⁺), [[reagents/boric-acid]] 30–45 g/L, NiCl2 0–15 g/L (anode activation), brighteners trace.
- **Operating temperature:** 40–60 °C typical; some PV variants run lower for SHJ thermal-budget compliance.
- **pH:** 3.5–4.5 (much milder than acid Cu pH ~1).
- **Cathode current density:** 0.1–10 A/dm²; LIP-mode ~0.5–2 A/dm² for thin barriers.
- **Anode:** sulfur-depolarized Ni pellets or rounds in titanium baskets; bagged.
- **Ni deposit:** ~7 µΩ·cm bulk resistivity, ductile, low internal stress, ~99.9 % purity.
- **Sub-100 nm-barrier-relevant:** plated Ni from sulfamate gives columnar grain structure; pinhole density and grain-boundary connectivity govern Cu-blocking efficacy. Cheng 2018 reports 60 nm of electroplated Ni from this chemistry fails at 300 °C; ≥120 nm survives. SHJ ≤200 °C operation may rescue a sub-100 nm barrier — a key hypothesis-level uncertainty.

## Suppliers

- Fisher Scientific / Thermo Scientific Chemicals — AA8902018 (50 g) / AA8902030 (250 g) / AA89020A1 (1 kg); CAS 13770-89-3; URL https://www.fishersci.com/shop/products/nickel-ii-sulfamate-hydrate-thermo-scientific/AA8902018
- Atotech (MKS) — Watts / Sulfamate Ni chemistry for PV; URL https://www.atotech.com/products/general-metal-finishing/solar-industry/
- MacDermid Alpha — SulNic / Sulfamate Ni; URL https://www.macdermidalpha.com
- Companion reagent: [[reagents/boric-acid]] (Fisher A73-500).

## Alternatives

- [[reagents/nickel-phosphorus-NiP-electroless]] — electroless / no-bias chemistry; more uniform amorphous coverage at the sub-100 nm thickness regime.
- Watts Ni bath (NiSO4 + NiCl2 + boric) — older chemistry; higher internal stress; mostly displaced by sulfamate in PV applications.
- PVD / sputtered Ni — vacuum process; no TCO etch concern but higher capex.

## Gotchas / failure modes

- [[failure-modes/Ni-barrier-pinholes]] — the central failure mode the bath chemistry is engineered to minimize; current-density and additive control govern pinhole density.
- [[failure-modes/TCO-pitting-during-plating]] — pH ~4 is mild but long dwell at high CD still etches ITO/IWO at edges.
- [[failure-modes/Cu-diffusion-into-c-Si]] — the failure mode the Ni layer (deposited from this bath) is the *barrier* against; failure of the Ni exposes Si bulk to Cu.

## Citing sources

- [[sources/fisher-AA8902018-nickel-sulfamate-hydrate]] — primary catalog source: CAS, formula, suppliers.
- [[sources/2014-rehman-nicu-plating-csi-review]] — review identifying Ni-sulfamate as standard PV Ni-barrier chemistry.
- [[sources/2017-jeon-electroless-ni-front-metallization]] — uses electroless-Ni alternative; sulfamate is the parallel benchmark.
- [[sources/2018-electrochemsci-barrier-properties-electroplated-ni]] — barrier-properties study using sulfamate Ni at varying thickness (the central source for the sub-100 nm uncertainty).
- [[sources/2018-pvtech-metallization-shj-cells-modules]] — sulfamate Ni / sulfate Cu paired chemistry in SHJ workflow.
- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — sulfamate Ni used for diffusion barrier in DH-aging study.
- [[sources/atotech-solar-industry-overview]] — Atotech vendor framing for PV-qualified Ni-sulfamate chemistry.
