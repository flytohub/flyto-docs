# Math

Basic math operations: abs, ceil, floor, power, round.

**5 modules**

| Module | Description |
|--------|-------------|
| [Absolute Value](#absolute-value) | Get absolute value of a number |
| [Ceiling Number](#ceiling-number) | Round number up to nearest integer |
| [Floor Number](#floor-number) | Round number down to nearest integer |
| [Power/Exponent](#powerexponent) | Raise number to a power |
| [Round Number](#round-number) | Round number to specified decimal places |

## Modules

### Absolute Value

`math.abs`

Get absolute value of a number

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Absolute value |
| `original` | number | Absolute value |

**Example:** Absolute of negative number

```yaml
number: -5
```

**Example:** Absolute of positive number

```yaml
number: 3.14
```

### Ceiling Number

`math.ceil`

Round number up to nearest integer

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Ceiling value |
| `original` | number | Ceiling value |

**Example:** Ceiling positive number

```yaml
number: 3.2
```

**Example:** Ceiling negative number

```yaml
number: -2.7
```

### Floor Number

`math.floor`

Round number down to nearest integer

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Floored value |
| `original` | number | Floored value |

**Example:** Floor positive number

```yaml
number: 3.7
```

**Example:** Floor negative number

```yaml
number: -2.3
```

### Power/Exponent

`math.power`

Raise number to a power

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `base` | number | Yes | - | Base number |
| `exponent` | number | Yes | - | Power to raise to |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Result of base raised to exponent |
| `base` | number | Result of base raised to exponent |
| `exponent` | number | Result of base raised to exponent |

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

### Round Number

`math.round`

Round number to specified decimal places

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |
| `decimals` | number | No | `0` | Number of decimal places |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Rounded value |
| `original` | number | Rounded value |
| `decimals` | number | Rounded value |

**Example:** Round to integer

```yaml
number: 3.7
```

**Example:** Round to 2 decimal places

```yaml
number: 3.14159
decimals: 2
```
