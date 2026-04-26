---
type: source
id: 2015-lindroos-cu-lid-aalto-thesis
source_type: paper
title: "Copper-related light-induced degradation in crystalline silicon"
authors: ["Lindroos, J."]
year: 2015
doi: null
url: "http://urn.fi/URN:ISBN:978-952-60-6130-6"
raw_path: raw/papers/2015-lindroos-cu-lid-aalto-thesis.pdf
tags: [copper-LID, fast-diffuser, c-Si, Cu3Si, nickel-diffusivity, contamination, foundational]
---

# Copper-related light-induced degradation in crystalline silicon

## Summary
Doctoral dissertation (Aalto University, supervisor Hele Savin) compiling six publications that establish copper as a recombination-active impurity in crystalline silicon and characterise copper-related light-induced degradation (Cu-LID). Confirms that nickel diffuses essentially as fast as copper in silicon, that Cu-LID is a bulk (not surface) effect distinct from boron-oxygen LID, that it is stable at 200 °C, and that negative surface charge (corona or Al₂O₃) plus illumination can fully prevent it. This work is the canonical reference on why even tiny amounts of Cu reaching the c-Si bulk are catastrophic for lifetime — a foundational concern motivating Ni barrier layers in plated metallisation.

## Key claims
- Interstitial Cu diffuses through a 400 µm B-doped wafer in <11 h at room temperature; intrinsic diffusivity DCu,in = 3×10⁻⁴·exp(−0.18 eV/kBT) cm²/s (Eq. 2.1, p. 15).
- Cu precipitates as η′-Cu₃Si forming a deep recombination band between EC−0.15 and EC−0.58 eV; precipitates can form at 200 °C at the Si/thin-film-Cu interface (p. 18–19).
- Ni interstitial diffusivity measured as DNi = (1.69±0.74)×10⁻⁴·exp(−0.15±0.04 eV/kBT) cm²/s in the 665–885 °C range (Eq. 4.4, p. 51) — comparable to copper, contradicting the older 0.47 eV value of Bakhadyrkhanov.
- Cu-LID occurs in B-doped FZ-Si, P-doped FZ-Si, B- and Ga-doped Cz-Si and B-doped mc-Si — boron and oxygen are NOT required (Table 4.1, p. 36).
- Cu-LID is dominated by bulk recombination: removing the degraded Si/SiO₂ interface and re-passivating with Al₂O₃ does not recover the lifetime (p. 39).
- Light-induced Cu defects are stable at 200 °C — they do not anneal back like BO-LID (Sec. 4.5, p. 44).
- Negative corona charging of -0.78 µC/cm² (or built-in negative charge from Al₂O₃) accumulates Cu at the Si/SiO₂ interface and completely prevents Cu-LID (p. 47–49). Phosphorus-diffusion gettering also eliminates Cu-LID in mc-Si.

## Methods used
- [[../methods/minority-carrier-lifetime-photoluminescence]] — QSSPC and µ-PCD lifetime tracking under halogen and bias-laser illumination
- [[../methods/SIMS-depth-profile]] — TXRF chemical analysis of near-surface Cu
- [[../methods/IV-curve-measurement]] — referenced for solar-cell-level LID effects

## Reagents
- [[../reagents/a-Si-H-passivation]] — context: surface passivation stability is needed to isolate bulk vs surface LID

## Organisms / substrates
- [[../organisms/monocrystalline-Si-wafer-p-type]] — B-doped Cz-Si (low- and high-resistivity), Ga-doped Cz-Si, B-doped mc-Si
- [[../organisms/monocrystalline-Si-wafer-n-type]] — high-resistivity P-doped FZ-Si

## Failure modes flagged
- [[../failure-modes/Cu-diffusion-into-c-Si]] — entire thesis
- [[../failure-modes/Cu-LID-light-induced-degradation]] — central topic; bulk-recombination defect, stable at 200 °C
- [[../failure-modes/Cu3Si-formation-at-Si-interface]] — η′-Cu₃Si begins to form at 200 °C at thin-film-Cu/Si interface
- [[../failure-modes/Voc-degradation-Cu-contamination]] — minority-carrier lifetime collapse from interstitial Cu

## Supports / contradicts
- Supports: [[2014-rehman-nicu-plating-csi-review]], [[2022-karas-cu-outdiffusion-damp-heat]], [[2019-karas-damp-heat-degradation-shj-cu]]
- Supports: [[2018-electrochemsci-barrier-properties-electroplated-ni]] (motivates Ni barrier requirement)

## Notable quotes
- "Cu-LID is determined to be predominantly a bulk recombination effect, and the formed defects are found to be stable at 200°C." — abstract, p. iii
- "At RT, such out-diffusion has been observed to occur within a few hours to several days depending on the wafer thickness and the doping concentration." — p. 16
- "Although 45 min at 560°C predicts dissolution of precipitates smaller than 420 nm, only partial dissolution of heterogeneous precipitates has been observed at 360−560°C." — p. 18
