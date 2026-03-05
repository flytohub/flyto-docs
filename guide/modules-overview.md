# Modules Overview

flyto-core includes 412+ modules organized into 78 categories. Each module is a deterministic, self-contained unit of work.

## Categories

| Category | Examples | Count |
|----------|----------|-------|
| Browser | goto, click, type, snapshot, scroll | 20+ |
| File System | read, write, copy, move, delete, glob | 15+ |
| Docker | run, build, exec, logs, compose | 10+ |
| Data Parsing | json, csv, xml, yaml, toml | 12+ |
| Crypto | hash, encrypt, decrypt, sign, verify | 10+ |
| Scheduling | cron, delay, timeout, interval | 6+ |
| Network | http, fetch, download, upload | 8+ |
| Process | exec, spawn, kill, signal | 6+ |
| Text | regex, replace, split, join, template | 10+ |
| Math | calculate, random, statistics | 8+ |

## Module Naming

Modules follow a `category.action` naming convention:

```
browser.goto
file.read
docker.run
data.parse_json
crypto.hash
```

## Listing All Modules

```bash
# Via CLI
flyto-core modules list

# Via MCP — use the list_modules tool
```

## Module Documentation

Each module has:
- **Parameters** — Required and optional inputs
- **Returns** — Output format
- **Examples** — Usage examples
- **Evidence** — What gets recorded

See individual module pages for details:
- [Browser](/modules/browser)
- [File System](/modules/file-system)
- [Docker](/modules/docker)
- [Data Parsing](/modules/data-parsing)
- [Crypto](/modules/crypto)
- [Scheduling](/modules/scheduling)
