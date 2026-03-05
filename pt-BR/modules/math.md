# Math

Basic math operations: abs, ceil, floor, power, round.

**5 modules**

| Module | Description |
|--------|-------------|
| [Valor Absoluto](#valor-absoluto) | Obter valor absoluto de um numero |
| [Arredondar para Cima](#arredondar-para-cima) | Arredondar numero para cima para inteiro mais proximo |
| [Arredondar para Baixo](#arredondar-para-baixo) | Arredondar numero para baixo para inteiro mais proximo |
| [Potencia/Expoente](#potenciaexpoente) | Elevar numero a uma potencia |
| [Arredondar Numero](#arredondar-numero) | Arredondar numero para casas decimais especificadas |

## Modules

### Valor Absoluto

`math.abs`

Obter valor absoluto de um numero

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Valor absoluto |
| `original` | number | Valor absoluto |

**Example:** Absolute of negative number

```yaml
number: -5
```

**Example:** Absolute of positive number

```yaml
number: 3.14
```

### Arredondar para Cima

`math.ceil`

Arredondar numero para cima para inteiro mais proximo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Valor arredondado para cima |
| `original` | number | Valor arredondado para cima |

**Example:** Ceiling positive number

```yaml
number: 3.2
```

**Example:** Ceiling negative number

```yaml
number: -2.7
```

### Arredondar para Baixo

`math.floor`

Arredondar numero para baixo para inteiro mais proximo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Valor arredondado para baixo |
| `original` | number | Valor arredondado para baixo |

**Example:** Floor positive number

```yaml
number: 3.7
```

**Example:** Floor negative number

```yaml
number: -2.3
```

### Potencia/Expoente

`math.power`

Elevar numero a uma potencia

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `base` | number | Yes | - | Base number |
| `exponent` | number | Yes | - | Power to raise to |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Resultado da base elevada ao expoente |
| `base` | number | Resultado da base elevada ao expoente |
| `exponent` | number | Resultado da base elevada ao expoente |

**Example:** Square a number

```yaml
base: 5
exponent: 2
```

**Example:** Cube root

```yaml
base: 27
exponent: 0.333333
```

### Arredondar Numero

`math.round`

Arredondar numero para casas decimais especificadas

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |
| `decimals` | number | No | `0` | Number of decimal places |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Valor arredondado |
| `original` | number | Valor arredondado |
| `decimals` | number | Valor arredondado |

**Example:** Round to integer

```yaml
number: 3.7
```

**Example:** Round to 2 decimal places

```yaml
number: 3.14159
decimals: 2
```
