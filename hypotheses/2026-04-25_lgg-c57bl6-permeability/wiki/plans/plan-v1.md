---
type: plan
id: plan-v1
slug: 2026-04-25_lgg-c57bl6-permeability
created: 2026-04-25
updated: 2026-04-25
derived_from: hypothesis
sources_used: 25
sources_total: 72
corrections_applied: 0
total_budget_usd: 19223
total_timeline_weeks: 10
novelty_verdict: similar-work-exists (with major caveats)
tags: [plan, lab-brief, FITC-dextran, LGG, C57BL/6]
---

# Plan v1 — *Lactobacillus rhamnosus* GG and C57BL/6 intestinal permeability

> Wiki-graph copy of the plan. Canonical source-of-truth: [[../../plan/plan.md|plan/plan.md]] · structured: [[../../plan/plan.json|plan/plan.json]] · interactive: [[../../plan/index.html|plan/index.html]].



> **Hand to a postdoc on Monday; first mouse gavaged Friday.**

| | |
|---|---|
| **Total budget** | $19,223 |
| **Total timeline** | 10 weeks |
| **n / arm** | 14 (LGG, PBS) — escalates to 18/arm if pilot SD demands |
| **Primary endpoint** | Plasma FD-4 (4 h post 600 mg/kg gavage), µg/mL |
| **Threshold** | LGG arm ≤ 70% of PBS mean (≥ 30% reduction); two-sided Mann–Whitney U at α = 0.05 |
| **Top failure modes** | [[../failure-modes/baseline-permeability-too-low-detect-30pct\|baseline floor]] · [[../failure-modes/coprophagy-microbiome-equilibration\|coprophagy collapse]] · [[../failure-modes/probiotic-bacteremia-sepsis\|probiotic sepsis]] |


## 1. Refined hypothesis

> **Daily oral gavage of viable LGG (ATCC 53103) at 1×10⁹ CFU/mouse/day for 28 days will lower plasma FITC-dextran 4 kDa (FD-4) by ≥ 30% in C57BL/6J mice, vs PBS-vehicle controls, measured 4 h after a single 600 mg/kg FD-4 gavage.**

| Element | Specification | Wiki entity |
|---|---|---|
| Intervention | LGG ATCC 53103, 1×10⁹ CFU/d × 28 d, oral gavage | [[../organisms/lactobacillus-rhamnosus-GG]] |
| Host | C57BL/6**J** (JAX 000664), 6–10 wk at start | [[../organisms/C57BL-6]] |
| Outcome | Plasma FD-4 fluorescence, 485/520 nm, 4 h post-gavage | [[../methods/FITC-dextran-permeability-assay]] |
| Threshold | ≥ 30 % reduction vs PBS; Mann–Whitney α = 0.05 | (this plan) |
| Mechanism candidates | [[../reagents/p40-LGG-derived-protein\|p40 → EGFR]] + [[../reagents/LGG-exopolysaccharide-EPS\|EPS]] + [[../methods/SCFA-quantification\|SCFA]] + claudin-2 ↓ | (multiple) |
| Control | PBS vehicle, same volume, same daily schedule | (this plan) |


## 2. Literature QC

**Verdict: `similar-work-exists` — *with major caveats*.**

The published LGG → intestinal-barrier literature is extensive (47/72 sources in this wiki touch the topic), but ~85 % is from **challenge models** (DSS, alcohol, HFD, NEC, post-weaning stress) — not unstressed adult C57BL/6. The closest published precedent (Singh 2014, LGG fermented milk in aging mice) was **retracted in 2024**.

**Three reference sources** (full corpus at [[../index]]):

1. **Suntornsaratoon et al. 2024** — [[../sources/2024-suntornsaratoon-lactobacillus-rhamnosus-gg-stimulates-dietary]]
   *Closest in design.* LGG + FITC-dextran in C57BL/6 with healthy + DSS arms; mechanistic depth via tryptophan → MNA → barrier.

2. **Yan et al. 2017** — [[../sources/2017-yan-neonatal-colonization-mice-lgg-promotes]]
   Yan/Polk lineage; LGG colonisation of mice with FD-4 readout. Neonatal-imprint design rather than adult unchallenged, but the barrier-protection mechanism is well characterised.

3. **Singh et al. 2014 (RETRACTED)** — [[../sources/2014-singh-lgg-fermented-milk-aging-mice-RETRACTED]]
   The most direct precedent — *and it didn't hold up*. Listed for transparency: this is the kind of result this hypothesis is testing, and the retraction is itself signal. See [[../failure-modes/positive-publication-bias-LGG-literature]].


## 3. Protocol (10 steps, 4 phases)

### Phase 1 — Setup (Weeks 1–2)

#### Step 1 · Order C57BL/6J mice and acclimate (14 d)

- Order **n = 32** [[../organisms/C57BL-6|C57BL/6J]] (Jackson 000664), single shipment, 6 wk at arrival
- Group-house 4/cage by treatment arm: 8 cages total (4 LGG, 4 PBS)
- Separate ventilated rack rows for treatment vs control
- Standard chow + autoclaved water ad lib; ≥ 14 d acclimation

⚠ **Failure modes addressed:**
- 🟧 [[../failure-modes/C57BL-6J-vs-N-substrain-confounder]] — pre-register substrain
- 🟧 [[../failure-modes/vendor-of-origin-microbiome-baseline]] — single vendor + acclimation
- 🟥 [[../failure-modes/coprophagy-microbiome-equilibration]] — separate cages, alternate rack rows, dedicated PPE, control-first cage-change order

> **Why this matters:** C57BL/6J pre-registration locks the substrain confounder; single shipment + acclimation locks vendor microbiome; cage design + handling order locks coprophagy. These three together prevent silent loss of the LGG-vs-control contrast.

Sources: [[../sources/2017-yan-neonatal-colonization-mice-lgg-promotes]], [[../sources/2024-suntornsaratoon-lactobacillus-rhamnosus-gg-stimulates-dietary]]

#### Step 2 · Establish LGG working stock (3 d)

- Sealed [[../organisms/lactobacillus-rhamnosus-GG|ATCC 53103]] vial → 10 mL [[../reagents/MRS-broth|MRS broth]] starter (37 °C, 16 h) → 100 mL working culture → harvest at OD₆₀₀ ≈ 1.0
- Wash 2× in sterile PBS; resuspend in 50 % PBS / 50 % glycerol
- Freeze **100 single-use 1 mL cryoaliquots at −80 °C**
- QC: serial-dilute 1 aliquot on MRS agar (anaerobic, 37 °C, 48 h) → confirm ≥ 1×10¹⁰ CFU/mL
- Genotype: colony PCR for SpaCBA pilus locus on 5 random colonies

⚠ 🟧 [[../failure-modes/LGG-strain-drift-passage]] — single working bank; ≤ 5 passages cryostock-to-dosing.

Sources: [[../sources/2025-si-lactobacillus-rhamnosus-gg-induces-sting]]

#### Step 3 · Calibrate FD-4 standard curve in pooled mouse plasma (4 h)

- Bleed 4 reserve mice (terminal cardiac under anaesthesia)
- Pool plasma → spike with [[../reagents/FITC-dextran-4kDa]] to 8 standards (0, 0.1, 0.25, 0.5, 1, 2.5, 5, 10 µg/mL)
- Read 485 ex / 520 em, top read, black 96-well plate
- Confirm linearity (R² > 0.99); document slope vs buffer-only curve (matrix correction factor)

⚠ 🟧 [[../failure-modes/serum-autofluorescence-FITC-readout]], 🟧 [[../failure-modes/FITC-dextran-photobleaching]]

Sources: [[../sources/2023-aldarsgarca-ex-vivo-intestinal-permeability-assay]]

#### Step 4 · Pilot — estimate baseline FD-4 SD (n = 4, 6 h)

- 4 acclimated reserve mice, 6 h fast, water ad lib
- 600 mg/kg FD-4 by gavage in sterile PBS
- 4 h post-gavage submandibular bleed; plasma FD-4 fluorescence on calibrated curve
- Recompute power. If n = 14/arm too low, escalate to 18/arm

⚠ 🟥 [[../failure-modes/baseline-permeability-too-low-detect-30pct]] — **the headline risk.** If pilot mean FD-4 < 0.5 µg/mL OR SD/mean > 0.5, **re-design**: add a mild-DSS positive-control arm OR escalate primary endpoint to plasma LBP.

⚠ 🟧 [[../failure-modes/incomplete-fasting-before-gavage]] — standardised 6-h daytime fast.

Sources: [[../sources/2024-suntornsaratoon-lactobacillus-rhamnosus-gg-stimulates-dietary]], [[../sources/2021-boerner-functional-assessment-intestinal-permeability-neutrophil]]

### Phase 2 — Intervention (Weeks 3–6)

#### Step 5 · Daily LGG / PBS gavage × 28 days

- Each morning: thaw one [[../organisms/lactobacillus-rhamnosus-GG|LGG]] aliquot per arm; wash 1× in cold PBS; resuspend at 5×10⁹ CFU/mL
- Keep on ice; gavage all LGG-arm mice within 90 min of prep (200 µL = **1×10⁹ CFU/mouse**)
- PBS arm: same volume of sterile PBS
- **Plate dose-day CFU on MRS-agar from every cage's gavage suspension** — reject day if < 80 % of design dose
- Same time of day (08:00–10:00); rotate handler order arm-balanced
- **Weekly:** fresh faecal pellet per cage → CFU on MRS-agar (anaerobic) + archive aliquot for end-of-study 16S
- **Daily welfare scoring** (weight, posture, coat, activity); humane endpoint criteria per IACUC

⚠ 🟧 [[../failure-modes/LGG-viability-loss-during-gavage-prep]] — fresh prep, ice, 90-min cap, on-day CFU on every cage.

⚠ 🟥 [[../failure-modes/coprophagy-microbiome-equilibration]] — weekly LGG-on-controls check. **Any positive in the control arm = study integrity compromised.**

⚠ 🟥 [[../failure-modes/probiotic-bacteremia-sepsis]] — daily welfare scoring; humane endpoint criteria pre-defined; blood culture on any unexpected illness. (Rare but documented in [[../sources/2025-farella-lactobacillus-rhamnosus-sepsis-preterm-infant]]; this protocol uses immunocompetent adults so risk is low but non-zero.)

⚠ 🟧 [[../failure-modes/LPS-contamination-bacterial-prep]] — endotoxin-grade water + consumables; LAL-quantify one batch.

Sources: [[../sources/2025-farella-lactobacillus-rhamnosus-sepsis-preterm-infant]], [[../sources/2025-si-lactobacillus-rhamnosus-gg-induces-sting]], [[../sources/2024-hu-autoinducer-promotes-colonization-lactobacillus-rhamnosus]]

### Phase 3 — Endpoint (Week 7)

#### Step 6 · Endpoint FD-4 assay (Day 29, ~12 h)

- **06:00** — remove food + visible crumbs from all cages (start 6 h fast); water ad lib
- **12:00** — gavage 600 mg/kg [[../reagents/FITC-dextran-4kDa|FD-4]] in sterile PBS; foil-wrapped syringes; randomise gavage order across arms (block by cage)
- **16:00 (4 h)** — submandibular bleed under brief isoflurane; ≥ 75 µL plasma into EDTA tubes; ice + foil
- **Same-day plate read** on the pre-calibrated standard curve; re-run a 4-point standard alongside samples on the same plate
- Reject any haemolysed samples; document

⚠ 🟧 [[../failure-modes/incomplete-fasting-before-gavage]], 🟧 [[../failure-modes/FITC-dextran-photobleaching]], 🟧 [[../failure-modes/serum-autofluorescence-FITC-readout]], 🟧 [[../failure-modes/FITC-dextran-dose-timing-heterogeneity]] — all pre-mitigated by the design.

Sources: [[../sources/2024-suntornsaratoon-lactobacillus-rhamnosus-gg-stimulates-dietary]], [[../sources/2023-aldarsgarca-ex-vivo-intestinal-permeability-assay]], [[../sources/2021-boerner-functional-assessment-intestinal-permeability-neutrophil]]

#### Step 7 · Sacrifice + tissue harvest (Day 29 PM, ~8 h)

- Terminal cardiac stick under deep anaesthesia → remaining plasma for [[../methods/LPS-endotoxin-quantification|LBP ELISA]]
- Harvest 2 cm each: distal ileum, proximal colon, distal colon
- Bisect each segment: half → 10 % formalin (IF); half → snap-freeze in LN₂ (WB + qPCR)
- Caecum content → pre-weighed cryotube; snap-freeze for [[../methods/SCFA-quantification|SCFA GC-FID]]
- Final faecal pellet → [[../methods/16S-rRNA-microbiome-sequencing|16S]] (matched per mouse)

⚠ 🟧 [[../failure-modes/ZO-1-occludin-detection-artifacts]] — adjacent-section design (formalin + frozen halves) lets us run paired WB + IF on every animal.

### Phase 4 — Mechanism overlay + analysis (Weeks 8–10)

#### Step 8 · Tight-junction WB + IF on ileum (3 d)

- Mucosal scrape from frozen ileum; RIPA lysis; BCA quantification
- WB: ZO-1 (CST 13663), occludin (Inv 71-1500), claudin-1 (Inv 51-9000), claudin-2 (Inv 32-5600); GAPDH + Ponceau total-protein normalisation
- IF on adjacent sections: ZO-1 + occludin co-stain with E-cadherin
- **Blinded quantification** — analyst unaware of treatment until after scoring

⚠ 🟧 [[../failure-modes/ZO-1-occludin-detection-artifacts]] — single antibody lot; Ponceau normalisation; blinded IF; positive-control DSS-damaged colon on every blot.

Sources: [[../sources/2018-shen-supplementation-p40-lactobacillus-rhamnosus-gg]], [[../sources/2021-deng-exposure-p40-early-life-prevents]]

#### Step 9 · Plasma LBP ELISA + caecal SCFA + 16S (3 d, parallel)

- **LBP**: Hycult HK205, all samples in duplicate on a single plate
- **Caecal SCFA**: GC-FID with 2-ethylbutyric acid IS; report µmol/g caecal content
- **Faecal 16S**: V3–V4 amplicon on Illumina MiSeq, ≥ 30 000 reads/sample
- **LGG strain qPCR** (welE primers) on parallel aliquot — **post-hoc cage-integrity check**

⚠ 🟥 [[../failure-modes/coprophagy-microbiome-equilibration]] — welE qPCR on control-arm faeces is the post-hoc confirmation. A positive finding here invalidates the LGG-arm contrast.

#### Step 10 · Statistical analysis + writeup (5 d)

- **Primary endpoint**: two-sided Mann–Whitney U on plasma FD-4; 95 % CI on percent reduction by bootstrap (10 000 resamples)
- **Secondary**: Mann–Whitney on LBP, on tight-junction WB densitometry, on caecal SCFA — FDR-corrected
- Engraftment confirmation: LGG-arm faecal LGG CFU > 0 throughout; control-arm = 0 throughout
- Sensitivity: exclude any cage with dose-day CFU < 80 % of design
- **Pre-register on OSF before unblinding**
- **Commitment**: publish regardless of direction (including null), within 6 months of analysis lock

⚠ 🟥 [[../failure-modes/positive-publication-bias-LGG-literature]] — pre-registered analysis + commitment to publish null; cite the [[../sources/2014-singh-lgg-fermented-milk-aging-mice-RETRACTED|Singh 2014 retraction]] in the discussion as the precedent that didn't hold up.

⚠ 🟥 [[../failure-modes/baseline-permeability-too-low-detect-30pct]] — if pilot already escalated n or switched primary endpoint to LBP, document deviation transparently.


## 4. Materials

| Category | Item | Supplier | Catalog | Qty | Subtotal |
|---|---|---|---|--:|--:|
| Animals | C57BL/6J mice, 6 wk | Jackson Laboratory | `000664` | 32 | $1,120 |
| Strain | LGG | ATCC | `53103` | 1 vial | $590 |
| Media | MRS broth (Difco) | BD | `288130` | 500 g | $200 |
| Media | MRS agar (Difco) | BD | `288210` | 500 g | $150 |
| Assay | FITC-dextran 4 kDa | Sigma-Aldrich | `46944` | 1 g | $290 |
| Consumables | 22 G stainless ball-tip gavage needle | Kent Scientific | `FNS-22-1.5` | 4 | $140 |
| ELISA | Mouse LBP ELISA kit | Hycult Biotech | `HK205` | 1 | $685 |
| ELISA | Mouse IL-10 + TNF-α + IL-6 multiplex | Meso Scale Discovery | `K15048D-1` | 1 | $820 |
| Antibody | ZO-1 Rabbit mAb | Cell Signaling | `13663` | 100 µL | $460 |
| Antibody | Occludin polyclonal | Invitrogen | `71-1500` | 100 µg | $410 |
| Antibody | Claudin-1 polyclonal | Invitrogen | `51-9000` | 100 µg | $380 |
| Antibody | Claudin-2 polyclonal | Invitrogen | `32-5600` | 100 µg | $380 |
| Antibody | HRP secondaries (anti-Rb, anti-Ms) | Jackson Immuno | `111-035-003` | 2 | $350 |
| Consumables | WB chemilum + plates + tubes + tips + lysis | various | — | pool | $1,200 |
| Sequencing | 16S V3-V4 (prep + MiSeq) | core facility | — | 36 | $1,800 |
| Metabolomics | Caecal SCFA GC-FID | core facility | — | 32 | $1,280 |


## 5. Budget

| Category | Subtotal | Notes |
|---|--:|---|
| Animals | $1,400 | 32 × C57BL/6J + shipping |
| Strain + media | $940 | ATCC 53103 + MRS broth + agar |
| FD-4 assay reagent | $290 | Sigma 46944 |
| ELISA / multiplex | $1,505 | LBP + cytokine multiplex |
| Antibodies | $1,980 | ZO-1, occludin, claudin-1, claudin-2 + secondaries |
| Consumables | $1,340 | WB, plates, tubes, gavage needles |
| 16S sequencing | $1,800 | 36 samples × $50 |
| SCFA GC-FID | $1,280 | 32 samples × $40 |
| Vivarium per diem | $2,688 | 32 mice × 56 d × $1.50/day |
| Personnel | $6,000 | Grad student 0.5 FTE × 10 wk @ $1,200/wk |
| **Total** | **$19,223** | direct costs only |


## 6. Timeline (10 weeks)

```
Week  1   2   3   4   5   6   7   8   9   10
      ░───░                                       Setup (acclimation + LGG bank + FD-4 calib + pilot)
              ▓───▓───▓───▓                       Intervention (28 d daily gavage)
                                  █               Endpoint (FD-4 + sacrifice)
                                      ▒───▒       Mechanism overlay (WB / IF / ELISA / SCFA)
                                          ▒───▒   Sequencing + analysis + writeup
```

Critical dependencies: Setup → Intervention → Endpoint → Mechanism overlay (WB+IF / SCFA can run in parallel with sequencing in week 9).


## 7. Validation criteria

**Primary success:**
- Mean plasma FD-4 in LGG arm **≤ 70 % of PBS arm mean** (≥ 30 % reduction)
- Two-sided Mann–Whitney U, **p < 0.05**

**Primary failure:** difference < 30 % OR not significant at α = 0.05.

**Secondary corroborations** (FDR-corrected):
- ZO-1 protein up in LGG-arm ileum (WB densitometry, p < 0.05)
- Occludin up; claudin-1 up; claudin-2 down
- Plasma LBP lower in LGG arm (consistent direction with FD-4)
- Caecal butyrate higher in LGG arm
- 16S confirms LGG colonisation in treatment arm AND LGG **absent** from control arm

**Quality gates** (any failure invalidates the assay day or arm):
- Dose-day CFU within 80–120 % of design every day
- FD-4 standard curve R² > 0.99 with matrix correction documented
- No haemolysed plasma samples in primary analysis
- 16S faecal LGG present in 100 % of LGG-arm samples and 0 % of control-arm samples
- All animals survive without humane-endpoint events

**Reporting commitment:** pre-registered on OSF before unblinding; results published regardless of direction (including null) within 6 months of analysis lock.


## 8. Failure map

> Failure modes are **first-class entities** in this wiki — see [[../index]] §"Failure modes". Each links to a full page with detection + mitigation.

### 🟥 Critical (study-killing if not addressed)

| Failure mode | Steps it touches | Mitigation summary |
|---|---|---|
| [[../failure-modes/baseline-permeability-too-low-detect-30pct]] | 4, 6 | Pilot SD estimate; escalate n or switch endpoint to LBP if floor effect |
| [[../failure-modes/probiotic-bacteremia-sepsis]] | 5 | Daily welfare; humane endpoints; blood culture on illness |

### 🟧 High

| Failure mode | Steps it touches | Mitigation summary |
|---|---|---|
| [[../failure-modes/coprophagy-microbiome-equilibration]] | 1, 5, 9 | Separate cages; alternate rack; PPE; weekly + post-hoc LGG check |
| [[../failure-modes/incomplete-fasting-before-gavage]] | 4, 6 | Pre-registered 6 h fast; cleanliness check |
| [[../failure-modes/LGG-viability-loss-during-gavage-prep]] | 5 | Fresh prep; ice; 90-min cap; dose-day CFU per cage |
| [[../failure-modes/FITC-dextran-dose-timing-heterogeneity]] | 6 | Pre-registered 600 mg/kg × 4 h; no cross-protocol pooling |
| [[../failure-modes/positive-publication-bias-LGG-literature]] | 10 | Pre-registered; commit to publish null; cite Singh 2014 retraction |
| [[../failure-modes/challenge-model-vs-baseline-mismatch]] | 4, 10 | Transparent in lit-QC; pilot triggers re-design decision |

### 🟨 Medium

| Failure mode | Steps it touches | Mitigation summary |
|---|---|---|
| [[../failure-modes/serum-autofluorescence-FITC-readout]] | 3, 6 | Standard curve in pooled plasma; reject haemolysed |
| [[../failure-modes/FITC-dextran-photobleaching]] | 3, 4, 6 | Foil throughout; randomise plate loading |
| [[../failure-modes/C57BL-6J-vs-N-substrain-confounder]] | 1 | Pre-register C57BL/6J; single shipment |
| [[../failure-modes/vendor-of-origin-microbiome-baseline]] | 1 | Single vendor; 14 d acclimation |
| [[../failure-modes/LGG-strain-drift-passage]] | 2 | Sealed master vial; ≤ 5 passages; SpaCBA PCR check |
| [[../failure-modes/LPS-contamination-bacterial-prep]] | 5 | Endotoxin-grade water; LAL per batch |
| [[../failure-modes/ZO-1-occludin-detection-artifacts]] | 8 | Single antibody lot; Ponceau norm; blinded IF; positive-control tissue |


## 9. Mechanism diagram

```
┌──────────────┐
│ L. rhamnosus │
│      GG      │ — secretes → p40 ──┐
└──────┬───────┘                    │
       │                            ▼
       │ ─ secretes → EPS ──┐    EGFR ── PI3K/Akt ──┐
       │                    │                       │
       │ ─ produces / ──┐   │                       │
       │   cross-feeds  │   │                       │
       │   butyrogens   │   │                       │
       │                ▼   ▼                       ▼
       │              SCFA → tight junctions (ZO-1, occludin, claudin-1/3/4) ↑
       │                                            │
       │ ─ competitive ──→ pore-forming claudin-2 ↓ │
       │   exclusion                                ▼
       │                                  intestinal barrier ↑
       │                                    ┌───────┴───────┐
       │                                    ▼               ▼
       │                              plasma FD-4 ↓    plasma LBP ↓
       │                                (primary)      (orthogonal)
```

Live in [[../../plan/index|index.html]] (interactive).


## 10. What the brief cares about

- **The wiki is a first-class artifact.** Open `groundwork/` as a single Obsidian vault; the graph view shows how this plan traces back through every entity to every source.
- **Failure modes are first-class.** Every step lists the failure modes it addresses. Scientists who skim the protocol see the warnings inline.
- **Every claim traces.** All reagent / failure-warning / source citations link to a real wiki page. No free-floating facts.
- **Honest novelty.** Lit-QC is "similar-work-exists *with major caveats*" — and the closest precedent (Singh 2014) is flagged as retracted in the same brief.


*Plan v1, generated 2026-04-25. Filed back into wiki at [[../plans/plan-v1]]. Source artifact: `plan/plan.json`.*
