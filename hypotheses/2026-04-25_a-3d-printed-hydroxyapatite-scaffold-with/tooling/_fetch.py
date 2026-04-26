"""Pass 1 fetch helper for the hydroxyapatite gradient-pore hypothesis.

Reads a list of (pmcid, why_relevant) tuples, downloads JATS XML from NCBI
EFetch, verifies it has a <body> element + reasonable size, names the file
per context.md §5.2 (<year>-<first-author-lastname>-<short-slug>), and
appends a JSONL line per attempt to fetch_log.jsonl. Discovery (deciding
which PMCIDs to fetch) is upstream — this script only does the
deterministic download + verify + log step.

Run from the raw/ directory with:  python _fetch.py
"""
from __future__ import annotations
import hashlib
import json
import re
import sys
import time
import urllib.request
import urllib.error
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent  # raw/
PAPERS_DIR = ROOT / "papers"
LOG_PATH = ROOT / "fetch_log.jsonl"
EFETCH = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pmc&id={pmcid}"

# (pmcid_without_PMC_prefix, why_relevant_short)
PAPERS = [
    # Direct-on-topic (gradient pore, 3D-printed HA, pore-size effect)
    ("11057695", "Direct: in vitro evaluation of pore-size graded bone scaffolds across material compositions — most direct precedent for the hypothesis."),
    ("12940827", "Direct: 2026 review on biomimetic gradient bone TE scaffolds, single-gradient → multi-gradient — central reference."),
    ("11814525", "Direct: review of gradient scaffolds in bone-soft tissue interface engineering — covers fabrication routes for graded porosity."),
    ("12377023", "Direct: continuous pore-size gradient enhances zonal-specific stem-cell differentiation in osteochondral scaffold — gradient-osteogenesis link."),
    ("13038985", "Direct: longitudinal & radial microgradients in porosity / canal diameter in femur bone — biomimetic justification for the gradient."),
    ("12454330", "Direct: gradient biomimetic scaffolds for tendon-bone interface regeneration — adjacent gradient-design literature."),
    ("11470592", "Direct: polydopamine-functionalised calcium-deficient HA 3D-printed scaffold — recent 3D-printed HA design example."),
    ("9564829",  "Mechanism: Gaussian-curvature-driven osteogenic cell-fate on TPMS scaffolds — quantitative link from pore curvature to osteogenesis."),
    ("4846637",  "Direct: 'different scaffold pore sizes — different cell effects' — canonical pore-size vs cell-type review."),
    ("2958613",  "Direct: mean pore size effect on cell activity in collagen-GAG scaffolds — Murphy/O'Brien quantitative pore-size study."),
    # 3D-printed HA / bioceramic specifically
    ("5344038",  "Direct: bone regeneration in critical defects with 3D-printed β-TCP/HA scaffold — in-vivo precedent."),
    ("12840979", "Direct: comprehensive toxicological evaluation of 3D-printed HA — safety baseline for the scaffold material."),
    ("12000889", "Direct: 2025 review of 3D-printed bioceramic scaffolds for bone defect repair (aging + immune regulation lens)."),
    ("12647118", "Direct: 2025 review on advances in 3D-printed scaffolds for bone defect repair — material strategies & synergistic functions."),
    ("12733947", "Adjacent: 3D printing of CaP-mesoporous bioactive glass scaffolds — comparator material for pore-architecture studies."),
    ("12835055", "Adjacent: 3D printed scaffolds for periodontal regeneration — covers DLP/SLA HA composites."),
    ("11971467", "Mechanism: PCL scaffold with well-defined hierarchical pores controls hMSC migration & alignment — pore-architecture mechanotransduction."),
    # Foundational pore-size & porosity reviews
    ("3826579",  "Foundational: '3D scaffolds for TE applications: role of porosity and pore size' — 1300+ cite canonical review."),
    ("3766369",  "Foundational: bone TE recent advances and challenges — broad framing review."),
    ("3448860",  "Foundational: recent advances in bone TE scaffolds — 1000+ cite review."),
    ("3997175",  "Foundational: scaffold design for bone regeneration — covers pore architecture design rules."),
    ("5887944",  "Direct: effect of MICRO-porosity on bone TE scaffolds — distinguishes micro vs macro pore effects."),
    ("4709372",  "Review: computer-aided scaffolding techniques for bone TE — relevant to CAD design of pore gradient."),
    ("6416573",  "Review: fabrication of scaffolds for bone-tissue regeneration — covers AM techniques and porosity control."),
    ("2587658",  "Foundational: scaffolding in TE — general approaches and tissue-specific considerations (800+ cites)."),
    # Calcium-phosphate / HA chemistry
    ("5506916",  "Foundational: calcium phosphate bioceramics review — history, structure, properties, biomedical applications."),
    ("3418064",  "Foundational: CaP ceramic systems in growth factor & drug delivery for bone TE."),
    ("5738879",  "Direct: bone biomaterials and interactions with stem cells — links HA to osteoblast/stem-cell behaviour."),
    ("2271038",  "Foundational: biomimetic materials for TE — 680+ cite review on biomimetic strategies."),
    ("2593885",  "Direct: biomimetic systems for HA mineralisation inspired by bone & enamel — chemistry of HA bone analogue."),
    # 3D printing / additive manufacturing reviews
    ("4392469",  "Review: recent advances in 3D printing of biomaterials — broad AM landscape."),
    ("4597933",  "Review: 3D printing of scaffolds for tissue regeneration applications."),
    ("6690629",  "Review: additive manufacturing of biomaterials — covers ceramics including HA."),
    ("7116655",  "Review: additive manufacturing of material scaffolds for bone regeneration — toward clinical application."),
    ("4681769",  "Direct: bioceramics and scaffolds — winning combination for TE — bioceramic-scaffold focus."),
    ("11468595", "Direct: multi-material hierarchically structured scaffolds for bone TE — gradient/hierarchy precedent."),
    ("5344607",  "Direct: additively manufactured scaffolds for bone TE and prediction of their mechanical behaviour — gradient-mechanics link."),
    ("7311579",  "Review: porous scaffold design for AM in orthopaedics — AM design rules."),
    ("12838871", "Direct: 2025 biomimetic strategies for bone regeneration — smart scaffolds & multiscale cues."),
    ("12470888", "Review: 2025 narrative & critical review on 3D bioprinting of porous scaffolds for TE."),
    ("7878740",  "Review: smart biomaterials for bone research — definitions, concepts, advances."),
    # Extra mechanism / measurement papers added during discovery
    ("4472104",  "Direct: bone regeneration based on tissue engineering conceptions — design principles synthesis."),
    ("6962643",  "Review: 3D printing of bone tissue engineering scaffolds — modern AM landscape."),
]

UA = {"User-Agent": "GROUNDWORK-Pass1/0.1 (research; contact: slab10000@gmail.com)"}


def slugify(text: str, maxlen: int = 50) -> str:
    text = re.sub(r"[^a-zA-Z0-9]+", "-", text.lower()).strip("-")
    if len(text) > maxlen:
        text = text[:maxlen].rstrip("-")
    return text or "untitled"


def fetch(url: str, *, timeout: int = 60) -> bytes:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read()


def parse_jats(xml_bytes: bytes) -> dict:
    """Pull lead author lastname, year, title from JATS XML."""
    root = ET.fromstring(xml_bytes)
    # JATS structure: <pmc-articleset><article>...
    article = root.find(".//article")
    if article is None:
        raise ValueError("no <article> element")
    body = article.find(".//body")
    has_body = body is not None and len(list(body.iter())) > 5
    front = article.find(".//front")
    title_el = front.find(".//article-title") if front is not None else None
    title = "".join(title_el.itertext()).strip() if title_el is not None else ""
    year = ""
    if front is not None:
        # try pub-date with pub-type=epub then ppub then pub
        for pubtype in ("epub", "ppub", "pub"):
            pd = front.find(f".//pub-date[@pub-type='{pubtype}']/year")
            if pd is not None and pd.text:
                year = pd.text.strip()
                break
        if not year:
            pd = front.find(".//pub-date/year")
            if pd is not None and pd.text:
                year = pd.text.strip()
    authors: list[str] = []
    if front is not None:
        for contrib in front.findall(".//contrib[@contrib-type='author']"):
            sn = contrib.find(".//surname")
            if sn is not None and sn.text:
                authors.append(sn.text.strip())
    doi = ""
    if front is not None:
        for el in front.findall(".//article-id"):
            if el.get("pub-id-type") == "doi" and el.text:
                doi = el.text.strip()
                break
    return {
        "title": title,
        "year": year,
        "first_author": authors[0] if authors else "",
        "all_authors": authors,
        "doi": doi,
        "has_body": has_body,
    }


def sha256_bytes(b: bytes) -> str:
    return hashlib.sha256(b).hexdigest()


def append_log(entry: dict) -> None:
    with LOG_PATH.open("a", encoding="utf-8") as f:
        f.write(json.dumps(entry, ensure_ascii=False) + "\n")


def main() -> None:
    PAPERS_DIR.mkdir(parents=True, exist_ok=True)
    seen_files: set[str] = set()
    summary = {"ok": 0, "failed": 0}
    for pmcid, why in PAPERS:
        url = EFETCH.format(pmcid=pmcid)
        ts = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
        try:
            data = fetch(url)
        except (urllib.error.URLError, TimeoutError) as e:
            print(f"PMC{pmcid}: fetch failed: {e}", flush=True)
            append_log({
                "timestamp": ts, "url": url, "source_type": "paper",
                "file_path": None, "format": "jats", "pages_or_bytes": 0,
                "sha256": None, "status": f"failed-network-{type(e).__name__}",
                "title": None, "authors": None, "year": None, "why_relevant": why,
            })
            summary["failed"] += 1
            time.sleep(0.5)
            continue
        # Verify it's plausibly JATS (XML + has <article> with <body>)
        if not data.lstrip().startswith(b"<?xml") and not data.lstrip().startswith(b"<"):
            print(f"PMC{pmcid}: not XML (len={len(data)})", flush=True)
            append_log({
                "timestamp": ts, "url": url, "source_type": "paper",
                "file_path": None, "format": "jats", "pages_or_bytes": len(data),
                "sha256": None, "status": "failed-not-xml",
                "title": None, "authors": None, "year": None, "why_relevant": why,
            })
            summary["failed"] += 1
            time.sleep(0.5)
            continue
        try:
            meta = parse_jats(data)
        except (ET.ParseError, ValueError) as e:
            print(f"PMC{pmcid}: parse failed: {e}", flush=True)
            append_log({
                "timestamp": ts, "url": url, "source_type": "paper",
                "file_path": None, "format": "jats", "pages_or_bytes": len(data),
                "sha256": sha256_bytes(data), "status": f"failed-parse-{type(e).__name__}",
                "title": None, "authors": None, "year": None, "why_relevant": why,
            })
            summary["failed"] += 1
            time.sleep(0.5)
            continue
        if not meta["has_body"]:
            print(f"PMC{pmcid}: missing <body> (front-only) — likely not OA full text", flush=True)
            append_log({
                "timestamp": ts, "url": url, "source_type": "paper",
                "file_path": None, "format": "jats", "pages_or_bytes": len(data),
                "sha256": sha256_bytes(data), "status": "failed-no-body",
                "title": meta.get("title"), "authors": meta.get("all_authors"),
                "year": meta.get("year"), "why_relevant": why,
            })
            summary["failed"] += 1
            time.sleep(0.5)
            continue
        if len(data) < 30_000:
            print(f"PMC{pmcid}: suspicious size {len(data)}B — flagging for review", flush=True)
            # don't bail — log status but include the file
        # Build filename: <year>-<lastname>-<title-slug>.xml
        year = meta["year"] or "0000"
        last = slugify(meta["first_author"] or "anon", maxlen=20)
        title_slug = slugify(meta["title"] or pmcid, maxlen=40)
        source_id = f"{year}-{last}-{title_slug}"
        # de-duplicate
        candidate = source_id
        i = 2
        while candidate in seen_files:
            candidate = f"{source_id}-{i}"
            i += 1
        seen_files.add(candidate)
        path = PAPERS_DIR / f"{candidate}.xml"
        path.write_bytes(data)
        sha = sha256_bytes(data)
        rel_path = f"raw/papers/{candidate}.xml"
        append_log({
            "timestamp": ts,
            "url": url,
            "source_type": "paper",
            "file_path": rel_path,
            "format": "jats",
            "pages_or_bytes": len(data),
            "sha256": sha,
            "status": "ok",
            "title": meta["title"],
            "authors": meta["all_authors"][:8],
            "year": meta["year"],
            "doi": meta["doi"],
            "pmcid": f"PMC{pmcid}",
            "why_relevant": why,
        })
        print(f"PMC{pmcid} -> {candidate}.xml ({len(data)//1024} KB, body=ok)", flush=True)
        summary["ok"] += 1
        # Stay under NCBI's 3 req/s cap
        time.sleep(0.4)
    print(f"\nSummary: {summary['ok']} ok, {summary['failed']} failed (out of {len(PAPERS)})")


if __name__ == "__main__":
    main()
