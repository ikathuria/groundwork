---
type: source
id: atotech-solar-industry-overview
source_type: catalog
title: "Revolutionizing the solar industry through plated metallization — Atotech / MKS"
supplier: "Atotech"
catalog_number: null
year: 2024
url: "https://www.atotech.com/products/general-metal-finishing/solar-industry/"
raw_path: raw/catalogs/atotech-solar-industry-overview.html
tags: [supplier-data, ni-cu-ag-stack, ni-cu-sn-stack, plating, topcon, shj, industry-overview, html]
---

# Revolutionizing the solar industry through plated metallization — Atotech

## Summary
Atotech's product-overview web page for its photovoltaic-metallization plating line (acquired by MKS in 2022). Confirms commercial availability of a "production proven" plated Ni/Cu/Ag or Ni/Cu/Sn stack, marketed as a drop-in alternative to silver screen-printing for c-Si solar cells. Page is sparse on numerical specs but is the supplier-side anchor that the Ni/Cu/Sn(Ag) electroplated stack (the architecture the hypothesis tests) is shipping at industry scale, not just a research prototype. Atotech's full-page TDSs for the Cupracid bath ([[atotech-cupracid-ultra-a-tds]]) and a linked TOPCon paper ("Plated TOPCon solar cells and modules with reliable fracture stress and soldered module interconnection") give the technical backing.

## Key product specs
- Stack architecture: "thin nickel seed, a highly-conductive copper finger, and an ultra-thin tin or silver surface finish" — i.e., Ni/Cu/Sn or Ni/Cu/Ag with the Ni layer functioning as the silicide-forming barrier (PERC/TOPCon) or simply as adhesion/seed (SHJ context).
- Marketed cell types: TOPCon (explicitly, with a downloadable specialist article); SHJ implicit through the silver-replacement narrative.
- Compatibility statement: "Conventional interconnection technologies can still be used for plated solar cells" — i.e., standard ribbon soldering on the Sn/Ag cap.
- Material attributes claimed: "Copper contacts are ductile and minimally stressed, which helps improve overall cell efficiency and thus increase yield" — directly consistent with the Cupracid ULTRA TDS deposit characterization.
- Comparison data point implied: "the plated Ni/Cu/Ag or Ni/Cu/Sn contacts exhibit an increase in performance compared to conventional screen-printed contacts."
- No specific bath number, current density, or thickness disclosed on this overview page (the TDS [[atotech-cupracid-ultra-a-tds]] is the technical reference).
- Specialist article linked for "TOPCon plated cells with reliable fracture stress and soldered module interconnection" — supports the hypothesis's claim that the Ni/Cu/Sn(Ag) stack is solderable using conventional flux + Pb-free or Pb-Sn ribbon.
- Pricing: not listed.
- Storage / hazards: not specific to the overview; rolls up from individual product MSDSs.

## Reagents (linked entity)
- [[../reagents/acid-Cu-sulfate-bath]] — Cu finger plating chemistry (Cupracid family).
- [[../reagents/nickel-sulfamate-bath]] — Ni seed/barrier plating chemistry.
- [[../reagents/tin-Sn-cap]] — capping option.
- [[../reagents/silver-Ag-cap]] — capping option.

## Methods this product is used in
- [[../methods/electroplated-Ni-Cu-stack]] — exactly the stack architecture sold; central to this hypothesis.
- [[../methods/Cu-electroplating-acid-bath]] — Cu finger formation step.
- [[../methods/Ni-sputter-deposition]] — alternative to plated Ni; not Atotech's domain (plating only) but contextual.

## Failure modes flagged
- [[../failure-modes/silver-supply-bottleneck]] — central marketing message: "the continued use of silver-based contacts may result in critical constraints on the silver supplies needed for this fast-growing market."

## Notable quotes
- "We are committed to developing sustainable and highly efficient plating solutions for c-Si solar cell grid metallization." — meta description
- "In solar cell technology, the application of plated Ni/Cu/Ag contacts is a reliable alternative to screen-printed metallization. Fully-printed silver fingers are replaced by a combination stacked layer of thin nickel seed, a highly-conductive copper finger, and an ultra-thin tin or silver surface finish."
- "The right choice of plating electrolyte allows for low-stress and ductile metal fingers, thereby achieving comparable reliability in cell breakage experiments compared to state-of-the-art screen-printing metallization." — TOPCon specialist article excerpt
