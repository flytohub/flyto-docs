# Testing

Assertion utilities: equal, contains, length, true, not null, greater than.

**6 modules**

| Module | Description |
|--------|-------------|
| [Verifica Contiene](#verifica-contiene) | Verifica che una collezione contenga un valore |
| [Verifica Uguale](#verifica-uguale) | Verifica che due valori siano uguali |
| [Verifica Maggiore Di](#verifica-maggiore-di) | Verifica che un valore sia maggiore di un altro |
| [Verifica Lunghezza](#verifica-lunghezza) | Verifica che una collezione abbia lunghezza attesa |
| [Verifica Non Null](#verifica-non-null) | Verifica che un valore non sia null o undefined |
| [Verifica True](#verifica-true) | Verifica che una condizione sia vera |

## Modules

### Verifica Contiene

`test.assert_contains`

Verifica che una collezione contenga un valore

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | Collezione in cui cercare |
| `value` | ['string', 'number', 'boolean'] | Yes | - | Collezione in cui cercare |
| `message` | string | No | - | Valore da trovare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Messaggio errore personalizzato |
| `collection` | ['array', 'string'] | Se l'asserzione e passata |
| `value` | ['string', 'number', 'boolean'] | Verifica che una collezione contenga un valore |
| `message` | string | Verifica che una collezione contenga un valore |

### Verifica Uguale

`test.assert_equal`

Verifica che due valori siano uguali

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | Valore effettivo |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | Valore effettivo |
| `message` | string | No | - | Valore atteso |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Messaggio errore personalizzato |
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Se l'asserzione e passata |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Verifica che due valori siano uguali |
| `message` | string | Verifica che due valori siano uguali |

### Verifica Maggiore Di

`test.assert_greater_than`

Verifica che un valore sia maggiore di un altro

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | number | Yes | - | Valore effettivo |
| `threshold` | number | Yes | - | Valore effettivo |
| `message` | string | No | - | Valore soglia |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Messaggio errore personalizzato |
| `actual` | number | Se l'asserzione e passata |
| `threshold` | number | Verifica che un valore sia maggiore di un altro |
| `message` | string | Verifica che un valore sia maggiore di un altro |

### Verifica Lunghezza

`test.assert_length`

Verifica che una collezione abbia lunghezza attesa

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | Collezione da verificare |
| `expected_length` | number | Yes | - | Collezione da verificare |
| `message` | string | No | - | Lunghezza attesa |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Messaggio errore personalizzato |
| `actual_length` | number | Messaggio errore personalizzato |
| `expected_length` | number | Verifica che una collezione abbia lunghezza attesa |
| `message` | string | Verifica che una collezione abbia lunghezza attesa |

### Verifica Non Null

`test.assert_not_null`

Verifica che un valore non sia null o undefined

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | ['string', 'number', 'boolean', 'object', 'array', 'null'] | Yes | - | Valore da verificare |
| `message` | string | No | - | Valore da verificare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Verifica che un valore non sia null o undefined |
| `message` | string | Verifica che un valore non sia null o undefined |

### Verifica True

`test.assert_true`

Verifica che una condizione sia vera

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | boolean | Yes | - | Condizione da verificare |
| `message` | string | No | - | Condizione da verificare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Verifica che una condizione sia vera |
| `message` | string | Verifica che una condizione sia vera |
