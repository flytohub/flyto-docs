# Modules Overview

flyto-core includes 451 registry-backed modules. The generated core catalog tracks 84 prefix categories, the runtime ships 41 built-in recipes, and each module is a deterministic, self-contained unit of work.

## Categories

| Category | Examples | Count |
|----------|----------|-------|
| Browser | goto, click, type, screenshot, performance | 54 |
| Flow | branch, loop, parallel, retry, rate limit | 24 |
| Data Parsing | json, csv, xml, yaml, transform | 13 |
| API | HTTP, GitHub, OpenAI, Anthropic, Gemini | 13 |
| Array | map, reduce, unique, chunk, flatten | 15 |
| String | uppercase, replace, split, slugify, template | 11 |
| AI | chat, model calls, vision, embeddings | 10 |
| Image | resize, convert, crop, OCR, QR code | 9 |
| Testing | assertions, scenarios, E2E steps, reports | 10 |
| Crypto | hash, encrypt, decrypt, sign, verify | 7 |

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
- [File Operations](/modules/file-operations)
- [Docker](/modules/docker)
- [Data Transform](/modules/data-transform)
- [Crypto](/modules/crypto)
- [Scheduler](/modules/scheduler)

Browse the full [module reference](/modules/) or the generated core catalog for all 84 catalog categories and 41 built-in recipes.
