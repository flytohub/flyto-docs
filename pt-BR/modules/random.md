# Random

Random number, UUID, choice, and shuffle.

**4 modules**

| Module | Description |
|--------|-------------|
| [Escolha Aleatória](#escolha-aleatória) | Selecionar elemento(s) aleatório(s) de um array |
| [Número Aleatório](#número-aleatório) | Gerar número aleatório dentro de um intervalo |
| [Embaralhar Array](#embaralhar-array) | Embaralhar elementos do array aleatoriamente |
| [Gerar UUID](#gerar-uuid) | Gerar UUID aleatório (v4) |

## Modules

### Escolha Aleatória

`random.choice`

Selecionar elemento(s) aleatório(s) de um array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array para escolher |
| `count` | number | No | `1` | Array para escolher |
| `unique` | boolean | No | `True` | Número de elementos para escolher |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `choice` | any | Escolher elementos únicos (sem duplicatas) |
| `count` | number | Elemento(s) selecionado(s) |

### Número Aleatório

`random.number`

Gerar número aleatório dentro de um intervalo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | Valor mínimo (inclusivo) |
| `max` | number | No | `100` | Valor mínimo (inclusivo) |
| `integer` | boolean | No | `True` | Valor máximo (inclusivo) |
| `precision` | number | No | `2` | Gerar apenas inteiros |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `number` | number | Casas decimais para float |
| `min` | number | Número aleatório gerado |
| `max` | number | Número aleatório gerado |

### Embaralhar Array

`random.shuffle`

Embaralhar elementos do array aleatoriamente

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array para embaralhar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Array para embaralhar |
| `length` | number | Array embaralhado |

### Gerar UUID

`random.uuid`

Gerar UUID aleatório (v4)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `uppercase` | boolean | No | `False` | Retornar UUID em maiúsculas |
| `remove_hyphens` | boolean | No | `False` | Retornar UUID em maiúsculas |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `uuid` | string | Remover hífens do UUID |
| `version` | number | UUID gerado |
