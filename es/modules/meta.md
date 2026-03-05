# Meta

Module generation, listing, testing, and documentation.

**2 modules**

| Module | Description |
|--------|-------------|
| [Listar modulos disponibles](#listar-modulos-disponibles) | Listar todos los modulos disponibles en el registro |
| [Actualizar documentacion de modulos](#actualizar-documentacion-de-modulos) | Generar o actualizar documentacion MODULES.md desde registro |

## Modules

### Listar modulos disponibles

`meta.modules.list`

Listar todos los modulos disponibles en el registro

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `category` | string | No | - | Filtrar modulos por categoria (ej., browser, data, ai) |
| `tags` | array | No | - | Filtrar modulos por categoria (ej., browser, data, ai) |
| `include_params` | boolean | No | `True` | Filtrar modulos por etiquetas |
| `include_output` | boolean | No | `True` | Incluir esquema de parametros en salida |
| `format` | select (`json`, `markdown`, `compact`) | No | `json` | Incluir esquema de salida en respuesta |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `modules` | array | Lista de modulos registrados |
| `count` | number | El esquema de parametros |
| `formatted` | string | El esquema de salida |

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

### Actualizar documentacion de modulos

`meta.modules.update_docs`

Generar o actualizar documentacion MODULES.md desde registro

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | No | `docs/MODULES.md` | Ruta para escribir archivo MODULES.md |
| `include_examples` | boolean | No | `True` | Incluir ejemplos de uso en documentacion |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `file_path` | string | Incluir ejemplos de uso en documentacion |
| `modules_count` | number | La ruta del archivo |
| `categories` | array | La ruta del archivo |

**Example:** Update module documentation

```yaml
output_path: docs/MODULES.md
```
