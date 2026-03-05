# Format

Number, currency, duration, filesize, and percentage formatting.

**5 modules**

| Module | Description |
|--------|-------------|
| [Formatar Moeda](#formatar-moeda) | Formatar números como moeda |
| [Formatar Duração](#formatar-duração) | Formatar segundos como duração legível |
| [Formatar Tamanho de Arquivo](#formatar-tamanho-de-arquivo) | Formatar bytes como tamanho de arquivo legível |
| [Formatar Número](#formatar-número) | Formatar números com separadores e decimais |
| [Formatar Porcentagem](#formatar-porcentagem) | Formatar números como porcentagens |

## Modules

### Formatar Moeda

`format.currency`

Formatar números como moeda

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `amount` | number | Yes | - | Quantia para formatar |
| `currency` | string | No | `USD` | Quantia para formatar |
| `decimal_places` | number | No | `2` | Número de casas decimais |
| `symbol_position` | string | No | `before` | Número de casas decimais |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | String de moeda formatada |
| `original` | number | String de moeda formatada |
| `symbol` | string | String de moeda formatada |

### Formatar Duração

`format.duration`

Formatar segundos como duração legível

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | Duração em segundos |
| `format` | string | No | `short` | Duração em segundos |
| `show_zero` | boolean | No | `False` | Mostrar unidades que são zero |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Mostrar unidades que são zero |
| `original` | number | String de duração formatada |
| `parts` | object | String de duração formatada |

### Formatar Tamanho de Arquivo

`format.filesize`

Formatar bytes como tamanho de arquivo legível

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bytes` | number | Yes | - | Tamanho em bytes |
| `binary` | boolean | No | `False` | Tamanho em bytes |
| `decimal_places` | number | No | `2` | Usar unidades binárias (KiB, MiB) em vez de decimais (KB, MB) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Número de casas decimais |
| `original` | number | String de tamanho de arquivo formatada |
| `unit` | string | String de tamanho de arquivo formatada |
| `value` | number | Bytes originais |

### Formatar Número

`format.number`

Formatar números com separadores e decimais

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Número para formatar |
| `decimal_places` | number | No | `2` | Número para formatar |
| `thousand_separator` | string | No | `,` | Número de casas decimais |
| `decimal_separator` | string | No | `.` | Separador para milhares |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Separador para decimais |
| `original` | number | String de número formatada |

### Formatar Porcentagem

`format.percentage`

Formatar números como porcentagens

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | number | Yes | - | Valor para formatar como porcentagem |
| `is_ratio` | boolean | No | `True` | Valor para formatar como porcentagem |
| `decimal_places` | number | No | `1` | Entrada é uma razão (0-1) que precisa ser multiplicada por 100 |
| `include_sign` | boolean | No | `False` | Número de casas decimais |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Incluir sinal de + para valores positivos |
| `original` | number | String formatada de porcentagem |
| `numeric` | number | String formatada de porcentagem |
