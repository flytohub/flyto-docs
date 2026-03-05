# Sandbox

Execute JavaScript, Python, or shell commands in isolated environments.

**3 modules**

| Module | Description |
|--------|-------------|
| [Exécuter JavaScript](#exécuter-javascript) | Exécuter du code JavaScript via Node.js avec un délai |
| [Exécuter Python](#exécuter-python) | Exécuter du code Python dans un sous-processus avec un délai |
| [Exécuter Shell](#exécuter-shell) | Exécuter une commande shell avec un délai et un contrôle d'environnement |

## Modules

### Exécuter JavaScript

`sandbox.execute_js`

Exécuter du code JavaScript via Node.js avec un délai

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | Code JavaScript à exécuter via Node.js |
| `timeout` | number | No | `10` | Délai d'exécution en secondes |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Sortie standard du script |
| `stderr` | string | Erreur standard du script |
| `exit_code` | number | Code de sortie du processus (0 = succès) |
| `execution_time_ms` | number | Temps d'exécution en millisecondes |

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

### Exécuter Python

`sandbox.execute_python`

Exécuter du code Python dans un sous-processus avec un délai

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | Code Python à exécuter |
| `timeout` | number | No | `10` | Délai d'exécution en secondes |
| `allowed_modules` | array | No | - | Liste blanche des modules importables (laisser vide pour autoriser tous) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Sortie standard du script |
| `stderr` | string | Erreur standard du script |
| `exit_code` | number | Code de sortie du processus (0 = succès) |
| `execution_time_ms` | number | Temps d'exécution en millisecondes |

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

### Exécuter Shell

`sandbox.execute_shell`

Exécuter une commande shell avec un délai et un contrôle d'environnement

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `command` | string | Yes | - | Commande shell à exécuter |
| `timeout` | number | No | `10` | Délai d'exécution en secondes |
| `working_dir` | string | No | - | Répertoire de travail pour la commande |
| `env` | object | No | - | Variables d'environnement supplémentaires à définir (fusionnées avec l'environnement actuel) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Sortie standard de la commande |
| `stderr` | string | Erreur standard de la commande |
| `exit_code` | number | Code de sortie du processus (0 = succès) |
| `execution_time_ms` | number | Temps d'exécution en millisecondes |

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
