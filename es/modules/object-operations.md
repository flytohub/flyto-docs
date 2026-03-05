# Object Operations

Deep merge, flatten, dot-path get/set, and unflatten.

**5 modules**

| Module | Description |
|--------|-------------|
| [Fusión Profunda](#fusión-profunda) | Fusionar profundamente varios objetos |
| [Aplanar Objeto](#aplanar-objeto) | Aplanar objeto anidado a un solo nivel |
| [Obtener Valor](#obtener-valor) | Obtener valor de objeto por ruta |
| [Establecer Valor](#establecer-valor) | Establecer valor en objeto por ruta |
| [Desaplanar Objeto](#desaplanar-objeto) | Desaplanar objeto con notación de puntos a anidado |

## Modules

### Fusión Profunda

`object.deep_merge`

Fusionar profundamente varios objetos

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | Array de objetos a fusionar |
| `array_merge` | string | No | `replace` | Array de objetos a fusionar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Objeto fusionado |

### Aplanar Objeto

`object.flatten`

Aplanar objeto anidado a un solo nivel

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Objeto anidado para aplanar |
| `separator` | string | No | `.` | Objeto anidado para aplanar |
| `max_depth` | number | No | `0` | Separador de claves |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Profundidad máxima para aplanar (0 = ilimitado) |
| `keys` | array | Objeto aplanado |

### Obtener Valor

`object.get`

Obtener valor de objeto por ruta

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Objeto del cual obtener valor |
| `path` | string | Yes | - | Objeto del cual obtener valor |
| `default` | any | No | - | Ruta en notación de puntos |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | any | Valor por defecto si no se encuentra la ruta |
| `found` | boolean | Valor recuperado |

### Establecer Valor

`object.set`

Establecer valor en objeto por ruta

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Objeto a modificar |
| `path` | string | Yes | - | Objeto a modificar |
| `value` | any | Yes | - | Ruta en notación de puntos |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Valor a establecer |

### Desaplanar Objeto

`object.unflatten`

Desaplanar objeto con notación de puntos a anidado

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Objeto plano para desaplanar |
| `separator` | string | No | `.` | Objeto plano para desaplanar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Separador de claves |
