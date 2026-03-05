# Sandbox

Execute JavaScript, Python, or shell commands in isolated environments.

**3 modules**

| Module | Description |
|--------|-------------|
| [Esegui JavaScript](#esegui-javascript) | Esegui codice JavaScript tramite Node.js con timeout |
| [Esegui Python](#esegui-python) | Esegui codice Python in un sottoprocesso con timeout |
| [Esegui Shell](#esegui-shell) | Esegui un comando shell con timeout e controllo dell'ambiente |

## Modules

### Esegui JavaScript

`sandbox.execute_js`

Esegui codice JavaScript tramite Node.js con timeout

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | Codice JavaScript da eseguire tramite Node.js |
| `timeout` | number | No | `10` | Timeout di esecuzione in secondi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Output standard dallo script |
| `stderr` | string | Errore standard dallo script |
| `exit_code` | number | Codice di uscita del processo (0 = successo) |
| `execution_time_ms` | number | Tempo di esecuzione in millisecondi |

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

### Esegui Python

`sandbox.execute_python`

Esegui codice Python in un sottoprocesso con timeout

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | Codice Python da eseguire |
| `timeout` | number | No | `10` | Timeout di esecuzione in secondi |
| `allowed_modules` | array | No | - | Lista bianca dei moduli importabili (lascia vuoto per consentire tutti) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Output standard dallo script |
| `stderr` | string | Errore standard dallo script |
| `exit_code` | number | Codice di uscita del processo (0 = successo) |
| `execution_time_ms` | number | Tempo di esecuzione in millisecondi |

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

### Esegui Shell

`sandbox.execute_shell`

Esegui un comando shell con timeout e controllo dell'ambiente

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `command` | string | Yes | - | Comando shell da eseguire |
| `timeout` | number | No | `10` | Timeout di esecuzione in secondi |
| `working_dir` | string | No | - | Directory di lavoro per il comando |
| `env` | object | No | - | Variabili d'ambiente aggiuntive da impostare (unite con l'ambiente attuale) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Output standard dal comando |
| `stderr` | string | Errore standard dal comando |
| `exit_code` | number | Codice di uscita del processo (0 = successo) |
| `execution_time_ms` | number | Tempo di esecuzione in millisecondi |

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
