#!/usr/bin/env python3
"""Build a wiki-corpus JSON bundle from an Obsidian-style markdown vault.

Walks <vault>/**/*.md (and optionally <commons>/**/*.md), parses YAML
frontmatter, and emits a single JSON object suitable for inlining into a
Lab Brief `index.html` as:

    <script type="application/json" id="wiki-corpus">{...}</script>

The bundle stores RAW markdown bodies (not pre-rendered HTML). The Lab
Brief renders them client-side with marked.js. Wikilink resolution and
backlink computation also happen client-side -- this script's only job
is the deterministic part: walk + parse + JSON-serialise.

Output schema:
    {
        "version": 1,
        "vault_root": "<absolute path used at build time>",
        "pages": {
            "<slug>": {
                "slug": "methods/qPCR",
                "type": "method",
                "title": "qPCR",
                "path": "methods/qPCR.md",
                "scope": "hypothesis" | "commons",
                "frontmatter": {...},
                "body_md": "..."
            },
            ...
        },
        "stats": {
            "page_count": N,
            "by_type": { "<type>": N, ... },
            "by_scope": { "hypothesis": N, "commons": M }
        }
    }

Slug rules:
    - For hypothesis pages: slug = path relative to vault, without .md
      e.g. "methods/qPCR.md" -> "methods/qPCR"
    - For commons pages: slug is prefixed with "commons/"
      e.g. commons "methods/qPCR.md" -> "commons/methods/qPCR"

Type rules:
    - Use frontmatter `type` if present.
    - Otherwise, infer from the slug's first segment ("methods" -> "method",
      "reagents" -> "reagent", "organisms" -> "organism",
      "failure-modes" -> "failure-mode", "sources" -> "source",
      "plans" -> "plan"). Fallback: the first segment as-is.

Title rules:
    - First H1 in the body wins.
    - Otherwise frontmatter `title`, then `name`, then `slug` tail.

Designed for GROUNDWORK Pass 3. See .claude/skills/pass-3-plan.md and
.codex/skills/groundwork-pass-3-plan/SKILL.md for the consuming contract.

Usage:
    python3 tools/build-wiki-bundle.py <vault-dir> \\
        --out <out.json> \\
        [--commons <commons-dir>]

Exit codes:
    0  success
    1  invalid args / missing vault
    2  missing dependency (PyYAML)
"""
from __future__ import annotations

import argparse
import datetime as _dt
import json
import re
import sys
from pathlib import Path

try:
    import yaml  # PyYAML
except ImportError:
    print(
        "ERROR: PyYAML is required. Install with: pip install pyyaml",
        file=sys.stderr,
    )
    sys.exit(2)


FRONTMATTER_RE = re.compile(r"\A---\s*\n(.*?)\n---\s*\n?(.*)\Z", re.DOTALL)
H1_RE = re.compile(r"^#\s+(.+?)\s*$", re.MULTILINE)

TYPE_FROM_SEGMENT = {
    "methods": "method",
    "reagents": "reagent",
    "organisms": "organism",
    "failure-modes": "failure-mode",
    "sources": "source",
    "plans": "plan",
}


def _json_default(obj):
    """Make YAML-parsed values (dates, sets) JSON-serialisable."""
    if isinstance(obj, (_dt.date, _dt.datetime)):
        return obj.isoformat()
    if isinstance(obj, set):
        return sorted(obj)
    raise TypeError(f"Object of type {type(obj).__name__} is not JSON serializable")


def split_frontmatter(text: str) -> tuple[dict, str]:
    """Return (frontmatter_dict, body_markdown)."""
    m = FRONTMATTER_RE.match(text)
    if not m:
        return {}, text
    try:
        fm = yaml.safe_load(m.group(1)) or {}
        if not isinstance(fm, dict):
            fm = {}
    except yaml.YAMLError:
        fm = {}
    return fm, m.group(2)


def derive_slug(rel_path: Path, prefix: str = "") -> str:
    parts = list(rel_path.with_suffix("").parts)
    base = "/".join(parts)
    return f"{prefix}/{base}" if prefix else base


def derive_type(fm: dict, slug: str) -> str:
    t = fm.get("type")
    if isinstance(t, str) and t.strip():
        return t.strip()
    # Strip a leading "commons/" before inferring
    seg_source = slug[len("commons/"):] if slug.startswith("commons/") else slug
    first = seg_source.split("/", 1)[0] if "/" in seg_source else seg_source
    return TYPE_FROM_SEGMENT.get(first, first)


def derive_title(fm: dict, body_md: str, slug: str) -> str:
    m = H1_RE.search(body_md)
    if m:
        return m.group(1).strip()
    for key in ("title", "name"):
        v = fm.get(key)
        if isinstance(v, str) and v.strip():
            return v.strip()
    return slug.rsplit("/", 1)[-1]


def walk_vault(root: Path, scope: str, slug_prefix: str = "") -> list[dict]:
    pages = []
    for md_path in sorted(root.rglob("*.md")):
        rel = md_path.relative_to(root)
        try:
            text = md_path.read_text(encoding="utf-8")
        except (OSError, UnicodeDecodeError) as e:
            print(f"WARN: skip {md_path}: {e}", file=sys.stderr)
            continue
        fm, body = split_frontmatter(text)
        slug = derive_slug(rel, slug_prefix)
        pages.append({
            "slug": slug,
            "type": derive_type(fm, slug),
            "title": derive_title(fm, body, slug),
            "path": str(rel),
            "scope": scope,
            "frontmatter": fm,
            "body_md": body,
        })
    return pages


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__.split("\n\n", 1)[0])
    ap.add_argument("vault", type=Path, help="Path to wiki/ vault directory")
    ap.add_argument(
        "--out",
        type=Path,
        default=None,
        help="Output JSON path (default: <vault>/.wiki-bundle.json)",
    )
    ap.add_argument(
        "--commons",
        type=Path,
        default=None,
        help="Optional commons/ vault to also include under the 'commons/' slug prefix",
    )
    ap.add_argument(
        "--pretty",
        action="store_true",
        help="Pretty-print the JSON output (default: compact)",
    )
    args = ap.parse_args()

    vault = args.vault.resolve()
    if not vault.is_dir():
        print(f"ERROR: vault is not a directory: {vault}", file=sys.stderr)
        return 1
    out = (args.out or (vault / ".wiki-bundle.json")).resolve()

    pages = walk_vault(vault, scope="hypothesis")

    # GROUNDWORK convention: hypothesis.md (root node) and session.log.md
    # live one level above the wiki vault. Include them with stable slugs so
    # the side panel can surface them like any other wiki page.
    parent = vault.parent
    for root_name, root_slug in (("hypothesis.md", "hypothesis"), ("session.log.md", "session-log")):
        root_path = parent / root_name
        if root_path.is_file():
            try:
                text = root_path.read_text(encoding="utf-8")
            except (OSError, UnicodeDecodeError) as e:
                print(f"WARN: skip {root_path}: {e}", file=sys.stderr)
                continue
            fm, body = split_frontmatter(text)
            pages.append({
                "slug": root_slug,
                "type": derive_type(fm, root_slug),
                "title": derive_title(fm, body, root_slug),
                "path": root_name,
                "scope": "hypothesis",
                "frontmatter": fm,
                "body_md": body,
            })

    if args.commons:
        commons_root = args.commons.resolve()
        if commons_root.is_dir():
            pages.extend(walk_vault(commons_root, scope="commons", slug_prefix="commons"))
        else:
            print(f"WARN: --commons not a directory, skipping: {commons_root}", file=sys.stderr)

    # Detect duplicate slugs (commons + hypothesis can never collide because of prefix,
    # but two files inside the same scope with conflicting slugs would).
    seen: dict[str, str] = {}
    for p in pages:
        if p["slug"] in seen and seen[p["slug"]] != p["path"]:
            print(
                f"WARN: duplicate slug {p['slug']!r}: {seen[p['slug']]} vs {p['path']}",
                file=sys.stderr,
            )
        seen[p["slug"]] = p["path"]

    by_type: dict[str, int] = {}
    by_scope: dict[str, int] = {}
    for p in pages:
        by_type[p["type"]] = by_type.get(p["type"], 0) + 1
        by_scope[p["scope"]] = by_scope.get(p["scope"], 0) + 1

    bundle = {
        "version": 1,
        "vault_root": str(vault),
        "pages": {p["slug"]: p for p in pages},
        "stats": {
            "page_count": len(pages),
            "by_type": dict(sorted(by_type.items())),
            "by_scope": dict(sorted(by_scope.items())),
        },
    }

    out.parent.mkdir(parents=True, exist_ok=True)
    json_kwargs = {
        "ensure_ascii": False,
        "default": _json_default,  # handle datetime/date in frontmatter
    }
    if args.pretty:
        out.write_text(json.dumps(bundle, indent=2, **json_kwargs), encoding="utf-8")
    else:
        out.write_text(
            json.dumps(bundle, separators=(",", ":"), **json_kwargs),
            encoding="utf-8",
        )

    size_kb = out.stat().st_size / 1024
    print(
        f"Wrote {len(pages)} pages → {out} ({size_kb:.1f} KB)",
        file=sys.stderr,
    )
    print(f"  by type: {by_type}", file=sys.stderr)
    print(f"  by scope: {by_scope}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
