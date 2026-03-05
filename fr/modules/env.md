# Environment

Environment variable management and .env file loading.

**3 modules**

| Module | Description |
|--------|-------------|
| [Obtenir la variable d'environnement](#obtenir-la-variable-d'environnement) | Obtenir la valeur d'une variable d'environnement |
| [Charger le fichier .env](#charger-le-fichier-.env) | Charger les variables d'environnement depuis un fichier .env |
| [Définir la variable d'environnement](#définir-la-variable-d'environnement) | Définir une variable d'environnement dans le processus actuel |

## Modules

### Obtenir la variable d'environnement

`env.get`

Obtenir la valeur d'une variable d'environnement

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | Nom de la variable d'environnement |
| `default` | string | No | - | Valeur par défaut si la variable n'est pas définie |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Nom de la variable |
| `value` | string | Valeur de la variable (ou par défaut si non définie) |
| `exists` | boolean | Si la variable existe dans l'environnement |

**Example:** Get HOME variable

```yaml
name: HOME
```

**Example:** Get variable with default

```yaml
name: MY_APP_PORT
default: 8080
```

### Charger le fichier .env

`env.load_dotenv`

Charger les variables d'environnement depuis un fichier .env

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | `.env` | Chemin vers le fichier .env |
| `override` | boolean | No | `False` | Si les variables d'environnement existantes doivent être remplacées |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `loaded_count` | number | Nombre de variables chargées |
| `variables` | array | Liste des noms de variables qui ont été chargées |

**Example:** Load .env file

```yaml
path: .env
override: false
```

### Définir la variable d'environnement

`env.set`

Définir une variable d'environnement dans le processus actuel

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | Nom de la variable d'environnement à définir |
| `value` | string | Yes | - | Valeur à attribuer à la variable d'environnement |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Nom de la variable |
| `value` | string | Nouvelle valeur qui a été définie |
| `previous_value` | string | Valeur précédente (nulle si non définie auparavant) |

**Example:** Set an environment variable

```yaml
name: MY_APP_PORT
value: 3000
```
