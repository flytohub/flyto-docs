# Meta

Module generation, listing, testing, and documentation.

**2 modules**

| Module | Description |
|--------|-------------|
| [Listar Modulos Disponiveis](#listar-modulos-disponiveis) | Listar todos os modulos disponiveis no registro |
| [Atualizar Documentacao de Modulos](#atualizar-documentacao-de-modulos) | Gerar ou atualizar documentacao MODULES.md do registro |

## Modules

### Listar Modulos Disponiveis

`meta.modules.list`

Listar todos os modulos disponiveis no registro

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `category` | string | No | - | Filtrar modulos por categoria (ex: browser, data, ai) |
| `tags` | array | No | - | Filtrar modulos por categoria (ex: browser, data, ai) |
| `include_params` | boolean | No | `True` | Filtrar modulos por tags |
| `include_output` | boolean | No | `True` | Incluir schema de parametros na saida |
| `format` | select (`json`, `markdown`, `compact`) | No | `json` | Incluir schema de saida na resposta |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `modules` | array | Lista de modulos registrados |
| `count` | number | O schema de params |
| `formatted` | string | O schema de saida |

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

### Atualizar Documentacao de Modulos

`meta.modules.update_docs`

Gerar ou atualizar documentacao MODULES.md do registro

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | No | `docs/MODULES.md` | Caminho para escrever arquivo MODULES.md |
| `include_examples` | boolean | No | `True` | Incluir exemplos de uso na documentacao |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `file_path` | string | Incluir exemplos de uso na documentacao |
| `modules_count` | number | O caminho do arquivo |
| `categories` | array | O caminho do arquivo |

**Example:** Update module documentation

```yaml
output_path: docs/MODULES.md
```
