# Environment

Environment variable management and .env file loading.

**3 modules**

| Module | Description |
|--------|-------------|
| [Obter Variável de Ambiente](#obter-variável-de-ambiente) | Obter o valor de uma variável de ambiente |
| [Carregar Arquivo .env](#carregar-arquivo-.env) | Carregar variáveis de ambiente de um arquivo .env |
| [Definir Variável de Ambiente](#definir-variável-de-ambiente) | Definir uma variável de ambiente no processo atual |

## Modules

### Obter Variável de Ambiente

`env.get`

Obter o valor de uma variável de ambiente

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | Nome da variável de ambiente |
| `default` | string | No | - | Valor padrão se a variável não estiver definida |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Nome da variável |
| `value` | string | Valor da variável (ou padrão se não definido) |
| `exists` | boolean | Se a variável existe no ambiente |

**Example:** Get HOME variable

```yaml
name: HOME
```

**Example:** Get variable with default

```yaml
name: MY_APP_PORT
default: 8080
```

### Carregar Arquivo .env

`env.load_dotenv`

Carregar variáveis de ambiente de um arquivo .env

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | `.env` | Caminho para o arquivo .env |
| `override` | boolean | No | `False` | Se deve sobrescrever variáveis de ambiente existentes |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `loaded_count` | number | Número de variáveis carregadas |
| `variables` | array | Lista de nomes de variáveis que foram carregadas |

**Example:** Load .env file

```yaml
path: .env
override: false
```

### Definir Variável de Ambiente

`env.set`

Definir uma variável de ambiente no processo atual

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | Nome da variável de ambiente a ser definida |
| `value` | string | Yes | - | Valor a ser atribuído à variável de ambiente |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Nome da variável |
| `value` | string | Novo valor que foi definido |
| `previous_value` | string | Valor anterior (nulo se não definido anteriormente) |

**Example:** Set an environment variable

```yaml
name: MY_APP_PORT
value: 3000
```
