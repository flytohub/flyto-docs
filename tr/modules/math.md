# Math

Basic math operations: abs, ceil, floor, power, round.

**5 modules**

| Module | Description |
|--------|-------------|
| [Mutlak Değer](#mutlak-değer) | Sayının mutlak değerini al |
| [Tavan Sayı](#tavan-sayı) | Sayıyı en yakın tam sayıya yukarı yuvarla |
| [Taban Sayı](#taban-sayı) | Sayıyı en yakın tam sayıya aşağı yuvarla |
| [Üs/Kuvvet](#üskuvvet) | Sayıyı bir üsse yükselt |
| [Sayı Yuvarla](#sayı-yuvarla) | Sayıyı belirtilen ondalık basamağa yuvarla |

## Modules

### Mutlak Değer

`math.abs`

Sayının mutlak değerini al

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Mutlak değer |
| `original` | number | Mutlak değer |

**Example:** Absolute of negative number

```yaml
number: -5
```

**Example:** Absolute of positive number

```yaml
number: 3.14
```

### Tavan Sayı

`math.ceil`

Sayıyı en yakın tam sayıya yukarı yuvarla

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Tavan değeri |
| `original` | number | Tavan değeri |

**Example:** Ceiling positive number

```yaml
number: 3.2
```

**Example:** Ceiling negative number

```yaml
number: -2.7
```

### Taban Sayı

`math.floor`

Sayıyı en yakın tam sayıya aşağı yuvarla

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Taban değeri |
| `original` | number | Taban değeri |

**Example:** Floor positive number

```yaml
number: 3.7
```

**Example:** Floor negative number

```yaml
number: -2.3
```

### Üs/Kuvvet

`math.power`

Sayıyı bir üsse yükselt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `base` | number | Yes | - | Base number |
| `exponent` | number | Yes | - | Power to raise to |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Tabanın üsse yükseltilmiş sonucu |
| `base` | number | Tabanın üsse yükseltilmiş sonucu |
| `exponent` | number | Tabanın üsse yükseltilmiş sonucu |

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

### Sayı Yuvarla

`math.round`

Sayıyı belirtilen ondalık basamağa yuvarla

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |
| `decimals` | number | No | `0` | Number of decimal places |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Yuvarlanmış değer |
| `original` | number | Yuvarlanmış değer |
| `decimals` | number | Yuvarlanmış değer |

**Example:** Round to integer

```yaml
number: 3.7
```

**Example:** Round to 2 decimal places

```yaml
number: 3.14159
decimals: 2
```
