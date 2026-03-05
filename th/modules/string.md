# String Operations

Text manipulation: case conversion, split, pad, slugify, template, and more.

**11 modules**

| Module | Description |
|--------|-------------|
| [ตัวพิมพ์เล็ก](#ตัวพิมพ์เล็ก) | แปลงข้อความเป็นตัวพิมพ์เล็ก |
| [Pad String](#pad-string) | Pad a string to a specified length |
| [แทนที่ข้อความ](#แทนที่ข้อความ) | แทนที่ข้อความย่อยในข้อความ |
| [กลับด้านข้อความ](#กลับด้านข้อความ) | กลับด้านตัวอักษรในข้อความ |
| [Slugify](#slugify) | Convert text to URL-friendly slug |
| [แยกข้อความ](#แยกข้อความ) | แยกข้อความเป็นอาร์เรย์โดยใช้ตัวคั่น |
| [Template](#template) | Render a template with variable substitution |
| [ตัวอักษรใหญ่นำหน้า](#ตัวอักษรใหญ่นำหน้า) | แปลงข้อความเป็นตัวอักษรใหญ่นำหน้า |
| [ตัดช่องว่าง](#ตัดช่องว่าง) | ลบช่องว่างจากหัวและท้ายข้อความ |
| [Truncate String](#truncate-string) | Truncate a string to a maximum length |
| [ตัวพิมพ์ใหญ่](#ตัวพิมพ์ใหญ่) | แปลงข้อความเป็นตัวพิมพ์ใหญ่ |

## Modules

### ตัวพิมพ์เล็ก

`string.lowercase`

แปลงข้อความเป็นตัวพิมพ์เล็ก

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | ข้อความที่แปลงเป็นตัวพิมพ์เล็ก |
| `original` | string | ข้อความที่แปลงเป็นตัวพิมพ์เล็ก |
| `status` | string | ข้อความที่แปลงเป็นตัวพิมพ์เล็ก |

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

### แทนที่ข้อความ

`string.replace`

แทนที่ข้อความย่อยในข้อความ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `search` | string | Yes | - | The substring to search for in the input text |
| `replace` | string | Yes | - | Text to replace matches with (leave empty to remove matches) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | ข้อความที่แทนที่แล้ว |
| `original` | string | ข้อความที่แทนที่แล้ว |
| `search` | string | ข้อความที่แทนที่แล้ว |
| `replace` | string | ข้อความอินพุตต้นฉบับ |
| `status` | string | ข้อความค้นหาที่ถูกแทนที่ |

### กลับด้านข้อความ

`string.reverse`

กลับด้านตัวอักษรในข้อความ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | ข้อความที่กลับด้าน |
| `original` | string | ข้อความที่กลับด้าน |
| `length` | number | ข้อความที่กลับด้าน |

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

### แยกข้อความ

`string.split`

แยกข้อความเป็นอาร์เรย์โดยใช้ตัวคั่น

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `delimiter` | select (`,`, `;`, `	`, ` `, `
`, `|`, `-`, `_`) | No | ` ` | Character(s) to split the string on |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `parts` | array | อาร์เรย์ของส่วนที่แยก |
| `result` | array | อาร์เรย์ของส่วนที่แยก |
| `length` | number | อาร์เรย์ของส่วนที่แยก |
| `original` | string | นามแฝงสำหรับ parts - อาร์เรย์ของส่วนที่แยก |
| `delimiter` | string | จำนวนส่วนหลังจากแยก |
| `status` | string | ข้อความอินพุตต้นฉบับ |

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

### ตัวอักษรใหญ่นำหน้า

`string.titlecase`

แปลงข้อความเป็นตัวอักษรใหญ่นำหน้า

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | ข้อความที่แปลงเป็นตัวอักษรใหญ่นำหน้า |

**Example:** Convert to title case

```yaml
text: hello world from flyto
```

**Example:** Format name

```yaml
text: john doe
```

### ตัดช่องว่าง

`string.trim`

ลบช่องว่างจากหัวและท้ายข้อความ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | ข้อความที่ตัดช่องว่างแล้ว |
| `original` | string | ข้อความที่ตัดช่องว่างแล้ว |
| `status` | string | ข้อความที่ตัดช่องว่างแล้ว |

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

### ตัวพิมพ์ใหญ่

`string.uppercase`

แปลงข้อความเป็นตัวพิมพ์ใหญ่

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | ข้อความที่แปลงเป็นตัวพิมพ์ใหญ่ |
| `original` | string | ข้อความที่แปลงเป็นตัวพิมพ์ใหญ่ |
| `status` | string | ข้อความที่แปลงเป็นตัวพิมพ์ใหญ่ |
