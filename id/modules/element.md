# Element

DOM element query, attribute, and text extraction.

**3 modules**

| Module | Description |
|--------|-------------|
| [Ambil Atribut](#ambil-atribut) | Ambil elemen |
| [Query Elemen](#query-elemen) | Temukan elemen anak dalam elemen |
| [Ambil Teks](#ambil-teks) | Ambil elemen |

## Modules

### Ambil Atribut

`element.attribute`

Ambil elemen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | ID Elemen (UUID) |
| `name` | string | Yes | - | ID Elemen (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Nama atribut (mis. href, src, class) |
| `value` | string | Status operasi (sukses/error) |

**Example:** Get href attribute

```yaml
element_id: ${link_element}
name: href
```

### Query Elemen

`element.query`

Temukan elemen anak dalam elemen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | ID elemen induk (UUID) |
| `selector` | string | Yes | - | ID elemen induk (UUID) |
| `all` | boolean | No | `False` | Selektor CSS untuk menemukan elemen anak |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Apakah akan menemukan semua elemen yang cocok (default: false, temukan pertama saja) |
| `element_id` | string | Status operasi (sukses/error) |
| `element_ids` | array | Status operasi (sukses/error) |
| `count` | number | ID elemen yang ditemukan (mode tunggal) |

**Example:** Find child element

```yaml
element_id: ${result_item}
selector: h3
```

### Ambil Teks

`element.text`

Ambil elemen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | ID Elemen (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ID Elemen (UUID) |
| `text` | string | ID Elemen (UUID) |

**Example:** Get element text

```yaml
element_id: ${title_element}
```
