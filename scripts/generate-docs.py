#!/usr/bin/env python3
"""
Generate VitePress module documentation from flyto-core registry + flyto-i18n translations.

Usage:
    pip install flyto-core
    python scripts/generate-docs.py                  # English only
    python scripts/generate-docs.py --all-locales     # All 15 locales
    python scripts/generate-docs.py --locale zh-TW    # Single locale

Or from source:
    FLYTO_CORE_PATH=/path/to/flyto-core FLYTO_I18N_PATH=/path/to/flyto-i18n python scripts/generate-docs.py
"""

import json
import os
import sys
from pathlib import Path
from collections import defaultdict

# Try importing from installed package first, then from source
try:
    from flyto_core.modules.registry import get_registry
except ImportError:
    core_path = os.environ.get(
        "FLYTO_CORE_PATH",
        str(Path(__file__).resolve().parents[2] / "flyto-core"),
    )
    sys.path.insert(0, core_path)
    from src.core.modules.registry import get_registry

PROJECT_ROOT = Path(__file__).resolve().parents[1]
I18N_DIR = Path(
    os.environ.get(
        "FLYTO_I18N_PATH",
        str(Path(__file__).resolve().parents[2] / "flyto-i18n"),
    )
) / "locales"

# All supported locales
ALL_LOCALES = [
    "en", "zh-TW", "ja", "ko", "fr", "es", "hi", "de",
    "pt-BR", "vi", "id", "th", "tr", "pl", "it",
]

# Category display config: slug -> (title, description)
CATEGORY_CONFIG = {
    "ai": ("AI & LLM", "AI model integration, text generation, embeddings, and autonomous agents."),
    "analysis": ("Analysis", "HTML analysis modules for readability, forms, tables, and metadata extraction."),
    "api": ("API Tools", "GitHub API, HTTP requests, and search engine integrations."),
    "archive": ("Archive", "Create and extract ZIP, TAR, and gzip archives."),
    "array": ("Array Operations", "List manipulation — chunk, flatten, group, map, reduce, zip, and more."),
    "atomic": ("Atomic", "Low-level primitives: file I/O, git, HTTP, shell, SSH, process management, and testing."),
    "browser": ("Browser Automation", "Full web automation: navigation, interaction, data extraction, screenshots, and performance monitoring."),
    "cache": ("Cache", "In-memory key-value cache with TTL support."),
    "check": ("Check", "Runtime type checking utilities."),
    "cloud": ("Cloud Services", "AWS S3, Azure Blob, Google Cloud Storage, and Google Workspace integrations."),
    "compare": ("Compare", "Threshold-based change detection."),
    "convert": ("Convert", "Type casting between data types."),
    "crypto": ("Crypto", "AES encryption/decryption, HMAC, JWT tokens, and secure random generation."),
    "data": ("Data Transform", "CSV, JSON, XML, YAML parsing, generation, and pipeline transformations."),
    "database": ("Database", "MongoDB, MySQL, PostgreSQL, and Redis database operations."),
    "docker": ("Docker", "Build, run, inspect, and manage Docker containers."),
    "document": ("Document", "Excel, PDF, and Word document read/write/convert."),
    "element": ("Element", "DOM element query, attribute, and text extraction."),
    "encode": ("Encode / Decode", "Base64, hex, URL, and HTML encoding and decoding."),
    "env": ("Environment", "Environment variable management and .env file loading."),
    "error": ("Error Handling", "Retry, fallback, and circuit breaker patterns."),
    "file": ("File Operations", "Copy, move, and delete files."),
    "flow": ("Flow Control", "Branching, loops, parallelism, subflows, triggers, and error handling."),
    "format": ("Format", "Number, currency, duration, filesize, and percentage formatting."),
    "graphql": ("GraphQL", "Execute GraphQL queries and mutations."),
    "hash": ("Hash", "SHA-256 and SHA-512 cryptographic hashing."),
    "http": ("HTTP", "HTTP request utilities."),
    "image": ("Image Processing", "Resize, crop, compress, convert, OCR, QR codes, and watermarks."),
    "k8s": ("Kubernetes", "Apply manifests, describe resources, get pods, logs, and scale deployments."),
    "logic": ("Logic", "Boolean logic operations: AND, OR, NOT, equals, contains."),
    "markdown": ("Markdown", "Parse frontmatter, convert to HTML, and generate table of contents."),
    "math": ("Math", "Basic math operations: abs, ceil, floor, power, round."),
    "meta": ("Meta", "Module generation, listing, testing, and documentation."),
    "network": ("Network", "Ping, port scan, traceroute, and WHOIS lookup."),
    "notification": ("Notifications", "Send messages via Slack, Discord, Teams, Telegram, email, SMS, and WhatsApp."),
    "object": ("Object Operations", "Deep merge, flatten, dot-path get/set, and unflatten."),
    "output": ("Output", "Universal display and inspect node for debugging and workflow I/O."),
    "path": ("Path", "File path utilities: join, normalize, basename, dirname, extension."),
    "productivity": ("Productivity", "Google Sheets, Notion, Airtable, and Stripe integrations."),
    "queue": ("Queue", "In-memory and Redis message queue operations."),
    "random": ("Random", "Random number, UUID, choice, and shuffle."),
    "regex": ("Regex", "Pattern matching: match, extract, replace, split, and test."),
    "sandbox": ("Sandbox", "Execute JavaScript, Python, or shell commands in isolated environments."),
    "scheduler": ("Scheduler", "Cron parsing, delay, and interval calculations."),
    "set": ("Set", "Set operations: union, intersection, difference, unique."),
    "stats": ("Stats", "Statistical functions: mean, median, mode, std dev, percentile, and more."),
    "stealth": ("Stealth", "Anti-detection browser fingerprinting and stealth launch."),
    "storage": ("Storage", "Persistent key-value storage."),
    "string": ("String Operations", "Text manipulation: case conversion, split, pad, slugify, template, and more."),
    "template": ("Template", "Execute reusable templates as workflow steps."),
    "testing": ("Testing", "Assertion utilities: equal, contains, length, true, not null, greater than."),
    "text": ("Text", "Text analysis: word count, encoding detection, email/URL/number extraction."),
    "utility": ("Utilities", "Datetime operations, delay, MD5 hash, and random utilities."),
    "validate": ("Validate", "Validate email, URL, phone, IP, UUID, credit card, and JSON Schema."),
    "verify": ("Verify", "Visual verification, Figma comparison, style capture, and report generation."),
}

# Map category to file slug
CATEGORY_TO_SLUG = {
    "ai": "ai-llm",
    "api": "api-tools",
    "data": "data-transform",
    "encode": "encode-decode",
    "error": "error-handling",
    "file": "file-operations",
    "flow": "flow-control",
    "k8s": "k8s",
    "object": "object-operations",
}


def get_slug(category: str) -> str:
    return CATEGORY_TO_SLUG.get(category, category)


# ---------------------------------------------------------------------------
# i18n helpers
# ---------------------------------------------------------------------------

def load_i18n(locale: str) -> dict:
    """Load all modules.*.json translation files for a given locale."""
    translations = {}
    locale_dir = I18N_DIR / locale
    if not locale_dir.is_dir():
        return translations
    for f in sorted(locale_dir.glob("modules.*.json")):
        try:
            data = json.loads(f.read_text(encoding="utf-8"))
            translations.update(data.get("translations", {}))
        except (json.JSONDecodeError, KeyError):
            pass
    return translations


def i18n_get(translations: dict, key: str, fallback: str) -> str:
    """Look up a translation key, return fallback if not found."""
    if not translations:
        return fallback
    return translations.get(key, fallback)


# ---------------------------------------------------------------------------
# Rendering
# ---------------------------------------------------------------------------

def escape_vue(text: str) -> str:
    """Escape {{ }} in text to prevent VitePress treating them as Vue template syntax."""
    import re
    return re.sub(r'\{\{(.+?)\}\}', r'{<!-- -->{\1}<!-- -->}', text)


def render_param_type(param: dict) -> str:
    """Render parameter type with options if it's a select."""
    ptype = param.get("type", "string")
    if ptype == "select" and "options" in param:
        options = param["options"]
        if options and isinstance(options[0], dict):
            opts = ", ".join(f'`{o["value"]}`' for o in options)
        else:
            opts = ", ".join(f'`{o}`' for o in options)
        return f"select ({opts})"
    return ptype


def render_module_section(module_id: str, meta: dict, t: dict) -> str:
    """Render a single module's documentation section."""
    lines = []
    i18n_prefix = f"modules.{module_id}"

    label = i18n_get(t, f"{i18n_prefix}.label", meta.get("ui_label", module_id))
    desc = escape_vue(i18n_get(t, f"{i18n_prefix}.description", meta.get("ui_description", "")))

    lines.append(f"### {label}")
    lines.append("")
    lines.append(f"`{module_id}`")
    lines.append("")
    if desc:
        lines.append(desc)
        lines.append("")

    # Parameters
    params = meta.get("params_schema", {})
    if params:
        lines.append("**Parameters:**")
        lines.append("")
        lines.append("| Name | Type | Required | Default | Description |")
        lines.append("|------|------|----------|---------|-------------|")
        for pname, pinfo in params.items():
            ptype = render_param_type(pinfo)
            required = "Yes" if pinfo.get("required") else "No"
            raw_default = str(pinfo['default']) if "default" in pinfo else ""
            default = f"`{escape_vue(raw_default)}`" if raw_default else "-"
            pdesc = escape_vue(i18n_get(
                t,
                f"{i18n_prefix}.params.{pname}.description",
                pinfo.get("description", ""),
            ))
            lines.append(f"| `{pname}` | {ptype} | {required} | {default} | {pdesc} |")
        lines.append("")

    # Output
    output = meta.get("output_schema", {})
    if output:
        lines.append("**Output:**")
        lines.append("")
        lines.append("| Field | Type | Description |")
        lines.append("|-------|------|-------------|")
        for oname, oinfo in output.items():
            if isinstance(oinfo, dict):
                otype = oinfo.get("type", "any")
                odesc_fallback = oinfo.get("description", "")
            else:
                otype = "any"
                odesc_fallback = str(oinfo)
            odesc = escape_vue(i18n_get(
                t,
                f"{i18n_prefix}.output.{oname}.description",
                odesc_fallback,
            ))
            lines.append(f"| `{oname}` | {otype} | {odesc} |")
        lines.append("")

    # Examples
    examples = meta.get("examples", [])
    if examples:
        for ex in examples:
            title = ex.get("title", "Example")
            params_ex = ex.get("params", {})
            lines.append(f"**Example:** {title}")
            lines.append("")
            lines.append("```yaml")
            for k, v in params_ex.items():
                lines.append(f"{k}: {json.dumps(v) if not isinstance(v, str) else v}")
            lines.append("```")
            lines.append("")

    return "\n".join(lines)


def group_modules_by_subcategory(modules: list[tuple[str, dict]]) -> dict:
    """Group modules by ui_group for large categories."""
    groups = defaultdict(list)
    for mid, meta in modules:
        group = meta.get("ui_group") or "General"
        groups[group].append((mid, meta))
    return dict(groups)


def generate_category_page(category: str, modules: list[tuple[str, dict]], t: dict) -> str:
    """Generate a complete markdown page for a category."""
    title, description = CATEGORY_CONFIG.get(category, (category.title(), ""))
    lines = []
    lines.append(f"# {title}")
    lines.append("")
    lines.append(description)
    lines.append("")

    # Summary table
    lines.append(f"**{len(modules)} modules**")
    lines.append("")
    lines.append("| Module | Description |")
    lines.append("|--------|-------------|")
    for mid, meta in modules:
        i18n_prefix = f"modules.{mid}"
        label = i18n_get(t, f"{i18n_prefix}.label", meta.get("ui_label", mid))
        desc = i18n_get(t, f"{i18n_prefix}.description", meta.get("ui_description", ""))
        anchor = label.lower().replace(" ", "-").replace("/", "").replace("&", "").replace("(", "").replace(")", "")
        lines.append(f"| [{label}](#{anchor}) | {desc} |")
    lines.append("")

    # If large category (>10 modules), group by ui_group
    if len(modules) > 10:
        groups = group_modules_by_subcategory(modules)
        if len(groups) > 1:
            for group_name, group_modules in groups.items():
                lines.append(f"## {group_name}")
                lines.append("")
                for mid, meta in group_modules:
                    lines.append(render_module_section(mid, meta, t))
        else:
            lines.append("## Modules")
            lines.append("")
            for mid, meta in modules:
                lines.append(render_module_section(mid, meta, t))
    else:
        lines.append("## Modules")
        lines.append("")
        for mid, meta in modules:
            lines.append(render_module_section(mid, meta, t))

    return "\n".join(lines)


def generate_modules_index(by_category: dict, docs_dir: Path, link_prefix: str = ""):
    """Generate modules/index.md with category overview from registry data."""
    # For the root (en) locale, don't overwrite the manually written index
    if not link_prefix:
        return

    # Group categories same as sidebar
    groups = {
        "Core": ["browser", "atomic", "flow", "file", "sandbox", "element", "stealth"],
        "Data": ["data", "array", "string", "object", "text", "regex", "convert", "format", "set", "template", "markdown"],
        "Infrastructure": ["cloud", "api", "database", "docker", "k8s", "network", "cache", "queue", "storage", "graphql", "http"],
        "Integrations": ["productivity", "notification", "ai", "image", "document"],
        "Quality": ["verify", "validate", "check", "analysis", "testing", "compare"],
        "Utilities": ["utility", "stats", "crypto", "encode", "archive", "path", "math", "logic", "random", "meta", "env", "error", "scheduler", "hash", "output"],
    }

    lines = [
        "# Modules\n",
        f"\nflyto-core ships {sum(len(m) for m in by_category.values())}+ modules. Each module is a self-contained unit of work with defined inputs, outputs, and evidence.\n",
        "\n## Browse by Category\n",
    ]

    for group_name, cats in groups.items():
        lines.append(f"\n### {group_name}\n")
        lines.append("\n| Category | Modules | Description |")
        lines.append("\n|----------|---------|-------------|")
        for cat in cats:
            if cat not in by_category:
                continue
            slug = get_slug(cat)
            title = CATEGORY_CONFIG.get(cat, (cat.title(), ""))[0]
            desc = CATEGORY_CONFIG.get(cat, ("", ""))[1]
            count = len(by_category[cat])
            lines.append(f"\n| [{title}]({link_prefix}/modules/{slug}) | {count} | {desc} |")
        lines.append("\n")

    # Add any categories not in groups
    known = {c for cats in groups.values() for c in cats}
    extra = sorted(set(by_category.keys()) - known)
    if extra:
        lines.append("\n### Other\n")
        lines.append("\n| Category | Modules | Description |")
        lines.append("\n|----------|---------|-------------|")
        for cat in extra:
            slug = get_slug(cat)
            title = CATEGORY_CONFIG.get(cat, (cat.title(), ""))[0]
            desc = CATEGORY_CONFIG.get(cat, ("", ""))[1]
            count = len(by_category[cat])
            lines.append(f"\n| [{title}]({link_prefix}/modules/{slug}) | {count} | {desc} |")
        lines.append("\n")

    (docs_dir / "index.md").write_text("".join(lines), encoding="utf-8")


def generate_for_locale(locale: str, by_category: dict):
    """Generate all module pages for a single locale."""
    t = load_i18n(locale)

    # en goes to /modules/, others go to /{locale}/modules/
    if locale == "en":
        docs_dir = PROJECT_ROOT / "modules"
        link_prefix = ""
    else:
        docs_dir = PROJECT_ROOT / locale / "modules"
        link_prefix = f"/{locale}"

    docs_dir.mkdir(parents=True, exist_ok=True)

    # Generate index.md for locale
    generate_modules_index(by_category, docs_dir, link_prefix)

    total_modules = 0
    generated = 0
    for category, modules in sorted(by_category.items()):
        slug = get_slug(category)
        page = generate_category_page(category, modules, t)
        out_path = docs_dir / f"{slug}.md"
        out_path.write_text(page, encoding="utf-8")
        total_modules += len(modules)
        generated += 1

    return generated, total_modules, len(t)


def main():
    import argparse

    parser = argparse.ArgumentParser(description="Generate flyto-docs module pages")
    parser.add_argument("--locale", default="en", help="i18n locale (default: en)")
    parser.add_argument("--all-locales", action="store_true", help="Generate for all 15 locales")
    args = parser.parse_args()

    registry = get_registry()
    all_modules = registry.list_all()

    # Group by category
    by_category = defaultdict(list)
    for module_id in all_modules:
        meta = registry.get_metadata(module_id)
        if meta:
            cat = meta.get("category", "unknown")
            by_category[cat].append((module_id, meta))

    # Sort modules within each category
    for cat in by_category:
        by_category[cat].sort(key=lambda x: x[0])

    locales = ALL_LOCALES if args.all_locales else [args.locale]

    for locale in locales:
        generated, total_modules, i18n_keys = generate_for_locale(locale, by_category)
        label = f"[{locale}]"
        i18n_info = f" ({i18n_keys} i18n keys)" if i18n_keys else ""
        print(f"  {label:8s} {generated} pages, {total_modules} modules{i18n_info}")

    print(f"\nDone. {len(locales)} locale(s) generated.")


if __name__ == "__main__":
    main()
