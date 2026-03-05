# Logic

Boolean logic operations: AND, OR, NOT, equals, contains.

**5 modules**

| Module | Description |
|--------|-------------|
| [Lógica AND](#lógica-and) | Realizar operación lógica AND |
| [Lógica Contiene](#lógica-contiene) | Verificar si un valor contiene otro valor |
| [Lógica Igual](#lógica-igual) | Verificar si dos valores son iguales |
| [Lógica NOT](#lógica-not) | Realizar operación lógica NOT |
| [Lógica OR](#lógica-or) | Realizar operación lógica OR |

## Modules

### Lógica AND

`logic.and`

Realizar operación lógica AND

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | Valores booleanos para combinar con AND |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Valores booleanos para combinar con AND |
| `true_count` | number | Resultado de la operación AND |
| `total_count` | number | Resultado de la operación AND |

### Lógica Contiene

`logic.contains`

Verificar si un valor contiene otro valor

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `haystack` | text | Yes | - | Valor donde buscar (cadena, array u objeto) |
| `needle` | text | Yes | - | Valor donde buscar (cadena, array u objeto) |
| `case_sensitive` | boolean | No | `True` | Valor a buscar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Búsqueda sensible a mayúsculas y minúsculas para cadenas |
| `position` | number | Si el pajar contiene la aguja |
| `count` | number | Si el pajar contiene la aguja |

### Lógica Igual

`logic.equals`

Verificar si dos valores son iguales

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `a` | text | Yes | - | Primer valor a comparar |
| `b` | text | Yes | - | Primer valor a comparar |
| `strict` | boolean | No | `False` | Segundo valor a comparar |
| `case_sensitive` | boolean | No | `True` | Requiere el mismo tipo (sin coerción de tipo) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Comparación de cadenas sensible a mayúsculas y minúsculas |
| `type_a` | string | Si los valores son iguales |
| `type_b` | string | Si los valores son iguales |

### Lógica NOT

`logic.not`

Realizar operación lógica NOT

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | boolean | Yes | `False` | Valor booleano a negar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Valor booleano a negar |
| `original` | boolean | Resultado negado |

### Lógica OR

`logic.or`

Realizar operación lógica OR

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | Valores booleanos para combinar con OR |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Valores booleanos para combinar con OR |
| `true_count` | number | Resultado de la operación OR |
| `total_count` | number | Resultado de la operación OR |
