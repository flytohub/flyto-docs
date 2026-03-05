# Random

Random number, UUID, choice, and shuffle.

**4 modules**

| Module | Description |
|--------|-------------|
| [Elección Aleatoria](#elección-aleatoria) | Selecciona elemento(s) aleatorio(s) de un arreglo |
| [Número Aleatorio](#número-aleatorio) | Genera un número aleatorio dentro de un rango |
| [Mezclar Arreglo](#mezclar-arreglo) | Mezcla aleatoriamente elementos del arreglo |
| [Generar UUID](#generar-uuid) | Genera UUID aleatorio (v4) |

## Modules

### Elección Aleatoria

`random.choice`

Selecciona elemento(s) aleatorio(s) de un arreglo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Arreglo del cual elegir |
| `count` | number | No | `1` | Arreglo del cual elegir |
| `unique` | boolean | No | `True` | Número de elementos a elegir |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `choice` | any | Elige elementos únicos (sin duplicados) |
| `count` | number | Elemento(s) seleccionado(s) |

### Número Aleatorio

`random.number`

Genera un número aleatorio dentro de un rango

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | Valor mínimo (incluido) |
| `max` | number | No | `100` | Valor mínimo (incluido) |
| `integer` | boolean | No | `True` | Valor máximo (incluido) |
| `precision` | number | No | `2` | Generar solo enteros |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `number` | number | Decimales para flotante |
| `min` | number | Número aleatorio generado |
| `max` | number | Número aleatorio generado |

### Mezclar Arreglo

`random.shuffle`

Mezcla aleatoriamente elementos del arreglo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Arreglo a mezclar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Arreglo a mezclar |
| `length` | number | Arreglo mezclado |

### Generar UUID

`random.uuid`

Genera UUID aleatorio (v4)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `uppercase` | boolean | No | `False` | Devolver UUID en mayúsculas |
| `remove_hyphens` | boolean | No | `False` | Devolver UUID en mayúsculas |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `uuid` | string | Quitar guiones del UUID |
| `version` | number | UUID generado |
