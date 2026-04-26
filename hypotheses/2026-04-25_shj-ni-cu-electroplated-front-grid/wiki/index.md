# Wiki Index — 2026-04-25_shj-ni-cu-electroplated-front-grid

> SHJ + sub-100 nm electroplated Ni + electroplated Cu front-grid metallization · target: ρc ≤ 2 mΩ·cm² and Δη ≤ 0.5 %abs after 1000 h damp-heat (85°C / 85% RH) · cost ≤ 10% of screen-print Ag baseline.

## Hypothesis

- [[hypothesis]] — root node (status: wiki).


## Methods (25)

- [[methods/Cu-electroplating-acid-bath]] — DC or pulsed electroplating of Cu from a sulfuric-acid-based CuSO4 electrolyte (Cupracid family) onto an externally-biased cathode.
- [[methods/EL-electroluminescence-imaging]] — Current is injected into the cell in the dark and the resulting near-IR (~1150 nm for c-Si) radiative-recombination emission is imaged with a cooled InGaAs or Si CCD camera.
- [[methods/EQE-measurement]] — External Quantum Efficiency: the cell's collection probability for photons of each wavelength, measured by illuminating with a monochromator and recording short-circuit current.
- [[methods/IV-curve-measurement]] — Cell-level current-voltage characterisation under standard test conditions (AM1.5g, 1000 W/m², 25 C).
- [[methods/NOBLE-selective-Cu-plating]] — Native Oxide Barrier Layer for Electroplating: a Fraunhofer ISE-developed selective Cu-plating process for SHJ.
- [[methods/Ni-sputter-deposition]] — Magnetron-sputter or e-beam deposition of a thin metal seed (Ni, Cu, Ag, TiW) blanket-coating the SHJ TCO surface.
- [[methods/SIMS-depth-profile]] — Dynamic Secondary Ion Mass Spectrometry sputters through a sample with a primary ion beam (commonly O2+ or Cs+) while detecting secondary ions, producing a depth profile of trace elements (Cu, Ni, Sn) at ppm-ppb sensitivity.
- [[methods/UV-preconditioning]] — Pre-stress UV exposure (typically 15-60 kWh/m² at 280-385 nm) preceding the IEC 61215 thermal-cycling / humidity-freeze sequence to detect UV-induced encapsulant discoloration, backsheet cracking, and (for SHJ) a-Si:H passivation degradation.
- [[methods/damp-heat-aging-1000h]] — Encapsulated cells / mini-modules are held at 85 C / 85% RH for >=1000 h under no electrical bias, then re-measured at STC.
- [[methods/dark-IV-suns-Voc]] — Sinton Suns-Voc records the open-circuit voltage as a function of varying flash-light intensity, producing an "implied IV" curve that is free of series-resistance effects.
- [[methods/electroless-Ni-deposition]] — Autocatalytic chemical reduction of Ni2+ from a nickel salt (NiSO4 or NiCl2) by sodium hypophosphite onto an activated Si/TCO surface, producing a Ni-P alloy film (typically 5-15 at% P) without external current.
- [[methods/electroplated-Ni-Cu-stack]] — A composite plated front-grid metallization: a thin Ni layer (electroplated or electroless) acts as Cu-diffusion barrier and adhesion promoter; a thicker Cu layer (typically 1-10 um) is the main conductor; a Sn or Ag cap protects against oxidation and enables soldering.
- [[methods/extended-damp-heat-IEC63209]] — Extended damp-heat tests beyond the IEC 61215 1000 h qualification dwell, including biased operation, multi-stress sequences, and polymer-specific durability protocols.
- [[methods/four-point-probe-sheet-resistance]] — Four-point Kelvin probe measurement eliminates probe-resistance error to give sheet resistance Rsh (Ohm/sq) of a thin film, or finger line resistance RL (Ohm/cm) of a printed/plated finger.
- [[methods/humidity-freeze-IEC61215-HF10]] — 10 cycles between 85 C / 85% RH and -40 C, designed to detect delamination, edge-deletion failures, and moisture-induced cracking in the encapsulant / backsheet stack.
- [[methods/inkjet-mask-patterning]] — Drop-on-demand inkjet printing deposits a patterned mask on the cell surface to define the plated-Cu grid.
- [[methods/laser-ablation-of-dielectric]] — A focused laser beam removes a dielectric layer (SiNx ARC for PERC, or Al/AlOx for NOBLE) along the desired contact-grid pattern, exposing the underlying Si or TCO for selective plating.
- [[methods/light-induced-plating]] — LIP uses the cell's own photovoltage under illumination to drive cathodic metal deposition onto a pre-patterned front grid (Ag seed, Ni seed, or directly onto laser-opened Si).
- [[methods/minority-carrier-lifetime-photoluminescence]] — Optical methods for the minority-carrier lifetime in a passivated wafer or cell: QSSPC (quasi-steady-state photoconductance, Sinton) gives an injection-dependent lifetime curve; μ-PCD gives spatially resolved decay; PL imaging at 1-sun gives a 2-D lifetime map with passivation damage as dark patches.
- [[methods/peel-test-90deg]] — Mechanical adhesion test specified in DIN EN 50461: a soldered interconnect ribbon is pulled away from the cell surface at a controlled angle (commonly 90 deg) at a constant velocity, and the steady-state peel force per unit ribbon width is recorded (N/mm).
- [[methods/photolithography-mask-patterning]] — A dry-film or liquid photoresist is laminated/coated over the cell surface, exposed through a photomask under UV light, developed to clear the contact-grid lines, and the cell is then plated through the resist mask.
- [[methods/screen-printed-Ag-paste]] — Industry-standard contact metallization: a viscous Ag (or AgCu / Cu) paste is squeegee-pressed through a fine-mesh screen onto the cell surface, then thermally cured.
- [[methods/temperature-cycling-IEC61215-TC200]] — Modules are cycled between -40 C and +85 C with peak-power current applied during the high-temperature portion (200 cycles for IEC 61215 qualification, 500 for Qualification Plus, 690+ for plated-Cu reliability research).
- [[methods/thermal-evaporation-Ag-cap]] — Deposits a thin silver capping layer (typically ~200 nm immersion or evaporated Ag) on top of the plated Cu finger.
- [[methods/transfer-length-method]] — TLM extracts contact resistivity rho_c (mOhm.cm²) and underlying sheet resistance Rsh (Ohm/sq) from the linear regression of total resistance vs spacing across an array of parallel metal lines.

## Reagents (21)

- [[reagents/AZO-aluminum-doped-zinc-oxide]] — An In-free transparent conductive oxide based on ZnO doped with ~1–2 at% Al.
- [[reagents/Cu-paste-low-temperature]] — A screen-printable / dispensable / pattern-transfer-printable Cu-based metallization paste that cures below the SHJ thermal ceiling (~250 °C), used as an Ag-replacement front- or rear-grid metallization.
- [[reagents/Cu3Si-intermetallic]] — A copper silicide intermetallic compound that forms when metallic Cu contacts crystalline silicon at temperatures as low as ~200 °C.
- [[reagents/EVA-encapsulant]] — The dominant photovoltaic module encapsulant film since the 1990s — a thermoplastic ethylene/vinyl-acetate copolymer typically containing 28–33% vinyl acetate.
- [[reagents/ITO-transparent-conductive-oxide]] — A degenerate-semiconductor transparent conductive oxide deposited by magnetron sputtering on the front and rear of an SHJ cell over the doped a-Si:H layers.
- [[reagents/IWO-tungsten-doped-indium-oxide]] — A high-mobility transparent conductive oxide variant in which tungsten replaces tin as the In2O3 dopant.
- [[reagents/POE-polyolefin-encapsulant]] — A polyolefin-elastomer-based PV encapsulant that does NOT generate acetic acid on hydrolysis (unlike EVA).
- [[reagents/a-Si-H-passivation]] — The defining feature of the silicon heterojunction (SHJ) cell.
- [[reagents/acid-Cu-sulfate-bath]] — A sulfuric-acid-based copper(II) sulfate electrolyte with chloride ions and proprietary organic additives (brightener, leveler, suppressor) that produces low-stress, ductile, bright, leveled Cu deposits.
- [[reagents/boric-acid]] — The standard pH buffer in nickel sulfamate, nickel sulfate (Watts), and many tin plating baths.
- [[reagents/electrically-conductive-adhesive-ECA]] — A conductive epoxy or acrylic adhesive filled with silver flakes (typically ~70–80 wt%) that bonds ribbons or shingles to metal pads at curing temperatures of 130–160 °C — well below the soldering temperatures of standard PV ribbons.
- [[reagents/inkjet-plating-resist]] — A patternable resist deposited by industrial inkjet printers — typically a hot-melt wax or thermoplastic that is solid at room temperature and printed at 50–80 °C.
- [[reagents/low-T-Ag-paste-Solamet-PV21A]] — DuPont's flagship front-side fire-through silver paste for PERC homojunctions.
- [[reagents/low-T-Ag-paste-Solamet-PV56S]] — DuPont Solamet PV56S is a back-side solderable silver paste designed for localized back-surface-field (LBSF) PERC cells with reduced silver loading (~60% solids).
- [[reagents/low-T-Ag-paste-generic-SHJ-grade]] — The screen-printable low-temperature-cure (≤200 °C) silver paste used to form the front and rear contact grid on standard SHJ cells.
- [[reagents/multibusbar-Cu-ribbon]] — The flat or round Cu ribbon / wire used to electrically connect cells into strings and modules.
- [[reagents/nickel-phosphorus-NiP-electroless]] — Autocatalytic nickel-phosphorus deposition from a NiSO4·6H2O + sodium hypophosphite (NaH2PO2·H2O) bath.
- [[reagents/nickel-sulfamate-bath]] — The canonical low-stress Ni electrolyte used to plate the sub-100 nm Ni diffusion-barrier seed between the SHJ TCO (or PVD seed) and the Cu finger.
- [[reagents/silver-Ag-cap]] — A thin (~200 nm – 1 µm) silver finishing layer plated or immersion-deposited over the top of the Cu finger.
- [[reagents/sulfuric-acid-H2SO4]] — Concentrated sulfuric acid — the conductivity-boosting acid of the [[acid-Cu-sulfate-bath]] and a workhorse pre-plating clean.
- [[reagents/tin-Sn-cap]] — A thin (~1 µm) tin finishing layer electroplated over the Cu finger to prevent oxidation and to enable standard ribbon soldering.

## Organisms / substrates (8)

- [[organisms/SHJ-cell-G12]] — Silicon-heterojunction solar cell on a 210×210 mm pseudo-square n-type Cz-Si wafer — the largest standard SHJ format.
- [[organisms/SHJ-cell-M10]] — Silicon-heterojunction solar cell on a 182×182 mm pseudo-square n-type Cz-Si wafer with symmetric a-Si:H passivation and ITO/low-In-TCO on both faces.
- [[organisms/SHJ-cell-M6]] — Silicon-heterojunction solar cell built on a 166×166 mm pseudo-square n-type Cz-Si wafer with symmetric intrinsic + doped a-Si:H passivation/emitter and TCO (typically ITO) on both sides.
- [[organisms/full-size-module-60-cell]] — Standard 60-cell (or 120-half-cell) crystalline-silicon photovoltaic module — the residential / commercial-rooftop form factor in which IEC 61215 qualification is run.
- [[organisms/full-size-module-72-cell]] — 72-cell (or 132/144-half-cell) crystalline-silicon module — the utility-scale form factor whose power class has scaled from ~400 Wp (2018, M2) to 700 W+ (2024, M10 / G12 / M10R / G12R) thanks to larger wafers and multibusbar interconnection.
- [[organisms/mini-module-glass-glass]] — Small-area photovoltaic test laminate, typically 1–6 cells (or shingles), built as a glass-encapsulant-cell-encapsulant-glass stack with no backsheet.
- [[organisms/monocrystalline-Si-wafer-n-type]] — Phosphorus-doped Czochralski-grown monocrystalline silicon wafer — the universal starting substrate for SHJ cells (and increasingly TOPCon and IBC).
- [[organisms/monocrystalline-Si-wafer-p-type]] — Boron-doped (sometimes Ga-doped) Czochralski monocrystalline silicon wafer — the dominant c-Si substrate from ~2005 through 2023, used in PERC and Al-BSF cell architectures.

## Failure modes (20)

- [[failure-modes/Cu-LID-light-induced-degradation]] — Once Cu reaches the c-Si bulk, illumination triggers formation of recombination-active defects whose nature is distinct from the well-known boron-oxygen LID.
- [[failure-modes/Cu-diffusion-into-c-Si]] — Copper is one of the fastest-diffusing impurities in silicon.
- [[failure-modes/Cu-finger-corrosion-encapsulant]] — Even with a robust diffusion barrier under the Cu, the *outer* surface of the finger sits in contact with the polymer encapsulant.
- [[failure-modes/Cu-finger-oxidation-damp-heat]] — Bare metallic Cu oxidises on exposure to oxygen/moisture, forming Cu₂O and CuO at the surface and (under acidic conditions) basic copper carbonates and acetates.
- [[failure-modes/Cu-out-diffusion-through-cap-stack]] — The Sn or Ag cap deposited on a plated Cu finger is supposed to seal the Cu in.
- [[failure-modes/Cu3Si-formation-at-Si-interface]] — When Cu makes direct contact with Si and is heated, it reacts to form copper silicide (η′-Cu₃Si) at the Si interface.
- [[failure-modes/ECA-discoloration-after-DH]] — Electrically conductive adhesives (ECAs) — typically silver-flake-filled epoxy or modified silicone — are used to bond ribbons or shingled-cell tabs at temperatures (~150 °C) below standard SnPbAg solder reflow (~220 °C), making them attractive for the SHJ thermal budget.
- [[failure-modes/EVA-acetic-acid-corrosion]] — Ethylene-vinyl-acetate (EVA) encapsulant hydrolyzes under hot/humid conditions to release acetic acid.
- [[failure-modes/FF-degradation-contact-resistance]] — The fill factor (FF) of a SHJ cell is gated by series resistance R_s, which has three additive components: lateral TCO sheet resistance, finger line resistance, and contact resistivity ρc at the ITO/metal interface.
- [[failure-modes/Jsc-loss-from-cap-stack-shading]] — The Cu/Sn/Ag finger-and-cap stack on the front side is opaque — its projected area on the cell directly subtracts from the active area for sunlight collection.
- [[failure-modes/Ni-Cu-line-resistance-rise-DH]] — The Cu finger's bulk resistance is set by its cross-section and bulk resistivity.
- [[failure-modes/Ni-barrier-pinholes]] — The Ni barrier between Cu and the SHJ cell stack must be a continuous, dense film.
- [[failure-modes/TCO-pitting-during-plating]] — The transparent conductive oxide (typically ITO, optionally IWO or AZO) on the SHJ front side is in direct contact with the acidic Cu sulfate plating bath during deposition.
- [[failure-modes/Voc-degradation-Cu-contamination]] — Cu interstitials and Cu₃Si precipitates act as deep-level Shockley-Read-Hall recombination centres in c-Si, lowering minority-carrier lifetime in the junction depletion region and the quasi-neutral bulk.
- [[failure-modes/a-Si-H-passivation-degradation]] — The SHJ Voc advantage (>730 mV) comes from the a-Si:H(i) intrinsic-layer passivation of the c-Si interface, which depends on hydrogen termination of dangling bonds.
- [[failure-modes/finger-adhesion-loss-after-DH]] — Plated Cu fingers adhere to the ITO TCO without the strong chemical bonding that fired Ag pastes form during sintering.
- [[failure-modes/lateral-Cu-edge-migration]] — Once Cu reaches the outer surface of a finger via [[Cu-out-diffusion-through-cap-stack]], the encapsulant is no longer a passive barrier — it becomes a transport medium.
- [[failure-modes/non-reproducibility-in-solar-cell-claims]] — This is a *methodological* failure mode rather than a device-physics one.
- [[failure-modes/plating-resist-undercut]] — In resist-based plating routes (CSEM photoresist, hot-melt inkjet ink), an organic mask is patterned with line-shaped openings, and Cu is electrodeposited only into the openings.
- [[failure-modes/silver-supply-bottleneck]] — This is not a device-failure mode but a *system-level* bottleneck that ultimately constrains terawatt-scale PV deployment.

## Sources (45)

- [[sources/2010-bartsch-lip-pvsc]] — Foundational Fraunhofer ISE paper (35th PVSC, 2010) demonstrating that a Ni-barrier + light-induced Cu plating (LIP) stack on aerosol/screen-printed Ag seed layers can match silver-LIP reference performance on c-Si solar cells, with a best efficiency of 20.3% on FZ high-efficiency substrates and 16.8% on industrial Cz.
- [[sources/2011-nrel-reliability-testing-beyond-qualification]] — Wohlgemuth & Kurtz IEEE-IRPS 2011 conference paper (NREL/CP-5200-50599).
- [[sources/2012-nrel-aluminum-metallization-tlm-printed]] — NREL conference paper (2012 IEEE PVSC) demonstrating aerosol-jet-printed Al metal ink as a non-contact, low-broken-wafer alternative to screen-printed Al back contacts on Si solar cells.
- [[sources/2012-nrel-iec61215-what-it-is]] — Wohlgemuth's 2012 PV Module Reliability Workshop presentation (NREL/PR-5200-54714) tracing IEC 61215 from its JPL Block-Buy origins (1970s-80s) through Block VI to the current standard.
- [[sources/2013-koehl-fraunhofer-accelerated-service-life-testing]] — Köhl (Fraunhofer ISE) Service Life Prediction conference presentation (Monterey, March 2013).
- [[sources/2014-fraunhofer-peel-testing-ribbons-solar-cells]] — Fraunhofer ISE 29th EU PVSEC (2014) paper that establishes the peel-test methodology used to qualify cell-metallization adhesion in production.
- [[sources/2014-nrel-pv-module-qualification-plus]] — NREL Technical Report TP-5200-60950 (December 2013, published 2014) co-authored with 3M, DuPont, and Black & Veatch.
- [[sources/2014-rehman-nicu-plating-csi-review]] — Comprehensive review (Materials, MDPI, 2014) of Ni/Cu plating for c-Si front-side metallization, predating the SHJ-specific wave but covering the LIP physics, electroless-Ni mechanisms, ARC patterning options, contact adhesion, parasitic ("ghost") plating, and long-term reliability — all of which are inherited by the SHJ-Ni/Cu hypothesis.
- [[sources/2015-lindroos-cu-lid-aalto-thesis]] — Doctoral dissertation (Aalto University, supervisor Hele Savin) compiling six publications that establish copper as a recombination-active impurity in crystalline silicon and characterise copper-related light-induced degradation (Cu-LID).
- [[sources/2017-jeon-electroless-ni-front-metallization]] — Hsieh et al.
- [[sources/2018-electrochemsci-barrier-properties-electroplated-ni]] — Cheng et al.
- [[sources/2018-nmat-graded-bandgap-perovskite-retraction-note]] — Nature Materials retraction (Vol.
- [[sources/2018-pv-international-metallization-shj]] — CSEM review (Photovoltaics International, 2018) — companion piece to the Faes et al.
- [[sources/2018-pv-tech-metallization-interconnection-bifacial-shj]] — CSEM/CEA review (Photovoltaics International, 2018) summarizing the M&I cost landscape for bifacial SHJ at the dawn of large-scale deployment.
- [[sources/2018-pvtech-metallization-shj-cells-modules]] — CSEM (Neuchâtel) review article in Photovoltaics International (2018) covering the three main metallization paths for SHJ cells: (1) low-temperature-cured Ag pastes with multiple printing on H-pattern cells, (2) fine-line printing combined with multi-wire SmartWire interconnection (SWCT) reducing Ag laydown to ~30 mg/side, and (3) Cu electroplating onto the front TCO.
- [[sources/2019-hatt-noble-bifacial-shj-aip]] — AIP Conference Proceedings companion paper (MIW 2018) by the Fraunhofer ISE NOBLE team that reports the first full-area (156×156 mm²) SHJ cell metallized by NOBLE: efficiency 20.0% with Voc up to 731 mV — i.e.
- [[sources/2019-hatt-noble-shj-solrrl]] — Foundational Solar RRL paper introducing Fraunhofer ISE's "NOBLE" (Native Oxide Barrier Layer for Electroplating) process for SHJ cells: a thin PVD Cu/Al or Ag/Al stack is deposited on ITO, then the Al layer is selectively patterned by inkjet-printed NaOHaq (1 wt%) — opening grid lines into the Al while its self-passivating Al₂O₃ inhibits Cu plating elsewhere.
- [[sources/2019-karas-damp-heat-degradation-shj-cu]] — Karas et al.'s first major DH study of plated Cu-metallised c-Si cells (Prog.
- [[sources/2020-verlinden-future-challenges-tw-pv]] — Verlinden frames the silver-consumption bottleneck as one of only a handful of genuine challenges to a 70 TW cumulative / 3 TW p.a.
- [[sources/2021-goldschmidt-tech-learning-tw-pv]] — Goldschmidt et al.
- [[sources/2021-hatt-stable-cu-plated-shj-eupvsec]] — 38th EU-PVSEC paper showing the NOBLE process matured to industrially relevant scale: 12 large-area SHJ cells reproducibly delivering ~22.6% with the optimized NaOHaq inkjet patterning, equal to the screen-printed Ag reference (22.7%) on the same SHJ precursors.
- [[sources/2022-arena-sundrive-copper-metallisation-demonstration]] — The publicly funded ARENA knowledge-sharing report from SunDrive (collaboration with UNSW and Maxwell Technologies) documenting the cell- and module-level demonstration of direct Cu electroplating onto the TCO of industrial SHJ cells.
- [[sources/2022-karas-cu-outdiffusion-damp-heat]] — Critical follow-up to Karas 2019/2020 (ASU/UNSW collaboration).
- [[sources/2023-lachowicz-csem-stability-cu-plated-shj-mini-modules]] — CSEM/CEA-INES/AMAT presentation at MIW 2023 (Module International Workshop, Neuchâtel, May 2023) — the conference precursor to [[2024-lachowicz-cu-plated-shj-aging-mini-modules]].
- [[sources/2023-taiyangnews-heterojunction-technology-report]] — TaiyangNews' 2023 industry report is the canonical mass-production-status snapshot for SHJ as of late 2022 / early 2023.
- [[sources/2023-tepner-printing-tech-csi-review]] — Definitive 30-page Tepner & Lorenz (Fraunhofer ISE) review (Prog.
- [[sources/2024-fraunhoferise-photovoltaics-report]] — Fraunhofer ISE's flagship periodic Photovoltaics Report.
- [[sources/2024-iea-pvps-trends-pv-applications]] — IEA PVPS Task 1's annual market report.
- [[sources/2024-itrpv-15th-edition-roadmap]] — ITRPV is the canonical industry-consensus roadmap, prepared by 50 leading poly-Si producers, wafer suppliers, c-Si cell/module manufacturers, equipment suppliers, materials providers and research institutes under VDMA.
- [[sources/2024-lachowicz-cu-plated-shj-aging-mini-modules]] — Peer-reviewed CSEM/CEA-INES/AMAT/DR-Utilight study (EPJ Photovoltaics 2024) of three-step plated-Cu metallization on SHJ cells: (1) screen-printed seed grid, (2) PECVD dielectric layer as plating mask, (3) selective Cu electrodeposition.
- [[sources/2024-lorenz-cutting-edge-metallization-shj-fraunhofer]] — Fraunhofer ISE Prog.
- [[sources/2024-nrel-best-research-cell-efficiency-chart]] — This is the canonical NREL efficiency-record chart used to identify SHJ Cu-plated record cells and to baseline c-Si single-junction efficiency limits.
- [[sources/2024-nrel-getting-ahead-of-curve-pv-assessment]] — NREL DuraMAT-funded review (IEEE J.
- [[sources/2024-siliconpv-novel-shj-metallization-architectures]] — Applied Materials Italia (Frasson & Galiazzo) SiliconPV 2024 paper benchmarking five low-T metallization pastes for SHJ cells: standard Ag micro, two AgCu (silver-coated-copper) formulations, reactive Ag particle-free ink, and Ag nano-size.
- [[sources/2025-fraunhoferise-transition-ag-cu-screen-printed-shj]] — Pingel et al.
- [[sources/2025-yacouba-shj-silver-free-metallization-progPV]] — Forschungszentrum Jülich IMD-3 study (Prog.
- [[sources/atotech-cupracid-ultra-a-tds]] — Atotech's flagship sulfuric-acid-based bright acid Cu plating process (TDS Issue 3, 14 Jan 2004 — replaces Issue 2 of 16 Jul 2002).
- [[sources/atotech-solar-industry-overview]] — Atotech's product-overview web page for its photovoltaic-metallization plating line (acquired by MKS in 2022).
- [[sources/dupont-solamet-pv21a-tech-sheet]] — DuPont (now Solamet/Solar Materials division) front-side fire-through silver paste, intended for co-firing with backside (p-type) Al conductors and tabbing Ag pastes such as Solamet PV5xx.
- [[sources/dupont-solamet-pv56s-data-sheet]] — DuPont Solamet PV56S is a back-side solderable silver paste optimized for localized back-surface-field (LBSF) cells — high adhesion to SiNx with reduced silver consumption, designed to suppress carrier recombination at the passivation layer (high Voc).
- [[sources/fisher-AA8902018-nickel-sulfamate-hydrate]] — Web product page for the canonical Ni source used to make up nickel sulfamate plating baths — the standard low-stress Ni electrolyte for the thin Ni barrier layer in this hypothesis (sub-100 nm Ni between TCO and Cu).
- [[sources/fisher-AC197730010-cu-sulfate-pentahydrate-sds]] — Fisher Scientific (Acros Organics) GHS/OSHA SDS for copper(II) sulfate pentahydrate (blue vitriol), CAS 7758-99-8.
- [[sources/fisher-AC424525000-sulfuric-acid-acs-sds]] — Fisher Scientific (Acros Organics) GHS/OSHA SDS for ACS-grade sulfuric acid, CAS 7664-93-9, ≥95% purity.
- [[sources/notion-systems-solar-inkjet-overview]] — Notion Systems GmbH (Schwetzingen, Germany) markets industrial inkjet printing equipment for both crystalline-Si solar (cSi) and thin-film solar applications.
- [[sources/pvtech-metallization-challenges-cell-manufacturing]] — IMEC (Belgium) industry-overview paper (Posthuma, John, Beaucarne, Van Kerschaver) reprinted in Photovoltaics International, surveying the state of metallization in crystalline-Si solar cells circa 2008-2009 and projecting future paths.

## Plans
_(none yet — Pass 3 will write `plans/plan-v1.md`)_

