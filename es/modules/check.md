# Check

Runtime type checking utilities.

**7 modules**

| Module | Description |
|--------|-------------|
| [Es Array](#es-array) | Verificar si un valor es un array |
| [Está Vacío](#está-vacío) | Verificar si un valor está vacío |
| [Es Nulo](#es-nulo) | Verificar si un valor es nulo/None |
| [Es Número](#es-número) | Verificar si un valor es un número |
| [Es Objeto](#es-objeto) | Verificar si un valor es un objeto |
| [Es Cadena](#es-cadena) | Verificar si un valor es una cadena |
| [Tipo De](#tipo-de) | Obtener el tipo de un valor |

## Modules

### Es Array

`check.is_array`

Verificar si un valor es un array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valor a verificar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_array` | boolean | Valor a verificar |
| `length` | number | Si el valor es un array |

### Está Vacío

`check.is_empty`

Verificar si un valor está vacío

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valor a verificar |
| `trim_strings` | boolean | No | `True` | Valor a verificar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_empty` | boolean | Tratar cadenas solo con espacios como vacías |
| `type` | string | Si el valor está vacío |

### Es Nulo

`check.is_null`

Verificar si un valor es nulo/None

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | No | - | Valor a verificar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_null` | boolean | Valor a verificar |

### Es Número

`check.is_number`

Verificar si un valor es un número

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valor a verificar |
| `parse_string` | boolean | No | `False` | Valor a verificar |
| `integer_only` | boolean | No | `False` | Considerar cadenas numéricas como números |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_number` | boolean | Solo aceptar enteros |
| `is_integer` | boolean | Si el valor es un número |
| `is_float` | boolean | Si el valor es un número |

### Es Objeto

`check.is_object`

Verificar si un valor es un objeto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valor a verificar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_object` | boolean | Valor a verificar |
| `keys` | array | Si el valor es un objeto |

### Es Cadena

`check.is_string`

Verificar si un valor es una cadena

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valor a verificar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_string` | boolean | Valor a verificar |
| `length` | number | Si el valor es una cadena |

### Tipo De

`check.type_of`

Obtener el tipo de un valor

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | No | - | Valor a verificar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Valor a verificar |
| `is_primitive` | boolean | Nombre del tipo |
