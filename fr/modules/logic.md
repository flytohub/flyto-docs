# Logic

Boolean logic operations: AND, OR, NOT, equals, contains.

**5 modules**

| Module | Description |
|--------|-------------|
| [Logique ET](#logique-et) | Effectuer une opération logique ET |
| [Logique Contient](#logique-contient) | Vérifier si une valeur contient une autre valeur |
| [Logique Égale](#logique-égale) | Vérifier si deux valeurs sont égales |
| [Logique NON](#logique-non) | Effectuer une opération logique NON |
| [Logique OU](#logique-ou) | Effectuer une opération logique OU |

## Modules

### Logique ET

`logic.and`

Effectuer une opération logique ET

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | Valeurs booléennes à combiner avec ET |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Valeurs booléennes à combiner avec ET |
| `true_count` | number | Résultat de l'opération ET |
| `total_count` | number | Résultat de l'opération ET |

### Logique Contient

`logic.contains`

Vérifier si une valeur contient une autre valeur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `haystack` | text | Yes | - | Valeur dans laquelle rechercher (chaîne, tableau ou objet) |
| `needle` | text | Yes | - | Valeur dans laquelle rechercher (chaîne, tableau ou objet) |
| `case_sensitive` | boolean | No | `True` | Valeur à rechercher |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Recherche sensible à la casse pour les chaînes |
| `position` | number | Si la pile de foin contient l'aiguille |
| `count` | number | Si la pile de foin contient l'aiguille |

### Logique Égale

`logic.equals`

Vérifier si deux valeurs sont égales

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `a` | text | Yes | - | Première valeur à comparer |
| `b` | text | Yes | - | Première valeur à comparer |
| `strict` | boolean | No | `False` | Deuxième valeur à comparer |
| `case_sensitive` | boolean | No | `True` | Exiger le même type (pas de coercition de type) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Comparaison de chaînes sensible à la casse |
| `type_a` | string | Si les valeurs sont égales |
| `type_b` | string | Si les valeurs sont égales |

### Logique NON

`logic.not`

Effectuer une opération logique NON

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | boolean | Yes | `False` | Valeur booléenne à négativer |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Valeur booléenne à négativer |
| `original` | boolean | Résultat négatif |

### Logique OU

`logic.or`

Effectuer une opération logique OU

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | Valeurs booléennes à combiner avec OU |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Valeurs booléennes à combiner avec OU |
| `true_count` | number | Résultat de l'opération OU |
| `total_count` | number | Résultat de l'opération OU |
