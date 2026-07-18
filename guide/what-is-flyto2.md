# What is Flyto2?

Flyto2 is a **security war room for evidence-backed CTEM**. It integrates existing ASM, EASM, dark web, code security, pentest, red-team, and AI/MCP signals into one workflow so teams can correlate, validate, and act with evidence.

At its core is **flyto-core**, an open-source deterministic execution engine with 451 registry-backed modules across 84 catalog categories, 41 built-in recipes, MCP transports, evidence capture, and replayable YAML execution.

## Key Concepts

### Modules
Modules are the building blocks of Flyto2 workflows. Each module performs a specific task, from navigating a browser to parsing JSON files, calling APIs, validating evidence, or managing Docker containers.

### Workflows
A workflow chains modules together into a sequence of steps. Flyto2 executes them deterministically, capturing evidence at each step.

### Evidence & Replay
Every execution produces a full trace with evidence snapshots. You can replay from any step, making debugging and auditing straightforward.

### MCP Server
flyto-core runs as an MCP (Model Context Protocol) server over stdio and streamable HTTP, making all 451 modules available as bounded tools for compatible AI agents.

## Use Cases

- **Browser Automation** — Navigate, click, type, extract data from web pages
- **File Processing** — Read, write, transform files in various formats
- **DevOps** — Docker management, process control, system monitoring
- **Data Pipeline** — Parse, transform, validate data across formats
- **Security War Room** — CTEM correlation, evidence-backed validation, MCP security context, pentest workflows, and red-team simulation
- **Security Utilities** — Crypto operations, hashing, encoding/decoding, verification, and report evidence

## Open Source

flyto-core is released under the [Apache 2.0 License](https://github.com/flytohub/flyto-core/blob/main/LICENSE) and available on [PyPI](https://pypi.org/project/flyto-core/).

For search and evaluation, Flyto2 fits the open source workflow automation category without hiding the execution engine. Teams comparing open source workflow automation tools can treat flyto-core as an open source workflow automation tool, an open source workflow automation platform, or a free open source workflow automation tool for local modules and recipes. It is also relevant when comparing the best open source workflow automation tools, the best open source AI agent framework options, an open source AI agent framework Python package, an open source AI agent framework GitHub project, or a free open source AI agent framework that still produces evidence.
