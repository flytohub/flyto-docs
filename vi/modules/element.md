# Element

DOM element query, attribute, and text extraction.

**3 modules**

| Module | Description |
|--------|-------------|
| [Lấy thuộc tính](#lấy-thuộc-tính) | Lấy phần tử |
| [Truy vấn phần tử](#truy-vấn-phần-tử) | Tìm phần tử con trong phần tử |
| [Lấy văn bản](#lấy-văn-bản) | Lấy phần tử |

## Modules

### Lấy thuộc tính

`element.attribute`

Lấy phần tử

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | ID phần tử (UUID) |
| `name` | string | Yes | - | ID phần tử (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Tên thuộc tính (ví dụ: href, src, class) |
| `value` | string | Trạng thái thao tác (success/error) |

**Example:** Get href attribute

```yaml
element_id: ${link_element}
name: href
```

### Truy vấn phần tử

`element.query`

Tìm phần tử con trong phần tử

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | ID phần tử cha (UUID) |
| `selector` | string | Yes | - | ID phần tử cha (UUID) |
| `all` | boolean | No | `False` | CSS selector để tìm phần tử con |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Có tìm tất cả phần tử khớp không (mặc định: false, chỉ tìm phần tử đầu tiên) |
| `element_id` | string | Trạng thái thao tác (success/error) |
| `element_ids` | array | Trạng thái thao tác (success/error) |
| `count` | number | ID phần tử tìm thấy (chế độ đơn) |

**Example:** Find child element

```yaml
element_id: ${result_item}
selector: h3
```

### Lấy văn bản

`element.text`

Lấy phần tử

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | ID phần tử (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ID phần tử (UUID) |
| `text` | string | ID phần tử (UUID) |

**Example:** Get element text

```yaml
element_id: ${title_element}
```
