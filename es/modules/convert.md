# Convert

Type casting between data types.

**5 modules**

| Module | Description |
|--------|-------------|
| [A Arreglo](#a-arreglo) | Convertir valor a arreglo |
| [A Booleano](#a-booleano) | Convertir valor a booleano |
| [A Número](#a-número) | Convertir valor a número |
| [A Objeto](#a-objeto) | Convertir valor a objeto |
| [A Cadena](#a-cadena) | Convertir cualquier valor a cadena |

## Modules

### A Arreglo

`convert.to_array`

Convertir valor a arreglo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valor a convertir |
| `split_string` | boolean | No | `False` | Valor a convertir |
| `delimiter` | string | No | - | Dividir cadena en caracteres |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Delimitador para dividir cadenas |
| `length` | number | Arreglo convertido |
| `original_type` | string | Arreglo convertido |

### A Booleano

`convert.to_boolean`

Convertir valor a booleano

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valor a convertir |
| `strict` | boolean | No | `False` | Valor a convertir |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Solo acepta cadenas true/false |
| `original_type` | string | Booleano convertido |

### A Número

`convert.to_number`

Convertir valor a número

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valor a convertir |
| `default` | number | No | `0` | Valor a convertir |
| `integer` | boolean | No | `False` | Valor por defecto si falla la conversión |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Convertir a entero |
| `success` | boolean | Número convertido |
| `original_type` | string | Número convertido |

### A Objeto

`convert.to_object`

Convertir valor a objeto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valor a convertir |
| `key_name` | string | No | `value` | Valor a convertir |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Nombre de clave para envolver no-objetos |
| `keys` | array | Objeto convertido |
| `original_type` | string | Objeto convertido |

### A Cadena

`convert.to_string`

Convertir cualquier valor a cadena

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valor a convertir |
| `pretty` | boolean | No | `False` | Valor a convertir |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Formatear objetos/arreglos con indentación |
| `original_type` | string | Representación de cadena |
