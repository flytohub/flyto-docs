# Element

DOM element query, attribute, and text extraction.

**3 modules**

| Module | Description |
|--------|-------------|
| [Obter Atributo](#obter-atributo) | Obter elemento |
| [Consultar Elemento](#consultar-elemento) | Encontrar elementos filhos dentro do elemento |
| [Obter Texto](#obter-texto) | Obter elemento |

## Modules

### Obter Atributo

`element.attribute`

Obter elemento

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | ID do elemento (UUID) |
| `name` | string | Yes | - | ID do elemento (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Nome do atributo (ex: href, src, class) |
| `value` | string | Status da operacao (sucesso/erro) |

**Example:** Get href attribute

```yaml
element_id: ${link_element}
name: href
```

### Consultar Elemento

`element.query`

Encontrar elementos filhos dentro do elemento

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | ID do elemento pai (UUID) |
| `selector` | string | Yes | - | ID do elemento pai (UUID) |
| `all` | boolean | No | `False` | Seletor CSS para encontrar elementos filhos |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Se deve encontrar todos os elementos correspondentes (padrao: false, encontrar apenas o primeiro) |
| `element_id` | string | Status da operacao (sucesso/erro) |
| `element_ids` | array | Status da operacao (sucesso/erro) |
| `count` | number | ID do elemento encontrado (modo unico) |

**Example:** Find child element

```yaml
element_id: ${result_item}
selector: h3
```

### Obter Texto

`element.text`

Obter elemento

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | ID do elemento (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ID do elemento (UUID) |
| `text` | string | ID do elemento (UUID) |

**Example:** Get element text

```yaml
element_id: ${title_element}
```
