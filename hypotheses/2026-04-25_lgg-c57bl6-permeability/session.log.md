# Session log — 2026-04-25_lgg-c57bl6-permeability

## [2026-04-25 16:44] init | 2026-04-25_lgg-c57bl6-permeability
Created hypothesis folder structure (raw/{papers,protocols,retractions,catalogs}, wiki/, fetch_log.jsonl). Wrote `hypothesis.md` with refined intervention/outcome/threshold/mechanism/control. Status: `researching`. Pass 1 starting.

## [2026-04-25 17:05] research | 2026-04-25_lgg-c57bl6-permeability
Sources fetched: **72 total** (papers: 59, protocols: 3, retractions: 7, catalogs: 3).
- **Discovery**: 13 Europe PMC queries across LGG+permeability, LGG+tight-junction, LGG+p40+EGFR, FITC-dextran method, LGG+DSS/alcohol/HFD, LGG+colonization, heat-killed LGG, C57BL/6 substrain, LGG+NEC, LGG+safety, probiotic permeability meta-analyses. ~257 deduplicated OA candidates returned; ranked by relevance score + citations; top 49 selected for first-batch fetch + 17 hand-picked seminal additions (Yan/Polk p40 series, sepsis case report, multi-strain preclinical).
- **Format mix**: 62 JATS XML (`raw/papers/*.xml`, `raw/protocols/*.xml`) + 7 Crossref/OpenAlex JSON (`raw/retractions/*.json`) + 3 supplier HTML (`raw/catalogs/*.html`). All native-text — **no PDFs needed** since every fetched artifact had an OA JATS / JSON / HTML source.
- **Failures (logged in `fetch_log.jsonl`)**: 7 seminal Yan/Polk p40 mechanism papers (PMC3036990 2007 JCI, PMC2653458 2008, PMC3104743 2011, PMC3798544 2013, PMC6589071 2019, PMC3019367 2010, PMC4006994 2002) returned only PMC front-matter (not in PMC OA fulltext subset); PDF retries via PMC HTML and EuropePMC `?pdf=render` were blocked by recaptcha / 403. Pass 2 should reference these via abstracts and through their citations in the 2017–2021 Yan/Polk follow-up papers (PMC5073052, PMC6162144, PMC7348054, PMC8020481) which **are** present in raw/. Sigma & Charles River catalog pages also bot-blocked (logged failed-curl). BD MRS broth product page returned a 404 navigation shell, deleted.
- **Notable for Pass 2**:
  1. **Substrain effect** is real and consequential — multiple papers note C57BL/6J vs N microbiome differences. Hypothesis pre-registers C57BL/6J.
  2. **Most LGG-permeability evidence is from challenge models** (DSS, alcohol, HFD, NEC, post-weaning stress), not unstressed adult mice. The hypothesis's 30 % threshold in *unchallenged* mice may be optimistic — the Pass 3 plan should consider adding a mild challenge arm or call this out as a power risk.
  3. **Postbiotic / heat-killed LGG arm** has surprisingly strong support (Arellano-García 2025 PMC11680974, Oglio 2025 PMC12832425, Le Noci 2022 PMC9656640, recombinant p40 line). Worth including as a secondary control to dissect viability dependence.
  4. **Safety failure-mode**: Farella 2025 (PMC11857594) — *Lactobacillus rhamnosus* sepsis case in preterm infant after probiotic. Direct adverse-event source for failure-modes/probiotic-bacteremia.
  5. **Retraction signal** (`raw/retractions/`): 36 retracted Lactobacillus papers in OpenAlex; 4 directly relevant to LGG (2014 LGG fermented milk + aging mice, 2021 LGG conditioned medium spinal cord, 2020 LGG fermented plant, 2013 L. gasseri SF1183 epithelial). Lit-QC verdict in Pass 3 should flag the 2014 Singh aging-mouse retraction since its claims overlap our intervention-outcome combo.
  6. **Methodology heterogeneity**: FD-4 dose ranges 60–750 mg/kg, blood-draw timing 1–4 h, fasting protocol absent in some. Pass 2 should canonicalise.
  7. **Mechanistic depth**: p40 / Msp1 EGFR-PI3K-Akt axis (Yan/Polk series), STING-IL10 (Si 2025 PMC11785918), tryptophan-MNA barrier metabolite (Suntornsaratoon 2024 PMC11193042), AI-2 quorum sensing for colonization (Hu 2024 PMC10874557). Multiple convergent mechanisms — wiki entity for `methods/p40-EGFR-pathway` warranted.

## [2026-04-25 17:35] wiki | 2026-04-25_lgg-c57bl6-permeability
Pages: sources=72, methods=13, reagents=8, organisms=5, failure-modes=15. Hypothesis status → `wiki`. Index at `wiki/index.md`.

**Generation strategy** (transparent because the brief asks for it):
- **Mechanical scaffolding** (Python + bash+jq): JATS XML / Crossref JSON / HTML parsed into `digest.jsonl`; per-source page frontmatter + abstract + auto-linked entities (by keyword-flag intersection) + per-entity backlinks generated programmatically. Source-page bodies are scaffolds with a `synthesis: scaffold` marker — they expose the metadata + auto-derived entity links, but the per-source synthesis (key claims, supports/contradicts) is deliberately deferred. The schema is correct; the depth on individual source pages is uneven.
- **Hand-written synthesis** (LLM): every entity page (methods / reagents / organisms / failure-modes) has full LLM-written content — definitions, parameters, why-it-matters-for-this-hypothesis prose, related-entity links, and sources lists. The 15 failure-mode pages received the deepest treatment because the brief explicitly calls them out as the differentiator.

**Promotion candidates** (entities likely to recur in other GROUNDWORK hypotheses → strong candidates for `commons/` once a second hypothesis exists):
- `organisms/C57BL-6` — used in essentially every mouse-based hypothesis
- `organisms/lactobacillus-rhamnosus-GG` — used across gut-brain, NEC, allergy, IBD hypotheses
- `methods/FITC-dextran-permeability-assay` — every gut-barrier hypothesis touches this
- `methods/oral-gavage-mouse` — every mouse pharmacology / probiotic hypothesis
- `methods/16S-rRNA-microbiome-sequencing` — every microbiome hypothesis
- `methods/Western-blot-tight-junction` — every barrier-mechanism hypothesis
- `failure-modes/coprophagy-microbiome-equilibration` — applies to every mouse microbiome study
- `failure-modes/C57BL-6J-vs-N-substrain-confounder` — every C57BL/6 mouse study
- `failure-modes/vendor-of-origin-microbiome-baseline` — every mouse microbiome study
- `failure-modes/positive-publication-bias-LGG-literature` — generalises to "publication bias in probiotic literature"
- `reagents/FITC-dextran-4kDa` — recurs in every barrier hypothesis
- `reagents/DSS` — every colitis-model hypothesis

These would be promoted by the lint pass once they appear in 2+ hypothesis wikis.

**Cross-source contradictions noticed** (worth surfacing in Pass 3):
1. **Live vs heat-killed LGG**: multiple papers (Le Noci 2022, Arellano-García 2023/2025, Oglio 2025/2026, Domínguez-Díaz 2023) report heat-killed LGG is comparable to live LGG for barrier protection. This contradicts the implicit assumption in the original hypothesis that *viable* LGG is what matters. Pass 3 should consider adding a heat-killed arm and re-evaluating the mechanistic framing.
2. **Effect-size in unstressed vs challenged mice**: cross-source pattern is unambiguous — robust effects in DSS / alcohol / HFD / NEC; sparse and underpowered (or absent) in unstressed adult C57BL/6. The 30 % threshold may be unattainable without a challenge. See [[wiki/failure-modes/baseline-permeability-too-low-detect-30pct]] and [[wiki/failure-modes/challenge-model-vs-baseline-mismatch]].
3. **L. rhamnosus retraction signal**: the 2014 Singh et al. retraction (LGG fermented milk in aging mice) is the closest published precedent to our hypothesis intervention — and it didn't hold up. Lit-QC verdict in Pass 3 needs to call this out explicitly rather than count Singh as supporting evidence. See [[wiki/sources/2014-singh-lgg-fermented-milk-aging-mice-RETRACTED]].
4. **Methodology heterogeneity in FD-4**: dose 60–750 mg/kg, time 1–4 h, fasting absent in some — meta-analytical pooling of effect sizes is unreliable. Pre-register parameters; see [[wiki/failure-modes/FITC-dextran-dose-timing-heterogeneity]].

**Sources I couldn't extract from**: none — all 72 raw artifacts parsed cleanly via JATS / Crossref / HTML extraction. The 7 seminal Yan/Polk papers that failed download in Pass 1 (PMC3036990, PMC2653458, PMC3104743, PMC3798544, PMC6589071, PMC3019367, PMC4006994) remain unrecoverable; the wiki references them through the 2017–2021 follow-ups (Yan 2017, Shen 2018, Yan & Polk 2020 review, Deng 2021) that *did* download.

**Known scaffold-quality limit**: source-page synthesis is uneven. The most-relevant LGG / FITC-dextran papers (e.g. Si 2025 STING, Suntornsaratoon 2024 tryptophan-MNA, Shen 2018 p40, Yan 2017 neonatal LGG, Deng 2021 p40 epigenetic) deserve hand-written claim lists, supports/contradicts mapping, and notable-quote extraction. That is the natural Pass 2.5 / lint-pass follow-up.

## [2026-04-25 18:30] plan | plan-v1
Total budget: **$19,223**. Timeline: **10 weeks**. Sources used: 25 / 72 in wiki. n / arm: 14 (escalates to 18 if pilot SD demands).
Novelty verdict: **similar-work-exists** *with major caveats* — extensive LGG-barrier literature exists but ~85% is from challenge models; closest direct precedent (Singh 2014) was retracted. Lit-QC explicitly cites the retraction.

**Top failure modes** (the design's load-bearing constraints):
1. 🟥 `baseline-permeability-too-low-detect-30pct` (critical) — pilot triggers re-design / endpoint switch
2. 🟥 `probiotic-bacteremia-sepsis` (critical) — IACUC humane endpoints + welfare scoring
3. 🟧 `coprophagy-microbiome-equilibration` (high) — separate cages + post-hoc 16S/welE confirmation
4. 🟧 `incomplete-fasting-before-gavage` (high) — pre-registered 6-h fast + cage-cleanliness check
5. 🟧 `LGG-viability-loss-during-gavage-prep` (high) — fresh prep + dose-day CFU per cage
6. 🟧 `FITC-dextran-dose-timing-heterogeneity` (high) — pre-registered 600 mg/kg × 4 h
7. 🟧 `positive-publication-bias-LGG-literature` (high) — pre-registration + commit to publish null

**Artifacts produced:**
- `plan/plan.json` — canonical structured artifact (10 protocol steps, 16 materials, 11 budget lines, 5 timeline phases, 15 failure modes, mechanism diagram)
- `plan/plan.md` — human-readable mirror (Obsidian wikilinks throughout)
- `plan/index.html` — single-file interactive Lab Brief (the 3-layer UX from `context.md` §9: Skim sticky header, Plan spine with expand/collapse + inline failure warnings, Wiki drilldown side panel; animated SVG mechanism diagram, animated budget bars + timeline gantt, severity-coloured failure-mode chips). No external dependencies — open in any browser.
- `wiki/plans/plan-v1.md` — wiki-page copy filed back into the graph

**Hypothesis status**: `wiki` → `complete`.

**Plan-quality notes** (transparent because the brief asks for it):
- Every protocol step's failure-warnings, reagents, and citations link to a real wiki entity. No free-floating facts. The 7 seminal Yan/Polk papers that failed download in Pass 1 are referenced via the 2017–2021 follow-ups that did download, plus the in-house p40 reagent page.
- The plan's load-bearing scientific judgement — *the unstressed-baseline question may not be answerable at this n with this endpoint* — is surfaced in the lit-QC, in Step 4's pilot decision tree, and in the failure-map. The pilot is the explicit go/no-go: if floor effect detected, re-design before committing to the main cohort.
- `wiki/sources/` scaffold-quality limit (noted in Pass 2) carries through: this plan cites top-N sources where the synthesis on those source pages is uneven. A Pass 2.5 / lint-pass on the top ~15 source pages would tighten this.
- The 30% threshold in the original hypothesis is preserved as the pre-registered primary, but the plan documents that the pilot may force re-design — that's the honest rendering of the brief's "operationally realistic" requirement.

## [2026-04-25 21:35] plan | plan-v2
Total budget: **$19,223** (unchanged). Timeline: **10 weeks** (unchanged). Sources used: 25 / 72 (unchanged). Plan content fully unchanged from v1.
Novelty verdict: **similar-work-exists** *with major caveats* (unchanged).

**What changed in v2** — only the interactive Lab Brief at `plan/index.html`. The Pass 3 skill was upgraded between v1 and v2:
- New `tools/build-wiki-bundle.py` walks the wiki + `hypothesis.md` + `session.log.md` (+ optional commons), parses YAML frontmatter, and emits `plan/.wiki-bundle.json` (118 pages, 787 KB).
- The bundle is inlined into `index.html` as `<script type="application/json" id="wiki-corpus">…</script>` alongside `<script id="plan-data">`. Total page weight: **916 KB** single file, opens via `file://`.
- The side panel is now a **real wiki browser** over the entire 118-page corpus, not a hand-curated 30-stub map. New behaviors:
  - `marked.js` renders raw markdown bodies client-side
  - `[[wikilinks]]` resolved via JS regex → in-panel anchors with `data-slug`
  - Failure-mode wikilinks carry an inline severity dot (critical = red, high = orange, medium = amber, low = mossy) so severity is scannable in body text
  - Backlinks computed at boot (every page sees every page that wikilinks to it), grouped by type, rendered at the bottom of each panel
  - Panel maintains a navigation stack with a back button — wikilinks inside the panel deep-dive *within* the panel
  - Hash deep-linking: `#wiki-{slug}` opens that page on load, `hashchange` handles back/forward, `openPanel` pushes the hash
  - `⌘K` / `⌃K` opens a quick-switcher modal that filters page titles live (case-insensitive, ranked by match position)
- Aesthetic continuity with v1: warm parchment / cinnamon-mossy-ferric palette, Newsreader display + Plus Jakarta Sans + JetBrains Mono. The side panel inherits the same tokens.

**Verified end-to-end** in a real browser (Chrome via DevTools MCP):
- 0 console errors / warnings on load
- 10 protocol steps · 15 failure-map cards · 11 source cards · 12 mechanism edges · 100 wikilinks across the page
- Side panel opens on chip / wikilink click, renders title + type/severity badges + frontmatter dl + body + backlinks (10 backlinks for the publication-bias failure mode)
- Hash deep-link sets, severity dots render with the correct background color
- Quick switcher opens on ⌘K, filters "coprophagy" → 1 result, Enter opens the right panel

**Artifacts updated:**
- `plan/plan.json` (v1 → v2; only `plan_version`, `generated_at`, and a new `regen_note` field changed)
- `plan/plan.md` (frontmatter version bump + a v2 note paragraph)
- `plan/index.html` (full rewrite, wiki-browser baked in)
- `plan/.wiki-bundle.json` (new artifact, regenerated by `tools/build-wiki-bundle.py` each run)
- `wiki/plans/plan-v2.md` (new wiki-graph copy, supersedes plan-v1)
- `hypothesis.md` (plan section bumped to v2, prior_versions logged)

**Hypothesis status**: `complete` (unchanged).
