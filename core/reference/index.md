<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Flyto2 Core Source Reference

The Flyto2 Core source reference maps the maintained runtime, public interfaces, registrations, and generated inventories back to source.

- [Source module inventory](/core/reference/source-modules): every maintained Python file, size, imports, purpose, and declaration count.
- [Python declaration reference](/core/reference/python-api): every class, function, nested function, and method signature.
- [Registered module source map](/core/reference/registered-modules): every static `@register_module` declaration and implementation link.
- [CLI parser reference](/core/reference/cli): every static CLI parser command and argument.
- [HTTP route reference](/core/reference/http-api): every FastAPI route with mount and decorator-auth status.
- [Configuration and packaged assets](/core/reference/configuration): environment readers, recipes, bundles, and workflow files.
- [Packaged recipe reference](/core/reference/recipes): every recipe parameter and composed module step.
- [Runtime Tool Catalog](/modules/): all registry-discovered modules with parameter and output schemas.

Run `.venv/bin/python scripts/generate_reference.py` after changing documented
source. CI runs the same command with `--check` and rejects drift.
