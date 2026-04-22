# Environment

Environment variable management and .env file loading.

**3 modules**

| Module | Description |
|--------|-------------|
| [Get Environment Variable](#get-environment-variable) | Get the value of an environment variable |
| [Load .env File](#load-.env-file) | Load environment variables from a .env file |
| [Set Environment Variable](#set-environment-variable) | Set an environment variable in the current process |

## Modules

### Get Environment Variable

`env.get`

Get the value of an environment variable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | Name of the environment variable |
| `default` | string | No | - | Default value if the variable is not set |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Variable name |
| `value` | string | Variable value (or default if not set) |
| `exists` | boolean | Whether the variable exists in the environment |

**Example:** Get HOME variable

```yaml
name: HOME
```

**Example:** Get variable with default

```yaml
name: MY_APP_PORT
default: 8080
```

### Load .env File

`env.load_dotenv`

Load environment variables from a .env file

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | `.env` | Path to the .env file |
| `override` | boolean | No | `False` | Whether to override existing environment variables |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `loaded_count` | number | Number of variables loaded |
| `variables` | array | List of variable names that were loaded |

**Example:** Load .env file

```yaml
path: .env
override: false
```

### Set Environment Variable

`env.set`

Set an environment variable in the current process

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | Name of the environment variable to set |
| `value` | string | Yes | - | Value to assign to the environment variable |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Variable name |
| `value` | string | New value that was set |
| `previous_value` | string | Previous value (null if not previously set) |

**Example:** Set an environment variable

```yaml
name: MY_APP_PORT
value: 3000
```
