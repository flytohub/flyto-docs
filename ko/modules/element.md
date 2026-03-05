# Element

DOM element query, attribute, and text extraction.

**3 modules**

| Module | Description |
|--------|-------------|
| [속성 가져오기](#속성-가져오기) | 요소 가져오기 |
| [요소 쿼리](#요소-쿼리) | 요소 내에서 자식 요소 찾기 |
| [텍스트 가져오기](#텍스트-가져오기) | 요소 가져오기 |

## Modules

### 속성 가져오기

`element.attribute`

요소 가져오기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | 요소 ID (UUID) |
| `name` | string | Yes | - | 요소 ID (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 속성 이름 (예: href, src, class) |
| `value` | string | 작업 상태 (성공/오류) |

**Example:** Get href attribute

```yaml
element_id: ${link_element}
name: href
```

### 요소 쿼리

`element.query`

요소 내에서 자식 요소 찾기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | 부모 요소 ID (UUID) |
| `selector` | string | Yes | - | 부모 요소 ID (UUID) |
| `all` | boolean | No | `False` | 자식 요소를 찾기 위한 CSS 선택자 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 일치하는 모든 요소 찾기 여부 (기본값: false, 첫 번째만 찾기) |
| `element_id` | string | 작업 상태 (성공/오류) |
| `element_ids` | array | 작업 상태 (성공/오류) |
| `count` | number | 찾은 요소 ID (단일 모드) |

**Example:** Find child element

```yaml
element_id: ${result_item}
selector: h3
```

### 텍스트 가져오기

`element.text`

요소 가져오기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | 요소 ID (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 요소 ID (UUID) |
| `text` | string | 요소 ID (UUID) |

**Example:** Get element text

```yaml
element_id: ${title_element}
```
