# Meta

Module generation, listing, testing, and documentation.

**2 modules**

| Module | Description |
|--------|-------------|
| [Elenca Moduli Disponibili](#elenca-moduli-disponibili) | Elenca tutti i moduli disponibili nel registro |
| [Aggiorna Documentazione Moduli](#aggiorna-documentazione-moduli) | Genera o aggiorna documentazione MODULES.md dal registro |

## Modules

### Elenca Moduli Disponibili

`meta.modules.list`

Elenca tutti i moduli disponibili nel registro

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `category` | string | No | - | Filtra moduli per categoria (es. browser, data, ai) |
| `tags` | array | No | - | Filtra moduli per categoria (es. browser, data, ai) |
| `include_params` | boolean | No | `True` | Filtra moduli per tag |
| `include_output` | boolean | No | `True` | Includi schema parametri nell'output |
| `format` | select (`json`, `markdown`, `compact`) | No | `json` | Includi schema output nella risposta |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `modules` | array | Lista dei moduli registrati |
| `count` | number | Lo schema parametri |
| `formatted` | string | Lo schema output |

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

### Aggiorna Documentazione Moduli

`meta.modules.update_docs`

Genera o aggiorna documentazione MODULES.md dal registro

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | No | `docs/MODULES.md` | Percorso dove scrivere file MODULES.md |
| `include_examples` | boolean | No | `True` | Includi esempi di utilizzo nella documentazione |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `file_path` | string | Includi esempi di utilizzo nella documentazione |
| `modules_count` | number | Il percorso file |
| `categories` | array | Il percorso file |

**Example:** Update module documentation

```yaml
output_path: docs/MODULES.md
```
