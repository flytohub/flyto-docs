# Testing

Assertion utilities: equal, contains, length, true, not null, greater than.

**6 modules**

| Module | Description |
|--------|-------------|
| [Asercja zawiera](#asercja-zawiera) | Asercja, ze kolekcja zawiera wartosc |
| [Asercja rownosci](#asercja-rownosci) | Asercja, ze dwie wartosci sa rowne |
| [Asercja wieksze niz](#asercja-wieksze-niz) | Asercja, ze wartosc jest wieksza od innej |
| [Asercja dlugosci](#asercja-dlugosci) | Asercja, ze kolekcja ma oczekiwana dlugosc |
| [Asercja nie-null](#asercja-nie-null) | Asercja, ze wartosc nie jest null lub undefined |
| [Asercja prawdy](#asercja-prawdy) | Asercja, ze warunek jest prawdziwy |

## Modules

### Asercja zawiera

`test.assert_contains`

Asercja, ze kolekcja zawiera wartosc

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | Kolekcja do przeszukania |
| `value` | ['string', 'number', 'boolean'] | Yes | - | Kolekcja do przeszukania |
| `message` | string | No | - | Wartosc do znalezienia |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Niestandardowy komunikat bledu |
| `collection` | ['array', 'string'] | Czy asercja przeszla |
| `value` | ['string', 'number', 'boolean'] | Asercja, ze kolekcja zawiera wartosc |
| `message` | string | Asercja, ze kolekcja zawiera wartosc |

### Asercja rownosci

`test.assert_equal`

Asercja, ze dwie wartosci sa rowne

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | Rzeczywista wartosc |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | Rzeczywista wartosc |
| `message` | string | No | - | Oczekiwana wartosc |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Niestandardowy komunikat bledu |
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Czy asercja przeszla |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Asercja, ze dwie wartosci sa rowne |
| `message` | string | Asercja, ze dwie wartosci sa rowne |

### Asercja wieksze niz

`test.assert_greater_than`

Asercja, ze wartosc jest wieksza od innej

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | number | Yes | - | Rzeczywista wartosc |
| `threshold` | number | Yes | - | Rzeczywista wartosc |
| `message` | string | No | - | Wartosc progowa |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Niestandardowy komunikat bledu |
| `actual` | number | Czy asercja przeszla |
| `threshold` | number | Asercja, ze wartosc jest wieksza od innej |
| `message` | string | Asercja, ze wartosc jest wieksza od innej |

### Asercja dlugosci

`test.assert_length`

Asercja, ze kolekcja ma oczekiwana dlugosc

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | Kolekcja do sprawdzenia |
| `expected_length` | number | Yes | - | Kolekcja do sprawdzenia |
| `message` | string | No | - | Oczekiwana dlugosc |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Niestandardowy komunikat bledu |
| `actual_length` | number | Niestandardowy komunikat bledu |
| `expected_length` | number | Asercja, ze kolekcja ma oczekiwana dlugosc |
| `message` | string | Asercja, ze kolekcja ma oczekiwana dlugosc |

### Asercja nie-null

`test.assert_not_null`

Asercja, ze wartosc nie jest null lub undefined

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | ['string', 'number', 'boolean', 'object', 'array', 'null'] | Yes | - | Wartosc do sprawdzenia |
| `message` | string | No | - | Wartosc do sprawdzenia |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Asercja, ze wartosc nie jest null lub undefined |
| `message` | string | Asercja, ze wartosc nie jest null lub undefined |

### Asercja prawdy

`test.assert_true`

Asercja, ze warunek jest prawdziwy

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | boolean | Yes | - | Warunek do sprawdzenia |
| `message` | string | No | - | Warunek do sprawdzenia |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Asercja, ze warunek jest prawdziwy |
| `message` | string | Asercja, ze warunek jest prawdziwy |
