# Meta

Module generation, listing, testing, and documentation.

**2 modules**

| Module | Description |
|--------|-------------|
| [Daftar Modul yang Tersedia](#daftar-modul-yang-tersedia) | Daftar semua modul yang tersedia di registry |
| [Perbarui Dokumentasi Modul](#perbarui-dokumentasi-modul) | Hasilkan atau perbarui dokumentasi MODULES.md dari registry |

## Modules

### Daftar Modul yang Tersedia

`meta.modules.list`

Daftar semua modul yang tersedia di registry

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `category` | string | No | - | Filter modul berdasarkan kategori (mis., browser, data, ai) |
| `tags` | array | No | - | Filter modul berdasarkan kategori (mis., browser, data, ai) |
| `include_params` | boolean | No | `True` | Filter modul berdasarkan tag |
| `include_output` | boolean | No | `True` | Sertakan skema parameter dalam output |
| `format` | select (`json`, `markdown`, `compact`) | No | `json` | Sertakan skema output dalam respons |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `modules` | array | Daftar modul terdaftar |
| `count` | number | Skema params |
| `formatted` | string | Skema output |

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

### Perbarui Dokumentasi Modul

`meta.modules.update_docs`

Hasilkan atau perbarui dokumentasi MODULES.md dari registry

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | No | `docs/MODULES.md` | Path untuk menulis file MODULES.md |
| `include_examples` | boolean | No | `True` | Sertakan contoh penggunaan dalam dokumentasi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `file_path` | string | Sertakan contoh penggunaan dalam dokumentasi |
| `modules_count` | number | Path file |
| `categories` | array | Path file |

**Example:** Update module documentation

```yaml
output_path: docs/MODULES.md
```
