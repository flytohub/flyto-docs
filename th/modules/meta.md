# Meta

Module generation, listing, testing, and documentation.

**2 modules**

| Module | Description |
|--------|-------------|
| [แสดงรายการโมดูลที่มี](#แสดงรายการโมดูลที่มี) | แสดงรายการโมดูลทั้งหมดที่มีใน registry |
| [อัปเดตเอกสารโมดูล](#อัปเดตเอกสารโมดูล) | สร้างหรืออัปเดตเอกสาร MODULES.md จาก registry |

## Modules

### แสดงรายการโมดูลที่มี

`meta.modules.list`

แสดงรายการโมดูลทั้งหมดที่มีใน registry

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `category` | string | No | - | กรองโมดูลตามหมวดหมู่ (เช่น browser, data, ai) |
| `tags` | array | No | - | กรองโมดูลตามหมวดหมู่ (เช่น browser, data, ai) |
| `include_params` | boolean | No | `True` | กรองโมดูลตามแท็ก |
| `include_output` | boolean | No | `True` | รวมสคีมาพารามิเตอร์ในเอาต์พุต |
| `format` | select (`json`, `markdown`, `compact`) | No | `json` | รวมสคีมาเอาต์พุตในการตอบกลับ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `modules` | array | รายการโมดูลที่ลงทะเบียน |
| `count` | number | สคีมาพารามิเตอร์ |
| `formatted` | string | สคีมาเอาต์พุต |

**Example:** List all modules

```yaml
```

**Example:** List browser modules only

```yaml
category: browser
include_params: true
```

**Example:** List AI modules as markdown

```yaml
tags: ["ai", "llm"]
format: markdown
```

**Example:** Compact list for AI prompts

```yaml
format: compact
```

### อัปเดตเอกสารโมดูล

`meta.modules.update_docs`

สร้างหรืออัปเดตเอกสาร MODULES.md จาก registry

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | No | `docs/MODULES.md` | พาธสำหรับเขียนไฟล์ MODULES.md |
| `include_examples` | boolean | No | `True` | รวมตัวอย่างการใช้งานในเอกสาร |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `file_path` | string | รวมตัวอย่างการใช้งานในเอกสาร |
| `modules_count` | number | พาธไฟล์ |
| `categories` | array | พาธไฟล์ |

**Example:** Update module documentation

```yaml
output_path: docs/MODULES.md
```
