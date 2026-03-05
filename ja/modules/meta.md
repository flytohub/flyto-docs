# Meta

Module generation, listing, testing, and documentation.

**2 modules**

| Module | Description |
|--------|-------------|
| [利用可能なモジュールを一覧表示](#利用可能なモジュールを一覧表示) | レジストリ内のすべての利用可能なモジュールを一覧表示 |
| [モジュールドキュメント更新](#モジュールドキュメント更新) | レジストリからMODULES.mdドキュメントを生成または更新 |

## Modules

### 利用可能なモジュールを一覧表示

`meta.modules.list`

レジストリ内のすべての利用可能なモジュールを一覧表示

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `category` | string | No | - | カテゴリでモジュールをフィルタ（例: browser, data, ai） |
| `tags` | array | No | - | カテゴリでモジュールをフィルタ（例: browser, data, ai） |
| `include_params` | boolean | No | `True` | タグでモジュールをフィルタ |
| `include_output` | boolean | No | `True` | 出力にパラメータスキーマを含める |
| `format` | select (`json`, `markdown`, `compact`) | No | `json` | レスポンスに出力スキーマを含める |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `modules` | array | 登録されたモジュールのリスト |
| `count` | number | パラメータスキーマ |
| `formatted` | string | 出力スキーマ |

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

### モジュールドキュメント更新

`meta.modules.update_docs`

レジストリからMODULES.mdドキュメントを生成または更新

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | No | `docs/MODULES.md` | MODULES.mdファイルを書き込むパス |
| `include_examples` | boolean | No | `True` | ドキュメントに使用例を含める |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `file_path` | string | ドキュメントに使用例を含める |
| `modules_count` | number | ファイルパス |
| `categories` | array | ファイルパス |

**Example:** Update module documentation

```yaml
output_path: docs/MODULES.md
```
