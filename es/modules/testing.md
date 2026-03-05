# Testing

Assertion utilities: equal, contains, length, true, not null, greater than.

**6 modules**

| Module | Description |
|--------|-------------|
| [Afirmar contiene](#afirmar-contiene) | Afirmar que una coleccion contiene un valor |
| [Afirmar igual](#afirmar-igual) | Afirmar que dos valores son iguales |
| [Afirmar mayor que](#afirmar-mayor-que) | Afirmar que un valor es mayor que otro |
| [Afirmar longitud](#afirmar-longitud) | Afirmar que una coleccion tiene longitud esperada |
| [Afirmar no nulo](#afirmar-no-nulo) | Afirmar que un valor no es nulo o indefinido |
| [Afirmar verdadero](#afirmar-verdadero) | Afirmar que una condicion es verdadera |

## Modules

### Afirmar contiene

`test.assert_contains`

Afirmar que una coleccion contiene un valor

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | Coleccion donde buscar |
| `value` | ['string', 'number', 'boolean'] | Yes | - | Coleccion donde buscar |
| `message` | string | No | - | Valor a encontrar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Mensaje de error personalizado |
| `collection` | ['array', 'string'] | Si la afirmacion paso |
| `value` | ['string', 'number', 'boolean'] | Afirmar que una coleccion contiene un valor |
| `message` | string | Afirmar que una coleccion contiene un valor |

### Afirmar igual

`test.assert_equal`

Afirmar que dos valores son iguales

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | Valor actual |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | Valor actual |
| `message` | string | No | - | Valor esperado |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Mensaje de error personalizado |
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Si la afirmacion paso |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Afirmar que dos valores son iguales |
| `message` | string | Afirmar que dos valores son iguales |

### Afirmar mayor que

`test.assert_greater_than`

Afirmar que un valor es mayor que otro

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | number | Yes | - | Valor actual |
| `threshold` | number | Yes | - | Valor actual |
| `message` | string | No | - | Valor umbral |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Mensaje de error personalizado |
| `actual` | number | Si la afirmacion paso |
| `threshold` | number | Afirmar que un valor es mayor que otro |
| `message` | string | Afirmar que un valor es mayor que otro |

### Afirmar longitud

`test.assert_length`

Afirmar que una coleccion tiene longitud esperada

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | Coleccion a verificar |
| `expected_length` | number | Yes | - | Coleccion a verificar |
| `message` | string | No | - | Longitud esperada |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Mensaje de error personalizado |
| `actual_length` | number | Mensaje de error personalizado |
| `expected_length` | number | Afirmar que una coleccion tiene longitud esperada |
| `message` | string | Afirmar que una coleccion tiene longitud esperada |

### Afirmar no nulo

`test.assert_not_null`

Afirmar que un valor no es nulo o indefinido

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | ['string', 'number', 'boolean', 'object', 'array', 'null'] | Yes | - | Valor a verificar |
| `message` | string | No | - | Valor a verificar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Afirmar que un valor no es nulo o indefinido |
| `message` | string | Afirmar que un valor no es nulo o indefinido |

### Afirmar verdadero

`test.assert_true`

Afirmar que una condicion es verdadera

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | boolean | Yes | - | Condicion a verificar |
| `message` | string | No | - | Condicion a verificar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Afirmar que una condicion es verdadera |
| `message` | string | Afirmar que una condicion es verdadera |
