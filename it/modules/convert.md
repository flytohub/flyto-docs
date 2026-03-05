# Convert

Type casting between data types.

**5 modules**

| Module | Description |
|--------|-------------|
| [In Array](#in-array) | Converti il valore in un array |
| [In Booleano](#in-booleano) | Converti il valore in booleano |
| [In Numero](#in-numero) | Converti il valore in numero |
| [In Oggetto](#in-oggetto) | Converti il valore in oggetto |
| [In Stringa](#in-stringa) | Converti qualsiasi valore in stringa |

## Modules

### In Array

`convert.to_array`

Converti il valore in un array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valore da convertire |
| `split_string` | boolean | No | `False` | Valore da convertire |
| `delimiter` | string | No | - | Dividi la stringa in caratteri |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Delimitatore per la divisione delle stringhe |
| `length` | number | Array convertito |
| `original_type` | string | Array convertito |

### In Booleano

`convert.to_boolean`

Converti il valore in booleano

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valore da convertire |
| `strict` | boolean | No | `False` | Valore da convertire |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Accetta solo stringhe true/false |
| `original_type` | string | Booleano convertito |

### In Numero

`convert.to_number`

Converti il valore in numero

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valore da convertire |
| `default` | number | No | `0` | Valore da convertire |
| `integer` | boolean | No | `False` | Valore predefinito se la conversione fallisce |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Converti in intero |
| `success` | boolean | Numero convertito |
| `original_type` | string | Numero convertito |

### In Oggetto

`convert.to_object`

Converti il valore in oggetto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valore da convertire |
| `key_name` | string | No | `value` | Valore da convertire |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Nome chiave per avvolgere i non-oggetti |
| `keys` | array | Oggetto convertito |
| `original_type` | string | Oggetto convertito |

### In Stringa

`convert.to_string`

Converti qualsiasi valore in stringa

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valore da convertire |
| `pretty` | boolean | No | `False` | Valore da convertire |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Formatta oggetti/array con indentazione |
| `original_type` | string | Rappresentazione in stringa |
