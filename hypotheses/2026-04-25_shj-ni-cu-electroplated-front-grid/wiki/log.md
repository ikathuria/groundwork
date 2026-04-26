# Wiki log — 2026-04-25_shj-ni-cu-electroplated-front-grid

## [2026-04-25 23:55] compile | pass-2 wiki
Pass 2 compiled the Obsidian-compatible wiki from raw/ (45 source files).

Pages created:
- sources: 45 (W1: 12 plating-core, W2: 12 failure/damp-heat + 1 retraction, W3: 10 industry/protocols, W4: 11 catalogs+protocols)
- methods: 25 (E1)
- reagents: 21 (E2 — `low-T-Ag-paste-PV56S` collapsed into `low-T-Ag-paste-Solamet-PV56S`; `nickel-phosphorus-NiP-electroless` deduped)
- organisms: 8 (E3)
- failure-modes: 20 (E4 — severity tiers: 5 critical, 8 high, 4 medium, 3 low)
- index.md generated programmatically from H1 + first sentence of each page
- hypothesis.md flipped to status: wiki, sources_count: 45, key entities populated

Cross-link sanity: 0 broken `../<type>/<slug>` wikilinks, 0 unresolved bare wikilinks across all 119 wiki pages.

Promotion candidates (for lint pass):
- `methods/screen-printed-Ag-paste`, `methods/damp-heat-aging-1000h`, `methods/IV-curve-measurement`, `methods/transfer-length-method`, `methods/four-point-probe-sheet-resistance` — fundamental PV characterization, will likely recur in any future PV hypothesis.
- `reagents/EVA-encapsulant`, `reagents/POE-polyolefin-encapsulant`, `reagents/ITO-transparent-conductive-oxide` — universal PV module reagents.
- `failure-modes/silver-supply-bottleneck` — the economic driver of every Ag-replacement hypothesis.
- `failure-modes/EVA-acetic-acid-corrosion` — recurs in any EVA-encapsulated module hypothesis.
- `organisms/monocrystalline-Si-wafer-n-type` and `organisms/monocrystalline-Si-wafer-p-type` — universal PV substrates.

Aliasing / naming concerns flagged for lint:
- `methods/Ni-sputter-deposition` is mis-named when used for Cu-PVD-seed contexts (Hatt NOBLE uses Cu-PVD, not Ni-PVD). Consider renaming `PVD-metal-seed` or splitting into `Cu-sputter-seed` / `Ni-sputter-barrier`.
- `methods/thermal-evaporation-Ag-cap` — industry actually uses immersion Ag (galvanic displacement). Rename `Ag-cap-deposition` covers all variants.
- `methods/SIMS-depth-profile` is overloaded with STEM-EDS / TEM cross-section as functional analogues — clarification noted in the page body.
- `methods/damp-heat-aging-1000h` and `methods/extended-damp-heat-IEC63209` are sibling tests with the same physical conditions but different durations — borderline merge candidates.
- `reagents/low-T-Ag-paste-Solamet-PV21A` and `low-T-Ag-paste-Solamet-PV56S` — both pages flag that these are HIGH-T fire-through PERC pastes, NOT SHJ-compatible. SHJ control should use `low-T-Ag-paste-generic-SHJ-grade`.

Cross-source contradictions surfaced for Pass 3:
1. Cheng 2018 60 nm Ni failure threshold vs the hypothesis's "sub-100 nm Ni" claim (rescued by SHJ ≤200°C process budget, but verify pinhole density).
2. Karas 2022 EVA/AlBSF Cu out-diffusion vs SunDrive ARENA 2022 POE/SHJ 2700h DH success — encapsulant chemistry + TCO barrier likely the resolution; require SIMS at intermediate timepoints to confirm.
3. Hatt NOBLE / SunDrive / Adachi-Kaneka all use PVD-seed + plated Cu (no electroplated Ni barrier). The "electroplated Ni" hypothesis is homojunction-era framing; SHJ consensus is TCO + thin PVD seed.
4. Cu-paste (Yacouba/Pingel 2025) cannot meet ρc ≤ 2 mΩ·cm² target; only plated Cu can.

## [2026-04-26 00:30] plan | plan-v1
Pass 3 generated `plan/plan.json` (62 KB, 13 protocol steps, 14 materials, 11 budget categories, 7 timeline phases, 10 top-tier failure-modes, 45 source citations, 4 wiki_drilldowns), `plan/plan.md`, `plan/.wiki-bundle.json` (740 KB, 123 wiki pages), and `plan/index.html` (933 KB, 8160 lines) — single-file interactive Lab Brief with Three.js 3D SHJ cell stack, D3 force-graph failure map, D3 treemap budget, D3 swim-lane timeline, side-panel wiki browser with Cmd+K, hash deep-linking, backlinks, and severity-coded wikilinks. Filed back as `wiki/plans/plan-v1.md`. `hypothesis.md` flipped to `status: complete`.

Total budget $168,450 · timeline 14 wk · novelty `similar-work-exists` (SunDrive 26.41 % certified Cu-plated SHJ, Hatt NOBLE 22.6 %, CSEM 2700 h DH all close prior art). Differentiation: 4-arm Ni-thickness sweep (0/80/120 nm) on the same wafer batch directly maps the [[../sources/2018-electrochemsci-barrier-properties-electroplated-ni|Cheng 2018]] threshold under SHJ ≤200°C process budget — a measurement no published study has done.

## [2026-04-25 14:30] subagent-E2-reagents | wrote 21 reagent entity pages

Wrote 21 unique reagent pages under `wiki/reagents/` (slug count was 22 in the brief, but `nickel-phosphorus-NiP-electroless` was duplicated and `low-T-Ag-paste-PV56S` was an alias for `low-T-Ag-paste-Solamet-PV56S` — both consolidated). Each page has full YAML frontmatter (type, slug, aliases, cas, formula, suppliers, storage, hazards, known_failure_modes, sources, tags), six-section body (What it is / Common uses / Key spec / Alternatives / Gotchas / Sources), 46–76 lines. Wiki source pages and catalog TDSs (atotech-cupracid-ultra-a-tds, dupont-solamet-pv21a-tech-sheet, dupont-solamet-pv56s-data-sheet, fisher-AA8902018-nickel-sulfamate-hydrate, fisher-AC197730010-cu-sulfate-pentahydrate-sds, fisher-AC424525000-sulfuric-acid-acs-sds, notion-systems-solar-inkjet-overview) used as primary suppliers / CAS / spec source. PV21A and PV56S pages explicitly tagged `NOT-SHJ-compatible` to flag for Pass 3. Cu3Si-intermetallic documented as failure-mode artifact with cross-link to `[[../failure-modes/Cu3Si-formation-at-Si-interface]]`. Cu-paste-low-temperature explicitly flagged as comparator-architecture, not the hypothesis intervention reagent.
