# Element

DOM element query, attribute, and text extraction.

**3 modules**

| Module | Description |
|--------|-------------|
| [Obtener atributo](#obtener-atributo) | Obtener atributo de elemento |
| [Consultar elemento](#consultar-elemento) | Encontrar elementos hijos dentro de elemento |
| [Obtener texto](#obtener-texto) | Obtener texto de elemento |

## Modules

### Obtener atributo

`element.attribute`

Obtener atributo de elemento

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | ID del elemento (UUID) |
| `name` | string | Yes | - | ID del elemento (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Nombre del atributo (ej. href, src, class) |
| `value` | string | Estado de la operacion (exito/error) |

**Example:** Get href attribute

```yaml
element_id: ${link_element}
name: href
```

### Consultar elemento

`element.query`

Encontrar elementos hijos dentro de elemento

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | ID del elemento padre (UUID) |
| `selector` | string | Yes | - | ID del elemento padre (UUID) |
| `all` | boolean | No | `False` | Selector CSS para encontrar elementos hijos |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Si encontrar todos los elementos coincidentes (predeterminado: false, encontrar solo el primero) |
| `element_id` | string | Estado de la operacion (exito/error) |
| `element_ids` | array | Estado de la operacion (exito/error) |
| `count` | number | ID del elemento encontrado (modo simple) |

**Example:** Find child element

```yaml
element_id: ${result_item}
selector: h3
```

### Obtener texto

`element.text`

Obtener texto de elemento

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | ID del elemento (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ID del elemento (UUID) |
| `text` | string | ID del elemento (UUID) |

**Example:** Get element text

```yaml
element_id: ${title_element}
```
