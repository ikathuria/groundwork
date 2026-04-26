---
type: reagent
slug: nickel-sulfamate-bath
aliases: [Ni sulfamate electrolyte, Watts-type Ni bath, aeronikl 250/400/575]
cas: 13770-89-3
formula: Ni(SO3NH2)2·xH2O (+ boric acid + chloride)
suppliers:
  - name: Fisher / Thermo Scientific Chemicals (Alfa Aesar legacy)
    catalog: AA8902018 (50 g) / AA8902030 (250 g) / AA89020A1 (1 kg)
    grade: lab-pack, electroplating-grade
    url: https://www.fishersci.com/shop/products/nickel-ii-sulfamate-hydrate/AA8902018
  - name: Atotech (MKS)
    catalog: Solar metallization Ni line (proprietary, not numbered on overview)
    grade: production
    url: https://www.atotech.com/products/general-metal-finishing/solar-industry/
storage: room-temperature, dry; concentrated solutions in HDPE / PP / PVC
hazards: high — H317 (skin sensitiser), H334 (respiratory sensitiser), H341 (mutagen), H350i (carcinogenic by inhalation), H360D (reproductive tox), H372 (chronic STOT)
known_failure_modes: [Ni-barrier-pinholes, Cu-diffusion-into-c-Si, Cu3Si-formation-at-Si-interface]
sources: [2010-bartsch-lip-pvsc, 2014-rehman-nicu-plating-csi-review, 2018-electrochemsci-barrier-properties-electroplated-ni, 2022-karas-cu-outdiffusion-damp-heat, atotech-solar-industry-overview, fisher-AA8902018-nickel-sulfamate-hydrate, fisher-AC424525000-sulfuric-acid-acs-sds, pvtech-metallization-challenges-cell-manufacturing]
tags: [electrolyte, Ni-plating, sulfamate-bath, barrier-layer]
---

# Nickel sulfamate plating bath

## What it is
The canonical low-stress Ni electrolyte used to plate the sub-100 nm Ni diffusion-barrier seed between the SHJ TCO (or PVD seed) and the Cu finger. Nickel(II) sulfamate yields denser, lower-stress films than nickel sulfate ("Watts") baths and is the standard choice when Ni is required to act as a Cu-diffusion barrier on Si or TCO.

## Common uses
- Plated Ni barrier layer in the Ni/Cu/Sn(Ag) stack on c-Si and SHJ ([[2010-bartsch-lip-pvsc]], [[atotech-solar-industry-overview]], [[2014-rehman-nicu-plating-csi-review]]).
- Electroplated Ni after silicidation of an electroless-Ni seed in PERC plated metallization ([[2018-electrochemsci-barrier-properties-electroplated-ni]]).
- Ni co-deposition into Cu (~9 at.% Ni) to stabilise (Cu,Ni)6Sn5 IMC and slow Kirkendall void growth in Sn-capped fingers ([[2022-karas-cu-outdiffusion-damp-heat]]).

## Key spec / concentration ranges
- Ni source: nickel(II) sulfamate hydrate, ~75–90 g/L Ni metal (≈300–400 g/L Ni(SO3NH2)2·xH2O) per generic plating practice ([[fisher-AA8902018-nickel-sulfamate-hydrate]]).
- Boric acid buffer: ~30–40 g/L; pH 3.5–4.5; chloride 5–10 g/L (for anode dissolution).
- Operating temperature: 45–60 °C typical; cathode current density 1–5 A/dm².
- Deposition rate ≈1 nm/s at the rates cited in [[2018-electrochemsci-barrier-properties-electroplated-ni]] (60 s → ~60 nm Ni; 120 s → ~120 nm Ni).
- Sub-100 nm target thickness for SHJ barrier (this hypothesis); but [[2018-electrochemsci-barrier-properties-electroplated-ni]] shows 60 nm fails at 300 °C while 120 nm holds — borderline regime.
- Identity: CAS 13770-89-3, MW 250.85 g/mol, formula H4N2NiO6S2; SMILES [Ni++].NS([O-])(=O)=O.NS([O-])(=O)=O.
- Synonyms: aeronikl 250 / 400 / 575 (industrial trade names).
- Pack sizes: 50 g (Fisher AA8902018), 250 g (AA8902030), 1 kg (AA89020A1).

## Alternatives / variants
- [[nickel-phosphorus-NiP-electroless]] — autocatalytic NiP from NiSO4 + NaH2PO2 (different chemistry, no current required).
- [[boric-acid]] — pH buffer almost always combined with this bath.
- [[acid-Cu-sulfate-bath]] — sequential successor in the Ni/Cu plating stack.
- Watts-type NiSO4 bath — higher-stress alternative, less common for thin barrier layers.

## Gotchas
- Ni(II) sulfamate is a confirmed inhalation carcinogen (GHS H350i) and reproductive toxicant (H360D) — operate baths under local exhaust ventilation.
- Native SiOx on TCO/Si regrows after HF dip and impedes silicide formation; HF-bearing PdCl2 activation can recover ~+42 mV Voc ([[2017-jeon-electroless-ni-front-metallization]]).
- Sub-100 nm Ni alone can be insufficient to block Cu diffusion at >300 °C; if SHJ thermal budget is held ≤200 °C the thin barrier holds, but any post-plating anneal must be carefully controlled ([[2018-electrochemsci-barrier-properties-electroplated-ni]]).
- pH drifts upward during deposition — H2SO4 (see [[fisher-AC424525000-sulfuric-acid-acs-sds]]) often used to readjust.
- "Aeronikl"-style commercial premixes are NOT the same as lab-prepared sulfamate from the Fisher SKU — additive chemistry differs.

## Sources
- [[fisher-AA8902018-nickel-sulfamate-hydrate]] — primary supplier identity, hazards, pack sizes, IUPAC name, synonyms.
- [[atotech-solar-industry-overview]] — production-scale Ni-Cu-Sn(Ag) plating line for PV.
- [[2010-bartsch-lip-pvsc]] — Watts/sulfamate-class Ni electrolyte used in foundational LIP work.
- [[2014-rehman-nicu-plating-csi-review]] — review of Ni plating chemistries (sulfamate, chloride, sulfate).
- [[2018-electrochemsci-barrier-properties-electroplated-ni]] — quantitative Ni-thickness vs. Cu-barrier-failure data (60 vs 120 nm).
- [[2022-karas-cu-outdiffusion-damp-heat]] — Ni co-deposition into Cu as DH-mitigation strategy.
- [[fisher-AC424525000-sulfuric-acid-acs-sds]] — pH adjustment.
- [[pvtech-metallization-challenges-cell-manufacturing]] — IMEC overview of Ni/Cu plated routes.
