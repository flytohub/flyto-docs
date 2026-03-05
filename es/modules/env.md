# Environment

Environment variable management and .env file loading.

**3 modules**

| Module | Description |
|--------|-------------|
| [Obtener Variable de Entorno](#obtener-variable-de-entorno) | Obtener el valor de una variable de entorno |
| [Cargar Archivo .env](#cargar-archivo-.env) | Cargar variables de entorno desde un archivo .env |
| [Establecer Variable de Entorno](#establecer-variable-de-entorno) | Establecer una variable de entorno en el proceso actual |

## Modules

### Obtener Variable de Entorno

`env.get`

Obtener el valor de una variable de entorno

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | Nombre de la variable de entorno |
| `default` | string | No | - | Valor predeterminado si la variable no está establecida |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Nombre de la variable |
| `value` | string | Valor de la variable (o predeterminado si no está establecida) |
| `exists` | boolean | Si la variable existe en el entorno |

**Example:** Get HOME variable

```yaml
name: HOME
```

**Example:** Get variable with default

```yaml
name: MY_APP_PORT
default: 8080
```

### Cargar Archivo .env

`env.load_dotenv`

Cargar variables de entorno desde un archivo .env

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | `.env` | Ruta al archivo .env |
| `override` | boolean | No | `False` | Si se deben sobrescribir las variables de entorno existentes |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `loaded_count` | number | Número de variables cargadas |
| `variables` | array | Lista de nombres de variables que se cargaron |

**Example:** Load .env file

```yaml
path: .env
override: false
```

### Establecer Variable de Entorno

`env.set`

Establecer una variable de entorno en el proceso actual

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | Nombre de la variable de entorno a establecer |
| `value` | string | Yes | - | Valor a asignar a la variable de entorno |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Nombre de la variable |
| `value` | string | Nuevo valor que se estableció |
| `previous_value` | string | Valor anterior (nulo si no estaba establecido previamente) |

**Example:** Set an environment variable

```yaml
name: MY_APP_PORT
value: 3000
```
