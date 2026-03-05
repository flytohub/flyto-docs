# Element

DOM element query, attribute, and text extraction.

**3 modules**

| Module | Description |
|--------|-------------|
| [ดึง Attribute](#ดึง-attribute) | ดึง element |
| [คิวรี Element](#คิวรี-element) | ค้นหา element ลูกภายใน element |
| [ดึงข้อความ](#ดึงข้อความ) | ดึง element |

## Modules

### ดึง Attribute

`element.attribute`

ดึง element

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | รหัส Element (UUID) |
| `name` | string | Yes | - | รหัส Element (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ชื่อ attribute (เช่น href, src, class) |
| `value` | string | สถานะการดำเนินการ (success/error) |

**Example:** Get href attribute

```yaml
element_id: ${link_element}
name: href
```

### คิวรี Element

`element.query`

ค้นหา element ลูกภายใน element

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | รหัส element แม่ (UUID) |
| `selector` | string | Yes | - | รหัส element แม่ (UUID) |
| `all` | boolean | No | `False` | CSS selector สำหรับค้นหา element ลูก |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ค้นหา element ที่ตรงกันทั้งหมดหรือไม่ (ค่าเริ่มต้น: false, ค้นหาเฉพาะอันแรก) |
| `element_id` | string | สถานะการดำเนินการ (success/error) |
| `element_ids` | array | สถานะการดำเนินการ (success/error) |
| `count` | number | รหัส element ที่พบ (โหมดเดี่ยว) |

**Example:** Find child element

```yaml
element_id: ${result_item}
selector: h3
```

### ดึงข้อความ

`element.text`

ดึง element

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `element_id` | string | Yes | - | รหัส Element (UUID) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | รหัส Element (UUID) |
| `text` | string | รหัส Element (UUID) |

**Example:** Get element text

```yaml
element_id: ${title_element}
```
