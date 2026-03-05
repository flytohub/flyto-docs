# Check

Runtime type checking utilities.

**7 modules**

| Module | Description |
|--------|-------------|
| [È Array](#è-array) | Verifica se un valore è un array |
| [È Vuoto](#è-vuoto) | Verifica se un valore è vuoto |
| [È Null](#è-null) | Verifica se un valore è null/None |
| [È Numero](#è-numero) | Verifica se un valore è un numero |
| [È Oggetto](#è-oggetto) | Verifica se un valore è un oggetto |
| [È Stringa](#è-stringa) | Verifica se un valore è una stringa |
| [Tipo Di](#tipo-di) | Ottieni il tipo di un valore |

## Modules

### È Array

`check.is_array`

Verifica se un valore è un array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valore da verificare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_array` | boolean | Valore da verificare |
| `length` | number | Se il valore è un array |

### È Vuoto

`check.is_empty`

Verifica se un valore è vuoto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valore da verificare |
| `trim_strings` | boolean | No | `True` | Valore da verificare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_empty` | boolean | Considera le stringhe solo con spazi come vuote |
| `type` | string | Se il valore è vuoto |

### È Null

`check.is_null`

Verifica se un valore è null/None

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | No | - | Valore da verificare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_null` | boolean | Valore da verificare |

### È Numero

`check.is_number`

Verifica se un valore è un numero

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valore da verificare |
| `parse_string` | boolean | No | `False` | Valore da verificare |
| `integer_only` | boolean | No | `False` | Considera le stringhe numeriche come numeri |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_number` | boolean | Accetta solo interi |
| `is_integer` | boolean | Se il valore è un numero |
| `is_float` | boolean | Se il valore è un numero |

### È Oggetto

`check.is_object`

Verifica se un valore è un oggetto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valore da verificare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_object` | boolean | Valore da verificare |
| `keys` | array | Se il valore è un oggetto |

### È Stringa

`check.is_string`

Verifica se un valore è una stringa

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valore da verificare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_string` | boolean | Valore da verificare |
| `length` | number | Se il valore è una stringa |

### Tipo Di

`check.type_of`

Ottieni il tipo di un valore

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | No | - | Valore da verificare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Valore da verificare |
| `is_primitive` | boolean | Nome del tipo |
