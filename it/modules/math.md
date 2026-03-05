# Math

Basic math operations: abs, ceil, floor, power, round.

**5 modules**

| Module | Description |
|--------|-------------|
| [Valore Assoluto](#valore-assoluto) | Ottieni valore assoluto di un numero |
| [Arrotonda per Eccesso](#arrotonda-per-eccesso) | Arrotonda numero per eccesso all'intero piu vicino |
| [Arrotonda per Difetto](#arrotonda-per-difetto) | Arrotonda numero per difetto all'intero piu vicino |
| [Potenza/Esponente](#potenzaesponente) | Eleva numero a potenza |
| [Arrotonda Numero](#arrotonda-numero) | Arrotonda numero ai decimali specificati |

## Modules

### Valore Assoluto

`math.abs`

Ottieni valore assoluto di un numero

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Valore assoluto |
| `original` | number | Valore assoluto |

**Example:** Absolute of negative number

```yaml
number: -5
```

**Example:** Absolute of positive number

```yaml
number: 3.14
```

### Arrotonda per Eccesso

`math.ceil`

Arrotonda numero per eccesso all'intero piu vicino

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Valore arrotondato per eccesso |
| `original` | number | Valore arrotondato per eccesso |

**Example:** Ceiling positive number

```yaml
number: 3.2
```

**Example:** Ceiling negative number

```yaml
number: -2.7
```

### Arrotonda per Difetto

`math.floor`

Arrotonda numero per difetto all'intero piu vicino

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Valore arrotondato per difetto |
| `original` | number | Valore arrotondato per difetto |

**Example:** Floor positive number

```yaml
number: 3.7
```

**Example:** Floor negative number

```yaml
number: -2.3
```

### Potenza/Esponente

`math.power`

Eleva numero a potenza

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `base` | number | Yes | - | Base number |
| `exponent` | number | Yes | - | Power to raise to |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Risultato della base elevata all'esponente |
| `base` | number | Risultato della base elevata all'esponente |
| `exponent` | number | Risultato della base elevata all'esponente |

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

### Arrotonda Numero

`math.round`

Arrotonda numero ai decimali specificati

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |
| `decimals` | number | No | `0` | Number of decimal places |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Valore arrotondato |
| `original` | number | Valore arrotondato |
| `decimals` | number | Valore arrotondato |

**Example:** Round to integer

```yaml
number: 3.7
```

**Example:** Round to 2 decimal places

```yaml
number: 3.14159
decimals: 2
```
