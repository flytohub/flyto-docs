# Meta

Module generation, listing, testing, and documentation.

**2 modules**

| Module | Description |
|--------|-------------|
| [Verfügbare Module auflisten](#verfügbare-module-auflisten) | Alle verfügbaren Module in der Registry auflisten |
| [Modul-Dokumentation aktualisieren](#modul-dokumentation-aktualisieren) | MODULES.md-Dokumentation aus Registry generieren oder aktualisieren |

## Modules

### Verfügbare Module auflisten

`meta.modules.list`

Alle verfügbaren Module in der Registry auflisten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `category` | string | No | - | Module nach Kategorie filtern (z.B. browser, data, ai) |
| `tags` | array | No | - | Module nach Kategorie filtern (z.B. browser, data, ai) |
| `include_params` | boolean | No | `True` | Module nach Tags filtern |
| `include_output` | boolean | No | `True` | Parameter-Schema in Ausgabe einschließen |
| `format` | select (`json`, `markdown`, `compact`) | No | `json` | Ausgabe-Schema in Antwort einschließen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `modules` | array | Liste der registrierten Module |
| `count` | number | Das Parameter-Schema |
| `formatted` | string | Das Ausgabe-Schema |

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

### Modul-Dokumentation aktualisieren

`meta.modules.update_docs`

MODULES.md-Dokumentation aus Registry generieren oder aktualisieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | No | `docs/MODULES.md` | Pfad zum Schreiben der MODULES.md-Datei |
| `include_examples` | boolean | No | `True` | Verwendungsbeispiele in Dokumentation einschließen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `file_path` | string | Verwendungsbeispiele in Dokumentation einschließen |
| `modules_count` | number | Der Dateipfad |
| `categories` | array | Der Dateipfad |

**Example:** Update module documentation

```yaml
output_path: docs/MODULES.md
```
