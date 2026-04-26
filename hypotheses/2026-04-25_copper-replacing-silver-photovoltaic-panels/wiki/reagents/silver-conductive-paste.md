---
type: reagent
slug: silver-conductive-paste
aliases: [Ag paste, photovoltaic silver paste, Solamet silver paste]
cas: ""
suppliers:
  - name: DuPont
    catalog: Solamet family
    grade: photovoltaic metallization
    url: "https://www.dupont.com/content/dam/dupont/amer/us/en/photovoltaic/public/documents/DEC-Solamet-Brochure.pdf"
storage: per supplier datasheet
hazards: per supplier SDS
known_failure_modes: [silver-supply-and-cost-scaling-risk, contact-resistivity-drift]
sources: [catalog-dupont-solamet-photovoltaic-metallizations, 2024-itrpv-roadmap, 2022-chen-thermal-stable-copper-screen-printed-back-contact]
tags: [photovoltaics, silver-paste, control]
---

# Silver Conductive Paste

## Properties

Silver conductive paste is the baseline control material for this hypothesis. It is mature, process-compatible, and commercially dominant, but it drives cost and silver-demand concerns.

## Common Uses

- Screen-printed front and rear contacts.
- Fire-through contacts in PERC/TOPCon-type architectures.
- Narrow contact/barrier patterns under copper paste in hybrid copper designs.

## Alternatives

- [[copper-metallization-paste]]
- [[copper]]
- Silver-coated copper paste.

## Gotchas

- Control selection should specify paste family, firing profile, and layout.
- Lower silver use can be achieved by paste/layout changes even without full copper replacement.

## Sources

- [[../sources/catalog-dupont-solamet-photovoltaic-metallizations]]
- [[../sources/2024-itrpv-roadmap]]
- [[../sources/2022-chen-thermal-stable-copper-screen-printed-back-contact]]
