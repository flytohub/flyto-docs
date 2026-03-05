# Storage

Persistent key-value storage.

**3 modules**

| Module | Description |
|--------|-------------|
| [Eliminar Valor Almacenado](#eliminar-valor-almacenado) | Eliminar un valor del almacenamiento persistente de clave-valor |
| [Obtener Valor Almacenado](#obtener-valor-almacenado) | Recuperar un valor del almacenamiento persistente de clave-valor |
| [Almacenar Valor](#almacenar-valor) | Almacenar un valor en el almacenamiento persistente de clave-valor |

## Modules

### Eliminar Valor Almacenado

`storage.delete`

Eliminar un valor del almacenamiento persistente de clave-valor

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | Espacio de nombres de almacenamiento |
| `key` | string | Yes | - | Espacio de nombres de almacenamiento |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Clave a eliminar |
| `deleted` | boolean | Si la operación tuvo éxito |
| `key` | string | Si la operación tuvo éxito |

**Example:** Delete cached value

```yaml
namespace: cache
key: api_response
```

### Obtener Valor Almacenado

`storage.get`

Recuperar un valor del almacenamiento persistente de clave-valor

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | Espacio de nombres de almacenamiento (por ejemplo, nombre del flujo de trabajo o proyecto) |
| `key` | string | Yes | - | Espacio de nombres de almacenamiento (por ejemplo, nombre del flujo de trabajo o proyecto) |
| `default` | any | No | - | Clave a recuperar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Valor a devolver si la clave no existe |
| `found` | boolean | Si la operación tuvo éxito |
| `value` | any | Si la operación tuvo éxito |
| `key` | string | Si la clave fue encontrada (no expirada) |

**Example:** Get last BTC price

```yaml
namespace: crypto-alerts
key: btc_last_price
default: 0
```

**Example:** Get workflow state

```yaml
namespace: my-workflow
key: last_run_status
```

### Almacenar Valor

`storage.set`

Almacenar un valor en el almacenamiento persistente de clave-valor

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | Yes | `default` | Espacio de nombres de almacenamiento (por ejemplo, nombre del flujo de trabajo o proyecto) |
| `key` | string | Yes | - | Espacio de nombres de almacenamiento (por ejemplo, nombre del flujo de trabajo o proyecto) |
| `value` | any | Yes | - | Clave para almacenar el valor |
| `ttl_seconds` | number | No | `0` | Time to live in seconds (optional, 0 = no expiration) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Tiempo de vida en segundos (opcional, 0 = sin expiración) |
| `key` | string | Si la operación tuvo éxito |
| `stored_at` | number | Si la operación tuvo éxito |
| `expires_at` | number | La clave que fue almacenada |

**Example:** Store BTC price

```yaml
namespace: crypto-alerts
key: btc_last_price
value: 42350.5
```

**Example:** Store with expiration

```yaml
namespace: cache
key: api_response
value: {"data": "cached"}
ttl_seconds: 3600
```
