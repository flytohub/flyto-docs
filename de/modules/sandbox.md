# Sandbox

Execute JavaScript, Python, or shell commands in isolated environments.

**3 modules**

| Module | Description |
|--------|-------------|
| [JavaScript ausführen](#javascript-ausführen) | JavaScript-Code über Node.js mit Timeout ausführen |
| [Python ausführen](#python-ausführen) | Python-Code in einem Subprozess mit Timeout ausführen |
| [Shell ausführen](#shell-ausführen) | Shell-Befehl mit Timeout und Umgebungssteuerung ausführen |

## Modules

### JavaScript ausführen

`sandbox.execute_js`

JavaScript-Code über Node.js mit Timeout ausführen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | Über Node.js auszuführender JavaScript-Code |
| `timeout` | number | No | `10` | Ausführungs-Timeout in Sekunden |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Standardausgabe des Skripts |
| `stderr` | string | Standardfehler des Skripts |
| `exit_code` | number | Prozess-Exit-Code (0 = Erfolg) |
| `execution_time_ms` | number | Ausführungszeit in Millisekunden |

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

### Python ausführen

`sandbox.execute_python`

Python-Code in einem Subprozess mit Timeout ausführen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | Auszuführender Python-Code |
| `timeout` | number | No | `10` | Ausführungs-Timeout in Sekunden |
| `allowed_modules` | array | No | - | Whitelist der importierbaren Module (leer lassen, um alle zu erlauben) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Standardausgabe des Skripts |
| `stderr` | string | Standardfehler des Skripts |
| `exit_code` | number | Prozess-Exit-Code (0 = Erfolg) |
| `execution_time_ms` | number | Ausführungszeit in Millisekunden |

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

### Shell ausführen

`sandbox.execute_shell`

Shell-Befehl mit Timeout und Umgebungssteuerung ausführen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `command` | string | Yes | - | Auszuführender Shell-Befehl |
| `timeout` | number | No | `10` | Ausführungs-Timeout in Sekunden |
| `working_dir` | string | No | - | Arbeitsverzeichnis für den Befehl |
| `env` | object | No | - | Zusätzliche Umgebungsvariablen, die gesetzt werden sollen (mit aktueller Umgebung zusammengeführt) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Standardausgabe des Befehls |
| `stderr` | string | Standardfehler des Befehls |
| `exit_code` | number | Prozess-Exit-Code (0 = Erfolg) |
| `execution_time_ms` | number | Ausführungszeit in Millisekunden |

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
