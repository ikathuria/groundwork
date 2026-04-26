---
type: reagent
slug: nickel-phosphorus-NiP-electroless
aliases: [electroless NiP, Ni-P bath, autocatalytic Ni, EN]
cas: null
formula: NiSO4·6H2O + NaH2PO2·H2O + complexant + buffer (proprietary)
suppliers:
  - name: Atotech / MKS (e.g., Niklad, Aurotech)
    catalog: production-scale electroless Ni line (proprietary)
    grade: production
    url: https://www.atotech.com/
  - name: MacDermid Enthone (Bondal, Niplate)
    catalog: production-scale electroless Ni
    grade: production
    url: https://www.macdermidenthone.com/
storage: room-temperature; bath shelf life days–weeks once activated; replenishment continuous
hazards: high — Ni salts are GHS H350i (carcinogenic by inhalation), H360D (reproductive tox); hypophosphite ignites with strong oxidisers
known_failure_modes: [Ni-barrier-pinholes, Cu-diffusion-into-c-Si, Cu3Si-formation-at-Si-interface]
sources: [2014-rehman-nicu-plating-csi-review, 2017-jeon-electroless-ni-front-metallization, 2018-electrochemsci-barrier-properties-electroplated-ni, pvtech-metallization-challenges-cell-manufacturing]
tags: [electrolyte, Ni-seed, autocatalytic, electroless, silicide-precursor]
---

# Nickel-phosphorus electroless plating bath

## What it is
Autocatalytic nickel-phosphorus deposition from a NiSO4·6H2O + sodium hypophosphite (NaH2PO2·H2O) bath. Unlike electroplated Ni it requires no external current — Ni²⁺ is reduced by hypophosphite at the cell surface — making it ideal as the very first Ni seed step on a non-conductive Si or TCO surface. After a 300–600 °C anneal the Ni-P transforms into Ni₂Si / NiSi silicide that anchors the Ni and acts as a Cu diffusion barrier in PERC, buried-contact, and laser-doped selective-emitter (LDSE) cells.

## Common uses
- Seed step for the Ni/Cu/(Sn|Ag) two-step plating stack on c-Si — IMEC buried-contact and LDSE routes ([[pvtech-metallization-challenges-cell-manufacturing]]).
- Pretreatment in [[2018-electrochemsci-barrier-properties-electroplated-ni]] before electroplated Ni: 60 s plate at 70 °C, pH 5 → ~60 nm Ni → 500 °C silicidation → HNO3 strip → electroplated Ni / Cu.
- Front-side electroless Ni on textured Si in homojunction cell development ([[2017-jeon-electroless-ni-front-metallization]]).

## Key spec / concentration ranges
- Bath chemistry (Hsieh / Cheng recipes): NiSO4·6H2O ~25 g/L + NaH2PO2·H2O ~25 g/L + complexants (lactic / citric / glycolic acid) + buffer; pH 5; T = 70 °C.
- Deposition rate ≈1 nm/s; continuous coverage above ~45 nm thickness ([[2017-jeon-electroless-ni-front-metallization]]).
- Surface activation: SnCl2/HCl sensitisation → PdCl2/HCl (or PdCl2/HCl/HF) activation immediately before plating.
- Phosphorus content of as-plated film: typically 5–12 wt% P; affects silicide kinetics.
- Silicidation: Ni2Si (200–300 °C), NiSi (300–700 °C, low ρ ≈14 µΩ·cm), NiSi2 (700–900 °C, agglomerated, high-ρ — to be avoided).
- TEM-measured silicide thickness: 125–160 nm after 60 s plate + 500–600 °C; 210–290 nm at 700 °C ([[2017-jeon-electroless-ni-front-metallization]]).

## Alternatives / variants
- [[nickel-sulfamate-bath]] — electroplated Ni for the thick barrier layer once a conductive surface exists.
- Light-induced Ni plating — uses cell photovoltage instead of external chemistry; alternative for SHJ where the TCO is conductive.
- Ni-Co alloy variants (Ni71Co29) — extends thermal stability to ~250 °C ([[2018-electrochemsci-barrier-properties-electroplated-ni]]).

## Gotchas
- HF in the activation bath (Bath 2 of [[2017-jeon-electroless-ni-front-metallization]]: PdCl2 + 3 mL/L HCl + 83 mL/L HF) is essential to remove the native SiOx that otherwise blocks silicide formation; without it Voc drops ~40 mV.
- NOT used in PVD or sputter routes — only valid for chemical plating workflows.
- For SHJ specifically, the thermal budget for silicide formation (≥300 °C) generally exceeds the SHJ a-Si:H stability ceiling (~200–250 °C) — electroless NiP is therefore mostly a PERC-era reagent. The hypothesis uses electroplated Ni instead, with the TCO acting as the diffusion barrier.
- Hypophosphite + oxidisers (HNO3, H2O2) is a fire hazard — keep separate.
- Bath instability: pH drift, plates out spontaneously on tank walls if Ni:hypophosphite ratio drifts.

## Sources
- [[2014-rehman-nicu-plating-csi-review]] — review of electroless Ni chemistries and their use in c-Si front contact.
- [[2017-jeon-electroless-ni-front-metallization]] — canonical recipe (NiSO4·6H2O + NaH2PO2·H2O, 70 °C, pH 5, 1 nm/s) and Voc impact of HF activation.
- [[2018-electrochemsci-barrier-properties-electroplated-ni]] — full electroless-Ni → silicidation → strip → electroplated-Ni → Cu workflow.
- [[pvtech-metallization-challenges-cell-manufacturing]] — IMEC overview of NiP electroless seed in buried-contact and LDSE cells.
