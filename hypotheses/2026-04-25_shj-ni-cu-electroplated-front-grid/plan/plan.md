---
type: plan
id: plan-v1
created: 2026-04-26
derived_from: hypothesis.md
sources_used: 45
corrections_applied: 0
total_budget_usd: 168450
total_timeline_weeks: 14
---

# Lab Brief — SHJ Ni/Cu Electroplated Front-Grid

> **Pull quote:** The hypothesis's pass/fail line is set not by Cu's bulk conductivity (Cu wins) but by whether a sub-100 nm Ni barrier can suppress sub-ppb Cu in-diffusion under 1000 h of EVA-derived acetic-acid attack — the same failure mode that has kept the silicon photovoltaic industry on silver for forty years.

| | |
|---|---|
| **Domain** | Photovoltaics — silicon heterojunction cell metallization |
| **Status** | Complete |
| **Total budget** | $168,450 |
| **Timeline** | 14 weeks |
| **Sources** | 45 (papers 25 · protocols 10 · catalogs 9 · retraction 1) |
| **Failure modes (top tier)** | 10 (5 critical · 8 high · 4 medium · 3 low across the full wiki) |

---

## Refined hypothesis

- **Intervention** — Replace the screen-printed silver front-grid on a commercial SHJ M6 cell with a NOBLE-style stack: PVD-Cu(50 nm)/Al(100 nm) seed → inkjet-printed 1 wt% NaOH(aq) selective Al etch → electroplated **Ni barrier (80 nm, sub-100 nm hypothesis target)** from a sulfamate bath → electroplated Cu (5 µm) from an acid Cu sulfate bath (Atotech Cupracid Ultra-class) → immersion Ag cap (~200 nm). Anneal 200 °C / 15 min for a-Si:H recovery.
- **Outcome** — ρc ≤ 2 mΩ·cm² (TLM) **AND** Δη ≤ 0.5 %abs after 1000 h damp-heat (IEC 61215, 85°C / 85% RH) on POE glass-glass mini-module **AND** ≥ 1 N/mm peel adhesion at 0 and 1000 h.
- **Threshold** — All three must hold simultaneously on Arm A. Cost target: ≤ 10% of Ag baseline at 5 GW production scale (sensitivity-tested at $25/oz Ag).
- **Mechanism** — Cu has highest interstitial diffusivity of any 3d metal in Si (D ≈ 3×10⁻⁴ exp(−0.18 eV/kT) cm²/s; traverses 400 µm Si in <11 h at room T per [[2015-lindroos-cu-lid-aalto-thesis]]). A continuous Ni layer ≥60 nm forms a NiSi/Ni₃Si silicide barrier. [[2018-electrochemsci-barrier-properties-electroplated-ni]] confirms 60 nm Ni fails at 300°C anneal but holds at 200°C; SHJ's ≤200°C bulk process budget should rescue the sub-100 nm claim.
- **Control** — Arm D: low-T SHJ-grade Ag paste (Heraeus SOL954 / Solamet PV42B / Namics LCT-class — **NOT** legacy fire-through PV21A/PV56S which are PERC-only). Secondary: Arm B (no Ni — SunDrive-style); Arm C (Ni 120 nm — Cheng safe threshold).

---

## Literature QC verdict — `similar-work-exists`

The exact architecture overlaps with multiple published demonstrations within ±20 nm Ni and ±2× damp-heat duration. **SunDrive Solar achieved 26.41 % certified Cu-plated SHJ at ISFH (Aug 2022) with no Ni barrier**; Fraunhofer ISE's NOBLE process reaches 22.6 % on M2 cells with PVD-seed + plated Cu; CSEM mini-modules survive 2000–2700 h damp heat.

**Where this experiment adds value beyond replication:**
1. Explicit 4-arm comparison sweeping Ni thickness 0/80/120 nm on the *same wafer batch* maps the Cheng 2018 threshold under SHJ ≤200°C — a measurement no published study has done.
2. Extended damp-heat to 2000 h on EVA vs POE matched laminates per Karas 2022 protocol gives an architecture-agnostic encapsulant decision rule.
3. GridMaster-class cost model anchored to ITRPV 2024 Ag-laydown trajectory and SunDrive ARENA process step list yields a defensible $/cell number that Hatt and Lachowicz do not publish.

**References:**
- [[2022-arena-sundrive-copper-metallisation-demonstration]] — primary supports anchor (26.41 % certified, 2700 h DH, Ni-free)
- [[2019-hatt-noble-shj-solrrl]] — closest published architectural analog (NOBLE process)
- [[2024-lachowicz-cu-plated-shj-aging-mini-modules]] — closest aging-protocol analog (CSEM mini-modules)

---

## Protocol

### Step 1 · Wafer sourcing & baseline characterization (8 h, all arms)
Procure 60 commercial SHJ M6 precursors from a pilot-line partner (CSEM / Meyer Burger / LONGi). Reject any wafer with QSSPC iVoc < 740 mV at injection 10¹⁵ cm⁻³.

- **Reagents:** [[../wiki/reagents/a-Si-H-passivation]] (60 wafers); [[../wiki/reagents/ITO-transparent-conductive-oxide]] (pre-deposited)
- **Failure warnings:** [[../wiki/failure-modes/a-Si-H-passivation-degradation]] · critical
- **Sources:** [[2022-arena-sundrive-copper-metallisation-demonstration]] · [[2018-pv-tech-metallization-interconnection-bifacial-shj]]

### Step 2 · PVD seed deposition Cu 50 nm / Al 100 nm (2 h, Arms A B C)
Sputter Cu(50 nm) + Al(100 nm) on front ITO. The Al's native AlOx is the NOBLE plating mask; hold 1–5 d ambient or 1 d at 50°C / 6% RH for AlOx contact angle 100–120° per [[2019-hatt-noble-shj-solrrl]].

- **Failure warnings:** [[../wiki/failure-modes/a-Si-H-passivation-degradation]] · critical · soft-sputter T<80°C, 200°C/15 min recovery anneal · [[../wiki/failure-modes/TCO-pitting-during-plating]] · medium
- **Sources:** [[2019-hatt-noble-shj-solrrl]] · [[2019-hatt-noble-bifacial-shj-aip]] · [[2021-hatt-stable-cu-plated-shj-eupvsec]]

### Step 3 · Inkjet-NaOH selective Al etch (NOBLE patterning) (1 h, Arms A B C)
Print 1 wt% NaOH(aq) ink (2–5 pL droplets, [[../wiki/sources/notion-systems-solar-inkjet-overview|Notion Systems]] industrial inkjet) along grid pattern (1.4 mm pitch, 25 µm finger target). NaOH etches Al at 2.4–11 nm/s; doesn't attack Cu/Ag/ITO.

- **Reagents:** [[../wiki/reagents/inkjet-plating-resist]] (1 wt% NaOH(aq) etch ink)
- **Failure warnings:** [[../wiki/failure-modes/plating-resist-undercut]] · medium · pre-condition AlOx contact angle 100–120° · [[../wiki/failure-modes/TCO-pitting-during-plating]] · medium
- **Sources:** [[2019-hatt-noble-shj-solrrl]] · [[2019-hatt-noble-bifacial-shj-aip]] · [[notion-systems-solar-inkjet-overview]]

### Step 4 · Electroplated Ni barrier — Arm A: 80 nm, Arm C: 120 nm, Arm B: skip (30 min)
Sulfamate Ni: Ni(SO₃NH₂)₂ 80 g/L · NiCl₂ 5 g/L · H₃BO₃ 35 g/L · pH 3.8–4.2 · 50°C · 4 A/dm². Verify thickness by surface XRF. **Pinhole-decoration test (Cu displacement, 5 min) before next step is REQUIRED**; reject if pinhole density >10 cm⁻².

- **Reagents:** [[../wiki/reagents/nickel-sulfamate-bath]] (80 g/L) — Thermo Fisher AA8902018 · [[../wiki/reagents/boric-acid]] (35 g/L) — Fisher A74-500
- **Failure warnings:**
  - [[../wiki/failure-modes/Ni-barrier-pinholes]] · **high** · sub-100 nm below Cheng 60 nm-fails-at-300°C threshold; rescued by SHJ ≤200°C cap
  - [[../wiki/failure-modes/Cu-diffusion-into-c-Si]] · **critical** · TCO ≥75 nm acts as co-barrier; SIMS at 1000 h DH for verification
- **Sources:** [[2014-rehman-nicu-plating-csi-review]] · [[2018-electrochemsci-barrier-properties-electroplated-ni]] · [[2010-bartsch-lip-pvsc]] · [[fisher-AA8902018-nickel-sulfamate-hydrate]]

### Step 5 · Electroplated Cu thickening 5 µm (1.5 h, Arms A B C)
Atotech Cupracid Ultra-class: CuSO₄·5H₂O 220 g/L · H₂SO₄ 60 g/L · Cl⁻ 100 ppm · brightener 5–10 mL/L. Pulsed 6 A/dm², 15 ms forward / 1 ms reverse, anodic:cathodic 4.5 per [[2019-hatt-noble-shj-solrrl]]. P-Cu bagged anodes. Target aspect ratio 0.6 at 25 µm finger width.

- **Reagents:** [[../wiki/reagents/acid-Cu-sulfate-bath]] — Atotech Cupracid Ultra A · [[../wiki/reagents/sulfuric-acid-H2SO4]] — Fisher AC424525000
- **Failure warnings:** [[../wiki/failure-modes/TCO-pitting-during-plating]] · medium · [[../wiki/failure-modes/finger-adhesion-loss-after-DH]] · **high** · pre-plate 10% H₂SO₄ activation
- **Sources:** [[2019-hatt-noble-shj-solrrl]] · [[2022-arena-sundrive-copper-metallisation-demonstration]] · [[atotech-cupracid-ultra-a-tds]] · [[fisher-AC197730010-cu-sulfate-pentahydrate-sds]] · [[fisher-AC424525000-sulfuric-acid-acs-sds]]

### Step 6 · Immersion Ag cap ~200 nm (20 min, Arms A B C)
Galvanic-displacement Ag (Atotech Bondaglas-class). [[2019-hatt-noble-shj-solrrl]]: ~200 nm cap survives 1000 h DH on POE glass-glass; [[2022-karas-cu-outdiffusion-damp-heat]] contradiction: same cap fails on EVA.

- **Reagents:** [[../wiki/reagents/silver-Ag-cap]] (~200 nm immersion) — Atotech / MacDermid Alpha
- **Failure warnings:** [[../wiki/failure-modes/Cu-finger-oxidation-damp-heat]] · high · EDS continuity check ≥150 nm · [[../wiki/failure-modes/Cu-out-diffusion-through-cap-stack]] · high · pair with POE in step 9
- **Sources:** [[2019-hatt-noble-shj-solrrl]] · [[2022-karas-cu-outdiffusion-damp-heat]]

### Step 7 · PVD-stack etch-back & low-T anneal (1.25 h, Arms A B C)
Sequential selective wet etches per [[2019-hatt-noble-shj-solrrl]] page 11: (NH₄)₂S₂O₈ 2.5% removes Cu seed; NaOH 1% removes residual Al. **Final 200°C / 15 min anneal in air to recover a-Si:H — DO NOT EXCEED 200°C** ([[2018-electrochemsci-barrier-properties-electroplated-ni]] Cu₃Si onset).

- **Failure warnings:** [[../wiki/failure-modes/TCO-pitting-during-plating]] · medium · [[../wiki/failure-modes/Cu3Si-formation-at-Si-interface]] · **critical** · hard ≤200°C cap on every subsequent step
- **Sources:** [[2019-hatt-noble-shj-solrrl]] · [[2018-electrochemsci-barrier-properties-electroplated-ni]]

### Step 8 · Cell-level baseline characterization (4 h, all arms)
TLM (10-line, 700–4800 µm spacing per [[2012-nrel-aluminum-metallization-tlm-printed]]) · Suns-Voc + dark IV (Sinton) · STC IV (AM1.5g class AAA) · 90° peel test ([[2014-fraunhofer-peel-testing-ribbons-solar-cells]] Geipel 2014) · EL imaging · QSSPC bulk τ. **Reject Arm A if ρc > 2 mΩ·cm² at t=0 — early stop.**

- **Failure warnings:** [[../wiki/failure-modes/FF-degradation-contact-resistance]] · high · early-stop criterion
- **Sources:** [[2012-nrel-aluminum-metallization-tlm-printed]] · [[2014-fraunhofer-peel-testing-ribbons-solar-cells]] · [[2019-hatt-noble-shj-solrrl]]

### Step 9 · Mini-module lamination POE glass-glass + PIB edge seal (1.5 h, all arms + 1 EVA contrast)
2 mm low-Fe glass / 0.45 mm POE / cell / 0.45 mm POE / 2 mm glass. Pb-free SnBi solder. Vacuum 145°C / 12 min (POE profile). One Arm A laminate uses EVA — paired contrast per [[2022-karas-cu-outdiffusion-damp-heat]].

- **Reagents:** [[../wiki/reagents/POE-polyolefin-encapsulant]] (Borealis Quentys / Hangzhou First) · [[../wiki/reagents/EVA-encapsulant]] (control contrast) · [[../wiki/reagents/multibusbar-Cu-ribbon]] (Schlenk / Ulbrich SnBi)
- **Failure warnings:**
  - [[../wiki/failure-modes/EVA-acetic-acid-corrosion]] · **high** · Karas 2022 ~3× more Cu in Si on EVA vs POE
  - [[../wiki/failure-modes/Cu-finger-corrosion-encapsulant]] · **high** · PIB edge seal mandatory ([[2024-lachowicz-cu-plated-shj-aging-mini-modules]])
- **Sources:** [[2022-karas-cu-outdiffusion-damp-heat]] · [[2024-lachowicz-cu-plated-shj-aging-mini-modules]] · [[2022-arena-sundrive-copper-metallisation-demonstration]]

### Step 10 · Damp-heat 0 → 1000 h IEC 61215 with checkpoints (1000 h ≈ 6 wk)
85°C / 85% RH per IEC 61215 §10.13. Open-circuit. Checkpoints at 250, 500, 750, 1000 h: STC IV + Suns-Voc + EL. [[2013-koehl-fraunhofer-accelerated-service-life-testing]] Arrhenius: 1000 h ≈ 9 yr moderate / 3 yr tropical.

- **Failure warnings:** [[../wiki/failure-modes/Cu-out-diffusion-through-cap-stack]] · high · [[../wiki/failure-modes/finger-adhesion-loss-after-DH]] · high
- **Sources:** [[2012-nrel-iec61215-what-it-is]] · [[2011-nrel-reliability-testing-beyond-qualification]] · [[2013-koehl-fraunhofer-accelerated-service-life-testing]] · [[2022-karas-cu-outdiffusion-damp-heat]]

### Step 11 · Extended damp-heat 1000 → 2000 h (IEC 63209) (1000 h ≈ 6 wk)
Per [[2024-nrel-getting-ahead-of-curve-pv-assessment]] recommendation that 1000 h is no longer sufficient for SHJ-Cu. Karas 2022: EVA fails at 2000–3500 h, POE survives. Re-measure at 1500 / 2000 h. Pass: Δη ≤ 1.0 %abs at 2000 h on Arm A.

- **Failure warnings:** [[../wiki/failure-modes/EVA-acetic-acid-corrosion]] · high · [[../wiki/failure-modes/Ni-Cu-line-resistance-rise-DH]] · medium
- **Sources:** [[2024-nrel-getting-ahead-of-curve-pv-assessment]] · [[2024-lachowicz-cu-plated-shj-aging-mini-modules]] · [[2022-karas-cu-outdiffusion-damp-heat]]

### Step 12 · Post-DH SIMS Cu-in-c-Si verification (8 h analysis time)
Cleave one cell per arm at 0, 1000, 2000 h. Dynamic SIMS (O₂⁺ primary, 50×50 µm raster under finger). [[2022-karas-cu-outdiffusion-damp-heat]] threshold: Cu signal in c-Si > 3× Ag-screen-print reference is diagnostic. CAMECA / Eurofins / university SIMS facility.

- **Failure warnings:** [[../wiki/failure-modes/Cu-diffusion-into-c-Si]] · **critical** · hypothesis-rejecting if Cu detected with intact TCO+Ni
- **Sources:** [[2022-karas-cu-outdiffusion-damp-heat]] · [[2025-yacouba-shj-silver-free-metallization-progPV]] · [[2018-electrochemsci-barrier-properties-electroplated-ni]]

### Step 13 · Cost analysis & roadmap synthesis (8 h)
Compute $/cell front-side metallization cost using SunDrive ARENA process step-list (4 steps Cu vs 1 SP-Ag) and ITRPV 2024 Ag-laydown trajectory (~9 mg/cell SHJ now → 5 mg/cell 2034). Sensitivity at $25/oz and $35/oz Ag.

- **Sources:** [[2022-arena-sundrive-copper-metallisation-demonstration]] · [[2024-itrpv-15th-edition-roadmap]] · [[2021-goldschmidt-tech-learning-tw-pv]] · [[2025-fraunhoferise-transition-ag-cu-screen-printed-shj]]

---

## Materials

| Reagent | Supplier | Catalog | Qty | Unit | Price |
|---|---|---|---|---|---|
| [[../wiki/organisms/SHJ-cell-M6]] | CSEM / Meyer Burger / LONGi | SHJ-M6-pre-metallization | 60 | wafers | $1,500 |
| [[../wiki/reagents/nickel-sulfamate-bath]] | Thermo Scientific / Alfa Aesar | AA8902018 | 2 | kg | $850 |
| [[../wiki/reagents/boric-acid]] | Fisher Scientific | A74-500 | 1 | kg | $95 |
| [[../wiki/reagents/acid-Cu-sulfate-bath]] | Atotech / MKS | Cupracid Ultra A | 1 | kit (10 L) | $2,800 |
| [[../wiki/reagents/sulfuric-acid-H2SO4]] | Fisher / Acros | AC424525000 | 5 | L | $220 |
| [[../wiki/reagents/silver-Ag-cap]] | Atotech / MacDermid Alpha | Bondaglas | 1 | kit (5 L) | $1,900 |
| [[../wiki/reagents/inkjet-plating-resist]] (NaOH ink) | Fisher | S318-500 | 500 | g | $75 |
| [[../wiki/reagents/POE-polyolefin-encapsulant]] | Borealis Quentys / Hangzhou First | Quentys SHJ-grade | 10 | sheets | $480 |
| [[../wiki/reagents/EVA-encapsulant]] (contrast) | Hangzhou First | STR-PV | 2 | sheets | $95 |
| [[../wiki/reagents/multibusbar-Cu-ribbon]] | Schlenk / Ulbrich | PV-ribbon SnBi | 10 | m | $95 |
| [[../wiki/reagents/low-T-Ag-paste-generic-SHJ-grade]] | Heraeus / DuPont / Namics | SOL954 (low-T SHJ) | 100 | g | $1,850 |
| SIMS analysis (12 samples) | CAMECA / Eurofins | Cu-trace depth profile | 12 | samples | $4,800 |
| TLM/4PP probe access | shared lab | — | 8 | weeks | $3,200 |

---

## Budget — total $168,450

| Category | Cost (USD) |
|---|---|
| Wafers / precursors | $1,500 |
| Plating chemistry | $5,940 |
| Encapsulation & module materials | $2,150 |
| Control reagent (Ag paste) | $1,850 |
| Equipment access | $28,500 |
| SIMS analysis | $4,800 |
| Personnel (1.5 FTE × 14 wk) | $84,000 |
| Safety & consumables | $3,200 |
| Reporting & dissemination | $6,800 |
| Indirect / overhead (10%) | $13,855 |
| Contingency (15%) | $15,855 |
| **Total** | **$168,450** |

---

## Timeline — 14 weeks active

```
Week 0 ─────► 2  Phase 1 · Wafer sourcing & batch validation
Week 2 ─────► 5  Phase 2 · NOBLE recipe optimisation on coupons
Week 5 ─────► 7  Phase 3 · Cell metallisation (Arms A–D)
Week 7 ─────► 8  Phase 4 · Baseline + lamination
Week 8 ─────►14  Phase 5 · IEC 61215 damp-heat 0 → 1000 h
Week 12 ────►14  Phase 7 · Cost analysis + manuscript (parallel)
Week 14 ────►20  Phase 6 · Extended DH 1000 → 2000 h + SIMS (continuation)
```

---

## Validation

### Success criteria (all must hold on Arm A)
1. ρc ≤ 2 mΩ·cm² by [[../wiki/methods/transfer-length-method]] at t=0 (n=5 cells, σ < 0.4)
2. Δη ≤ 0.5 %abs after 1000 h DH (paired t-test vs Arm D, p < 0.05)
3. Peel adhesion ≥ 1 N/mm at t=0 and t=1000 h ([[../wiki/methods/peel-test-90deg]])
4. SIMS Cu in c-Si ≤ 3× Arm D reference background ([[../wiki/methods/SIMS-depth-profile]])
5. Cost model ≤ 10% of Ag baseline at 5 GW scale, $25/oz Ag

### Failure (any) criteria
- ρc > 2 mΩ·cm² at t=0 → reject on contact-resistivity ground
- Δη > 1.0 %abs at 1000 h → reject on DH ground
- SIMS quantitative Cu in c-Si bulk on Arm A → reject on barrier-integrity ground
- Peel < 1 N/mm at any timepoint → reject on adhesion ground
- Cost > 30% of Ag baseline → reject on cost ground

---

## Failure Map (top 10)

| # | Mode | Severity | Step | Mitigation |
|---|---|---|---|---|
| 1 | [[../wiki/failure-modes/Cu-diffusion-into-c-Si]] | **critical** | 4 | sub-100 nm Ni + intact TCO co-barrier; SIMS verification |
| 2 | [[../wiki/failure-modes/Cu3Si-formation-at-Si-interface]] | **critical** | 7 | hard ≤200°C anneal cap |
| 3 | [[../wiki/failure-modes/Ni-barrier-pinholes]] | high | 4 | pinhole-decoration test before Cu plate |
| 4 | [[../wiki/failure-modes/EVA-acetic-acid-corrosion]] | high | 9 | use POE; EVA only as contrast laminate |
| 5 | [[../wiki/failure-modes/Cu-out-diffusion-through-cap-stack]] | high | 6 | Ag cap ≥150 nm continuous EDS-verified |
| 6 | [[../wiki/failure-modes/Cu-finger-corrosion-encapsulant]] | high | 9 | PIB edge seal mandatory |
| 7 | [[../wiki/failure-modes/FF-degradation-contact-resistance]] | high | 8 | optimize PVD seed; pulsed-reverse current |
| 8 | [[../wiki/failure-modes/finger-adhesion-loss-after-DH]] | high | 5 | HF + 10% H₂SO₄ activation; two-step plating |
| 9 | [[../wiki/failure-modes/TCO-pitting-during-plating]] | medium | 5 | endpoint reflectometry; (NH₄)₂S₂O₈ for Cu-only |
| 10 | [[../wiki/failure-modes/a-Si-H-passivation-degradation]] | **critical** | 2 | soft-sputter T<80°C; mandatory 200°C/15 min recovery |

---

## Sources used (45)

See [[index]] for full source roster. Top-cited:
- [[2022-arena-sundrive-copper-metallisation-demonstration]] — primary supports anchor
- [[2019-hatt-noble-shj-solrrl]] — closest published architectural analog
- [[2022-karas-cu-outdiffusion-damp-heat]] — failure-mode mechanism (EVA→Cu out-diffusion)
- [[2018-electrochemsci-barrier-properties-electroplated-ni]] — Ni barrier-thickness threshold
- [[2024-lachowicz-cu-plated-shj-aging-mini-modules]] — closest aging-protocol analog
- [[2024-itrpv-15th-edition-roadmap]] — Ag laydown trajectory for cost model
- [[2021-goldschmidt-tech-learning-tw-pv]] — TW-PV resource bottleneck framing
