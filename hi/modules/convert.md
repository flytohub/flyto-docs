# Convert

Type casting between data types.

**5 modules**

| Module | Description |
|--------|-------------|
| [To Array](#to-array) | Convert value to array |
| [To Boolean](#to-boolean) | Convert value to boolean |
| [To Number](#to-number) | Convert value to number |
| [To Object](#to-object) | Convert value to object |
| [To String](#to-string) | Convert any value to string |

## Modules

### To Array

`convert.to_array`

Convert value to array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Value to convert |
| `split_string` | boolean | No | `False` | Split string into characters |
| `delimiter` | string | No | - | Delimiter for string splitting |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Converted array |
| `length` | number | Array length |
| `original_type` | string | Original value type |

### To Boolean

`convert.to_boolean`

Convert value to boolean

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Value to convert |
| `strict` | boolean | No | `False` | Only accept true/false strings |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Converted boolean |
| `original_type` | string | Original value type |

### To Number

`convert.to_number`

Convert value to number

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Value to convert |
| `default` | number | No | `0` | Default value if conversion fails |
| `integer` | boolean | No | `False` | Convert to integer |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Converted number |
| `success` | boolean | Whether conversion succeeded |
| `original_type` | string | Original value type |

### To Object

`convert.to_object`

Convert value to object

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Value to convert |
| `key_name` | string | No | `value` | Key name for wrapping non-objects |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Converted object |
| `keys` | array | Object keys |
| `original_type` | string | Original value type |

### To String

`convert.to_string`

Convert any value to string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Value to convert |
| `pretty` | boolean | No | `False` | Format objects/arrays with indentation |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | String representation |
| `original_type` | string | Original value type |
