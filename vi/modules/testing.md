# Testing

Assertion utilities: equal, contains, length, true, not null, greater than.

**6 modules**

| Module | Description |
|--------|-------------|
| [Khẳng định chứa](#khẳng-định-chứa) | Khẳng định rằng tập hợp chứa một giá trị |
| [Khẳng định bằng](#khẳng-định-bằng) | Khẳng định rằng hai giá trị bằng nhau |
| [Khẳng định lớn hơn](#khẳng-định-lớn-hơn) | Khẳng định rằng một giá trị lớn hơn giá trị khác |
| [Khẳng định độ dài](#khẳng-định-độ-dài) | Khẳng định rằng tập hợp có độ dài mong đợi |
| [Khẳng định không null](#khẳng-định-không-null) | Khẳng định rằng giá trị không phải null hoặc undefined |
| [Khẳng định đúng](#khẳng-định-đúng) | Khẳng định rằng điều kiện là đúng |

## Modules

### Khẳng định chứa

`test.assert_contains`

Khẳng định rằng tập hợp chứa một giá trị

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | Tập hợp để tìm kiếm |
| `value` | ['string', 'number', 'boolean'] | Yes | - | Tập hợp để tìm kiếm |
| `message` | string | No | - | Giá trị cần tìm |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Thông báo lỗi tùy chỉnh |
| `collection` | ['array', 'string'] | Khẳng định có đạt không |
| `value` | ['string', 'number', 'boolean'] | Khẳng định rằng tập hợp chứa một giá trị |
| `message` | string | Khẳng định rằng tập hợp chứa một giá trị |

### Khẳng định bằng

`test.assert_equal`

Khẳng định rằng hai giá trị bằng nhau

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | Giá trị thực tế |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | Giá trị thực tế |
| `message` | string | No | - | Giá trị mong đợi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Thông báo lỗi tùy chỉnh |
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Khẳng định có đạt không |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Khẳng định rằng hai giá trị bằng nhau |
| `message` | string | Khẳng định rằng hai giá trị bằng nhau |

### Khẳng định lớn hơn

`test.assert_greater_than`

Khẳng định rằng một giá trị lớn hơn giá trị khác

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | number | Yes | - | Giá trị thực tế |
| `threshold` | number | Yes | - | Giá trị thực tế |
| `message` | string | No | - | Giá trị ngưỡng |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Thông báo lỗi tùy chỉnh |
| `actual` | number | Khẳng định có đạt không |
| `threshold` | number | Khẳng định rằng một giá trị lớn hơn giá trị khác |
| `message` | string | Khẳng định rằng một giá trị lớn hơn giá trị khác |

### Khẳng định độ dài

`test.assert_length`

Khẳng định rằng tập hợp có độ dài mong đợi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | Tập hợp để kiểm tra |
| `expected_length` | number | Yes | - | Tập hợp để kiểm tra |
| `message` | string | No | - | Độ dài mong đợi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Thông báo lỗi tùy chỉnh |
| `actual_length` | number | Thông báo lỗi tùy chỉnh |
| `expected_length` | number | Khẳng định rằng tập hợp có độ dài mong đợi |
| `message` | string | Khẳng định rằng tập hợp có độ dài mong đợi |

### Khẳng định không null

`test.assert_not_null`

Khẳng định rằng giá trị không phải null hoặc undefined

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | ['string', 'number', 'boolean', 'object', 'array', 'null'] | Yes | - | Giá trị cần kiểm tra |
| `message` | string | No | - | Giá trị cần kiểm tra |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Khẳng định rằng giá trị không phải null hoặc undefined |
| `message` | string | Khẳng định rằng giá trị không phải null hoặc undefined |

### Khẳng định đúng

`test.assert_true`

Khẳng định rằng điều kiện là đúng

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | boolean | Yes | - | Điều kiện cần kiểm tra |
| `message` | string | No | - | Điều kiện cần kiểm tra |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Khẳng định rằng điều kiện là đúng |
| `message` | string | Khẳng định rằng điều kiện là đúng |
