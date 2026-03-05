# Element

DOM element query, attribute, and text extraction.

**3 modules**

| Module | Description |
|--------|-------------|
| [属性を取得](#属性を取得) | 要素を取得 |
| [要素をクエリ](#要素をクエリ) | 要素内の子要素を検索 |
| [テキストを取得](#テキストを取得) | 要素を取得 |

## Modules

### 属性を取得

`element.attribute`

要素を取得

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | 要素ID（UUID） |
| `name` | string | Yes | - | 要素ID（UUID） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 属性名（例: href, src, class） |
| `value` | string | 操作ステータス（成功/エラー） |

**Example:** Get href attribute

```yaml
element_id: ${link_element}
name: href
```

### 要素をクエリ

`element.query`

要素内の子要素を検索

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | 親要素ID（UUID） |
| `selector` | string | Yes | - | 親要素ID（UUID） |
| `all` | boolean | No | `False` | 子要素を検索するCSSセレクタ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | すべての一致する要素を検索するかどうか（デフォルト: false、最初のみ検索） |
| `element_id` | string | 操作ステータス（成功/エラー） |
| `element_ids` | array | 操作ステータス（成功/エラー） |
| `count` | number | 見つかった要素ID（単一モード） |

**Example:** Find child element

```yaml
element_id: ${result_item}
selector: h3
```

### テキストを取得

`element.text`

要素を取得

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | 要素ID（UUID） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 要素ID（UUID） |
| `text` | string | 要素ID（UUID） |

**Example:** Get element text

```yaml
element_id: ${title_element}
```
