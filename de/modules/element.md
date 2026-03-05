# Element

DOM element query, attribute, and text extraction.

**3 modules**

| Module | Description |
|--------|-------------|
| [Attribut abrufen](#attribut-abrufen) | Element abrufen |
| [Element abfragen](#element-abfragen) | Kindelemente innerhalb eines Elements finden |
| [Text abrufen](#text-abrufen) | Element abrufen |

## Modules

### Attribut abrufen

`element.attribute`

Element abrufen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | Element-ID (UUID) |
| `name` | string | Yes | - | Element-ID (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Attributname (z.B. href, src, class) |
| `value` | string | Operationsstatus (Erfolg/Fehler) |

**Example:** Get href attribute

```yaml
element_id: ${link_element}
name: href
```

### Element abfragen

`element.query`

Kindelemente innerhalb eines Elements finden

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | Elternelement-ID (UUID) |
| `selector` | string | Yes | - | Elternelement-ID (UUID) |
| `all` | boolean | No | `False` | CSS-Selektor zum Finden von Kindelementen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Ob alle übereinstimmenden Elemente gefunden werden sollen (Standard: false, nur erstes finden) |
| `element_id` | string | Operationsstatus (Erfolg/Fehler) |
| `element_ids` | array | Operationsstatus (Erfolg/Fehler) |
| `count` | number | Gefundene Element-ID (Einzelmodus) |

**Example:** Find child element

```yaml
element_id: ${result_item}
selector: h3
```

### Text abrufen

`element.text`

Element abrufen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | Element-ID (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Element-ID (UUID) |
| `text` | string | Element-ID (UUID) |

**Example:** Get element text

```yaml
element_id: ${title_element}
```
