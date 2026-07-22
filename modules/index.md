# Modules

flyto-core ships 451 registry-backed modules. The full core catalog tracks 84 prefix categories; these docs group modules into stable documentation categories with defined inputs, outputs, and evidence. The runtime also includes 41 built-in recipes.

## Browse by Category

### Core

| Category | Modules | Description |
|----------|---------|-------------|
| [No-Code Browser Automation](/modules/browser) | 54 | Use open-source no-code browser automation modules for navigation, forms, extraction, screenshots, Web Vitals, evidence, and replay. |
| [Atomic](/modules/atomic) | 45 | Low-level primitives: file I/O, git, HTTP, shell, SSH, process management, and testing. |
| [Flow Control](/modules/flow-control) | 24 | Branching, loops, parallelism, subflows, triggers, and error handling. |
| [File Operations](/modules/file-operations) | 3 | Copy, move, and delete files. |
| [Sandbox](/modules/sandbox) | 3 | Execute JavaScript, Python, or shell commands in isolated environments. |
| [Element](/modules/element) | 3 | DOM element query, attribute, and text extraction. |
| [MCP](/modules/mcp) | 1 | Model Context Protocol helpers for recipe and tool execution. |

### Data

| Category | Modules | Description |
|----------|---------|-------------|
| [Data Transform](/modules/data-transform) | 18 | CSV, JSON, XML, YAML parsing, generation, and pipeline transformations. |
| [Array Operations](/modules/array) | 12 | List manipulation — chunk, flatten, group, map, reduce, zip, and more. |
| [String Operations](/modules/string) | 11 | Text manipulation: case conversion, split, pad, slugify, template, and more. |
| [Object Operations](/modules/object-operations) | 5 | Deep merge, flatten, dot-path get/set, and unflatten. |
| [Text](/modules/text) | 6 | Text analysis: word count, encoding detection, email/URL/number extraction. |
| [Regex](/modules/regex) | 5 | Pattern matching: match, extract, replace, split, and test. |
| [Convert](/modules/convert) | 5 | Type casting between data types. |
| [Format](/modules/format) | 5 | Number, currency, duration, filesize, and percentage formatting. |
| [Set](/modules/set) | 4 | Set operations: union, intersection, difference, unique. |
| [Template](/modules/template) | 1 | Execute reusable templates as workflow steps. |
| [Markdown](/modules/markdown) | 3 | Parse frontmatter, convert to HTML, and generate table of contents. |

### Infrastructure

| Category | Modules | Description |
|----------|---------|-------------|
| [Cloud Services](/modules/cloud) | 14 | AWS S3, Azure Blob, Google Cloud Storage, and Google Workspace integrations. |
| [API Tools](/modules/api-tools) | 9 | GitHub API, HTTP requests, and search engine integrations. |
| [Database](/modules/database) | 9 | MongoDB, MySQL, PostgreSQL, and Redis database operations. |
| [Docker](/modules/docker) | 6 | Build, run, inspect, and manage Docker containers. |
| [Kubernetes](/modules/k8s) | 5 | Apply manifests, describe resources, get pods, logs, and scale deployments. |
| [Network](/modules/network) | 4 | Ping, port scan, traceroute, and WHOIS lookup. |
| [Cache](/modules/cache) | 4 | In-memory key-value cache with TTL support. |
| [Queue](/modules/queue) | 3 | In-memory and Redis message queue operations. |
| [Storage](/modules/storage) | 3 | Persistent key-value storage. |
| [GraphQL](/modules/graphql) | 2 | Execute GraphQL queries and mutations. |
| [HTTP](/modules/http) | 1 | HTTP request utilities. |

### Integrations

| Category | Modules | Description |
|----------|---------|-------------|
| [Productivity](/modules/productivity) | 10 | Google Sheets, Notion, Airtable, and Stripe integrations. |
| [Notifications](/modules/notification) | 9 | Send messages via Slack, Discord, Teams, Telegram, email, SMS, and WhatsApp. |
| [Communication](/modules/communication) | 4 | Team communication helpers for Slack, webhooks, and outbound messages. |
| [AI & LLM](/modules/ai-llm) | 18 | AI model integration, text generation, embeddings, and autonomous agents. |
| [Image Processing](/modules/image) | 9 | Resize, crop, compress, convert, OCR, QR codes, and watermarks. |
| [Document](/modules/document) | 8 | Excel, PDF, and Word document read/write/convert. |

### Quality

| Category | Modules | Description |
|----------|---------|-------------|
| [Verify](/modules/verify) | 9 | Visual verification, Figma comparison, style capture, and report generation. |
| [Verification](/modules/verification) | 4 | Deterministic verification primitives for discovery, scenario generation, run evidence, and reports. |
| [Warroom](/modules/warroom) | 6 | Compatibility modules for Warroom deterministic verification workflows. |
| [Validate](/modules/validate) | 7 | Validate email, URL, phone, IP, UUID, credit card, and JSON Schema. |
| [Check](/modules/check) | 7 | Runtime type checking utilities. |
| [Analysis](/modules/analysis) | 6 | HTML analysis modules for readability, forms, tables, and metadata extraction. |
| [Testing](/modules/testing) | 8 | Assertion utilities: equal, contains, length, true, not null, greater than. |
| [Compare](/modules/compare) | 1 | Threshold-based change detection. |
| [Training](/modules/training) | 4 | Training data, fine-tuning, and evaluation helpers. |

### Utilities

| Category | Modules | Description |
|----------|---------|-------------|
| [Utilities](/modules/utility) | 9 | Datetime operations, delay, MD5 hash, and random utilities. |
| [Stats](/modules/stats) | 8 | Statistical functions: mean, median, mode, std dev, percentile, and more. |
| [Crypto](/modules/crypto) | 7 | AES encryption/decryption, HMAC, JWT tokens, and secure random generation. |
| [Encode / Decode](/modules/encode-decode) | 7 | Base64, hex, URL, and HTML encoding and decoding. |
| [Archive](/modules/archive) | 6 | Create and extract ZIP, TAR, and gzip archives. |
| [Path](/modules/path) | 6 | File path utilities: join, normalize, basename, dirname, extension. |
| [Math](/modules/math) | 5 | Basic math operations: abs, ceil, floor, power, round. |
| [Logic](/modules/logic) | 5 | Boolean logic operations: AND, OR, NOT, equals, contains. |
| [Random](/modules/random) | 4 | Random number, UUID, choice, and shuffle. |
| [Meta](/modules/meta) | 4 | Module generation, listing, testing, and documentation. |
| [Environment](/modules/env) | 3 | Environment variable management and .env file loading. |
| [Error Handling](/modules/error-handling) | 3 | Retry, fallback, and circuit breaker patterns. |
| [Scheduler](/modules/scheduler) | 3 | Cron parsing, delay, and interval calculations. |
| [Hash](/modules/hash) | 2 | SHA-256 and SHA-512 cryptographic hashing. |
| [Output](/modules/output) | 1 | Universal display and inspect node for debugging and workflow I/O. |
