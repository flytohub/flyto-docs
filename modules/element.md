# Element

DOM element query, attribute, and text extraction.

**3 modules**

| Module | Description |
|--------|-------------|
| [Get Attribute](#get-attribute) | Get element |
| [Query Element](#query-element) | Find child elements within element |
| [Get Text](#get-text) | Get element |

## Modules

### Get Attribute

`element.attribute`

Get element

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | Element ID (UUID) |
| `name` | string | Yes | - | Element ID (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Attribute name (e.g. href, src, class) |
| `value` | string | Operation status (success/error) |

**Example:** Get href attribute

```yaml
element_id: ${link_element}
name: href
```

### Query Element

`element.query`

Find child elements within element

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | Parent element ID (UUID) |
| `selector` | string | Yes | - | Parent element ID (UUID) |
| `all` | boolean | No | `False` | CSS selector to find child elements |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Whether to find all matching elements (default: false, find first only) |
| `element_id` | string | Operation status (success/error) |
| `element_ids` | array | Operation status (success/error) |
| `count` | number | Found element ID (single mode) |

**Example:** Find child element

```yaml
element_id: ${result_item}
selector: h3
```

### Get Text

`element.text`

Get element

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | Element ID (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Element ID (UUID) |
| `text` | string | Element ID (UUID) |

**Example:** Get element text

```yaml
element_id: ${title_element}
```
