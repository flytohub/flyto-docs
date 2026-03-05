# Convert

Type casting between data types.

**5 modules**

| Module | Description |
|--------|-------------|
| [En Tableau](#en-tableau) | Convertir la valeur en tableau |
| [En Booléen](#en-booléen) | Convertir la valeur en booléen |
| [En Nombre](#en-nombre) | Convertir la valeur en nombre |
| [En Objet](#en-objet) | Convertir la valeur en objet |
| [En Chaîne](#en-chaîne) | Convertir toute valeur en chaîne |

## Modules

### En Tableau

`convert.to_array`

Convertir la valeur en tableau

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valeur à convertir |
| `split_string` | boolean | No | `False` | Valeur à convertir |
| `delimiter` | string | No | - | Diviser la chaîne en caractères |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Délimiteur pour la division de chaîne |
| `length` | number | Tableau converti |
| `original_type` | string | Tableau converti |

### En Booléen

`convert.to_boolean`

Convertir la valeur en booléen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valeur à convertir |
| `strict` | boolean | No | `False` | Valeur à convertir |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Accepter uniquement les chaînes true/false |
| `original_type` | string | Booléen converti |

### En Nombre

`convert.to_number`

Convertir la valeur en nombre

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valeur à convertir |
| `default` | number | No | `0` | Valeur à convertir |
| `integer` | boolean | No | `False` | Valeur par défaut si la conversion échoue |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Convertir en entier |
| `success` | boolean | Nombre converti |
| `original_type` | string | Nombre converti |

### En Objet

`convert.to_object`

Convertir la valeur en objet

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valeur à convertir |
| `key_name` | string | No | `value` | Valeur à convertir |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Nom de clé pour envelopper les non-objets |
| `keys` | array | Objet converti |
| `original_type` | string | Objet converti |

### En Chaîne

`convert.to_string`

Convertir toute valeur en chaîne

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valeur à convertir |
| `pretty` | boolean | No | `False` | Valeur à convertir |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Formater les objets/tableaux avec indentation |
| `original_type` | string | Représentation en chaîne |
