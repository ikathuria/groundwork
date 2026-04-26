"""Pass 1 catalog fetcher.

Reagents -> PubChem PUG REST JSON (canonical, public, programmatic).
Cell lines -> Cellosaurus JSON (canonical, public).
Vendor product pages -> direct HTML where the supplier doesn't block bots.

ATCC and Sigma-Aldrich actively block scripted requests (return 500 / WAF
HTML challenges) so we use the canonical neutral databases that catalogue
the same materials and link out to the suppliers — this gives downstream
Pass 2 a stable record without relying on a vendor whose anti-bot may
shift between fetches.
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
CAT_DIR = ROOT / "catalogs"
LOG_PATH = ROOT / "fetch_log.jsonl"

# (slug, fetch_url, source_type_in_catalog, why_relevant, expect_format)
ITEMS = [
    # PubChem reagent records
    ("pubchem-hydroxyapatite-cid24856",
     "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/24856/JSON",
     "Reagent — hydroxyapatite (Ca5(PO4)3(OH)) PubChem record. CAS 1306-06-5 / 12167-74-7. Primary scaffold material in the hypothesis.",
     "json"),
    ("pubchem-tricalcium-phosphate-cid24456",
     "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/24456/JSON",
     "Reagent — β-tricalcium phosphate (β-TCP) PubChem record. Common HA-substitute / biphasic CaP comparator scaffold material.",
     "json"),
    ("pubchem-dexamethasone-cid5743",
     "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/5743/JSON",
     "Reagent — dexamethasone (osteogenic supplement, 100 nM in α-MEM osteogenic medium).",
     "json"),
    ("pubchem-l-ascorbic-acid-2-phosphate-cid54679073",
     "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/54679073/JSON",
     "Reagent — L-ascorbic acid 2-phosphate (osteogenic supplement, 50 µg/mL, drives collagen synthesis).",
     "json"),
    ("pubchem-sodium-glycerophosphate-cid14754",
     "https://pubchem.ncbi.nlm.nih.gov/rest/pug/compound/cid/14754/JSON",
     "Reagent — sodium glycerophosphate (β-glycerophosphate, osteogenic supplement, 10 mM, mineralisation substrate).",
     "json"),
    # Cellosaurus cell line records
    ("cellosaurus-mc3t3-e1-cvcl0409",
     "https://api.cellosaurus.org/cell-line/CVCL_0409?format=json",
     "Cell line — MC3T3-E1 (mouse pre-osteoblast, C57BL/6 calvaria origin). Primary candidate cell line for the proliferation readout. ATCC CRL-2593 cross-ref.",
     "json"),
    ("cellosaurus-mc3t3-e1-subclone4-cvcl5437",
     "https://api.cellosaurus.org/cell-line/CVCL_5437?format=json",
     "Cell line — MC3T3-E1 Subclone 4 (more reliably osteogenic subclone, ATCC CRL-2593). Stronger differentiation phenotype.",
     "json"),
    ("cellosaurus-saos-2-cvcl0548",
     "https://api.cellosaurus.org/cell-line/CVCL_0548?format=json",
     "Cell line — Saos-2 (human osteosarcoma, mature osteoblast-like). Comparator cell line for human-context proliferation.",
     "json"),
    ("cellosaurus-hfob-1-19-cvcl3708",
     "https://api.cellosaurus.org/cell-line/CVCL_3708?format=json",
     "Cell line — hFOB 1.19 (human fetal osteoblast, conditionally immortalised). Closer to primary human osteoblast biology.",
     "json"),
    # Thermo Fisher product pages (these endpoints respond to plain GETs)
    ("thermo-picogreen-p11496",
     "https://www.thermofisher.com/order/catalog/product/P11496",
     "Catalog — Quant-iT PicoGreen dsDNA Assay kit, ThermoFisher P11496. Primary DNA-content proliferation readout.",
     "html"),
]

UA_PUBCHEM = {"User-Agent": "GROUNDWORK-Pass1/0.1 (mailto:slab10000@gmail.com)"}
UA_BROWSER = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; rv:128.0) Gecko/20100101 Firefox/128.0",
              "Accept": "text/html,application/xhtml+xml"}


def fetch(url: str, *, headers: dict, timeout: int = 60) -> bytes:
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req, timeout=timeout) as resp:
        return resp.read()


def sha256_bytes(b: bytes) -> str:
    return hashlib.sha256(b).hexdigest()


def append_log(entry: dict) -> None:
    with LOG_PATH.open("a", encoding="utf-8") as f:
        f.write(json.dumps(entry, ensure_ascii=False) + "\n")


def main() -> None:
    CAT_DIR.mkdir(parents=True, exist_ok=True)
    summary = {"ok": 0, "failed": 0}
    for slug, url, why, fmt in ITEMS:
        ts = datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")
        headers = UA_BROWSER if fmt == "html" else UA_PUBCHEM
        try:
            data = fetch(url, headers=headers)
        except (urllib.error.URLError, TimeoutError) as e:
            print(f"{slug}: fetch failed: {e}", flush=True)
            append_log({"timestamp": ts, "url": url, "source_type": "catalog",
                        "file_path": None, "format": fmt, "pages_or_bytes": 0,
                        "sha256": None, "status": f"failed-network-{type(e).__name__}",
                        "title": slug, "why_relevant": why})
            summary["failed"] += 1
            continue
        # Format check
        if fmt == "json":
            try:
                obj = json.loads(data)
            except json.JSONDecodeError as e:
                print(f"{slug}: bad JSON: {e}", flush=True)
                append_log({"timestamp": ts, "url": url, "source_type": "catalog",
                            "file_path": None, "format": fmt, "pages_or_bytes": len(data),
                            "sha256": sha256_bytes(data), "status": "failed-bad-json",
                            "title": slug, "why_relevant": why})
                summary["failed"] += 1
                continue
        else:  # html
            head = data[:2000].decode("utf-8", errors="replace").lower()
            if any(s in head for s in ("internal server error", "500 error", "access denied", "captcha")):
                print(f"{slug}: rejected (error/captcha page)", flush=True)
                append_log({"timestamp": ts, "url": url, "source_type": "catalog",
                            "file_path": None, "format": fmt, "pages_or_bytes": len(data),
                            "sha256": sha256_bytes(data), "status": "failed-vendor-error-page",
                            "title": slug, "why_relevant": why})
                summary["failed"] += 1
                continue
            if len(data) < 5_000:
                print(f"{slug}: html too small ({len(data)}B)", flush=True)
                append_log({"timestamp": ts, "url": url, "source_type": "catalog",
                            "file_path": None, "format": fmt, "pages_or_bytes": len(data),
                            "sha256": sha256_bytes(data), "status": "failed-html-too-small",
                            "title": slug, "why_relevant": why})
                summary["failed"] += 1
                continue
        ext = "json" if fmt == "json" else "html"
        path = CAT_DIR / f"{slug}.{ext}"
        path.write_bytes(data)
        sha = sha256_bytes(data)
        rel = f"raw/catalogs/{slug}.{ext}"
        append_log({"timestamp": ts, "url": url, "source_type": "catalog",
                    "file_path": rel, "format": fmt, "pages_or_bytes": len(data),
                    "sha256": sha, "status": "ok",
                    "title": slug, "why_relevant": why})
        print(f"{slug} -> {rel} ({len(data)//1024} KB)", flush=True)
        summary["ok"] += 1
        time.sleep(0.4)
    print(f"\nSummary: {summary['ok']} ok, {summary['failed']} failed (out of {len(ITEMS)})")


if __name__ == "__main__":
    main()
