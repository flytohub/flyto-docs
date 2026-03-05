# Check

Runtime type checking utilities.

**7 modules**

| Module | Description |
|--------|-------------|
| [क्या Array है](#क्या-array-है) | जांचें कि कोई मान एक array है |
| [क्या खाली है](#क्या-खाली-है) | जांचें कि कोई मान खाली है |
| [क्या Null है](#क्या-null-है) | जांचें कि कोई मान null/None है |
| [क्या संख्या है](#क्या-संख्या-है) | जांचें कि कोई मान एक संख्या है |
| [क्या Object है](#क्या-object-है) | जांचें कि कोई मान एक object है |
| [क्या String है](#क्या-string-है) | जांचें कि कोई मान एक string है |
| [प्रकार](#प्रकार) | किसी मान का प्रकार प्राप्त करें |

## Modules

### क्या Array है

`check.is_array`

जांचें कि कोई मान एक array है

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | जांचने के लिए मान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_array` | boolean | जांचने के लिए मान |
| `length` | number | क्या मान एक array है |

### क्या खाली है

`check.is_empty`

जांचें कि कोई मान खाली है

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | जांचने के लिए मान |
| `trim_strings` | boolean | No | `True` | जांचने के लिए मान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_empty` | boolean | केवल whitespace वाले स्ट्रिंग्स को खाली मानें |
| `type` | string | क्या मान खाली है |

### क्या Null है

`check.is_null`

जांचें कि कोई मान null/None है

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | No | - | जांचने के लिए मान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_null` | boolean | जांचने के लिए मान |

### क्या संख्या है

`check.is_number`

जांचें कि कोई मान एक संख्या है

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | जांचने के लिए मान |
| `parse_string` | boolean | No | `False` | जांचने के लिए मान |
| `integer_only` | boolean | No | `False` | संख्यात्मक स्ट्रिंग्स को संख्या मानें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_number` | boolean | केवल पूर्णांक स्वीकार करें |
| `is_integer` | boolean | क्या मान एक संख्या है |
| `is_float` | boolean | क्या मान एक संख्या है |

### क्या Object है

`check.is_object`

जांचें कि कोई मान एक object है

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | जांचने के लिए मान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_object` | boolean | जांचने के लिए मान |
| `keys` | array | क्या मान एक object है |

### क्या String है

`check.is_string`

जांचें कि कोई मान एक string है

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | जांचने के लिए मान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_string` | boolean | जांचने के लिए मान |
| `length` | number | क्या मान एक string है |

### प्रकार

`check.type_of`

किसी मान का प्रकार प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | No | - | जांचने के लिए मान |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | जांचने के लिए मान |
| `is_primitive` | boolean | प्रकार का नाम |
