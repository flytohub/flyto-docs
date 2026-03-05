# Math

Basic math operations: abs, ceil, floor, power, round.

**5 modules**

| Module | Description |
|--------|-------------|
| [Absolutwert](#absolutwert) | Absolutwert einer Zahl ermitteln |
| [Aufrunden](#aufrunden) | Zahl auf nächste ganze Zahl aufrunden |
| [Abrunden](#abrunden) | Zahl auf nächste ganze Zahl abrunden |
| [Potenz/Exponent](#potenzexponent) | Zahl potenzieren |
| [Zahl runden](#zahl-runden) | Zahl auf angegebene Dezimalstellen runden |

## Modules

### Absolutwert

`math.abs`

Absolutwert einer Zahl ermitteln

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Absolutwert |
| `original` | number | Absolutwert |

**Example:** Absolute of negative number

```yaml
number: -5
```

**Example:** Absolute of positive number

```yaml
number: 3.14
```

### Aufrunden

`math.ceil`

Zahl auf nächste ganze Zahl aufrunden

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Aufgerundeter Wert |
| `original` | number | Aufgerundeter Wert |

**Example:** Ceiling positive number

```yaml
number: 3.2
```

**Example:** Ceiling negative number

```yaml
number: -2.7
```

### Abrunden

`math.floor`

Zahl auf nächste ganze Zahl abrunden

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Abgerundeter Wert |
| `original` | number | Abgerundeter Wert |

**Example:** Floor positive number

```yaml
number: 3.7
```

**Example:** Floor negative number

```yaml
number: -2.3
```

### Potenz/Exponent

`math.power`

Zahl potenzieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `base` | number | Yes | - | Base number |
| `exponent` | number | Yes | - | Power to raise to |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Ergebnis von Basis hoch Exponent |
| `base` | number | Ergebnis von Basis hoch Exponent |
| `exponent` | number | Ergebnis von Basis hoch Exponent |

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

### Zahl runden

`math.round`

Zahl auf angegebene Dezimalstellen runden

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |
| `decimals` | number | No | `0` | Number of decimal places |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Gerundeter Wert |
| `original` | number | Gerundeter Wert |
| `decimals` | number | Gerundeter Wert |

**Example:** Round to integer

```yaml
number: 3.7
```

**Example:** Round to 2 decimal places

```yaml
number: 3.14159
decimals: 2
```
