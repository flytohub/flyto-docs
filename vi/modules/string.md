# String Operations

Text manipulation: case conversion, split, pad, slugify, template, and more.

**11 modules**

| Module | Description |
|--------|-------------|
| [Chữ thường](#chữ-thường) | Chuyển chuỗi thành chữ thường |
| [Pad String](#pad-string) | Pad a string to a specified length |
| [Thay thế chuỗi](#thay-thế-chuỗi) | Thay thế các lần xuất hiện của chuỗi con trong chuỗi |
| [Đảo ngược chuỗi](#đảo-ngược-chuỗi) | Đảo ngược các ký tự trong chuỗi |
| [Slugify](#slugify) | Convert text to URL-friendly slug |
| [Tách chuỗi](#tách-chuỗi) | Tách chuỗi thành mảng sử dụng dấu phân cách |
| [Template](#template) | Render a template with variable substitution |
| [Kiểu tiêu đề](#kiểu-tiêu-đề) | Chuyển chuỗi thành kiểu tiêu đề |
| [Cắt khoảng trắng](#cắt-khoảng-trắng) | Xóa khoảng trắng ở hai đầu chuỗi |
| [Truncate String](#truncate-string) | Truncate a string to a maximum length |
| [Chữ hoa](#chữ-hoa) | Chuyển chuỗi thành chữ hoa |

## Modules

### Chữ thường

`string.lowercase`

Chuyển chuỗi thành chữ thường

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Chuỗi đã chuyển thành chữ thường |
| `original` | string | Chuỗi đã chuyển thành chữ thường |
| `status` | string | Chuỗi đã chuyển thành chữ thường |

### Pad String

`string.pad`

Pad a string to a specified length

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text to pad |
| `length` | number | Yes | - | Text to pad |
| `pad_char` | string | No | ` ` | Target length |
| `position` | string | No | `end` | Character to pad with |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Padded string |
| `original` | string | Padded string |
| `added` | number | Padded string |

### Thay thế chuỗi

`string.replace`

Thay thế các lần xuất hiện của chuỗi con trong chuỗi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `search` | string | Yes | - | The substring to search for in the input text |
| `replace` | string | Yes | - | Text to replace matches with (leave empty to remove matches) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Chuỗi đã được thay thế |
| `original` | string | Chuỗi đã được thay thế |
| `search` | string | Chuỗi đã được thay thế |
| `replace` | string | Chuỗi đầu vào gốc |
| `status` | string | Chuỗi tìm kiếm đã được thay thế |

### Đảo ngược chuỗi

`string.reverse`

Đảo ngược các ký tự trong chuỗi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Chuỗi đã đảo ngược |
| `original` | string | Chuỗi đã đảo ngược |
| `length` | number | Chuỗi đã đảo ngược |

### Slugify

`string.slugify`

Convert text to URL-friendly slug

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text to slugify |
| `separator` | string | No | `-` | Text to slugify |
| `lowercase` | boolean | No | `True` | Word separator |
| `max_length` | number | No | `0` | Convert to lowercase |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Maximum slug length (0 = unlimited) |
| `original` | string | URL-friendly slug |

### Tách chuỗi

`string.split`

Tách chuỗi thành mảng sử dụng dấu phân cách

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `delimiter` | select (`,`, `;`, `	`, ` `, `
`, `|`, `-`, `_`) | No | ` ` | Character(s) to split the string on |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `parts` | array | Mảng các phần chuỗi đã tách |
| `result` | array | Mảng các phần chuỗi đã tách |
| `length` | number | Mảng các phần chuỗi đã tách |
| `original` | string | Alias cho parts - mảng các phần chuỗi đã tách |
| `delimiter` | string | Số phần sau khi tách |
| `status` | string | Chuỗi đầu vào gốc |

### Template

`string.template`

Render a template with variable substitution

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | Template string with {<!-- -->{variable}<!-- -->} placeholders |
| `variables` | object | Yes | - | Variables to substitute |
| `missing_value` | string | No | - | Value for undefined variables |
| `preserve_missing` | boolean | No | `False` | Value for undefined variables |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Keep placeholder if variable is missing |
| `replaced` | number | Rendered template |
| `missing` | array | Rendered template |

### Kiểu tiêu đề

`string.titlecase`

Chuyển chuỗi thành kiểu tiêu đề

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Chuỗi đã chuyển thành kiểu tiêu đề |

**Example:** Convert to title case

```yaml
text: hello world from flyto
```

**Example:** Format name

```yaml
text: john doe
```

### Cắt khoảng trắng

`string.trim`

Xóa khoảng trắng ở hai đầu chuỗi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Chuỗi đã cắt bỏ khoảng trắng |
| `original` | string | Chuỗi đã cắt bỏ khoảng trắng |
| `status` | string | Chuỗi đã cắt bỏ khoảng trắng |

### Truncate String

`string.truncate`

Truncate a string to a maximum length

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text to truncate |
| `length` | number | Yes | - | Text to truncate |
| `suffix` | string | No | `...` | Maximum length |
| `word_boundary` | boolean | No | `False` | Text to append if truncated |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Break at word boundary |
| `original` | string | Truncated string |
| `truncated` | boolean | Truncated string |
| `removed` | number | Original string |

### Chữ hoa

`string.uppercase`

Chuyển chuỗi thành chữ hoa

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Chuỗi đã chuyển thành chữ hoa |
| `original` | string | Chuỗi đã chuyển thành chữ hoa |
| `status` | string | Chuỗi đã chuyển thành chữ hoa |
