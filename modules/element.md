# Element

DOM element query, attribute, and text extraction.

**3 modules**

| Module | Description |
|--------|-------------|
| [Get Attribute](#get-attribute) | Get element's attribute value |
| [Query Element](#query-element) | Find child elements within element |
| [Get Text](#get-text) | Get element's text content |

## Modules

### Get Attribute

`element.attribute`

Get element's attribute value

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | Element ID (UUID) |
| `name` | string | Yes | - | Attribute name (e.g. href, src, class) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status (success/error) |
| `value` | string | The returned value |

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
| `selector` | string | Yes | - | CSS selector to find child elements |
| `all` | boolean | No | `False` | Whether to find all matching elements (default: false, find first only) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status (success/error) |
| `element_id` | string | Found element ID (single mode) |
| `element_ids` | array | List of found element IDs (all mode) |
| `count` | number | Number of elements found |

**Example:** Find child element

```yaml
element_id: ${result_item}
selector: h3
```

### Get Text

`element.text`

Get element's text content

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | Element ID (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status (success/error) |
| `text` | string | Text content |

**Example:** Get element text

```yaml
element_id: ${title_element}
```
