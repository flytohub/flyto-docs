# Modules

flyto-core ships 433+ modules. Each module is a self-contained unit of work with defined inputs, outputs, and evidence.

## Browse by Category

### Core

| Category | Modules | Description |
|----------|---------|-------------|
| [Browser Automation](/zh-TW/modules/browser) | 54 | Full web automation: navigation, interaction, data extraction, screenshots, and performance monitoring. |
| [Atomic](/zh-TW/modules/atomic) | 44 | Low-level primitives: file I/O, git, HTTP, shell, SSH, process management, and testing. |
| [Flow Control](/zh-TW/modules/flow-control) | 24 | Branching, loops, parallelism, subflows, triggers, and error handling. |
| [File Operations](/zh-TW/modules/file-operations) | 3 | Copy, move, and delete files. |
| [Sandbox](/zh-TW/modules/sandbox) | 3 | Execute JavaScript, Python, or shell commands in isolated environments. |
| [Element](/zh-TW/modules/element) | 3 | DOM element query, attribute, and text extraction. |

### Data

| Category | Modules | Description |
|----------|---------|-------------|
| [Data Transform](/zh-TW/modules/data-transform) | 16 | CSV, JSON, XML, YAML parsing, generation, and pipeline transformations. |
| [Array Operations](/zh-TW/modules/array) | 12 | List manipulation — chunk, flatten, group, map, reduce, zip, and more. |
| [String Operations](/zh-TW/modules/string) | 11 | Text manipulation: case conversion, split, pad, slugify, template, and more. |
| [Object Operations](/zh-TW/modules/object-operations) | 5 | Deep merge, flatten, dot-path get/set, and unflatten. |
| [Text](/zh-TW/modules/text) | 6 | Text analysis: word count, encoding detection, email/URL/number extraction. |
| [Regex](/zh-TW/modules/regex) | 5 | Pattern matching: match, extract, replace, split, and test. |
| [Convert](/zh-TW/modules/convert) | 5 | Type casting between data types. |
| [Format](/zh-TW/modules/format) | 5 | Number, currency, duration, filesize, and percentage formatting. |
| [Set](/zh-TW/modules/set) | 4 | Set operations: union, intersection, difference, unique. |
| [Template](/zh-TW/modules/template) | 1 | Execute reusable templates as workflow steps. |
| [Markdown](/zh-TW/modules/markdown) | 3 | Parse frontmatter, convert to HTML, and generate table of contents. |

### Infrastructure

| Category | Modules | Description |
|----------|---------|-------------|
| [Cloud Services](/zh-TW/modules/cloud) | 14 | AWS S3, Azure Blob, Google Cloud Storage, and Google Workspace integrations. |
| [API Tools](/zh-TW/modules/api-tools) | 9 | GitHub API, HTTP requests, and search engine integrations. |
| [Database](/zh-TW/modules/database) | 9 | MongoDB, MySQL, PostgreSQL, and Redis database operations. |
| [Docker](/zh-TW/modules/docker) | 6 | Build, run, inspect, and manage Docker containers. |
| [Kubernetes](/zh-TW/modules/k8s) | 5 | Apply manifests, describe resources, get pods, logs, and scale deployments. |
| [Network](/zh-TW/modules/network) | 4 | Ping, port scan, traceroute, and WHOIS lookup. |
| [Cache](/zh-TW/modules/cache) | 4 | In-memory key-value cache with TTL support. |
| [Queue](/zh-TW/modules/queue) | 3 | In-memory and Redis message queue operations. |
| [Storage](/zh-TW/modules/storage) | 3 | Persistent key-value storage. |
| [GraphQL](/zh-TW/modules/graphql) | 2 | Execute GraphQL queries and mutations. |
| [HTTP](/zh-TW/modules/http) | 1 | HTTP request utilities. |

### Integrations

| Category | Modules | Description |
|----------|---------|-------------|
| [Productivity](/zh-TW/modules/productivity) | 10 | Google Sheets, Notion, Airtable, and Stripe integrations. |
| [Notifications](/zh-TW/modules/notification) | 9 | Send messages via Slack, Discord, Teams, Telegram, email, SMS, and WhatsApp. |
| [AI & LLM](/zh-TW/modules/ai-llm) | 18 | AI model integration, text generation, embeddings, and autonomous agents. |
| [Image Processing](/zh-TW/modules/image) | 9 | Resize, crop, compress, convert, OCR, QR codes, and watermarks. |
| [Document](/zh-TW/modules/document) | 8 | Excel, PDF, and Word document read/write/convert. |

### Quality

| Category | Modules | Description |
|----------|---------|-------------|
| [Verify](/zh-TW/modules/verify) | 9 | Visual verification, Figma comparison, style capture, and report generation. |
| [Validate](/zh-TW/modules/validate) | 7 | Validate email, URL, phone, IP, UUID, credit card, and JSON Schema. |
| [Check](/zh-TW/modules/check) | 7 | Runtime type checking utilities. |
| [Analysis](/zh-TW/modules/analysis) | 6 | HTML analysis modules for readability, forms, tables, and metadata extraction. |
| [Testing](/zh-TW/modules/testing) | 6 | Assertion utilities: equal, contains, length, true, not null, greater than. |
| [Compare](/zh-TW/modules/compare) | 1 | Threshold-based change detection. |

### Utilities

| Category | Modules | Description |
|----------|---------|-------------|
| [Utilities](/zh-TW/modules/utility) | 9 | Datetime operations, delay, MD5 hash, and random utilities. |
| [Stats](/zh-TW/modules/stats) | 8 | Statistical functions: mean, median, mode, std dev, percentile, and more. |
| [Crypto](/zh-TW/modules/crypto) | 7 | AES encryption/decryption, HMAC, JWT tokens, and secure random generation. |
| [Encode / Decode](/zh-TW/modules/encode-decode) | 7 | Base64, hex, URL, and HTML encoding and decoding. |
| [Archive](/zh-TW/modules/archive) | 6 | Create and extract ZIP, TAR, and gzip archives. |
| [Path](/zh-TW/modules/path) | 6 | File path utilities: join, normalize, basename, dirname, extension. |
| [Math](/zh-TW/modules/math) | 5 | Basic math operations: abs, ceil, floor, power, round. |
| [Logic](/zh-TW/modules/logic) | 5 | Boolean logic operations: AND, OR, NOT, equals, contains. |
| [Random](/zh-TW/modules/random) | 4 | Random number, UUID, choice, and shuffle. |
| [Meta](/zh-TW/modules/meta) | 2 | Module generation, listing, testing, and documentation. |
| [Environment](/zh-TW/modules/env) | 3 | Environment variable management and .env file loading. |
| [Error Handling](/zh-TW/modules/error-handling) | 3 | Retry, fallback, and circuit breaker patterns. |
| [Scheduler](/zh-TW/modules/scheduler) | 3 | Cron parsing, delay, and interval calculations. |
| [Hash](/zh-TW/modules/hash) | 2 | SHA-256 and SHA-512 cryptographic hashing. |
| [Output](/zh-TW/modules/output) | 1 | Universal display and inspect node for debugging and workflow I/O. |

### Other

| Category | Modules | Description |
|----------|---------|-------------|
| [Communication](/zh-TW/modules/communication) | 4 |  |
| [Training](/zh-TW/modules/training) | 4 |  |
