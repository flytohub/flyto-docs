# Element

DOM element query, attribute, and text extraction.

**3 modules**

| Module | Description |
|--------|-------------|
| [Ottieni Attributo](#ottieni-attributo) | Ottieni elemento |
| [Interroga Elemento](#interroga-elemento) | Trova elementi figlio all'interno dell'elemento |
| [Ottieni Testo](#ottieni-testo) | Ottieni elemento |

## Modules

### Ottieni Attributo

`element.attribute`

Ottieni elemento

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | ID Elemento (UUID) |
| `name` | string | Yes | - | ID Elemento (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Nome attributo (es. href, src, class) |
| `value` | string | Stato operazione (successo/errore) |

**Example:** Get href attribute

```yaml
element_id: ${link_element}
name: href
```

### Interroga Elemento

`element.query`

Trova elementi figlio all'interno dell'elemento

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | ID elemento padre (UUID) |
| `selector` | string | Yes | - | ID elemento padre (UUID) |
| `all` | boolean | No | `False` | Selettore CSS per trovare elementi figlio |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Se trovare tutti gli elementi corrispondenti (default: false, trova solo il primo) |
| `element_id` | string | Stato operazione (successo/errore) |
| `element_ids` | array | Stato operazione (successo/errore) |
| `count` | number | ID elemento trovato (modalita singola) |

**Example:** Find child element

```yaml
element_id: ${result_item}
selector: h3
```

### Ottieni Testo

`element.text`

Ottieni elemento

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | ID Elemento (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ID Elemento (UUID) |
| `text` | string | ID Elemento (UUID) |

**Example:** Get element text

```yaml
element_id: ${title_element}
```
