---
type: failure-mode
slug: ATCC-Sigma-vendor-pages-not-captured
severity: medium
frequency_estimate: case-by-case — applies whenever supplier sourcing is in scope but supplier pages weren't ingested in raw/
applies_to_methods: []
applies_to_reagents: [hydroxyapatite, beta-tricalcium-phosphate, biphasic-calcium-phosphate]
applies_to_step_kinds: [sourcing, materials-list, claim, citation]
sources: [pubchem-hydroxyapatite-cid24856]
tags: [sourcing, vendor, supply-chain, data-integrity, ATCC, Sigma]
created: 2026-04-25
updated: 2026-04-25
---

# ATCC / Sigma vendor pages not captured

## What it is

The Pass-1 fetcher captured PubChem and Cellosaurus catalog pages for primary reagents and cell lines, but did not capture canonical supplier catalog pages (Sigma-Aldrich product page for HA, ATCC product page for cell lines, Bioteck/Plasma Biotal HA catalog pages, Thermo Fisher product page for FBS / α-MEM / dexamethasone). This means the wiki's reagent / organism pages have indirect references to suppliers but no archived supplier catalog metadata: catalog number, grade, pricing, lead time, lot certification format, regulatory class. For Pass-3 plan generation the Materials & Budget table cannot be completed authoritatively without these.

## How it manifests

- The reagents/hydroxyapatite page has supplier list (Sigma 21223, Bioteck HAP038C5SD09C, Plasma Biotal P88) but no captured catalog snippets — pricing, grade, particle size, certification details are unverified.
- PubChem CID 24856 was captured for HA but resolved to the wrong compound (potassium alum) — illustrating that database-fetcher heuristics fail for inorganic crystalline solids that are not single PubChem CIDs [[../sources/pubchem-hydroxyapatite-cid24856]].
- Cellosaurus records were captured for cell lines but ATCC product pages (CRL-2593, CRL-2594, HTB-85, CRL-11372) were not — pricing, shipping conditions, and ATCC certificates of analysis are missing.
- Pass-3 plan must specify catalog numbers and prices for the materials table; without captured pages, Pass-3 must (a) generate from internal knowledge with a "verify on order" caveat, or (b) re-fetch on demand.
- ATCC has discontinued CRL-2953 (parental MC3T3-E1) but the Cellosaurus record still lists ATCC as a provider — discontinuation is supplier-page information not in the captured artifact [[../sources/cellosaurus-mc3t3-e1-cvcl0409]] (cross-link).

## How to detect it

- Audit the `raw/catalogs/` directory for completeness: every reagent / cell line in the materials table should have at least one supplier-specific catalog page (or a flag noting it's missing).
- Run a manifest check: `wiki/reagents/<slug>.md` `suppliers:` block must reference at least one entity with a captured artifact in `raw/catalogs/` or `raw/papers/`. Flag any reagent without one.
- For Pass-3: the `materials` block in `plan.json` must include a `source` field linking to a supplier-catalog wiki page; if the source is missing, the line is provisional.

## Mitigation

- **Re-fetch missing supplier pages** in a Pass-1 augment / `/ingest-source` operation:
  - Sigma-Aldrich HA: catalog 21223 (powder, Ca/P 1.67), 289396 (nanopowder), or biocompatible-grade equivalents
  - ATCC cell-line product pages: CRL-2593 (Subclone 4), CRL-2594 (Subclone 14), HTB-85 (Saos-2), CRL-11372 (hFOB)
  - Plasma Biotal P88 (medical-grade HA powder)
  - Bioteck HAP series (used by Battistelli 2025 ARS standard)
- For inorganic compounds where PubChem CID resolution is unreliable: substitute **CAS number** (HA = 1306-06-5) and **canonical supplier catalog** (Sigma 21223) as authoritative, not PubChem CID [[../sources/pubchem-hydroxyapatite-cid24856]].
- Maintain a per-hypothesis "supplier-pages.md" manifest in `wiki/` listing all reagents with their captured supplier source IDs; Pass-3 plan must reference these.
- For any reagent without a captured supplier page: clearly flag in the Materials table as "supplier verification pending" rather than asserting price / catalog as a fact.
- For commons promotion: the `commons/reagents/hydroxyapatite` page should be the canonical place to consolidate verified suppliers with archived catalog snippets so all hypotheses inherit the correct sourcing.

## Original sources / evidence

- [[../sources/pubchem-hydroxyapatite-cid24856]] — explicit data-integrity flag: PubChem CID 24856 is not HA (it's potassium alum); illustrates why downstream pages need verified supplier catalog refs, not just PubChem.
- (Indirectly) [[../sources/cellosaurus-mc3t3-e1-cvcl0409]] — ATCC discontinuation is supplier-page metadata not present in Cellosaurus.

## Affects

- Methods: (none directly — this is a sourcing-completeness failure mode)
- Reagents: [[../reagents/hydroxyapatite]], [[../reagents/beta-tricalcium-phosphate]], [[../reagents/biphasic-calcium-phosphate]]
