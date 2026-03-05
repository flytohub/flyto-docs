# Environment

Environment variable management and .env file loading.

**3 modules**

| Module | Description |
|--------|-------------|
| [環境変数を取得](#環境変数を取得) | 環境変数の値を取得 |
| [.envファイルを読み込む](#.envファイルを読み込む) | .envファイルから環境変数を読み込む |
| [環境変数を設定](#環境変数を設定) | 現在のプロセスで環境変数を設定 |

## Modules

### 環境変数を取得

`env.get`

環境変数の値を取得

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | 環境変数の名前 |
| `default` | string | No | - | 変数が設定されていない場合のデフォルト値 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | 変数名 |
| `value` | string | 変数の値（未設定の場合はデフォルト） |
| `exists` | boolean | 環境に変数が存在するかどうか |

**Example:** Get HOME variable

```yaml
name: HOME
```

**Example:** Get variable with default

```yaml
name: MY_APP_PORT
default: 8080
```

### .envファイルを読み込む

`env.load_dotenv`

.envファイルから環境変数を読み込む

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | `.env` | .envファイルへのパス |
| `override` | boolean | No | `False` | 既存の環境変数を上書きするかどうか |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `loaded_count` | number | 読み込まれた変数の数 |
| `variables` | array | 読み込まれた変数名のリスト |

**Example:** Load .env file

```yaml
path: .env
override: false
```

### 環境変数を設定

`env.set`

現在のプロセスで環境変数を設定

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | 設定する環境変数の名前 |
| `value` | string | Yes | - | 環境変数に割り当てる値 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | 変数名 |
| `value` | string | 設定された新しい値 |
| `previous_value` | string | 以前の値（以前に設定されていない場合はnull） |

**Example:** Set an environment variable

```yaml
name: MY_APP_PORT
value: 3000
```
