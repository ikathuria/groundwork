# GROUNDWORK

> *Type a research question. Get back a structured synthesis of the literature — key themes, open problems, methodology landscape, and a prioritized reading list.*

---

## What It Does

Keeping up with modern CS/AI literature is a full-time job. A field that had 200 relevant papers five years ago now publishes that many in a month. Knowing what has been tried, what is open, and what is worth reading next requires hours of manual search and synthesis that most researchers don't have.

GROUNDWORK compresses that process. You type a research question in plain language. GROUNDWORK does **deep literature search** — pulling 35–45 high-signal papers from arXiv, Semantic Scholar, OpenReview, and Papers With Code — then **compiles a structured wiki** of everything it learned, then **renders a Research Brief**: a web page that gives you the landscape of a field in a format a researcher can skim in 90 seconds and drill into for an hour.

---

## How It Works

GROUNDWORK runs three agent passes per research question. Each pass produces an inspectable artifact you can open and read.

### Pass 1 — Literature Search → `raw/`

The research agent fans out across arXiv, Semantic Scholar, OpenReview, and Papers With Code. It pre-filters candidates using citation counts and venue signals, then downloads the top 35–45 papers into a local `raw/` folder. **This is the immutable source of truth.** All downloads, all on disk.

### Pass 2 — Wiki Compilation → `wiki/`

The wiki agent reads every source in `raw/` and synthesises an Obsidian-compatible markdown vault. Every paper gets its own page. Every method, concept, dataset, and open problem gets its own page. Everything is interlinked. You can open the vault in Obsidian and walk the graph.

The wiki is **the evidence layer** — not hidden infrastructure, a first-class artifact you can browse and correct.

### Pass 3 — Research Brief → `plan/` + Web UI

The synthesis agent reads the wiki and renders the **Research Brief**: a web page that delivers the field landscape in three layers.

| Layer | What's there |
|---|---|
| **Hero** | Research question, domain, landscape verdict (active / emerging / saturated), 1-paragraph executive summary |
| **Key Themes** | Numbered themes, each with evidence summary and citations |
| **Research Gaps** | What's unanswered, with suggested directions and open questions |
| **Methodology Landscape** | Comparison of approaches used in the literature |
| **Reading List** | Prioritised, annotated — like recommendations from a great advisor |
| **Wiki Drilldown** | Every method, concept, dataset, and open problem links into the wiki |

---

## Running It

### Web UI (recommended)

```bash
npm install
npm run dev
```

Open `http://localhost:3000`, type a research question, and watch the pipeline run.

### Claude Code slash commands

Open Claude Code in the repo root. The pipeline slash commands live in `.claude/commands/`:

```
/pass-1 2026-05-01_diffusion-code-generation "How are diffusion models applied to code generation?"
/pass-2 2026-05-01_diffusion-code-generation
/pass-3 2026-05-01_diffusion-code-generation
```

Two incremental skills are also available:

```
/ingest-source 2026-05-01_diffusion-code-generation https://arxiv.org/abs/...
/apply-correction path/to/correction.json
```

---

## Folder Structure

```
groundwork/
  hypotheses/
    2026-05-01_diffusion-code-generation/
      hypothesis.md        ← research question + metadata
      raw/                 ← downloaded papers (immutable)
      wiki/                ← compiled knowledge graph
      plan/                ← rendered Research Brief
      session.log.md
    2026-05-01_llm-theorem-proving/
      ...
  commons/                 ← cross-topic methods, concepts, datasets, open-problems
    methods/  concepts/  datasets/  open-problems/  corrections.log.md
  .claude/commands/        ← slash command prompts (/pass-1, /pass-2, /pass-3, ...)
  .claude/skills/          ← detailed skill specs (referenced by commands)
```

Open the whole repo in Obsidian to walk the knowledge graph. Paper nodes, method nodes, open-problem nodes — all interlinked.

---

## The Learning Loop

When you review a Research Brief and find something wrong — a method mischaracterised, an open problem now solved — you can write a correction back into the wiki:

```
/apply-correction correction.json
```

The correction writes to the relevant `commons/` page. Every future topic that touches that entity inherits the change. Every review makes the next brief better.

---

## Sample Research Questions

| Domain | Question |
|---|---|
| NLP | How are large language models applied to low-resource machine translation? |
| ML Systems | What are the state-of-the-art approaches to efficient inference for LLMs on edge devices? |
| RL | How is reinforcement learning from human feedback used to align language models? |
| Theory | What is known about the theoretical basis for in-context learning in transformers? |
| CV | How do diffusion models compare to GANs for image synthesis quality and diversity? |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Research / wiki / plan agents | Claude Code (`claude -p`) |
| Web UI | Next.js 14 (App Router) |
| Literature search | arXiv API, Semantic Scholar API, OpenReview, Papers With Code |
| Wiki format | Obsidian-compatible markdown + YAML frontmatter |
| Research Brief UI | Bespoke single-file HTML — Tailwind, Alpine.js, Chart.js, marked.js via CDN |
| Deployment | Railway (persistent volume for `hypotheses/`) |

---

## Design Principles

**Evidence is first-class.** Every claim in a brief traces to a wiki entity, which traces to a source. The wiki is not hidden — it's browsable.

**The agent does the reading, you do the thinking.** GROUNDWORK surfaces the landscape so you can focus on where to go next, not on what has already been tried.

**Compounding by construction.** Knowledge promoted to `commons/` is reused by every future topic. The system gets better with every research question run through it.

---

## For Contributors and AI Agents

See **[`context.md`](./context.md)** for the full operational schema — folder conventions, page types, frontmatter, and agent operation specs. Claude Code reads `CLAUDE.md`, which redirects to `context.md`.
