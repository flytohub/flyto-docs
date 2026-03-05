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
| `split_string` | boolean | No | `False` | Value to convert |
| `delimiter` | string | No | - | Split string into characters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Delimiter for string splitting |
| `length` | number | Converted array |
| `original_type` | string | Converted array |

### To Boolean

`convert.to_boolean`

Convert value to boolean

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Value to convert |
| `strict` | boolean | No | `False` | Value to convert |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Only accept true/false strings |
| `original_type` | string | Converted boolean |

### To Number

`convert.to_number`

Convert value to number

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Value to convert |
| `default` | number | No | `0` | Value to convert |
| `integer` | boolean | No | `False` | Default value if conversion fails |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Convert to integer |
| `success` | boolean | Converted number |
| `original_type` | string | Converted number |

### To Object

`convert.to_object`

Convert value to object

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Value to convert |
| `key_name` | string | No | `value` | Value to convert |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Key name for wrapping non-objects |
| `keys` | array | Converted object |
| `original_type` | string | Converted object |

### To String

`convert.to_string`

Convert any value to string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Value to convert |
| `pretty` | boolean | No | `False` | Value to convert |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Format objects/arrays with indentation |
| `original_type` | string | String representation |
