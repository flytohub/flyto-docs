# Element

DOM element query, attribute, and text extraction.

**3 modules**

| Module | Description |
|--------|-------------|
| [Öznitelik Al](#öznitelik-al) | Öğeyi al |
| [Öğe Sorgula](#öğe-sorgula) | Öğe içinde alt öğeleri bul |
| [Metin Al](#metin-al) | Öğeyi al |

## Modules

### Öznitelik Al

`element.attribute`

Öğeyi al

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | Öğe Kimliği (UUID) |
| `name` | string | Yes | - | Öğe Kimliği (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Öznitelik adı (örn: href, src, class) |
| `value` | string | İşlem durumu (başarılı/hata) |

**Example:** Get href attribute

```yaml
element_id: ${link_element}
name: href
```

### Öğe Sorgula

`element.query`

Öğe içinde alt öğeleri bul

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | Üst öğe kimliği (UUID) |
| `selector` | string | Yes | - | Üst öğe kimliği (UUID) |
| `all` | boolean | No | `False` | Alt öğeleri bulmak için CSS seçici |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Tüm eşleşen öğeleri bul (varsayılan: false, sadece ilki) |
| `element_id` | string | İşlem durumu (başarılı/hata) |
| `element_ids` | array | İşlem durumu (başarılı/hata) |
| `count` | number | Bulunan öğe kimliği (tekil mod) |

**Example:** Find child element

```yaml
element_id: ${result_item}
selector: h3
```

### Metin Al

`element.text`

Öğeyi al

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | Öğe Kimliği (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Öğe Kimliği (UUID) |
| `text` | string | Öğe Kimliği (UUID) |

**Example:** Get element text

```yaml
element_id: ${title_element}
```
