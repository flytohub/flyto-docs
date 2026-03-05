# Testing

Assertion utilities: equal, contains, length, true, not null, greater than.

**6 modules**

| Module | Description |
|--------|-------------|
| [Afirmar Contem](#afirmar-contem) | Afirmar que uma colecao contem um valor |
| [Afirmar Igual](#afirmar-igual) | Afirmar que dois valores sao iguais |
| [Afirmar Maior Que](#afirmar-maior-que) | Afirmar que um valor e maior que outro |
| [Afirmar Tamanho](#afirmar-tamanho) | Afirmar que uma colecao tem o tamanho esperado |
| [Afirmar Nao Nulo](#afirmar-nao-nulo) | Afirmar que um valor nao e nulo ou indefinido |
| [Afirmar Verdadeiro](#afirmar-verdadeiro) | Afirmar que uma condicao e verdadeira |

## Modules

### Afirmar Contem

`test.assert_contains`

Afirmar que uma colecao contem um valor

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | Colecao para buscar |
| `value` | ['string', 'number', 'boolean'] | Yes | - | Colecao para buscar |
| `message` | string | No | - | Valor para encontrar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Mensagem de erro personalizada |
| `collection` | ['array', 'string'] | Se a afirmacao passou |
| `value` | ['string', 'number', 'boolean'] | Afirmar que uma colecao contem um valor |
| `message` | string | Afirmar que uma colecao contem um valor |

### Afirmar Igual

`test.assert_equal`

Afirmar que dois valores sao iguais

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | Valor real |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | Valor real |
| `message` | string | No | - | Valor esperado |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Mensagem de erro personalizada |
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Se a afirmacao passou |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Afirmar que dois valores sao iguais |
| `message` | string | Afirmar que dois valores sao iguais |

### Afirmar Maior Que

`test.assert_greater_than`

Afirmar que um valor e maior que outro

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | number | Yes | - | Valor real |
| `threshold` | number | Yes | - | Valor real |
| `message` | string | No | - | Valor limite |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Mensagem de erro personalizada |
| `actual` | number | Se a afirmacao passou |
| `threshold` | number | Afirmar que um valor e maior que outro |
| `message` | string | Afirmar que um valor e maior que outro |

### Afirmar Tamanho

`test.assert_length`

Afirmar que uma colecao tem o tamanho esperado

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | Colecao para verificar |
| `expected_length` | number | Yes | - | Colecao para verificar |
| `message` | string | No | - | Tamanho esperado |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Mensagem de erro personalizada |
| `actual_length` | number | Mensagem de erro personalizada |
| `expected_length` | number | Afirmar que uma colecao tem o tamanho esperado |
| `message` | string | Afirmar que uma colecao tem o tamanho esperado |

### Afirmar Nao Nulo

`test.assert_not_null`

Afirmar que um valor nao e nulo ou indefinido

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | ['string', 'number', 'boolean', 'object', 'array', 'null'] | Yes | - | Valor para verificar |
| `message` | string | No | - | Valor para verificar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Afirmar que um valor nao e nulo ou indefinido |
| `message` | string | Afirmar que um valor nao e nulo ou indefinido |

### Afirmar Verdadeiro

`test.assert_true`

Afirmar que uma condicao e verdadeira

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | boolean | Yes | - | Condicao para verificar |
| `message` | string | No | - | Condicao para verificar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Afirmar que uma condicao e verdadeira |
| `message` | string | Afirmar que uma condicao e verdadeira |
