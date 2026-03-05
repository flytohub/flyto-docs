# Encode / Decode

Base64, hex, URL, and HTML encoding and decoding.

**7 modules**

| Module | Description |
|--------|-------------|
| [Decodificar Base64](#decodificar-base64) | Decodificar texto codificado en Base64 |
| [Decodificar Hex](#decodificar-hex) | Decodificar hexadecimal a texto |
| [Decodificar URL](#decodificar-url) | Decodificar texto codificado en URL |
| [Codificar Base64](#codificar-base64) | Codificar texto a Base64 |
| [Codificar Hex](#codificar-hex) | Codificar texto a hexadecimal |
| [Codificar HTML](#codificar-html) | Codificar texto a entidades HTML |
| [Codificar URL](#codificar-url) | Codificar texto en URL (codificación porcentual) |

## Modules

### Decodificar Base64

`decode.base64`

Decodificar texto codificado en Base64

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texto codificado en Base64 para decodificar |
| `encoding` | string | No | `utf-8` | Texto codificado en Base64 para decodificar |
| `url_safe` | boolean | No | `False` | Codificación de caracteres para salida |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | La entrada es Base64 seguro para URL |
| `original` | string | Cadena decodificada |
| `valid` | boolean | Cadena decodificada |

### Decodificar Hex

`decode.hex`

Decodificar hexadecimal a texto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texto hexadecimal para decodificar |
| `encoding` | string | No | `utf-8` | Texto hexadecimal para decodificar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Codificación de caracteres para salida |
| `original` | string | Cadena decodificada |
| `valid` | boolean | Cadena decodificada |

### Decodificar URL

`decode.url`

Decodificar texto codificado en URL

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texto codificado en URL para decodificar |
| `plus_spaces` | boolean | No | `False` | Texto codificado en URL para decodificar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Tratar + como espacio (decodificación de formulario) |
| `original` | string | Cadena decodificada |

### Codificar Base64

`encode.base64`

Codificar texto a Base64

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texto a codificar |
| `encoding` | string | No | `utf-8` | Texto a codificar |
| `url_safe` | boolean | No | `False` | Codificación de caracteres |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Usar codificación Base64 segura para URL |
| `original` | string | Cadena codificada en Base64 |
| `length` | number | Cadena codificada en Base64 |

### Codificar Hex

`encode.hex`

Codificar texto a hexadecimal

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texto a codificar en hex |
| `encoding` | string | No | `utf-8` | Texto a codificar en hex |
| `uppercase` | boolean | No | `False` | Codificación de caracteres |
| `separator` | string | No | - | Usar letras hexadecimales en mayúsculas |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Separador entre bytes hexadecimales |
| `original` | string | Cadena codificada en hex |
| `byte_count` | number | Cadena codificada en hex |

### Codificar HTML

`encode.html`

Codificar texto a entidades HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texto a codificar como entidades HTML |
| `quote` | boolean | No | `True` | Texto a codificar como entidades HTML |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | También codificar caracteres de comillas |
| `original` | string | Cadena codificada en HTML |

### Codificar URL

`encode.url`

Codificar texto en URL (codificación porcentual)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texto a codificar en URL |
| `plus_spaces` | boolean | No | `False` | Texto a codificar en URL |
| `safe` | string | No | - | Usar + en lugar de %20 para espacios (codificación de formularios) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Caracteres que no deben ser codificados |
| `original` | string | Cadena codificada en URL |
