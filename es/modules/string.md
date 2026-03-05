# String Operations

Text manipulation: case conversion, split, pad, slugify, template, and more.

**11 modules**

| Module | Description |
|--------|-------------|
| [Cadena a minusculas](#cadena-a-minusculas) | Convertir una cadena a minusculas |
| [Rellenar Texto](#rellenar-texto) | Rellenar un texto a una longitud especificada |
| [Reemplazar en cadena](#reemplazar-en-cadena) | Reemplazar ocurrencias de una subcadena en una cadena |
| [Invertir cadena](#invertir-cadena) | Invertir los caracteres en una cadena |
| [Slugificar](#slugificar) | Convertir texto a un slug apto para URL |
| [Dividir cadena](#dividir-cadena) | Dividir una cadena en un array usando un delimitador |
| [Plantilla](#plantilla) | Renderizar una plantilla con sustitución de variables |
| [Cadena a titulo](#cadena-a-titulo) | Convertir cadena a titulo |
| [Recortar cadena](#recortar-cadena) | Eliminar espacios en blanco de ambos extremos de una cadena |
| [Truncar Texto](#truncar-texto) | Truncar un texto a una longitud máxima |
| [Cadena a mayusculas](#cadena-a-mayusculas) | Convertir una cadena a mayusculas |

## Modules

### Cadena a minusculas

`string.lowercase`

Convertir una cadena a minusculas

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Cadena convertida a minusculas |
| `original` | string | Cadena convertida a minusculas |
| `status` | string | Cadena convertida a minusculas |

### Rellenar Texto

`string.pad`

Rellenar un texto a una longitud especificada

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texto a rellenar |
| `length` | number | Yes | - | Texto a rellenar |
| `pad_char` | string | No | ` ` | Longitud objetivo |
| `position` | string | No | `end` | Carácter para rellenar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Texto rellenado |
| `original` | string | Texto rellenado |
| `added` | number | Texto rellenado |

### Reemplazar en cadena

`string.replace`

Reemplazar ocurrencias de una subcadena en una cadena

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `search` | string | Yes | - | The substring to search for in the input text |
| `replace` | string | Yes | - | Text to replace matches with (leave empty to remove matches) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Cadena con reemplazos aplicados |
| `original` | string | Cadena con reemplazos aplicados |
| `search` | string | Cadena con reemplazos aplicados |
| `replace` | string | Cadena de entrada original |
| `status` | string | Cadena de busqueda que fue reemplazada |

### Invertir cadena

`string.reverse`

Invertir los caracteres en una cadena

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Cadena invertida |
| `original` | string | Cadena invertida |
| `length` | number | Cadena invertida |

### Slugificar

`string.slugify`

Convertir texto a un slug apto para URL

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texto a slugificar |
| `separator` | string | No | `-` | Texto a slugificar |
| `lowercase` | boolean | No | `True` | Separador de palabras |
| `max_length` | number | No | `0` | Convertir a minúsculas |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Longitud máxima del slug (0 = ilimitado) |
| `original` | string | Slug apto para URL |

### Dividir cadena

`string.split`

Dividir una cadena en un array usando un delimitador

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `delimiter` | select (`,`, `;`, `	`, ` `, `
`, `|`, `-`, `_`) | No | ` ` | Character(s) to split the string on |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `parts` | array | Array de partes de cadena divididas |
| `result` | array | Array de partes de cadena divididas |
| `length` | number | Array de partes de cadena divididas |
| `original` | string | Alias para partes - array de partes de cadena divididas |
| `delimiter` | string | Numero de partes despues de dividir |
| `status` | string | Cadena de entrada original |

### Plantilla

`string.template`

Renderizar una plantilla con sustitución de variables

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | Cadena de plantilla con marcadores {<!-- -->{variable}<!-- -->} |
| `variables` | object | Yes | - | Variables a sustituir |
| `missing_value` | string | No | - | Valor para variables no definidas |
| `preserve_missing` | boolean | No | `False` | Valor para variables no definidas |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Mantener el marcador si falta la variable |
| `replaced` | number | Plantilla renderizada |
| `missing` | array | Plantilla renderizada |

### Cadena a titulo

`string.titlecase`

Convertir cadena a titulo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Cadena convertida a titulo |

**Example:** Convert to title case

```yaml
text: hello world from flyto
```

**Example:** Format name

```yaml
text: john doe
```

### Recortar cadena

`string.trim`

Eliminar espacios en blanco de ambos extremos de una cadena

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Cadena recortada sin espacios en blanco |
| `original` | string | Cadena recortada sin espacios en blanco |
| `status` | string | Cadena recortada sin espacios en blanco |

### Truncar Texto

`string.truncate`

Truncar un texto a una longitud máxima

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texto a truncar |
| `length` | number | Yes | - | Texto a truncar |
| `suffix` | string | No | `...` | Longitud máxima |
| `word_boundary` | boolean | No | `False` | Texto a añadir si se trunca |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Romper en el límite de palabra |
| `original` | string | Texto truncado |
| `truncated` | boolean | Texto truncado |
| `removed` | number | Texto original |

### Cadena a mayusculas

`string.uppercase`

Convertir una cadena a mayusculas

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Cadena convertida a mayusculas |
| `original` | string | Cadena convertida a mayusculas |
| `status` | string | Cadena convertida a mayusculas |
