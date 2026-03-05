# Object Operations

Deep merge, flatten, dot-path get/set, and unflatten.

**5 modules**

| Module | Description |
|--------|-------------|
| [Mescla Profunda](#mescla-profunda) | Mesclar profundamente vários objetos |
| [Achatamento de Objeto](#achatamento-de-objeto) | Achatamento de objeto aninhado para um único nível |
| [Obter Valor](#obter-valor) | Obter valor do objeto pelo caminho |
| [Definir Valor](#definir-valor) | Definir valor no objeto pelo caminho |
| [Desfazer Achatamento de Objeto](#desfazer-achatamento-de-objeto) | Desfazer achatamento de objeto com notação de ponto para aninhado |

## Modules

### Mescla Profunda

`object.deep_merge`

Mesclar profundamente vários objetos

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | Array de objetos para mesclar |
| `array_merge` | string | No | `replace` | Array de objetos para mesclar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Objeto mesclado |

### Achatamento de Objeto

`object.flatten`

Achatamento de objeto aninhado para um único nível

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Objeto aninhado para achatar |
| `separator` | string | No | `.` | Objeto aninhado para achatar |
| `max_depth` | number | No | `0` | Separador de chave |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Profundidade máxima para achatar (0 = ilimitado) |
| `keys` | array | Objeto achatado |

### Obter Valor

`object.get`

Obter valor do objeto pelo caminho

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Objeto de onde obter o valor |
| `path` | string | Yes | - | Objeto de onde obter o valor |
| `default` | any | No | - | Caminho em notação de ponto |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | any | Valor padrão se o caminho não for encontrado |
| `found` | boolean | Valor recuperado |

### Definir Valor

`object.set`

Definir valor no objeto pelo caminho

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Objeto a modificar |
| `path` | string | Yes | - | Objeto a modificar |
| `value` | any | Yes | - | Caminho em notação de ponto |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Valor a definir |

### Desfazer Achatamento de Objeto

`object.unflatten`

Desfazer achatamento de objeto com notação de ponto para aninhado

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Objeto achatado para desfazer |
| `separator` | string | No | `.` | Objeto achatado para desfazer |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Separador de chave |
