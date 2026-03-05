# Sandbox

Execute JavaScript, Python, or shell commands in isolated environments.

**3 modules**

| Module | Description |
|--------|-------------|
| [Wykonaj JavaScript](#wykonaj-javascript) | Wykonaj kod JavaScript za pomocą Node.js z limitem czasu |
| [Wykonaj Python](#wykonaj-python) | Wykonaj kod Python w podprocesie z limitem czasu |
| [Wykonaj Shell](#wykonaj-shell) | Wykonaj polecenie shell z limitem czasu i kontrolą środowiska |

## Modules

### Wykonaj JavaScript

`sandbox.execute_js`

Wykonaj kod JavaScript za pomocą Node.js z limitem czasu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | Kod JavaScript do wykonania za pomocą Node.js |
| `timeout` | number | No | `10` | Limit czasu wykonania w sekundach |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Standardowe wyjście ze skryptu |
| `stderr` | string | Standardowy błąd ze skryptu |
| `exit_code` | number | Kod wyjścia procesu (0 = sukces) |
| `execution_time_ms` | number | Czas wykonania w milisekundach |

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

### Wykonaj Python

`sandbox.execute_python`

Wykonaj kod Python w podprocesie z limitem czasu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | Kod Python do wykonania |
| `timeout` | number | No | `10` | Limit czasu wykonania w sekundach |
| `allowed_modules` | array | No | - | Biała lista importowalnych modułów (pozostaw puste, aby zezwolić na wszystkie) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Standardowe wyjście ze skryptu |
| `stderr` | string | Standardowy błąd ze skryptu |
| `exit_code` | number | Kod wyjścia procesu (0 = sukces) |
| `execution_time_ms` | number | Czas wykonania w milisekundach |

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

### Wykonaj Shell

`sandbox.execute_shell`

Wykonaj polecenie shell z limitem czasu i kontrolą środowiska

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `command` | string | Yes | - | Polecenie shell do wykonania |
| `timeout` | number | No | `10` | Limit czasu wykonania w sekundach |
| `working_dir` | string | No | - | Katalog roboczy dla polecenia |
| `env` | object | No | - | Dodatkowe zmienne środowiskowe do ustawienia (połączone z bieżącym środowiskiem) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Standardowe wyjście z polecenia |
| `stderr` | string | Standardowy błąd z polecenia |
| `exit_code` | number | Kod wyjścia procesu (0 = sukces) |
| `execution_time_ms` | number | Czas wykonania w milisekundach |

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
