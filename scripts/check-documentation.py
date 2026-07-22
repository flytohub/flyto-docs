#!/usr/bin/env python3
"""Validate Flyto2 Docs content ownership, generation, and brand contracts."""

from __future__ import annotations

import fnmatch
import json
import re
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
MANIFEST = ROOT / "docs" / "documentation-manifest.json"
LOCALES = (
    "en",
    "zh-TW",
    "ja",
    "ko",
    "fr",
    "es",
    "hi",
    "de",
    "pt-BR",
    "vi",
    "id",
    "th",
    "tr",
    "pl",
    "it",
)
APPROVED_EMAILS = {
    "admin@flyto2.com",
    "alerts@flyto2.com",
    "conduct@flyto2.com",
    "dev@flyto2.com",
    "dmarc@flyto2.com",
    "hello@flyto2.com",
    "info@flyto2.com",
    "noreply@flyto2.com",
    "oncall@flyto2.com",
    "pentest@flyto2.com",
    "privacy@flyto2.com",
    "reports@flyto2.com",
    "sales@flyto2.com",
    "security@flyto2.com",
    "support@flyto2.com",
    "team@flyto2.com",
}
EMAIL_RE = re.compile(r"[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}", re.I)
LEGACY_BRAND_RE = re.compile(r"\bFlyto\b")
TEXT_SUFFIXES = {
    ".cjs",
    ".json",
    ".md",
    ".mjs",
    ".mts",
    ".py",
    ".ts",
    ".txt",
    ".xml",
    ".yaml",
    ".yml",
}
SOURCE_SUFFIXES = {".cjs", ".json", ".mjs", ".mts", ".py", ".ts", ".yaml", ".yml"}
SKIP_DIRS = {".flyto-index", ".git", ".lighthouseci", ".vitepress/dist", "node_modules"}


def relative_files() -> list[Path]:
    files = []
    for path in ROOT.rglob("*"):
        if not path.is_file():
            continue
        relative = path.relative_to(ROOT)
        normalized = relative.as_posix()
        if any(normalized == item or normalized.startswith(f"{item}/") for item in SKIP_DIRS):
            continue
        files.append(relative)
    return files


def has_h1(path: Path) -> bool:
    content = path.read_text(encoding="utf-8")
    if any(line.startswith("# ") for line in content.splitlines()):
        return True
    if content.startswith("---\n"):
        frontmatter = content.split("---", 2)[1]
        return bool(re.search(r"(?m)^(?:title|\s+name):\s*\S", frontmatter))
    return False


def run_generated_check() -> list[str]:
    result = subprocess.run(
        [sys.executable, str(ROOT / "scripts" / "generate-code-reference.py"), "--check"],
        cwd=ROOT,
        capture_output=True,
        text=True,
    )
    if result.returncode:
        return [result.stderr.strip() or result.stdout.strip()]
    return []


def check_manifest(files: list[Path]) -> list[str]:
    failures = []
    data = json.loads(MANIFEST.read_text(encoding="utf-8"))
    owners = data.get("owners", [])
    for owner in owners:
        for doc in owner.get("docs", []):
            if not (ROOT / doc).is_file():
                failures.append(f"manifest references missing doc: {doc}")

    owned_sources = [path for path in files if path.suffix in SOURCE_SUFFIXES]
    for source in owned_sources:
        normalized = source.as_posix()
        if not any(
            any(fnmatch.fnmatch(normalized, pattern) for pattern in owner.get("paths", []))
            for owner in owners
        ):
            failures.append(f"source/config file has no documentation owner: {normalized}")
    return failures


def check_module_mirrors() -> list[str]:
    failures = []
    english_dir = ROOT / "modules"
    expected_names = {path.name for path in english_dir.glob("*.md")}
    if len(expected_names) != 60:
        failures.append(f"English module reference expected 60 pages, found {len(expected_names)}")

    english_text = "\n".join(
        path.read_text(encoding="utf-8") for path in english_dir.glob("*.md")
    )
    module_ids = set(re.findall(r"(?m)^`([a-z0-9_]+(?:\.[a-z0-9_]+)+)`$", english_text))
    if len(module_ids) != 451:
        failures.append(f"English module reference expected 451 module IDs, found {len(module_ids)}")

    for locale in LOCALES:
        directory = english_dir if locale == "en" else ROOT / locale / "modules"
        names = {path.name for path in directory.glob("*.md")}
        if names != expected_names:
            missing = sorted(expected_names - names)
            extra = sorted(names - expected_names)
            failures.append(
                f"{locale} module mirror differs: missing={missing[:3]}, extra={extra[:3]}"
            )
        index = directory / "index.md"
        if index.exists():
            content = index.read_text(encoding="utf-8")
            for token in ("451 registry-backed modules", "84 prefix categories", "41 built-in recipes"):
                if token not in content:
                    failures.append(f"{locale}/modules/index.md missing inventory token: {token}")
    return failures


def check_core_reference() -> list[str]:
    failures = []
    reference_dir = ROOT / "core" / "reference"
    required = {
        "index.md",
        "cli.md",
        "configuration.md",
        "http-api.md",
        "python-api.md",
        "recipes.md",
        "registered-modules.md",
        "source-modules.md",
    }
    names = {path.name for path in reference_dir.glob("*.md")}
    for missing in sorted(required - names):
        failures.append(f"missing core reference page: core/reference/{missing}")

    python_index = reference_dir / "python-api.md"
    if python_index.exists():
        content = python_index.read_text(encoding="utf-8")
        match = re.search(r"\*\*(\d[\d,]*) declarations across (\d[\d,]*) files\.\*\*", content)
        if not match or tuple(value.replace(",", "") for value in match.groups()) != ("5351", "786"):
            failures.append("core Python reference must report 5,351 declarations across 786 files")
        split_total = 0
        for page in reference_dir.glob("python-api-*.md"):
            page_match = re.search(r"\*\*(\d[\d,]*) declarations\*\*", page.read_text(encoding="utf-8"))
            if page_match:
                split_total += int(page_match.group(1).replace(",", ""))
        if split_total != 5351:
            failures.append(f"split Python reference totals {split_total}, expected 5351")

    for path in (ROOT / "core").glob("*.md"):
        if path.name == "index.md" or path.name in {"architecture.md", "evidence-replay.md", "execution-model.md"}:
            continue
        if "Synced from flytohub/flyto-core@" not in path.read_text(encoding="utf-8"):
            failures.append(f"synced core page missing provenance: {path.relative_to(ROOT)}")
    return failures


def check_brand(files: list[Path]) -> list[str]:
    failures = []
    for relative in files:
        if relative.suffix not in TEXT_SUFFIXES:
            continue
        content = (ROOT / relative).read_text(encoding="utf-8", errors="replace")
        if LEGACY_BRAND_RE.search(content):
            failures.append(f"standalone legacy brand token in {relative}")
        bad_emails = sorted(
            {email.lower() for email in EMAIL_RE.findall(content)} - APPROVED_EMAILS
        )
        if bad_emails:
            failures.append(f"unapproved email(s) in {relative}: {', '.join(bad_emails)}")
        if re.search(r"\b(?:412|417)\s+(?:registry-backed\s+)?modules\b", content, re.I):
            failures.append(f"stale module total in {relative}")
    return failures


def main() -> int:
    files = relative_files()
    markdown = [path for path in files if path.suffix == ".md"]
    failures = run_generated_check()
    failures.extend(check_manifest(files))
    failures.extend(check_module_mirrors())
    failures.extend(check_core_reference())
    failures.extend(check_brand(files))
    for path in markdown:
        if not has_h1(ROOT / path):
            failures.append(f"Markdown file has no H1: {path}")

    if failures:
        print("documentation contract failed:", file=sys.stderr)
        for failure in failures:
            print(f"- {failure}", file=sys.stderr)
        return 1
    print(
        f"documentation contract passed: {len(markdown)} Markdown files, "
        f"{len(files)} maintained files, 451 modules, 5,351 Core declarations"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
