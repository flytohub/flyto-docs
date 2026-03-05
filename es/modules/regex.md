# Regex

Pattern matching: match, extract, replace, split, and test.

**5 modules**

| Module | Description |
|--------|-------------|
| [Extracción Regex](#extracción-regex) | Extraer grupos nombrados del texto |
| [Coincidencia Regex](#coincidencia-regex) | Encontrar todas las coincidencias de un patrón en el texto |
| [Reemplazo Regex](#reemplazo-regex) | Reemplazar coincidencias de patrón en el texto |
| [División Regex](#división-regex) | Dividir texto por un patrón regex |
| [Prueba Regex](#prueba-regex) | Probar si la cadena coincide con un patrón regex |

## Modules

### Extracción Regex

`regex.extract`

Extraer grupos nombrados del texto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texto del cual extraer |
| `pattern` | string | Yes | - | Texto del cual extraer |
| `ignore_case` | boolean | No | `False` | Coincidencia sin distinguir mayúsculas |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | Coincidencia sin distinguir mayúsculas |
| `matched` | boolean | Grupos nombrados extraídos |
| `full_match` | string | Grupos nombrados extraídos |

### Coincidencia Regex

`regex.match`

Encontrar todas las coincidencias de un patrón en el texto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texto a buscar |
| `pattern` | string | Yes | - | Texto a buscar |
| `ignore_case` | boolean | No | `False` | Patrón de expresión regular |
| `first_only` | boolean | No | `False` | Coincidencia sin distinguir mayúsculas |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `matches` | array | Devolver solo la primera coincidencia |
| `count` | number | Lista de coincidencias |
| `groups` | array | Lista de coincidencias |

### Reemplazo Regex

`regex.replace`

Reemplazar coincidencias de patrón en el texto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texto a procesar |
| `pattern` | string | Yes | - | Texto a procesar |
| `replacement` | string | Yes | - | Patrón de expresión regular |
| `ignore_case` | boolean | No | `False` | Texto de reemplazo (soporta referencias posteriores) |
| `count` | number | No | `0` | Coincidencia sin distinguir mayúsculas |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Máximo de reemplazos (0 = ilimitado) |
| `replacements` | number | Texto con reemplazos |
| `original` | string | Texto con reemplazos |

### División Regex

`regex.split`

Dividir texto por un patrón regex

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texto a dividir |
| `pattern` | string | Yes | - | Texto a dividir |
| `ignore_case` | boolean | No | `False` | Patrón de expresión regular para delimitador |
| `max_split` | number | No | `0` | Coincidencia sin distinguir mayúsculas |
| `remove_empty` | boolean | No | `False` | Número máximo de divisiones (0 = ilimitado) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Eliminar cadenas vacías del resultado |
| `count` | number | Partes divididas |

### Prueba Regex

`regex.test`

Probar si la cadena coincide con un patrón regex

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texto a probar |
| `pattern` | string | Yes | - | Texto a probar |
| `ignore_case` | boolean | No | `False` | Patrón de expresión regular |
| `full_match` | boolean | No | `False` | Coincidencia sin distinguir mayúsculas |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Requiere que el patrón coincida con toda la cadena |
| `pattern` | string | Si el patrón coincide |
