# GROUNDWORK

> *From hypothesis to runnable experiment — informed by everything that didn't work.*

---

## What It Does

Science doesn't slow down at the idea stage. It slows down at the operations stage — designing protocols, sourcing materials, estimating costs, building timelines. A senior scientist who has run a similar experiment can scope it in hours. One who hasn't may take days. A plan with the wrong concentration or an unrealistic timeline can send a lab down the wrong path for weeks.

GROUNDWORK compresses that process. You drop a scientific hypothesis in plain language. GROUNDWORK does **deep research** — pulling tens to hundreds of papers, protocols, retractions, and supplier catalogs — then **compiles a structured wiki** of everything it learned, then **renders a Lab Brief**: a complete, operationally realistic experiment plan a real lab could pick up on Monday and start running by Friday.

But GROUNDWORK does one thing no other tool does: **before it tells you how to succeed, it shows you how others have failed.**

---

## The Core Insight

Every scientific database is optimised for positive results. Protocols that worked. Papers that confirmed. Methods that held.

The information that would save the most time — failed replications, retracted methodologies, known pitfalls at specific protocol steps — is scattered across Retraction Watch, PubPeer, AllTrials, and buried in supplementary materials. No tool synthesises it. No tool brings it into the planning stage.

GROUNDWORK does. And because it builds a **persistent, compounding wiki** of every reagent, method, organism, and failure mode it has ever seen, the next plan is informed by every plan that came before it.

---

## How It Works

GROUNDWORK runs three agent passes per hypothesis. Each pass produces an inspectable artifact you can open and read.

### Pass 1 — Deep Research → `raw/`

Drop a hypothesis in plain English. The research agent fans out across arXiv, Semantic Scholar, protocols.io, Bio-protocol, Retraction Watch, PubPeer, and supplier catalogs. PDFs, protocol entries, and retraction notices are downloaded into a local `raw/` folder. **This is the immutable source of truth.** Tens to hundreds of sources, all on disk.

### Pass 2 — Wiki Compilation → `wiki/`

The wiki agent reads every source in `raw/` and synthesises an Obsidian-compatible markdown vault. Every paper gets its own page. Every reagent, method, organism, and failure mode gets its own page. Everything is interlinked. You can open the vault in Obsidian and walk the graph — see how a known failure mode connects to the methods it affects, the reagents it implicates, the papers that document it.

The wiki is **the evidence layer**. Not hidden infrastructure — a first-class artifact you can browse.

### Pass 3 — Lab Brief → `plan/` + Web UI

The plan agent reads the wiki and renders the **Lab Brief**: a polished web page that delivers the experiment plan in three layers of depth on a single page.

| Layer | What's there |
|---|---|
| **Skim** (top) | Hypothesis, novelty verdict, total budget, total timeline, top failure modes — readable in 30 seconds |
| **Plan** (spine) | Numbered protocol; each step is a rich block with reagents, timing, inline failure warnings, expandable for "why this step / how it can fail / sources." Side rail: timeline gantt + budget breakdown + materials cart. |
| **Wiki drilldown** | Every reagent, method, failure mode, and citation links into the wiki. The Lab Brief is the *delivery format*; the wiki is the *evidence*. |

This is closer to a polished PI memo than a Wikipedia article. A real PI should be able to scan it in 90 seconds, drill in for 5 minutes, and order materials.

---

## Running it

Open Claude Code or Codex in the repo root. The agent auto-loads `CLAUDE.md` or `AGENTS.md`, which redirects to [`context.md`](./context.md) — the canonical schema. Claude Code uses `.claude/skills/`; Codex uses the mirrored `.codex/skills/`. Then run the pipeline as agent commands:

```
> /pass-1 trehalose-hela-cryopreservation "Replacing sucrose with trehalose as a cryoprotectant will increase post-thaw HeLa viability by ≥15 percentage points vs DMSO."
> /pass-2 2026-04-25_trehalose-hela-cryopreservation
> /pass-3 2026-04-25_trehalose-hela-cryopreservation
```

Each pass writes inspectable artifacts under `hypotheses/<slug>/`. Open the repo as an Obsidian vault on the side to watch the wiki grow. The heavy work is done by Claude Code or Codex following the skill prompts, not by a separate pipeline script.

The two incremental skills (`/ingest-source`, `/apply-correction`) are the live-demo primitives. See [`context.md`](./context.md) for the full schema, `.claude/skills/` for Claude Code prompts, and `.codex/skills/` for Codex prompts.

---

## Per-Hypothesis Isolation + a Shared Commons

Every hypothesis is its own self-contained session — its own `raw/`, its own `wiki/`, its own plan. No cross-talk, clean state, fully zippable.

But entities that recur across hypotheses — common methods, common reagents, recurring failure modes — get promoted to a shared `commons/` layer. Hypothesis wikis *link* to commons; the lint pass *promotes* recurring entities up. **This is what makes GROUNDWORK compound.**

```
groundwork/
  hypotheses/
    2026-04-25_trehalose-hela-cryopreservation/
      hypothesis.md
      raw/   wiki/   plan/   session.log.md
    2026-04-25_lactobacillus-gut-permeability/
      ...
  commons/                # cross-hypothesis methods, reagents, failure modes
    methods/  reagents/  organisms/  failure-modes/  corrections.log.md
  web/                    # Next.js app — renders any hypothesis's Lab Brief
  .claude/skills/         # Claude Code pipeline prompts
  .codex/skills/          # Codex pipeline prompt mirrors
```

Open the whole repo in Obsidian. You see the full graph: hundreds of paper nodes, dozens of methods, every failure mode every hypothesis has ever surfaced, all connected.

---

## Stretch Goal: The Learning Loop

The brief asks for a system where scientist corrections improve future plans without explicit re-prompting. The wiki gives us this for free.

When a scientist reviews a generated Lab Brief and corrects a section — wrong concentration, unrealistic timeline, unavailable reagent — that correction writes back into the relevant `commons/` page (or gets promoted up if it was hypothesis-local). Every future hypothesis that touches that method, reagent, or failure mode inherits the correction.

**The demo:** judge watches GROUNDWORK generate a plan. Scientist corrects a single failure-mode page in `commons/`. A different hypothesis runs — the new plan visibly reflects the correction, with no explicit re-prompting. The wiki diff is visible in Obsidian as it happens.

Every review makes the next plan better. That is the difference between a tool and a platform.

---

## Future / Experimental

- **Voice navigation (ElevenLabs).** A voice agent walks the scientist through the Lab Brief, jumping between protocol steps and surfacing the underlying wiki pages on cue.
- **AR Protocol Navigator (Lab Mode).** Point a phone camera at printed step markers placed at lab stations. GROUNDWORK overlays the relevant protocol step, exact reagent amounts, and step-flagged failure warnings live as the scientist works.

Both are post-MVP. Core pipeline ships first.

---

## Sample Inputs

| Domain | Hypothesis |
|---|---|
| Diagnostics | A paper-based electrochemical biosensor functionalized with anti-CRP antibodies will detect C-reactive protein in whole blood at concentrations below 0.5 mg/L within 10 minutes, matching laboratory ELISA sensitivity without requiring sample preprocessing. |
| Gut Health | Supplementing C57BL/6 mice with Lactobacillus rhamnosus GG for 4 weeks will reduce intestinal permeability by at least 30% compared to controls, measured by FITC-dextran assay. |
| Cell Biology | Replacing sucrose with trehalose as a cryoprotectant will increase post-thaw viability of HeLa cells by at least 15 percentage points compared to the standard DMSO protocol. |
| Climate | Introducing Sporomusa ovata into a bioelectrochemical system at −400mV vs SHE will fix CO₂ into acetate at a rate of at least 150 mmol/L/day, outperforming current biocatalytic carbon capture benchmarks by at least 20%. |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Research / wiki / plan agents | TypeScript + Node + Anthropic SDK (Claude) |
| Literature search | Semantic Scholar API, arXiv API |
| Protocols | protocols.io, Bio-protocol, Nature Protocols |
| Negative results | Retraction Watch, PubPeer |
| Supplier pricing | Thermo Fisher, Sigma-Aldrich, Promega catalog references |
| Wiki format | Obsidian-compatible markdown + YAML frontmatter |
| Lab Brief UI | Next.js (app router) + Tailwind CSS + shadcn/ui |
| Future: voice | ElevenLabs API |
| Future: AR | AR.js + A-Frame (WebAR, no app install) |

---

## Design Principles

**Operational realism over aspiration.** Every reagent has a catalog number. Every timeline accounts for dependencies. Every budget has line items. The bar is not "does this look like a plan" — it is "would a real PI order the materials based on this."

**Failure is first-class information.** The Failure Map is not a disclaimer appended at the end. Failure modes are wiki entities, surfaced inline at the steps they affect, with concrete mitigations.

**The wiki is the evidence layer.** GROUNDWORK doesn't ask the user to trust the plan — it shows the wiki underneath it. Click any claim in the Lab Brief, see the source.

**Compounding by construction.** Knowledge promoted to `commons/` is reused by every future hypothesis. The system gets demonstrably better over time, not as a vague future promise.

---

## For Contributors and AI Agents

See **[`context.md`](./context.md)** for the full operational schema — folder conventions, page types, frontmatter, agent operations, and demo plan. AI agents (Claude Code, Codex, OpenCode, Cursor) should read `context.md` before making changes.

---

## Built For

Hack Nation Global AI Hackathon — Challenge 04: The AI Scientist
Powered by Fulcrum Science
In collaboration with MIT Club of Northern California and MIT Club of Germany

---

## Contact

Challenge contacts: [arun@fulcrum.science](mailto:arun@fulcrum.science) / [jonas@fulcrum.science](mailto:jonas@fulcrum.science)
