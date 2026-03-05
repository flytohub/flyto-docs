# Modules

flyto-core includes 412+ modules organized into 78 categories. Each module is a self-contained unit of work with defined inputs, outputs, and evidence.

## Browse by Category

- [Browser](/modules/browser) — Web automation and scraping
- [File System](/modules/file-system) — File operations
- [Docker](/modules/docker) — Container management
- [Data Parsing](/modules/data-parsing) — Format conversion and parsing
- [Crypto](/modules/crypto) — Cryptographic operations
- [Scheduling](/modules/scheduling) — Time-based execution

## Module Structure

Every module follows the same pattern:

```
Module
├── Parameters (input schema)
├── Returns (output schema)
├── Execute (deterministic logic)
└── Evidence (what gets recorded)
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
