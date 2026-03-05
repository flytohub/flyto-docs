# Meta

Module generation, listing, testing, and documentation.

**2 modules**

| Module | Description |
|--------|-------------|
| [Lista dostepnych modulow](#lista-dostepnych-modulow) | Wylistuj wszystkie dostepne moduly w rejestrze |
| [Zaktualizuj dokumentacje modulow](#zaktualizuj-dokumentacje-modulow) | Wygeneruj lub zaktualizuj dokumentacje MODULES.md z rejestru |

## Modules

### Lista dostepnych modulow

`meta.modules.list`

Wylistuj wszystkie dostepne moduly w rejestrze

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `category` | string | No | - | Filtruj moduly wedlug kategorii (np. browser, data, ai) |
| `tags` | array | No | - | Filtruj moduly wedlug kategorii (np. browser, data, ai) |
| `include_params` | boolean | No | `True` | Filtruj moduly wedlug tagow |
| `include_output` | boolean | No | `True` | Dolacz schemat parametrow w wyjsciu |
| `format` | select (`json`, `markdown`, `compact`) | No | `json` | Dolacz schemat wyjscia w odpowiedzi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `modules` | array | Lista zarejestrowanych modulow |
| `count` | number | Schemat parametrow |
| `formatted` | string | Schemat wyjscia |

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

### Zaktualizuj dokumentacje modulow

`meta.modules.update_docs`

Wygeneruj lub zaktualizuj dokumentacje MODULES.md z rejestru

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | No | `docs/MODULES.md` | Sciezka do zapisu pliku MODULES.md |
| `include_examples` | boolean | No | `True` | Dolacz przyklady uzycia w dokumentacji |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `file_path` | string | Dolacz przyklady uzycia w dokumentacji |
| `modules_count` | number | Sciezka pliku |
| `categories` | array | Sciezka pliku |

**Example:** Update module documentation

```yaml
output_path: docs/MODULES.md
```
