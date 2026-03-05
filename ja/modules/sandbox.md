# Sandbox

Execute JavaScript, Python, or shell commands in isolated environments.

**3 modules**

| Module | Description |
|--------|-------------|
| [JavaScript 実行](#javascript-実行) | Node.jsでタイムアウト付きのJavaScriptコードを実行 |
| [Python 実行](#python-実行) | サブプロセスでタイムアウト付きのPythonコードを実行 |
| [シェル実行](#シェル実行) | タイムアウトと環境制御付きでシェルコマンドを実行 |

## Modules

### JavaScript 実行

`sandbox.execute_js`

Node.jsでタイムアウト付きのJavaScriptコードを実行

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | Node.jsで実行するJavaScriptコード |
| `timeout` | number | No | `10` | 実行タイムアウト（秒） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | スクリプトの標準出力 |
| `stderr` | string | スクリプトの標準エラー |
| `exit_code` | number | プロセスの終了コード（0 = 成功） |
| `execution_time_ms` | number | 実行時間（ミリ秒） |

**Example:** Simple console.log

```yaml
code: console.log("Hello, World!");
timeout: 10
```

**Example:** JSON processing

```yaml
code: const data = { name: "test", value: 42 };
console.log(JSON.stringify(data, null, 2));
```

### Python 実行

`sandbox.execute_python`

サブプロセスでタイムアウト付きのPythonコードを実行

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | 実行するPythonコード |
| `timeout` | number | No | `10` | 実行タイムアウト（秒） |
| `allowed_modules` | array | No | - | インポート可能なモジュールのホワイトリスト（すべて許可する場合は空のまま） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | スクリプトの標準出力 |
| `stderr` | string | スクリプトの標準エラー |
| `exit_code` | number | プロセスの終了コード（0 = 成功） |
| `execution_time_ms` | number | 実行時間（ミリ秒） |

**Example:** Simple print

```yaml
code: print("Hello, World!")
timeout: 10
```

**Example:** Math calculation

```yaml
code: import math
print(math.pi)
allowed_modules: ["math"]
```

### シェル実行

`sandbox.execute_shell`

タイムアウトと環境制御付きでシェルコマンドを実行

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `command` | string | Yes | - | 実行するシェルコマンド |
| `timeout` | number | No | `10` | 実行タイムアウト（秒） |
| `working_dir` | string | No | - | コマンドの作業ディレクトリ |
| `env` | object | No | - | 設定する追加の環境変数（現在の環境とマージ） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | コマンドの標準出力 |
| `stderr` | string | コマンドの標準エラー |
| `exit_code` | number | プロセスの終了コード（0 = 成功） |
| `execution_time_ms` | number | 実行時間（ミリ秒） |

**Example:** Simple echo

```yaml
command: echo "Hello, World!"
timeout: 10
```

**Example:** List files with custom working directory

```yaml
command: ls -la
working_dir: /tmp
```
