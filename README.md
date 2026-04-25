# GROUNDWORK

> *From hypothesis to runnable experiment — informed by everything that didn't work.*

---

## What It Does

Science doesn't slow down at the idea stage. It slows down at the operations stage — designing protocols, sourcing materials, estimating costs, building timelines. A senior scientist who has run a similar experiment can scope it in hours. One who hasn't may take days. A plan with the wrong concentration or an unrealistic timeline can send a lab down the wrong path for weeks.

GROUNDWORK compresses that process. You input a scientific hypothesis in plain language. GROUNDWORK returns a complete, operationally realistic experiment plan that a real lab could pick up on Monday and start running by Friday.

But GROUNDWORK does one thing no other tool does: **before it tells you how to succeed, it shows you how others have failed.**

---

## The Core Insight

Every scientific database is optimised for positive results. Protocols that worked. Papers that confirmed. Methods that held.

The information that would save the most time — failed replications, retracted methodologies, known pitfalls at specific protocol steps — is scattered across Retraction Watch, PubPeer, AllTrials, and buried in supplementary materials. No tool synthesises it. No tool brings it into the planning stage.

GROUNDWORK does.

---

## How It Works

### 1. Hypothesis Input
Enter a scientific question in plain language. GROUNDWORK understands context, not just keywords.

```
"Supplementing C57BL/6 mice with Lactobacillus rhamnosus GG for 4 weeks will 
reduce intestinal permeability by at least 30% compared to controls, measured 
by FITC-dextran assay."
```

### 2. Literature QC
Before generating a plan, GROUNDWORK runs a fast novelty check across arXiv, Semantic Scholar, and protocol repositories. Output is a clean signal:

- `NOT FOUND` — you may be breaking new ground
- `SIMILAR WORK EXISTS` — 1–3 references surfaced for review  
- `EXACT MATCH FOUND` — someone has already run this experiment

### 3. Failure Archaeology
GROUNDWORK mines structured negative results — retractions, failed replications, known protocol pitfalls — specific to this class of experiment. It returns a **Failure Map**: the top failure modes for this experiment type, their estimated frequency, and the step at which they typically occur.

This is not a warning label. It is baked into the plan itself. Every step flagged in the Failure Map includes a specific mitigation in the protocol.

### 4. Experiment Plan Generation
A complete operational plan, built around the Failure Map:

| Section | What's Included |
|---|---|
| **Protocol** | Step-by-step methodology grounded in real published protocols from protocols.io, Bio-protocol, Nature Protocols |
| **Materials & Supply Chain** | Specific reagents, catalog numbers, verified suppliers (Thermo Fisher, Sigma-Aldrich, Promega) |
| **Budget** | Realistic line-item cost estimate with supplier-referenced pricing |
| **Timeline** | Phased breakdown with dependencies clearly marked |
| **Validation** | Explicit success and failure criteria — how you will know if it worked |
| **Failure Map** | Top failure modes for this experiment type, with step-level annotations in the protocol |

### 5. AR Protocol Navigator *(Lab Mode)*

Once the plan is generated, tap **Launch Lab Mode** on mobile.

Point your camera at the printed step markers placed at each station in the lab. GROUNDWORK overlays the relevant protocol step, the exact reagent amounts, and — at steps flagged in the Failure Map — a live warning card:

```
⚠️  KNOWN FAILURE POINT
Step 4 of this protocol type fails in ~34% of replications
due to reagent temperature drift. Verify temp before proceeding.
```

The plan does not stay on the screen. It follows you into the lab.

---

## Stretch Goal: The Learning Loop

Every time a scientist reviews and corrects a generated plan, that feedback becomes a training signal. Structured corrections — wrong concentration, unrealistic timeline, unavailable reagent — are stored by experiment type and domain. Future plans for similar experiments incorporate prior feedback.

The demo: a judge watches GROUNDWORK generate a plan, a scientist leaves structured corrections, and the next plan for a similar experiment visibly reflects those corrections — without being explicitly re-prompted.

The difference between a tool and a platform is whether it gets better every time someone uses it. GROUNDWORK gets better.

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
| Frontend | Next.js + Tailwind CSS |
| AI Planning | Claude (Anthropic) via API |
| Literature QC | Semantic Scholar API, arXiv API |
| Failure Mining | Retraction Watch, PubPeer, AllTrials |
| Supplier Pricing | Thermo Fisher, Sigma-Aldrich catalog references |
| AR Layer | AR.js + A-Frame (WebAR, no app install required) |
| Feedback Store | Structured JSON, tagged by experiment type and domain |

---

## Design Principles

**Operational realism over aspiration.** Every reagent has a catalog number. Every timeline accounts for dependencies. Every budget has line items. The quality bar is not "does this look like a plan" — it is "would a real PI order the materials based on this."

**Failure is first-class information.** The Failure Map is not a disclaimer appended at the end. It is the first thing generated and the last thing checked. Plans built around known failure modes are more trustworthy than plans that ignore them.

**The plan should follow the scientist into the lab.** A document that lives on a screen is one step removed from the work. AR Protocol Navigator closes that gap — the plan becomes spatial, step-aware, and physically present at the moment it is needed.

---

## Built For

Hack Nation Global AI Hackathon — Challenge 04: The AI Scientist  
Powered by Fulcrum Science  
In collaboration with MIT Club of Northern California and MIT Club of Germany

---

## Contact

Challenge contacts: [arun@fulcrum.science](mailto:arun@fulcrum.science) / [jonas@fulcrum.science](mailto:jonas@fulcrum.science)