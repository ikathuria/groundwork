# Session log — 2026-04-25_shj-ni-cu-electroplated-front-grid

## [2026-04-25 22:50] init | hypothesis folder created
Created raw/{papers,protocols,retractions,catalogs}, empty fetch_log.jsonl, hypothesis.md (status: researching).

## [2026-04-25 22:59] pass-1-research/subagent-D | economic framing + recent SHJ-Cu efficiency + roadmaps
Subagent D fetched 11 sources (all OK, 0 fail) into raw/papers/ and appended to raw/fetch_log.jsonl:
- TW-PV / Ag bottleneck framing: Goldschmidt 2021 (E&ES OA), Verlinden 2020 (J. Renew. Sustain. Energy).
- Recent SHJ-Cu efficiency / damp-heat: Lachowicz CSEM 2024 (EPJ-PV) + 2023 mini-modules slides, Yacouba 2025 (Prog. PV) silver-free survey, Lorenz/Fraunhofer ISE 2025 Ag->Cu screen-print transition.
- Industry / market context: ITRPV 15th ed. (2024), Fraunhofer ISE PV Report (2024), IEA-PVPS Trends 2024, TaiyangNews HJT Report 2023, NREL Best Research-Cell Efficiency Chart.
Novelty QC verdict (exploratory): **similar-work-exists**. SunDrive/Maxwell 26.41% certified Cu-plated HJT (2022, ISFH), Cao et al. 26.4% certified Cu-plated SHJ (cited in Yacouba 2025 and Lachowicz 2024), CSEM 1000-2700 h damp-heat on Cu-plated SHJ mini-modules. The *combination* (sub-100 nm Ni barrier + electroplated Cu on SHJ + 1000 h DH at 85/85) is a **replication-class** experiment, not a discovery. Pass 3 should refine the cost / Ni-thickness / damp-heat-protocol threshold to differentiate.

## [2026-04-25 23:02] pass-1-research/subagent-A | canonical SHJ Ni/Cu electroplating papers
Subagent A fetched 13 successful papers + 2 logged-as-failed (paywall-only) into raw/papers/ and raw/fetch_log.jsonl:
- Hatt/Bartsch/Kluska/Glatthaar (Fraunhofer ISE) NOBLE selective Cu-plating SHJ: Solar RRL 2019, AIP Conf. Proc. 2019 (bifacial), EUPVSEC 2021 (stable Cu + AlOx laser pattern). All OA via Fraunhofer Publica bitstreams.
- Karas et al. (ASU/NREL) damp-heat failure-mode anchors: 2019 IEEE J. Photovolt. (SHJ + Cu damp heat) and 2022 ACS AMI (Cu outdiffusion through Sn/Ag caps via SIMS). Both OA via OSTI accepted manuscripts.
- Plating fundamentals/reviews: Rehman & Lee 2014 (MDPI Materials, OA Ni/Cu review), Bartsch/Glatthaar 2010 LIP PVSC (Fraunhofer Publica), Hsieh 2017 electroless Ni (MDPI Materials).
- SHJ metallization comparison / industry: Faes et al. 2018 PV-Tech and PV-International CSEM/EPFL articles, Frasson/Galiazzo 2024 SiliconPV proceedings (Applied Materials).
- Screen-print Ag baselines (control arm context): Tepner & Lorenz 2023 Prog. PV review, Lorenz 2024 Prog. PV cutting-edge low-Ag SHJ.
- Failed (paywalled, no OA mirror within budget): Geissbühler et al. 2014 IEEE J. Photovolt. (canonical 22.4% SHJ-Cu, IEEE Xplore-only) — coverage substituted by Faes 2018 PV-Tech/PV-International. Lennon et al. 2019 Prog. PV (Cu-plating challenges from IC) — Wiley paywalled, no UNSW OA copy.
Removed two duplicates I downloaded that already existed at logged hashes: 2021-goldschmidt-tw-pv-resource-efficiency.pdf and 2024-epj-pv-aging-cu-plated-shj-ptp.pdf.

## [2026-04-26 02:55] pass-1-research/subagent-C | TLM/damp-heat/peel protocols + plating supplier catalogs
Subagent C fetched 19 sources (10 protocols + 9 catalogs, all OK, 0 hard-fail; 2 reagent gaps logged) into raw/protocols/ and raw/catalogs/ and appended to raw/fetch_log.jsonl.

Protocols (10):
- IEC 61215 / damp-heat 1000h methodology: NREL/TP-5200-54714 (Wohlgemuth 2012, "IEC 61215: What It Is and Isn't"), NREL/TP-5200-50599 (Wohlgemuth & Kurtz 2011, "Reliability Testing Beyond Qualification"), NREL/TP-5200-60950 (Hacke 2014, "PV Module Qualification Plus Testing"), Fraunhofer ISE deck (Köhl 2013, hosted at NIST.gov, "Accelerated Service Life Testing of PV Modules").
- TLM contact resistivity workflow: NREL/CP-5200-54171 (Aschenbrenner et al. 2012, "Non-Contact Printed Aluminum Metallization" — 10-line TLM with 700–4800 µm spacing).
- Peel-test methodology: Geipel & Eitner 2014 (Fraunhofer ISE, peel-test on Si cell metallization per DIN EN 50461 / IEC 61730-2; 1 N/mm @ 90°, 50 mm/min) — open-access via publica.fraunhofer.de.
- Ni/Cu plating procedure: Rehman 2018 (electrochemsci.org vol13, "Barrier Properties of Electroplating Nickel Layer for Copper Metallization") — open-access methodology paper.
- SHJ-specific Cu metallization protocol: Lachowicz et al. 2018 PV-Tech ("Metallization and Interconnection for High-Efficiency Bifacial SHJ Cells and Modules"); SunDrive 2022 ARENA Demonstration Report (commercial Cu-plating process flow + reliability + cost data).
- Cu-specific reliability risks: NREL 2024 "Getting Ahead of the Curve" (NREL/TP-5K00-84131) — flags Cu-finger oxidation, finger corrosion, recommended damp-heat extension beyond 1000 h.

Catalogs (9):
- Cu electrolyte salts: Fisher AC197730010 SDS (CuSO4·5H2O, CAS 7758-99-8), Fisher AC424525000 SDS (H2SO4 ACS, CAS 7664-93-9).
- Ni electrolyte salt: Fisher AA8902018 product page (Ni(SO3NH2)2·xH2O, Thermo Scientific, CAS 13770-89-3).
- Plating chemistries: Atotech Cupracid Ultra A TDS (acid Cu plating, hosted on imimg.com mirror), Atotech "Solar Industry" product family overview HTML.
- Ag-paste control reagent: DuPont Solamet PV21A and PV56S tech sheets (low-T Ag paste suitable for SHJ baseline arm).
- Industry context: PV-Tech Photovoltaics International "Metallization Challenges" review (Heraeus / DuPont / Schlenk / Atotech / MacDermid landscape).
- Inkjet plating-mask vendor: Notion Systems solar product page (HTML; the other major industrial vendor besides SUSS PiXDRO).

Failures / gaps (log only — no artifact written):
- protocols.io API: requires Bearer token even for public protocols. Logged as gated; no protocols.io artifacts captured. Pass 2 should treat protocols.io as an unfetchable host for now.
- Heraeus SOL9651B / SOL590 SHJ low-T Ag paste datasheet: every Heraeus media URL returned HTTP 404 or 502 (heraeus.com is blocking direct PDF fetches and the cached datasheetarchive copy turned out to be a sinter paste, not PV silver paste — discarded). DuPont Solamet PV21A/PV56S serve as an adequate Ag-paste-control proxy in the materials table.
- Sigma-Aldrich US product pages: HTTP/2 stream errors on direct curl; bot-blocked. Substituted with Fisher Scientific equivalents for CuSO4 and H2SO4. Ni sulfamate pulled from Fisher.
- MacDermid Alpha PV product pages: HTTP 403 (bot-blocked). The PV-Tech industry review covers MacDermid context; Pass 2 may need a manual re-fetch or contact form.
- Schlenk: turns out to make Cu/Ag-coated ribbons (interconnects), not silver paste — out of scope for this hypothesis's metallization-paste comparison.
- SUSS PiXDRO datasheet: only available as third-party brochure pages; Notion Systems HTML page captured as the inkjet-resist-vendor placeholder.

Net Pass 1 raw/ inventory (across all subagents A/B/C/D as of this run): 11 papers + 10 protocols + 9 catalogs + 0 retractions = 30 sources. fetch_log.jsonl line count: 30. All artifacts have sha256 + pdftotext (.txt for PDFs).

## [2026-04-25 23:05] subagent-b-retrieval | Cu-in-Si physics, Cu-LID, retractions
Subagent B (failure-mode side) ran. Other parallel subagents had already covered the major Karas/Hatt/Cheng/Rehman/Lachowicz/Yacouba metallization-and-damp-heat papers, so contribution focused on the gaps:
- Added: raw/papers/2015-lindroos-cu-lid-aalto-thesis.pdf (Aalto PhD on Cu-LID — 82 pages, lifetime spectroscopy of interstitial Cu in Si)
- Added: raw/retractions/2018-nmat-graded-bandgap-perovskite-retraction-note.pdf (Nature Materials retraction of Ergen et al. perovskite solar paper for non-reproducibility)
- Validated: PubPeer search returned no specific flags on Cu-plated SHJ literature; Retraction Watch returned no PV-metallization retractions; no flags found on Karas/Hatt/Lachowicz papers.
- Failed/skipped (paywall, Anubis bot-challenge, or duplicate): Vahlman 2017 Energy Procedia (Aalto repo 403), Lennon 2019 Prog PV (paywalled), Heiser/Mesli MRS Symp Proc (paywall stub), CEA-HAL Pirot-Berson 2024 (Anubis JS challenge), NREL 31528 Istratov/Weber TR (404 + archive.org rate-limited), Wiley AM-PDF Karas pip.3331 (403). Many Karas/Cheng targets already in raw/ from sibling subagents.

## [2026-04-25 23:10] research | pass-1 consolidation
All 4 retrieval subagents complete. Final raw/ inventory:
- 25 papers (ok), 2 papers (failed-paywall) — Geissbühler 2014 IEEE-only and Lennon 2019 Wiley-only.
- 10 protocols (ok)
- 9 catalogs (ok)
- 1 retraction (ok)
- **Total: 45 successful, 47 fetch_log lines (all valid JSON; concurrent appends were race-safe).**
- Format mix: 44 PDFs (each with deterministic pdftotext .txt companion) + 3 HTML (Atotech / Notion product pages, intentional native-form choice).

**Failure-archaeology signals worth Pass 2's attention** (surfaced by Subagent B while skimming):
1. **Karas 2022 (ACS AMI)** shows Cu migrating UP through Sn/Ag capping layers under 85/85 DH — the cap stack leaks, not just the Ni barrier. Encapsulant + cell-edge water mobility likely matters. EVA glass-backsheet builds reportedly see ~5–8% Pmax loss at 1000 h, which contradicts the hypothesis's "no measurable efficiency loss" target on standard module encapsulation.
2. **Cheng 2018** Ni-barrier study: 60 nm Ni → Cu₃Si by 300°C, only 120 nm Ni survives 300°C. The hypothesis's "sub-100 nm Ni" is on the WRONG side of Cheng's threshold for any post-plating thermal step. SHJ's <200°C bulk process budget may save it, but lamination/thermomechanical cycling is borderline.
3. **Lindroos 2015 Aalto thesis**: Cu-LID detection threshold is sub-ppb in c-Si — "no measurable lifetime degradation" is a very high bar; even tiny Ni-barrier pinholes produce measurable loss.
4. **Lennon 2019 (paywalled but search-summarized)**: IC industry abandoned thin Ni for Cu interconnects ~20 years ago in favor of Ta/TaN; PV is rediscovering known IC failure modes.

**Novelty QC (exploratory, from Subagent D)**: similar-work-exists. SunDrive/Maxwell 26.41% certified (2022, ISFH), Cao et al. 26.4% certified Cu-plated SHJ, CSEM Lachowicz 2024 mini-modules at 1000–2700 h DH already published. The hypothesis as written is replication-class, not a discovery. Pass 3 should reframe as either (a) a barrier-thickness sweep (30/50/80/120 nm Ni) to map the Cheng threshold under SHJ thermal budget, or (b) extended damp-heat (IEC 63209 3000 h), or (c) a defensible $/cell cost model — to add value beyond replication.

**Reagent gaps Pass 2 / Pass 3 should be aware of:**
- Heraeus PV silver paste datasheet: blocked by Heraeus WAF; DuPont Solamet PV21A/PV56S substituted as Ag-paste-control reference.
- protocols.io: API gated behind Bearer token even for public protocols — no protocols.io artifacts captured.
- MacDermid Alpha PV chemistry: bot-blocked, only PV-Tech industry-review context available.
- Boric acid (Ni sulfamate bath buffer) and acid-Cu brightener additives: no SDS captured (industry trade-secret); Pass 2 may need to cite by formulation class.

**Status**: hypothesis.md unchanged from initial write (status: researching) — Pass 2 will flip to status: wiki.

## [2026-04-25 23:55] wiki | 2026-04-25_shj-ni-cu-electroplated-front-grid
Pass 2 compiled the Obsidian-compatible wiki. Pages: sources=45, methods=25, reagents=21, organisms=8, failure-modes=20 (total 119 wiki pages). hypothesis.md flipped to status: wiki, sources_count: 45, key entities populated.

Approach: 4 source-page subagents (W1-W4) read each .txt file fully and wrote one wiki/sources/<id>.md per source with a shared canonical entity-slug table; orchestrator built the entity inverse map by grepping all wikilinks across source pages; 4 entity-page subagents (E1-E4) wrote 75 entity pages — methods, reagents, organisms, failure-modes — synthesising from the citing source pages. One slug duplicate auto-merged: `low-T-Ag-paste-PV56S` → `low-T-Ag-paste-Solamet-PV56S`. Zero broken wikilinks across all 119 pages.

Promotion candidates (for lint pass): `methods/screen-printed-Ag-paste`, `methods/damp-heat-aging-1000h`, `methods/IV-curve-measurement`, `methods/transfer-length-method`, `reagents/EVA-encapsulant`, `reagents/POE-polyolefin-encapsulant`, `reagents/ITO-transparent-conductive-oxide`, `failure-modes/silver-supply-bottleneck`, `failure-modes/EVA-acetic-acid-corrosion`, `organisms/monocrystalline-Si-wafer-n-type`, `organisms/monocrystalline-Si-wafer-p-type`.

Contradictions noticed (for Pass 3 attention):
1. **Cheng 2018 vs hypothesis**: 60 nm electroplated Ni fails at 300°C; only ≥120 nm holds. "Sub-100 nm Ni" is in the failure regime — possibly rescued by SHJ ≤200°C process budget but pinhole density must be verified.
2. **Karas 2022 vs SunDrive ARENA 2022**: EVA+PERC shows Cu out-diffusion at 1000h DH; POE+SHJ passes 2700h. Encapsulant chemistry + TCO barrier are the likely resolution.
3. **Architectural divergence**: All canonical SHJ-Cu routes (Hatt NOBLE, SunDrive, Adachi-Kaneka) use **PVD seed + electroplated Cu**, NOT electroplated Ni barrier. The hypothesis's framing is homojunction-era; SHJ consensus is TCO + thin PVD seed. Pass 3 should consider adding a Ni-free arm.
4. **Cu-paste cannot hit ρc ≤ 2 mΩ·cm²** (Yacouba 2025: 10.28; Pingel 2025: 5–12); only plated Cu can.

Aliasing concerns flagged for lint: `methods/Ni-sputter-deposition` (often references Cu-PVD seed); `methods/thermal-evaporation-Ag-cap` (industry uses immersion Ag); `methods/damp-heat-aging-1000h` vs `methods/extended-damp-heat-IEC63209` (overlap); `methods/SIMS-depth-profile` (overloaded with STEM-EDS/TEM-XS); PV21A/PV56S pages explicitly warn they are NOT SHJ-compatible (high-T fire-through pastes).

## [2026-04-26 00:30] plan | plan-v1
Pass 3 generated the Lab Brief experiment plan. **Total budget: $168,450. Timeline: 14 weeks (active) + 6 weeks parallel extended-DH continuation. Sources used: 45. Novelty: similar-work-exists.** 4-arm comparison study: A (sub-100 nm Ni — literal hypothesis, NOBLE-style); B (no Ni — SunDrive-style); C (120 nm Ni — Cheng safe threshold); D (low-T SHJ Ag paste control). All POE glass-glass mini-modules with PIB edge seal; 1 paired Arm A laminate uses EVA as a controlled contrast.

**Top 3 failure modes:** Cu-diffusion-into-c-Si (critical), Cu3Si-formation-at-Si-interface (critical), Ni-barrier-pinholes (high — directly addresses the sub-100 nm vs Cheng 60-nm threshold tension).

**Artifacts written:**
- `plan/plan.json` (62 KB, 13 protocol steps, 14 materials, 11 budget categories, 7 timeline phases, 8 measurements, 10 top-tier failure-modes, 45 source citations, 4 wiki_drilldowns overrides)
- `plan/plan.md` (Obsidian-readable mirror)
- `plan/.wiki-bundle.json` (740 KB, 123 wiki pages including hypothesis + session log)
- `plan/index.html` (933 KB, 8160 lines) — bespoke single-file Lab Brief verified live in Chrome: photovoltaic / electron-flow / industrial-clean aesthetic; Space Grotesk + JetBrains Mono + Newsreader font pair; Three.js 3D SHJ cell stack with orbit + zoom + click-to-open-panel + electron-flow particles; D3 force-graph failure map; D3 budget treemap (with Chart.js doughnut toggle); D3 swim-lane timeline with critical-path glow; Tailwind CDN; Alpine.js + GSAP scroll animations; marked.js for wiki-body rendering; full side-panel wiki browser with Cmd+K quick-switcher, hash deep-linking (`#wiki-{slug}`), backlinks, severity dots on failure-mode wikilinks, in-panel navigation stack, ESC/backdrop close. `prefers-reduced-motion` and `@media print` honored.
- `wiki/plans/plan-v1.md` filed back into the wiki graph.
- `hypothesis.md` flipped to `status: complete` with frontmatter pointers to plan-v1 metrics.

**Caveats / under-supported claims (flagged for review):**
- The "≤10% of Ag baseline" cost target depends on the SunDrive ARENA report's process step-list and ITRPV 2024 Ag-laydown trajectory; the cost step (Step 13) is presented as a *sensitivity-tested model output*, not a measurement. A defensible $/cell number requires GridMaster-class simulation outside the lab brief.
- Equipment-access cost ($28,500) assumes shared-facility rates (PVD sputter 50 hr; vacuum laminator; environmental chamber 14 wk; IV/Suns-Voc/probe 8 wk). If purchased outright, capex would be ~$80–120k more — flagged as a sensitivity in the budget contingency.
- The single EVA contrast laminate is one cell, not a full statistical arm; sufficient to confirm/reject the encapsulant mechanism per Karas 2022 protocol but not a publication-grade EVA-vs-POE study on its own.

## [2026-04-26 03:30] ar | ar-v1
Stations: 8. Steps bound: 13.

## [2026-04-26 04:10] ar | ar-v2
Live scene: /ar/2026-04-25_shj-ni-cu-electroplated-front-grid
Stations: 8. Steps bound: 13.
