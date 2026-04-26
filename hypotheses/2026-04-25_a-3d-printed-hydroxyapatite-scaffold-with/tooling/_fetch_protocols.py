"""Pass 1 protocol fetcher.

Fetches protocol-style PMC articles (Bio-protocol journal, JoVE, NIHMS
methods) as JATS XML — these are the closest open analogue to protocols.io
content for the assays we need.
"""
from __future__ import annotations
import hashlib
import json
import re
import time
import urllib.request
import urllib.error
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent
PROTO_DIR = ROOT / "protocols"
LOG_PATH = ROOT / "fetch_log.jsonl"
EFETCH = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pmc&id={pmcid}"

PROTOCOLS = [
    ("11986701",
     "Bio-protocol step-by-step: isolation of in vitro osteoblastic-derived matrix vesicles by ultracentrifugation — primary osteoblast prep + vesicle isolation steps reusable for HA-scaffold studies."),
    ("12152114",
     "Bio-protocol: murine osteoblast and osteoclast co-culture on demineralised bone paper — directly relevant to seeding/co-culture protocol design."),
    ("8376579",
     "Bio-protocol: mouse periosteal cell culture, in vitro differentiation, and in vivo transplantation — primary-osteoblast isolation + ALP/Alizarin staining protocol."),
    ("7953249",
     "Bio-protocol: measuring bone volume at multiple densities by micro-computed tomography — directly applicable to scaffold μCT pore characterisation."),
    ("10031522",
     "Bio-protocol: determining bone-forming ability and frequency of skeletal stem cells via kidney capsule transplantation — in-vivo bone-formation assay protocol."),
    ("8918225",
     "Bio-protocol: skeletal stem cell isolation from cranial suture mesenchyme & maintenance of stemness — primary osteogenic-cell source protocol."),
    ("12602170",
     "Bio-protocol: quantitative spectrophotometric assay matched with environmental SEM — combined biochemical + structural assay relevant to scaffold-cell characterisation."),
    ("12222629",
     "Bio-protocol: hybrid 2D/3D approach for differentiation — broader 3D-culture differentiation protocol referenced for control design."),
    ("11865830",
     "Bio-protocol: μCT-based simplified approach to measure body composition / osteoporosis — μCT pipeline transferable to scaffold pore-size verification."),
]

UA = {"User-Agent": "GROUNDWORK-Pass1/0.1 (mailto:slab10000@gmail.com)"}


def fetch(url: str, *, timeout: int = 60) -> bytes:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read()


def slugify(text: str, maxlen: int = 50) -> str:
    text = re.sub(r"[^a-zA-Z0-9]+", "-", text.lower()).strip("-")
    return text[:maxlen].rstrip("-") or "untitled"


def parse_jats(xml_bytes: bytes) -> dict:
    root = ET.fromstring(xml_bytes)
    article = root.find(".//article")
    if article is None:
        raise ValueError("no <article>")
    body = article.find(".//body")
    has_body = body is not None and len(list(body.iter())) > 5
    front = article.find(".//front")
    title_el = front.find(".//article-title") if front is not None else None
    title = "".join(title_el.itertext()).strip() if title_el is not None else ""
    year = ""
    if front is not None:
        for pubtype in ("epub", "ppub", "pub"):
            pd = front.find(f".//pub-date[@pub-type='{pubtype}']/year")
            if pd is not None and pd.text:
                year = pd.text.strip()
                break
        if not year:
            pd = front.find(".//pub-date/year")
            if pd is not None and pd.text:
                year = pd.text.strip()
    authors = []
    if front is not None:
        for c in front.findall(".//contrib[@contrib-type='author']"):
            sn = c.find(".//surname")
            if sn is not None and sn.text:
                authors.append(sn.text.strip())
    doi = ""
    if front is not None:
        for el in front.findall(".//article-id"):
            if el.get("pub-id-type") == "doi" and el.text:
                doi = el.text.strip()
                break
    return {"title": title, "year": year, "first_author": authors[0] if authors else "",
            "all_authors": authors, "doi": doi, "has_body": has_body}


def sha256_bytes(b: bytes) -> str:
    return hashlib.sha256(b).hexdigest()


def append_log(entry: dict) -> None:
    with LOG_PATH.open("a", encoding="utf-8") as f:
        f.write(json.dumps(entry, ensure_ascii=False) + "\n")


def main() -> None:
    PROTO_DIR.mkdir(parents=True, exist_ok=True)
    summary = {"ok": 0, "failed": 0}
    seen = set()
    for pmcid, why in PROTOCOLS:
        url = EFETCH.format(pmcid=pmcid)
        ts = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
        try:
            data = fetch(url)
        except (urllib.error.URLError, TimeoutError) as e:
            print(f"PMC{pmcid}: fetch failed: {e}", flush=True)
            append_log({"timestamp": ts, "url": url, "source_type": "protocol",
                        "file_path": None, "format": "jats", "pages_or_bytes": 0,
                        "sha256": None, "status": f"failed-network-{type(e).__name__}",
                        "title": None, "authors": None, "year": None,
                        "pmcid": f"PMC{pmcid}", "why_relevant": why})
            summary["failed"] += 1
            time.sleep(0.5)
            continue
        try:
            meta = parse_jats(data)
        except (ET.ParseError, ValueError) as e:
            print(f"PMC{pmcid}: parse failed: {e}", flush=True)
            append_log({"timestamp": ts, "url": url, "source_type": "protocol",
                        "file_path": None, "format": "jats", "pages_or_bytes": len(data),
                        "sha256": sha256_bytes(data), "status": f"failed-parse-{type(e).__name__}",
                        "title": None, "authors": None, "year": None,
                        "pmcid": f"PMC{pmcid}", "why_relevant": why})
            summary["failed"] += 1
            continue
        if not meta["has_body"]:
            print(f"PMC{pmcid}: missing <body>", flush=True)
            append_log({"timestamp": ts, "url": url, "source_type": "protocol",
                        "file_path": None, "format": "jats", "pages_or_bytes": len(data),
                        "sha256": sha256_bytes(data), "status": "failed-no-body",
                        "title": meta["title"], "authors": meta["all_authors"],
                        "year": meta["year"], "pmcid": f"PMC{pmcid}", "why_relevant": why})
            summary["failed"] += 1
            continue
        year = meta["year"] or "0000"
        last = slugify(meta["first_author"] or "anon", maxlen=20)
        title_slug = slugify(meta["title"] or pmcid, maxlen=40)
        source_id = f"protocol-{year}-{last}-{title_slug}"
        cand = source_id
        i = 2
        while cand in seen:
            cand = f"{source_id}-{i}"
            i += 1
        seen.add(cand)
        path = PROTO_DIR / f"{cand}.xml"
        path.write_bytes(data)
        sha = sha256_bytes(data)
        rel = f"raw/protocols/{cand}.xml"
        append_log({
            "timestamp": ts, "url": url, "source_type": "protocol",
            "file_path": rel, "format": "jats", "pages_or_bytes": len(data),
            "sha256": sha, "status": "ok",
            "title": meta["title"], "authors": meta["all_authors"][:8],
            "year": meta["year"], "doi": meta["doi"],
            "pmcid": f"PMC{pmcid}", "why_relevant": why,
        })
        print(f"PMC{pmcid} -> {cand}.xml ({len(data)//1024} KB)", flush=True)
        summary["ok"] += 1
        time.sleep(0.4)
    print(f"\nSummary: {summary['ok']} ok, {summary['failed']} failed (out of {len(PROTOCOLS)})")


if __name__ == "__main__":
    main()
