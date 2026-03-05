# Environment

Environment variable management and .env file loading.

**3 modules**

| Module | Description |
|--------|-------------|
| [Umgebungsvariable abrufen](#umgebungsvariable-abrufen) | Den Wert einer Umgebungsvariable abrufen |
| [.env-Datei laden](#.env-datei-laden) | Umgebungsvariablen aus einer .env-Datei laden |
| [Umgebungsvariable setzen](#umgebungsvariable-setzen) | Eine Umgebungsvariable im aktuellen Prozess setzen |

## Modules

### Umgebungsvariable abrufen

`env.get`

Den Wert einer Umgebungsvariable abrufen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | Name der Umgebungsvariable |
| `default` | string | No | - | Standardwert, falls die Variable nicht gesetzt ist |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Variablenname |
| `value` | string | Variablenwert (oder Standard, falls nicht gesetzt) |
| `exists` | boolean | Ob die Variable in der Umgebung existiert |

**Example:** Get HOME variable

```yaml
name: HOME
```

**Example:** Get variable with default

```yaml
name: MY_APP_PORT
default: 8080
```

### .env-Datei laden

`env.load_dotenv`

Umgebungsvariablen aus einer .env-Datei laden

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | `.env` | Pfad zur .env-Datei |
| `override` | boolean | No | `False` | Ob bestehende Umgebungsvariablen überschrieben werden sollen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `loaded_count` | number | Anzahl der geladenen Variablen |
| `variables` | array | Liste der geladenen Variablennamen |

**Example:** Load .env file

```yaml
path: .env
override: false
```

### Umgebungsvariable setzen

`env.set`

Eine Umgebungsvariable im aktuellen Prozess setzen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | Name der zu setzenden Umgebungsvariable |
| `value` | string | Yes | - | Wert, der der Umgebungsvariable zugewiesen wird |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Variablenname |
| `value` | string | Neuer Wert, der gesetzt wurde |
| `previous_value` | string | Vorheriger Wert (null, wenn nicht zuvor gesetzt) |

**Example:** Set an environment variable

```yaml
name: MY_APP_PORT
value: 3000
```
