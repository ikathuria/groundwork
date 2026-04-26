"""Pass 1 retraction-notice fetcher.

For each DOI of a retraction notice, fetch the Crossref JSON record (which
is itself the structured retraction notice — title, dates, retract-of
linkage). Save as raw/retractions/<id>.json. Verify it parses + has the
expected retraction-shaped fields.
"""
from __future__ import annotations
import hashlib
import json
import re
import time
import urllib.request
import urllib.error
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent
RETR_DIR = ROOT / "retractions"
LOG_PATH = ROOT / "fetch_log.jsonl"

# (doi, why_relevant)
RETR = [
    ("10.3892/mmr.2025.13519",
     "Direct: retracted paper on a grooved hydroxyapatite scaffold modulating osteogenesis in BMSCs — HA-scaffold + osteogenesis claim now retracted; flag as failure mode for similar architecture claims."),
    ("10.1111/clr.12656",
     "Direct: retracted in-vivo HA/β-TCP/collagen scaffold study — composite-scaffold osteogenesis claim withdrawn."),
    ("10.1039/d3bm90030d",
     "Direct: retraction of HA-based bone defect repair in glucocorticoid-induced osteonecrosis — scaffold + bone-defect claim withdrawn."),
    ("10.1088/1748-605x/ace76a",
     "Direct: retracted silk-fibroin/nano-HA/hyaluronic-acid composite scaffold paper — calls into question similar nano-HA composite claims."),
    ("10.1021/acsami.8b04360",
     "Direct: retracted 'On-Demand Guided Bone Regeneration with Ornamented SPU + bismuth-doped HA scaffold' — bone-regeneration HA-scaffold claim withdrawn."),
    ("10.1016/j.lfs.2020.118038",
     "Direct: retracted study of MSCs seeded onto 3D PLA/PCL/HA scaffold — 3D-printed HA composite + cell seeding claim withdrawn."),
    ("10.1016/j.heliyon.2024.e36493",
     "Direct: retracted eggshell-derived HA-ammonium bicarbonate nano-composite scaffold bioactivity/cytotoxicity paper."),
    ("10.1155/2024/9893086",
     "Adjacent: retracted strontium/chitosan/HA/norcantharidin composite (osteosarcoma + osteogenesis) — flags multi-component HA composite claims."),
]

UA = {"User-Agent": "GROUNDWORK-Pass1/0.1 (mailto:slab10000@gmail.com)",
      "Accept": "application/json"}


def fetch(url: str, *, timeout: int = 60) -> bytes:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read()


def slugify(text: str, maxlen: int = 50) -> str:
    text = re.sub(r"[^a-zA-Z0-9]+", "-", text.lower()).strip("-")
    return text[:maxlen].rstrip("-") or "doi"


def sha256_bytes(b: bytes) -> str:
    return hashlib.sha256(b).hexdigest()


def append_log(entry: dict) -> None:
    with LOG_PATH.open("a", encoding="utf-8") as f:
        f.write(json.dumps(entry, ensure_ascii=False) + "\n")


def main() -> None:
    RETR_DIR.mkdir(parents=True, exist_ok=True)
    summary = {"ok": 0, "failed": 0}
    for doi, why in RETR:
        url = f"https://api.crossref.org/works/{doi}"
        ts = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
        try:
            data = fetch(url)
        except (urllib.error.URLError, TimeoutError) as e:
            print(f"{doi}: fetch failed: {e}", flush=True)
            append_log({
                "timestamp": ts, "url": url, "source_type": "retraction",
                "file_path": None, "format": "json", "pages_or_bytes": 0,
                "sha256": None, "status": f"failed-network-{type(e).__name__}",
                "title": None, "authors": None, "year": None, "doi": doi,
                "why_relevant": why,
            })
            summary["failed"] += 1
            time.sleep(0.5)
            continue
        try:
            obj = json.loads(data)
        except json.JSONDecodeError as e:
            print(f"{doi}: bad JSON: {e}", flush=True)
            append_log({
                "timestamp": ts, "url": url, "source_type": "retraction",
                "file_path": None, "format": "json", "pages_or_bytes": len(data),
                "sha256": sha256_bytes(data), "status": "failed-bad-json",
                "title": None, "authors": None, "year": None, "doi": doi,
                "why_relevant": why,
            })
            summary["failed"] += 1
            continue
        msg = obj.get("message", {})
        title = (msg.get("title") or [""])[0] if msg.get("title") else ""
        year_parts = msg.get("issued", {}).get("date-parts", [[None]])
        year = str(year_parts[0][0]) if year_parts and year_parts[0] and year_parts[0][0] else "0000"
        authors = [a.get("family", "") for a in msg.get("author", []) if a.get("family")]
        update_to = msg.get("update-to", [])
        # Build source ID: retractionwatch-style is wrong (no RW id); use crossref-<sluggedDOI>
        slug_doi = slugify(doi.replace("/", "-"), maxlen=40)
        source_id = f"crossref-retraction-{slug_doi}"
        path = RETR_DIR / f"{source_id}.json"
        path.write_bytes(data)
        sha = sha256_bytes(data)
        rel = f"raw/retractions/{source_id}.json"
        append_log({
            "timestamp": ts,
            "url": url,
            "source_type": "retraction",
            "file_path": rel,
            "format": "json",
            "pages_or_bytes": len(data),
            "sha256": sha,
            "status": "ok",
            "title": title,
            "authors": authors[:8],
            "year": year,
            "doi": doi,
            "retracts_dois": [u.get("DOI") for u in update_to],
            "why_relevant": why,
        })
        print(f"{doi} -> {source_id}.json ({len(data)//1024} KB) retracts={[u.get('DOI') for u in update_to]}", flush=True)
        summary["ok"] += 1
        time.sleep(0.3)
    print(f"\nSummary: {summary['ok']} ok, {summary['failed']} failed (out of {len(RETR)})")


if __name__ == "__main__":
    main()
