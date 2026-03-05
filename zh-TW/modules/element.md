# Element

DOM element query, attribute, and text extraction.

**3 modules**

| Module | Description |
|--------|-------------|
| [取得屬性](#取得屬性) | 取得元素的屬性 |
| [查詢元素](#查詢元素) | 在元素內尋找子元素 |
| [取得文字](#取得文字) | 取得元素的文字內容 |

## Modules

### 取得屬性

`element.attribute`

取得元素的屬性

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | 元素 ID（UUID） |
| `name` | string | Yes | - | 屬性名稱（例如 href、src、class） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `value` | string | 屬性值 |

**Example:** Get href attribute

```yaml
element_id: ${link_element}
name: href
```

### 查詢元素

`element.query`

在元素內尋找子元素

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | 父元素 ID（UUID） |
| `selector` | string | Yes | - | 尋找子元素的 CSS 選擇器 |
| `all` | boolean | No | `False` | 是否尋找所有符合的元素（預設：false，只找第一個） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `element_id` | string | 找到的元素 ID（單一模式） |
| `element_ids` | array | 找到的元素 ID 列表（全部模式） |
| `count` | number | 找到的元素數量 |

**Example:** Find child element

```yaml
element_id: ${result_item}
selector: h3
```

### 取得文字

`element.text`

取得元素的文字內容

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | 元素 ID（UUID） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `text` | string | 元素的文字內容 |

**Example:** Get element text

```yaml
element_id: ${title_element}
```
