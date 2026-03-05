# Element

DOM element query, attribute, and text extraction.

**3 modules**

| Module | Description |
|--------|-------------|
| [Obtenir l'attribut](#obtenir-l'attribut) | Obtenir l'element |
| [Interroger l'element](#interroger-l'element) | Trouver des elements enfants dans un element |
| [Obtenir le texte](#obtenir-le-texte) | Obtenir l'element |

## Modules

### Obtenir l'attribut

`element.attribute`

Obtenir l'element

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | ID de l'element (UUID) |
| `name` | string | Yes | - | ID de l'element (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Nom de l'attribut (ex: href, src, class) |
| `value` | string | Statut de l'operation (succes/erreur) |

**Example:** Get href attribute

```yaml
element_id: ${link_element}
name: href
```

### Interroger l'element

`element.query`

Trouver des elements enfants dans un element

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | ID de l'element parent (UUID) |
| `selector` | string | Yes | - | ID de l'element parent (UUID) |
| `all` | boolean | No | `False` | Selecteur CSS pour trouver les elements enfants |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trouver tous les elements correspondants (defaut: false, trouver le premier uniquement) |
| `element_id` | string | Statut de l'operation (succes/erreur) |
| `element_ids` | array | Statut de l'operation (succes/erreur) |
| `count` | number | ID de l'element trouve (mode simple) |

**Example:** Find child element

```yaml
element_id: ${result_item}
selector: h3
```

### Obtenir le texte

`element.text`

Obtenir l'element

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | ID de l'element (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ID de l'element (UUID) |
| `text` | string | ID de l'element (UUID) |

**Example:** Get element text

```yaml
element_id: ${title_element}
```
