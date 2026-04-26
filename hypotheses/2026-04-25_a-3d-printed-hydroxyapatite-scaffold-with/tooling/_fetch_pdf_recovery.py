"""Pass 1 PDF fallback fetcher.

For PMCIDs whose JATS XML is front-matter-only (no <body> element exposed),
fall back to the Europe PMC PDF mirror, save the PDF, run pdftotext for a
deterministic .txt companion, verify both, and append to fetch_log.jsonl.
"""
from __future__ import annotations
import hashlib
import json
import re
import shutil
import subprocess
import time
import urllib.request
import urllib.error
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent  # raw/
PAPERS_DIR = ROOT / "papers"
LOG_PATH = ROOT / "fetch_log.jsonl"
EPMC_PDF = "https://europepmc.org/articles/PMC{pmcid}?pdf=render"

# (pmcid, year, first_author_lastname, short_title_slug, why_relevant)
PAPERS = [
    ("11057695", "2024", "diez-escudero",
     "in-vitro-evaluation-of-pore-size-graded-bone",
     "Direct: in vitro evaluation of pore-size graded bone scaffolds across material compositions — most direct precedent for the hypothesis."),
    ("4846637",  "2016", "murphy",
     "scaffolds-and-cells-for-tissue-regeneration",
     "Direct: 'different scaffold pore sizes — different cell effects' — canonical pore-size vs cell-type review."),
    ("2958613",  "2010", "murphy",
     "understanding-the-effect-of-mean-pore-size-on",
     "Direct: mean pore size effect on cell activity in collagen-GAG scaffolds — Murphy/O'Brien quantitative pore-size study."),
    ("3826579",  "2013", "loh",
     "three-dimensional-scaffolds-for-te-role-of-porosity",
     "Foundational: '3D scaffolds for TE applications: role of porosity and pore size' — 1300+ cite canonical review."),
    ("2587658",  "2008", "chan",
     "scaffolding-in-tissue-engineering-general-approaches",
     "Foundational: scaffolding in TE — general approaches and tissue-specific considerations (800+ cites)."),
    ("3418064",  "2012", "bose",
     "calcium-phosphate-ceramic-systems-in-growth-factor",
     "Foundational: CaP ceramic systems in growth factor & drug delivery for bone TE."),
    ("2271038",  "2008", "ma",
     "biomimetic-materials-for-tissue-engineering",
     "Foundational: biomimetic materials for TE — 680+ cite review on biomimetic strategies."),
]

UA = {"User-Agent": "GROUNDWORK-Pass1/0.1 (research; contact: slab10000@gmail.com)"}


def fetch(url: str, *, timeout: int = 90) -> bytes:
    req = urllib.request.Request(url, headers=UA)
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read()


def sha256_bytes(b: bytes) -> str:
    return hashlib.sha256(b).hexdigest()


def append_log(entry: dict) -> None:
    with LOG_PATH.open("a", encoding="utf-8") as f:
        f.write(json.dumps(entry, ensure_ascii=False) + "\n")


def pdf_pages(path: Path) -> int:
    out = subprocess.run(["pdfinfo", str(path)], capture_output=True, text=True)
    if out.returncode != 0:
        return 0
    for line in out.stdout.splitlines():
        if line.startswith("Pages:"):
            try:
                return int(line.split(":", 1)[1].strip())
            except ValueError:
                return 0
    return 0


def run_pdftotext(pdf: Path, txt: Path) -> bool:
    out = subprocess.run(
        ["pdftotext", "-layout", str(pdf), str(txt)],
        capture_output=True, text=True
    )
    return out.returncode == 0 and txt.exists() and txt.stat().st_size > 1000


def main() -> None:
    PAPERS_DIR.mkdir(parents=True, exist_ok=True)
    summary = {"ok": 0, "failed": 0}
    for pmcid, year, last, title_slug, why in PAPERS:
        url = EPMC_PDF.format(pmcid=pmcid)
        ts = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
        source_id = f"{year}-{last}-{title_slug}"
        pdf_path = PAPERS_DIR / f"{source_id}.pdf"
        txt_path = PAPERS_DIR / f"{source_id}.txt"
        try:
            data = fetch(url)
        except (urllib.error.URLError, TimeoutError) as e:
            print(f"PMC{pmcid}: fetch failed: {e}", flush=True)
            append_log({
                "timestamp": ts, "url": url, "source_type": "paper",
                "file_path": None, "format": "pdf", "pages_or_bytes": 0,
                "sha256": None, "status": f"failed-network-{type(e).__name__}",
                "title": None, "authors": [last], "year": year, "why_relevant": why,
                "pmcid": f"PMC{pmcid}",
            })
            summary["failed"] += 1
            time.sleep(0.5)
            continue
        if not data.startswith(b"%PDF-"):
            print(f"PMC{pmcid}: not a PDF (len={len(data)}, head={data[:20]!r})", flush=True)
            append_log({
                "timestamp": ts, "url": url, "source_type": "paper",
                "file_path": None, "format": "pdf", "pages_or_bytes": len(data),
                "sha256": sha256_bytes(data), "status": "failed-not-pdf",
                "title": None, "authors": [last], "year": year, "why_relevant": why,
                "pmcid": f"PMC{pmcid}",
            })
            summary["failed"] += 1
            time.sleep(0.5)
            continue
        if len(data) < 100_000:
            print(f"PMC{pmcid}: PDF suspiciously small ({len(data)}B)", flush=True)
            append_log({
                "timestamp": ts, "url": url, "source_type": "paper",
                "file_path": None, "format": "pdf", "pages_or_bytes": len(data),
                "sha256": sha256_bytes(data), "status": "failed-pdf-too-small",
                "title": None, "authors": [last], "year": year, "why_relevant": why,
                "pmcid": f"PMC{pmcid}",
            })
            summary["failed"] += 1
            time.sleep(0.5)
            continue
        pdf_path.write_bytes(data)
        pages = pdf_pages(pdf_path)
        if pages < 4:
            print(f"PMC{pmcid}: PDF has {pages} pages — rejecting", flush=True)
            pdf_path.unlink(missing_ok=True)
            append_log({
                "timestamp": ts, "url": url, "source_type": "paper",
                "file_path": None, "format": "pdf", "pages_or_bytes": pages,
                "sha256": sha256_bytes(data), "status": f"failed-pdf-{pages}-pages",
                "title": None, "authors": [last], "year": year, "why_relevant": why,
                "pmcid": f"PMC{pmcid}",
            })
            summary["failed"] += 1
            time.sleep(0.5)
            continue
        ok_txt = run_pdftotext(pdf_path, txt_path)
        sha = sha256_bytes(data)
        rel_pdf = f"raw/papers/{source_id}.pdf"
        append_log({
            "timestamp": ts,
            "url": url,
            "source_type": "paper",
            "file_path": rel_pdf,
            "format": "pdf",
            "pages_or_bytes": pages,
            "sha256": sha,
            "status": "ok" if ok_txt else "ok-no-txt",
            "title": None,
            "authors": [last],
            "year": year,
            "pmcid": f"PMC{pmcid}",
            "txt_companion": f"raw/papers/{source_id}.txt" if ok_txt else None,
            "why_relevant": why,
        })
        print(f"PMC{pmcid} -> {source_id}.pdf ({pages} pages, {len(data)//1024} KB) txt={'ok' if ok_txt else 'fail'}", flush=True)
        summary["ok"] += 1
        time.sleep(0.4)
    print(f"\nSummary: {summary['ok']} ok, {summary['failed']} failed (out of {len(PAPERS)})")


if __name__ == "__main__":
    main()
