# Testing

Assertion utilities: equal, contains, length, true, not null, greater than.

**6 modules**

| Module | Description |
|--------|-------------|
| [Affirmer contient](#affirmer-contient) | Affirmer qu'une collection contient une valeur |
| [Affirmer egal](#affirmer-egal) | Affirmer que deux valeurs sont egales |
| [Affirmer superieur a](#affirmer-superieur-a) | Affirmer qu'une valeur est superieure a une autre |
| [Affirmer longueur](#affirmer-longueur) | Affirmer qu'une collection a la longueur attendue |
| [Affirmer non null](#affirmer-non-null) | Affirmer qu'une valeur n'est pas null ou undefined |
| [Affirmer vrai](#affirmer-vrai) | Affirmer qu'une condition est vraie |

## Modules

### Affirmer contient

`test.assert_contains`

Affirmer qu'une collection contient une valeur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | Collection dans laquelle rechercher |
| `value` | ['string', 'number', 'boolean'] | Yes | - | Collection dans laquelle rechercher |
| `message` | string | No | - | Valeur a trouver |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Message d'erreur personnalise |
| `collection` | ['array', 'string'] | Si l'affirmation a passe |
| `value` | ['string', 'number', 'boolean'] | Affirmer qu'une collection contient une valeur |
| `message` | string | Affirmer qu'une collection contient une valeur |

### Affirmer egal

`test.assert_equal`

Affirmer que deux valeurs sont egales

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | Valeur reelle |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | Valeur reelle |
| `message` | string | No | - | Valeur attendue |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Message d'erreur personnalise |
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Si l'affirmation a passe |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Affirmer que deux valeurs sont egales |
| `message` | string | Affirmer que deux valeurs sont egales |

### Affirmer superieur a

`test.assert_greater_than`

Affirmer qu'une valeur est superieure a une autre

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | number | Yes | - | Valeur reelle |
| `threshold` | number | Yes | - | Valeur reelle |
| `message` | string | No | - | Valeur seuil |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Message d'erreur personnalise |
| `actual` | number | Si l'affirmation a passe |
| `threshold` | number | Affirmer qu'une valeur est superieure a une autre |
| `message` | string | Affirmer qu'une valeur est superieure a une autre |

### Affirmer longueur

`test.assert_length`

Affirmer qu'une collection a la longueur attendue

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | Collection a verifier |
| `expected_length` | number | Yes | - | Collection a verifier |
| `message` | string | No | - | Longueur attendue |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Message d'erreur personnalise |
| `actual_length` | number | Message d'erreur personnalise |
| `expected_length` | number | Affirmer qu'une collection a la longueur attendue |
| `message` | string | Affirmer qu'une collection a la longueur attendue |

### Affirmer non null

`test.assert_not_null`

Affirmer qu'une valeur n'est pas null ou undefined

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | ['string', 'number', 'boolean', 'object', 'array', 'null'] | Yes | - | Valeur a verifier |
| `message` | string | No | - | Valeur a verifier |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Affirmer qu'une valeur n'est pas null ou undefined |
| `message` | string | Affirmer qu'une valeur n'est pas null ou undefined |

### Affirmer vrai

`test.assert_true`

Affirmer qu'une condition est vraie

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | boolean | Yes | - | Condition a verifier |
| `message` | string | No | - | Condition a verifier |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Affirmer qu'une condition est vraie |
| `message` | string | Affirmer qu'une condition est vraie |
