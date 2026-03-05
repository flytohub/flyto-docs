# Check

Runtime type checking utilities.

**7 modules**

| Module | Description |
|--------|-------------|
| [Est un tableau](#est-un-tableau) | Vérifiez si une valeur est un tableau |
| [Est vide](#est-vide) | Vérifiez si une valeur est vide |
| [Est nul](#est-nul) | Vérifiez si une valeur est nulle |
| [Est un nombre](#est-un-nombre) | Vérifiez si une valeur est un nombre |
| [Est un objet](#est-un-objet) | Vérifiez si une valeur est un objet |
| [Est une chaîne](#est-une-chaîne) | Vérifiez si une valeur est une chaîne |
| [Type de](#type-de) | Obtenez le type d'une valeur |

## Modules

### Est un tableau

`check.is_array`

Vérifiez si une valeur est un tableau

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valeur à vérifier |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_array` | boolean | Valeur à vérifier |
| `length` | number | Si la valeur est un tableau |

### Est vide

`check.is_empty`

Vérifiez si une valeur est vide

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valeur à vérifier |
| `trim_strings` | boolean | No | `True` | Valeur à vérifier |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_empty` | boolean | Traiter les chaînes contenant uniquement des espaces comme vides |
| `type` | string | Si la valeur est vide |

### Est nul

`check.is_null`

Vérifiez si une valeur est nulle

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | No | - | Valeur à vérifier |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_null` | boolean | Valeur à vérifier |

### Est un nombre

`check.is_number`

Vérifiez si une valeur est un nombre

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valeur à vérifier |
| `parse_string` | boolean | No | `False` | Valeur à vérifier |
| `integer_only` | boolean | No | `False` | Considérer les chaînes numériques comme des nombres |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_number` | boolean | Accepter uniquement les entiers |
| `is_integer` | boolean | Si la valeur est un nombre |
| `is_float` | boolean | Si la valeur est un nombre |

### Est un objet

`check.is_object`

Vérifiez si une valeur est un objet

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valeur à vérifier |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_object` | boolean | Valeur à vérifier |
| `keys` | array | Si la valeur est un objet |

### Est une chaîne

`check.is_string`

Vérifiez si une valeur est une chaîne

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valeur à vérifier |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_string` | boolean | Valeur à vérifier |
| `length` | number | Si la valeur est une chaîne |

### Type de

`check.type_of`

Obtenez le type d'une valeur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | No | - | Valeur à vérifier |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Valeur à vérifier |
| `is_primitive` | boolean | Nom du type |
