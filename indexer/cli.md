# CLI Reference

Install via `pip install flyto-indexer`, then use the `flyto-index` command.

## Commands

### init

Initialize a project for indexing.

```bash
flyto-index init [path]
```

Creates the `.flyto/` directory structure.

### scan

Build or update the index.

```bash
# Incremental scan (default)
flyto-index scan /path/to/project

# Full re-scan
flyto-index scan /path/to/project --full
```

### status

Check index freshness.

```bash
flyto-index status [path]
```

### impact

Run impact analysis from the command line.

```bash
flyto-index impact <symbol> --path /path/to/project
```

### context

Extract LLM-ready context for a file or query.

```bash
flyto-index context --path /path/to/file [--query "search term"]
```

### outline

Generate a project outline (L0 summary).

```bash
flyto-index outline /path/to/project
```

### brief

Generate a compact project summary (under 500 tokens).

```bash
flyto-index brief [path]
```

### describe

Read or write semantic file descriptions.

```bash
flyto-index describe /path/to/file
```

### demo

Run a 30-second demo (scan + impact analysis).

```bash
flyto-index demo [path]
```

### check

CI gate — exits non-zero if risky changes detected.

```bash
flyto-index check [path] --threshold high|medium|low
```

### tools

Output JSON schema of all available tools.

```bash
flyto-index tools
```

### install-hook

Install a git hook for auto-reindex on commit.

```bash
flyto-index install-hook [path]
```
