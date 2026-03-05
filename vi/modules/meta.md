# Meta

Module generation, listing, testing, and documentation.

**2 modules**

| Module | Description |
|--------|-------------|
| [Liệt kê các Module có sẵn](#liệt-kê-các-module-có-sẵn) | Liệt kê tất cả các module có sẵn trong registry |
| [Cập nhật tài liệu Module](#cập-nhật-tài-liệu-module) | Tạo hoặc cập nhật tài liệu MODULES.md từ registry |

## Modules

### Liệt kê các Module có sẵn

`meta.modules.list`

Liệt kê tất cả các module có sẵn trong registry

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `category` | string | No | - | Lọc module theo danh mục (ví dụ: browser, data, ai) |
| `tags` | array | No | - | Lọc module theo danh mục (ví dụ: browser, data, ai) |
| `include_params` | boolean | No | `True` | Lọc module theo thẻ |
| `include_output` | boolean | No | `True` | Bao gồm schema tham số trong đầu ra |
| `format` | select (`json`, `markdown`, `compact`) | No | `json` | Bao gồm schema đầu ra trong phản hồi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `modules` | array | Danh sách các module đã đăng ký |
| `count` | number | Schema tham số |
| `formatted` | string | Schema đầu ra |

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

### Cập nhật tài liệu Module

`meta.modules.update_docs`

Tạo hoặc cập nhật tài liệu MODULES.md từ registry

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | No | `docs/MODULES.md` | Đường dẫn ghi tệp MODULES.md |
| `include_examples` | boolean | No | `True` | Bao gồm ví dụ sử dụng trong tài liệu |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `file_path` | string | Bao gồm ví dụ sử dụng trong tài liệu |
| `modules_count` | number | Đường dẫn tệp |
| `categories` | array | Đường dẫn tệp |

**Example:** Update module documentation

```yaml
output_path: docs/MODULES.md
```
