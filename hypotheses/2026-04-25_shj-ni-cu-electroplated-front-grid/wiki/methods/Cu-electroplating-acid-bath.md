---
type: method
slug: Cu-electroplating-acid-bath
aliases: [acid copper sulfate electroplating, acid Cu plating, CuSO4/H2SO4 plating, DC Cu electrodeposition]
related_methods: [electroplated-Ni-Cu-stack, light-induced-plating, NOBLE-selective-Cu-plating, electroless-Ni-deposition, inkjet-mask-patterning, photolithography-mask-patterning, laser-ablation-of-dielectric, transfer-length-method]
key_reagents: [acid-Cu-sulfate-bath, sulfuric-acid-H2SO4, ITO-transparent-conductive-oxide, IWO-tungsten-doped-indium-oxide, silver-Ag-cap, tin-Sn-cap, inkjet-plating-resist]
known_failure_modes: [TCO-pitting-during-plating, plating-resist-undercut, lateral-Cu-edge-migration, Ni-barrier-pinholes, Cu-diffusion-into-c-Si, Cu-finger-corrosion-encapsulant, Cu-finger-oxidation-damp-heat, finger-adhesion-loss-after-DH]
sources: [2014-rehman-nicu-plating-csi-review, 2017-jeon-electroless-ni-front-metallization, 2018-electrochemsci-barrier-properties-electroplated-ni, 2018-pv-international-metallization-shj, 2018-pv-tech-metallization-interconnection-bifacial-shj, 2018-pvtech-metallization-shj-cells-modules, 2019-hatt-noble-bifacial-shj-aip, 2019-hatt-noble-shj-solrrl, 2020-verlinden-future-challenges-tw-pv, 2021-goldschmidt-tech-learning-tw-pv, 2021-hatt-stable-cu-plated-shj-eupvsec, 2022-arena-sundrive-copper-metallisation-demonstration, 2023-lachowicz-csem-stability-cu-plated-shj-mini-modules, 2023-taiyangnews-heterojunction-technology-report, 2024-itrpv-15th-edition-roadmap, 2024-lachowicz-cu-plated-shj-aging-mini-modules, atotech-cupracid-ultra-a-tds, atotech-solar-industry-overview, fisher-AC197730010-cu-sulfate-pentahydrate-sds, fisher-AC424525000-sulfuric-acid-acs-sds, pvtech-metallization-challenges-cell-manufacturing]
tags: [electroplating, copper, plating, acid-Cu, finger-formation, SHJ]
created: 2026-04-26
updated: 2026-04-26
---

# Acid copper sulfate electroplating

**Slug:** `methods/Cu-electroplating-acid-bath` · **Type:** method

## What it measures / does

Electrodeposits a thick (~10–20 µm) high-conductivity copper finger from a sulfuric-acid-acidified copper sulfate (CuSO₄/H₂SO₄/Cl⁻ + organic brightener) electrolyte onto a conductive substrate — for SHJ this is either the bare TCO (ITO/IWO), a thin PVD seed (Cu/Al, Ti, Ni), or an electroplated Ni barrier. It is the workhorse "thick-Cu" step that supplies the bulk of the finger cross-section in every plated SHJ metallization route reviewed here.

## When to use it

Use it whenever the front grid is plated rather than printed: it is the conductive layer in NOBLE (PVD seed + Cu plate), in SunDrive's adhesive direct-to-TCO process, in Ni/Cu/Sn(Ag) stacks built on electroplated or electroless Ni, and in CSEM's printed-seed-grid + dielectric mask + Cu plating route. It is also the right method for building TLM and Kelvin test patterns in a plated-Cu finger geometry to measure ρc on the actual plated stack rather than on a sputtered surrogate.

## Key parameters / setpoints

- **Bath composition (Atotech Cupracid ULTRA reference):** CuSO₄·5H₂O 195–255 g/L (210 g/L optimum), H₂SO₄ 50–70 g/L (60 g/L optimum, ~0.6 M), chloride 80–150 ppm (100 ppm optimum), organic brightener Parts A/B at 0.5 mL/L each.
- **Operating temperature:** 24–28 °C (Cupracid ULTRA optimum); higher T degrades additive performance.
- **Cathode current density:** 1.0–6.0 A/dm² (3.0 A/dm² optimum) for DC; pulsed plating in NOBLE used 6 A/dm² medium current with 15 ms forward / 1 ms reverse, anodic:cathodic ratio 4.5.
- **Anodes:** phosphorized-Cu (0.03–0.06 wt% P) nuggets in Ti baskets, bagged in dynel/PP; anode CD ≥ 0.5 A/dm² to maintain the black anode film.
- **Filtration:** 5-µm continuous filtration at 2–3 bath turnovers/hr to keep deposits bright and pinhole-free.
- **Deposit:** ~1.7 µΩ·cm bulk resistivity (CSEM reports ~2 µΩ·cm on plated finger), aspect ratios 1.0–1.2 demonstrated on prototype lines (SunDrive); finger widths down to 11 µm (SunDrive 25.54% record) and < 6 µm with optimised patterning.
- **Substrate / geometry:** simultaneous bifacial plating possible if the wafer rim makes electrical contact (NOBLE, SunDrive); single-side plating uses an O-ring sealed cell.

## Common variants

- **DC plating on PVD seed** (Geissbühler/CSEM, Hatt/NOBLE): Cu/Al or Cu/Ti seed sets the cathode plane; Cu plates uniformly because the seed is conductive.
- **Pulsed (forward/reverse) plating** (Hatt 2019 NOBLE): improves leveling on textured Si and aspect ratio.
- **Light-induced Cu plating (LIP)** — see [[methods/light-induced-plating]] — the cell's photovoltage drives plating; useful when the front side is a non-conductive seed but the cell is illuminated.
- **Direct adhesive Cu plating to TCO** (SunDrive proprietary): no PVD seed; relies on a tuned acid-Cu chemistry + interfacial adhesion engineering.
- **Through a dielectric / printed-seed mask** (CSEM/Lachowicz 3-step): the dielectric layer is not continuous on paste particles, so Cu plates selectively on the seed grid.

## Things to watch for

- The pH ≈ 1 sulfuric-acid bath dissolves ITO/IWO at any pinhole in the seed or barrier — see [[failure-modes/TCO-pitting-during-plating]]. Tighten chloride and additive control to keep the deposit conformal.
- Bright additive imbalance produces "mushrooming" over the resist edge — see [[failure-modes/lateral-Cu-edge-migration]] and [[failure-modes/plating-resist-undercut]].
- Bath impurities (S, Cl, C, O carried over from the electrolyte) embed in the Cu deposit and accelerate Kirkendall void formation at the Cu/Sn cap interface during damp-heat — see [[failure-modes/Cu-out-diffusion-through-cap-stack]] and Karas 2022.
- Without a Ni barrier or a dielectric/TCO + a-Si:H stack between the Cu and the c-Si, the deposited Cu drives [[failure-modes/Cu-diffusion-into-c-Si]] and [[failure-modes/Cu-LID-light-induced-degradation]].
- Toxic & aquatically harmful: Cu²⁺ and acid waste need closed-loop treatment.

## Related methods

- [[methods/electroplated-Ni-Cu-stack]] — pairs this Cu step with an upstream Ni barrier.
- [[methods/light-induced-plating]] — alternative drive mode for the same chemistry.
- [[methods/NOBLE-selective-Cu-plating]] — Fraunhofer ISE selective process built on this Cu step.
- [[methods/electroless-Ni-deposition]] — Ni-seed alternative that feeds the same Cu plating.
- [[methods/inkjet-mask-patterning]] / [[methods/photolithography-mask-patterning]] / [[methods/laser-ablation-of-dielectric]] — three patterning routes that define where the Cu plates.
- [[methods/transfer-length-method]] — measures ρc of the resulting Cu/seed/TCO stack.

## Citing sources

- [[sources/2014-rehman-nicu-plating-csi-review]] — review establishing the CuSO₄/H₂SO₄ bath as canonical for c-Si Cu metallization.
- [[sources/2017-jeon-electroless-ni-front-metallization]] — Cu thickening on electroless Ni-P seed.
- [[sources/2018-electrochemsci-barrier-properties-electroplated-ni]] — Cu plating on electroplated Ni at 25 °C with magnetic stirring; 1 cm² test geometry.
- [[sources/2018-pv-international-metallization-shj]] — CSEM trade review naming Cu plating as the high-aspect-ratio alternative to Ag screen print.
- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — three SHJ Cu-plating process routes; cost framework.
- [[sources/2018-pvtech-metallization-shj-cells-modules]] — TCO-as-Cu-barrier framing; Ni→Ni-silicide step in the standard plated stack.
- [[sources/2019-hatt-noble-bifacial-shj-aip]] — full-area bifacial Cu plating on PVD seed.
- [[sources/2019-hatt-noble-shj-solrrl]] — pulsed Cu plating recipe (6 A/dm², 15/1 ms).
- [[sources/2020-verlinden-future-challenges-tw-pv]] — Cu plating cited as the only material-sustainability resolution.
- [[sources/2021-goldschmidt-tech-learning-tw-pv]] — Cu plating in the per-Wp Ag-reduction trajectory.
- [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — large-area NOBLE 22.6%, ρc 0.1–1 mΩ·cm² on plated Cu.
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — adhesive direct-to-TCO Cu plating; record SHJ 25.54–26.41%.
- [[sources/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — Cu plating through dielectric + paste seed grid.
- [[sources/2023-taiyangnews-heterojunction-technology-report]] — industry survey naming Maxwell, SunDrive, GS-Solar plating commercializers.
- [[sources/2024-itrpv-15th-edition-roadmap]] — long-term Cu-containing-metallization market-share trajectory.
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — DH-aged Cu plated stacks on SHJ glass-glass mini-modules.
- [[sources/atotech-cupracid-ultra-a-tds]] — canonical industrial bath recipe.
- [[sources/atotech-solar-industry-overview]] — vendor product page positioning the bath for PV.
- [[sources/fisher-AC197730010-cu-sulfate-pentahydrate-sds]] — Cu source-salt SDS.
- [[sources/fisher-AC424525000-sulfuric-acid-acs-sds]] — H₂SO₄ component SDS.
- [[sources/pvtech-metallization-challenges-cell-manufacturing]] — IMEC review naming Cu plating as the seed-and-plate thick layer.
