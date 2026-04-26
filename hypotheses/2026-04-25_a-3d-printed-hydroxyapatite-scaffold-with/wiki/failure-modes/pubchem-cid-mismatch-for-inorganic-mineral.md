---
type: failure-mode
slug: pubchem-cid-mismatch-for-inorganic-mineral
severity: critical
frequency_estimate: rare-but-deadly — affects any pipeline that fetches PubChem CIDs for inorganic crystalline solids
applies_to_methods: []
applies_to_reagents: [hydroxyapatite, calcium-deficient-hydroxyapatite, beta-tricalcium-phosphate, biphasic-calcium-phosphate]
applies_to_step_kinds: [reagent-sourcing, characterization, citation, fetcher-design]
sources: [pubchem-hydroxyapatite-cid24856]
tags: [data-integrity, PubChem, fetcher-bug, inorganic-mineral, sourcing]
created: 2026-04-25
updated: 2026-04-25
---

# PubChem CID mismatch for inorganic minerals

## What it is

PubChem CIDs are assigned to discrete molecular compounds — but hydroxyapatite (Ca₁₀(PO₄)₆(OH)₂), tricalcium phosphate, and other inorganic crystalline solids are *substances*, not compounds, and have multiple PubChem SIDs (substance IDs) without a clean canonical CID. A naive Pass-1 fetcher that resolves "hydroxyapatite" → PubChem CID can land on the wrong compound entirely. In this hypothesis's `raw/`, the captured `pubchem-hydroxyapatite-cid24856.json` is *not* hydroxyapatite — CID 24856 resolves to potassium alum (KAl(SO₄)₂, MW 258.21). Using its physical properties as authoritative HA data would silently invalidate every downstream claim about HA.

## How it manifests

- Captured file `pubchem-hydroxyapatite-cid24856.json` has IUPAC name "aluminum;potassium;disulfate", molecular formula AlKO8S2, MW 258.21 g/mol — manifestly not hydroxyapatite (correct: Ca₁₀(PO₄)₆(OH)₂, MW 1004.6 g/mol) [[../sources/pubchem-hydroxyapatite-cid24856]].
- Anyone consulting the wiki's `reagents/hydroxyapatite` page who follows the PubChem source link as authoritative would record wrong MW, wrong InChIKey, wrong SMILES, and would fail to find the correct hazard / supplier data.
- PubChem CID 24456 ("calcium phosphate") similarly resolves to tricalcium phosphate, not HA — a related but distinct trap [[../sources/pubchem-tricalcium-phosphate-cid24456]] (cross-link).
- The mismatch is invisible at fetch time: the JSON file is well-formed, has full property block, would pass file-format validation; only chemical-content inspection reveals the error.
- Downstream effect: hazard sheets, suppliers, MSDS info would all reflect potassium alum, not HA — a safety-relevant error if surfaced in the Lab Brief.

## How to detect it

- **Always cross-validate inorganic-compound PubChem records** against expected molecular formula and MW:
  - HA: Ca₁₀(PO₄)₆(OH)₂, MW 1004.6 g/mol, CAS 1306-06-5
  - β-TCP: Ca₃(PO₄)₂, MW 310.18 g/mol, CAS 7758-87-4
  - α-TCP: Ca₃(PO₄)₂, MW 310.18 g/mol, CAS 7758-87-4 (same molecular formula as β, distinguished by phase)
  - BCP: HA + β-TCP mixture, no single CID
- Pass-1 fetcher should have a sanity check: if the fetched record's `molecular_formula` doesn't contain expected elements (Ca and P for calcium phosphates), flag and re-fetch.
- For inorganic crystalline solids: prefer **CAS Registry Number + supplier catalog page** over PubChem CID as the canonical reference; CAS 1306-06-5 unambiguously identifies HA.
- For phase identification: pair with **PDF / ICDD card** (HA = PDF 09-0432, β-TCP = PDF 09-0169, α-TCP = PDF 09-0348) for unambiguous identification.

## Mitigation

- **Use CAS as the canonical inorganic-reagent ID**, not PubChem CID. Reagent pages should list:
  - CAS Registry Number (HA = 1306-06-5)
  - Supplier catalog (Sigma 21223, Bioteck HAP038C5SD09C, Plasma Biotal P88)
  - ICDD PDF card for crystallographic phase
  - Don't list PubChem CID for HA / β-TCP / BCP — there is no canonical compound CID, and naive resolution lands on wrong compounds.
- Update the Pass-1 fetcher: when fetching a "compound" that is actually a substance (HA, calcium phosphates, bioactive glass, ZrO₂), retrieve from PubChem `substance` endpoint (SID lookup) rather than `compound` (CID); or skip PubChem entirely and capture supplier catalog page + CAS / ICDD records.
- Update commons reagent for HA (and β-TCP, BCP, etc.) to reflect the data-integrity flag: "PubChem CID is not authoritative for inorganic minerals — use CAS + supplier catalog."
- For the captured `pubchem-hydroxyapatite-cid24856.json` artifact: keep it in raw/ for traceability of the fetcher mis-resolution, but its wiki-page exists *only* as an integrity flag and explicitly does not transcribe properties to `reagents/hydroxyapatite` [[../sources/pubchem-hydroxyapatite-cid24856]].
- Lint pass should walk every `reagents/*.md` page that lists a PubChem CID and verify the CID's molecular formula matches the reagent name.

## Original sources / evidence

- [[../sources/pubchem-hydroxyapatite-cid24856]] — the data-integrity flag exemplar: PubChem CID 24856 = potassium alum, not HA; explicit "do not transcribe to reagents/hydroxyapatite" note.

## Affects

- Methods: (none directly — this is a fetcher-design / data-integrity failure mode)
- Reagents: [[../reagents/hydroxyapatite]], [[../reagents/calcium-deficient-hydroxyapatite]], [[../reagents/beta-tricalcium-phosphate]], [[../reagents/biphasic-calcium-phosphate]]
