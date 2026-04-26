---
type: source
id: 2012-nrel-aluminum-metallization-tlm-printed
source_type: protocol
title: "Non-Contact Printed Aluminum Metallization of Si Photovoltaic Devices"
authors: ["Platt, H. A. S.", "Li, Y.", "Novak, J. P.", "van Hest, M. F. A. M."]
year: 2012
doi: ""
url: https://docs.nrel.gov/docs/fy12osti/54171.pdf
raw_path: raw/protocols/2012-nrel-aluminum-metallization-tlm-printed.pdf
tags: [TLM, contact-resistivity, metallization, NREL, aerosol-jet, methodology]
created: 2026-04-26
updated: 2026-04-26
---

# Non-Contact Printed Aluminum Metallization of Si Photovoltaic Devices

**Platt, H. A. S., Li, Y., Novak, J. P., and van Hest, M. F. A. M. (NREL / Applied Nanotech)** — *IEEE PVSC 2012 (NREL/CP-5200-54171)*. DOI: —

## Summary

A worked example of how to measure contact resistivity ρc on c-Si solar cells using the transfer length method (TLM). The paper itself is about non-contact aerosol-jet-printed Al back contacts at 13% champion efficiency, but the relevant content for the SHJ Ni/Cu hypothesis is its concrete TLM workflow — geometry, line-spacing range, and sintering conditions — that maps directly onto how the plan must measure ρc ≤ 2 mΩ·cm² on the Ni/Cu stack.

## Key claims

- **TLM geometry used:** ten parallel printed lines with **line-to-line spacings ranging 700 µm to 4800 µm** on textured Si wafers — the canonical "10-line, decade-spread spacing" pattern that lets the linear regression of total resistance vs spacing back out the contact resistance intercept and the sheet resistance slope.
- **Sintering protocol:** 4 minutes at each test temperature (550, 600, 700, 800 °C) sufficient to reach steady-state contact formation for Al on Si.
- **Reported ρc range for printed Al on Si:** 80 mΩ·cm² at 550 °C falling to 20 mΩ·cm² at 800 °C — i.e. high-firing Al gives ~10× the resistivity threshold the SHJ Ni/Cu hypothesis is targeting (≤2 mΩ·cm²); the SHJ a-Si:H constraint forbids these temperatures anyway, but the *measurement geometry* is identical.
- **Line resistivity on glass:** ~10 µΩ·cm = ~6× bulk Al, demonstrating how the TLM workflow also extracts the *finger* (line) resistivity in addition to the contact resistivity.
- **Substrate prep:** TLM patterns printed on textured (pyramid) Si wafers — the same surface morphology as SHJ front side.

## Methods used

- [[methods/transfer-length-method]] — the explicit 10-line, 700–4800 µm spacing TLM workflow that the SHJ Ni/Cu plan can adopt verbatim, swapping the printed Al for the plated Ni/Cu finger pattern.
- [[methods/four-point-probe-sheet-resistance]] — implicitly the companion measurement (TLM extracts both ρc and sheet resistance Rs from the line-resistance vs spacing fit).
- [[methods/IV-curve-measurement]] — used to validate the contacts in finished cells (13% champion efficiency).

## Reagents

- *(Aerosol-jet Al ink — outside this hypothesis's scope; no entity link.)*

## Organisms / substrates

- [[organisms/monocrystalline-Si-wafer-p-type]] — the 21 cm² c-Si solar cells used for end-to-end validation.

## Failure modes flagged

- [[failure-modes/FF-degradation-contact-resistance]] — paper explicitly calls out that longer firing times raise series resistance via SiOx formation, the same Rs-rise failure mode that the Ni/Cu plated stack must avoid in damp-heat aging.

## Notable quotes

> "Transfer length method patterns consisting of ten parallel lines with line-to-line spacings ranging from 700 μm to 4800 μm were printed on textured Si wafers and sintered for 4 min at each temperature to determine contact resistivities. These values fell from 80 mΩ-cm2 at both 550 and 600 °C to 20 mΩ-cm2 at 800 °C." — *p. 2*
