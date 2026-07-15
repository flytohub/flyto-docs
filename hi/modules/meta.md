# Meta

Module generation, listing, testing, and documentation.

**4 modules**

| Module | Description |
|--------|-------------|
| [Generate Module](#generate-module) | Generate new module from specification |
| [List Available Modules](#list-available-modules) | List all available modules in the registry |
| [Test Generator](#test-generator) | Test module generation capability |
| [Update Module Documentation](#update-module-documentation) | Generate or update MODULES.md documentation from registry |

## Modules

### Generate Module

`meta.modules.generate`

Generate new module from specification

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status (stub/success/error) |
| `message` | string | Human-readable result message |
| `module_id` | string | Generated module ID |
| `description` | string | Module description |

### List Available Modules

`meta.modules.list`

List all available modules in the registry

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `category` | string | No | - | Filter modules by category (e.g., browser, data, ai) |
| `tags` | array | No | - | Filter modules by tags |
| `include_params` | boolean | No | `True` | Include parameter schema in output |
| `include_output` | boolean | No | `True` | Include output schema in response |
| `format` | select (`json`, `markdown`, `compact`) | No | `json` | Format for module list output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `modules` | array | List of registered modules |
| `count` | number | Number of items |
| `formatted` | string | The formatted |

**Example:** List all modules

```yaml
```

**Example:** List browser modules only

```yaml
category: browser
include_params: true
```

**Example:** List AI modules as markdown

```yaml
tags: ["ai", "llm"]
format: markdown
```

**Example:** Compact list for AI prompts

```yaml
format: compact
```

### Test Generator

`meta.modules.test_generator`

Test module generation capability

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status (stub/success/error) |
| `message` | string | Human-readable result message |
| `spec_received` | boolean | Whether module spec was received |

### Update Module Documentation

`meta.modules.update_docs`

Generate or update MODULES.md documentation from registry

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | No | `docs/MODULES.md` | Path to write MODULES.md file |
| `include_examples` | boolean | No | `True` | Include usage examples in documentation |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `file_path` | string | The file path |
| `modules_count` | number | The modules count |
| `categories` | array | The categories |

**Example:** Update module documentation

```yaml
output_path: docs/MODULES.md
```
