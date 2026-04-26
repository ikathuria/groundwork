---
type: source
id: 2015-lindroos-cu-lid-aalto-thesis
source_type: paper
title: "Copper-related light-induced degradation in crystalline silicon"
authors: ["Lindroos, J."]
year: 2015
doi: ""
url: https://aaltodoc.aalto.fi/bitstreams/c6afc63c-b319-4ee4-8570-606d607b73f9/download
raw_path: raw/papers/2015-lindroos-cu-lid-aalto-thesis.pdf
tags: [Cu-LID, lifetime, Cu-Si, Ni-diffusivity, doctoral-thesis]
created: 2026-04-26
updated: 2026-04-26
---

# Copper-related light-induced degradation in crystalline silicon

**Lindroos, J.** — *Doctoral dissertation, Aalto University School of Electrical Engineering, 37/2015*. ISBN 978-952-60-6130-6.

## Summary

Doctoral dissertation (Aalto, 2015) compiling six published articles on copper-related light-induced degradation (Cu-LID) in c-Si. Establishes Cu-LID as a *bulk* (not surface) recombination effect, distinct from boron-oxygen LID. Quantifies Cu and Ni diffusivities and solubilities in Si, identifies the recombination defect candidates (substitutional Cu, Cu₃Si precipitates, Cu/Si-SiO₂ interface defects), and demonstrates that Cu-LID can be eliminated by negative surface charging (corona or Al₂O₃) — but *not* by 200 °C annealing. Includes the headline result that **Ni diffuses as fast as Cu in Si** (Publication VI, *J. Appl. Phys.* 113, 204906). This is the canonical reference quantifying *why* even a leaky Ni barrier on SHJ would catastrophically degrade minority-carrier lifetime.

## Key claims

- Interstitial Cu diffusivity in intrinsic/n-type Si: D_Cu,in(T) = (3.0±0.3)×10⁻⁴ exp(−0.18 eV / k_B T) cm²/s (Eq. 2.1) — among the highest of any 3d transition metal in Si.
- B-doped p-Si (NA < 10¹⁷ cm⁻³): effective Cu diffusivity follows Eq. 2.2; Cu can cross a 400 µm wafer with [B]=4×10¹⁵ cm⁻³ in <11 h at room temperature.
- Cu solubility: S_Cu(T) = 5×10²² exp(2.4 − 1.49 eV/k_B T) cm⁻³ (500–800 °C).
- Cu defect levels in Si: Cu_i (E_C −0.15 to −0.20 eV); Cu_s (E_V +0.20–0.23 and +0.41–0.46 eV); Cu_s Cu_i₃ complex (E_V +0.07 eV); Cu₃Si precipitate band (E_C −0.15 to −0.58 eV).
- Cu-LID is "predominantly a bulk recombination effect, and the formed defects are found to be stable at 200 °C" — i.e., damp-heat aging at 85 °C will *not* anneal out Cu-LID.
- Cu-LID disappears under negative surface charging (corona or Al₂O₃), but BO-LID does not — Cu-LID and BO-LID are mechanistically distinct.
- Cu-LID activation energy depends on Si doping concentration; effective Cu diffusivity sets the rate.
- **Publication VI:** Ni diffuses as fast as Cu in Si — implies a leaky Ni barrier (or out-diffusing Ni from the cap stack) carries its own bulk-recombination risk, not just Cu.

## Methods used

- [[methods/minority-carrier-lifetime-photoluminescence]] — primary characterisation tool across all six publications (μ-PCD, QSSPC, photoluminescence).
- [[methods/SIMS-depth-profile]] — referenced for Cu / Ni profiling in bulk Si (TXRF used in Publication III).

## Reagents

- [[reagents/Cu3Si-intermetallic]] — copper precipitate phase (η′-Cu₃Si) responsible for the deep defect band E_C −(0.15–0.58) eV.

## Organisms / substrates

- [[organisms/monocrystalline-Si-wafer-p-type]] — boron-doped Cz-Si and gallium-doped Cz-Si wafers; multicrystalline B-doped Si.
- [[organisms/monocrystalline-Si-wafer-n-type]] — n-type Si used in some publications for comparison.

## Failure modes flagged

- [[failure-modes/Cu-LID-light-induced-degradation]] — the entire thesis. Even sub-ppb Cu in the bulk causes minority-carrier lifetime collapse under illumination; defects stable at 200 °C.
- [[failure-modes/Cu-diffusion-into-c-Si]] — quantitative diffusivity / solubility data establishing that any Cu reaching the Si bulk reaches the entire wafer.
- [[failure-modes/Voc-degradation-Cu-contamination]] — Cu-LID manifests as Voc and Jsc loss in finished cells.

## Supports / contradicts

- **Supports:** [[sources/2014-rehman-nicu-plating-csi-review]] — Rehman invokes Cu's "highly active recombination centers" as motivation for the Ni barrier; Lindroos provides the quantitative substrate.
- **Supports:** [[sources/2018-electrochemsci-barrier-properties-electroplated-ni]] — Cheng shows when Cu reaches the Si interface (Cu₃Si formation); Lindroos shows what happens once it does.
- **Supports:** [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — SunDrive's argument that the SHJ a-Si:H + TCO stack acts as a Cu barrier rests on the assumption that *no* Cu reaches the Si bulk; Lindroos quantifies why that is non-negotiable.

## Notable quotes

> "Cu-LID is determined to be predominantly a bulk recombination effect, and the formed defects are found to be stable at 200°C. Slower Cu-LID is observed in Ga-Si compared to B-Si, suggesting that Cu-LID formation is limited by the effective copper diffusivity." — *Abstract*

> "Even though the boron doping decreases the diffusivity, CuB pairs remain unstable at RT, allowing copper to diffuse through a 400 μm wafer with [B]=4×10¹⁵ cm⁻³ in less than 11 h." — *p. 16*

> "This work confirms that nickel diffuses as fast as copper in silicon, emphasizing the importance of contamination control in silicon-based devices." — *Abstract*
