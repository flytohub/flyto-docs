# Path

File path utilities: join, normalize, basename, dirname, extension.

**6 modules**

| Module | Description |
|--------|-------------|
| [パス ベース名](#パス-ベース名) | パスからファイル名を取得 |
| [パス ディル名](#パス-ディル名) | パスからディレクトリ名を取得 |
| [パス 拡張子](#パス-拡張子) | パスからファイル拡張子を取得 |
| [パス 絶対パス](#パス-絶対パス) | パスが絶対パスか確認 |
| [パス 結合](#パス-結合) | パスの要素を結合 |
| [パス 正規化](#パス-正規化) | ファイルパスを正規化 |

## Modules

### パス ベース名

`path.basename`

パスからファイル名を取得

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | ファイルパス |
| `remove_extension` | boolean | No | `False` | ファイルパス |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 結果からファイル拡張子を削除 |
| `original` | string | ファイル名 |
| `extension` | string | ファイル名 |

### パス ディル名

`path.dirname`

パスからディレクトリ名を取得

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | ファイルパス |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | ファイルパス |
| `original` | string | ディレクトリ名 |

### パス 拡張子

`path.extension`

パスからファイル拡張子を取得

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | ファイルパス |
| `include_dot` | boolean | No | `True` | ファイルパス |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 拡張子にドットを含める |
| `original` | string | ファイル拡張子 |
| `has_extension` | boolean | ファイル拡張子 |

### パス 絶対パス

`path.is_absolute`

パスが絶対パスか確認

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | 確認するファイルパス |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | 確認するファイルパス |
| `path` | string | パスが絶対パスかどうか |
| `absolute` | string | パスが絶対パスかどうか |

### パス 結合

`path.join`

パスの要素を結合

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `parts` | array | Yes | - | 結合するパス要素 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 結合するパス要素 |
| `parts` | array | 結合されたパス |

### パス 正規化

`path.normalize`

ファイルパスを正規化

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | 正規化するファイルパス |
| `resolve` | boolean | No | `False` | 正規化するファイルパス |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 絶対パスに解決 |
| `original` | string | 正規化されたパス |
| `is_absolute` | boolean | 正規化されたパス |
