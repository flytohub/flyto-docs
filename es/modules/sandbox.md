# Sandbox

Execute JavaScript, Python, or shell commands in isolated environments.

**3 modules**

| Module | Description |
|--------|-------------|
| [Ejecutar JavaScript](#ejecutar-javascript) | Ejecutar código JavaScript con Node.js con límite de tiempo |
| [Ejecutar Python](#ejecutar-python) | Ejecutar código Python en un subproceso con límite de tiempo |
| [Ejecutar Shell](#ejecutar-shell) | Ejecutar un comando de shell con límite de tiempo y control de entorno |

## Modules

### Ejecutar JavaScript

`sandbox.execute_js`

Ejecutar código JavaScript con Node.js con límite de tiempo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | Código JavaScript para ejecutar con Node.js |
| `timeout` | number | No | `10` | Límite de tiempo de ejecución en segundos |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Salida estándar del script |
| `stderr` | string | Error estándar del script |
| `exit_code` | number | Código de salida del proceso (0 = éxito) |
| `execution_time_ms` | number | Tiempo de ejecución en milisegundos |

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

### Ejecutar Python

`sandbox.execute_python`

Ejecutar código Python en un subproceso con límite de tiempo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | Código Python para ejecutar |
| `timeout` | number | No | `10` | Límite de tiempo de ejecución en segundos |
| `allowed_modules` | array | No | - | Lista blanca de módulos importables (dejar vacío para permitir todos) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Salida estándar del script |
| `stderr` | string | Error estándar del script |
| `exit_code` | number | Código de salida del proceso (0 = éxito) |
| `execution_time_ms` | number | Tiempo de ejecución en milisegundos |

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

### Ejecutar Shell

`sandbox.execute_shell`

Ejecutar un comando de shell con límite de tiempo y control de entorno

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `command` | string | Yes | - | Comando de shell para ejecutar |
| `timeout` | number | No | `10` | Límite de tiempo de ejecución en segundos |
| `working_dir` | string | No | - | Directorio de trabajo para el comando |
| `env` | object | No | - | Variables de entorno adicionales a establecer (combinadas con el entorno actual) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Salida estándar del comando |
| `stderr` | string | Error estándar del comando |
| `exit_code` | number | Código de salida del proceso (0 = éxito) |
| `execution_time_ms` | number | Tiempo de ejecución en milisegundos |

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
