# Path

File path utilities: join, normalize, basename, dirname, extension.

**6 modules**

| Module | Description |
|--------|-------------|
| [路徑檔名](#路徑檔名) | 從路徑取得檔案名稱 |
| [路徑目錄名](#路徑目錄名) | 從路徑取得目錄名稱 |
| [路徑副檔名](#路徑副檔名) | 從路徑取得檔案副檔名 |
| [路徑是否為絕對路徑](#路徑是否為絕對路徑) | 檢查路徑是否為絕對路徑 |
| [路徑合併](#路徑合併) | 合併路徑元件 |
| [路徑標準化](#路徑標準化) | 標準化檔案路徑 |

## Modules

### 路徑檔名

`path.basename`

從路徑取得檔案名稱

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | 檔案路徑 |
| `remove_extension` | boolean | No | `False` | 檔案路徑 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 從結果中移除檔案副檔名 |
| `original` | string | 檔案名稱 |
| `extension` | string | 檔案名稱 |

### 路徑目錄名

`path.dirname`

從路徑取得目錄名稱

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | 檔案路徑 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 檔案路徑 |
| `original` | string | 目錄名稱 |

### 路徑副檔名

`path.extension`

從路徑取得檔案副檔名

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | 檔案路徑 |
| `include_dot` | boolean | No | `True` | 檔案路徑 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 包含點在副檔名中 |
| `original` | string | 檔案副檔名 |
| `has_extension` | boolean | 檔案副檔名 |

### 路徑是否為絕對路徑

`path.is_absolute`

檢查路徑是否為絕對路徑

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | 要檢查的檔案路徑 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | 要檢查的檔案路徑 |
| `path` | string | 路徑是否為絕對路徑 |
| `absolute` | string | 路徑是否為絕對路徑 |

### 路徑合併

`path.join`

合併路徑元件

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `parts` | array | Yes | - | 要合併的路徑元件 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 要合併的路徑元件 |
| `parts` | array | 合併後的路徑 |

### 路徑標準化

`path.normalize`

標準化檔案路徑

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | 要標準化的檔案路徑 |
| `resolve` | boolean | No | `False` | 要標準化的檔案路徑 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 解析為絕對路徑 |
| `original` | string | 標準化的路徑 |
| `is_absolute` | boolean | 標準化的路徑 |
