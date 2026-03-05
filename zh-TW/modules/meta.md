# Meta

Module generation, listing, testing, and documentation.

**2 modules**

| Module | Description |
|--------|-------------|
| [列出可用模組](#列出可用模組) | 列出註冊表中所有可用的模組 |
| [更新模組文件](#更新模組文件) | 從註冊表產生或更新 MODULES.md 文件 |

## Modules

### 列出可用模組

`meta.modules.list`

列出註冊表中所有可用的模組

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `category` | string | No | - | 依類別篩選模組（例如 browser、data、ai） |
| `tags` | array | No | - | 依類別篩選模組（例如 browser、data、ai） |
| `include_params` | boolean | No | `True` | 依標籤篩選模組 |
| `include_output` | boolean | No | `True` | 在輸出中包含參數結構描述 |
| `format` | select (`json`, `markdown`, `compact`) | No | `json` | 在回應中包含輸出結構描述 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `modules` | array | 已註冊模組列表 |
| `count` | number | 參數結構描述 |
| `formatted` | string | 輸出結構描述 |

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

### 更新模組文件

`meta.modules.update_docs`

從註冊表產生或更新 MODULES.md 文件

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | No | `docs/MODULES.md` | 寫入 MODULES.md 檔案的路徑 |
| `include_examples` | boolean | No | `True` | 在文件中包含使用範例 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `file_path` | string | 在文件中包含使用範例 |
| `modules_count` | number | 檔案路徑 |
| `categories` | array | 檔案路徑 |

**Example:** Update module documentation

```yaml
output_path: docs/MODULES.md
```
