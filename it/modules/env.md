# Environment

Environment variable management and .env file loading.

**3 modules**

| Module | Description |
|--------|-------------|
| [Ottieni Variabile d'Ambiente](#ottieni-variabile-d'ambiente) | Ottieni il valore di una variabile d'ambiente |
| [Carica File .env](#carica-file-.env) | Carica variabili d'ambiente da un file .env |
| [Imposta Variabile d'Ambiente](#imposta-variabile-d'ambiente) | Imposta una variabile d'ambiente nel processo corrente |

## Modules

### Ottieni Variabile d'Ambiente

`env.get`

Ottieni il valore di una variabile d'ambiente

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | Nome della variabile d'ambiente |
| `default` | string | No | - | Valore predefinito se la variabile non è impostata |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Nome della variabile |
| `value` | string | Valore della variabile (o predefinito se non impostato) |
| `exists` | boolean | Se la variabile esiste nell'ambiente |

**Example:** Get HOME variable

```yaml
name: HOME
```

**Example:** Get variable with default

```yaml
name: MY_APP_PORT
default: 8080
```

### Carica File .env

`env.load_dotenv`

Carica variabili d'ambiente da un file .env

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | `.env` | Percorso del file .env |
| `override` | boolean | No | `False` | Se sovrascrivere le variabili d'ambiente esistenti |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `loaded_count` | number | Numero di variabili caricate |
| `variables` | array | Elenco dei nomi delle variabili caricate |

**Example:** Load .env file

```yaml
path: .env
override: false
```

### Imposta Variabile d'Ambiente

`env.set`

Imposta una variabile d'ambiente nel processo corrente

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | Nome della variabile d'ambiente da impostare |
| `value` | string | Yes | - | Valore da assegnare alla variabile d'ambiente |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Nome della variabile |
| `value` | string | Nuovo valore impostato |
| `previous_value` | string | Valore precedente (null se non impostato precedentemente) |

**Example:** Set an environment variable

```yaml
name: MY_APP_PORT
value: 3000
```
