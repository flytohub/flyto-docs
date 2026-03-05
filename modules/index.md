# Modules

flyto-core ships 400+ modules organized into 55 categories. Each module is a self-contained unit of work with defined inputs, outputs, and evidence.

## Browse by Category

### Core

| Category | Modules | Description |
|----------|---------|-------------|
| [Browser Automation](/modules/browser) | 38 | Web automation, navigation, interaction, data extraction |
| [Atomic](/modules/atomic) | 39 | Low-level primitives: file, git, HTTP, shell, SSH, testing |
| [Flow Control](/modules/flow-control) | 23 | Branching, loops, parallelism, subflows, error handling |
| [File Operations](/modules/file-operations) | 3 | Copy, move, delete files |
| [Sandbox](/modules/sandbox) | 3 | Execute JS, Python, or shell in isolated environments |
| [Element](/modules/element) | 3 | Query and extract DOM element data |
| [Stealth](/modules/stealth) | 2 | Anti-detection browser fingerprinting |

### Data

| Category | Modules | Description |
|----------|---------|-------------|
| [Data Transform](/modules/data-transform) | 16 | CSV, JSON, XML, YAML parsing and generation |
| [Array Operations](/modules/array) | 12 | Chunk, flatten, group, map, reduce, zip arrays |
| [String Operations](/modules/string) | 11 | Case conversion, split, pad, slugify, template |
| [Object Operations](/modules/object-operations) | 5 | Deep merge, flatten, dot-path get/set |
| [Text](/modules/text) | 6 | Word count, encoding detection, email/URL extraction |
| [Regex](/modules/regex) | 5 | Match, extract, replace, split, test patterns |
| [Convert](/modules/convert) | 5 | Type casting between data types |
| [Format](/modules/format) | 5 | Currency, duration, filesize, number, percentage |
| [Set](/modules/set) | 4 | Union, intersection, difference, unique |
| [Template](/modules/template) | 1 | Execute reusable templates as workflow steps |
| [Markdown](/modules/markdown) | 3 | Parse frontmatter, convert to HTML, generate TOC |

### Infrastructure

| Category | Modules | Description |
|----------|---------|-------------|
| [Cloud Services](/modules/cloud) | 14 | AWS S3, Azure Blob, GCS, Google Workspace |
| [API Tools](/modules/api-tools) | 9 | GitHub API, HTTP requests, search engines |
| [Database](/modules/database) | 6 | MongoDB, MySQL, PostgreSQL, Redis |
| [Docker](/modules/docker) | 6 | Build, run, inspect, logs, stop containers |
| [Kubernetes](/modules/k8s) | 5 | Apply, describe, get pods, logs, scale |
| [Network](/modules/network) | 4 | Ping, port scan, traceroute, WHOIS |
| [Cache](/modules/cache) | 4 | Key-value cache with TTL |
| [Queue](/modules/queue) | 3 | In-memory message queue |
| [Storage](/modules/storage) | 3 | Persistent key-value storage |
| [GraphQL](/modules/graphql) | 2 | Query and mutation execution |
| [HTTP](/modules/http) | 1 | Simple GET requests |

### Integrations

| Category | Modules | Description |
|----------|---------|-------------|
| [Productivity](/modules/productivity) | 10 | Google Sheets, Notion, Airtable, Stripe |
| [Notifications](/modules/notification) | 9 | Slack, Discord, Teams, Telegram, email, SMS |
| [AI & LLM](/modules/ai-llm) | 7 | OpenAI, Anthropic, Gemini, Ollama, agents |
| [Image Processing](/modules/image) | 9 | Resize, crop, compress, OCR, QR codes |
| [Document](/modules/document) | 8 | Excel, PDF, Word read/write/convert |

### Quality

| Category | Modules | Description |
|----------|---------|-------------|
| [Verify](/modules/verify) | 9 | Visual verification, Figma comparison, reports |
| [Validate](/modules/validate) | 7 | Email, URL, phone, IP, UUID, JSON Schema |
| [Check](/modules/check) | 7 | Runtime type checking |
| [Analysis](/modules/analysis) | 6 | HTML readability, forms, tables, metadata |
| [Testing](/modules/testing) | 6 | Assertions: equal, contains, length, true, not null |
| [Compare](/modules/compare) | 1 | Threshold-based change detection |

### Utilities

| Category | Modules | Description |
|----------|---------|-------------|
| [Utilities](/modules/utility) | 9 | Datetime, delay, hash, random |
| [Stats](/modules/stats) | 8 | Mean, median, mode, std dev, percentile |
| [Crypto](/modules/crypto) | 7 | AES encryption, JWT, HMAC, secure random |
| [Encode / Decode](/modules/encode-decode) | 7 | Base64, hex, URL, HTML encoding |
| [Archive](/modules/archive) | 6 | ZIP, TAR, gzip create and extract |
| [Path](/modules/path) | 6 | Join, normalize, basename, extension |
| [Math](/modules/math) | 5 | Abs, ceil, floor, power, round |
| [Logic](/modules/logic) | 5 | AND, OR, NOT, equals, contains |
| [Random](/modules/random) | 4 | Number, UUID, choice, shuffle |
| [Meta](/modules/meta) | 4 | Module generation, listing, testing |
| [Environment](/modules/env) | 3 | Get, set, load .env files |
| [Error Handling](/modules/error-handling) | 3 | Retry, fallback, circuit breaker |
| [Scheduler](/modules/scheduler) | 3 | Cron, delay, interval |
| [Hash](/modules/hash) | 2 | SHA-256, SHA-512 |
| [Output](/modules/output) | 1 | Universal display/inspect node |

## Module Structure

Every module follows the same pattern:

```
Module
-- Parameters (input schema)
-- Returns (output schema)
-- Execute (deterministic logic)
-- Evidence (what gets recorded)
```

## Discovering Modules

### CLI

```bash
# List all modules
flyto-core modules list

# Search modules
flyto-core modules search browser

# Get module info
flyto-core modules info browser.goto
```

### MCP

When connected via MCP, all modules appear as tools. Use your client's tool listing to browse them.
