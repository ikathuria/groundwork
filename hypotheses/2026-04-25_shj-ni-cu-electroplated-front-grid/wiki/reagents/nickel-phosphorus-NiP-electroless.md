---
type: reagent
slug: nickel-phosphorus-NiP-electroless
aliases: [electroless NiP, Ni-P amorphous barrier, autocatalytic Ni]
cas: ""
suppliers:
  - name: Atotech (MKS)
    catalog: "Aurotech / electroless Ni-P chemistry"
    grade: PV / PCB plating chemistry
    url: https://www.atotech.com/products/general-metal-finishing/solar-industry/
  - name: MacDermid Alpha
    catalog: "Niklad (electroless Ni)"
    grade: electronics / PV
    url: https://www.macdermidalpha.com
  - name: Coventya / Atotech (UYEMURA brand for electroless Ni)
    catalog: "ENPLATE NI-426 / NI-440"
    grade: high-P (~10 wt% P), amorphous
    url: https://www.uyemura.com
storage: bath at room T; replenish on metal-turnover basis
hazards: medium — NaH2PO2 reducing agent, NiSO4 source, complexants; alkaline waste
known_failure_modes: [Ni-barrier-pinholes, Cu-diffusion-into-c-Si, finger-adhesion-loss-after-DH]
sources: [2014-rehman-nicu-plating-csi-review, 2017-jeon-electroless-ni-front-metallization, atotech-solar-industry-overview, fisher-AA8902018-nickel-sulfamate-hydrate]
tags: [electroless, NiP, amorphous-barrier, autocatalytic, no-bias, TCO-compatible]
created: 2026-04-26
updated: 2026-04-26
---

# Electroless nickel-phosphorus (NiP)

**Slug:** `reagents/nickel-phosphorus-NiP-electroless` · **Type:** reagent

## What it is

Electroless nickel-phosphorus (NiP) is a Ni-P alloy deposited from an aqueous bath of NiSO4 + sodium hypophosphite (NaH2PO2, the reducing agent) + complexants (citrate/lactate) + buffer + stabilizer, **without any external bias**. The deposit is an amorphous (high-P, ~10 wt%) or microcrystalline (low-P, ~3–5 wt%) Ni-P alloy. NiP is one of two main Ni-barrier chemistries (the other being electroplated Ni from a [[reagents/nickel-sulfamate-bath]]) for the Ni layer in an SHJ Ni/Cu stack.

## Common uses (in this corpus)

In this corpus NiP appears as the **electroless / no-bias-required Ni-barrier alternative**. Jeon 2017 reports an electroless-NiP front metallization for c-Si; Rehman 2014 reviews it as the standard PV alternative to LIP/electroplated Ni. The amorphous, columnar-grain-free structure of high-P NiP gives **more uniform pinhole-free coverage** at thicknesses where electroplated Ni starts to fail (Cheng 2018 reports 60 nm electroplated Ni fails as Cu barrier at 300 °C). For the hypothesis's sub-100 nm Ni claim, NiP is a structural-coverage-uniformity hedge.

## Properties / specifications

- Phosphorus content: 3–5 wt% (low-P, microcrystalline) to 10–13 wt% (high-P, amorphous).
- Deposition rate: 5–25 µm/h depending on bath chemistry and temperature.
- Operating bath temperature: 80–95 °C (often the hottest step in the cell line; needs SHJ thermal-budget verification).
- Bath pH: 4.5–5.5 typical; less aggressive than acid Cu but still requires TCO-pinhole control.
- Deposit hardness: 500–700 HV (as-deposited); harder after heat treatment.
- Bulk resistivity: 60–100 µΩ·cm for high-P amorphous (much higher than crystalline Ni's 7 µΩ·cm) — sets a thickness ceiling for the barrier.
- Cu-barrier behavior: amorphous structure has no fast grain-boundary diffusion paths; reported to outperform electroplated Ni at <100 nm thickness for Cu blocking.

## Suppliers

- Atotech (MKS) — electroless Ni-P chemistry for PV; URL https://www.atotech.com/products/general-metal-finishing/solar-industry/
- MacDermid Alpha — Niklad electroless Ni; URL https://www.macdermidalpha.com
- Uyemura — ENPLATE NI-426 / NI-440 high-P amorphous chemistries; URL https://www.uyemura.com
- Lab make-up: NiSO4 + NaH2PO2 + sodium citrate + lactic acid + thiourea / Pb stabilizer (mixed from reagent salts).

## Alternatives

- [[reagents/nickel-sulfamate-bath]] — electroplated Ni alternative (requires external bias / LIP); higher-purity Ni but potentially more pinholes at sub-100 nm.
- PVD Ni / sputtered Ni — different deposition class; needed when bath chemistry is not TCO-compatible.

## Gotchas / failure modes

- [[failure-modes/Ni-barrier-pinholes]] — electroless deposits initiate at activation sites; activator-density and bath-stabilizer balance govern pinhole density.
- [[failure-modes/Cu-diffusion-into-c-Si]] — the failure mode the NiP is engineered to prevent; barrier breakdown is the catastrophic outcome.
- [[failure-modes/finger-adhesion-loss-after-DH]] — NiP / TCO interfacial adhesion is a known weak point; surface pre-treatment matters.

## Citing sources

- [[sources/2017-jeon-electroless-ni-front-metallization]] — primary research source on electroless-Ni front metallization for c-Si.
- [[sources/2014-rehman-nicu-plating-csi-review]] — review naming NiP as the standard PV electroless Ni option.
- [[sources/atotech-solar-industry-overview]] — Atotech's PCB-derived electroless-Ni chemistry positioned for SHJ/TOPCon.
- [[sources/fisher-AA8902018-nickel-sulfamate-hydrate]] — Ni-sulfamate catalog page references NiP as the alternative chemistry for the same Ni-barrier role.
