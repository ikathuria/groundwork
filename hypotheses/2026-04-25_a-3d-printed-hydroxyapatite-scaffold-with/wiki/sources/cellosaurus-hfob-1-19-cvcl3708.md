---
type: source
id: cellosaurus-hfob-1-19-cvcl3708
source_type: catalog
title: "Cellosaurus CVCL_3708 — hFOB 1.19 (conditionally immortalized human fetal osteoblast)"
authors: ["Cellosaurus / SIB"]
year: 2026
doi: ""
url: https://www.cellosaurus.org/CVCL_3708
raw_path: raw/catalogs/cellosaurus-hfob-1-19-cvcl3708.json
tags: [catalog, cellosaurus, hFOB-1.19, human-fetal-osteoblast, SV40-tsLT, conditionally-immortalized, female, ATCC-CRL-11372]
---

# Summary

Cellosaurus record for hFOB 1.19, a conditionally immortalized human fetal osteoblast cell line — derived from female human fetal limb bone, transformed with a temperature-sensitive SV40 large T antigen (tsLT) plus Tn5 neo selection marker. **The hallmark feature**: cells proliferate at the permissive temperature (33.5 °C, where SV40-tsLT is active) and shift toward osteoblast differentiation at the restrictive temperature (39.5 °C, where SV40-tsLT is inactivated). Patented cell line. Has flown in space on STS-80. Corresponds to [[../organisms/hFOB-1.19]].

# Properties

- Cellosaurus accession: CVCL_3708
- Species: *Homo sapiens*
- Sex: Female
- Site: Fetal bone, limb
- Category: Conditionally immortalized cell line
- Genetic modifications: SV40 large T antigen (temperature-sensitive); Tn5 neo (transposon-derived neomycin selection)
- Children: hFOB/ER9 (CVCL_DG20) — ERα-overexpressing derivative
- Doubling time: at permissive 33.5 °C (specific value not extracted from this fragment of the JSON)
- "Space-flown" on STS-80
- "Patented cell line"

# Suppliers (xrefs)

- ATCC: CRL-11372
- (Cellosaurus xref block includes additional providers — DSMZ, ECACC, etc., not all enumerated in the truncated extract)

# Hazards / Storage

- BSL-1 (despite SV40-tsLT presence, the temperature-sensitive variant is non-tumorigenic).
- Growth: 1:1 DMEM/F-12 + 10% FBS + 0.3 mg/mL G418, no phenol red; cultured at 33.5 °C for proliferation, shifted to 39.5 °C for differentiation experiments.

# Failure modes / pitfalls

- **Temperature shift is non-instantaneous and non-uniform** in a 3D scaffold: a porous HA scaffold has thermal-mass and convective gradients that mean the core may not equilibrate to 39.5 °C as quickly as the surface, so "differentiation" is inhomogeneous across pore depth. For this hypothesis's gradient-pore scaffold, this confounds spatial readouts.
- [[../failure-modes/cell-line-misidentification]] — STR profile less commonly run on hFOB; authenticate on receipt.
- [[../failure-modes/proliferation-vs-differentiation-tradeoff]] — hFOB is the canonical temperature-shift example: at 33.5 °C cells proliferate but don't fully differentiate, and at 39.5 °C they differentiate but proliferation slows. A day-14 proliferation endpoint should be run at 33.5 °C throughout.
- Klebsiella Tn5 neo (G418 selection) can drift if G418 is dropped during expansion.
- Patent restrictions: confirm licensing for industrial / GMP use — academic use covered by ATCC purchase.
