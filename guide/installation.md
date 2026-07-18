# Install Flyto2

Install Flyto2 from PyPI when you want the fastest path to the open-source execution engine, MCP tools, browser automation modules, and repeatable workflow evidence. The commands below cover the base runtime, optional browser extras, source installs, version checks, and the minimum system requirements for local AI workflow automation.

## PyPI (Recommended)

```bash
pip install flyto-core
```

## With Optional Dependencies

```bash
# Browser automation support
pip install flyto-core[browser]

# All integrations
pip install flyto-core[all]
```

## From Source

```bash
git clone https://github.com/flytohub/flyto-core.git
cd flyto-core
pip install -e .
```

## Verify Installation

```bash
flyto-core --version
```

## System Requirements

| Requirement | Version |
|------------|---------|
| Python | 3.10+ |
| OS | Windows, macOS, Linux |
| Memory | 512MB+ recommended |
