---
type: source
id: pvtech-metallization-challenges-cell-manufacturing
source_type: catalog
title: "Current and future metallization challenges and solutions for crystalline cell manufacturing"
supplier: null
catalog_number: null
year: 2009
url: "https://www.pv-tech.org/technical-papers/current-and-future-metallization-challenges-and-solutions-for-crystalline-cell-manufacturing/"
raw_path: raw/catalogs/pvtech-metallization-challenges-cell-manufacturing.txt
tags: [industry-overview, screen-printing, ni-cu-plating, two-step-metal, sustainability, pv-tech, imec]
---

# Current and future metallization challenges and solutions for crystalline cell manufacturing — IMEC / Photovoltaics International (Posthuma et al.)

## Summary
IMEC (Belgium) industry-overview paper (Posthuma, John, Beaucarne, Van Kerschaver) reprinted in Photovoltaics International, surveying the state of metallization in crystalline-Si solar cells circa 2008-2009 and projecting future paths. Although classified as a catalog/industry article in the W4 assignment, it is essentially an embedded review of the techniques the present hypothesis competes with: screen-printed Ag pastes (the dominant baseline), advanced fine-line printing, hot-melt inkjet, pad printing, aerosol jet printing, laser micro-sintering, and — critically — the two-step "seed-layer + plate" architecture using Ni-silicide + plated Cu, which is the direct ancestor of the SHJ Ni/Cu electroplated stack tested in this hypothesis. Provides the canonical PERC/buried-contact-cell precedents (BP Saturn at 17.5–18.1% on multi-Si, 21.4% lab on FZ-Si with electroless Ni + Cu plate).

## Key product specs
(Catalog-style industry overview — the "specs" here are technique benchmarks rather than a single product.)

- Screen-printing line throughput: 1500–2000 wafers/h industrial; line widths 100–150 µm typical.
- Screen-printed paste composition: silver particles (1–10 µm flakes/spheres), solvents, glass frit (lead-oxide silicate, drives SiNx fire-through), binding agents.
- Firing: spike profile, peak 800–900 °C ×~5 sec (incompatible with SHJ).
- Hot-melt-ink fine-line printing: print at 50–80 °C, demonstrated 60 µm wide metal lines, FF up to 80.6%.
- Inkjet seed printing: very narrow lines, non-contact (suited to thin substrates); requires multiple passes to get conductivity.
- Pad printing: <50 µm fine-line; thin metal layer suitable as seed for subsequent plating; demonstrated 17.9% on 10×10 cm² Cz Si as plated seed.
- Aerosol jet printing: 14 µm lines; reported 20.3% on FZ Si with Ag-seed + light-induced Ag plating.
- Laser micro-sintering: <30 µm metal lines from W powder + laser, lab cell efficiency >14%.
- **Two-step Ni/Cu plating (the architecture this hypothesis tests):**
  - Buried-contact cell: 40 µm-deep contact grooves (mech abrasion or laser), electroless Ni in groove, sintered to NiSi₂ silicide for adhesion + Cu-diffusion barrier, then thick Cu plate. Industrial multi-Si efficiencies 17.5% (156 cm²) and 18.1% (137 cm²) reported.
  - Laser-ablated dielectric route + electroless Ni + Cu plate: lab efficiency 21.4% on FZ Si (45.75 cm²).
  - Patterning alternatives: photolithography (ref [21]) and inkjet masking + wet-chemical etch (refs [22,23]).
- Light-induced plating (LIP): cell self-generates current under illumination to plate metal, eliminating need to contact front grid; chemistry must be cyanide-free, clear solution to allow illumination.
- Material sustainability discussion: Ag consumption may exceed reserves by 2040 (cites [24]); Pb in glass frit — exempt from EU RoHS for PV but problematic; plating waste streams require treatment (galvanic plating advantageous due to small waste volumes).
- Storage / hazards: industry-overview level — no specific product handling.
- Pricing: not in scope for an industry overview.

## Reagents (linked entity)
- [[../reagents/low-T-Ag-paste-generic-SHJ-grade]] — covered as the dominant screen-print incumbent (high-T variant; the SHJ-relevant low-T evolution is implicit).
- [[../reagents/acid-Cu-sulfate-bath]] — the Cu-plate step in the two-step plated metal architecture.
- [[../reagents/nickel-phosphorus-NiP-electroless]] — the electroless Ni used in buried-contact and laser-ablated PERC routes (NiP after sintering forms NiSi₂).
- [[../reagents/nickel-sulfamate-bath]] — alternative for electroplated Ni (not the primary chemistry in this paper but included for the canonical Ni-Cu stack on SHJ).

## Methods this product is used in
- [[../methods/screen-printed-Ag-paste]] — the dominant incumbent, described in detail.
- [[../methods/electroless-Ni-deposition]] — buried-contact + laser-ablated PERC routes.
- [[../methods/electroplated-Ni-Cu-stack]] — the two-step seed + plate architecture, ancestor of SHJ Ni-Cu.
- [[../methods/laser-ablation-of-dielectric]] — picosecond laser ablation of ARC for selective NiSi₂/Cu plating.
- [[../methods/inkjet-mask-patterning]] — inkjet masking + wet-chemical etch for selective dielectric removal.
- [[../methods/photolithography-mask-patterning]] — alternative high-resolution patterning route.
- [[../methods/light-induced-plating]] — lab/industrial route for Ag- or Cu-plating without front-grid contact.
- [[../methods/Cu-electroplating-acid-bath]] — Cu thickening step on top of Ni seed.

## Failure modes flagged
- [[../failure-modes/Cu-diffusion-into-c-Si]] — explicitly: "barrier layers are needed in this case to prevent silver/copper diffusion into the silicon." Ni silicide is the canonical barrier.
- [[../failure-modes/silver-supply-bottleneck]] — "Some studies indicate that the consumption of Ag by the photovoltaic industry will be such that the need will exceed the available resources by 2040 [24]."
- [[../failure-modes/Ni-barrier-pinholes]] — implicit; sintering of Ni → NiSi₂ is essential to seal pinholes pre-Cu.

## Notable quotes
- "It is expected that, in the near future, copper will be used more and more for silicon solar cells due to its lower cost relative to silver." — p. 70
- "The metal seed layer can be converted into a silicide, which will be beneficial in terms of adhesion and can also serve as a barrier layer against copper diffusion." — p. 70
- "Using a lab-scale process to show the feasibility of the electroless nickel plating and copper plating has resulted in best cell efficiencies of 21.4% on FZ-Si with a cell area of 45.75cm²." — p. 70
- "Plating is starting to find its way into the industry, initially as a means to improve the conductance of screen-printed contacts, but in the longer term as part of alternative metallization techniques that will involve totally new process sequences." — Summary
- "Plating solutions need to receive appropriate treatment after use, which adds to costs. Plating solutions that generate small volumes of waste per volume of deposited metal (e.g. galvanic plating) therefore have an advantage over other plating techniques." — Sustainability issues
