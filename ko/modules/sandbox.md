# Sandbox

Execute JavaScript, Python, or shell commands in isolated environments.

**3 modules**

| Module | Description |
|--------|-------------|
| [Execute JavaScript](#execute-javascript) | Execute JavaScript code via Node.js with timeout |
| [Execute Python](#execute-python) | Execute Python code in a subprocess with timeout |
| [Execute Shell](#execute-shell) | Execute a shell command with timeout and environment control |

## Modules

### Execute JavaScript

`sandbox.execute_js`

Execute JavaScript code via Node.js with timeout

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | JavaScript code to execute via Node.js |
| `timeout` | number | No | `10` | Execution timeout in seconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Standard output from the script |
| `stderr` | string | Standard error from the script |
| `exit_code` | number | Process exit code (0 = success) |
| `execution_time_ms` | number | Execution time in milliseconds |

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

### Execute Python

`sandbox.execute_python`

Execute Python code in a subprocess with timeout

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | Python code to execute |
| `timeout` | number | No | `10` | Execution timeout in seconds |
| `allowed_modules` | array | No | - | Whitelist of importable modules (leave empty to allow all) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Standard output from the script |
| `stderr` | string | Standard error from the script |
| `exit_code` | number | Process exit code (0 = success) |
| `execution_time_ms` | number | Execution time in milliseconds |

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

### Execute Shell

`sandbox.execute_shell`

Execute a shell command with timeout and environment control

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `command` | string | Yes | - | Shell command to execute |
| `timeout` | number | No | `10` | Execution timeout in seconds |
| `working_dir` | string | No | - | Working directory for the command |
| `env` | object | No | - | Additional environment variables to set (merged with current env) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Standard output from the command |
| `stderr` | string | Standard error from the command |
| `exit_code` | number | Process exit code (0 = success) |
| `execution_time_ms` | number | Execution time in milliseconds |

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
