# What is Flyto2?

Flyto2 is an **enterprise workflow platform** that combines UI-driven automation with human oversight. At its core is **flyto-core**, an open-source deterministic execution engine with 467+ modules.

## Key Concepts

### Modules
Modules are the building blocks of Flyto2 workflows. Each module performs a specific task — from navigating a browser to parsing JSON files to managing Docker containers.

### Workflows
A workflow chains modules together into a sequence of steps. Flyto2 executes them deterministically, capturing evidence at each step.

### Evidence & Replay
Every execution produces a full trace with evidence snapshots. You can replay from any step, making debugging and auditing straightforward.

### MCP Server
flyto-core runs as an MCP (Model Context Protocol) server, making all 467+ modules available as tools for AI agents.

## Use Cases

- **Browser Automation** — Navigate, click, type, extract data from web pages
- **File Processing** — Read, write, transform files in various formats
- **DevOps** — Docker management, process control, system monitoring
- **Data Pipeline** — Parse, transform, validate data across formats
- **Security** — Crypto operations, hashing, encoding/decoding

## Open Source

flyto-core is released under the [Apache 2.0 License](https://github.com/flytohub/flyto-core/blob/main/LICENSE) and available on [PyPI](https://pypi.org/project/flyto-core/).
