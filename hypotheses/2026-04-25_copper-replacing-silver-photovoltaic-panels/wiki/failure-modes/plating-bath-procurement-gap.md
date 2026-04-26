---
type: failure-mode
slug: plating-bath-procurement-gap
severity: medium
frequency_estimate: present in current Pass 1 corpus
applies_to_methods: [nickel-copper-plated-silicon-metallization, nickel-diffusion-barrier-plating]
applies_to_reagents: [copper-sulfate-pentahydrate, nickel-sulfate-hexahydrate]
applies_to_step_kinds: [procurement, protocol-design]
sources: [catalog-fisher-copper-sulfate-pentahydrate, 2018-cheng-nickel-barrier-copper-metallization]
tags: [photovoltaics, procurement, plating]
---

# Plating Bath Procurement Gap

## What It Is

The current raw corpus includes copper sulfate catalog evidence and nickel sulfate use in a paper, but it does not yet include a complete supplier catalog for nickel sulfate or a commercial PV plating bath datasheet. This is a planning risk for a plating-first experiment.

## How It Manifests

- Plan cannot name a complete supplier line for nickel plating chemistry.
- Bath additives, pH, and process controls remain under-specified.
- Budget and supply-chain table has weaker traceability than paste-based routes.

## How To Detect It

- Review `raw/fetch_log.jsonl` failed catalog rows.
- Check whether Pass 3 materials table can cite supplier pages for every plating reagent.

## Mitigation

- Prefer a copper-paste plan for the initial Lab Brief if procurement completeness matters.
- Or run an incremental source ingest for nickel sulfate and commercial plating bath chemistry before Pass 3.

## Sources

- [[../sources/catalog-fisher-copper-sulfate-pentahydrate]]
- [[../sources/2018-cheng-nickel-barrier-copper-metallization]]
