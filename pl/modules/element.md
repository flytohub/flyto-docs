# Element

DOM element query, attribute, and text extraction.

**3 modules**

| Module | Description |
|--------|-------------|
| [Pobierz atrybut](#pobierz-atrybut) | Pobierz element |
| [Zapytaj element](#zapytaj-element) | Znajdz elementy potomne wewnatrz elementu |
| [Pobierz tekst](#pobierz-tekst) | Pobierz element |

## Modules

### Pobierz atrybut

`element.attribute`

Pobierz element

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | ID elementu (UUID) |
| `name` | string | Yes | - | ID elementu (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Nazwa atrybutu (np. href, src, class) |
| `value` | string | Status operacji (sukces/blad) |

**Example:** Get href attribute

```yaml
element_id: ${link_element}
name: href
```

### Zapytaj element

`element.query`

Znajdz elementy potomne wewnatrz elementu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | ID elementu rodzica (UUID) |
| `selector` | string | Yes | - | ID elementu rodzica (UUID) |
| `all` | boolean | No | `False` | Selektor CSS do znajdowania elementow potomnych |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Czy znalezc wszystkie pasujace elementy (domyslnie: false, znajdz tylko pierwszy) |
| `element_id` | string | Status operacji (sukces/blad) |
| `element_ids` | array | Status operacji (sukces/blad) |
| `count` | number | Znaleziony ID elementu (tryb pojedynczy) |

**Example:** Find child element

```yaml
element_id: ${result_item}
selector: h3
```

### Pobierz tekst

`element.text`

Pobierz element

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | ID elementu (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ID elementu (UUID) |
| `text` | string | ID elementu (UUID) |

**Example:** Get element text

```yaml
element_id: ${title_element}
```
