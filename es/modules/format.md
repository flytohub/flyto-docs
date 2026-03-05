# Format

Number, currency, duration, filesize, and percentage formatting.

**5 modules**

| Module | Description |
|--------|-------------|
| [Formatear Moneda](#formatear-moneda) | Formatea números como moneda |
| [Formatear Duración](#formatear-duración) | Formatea segundos como duración legible |
| [Formatear Tamaño de Archivo](#formatear-tamaño-de-archivo) | Formatea bytes como tamaño de archivo legible |
| [Formatear Número](#formatear-número) | Formatea números con separadores y decimales |
| [Formatear Porcentaje](#formatear-porcentaje) | Formatea números como porcentajes |

## Modules

### Formatear Moneda

`format.currency`

Formatea números como moneda

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `amount` | number | Yes | - | Cantidad a formatear |
| `currency` | string | No | `USD` | Cantidad a formatear |
| `decimal_places` | number | No | `2` | Número de decimales |
| `symbol_position` | string | No | `before` | Número de decimales |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Cadena de moneda formateada |
| `original` | number | Cadena de moneda formateada |
| `symbol` | string | Cadena de moneda formateada |

### Formatear Duración

`format.duration`

Formatea segundos como duración legible

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | Duración en segundos |
| `format` | string | No | `short` | Duración en segundos |
| `show_zero` | boolean | No | `False` | Mostrar unidades que son cero |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Mostrar unidades que son cero |
| `original` | number | Cadena de duración formateada |
| `parts` | object | Cadena de duración formateada |

### Formatear Tamaño de Archivo

`format.filesize`

Formatea bytes como tamaño de archivo legible

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bytes` | number | Yes | - | Tamaño en bytes |
| `binary` | boolean | No | `False` | Tamaño en bytes |
| `decimal_places` | number | No | `2` | Usar unidades binarias (KiB, MiB) en lugar de decimales (KB, MB) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Número de decimales |
| `original` | number | Cadena de tamaño de archivo formateada |
| `unit` | string | Cadena de tamaño de archivo formateada |
| `value` | number | Bytes originales |

### Formatear Número

`format.number`

Formatea números con separadores y decimales

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Número a formatear |
| `decimal_places` | number | No | `2` | Número a formatear |
| `thousand_separator` | string | No | `,` | Número de decimales |
| `decimal_separator` | string | No | `.` | Separador para miles |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Separador para decimales |
| `original` | number | Cadena de número formateada |

### Formatear Porcentaje

`format.percentage`

Formatea números como porcentajes

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | number | Yes | - | Valor a formatear como porcentaje |
| `is_ratio` | boolean | No | `True` | Valor a formatear como porcentaje |
| `decimal_places` | number | No | `1` | La entrada es una proporción (0-1) que necesita multiplicarse por 100 |
| `include_sign` | boolean | No | `False` | Número de decimales |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Incluir signo + para valores positivos |
| `original` | number | Cadena de porcentaje formateada |
| `numeric` | number | Cadena de porcentaje formateada |
