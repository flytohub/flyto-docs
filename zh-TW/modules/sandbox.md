# Sandbox

Execute JavaScript, Python, or shell commands in isolated environments.

**3 modules**

| Module | Description |
|--------|-------------|
| [執行 JavaScript](#執行-javascript) | 通過 Node.js 執行 JavaScript 程式碼，並設置超時 |
| [執行 Python](#執行-python) | 在子程序中執行 Python 程式碼，並設置超時 |
| [執行 Shell](#執行-shell) | 執行 Shell 命令，並設置超時和環境控制 |

## Modules

### 執行 JavaScript

`sandbox.execute_js`

通過 Node.js 執行 JavaScript 程式碼，並設置超時

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | 要通過 Node.js 執行的 JavaScript 程式碼 |
| `timeout` | number | No | `10` | 執行超時時間（秒） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | 腳本的標準輸出 |
| `stderr` | string | 腳本的標準錯誤輸出 |
| `exit_code` | number | 程序退出代碼（0 = 成功） |
| `execution_time_ms` | number | 執行時間（毫秒） |

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

### 執行 Python

`sandbox.execute_python`

在子程序中執行 Python 程式碼，並設置超時

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | 要執行的 Python 程式碼 |
| `timeout` | number | No | `10` | 執行超時時間（秒） |
| `allowed_modules` | array | No | - | 可匯入模組的白名單（留空表示允許所有） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | 腳本的標準輸出 |
| `stderr` | string | 腳本的標準錯誤輸出 |
| `exit_code` | number | 程序退出代碼（0 = 成功） |
| `execution_time_ms` | number | 執行時間（毫秒） |

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

### 執行 Shell

`sandbox.execute_shell`

執行 Shell 命令，並設置超時和環境控制

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `command` | string | Yes | - | 要執行的 Shell 命令 |
| `timeout` | number | No | `10` | 執行超時時間（秒） |
| `working_dir` | string | No | - | 命令的工作目錄 |
| `env` | object | No | - | 要設置的額外環境變數（與當前環境合併） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | 命令的標準輸出 |
| `stderr` | string | 命令的標準錯誤輸出 |
| `exit_code` | number | 程序退出代碼（0 = 成功） |
| `execution_time_ms` | number | 執行時間（毫秒） |

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
