# Environment

Environment variable management and .env file loading.

**3 modules**

| Module | Description |
|--------|-------------|
| [取得環境變數](#取得環境變數) | 取得環境變數的值 |
| [載入 .env 檔案](#載入-.env-檔案) | 從 .env 檔案載入環境變數 |
| [設定環境變數](#設定環境變數) | 在目前的程序中設定環境變數 |

## Modules

### 取得環境變數

`env.get`

取得環境變數的值

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | 環境變數的名稱 |
| `default` | string | No | - | 如果變數未設定，則使用預設值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | 變數名稱 |
| `value` | string | 變數值（或未設定時的預設值） |
| `exists` | boolean | 變數是否存在於環境中 |

**Example:** Get HOME variable

```yaml
name: HOME
```

**Example:** Get variable with default

```yaml
name: MY_APP_PORT
default: 8080
```

### 載入 .env 檔案

`env.load_dotenv`

從 .env 檔案載入環境變數

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | `.env` | .env 檔案的路徑 |
| `override` | boolean | No | `False` | 是否覆蓋現有的環境變數 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `loaded_count` | number | 載入的變數數量 |
| `variables` | array | 已載入的變數名稱列表 |

**Example:** Load .env file

```yaml
path: .env
override: false
```

### 設定環境變數

`env.set`

在目前的程序中設定環境變數

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | 要設定的環境變數名稱 |
| `value` | string | Yes | - | 要指派給環境變數的值 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | 變數名稱 |
| `value` | string | 已設定的新值 |
| `previous_value` | string | 先前的值（如果未先前設定則為 null） |

**Example:** Set an environment variable

```yaml
name: MY_APP_PORT
value: 3000
```
