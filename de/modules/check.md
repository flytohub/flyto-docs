# Check

Runtime type checking utilities.

**7 modules**

| Module | Description |
|--------|-------------|
| [Ist Array](#ist-array) | Prüfen, ob ein Wert ein Array ist |
| [Ist Leer](#ist-leer) | Prüfen, ob ein Wert leer ist |
| [Ist Null](#ist-null) | Prüfen, ob ein Wert null/None ist |
| [Ist Zahl](#ist-zahl) | Prüfen, ob ein Wert eine Zahl ist |
| [Ist Objekt](#ist-objekt) | Prüfen, ob ein Wert ein Objekt ist |
| [Ist Zeichenfolge](#ist-zeichenfolge) | Prüfen, ob ein Wert eine Zeichenfolge ist |
| [Typ von](#typ-von) | Den Typ eines Wertes ermitteln |

## Modules

### Ist Array

`check.is_array`

Prüfen, ob ein Wert ein Array ist

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Zu überprüfender Wert |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_array` | boolean | Zu überprüfender Wert |
| `length` | number | Ob Wert ein Array ist |

### Ist Leer

`check.is_empty`

Prüfen, ob ein Wert leer ist

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Zu überprüfender Wert |
| `trim_strings` | boolean | No | `True` | Zu überprüfender Wert |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_empty` | boolean | Nur Leerzeichen als leer behandeln |
| `type` | string | Ob Wert leer ist |

### Ist Null

`check.is_null`

Prüfen, ob ein Wert null/None ist

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | No | - | Zu überprüfender Wert |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_null` | boolean | Zu überprüfender Wert |

### Ist Zahl

`check.is_number`

Prüfen, ob ein Wert eine Zahl ist

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Zu überprüfender Wert |
| `parse_string` | boolean | No | `False` | Zu überprüfender Wert |
| `integer_only` | boolean | No | `False` | Numerische Zeichenfolgen als Zahlen betrachten |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_number` | boolean | Nur ganze Zahlen akzeptieren |
| `is_integer` | boolean | Ob Wert eine Zahl ist |
| `is_float` | boolean | Ob Wert eine Zahl ist |

### Ist Objekt

`check.is_object`

Prüfen, ob ein Wert ein Objekt ist

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Zu überprüfender Wert |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_object` | boolean | Zu überprüfender Wert |
| `keys` | array | Ob Wert ein Objekt ist |

### Ist Zeichenfolge

`check.is_string`

Prüfen, ob ein Wert eine Zeichenfolge ist

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Zu überprüfender Wert |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_string` | boolean | Zu überprüfender Wert |
| `length` | number | Ob Wert eine Zeichenfolge ist |

### Typ von

`check.type_of`

Den Typ eines Wertes ermitteln

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | No | - | Zu überprüfender Wert |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Zu überprüfender Wert |
| `is_primitive` | boolean | Typname |
