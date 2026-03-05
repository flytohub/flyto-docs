# Math

Basic math operations: abs, ceil, floor, power, round.

**5 modules**

| Module | Description |
|--------|-------------|
| [Valor absoluto](#valor-absoluto) | Obtener valor absoluto de un numero |
| [Techo](#techo) | Redondear numero hacia arriba al entero mas cercano |
| [Piso](#piso) | Redondear numero hacia abajo al entero mas cercano |
| [Potencia/Exponente](#potenciaexponente) | Elevar numero a una potencia |
| [Redondear numero](#redondear-numero) | Redondear numero a decimales especificados |

## Modules

### Valor absoluto

`math.abs`

Obtener valor absoluto de un numero

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

### Techo

`math.ceil`

Redondear numero hacia arriba al entero mas cercano

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Valor techo |
| `original` | number | Valor techo |

**Example:** Ceiling positive number

```yaml
number: 3.2
```

**Example:** Ceiling negative number

```yaml
number: -2.7
```

### Piso

`math.floor`

Redondear numero hacia abajo al entero mas cercano

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Valor piso |
| `original` | number | Valor piso |

**Example:** Floor positive number

```yaml
number: 3.7
```

**Example:** Floor negative number

```yaml
number: -2.3
```

### Potencia/Exponente

`math.power`

Elevar numero a una potencia

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `base` | number | Yes | - | Base number |
| `exponent` | number | Yes | - | Power to raise to |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Resultado de base elevada al exponente |
| `base` | number | Resultado de base elevada al exponente |
| `exponent` | number | Resultado de base elevada al exponente |

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

### Redondear numero

`math.round`

Redondear numero a decimales especificados

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |
| `decimals` | number | No | `0` | Number of decimal places |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Valor redondeado |
| `original` | number | Valor redondeado |
| `decimals` | number | Valor redondeado |

**Example:** Round to integer

```yaml
number: 3.7
```

**Example:** Round to 2 decimal places

```yaml
number: 3.14159
decimals: 2
```
