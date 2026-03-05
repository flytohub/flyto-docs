# Check

Runtime type checking utilities.

**7 modules**

| Module | Description |
|--------|-------------|
| [É Array](#é-array) | Verificar se um valor é um array |
| [Está Vazio](#está-vazio) | Verificar se um valor está vazio |
| [É Nulo](#é-nulo) | Verificar se um valor é nulo/None |
| [É Número](#é-número) | Verificar se um valor é um número |
| [É Objeto](#é-objeto) | Verificar se um valor é um objeto |
| [É String](#é-string) | Verificar se um valor é uma string |
| [Tipo De](#tipo-de) | Obter o tipo de um valor |

## Modules

### É Array

`check.is_array`

Verificar se um valor é um array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valor para verificar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_array` | boolean | Valor para verificar |
| `length` | number | Se o valor é um array |

### Está Vazio

`check.is_empty`

Verificar se um valor está vazio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valor para verificar |
| `trim_strings` | boolean | No | `True` | Valor para verificar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_empty` | boolean | Tratar strings com apenas espaços como vazias |
| `type` | string | Se o valor está vazio |

### É Nulo

`check.is_null`

Verificar se um valor é nulo/None

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | No | - | Valor para verificar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_null` | boolean | Valor para verificar |

### É Número

`check.is_number`

Verificar se um valor é um número

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valor para verificar |
| `parse_string` | boolean | No | `False` | Valor para verificar |
| `integer_only` | boolean | No | `False` | Considerar strings numéricas como números |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_number` | boolean | Aceitar apenas inteiros |
| `is_integer` | boolean | Se o valor é um número |
| `is_float` | boolean | Se o valor é um número |

### É Objeto

`check.is_object`

Verificar se um valor é um objeto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valor para verificar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_object` | boolean | Valor para verificar |
| `keys` | array | Se o valor é um objeto |

### É String

`check.is_string`

Verificar se um valor é uma string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | Valor para verificar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `is_string` | boolean | Valor para verificar |
| `length` | number | Se o valor é uma string |

### Tipo De

`check.type_of`

Obter o tipo de um valor

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | No | - | Valor para verificar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Valor para verificar |
| `is_primitive` | boolean | Nome do tipo |
